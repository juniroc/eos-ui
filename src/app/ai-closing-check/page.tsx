'use client';

import { useState } from 'react';
import Button from '@/components/Button';

interface CheckItem {
  id: number;
  category: string;
  description: string;
  status: 'pass' | 'fail' | 'warning';
  message: string;
}

export default function AIClosingCheckPage() {
  const [isChecking, setIsChecking] = useState(false);
  const [checkResults, setCheckResults] = useState<CheckItem[]>([]);

  const handleAICheck = async () => {
    setIsChecking(true);
    
    // AI 결산점검 시뮬레이션
    setTimeout(() => {
      const mockResults: CheckItem[] = [
        {
          id: 1,
          category: '계정 잔액',
          description: '차대변 합계 일치 여부',
          status: 'pass',
          message: '차대변 합계가 일치합니다.'
        },
        {
          id: 2,
          category: '현금 및 현금성자산',
          description: '현금출납장과 계정원장 일치 여부',
          status: 'warning',
          message: '소액 차이가 발견되었습니다. (1,000원)'
        },
        {
          id: 3,
          category: '매출채권',
          description: '매출채권 연령 분석',
          status: 'pass',
          message: '정상적인 연령 구조를 보입니다.'
        },
        {
          id: 4,
          category: '재고자산',
          description: '재고자산 실사 결과',
          status: 'fail',
          message: '재고자산 실사 결과와 장부 잔액이 불일치합니다.'
        },
        {
          id: 5,
          category: '고정자산',
          description: '감가상각 누계 확인',
          status: 'pass',
          message: '감가상각이 정확히 계산되었습니다.'
        }
      ];
      
      setCheckResults(mockResults);
      setIsChecking(false);
    }, 3000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pass':
        return 'text-green-600 bg-green-100';
      case 'warning':
        return 'text-yellow-600 bg-yellow-100';
      case 'fail':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pass':
        return '통과';
      case 'warning':
        return '주의';
      case 'fail':
        return '실패';
      default:
        return '미확인';
    }
  };

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">AI 결산점검</h1>
          <p className="text-gray-600">AI를 활용하여 결산 과정의 정확성을 자동으로 점검합니다.</p>
        </div>

        {/* AI 점검 실행 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">결산점검 실행</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 mb-2">
                AI가 다음 항목들을 자동으로 점검합니다:
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• 계정 잔액의 차대변 합계 일치 여부</li>
                <li>• 현금 및 현금성자산의 정확성</li>
                <li>• 매출채권의 연령 분석</li>
                <li>• 재고자산의 실사 결과</li>
                <li>• 고정자산의 감가상각</li>
              </ul>
            </div>
            <Button
              onClick={handleAICheck}
              disabled={isChecking}
              className="px-6 py-2"
            >
              {isChecking ? 'AI 점검 중...' : 'AI 결산점검 시작'}
            </Button>
          </div>
        </div>

        {/* 점검 결과 */}
        {checkResults.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">점검 결과</h2>
            <div className="space-y-4">
              {checkResults.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-medium text-gray-900">{item.category}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                          {getStatusText(item.status)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                      <p className="text-sm text-gray-700">{item.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 전체 요약 */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">점검 요약</h3>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {checkResults.filter(item => item.status === 'pass').length}
                  </div>
                  <div className="text-gray-600">통과</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">
                    {checkResults.filter(item => item.status === 'warning').length}
                  </div>
                  <div className="text-gray-600">주의</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">
                    {checkResults.filter(item => item.status === 'fail').length}
                  </div>
                  <div className="text-gray-600">실패</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
