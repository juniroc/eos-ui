'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

interface ManualJournalRow {
  id: number;
  date: string;
  debitAccount: string;
  debitAmount: string;
  debitPartner: string;
  creditAccount: string;
  creditAmount: string;
  creditPartner: string;
  description: string;
  voucherId?: string;
}

export default function ManualJournalPage() {
  const router = useRouter();
  const { isAuthenticated, loading: authLoading } = useAuth();
  const [rows, setRows] = useState<ManualJournalRow[]>([
    {
      id: 1,
      date: '',
      debitAccount: '',
      debitAmount: '',
      debitPartner: '',
      creditAccount: '',
      creditAmount: '',
      creditPartner: '',
      description: '',
    },
  ]);

  // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, router]);

  const [loading] = useState(false);

  /** 저장 버튼 활성화 여부 */
  const hasData = rows.some(
    r =>
      r.date.trim() ||
      r.debitAccount.trim() ||
      r.debitAmount.trim() ||
      r.debitPartner.trim() ||
      r.creditAccount.trim() ||
      r.creditAmount.trim() ||
      r.creditPartner.trim() ||
      r.description.trim()
  );

  /** 행 추가 */
  const addRow = () => {
    setRows(prev => [
      ...prev,
      {
        id: Date.now(),
        date: '',
        debitAccount: '',
        debitAmount: '',
        debitPartner: '',
        creditAccount: '',
        creditAmount: '',
        creditPartner: '',
        description: '',
      },
    ]);
  };


  /** 저장 */
  const handleSave = async () => {
    if (!hasData) return;
    
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        alert('로그인이 필요합니다.');
        return;
      }

      // 분개장 데이터를 API 형식으로 변환
      const vouchers = rows.map(row => ({
        id: row.voucherId || Date.now(), // 기존 voucherId가 있으면 사용, 없으면 새로 생성
        date: row.date || undefined,
        description: row.description || undefined,
        transactions: [
          // 차변 거래
          ...(row.debitAccount && row.debitAmount ? [{
            id: Date.now() + Math.random(), // 임시 ID
            accountId: row.debitAccount,
            partnerId: row.debitPartner || undefined,
            amount: parseFloat(row.debitAmount) || undefined,
            note: row.description || undefined,
            debitCredit: true // 차변
          }] : []),
          // 대변 거래
          ...(row.creditAccount && row.creditAmount ? [{
            id: Date.now() + Math.random() + 1, // 임시 ID
            accountId: row.creditAccount,
            partnerId: row.creditPartner || undefined,
            amount: parseFloat(row.creditAmount) || undefined,
            note: row.description || undefined,
            debitCredit: false // 대변
          }] : [])
        ]
      }));

      const res = await fetch('https://api.eosxai.com/api/journal/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ vouchers }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || '저장 실패');
      }

      const data = await res.json();
      if (data.success) {
        alert('저장되었습니다!');
        // 저장 후 로컬 데이터 초기화
        setRows([
          {
            id: 1,
            date: '',
            debitAccount: '',
            debitAmount: '',
            debitPartner: '',
            creditAccount: '',
            creditAmount: '',
            creditPartner: '',
            description: '',
          },
        ]);
      } else {
        alert('저장 실패');
      }
    } catch (err) {
      console.error('저장 에러:', err);
      alert('저장 중 문제가 발생했습니다.');
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
            <h2 className="text-xl font-bold mb-2 text-[#1E1E1E]">수동분개</h2>
            <p className="text-[#767676]">
              필요한 내용을 입력하고 정보를 저장하세요.
            </p>
          </div>
          <button
            className={`flex items-center justify-center min-w-[79px] h-[28px] px-3 text-[12px] ${
              hasData && !loading
                ? 'bg-[#2C2C2C] text-white'
                : 'bg-[#E6E6E6] text-[#1E1E1E]'
            }`}
            disabled={!hasData || loading}
            onClick={handleSave}
          >
            저장하기
          </button>
        </div>

        {/* 테이블 */}
        <table className="w-full border border-[#D9D9D9] text-sm text-[#757575]">
          <thead>
            <tr>
              <td
                rowSpan={2}
                className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-14 text-center font-medium"
              >
                번호
              </td>
              <td
                rowSpan={2}
                className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-24 text-center font-medium"
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
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium w-[100px]">
                계정과목
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">
                금액
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">
                거래처
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium w-[100px]">
                계정과목
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">
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
                <td className="p-3 border border-[#D9D9D9] text-center">
                  {idx + 1}
                </td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    type="date"
                    className="w-full focus:outline-none text-[#B3B3B3]"
                    value={row.date}
                    onChange={e =>
                      setRows(prev =>
                        prev.map(r =>
                          r.id === row.id ? { ...r, date: e.target.value } : r
                        )
                      )
                    }
                  />
                </td>
                {/* 차변 */}
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    type="text"
                    className="w-full focus:outline-none text-[#B3B3B3]"
                    placeholder="입력하기"
                    value={row.debitAccount}
                    onChange={e =>
                      setRows(prev =>
                        prev.map(r =>
                          r.id === row.id
                            ? { ...r, debitAccount: e.target.value }
                            : r
                        )
                      )
                    }
                  />
                </td>
                <td className="p-3 border border-[#D9D9D9]">
                  <div className="flex items-center w-full">
                    <input
                      type="number"
                      className="flex-1 focus:outline-none text-[#B3B3B3]"
                      placeholder="입력하기"
                      value={row.debitAmount}
                      onChange={e =>
                        setRows(prev =>
                          prev.map(r =>
                            r.id === row.id
                              ? { ...r, debitAmount: e.target.value }
                              : r
                          )
                        )
                      }
                    />
                    <span className="text-gray-400 text-sm ml-2">원</span>
                  </div>
                </td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    type="text"
                    className="w-full focus:outline-none text-[#B3B3B3]"
                    placeholder="입력하기"
                    value={row.debitPartner}
                    onChange={e =>
                      setRows(prev =>
                        prev.map(r =>
                          r.id === row.id
                            ? { ...r, debitPartner: e.target.value }
                            : r
                        )
                      )
                    }
                  />
                </td>
                {/* 대변 */}
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    type="text"
                    className="w-full focus:outline-none text-[#B3B3B3]"
                    placeholder="입력하기"
                    value={row.creditAccount}
                    onChange={e =>
                      setRows(prev =>
                        prev.map(r =>
                          r.id === row.id
                            ? { ...r, creditAccount: e.target.value }
                            : r
                        )
                      )
                    }
                  />
                </td>
                <td className="p-3 border border-[#D9D9D9]">
                  <div className="flex items-center w-full">
                    <input
                      type="number"
                      className="flex-1 focus:outline-none text-[#B3B3B3]"
                      placeholder="입력하기"
                      value={row.creditAmount}
                      onChange={e =>
                        setRows(prev =>
                          prev.map(r =>
                            r.id === row.id
                              ? { ...r, creditAmount: e.target.value }
                              : r
                          )
                        )
                      }
                    />
                    <span className="text-gray-400 text-sm ml-2">원</span>
                  </div>
                </td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    type="text"
                    className="w-full focus:outline-none text-[#B3B3B3]"
                    placeholder="입력하기"
                    value={row.creditPartner}
                    onChange={e =>
                      setRows(prev =>
                        prev.map(r =>
                          r.id === row.id
                            ? { ...r, creditPartner: e.target.value }
                            : r
                        )
                      )
                    }
                  />
                </td>
                {/* 적요 */}
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    type="text"
                    className="w-full focus:outline-none text-[#B3B3B3]"
                    placeholder="입력하기"
                    value={row.description}
                    onChange={e =>
                      setRows(prev =>
                        prev.map(r =>
                          r.id === row.id
                            ? { ...r, description: e.target.value }
                            : r
                        )
                      )
                    }
                  />
                </td>
              </tr>
            ))}
            {/* 추가하기 버튼 */}
            <tr>
              <td
                colSpan={10}
                className="p-3 border border-[#D9D9D9] text-center"
              >
                <button
                  onClick={addRow}
                  className="text-sm text-[#767676] hover:text-[#1E1E1E] flex items-center justify-center gap-1 w-full"
                >
                  <span className="w-4 h-4 rounded-full border border-[#767676] flex items-center justify-center text-xs">+</span>
                  추가하기
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
