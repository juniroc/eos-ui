'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Button from '@/components/Button';
import PrintButton from '@/components/PrintButton';
import Image from 'next/image';

interface Account {
  code: string;
  name: string;
}

interface Partner {
  id: string;
  name: string;
}

interface BalanceRow {
  partnerId?: string;
  partnerName?: string;
  account?: Account;
  balance: number;
  direction: 'DEBIT' | 'CREDIT';
}

interface BalanceAccount {
  account: Account;
  totalBalance: number;
  direction: 'DEBIT' | 'CREDIT';
  rows: BalanceRow[];
}

interface BalancePartner {
  partner: Partner;
  totalBalance: number;
  direction: 'DEBIT' | 'CREDIT';
  rows: BalanceRow[];
}

interface BalanceFilters {
  date: string;
  accountCode?: string;
  partnerId?: string;
}

// Ledger 관련 타입들
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

interface LedgerAccount {
  account: Account;
  openingBalance: number;
  rows: LedgerRow[];
}

interface LedgerPartner {
  partner: Partner;
  accounts: LedgerAccount[];
}

type LedgerDataType = 'ACCOUNT' | 'ACCOUNTS' | 'ACCOUNT_PARTNER' | 'PARTNER';

export default function StatementsPage() {
  const router = useRouter();
  const { token, isAuthenticated, loading: authLoading } = useAuth();

  const [filters, setFilters] = useState<BalanceFilters>({
    date: new Date().toISOString().split('T')[0],
    accountCode: '',
    partnerId: '',
  });
  const [balanceData, setBalanceData] = useState<BalanceAccount[] | BalancePartner[]>([]);
  const [queryDate, setQueryDate] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState<{id: string, name: string, account?: Account} | null>(null);
  
  // Ledger 관련 상태
  const [ledgerLoading, setLedgerLoading] = useState(false);
  const [ledgerData, setLedgerData] = useState<LedgerAccount[] | LedgerPartner[]>([]);
  const [, setLedgerType] = useState<LedgerDataType>('ACCOUNTS');

  // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, router]);

  /** 잔액명세서 조회 */
  const fetchBalance = useCallback(async () => {
    if (!token) return;

    try {
      const params = new URLSearchParams();

      if (filters.date) params.append('date', filters.date);
      if (filters.accountCode) params.append('accountCode', filters.accountCode);
      if (filters.partnerId) params.append('partnerId', filters.partnerId);

      const url = `https://api.eosxai.com/api/balance?${params.toString()}`;
      console.log('API 호출 URL:', url);

      const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
      const data = await res.json();
      
      setQueryDate(data.date || filters.date);
      setBalanceData(data.accounts || []);
    } catch (err) {
      console.error('잔액명세서 조회 에러:', err);
    }
  }, [token, filters]);

  /** 원장 조회 */
  const fetchLedger = useCallback(async (partnerId?: string) => {
    if (!token) return;

    try {
      setLedgerLoading(true);
      const params = new URLSearchParams();

      // 조회일자를 startDate, endDate로 설정 (같은 날짜로)
      if (filters.date) {
        params.append('startDate', filters.date);
        params.append('endDate', filters.date);
      }

      if (filters.accountCode) params.append('accountCode', filters.accountCode);
      if (partnerId) params.append('partnerId', partnerId);

      const url = `https://api.eosxai.com/api/ledger?${params.toString()}`;
      console.log('원장 조회 API 호출 URL:', url);

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
      alert('원장 조회 중 오류가 발생했습니다.');
    } finally {
      setLedgerLoading(false);
    }
  }, [token, filters]);

  // 모달이 열리고 선택된 거래처가 있을 때 원장 조회
  useEffect(() => {
    if (isModalOpen && selectedPartner) {
      fetchLedger(selectedPartner.id);
    }
  }, [isModalOpen, selectedPartner, fetchLedger]);

  /** 다운로드 */
  const handleDownload = () => {
    // CSV 형태로 다운로드
    const csvContent = [
      ['일자', '계정과목', '거래처', '잔액'],
      ...(Array.isArray(balanceData) ? balanceData : []).flatMap((item: BalanceAccount | BalancePartner) => {
        if ('account' in item && item.account) {
          // ACCOUNTS/ACCOUNT 타입
          return item.rows ? item.rows.map((row: BalanceRow) => [
            queryDate,
            `${item.account.code} - ${item.account.name}`,
            row.partnerName || '',
            `${row.balance.toLocaleString()}원 (${row.direction === 'DEBIT' ? '차변' : '대변'})`
          ]) : [];
        } else if ('partner' in item && item.partner) {
          // PARTNER 타입
          return item.rows ? item.rows.map((row: BalanceRow) => [
            queryDate,
            row.account ? `${row.account.code} - ${row.account.name}` : '',
            item.partner.name,
            `${row.balance.toLocaleString()}원 (${row.direction === 'DEBIT' ? '차변' : '대변'})`
          ]) : [];
        }
        return [];
      })
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `잔액명세서_${filters.date || '전체'}.csv`;
    link.click();
  };


  /** 조회하기 */
  const handleSearch = () => {
    if (!filters.date) {
      alert('조회일자를 입력해주세요.');
      return;
    }
    fetchBalance();
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
                    <h2 className="text-[15px] leading-[140%] font-semibold text-[#1E1E1E]">명세서</h2>
                  </div>
                  <p className="text-[12px] leading-[140%] text-[#767676]">결산일자를 선택하고 결산점검을 시작하세요.</p>
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
                  targetSelector="#statements-table"
                  variant="neutral"
                  className="flex flex-row justify-center items-center gap-2"
                >
                  인쇄하기
                </PrintButton>
              </div>
            </div>
          </div>
        </div>

        {/* 필터 영역 */}
        <div className="flex flex-row items-stretch border border-[#D9D9D9] min-w-0 overflow-x-auto mb-4">
          {/* 조회일자(필수) */}
          <div className="flex flex-row items-stretch flex-1 min-w-[200px]">
            <div className="flex flex-row justify-center items-center py-2 px-1 gap-1 w-[80px] md:w-[100px] bg-[#F5F5F5] border-r border-[#D9D9D9] shrink-0">
              <span className="text-[11px] md:text-[12px] leading-[100%] text-xs text-[#757575] text-center">조회일자(필수)</span>
            </div>
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <div className="flex flex-row items-center py-2 px-2 gap-2 bg-white h-full">
                <input
                  type="date"
                  value={filters.date}
                  onChange={(e) => setFilters(prev => ({ ...prev, date: e.target.value }))}
                  className="flex-1 text-[12px] leading-[100%] text-xs text-[#B3B3B3] bg-transparent border-none outline-none min-w-0"
                  placeholder="선택하기"
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
                <input
                  type="text"
                  placeholder="선택하기"
                  value={filters.accountCode || ''}
                  onChange={(e) => setFilters(prev => ({ ...prev, accountCode: e.target.value }))}
                  className="flex-1 text-[12px] leading-[100%] text-xs text-[#B3B3B3] bg-transparent border-none outline-none min-w-0"
                />
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
        </div>

        {/* 잔액명세서 데이터 */}
        {balanceData.length > 0 && (
          <div id="statements-table" className="bg-white">
            <table className="w-full text-sm text-[#757575]">
              <thead className="bg-[#F5F5F5]">
                <tr>
                  <th className="p-2 text-xs border border-[#D9D9D9] font-medium w-[69px] min-w-[69px]">일자</th>
                  <th className="p-2 text-xs border border-[#D9D9D9] font-medium w-1/3">계정과목</th>
                  <th className="p-2 text-xs border border-[#D9D9D9] font-medium w-1/3">거래처</th>
                  <th className="p-2 text-xs border border-[#D9D9D9] font-medium w-1/3">잔액</th>
                </tr>
              </thead>
              <tbody>
                {balanceData.flatMap((item: BalanceAccount | BalancePartner, itemIndex: number) => 
                  item.rows?.map((row: BalanceRow, rowIndex: number) => (
                    <tr key={`${itemIndex}-${rowIndex}`} className="hover:bg-gray-50">
                      <td className="p-2 text-xs border border-[#D9D9D9] text-center">
                        {queryDate ? new Date(queryDate).toLocaleDateString('ko-KR', {
                          year: '2-digit',
                          month: '2-digit',
                          day: '2-digit'
                        }).replace(/\./g, '').replace(/\s/g, '') : '-'}
                      </td>
                      <td className="p-2 text-xs border border-[#D9D9D9]">
                        {row.account ? `${row.account.code} - ${row.account.name}` : ('account' in item && item.account ? `${item.account.code} - ${item.account.name}` : '')}
                      </td>
                      <td className="p-2 text-xs border border-[#D9D9D9] text-center">
                        {row.partnerName ? (
                          <button 
                            onClick={() => {
                              const account = row.account || ('account' in item && item.account ? item.account : undefined);
                              setSelectedPartner({ 
                                id: row.partnerId || '', 
                                name: row.partnerName!,
                                account: account
                              });
                              setIsModalOpen(true);
                            }}
                            className="text-[#1ACCFF] underline bg-transparent border-none cursor-pointer"
                          >
                            {row.partnerName}
                          </button>
                        ) : '-'}
                      </td>
                      <td className="p-2 text-xs border border-[#D9D9D9] text-right">
                        {row.balance.toLocaleString()}원
                      </td>
                    </tr>
                  )) || []
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* 팝업 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-50 p-5">
          <div id="statements-modal" className="relative w-full h-full bg-white flex flex-col pb-5">
            {/* 상단 헤더 */}
            <div className="flex flex-row justify-between items-center p-3 h-[41px]">
              {/* Breadcrumb */}
              <div className="flex flex-row items-center gap-0.5 flex-1 h-[17px]">
                <div className="flex flex-row items-start">
                  <span className="text-xs leading-[140%] text-[#B3B3B3] font-['Pretendard']">회계장부</span>
                </div>
                <div className="w-4 h-4 flex items-center justify-center">
                  <Image src="/icons/arrow_right.svg" alt="arrow_right" width="16" height="16"/>
                </div>
                <div className="flex flex-row items-start">
                  <span className="text-xs leading-[140%] text-[#1E1E1E] font-semibold font-['Pretendard']">원장</span>
                </div>
              </div>
              
              {/* X 버튼 */}
              <button
                className="w-4 h-4 flex items-center justify-center cursor-pointer"
                onClick={() => {
                  setIsModalOpen(false);
                  setSelectedPartner(null);
                  setLedgerData([]);
                }}
              >
                <Image src="/icons/close.svg" alt="close" width={16} height={16} />
              </button>
            </div>

            {/* 콘텐츠 영역 */}
            <div className="flex flex-col items-start p-4 gap-4 flex-1 overflow-y-auto">
              {/* 제목 섹션 */}
              <div className="flex flex-col items-start gap-4 w-full min-w-[520px]">
                <div className="flex flex-row justify-between items-end gap-4 w-full">
                  <div className="flex flex-col items-start">
                    <div className="flex flex-col items-start p-1.5 px-0 pt-1.5 pb-0.5 w-64 h-[29px] rounded-lg">
                      <div className="flex flex-row items-start">
                        <span className="text-[15px] leading-[140%] text-[#1E1E1E] font-semibold font-['Pretendard']">
                          {(() => {
                            // 클릭한 거래처의 계정과목 정보 사용
                            const accountInfo = selectedPartner?.account 
                              ? `${selectedPartner.account.code} - ${selectedPartner.account.name}`
                              : '계정과목';
                            
                            const partnerInfo = selectedPartner?.name || '거래처';
                            return `${accountInfo} - ${partnerInfo}`;
                          })()}
                        </span>
                      </div>
                    </div>
                    {/* <span className="text-xs leading-[140%] text-[#767676] font-['Pretendard']">
                      선택한 조건에 따른 잔액명세서를 확인하세요.
                    </span> */}
                  </div>
                </div>
              </div>
              
              {/* 원장 테이블 */}
              {ledgerLoading ? (
                <div className="flex items-center justify-center w-full h-full">
                  <div className="text-[#757575]">원장 데이터를 불러오는 중...</div>
                </div>
              ) : (
                <div className="bg-white w-full">
                  <table className="w-full text-sm text-[#757575]">
                    <thead>
                      <tr>
                        <th className="text-xs bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium text-[#757575] w-[90px]">일자</th>
                        <th className="text-xs bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium text-[#757575]">차변금액</th>
                        <th className="text-xs bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium text-[#757575]">대변금액</th>
                        <th className="text-xs bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium text-[#757575]">잔액</th>
                        <th className="text-xs bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium text-[#757575]">적요</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ledgerData.length > 0 && ledgerData.some(account => {
                        const rows = 'rows' in account ? account.rows : [];
                        return rows && rows.length > 0;
                      }) ? (
                        ledgerData.flatMap((account: LedgerAccount | LedgerPartner, accountIndex: number) => {
                          // API 응답 구조에 따라 rows 추출
                          const rows = 'rows' in account ? account.rows : [];
                          
                          return rows ? rows.map((row: LedgerRow, rowIndex: number) => (
                            <tr 
                              key={`${accountIndex}-${rowIndex}`}
                              className="hover:bg-gray-50"
                            >
                              <td className="p-2 text-xs border border-[#D9D9D9] text-center">
                                {row.date ? new Date(row.date).toLocaleDateString('ko-KR', {
                                  year: '2-digit',
                                  month: '2-digit',
                                  day: '2-digit'
                                }).replace(/\./g, '').replace(/\s/g, '') : '-'}
                              </td>
                              <td className="p-2 text-xs border border-[#D9D9D9] text-right">{row.debit.toLocaleString()}</td>
                              <td className="p-2 text-xs border border-[#D9D9D9] text-right">{row.credit.toLocaleString()}</td>
                              <td className="p-2 text-xs border border-[#D9D9D9] text-right">{row.balance.toLocaleString()}원</td>
                              <td className="p-2 text-xs border border-[#D9D9D9]">{row.description || '-'}</td>
                            </tr>
                          )) : [];
                        })
                      ) : (
                        <tr>
                          <td 
                            colSpan={5}
                            className="p-8 text-xs text-center text-gray-500 border border-[#D9D9D9]"
                          >
                            조회된 원장 데이터가 없습니다.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
