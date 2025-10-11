'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Button from '@/components/Button';
import PrintButton from '@/components/PrintButton';

type dataType = 'ACCOUNT' | 'ACCOUNTS' | 'ACCOUNT_PARTNER' | 'PARTNER';

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
  accountCode?: string;
  accountName?: string;
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
  startDate: string;
  endDate: string;
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

  // 기본 날짜 계산 함수
  const getDefaultDates = () => {
    // 한국 시간대로 현재 날짜 가져오기
    const today = new Date();
    const koreaTime = new Date(today.getTime() + (9 * 60 * 60 * 1000)); // UTC+9
    
    const currentYear = koreaTime.getFullYear();
    const currentMonth = koreaTime.getMonth(); // 0-based (0=1월, 11=12월)
    
    // 전월 1일 계산
    let startYear = currentYear;
    let startMonth = currentMonth - 1; // 이전 달
    
    // 1월인 경우 작년 12월로 조정
    if (startMonth < 0) {
      startMonth = 11;
      startYear = currentYear - 1;
    }
    
    const startDate = new Date(startYear, startMonth, 1);
    const endDate = new Date(koreaTime.getFullYear(), koreaTime.getMonth(), koreaTime.getDate());
    
    // YYYY-MM-DD 형식으로 변환
    const formatDate = (date: Date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };
    
    return {
      startDate: formatDate(startDate),
      endDate: formatDate(endDate)
    };
  };

  const [filters, setFilters] = useState<LedgerFilters>(() => {
    const defaultDates = getDefaultDates();
    return {
      startDate: defaultDates.startDate,
      endDate: defaultDates.endDate,
      accountCode: '',
      partnerId: '',
      minAmount: undefined,
      maxAmount: undefined,
    };
  });
  const [, setLoading] = useState(false);
  const [ledgerType, setLedgerType] = useState<dataType>('ACCOUNTS');
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

      // 조회기간을 startDate, endDate 로 설정
      if (filters.startDate) params.append('startDate', filters.startDate);
      if (filters.endDate) params.append('endDate', filters.endDate);

      if (filters.accountCode) params.append('accountCode', filters.accountCode);
      if (filters.partnerId) params.append('partnerId', filters.partnerId);
      if (filters.minAmount) params.append('minAmount', filters.minAmount.toString());
      if (filters.maxAmount) params.append('maxAmount', filters.maxAmount.toString());

      const url = `https://api.eosxai.com/api/ledger?${params.toString()}`;
      const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
      const data = await res.json();

      if (!!data) {
        setLedgerType(data.type);
        setLedgerData(data);
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
    // CSV 헤더를 ledgerType에 따라 동적으로 생성
    const headers = ['일자'];
    if (ledgerType === 'ACCOUNTS' || ledgerType === 'PARTNER') {
      headers.push('계정과목');
    }
    headers.push('차변금액', '대변금액', '잔액');
    if (ledgerType === 'ACCOUNTS' || ledgerType === 'ACCOUNT') {
      headers.push('거래처');
    }
    headers.push('적요');

    // CSV 데이터를 ledgerType에 따라 동적으로 생성
    const csvContent = [
      headers,
      ...(Array.isArray(ledgerData) ? ledgerData : []).flatMap((account: LedgerAccount | LedgerPartner) => {
        const rows = 'rows' in account ? account.rows : [];
        const accountInfo = 'account' in account ? account.account : null;
        
        return rows ? rows.map((row: LedgerRow) => {
          const rowData = [row.date];
          if (ledgerType === 'ACCOUNTS' || ledgerType === 'PARTNER') {
            rowData.push(row.accountName || accountInfo?.name || '');
          }
          rowData.push(
            row.debit.toLocaleString(),
            row.credit.toLocaleString(),
            row.balance.toLocaleString()
          );
          if (ledgerType === 'ACCOUNTS' || ledgerType === 'ACCOUNT') {
            rowData.push(row.partnerName || '');
          }
          rowData.push(row.description || '');
          return rowData;
        }) : [];
      })
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `원장_${filters.startDate}_${filters.endDate}.csv`;
    link.click();
  };


  /** 행 클릭 핸들러 */
  const handleRowClick = (row: LedgerRow) => {
    if (row.voucherId) {
      fetchVoucherDetail(row.voucherId);
    }
  };

  /** 조회하기 */
  const handleSearch = () => {
    if (!filters.startDate || !filters.endDate) {
      alert('조회기간을 입력해주세요.');
      return;
    }
    if (filters.startDate > filters.endDate) {
      alert('시작일은 종료일보다 이전이어야 합니다.');
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
    <div className="p-4">
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-start gap-4 self-stretch">
            <div className="flex flex-row justify-between items-end gap-4 self-stretch">
              <div className="flex flex-col items-start w-64">
                <div className="flex flex-col items-start py-1.5 px-0 pb-0.5 rounded-lg">
                  <div className="flex flex-row items-start">
                    <h2 className="text-[15px] leading-[140%] font-semibold text-[#1E1E1E]">원장</h2>
                  </div>
                  <p className="text-[12px] leading-[140%] text-[#767676]">조회기간을 선택하고 결산점검을 시작하세요.</p>
                </div>
              </div>
              <div className="flex flex-row justify-end items-center gap-2 w-41">
                <Button
                  variant="primary"
                  onClick={handleSearch}
                  className="flex flex-row justify-center items-center gap-2"
                >
                  조회하기
                </Button>
                <Button
                  variant="primary"
                  onClick={handleDownload}
                  className="flex flex-row justify-center items-center gap-2"
                >
                  다운로드
                </Button>
                <PrintButton
                  printType="element"
                  targetSelector="#ledger-table"
                  variant="neutral"
                  className="flex flex-row justify-center items-center gap-2"
                >
                  인쇄하기
                </PrintButton>
              </div>
            </div>
          </div>
        </div>

        {/* 회계장부 필터 */}
        <div className="flex flex-row items-stretch border border-[#D9D9D9] min-w-0 overflow-x-auto mb-4">
          {/* 조회기간(필수) */}
          <div className="flex flex-row items-stretch flex-1 min-w-[310px]">
            <div className="flex flex-row justify-center items-center py-2 px-1 gap-1 w-[80px] md:w-[100px] bg-[#F5F5F5] border-r border-[#D9D9D9] shrink-0">
              <span className="text-[11px] md:text-[12px] leading-[100%] text-xs text-[#757575] text-center">조회기간(필수)</span>
            </div>
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <div className="flex flex-row items-center py-1 px-2 gap-1 bg-white h-full">
                <input
                  type="date"
                  value={filters.startDate}
                  onChange={(e) => setFilters(prev => ({ ...prev, startDate: e.target.value }))}
                  className="w-[90px] text-[11px] leading-[100%] text-xs text-[#B3B3B3] bg-transparent border-none outline-none"
                  placeholder="시작일"
                />
                <span className="text-[11px] text-[#757575] shrink-0">-</span>
                <input
                  type="date"
                  value={filters.endDate}
                  onChange={(e) => setFilters(prev => ({ ...prev, endDate: e.target.value }))}
                  className="w-[90px] text-[11px] leading-[100%] text-xs text-[#B3B3B3] bg-transparent border-none outline-none"
                  placeholder="종료일"
                />
              </div>
            </div>
          </div>

          {/* 계정과목 */}
          <div className="flex flex-row items-stretch flex-1 min-w-[150px] border-l border-[#D9D9D9]">
            <div className="flex flex-row justify-center items-center py-2 px-1 gap-1 w-[60px] md:w-[80px] bg-[#F5F5F5] border-r border-[#D9D9D9] shrink-0">
              <span className="text-[11px] md:text-[12px] leading-[100%] text-xs text-[#757575] text-center">계정과목</span>
            </div>
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <div className="flex flex-row items-center py-2 px-2 gap-2 bg-white h-full">
                <select
                  value={filters.accountCode || ''}
                  onChange={(e) => setFilters(prev => ({ ...prev, accountCode: e.target.value }))}
                  className="flex-1 text-[12px] leading-[100%] text-xs text-[#B3B3B3] bg-transparent border-none outline-none min-w-0"
                >
                  <option value="">선택없음</option>
                  <option value="CASH">현금</option>
                  <option value="BANK">당죄예금</option>
                  <option value="DEPOSIT">예금</option>
                </select>
              </div>
            </div>
          </div>

          {/* 거래처 */}
          <div className="flex flex-row items-stretch flex-1 min-w-[120px] border-l border-[#D9D9D9]">
            <div className="flex flex-row justify-center items-center py-2 px-1 gap-1 w-[50px] md:w-[60px] bg-[#F5F5F5] border-r border-[#D9D9D9] shrink-0">
              <span className="text-[11px] md:text-[12px] leading-[100%] text-xs text-[#757575] text-center">거래처</span>
            </div>
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <div className="flex flex-row items-center py-2 px-2 gap-2 bg-white h-full">
                <input
                  type="text"
                  placeholder="선택하기"
                  value={filters.partnerId || ''}
                  onChange={(e) => setFilters(prev => ({ ...prev, partnerId: e.target.value }))}
                  className="flex-1 text-[12px] leading-[100%] text-xs text-[#B3B3B3] bg-transparent border-none outline-none min-w-0"
                />
              </div>
            </div>
          </div>

          {/* 최소금액 */}
          <div className="flex flex-row items-stretch flex-1 min-w-[130px] border-l border-[#D9D9D9]">
            <div className="flex flex-row justify-center items-center py-2 px-1 gap-1 w-[60px] md:w-[70px] bg-[#F5F5F5] border-r border-[#D9D9D9] shrink-0">
              <span className="text-[11px] md:text-[12px] leading-[100%] text-xs text-[#757575] text-center">최소금액</span>
            </div>
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <div className="flex flex-row items-center py-2 px-2 bg-white h-full">
                <input
                  type="number"
                  placeholder="입력하기"
                  value={filters.minAmount || ''}
                  onChange={(e) => setFilters(prev => ({ ...prev, minAmount: e.target.value ? Number(e.target.value) : undefined }))}
                  className="flex-1 text-[12px] leading-[100%] text-xs text-[#B3B3B3] bg-transparent border-none outline-none min-w-0"
                />
              </div>
            </div>
          </div>

          {/* 최대금액 */}
          <div className="flex flex-row items-stretch flex-1 min-w-[130px] border-l border-[#D9D9D9]">
            <div className="flex flex-row justify-center items-center py-2 px-1 gap-1 w-[60px] md:w-[70px] bg-[#F5F5F5] border-r border-[#D9D9D9] shrink-0">
              <span className="text-[11px] md:text-[12px] leading-[100%] text-xs text-[#757575] text-center">최대금액</span>
            </div>
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <div className="flex flex-row items-center py-2 px-2 bg-white h-full">
                <input
                  type="number"
                  placeholder="입력하기"
                  value={filters.maxAmount || ''}
                  onChange={(e) => setFilters(prev => ({ ...prev, maxAmount: e.target.value ? Number(e.target.value) : undefined }))}
                  className="flex-1 text-[12px] leading-[100%] text-xs text-[#B3B3B3] bg-transparent border-none outline-none min-w-0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 원장 테이블 - 데이터가 있을 때만 표시 */}
        {ledgerData.length > 0 && ledgerData.some(account => {
          const rows = 'rows' in account ? account.rows : [];
          return rows && rows.length > 0;
        }) && (
          <div id="ledger-table" className="bg-white border border-[#D9D9D9]">
            <table className="w-full text-sm text-[#757575]">
              <thead>
                <tr>
                  <th className="text-xs bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium text-[#757575] w-[90px]">일자</th>
                  {(ledgerType === 'ACCOUNTS' || ledgerType === 'PARTNER') && (
                    <th className="text-xs bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium text-[#757575]">계정과목</th>
                  )}
                  <th className="text-xs bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium text-[#757575]">차변금액</th>
                  <th className="text-xs bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium text-[#757575]">대변금액</th>
                  <th className="text-xs bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium text-[#757575]">잔액</th>
                  {(ledgerType === 'ACCOUNTS' || ledgerType === 'ACCOUNT') && (
                    <th className="text-xs bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium text-[#757575]">거래처</th>
                  )}
                  <th className="text-xs bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium text-[#757575]">적요</th>
                </tr>
              </thead>
              <tbody>
                {ledgerData.flatMap((account: LedgerAccount | LedgerPartner, accountIndex: number) => {
                  // API 응답 구조에 따라 rows 추출
                  const rows = 'rows' in account ? account.rows : [];
                  const accountInfo = 'account' in account ? account.account : null;
                  
                  return rows ? rows.map((row: LedgerRow, rowIndex: number) => (
                    <tr 
                      key={`${accountIndex}-${rowIndex}`}
                      onClick={() => handleRowClick(row)}
                      className={`cursor-pointer hover:bg-gray-50 ${row.voucherId ? 'hover:bg-blue-50' : ''}`}
                    >
                      <td className="p-2 text-xs border border-[#D9D9D9] text-center">
                        {row.date ? new Date(row.date).toLocaleDateString('ko-KR', {
                          year: '2-digit',
                          month: '2-digit',
                          day: '2-digit'
                        }).replace(/\./g, '').replace(/\s/g, '') : '-'}
                      </td>
                      {(ledgerType === 'ACCOUNTS' || ledgerType === 'PARTNER') && (
                        <td className="p-2 text-xs border border-[#D9D9D9]">
                          {row.accountName || accountInfo?.name || '-'}
                        </td>
                      )}
                      <td className="p-2 text-xs border border-[#D9D9D9] text-right">{row.debit.toLocaleString()}</td>
                      <td className="p-2 text-xs border border-[#D9D9D9] text-right">{row.credit.toLocaleString()}</td>
                      <td className="p-2 text-xs border border-[#D9D9D9] text-right">{row.balance.toLocaleString()}원</td>
                      {(ledgerType === 'ACCOUNTS' || ledgerType === 'ACCOUNT') && (
                        <td className="p-2 text-xs border border-[#D9D9D9]">{row.partnerName || '-'}</td>
                      )}
                      <td className="p-2 text-xs border border-[#D9D9D9]">{row.description || '-'}</td>
                    </tr>
                  )) : [];
                })}
              </tbody>
            </table>
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
