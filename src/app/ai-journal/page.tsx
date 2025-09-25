'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  partnerName?: string;
  partnerId?: string;
  accountName?: string;
  accountId?: string;
  debitCredit?: boolean;
  note?: string;
}

interface Voucher {
  id: string;
  date: string;
  description: string;
  transactions: Transaction[];
}

interface ProgressData {
  stage: string;
  processed: number;
  total: number;
  totalExtracted?: number;
  batchNumber?: number;
  totalBatches?: number;
  totalVouchers?: number;
  totalNewPartners?: number;
}

export default function AIJournalPage() {
  const router = useRouter();
  const { isAuthenticated, loading: authLoading } = useAuth();
  const [step, setStep] = useState<'upload' | 'processing' | 'result'>('upload');
  const [files, setFiles] = useState<FileList | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [vouchers, setVouchers] = useState<Voucher[]>([]);
  const [progress, setProgress] = useState<ProgressData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 통계 데이터
  const [stats, setStats] = useState({
    transactionCount: 0,
    newPartnerCount: 0,
    debitTotal: 0,
    creditTotal: 0,
    accuracy: 0,
  });

  // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, router]);

  // 파일 선택 핸들러
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      setFiles(selectedFiles);
    }
  };

  // 드래그 앤 드롭 핸들러
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles && droppedFiles.length > 0) {
      setFiles(droppedFiles);
    }
  };

  // 증빙 업로드 및 추출 시작
  const handleExtractStart = async () => {
    if (!files || files.length === 0) {
      alert('파일을 선택해주세요.');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setStep('processing');

      const token = localStorage.getItem('accessToken');
      if (!token) {
        throw new Error('로그인이 필요합니다.');
      }

      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i]);
      }

      const response = await fetch(
        'https://api.eosxai.com/api/ai/extract-raw-transactions/start',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || '추출 시작 실패');
      }

      const data = await response.json();

      // SSE 스트림 시작
      startExtractStream(data.jobId);
    } catch (err) {
      console.error('추출 시작 에러:', err);
      setError(
        err instanceof Error ? err.message : '추출 시작 중 문제가 발생했습니다.'
      );
      setLoading(false);
    }
  };

