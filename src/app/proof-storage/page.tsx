'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { getProofList, getProofDownloadUrl, deleteProofItem, type ProofItem } from '@/services/financial';
import Image from 'next/image';
import ToastMessage from '@/components/ToastMessage';

type ProofRow = ProofItem;

export default function ProofStoragePage() {
  const router = useRouter();
  const { token, isAuthenticated, loading: authLoading } = useAuth();
  const [rows, setRows] = useState<ProofRow[]>([]);
  const [, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, router]);

  /**
   * 날짜를 YYMMDD 형식으로 변환합니다
   * @param date - Date 객체 또는 날짜 문자열
   * @returns YYMMDD 형식의 문자열 (예: 251005)
   */
  const formatDateToYYMMDD = (date: Date | string | null | undefined): string => {
    if (!date) return '-';
    
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    
    if (isNaN(dateObj.getTime())) return '-';
    
    const year = dateObj.getFullYear().toString().slice(-2); // 마지막 2자리
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObj.getDate().toString().padStart(2, '0');
    
    return `${year}${month}${day}`;
  };

  /** 리스트 조회 */
  const fetchProofs = useCallback(async () => {
    if (!token) return;
    try {
      setLoading(true);
      const data = await getProofList(token);
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
      const data = await getProofDownloadUrl(id, token);
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
      await deleteProofItem(id, token);
      setRows(prev => prev.filter(r => r.id !== id));
      setToastMessage('증빙이 삭제되었습니다.');
      setShowToast(true);
    } catch (err) {
      console.error('삭제 에러:', err);
      alert(`삭제 실패: ${err instanceof Error ? err.message : '알 수 없는 오류'}`);
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
    <div className="flex flex-col items-start p-4 gap-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Title Section */}
      <div className="flex flex-col items-start p-0 gap-4 self-stretch">
        <div className="flex justify-between items-end p-0 gap-4 self-stretch">
          {/* Left Title Area */}
          <div className="flex flex-col items-start p-0">
            <div className="flex flex-col items-start py-1.5 px-0 rounded-lg">
              <div className="flex items-start p-0">
                <h2 className="text-[15px] font-semibold leading-[140%] text-[#1E1E1E]">증빙보관소</h2>
              </div>
              <p className="text-[12px] leading-[140%] text-[#767676]">필요한 내용을 입력하고 정보를 저장하세요.</p>
            </div>
          </div>
          
          {/* Search Field */}
          <div className="flex flex-col items-start p-0 w-[200px]">
            <div className="flex items-center w-full px-3 py-2 gap-2 bg-white border border-[#D9D9D9]">
              <input
                type="text"
                placeholder="검색어를 입력해주세요."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="text-[12px] font-medium leading-[100%] text-[#B3B3B3] bg-transparent outline-none flex-1"
              />
              <Image src="/icons/search.svg" alt="search" width={16} height={16} />
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="flex flex-col items-start p-0 self-stretch">
        <table className="w-full border-collapse border border-[#D9D9D9]">
          <thead className="h-[32px]">
            <tr>
              <th className="p-2 bg-[#F5F5F5] border border-[#D9D9D9] text-[12px] font-medium leading-[100%] text-[#757575] text-center min-w-[40px]">
                번호
              </th>
              <th className="p-2 bg-[#F5F5F5] border border-[#D9D9D9] text-[12px] font-medium leading-[100%] text-[#757575] text-center min-w-[69px]">
                제공일자
              </th>
              <th className="p-2 bg-[#F5F5F5] border border-[#D9D9D9] text-[12px] font-medium leading-[100%] text-[#757575] text-center">
                내용(파일명)
              </th>
              <th className="p-2 bg-[#F5F5F5] border border-[#D9D9D9] text-[12px] font-medium leading-[100%] text-[#757575] text-center min-w-[100px]">
                증빙종류
              </th>
              <th className="p-2 bg-[#F5F5F5] border border-[#D9D9D9] text-[12px] font-medium leading-[100%] text-[#757575] text-center min-w-[87px]">
                분개보기
              </th>
              <th className="p-2 bg-[#F5F5F5] border border-[#D9D9D9] text-[12px] font-medium leading-[100%] text-[#757575] text-center min-w-[87px]">
                다운로드
              </th>
              <th className="p-2 bg-[#F5F5F5] border border-[#D9D9D9] text-[12px] font-medium leading-[100%] text-[#757575] text-center min-w-[87px]">
                삭제
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row, idx) => (
              <tr key={row.id}>
                <td className="p-2 bg-white border border-[#D9D9D9] text-[12px] font-medium leading-[100%] text-[#757575] text-center">
                  {idx + 1}
                </td>
                <td className="p-2 bg-white border border-[#D9D9D9] text-[12px] font-medium leading-[100%] text-[#757575] text-center">
                  {formatDateToYYMMDD(row.uploadedAt)}
                </td>
                <td className="p-2 bg-white border border-[#D9D9D9] text-[12px] font-medium leading-[100%] text-[#757575]">
                  {row.fileName}
                </td>
                <td className="p-2 bg-white border border-[#D9D9D9] text-[12px] font-medium leading-[100%] text-[#757575]">
                  {row.type}
                </td>
                <td className="p-1 bg-white border border-[#D9D9D9] text-center">
                  <button
                    onClick={() => handleViewJournal(row)}
                    disabled={!row.voucherIds || row.voucherIds.length === 0}
                    className={`py-1.5 px-1.5 h-[23px] flex items-center justify-center mx-auto ${
                      (!row.voucherIds || row.voucherIds.length === 0) 
                        ? 'bg-[#E6E6E6] cursor-not-allowed' 
                        : 'bg-[#2C2C2C] cursor-pointer'
                    }`}
                  >
                    <span className={`text-[11px] font-medium leading-[100%] ${
                      (!row.voucherIds || row.voucherIds.length === 0) 
                        ? 'text-[#B3B3B3]' 
                        : 'text-[#F5F5F5]'
                    }`}>
                      보기
                    </span>
                  </button>
                </td>
                <td className="p-1 bg-white border border-[#D9D9D9] text-center">
                  <button
                    onClick={() => handleDownload(row.id)}
                    className="py-1.5 px-1.5 bg-[#2C2C2C] h-[23px] flex items-center justify-center mx-auto"
                  >
                    <span className="text-[11px] font-medium leading-[100%] text-[#F5F5F5]">다운로드</span>
                  </button>
                </td>
                <td className="p-1 bg-white border border-[#D9D9D9] text-center">
                  <button
                    onClick={() => handleDelete(row.id)}
                    className="py-1.5 px-1.5 bg-[#EC221F] h-[23px] flex items-center justify-center mx-auto"
                  >
                    <span className="text-[11px] font-medium leading-[100%] text-[#F5F5F5]">삭제</span>
                  </button>
                </td>
              </tr>
            ))}
            
            {filteredRows.length === 0 && (
              <tr>
                <td colSpan={7} className="p-8 bg-white border border-[#D9D9D9] text-center">
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-[12px] leading-[140%] text-[#767676]">등록된 증빙서류가 없습니다.</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <ToastMessage 
        message={toastMessage}
        isVisible={showToast}
        onHide={() => setShowToast(false)}
      />
    </div>
  );
}
