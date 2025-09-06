'use client';

import { useState } from 'react';
import Button from '@/components/Button';

interface CashEntry {
  id: number;
  date: string;
  description: string;
  type: 'income' | 'expense';
  amount: number;
  balance: number;
}

export default function CashbookPage() {
  const [entries, setEntries] = useState<CashEntry[]>([
    {
      id: 1,
      date: '2024-12-01',
      description: '현금 매출',
      type: 'income',
      amount: 500000,
      balance: 500000
    },
    {
      id: 2,
      date: '2024-12-02',
      description: '사무용품 구매',
      type: 'expense',
      amount: 50000,
      balance: 450000
    }
  ]);

  const [newEntry, setNewEntry] = useState<Partial<CashEntry>>({
    date: new Date().toISOString().split('T')[0],
    description: '',
    type: 'income',
    amount: 0
  });

  const addEntry = () => {
    if (newEntry.description && newEntry.amount) {
      const lastBalance = entries.length > 0 ? entries[entries.length - 1].balance : 0;
      const balance = newEntry.type === 'income' 
        ? lastBalance + newEntry.amount 
        : lastBalance - newEntry.amount;
      
      const entry: CashEntry = {
        id: Date.now(),
        date: newEntry.date || new Date().toISOString().split('T')[0],
        description: newEntry.description,
        type: newEntry.type || 'income',
        amount: newEntry.amount,
        balance
      };
      
      setEntries([...entries, entry]);
      setNewEntry({
        date: new Date().toISOString().split('T')[0],
        description: '',
        type: 'income',
        amount: 0
      });
    }
  };

  const removeEntry = (id: number) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  const currentBalance = entries.length > 0 ? entries[entries.length - 1].balance : 0;

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">현금출납장</h1>
          <p className="text-gray-600">현금의 수입과 지출을 기록하고 관리합니다.</p>
        </div>

        {/* 잔액 표시 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">현재 현금 잔액</h2>
            <div className="text-3xl font-bold text-blue-600">
              {currentBalance.toLocaleString()}원
            </div>
          </div>
        </div>

        {/* 거래 입력 폼 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">거래 입력</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                날짜
              </label>
              <input
                type="date"
                value={newEntry.date}
                onChange={(e) => setNewEntry({...newEntry, date: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                거래 유형
              </label>
              <select
                value={newEntry.type}
                onChange={(e) => setNewEntry({...newEntry, type: e.target.value as 'income' | 'expense'})}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="income">수입</option>
                <option value="expense">지출</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                적요
              </label>
              <input
                type="text"
                value={newEntry.description}
                onChange={(e) => setNewEntry({...newEntry, description: e.target.value})}
                placeholder="적요를 입력하세요"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                금액
              </label>
              <input
                type="number"
                value={newEntry.amount}
                onChange={(e) => setNewEntry({...newEntry, amount: Number(e.target.value)})}
                placeholder="금액"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <Button onClick={addEntry} className="px-6 py-2">
              거래 추가
            </Button>
          </div>
        </div>

        {/* 거래 내역 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4">거래 내역</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">날짜</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">적요</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">유형</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">금액</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">잔액</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작업</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {entries.map((entry) => (
                  <tr key={entry.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{entry.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{entry.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        entry.type === 'income' 
                          ? 'text-green-600 bg-green-100' 
                          : 'text-red-600 bg-red-100'
                      }`}>
                        {entry.type === 'income' ? '수입' : '지출'}
                      </span>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                      entry.type === 'income' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {entry.type === 'income' ? '+' : '-'}{entry.amount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {entry.balance.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <button
                        onClick={() => removeEntry(entry.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        삭제
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
