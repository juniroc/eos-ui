'use client';

import { useState } from 'react';
import Button from '@/components/Button';

interface LedgerEntry {
  id: number;
  account: string;
  date: string;
  description: string;
  debit: number;
  credit: number;
  balance: number;
}

export default function LedgerPage() {
  const [entries, setEntries] = useState<LedgerEntry[]>([
    {
      id: 1,
      account: '현금',
      date: '2024-12-01',
      description: '현금 매출',
      debit: 500000,
      credit: 0,
      balance: 500000
    },
    {
      id: 2,
      account: '현금',
      date: '2024-12-02',
      description: '사무용품 구매',
      debit: 0,
      credit: 50000,
      balance: 450000
    },
    {
      id: 3,
      account: '매출',
      date: '2024-12-01',
      description: '현금 매출',
      debit: 0,
      credit: 500000,
      balance: 500000
    }
  ]);

  const [selectedAccount, setSelectedAccount] = useState<string>('');

  const accounts = Array.from(new Set(entries.map(entry => entry.account)));

  const filteredEntries = selectedAccount 
    ? entries.filter(entry => entry.account === selectedAccount)
    : entries;

  const getAccountBalance = (account: string) => {
    const accountEntries = entries.filter(entry => entry.account === account);
    return accountEntries.length > 0 ? accountEntries[accountEntries.length - 1].balance : 0;
  };

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">원장</h1>
          <p className="text-gray-600">계정별 원장을 조회하고 관리합니다.</p>
        </div>

        {/* 계정 선택 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">계정 선택</h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedAccount('')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                selectedAccount === '' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              전체
            </button>
            {accounts.map(account => (
              <button
                key={account}
                onClick={() => setSelectedAccount(account)}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  selectedAccount === account 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {account} ({getAccountBalance(account).toLocaleString()})
              </button>
            ))}
          </div>
        </div>

        {/* 계정별 잔액 요약 */}
        {selectedAccount && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">{selectedAccount} 계정 잔액</h2>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">
                {getAccountBalance(selectedAccount).toLocaleString()}원
              </div>
            </div>
          </div>
        )}

        {/* 원장 목록 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4">
            {selectedAccount ? `${selectedAccount} 원장` : '전체 원장'}
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">계정</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">날짜</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">적요</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">차변</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">대변</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">잔액</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredEntries.map((entry) => (
                  <tr key={entry.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{entry.account}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{entry.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{entry.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {entry.debit > 0 ? entry.debit.toLocaleString() : '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {entry.credit > 0 ? entry.credit.toLocaleString() : '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {entry.balance.toLocaleString()}
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
