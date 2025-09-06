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

      </div>
    </div>
  );
}
