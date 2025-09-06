'use client';

import { useState } from 'react';
import Button from '@/components/Button';

interface JournalEntry {
  id: number;
  date: string;
  description: string;
  debitAccount: string;
  creditAccount: string;
  amount: number;
  status: 'draft' | 'posted' | 'cancelled';
}

export default function JournalPage() {
  const [entries, setEntries] = useState<JournalEntry[]>([
    {
      id: 1,
      date: '2024-12-01',
      description: '매출 발생',
      debitAccount: '매출채권',
      creditAccount: '매출',
      amount: 1500000,
      status: 'posted'
    },
    {
      id: 2,
      date: '2024-12-02',
      description: '임대료 지급',
      debitAccount: '임대료',
      creditAccount: '현금',
      amount: 500000,
      status: 'draft'
    }
  ]);

  const [newEntry, setNewEntry] = useState<Partial<JournalEntry>>({
    date: new Date().toISOString().split('T')[0],
    description: '',
    debitAccount: '',
    creditAccount: '',
    amount: 0,
    status: 'draft'
  });

  const addEntry = () => {
    if (newEntry.description && newEntry.debitAccount && newEntry.creditAccount && newEntry.amount) {
      setEntries([...entries, { ...newEntry, id: Date.now() } as JournalEntry]);
      setNewEntry({
        date: new Date().toISOString().split('T')[0],
        description: '',
        debitAccount: '',
        creditAccount: '',
        amount: 0,
        status: 'draft'
      });
    }
  };

  const updateEntryStatus = (id: number, status: 'draft' | 'posted' | 'cancelled') => {
    setEntries(entries.map(entry => 
      entry.id === id ? { ...entry, status } : entry
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'posted':
        return 'text-green-600 bg-green-100';
      case 'draft':
        return 'text-yellow-600 bg-yellow-100';
      case 'cancelled':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'posted':
        return '전기완료';
      case 'draft':
        return '임시저장';
      case 'cancelled':
        return '취소됨';
      default:
        return '미확인';
    }
  };

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">전표/수정</h1>
          <p className="text-gray-600">전표를 입력하고 수정합니다.</p>
        </div>

        {/* 전표 입력 폼 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">전표 입력</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
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
            
            <div className="md:col-span-2">
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
                차변 계정
              </label>
              <input
                type="text"
                value={newEntry.debitAccount}
                onChange={(e) => setNewEntry({...newEntry, debitAccount: e.target.value})}
                placeholder="차변 계정"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                대변 계정
              </label>
              <input
                type="text"
                value={newEntry.creditAccount}
                onChange={(e) => setNewEntry({...newEntry, creditAccount: e.target.value})}
                placeholder="대변 계정"
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
              전표 추가
            </Button>
          </div>
        </div>

        {/* 전표 목록 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4">전표 목록</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">날짜</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">적요</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">차변</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">대변</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">금액</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작업</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {entries.map((entry) => (
                  <tr key={entry.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{entry.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{entry.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{entry.debitAccount}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{entry.creditAccount}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{entry.amount.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(entry.status)}`}>
                        {getStatusText(entry.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="flex space-x-2">
                        {entry.status === 'draft' && (
                          <button 
                            onClick={() => updateEntryStatus(entry.id, 'posted')}
                            className="text-green-600 hover:text-green-900"
                          >
                            전기
                          </button>
                        )}
                        <button className="text-blue-600 hover:text-blue-900">수정</button>
                        <button 
                          onClick={() => updateEntryStatus(entry.id, 'cancelled')}
                          className="text-red-600 hover:text-red-900"
                        >
                          취소
                        </button>
                      </div>
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
