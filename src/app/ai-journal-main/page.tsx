'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function AIJournalMainPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleAIGenerate = async () => {
    setIsLoading(true);
    // AI 분개 생성 로직
    setTimeout(() => {
      setIsLoading(false);
      alert('AI 분개가 생성되었습니다!');
    }, 2000);
  };

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">AI 분개</h1>
          <p className="text-gray-600">AI를 활용하여 자동으로 분개를 생성합니다.</p>
        </div>

        {/* AI 분개 생성 섹션 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">분개 생성</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                분개 유형
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">분개 유형을 선택하세요</option>
                <option value="revenue">매출</option>
                <option value="expense">비용</option>
                <option value="asset">자산</option>
                <option value="liability">부채</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                설명
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={3}
                placeholder="분개에 대한 설명을 입력하세요"
              />
            </div>

            <div className="flex justify-end">
              <Button
                onClick={handleAIGenerate}
                disabled={isLoading}
                className="px-6 py-2"
              >
                {isLoading ? 'AI 분개 생성 중...' : 'AI 분개 생성'}
              </Button>
            </div>
          </div>
        </div>

        {/* 생성된 분개 목록 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4">생성된 분개</h2>
          <div className="text-center py-8 text-gray-500">
            아직 생성된 분개가 없습니다.
          </div>
        </div>
      </div>
    </div>
  );
}
