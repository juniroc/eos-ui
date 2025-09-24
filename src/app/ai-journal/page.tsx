'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  partnerName?: string;
  accountName?: string;
  debitCredit?: boolean;
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

interface JournalRow {
  id: number;
  date: string;
  debitAccount: string;
  debitAmount: string;
  debitPartner: string;
  creditAccount: string;
  creditAmount: string;
  creditPartner: string;
  description: string;
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
  const [rows, setRows] = useState<JournalRow[]>([]);
  
  // 통계 데이터
  const [stats, setStats] = useState({
    transactionCount: 0,
    newPartnerCount: 0,
    debitTotal: 0,
    creditTotal: 0,
    accuracy: 0
  });
  
  const eventSourceRef = useRef<EventSource | null>(null);

  // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, router]);

  // 컴포넌트 언마운트 시 EventSource 정리
  useEffect(() => {
    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
      }
    };
  }, []);

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
        formData.append('files[]', files[i]);
      }

      const response = await fetch('https://api.eosxai.com/api/ai/extract-raw-transactions/start', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || '추출 시작 실패');
      }

      const data = await response.json();
      
      // SSE 스트림 시작
      startExtractStream(data.jobId);
    } catch (err) {
      console.error('추출 시작 에러:', err);
      setError(err instanceof Error ? err.message : '추출 시작 중 문제가 발생했습니다.');
      setLoading(false);
    }
  };

  // 추출 진행률 스트림
  const startExtractStream = (jobId: string) => {
    const token = localStorage.getItem('accessToken');
    if (!token) return;

    const eventSource = new EventSource(
      `https://api.eosxai.com/api/ai/extract-raw-transactions/stream?jobId=${jobId}&token=${token}`
    );

    eventSourceRef.current = eventSource;

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        
        if (event.type === 'progress') {
          setProgress(data);
        } else if (event.type === 'done') {
          setTransactions(data.transactions || []);
          setStats(prev => ({
            ...prev,
            transactionCount: data.totalExtracted || 0
          }));
          // 추출 완료 후 자동으로 분개 처리 시작
          if (data.transactions && data.transactions.length > 0) {
            handleProcessStart(data.transactions);
          } else {
            setStep('result');
            setLoading(false);
          }
          eventSource.close();
        }
      } catch (err) {
        console.error('SSE 데이터 파싱 에러:', err);
      }
    };

    eventSource.onerror = (err) => {
      console.error('SSE 에러:', err);
      setError('진행률 스트림 연결에 실패했습니다.');
      setLoading(false);
      eventSource.close();
    };
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

      const response = await fetch('https://api.eosxai.com/api/ai/process-journal-entries/start', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ transactions: targetTransactions }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || '분개 처리 시작 실패');
      }

      const data = await response.json();
      
      // SSE 스트림 시작
      startProcessStream(data.jobId);
    } catch (err) {
      console.error('분개 처리 시작 에러:', err);
      setError(err instanceof Error ? err.message : '분개 처리 시작 중 문제가 발생했습니다.');
      setLoading(false);
    }
  };

  // 분개 처리 진행률 스트림
  const startProcessStream = (jobId: string) => {
    const token = localStorage.getItem('accessToken');
    if (!token) return;

    const eventSource = new EventSource(
      `https://api.eosxai.com/api/ai/process-journal-entries/stream?jobId=${jobId}&token=${token}`
    );

    eventSourceRef.current = eventSource;

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        
        if (event.type === 'progress') {
          setProgress(data);
        } else if (event.type === 'done') {
          setVouchers(data.vouchers || []);
          
          // 통계 업데이트
          setStats(prev => ({
            ...prev,
            newPartnerCount: data.totalNewPartners || 0,
            accuracy: 95 // 임시값, 실제로는 API에서 받아와야 함
          }));
          
          // 전표를 테이블 행으로 변환
          convertVouchersToRows(data.vouchers || []);
          
          setStep('result');
          setLoading(false);
          eventSource.close();
        }
      } catch (err) {
        console.error('SSE 데이터 파싱 에러:', err);
      }
    };

    eventSource.onerror = (err) => {
      console.error('SSE 에러:', err);
      setError('진행률 스트림 연결에 실패했습니다.');
      setLoading(false);
      eventSource.close();
    };
  };

  // 전표를 테이블 행으로 변환
  const convertVouchersToRows = (vouchers: Voucher[]) => {
    const newRows: JournalRow[] = [];
    let rowId = 1;
    let debitTotal = 0;
    let creditTotal = 0;

    vouchers.forEach((voucher) => {
      // 차변과 대변 거래를 분리
      const debitTransactions = voucher.transactions.filter(t => t.debitCredit);
      const creditTransactions = voucher.transactions.filter(t => !t.debitCredit);

      // 차변과 대변의 최대 개수만큼 행 생성
      const maxRows = Math.max(debitTransactions.length, creditTransactions.length);

      for (let i = 0; i < maxRows; i++) {
        const debitTxn = debitTransactions[i];
        const creditTxn = creditTransactions[i];

        newRows.push({
          id: rowId++,
          date: voucher.date,
          debitAccount: debitTxn?.accountName || '',
          debitAmount: debitTxn ? debitTxn.amount.toString() : '',
          debitPartner: debitTxn?.partnerName || '',
          creditAccount: creditTxn?.accountName || '',
          creditAmount: creditTxn ? creditTxn.amount.toString() : '',
          creditPartner: creditTxn?.partnerName || '',
          description: voucher.description
        });

        // 합계 계산
        if (debitTxn) debitTotal += debitTxn.amount;
        if (creditTxn) creditTotal += creditTxn.amount;
      }

      // 소계 행 추가
      if (maxRows > 0) {
        newRows.push({
          id: rowId++,
          date: '소계',
          debitAccount: '',
          debitAmount: '',
          debitPartner: '',
          creditAccount: '',
          creditAmount: '',
          creditPartner: '',
          description: ''
        });
      }
    });

    setRows(newRows);
    setStats(prev => ({
      ...prev,
      debitTotal,
      creditTotal
    }));
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

      const response = await fetch('https://api.eosxai.com/api/vouchers/upsert-with-transactions/batch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ items: vouchers }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || '전표 저장 실패');
      }

      const data = await response.json();
      if (data.success) {
        alert('전표가 성공적으로 저장되었습니다!');
        // 초기화
        setStep('upload');
        setFiles(null);
        setTransactions([]);
        setVouchers([]);
        setProgress(null);
      } else {
        throw new Error('전표 저장 실패');
      }
    } catch (err) {
      console.error('전표 저장 에러:', err);
      setError(err instanceof Error ? err.message : '전표 저장 중 문제가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  // 로딩 중이거나 인증되지 않은 경우
  if (authLoading) {
    return (
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-8">로딩 중...</div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // 리다이렉트가 처리됨
  }

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
          <div className="bg-white border-2 border-dashed border-[#D9D9D9] rounded-lg p-12 text-center mb-6">
            <div className="mb-4">
              <svg className="w-16 h-16 mx-auto text-[#767676]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <p className="text-lg text-[#1E1E1E] mb-2">
              파일을 선택하거나 드래그하여 파일을 편하게 업로드하세요.
            </p>
            <p className="text-sm text-[#767676] mb-6">
              (JPG, PNG, PDF, DOC, DOCX 파일만 지원됩니다.)
            </p>
            <input
              type="file"
              multiple
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
              onChange={handleFileSelect}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
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
                    <li key={index} className="text-[#1E1E1E]">• {file.name}</li>
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
                  style={{ width: `${progress ? (progress.processed / progress.total) * 100 : 0}%` }}
                />
              </div>
              <p className="text-lg text-[#1E1E1E]">
                파일 내용을 분석하고 분개작업을 진행중입니다. ({progress?.processed || 0}/{progress?.total || 0})
              </p>
            </div>
          </div>
        )}

        {/* 통계 */}
        {step === 'result' && (
          <div className="grid grid-cols-5 gap-4 mb-6">
            <div className="bg-white border border-[#D9D9D9] rounded-lg p-4 text-center">
              <p className="text-sm text-[#767676] mb-1">거래건수</p>
              <p className="text-xl font-bold text-[#1E1E1E]">{stats.transactionCount}건</p>
            </div>
            <div className="bg-white border border-[#D9D9D9] rounded-lg p-4 text-center">
              <p className="text-sm text-[#767676] mb-1">신규거래처수</p>
              <p className="text-xl font-bold text-[#1E1E1E]">{stats.newPartnerCount}개</p>
            </div>
            <div className="bg-white border border-[#D9D9D9] rounded-lg p-4 text-center">
              <p className="text-sm text-[#767676] mb-1">차변합계</p>
              <p className="text-xl font-bold text-[#1E1E1E]">{stats.debitTotal.toLocaleString()}원</p>
            </div>
            <div className="bg-white border border-[#D9D9D9] rounded-lg p-4 text-center">
              <p className="text-sm text-[#767676] mb-1">대변합계</p>
              <p className="text-xl font-bold text-[#1E1E1E]">{stats.creditTotal.toLocaleString()}원</p>
            </div>
            <div className="bg-white border border-[#D9D9D9] rounded-lg p-4 text-center">
              <p className="text-sm text-[#767676] mb-1">분개 적중률</p>
              <p className="text-xl font-bold text-[#1E1E1E]">{stats.accuracy}%</p>
            </div>
          </div>
        )}

        {/* 분개 테이블 */}
        {step === 'result' && rows.length > 0 && (
          <div className="bg-white border border-[#D9D9D9] rounded-lg overflow-hidden">
            <table className="w-full text-sm text-[#757575]">
              <thead>
                <tr>
                  <td
                    rowSpan={2}
                    className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium"
                    style={{width: '60px'}}
                  >
                    번호
                  </td>
                  <td
                    rowSpan={2}
                    className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium"
                    style={{width: '80px'}}
                  >
                    일자
                  </td>
                  <td
                    colSpan={3}
                    className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium"
                  >
                    차변
                  </td>
                  <td
                    colSpan={3}
                    className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium"
                  >
                    대변
                  </td>
                  <td
                    rowSpan={2}
                    className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium"
                  >
                    적요
                  </td>
                </tr>
                <tr>
                  <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">
                    계정과목
                  </td>
                  <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium" style={{width: '100px'}}>
                    금액
                  </td>
                  <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">
                    거래처
                  </td>
                  <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">
                    계정과목
                  </td>
                  <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium" style={{width: '100px'}}>
                    금액
                  </td>
                  <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">
                    거래처
                  </td>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr key={row.id}>
                    <td className="p-3 border border-[#D9D9D9] text-center" style={{width: '60px'}}>
                      {row.date === '소계' ? '' : idx + 1}
                    </td>
                    <td className="p-3 border border-[#D9D9D9] text-center" style={{width: '80px'}}>
                      {row.date === '소계' ? (
                        <span className="font-medium bg-[#F5F5F5] px-2 py-1 rounded">소계</span>
                      ) : (
                        row.date
                      )}
                    </td>
                    {/* 차변 */}
                    <td className="p-3 border border-[#D9D9D9]">
                      {row.date === '소계' ? (
                        <input
                          type="text"
                          className="w-full focus:outline-none text-[#B3B3B3]"
                          placeholder="입력하기"
                        />
                      ) : (
                        row.debitAccount || '입력하기'
                      )}
                    </td>
                    <td className="p-3 border border-[#D9D9D9]" style={{width: '100px'}}>
                      {row.date === '소계' ? (
                        <div className="flex items-center w-full">
                          <input
                            type="number"
                            className="flex-1 focus:outline-none text-[#B3B3B3]"
                            placeholder="입력하기"
                          />
                          <span className="text-gray-400 text-sm ml-2">원</span>
                        </div>
                      ) : (
                        <div className="flex items-center w-full">
                          <span className="flex-1 text-right">{row.debitAmount || '입력하기'}</span>
                          {row.debitAmount && <span className="text-gray-400 text-sm ml-2">원</span>}
                        </div>
                      )}
                    </td>
                    <td className="p-3 border border-[#D9D9D9]">
                      {row.date === '소계' ? (
                        <input
                          type="text"
                          className="w-full focus:outline-none text-[#B3B3B3]"
                          placeholder="입력하기"
                        />
                      ) : (
                        row.debitPartner || '입력하기'
                      )}
                    </td>
                    {/* 대변 */}
                    <td className="p-3 border border-[#D9D9D9]">
                      {row.date === '소계' ? (
                        <input
                          type="text"
                          className="w-full focus:outline-none text-[#B3B3B3]"
                          placeholder="입력하기"
                        />
                      ) : (
                        row.creditAccount || '입력하기'
                      )}
                    </td>
                    <td className="p-3 border border-[#D9D9D9]" style={{width: '100px'}}>
                      {row.date === '소계' ? (
                        <div className="flex items-center w-full">
                          <input
                            type="number"
                            className="flex-1 focus:outline-none text-[#B3B3B3]"
                            placeholder="입력하기"
                          />
                          <span className="text-gray-400 text-sm ml-2">원</span>
                        </div>
                      ) : (
                        <div className="flex items-center w-full">
                          <span className="flex-1 text-right">{row.creditAmount || '입력하기'}</span>
                          {row.creditAmount && <span className="text-gray-400 text-sm ml-2">원</span>}
                        </div>
                      )}
                    </td>
                    <td className="p-3 border border-[#D9D9D9]">
                      {row.date === '소계' ? (
                        <input
                          type="text"
                          className="w-full focus:outline-none text-[#B3B3B3]"
                          placeholder="입력하기"
                        />
                      ) : (
                        row.creditPartner || '입력하기'
                      )}
                    </td>
                    {/* 적요 */}
                    <td className="p-3 border border-[#D9D9D9]">
                      {row.date === '소계' ? (
                        ''
                      ) : (
                        row.description || '입력하기'
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
