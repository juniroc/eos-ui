'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  partnerName?: string;
  accountName?: string;
  debitCredit?: boolean; // true: 차변, false: 대변
  note?: string;
}

interface Voucher {
  id: string;
  date: string;
  description: string;
  transactions: Transaction[];
}

interface ProgressData {
  processed: number;
  total: number;
}

export default function AIJournalPage() {
  const router = useRouter();

  const [step, setStep] = useState<'upload' | 'processing' | 'result'>('upload');
  const [files, setFiles] = useState<FileList | null>(null);
  const [progress, setProgress] = useState<ProgressData>({ processed: 0, total: 100 });
  const [vouchers, setVouchers] = useState<Voucher[]>([]);
  const [stats, setStats] = useState({
    transactionCount: 0,
    newPartnerCount: 0,
    debitTotal: 0,
    creditTotal: 0,
    accuracy: 95,
  });

  // 업로드 시뮬레이션
  const simulateProgress = (selectedFiles: FileList) => {
    setFiles(selectedFiles);
    setStep('processing');
    setProgress({ processed: 0, total: 100 });

    let current = 0;
    const timer = setInterval(() => {
      current += 2;
      if (current >= 100) {
        clearInterval(timer);
        setProgress({ processed: 100, total: 100 });

        setTimeout(() => {
          const demo: Voucher[] = [
            {
              id: 'demo-1',
              date: '2025-09-26',
              description: '임시 전표',
              transactions: [
                {
                  id: 't1',
                  date: '2025-09-26',
                  description: '매출',
                  amount: 100000,
                  accountName: '매출',
                  partnerName: '거래처A',
                  debitCredit: false,
                },
                {
                  id: 't2',
                  date: '2025-09-26',
                  description: '현금',
                  amount: 100000,
                  accountName: '현금',
                  partnerName: '거래처A',
                  debitCredit: true,
                },
              ],
            },
          ];

          let debitTotal = 0,
            creditTotal = 0;
          demo.forEach((v) =>
            v.transactions.forEach((t) =>
              t.debitCredit ? (debitTotal += t.amount) : (creditTotal += t.amount)
            )
          );

          setVouchers(demo);
          setStats({
            transactionCount: demo.length,
            newPartnerCount: 1,
            debitTotal,
            creditTotal,
            accuracy: 95,
          });
          setStep('result');
        }, 500);
      } else {
        setProgress({ processed: current, total: 100 });
      }
    }, 50);
  };

  // 파일 선택
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      simulateProgress(selectedFiles);
    }
  };

  // 드래그 앤 드롭
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles && droppedFiles.length > 0) {
      simulateProgress(droppedFiles);
    }
  };

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold mb-2 text-[#1E1E1E]">AI 분개</h2>
            <p className="text-[#767676]">파일을 업로드해서 자동으로 분개를 시작하세요.</p>
          </div>
        </div>

        {/* 업로드 단계 */}
        {step === 'upload' && (
          <div
            className="bg-white border-2 border-dashed border-[#D9D9D9] rounded-lg p-12 text-center mb-6"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <p className="text-lg text-[#1E1E1E] mb-2">
              파일을 선택하거나 드래그하여 업로드하세요.
            </p>
            <p className="text-sm text-[#767676] mb-6">
              (JPG, PNG, PDF, DOC, DOCX, XLSX, XLS 파일만 지원됩니다.)
            </p>
            <input
              id="file-upload"
              type="file"
              multiple
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.xlsx,.xls"
              onChange={handleFileSelect}
              className="hidden"
            />
            <label
              htmlFor="file-upload"
              className="inline-block px-6 py-3 bg-[#2C2C2C] text-white rounded-lg cursor-pointer hover:bg-[#1E1E1E] transition-colors"
            >
              파일 선택
            </label>
          </div>
        )}

        {/* 처리 중 */}
        {step === 'processing' && (
          <div className="bg-white border border-[#D9D9D9] rounded-lg p-12 text-center mb-6">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 border-4 border-[#E6E6E6] border-t-[#d9d9d9] rounded-full animate-spin"></div>
            </div>
            <div className="w-full bg-[#E6E6E6] rounded-full h-3 mb-4">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-200 ease-out"
                style={{
                  width: `${(progress.processed / progress.total) * 100}%`,
                }}
              />
            </div>
            <p className="text-sm text-[#767676]">
              진행률: {progress.processed}/{progress.total} (
              {Math.round((progress.processed / progress.total) * 100)}%)
            </p>
          </div>
        )}

        {/* 결과 */}
        {step === 'result' && (
          <>
            {/* 결과 헤더 */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-[#1E1E1E]">분개 결과</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 text-sm bg-[#F3F3F3] text-[#2C2C2C] hover:bg-gray-200"
                >
                  인쇄하기
                </button>
                <button
                  onClick={() => alert('저장했습니다')}
                  className="px-4 py-2 text-sm bg-[#2C2C2C] text-white hover:bg-[#1E1E1E]"
                >
                  저장하기
                </button>
              </div>
            </div>

            {/* Dashboard */}
            <div className="flex items-center p-0 w-full h-[63px] bg-white border border-[#D9D9D9] mb-6">
              {/* 거래건수 */}
              <div className="flex flex-col justify-center items-center px-6 py-3 gap-1.5 flex-1">
                <p className="text-xs text-[#B3B3B3] leading-none">거래건수</p>
                <p className="text-[15px] font-semibold text-[#1E1E1E] leading-[140%]">
                  {stats.transactionCount}건
                </p>
              </div>
              
              {/* 구분선 */}
              <div className="w-10 h-0 border border-[#D9D9D9] rotate-90"></div>
              
              {/* 신규거래처수 */}
              <div className="flex flex-col justify-center items-center px-6 py-3 gap-1.5 flex-1">
                <p className="text-xs text-[#B3B3B3] leading-none">신규거래처수</p>
                <p className="text-[15px] font-semibold text-[#1E1E1E] leading-[140%]">
                  {stats.newPartnerCount}개
                </p>
              </div>
              
              {/* 구분선 */}
              <div className="w-10 h-0 border border-[#D9D9D9] rotate-90"></div>
              
              {/* 차변합계 */}
              <div className="flex flex-col justify-center items-center px-6 py-3 gap-1.5 flex-1">
                <p className="text-xs text-[#B3B3B3] leading-none">차변합계</p>
                <p className="text-[15px] font-semibold text-[#1E1E1E] leading-[140%]">
                  {stats.debitTotal.toLocaleString()}원
                </p>
              </div>
              
              {/* 구분선 */}
              <div className="w-10 h-0 border border-[#D9D9D9] rotate-90"></div>
              
              {/* 대변합계 */}
              <div className="flex flex-col justify-center items-center px-6 py-3 gap-1.5 flex-1">
                <p className="text-xs text-[#B3B3B3] leading-none">대변합계</p>
                <p className="text-[15px] font-semibold text-[#1E1E1E] leading-[140%]">
                  {stats.creditTotal.toLocaleString()}원
                </p>
              </div>
              
              {/* 구분선 */}
              <div className="w-10 h-0 border border-[#D9D9D9] rotate-90"></div>
              
              {/* 분개 적중률 */}
              <div className="flex flex-col justify-center items-center px-6 py-3 gap-1.5 flex-1">
                <p className="text-xs text-[#B3B3B3] leading-none">분개 적중률</p>
                <p className="text-[15px] font-semibold text-[#1E1E1E] leading-[140%]">
                  {stats.accuracy}%
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#d9d9d9] overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F5F5F5]">
                    <th className="p-3 border border-[#d9d9d9] text-sm text-[#757575]">번호</th>
                    <th className="p-3 border border-[#d9d9d9] text-sm text-[#757575]">일자</th>
                    <th className="p-3 border border-[#d9d9d9] text-sm text-[#757575]" colSpan={3}>
                      차변
                    </th>
                    <th className="p-3 border border-[#d9d9d9] text-sm text-[#757575]" colSpan={3}>
                      대변
                    </th>
                    <th className="p-3 border border-[#d9d9d9] text-sm text-[#757575]">적요</th>
                  </tr>
                  <tr className="bg-[#F5F5F5]">
                    <th className="p-3 border border-[#d9d9d9] text-sm text-[#757575]"></th>
                    <th className="p-3 border border-[#d9d9d9] text-sm text-[#757575]"></th>
                    <th className="p-3 border border-[#d9d9d9] text-sm text-[#757575]">계정과목</th>
                    <th className="p-3 border border-[#d9d9d9] text-sm text-[#757575]">금액</th>
                    <th className="p-3 border border-[#d9d9d9] text-sm text-[#757575]">거래처</th>
                    <th className="p-3 border border-[#d9d9d9] text-sm text-[#757575]">계정과목</th>
                    <th className="p-3 border border-[#d9d9d9] text-sm text-[#757575]">금액</th>
                    <th className="p-3 border border-[#d9d9d9] text-sm text-[#757575]">거래처</th>
                    <th className="p-3 border border-[#d9d9d9] text-sm text-[#757575]"></th>
                  </tr>
                </thead>
                <tbody>
                  {vouchers.map((voucher, idx) => {
                    const debit = voucher.transactions.filter((t) => t.debitCredit);
                    const credit = voucher.transactions.filter((t) => !t.debitCredit);
                    const rows = Math.max(debit.length, credit.length);

                    return (
                      <React.Fragment key={voucher.id}>
                        {Array.from({ length: rows }).map((_, r) => (
                          <tr key={`${voucher.id}-${r}`}>
                            <td className="p-3 border border-[#d9d9d9] text-sm text-[#757575]">
                              {r === 0 ? idx + 1 : ''}
                            </td>
                            <td className="p-3 border border-[#d9d9d9] text-sm text-[#757575]">
                              {r === 0 ? voucher.date : ''}
                            </td>
                            <td className="p-3 border border-[#d9d9d9]">
                              <input
                                type="text"
                                placeholder="입력하기"
                                className="w-full bg-transparent text-sm text-[#757575] focus:outline-none"
                              />
                            </td>
                            <td className="p-3 border border-[#d9d9d9]">
                              <input
                                type="text"
                                placeholder="입력하기"
                                className="w-full bg-transparent text-sm text-[#757575] focus:outline-none"
                              />
                            </td>
                            <td className="p-3 border border-[#d9d9d9]">
                              <input
                                type="text"
                                placeholder="입력하기"
                                className="w-full bg-transparent text-sm text-[#757575] focus:outline-none"
                              />
                            </td>
                            <td className="p-3 border border-[#d9d9d9]">
                              <input
                                type="text"
                                placeholder="입력하기"
                                className="w-full bg-transparent text-sm text-[#757575] focus:outline-none"
                              />
                            </td>
                            <td className="p-3 border border-[#d9d9d9]">
                              <input
                                type="text"
                                placeholder="입력하기"
                                className="w-full bg-transparent text-sm text-[#757575] focus:outline-none"
                              />
                            </td>
                            <td className="p-3 border border-[#d9d9d9]">
                              <input
                                type="text"
                                placeholder="입력하기"
                                className="w-full bg-transparent text-sm text-[#757575] focus:outline-none"
                              />
                            </td>
                            <td className="p-3 border border-[#d9d9d9]">
                              <input
                                type="text"
                                placeholder="입력하기"
                                className="w-full bg-transparent text-sm text-[#757575] focus:outline-none"
                              />
                            </td>
                          </tr>
                        ))}
                        <tr>
                          <td className="p-3 border border-[#d9d9d9] bg-[#F5F5F5] font-medium text-sm text-[#757575]">소계</td>
                          <td className="p-3 border border-[#d9d9d9] bg-white">
                            <input
                              type="text"
                              placeholder="입력하기"
                              className="w-full bg-white text-sm text-[#757575] focus:outline-none"
                            />
                          </td>
                          <td className="p-3 border border-[#d9d9d9] bg-white">
                            <input
                              type="text"
                              placeholder="입력하기"
                              className="w-full bg-white text-sm text-[#757575] focus:outline-none"
                            />
                          </td>
                          <td className="p-3 border border-[#d9d9d9] bg-white">
                            <input
                              type="text"
                              placeholder="입력하기"
                              className="w-full bg-white text-sm text-[#757575] focus:outline-none"
                            />
                          </td>
                          <td className="p-3 border border-[#d9d9d9] bg-white">
                            <input
                              type="text"
                              placeholder="입력하기"
                              className="w-full bg-white text-sm text-[#757575] focus:outline-none"
                            />
                          </td>
                          <td className="p-3 border border-[#d9d9d9] bg-white">
                            <input
                              type="text"
                              placeholder="입력하기"
                              className="w-full bg-white text-sm text-[#757575] focus:outline-none"
                            />
                          </td>
                          <td className="p-3 border border-[#d9d9d9] bg-white">
                            <input
                              type="text"
                              placeholder="입력하기"
                              className="w-full bg-white text-sm text-[#757575] focus:outline-none"
                            />
                          </td>
                          <td className="p-3 border border-[#d9d9d9] bg-white">
                            <input
                              type="text"
                              placeholder="입력하기"
                              className="w-full bg-white text-sm text-[#757575] focus:outline-none"
                            />
                          </td>
                          <td className="p-3 border border-[#d9d9d9] bg-white">
                            <input
                              type="text"
                              placeholder="입력하기"
                              className="w-full bg-white text-sm text-[#757575] focus:outline-none"
                            />
                          </td>
                        </tr>
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
