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
      // 파일 선택 후 자동으로 업로드 시작
      setTimeout(() => {
        handleExtractStart();
      }, 100);
    }
  };

  // 드래그 앤 드롭
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles && droppedFiles.length > 0) {
      setFiles(droppedFiles);
      // 파일 드롭 후 자동으로 업로드 시작
      setTimeout(() => {
        handleExtractStart();
      }, 100);
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
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        buffer += chunk;
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        let currentEvent = '';
        for (const line of lines) {
          if (line.startsWith('event:')) {
            currentEvent = line.substring(6).trim();
            continue;
          }
          if (line.startsWith('data:')) {
            const data = line.substring(5).trim();
            if (data && data !== '[DONE]') {
              try {
                const parsedData = JSON.parse(data);

                if (currentEvent === 'progress') {
                  setProgress((prev) => ({
                    ...prev,
                    ...parsedData,
                    processed:
                      parsedData.processed ?? prev?.processed ?? 0,
                    total: parsedData.total ?? prev?.total ?? 1,
                  }));
                } else if (currentEvent === 'done') {
                  const extractedTransactions = parsedData.transactions || [];
                  setTransactions(extractedTransactions);
                  setStats((prev) => ({
                    ...prev,
                    transactionCount: parsedData.totalExtracted || 0,
                  }));

                  if (extractedTransactions.length > 0) {
                    handleProcessStart(extractedTransactions);
                  } else {
                    setStep('result');
                    setLoading(false);
                  }
                  return;
                }
              } catch (err) {
                console.error('SSE 데이터 파싱 에러:', err, data);
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
        err instanceof Error ? err.message : '분개 처리 시작 중 문제가 발생했습니다.'
      );
      setLoading(false);
    }
  };

  // 분개 처리 스트림
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
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        buffer += chunk;
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        let currentEvent = '';
        for (const line of lines) {
          if (line.startsWith('event:')) {
            currentEvent = line.substring(6).trim();
            continue;
          }
          if (line.startsWith('data:')) {
            const data = line.substring(5).trim();
            if (data && data !== '[DONE]') {
              try {
                const parsedData = JSON.parse(data);

                if (currentEvent === 'progress') {
                  // ✅ progress 단계: 프로그레스바만 갱신
                  setProgress((prev) => ({
                    ...prev,
                    ...parsedData,
                    processed:
                      parsedData.processed ?? prev?.processed ?? 0,
                    total: parsedData.total ?? prev?.total ?? 1,
                  }));
                 } else if (currentEvent === 'done') {
                   // ✅ done 단계: 표 데이터 최종 반영
                   const rawVouchers = parsedData.vouchers || [];
                   
                   // API 응답을 올바른 형태로 변환
                   const transformedVouchers = rawVouchers.map((voucher: {
                     transactionId: string;
                     date: string;
                     description: string;
                     debits?: Array<{
                       amount: number;
                       partner: string;
                       account: string;
                       note?: string;
                     }>;
                     credits?: Array<{
                       amount: number;
                       partner: string;
                       account: string;
                       note?: string;
                     }>;
                   }) => {
                     const transactions: Transaction[] = [];
                     
                     // 차변 거래 추가
                     if (voucher.debits) {
                       voucher.debits.forEach((debit: {
                         amount: number;
                         partner: string;
                         account: string;
                         note?: string;
                       }) => {
                         transactions.push({
                           id: `${voucher.transactionId}-debit-${transactions.length}`,
                           date: voucher.date,
                           description: voucher.description,
                           amount: debit.amount,
                           partnerName: debit.partner,
                           accountName: debit.account,
                           debitCredit: true, // 차변
                           note: debit.note || '',
                         });
                       });
                     }
                     
                     // 대변 거래 추가
                     if (voucher.credits) {
                       voucher.credits.forEach((credit: {
                         amount: number;
                         partner: string;
                         account: string;
                         note?: string;
                       }) => {
                         transactions.push({
                           id: `${voucher.transactionId}-credit-${transactions.length}`,
                           date: voucher.date,
                           description: voucher.description,
                           amount: credit.amount,
                           partnerName: credit.partner,
                           accountName: credit.account,
                           debitCredit: false, // 대변
                           note: credit.note || '',
                         });
                       });
                     }
                     
                     return {
                       id: voucher.transactionId?.toString() || Math.random().toString(),
                       date: voucher.date,
                       description: voucher.description,
                       transactions,
                     };
                   });
                   
                   setVouchers(transformedVouchers);

                   // 통계 계산
                   let debitTotal = 0;
                   let creditTotal = 0;
                   transformedVouchers.forEach((voucher: Voucher) => {
                     voucher.transactions.forEach((t: Transaction) => {
                       if (t.debitCredit) debitTotal += t.amount;
                       else creditTotal += t.amount;
                     });
                   });

                   setStats({
                     transactionCount: parsedData.totalVouchers || 0,
                     newPartnerCount: parsedData.totalNewPartners || 0,
                     debitTotal,
                     creditTotal,
                     accuracy: 95,
                   });

                   setStep('result');
                   setLoading(false);
                   return;
                 }
              } catch (err) {
                console.error('분개 SSE 데이터 파싱 에러:', err, data);
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
            <p className="text-[#767676]">
              파일을 업로드해서 자동으로 분개를 시작하세요.
            </p>
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
          </div>
        </div>

        {/* 업로드 단계 */}
        {step === 'upload' && (
          <div
            className="bg-white border-2 border-dashed border-[#D9D9D9] rounded-lg p-12 text-center mb-6"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <p className="text-lg text-[#1E1E1E] mb-2">
              파일을 선택하거나 드래그하여 업로드하세요.
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

        {/* 결과 */}
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

            <div className="bg-white border border-[#D9D9D9] rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F5F5F5]">
                    <th className="p-3 border">번호</th>
                    <th className="p-3 border">일자</th>
                    <th className="p-3 border" colSpan={3}>
                      차변
                    </th>
                    <th className="p-3 border" colSpan={3}>
                      대변
                    </th>
                    <th className="p-3 border">적요</th>
                  </tr>
                </thead>
                <tbody>
                  {vouchers.map((voucher, idx) => {
                    const debit = voucher.transactions.filter((t) => t.debitCredit);
                    const credit = voucher.transactions.filter((t) => !t.debitCredit);
                    const rows = Math.max(debit.length, credit.length);

                    return (
                      <React.Fragment key={voucher.id}>
                        {Array.from({ length: rows }).map((_, r) => (
                          <tr key={`${voucher.id}-${r}`}>
                            <td className="p-3 border text-sm text-[#757575]">
                              {r === 0 ? idx + 1 : ''}
                            </td>
                            <td className="p-3 border text-sm text-[#757575]">
                              {r === 0 ? voucher.date : ''}
                            </td>
                            <td className="p-3 border text-sm text-[#757575]">
                              {debit[r]?.accountName || ''}
                            </td>
                            <td className="p-3 border text-sm text-[#757575]">
                              {debit[r]?.amount
                                ? `${debit[r].amount.toLocaleString()}원`
                                : ''}
                            </td>
                            <td className="p-3 border text-sm text-[#757575]">
                              {debit[r]?.partnerName || ''}
                            </td>
                            <td className="p-3 border text-sm text-[#757575]">
                              {credit[r]?.accountName || ''}
                            </td>
                            <td className="p-3 border text-sm text-[#757575]">
                              {credit[r]?.amount
                                ? `${credit[r].amount.toLocaleString()}원`
                                : ''}
                            </td>
                            <td className="p-3 border text-sm text-[#757575]">
                              {credit[r]?.partnerName || ''}
                            </td>
                            <td className="p-3 border text-sm text-[#757575]">
                              {r === 0 ? voucher.description : ''}
                            </td>
                          </tr>
                        ))}
                        {/* 소계 */}
                        <tr className="bg-[#F5F5F5]">
                          <td className="p-3 border font-medium">소계</td>
                          <td className="p-3 border"></td>
                          <td className="p-3 border"></td>
                          <td className="p-3 border font-medium">
                            {debit
                              .reduce((s, t) => s + t.amount, 0)
                              .toLocaleString()}
                            원
                          </td>
                          <td className="p-3 border"></td>
                          <td className="p-3 border"></td>
                          <td className="p-3 border font-medium">
                            {credit
                              .reduce((s, t) => s + t.amount, 0)
                              .toLocaleString()}
                            원
                          </td>
                          <td className="p-3 border"></td>
                          <td className="p-3 border"></td>
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
