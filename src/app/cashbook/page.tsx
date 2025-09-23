'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

interface CashTransaction {
  id: string;
  date: string;
  deposit?: number;
  withdrawal?: number;
  balance: number;
  accountName: string;
  partnerName?: string;
  note?: string;
  voucherId?: string;
}

interface VoucherTransaction {
  id: number;
  accountId?: string;
  accountCode?: string;
  accountName?: string;
  debitCredit?: 'DEBIT' | 'CREDIT';
  amount?: number;
  partnerId?: string;
  partnerName?: string;
  note?: string;
}

interface Voucher {
  id: number;
  date?: string;
  description?: string;
  transactions: VoucherTransaction[];
}

interface CashbookFilters {
  period: string; // YYYY-MM
  accountCode?: string;
  partnerId?: string;
  minAmount?: number;
  maxAmount?: number;
}

export default function CashbookPage() {
  const router = useRouter();
  const { token, isAuthenticated, loading: authLoading } = useAuth();

  const [filters, setFilters] = useState<CashbookFilters>({
    period: '',
    accountCode: '',
    partnerId: '',
    minAmount: undefined,
    maxAmount: undefined,
  });
  const [loading, setLoading] = useState(false);
  const [cashTransactions, setCashTransactions] = useState<CashTransaction[]>([]);
  const [depositTransactions, setDepositTransactions] = useState<CashTransaction[]>([]);
  const [selectedVoucher, setSelectedVoucher] = useState<Voucher | null>(null);
  const [showVoucherDetail, setShowVoucherDetail] = useState(false);

  // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, router]);

  /** 현금출납장 조회 */
  const fetchCashbook = useCallback(async () => {
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

      const url = `https://api.eosxai.com/api/cashbook?${params.toString()}`;
      console.log('API 호출 URL:', url);

      const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
      const data = await res.json();
      console.log('API 응답 데이터:', data);
      
      // API 응답 구조에 맞게 데이터 파싱
      let cashData: CashTransaction[] = [];
      let depositData: CashTransaction[] = [];
      
      console.log('데이터 파싱 시작:', data);
      
      if (data.results && Array.isArray(data.results)) {
        console.log('results 배열 길이:', data.results.length);
        
        data.results.forEach((result: { result?: { type?: string; rows?: unknown[]; accounts?: unknown[] } }, index: number) => {
          console.log(`결과 ${index}:`, result);
          
          if (result.result && result.result.type === 'CASH' && result.result.rows) {
            console.log('현금 데이터 발견:', result.result.rows);
            cashData = (result.result.rows as { transactionId: string; date: string; inAmount?: number; outAmount?: number; balance: number; accountName: string; partnerName?: string; note?: string; voucherId?: string }[]).map((row) => ({
              id: row.transactionId,
              date: row.date,
              deposit: row.inAmount || 0,
              withdrawal: row.outAmount || 0,
              balance: row.balance,
              accountName: row.accountName,
              partnerName: row.partnerName,
              note: row.note,
              voucherId: row.voucherId
            }));
            console.log('파싱된 현금 데이터:', cashData);
          } else if (result.result && result.result.type === 'DEPOSIT' && result.result.accounts) {
            console.log('보통예금 데이터 발견:', result.result.accounts);
            (result.result.accounts as { rows?: unknown[] }[]).forEach((account) => {
              if (account.rows) {
                const accountData = (account.rows as { transactionId: string; date: string; inAmount?: number; outAmount?: number; balance: number; accountName: string; partnerName?: string; note?: string; voucherId?: string }[]).map((row) => ({
                  id: row.transactionId,
                  date: row.date,
                  deposit: row.inAmount || 0,
                  withdrawal: row.outAmount || 0,
                  balance: row.balance,
                  accountName: row.accountName,
                  partnerName: row.partnerName,
                  note: row.note,
                  voucherId: row.voucherId
                }));
                depositData = [...depositData, ...accountData];
              }
            });
            console.log('파싱된 보통예금 데이터:', depositData);
          }
        });
      }
      
      console.log('최종 현금 데이터:', cashData);
      console.log('최종 보통예금 데이터:', depositData);
      
      setCashTransactions(cashData);
      setDepositTransactions(depositData);
    } catch (err) {
      console.error('현금출납장 조회 에러:', err);
    } finally {
      setLoading(false);
    }
  }, [token, filters]);

  /** 전표 상세 조회 */
  const fetchVoucherDetail = async (voucherId: string) => {
    if (!token) return;
    try {
      const res = await fetch(`https://api.eosxai.com/api/cashbook/voucher/${voucherId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) {
        setSelectedVoucher(data);
        setShowVoucherDetail(true);
      } else {
        alert('전표 상세 조회 실패');
      }
    } catch (err) {
      console.error('전표 상세 조회 에러:', err);
      alert('전표 상세 조회 실패');
    }
  };

  /** 전표 저장 */
  const handleSaveVoucher = async () => {
    if (!token || !selectedVoucher) return;
    try {
      const res = await fetch(`https://api.eosxai.com/api/cashbook/voucher/${selectedVoucher.id}/save`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(selectedVoucher),
      });
      const data = await res.json();
      if (data.success) {
        alert('저장되었습니다.');
        setSelectedVoucher(data.voucher);
        // 저장 후 리스팅 함수 다시 호출
        fetchCashbook();
      } else {
        alert('저장 실패');
      }
    } catch (err) {
      console.error('전표 저장 에러:', err);
      alert('저장 실패');
    }
  };

  /** 다운로드 */
  const handleDownload = () => {
    // CSV 형태로 다운로드
    const csvContent = [
      ['구분', '일자', '입금', '출금', '잔액', '계정과목', '거래처', '적요'],
      ...cashTransactions.map(tx => [
        '현금',
        tx.date,
        tx.deposit ? tx.deposit.toLocaleString() : '',
        tx.withdrawal ? tx.withdrawal.toLocaleString() : '',
        tx.balance.toLocaleString(),
        tx.accountName,
        tx.partnerName || '',
        tx.note || ''
      ]),
      ...depositTransactions.map(tx => [
        '보통예금',
        tx.date,
        tx.deposit ? tx.deposit.toLocaleString() : '',
        tx.withdrawal ? tx.withdrawal.toLocaleString() : '',
        tx.balance.toLocaleString(),
        tx.accountName,
        tx.partnerName || '',
        tx.note || ''
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `현금출납장_${filters.period || '전체'}.csv`;
    link.click();
  };

  /** 인쇄하기 */
  const handlePrint = () => {
    window.print();
  };

  /** 행 클릭 핸들러 */
  const handleRowClick = (transaction: CashTransaction) => {
    if (transaction.voucherId) {
      fetchVoucherDetail(transaction.voucherId);
    }
  };

  /** 조회하기 */
  const handleSearch = () => {
    if (!filters.period) {
      alert('조회월을 입력해주세요.');
      return;
    }
    fetchCashbook();
  };

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
            <h2 className="text-xl font-bold mb-2 text-[#1E1E1E]">현금출납장</h2>
            <p className="text-[#767676]">조회월을 선택하고 결산점검을 시작하세요.</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-[#2C2C2C] text-white"
            >
              조회하기
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-[#2C2C2C] text-white"
            >
              다운로드
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-[#F3F3F3] text-[#2C2C2C]"
            >
              인쇄하기
            </button>
          </div>
        </div>

        {/* 필터 영역 (1행) */}
        <div className="bg-white border border-[#D9D9D9] mb-6">
          <table className="w-full text-sm text-[#1e1616]">
            <tbody>
              <tr>
                <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium text-[#757575]" style={{ width: 'fit-content', whiteSpace: 'nowrap' }}>조회월(필수)</td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    type="month"
                    value={filters.period}
                    onChange={(e) => setFilters(prev => ({ ...prev, period: e.target.value }))}
                    className="w-full border-none outline-none bg-transparent text-[#B3B3B3]"
                    placeholder="YYYY-MM"
                  />
                </td>
                <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium text-[#757575]" style={{ width: 'fit-content', whiteSpace: 'nowrap' }}>계정과목</td>
                <td className="p-3 border border-[#D9D9D9]">
                  <select
                    value={filters.accountCode || ''}
                    onChange={(e) => setFilters(prev => ({ ...prev, accountCode: e.target.value }))}
                    className="w-full border-none outline-none bg-transparent text-[#B3B3B3]"
                    style={{ minWidth: '150px' }}
                  >
                    <option value="">선택하기</option>
                    <option value="11111">현금 (11111)</option>
                    <option value="11112">당좌예금 (11112)</option>
                    <option value="11113">보통예금 (11113)</option>
                  </select>
                </td>
                <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium text-[#757575]" style={{ width: 'fit-content', whiteSpace: 'nowrap' }}>거래처</td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    type="text"
                    placeholder="선택하기"
                    value={filters.partnerId || ''}
                    onChange={(e) => setFilters(prev => ({ ...prev, partnerId: e.target.value }))}
                    className="w-full border-none outline-none bg-transparent text-[#B3B3B3]"
                  />
                </td>
                <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium" style={{ width: 'fit-content', whiteSpace: 'nowrap' }}>최소금액</td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    type="number"
                    placeholder="입력하기"
                    value={filters.minAmount || ''}
                    onChange={(e) => setFilters(prev => ({ ...prev, minAmount: e.target.value ? Number(e.target.value) : undefined }))}
                    className="w-full border-none outline-none bg-transparent"
                  />
                </td>
                <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium" style={{ width: 'fit-content', whiteSpace: 'nowrap' }}>최대금액</td>
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

        {/* 현금 테이블 */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-[#1E1E1E]">현금</h3>
          <table className="w-full border border-[#D9D9D9] text-sm text-[#757575]">
            <thead>
              <tr>
                <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium">일자</th>
                <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium">입금</th>
                <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium">출금</th>
                <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium">잔액</th>
                <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium">계정과목</th>
                <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium">거래처</th>
                <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium">적요</th>
              </tr>
            </thead>
            <tbody>
              {cashTransactions.length > 0 ? (
                cashTransactions.map(tx => (
                  <tr 
                    key={tx.id}
                    onClick={() => handleRowClick(tx)}
                    className={`cursor-pointer hover:bg-gray-50 ${tx.voucherId ? 'hover:bg-blue-50' : ''}`}
                  >
                    <td className="p-3 border border-[#D9D9D9] text-center">{tx.date}</td>
                    <td className="p-3 border border-[#D9D9D9] text-right">{tx.deposit ? tx.deposit.toLocaleString() : '-'}</td>
                    <td className="p-3 border border-[#D9D9D9] text-right">{tx.withdrawal ? tx.withdrawal.toLocaleString() : '-'}</td>
                    <td className="p-3 border border-[#D9D9D9] text-right">{tx.balance.toLocaleString()}원</td>
                    <td className="p-3 border border-[#D9D9D9]">{tx.accountName}</td>
                    <td className="p-3 border border-[#D9D9D9]">{tx.partnerName || '-'}</td>
                    <td className="p-3 border border-[#D9D9D9]">{tx.note || '-'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="p-3 border border-[#D9D9D9] text-center text-gray-500">
                    {loading ? '조회 중...' : '조회된 내역이 없습니다.'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* 보통예금 테이블 */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-[#1E1E1E]">보통예금-계좌번호(거래처)</h3>
          <table className="w-full border border-[#D9D9D9] text-sm text-[#757575]">
            <thead>
              <tr>
                <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">일자</th>
                <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">입금</th>
                <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">출금</th>
                <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">잔액</th>
                <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">계정과목</th>
                <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">거래처</th>
                <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">적요</th>
              </tr>
            </thead>
            <tbody>
              {depositTransactions.length > 0 ? (
                depositTransactions.map(tx => (
                  <tr 
                    key={tx.id}
                    onClick={() => handleRowClick(tx)}
                    className={`cursor-pointer hover:bg-gray-50 ${tx.voucherId ? 'hover:bg-blue-50' : ''}`}
                  >
                    <td className="p-3 border border-[#D9D9D9] text-center">{tx.date}</td>
                    <td className="p-3 border border-[#D9D9D9] text-right">{tx.deposit ? tx.deposit.toLocaleString() : '-'}</td>
                    <td className="p-3 border border-[#D9D9D9] text-right">{tx.withdrawal ? tx.withdrawal.toLocaleString() : '-'}</td>
                    <td className="p-3 border border-[#D9D9D9] text-right">{tx.balance.toLocaleString()}원</td>
                    <td className="p-3 border border-[#D9D9D9]">{tx.accountName}</td>
                    <td className="p-3 border border-[#D9D9D9]">{tx.partnerName || '-'}</td>
                    <td className="p-3 border border-[#D9D9D9]">{tx.note || '-'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="p-3 border border-[#D9D9D9] text-center text-gray-500">
                    {loading ? '조회 중...' : '조회된 내역이 없습니다.'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* 조회 전 메시지 */}
        {cashTransactions.length === 0 && depositTransactions.length === 0 && !loading && (
          <div className="text-center text-gray-500 py-8">
            조회월을 선택하고 조회하기 버튼을 클릭하세요.
          </div>
        )}

        {/* 전표 상세 모달 */}
        {showVoucherDetail && selectedVoucher && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">전표 상세</h3>
                <button
                  onClick={() => setShowVoucherDetail(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <div className="mb-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">일자</label>
                    <input
                      type="date"
                      value={selectedVoucher.date || ''}
                      onChange={(e) => setSelectedVoucher(prev => prev ? { ...prev, date: e.target.value } : null)}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">적요</label>
                    <input
                      type="text"
                      value={selectedVoucher.description || ''}
                      onChange={(e) => setSelectedVoucher(prev => prev ? { ...prev, description: e.target.value } : null)}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">거래 내역</h4>
                <table className="w-full border text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-2 border">계정과목</th>
                      <th className="p-2 border">차변</th>
                      <th className="p-2 border">대변</th>
                      <th className="p-2 border">거래처</th>
                      <th className="p-2 border">적요</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedVoucher.transactions.map((tx, index) => (
                      <tr key={tx.id || index}>
                        <td className="p-2 border">
                          <input
                            type="text"
                            value={tx.accountName || ''}
                            onChange={(e) => {
                              const newTransactions = [...selectedVoucher.transactions];
                              newTransactions[index].accountName = e.target.value;
                              setSelectedVoucher(prev => prev ? { ...prev, transactions: newTransactions } : null);
                            }}
                            className="w-full border-none outline-none bg-transparent"
                          />
                        </td>
                        <td className="p-2 border text-right">
                          <input
                            type="number"
                            value={tx.debitCredit === 'DEBIT' ? (tx.amount || '') : ''}
                            onChange={(e) => {
                              const newTransactions = [...selectedVoucher.transactions];
                              if (tx.debitCredit === 'DEBIT') {
                                newTransactions[index].amount = e.target.value ? Number(e.target.value) : undefined;
                              }
                              setSelectedVoucher(prev => prev ? { ...prev, transactions: newTransactions } : null);
                            }}
                            className="w-full text-right border-none outline-none bg-transparent"
                          />
                        </td>
                        <td className="p-2 border text-right">
                          <input
                            type="number"
                            value={tx.debitCredit === 'CREDIT' ? (tx.amount || '') : ''}
                            onChange={(e) => {
                              const newTransactions = [...selectedVoucher.transactions];
                              if (tx.debitCredit === 'CREDIT') {
                                newTransactions[index].amount = e.target.value ? Number(e.target.value) : undefined;
                              }
                              setSelectedVoucher(prev => prev ? { ...prev, transactions: newTransactions } : null);
                            }}
                            className="w-full text-right border-none outline-none bg-transparent"
                          />
                        </td>
                        <td className="p-2 border">
                          <input
                            type="text"
                            value={tx.partnerName || ''}
                            onChange={(e) => {
                              const newTransactions = [...selectedVoucher.transactions];
                              newTransactions[index].partnerName = e.target.value;
                              setSelectedVoucher(prev => prev ? { ...prev, transactions: newTransactions } : null);
                            }}
                            className="w-full border-none outline-none bg-transparent"
                          />
                        </td>
                        <td className="p-2 border">
                          <input
                            type="text"
                            value={tx.note || ''}
                            onChange={(e) => {
                              const newTransactions = [...selectedVoucher.transactions];
                              newTransactions[index].note = e.target.value;
                              setSelectedVoucher(prev => prev ? { ...prev, transactions: newTransactions } : null);
                            }}
                            className="w-full border-none outline-none bg-transparent"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowVoucherDetail(false)}
                  className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
                >
                  취소
                </button>
                <button
                  onClick={handleSaveVoucher}
                  className="px-4 py-2 bg-[#1E1E1E] text-white rounded hover:bg-gray-800"
                >
                  저장
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
