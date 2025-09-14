'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

interface Transaction {
  id: number;
  accountId?: string;
  accountCode?: string;
  accountName?: string;
  debitCredit?: 'DEBIT' | 'CREDIT';
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

export default function JournalPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const voucherIds = searchParams.get('voucherIds')?.split(',') || [];

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
      setVouchers(data.vouchers || []);
    } catch (err) {
      console.error('전표 조회 에러:', err);
    } finally {
      setLoading(false);
    }
  }, [token, filters, voucherIds]);

  /** 일괄 저장 */
  const handleBatchSave = async () => {
    if (!token) return;
    try {
      const res = await fetch(`https://api.eosxai.com/api/journal/save`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ vouchers }),
      });
      const data = await res.json();
      if (data.success) {
        alert('일괄 저장되었습니다.');
        setVouchers(data.vouchers);
      } else {
        alert('저장 실패');
      }
    } catch (err) {
      console.error('저장 에러:', err);
      alert('저장 실패');
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
  }, [fetchJournal]);

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
          <table className="w-full text-sm text-[#757575]">
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
          vouchers.map(v => (
            <div key={v.id} className="mb-4 p-4 border rounded">
              <div className="font-semibold mb-2">전표번호: {v.id}</div>
              <div className="text-sm text-gray-600">총 차변 {v.debitTotal} / 총 대변 {v.creditTotal}</div>
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
