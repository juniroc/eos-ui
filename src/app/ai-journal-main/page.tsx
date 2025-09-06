'use client';

import { useState } from 'react';

interface JournalRow {
  id: number;
  date: string;
  debitAccount: string;
  debitAmount: string;
  debitPartner: string;
  creditAccount: string;
  creditAmount: string;
  creditPartner: string;
  description: string;
}

const accessToken = 'YOUR_ACCESS_TOKEN'; // ✅ 교체 필요

export default function AIJournalMainPage() {
  const [rows, setRows] = useState<JournalRow[]>([
    {
      id: 1,
      date: '',
      debitAccount: '',
      debitAmount: '',
      debitPartner: '',
      creditAccount: '',
      creditAmount: '',
      creditPartner: '',
      description: '',
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState({
    transactionCount: 0,
    newPartnerCount: 0,
    totalDebit: 0,
    totalCredit: 0,
    accuracy: 0
  });

  const hasData = rows.some(
    (r) =>
      r.date.trim() ||
      r.debitAccount.trim() ||
      r.debitAmount.trim() ||
      r.debitPartner.trim() ||
      r.creditAccount.trim() ||
      r.creditAmount.trim() ||
      r.creditPartner.trim() ||
      r.description.trim()
  );

  /** 파일 업로드 */
  const handleFileUpload = async (file: File) => {
    const formData = new FormData();
    formData.append('files[]', file);

    try {
      setLoading(true);
      const res = await fetch('/api/ai/extract-raw-transactions/start', {
        method: 'POST',
        headers: { Authorization: `Bearer ${accessToken}` },
        body: formData,
      });
      if (!res.ok) throw new Error('업로드 실패');
      const data = await res.json();
      console.log('업로드 결과', data);
      
      // API 응답에 따라 데이터 업데이트
      if (data.success && data.data) {
        // 분개 데이터 업데이트
        if (data.data.journals && Array.isArray(data.data.journals)) {
          const newRows = data.data.journals.map((journal: any, index: number) => ({
            id: Date.now() + index,
            date: journal.date || '',
            debitAccount: journal.debitAccount || '',
            debitAmount: journal.debitAmount || '',
            debitPartner: journal.debitPartner || '',
            creditAccount: journal.creditAccount || '',
            creditAmount: journal.creditAmount || '',
            creditPartner: journal.creditPartner || '',
            description: journal.description || '',
          }));
          setRows(newRows);
        }
        
        // 요약 정보 업데이트
        if (data.data.summary) {
          setSummary({
            transactionCount: data.data.summary.transactionCount || 0,
            newPartnerCount: data.data.summary.newPartnerCount || 0,
            totalDebit: data.data.summary.totalDebit || 0,
            totalCredit: data.data.summary.totalCredit || 0,
            accuracy: data.data.summary.accuracy || 0
          });
        }
      }
    } catch (err) {
      console.error(err);
      alert('파일 업로드 실패');
    } finally {
      setLoading(false);
    }
  };

  /** 저장 */
  const handleSave = async () => {
    alert('저장 API는 추후 구현 예정입니다.');
  };

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold mb-2 text-[#1E1E1E]">AI 분개</h2>
            <p className="text-[#767676]">
              파일을 업로드해서 자동으로 분개를 시작하세요.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              className="flex items-center justify-center min-w-[79px] h-[28px] px-3 text-[12px] leading-[12px] text-[#1E1E1E] bg-[#F3F3F3] hover:bg-[#E0E0E0] rounded"
              onClick={() => document.getElementById('journalFile')?.click()}
              disabled={loading}
            >
              파일 업로드
            </button>
            <button
              className={`flex items-center justify-center min-w-[79px] h-[28px] px-3 text-[12px] leading-[12px] text-[#1E1E1E] rounded ${
                hasData && !loading
                  ? 'bg-[#F3F3F3] hover:bg-[#E0E0E0]'
                  : 'bg-[#E6E6E6]'
              }`}
              onClick={handleSave}
              disabled={!hasData || loading}
            >
              저장하기
            </button>
          </div>
        </div>

        {/* 파일 업로드 박스 */}
        <div
          className="rounded-lg text-center mb-6"
          style={{
            width: '100%',
            height: '120px',
            padding: '24px',
            background: '#FFFFFF',
            border: '1px dashed #D9D9D9',
          }}
        >
          <input
            type="file"
            accept=".jpg,.png,.pdf,.doc,.docx"
            className="hidden"
            id="journalFile"
            onChange={(e) =>
              e.target.files && handleFileUpload(e.target.files[0])
            }
          />
          <label htmlFor="journalFile" className="cursor-pointer block">
            {loading ? (
              <div className="text-gray-500">처리 중...</div>
            ) : (
              <>
                <div className="text-[#303030]">
                  파일을 선택하거나 드래그하여 업로드하세요
                </div>
                <div className="text-sm text-[#767676] mt-2">
                  (JPG, PNG, PDF, DOC, DOCX 파일만 지원됩니다.)
                </div>
              </>
            )}
          </label>
        </div>

        {/* 요약 영역 */}
        <div className="grid grid-cols-5 gap-4 mb-6 text-center border border-[#D9D9D9]">
          {[
            { label: '거래건수', value: `${summary.transactionCount}건` },
            { label: '신규거래처수', value: `${summary.newPartnerCount}개` },
            { label: '차변합계', value: `${summary.totalDebit.toLocaleString()}원` },
            { label: '대변합계', value: `${summary.totalCredit.toLocaleString()}원` },
            { label: '분개 적중률', value: `${summary.accuracy}%` },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 border-r border-[#D9D9D9] last:border-r-0"
            >
              <div className="text-sm text-[#767676]">{item.label}</div>
              <div className="text-lg font-bold text-[#1E1E1E]">
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* 분개 테이블 */}
        <table className="w-full border border-[#D9D9D9] text-sm text-[#757575]">
          <thead>
            <tr>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">번호</td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">일자</td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">차변 계정과목</td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">금액</td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">거래처</td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">대변 계정과목</td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">금액</td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">거래처</td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">적요</td>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={row.id}>
                <td className="p-3 border border-[#D9D9D9] text-center">
                  {idx + 1}
                </td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    type="text"
                    className="w-full focus:outline-none"
                    placeholder="입력하기"
                    value={row.date}
                    onChange={(e) =>
                      setRows((prev) =>
                        prev.map((r) =>
                          r.id === row.id ? { ...r, date: e.target.value } : r
                        )
                      )
                    }
                  />
                </td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    type="text"
                    className="w-full focus:outline-none"
                    placeholder="입력하기"
                    value={row.debitAccount}
                    onChange={(e) =>
                      setRows((prev) =>
                        prev.map((r) =>
                          r.id === row.id
                            ? { ...r, debitAccount: e.target.value }
                            : r
                        )
                      )
                    }
                  />
                </td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    type="number"
                    className="w-full focus:outline-none"
                    placeholder="입력하기"
                    value={row.debitAmount}
                    onChange={(e) =>
                      setRows((prev) =>
                        prev.map((r) =>
                          r.id === row.id
                            ? { ...r, debitAmount: e.target.value }
                            : r
                        )
                      )
                    }
                  />
                </td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    type="text"
                    className="w-full focus:outline-none"
                    placeholder="입력하기"
                    value={row.debitPartner}
                    onChange={(e) =>
                      setRows((prev) =>
                        prev.map((r) =>
                          r.id === row.id
                            ? { ...r, debitPartner: e.target.value }
                            : r
                        )
                      )
                    }
                  />
                </td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    type="text"
                    className="w-full focus:outline-none"
                    placeholder="입력하기"
                    value={row.creditAccount}
                    onChange={(e) =>
                      setRows((prev) =>
                        prev.map((r) =>
                          r.id === row.id
                            ? { ...r, creditAccount: e.target.value }
                            : r
                        )
                      )
                    }
                  />
                </td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    type="number"
                    className="w-full focus:outline-none"
                    placeholder="입력하기"
                    value={row.creditAmount}
                    onChange={(e) =>
                      setRows((prev) =>
                        prev.map((r) =>
                          r.id === row.id
                            ? { ...r, creditAmount: e.target.value }
                            : r
                        )
                      )
                    }
                  />
                </td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    type="text"
                    className="w-full focus:outline-none"
                    placeholder="입력하기"
                    value={row.creditPartner}
                    onChange={(e) =>
                      setRows((prev) =>
                        prev.map((r) =>
                          r.id === row.id
                            ? { ...r, creditPartner: e.target.value }
                            : r
                        )
                      )
                    }
                  />
                </td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    type="text"
                    className="w-full focus:outline-none"
                    placeholder="입력하기"
                    value={row.description}
                    onChange={(e) =>
                      setRows((prev) =>
                        prev.map((r) =>
                          r.id === row.id
                            ? { ...r, description: e.target.value }
                            : r
                        )
                      )
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
