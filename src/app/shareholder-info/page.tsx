'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { getShareholderDocs, extractShareholderDocs } from '@/services/api';
import FileUploadBox from '@/components/FileUploadBox';
import Button from '@/components/Button';

interface ShareholderRow {
  id: number;
  name: string; // 성명
  residentNumber: string; // 주민등록번호
  isRelatedParty?: string; // 특수관계인 여부 ('YES'|'NO')
  shares?: string; // 주식수
  acquisitionDate?: string; // 취득일자
  note?: string; // 비고
}

export default function ShareholderInfoPage() {
  const router = useRouter();
  const { token, isAuthenticated, loading: authLoading } = useAuth();
  const [rows, setRows] = useState<ShareholderRow[]>([
    {
      id: 1,
      name: '',
      residentNumber: '',
      isRelatedParty: '',
      shares: '',
      acquisitionDate: '',
      note: '',
    },
    {
      id: 2,
      name: '',
      residentNumber: '',
      isRelatedParty: '',
      shares: '',
      acquisitionDate: '',
      note: '',
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [, setFirstLoad] = useState(true);
  const [documentId, setDocumentId] = useState<string>('');

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
      r.residentNumber.trim() ||
      r.isRelatedParty?.trim() ||
      r.shares?.trim() ||
      r.acquisitionDate?.trim() ||
      r.note?.trim()
  );

  /** 주주 목록 불러오기 */
  const fetchShareholders = useCallback(async () => {
    if (!token) return;
    
    try {
      const data = await getShareholderDocs(token) as { success: boolean; data: ShareholderRow[] };
      if (data.success && Array.isArray(data.data) && data.data.length > 0) {
        setRows(
          data.data.map((s: ShareholderRow) => ({
            id: s.id,
            name: s.name || '',
            residentNumber: s.residentNumber || '',
            isRelatedParty: s.isRelatedParty ? 'YES' : 'NO',
            shares: s.shares || '',
            acquisitionDate: s.acquisitionDate || '',
            note: s.note || '',
          }))
        );
      }
    } catch (err) {
      console.error('주주 정보 조회 에러:', err);
      // 에러가 발생해도 조용히 처리 (사용자에게 알림하지 않음)
    } finally {
      setFirstLoad(false);
    }
  }, [token]);

  /** 주주명부 파일 업로드 */
  const handleFileUpload = async (file: File) => {
    if (!token) return;
    
    try {
      setLoading(true);
      const data = await extractShareholderDocs(file, token) as { success: boolean; documentId?: string; items: ShareholderRow[] };
      if (data.success && data.items) {
        // documentId 저장
        if (data.documentId) {
          setDocumentId(data.documentId);
        }
        
        const extracted = data.items.map((item: ShareholderRow) => ({
          id: Date.now() + Math.random(),
          name: item.name || '',
          residentNumber: item.residentNumber || '',
          isRelatedParty: item.isRelatedParty ? 'YES' : 'NO',
          shares: item.shares || '',
          acquisitionDate: item.acquisitionDate || '',
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
    if (!token) {
      alert('로그인이 필요합니다.');
      return;
    }
    
    if (!documentId) {
      alert('먼저 파일을 업로드해주세요.');
      return;
    }
    
    try {
      setLoading(true);
      
      
      const res = await fetch(`https://api.eosxai.com/api/shareholder-docs/save`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          documentId,
          shareholders: rows
        }),
      });
      
      if (!res.ok) {
        const errorText = await res.text();
        console.error('주주 정보 저장 실패:', res.status, errorText);
        throw new Error(`주주 정보 저장에 실패했습니다. (${res.status}): ${errorText}`);
      }
      
      const data = await res.json();
      console.log('저장 응답:', data);
      
      if (data.success) {
        alert('저장되었습니다!');
        // 저장된 데이터로 업데이트
        setRows(data.shareholders.map((shareholder: ShareholderRow) => ({
          id: shareholder.id,
          name: shareholder.name,
          residentNumber: shareholder.residentNumber,
          isRelatedParty: shareholder.isRelatedParty,
          shares: shareholder.shares,
          acquisitionDate: shareholder.acquisitionDate,
          note: shareholder.note,
        })));
        // 저장 후 리스팅 함수 다시 호출
        fetchShareholders();
      } else {
        alert('저장 실패');
      }
    } catch (err) {
      console.error('저장 에러:', err);
      alert('저장 중 문제가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  /** 삭제 */
  const handleDelete = async (id: number) => {
    if (!token) return;
    
    try {
      setLoading(true);
      const res = await fetch(`https://api.eosxai.com/api/shareholders/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      
      if (!res.ok) {
        const errorText = await res.text();
        console.error('주주 삭제 실패:', res.status, errorText);
        throw new Error(`삭제에 실패했습니다. (${res.status}): ${errorText}`);
      }
      
      const data = await res.json();
      console.log('삭제 응답:', data);
      
      // 로컬 상태에서도 제거
      setRows(prev => prev.filter(r => r.id !== id));
      alert('삭제되었습니다.');
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
        residentNumber: '',
        isRelatedParty: '',
        shares: '',
        acquisitionDate: '',
        note: '',
      },
    ]);
  };

  useEffect(() => {
    fetchShareholders();
  }, [fetchShareholders]);

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
            <h2 className="text-xl font-bold mb-2 text-[#1E1E1E]">주주 정보</h2>
            <p className="text-[#767676]">
              파일을 업로드해서 자동으로 입력하거나 직접 입력하고 정보를
              저장하세요.
            </p>
          </div>
          <div className="flex gap-3">
            {/* 파일 업로드 */}
            <Button
              variant="neutral"
              size="small"
              onClick={() => document.getElementById('shareholderFile')?.click()}
              disabled={loading}
              loading={loading}
            >
              파일 업로드
            </Button>
            {/* 저장하기 */}
            <Button
              variant="neutral"
              size="small"
              onClick={handleSave}
              disabled={!hasData || loading}
              loading={loading}
            >
              저장하기
            </Button>
          </div>
        </div>

        {/* 파일 업로드 박스 */}
        <div className="mb-6">
          <FileUploadBox
            id="shareholderFile"
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
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">주주명</td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                주민등록번호(사업자등록번호)
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                특수관계자 여부
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                주식수
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                지분율(%)
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">기타사항</td>
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
                    value={row.residentNumber}
                    onChange={e =>
                      setRows(prev =>
                        prev.map(r =>
                          r.id === row.id
                            ? { ...r, residentNumber: e.target.value }
                            : r
                        )
                      )
                    }
                  />
                </td>
                <td className="p-3 border border-[#D9D9D9]">
                  <select
                    className="w-full focus:outline-none"
                    value={row.isRelatedParty || ''}
                    onChange={e =>
                      setRows(prev =>
                        prev.map(r =>
                          r.id === row.id
                            ? { ...r, isRelatedParty: e.target.value }
                            : r
                        )
                      )
                    }
                  >
                    <option value="">선택하기</option>
                    <option value="YES">예</option>
                    <option value="NO">아니오</option>
                  </select>
                </td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    className="w-full focus:outline-none"
                    placeholder="입력하기"
                    value={row.shares || ''}
                    onChange={e =>
                      setRows(prev =>
                        prev.map(r =>
                          r.id === row.id ? { ...r, shares: e.target.value } : r
                        )
                      )
                    }
                  />
                </td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    type="date"
                    className="w-full focus:outline-none"
                    value={row.acquisitionDate || ''}
                    onChange={e =>
                      setRows(prev =>
                        prev.map(r =>
                          r.id === row.id
                            ? { ...r, acquisitionDate: e.target.value }
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
                    style={{
                      border: 'none',
                      padding: '8px 12px',
                      background: '#F3F3F3',
                      color: '#1E1E1E',
                      fontSize: '12px',
                      lineHeight: '12px',
                    }}
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
                colSpan={8}
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