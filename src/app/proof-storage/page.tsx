'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

interface ProofRow {
  id: number;
  uploadedAt: string; // 업로드일자
  fileName: string; // 파일명
  type: string; // 증빙종류
  mimeType: string;
  size: number;
  voucherIds?: number[];
}

export default function ProofStoragePage() {
  const router = useRouter();
  const { token, isAuthenticated, loading: authLoading } = useAuth();
  const [rows, setRows] = useState<ProofRow[]>([]);
  const [, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, router]);

  /** 리스트 조회 */
  const fetchProofs = useCallback(async () => {
    if (!token) return;
    try {
      setLoading(true);
      const res = await fetch('https://api.eosxai.com/api/proof', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('불러오기 실패');
      const data = await res.json();
      setRows(data.items || []);
    } catch (err) {
      console.error('증빙 조회 에러:', err);
      // 에러가 발생해도 조용히 처리
    } finally {
      setLoading(false);
    }
  }, [token]);

  /** 다운로드 */
  const handleDownload = async (id: number) => {
    if (!token) return;
    try {
      const res = await fetch(`https://api.eosxai.com/api/proof/${id}/url`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.url) {
        window.open(data.url, '_blank');
      } else {
        alert('다운로드 URL 발급 실패');
      }
    } catch (err) {
      console.error('다운로드 에러:', err);
      alert('다운로드 실패');
    }
  };

  /** 분개보기 */
  const handleViewJournal = async (row: ProofRow) => {
    if (!token || !row.voucherIds || row.voucherIds.length === 0) {
      alert('연결된 분개가 없습니다.');
      return;
    }
    
    // 분개장 페이지로 이동 (voucherIds를 쿼리 파라미터로 전달)
    const voucherIds = row.voucherIds.join(',');
    window.open(`/journal?voucherIds=${voucherIds}`, '_blank');
  };

  /** 삭제 */
  const handleDelete = async (id: number) => {
    if (!token) return;
    if (!confirm('삭제하시겠습니까?')) return;

    try {
      const res = await fetch(`https://api.eosxai.com/api/proof/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      
      if (res.ok) {
        setRows(prev => prev.filter(r => r.id !== id));
        alert('삭제되었습니다.');
      } else {
        const errorData = await res.json();
        alert(`삭제 실패: ${errorData.error || '알 수 없는 오류'}`);
      }
    } catch (err) {
      console.error('삭제 에러:', err);
      alert('삭제 실패');
    }
  };

  useEffect(() => {
    fetchProofs();
  }, [fetchProofs]);

  // 로딩/인증 처리
  if (authLoading) {
    return (
      <div className="p-8">
        <div className="max-w-6xl mx-auto text-center py-8">로딩 중...</div>
      </div>
    );
  }
  if (!isAuthenticated) return null;

  /** 검색 필터링 */
  const filteredRows = rows.filter(r => {
    if (!search.trim()) return true;
    
    // 한글 정규화를 위한 함수
    const normalize = (str: string) => {
      return str.normalize('NFC').toLowerCase();
    };
    
    const normalizedFileName = normalize(r.fileName);
    const normalizedSearch = normalize(search);
    
    console.log('원본:', r.fileName, search);
    console.log('정규화:', normalizedFileName, normalizedSearch);
    console.log('결과:', normalizedFileName.includes(normalizedSearch));
    
    return normalizedFileName.includes(normalizedSearch);
  });


  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold mb-2 text-[#1E1E1E]">증빙보관소</h2>
            <p className="text-[#767676]">결산일자를 선택하고 결산점검을 시작하세요.</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="검색어를 입력해주세요."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="border border-[#D9D9D9] rounded px-3 py-2 pr-8 text-sm w-64"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* 테이블 */}
        <table className="w-full border border-[#D9D9D9] text-sm text-[#757575]">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 border border-[#D9D9D9] w-14">번호</th>
              <th className="p-3 border border-[#D9D9D9]">제출일자</th>
              <th className="p-3 border border-[#D9D9D9]">내용(파일명)</th>
              <th className="p-3 border border-[#D9D9D9]">증빙종류</th>
              <th className="p-3 border border-[#D9D9D9] w-24">분개보기</th>
              <th className="p-3 border border-[#D9D9D9] w-24">다운로드</th>
              <th className="p-3 border border-[#D9D9D9] w-24">삭제</th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row, idx) => (
              <tr key={row.id}>
                <td className="p-3 border border-[#D9D9D9] text-center">{idx + 1}</td>
                <td className="p-3 border border-[#D9D9D9]">{row.uploadedAt}</td>
                <td className="p-3 border border-[#D9D9D9]">{row.fileName}</td>
                <td className="p-3 border border-[#D9D9D9]">{row.type}</td>
                <td className="p-3 border border-[#D9D9D9] text-center">
                  <button
                    onClick={() => handleViewJournal(row)}
                    disabled={!row.voucherIds || row.voucherIds.length === 0}
                    style={{
                      width: 'auto',
                      minWidth: '66px',
                      height: '28px',
                      padding: '8px 12px',
                      background: (!row.voucherIds || row.voucherIds.length === 0) ? '#F5F5F5' : '#F3F3F3',
                      color: (!row.voucherIds || row.voucherIds.length === 0) ? '#999' : '#1E1E1E',
                      fontSize: '12px',
                      lineHeight: '12px',
                      border: 'none',
                      cursor: (!row.voucherIds || row.voucherIds.length === 0) ? 'not-allowed' : 'pointer',
                    }}
                  >
                    분개보기
                  </button>
                </td>
                <td className="p-3 border border-[#D9D9D9] text-center">
                  <button
                    onClick={() => handleDownload(row.id)}
                    style={{
                      width: 'auto',
                      minWidth: '66px',
                      height: '28px',
                      padding: '8px 12px',
                      background: '#F3F3F3',
                      color: '#1E1E1E',
                      fontSize: '12px',
                      lineHeight: '12px',
                      border: 'none',
                    }}
                  >
                    다운로드
                  </button>
                </td>
                <td className="p-3 border border-[#D9D9D9] text-center">
                  <button
                    onClick={() => handleDelete(row.id)}
                    style={{
                      width: 'auto',
                      minWidth: '66px',
                      height: '28px',
                      padding: '8px 12px',
                      background: '#F3F3F3',
                      color: '#1E1E1E',
                      fontSize: '12px',
                      lineHeight: '12px',
                      border: 'none',
                    }}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            ))}
            {filteredRows.length === 0 && (
              <tr>
                <td colSpan={7} className="p-8 text-center text-gray-500">
                  <p>등록된 증빙서류가 없습니다.</p>
                  <p className="text-sm mt-2">파일을 업로드해주세요.</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
