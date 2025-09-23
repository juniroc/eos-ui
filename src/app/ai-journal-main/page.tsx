'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import FileUploadBox from '@/components/FileUploadBox';

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


export default function AIJournalMainPage() {
  const router = useRouter();
  const { isAuthenticated, loading: authLoading, token } = useAuth();
  const [rows] = useState<JournalRow[]>([]);

  // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, router]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0 });
  const [summary] = useState({
    transactionCount: 0,
    newPartnerCount: 0,
    totalDebit: 0,
    totalCredit: 0,
    accuracy: 0,
  });

  const hasData = rows.length > 0;

  /** 파일 업로드 */
  const handleFileUpload = async (file: File) => {
    if (!token) return;
    
    const formData = new FormData();
    formData.append('files', file);

    try {
      setLoading(true);
      setProgress({ current: 0, total: 200 }); // 예시 total (실제는 SSE로 받아올 수 있음)

      // 업로드 API 호출
      const res = await fetch(`https://api.eosxai.com/api/ai/extract-raw-transactions/start`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
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

      // API 명세에 따르면 { jobId } 형태로 응답
      if (data.jobId) {
        console.log('작업 ID:', data.jobId);
        // TODO: jobId를 사용하여 SSE 스트림을 시작하거나 다른 처리를 해야 함
        // 현재는 임시로 성공 메시지만 표시
        alert('파일 업로드가 시작되었습니다. 작업 ID: ' + data.jobId);
      } else {
        throw new Error('작업 ID를 받지 못했습니다.');
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

  // 로딩 중이거나 인증되지 않은 경우
  if (authLoading) {
    return (
      <div className="p-8">
        <div className="mx-auto w-full">
          <div className="text-center py-8">로딩 중...</div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // 리다이렉트가 처리됨
  }

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
        <div className="mb-6">
          <FileUploadBox
            id="journalFile"
            onFileUpload={handleFileUpload}
            loading={loading}
            style={{
              height: loading ? '80px' : '120px',
            }}
            customLoadingContent={
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
            }
          />
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