// 추출 진행률 스트림
const startExtractStream = async (jobId: string) => {
  const token = localStorage.getItem('accessToken');
  if (!token) return;

  try {
    const response = await fetch(
      `https://api.eosxai.com/api/ai/extract-raw-transactions/stream?jobId=${jobId}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'text/event-stream',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const reader = response.body?.getReader();
    if (!reader) throw new Error('Response body is not readable');

    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        console.log('SSE 스트림 종료');
        break;
      }

      const chunk = decoder.decode(value, { stream: true });
      console.log('SSE 청크 수신:', chunk);
      buffer += chunk;
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      let currentEvent = '';
      for (const line of lines) {
        if (line.startsWith('event:')) {
          currentEvent = line.substring(6).trim();
          console.log('SSE 이벤트:', currentEvent);
          continue;
        }

        if (line.startsWith('data:')) {
          const data = line.substring(5).trim();
          console.log('SSE 데이터:', data);
          if (data && data !== '[DONE]') {
            try {
              const parsedData = JSON.parse(data);
              console.log('SSE 파싱된 데이터:', currentEvent, parsedData);

              if (currentEvent === 'connected') {
                console.log('SSE 연결 확인:', parsedData);
                // 연결 확인 후 계속 대기
              } else if (currentEvent === 'progress') {
                console.log('진행률 업데이트:', parsedData);
                setProgress(prev => ({
                  ...prev,
                  ...parsedData,
                  processed: parsedData.processed ?? prev?.processed ?? 0,
                  total: parsedData.total ?? prev?.total ?? 1,
                }));
              } else if (currentEvent === 'done') {
                console.log('추출 완료:', parsedData);
                const extractedTransactions = parsedData.transactions || [];
                setTransactions(extractedTransactions);
                setStats(prev => ({
                  ...prev,
                  transactionCount: parsedData.totalExtracted || 0,
                }));
                // 추출 완료 후 자동으로 분개 처리 시작
                if (extractedTransactions.length > 0) {
                  handleProcessStart(extractedTransactions);
                } else {
                  setStep('result');
                  setLoading(false);
                }
                return;
              }
            } catch (err) {
              console.error('SSE 데이터 파싱 에러:', err, '원본 데이터:', data);
            }
          }
        }
      }
    }
  } catch (err) {
    console.error('SSE 에러:', err);
    setError('진행률 스트림 연결에 실패했습니다.');
    setLoading(false);
  }
};

  // 분개 처리 시작
  const handleProcessStart = async (transactionsToProcess?: Transaction[]) => {
    const targetTransactions = transactionsToProcess || transactions;
    if (targetTransactions.length === 0) {
      alert('처리할 거래가 없습니다.');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setStep('processing');

      const token = localStorage.getItem('accessToken');
      if (!token) {
        throw new Error('로그인이 필요합니다.');
      }

      const response = await fetch(
        'https://api.eosxai.com/api/ai/process-journal-entries/start',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ transactions: targetTransactions }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || '분개 처리 시작 실패');
      }

      const data = await response.json();

      startProcessStream(data.jobId);
    } catch (err) {
      console.error('분개 처리 시작 에러:', err);
      setError(
        err instanceof Error
          ? err.message
          : '분개 처리 시작 중 문제가 발생했습니다.'
      );
      setLoading(false);
    }
  };

  // 분개 처리 진행률 스트림
  const startProcessStream = async (jobId: string) => {
    const token = localStorage.getItem('accessToken');
    if (!token) return;

    try {
      const response = await fetch(
        `https://api.eosxai.com/api/ai/process-journal-entries/stream?jobId=${jobId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'text/event-stream',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error('Response body is not readable');

      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          console.log('분개 SSE 스트림 종료');
          break;
        }

        const chunk = decoder.decode(value, { stream: true });
        console.log('분개 SSE 청크 수신:', chunk);
        buffer += chunk;
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        let currentEvent = '';
        for (const line of lines) {
          if (line.startsWith('event:')) {
            currentEvent = line.substring(6).trim();
            console.log('분개 SSE 이벤트:', currentEvent);
            continue;
          }

          if (line.startsWith('data:')) {
            const data = line.substring(5).trim();
            console.log('분개 SSE 데이터:', data);
            if (data && data !== '[DONE]') {
              try {
                const parsedData = JSON.parse(data);
                console.log('분개 SSE 파싱된 데이터:', currentEvent, parsedData);

                if (currentEvent === 'connected') {
                  console.log('분개 SSE 연결 확인:', parsedData);
                  // 연결 확인 후 계속 대기
                } else if (currentEvent === 'progress') {
                  console.log('분개 진행률 업데이트:', parsedData);
                  setProgress((prev) => ({
                    ...prev,
                    ...parsedData,
                    processed: parsedData.processed ?? prev?.processed ?? 0,
                    total: parsedData.total ?? prev?.total ?? 1,
                  }));
                } else if (currentEvent === 'done') {
                  console.log('분개 완료:', parsedData);
                  const vouchersData = parsedData.vouchers || [];
                  setVouchers(vouchersData);
                  
                  // 차변/대변 합계 계산
                  let debitTotal = 0;
                  let creditTotal = 0;
                  vouchersData.forEach((voucher: Voucher) => {
                    voucher.transactions.forEach((transaction: Transaction) => {
                      if (transaction.debitCredit) {
                        debitTotal += transaction.amount;
                      } else {
                        creditTotal += transaction.amount;
                      }
                    });
                  });
                  
                  setStats((prev) => ({
                    ...prev,
                    newPartnerCount: parsedData.totalNewPartners || 0,
                    debitTotal: debitTotal,
                    creditTotal: creditTotal,
                    accuracy: 95,
                  }));
                  setStep('result');
                  setLoading(false);
                  return;
                }
              } catch (err) {
                console.error(
                  '분개 SSE 데이터 파싱 에러:',
                  err,
                  '원본 데이터:',
                  data
                );
              }
            }
          }
        }
      }
    } catch (err) {
      console.error('SSE 에러:', err);
      setError('진행률 스트림 연결에 실패했습니다.');
      setLoading(false);
    }
  };

  // 전표 저장
  const handleSaveVouchers = async () => {
    if (vouchers.length === 0) {
      alert('저장할 전표가 없습니다.');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem('accessToken');
      if (!token) {
        throw new Error('로그인이 필요합니다.');
      }

      // 각 전표를 순차적으로 저장
      for (const voucher of vouchers) {
        // 1. 전표 생성
        const voucherFormData = new FormData();
        voucherFormData.append('date', voucher.date);
        if (voucher.description) {
          voucherFormData.append('description', voucher.description);
        }

        const voucherResponse = await fetch(
          'https://api.eosxai.com/api/vouchers',
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: voucherFormData,
          }
        );

        if (!voucherResponse.ok) {
          const errorData = await voucherResponse.json();
          throw new Error(errorData.error || '전표 생성 실패');
        }

        const voucherData = await voucherResponse.json();

        // 2. 거래 생성
        for (const transaction of voucher.transactions) {
          const transactionResponse = await fetch(
            'https://api.eosxai.com/api/transactions',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                voucherId: voucherData.id,
                amount: transaction.amount,
                partnerId: transaction.partnerId || null,
                accountId: transaction.accountId || null,
                debitCredit: transaction.debitCredit || false,
                note: transaction.note || null,
              }),
            }
          );

          if (!transactionResponse.ok) {
            const errorData = await transactionResponse.json();
            throw new Error(errorData.error || '거래 생성 실패');
          }
        }
      }

      alert('전표가 성공적으로 저장되었습니다!');
      // 저장 완료 후 결과 화면 유지
      // setStep('upload');
      // setFiles(null);
      // setTransactions([]);
      // setVouchers([]);
      // setProgress(null);
    } catch (err) {
      console.error('전표 저장 에러:', err);
      setError(
        err instanceof Error ? err.message : '전표 저장 중 문제가 발생했습니다.'
      );
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-8">로딩 중...</div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold mb-2 text-[#1E1E1E]">AI 분개</h2>
            <p className="text-[#767676]">파일을 업로드해서 자동으로 분개를 시작하세요.</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleExtractStart}
              disabled={!files || files.length === 0 || loading}
              className={`px-4 py-2 rounded text-sm ${
                files && files.length > 0 && !loading
                  ? 'bg-[#2C2C2C] text-white'
                  : 'bg-[#E6E6E6] text-[#1E1E1E]'
              }`}
            >
              파일 업로드
            </button>
            <button
              onClick={handleSaveVouchers}
              disabled={vouchers.length === 0 || loading}
              className={`px-4 py-2 rounded text-sm ${
                vouchers.length > 0 && !loading
                  ? 'bg-[#2C2C2C] text-white'
                  : 'bg-[#E6E6E6] text-[#1E1E1E]'
              }`}
            >
              저장하기
            </button>
          </div>
        </div>

        {/* 파일 업로드 영역 */}
        {step === 'upload' && (
          <div
            className="bg-white border-2 border-dashed border-[#D9D9D9] rounded-lg p-12 text-center mb-6"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <p className="text-lg text-[#1E1E1E] mb-2">
              파일을 선택하거나 드래그하여 파일을 편하게 업로드하세요.
            </p>
            <p className="text-sm text-[#767676] mb-6">
              (JPG, PNG, PDF, DOC, DOCX, XLSX, XLS 파일만 지원됩니다.)
            </p>
            <input
              type="file"
              multiple
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.xlsx,.xls"
              onChange={handleFileSelect}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="inline-block px-6 py-3 bg-[#2C2C2C] text-white rounded-lg cursor-pointer hover:bg-[#1E1E1E] transition-colors"
            >
              파일 선택
            </label>
            {files && (
              <div className="mt-4">
                <p className="text-sm text-[#767676] mb-2">선택된 파일:</p>
                <ul className="text-sm">
                  {Array.from(files).map((file, index) => (
                    <li key={index} className="text-[#1E1E1E]">
                      • {file.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* 처리 중 */}
        {step === 'processing' && (
          <div className="bg-white border border-[#D9D9D9] rounded-lg p-12 text-center mb-6">
            <div className="mb-6">
              <div className="w-full bg-[#E6E6E6] rounded-full h-2 mb-4">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${
                      progress && progress.total && progress.total > 0
                        ? (progress.processed / progress.total) * 100
                        : 0
                    }%`,
                  }}
                />
              </div>
              <p className="text-lg text-[#1E1E1E]">
                파일 내용을 분석하고 분개작업을 진행중입니다. (
                {progress?.processed || 0}/{progress?.total || 0})
              </p>
            </div>
          </div>
        )}

        {/* 결과 통계 */}
        {step === 'result' && vouchers.length > 0 && (
          <>
            <div className="grid grid-cols-5 gap-4 mb-6">
              <div className="bg-white border border-[#D9D9D9] rounded-lg p-4 text-center">
                <p className="text-sm text-[#767676] mb-1">거래건수</p>
                <p className="text-xl font-bold text-[#1E1E1E]">
                  {stats.transactionCount}건
                </p>
              </div>
              <div className="bg-white border border-[#D9D9D9] rounded-lg p-4 text-center">
                <p className="text-sm text-[#767676] mb-1">신규거래처수</p>
                <p className="text-xl font-bold text-[#1E1E1E]">
                  {stats.newPartnerCount}개
                </p>
              </div>
              <div className="bg-white border border-[#D9D9D9] rounded-lg p-4 text-center">
                <p className="text-sm text-[#767676] mb-1">차변합계</p>
                <p className="text-xl font-bold text-[#1E1E1E]">
                  {stats.debitTotal.toLocaleString()}원
                </p>
              </div>
              <div className="bg-white border border-[#D9D9D9] rounded-lg p-4 text-center">
                <p className="text-sm text-[#767676] mb-1">대변합계</p>
                <p className="text-xl font-bold text-[#1E1E1E]">
                  {stats.creditTotal.toLocaleString()}원
                </p>
              </div>
              <div className="bg-white border border-[#D9D9D9] rounded-lg p-4 text-center">
                <p className="text-sm text-[#767676] mb-1">분개 적중률</p>
                <p className="text-xl font-bold text-[#1E1E1E]">
                  {stats.accuracy}%
                </p>
              </div>
            </div>

            {/* 분개 테이블 */}
            <div className="bg-white border border-[#D9D9D9] rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F5F5F5]">
                    <th className="p-3 border border-[#D9D9D9] text-center font-medium">번호</th>
                    <th className="p-3 border border-[#D9D9D9] text-center font-medium">일자</th>
                    <th className="p-3 border border-[#D9D9D9] text-center font-medium" colSpan={3}>차변</th>
                    <th className="p-3 border border-[#D9D9D9] text-center font-medium" colSpan={3}>대변</th>
                    <th className="p-3 border border-[#D9D9D9] text-center font-medium">적요</th>
                  </tr>
                  <tr className="bg-[#F5F5F5]">
                    <th className="p-3 border border-[#D9D9D9] text-center font-medium"></th>
                    <th className="p-3 border border-[#D9D9D9] text-center font-medium"></th>
                    <th className="p-3 border border-[#D9D9D9] text-center font-medium">계정과목</th>
                    <th className="p-3 border border-[#D9D9D9] text-center font-medium">금액</th>
                    <th className="p-3 border border-[#D9D9D9] text-center font-medium">거래처</th>
                    <th className="p-3 border border-[#D9D9D9] text-center font-medium">계정과목</th>
                    <th className="p-3 border border-[#D9D9D9] text-center font-medium">금액</th>
                    <th className="p-3 border border-[#D9D9D9] text-center font-medium">거래처</th>
                    <th className="p-3 border border-[#D9D9D9] text-center font-medium"></th>
                  </tr>
                </thead>
                <tbody>
                  {vouchers.map((voucher, voucherIndex) => {
                    const debitTransactions = voucher.transactions.filter(t => t.debitCredit);
                    const creditTransactions = voucher.transactions.filter(t => !t.debitCredit);
                    const maxRows = Math.max(debitTransactions.length, creditTransactions.length);
                    
                    return (
                      <React.Fragment key={voucher.id}>
                        {Array.from({ length: maxRows }).map((_, rowIndex) => (
                          <tr key={`${voucher.id}-${rowIndex}`}>
                            <td className="p-3 border border-[#D9D9D9] text-center text-sm text-[#757575]">
                              {rowIndex === 0 ? voucherIndex + 1 : ''}
                            </td>
                            <td className="p-3 border border-[#D9D9D9] text-center text-sm text-[#757575]">
                              {rowIndex === 0 ? voucher.date : ''}
                            </td>
                            <td className="p-3 border border-[#D9D9D9] text-center text-sm text-[#757575]">
                              {debitTransactions[rowIndex]?.accountName || ''}
                            </td>
                            <td className="p-3 border border-[#D9D9D9] text-center text-sm text-[#757575]">
                              {debitTransactions[rowIndex]?.amount ? `${debitTransactions[rowIndex].amount.toLocaleString()}원` : ''}
                            </td>
                            <td className="p-3 border border-[#D9D9D9] text-center text-sm text-[#757575]">
                              {debitTransactions[rowIndex]?.partnerName || ''}
                            </td>
                            <td className="p-3 border border-[#D9D9D9] text-center text-sm text-[#757575]">
                              {creditTransactions[rowIndex]?.accountName || ''}
                            </td>
                            <td className="p-3 border border-[#D9D9D9] text-center text-sm text-[#757575]">
                              {creditTransactions[rowIndex]?.amount ? `${creditTransactions[rowIndex].amount.toLocaleString()}원` : ''}
                            </td>
                            <td className="p-3 border border-[#D9D9D9] text-center text-sm text-[#757575]">
                              {creditTransactions[rowIndex]?.partnerName || ''}
                            </td>
                            <td className="p-3 border border-[#D9D9D9] text-center text-sm text-[#757575]">
                              {rowIndex === 0 ? voucher.description : ''}
                            </td>
                          </tr>
                        ))}
                        {/* 소계 행 */}
                        <tr className="bg-[#F5F5F5]">
                          <td className="p-3 border border-[#D9D9D9] text-center font-medium">소계</td>
                          <td className="p-3 border border-[#D9D9D9] text-center font-medium"></td>
                          <td className="p-3 border border-[#D9D9D9] text-center font-medium"></td>
                          <td className="p-3 border border-[#D9D9D9] text-center font-medium">
                            {debitTransactions.reduce((sum, t) => sum + t.amount, 0).toLocaleString()}원
                          </td>
                          <td className="p-3 border border-[#D9D9D9] text-center font-medium"></td>
                          <td className="p-3 border border-[#D9D9D9] text-center font-medium"></td>
                          <td className="p-3 border border-[#D9D9D9] text-center font-medium">
                            {creditTransactions.reduce((sum, t) => sum + t.amount, 0).toLocaleString()}원
                          </td>
                          <td className="p-3 border border-[#D9D9D9] text-center font-medium"></td>
                          <td className="p-3 border border-[#D9D9D9] text-center font-medium"></td>
                        </tr>
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
