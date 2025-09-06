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

        {/* 파일 업로드 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">증빙서류 업로드</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                파일 선택
              </label>
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileUpload}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            {selectedFile && (
              <div className="p-3 bg-gray-50 rounded-md">
                <p className="text-sm text-gray-600">
                  선택된 파일: <span className="font-medium">{selectedFile.name}</span>
                </p>
                <p className="text-xs text-gray-500">
                  크기: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            )}

            <div className="flex justify-end">
              <Button
                onClick={uploadDocument}
                disabled={!selectedFile}
                className="px-6 py-2"
              >
                업로드
              </Button>
            </div>
          </div>
        </div>

        {/* 문서 목록 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4">증빙서류 목록</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">파일명</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">유형</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">날짜</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">금액</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작업</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {documents.map((doc) => (
                  <tr key={doc.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{doc.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{doc.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{doc.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {doc.amount > 0 ? doc.amount.toLocaleString() : '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(doc.status)}`}>
                        {getStatusText(doc.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">보기</button>
                        <button className="text-red-600 hover:text-red-900">삭제</button>
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
