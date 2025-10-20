'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import FileUploadBox from '@/components/FileUploadBox';
import Button from '@/components/Button';
import ToastMessage from '@/components/ToastMessage';
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
import {
  getJournalInputAccounts,
  getJournalInputPartners,
  type UserAccount,
  type PartnerItem
} from '@/services/financial';
import Image from 'next/image';

// 기존 인터페이스는 API에서 가져온 타입으로 대체

interface ProgressData {
  processed: number;
  total: number;
}

export default function AIJournalPage() {
  const { token } = useAuth();

  const [step, setStep] = useState<'upload' | 'extracting' | 'processing' | 'result'>('upload'); // 임시로 result로 설정
  const [, setFiles] = useState<FileList | null>(null);
  const [progress, setProgress] = useState<ProgressData>({ processed: 0, total: 100 });
  
  // 임시 vouchers 데이터
  const [vouchers, setVouchers] = useState<AIJournalVoucher[]>([]);
  const [initialVouchers, setInitialVouchers] = useState<AIJournalVoucher[]>([]);
  
  const [, setRawTransactions] = useState<RawTransaction[]>([]);
  const [, setNewPartners] = useState<NewPartner[]>([]);
  
  // 임시 통계 데이터
  const [stats, setStats] = useState({
    transactionCount: 0,
    newPartnerCount: 0,
    debitTotal: 0,
    creditTotal: 0,
    accuracy: 0,
  });
  
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  
  // 계정과목 및 거래처 목록
  const [accounts, setAccounts] = useState<UserAccount[]>([]);
  const [partners, setPartners] = useState<PartnerItem[]>([]);

  // 계정과목 및 거래처 조회
  useEffect(() => {
    const fetchData = async () => {
      if (!token) return;
      
      try {
        const [accountsData, partnersData] = await Promise.all([
          getJournalInputAccounts(token),
          getJournalInputPartners(token)
        ]);
        
        setAccounts(accountsData);
        // 모든 거래처를 하나의 배열로 합침
        setPartners([
          ...partnersData.companies,
          ...partnersData.cards,
          ...partnersData.bankAccounts
        ]);
      } catch (err) {
        console.error('계정과목/거래처 조회 실패:', err);
      }
    };
    
    fetchData();
  }, [token]);

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
    const transactions: AIJournalTransaction[] = [];
    const voucherId = `voucher-${apiVoucher.transactionId || 'unknown'}`;
    const voucherDate = (apiVoucher.date as string) || '';
    
    // debits 배열 처리 (차변)
    if (apiVoucher.debits && Array.isArray(apiVoucher.debits)) {
      (apiVoucher.debits as Record<string, unknown>[]).forEach((debit: Record<string, unknown>, index: number) => {
        transactions.push({
          id: `debit-${apiVoucher.transactionId || index}-${index}`,
          date: voucherDate,
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
          date: voucherDate,
          description: (apiVoucher.description as string) || '',
          amount: (credit.amount as number) || 0,
          partnerName: (credit.partner as string) || '',
          accountName: (credit.account as string) || '',
          debitCredit: false, // 대변
          note: (credit.note as string) || '',
        });
      });
    }
    
    // transactions가 빈 배열이면 차변 2행, 대변 2행 생성
    if (transactions.length === 0) {
      transactions.push(
        {
          id: `${voucherId}-debit-1`,
          date: voucherDate,
          description: '',
          amount: 0,
          partnerName: '',
          accountName: '',
          debitCredit: true,
          note: '',
        },
        {
          id: `${voucherId}-debit-2`,
          date: voucherDate,
          description: '',
          amount: 0,
          partnerName: '',
          accountName: '',
          debitCredit: true,
          note: '',
        },
        {
          id: `${voucherId}-credit-1`,
          date: voucherDate,
          description: '',
          amount: 0,
          partnerName: '',
          accountName: '',
          debitCredit: false,
          note: '',
        },
        {
          id: `${voucherId}-credit-2`,
          date: voucherDate,
          description: '',
          amount: 0,
          partnerName: '',
          accountName: '',
          debitCredit: false,
          note: '',
        }
      );
    }
    
    return {
      id: voucherId,
      date: voucherDate,
      description: (apiVoucher.description as string) || (apiVoucher.explanation as string) || '',
      transactions: transactions,
    };
  };

  // SSE 메시지 처리 헬퍼 함수
  const processSSEMessage = (eventType: string, dataBuffer: string, onProgress: (data: Record<string, unknown>) => void, onComplete: (data: Record<string, unknown>) => void) => {
    try {
      const parsedData = JSON.parse(dataBuffer);
      
      if (eventType === 'progress') {
        onProgress(parsedData);
      } else if (eventType === 'done') {
        console.log('✓ 1단계 완료 - 2단계 분개 처리 시작');
        onComplete(parsedData);
      } else if (eventType === 'connected') {
        console.log('✓ SSE 연결됨');
      }
    } catch (e) {
      console.error('SSE 데이터 파싱 에러:', e);
    }
  };

  // SSE 스트림 처리 헬퍼 함수
  const processSSEStream = async (stream: ReadableStream<Uint8Array> | null, onProgress: (data: Record<string, unknown>) => void, onComplete: (data: Record<string, unknown>) => void) => {
    if (!stream) {
      console.error('SSE 스트림이 null입니다');
      return;
    }

    const reader = stream.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        buffer += chunk;
        
        // 완전한 SSE 메시지를 찾아서 처리
        const lines = buffer.split('\n');
        buffer = lines.pop() || ''; // 마지막 불완전한 줄은 버퍼에 보관
        
        let currentEventType = '';
        let currentDataBuffer = '';
        
        for (const line of lines) {
          if (line.startsWith('event:')) {
            // 이전 메시지가 완료되지 않았다면 처리
            if (currentEventType && currentDataBuffer) {
              processSSEMessage(currentEventType, currentDataBuffer, onProgress, onComplete);
            }
            currentEventType = line.substring(6).trim();
            currentDataBuffer = '';
            continue;
          }
          if (line.startsWith('data:')) {
            currentDataBuffer += line.substring(5);
            continue;
          }
          if (line === '') {
            // 빈 줄이면 메시지 완료
            if (currentEventType && currentDataBuffer) {
              processSSEMessage(currentEventType, currentDataBuffer, onProgress, onComplete);
            } else if (currentDataBuffer && !currentEventType) {
              // event: 없이 data:만 있는 경우 (기본적으로 'done' 이벤트로 처리)
              processSSEMessage('done', currentDataBuffer, onProgress, onComplete);
            }
            currentEventType = '';
            currentDataBuffer = '';
          }
        }
        
        // 마지막 메시지 처리
        if (currentEventType && currentDataBuffer) {
          processSSEMessage(currentEventType, currentDataBuffer, onProgress, onComplete);
        } else if (currentDataBuffer && !currentEventType) {
          // event: 없이 data:만 있는 경우 (기본적으로 'done' 이벤트로 처리)
          processSSEMessage('done', currentDataBuffer, onProgress, onComplete);
        }
      }
    } catch (error) {
      console.error('SSE 스트림 처리 에러:', error);
    } finally {
      reader.releaseLock();
    }
  };

  // 실제 API 호출로 파일 처리 (2단계 프로세스)
  const processFiles = async (selectedFiles: FileList) => {
    if (!token) {
      alert('로그인이 필요합니다.');
      return;
    }

    setFiles(selectedFiles);
    setLoading(true);

    try {
      // 파일 배열로 변환
      const fileArray = Array.from(selectedFiles);
      
      // 1단계: 증빙 추출 시작
      console.log('✓ 1단계 시작: 증빙 추출');
      setStep('extracting');
      setProgress({ processed: 1, total: 100 });
      
      const extractJob = await startExtractRawTransactions(fileArray, token);
      
      // 1단계: 증빙 추출 진행률 스트림
      const extractStream = await getExtractRawTransactionsStream(extractJob.jobId, token);
      
      await processSSEStream(
        extractStream,
        (data) => {      
          console.log('data', data);
        },
        (data) => {
          // 추출 완료
          const rawTransactions = (data.transactions as RawTransaction[]) || [];
          console.log(`✓ 1단계 완료: ${rawTransactions.length}개 거래내역 추출`);
          
          
          setRawTransactions(rawTransactions);
          // setProgress({ processed: 100, total: 100 });
          
          // 2단계: 분개 처리 시작
          setTimeout(async () => {
            try {
              console.log('✓ 2단계 시작: 분개 처리');
              setStep('processing');
              setProgress({ processed: 5, total: 100 });

              if (!token) {
                throw new Error('토큰이 없습니다.');
              }
              
              const processJob = await startProcessJournalEntries(rawTransactions, token);
              
              // 2단계: 분개 처리 진행률 스트림
              const processStream = await getProcessJournalEntriesStream(processJob.jobId, token);
              
              await processSSEStream(
                processStream,
                (data) => {
                  // 진행률 업데이트
                  setProgress({ processed: Math.round(Number(data.processed)/Number(data.total) * 100) || 0, total: 100 });
                },
                (data) => {
                  // 분개 처리 완료
                  const apiVouchers = (data.vouchers as Record<string, unknown>[]) || [];
                  const convertedVouchers = apiVouchers.map(convertApiVoucherToUI);
                  console.log(`✓ 2단계 완료: ${convertedVouchers.length}개 전표 생성`);
                  
                  setVouchers(convertedVouchers);
                  setInitialVouchers(convertedVouchers);
                  setNewPartners((data.newPartners as NewPartner[]) || []);
                  
                  // 통계 계산
                  let debitTotal = 0, creditTotal = 0;
                  convertedVouchers.forEach((v: AIJournalVoucher) => {
                    if (v.transactions && Array.isArray(v.transactions)) {
                      v.transactions.forEach((t: AIJournalTransaction) =>
              t.debitCredit ? (debitTotal += t.amount) : (creditTotal += t.amount)
          );
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
              alert(err instanceof Error ? err.message : '분개 처리 중 오류가 발생했습니다.');
              setStep('upload');
            }
          }, 500);
        }
      );
      
    } catch (err) {
      console.error('AI 분개 처리 에러:', err);
      alert(err instanceof Error ? err.message : 'AI 분개 처리 중 오류가 발생했습니다.');
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
      alert('로그인이 필요합니다.');
      return;
    }

    if (vouchers.length === 0) {
      alert('저장할 데이터가 없습니다.');
      return;
    }

    try {
      setLoading(true);
      
      const result = await saveAIJournal(vouchers, token);
      
      if (result.success) {
        console.log(`✓ 저장 완료: ${result.voucherIds.length}개 전표 생성`);
        setToastMessage(`저장되었습니다. (전표 ${result.voucherIds.length}개 생성)`);
        setShowToast(true);
        // step 초기화
        setStep('upload');
        setProgress({ processed: 0, total: 100 });
        setVouchers([]);
        setInitialVouchers([]);
        setNewPartners([]);
        setStats({
          transactionCount: 0,
          newPartnerCount: 0,
          debitTotal: 0,
          creditTotal: 0,
          accuracy: 0,
        });
      } else {
        alert('저장에 실패했습니다.');
      }
    } catch (err) {
      console.error('저장 에러:', err);
      alert(err instanceof Error ? err.message : '저장 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  // 파일 업로드 핸들러 (새로운 파일 업로드 버튼용)
  const handleNewFileUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf,.xlsx,.xls,.csv,.jpg,.jpeg,.png';
    input.multiple = false;
    input.onchange = (e) => {
      const target = e.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        const file = target.files[0];
        // 파일 확장자 검증
        const allowedExtensions = ['.pdf', '.xlsx', '.xls', '.csv', '.jpg', '.jpeg', '.png'];
        const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
        
        if (allowedExtensions.includes(fileExtension)) {
          handleFileUpload(file);
        } else {
          alert('지원하지 않는 파일 형식입니다. (JPG, PNG, PDF, XLSX, XLS, CSV 파일만 지원됩니다.)');
        }
      }
    };
    input.click();
  };

  return (
    <div className="p-4">
      <div className="flex flex-col mx-auto gap-4">
        <div className="flex items-end justify-between gap-4 w-full min-w-[520px]">
          <div className="flex flex-col items-start p-0">
            <div className="flex flex-col items-start px-0 py-1.5 rounded-lg">
              <div className="flex flex-row items-start p-0">
                <span className="text-[15px] leading-[140%] text-[#1E1E1E] font-semibold">
                  AI 분개
                </span>
              </div>
            </div>
            <span className="text-xs leading-[140%] text-center text-[#767676]">
            파일을 업로드해서 자동으로 분개를 시작하세요.
            </span>
          </div>
          <div className="flex gap-2">
            <Button
              variant="neutral"
              size="small"
              onClick={handleNewFileUpload}
              disabled={loading}
            >
              파일 업로드
            </Button>
            <Button
              variant="primary"
              size="small"
              onClick={handleSave}
              disabled={loading}
              loading={loading}
            >
              저장하기
            </Button>
          </div>
        </div>
        {/* 업로드 단계 */}
        {step === 'upload' && (
          <div className="relative flex flex-col justify-center items-center p-6 gap-3 w-full min-w-[400px] bg-white border border-dashed border-[#D9D9D9]">
            <div className="flex items-center justify-center">
              <Image src="/icons/upload.svg" alt="upload" width={24} height={24} />
            </div>
            <div className="flex flex-col items-center p-0 gap-0.5">
              <span className="text-xs leading-[140%] text-center text-[#303030]">
                파일을 선택하거나 여기로 드래그하세요.
              </span>
              <span className="text-xs leading-[140%] text-center text-[#767676]">
                (JPG, PNG, PDF, XLSX, XLS, CSV 파일만 지원됩니다.)
              </span>
            </div>
            <FileUploadBox
              id="ai-journal-file-upload"
              onFileUpload={handleFileUpload}
              loading={loading}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
        )}

        {/* 처리 중 */}
        {(step === 'extracting' || step === 'processing') && (
          <div className="bg-white border border-[#D9D9D9] border-dashed px-6 py-10 text-center mb-6">
            <div className="w-full bg-[#F5F5F5] rounded-full h-2 mb-3 p-0.5">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-1 rounded-full transition-all duration-200 ease-out"
                style={{
                  width: `${(progress.processed / progress.total) * 100}%`,
                }}
              />
            </div>
            <p className="text-xs leading-[140%] text-[#767676]">
            파일 내용을 분석하고 분개작업을 진행중입니다. {progress.processed}/{progress.total} (
              {Math.round((progress.processed / progress.total) * 100)}%)
            </p>
          </div>
        )}

        {/* 결과 */}
        {step === 'result' && (
          <>
            {/* Dashboard */}
            <div className="flex flex-row items-center p-0 h-[63px] bg-white border border-[#D9D9D9]">
              {/* 거래건수 */}
              <div className="flex flex-col justify-center items-center py-3 gap-1.5 w-[228.8px] h-[63px] flex-1">
                <p className="h-3 text-xs leading-none flex items-center text-center text-[#B3B3B3] font-medium">거래건수</p>
                <p className="h-[21px] text-[15px] font-semibold leading-[140%] flex items-center text-center text-[#1E1E1E]">
                  {stats.transactionCount}건
                </p>
              </div>
              
              {/* 구분선 */}
              <div className="h-[calc(100%-20px)] border-l border-[#D9D9D9]"></div>
              
              {/* 신규거래처수 */}
              <div className="flex flex-col justify-center items-center py-3 gap-1.5 w-[228.8px] h-[63px] flex-1">
                <p className="h-3 text-xs leading-none flex items-center text-center text-[#B3B3B3] font-medium">신규거래처수</p>
                <p className="h-[21px] text-[15px] font-semibold leading-[140%] flex items-center text-center text-[#1E1E1E]">
                  {stats.newPartnerCount}개
                </p>
              </div>
              
              {/* 구분선 */}
              <div className="h-[calc(100%-20px)] border-l border-[#D9D9D9]"></div>
              
              {/* 차변합계 */}
              <div className="flex flex-col justify-center items-center py-3 gap-1.5 w-[228.8px] h-[63px] flex-1">
                <p className="h-3 text-xs leading-none flex items-center text-center text-[#B3B3B3] font-medium">차변합계</p>
                <p className="h-[21px] text-[15px] font-semibold leading-[140%] flex items-center text-center text-[#1E1E1E]">
                  {stats.debitTotal.toLocaleString()}원
                </p>
              </div>
              
              {/* 구분선 */}
              <div className="h-[calc(100%-20px)] border-l border-[#D9D9D9]"></div>
              
              {/* 대변합계 */}
              <div className="flex flex-col justify-center items-center py-3 gap-1.5 w-[228.8px] h-[63px] flex-1">
                <p className="h-3 text-xs leading-none flex items-center text-center text-[#B3B3B3] font-medium">대변합계</p>
                <p className="h-[21px] text-[15px] font-semibold leading-[140%] flex items-center text-center text-[#1E1E1E]">
                  {stats.creditTotal.toLocaleString()}원
                </p>
              </div>
              
              {/* 구분선 */}
              <div className="h-[calc(100%-20px)] border-l border-[#D9D9D9]"></div>
              
              {/* 분개 적중률 */}
              <div className="flex flex-col justify-center items-center py-3 gap-1.5 w-[228.8px] h-[63px] flex-1">
                <p className="h-3 text-xs leading-none flex items-center text-center text-[#B3B3B3] font-medium">분개 적중률</p>
                <p className="h-[21px] text-[15px] font-semibold leading-[140%] flex items-center text-center text-[#1E1E1E]">
                  {stats.accuracy}%
                </p>
              </div>
            </div>

            <div>
              {vouchers.map((voucher, idx) => {
                // transactions가 없거나 배열이 아닌 경우 빈 배열로 처리
                const transactions = voucher.transactions && Array.isArray(voucher.transactions) 
                  ? voucher.transactions 
                  : [];
                
                const debitSubtotal = transactions.filter(t => t.debitCredit).reduce((sum, t) => sum + (t.amount || 0), 0);
                const creditSubtotal = transactions.filter(t => !t.debitCredit).reduce((sum, t) => sum + (t.amount || 0), 0);

                return (
                  <div key={`voucher-${idx}`} className="flex flex-row items-start w-full">
                    {/* 번호 + 일자 그룹 */}
                    <div className="flex flex-col items-start w-[150px] min-w-[150px]">
                      <div className="flex flex-row items-center w-full">
                        {/* 번호 컬럼 */}
                        <div className="flex flex-col justify-center items-start w-[40px] min-w-[40px]">
                          {idx === 0 && (
                            <div className="flex flex-row justify-center items-center p-2 gap-2 w-full h-[64px] bg-[#F5F5F5] border-l border-t border-r border-b border-[#D9D9D9]">
                              <span className="font-medium text-[12px] leading-[100%] text-[#757575]">번호</span>
                            </div>
                          )}
                          <div className="flex flex-col justify-center items-center px-1 py-2 w-full bg-white border-l border-r border-b border-[#D9D9D9]" style={{ height: `${32 * (transactions.length || 2)}px` }}>
                            <span className="font-medium text-[12px] leading-[100%] text-[#757575]">{idx + 1}</span>
                          </div>
                        </div>
                        {/* 일자 컬럼 */}
                        <div className="flex flex-col justify-center items-start w-[110px] min-w-[110px]">
                          {idx === 0 && (
                            <div className="flex flex-row justify-center items-center p-2 gap-2 w-full h-[64px] bg-[#F5F5F5] border-t border-r border-b border-[#D9D9D9]">
                              <span className="font-medium text-[12px] leading-[100%] text-[#757575]">일자</span>
                            </div>
                          )}
                          <div className="flex flex-row justify-center items-center px-2 py-2 w-full bg-white border-r border-b border-[#D9D9D9]" style={{ height: `${32 * (transactions.length || 2)}px` }}>
                            <input
                              type="date"
                              className="w-full text-[12px] leading-[100%] text-[#757575] bg-transparent border-none outline-none" 
                              value={voucher.date || ''}
                              onChange={(e) => handleVoucherDescriptionChange(voucher.id, e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      {/* 소계 */}
                      <div className="flex flex-row justify-center items-center p-2 gap-2 w-full h-[32px] bg-[#F5F5F5] border-l border-r border-b border-[#D9D9D9]">
                        <span className="font-medium text-[12px] leading-[100%] text-[#757575]">소계</span>
                      </div>
                    </div>
                    
                    {/* 차변 그룹 */}
                    <div className="flex flex-col items-start flex-1 min-w-[241px]">
                      {idx === 0 && (
                        <>
                          {/* 차변 헤더 */}
                          <div className="flex flex-row justify-center items-center p-2 gap-2 w-full h-[32px] bg-[#F5F5F5] border-t border-r border-b border-[#D9D9D9]">
                            <span className="font-medium text-[12px] leading-[100%] text-[#757575]">차변</span>
                          </div>
                          {/* 차변 세부 헤더 */}
                          <div className="flex flex-row items-start w-full">
                            <div className="flex flex-row justify-center items-center p-2 gap-2 flex-1 min-w-[80px] h-[32px] bg-[#F5F5F5] border-r border-b border-[#D9D9D9]">
                              <span className="font-medium text-[12px] leading-[100%] text-[#757575]">계정과목</span>
                            </div>
                            <div className="flex flex-row justify-center items-center p-2 gap-2 flex-1 min-w-[80px] h-[32px] bg-[#F5F5F5] border-r border-b border-[#D9D9D9]">
                              <span className="font-medium text-[12px] leading-[100%] text-[#757575]">금액</span>
                            </div>
                            <div className="flex flex-row justify-center items-center p-2 gap-2 flex-1 min-w-[60px] h-[32px] bg-[#F5F5F5] border-r border-b border-[#D9D9D9]">
                              <span className="font-medium text-[12px] leading-[100%] text-[#757575]">거래처</span>
                            </div>
                          </div>
                        </>
                      )}
                      
                      {/* 차변 입력 행들 */}
                      {transactions.map((transaction, tIdx) => (
                        transaction.debitCredit ? (
                          <div key={`debit-${tIdx}`} className="flex flex-row items-start w-full">
                            <div className="flex flex-row items-center p-2 flex-1 min-w-[80px] h-[32px] bg-white border-r border-b border-[#D9D9D9]">
                              <select
                                className="w-full font-medium text-[12px] leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none" 
                                value={transaction.accountName || ''}
                                onChange={(e) => handleCellChange(voucher.id, transaction.id, 'accountName', e.target.value)}
                              >
                                <option value="">선택하기</option>
                                {accounts.map(account => (
                                  <option key={account.id} value={account.name}>
                                    {account.code} {account.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="flex flex-row items-center p-2 flex-1 min-w-[80px] h-[32px] bg-white border-r border-b border-[#D9D9D9]">
                              <input
                                type="text"
                                className="flex-1 h-[12px] font-medium text-[12px] leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none" 
                                placeholder="입력하기"
                                value={transaction.amount ? transaction.amount.toLocaleString() : ''}
                                onChange={(e) => {
                                  const numericValue = e.target.value.replace(/[^0-9]/g, '');
                                  handleCellChange(voucher.id, transaction.id, 'amount', parseInt(numericValue) || 0);
                                }}
                              />
                              <span className="ml-1 font-medium text-[12px] leading-[100%] text-[#B3B3B3]">원</span>
                            </div>
                            <div className="flex flex-row items-center p-2 flex-1 min-w-[60px] h-[32px] bg-white border-r border-b border-[#D9D9D9]">
                              <select
                                className="w-full font-medium text-[12px] leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none" 
                                value={transaction.partnerName || ''}
                                onChange={(e) => handleCellChange(voucher.id, transaction.id, 'partnerName', e.target.value)}
                              >
                                <option value="">선택하기</option>
                                {partners.map(partner => (
                                  <option key={partner.id} value={partner.name}>
                                    {partner.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        ) : (
                          <div key={`debit-empty-${tIdx}`} className="flex flex-row items-start w-full">
                            <div className="flex flex-row items-center p-2 flex-1 min-w-[80px] h-[32px] bg-white border-r border-b border-[#D9D9D9]"></div>
                            <div className="flex flex-row items-center p-2 flex-1 min-w-[80px] h-[32px] bg-white border-r border-b border-[#D9D9D9]"></div>
                            <div className="flex flex-row items-center p-2 flex-1 min-w-[60px] h-[32px] bg-white border-r border-b border-[#D9D9D9]"></div>
                          </div>
                        )
                      ))}
                      
                      {/* 차변 소계 행 */}
                      <div className="flex flex-row items-start w-full">
                        <div className="flex flex-row items-center p-2 flex-1 min-w-[60px] h-[32px] bg-white border-r border-b border-[#D9D9D9]">
                          <span className="flex-1 font-medium text-[12px] leading-[100%] text-[#757575]">
                            {debitSubtotal.toLocaleString()}
                          </span>
                          <span className="ml-1 font-medium text-[12px] leading-[100%] text-[#757575]">원</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* 대변 그룹 */}
                    <div className="flex flex-col items-start flex-1 min-w-[241px]">
                      {idx === 0 && (
                        <>
                          {/* 대변 헤더 */}
                          <div className="flex flex-row justify-center items-center p-2 gap-2 w-full h-[32px] bg-[#F5F5F5] border-t border-r border-b border-[#D9D9D9]">
                            <span className="font-medium text-[12px] leading-[100%] text-[#757575]">대변</span>
                          </div>
                          {/* 대변 세부 헤더 */}
                          <div className="flex flex-row items-start w-full">
                            <div className="flex flex-row justify-center items-center p-2 gap-2 flex-1 min-w-[80px] h-[32px] bg-[#F5F5F5] border-r border-b border-[#D9D9D9]">
                              <span className="font-medium text-[12px] leading-[100%] text-[#757575]">계정과목</span>
                            </div>
                            <div className="flex flex-row justify-center items-center p-2 gap-2 flex-1 min-w-[80px] h-[32px] bg-[#F5F5F5] border-r border-b border-[#D9D9D9]">
                              <span className="font-medium text-[12px] leading-[100%] text-[#757575]">금액</span>
                            </div>
                            <div className="flex flex-row justify-center items-center p-2 gap-2 flex-1 min-w-[60px] h-[32px] bg-[#F5F5F5] border-r border-b border-[#D9D9D9]">
                              <span className="font-medium text-[12px] leading-[100%] text-[#757575]">거래처</span>
                            </div>
                          </div>
                        </>
                      )}
                      
                      {/* 대변 입력 행들 */}
                      {transactions.map((transaction, tIdx) => (
                        !transaction.debitCredit ? (
                          <div key={`credit-${tIdx}`} className="flex flex-row items-start w-full">
                            <div className="flex flex-row items-center p-2 flex-1 min-w-[80px] h-[32px] bg-white border-r border-b border-[#D9D9D9]">
                              <select
                                className="w-full font-medium text-[12px] leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none" 
                                value={transaction.accountName || ''}
                                onChange={(e) => handleCellChange(voucher.id, transaction.id, 'accountName', e.target.value)}
                              >
                                <option value="">선택하기</option>
                                {accounts.map(account => (
                                  <option key={account.id} value={account.name}>
                                    {account.code} {account.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="flex flex-row items-center p-2 flex-1 min-w-[80px] h-[32px] bg-white border-r border-b border-[#D9D9D9]">
                              <input
                                type="text"
                                className="flex-1 h-[12px] font-medium text-[12px] leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none" 
                                placeholder="입력하기"
                                value={transaction.amount ? transaction.amount.toLocaleString() : ''}
                                onChange={(e) => {
                                  const numericValue = e.target.value.replace(/[^0-9]/g, '');
                                  handleCellChange(voucher.id, transaction.id, 'amount', parseInt(numericValue) || 0);
                                }}
                              />
                              <span className="ml-1 font-medium text-[12px] leading-[100%] text-[#B3B3B3]">원</span>
                            </div>
                            <div className="flex flex-row items-center p-2 flex-1 min-w-[60px] h-[32px] bg-white border-r border-b border-[#D9D9D9]">
                              <select
                                className="w-full font-medium text-[12px] leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none" 
                                value={transaction.partnerName || ''}
                                onChange={(e) => handleCellChange(voucher.id, transaction.id, 'partnerName', e.target.value)}
                              >
                                <option value="">선택하기</option>
                                {partners.map(partner => (
                                  <option key={partner.id} value={partner.name}>
                                    {partner.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        ) : (
                          <div key={`credit-empty-${tIdx}`} className="flex flex-row items-start w-full">
                            <div className="flex flex-row items-center p-2 flex-1 min-w-[80px] h-[32px] bg-white border-r border-b border-[#D9D9D9]"></div>
                            <div className="flex flex-row items-center p-2 flex-1 min-w-[80px] h-[32px] bg-white border-r border-b border-[#D9D9D9]"></div>
                            <div className="flex flex-row items-center p-2 flex-1 min-w-[60px] h-[32px] bg-white border-r border-b border-[#D9D9D9]"></div>
                          </div>
                        )
                      ))}
                      
                      {/* 대변 소계 행 */}
                      <div className="flex flex-row items-start w-full">
                        <div className="flex flex-row items-center p-2 flex-1 min-w-[60px] h-[32px] bg-white border-r border-b border-[#D9D9D9]">
                          <span className="flex-1 font-medium text-[12px] leading-[100%] text-[#757575]">
                            {creditSubtotal.toLocaleString()}
                          </span>
                          <span className="ml-1 font-medium text-[12px] leading-[100%] text-[#757575]">원</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* 적요 그룹 */}
                    <div className="flex flex-col items-start flex-1 min-w-[120px]">
                      {idx === 0 && (
                        <div className="flex flex-row justify-center items-center p-2 gap-2 w-full h-[64px] bg-[#F5F5F5] border-t border-r border-b border-[#D9D9D9]">
                          <span className="font-medium text-[12px] leading-[100%] text-[#757575]">적요</span>
                        </div>
                      )}
                      {transactions.map((transaction, tIdx) => (
                        <div key={`description-${tIdx}`} className="flex flex-row items-center p-2 w-full h-[32px] bg-white border-r border-b border-[#D9D9D9]">
                          <input
                            className="w-full h-[12px] font-medium text-[12px] leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none" 
                            placeholder="입력하기"
                            value={tIdx === 0 ? voucher.description || '' : ''}
                            onChange={(e) => tIdx === 0 && handleVoucherDescriptionChange(voucher.id, e.target.value)}
                          />
                        </div>
                      ))}
                      <div className="flex flex-row items-center p-2 w-full h-[32px] bg-white border-r border-b border-[#D9D9D9]">
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
      
      <ToastMessage 
        message={toastMessage}
        isVisible={showToast}
        onHide={() => setShowToast(false)}
      />
    </div>
  );
}
