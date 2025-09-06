'use client';

import { useEffect, useState } from 'react';

interface GuidelineRow {
  id: number;
  content: string;
  status: string; // ACTIVE | INACTIVE
  problem?: string;
}

const accessToken = 'YOUR_ACCESS_TOKEN'; // ✅ 교체 필요

export default function GuidelinePeriodPage() {
  const [rows, setRows] = useState<GuidelineRow[]>([
    { id: 1, content: '', status: 'ACTIVE', problem: '' },
  ]);
  const [loading] = useState(false);
  const [newGuideline, setNewGuideline] = useState('');

  /** 저장 버튼 활성화 여부 */
  const hasData = rows.some((r) => r.content.trim());

  /** 지침 불러오기 */
  const fetchGuidelines = async () => {
    try {
      const res = await fetch('/api/instructions', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (!res.ok) throw new Error('불러오기 실패');
      const data = await res.json();
      if (Array.isArray(data)) {
        setRows(
          data.map((g: {
            id: number;
            content?: string;
            status?: string;
            problem?: string;
          }) => ({
            id: g.id,
            content: g.content || '',
            status: g.status || 'ACTIVE',
            problem: g.problem || '',
          }))
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  /** 지침 저장 */
  const handleSave = async () => {
    alert('저장 API는 추후 구현 예정입니다.');
  };

  /** 지침 삭제 */
  const handleDelete = (id: number) => {
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  /** 지침 추가 */
  const handleAddGuideline = () => {
    if (!newGuideline.trim()) return;
    setRows((prev) => [
      ...prev,
      { id: Date.now(), content: newGuideline, status: 'ACTIVE', problem: '' },
    ]);
    setNewGuideline('');
  };

  useEffect(() => {
    fetchGuidelines();
  }, []);

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold mb-2 text-[#1E1E1E]">지침 주기</h2>
            <p className="text-[#767676]">
              EOS는 각 고객별로 맞춤 훈련이 가능합니다. 일반적인 기준과 다른 회사만의 특별할 룰이 있을 경우, 
              특별히 회계처리시 명심할 사항 등을 알려주실 수 있습니다.  
              특별한 사항이 없으면 작성하지 않으셔도 됩니다. 계정분류와 관련된 사항에 대해서만 조언을 주세요.  
              업무지시를 받는 신은 상단 지시창을 이용해주세요.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              className={`flex items-center justify-center min-w-[79px] h-[28px] px-3 text-[12px] leading-[12px] text-[#1E1E1E] rounded ${
                hasData && !loading
                  ? 'bg-[#F3F3F3] hover:bg-[#E0E0E0]'
                  : 'bg-[#E6E6E6]'
              }`}
              onClick={handleSave}
              disabled={!hasData || loading}
            >
              저장하기
            </button>
          </div>
        </div>

        {/* 테이블 */}
        <table className="w-full border border-[#D9D9D9] text-sm text-[#757575] mb-6">
          <thead>
            <tr>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-12">번호</td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">지침내용</td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">반영여부</td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-24">관리</td>
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
                    className="w-full focus:outline-none"
                    placeholder="입력하기"
                    value={row.content}
                    onChange={(e) =>
                      setRows((prev) =>
                        prev.map((r) =>
                          r.id === row.id ? { ...r, content: e.target.value } : r
                        )
                      )
                    }
                  />
                </td>
                <td className="p-3 border border-[#D9D9D9]">
                  {row.problem ? row.problem : '반영중'}
                </td>
                <td className="p-3 border border-[#D9D9D9] text-center">
                  <button
                    onClick={() => handleDelete(row.id)}
                    className="flex items-center justify-center min-w-[66px] h-[28px] px-3 text-[12px] text-[#1E1E1E] bg-[#F3F3F3] hover:bg-[#E0E0E0] rounded"
                    disabled={loading}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* 입력 + 추가 */}
        <div className="flex items-center gap-2 border border-[#D9D9D9] rounded p-2 max-w-xl">
          <input
            type="text"
            className="flex-1 focus:outline-none"
            placeholder="지침을 입력하고 추가해주세요."
            value={newGuideline}
            onChange={(e) => setNewGuideline(e.target.value)}
          />
          <button
            onClick={handleAddGuideline}
            className="min-w-[32px] h-[32px] flex items-center justify-center bg-[#F3F3F3] hover:bg-[#E0E0E0] rounded text-lg text-[#1E1E1E]"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
