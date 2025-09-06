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

      </div>
    </div>
  );
}
