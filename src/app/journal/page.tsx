'use client';

import { useEffect, useState, useCallback, useMemo, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

interface Transaction {
  id: number;
  accountId?: string;
  accountCode?: string;
  accountName?: string;
  debitCredit?: boolean; // true = DEBIT, false = CREDIT
  amount?: number;
  partnerId?: string;
  partnerName?: string;
  note?: string;
  matched?: boolean;
}

interface Voucher {
  id: number;
  date?: string;
  description?: string;
  debitTotal: number;
  creditTotal: number;
  transactions: Transaction[];
}

interface JournalFilters {
  period: string; // YYYY-MM
  accountCode?: string;
  partnerId?: string;
  minAmount?: number;
  maxAmount?: number;
}

function JournalPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const voucherIds = useMemo(() => searchParams.get('voucherIds')?.split(',') || [], [searchParams]);

  const { token, isAuthenticated, loading: authLoading } = useAuth();
  const [vouchers, setVouchers] = useState<Voucher[]>([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<JournalFilters>({
    period: '',
    accountCode: '',
    partnerId: '',
    minAmount: undefined,
    maxAmount: undefined,
  });

  // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, router]);

  /** 전표 조회 */
  const fetchJournal = useCallback(async () => {
    if (!token) return;

    try {
      setLoading(true);
      const params = new URLSearchParams();

      // 조회월을 startDate, endDate 로 변환
      if (filters.period) {
        const [year, month] = filters.period.split('-').map(Number);
        const startDate = `${filters.period}-01`;
        const endDate = new Date(year, month, 0).toISOString().split('T')[0];
        params.append('startDate', startDate);
        params.append('endDate', endDate);
      }

      if (filters.accountCode) params.append('accountCode', filters.accountCode);
      if (filters.partnerId) params.append('partnerId', filters.partnerId);
      if (filters.minAmount) params.append('minAmount', filters.minAmount.toString());
      if (filters.maxAmount) params.append('maxAmount', filters.maxAmount.toString());
      if (voucherIds.length > 0) {
        params.append('voucherIds', voucherIds.join(','));
      }

      const url = `https://api.eosxai.com/api/journal?${params.toString()}`;
      console.log('API 호출 URL:', url); // 디버깅용

      const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
      const data = await res.json();
      console.log('API 응답 데이터:', data);
      
      if (data.vouchers && Array.isArray(data.vouchers)) {
        // 날짜 포맷팅 및 데이터 구조 확인
        const formattedVouchers = data.vouchers.map((voucher: { id: string; date: string; description: string; transactions: unknown[] }) => ({
          ...voucher,
          date: voucher.date ? new Date(voucher.date).toISOString().split('T')[0] : '',
          transactions: voucher.transactions || []
        }));
        console.log('포맷된 전표 데이터:', formattedVouchers);
        setVouchers(formattedVouchers);
      } else {
        console.log('전표 데이터가 없거나 형식이 올바르지 않습니다:', data);
        setVouchers([]);
      }
    } catch (err) {
      console.error('전표 조회 에러:', err);
    } finally {
      setLoading(false);
    }
  }, [token, filters, voucherIds]);

  /** 일괄 저장 */
  const handleBatchSave = async () => {
    if (!token) {
      alert('로그인이 필요합니다.');
      return;
    }
    
    if (vouchers.length === 0) {
      alert('저장할 전표가 없습니다.');
      return;
    }

    try {
      // API 명세에 맞게 데이터 구조 변환
      const formattedVouchers = vouchers.map(voucher => ({
        id: voucher.id,
        date: voucher.date,
        description: voucher.description,
        transactions: voucher.transactions.map(transaction => ({
          id: transaction.id,
          accountId: transaction.accountId,
          partnerId: transaction.partnerId,
          amount: transaction.amount,
          note: transaction.note,
          debitCredit: transaction.debitCredit
        }))
      }));

      console.log('저장할 데이터:', formattedVouchers);

      const res = await fetch(`https://api.eosxai.com/api/journal/save`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ vouchers: formattedVouchers }),
      });

      const data = await res.json();
      console.log('저장 응답:', data);

      if (data.success) {
        alert('일괄 저장되었습니다.');
        // 응답에서 업데이트된 전표 데이터로 상태 업데이트
        if (data.vouchers && Array.isArray(data.vouchers)) {
        setVouchers(data.vouchers);
        }
      } else {
        alert('저장 실패: ' + (data.message || '알 수 없는 오류'));
      }
    } catch (err) {
      console.error('저장 에러:', err);
      alert('저장 실패: ' + (err instanceof Error ? err.message : '알 수 없는 오류'));
    }
  };

  /** 조회하기 */
  const handleSearch = () => {
    if (!filters.period) {
      alert('조회월을 입력해주세요.');
      return;
    }
    fetchJournal();
  };

  useEffect(() => {
    if (voucherIds.length > 0) {
      fetchJournal();
    }
  }, [fetchJournal, voucherIds.length]);

  // 로딩/인증 처리
  if (authLoading) {
    return <div className="p-8 text-center">로딩 중...</div>;
  }
  if (!isAuthenticated) return null;

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold mb-2 text-[#1E1E1E]">전표/수정</h2>
            <p className="text-[#767676]">조회월을 선택하고 결산점검을 시작하세요.</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-[#1E1E1E] text-white rounded"
            >
              조회하기
            </button>
            <button
              onClick={handleBatchSave}
              className="px-4 py-2 bg-[#1E1E1E] text-white rounded"
            >
              일괄 저장하기
            </button>
          </div>
        </div>

        {/* 필터 영역 (1행) */}
        <div className="bg-white border border-[#D9D9D9] rounded mb-6">
          <table className="w-full text-sm text-[#1e1616]">
            <tbody>
              <tr>
                <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-32 font-medium">조회월(필수)</td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    type="month"
                    value={filters.period}
                    onChange={(e) => setFilters(prev => ({ ...prev, period: e.target.value }))}
                    className="w-full border-none outline-none bg-transparent"
                    placeholder="선택하기"
                  />
                </td>
                <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-32 font-medium">계정과목</td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    type="text"
                    placeholder="선택하기"
                    value={filters.accountCode || ''}
                    onChange={(e) => setFilters(prev => ({ ...prev, accountCode: e.target.value }))}
                    className="w-full border-none outline-none bg-transparent"
                  />
                </td>
                <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-32 font-medium">거래처</td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    type="text"
                    placeholder="선택하기"
                    value={filters.partnerId || ''}
                    onChange={(e) => setFilters(prev => ({ ...prev, partnerId: e.target.value }))}
                    className="w-full border-none outline-none bg-transparent"
                  />
                </td>
                <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-32 font-medium">최소금액</td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    type="number"
                    placeholder="입력하기"
                    value={filters.minAmount || ''}
                    onChange={(e) => setFilters(prev => ({ ...prev, minAmount: e.target.value ? Number(e.target.value) : undefined }))}
                    className="w-full border-none outline-none bg-transparent"
                  />
                </td>
                <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-32 font-medium">최대금액</td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    type="number"
                    placeholder="입력하기"
                    value={filters.maxAmount || ''}
                    onChange={(e) => setFilters(prev => ({ ...prev, maxAmount: e.target.value ? Number(e.target.value) : undefined }))}
                    className="w-full border-none outline-none bg-transparent"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 전표 리스트 */}
        {vouchers.length > 0 ? (
          vouchers.map((voucher, voucherIndex) => (
            <div key={voucher.id} className="mb-6">
              {/* 전표 테이블 */}
              <table className="w-full border border-[#D9D9D9] text-sm text-[#757575]">
                <thead>
                  <tr>
                    <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-20">일자</td>
                    <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center" colSpan={3}>
                      차변
                    </td>
                    <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center" colSpan={3}>
                      대변
                    </td>
                    <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-3/7">적요</td>
                  </tr>
                  <tr>
                    <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-1/10"></td>
                    <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-1/10">계정과목</td>
                    <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-1/10">금액</td>
                    <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-1/10">거래처</td>
                    <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-1/10">계정과목</td>
                    <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-1/10">금액</td>
                    <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-1/10">거래처</td>
                    <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-3/10">적요</td>
                  </tr>
                </thead>
                <tbody>
                  {/* 전표 데이터 행들 */}
                  {voucher.transactions.map((transaction, index) => (
                    <tr key={`${voucher.id}-${index}`}>
                      <td className="p-3 border border-[#D9D9D9] text-center w-1/10">
                        {index === 0 ? (
                          <input
                            type="date"
                            className="w-full focus:outline-none text-center"
                            value={voucher.date || ''}
                            onChange={(e) => {
                              const newVouchers = [...vouchers];
                              newVouchers[voucherIndex].date = e.target.value;
                              setVouchers(newVouchers);
                            }}
                          />
                        ) : (
                          <div className="w-full h-8"></div>
                        )}
                      </td>
                      {/* 차변 */}
                      <td className="p-3 border border-[#D9D9D9] w-1/10">
                        {transaction.debitCredit === true ? (
                          <input
                            className="w-full focus:outline-none"
                            placeholder="입력하기"
                            value={transaction.accountName || ''}
                            onChange={(e) => {
                              const newVouchers = [...vouchers];
                              newVouchers[voucherIndex].transactions[index].accountName = e.target.value;
                              setVouchers(newVouchers);
                            }}
                          />
                        ) : (
                          <div className="w-full h-8"></div>
                        )}
                      </td>
                      <td className="p-3 border border-[#D9D9D9] w-1/10">
                        {transaction.debitCredit === true ? (
                          <div className="flex items-center w-full">
                            {!transaction.amount && (
                              <span className="text-gray-400 text-sm mr-2 w-max">입력하기</span>
                            )}
                            <input
                              className="flex-1 focus:outline-none"
                              placeholder=""
                              value={transaction.amount || ''}
                              onChange={(e) => {
                                const newVouchers = [...vouchers];
                                newVouchers[voucherIndex].transactions[index].amount = Number(e.target.value);
                                setVouchers(newVouchers);
                              }}
                            />
                            <span className="text-gray-400 text-sm ml-2">원</span>
                          </div>
                        ) : (
                          <div className="w-full h-8"></div>
                        )}
                      </td>
                      <td className="p-3 border border-[#D9D9D9] w-1/10">
                        {transaction.debitCredit === true ? (
                          <input
                            className="w-full focus:outline-none"
                            placeholder="입력하기"
                            value={transaction.partnerName || ''}
                            onChange={(e) => {
                              const newVouchers = [...vouchers];
                              newVouchers[voucherIndex].transactions[index].partnerName = e.target.value;
                              setVouchers(newVouchers);
                            }}
                          />
                        ) : (
                          <div className="w-full h-8"></div>
                        )}
                      </td>
                      {/* 대변 */}
                      <td className="p-3 border border-[#D9D9D9] w-1/10">
                        {transaction.debitCredit === false ? (
                          <input
                            className="w-full focus:outline-none"
                            placeholder="입력하기"
                            value={transaction.accountName || ''}
                            onChange={(e) => {
                              const newVouchers = [...vouchers];
                              newVouchers[voucherIndex].transactions[index].accountName = e.target.value;
                              setVouchers(newVouchers);
                            }}
                          />
                        ) : (
                          <div className="w-full h-8"></div>
                        )}
                      </td>
                      <td className="p-3 border border-[#D9D9D9] w-1/10">
                        {transaction.debitCredit === false ? (
                          <div className="flex items-center w-full">
                            {!transaction.amount && (
                              <span className="text-gray-400 text-sm mr-2 w-max">입력하기</span>
                            )}
                            <input
                              className="flex-1 focus:outline-none"
                              placeholder=""
                              value={transaction.amount || ''}
                              onChange={(e) => {
                                const newVouchers = [...vouchers];
                                newVouchers[voucherIndex].transactions[index].amount = Number(e.target.value);
                                setVouchers(newVouchers);
                              }}
                            />
                            <span className="text-gray-400 text-sm ml-2">원</span>
                          </div>
                        ) : (
                          <div className="w-full h-8"></div>
                        )}
                      </td>
                      <td className="p-3 border border-[#D9D9D9] w-1/10">
                        {transaction.debitCredit === false ? (
                          <input
                            className="w-full focus:outline-none"
                            placeholder="입력하기"
                            value={transaction.partnerName || ''}
                            onChange={(e) => {
                              const newVouchers = [...vouchers];
                              newVouchers[voucherIndex].transactions[index].partnerName = e.target.value;
                              setVouchers(newVouchers);
                            }}
                          />
                        ) : (
                          <div className="w-full h-8"></div>
                        )}
                      </td>
                      {/* 적요 */}
                      <td className="p-3 border border-[#D9D9D9] w-3/10">
                        {index === 0 ? (
                          <input
                            className="w-full focus:outline-none"
                            placeholder="입력하기"
                            value={voucher.description || ''}
                            onChange={(e) => {
                              const newVouchers = [...vouchers];
                              newVouchers[voucherIndex].description = e.target.value;
                              setVouchers(newVouchers);
                            }}
                          />
                        ) : (
                          <div className="w-full h-8"></div>
                        )}
                      </td>
                    </tr>
                  ))}
                  
                  {/* 소계 행 */}
                  <tr>
                    <td className="p-3 border border-[#D9D9D9] text-center bg-gray-50 w-1/10">소계</td>
                    <td className="p-3 border border-[#D9D9D9] bg-gray-50 w-1/10">
                      <input
                        className="w-full focus:outline-none"
                        placeholder="입력하기"
                        defaultValue=""
                        readOnly
                      />
                    </td>
                    <td className="p-3 border border-[#D9D9D9] bg-gray-50 w-1/10">
                      <div className="flex items-center w-full">
                        <input
                          className="flex-1 focus:outline-none text-right"
                          placeholder=""
                          value={voucher.transactions
                            .filter((t: Transaction) => t.debitCredit === true)
                            .reduce((sum: number, t: Transaction) => sum + (t.amount || 0), 0)
                            .toLocaleString()}
                          readOnly
                        />
                        <span className="text-gray-400 text-sm ml-2">원</span>
                      </div>
                    </td>
                    <td className="p-3 border border-[#D9D9D9] bg-gray-50 w-1/10">
                      <input
                        className="w-full focus:outline-none"
                        placeholder="입력하기"
                        defaultValue=""
                        readOnly
                      />
                    </td>
                    <td className="p-3 border border-[#D9D9D9] bg-gray-50 w-1/10">
                      <input
                        className="w-full focus:outline-none"
                        placeholder="입력하기"
                        defaultValue=""
                        readOnly
                      />
                    </td>
                    <td className="p-3 border border-[#D9D9D9] bg-gray-50 w-1/10">
                      <div className="flex items-center w-full">
                        <input
                          className="flex-1 focus:outline-none text-right"
                          placeholder=""
                          value={voucher.transactions
                            .filter((t: Transaction) => t.debitCredit === false)
                            .reduce((sum: number, t: Transaction) => sum + (t.amount || 0), 0)
                            .toLocaleString()}
                          readOnly
                        />
                        <span className="text-gray-400 text-sm ml-2">원</span>
                      </div>
                    </td>
                    <td className="p-3 border border-[#D9D9D9] bg-gray-50 w-1/10">
                      <input
                        className="w-full focus:outline-none"
                        placeholder="입력하기"
                        defaultValue=""
                        readOnly
                      />
                    </td>
                    <td className="p-3 border border-[#D9D9D9] bg-gray-50 w-3/10">
                      <input
                        className="w-full focus:outline-none"
                        placeholder="입력하기"
                        defaultValue=""
                        readOnly
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              
            </div>
          ))
        ) : (
          !loading && (
            <div className="text-center text-gray-500 py-8">
              조회된 전표가 없습니다.
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default function JournalPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JournalPageContent />
    </Suspense>
  );
}
