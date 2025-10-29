'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import ToastMessage from '@/components/ToastMessage';

interface GuidelineRow {
  id: number;
  content: string;
  status: string; // ACTIVE | INACTIVE
  problem?: string;
  providedAt?: string;
}

export default function GuidelinePeriodPage() {
  const router = useRouter();
  const { isAuthenticated, loading: authLoading } = useAuth();
  const [rows, setRows] = useState<GuidelineRow[]>([
    { id: 1, content: '', status: 'ACTIVE', problem: '', providedAt: new Date().toISOString().split('T')[0] },
  ]);
  const [loading, setLoading] = useState(false);
  const [newGuideline, setNewGuideline] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  
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
              providedAt?: string;
            }) => ({
              id: g.id,
              content: g.content || '',
              status: g.status || 'ACTIVE',
              problem: g.problem || '',
              providedAt: g.providedAt || new Date().toISOString().split('T')[0],
            })
          )
        );
      }
    } catch (err) {
      console.error('지침 불러오기 실패:', err);
      alert('지침을 불러오는데 문제가 발생했습니다.');
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
    
    // if (!confirm('정말로 이 지침을 삭제하시겠습니까?')) return;
    
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
      setToastMessage('지침이 삭제되었습니다!');
      setShowToast(true);
    } catch (err) {
      console.error('삭제 실패:', err);
      alert('지침 삭제중 문제가 발생했습니다.');
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
      setToastMessage('지침이 추가되었습니다!');
      setShowToast(true);
    } catch (err) {
      console.error('추가 실패:', err);
      alert('지침 추가중 문제가 발생했습니다.');
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
    <div className="flex flex-col items-start p-4 gap-4 w-full min-h-[175px]">
      {/* Title Section */}
      <div className="flex flex-col items-start gap-4 w-full min-w-[520px]">
        <div className="flex flex-row justify-between items-end gap-4 w-full">
          {/* Left Content */}
          <div className="flex flex-col items-start flex-1">
            {/* Menu Heading */}
            <div className="flex flex-col items-start pt-1.5 pb-0.5 w-64 rounded-lg">
              <div className="flex flex-row items-start h-[21px]">
                <span className="font-pretendard font-semibold text-[15px] leading-[140%] text-[#1E1E1E]">
                  지침 주기
                </span>
              </div>
            </div>
            {/* Description */}
            <div className="w-full font-pretendard text-[12px] leading-[140%] text-[#767676]">
              EOS는 각 고개별로 맞춤 훈련이 가능합니다. 일반적인 기준과 다른 우리 회사만의 특별한 룰이 있을 경우, 특별히 회계처리시 명심할 사항 등을 알려주실 수 있습니다.<br/>
              특별한 사항이 없으면 사용하지 않아도 됩니다. 계정분류와 관련된 사항에 대해서만 조언을 주세요. 업무지시를 받는 AI는 상단 지시창을 이용해주세요.
            </div>
          </div>
          
          {/* Right Buttons */}
          <div className="flex flex-row justify-end items-center gap-2 h-7">
            <button
              className={`flex flex-row justify-center items-center px-3 py-2 gap-2 w-[66px] h-7 font-pretendard text-[12px] leading-[100%] border-none ${
                hasData && !loading
                  ? 'bg-[#F3F3F3] text-[#1E1E1E] cursor-pointer'
                  : 'bg-[#E6E6E6] text-[#B3B3B3] cursor-not-allowed'
              }`}
              onClick={handleSave}
              disabled={!hasData || loading}
            >
              {loading ? '처리중' : '저장하기'}
            </button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="flex flex-col items-start w-full min-h-16">
        {/* Table Header */}
        <div className="flex flex-row items-center w-full h-8">
          {/* 번호 Column - 고정 */}
          <div className="flex flex-row justify-center items-center p-2 gap-2 w-10 min-w-[40px] h-8 bg-[#F5F5F5] border-t border-l border-b border-[#D9D9D9] flex-shrink-0">
            <span className="font-pretendard text-[12px] leading-[100%] text-[#757575]">
              번호
            </span>
          </div>

          {/* 제공일자 Column - 고정 */}
          <div className="flex flex-row justify-center items-center p-2 gap-2 w-[100px] h-8 bg-[#F5F5F5] border-t border-l border-b border-[#D9D9D9] flex-shrink-0">
            <span className="font-pretendard text-[12px] leading-[100%] text-[#757575]">
              제공일자
            </span>
          </div>

          {/* 지침내용 Column - 가변 (2/3 비율) */}
          <div className="flex flex-row justify-center items-center p-2 flex-[2] min-w-[200px] h-8 bg-[#F5F5F5] border-t border-l border-b border-[#D9D9D9]">
            <span className="font-pretendard text-[12px] leading-[100%] text-[#757575]">
              내용
            </span>
          </div>

          {/* 반영여부 Column - 가변 (1/3 비율) */}
          <div className="flex flex-row justify-center items-center py-2 px-3 flex-1 min-w-[120px] h-8 bg-[#F5F5F5] border-t border-l border-b border-[#D9D9D9]">
            <span className="font-pretendard text-[12px] leading-[100%] text-[#757575]">
              반영여부(문제점)
            </span>
          </div>

          {/* 삭제 Column - 고정 */}
          <div className="flex flex-row justify-center items-center p-2 gap-2 w-[70px] min-w-[60px] h-8 bg-[#F5F5F5] border border-[#D9D9D9] flex-shrink-0">
            <span className="font-pretendard text-[12px] leading-[100%] text-[#757575]">
              삭제
            </span>
          </div>
        </div>

        {/* Data Rows */}
        {rows.map((row, idx) => (
          <div key={row.id} className="flex flex-row items-center w-full h-8">
            {/* 번호 - 고정 */}
            <div className="flex flex-col justify-center items-center py-2 px-3 w-10 min-w-[40px] h-8 bg-white border-l border-b border-[#D9D9D9] flex-shrink-0">
              <span className="font-pretendard text-[12px] leading-[100%] text-[#757575] text-center">
                {idx + 1}
              </span>
            </div>

            {/* 제공일자 - 고정 */}
            <div className="flex flex-row items-center p-2 w-[100px] h-8 bg-white border-l border-b border-[#D9D9D9] flex-shrink-0">
              <span className="font-pretendard text-[12px] leading-[100%] text-[#B3B3B3]">
                {row.providedAt ? new Date(row.providedAt).toLocaleDateString('ko-KR') : '2024-01-01'}
              </span>
            </div>

            {/* 지침내용 - 가변 (2/3 비율) */}
            <div className="flex flex-row items-center p-2 flex-[2] min-w-[200px] h-8 bg-white border-l border-b border-[#D9D9D9]">
              <span className="font-pretendard text-[12px] leading-[100%] flex-1 truncate text-[#B3B3B3]">
                {row.content || '입력하기'}
              </span>
            </div>

            {/* 반영여부 - 가변 (1/3 비율) */}
            <div className="flex flex-row items-center py-2 px-3 flex-1 min-w-[120px] h-8 bg-white border-l border-b border-[#D9D9D9]">
              <span className={`font-pretendard text-[12px] leading-[100%] truncate ${
                (row.problem || '반영중') === '반영중' ? 'text-[#1E1E1E]' : 'text-[#B3B3B3]'
              }`}>
                {row.problem || '반영중'}
              </span>
            </div>

            {/* 삭제 버튼 - 고정 */}
            <div className="flex flex-col justify-center items-center py-2 px-3 w-[70px] min-w-[70px] h-8 bg-white border-l border-r border-b border-[#D9D9D9] flex-shrink-0">
              <div className="flex flex-row items-start w-[46px] h-[23px]">
                <button
                  className="flex flex-row justify-center items-center p-[6px] gap-[10px] w-[46px] h-[23px] bg-[#F3F3F3] border-none font-pretendard text-[11px] leading-[100%] text-[#1E1E1E] cursor-pointer"
                  onClick={() => handleDelete(row.id)}
                  disabled={loading}
                >
                  삭제
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="flex flex-col items-center py-4 w-full h-[68px]">
        <div className="flex flex-col items-start gap-4 w-full max-w-[520px] min-w-[320px] h-9">
          {/* Chat Input Box */}
          <div className="flex flex-row items-start w-full h-9" style={{filter: 'drop-shadow(0px 1px 4px rgba(12, 12, 13, 0.1)) drop-shadow(0px 1px 4px rgba(12, 12, 13, 0.05))'}}>
            <div className="flex flex-row items-center pl-3 pr-1 py-1 gap-3 w-full h-9 bg-white border border-[#757575]">
              {/* Input Field */}
              <input
                type="text"
                value={newGuideline}
                onChange={(e) => setNewGuideline(e.target.value)}
                placeholder="지침을 입력하고 추가해주세요."
                className={`flex-1 h-3 font-pretendard text-[12px] leading-[100%] border-none outline-none bg-transparent ${
                  newGuideline ? 'text-[#1E1E1E]' : 'text-[#B3B3B3] placeholder-[#B3B3B3]'
                }`}
              />
              
              {/* Divider Line */}
              <div className="w-5 h-0 border border-[#D9D9D9] rotate-90 flex-shrink-0" />
              
              {/* Add Button */}
              <button 
                type="button"
                className={`flex flex-row justify-end items-center p-[6px] gap-2 w-7 h-7 border-none flex-shrink-0 ${
                  (!newGuideline.trim() || loading) 
                    ? 'bg-[#E6E6E6] cursor-not-allowed' 
                    : 'bg-[#2C2C2C] cursor-pointer hover:bg-[#1A1A1A]'
                }`}
                onClick={handleAddGuideline}
                disabled={!newGuideline.trim() || loading}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path 
                    d="M8 3.33333V12.6667M3.33333 8H12.6667" 
                    stroke={(!newGuideline.trim() || loading) ? '#B3B3B3' : '#F3F3F3'} 
                    strokeWidth="1.2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastMessage 
        message={toastMessage}
        isVisible={showToast}
        onHide={() => setShowToast(false)}
      />
    </div>
  );
}