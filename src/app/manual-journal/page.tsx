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
}

export default function ManualJournalPage() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [newEntry, setNewEntry] = useState<Partial<JournalEntry>>({
    date: new Date().toISOString().split('T')[0],
    description: '',
    debitAccount: '',
    creditAccount: '',
    amount: 0,
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
      });
    }
  };

  const removeEntry = (id: number) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">수동 분개</h1>
          <p className="text-gray-600">수동으로 분개를 입력하고 관리합니다.</p>
        </div>

        {/* 분개 입력 폼 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">분개 입력</h2>
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
              분개 추가
            </Button>
          </div>
        </div>

        {/* 분개 목록 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4">분개 목록</h2>
          {entries.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              등록된 분개가 없습니다.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">날짜</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">적요</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">차변</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">대변</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">금액</th>
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
          )}
        </div>
      </div>
    </div>
  );
}
