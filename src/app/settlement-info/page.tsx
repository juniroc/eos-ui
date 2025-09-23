'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

interface SettlementRow {
  id: number;
  type: '필수' | '선택';
  dataType: string;
  fileName?: string;
  fileId?: string;
  file?: File;
}


export default function SettlementInfoPage() {
  const router = useRouter();
  const { token, isAuthenticated, loading: authLoading } = useAuth();
  const [rows, setRows] = useState<SettlementRow[]>([
    { id: 1, type: '필수', dataType: '재무상태표' },
    { id: 2, type: '필수', dataType: '손익계산서' },
    { id: 3, type: '선택', dataType: '계정(잔액)명세서' },
    { id: 4, type: '선택', dataType: '분개장' },
  ]);
  const [additionalRows, setAdditionalRows] = useState<SettlementRow[]>([]);
  const [, setFirstLoad] = useState(true);
  const [loading, setLoading] = useState(false);

  // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, router]);

  /** 저장 버튼 활성화 여부 → 파일이 하나라도 있으면 true */
  const hasData = [...rows, ...additionalRows].some(row => 
    row.fileName && row.fileName.trim() !== ''
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
        // 기본 행들 정의
        const defaultRows = [
          { id: 1, type: '필수' as const, dataType: '재무상태표' },
          { id: 2, type: '필수' as const, dataType: '손익계산서' },
          { id: 3, type: '선택' as const, dataType: '계정(잔액)명세서' },
          { id: 4, type: '선택' as const, dataType: '분개장' },
        ];
        
        // 기본 행들에 파일 정보 매핑 (type으로 매칭)
        const updatedRows = defaultRows.map(row => {
          let apiType = '';
          switch (row.dataType) {
            case '재무상태표':
              apiType = 'BALANCE_SHEET';
              break;
            case '손익계산서':
              apiType = 'INCOME_STATEMENT';
              break;
            case '계정(잔액)명세서':
              apiType = 'ACCOUNT_STATEMENT';
              break;
            case '분개장':
              apiType = 'JOURNAL';
              break;
          }
          
          const matchingDoc = data.data.find((doc: { id: string; type: string; originalName: string }) => 
            doc.type === apiType
          );
          
          if (matchingDoc) {
            return {
              ...row,
              fileName: matchingDoc.originalName,
              fileId: matchingDoc.id,
            };
          }
          return row;
        });
        setRows(updatedRows);
        
        // 기타 자료들 (기본 4개 타입이 아닌 것들)
        const otherDocs = data.data.filter((doc: { id: string; type: string; originalName: string }) => 
          !['BALANCE_SHEET', 'INCOME_STATEMENT', 'ACCOUNT_STATEMENT', 'JOURNAL'].includes(doc.type)
        );
        setAdditionalRows(
          otherDocs.map((doc: { id: string; type: string; originalName: string }) => ({
            id: doc.id,
            type: '선택' as const,
            dataType: doc.originalName,
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
      
      // 기본 행들에서 찾기
      const isBasicRow = rows.some(row => row.id === rowId);
      if (isBasicRow) {
        setRows(prev =>
          prev.map(row =>
            row.id === rowId
              ? {
                  ...row,
                  fileName: file.name,
                  file: file, // 파일 객체 저장
                }
              : row
          )
        );
      } else {
        // 추가 행들에서 찾기
        setAdditionalRows(prev =>
          prev.map(row =>
            row.id === rowId
              ? {
                  ...row,
                  fileName: file.name,
                  file: file, // 파일 객체 저장
                }
              : row
          )
        );
      }
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
      // 기본 행은 삭제하지 않고 파일만 제거
      const isBasicRow = rows.some(row => row.id === rowId);
      if (isBasicRow) {
        setRows(prev =>
          prev.map(row =>
            row.id === rowId
              ? { ...row, fileName: undefined, file: undefined, fileId: undefined }
              : row
          )
        );
      } else {
        setAdditionalRows(prev => prev.filter(row => row.id !== rowId));
      }
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
        // 기본 행은 파일만 제거, 추가 행은 삭제
        const isBasicRow = rows.some(row => row.id === rowId);
        if (isBasicRow) {
          setRows(prev =>
            prev.map(row =>
              row.id === rowId
                ? { ...row, fileName: undefined, file: undefined, fileId: undefined }
                : row
            )
          );
        } else {
          setAdditionalRows(prev => prev.filter(row => row.id !== rowId));
        }
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
    setAdditionalRows(prev => [
      ...prev,
      { id: Date.now(), type: '선택', dataType: '', fileName: '' },
    ]);
  };

  /** 저장 API */
  const handleSave = async () => {
    if (!token) return;
    
    try {
      setLoading(true);
      
      // 먼저 파일들을 증빙보관소에 업로드
      const allRows = [...rows, ...additionalRows];
      const updatedRows = await Promise.all(
        allRows.map(async (row) => {
          if (row.file && !row.fileId) {
            // 파일이 있고 아직 업로드되지 않은 경우
            const formData = new FormData();
            formData.append('file', row.file);
            
            // 자료종류에 따라 API 타입 매핑
            let apiType = 'OTHER';
            switch (row.dataType) {
              case '재무상태표':
                apiType = 'BALANCE_SHEET';
                break;
              case '손익계산서':
                apiType = 'INCOME_STATEMENT';
                break;
              case '계정(잔액)명세서':
                apiType = 'ACCOUNT_STATEMENT';
                break;
              case '분개장':
                apiType = 'JOURNAL';
                break;
              default:
                apiType = 'OTHER';
                break;
            }
            
            const uploadRes = await fetch(`https://api.eosxai.com/api/previous-docs/upload?type=${apiType}`, {
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
                file: undefined, // 파일 객체 제거
              };
            }
          }
          return row;
        })
      );
      
      // 업데이트된 행들로 상태 업데이트
      const updatedBasicRows = updatedRows.filter(row => 
        ['재무상태표', '손익계산서', '계정(잔액)명세서', '분개장'].includes(row.dataType)
      );
      const updatedAdditionalRows = updatedRows.filter(row => 
        !['재무상태표', '손익계산서', '계정(잔액)명세서', '분개장'].includes(row.dataType)
      );
      setRows(updatedBasicRows);
      setAdditionalRows(updatedAdditionalRows);
      
      // 비즈니스 정보 저장
      const res = await fetch(`https://api.eosxai.com/api/business-info`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ settlementDocs: allRows }),
      });
      
      if (!res.ok) throw new Error('저장 실패');
      const result = await res.json();
      if (result.success) {
        alert('저장되었습니다!');
        // 저장 후 최신 데이터 다시 불러오기
        await fetchDocs();
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
            <button
              onClick={handleSave}
              disabled={!hasData || loading}
              className="px-4 py-2 bg-[#F3F3F3] text-[#1E1E1E] text-sm disabled:opacity-50"
            >
              {loading ? '저장 중...' : '저장하기'}
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-[#D9D9D9]">
          <table className="w-full text-sm text-[#757575]">
            <thead>
              <tr>
                <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium text-[#757575] w-[65px]">구분</th>
                <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium text-[#757575]">자료종류</th>
                <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium text-[#757575]" colSpan={2}>파일 업로드</th>
                <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium text-[#757575] w-[85px]">삭제</th>
              </tr>
            </thead>
            <tbody>
              {[...rows, ...additionalRows].map(row => (
                <tr key={row.id}>
                  <td className="p-3 border border-[#D9D9D9] text-center">
                    <span className={`${row.type === '필수' ? 'text-red-500 font-medium' : ''}`}>
                      {row.type}
                    </span>
                  </td>
                  <td className="p-3 border border-[#D9D9D9]">
                    {['재무상태표', '손익계산서', '계정(잔액)명세서', '분개장'].includes(row.dataType) ? (
                      row.dataType
                    ) : (
                      <input
                        className="w-full px-2 py-1 text-gray-700 focus:outline-none"
                        placeholder="자료종류 입력"
                        value={row.dataType}
                        onChange={e =>
                          setAdditionalRows(prev =>
                            prev.map(r =>
                              r.id === row.id ? { ...r, dataType: e.target.value } : r
                            )
                          )
                        }
                      />
                    )}
                  </td>
                  <td className="p-3 border border-[#D9D9D9]" colSpan={2}>
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
                      <label className="cursor-pointer text-gray-400 hover:text-gray-600 flex items-center gap-1">
                        <img src="/icons/upload.png" alt="업로드" className="w-4 h-4" />
                        <span>파일 업로드</span>
                        <input
                          type="file"
                          accept=".pdf,.xlsx,.xls,.csv,.jpg,.jpeg,.png"
                          className="hidden"
                          onChange={e =>
                            e.target.files &&
                            handleFileUpload(row.id, e.target.files[0])
                          }
                        />
                      </label>
                    )}
                  </td>
                  <td className="p-3 border border-[#D9D9D9] text-center">
                    <button
                      onClick={() => handleDelete(row.id, row.fileId)}
                      className="px-3 py-1 text-xs bg-[#F3F3F3] text-[#1E1E1E]"
                      disabled={loading}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              ))}

              {/* 기타자료 추가하기 버튼 행 */}
              <tr>
                <td colSpan={5} className="p-3 border border-[#D9D9D9] text-center">
                  <button
                    onClick={addRow}
                    className="text-sm text-[#767676] flex items-center justify-center gap-1 hover:text-[#1E1E1E] w-full"
                  >
                    <span className="w-4 h-4 rounded-full border border-[#767676] flex items-center justify-center text-xs">+</span>
                    기타자료 추가하기
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}