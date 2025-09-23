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

  /** 행 삭제 */
  const handleDelete = (id: number) => {
    setRows(prev => prev.filter(r => r.id !== id));
  };

  /** 저장 */
  const handleSave = async () => {
    alert('저장 API 연결 예정');
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
                className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-12 text-center font-medium"
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
              <td
                rowSpan={2}
                className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-24 text-center"
              >
                적요
              </td>
            </tr>
            <tr>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">
                계정과목
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">
                금액
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">
                거래처
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">
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
                    {!row.debitAmount && (
                      <span className="text-gray-400 text-sm mr-2 w-max">입력하기</span>
                    )}
                    <input
                      type="number"
                      className="flex-1 focus:outline-none text-[#B3B3B3]"
                      placeholder=""
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
                    {!row.creditAmount && (
                      <span className="text-gray-400 text-sm mr-2 w-max">입력하기</span>
                    )}
                    <input
                      type="number"
                      className="flex-1 focus:outline-none text-[#B3B3B3]"
                      placeholder=""
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
                {/* 관리 */}
                <td className="p-3 border border-[#D9D9D9] text-center">
                  <button
                    onClick={() => handleDelete(row.id)}
                    className="flex items-center justify-center min-w-[66px] h-[28px] px-3 text-[12px] text-[#1E1E1E] bg-[#F3F3F3] hover:bg-[#E0E0E0] rounded"
                  >
                    삭제
                  </button>
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
                  className="text-sm text-[#767676] hover:text-[#1E1E1E]"
                >
                  + 추가하기
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
