'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { getPartnerDocs, extractPartnerDocs, deletePartner } from '@/services/api';
import FileUploadBox from '@/components/FileUploadBox';

interface ClientRow {
  id: number;
  name: string; // 거래처명
  businessNumber: string; // 사업자등록번호
  mainItems?: string; // 주요품목
  relationship?: string; // 관계
  note?: string; // 비고
}

export default function ClientInfoPage() {
  const router = useRouter();
  const { token, isAuthenticated, loading: authLoading } = useAuth();
  const [rows, setRows] = useState<ClientRow[]>([
    {
      id: 1,
      name: '',
      businessNumber: '',
      mainItems: '',
      relationship: '',
      note: '',
    },
    {
      id: 2,
      name: '',
      businessNumber: '',
      mainItems: '',
      relationship: '',
      note: '',
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [, setFirstLoad] = useState(true);

  // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, router]);

  /** 저장 버튼 활성화 여부 */
  const hasData = rows.some(
    r =>
      r.name.trim() ||
      r.businessNumber.trim() ||
      r.mainItems?.trim() ||
      r.relationship?.trim() ||
      r.note?.trim()
  );

  /** 거래처 목록 불러오기 */
  const fetchClients = useCallback(async () => {
    if (!token) return;
    
    try {
      const data = await getPartnerDocs(token) as { success: boolean; data: ClientRow[] };
      if (data.success && Array.isArray(data.data) && data.data.length > 0) {
        setRows(
          data.data.map((client: ClientRow) => ({
            id: client.id,
            name: client.name || '',
            businessNumber: client.businessNumber || '',
            mainItems: client.mainItems || '',
            relationship: client.relationship || '',
            note: client.note || '',
          }))
        );
      }
    } catch (err) {
      console.error('거래처 정보 조회 에러:', err);
      // 에러가 발생해도 조용히 처리 (사용자에게 알림하지 않음)
    } finally {
      setFirstLoad(false);
    }
  }, [token]);

  /** 거래처리스트 파일 업로드 */
  const handleFileUpload = async (file: File) => {
    if (!token) return;
    
    try {
      setLoading(true);
      const data = await extractPartnerDocs(file, token) as { success: boolean; items: ClientRow[] };
      if (data.success && data.items) {
        const extracted = data.items.map((item: ClientRow) => ({
          id: Date.now() + Math.random(),
          name: item.name || '',
          businessNumber: item.businessNumber || '',
          mainItems: item.mainItems || '',
          relationship: item.relationship || '',
          note: item.note || '',
        }));
        // 기존 빈 행을 제거하고 추출된 데이터만 설정
        setRows(extracted);
      }
    } catch (err) {
      console.error('파일 업로드 에러:', err);
      alert('파일 업로드 실패');
    } finally {
      setLoading(false);
    }
  };

  /** 저장 */
  const handleSave = async () => {
    alert('저장 API는 추후 구현 예정입니다.');
  };

  /** 삭제 */
  const handleDelete = async (id: number) => {
    if (!token) return;
    
    try {
      setLoading(true);
      await deletePartner(id.toString(), token);
      setRows(prev => prev.filter(r => r.id !== id));
    } catch (err) {
      console.error('삭제 에러:', err);
      alert('삭제 실패');
    } finally {
      setLoading(false);
    }
  };

  /** 행 추가 */
  const addRow = () => {
    setRows(prev => [
      ...prev,
      {
        id: Date.now(),
        name: '',
        businessNumber: '',
        mainItems: '',
        relationship: '',
        note: '',
      },
    ]);
  };

  useEffect(() => {
    fetchClients();
  }, [fetchClients]);

  // 로딩 중이거나 인증되지 않은 경우
  if (authLoading) {
    return (
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
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
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold mb-2 text-[#1E1E1E]">
              거래처 정보
            </h2>
            <p className="text-[#767676]">
              파일을 업로드해서 자동으로 입력하거나 직접 입력하고 정보를
              저장하세요.
            </p>
          </div>
          <div className="flex gap-3">
            {/* 파일 업로드 */}
            <button
              className="flex items-center justify-center min-w-[79px] h-[28px] px-3 text-[12px] leading-[12px] text-[#1E1E1E] bg-[#F3F3F3] hover:bg-[#E0E0E0] rounded"
              onClick={() => document.getElementById('clientFile')?.click()}
              disabled={loading}
            >
              파일 업로드
            </button>
            {/* 저장하기 */}
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
        <div className="mb-6">
          <FileUploadBox
            id="clientFile"
            onFileUpload={handleFileUpload}
            loading={loading}
          />
        </div>

        {/* 테이블 */}
        <table className="w-full border border-[#D9D9D9] text-sm text-[#757575]">
          <thead>
            <tr>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-12">
                번호
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                거래처명
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                사업자등록번호(주민등록번호)
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                주요거래품목
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">우리회사와의 관계</td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">기타 거래처 이해를 위한 참고사항</td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-24">
                삭제
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
                    value={row.name}
                    onChange={e =>
                      setRows(prev =>
                        prev.map(r =>
                          r.id === row.id ? { ...r, name: e.target.value } : r
                        )
                      )
                    }
                  />
                </td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    className="w-full focus:outline-none"
                    placeholder="입력하기"
                    value={row.businessNumber}
                    onChange={e =>
                      setRows(prev =>
                        prev.map(r =>
                          r.id === row.id
                            ? { ...r, businessNumber: e.target.value }
                            : r
                        )
                      )
                    }
                  />
                </td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    className="w-full focus:outline-none"
                    placeholder="입력하기"
                    value={row.mainItems || ''}
                    onChange={e =>
                      setRows(prev =>
                        prev.map(r =>
                          r.id === row.id
                            ? { ...r, mainItems: e.target.value }
                            : r
                        )
                      )
                    }
                  />
                </td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    className="w-full focus:outline-none"
                    placeholder="입력하기"
                    value={row.relationship || ''}
                    onChange={e =>
                      setRows(prev =>
                        prev.map(r =>
                          r.id === row.id
                            ? { ...r, relationship: e.target.value }
                            : r
                        )
                      )
                    }
                  />
                </td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    className="w-full focus:outline-none"
                    placeholder="입력하기"
                    value={row.note || ''}
                    onChange={e =>
                      setRows(prev =>
                        prev.map(r =>
                          r.id === row.id ? { ...r, note: e.target.value } : r
                        )
                      )
                    }
                  />
                </td>
                <td className="p-3 border border-[#D9D9D9] text-center">
                  <button
                    onClick={() => handleDelete(row.id)}
                    className="flex items-center justify-center min-w-[66px] h-[28px] px-3 text-[12px] text-[#1E1E1E] bg-[#F3F3F3] hover:bg-[#E0E0E0] rounded"
                    disabled={loading}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            ))}
            {/* 추가하기 */}
            <tr>
              <td
                colSpan={7}
                className="p-3 border border-[#D9D9D9] text-center"
              >
                <button
                  onClick={addRow}
                  className="text-sm text-[#767676] hover:text-[#1E1E1E]"
                >
                  + 추가하기
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}