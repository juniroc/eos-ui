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
  const [rows, setRows] = useState<JournalRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0 });
  const [summary, setSummary] = useState({
    transactionCount: 0,
    newPartnerCount: 0,
    totalDebit: 0,
    totalCredit: 0,
    accuracy: 0,
  });

  const hasData = rows.length > 0;

  /** 파일 업로드 */
  const handleFileUpload = async (file: File) => {
    const formData = new FormData();
    formData.append('files[]', file);

    try {
      setLoading(true);
      setProgress({ current: 0, total: 200 }); // 예시 total (실제는 SSE로 받아올 수 있음)

      // 업로드 API 호출
      const res = await fetch('/api/ai/extract-raw-transactions/start', {
        method: 'POST',
        headers: { Authorization: `Bearer ${accessToken}` },
        body: formData,
      });
      if (!res.ok) throw new Error('업로드 실패');

      // fake progress 증가 (실제는 SSE 이벤트로 업데이트)
      let count = 0;
      const interval = setInterval(() => {
        count++;
        setProgress({ current: count, total: 200 });
        if (count >= 200) clearInterval(interval);
      }, 50);

      const data = await res.json();
      console.log('업로드 결과', data);

      if (data.success && data.data) {
        if (data.data.journals && Array.isArray(data.data.journals)) {
          const newRows = data.data.journals.map(
            (
              journal: {
                date?: string;
                debitAccount?: string;
                debitAmount?: string;
                debitPartner?: string;
                creditAccount?: string;
                creditAmount?: string;
                creditPartner?: string;
                description?: string;
              },
              index: number
            ) => ({
              id: Date.now() + index,
              date: journal.date || '',
              debitAccount: journal.debitAccount || '',
              debitAmount: journal.debitAmount || '',
              debitPartner: journal.debitPartner || '',
              creditAccount: journal.creditAccount || '',
              creditAmount: journal.creditAmount || '',
              creditPartner: journal.creditPartner || '',
              description: journal.description || '',
            })
          );
          setRows(newRows);
        }

        if (data.data.summary) {
          setSummary({
            transactionCount: data.data.summary.transactionCount || 0,
            newPartnerCount: data.data.summary.newPartnerCount || 0,
            totalDebit: data.data.summary.totalDebit || 0,
            totalCredit: data.data.summary.totalCredit || 0,
            accuracy: data.data.summary.accuracy || 0,
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

  const handleSave = async () => {
    alert('저장 API는 추후 구현 예정입니다.');
  };

  return (
    <div className="p-8">
      <div className="mx-auto w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold mb-2 text-[#1E1E1E]">AI 분개</h2>
            <p className="text-[#767676]">
              파일을 업로드해서 자동으로 분개를 시작하세요.
            </p>
          </div>
          {hasData && (
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
          )}
        </div>

        {/* 파일 업로드 박스 */}
        <div
          className="rounded-lg text-center mb-6"
          style={{
            width: '100%',
            height: loading ? '80px' : '120px',
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
            onChange={e =>
              e.target.files && handleFileUpload(e.target.files[0])
            }
          />
          {!loading ? (
            <label htmlFor="journalFile" className="cursor-pointer block">
              <div className="text-[#303030]">
                파일을 선택하거나 드래그하여 업로드하세요
              </div>
              <div className="text-sm text-[#767676] mt-2">
                (JPG, PNG, PDF, DOC, DOCX 파일만 지원됩니다.)
              </div>
            </label>
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              {/* Progress Bar */}
              <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                <div
                  className="bg-gradient-to-r from-sky-400 to-purple-500 h-2 rounded-full transition-all"
                  style={{
                    width: `${(progress.current / progress.total) * 100}%`,
                  }}
                />
              </div>
              <div className="text-sm text-[#767676]">
                파일 내용을 분석하고 분개작업을 진행중입니다. (
                {progress.current}/{progress.total})
              </div>
            </div>
          )}
        </div>

        {/* 업로드 완료 후 데이터 표시 */}
        {hasData && !loading && (
          <>
            {/* 요약 영역 */}
            <div className="grid grid-cols-5 gap-4 mb-6 text-center border border-[#D9D9D9]">
              {[
                { label: '거래건수', value: `${summary.transactionCount}건` },
                {
                  label: '신규거래처수',
                  value: `${summary.newPartnerCount}개`,
                },
                {
                  label: '차변합계',
                  value: `${summary.totalDebit.toLocaleString()}원`,
                },
                {
                  label: '대변합계',
                  value: `${summary.totalCredit.toLocaleString()}원`,
                },
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
                  <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                    번호
                  </td>
                  <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                    일자
                  </td>
                  <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                    차변 계정과목
                  </td>
                  <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                    금액
                  </td>
                  <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                    거래처
                  </td>
                  <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                    대변 계정과목
                  </td>
                  <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                    금액
                  </td>
                  <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                    거래처
                  </td>
                  <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                    적요
                  </td>
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
                        className="w-full focus:outline-none"
                        placeholder="입력하기"
                        value={row.date}
                      />
                    </td>
                    <td className="p-3 border border-[#D9D9D9]">
                      <input
                        className="w-full focus:outline-none"
                        placeholder="입력하기"
                        value={row.debitAccount}
                      />
                    </td>
                    <td className="p-3 border border-[#D9D9D9]">
                      <input
                        className="w-full focus:outline-none"
                        placeholder="입력하기"
                        value={row.debitAmount}
                      />
                    </td>
                    <td className="p-3 border border-[#D9D9D9]">
                      <input
                        className="w-full focus:outline-none"
                        placeholder="입력하기"
                        value={row.debitPartner}
                      />
                    </td>
                    <td className="p-3 border border-[#D9D9D9]">
                      <input
                        className="w-full focus:outline-none"
                        placeholder="입력하기"
                        value={row.creditAccount}
                      />
                    </td>
                    <td className="p-3 border border-[#D9D9D9]">
                      <input
                        className="w-full focus:outline-none"
                        placeholder="입력하기"
                        value={row.creditAmount}
                      />
                    </td>
                    <td className="p-3 border border-[#D9D9D9]">
                      <input
                        className="w-full focus:outline-none"
                        placeholder="입력하기"
                        value={row.creditPartner}
                      />
                    </td>
                    <td className="p-3 border border-[#D9D9D9]">
                      <input
                        className="w-full focus:outline-none"
                        placeholder="입력하기"
                        value={row.description}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
}
