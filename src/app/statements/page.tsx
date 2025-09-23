'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

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

export default function StatementsPage() {
  const router = useRouter();
  const { token, isAuthenticated, loading: authLoading } = useAuth();

  const [filters, setFilters] = useState<BalanceFilters>({
    date: '',
    accountCode: '',
    partnerId: '',
  });
  const [loading, setLoading] = useState(false);
  const [balanceData, setBalanceData] = useState<BalanceAccount[] | BalancePartner[]>([]);
  const [queryDate, setQueryDate] = useState<string>('');

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
      setLoading(true);
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
    } finally {
      setLoading(false);
    }
  }, [token, filters]);

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

  /** 인쇄하기 */
  const handlePrint = () => {
    window.print();
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
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold mb-2 text-[#1E1E1E]">명세서</h2>
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

        {/* 필터 영역 */}
        <div className="bg-white border border-[#D9D9D9] mb-6">
          <table className="w-full text-sm text-[#1e1616]">
            <tbody>
              <tr>
                <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium text-[#757575]" style={{ width: 'fit-content', whiteSpace: 'nowrap' }}>조회일자(필수)</td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    type="date"
                    value={filters.date}
                    onChange={(e) => setFilters(prev => ({ ...prev, date: e.target.value }))}
                    className="w-full border-none outline-none bg-transparent text-[#B3B3B3]"
                    placeholder="선택하기"
                  />
                </td>
                <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium text-[#757575]" style={{ width: 'fit-content', whiteSpace: 'nowrap' }}>계정과목</td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    type="text"
                    placeholder="선택하기"
                    value={filters.accountCode || ''}
                    onChange={(e) => setFilters(prev => ({ ...prev, accountCode: e.target.value }))}
                    className="w-full border-none outline-none bg-transparent text-[#B3B3B3]"
                  />
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
              </tr>
            </tbody>
          </table>
        </div>

        {/* 잔액명세서 데이터 */}
        {balanceData.length > 0 ? (
          <div className="bg-white border border-[#D9D9D9]">
            <table className="w-full text-sm text-[#757575]">
              <thead className="bg-[#F5F5F5]">
                <tr>
                  <th className="p-3 border border-[#D9D9D9] font-medium">일자</th>
                  <th className="p-3 border border-[#D9D9D9] font-medium">계정과목</th>
                  <th className="p-3 border border-[#D9D9D9] font-medium">거래처</th>
                  <th className="p-3 border border-[#D9D9D9] font-medium">잔액</th>
                </tr>
              </thead>
              <tbody>
                {balanceData.flatMap((item: BalanceAccount | BalancePartner, itemIndex: number) => 
                  item.rows?.map((row: BalanceRow, rowIndex: number) => (
                    <tr key={`${itemIndex}-${rowIndex}`} className="hover:bg-gray-50">
                      <td className="p-3 border border-[#D9D9D9] text-center">{queryDate}</td>
                      <td className="p-3 border border-[#D9D9D9]">
                        {row.account ? `${row.account.code} - ${row.account.name}` : ('account' in item && item.account ? `${item.account.code} - ${item.account.name}` : '')}
                      </td>
                      <td className="p-3 border border-[#D9D9D9]">
                        {row.partnerName ? (
                          <button className="text-[#1ACCFF] underline bg-transparent border-none cursor-pointer">
                            {row.partnerName}
                          </button>
                        ) : '-'}
                      </td>
                      <td className="p-3 border border-[#D9D9D9] text-right">
                        {row.balance.toLocaleString()}원
                      </td>
                    </tr>
                  )) || []
                )}
              </tbody>
            </table>
          </div>
        ) : (
          !loading && (
            <div className="text-center text-gray-500 py-8">
              조회된 내역이 없습니다.
            </div>
          )
        )}
      </div>
    </div>
  );
}
