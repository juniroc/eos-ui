'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export default function AIJournalMainPage() {
  const router = useRouter();
  const { isAuthenticated, loading: authLoading } = useAuth();

  // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, router]);

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
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2 text-[#1E1E1E]">AI 분개</h2>
          <p className="text-[#767676]">
            증빙을 업로드하면 AI가 자동으로 분개를 생성합니다.
          </p>
        </div>

        {/* 메인 컨텐츠 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 증빙 업로드 카드 */}
          <div className="bg-white border border-[#D9D9D9] rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#F5F5F5] rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#767676]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1E1E1E]">증빙 업로드</h3>
                <p className="text-sm text-[#767676]">증빙 파일을 업로드하여 AI 분개를 시작하세요</p>
              </div>
            </div>
            <button
              onClick={() => router.push('/ai-journal')}
              className="w-full bg-[#2C2C2C] text-white py-3 px-4 rounded-lg hover:bg-[#1E1E1E] transition-colors"
            >
              증빙 업로드하기
            </button>
          </div>

          {/* 수동 분개 카드 */}
          <div className="bg-white border border-[#D9D9D9] rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#F5F5F5] rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#767676]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1E1E1E]">수동 분개</h3>
                <p className="text-sm text-[#767676]">직접 분개를 입력하여 전표를 생성하세요</p>
              </div>
            </div>
            <button
              onClick={() => router.push('/manual-journal')}
              className="w-full bg-[#2C2C2C] text-white py-3 px-4 rounded-lg hover:bg-[#1E1E1E] transition-colors"
            >
              수동 분개하기
            </button>
          </div>

          {/* 지침 주기 카드 */}
          <div className="bg-white border border-[#D9D9D9] rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#F5F5F5] rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#767676]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1E1E1E]">지침 주기</h3>
                <p className="text-sm text-[#767676]">AI 분개를 위한 지침을 관리하세요</p>
              </div>
            </div>
            <button
              onClick={() => router.push('/guideline-period')}
              className="w-full bg-[#2C2C2C] text-white py-3 px-4 rounded-lg hover:bg-[#1E1E1E] transition-colors"
            >
              지침 관리하기
            </button>
          </div>

          {/* AI 결산점검 카드 */}
          <div className="bg-white border border-[#D9D9D9] rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#F5F5F5] rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#767676]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1E1E1E]">AI 결산점검</h3>
                <p className="text-sm text-[#767676]">AI가 자동으로 결산점검을 수행합니다</p>
              </div>
            </div>
            <button
              onClick={() => router.push('/ai-closing-check')}
              className="w-full bg-[#2C2C2C] text-white py-3 px-4 rounded-lg hover:bg-[#1E1E1E] transition-colors"
            >
              결산점검하기
            </button>
          </div>
        </div>

        {/* 최근 활동 */}
        <div className="mt-8 bg-white border border-[#D9D9D9] rounded-lg p-6">
          <h3 className="text-lg font-semibold text-[#1E1E1E] mb-4">최근 활동</h3>
          <div className="text-center py-8 text-[#767676]">
            <svg className="w-12 h-12 mx-auto mb-4 text-[#D9D9D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <p>아직 활동 내역이 없습니다.</p>
            <p className="text-sm mt-2">증빙을 업로드하거나 수동 분개를 시작해보세요.</p>
          </div>
        </div>
      </div>
    </div>
  );
}