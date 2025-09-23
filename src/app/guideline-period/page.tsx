'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

interface GuidelineRow {
  id: number;
  content: string;
  status: string; // ACTIVE | INACTIVE
  problem?: string;
}

export default function GuidelinePeriodPage() {
  const router = useRouter();
  const { isAuthenticated, loading: authLoading } = useAuth();
  const [rows, setRows] = useState<GuidelineRow[]>([
    { id: 1, content: '', status: 'ACTIVE', problem: '' },
  ]);
  const [loading, setLoading] = useState(false);
  const [newGuideline, setNewGuideline] = useState('');

  // 로컬스토리지에서 토큰 가져오기
  const getToken = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('accessToken');
    }
    return null;
  };

  // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, router]);

  /** 저장 버튼 활성화 여부 */
  const hasData = rows.some(r => r.content.trim());

  /** 지침 불러오기 */
  const fetchGuidelines = useCallback(async () => {
    const token = getToken();
    if (!token) {
      console.log('토큰이 없습니다.');
      return;
    }
    
    try {
      setLoading(true);
      const res = await fetch('https://api.eosxai.com/api/instructions', {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      if (!res.ok) {
        throw new Error('불러오기 실패');
      }
      
      const data = await res.json();
      if (Array.isArray(data)) {
        setRows(
          data.map(
            (g: {
              id: number;
              content?: string;
              status?: string;
              problem?: string;
            }) => ({
              id: g.id,
              content: g.content || '',
              status: g.status || 'ACTIVE',
              problem: g.problem || '',
            })
          )
        );
      }
    } catch (err) {
      console.error('지침 불러오기 실패:', err);
      alert('지침을 불러오는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  }, []);

  /** 지침 저장 */
  const handleSave = async () => {
    alert('저장 API는 추후 구현 예정입니다.');
  };

  /** 지침 삭제 */
  const handleDelete = async (id: number) => {
    const token = getToken();
    if (!token) {
      alert('인증이 필요합니다.');
      return;
    }
    
    if (!confirm('정말로 이 지침을 삭제하시겠습니까?')) return;
    
    try {
      setLoading(true);
      const res = await fetch(`https://api.eosxai.com/api/instructions/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      
      if (!res.ok) {
        throw new Error('삭제 실패');
      }
      
      // 로컬 상태에서도 제거
      setRows(prev => prev.filter(r => r.id !== id));
      alert('지침이 삭제되었습니다.');
    } catch (err) {
      console.error('삭제 실패:', err);
      alert('삭제에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  /** 지침 추가 */
  const handleAddGuideline = async () => {
    const token = getToken();
    if (!token) {
      alert('인증이 필요합니다.');
      return;
    }
    
    if (!newGuideline.trim()) {
      alert('지침 내용을 입력해주세요.');
      return;
    }

    try {
      setLoading(true);
      const res = await fetch('https://api.eosxai.com/api/instructions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          providedAt: new Date().toISOString().split('T')[0], // YYYY-MM-DD 형식
          content: newGuideline,
        }),
      });
      
      if (!res.ok) {
        const errorText = await res.text();
        console.error('API 응답 에러:', res.status, errorText);
        throw new Error(`추가 실패: ${res.status}`);
      }
      
      const newGuidelineData = await res.json();
      console.log('추가된 지침:', newGuidelineData);
      
      setRows(prev => [newGuidelineData, ...prev]);
      setNewGuideline('');
      alert('지침이 추가되었습니다.');
    } catch (err) {
      console.error('추가 실패:', err);
      alert('지침 추가에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchGuidelines();
    }
  }, [isAuthenticated, fetchGuidelines]);

  // 로딩 중이거나 인증되지 않은 경우
  if (authLoading) {
    return (
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
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
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold mb-2 text-[#1E1E1E]">지침 주기</h2>
            <p className="text-[#767676]">
            EOS는 각 고개별로 맞춤 훈련이 가능합니다. 일반적인 기준과 다른 우리 회사만의 특별한 룰이 있을 경우, 특별히 회계처리시 명심할 사항 등을 알려주실 수 있습니다.
            특별한 사항이 없으면 사용하지 않아도 됩니다. 계정분류와 관련된 사항에 대해서만 조언을 주세요. 업무지시를 받는 AI는 상단 지시창을 이용해주세요.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              className={`flex items-center justify-center min-w-[79px] h-[28px] px-3 text-[12px] leading-[12px] ${
                hasData && !loading
                  ? 'bg-[#2C2C2C] text-white'
                  : 'bg-[#E6E6E6] text-[#1E1E1E]'
              }`}
              onClick={handleSave}
              disabled={!hasData || loading}
            >
              {loading ? '처리중...' : '저장하기'}
            </button>
          </div>
        </div>

        {/* 테이블 */}
        <table className="w-full border border-[#D9D9D9] text-sm text-[#757575] mb-6">
          <thead>
            <tr>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-12 font-medium">
                번호
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium">
                지침내용
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium">
                반영여부(문제점)
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-24 font-medium">
                삭제
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
                    className="w-full focus:outline-none text-[#B3B3B3]"
                    placeholder="입력하기"
                    value={row.content}
                    readOnly
                    onChange={e =>
                      setRows(prev =>
                        prev.map(r =>
                          r.id === row.id
                            ? { ...r, content: e.target.value }
                            : r
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
            onChange={e => setNewGuideline(e.target.value)}
          />
          <button
            onClick={handleAddGuideline}
            className="min-w-[32px] h-[32px] flex items-center justify-center bg-[#F3F3F3] hover:bg-[#E0E0E0] rounded text-lg text-[#1E1E1E]"
            disabled={loading}
          >
            {loading ? '...' : '+'}
          </button>
        </div>
      </div>
    </div>
  );
}