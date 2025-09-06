'use client';

import { useState } from 'react';
import Button from '@/components/Button';

interface Document {
  id: number;
  name: string;
  type: string;
  date: string;
  amount: number;
  status: 'pending' | 'approved' | 'rejected';
}

export default function ProofStoragePage() {
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: 1,
      name: '매출전표_20241201.pdf',
      type: '매출전표',
      date: '2024-12-01',
      amount: 1500000,
      status: 'approved'
    },
    {
      id: 2,
      name: '지출증빙_20241202.pdf',
      type: '지출증빙',
      date: '2024-12-02',
      amount: 500000,
      status: 'pending'
    }
  ]);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const uploadDocument = () => {
    if (selectedFile) {
      const newDoc: Document = {
        id: Date.now(),
        name: selectedFile.name,
        type: '업로드',
        date: new Date().toISOString().split('T')[0],
        amount: 0,
        status: 'pending'
      };
      setDocuments([...documents, newDoc]);
      setSelectedFile(null);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'text-green-600 bg-green-100';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'rejected':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'approved':
        return '승인됨';
      case 'pending':
        return '대기중';
      case 'rejected':
        return '거부됨';
      default:
        return '미확인';
    }
  };

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">증빙보관소</h1>
          <p className="text-gray-600">회계 증빙서류를 업로드하고 관리합니다.</p>
        </div>

      </div>
    </div>
  );
}
