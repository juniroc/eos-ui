'use client';

import { useState } from 'react';
import Button from '@/components/Button';

interface FinancialData {
  assets: {
    current: { [key: string]: number };
    fixed: { [key: string]: number };
  };
  liabilities: {
    current: { [key: string]: number };
    longTerm: { [key: string]: number };
  };
  equity: { [key: string]: number };
  revenue: { [key: string]: number };
  expenses: { [key: string]: number };
}

export default function FinancialStatementsPage() {
  const [financialData] = useState<FinancialData>({
    assets: {
      current: {
        '현금': 450000,
        '매출채권': 1200000,
        '재고자산': 800000,
        '기타유동자산': 200000
      },
      fixed: {
        '건물': 5000000,
        '기계장치': 2000000,
        '기타고정자산': 500000
      }
    },
    liabilities: {
      current: {
        '매입채무': 600000,
        '단기차입금': 1000000,
        '기타유동부채': 300000
      },
      longTerm: {
        '장기차입금': 2000000,
        '기타비유동부채': 500000
      }
    },
    equity: {
      '자본금': 3000000,
      '이익잉여금': 2650000
    },
    revenue: {
      '매출': 5000000
    },
    expenses: {
      '매출원가': 2000000,
      '판매비': 500000,
      '관리비': 300000
    }
  });

  const [selectedStatement, setSelectedStatement] = useState<'balance' | 'income' | 'cashflow'>('balance');

  const getTotal = (items: { [key: string]: number }) => {
    return Object.values(items).reduce((sum, value) => sum + value, 0);
  };

  const getTotalAssets = () => {
    return getTotal(financialData.assets.current) + getTotal(financialData.assets.fixed);
  };

  const getTotalLiabilities = () => {
    return getTotal(financialData.liabilities.current) + getTotal(financialData.liabilities.longTerm);
  };

  const getTotalEquity = () => {
    return getTotal(financialData.equity);
  };

  const getNetIncome = () => {
    return getTotal(financialData.revenue) - getTotal(financialData.expenses);
  };

  const renderBalanceSheet = () => (
    <div className="space-y-6">
      {/* 자산 */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">자산</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-md font-medium text-gray-700 mb-2">유동자산</h4>
            <div className="space-y-2">
              {Object.entries(financialData.assets.current).map(([account, amount]) => (
                <div key={account} className="flex justify-between items-center py-1">
                  <span className="text-sm text-gray-600 pl-4">{account}</span>
                  <span className="text-sm font-medium text-gray-900">{amount.toLocaleString()}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-2 border-t border-gray-200 font-medium">
                <span className="text-sm text-gray-700">유동자산 합계</span>
                <span className="text-sm text-gray-900">{getTotal(financialData.assets.current).toLocaleString()}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-md font-medium text-gray-700 mb-2">비유동자산</h4>
            <div className="space-y-2">
              {Object.entries(financialData.assets.fixed).map(([account, amount]) => (
                <div key={account} className="flex justify-between items-center py-1">
                  <span className="text-sm text-gray-600 pl-4">{account}</span>
                  <span className="text-sm font-medium text-gray-900">{amount.toLocaleString()}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-2 border-t border-gray-200 font-medium">
                <span className="text-sm text-gray-700">비유동자산 합계</span>
                <span className="text-sm text-gray-900">{getTotal(financialData.assets.fixed).toLocaleString()}</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center py-3 border-t-2 border-gray-300 font-bold text-lg">
            <span className="text-gray-900">자산 총계</span>
            <span className="text-gray-900">{getTotalAssets().toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* 부채 및 자본 */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">부채 및 자본</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-md font-medium text-gray-700 mb-2">유동부채</h4>
            <div className="space-y-2">
              {Object.entries(financialData.liabilities.current).map(([account, amount]) => (
                <div key={account} className="flex justify-between items-center py-1">
                  <span className="text-sm text-gray-600 pl-4">{account}</span>
                  <span className="text-sm font-medium text-gray-900">{amount.toLocaleString()}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-2 border-t border-gray-200 font-medium">
                <span className="text-sm text-gray-700">유동부채 합계</span>
                <span className="text-sm text-gray-900">{getTotal(financialData.liabilities.current).toLocaleString()}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-md font-medium text-gray-700 mb-2">비유동부채</h4>
            <div className="space-y-2">
              {Object.entries(financialData.liabilities.longTerm).map(([account, amount]) => (
                <div key={account} className="flex justify-between items-center py-1">
                  <span className="text-sm text-gray-600 pl-4">{account}</span>
                  <span className="text-sm font-medium text-gray-900">{amount.toLocaleString()}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-2 border-t border-gray-200 font-medium">
                <span className="text-sm text-gray-700">비유동부채 합계</span>
                <span className="text-sm text-gray-900">{getTotal(financialData.liabilities.longTerm).toLocaleString()}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-md font-medium text-gray-700 mb-2">자본</h4>
            <div className="space-y-2">
              {Object.entries(financialData.equity).map(([account, amount]) => (
                <div key={account} className="flex justify-between items-center py-1">
                  <span className="text-sm text-gray-600 pl-4">{account}</span>
                  <span className="text-sm font-medium text-gray-900">{amount.toLocaleString()}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-2 border-t border-gray-200 font-medium">
                <span className="text-sm text-gray-700">자본 합계</span>
                <span className="text-sm text-gray-900">{getTotalEquity().toLocaleString()}</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center py-3 border-t-2 border-gray-300 font-bold text-lg">
            <span className="text-gray-900">부채 및 자본 총계</span>
            <span className="text-gray-900">{(getTotalLiabilities() + getTotalEquity()).toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderIncomeStatement = () => (
    <div className="space-y-6">
      {/* 수익 */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">수익</h3>
        <div className="space-y-2">
          {Object.entries(financialData.revenue).map(([account, amount]) => (
            <div key={account} className="flex justify-between items-center py-1">
              <span className="text-sm text-gray-600 pl-4">{account}</span>
              <span className="text-sm font-medium text-gray-900">{amount.toLocaleString()}</span>
            </div>
          ))}
          <div className="flex justify-between items-center py-2 border-t border-gray-200 font-medium">
            <span className="text-sm text-gray-700">총 수익</span>
            <span className="text-sm text-gray-900">{getTotal(financialData.revenue).toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* 비용 */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">비용</h3>
        <div className="space-y-2">
          {Object.entries(financialData.expenses).map(([account, amount]) => (
            <div key={account} className="flex justify-between items-center py-1">
              <span className="text-sm text-gray-600 pl-4">{account}</span>
              <span className="text-sm font-medium text-gray-900">{amount.toLocaleString()}</span>
            </div>
          ))}
          <div className="flex justify-between items-center py-2 border-t border-gray-200 font-medium">
            <span className="text-sm text-gray-700">총 비용</span>
            <span className="text-sm text-gray-900">{getTotal(financialData.expenses).toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* 순이익 */}
      <div className="flex justify-between items-center py-3 border-t-2 border-gray-300 font-bold text-lg">
        <span className="text-gray-900">순이익</span>
        <span className={`text-gray-900 ${getNetIncome() >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {getNetIncome().toLocaleString()}
        </span>
      </div>
    </div>
  );

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">재무제표</h1>
          <p className="text-gray-600">재무상태표, 손익계산서를 조회합니다.</p>
        </div>

      </div>
    </div>
  );
}
