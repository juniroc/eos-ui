'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

interface LedgerRow {
  date: string;
  debit: number;
  credit: number;
  balance: number;
  partnerName?: string;
  description?: string;
  note?: string;
  voucherId?: number;
  transactionId?: number;
}

interface Account {
  code: string;
  name: string;
}

interface Partner {
  id: string;
  name: string;
}

interface LedgerAccount {
  account: Account;
  openingBalance: number;
  rows: LedgerRow[];
}

interface LedgerPartner {
  partner: Partner;
  accounts: LedgerAccount[];
}

interface LedgerFilters {
  period: string; // YYYY-MM
  accountCode?: string;
  partnerId?: string;
  minAmount?: number;
  maxAmount?: number;
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

export default function LedgerPage() {
  const router = useRouter();
  const { token, isAuthenticated, loading: authLoading } = useAuth();

  const [filters, setFilters] = useState<LedgerFilters>({
    period: '',
    accountCode: '',
    partnerId: '',
    minAmount: undefined,
    maxAmount: undefined,
  });
  const [loading, setLoading] = useState(false);
  const [ledgerData, setLedgerData] = useState<LedgerAccount[] | LedgerPartner[]>([]);
  const [selectedVoucher, setSelectedVoucher] = useState<Voucher | null>(null);
  const [showVoucherDetail, setShowVoucherDetail] = useState(false);

  // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, router]);

  /** 원장 조회 */
  const fetchLedger = useCallback(async () => {
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

      const url = `https://api.eosxai.com/api/ledger?${params.toString()}`;
      const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
      const data = await res.json();
      
      // API 응답 구조에 따라 데이터 파싱
      if (data.type === 'ACCOUNT') {
        // 단일 계정 응답
        setLedgerData([data]);
      } else if (data.type === 'ACCOUNTS' && data.accounts) {
        // 여러 계정 응답
        setLedgerData(data.accounts);
      } else {
        setLedgerData([]);
      }
    } catch (err) {
      console.error('원장 조회 에러:', err);
    } finally {
      setLoading(false);
    }
  }, [token, filters]);

