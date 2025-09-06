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

      </div>
    </div>
  );
}
