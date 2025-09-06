'use client';

import { useState } from 'react';
import Button from '@/components/Button';

interface StatementItem {
  id: number;
  account: string;
  amount: number;
  type: 'asset' | 'liability' | 'equity' | 'revenue' | 'expense';
}

export default function StatementsPage() {
  const [statements, setStatements] = useState<StatementItem[]>([
    // 자산
    { id: 1, account: '현금', amount: 450000, type: 'asset' },
    { id: 2, account: '매출채권', amount: 1200000, type: 'asset' },
    { id: 3, account: '재고자산', amount: 800000, type: 'asset' },
    { id: 4, account: '건물', amount: 5000000, type: 'asset' },
    
    // 부채
    { id: 5, account: '매입채무', amount: 600000, type: 'liability' },
    { id: 6, account: '단기차입금', amount: 1000000, type: 'liability' },
    
    // 자본
    { id: 7, account: '자본금', amount: 3000000, type: 'equity' },
    { id: 8, account: '이익잉여금', amount: 2650000, type: 'equity' },
    
    // 수익
    { id: 9, account: '매출', amount: 5000000, type: 'revenue' },
    
    // 비용
    { id: 10, account: '매출원가', amount: 2000000, type: 'expense' },
    { id: 11, account: '판매비', amount: 500000, type: 'expense' },
    { id: 12, account: '관리비', amount: 300000, type: 'expense' }
  ]);

  const [selectedType, setSelectedType] = useState<string>('all');

  const types = [
    { value: 'all', label: '전체' },
    { value: 'asset', label: '자산' },
    { value: 'liability', label: '부채' },
    { value: 'equity', label: '자본' },
    { value: 'revenue', label: '수익' },
    { value: 'expense', label: '비용' }
  ];

  const filteredStatements = selectedType === 'all' 
    ? statements 
    : statements.filter(item => item.type === selectedType);

  const getTotalByType = (type: string) => {
    return statements
      .filter(item => item.type === type)
      .reduce((sum, item) => sum + item.amount, 0);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'asset':
        return 'text-blue-600 bg-blue-100';
      case 'liability':
        return 'text-red-600 bg-red-100';
      case 'equity':
        return 'text-green-600 bg-green-100';
      case 'revenue':
        return 'text-purple-600 bg-purple-100';
      case 'expense':
        return 'text-orange-600 bg-orange-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'asset':
        return '자산';
      case 'liability':
        return '부채';
      case 'equity':
        return '자본';
      case 'revenue':
        return '수익';
      case 'expense':
        return '비용';
      default:
        return '기타';
    }
  };

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">명세서</h1>
          <p className="text-gray-600">계정별 명세서를 조회하고 관리합니다.</p>
        </div>

      </div>
    </div>
  );
}