  /** 전표 상세 조회 */
  const fetchVoucherDetail = async (voucherId: number) => {
    if (!token) return;
    try {
      const res = await fetch(`https://api.eosxai.com/api/ledger/voucher/${voucherId}`, {
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
      const res = await fetch(`https://api.eosxai.com/api/ledger/voucher/${selectedVoucher.id}/save`, {
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
        fetchLedger();
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
      ['일자', '차변금액', '대변금액', '잔액', '거래처', '적요'],
      ...(Array.isArray(ledgerData) ? ledgerData : []).flatMap((account: LedgerAccount | LedgerPartner) => {
        const rows = 'rows' in account ? account.rows : [];
        return rows ? rows.map((row: LedgerRow) => [
          row.date,
          row.debit.toLocaleString(),
          row.credit.toLocaleString(),
          row.balance.toLocaleString(),
          row.partnerName || '',
          row.description || ''
        ]) : [];
      })
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `원장_${filters.period || '전체'}.csv`;
    link.click();
  };

  /** 인쇄하기 */
  const handlePrint = () => {
    window.print();
  };

  /** 행 클릭 핸들러 */
  const handleRowClick = (row: LedgerRow) => {
    if (row.voucherId) {
      fetchVoucherDetail(row.voucherId);
    }
  };

  /** 조회하기 */
  const handleSearch = () => {
    if (!filters.period) {
      alert('조회월을 입력해주세요.');
      return;
    }
    fetchLedger();
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
            <h2 className="text-xl font-bold mb-2 text-[#1E1E1E]">원장</h2>
            <p className="text-[#767676]">결산일자를 선택하고 결산점검을 시작하세요.</p>
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
                <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium text-[#757575]" style={{ width: 'fit-content', whiteSpace: 'nowrap' }}>조회일자(필수)</td>
                <td className="p-3 border border-[#D9D9D9]" style={{ width: '150px' }}>
                  <input
                    type="month"
                    value={filters.period}
                    onChange={(e) => setFilters(prev => ({ ...prev, period: e.target.value }))}
                    className="w-full border-none outline-none bg-transparent text-[#B3B3B3] h-6"
                    placeholder="YYYY-MM"
                  />
                </td>
                <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium text-[#757575]" style={{ width: 'fit-content', whiteSpace: 'nowrap' }}>계정과목</td>
                <td className="p-3 border border-[#D9D9D9]" style={{ width: '150px' }}>
                  <select
                    value={filters.accountCode || ''}
                    onChange={(e) => setFilters(prev => ({ ...prev, accountCode: e.target.value }))}
                    className="w-full border-none outline-none bg-transparent text-[#B3B3B3] h-6"
                  >
                    <option value="">선택하기</option>
                    <option value="11111">현금 (11111)</option>
                    <option value="11113">보통예금 (11113)</option>
                    <option value="11132">외상매출금 (11132)</option>
                    <option value="11142">미수금 (11142)</option>
                    <option value="11144">가지급금 (11144)</option>
                    <option value="21207">가수금 (21207)</option>
                    <option value="21212">미지급비용 (21212)</option>
                    <option value="44007">복리후생비(판) (44007)</option>
                    <option value="44008">여비교통비(판) (44008)</option>
                    <option value="44015">소모품비(판) (44015)</option>
                    <option value="44016">세금과공과금(판) (44016)</option>
                    <option value="44025">지급수수료(판) (44025)</option>
                    <option value="44028">외주용역비(판) (44028)</option>
                  </select>
                </td>
                <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium text-[#757575]" style={{ width: 'fit-content', whiteSpace: 'nowrap' }}>거래처</td>
                <td className="p-3 border border-[#D9D9D9]" style={{ width: '150px' }}>
                  <input
                    type="text"
                    placeholder="선택하기"
                    value={filters.partnerId || ''}
                    onChange={(e) => setFilters(prev => ({ ...prev, partnerId: e.target.value }))}
                    className="w-full border-none outline-none bg-transparent text-[#B3B3B3] h-6"
                  />
                </td>
                <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium text-[#757575]" style={{ width: 'fit-content', whiteSpace: 'nowrap' }}>최소금액</td>
                <td className="p-3 border border-[#D9D9D9]" style={{ width: '120px' }}>
                  <input
                    type="number"
                    value={filters.minAmount || ''}
                    onChange={(e) => setFilters(prev => ({ ...prev, minAmount: e.target.value ? Number(e.target.value) : undefined }))}
                    className="w-full border-none outline-none bg-transparent text-[#B3B3B3] h-6"
                    placeholder="입력하기"
                  />
                </td>
                <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium text-[#757575]" style={{ width: 'fit-content', whiteSpace: 'nowrap' }}>최대금액</td>
                <td className="p-3 border border-[#D9D9D9]" style={{ width: '120px' }}>
                  <input
                    type="number"
                    value={filters.maxAmount || ''}
                    onChange={(e) => setFilters(prev => ({ ...prev, maxAmount: e.target.value ? Number(e.target.value) : undefined }))}
                    className="w-full border-none outline-none bg-transparent text-[#B3B3B3] h-6"
                    placeholder="입력하기"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 원장 테이블 - 데이터가 있을 때만 표시 */}
        {ledgerData.length > 0 && ledgerData.some(account => {
          const rows = 'rows' in account ? account.rows : [];
          return rows && rows.length > 0;
        }) && (
          <div className="bg-white border border-[#D9D9D9]">
            <table className="w-full text-sm text-[#757575]">
              <thead>
                <tr>
                  <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium text-[#757575] w-[90px]">일자</th>
                  <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium text-[#757575]">차변금액</th>
                  <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium text-[#757575]">대변금액</th>
                  <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium text-[#757575]">잔액</th>
                  <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium text-[#757575]">거래처</th>
                  <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium text-[#757575]">적요</th>
                </tr>
              </thead>
              <tbody>
                {ledgerData.flatMap((account: LedgerAccount | LedgerPartner, accountIndex: number) => {
                  // API 응답 구조에 따라 rows 추출
                  const rows = 'rows' in account ? account.rows : [];
                  return rows ? rows.map((row: LedgerRow, rowIndex: number) => (
                    <tr 
                      key={`${accountIndex}-${rowIndex}`}
                      onClick={() => handleRowClick(row)}
                      className={`cursor-pointer hover:bg-gray-50 ${row.voucherId ? 'hover:bg-blue-50' : ''}`}
                    >
                      <td className="p-3 border border-[#D9D9D9] text-center">
                        {row.date ? new Date(row.date).toLocaleDateString('ko-KR', {
                          year: '2-digit',
                          month: '2-digit',
                          day: '2-digit'
                        }).replace(/\./g, '').replace(/\s/g, '') : '-'}
                      </td>
                      <td className="p-3 border border-[#D9D9D9] text-right">{row.debit.toLocaleString()}</td>
                      <td className="p-3 border border-[#D9D9D9] text-right">{row.credit.toLocaleString()}</td>
                      <td className="p-3 border border-[#D9D9D9] text-right">{row.balance.toLocaleString()}원</td>
                      <td className="p-3 border border-[#D9D9D9]">{row.partnerName || '-'}</td>
                      <td className="p-3 border border-[#D9D9D9]">{row.description || '-'}</td>
                    </tr>
                  )) : [];
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* 데이터가 없을 때 메시지 */}
        {!loading && (ledgerData.length === 0 || !ledgerData.some(account => {
          const rows = 'rows' in account ? account.rows : [];
          return rows && rows.length > 0;
        })) && (
          <div className="text-center text-gray-500 py-8">
            조회된 내역이 없습니다.
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
