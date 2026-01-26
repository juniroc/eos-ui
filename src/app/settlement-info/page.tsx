'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';
import ToastMessage from '@/components/ToastMessage';

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
  const [showToast, setShowToast] = useState(false);

  // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, router]);

  /** 저장 버튼 활성화 여부 → 필수 항목들이 모두 채워져야 true */
  const hasData = rows
    .filter(row => row.type === '필수')
    .every(row => row.fileName && row.fileName.trim() !== '');

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
            dataType: doc.originalName.split('.').slice(0, -1).join('.'),
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
        setShowToast(true);
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
    <div 
      className="flex flex-col items-start p-4 gap-4"
      style={{ maxWidth: '840px', margin: '0 auto' }}
    >
      {/* Title Section */}
      <div className="flex flex-col items-start gap-4 w-full min-w-[520px]">
        <div className="flex flex-row justify-between items-end gap-4 w-full">
          {/* Left side - Title */}
          <div className="flex flex-col items-start">
            <div className="flex flex-col items-start pb-0.5 pt-1.5 rounded-lg">
              <div className="flex flex-row items-start">
                <h2 
                  className="text-[#1E1E1E] font-semibold text-[15px] leading-[140%]"
                  style={{ fontFamily: 'Pretendard' }}
                >
                  전기결산 정보
                </h2>
              </div>
            </div>
            <p 
              className="text-[#767676] text-[12px] leading-[140%] text-center"
              style={{ fontFamily: 'Pretendard' }}
            >
              필요한 내용을 입력하고 정보를 저장하세요.
            </p>
          </div>

          {/* Right side - Buttons */}
          <div className="flex flex-row justify-end items-center gap-2">
            <button
              onClick={handleSave}
              disabled={!hasData || loading}
              className="flex flex-row justify-center items-center px-3 py-2 gap-2 bg-[#E6E6E6] disabled:bg-[#E6E6E6] cursor-pointer disabled:cursor-not-allowed"
              style={{ fontFamily: 'Pretendard' }}
            >
              <span 
                className={`text-[12px] leading-[100%] font-medium ${
                  !hasData || loading ? 'text-[#B3B3B3]' : 'text-[#1E1E1E]'
                }`}
              >
                {loading ? '저장 중...' : '저장하기'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="flex flex-col items-start w-full border border-[#D9D9D9]">
        {/* Header Row */}
        <div className="flex flex-row items-center w-full">
          {/* 구분 Column */}
          <div className="flex flex-col justify-center items-start w-[45px]">
            <div className="flex flex-row justify-center items-center p-2 gap-2 w-full h-8 bg-[#F5F5F5] border-r border-[#D9D9D9]">
              <span 
                className="text-[#757575] text-[12px] leading-[100%] font-medium"
                style={{ fontFamily: 'Pretendard' }}
              >
                구분
              </span>
            </div>
          </div>

          {/* 자료종류 Column */}
          <div className="flex flex-col justify-center items-start flex-1 min-w-[120px]">
            <div className="flex flex-row justify-center items-center p-2 gap-2 w-full h-8 bg-[#F5F5F5] border-r border-[#D9D9D9]">
              <span 
                className="text-[#757575] text-[12px] leading-[100%] font-medium"
                style={{ fontFamily: 'Pretendard' }}
              >
                자료종류
              </span>
            </div>
          </div>

          {/* 파일 업로드 Column */}
          <div className="flex flex-col justify-center items-start flex-1 min-w-[120px]">
            <div className="flex flex-row justify-center items-center p-2 gap-2 w-full h-8 bg-[#F5F5F5] border-r border-[#D9D9D9]">
              <span 
                className="text-[#757575] text-[12px] leading-[100%] font-medium"
                style={{ fontFamily: 'Pretendard' }}
              >
                파일 업로드
              </span>
            </div>
          </div>

          {/* 삭제 Column */}
          <div className="flex flex-col justify-center items-start w-[70px]">
            <div className="flex flex-row justify-center items-center p-2 gap-2 w-full h-8 bg-[#F5F5F5]">
              <span 
                className="text-[#757575] text-[12px] leading-[100%] font-medium"
                style={{ fontFamily: 'Pretendard' }}
              >
                삭제
              </span>
            </div>
          </div>
        </div>

        {/* Data Rows */}
        {[...rows, ...additionalRows].map(row => (
          <div key={row.id} className="flex flex-row items-center w-full border-t border-[#D9D9D9]">
            {/* 구분 Cell */}
            <div className="flex flex-col justify-center items-start w-[45px]">
              <div className="flex flex-col justify-center items-center py-2 w-full h-8 bg-white border-r border-[#D9D9D9]">
                <span 
                  className={`text-[12px] leading-[100%] font-medium ${
                    row.type === '필수' ? 'text-[#EC221F]' : 'text-[#757575]'
                  }`}
                  style={{ fontFamily: 'Pretendard' }}
                >
                  {row.type}
                </span>
              </div>
            </div>

            {/* 자료종류 Cell */}
            <div className="flex flex-col justify-center items-start flex-1 min-w-[120px]">
              <div className="flex flex-row items-center p-2 w-full h-8 bg-white border-r border-[#D9D9D9]">
                {['재무상태표', '손익계산서', '계정(잔액)명세서', '분개장'].includes(row.dataType) ? (
                  <span 
                    className="text-[#757575] text-[12px] leading-[100%] font-medium flex-1"
                    style={{ fontFamily: 'Pretendard' }}
                  >
                    {row.dataType}
                  </span>
                ) : (
                  <input
                    className="text-[#757575] text-[12px] leading-[100%] font-medium flex-1 bg-transparent border-none outline-none"
                    style={{ fontFamily: 'Pretendard' }}
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
              </div>
            </div>

            {/* 파일 업로드 Cell */}
            <div className="flex flex-col justify-center items-start flex-1 min-w-[120px]">
              <div className="flex flex-row items-center p-2 gap-2 w-full h-8 bg-white border-r border-[#D9D9D9]">
                {row.fileName ? (
                  <>
                    <span 
                      className="text-[#757575] text-[12px] leading-[100%] font-medium flex-1"
                      style={{ fontFamily: 'Pretendard' }}
                    >
                      {row.fileName}
                    </span>
                    <label className="cursor-pointer text-[#B3B3B3] hover:text-[#757575] text-[10px]">
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
                  </>
                ) : (
                  <label className="cursor-pointer flex flex-row items-center gap-2 w-full">
                    <Image src="/icons/upload_light_gray.svg" alt="업로드" width={16} height={16} />
                    <span 
                      className="text-[#B3B3B3] text-[12px] leading-[100%] font-medium flex-1"
                      style={{ fontFamily: 'Pretendard' }}
                    >
                      파일 업로드
                    </span>
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
              </div>
            </div>

            {/* 삭제 Cell */}
            <div className="flex flex-col justify-center items-start w-[70px]">
              <div className="flex flex-col justify-center items-center w-full h-8 bg-white">
                <button
                  onClick={() => handleDelete(row.id, row.fileId)}
                  className="flex flex-row justify-center items-center px-1.5 gap-2 bg-[#F3F3F3] cursor-pointer disabled:cursor-not-allowed"
                  disabled={loading}
                  style={{ height: '23px' }}
                >
                  <span 
                    className="text-[#1E1E1E] text-[11px] leading-[100%] font-medium"
                    style={{ fontFamily: 'Pretendard' }}
                  >
                    삭제
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* 기타자료 추가하기 Row */}
        <div className="flex flex-row items-center w-full min-w-[200px] border-t border-[#D9D9D9]">
          <button
            onClick={addRow}
            className="flex flex-row justify-center items-center px-3 py-3 gap-1 w-full bg-white cursor-pointer"
            style={{ height: '40px' }}
          >
            <Image src="/icons/plus_circle.svg" alt="추가" width={16} height={16} />
            <span 
              className="text-[#757575] text-[12px] leading-[100%] font-medium text-center"
              style={{ fontFamily: 'Pretendard' }}
            >
              기타자료 추가하기
            </span>
          </button>
        </div>
      </div>

      <ToastMessage 
        message="전기결산 정보가 저장되었습니다!" 
        isVisible={showToast} 
        onHide={() => setShowToast(false)}
      />
    </div>
  );
}