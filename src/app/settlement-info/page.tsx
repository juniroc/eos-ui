'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import { useAuth } from '@/contexts/AuthContext';

interface SettlementRow {
  id: number;
  type: '필수' | '선택';
  value: string;
  fileName?: string;
  fileId?: string;
  file?: File;
}


export default function SettlementInfoPage() {
  const router = useRouter();
  const { token, isAuthenticated, loading: authLoading } = useAuth();
  const [rows, setRows] = useState<SettlementRow[]>([
    { id: 1, type: '필수', value: '' },
    { id: 2, type: '필수', value: '' },
    { id: 3, type: '선택', value: '' },
    { id: 4, type: '선택', value: '' },
    { id: 5, type: '선택', value: '' },
  ]);
  const [, setFirstLoad] = useState(true);
  const [loading, setLoading] = useState(false);

  // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, router]);

  /** 저장 버튼 활성화 여부 → 데이터가 하나라도 있으면 true */
  const hasData = rows.some(row => 
    row.value !== undefined && row.value !== null && row.value.trim() !== ''
  );

  /** 전기결산정보 불러오기 */
  const fetchDocs = useCallback(async () => {
    if (!token) return;
    
    try {
      const res = await fetch(`https://api.eosxai.com/api/previous-docs`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      // 404 에러는 데이터가 없는 것으로 처리 (에러 처리하지 않음)
      if (res.status === 404) {
        console.log('전기결산정보가 없습니다.');
        return;
      }
      
      if (!res.ok) throw new Error('데이터 불러오기 실패');
      const data = await res.json();
      if (data.success) {
        setRows(
          data.data.map((doc: { id: number; originalName: string }) => ({
            id: doc.id,
            type: '선택',
            value: doc.originalName,
            fileName: doc.originalName,
            fileId: doc.id,
          }))
        );
      }
    } catch (e) {
      console.error('전기결산정보 조회 에러:', e);
      // 에러가 발생해도 조용히 처리 (사용자에게 알림하지 않음)
    } finally {
      setFirstLoad(false);
    }
  }, [token]);

  /** 파일 업로드 */
  const handleFileUpload = async (rowId: number, file: File) => {
    if (!token) return;
    
    try {
      setLoading(true);
      
      // 파일을 로컬 상태에만 저장 (증빙보관소에는 저장하지 않음)
      setRows(prev =>
        prev.map(row =>
          row.id === rowId
            ? {
                ...row,
                value: file.name, // 파일명만 저장
                fileName: file.name,
                file: file, // 파일 객체 저장
              }
            : row
        )
      );
    } catch (e) {
      console.error('파일 업로드 에러:', e);
      const errorMessage = e instanceof Error ? e.message : '파일 업로드 실패';
      alert(`파일 업로드 실패: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  /** 파일 삭제 */
  const handleDelete = async (rowId: number, fileId?: string) => {
    if (!fileId) {
      setRows(prev => prev.filter(row => row.id !== rowId));
      return;
    }

    if (!token) return;

    try {
      setLoading(true);
      const res = await fetch(`https://api.eosxai.com/api/previous-docs/${fileId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('삭제 실패');
      const data = await res.json();
      if (data.success) {
        setRows(prev => prev.filter(row => row.id !== rowId));
      }
    } catch (e) {
      console.error('파일 삭제 에러:', e);
      alert('삭제 실패');
    } finally {
      setLoading(false);
    }
  };

  /** 기타자료 추가 */
  const addRow = () => {
    setRows(prev => [
      ...prev,
      { id: Date.now(), type: '선택', value: '', fileName: '' },
    ]);
  };

  /** 저장 API */
  const handleSave = async () => {
    if (!token) return;
    
    try {
      setLoading(true);
      
      // 먼저 파일들을 증빙보관소에 업로드
      const updatedRows = await Promise.all(
        rows.map(async (row) => {
          if (row.file && !row.fileId) {
            // 파일이 있고 아직 업로드되지 않은 경우
            const formData = new FormData();
            formData.append('file', row.file);
            
            const uploadRes = await fetch(`https://api.eosxai.com/api/previous-docs/upload?type=OTHER`, {
              method: 'POST',
              headers: { Authorization: `Bearer ${token}` },
              body: formData,
            });
            
            if (uploadRes.ok) {
              const uploadData = await uploadRes.json();
              return {
                ...row,
                fileId: uploadData.data.id,
                fileName: uploadData.data.originalName,
                value: uploadData.data.originalName,
                file: undefined, // 파일 객체 제거
              };
            }
          }
          return row;
        })
      );
      
      // 업데이트된 행들로 상태 업데이트
      setRows(updatedRows);
      
      // 비즈니스 정보 저장
      const res = await fetch(`https://api.eosxai.com/api/business-info`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ settlementDocs: updatedRows }),
      });
      
      if (!res.ok) throw new Error('저장 실패');
      const result = await res.json();
      if (result.success) {
        alert('저장되었습니다!');
      } else {
        alert('저장 실패');
      }
    } catch (e) {
      console.error('저장 에러:', e);
      alert('저장 중 문제가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocs();
  }, [fetchDocs]);

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold mb-2 text-[#1E1E1E]">
              전기결산 정보
            </h2>
            <p className="text-[#767676]">
              필요한 내용을 입력하고 정보를 저장하세요.
            </p>
          </div>
          <div className="flex gap-3">
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

        {/* Table */}
        <table className="w-full border border-[#D9D9D9] text-sm text-[#757575]">
          <thead className="bg-[#F5F5F5]">
            <tr>
              <th className="p-3 border border-[#D9D9D9] w-24 font-medium">구분</th>
              <th className="p-3 border border-[#D9D9D9] font-medium">자료종류</th>
              <th className="p-3 border border-[#D9D9D9] w-48 text-left font-medium">
                파일 업로드
              </th>
              <th className="p-3 border border-[#D9D9D9] w-32 font-medium">삭제</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row.id}>
                <td
                  className={`p-3 border border-[#D9D9D9] text-center ${
                    row.type === '필수' ? 'text-red-500 font-medium' : ''
                  }`}
                >
                  {row.type}
                </td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    className="w-full px-2 py-1 text-gray-700 focus:outline-none"
                    placeholder="입력하기"
                    value={row.value}
                    readOnly={!!row.fileName} // 파일 업로드된 경우 읽기 전용
                    onChange={e =>
                      setRows(prev =>
                        prev.map(r =>
                          r.id === row.id ? { ...r, value: e.target.value } : r
                        )
                      )
                    }
                  />
                </td>
                <td className="p-3 border border-gray-200 text-left">
                  {row.fileName ? (
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-700">{row.fileName}</span>
                      <label className="cursor-pointer text-gray-400 hover:text-gray-600 text-xs">
                        변경
                        <input
                          type="file"
                          accept=".pdf,.xlsx,.csv,.jpg,.jpeg,.png"
                          className="hidden"
                          onChange={e =>
                            e.target.files &&
                            handleFileUpload(row.id, e.target.files[0])
                          }
                        />
                      </label>
                    </div>
                  ) : (
                    <label className="cursor-pointer text-gray-400 hover:text-gray-600">
                      파일 업로드
                      <input
                        type="file"
                        accept=".pdf,.xlsx,.csv,.jpg,.jpeg,.png"
                        className="hidden"
                        onChange={e =>
                          e.target.files &&
                          handleFileUpload(row.id, e.target.files[0])
                        }
                      />
                    </label>
                  )}
                </td>
                <td className="p-3 border border-gray-200 text-center">
                  <button
                    onClick={() => handleDelete(row.id, row.fileId)}
                    style={{
                      width: 'auto',
                      minWidth: '66px',
                      height: '28px',
                      gap: '8px',
                      opacity: 1,
                      paddingTop: 'var(--Space-200, 8px)',
                      paddingRight: 'var(--Space-300, 12px)',
                      paddingBottom: 'var(--Space-200, 8px)',
                      paddingLeft: 'var(--Space-300, 12px)',
                      background: 'var(--Background-Neutral-Tertiary, #F3F3F3)',
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

            {/* 기타자료 추가하기 버튼 행 */}
            <tr>
              <td
                colSpan={4}
                className="p-3 border border-gray-200 text-center"
              >
                <button
                  onClick={addRow}
                  className="text-sm text-[#767676] flex justify-center gap-1 hover:text-[#1E1E1E] w-full"
                >
                  + 기타자료 추가하기
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}