'use client';

import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import FileUploadBox from '@/components/FileUploadBox';
import { 
  startExtractRawTransactions, 
  getExtractRawTransactionsStream,
  startProcessJournalEntries,
  getProcessJournalEntriesStream,
  saveAIJournal,
  type AIJournalVoucher, 
  type AIJournalTransaction,
  type RawTransaction,
  type NewPartner
} from '@/services/api';

// 기존 인터페이스는 API에서 가져온 타입으로 대체

interface ProgressData {
  processed: number;
  total: number;
}

export default function AIJournalPage() {
  const { token } = useAuth();

  const [step, setStep] = useState<'upload' | 'extracting' | 'processing' | 'result'>('upload');
  const [, setFiles] = useState<FileList | null>(null);
  const [progress, setProgress] = useState<ProgressData>({ processed: 0, total: 100 });
  const [vouchers, setVouchers] = useState<AIJournalVoucher[]>([]);
  const [, setRawTransactions] = useState<RawTransaction[]>([]);
  const [, setNewPartners] = useState<NewPartner[]>([]);
  const [stats, setStats] = useState({
    transactionCount: 0,
    newPartnerCount: 0,
    debitTotal: 0,
    creditTotal: 0,
    accuracy: 95,
  });
  const [loading, setLoading] = useState(false);
  const [_error, setError] = useState<string | null>(null);
  const [_currentStage, _setCurrentStage] = useState<string>('');

  // RawTransaction을 AIJournalTransaction으로 변환하는 함수
  const convertRawTransactionToAIJournal = (rawTransaction: RawTransaction): AIJournalTransaction => {
    // transactionType에 따라 차변/대변 결정
    const isDebit = rawTransaction.transactionType === '출금' || rawTransaction.transactionType === '출금 – 기타거래처';
    
    return {
      id: `${rawTransaction.date}_${rawTransaction.counterpartyName}_${rawTransaction.totalAmount}_${Math.random()}`,
      date: rawTransaction.date,
      description: rawTransaction.description,
      amount: rawTransaction.totalAmount,
      partnerName: rawTransaction.counterpartyName,
      accountName: isDebit ? '현금' : '매출', // 기본값, 사용자가 수정 가능
      debitCredit: isDebit,
      note: rawTransaction.items.join(', '),
    };
  };

  // API 응답의 voucher를 UI 구조로 변환하는 함수
  const convertApiVoucherToUI = (apiVoucher: Record<string, unknown>): AIJournalVoucher => {
    console.log('변환할 API voucher:', apiVoucher);
    
    const transactions: AIJournalTransaction[] = [];
    
    // debits 배열 처리 (차변)
    if (apiVoucher.debits && Array.isArray(apiVoucher.debits)) {
      (apiVoucher.debits as Record<string, unknown>[]).forEach((debit: Record<string, unknown>, index: number) => {
        transactions.push({
          id: `debit-${apiVoucher.transactionId || index}-${index}`,
          date: (apiVoucher.date as string) || '',
          description: (apiVoucher.description as string) || '',
          amount: (debit.amount as number) || 0,
          partnerName: (debit.partner as string) || '',
          accountName: (debit.account as string) || '',
          debitCredit: true, // 차변
          note: (debit.note as string) || '',
        });
      });
    }
    
    // credits 배열 처리 (대변)
    if (apiVoucher.credits && Array.isArray(apiVoucher.credits)) {
      (apiVoucher.credits as Record<string, unknown>[]).forEach((credit: Record<string, unknown>, index: number) => {
        transactions.push({
          id: `credit-${apiVoucher.transactionId || index}-${index}`,
          date: (apiVoucher.date as string) || '',
          description: (apiVoucher.description as string) || '',
          amount: (credit.amount as number) || 0,
          partnerName: (credit.partner as string) || '',
          accountName: (credit.account as string) || '',
          debitCredit: false, // 대변
          note: (credit.note as string) || '',
        });
      });
    }
    
    console.log('변환된 transactions:', transactions);
    
    return {
      id: `voucher-${apiVoucher.transactionId || 'unknown'}`,
      date: (apiVoucher.date as string) || '',
      description: (apiVoucher.description as string) || (apiVoucher.explanation as string) || '',
      transactions: transactions,
    };
  };

  // SSE 메시지 처리 헬퍼 함수
  const processSSEMessage = (eventType: string, dataBuffer: string, onProgress: (data: Record<string, unknown>) => void, onComplete: (data: Record<string, unknown>) => void) => {
    console.log(`=== SSE 메시지 처리 시작 ===`);
    console.log(`이벤트 타입: "${eventType}"`);
    console.log(`데이터 길이: ${dataBuffer.length}`);
    console.log(`데이터 시작: ${dataBuffer.substring(0, 100)}...`);
    
    try {
      const parsedData = JSON.parse(dataBuffer);
      console.log(`SSE 이벤트 [${eventType}] 파싱 성공:`, parsedData);
      
      if (eventType === 'progress') {
        console.log('→ progress 콜백 호출');
        onProgress(parsedData);
      } else if (eventType === 'done') {
        console.log('→ done 콜백 호출 (2단계 API 시작)');
        onComplete(parsedData);
      } else if (eventType === 'connected') {
        console.log('SSE 연결됨:', parsedData);
      } else {
        console.log('알 수 없는 SSE 이벤트:', eventType, parsedData);
      }
    } catch (e) {
      console.error('SSE 데이터 파싱 에러:', e);
      console.error('이벤트 타입:', eventType);
      console.error('데이터 길이:', dataBuffer.length);
      console.error('데이터 시작 부분:', dataBuffer.substring(0, 200));
      console.error('데이터 끝 부분:', dataBuffer.substring(Math.max(0, dataBuffer.length - 200)));
    }
    console.log(`=== SSE 메시지 처리 완료 ===`);
  };

  // SSE 스트림 처리 헬퍼 함수
  const processSSEStream = async (stream: ReadableStream<Uint8Array> | null, onProgress: (data: Record<string, unknown>) => void, onComplete: (data: Record<string, unknown>) => void) => {
    if (!stream) {
      console.error('SSE 스트림이 null입니다');
      return;
    }

    console.log('=== SSE 스트림 처리 시작 ===');
    const reader = stream.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          console.log('SSE 스트림 읽기 완료');
          break;
        }

        const chunk = decoder.decode(value, { stream: true });
        console.log(`SSE 청크 수신 (${chunk.length} bytes):`, chunk.substring(0, 200) + '...');
        buffer += chunk;
        
        // 완전한 SSE 메시지를 찾아서 처리
        const lines = buffer.split('\n');
        buffer = lines.pop() || ''; // 마지막 불완전한 줄은 버퍼에 보관
        
        console.log(`처리할 줄 수: ${lines.length}, 버퍼에 남은 줄: ${buffer ? '있음' : '없음'}`);
        
        let currentEventType = '';
        let currentDataBuffer = '';
        
        for (const line of lines) {
          console.log(`처리 중인 줄: "${line}"`);
          
          if (line.startsWith('event:')) {
            // 이전 메시지가 완료되지 않았다면 처리
            if (currentEventType && currentDataBuffer) {
              console.log(`이전 메시지 처리: ${currentEventType}`);
              processSSEMessage(currentEventType, currentDataBuffer, onProgress, onComplete);
            }
            currentEventType = line.substring(6).trim();
            currentDataBuffer = '';
            console.log(`새 이벤트 타입 설정: "${currentEventType}"`);
            continue;
          }
          if (line.startsWith('data:')) {
            currentDataBuffer += line.substring(5);
            console.log(`데이터 추가, 현재 길이: ${currentDataBuffer.length}`);
            continue;
          }
          if (line === '') {
            // 빈 줄이면 메시지 완료
            if (currentEventType && currentDataBuffer) {
              console.log(`메시지 완료 처리: ${currentEventType}`);
              processSSEMessage(currentEventType, currentDataBuffer, onProgress, onComplete);
            } else if (currentDataBuffer && !currentEventType) {
              // event: 없이 data:만 있는 경우 (기본적으로 'done' 이벤트로 처리)
              console.log(`이벤트 타입 없이 데이터만 있음 - 'done'으로 처리`);
              processSSEMessage('done', currentDataBuffer, onProgress, onComplete);
            }
            currentEventType = '';
            currentDataBuffer = '';
          }
        }
        
        // 마지막 메시지 처리
        if (currentEventType && currentDataBuffer) {
          console.log(`마지막 메시지 처리: ${currentEventType}`);
          processSSEMessage(currentEventType, currentDataBuffer, onProgress, onComplete);
        } else if (currentDataBuffer && !currentEventType) {
          // event: 없이 data:만 있는 경우 (기본적으로 'done' 이벤트로 처리)
          console.log(`마지막 메시지 - 이벤트 타입 없이 데이터만 있음 - 'done'으로 처리`);
          processSSEMessage('done', currentDataBuffer, onProgress, onComplete);
        }
      }
    } catch (error) {
      console.error('SSE 스트림 처리 에러:', error);
    } finally {
      reader.releaseLock();
      console.log('=== SSE 스트림 처리 완료 ===');
    }
  };

  // 실제 API 호출로 파일 처리 (2단계 프로세스)
  const processFiles = async (selectedFiles: FileList) => {
    if (!token) {
      setError('로그인이 필요합니다.');
      return;
    }

    setFiles(selectedFiles);
    setError(null);
    setLoading(true);

    try {
      // 파일 배열로 변환
      const fileArray = Array.from(selectedFiles);
      
      // 1단계: 증빙 추출 시작
      setStep('extracting');
      setProgress({ processed: 0, total: 100 });
      
      const extractJob = await startExtractRawTransactions(fileArray, token);
      
      // 1단계: 증빙 추출 진행률 스트림
      const extractStream = await getExtractRawTransactionsStream(extractJob.jobId, token);
      
      await processSSEStream(
        extractStream,
        (data) => {
          // 진행률 업데이트
          setProgress({ processed: Number(data.processed) || 0, total: Number(data.total) || 100 });
      
        },
        (data) => {
          // 추출 완료
          console.log('=== onComplete 콜백 호출됨 ===');
          console.log('추출 완료 데이터:', data);
          console.log('데이터 타입:', typeof data);
          console.log('데이터 키들:', Object.keys(data));
          
          // transactions 필드에서 RawTransaction 배열 가져오기
          const rawTransactions = (data.transactions as RawTransaction[]) || [];
          console.log('추출된 원본 거래내역 개수:', rawTransactions.length);
          console.log('첫 번째 거래내역:', rawTransactions[0]);
          
          // RawTransaction을 AIJournalTransaction으로 변환
          const convertedTransactions = rawTransactions.map(convertRawTransactionToAIJournal);
          console.log('변환된 거래내역 개수:', convertedTransactions.length);
          
          setRawTransactions(rawTransactions);
          setProgress({ processed: 100, total: 100 });
          console.log('상태 업데이트 완료');
          
          // 2단계: 분개 처리 시작
          console.log('=== 2단계 분개 처리 시작 (setTimeout) ===');
          setTimeout(async () => {
            try {
              console.log('setTimeout 콜백 실행됨');
    setStep('processing');
    setProgress({ processed: 0, total: 100 });

              console.log('=== 2단계 분개 처리 시작 ===');
              console.log('전달할 원본 거래내역 개수:', rawTransactions.length);
              console.log('전달할 변환된 거래내역 개수:', convertedTransactions.length);
              console.log('토큰 존재 여부:', !!token);
              console.log('토큰 길이:', token?.length);
              
              if (!token) {
                throw new Error('토큰이 없습니다.');
              }
              
              if (rawTransactions.length === 0) {
                console.log('거래내역이 비어있지만 API 호출을 시도합니다.');
                // 빈 배열이라도 API 호출을 시도 (API가 다른 방식으로 처리할 수 있음)
              }
              
              console.log('startProcessJournalEntries API 호출 시작...');
              console.log('API 호출 전 마지막 확인 - rawTransactions:', rawTransactions.slice(0, 2));
              
              const processJob = await startProcessJournalEntries(rawTransactions, token);
              console.log('startProcessJournalEntries API 응답:', processJob);
              
              // 2단계: 분개 처리 진행률 스트림
              const processStream = await getProcessJournalEntriesStream(processJob.jobId, token);
              
              await processSSEStream(
                processStream,
                (data) => {
                  // 진행률 업데이트
                  setProgress({ processed: Number(data.processed) || 0, total: Number(data.total) || 100 });
                },
                (data) => {
                  // 분개 처리 완료
                  console.log('=== 2단계 완료 데이터 ===');
                  console.log('전체 데이터:', data);
                  console.log('vouchers 타입:', typeof data.vouchers);
                  
                  const vouchersData = data.vouchers as unknown[];
                  console.log('vouchers 길이:', vouchersData?.length);
                  console.log('첫 번째 voucher:', vouchersData?.[0]);
                  console.log('첫 번째 voucher의 키들:', vouchersData?.[0] ? Object.keys(vouchersData[0] as Record<string, unknown>) : '없음');
                  
                  // API 응답의 vouchers를 UI 구조로 변환
                  const apiVouchers = (data.vouchers as Record<string, unknown>[]) || [];
                  const convertedVouchers = apiVouchers.map(convertApiVoucherToUI);
                  
                  console.log('변환된 vouchers:', convertedVouchers);
                  
                  setVouchers(convertedVouchers);
                  setNewPartners((data.newPartners as NewPartner[]) || []);
                  
                  // 통계 계산
                  let debitTotal = 0, creditTotal = 0;
                  convertedVouchers.forEach((v: AIJournalVoucher, index: number) => {
                    console.log(`Voucher ${index}:`, v);
                    console.log(`Voucher ${index} transactions:`, v.transactions);
                    
                    if (v.transactions && Array.isArray(v.transactions)) {
                      v.transactions.forEach((t: AIJournalTransaction) =>
              t.debitCredit ? (debitTotal += t.amount) : (creditTotal += t.amount)
          );
                    } else {
                      console.warn(`Voucher ${index}에 transactions가 없습니다:`, v);
                    }
                  });

          setStats({
                    transactionCount: Number(data.totalVouchers) || 0,
                    newPartnerCount: Number(data.totalNewPartners) || 0,
            debitTotal,
            creditTotal,
                    accuracy: 95, // 기본값
          });
                  
                  setProgress({ processed: 100, total: 100 });
                  
                  // 잠시 후 결과 화면으로 전환
                  setTimeout(() => {
          setStep('result');
        }, 500);
                }
              );
            } catch (err) {
              console.error('분개 처리 에러:', err);
              setError(err instanceof Error ? err.message : '분개 처리 중 오류가 발생했습니다.');
              setStep('upload');
            }
          }, 500);
        }
      );
      
    } catch (err) {
      console.error('AI 분개 처리 에러:', err);
      setError(err instanceof Error ? err.message : 'AI 분개 처리 중 오류가 발생했습니다.');
      setStep('upload');
    } finally {
      setLoading(false);
    }
  };

  // 파일 업로드 핸들러 (FileUploadBox용)
  const handleFileUpload = (file: File) => {
    // 단일 파일을 FileList로 변환
    const fileList = {
      0: file,
      length: 1,
      item: (index: number) => index === 0 ? file : null,
      [Symbol.iterator]: function* () {
        yield file;
      }
    } as FileList;
    
    processFiles(fileList);
  };

  // 표 데이터 수정 핸들러
  const handleCellChange = (
    voucherId: string,
    transactionId: string,
    field: keyof AIJournalTransaction,
    value: string | number | boolean
  ) => {
    setVouchers(prev => 
      prev.map(voucher => 
        voucher.id === voucherId
          ? {
              ...voucher,
              transactions: voucher.transactions.map(transaction =>
                transaction.id === transactionId
                  ? { ...transaction, [field]: value }
                  : transaction
              )
            }
          : voucher
      )
    );
  };

  // 전표 설명 수정 핸들러
  const handleVoucherDescriptionChange = (voucherId: string, value: string) => {
    setVouchers(prev => 
      prev.map(voucher => 
        voucher.id === voucherId
          ? { ...voucher, description: value }
          : voucher
      )
    );
  };

  // 저장 핸들러 (새로운 2단계 API 사용)
  const handleSave = async () => {
    if (!token) {
      setError('로그인이 필요합니다.');
      return;
    }

    if (vouchers.length === 0) {
      setError('저장할 데이터가 없습니다.');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      console.log('=== 저장 시작 ===');
      console.log('저장할 vouchers:', vouchers);
      
      const result = await saveAIJournal(vouchers, token);
      
      if (result.success) {
        console.log('저장 완료:', result.voucherIds);
        alert(`저장되었습니다. (전표 ${result.voucherIds.length}개 생성)`);
      } else {
        setError('저장에 실패했습니다.');
      }
    } catch (err) {
      console.error('저장 에러:', err);
      setError(err instanceof Error ? err.message : '저장 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  // 새로 시작 핸들러
  const _handleReset = () => {
    setStep('upload');
    setFiles(null);
    setVouchers([]);
    setStats({
      transactionCount: 0,
      newPartnerCount: 0,
      debitTotal: 0,
      creditTotal: 0,
      accuracy: 95,
    });
    setError(null);
    setProgress({ processed: 0, total: 100 });
  };

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* 업로드 단계 */}
        {step === 'upload' && (
          <div className="mb-6">
            <FileUploadBox
              id="ai-journal-file-upload"
              onFileUpload={handleFileUpload}
              loading={loading}
              uploadText="파일을 선택하거나 드래그하여 업로드하세요"
              showFileTypeInfo={true}
              
            />
          </div>
        )}

        {/* 처리 중 */}
        {(step === 'extracting' || step === 'processing') && (
          <div className="bg-white border border-[#D9D9D9] border-dashed p-12 text-center mb-6">
            <div className="w-full bg-[#E6E6E6] rounded-full h-3 mb-4">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-200 ease-out"
                style={{
                  width: `${(progress.processed / progress.total) * 100}%`,
                }}
              />
            </div>
            <p className="text-sm text-[#767676]">
            파일 내용을 분석하고 분개작업을 진행중입니다. {progress.processed}/{progress.total} (
              {Math.round((progress.processed / progress.total) * 100)}%)
            </p>
          </div>
        )}

        {/* 결과 */}
        {step === 'result' && (
          <>
            {/* 결과 헤더 */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-[#1E1E1E]">분개 결과</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 text-sm bg-[#F3F3F3] text-[#2C2C2C] hover:bg-gray-200"
                >
                  인쇄하기
                </button>
                <button
                  onClick={handleSave}
                  disabled={loading}
                  className="px-4 py-2 text-sm bg-[#2C2C2C] text-white hover:bg-[#1E1E1E] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? '저장 중...' : '저장하기'}
                </button>
              </div>
            </div>

            {/* Dashboard */}
            <div className="flex items-center p-0 w-full h-[63px] bg-white border border-[#D9D9D9] mb-6">
              {/* 거래건수 */}
              <div className="flex flex-col justify-center items-center px-6 py-3 gap-1.5 flex-1">
                <p className="text-xs text-[#B3B3B3] leading-none">거래건수</p>
                <p className="text-[15px] font-semibold text-[#1E1E1E] leading-[140%]">
                  {stats.transactionCount}건
                </p>
              </div>
              
              {/* 구분선 */}
              <div className="w-10 h-0 border border-[#D9D9D9] rotate-90"></div>
              
              {/* 신규거래처수 */}
              <div className="flex flex-col justify-center items-center px-6 py-3 gap-1.5 flex-1">
                <p className="text-xs text-[#B3B3B3] leading-none">신규거래처수</p>
                <p className="text-[15px] font-semibold text-[#1E1E1E] leading-[140%]">
                  {stats.newPartnerCount}개
                </p>
              </div>
              
              {/* 구분선 */}
              <div className="w-10 h-0 border border-[#D9D9D9] rotate-90"></div>
              
              {/* 차변합계 */}
              <div className="flex flex-col justify-center items-center px-6 py-3 gap-1.5 flex-1">
                <p className="text-xs text-[#B3B3B3] leading-none">차변합계</p>
                <p className="text-[15px] font-semibold text-[#b3b3b3] leading-[140%]">
                  {stats.debitTotal.toLocaleString()}원
                </p>
              </div>
              
              {/* 구분선 */}
              <div className="w-10 h-0 border border-[#D9D9D9] rotate-90"></div>
              
              {/* 대변합계 */}
              <div className="flex flex-col justify-center items-center px-6 py-3 gap-1.5 flex-1">
                <p className="text-xs text-[#B3B3B3] leading-none">대변합계</p>
                <p className="text-[15px] font-semibold text-[#b3b3b3] leading-[140%]">
                  {stats.creditTotal.toLocaleString()}원
                </p>
              </div>
              
              {/* 구분선 */}
              <div className="w-10 h-0 border border-[#D9D9D9] rotate-90"></div>
              
              {/* 분개 적중률 */}
              <div className="flex flex-col justify-center items-center px-6 py-3 gap-1.5 flex-1">
                <p className="text-xs text-[#B3B3B3] leading-none">분개 적중률</p>
                <p className="text-[15px] font-semibold text-[#1E1E1E] leading-[140%]">
                  {stats.accuracy}%
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#d9d9d9] overflow-hidden">
              <table className="w-full text-center">
                <thead>
                  <tr className="bg-[#F5F5F5]">
                    <th className="p-3 border border-[#d9d9d9] text-sm text-[#757575] w-[90px]">번호</th>
                    <th className="p-3 border border-[#d9d9d9] text-sm text-[#757575]">일자</th>
                    <th className="p-3 border border-[#d9d9d9] text-sm text-[#757575]" colSpan={3}>
                      차변
                    </th>
                    <th className="p-3 border border-[#d9d9d9] text-sm text-[#757575]" colSpan={3}>
                      대변
                    </th>
                    <th className="p-3 border border-[#d9d9d9] text-sm text-[#757575]">적요</th>
                  </tr>
                  <tr className="bg-[#F5F5F5]">
                    <th className="p-3 border border-[#d9d9d9] text-sm text-[#757575]"></th>
                    <th className="p-3 border border-[#d9d9d9] text-sm text-[#757575]"></th>
                    <th className="p-3 border border-[#d9d9d9] text-sm text-[#757575]">계정과목</th>
                    <th className="p-3 border border-[#d9d9d9] text-sm text-[#757575]">금액</th>
                    <th className="p-3 border border-[#d9d9d9] text-sm text-[#757575]">거래처</th>
                    <th className="p-3 border border-[#d9d9d9] text-sm text-[#757575]">계정과목</th>
                    <th className="p-3 border border-[#d9d9d9] text-sm text-[#757575]">금액</th>
                    <th className="p-3 border border-[#d9d9d9] text-sm text-[#757575]">거래처</th>
                    <th className="p-3 border border-[#d9d9d9] text-sm text-[#757575]"></th>
                  </tr>
                </thead>
                <tbody>
                  {vouchers.map((voucher, idx) => {
                    console.log(`렌더링 중인 voucher ${idx}:`, voucher);
                    console.log(`voucher.transactions:`, voucher.transactions);
                    
                    // transactions가 없거나 배열이 아닌 경우 빈 배열로 처리
                    const transactions = voucher.transactions && Array.isArray(voucher.transactions) 
                      ? voucher.transactions 
                      : [];
                    
                    const debit = transactions.filter((t) => t.debitCredit);
                    const credit = transactions.filter((t) => !t.debitCredit);
                    const rows = Math.max(debit.length, credit.length);

                    return (
                      <React.Fragment key={`voucher-${idx}`}>
                        {Array.from({ length: rows }).map((_, r) => (
                          <tr key={`voucher-${idx}-row-${r}`}>
                            <td className="p-3 border border-[#d9d9d9] text-sm text-[#757575]">
                              {r === 0 ? idx + 1 : ''}
                            </td>
                            <td className="p-3 border border-[#d9d9d9] text-sm text-[#757575]">
                              {r === 0 ? voucher.date : ''}
                            </td>
                            <td className="p-3 border border-[#d9d9d9]">
                              <input
                                type="text"
                                placeholder="입력하기"
                                value={debit[r]?.accountName || ''}
                                onChange={(e) => debit[r] && handleCellChange(voucher.id, debit[r].id, 'accountName', e.target.value)}
                                className="w-full bg-transparent text-sm text-[#757575] focus:outline-none"
                              />
                            </td>
                            <td className="p-3 border border-[#d9d9d9]">
                              <div className="flex items-center">
                              <input
                                type="text"
                                  placeholder="0"
                                  value={debit[r]?.amount ? debit[r].amount.toLocaleString() : ''}
                                  onChange={(e) => {
                                    if (debit[r]) {
                                      const numericValue = e.target.value.replace(/[^0-9]/g, '');
                                      handleCellChange(voucher.id, debit[r].id, 'amount', parseInt(numericValue) || 0);
                                    }
                                  }}
                                className="w-full bg-transparent text-sm text-[#757575] focus:outline-none"
                              />
                                <span className="text-sm text-[#b3b3b3] ml-1">원</span>
                              </div>
                            </td>
                            <td className="p-3 border border-[#d9d9d9]">
                              <input
                                type="text"
                                placeholder="입력하기"
                                value={debit[r]?.partnerName || ''}
                                onChange={(e) => debit[r] && handleCellChange(voucher.id, debit[r].id, 'partnerName', e.target.value)}
                                className="w-full bg-transparent text-sm text-[#757575] focus:outline-none"
                              />
                            </td>
                            <td className="p-3 border border-[#d9d9d9]">
                              <input
                                type="text"
                                placeholder="입력하기"
                                value={credit[r]?.accountName || ''}
                                onChange={(e) => credit[r] && handleCellChange(voucher.id, credit[r].id, 'accountName', e.target.value)}
                                className="w-full bg-transparent text-sm text-[#757575] focus:outline-none"
                              />
                            </td>
                            <td className="p-3 border border-[#d9d9d9]">
                              <div className="flex items-center">
                              <input
                                type="text"
                                  placeholder="0"
                                  value={credit[r]?.amount ? credit[r].amount.toLocaleString() : ''}
                                  onChange={(e) => {
                                    if (credit[r]) {
                                      const numericValue = e.target.value.replace(/[^0-9]/g, '');
                                      handleCellChange(voucher.id, credit[r].id, 'amount', parseInt(numericValue) || 0);
                                    }
                                  }}
                                className="w-full bg-transparent text-sm text-[#757575] focus:outline-none"
                              />
                                <span className="text-sm text-[#b3b3b3] ml-1">원</span>
                              </div>
                            </td>
                            <td className="p-3 border border-[#d9d9d9]">
                              <input
                                type="text"
                                placeholder="입력하기"
                                value={credit[r]?.partnerName || ''}
                                onChange={(e) => credit[r] && handleCellChange(voucher.id, credit[r].id, 'partnerName', e.target.value)}
                                className="w-full bg-transparent text-sm text-[#757575] focus:outline-none"
                              />
                            </td>
                            <td className="p-3 border border-[#d9d9d9]">
                              <input
                                type="text"
                                placeholder="입력하기"
                                value={r === 0 ? voucher.description : ''}
                                onChange={(e) => r === 0 && handleVoucherDescriptionChange(voucher.id, e.target.value)}
                                className="w-full bg-transparent text-sm text-[#757575] focus:outline-none"
                              />
                            </td>
                          </tr>
                        ))}
                        <tr>
                          <td className="p-3 border border-[#d9d9d9] bg-[#F5F5F5] font-medium text-sm text-[#757575]">소계</td>
                          <td className="p-3 border border-[#d9d9d9] bg-white">
                            <input
                              type="text"
                              placeholder="입력하기"
                              defaultValue=""
                              className="w-full bg-white text-sm text-[#757575] focus:outline-none"
                            />
                          </td>
                          <td className="p-3 border border-[#d9d9d9] bg-white">
                            <input
                              type="text"
                              placeholder="입력하기"
                              defaultValue=""
                              className="w-full bg-white text-sm text-[#757575] focus:outline-none"
                            />
                          </td>
                          <td className="p-3 border border-[#d9d9d9] bg-white">
                            <div className="flex items-center">
                            <input
                              type="text"
                                placeholder="0"
                                defaultValue={debit.reduce((s, t) => s + (t.amount || 0), 0).toLocaleString()}
                              className="w-full bg-white text-sm text-[#757575] focus:outline-none"
                                readOnly
                            />
                              <span className="text-sm text-[#b3b3b3] ml-1">원</span>
                            </div>
                          </td>
                          <td className="p-3 border border-[#d9d9d9] bg-white">
                            <input
                              type="text"
                              placeholder="입력하기"
                              defaultValue=""
                              className="w-full bg-white text-sm text-[#757575] focus:outline-none"
                            />
                          </td>
                          <td className="p-3 border border-[#d9d9d9] bg-white">
                            <input
                              type="text"
                              placeholder="입력하기"
                              defaultValue=""
                              className="w-full bg-white text-sm text-[#757575] focus:outline-none"
                            />
                          </td>
                          <td className="p-3 border border-[#d9d9d9] bg-white">
                            <div className="flex items-center">
                            <input
                              type="text"
                                placeholder="0"
                                defaultValue={credit.reduce((s, t) => s + (t.amount || 0), 0).toLocaleString()}
                              className="w-full bg-white text-sm text-[#757575] focus:outline-none"
                                readOnly
                            />
                              <span className="text-sm text-[#b3b3b3] ml-1">원</span>
                            </div>
                          </td>
                          <td className="p-3 border border-[#d9d9d9] bg-white">
                            <input
                              type="text"
                              placeholder="입력하기"
                              defaultValue=""
                              className="w-full bg-white text-sm text-[#757575] focus:outline-none"
                            />
                          </td>
                          <td className="p-3 border border-[#d9d9d9] bg-white">
                            <input
                              type="text"
                              placeholder="입력하기"
                              defaultValue=""
                              className="w-full bg-white text-sm text-[#757575] focus:outline-none"
                            />
                          </td>
                        </tr>
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
