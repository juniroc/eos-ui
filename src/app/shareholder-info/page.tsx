'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { getShareholderDocs, extractShareholderDocs } from '@/services/api';
import FileUploadBox from '@/components/FileUploadBox';
import Image from 'next/image';
import ToastMessage from '@/components/ToastMessage';

interface ShareholderRow {
  id: number;
  name: string; // 성명
  residentNumber: string; // 주민등록번호
  isRelatedParty?: string; // 특수관계인 여부 ('YES'|'NO')
  shares?: string; // 주식수
  sharePercentage?: string; // 지분율
  acquisitionDate?: string; // 주식인수일자
  note?: string; // 비고
  serverId?: number; // 서버에 저장된 데이터인지 구분
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
      sharePercentage: '',
      acquisitionDate: '',
      note: '',
    },
    {
      id: 2,
      name: '',
      residentNumber: '',
      isRelatedParty: '',
      shares: '',
      sharePercentage: '',
      acquisitionDate: '',
      note: '',
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [, setFirstLoad] = useState(true);
  const [documentId, setDocumentId] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string>('');
  const [showToast, setShowToast] = useState(false);

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
      r.sharePercentage?.trim() ||
      r.acquisitionDate?.trim() ||
      r.note?.trim()
  );

  /** 주주 목록 불러오기 */
  const fetchShareholders = useCallback(async () => {
    if (!token) return;
    
    try {
      const data = await getShareholderDocs(token) as { success: boolean; data: ShareholderRow[] };
      if (data.success) {
        // 서버에서 받은 데이터만 표시 (로컬 데이터는 완전히 교체)
        if (Array.isArray(data.data) && data.data.length > 0) {
          setRows(
            data.data.map((s: ShareholderRow) => ({
              id: s.id,
              name: s.name || '',
              residentNumber: s.residentNumber || '',
              isRelatedParty: s.isRelatedParty ? 'YES' : 'NO',
              shares: s.shares || '',
              sharePercentage: s.sharePercentage || '',
              acquisitionDate: s.acquisitionDate || '',
              note: s.note || '',
              serverId: s.id, // 서버 ID 설정
            }))
          );
        } else {
          // 서버에 데이터가 없으면 빈 행으로 초기화 (로컬 데이터 완전 제거)
          setRows([
            { id: 1, name: '', residentNumber: '', isRelatedParty: '', shares: '', sharePercentage: '', acquisitionDate: '', note: '' },
            { id: 2, name: '', residentNumber: '', isRelatedParty: '', shares: '', sharePercentage: '', acquisitionDate: '', note: '' },
          ]);
        }
      } else {
        // API 호출 실패 시에도 빈 행으로 초기화
        setRows([
          { id: 1, name: '', residentNumber: '', isRelatedParty: '', shares: '', acquisitionDate: '', note: '' },
          { id: 2, name: '', residentNumber: '', isRelatedParty: '', shares: '', acquisitionDate: '', note: '' },
        ]);
      }
    } catch (err) {
      console.error('주주 정보 조회 에러:', err);
      // 에러 발생 시에도 빈 행으로 초기화
      setRows([
        { id: 1, name: '', residentNumber: '', isRelatedParty: '', shares: '', acquisitionDate: '', note: '' },
        { id: 2, name: '', residentNumber: '', isRelatedParty: '', shares: '', acquisitionDate: '', note: '' },
      ]);
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
          sharePercentage: item.sharePercentage || '',
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
        setToastMessage('주주 정보가 저장되었습니다!');
        setShowToast(true);
        // documentId 초기화
        setDocumentId('');
        // 저장 후 리스팅 함수 다시 호출하여 서버 데이터로 업데이트
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
    const row = rows.find(r => r.id === id);
    if (!row) return;

    // 서버에 저장된 데이터인지 확인 (serverId가 있으면 서버에 저장된 것)
    if (row.serverId) {
      // 서버에 저장된 데이터는 API 호출로 삭제
      if (!token) return;
      
      try {
        setLoading(true);
        const res = await fetch(`https://api.eosxai.com/api/shareholders/${row.serverId}`, {
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
        
        // 서버에서 삭제 성공하면 로컬에서도 제거
        setRows(prev => prev.filter(r => r.id !== id));
        setToastMessage('주주 정보가 삭제되었습니다!');
        setShowToast(true);
      } catch (err) {
        console.error('삭제 에러:', err);
        alert('삭제 실패');
      } finally {
        setLoading(false);
      }
    } else {
      // 로컬 데이터는 바로 제거
      setRows(prev => prev.filter(r => r.id !== id));
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
        sharePercentage: '',
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
    <div className="p-4">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end p-0 gap-4 w-full min-h-[46px] mb-4">
          {/* Title Group */}
          <div className="flex flex-col items-start p-0 w-full sm:w-[346px] h-[46px]">
            {/* Menu Heading */}
            <div className="flex flex-col items-start py-[6px] px-0 pb-[2px] w-64 h-[29px] rounded-lg">
              <div className="flex flex-row items-start p-0 w-14 h-[21px]">
                <h2 className="w-14 h-[21px] font-['Pretendard'] font-semibold text-[15px] leading-[140%] text-[#1E1E1E]">
                  주주 정보
                </h2>
              </div>
            </div>
            <p className="w-full sm:w-[346px] h-[17px] font-['Pretendard'] font-normal text-xs leading-[140%] text-left sm:text-center text-[#767676]">
              파일을 업로드해서 자동으로 입력하거나 직접 입력하고 정보를 저장하세요.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-row justify-start sm:justify-end items-center p-0 gap-2 w-full sm:w-[153px] h-7">
            {/* 파일 업로드 버튼 */}
            <div className="flex flex-row items-start p-0 w-[79px] h-7">
              <button
                onClick={() => document.getElementById('shareholderFile')?.click()}
                disabled={loading}
                className="flex flex-row justify-center items-center px-3 py-2 gap-2 w-[79px] h-7 bg-[#F3F3F3] font-['Pretendard'] font-medium text-xs leading-[100%] text-[#1E1E1E] disabled:opacity-50"
              >
                파일 업로드
              </button>
            </div>
            
            {/* 저장하기 버튼 */}
            <div className="flex flex-row items-start p-0 w-[66px] h-7">
              <button
                onClick={handleSave}
                disabled={!hasData || loading}
                className={`flex flex-row justify-center items-center px-3 py-2 gap-2 w-[66px] h-7 font-['Pretendard'] font-medium text-xs leading-[100%] ${
                  !hasData || loading 
                    ? 'bg-[#E6E6E6] text-[#B3B3B3]' 
                    : 'bg-[#F3F3F3] text-[#1E1E1E]'
                }`}
              >
                저장하기
              </button>
            </div>
          </div>
        </div>

        {/* Upload */}
        <div className="relative flex flex-col justify-center items-center p-6 gap-3 w-full min-w-[400px] bg-white border border-dashed border-[#D9D9D9] mb-4">
          <div className="flex items-center justify-center">
            <Image src="/icons/upload.svg" alt="upload" width={24} height={24} />
          </div>
          <div className="flex flex-col items-center p-0 gap-0.5">
            <span className="text-xs leading-[140%] text-center text-[#303030]">
              파일을 선택하거나 드래그하여 파일을 편하게 업로드하세요.
            </span>
            <span className="text-xs leading-[140%] text-center text-[#767676]">
              (JPG, PNG, PDF, DOC, DOCX 파일만 지원됩니다.)
            </span>
          </div>
          <FileUploadBox
            id="clientFile"
            onFileUpload={handleFileUpload}
            loading={loading}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>

        {/* 테이블 */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border border-[#D9D9D9] text-xs text-[#757575] text-center" style={{tableLayout: 'fixed'}}>
          <thead>
            <tr>
              <td className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium h-8" style={{width: '40px'}}>
                번호
              </td>
              <td className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium h-8" style={{width: 'calc((100% - 110px) / 7)'}}>주주명</td>
              <td className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium h-8" style={{width: 'calc((100% - 110px) / 7)'}}>
                주민등록번호(사업자등록번호)
              </td>
              <td className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium h-8" style={{width: 'calc((100% - 110px) / 7)'}}>
                특수관계자 여부
              </td>
              <td className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium h-8" style={{width: 'calc((100% - 110px) / 7)'}}>
                주식수
              </td>
              <td className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium h-8" style={{width: 'calc((100% - 110px) / 7)'}}>
                지분율(%)
              </td>
              <td className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium h-8" style={{width: 'calc((100% - 110px) / 7)'}}>
                주식인수일자
              </td>
              <td className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium h-8" style={{width: 'calc((100% - 110px) / 7)'}}>기타사항</td>
              <td className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium h-8" style={{width: '70px'}}>
                삭제
              </td>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={row.id} className="h-8">
                <td className="p-2 border border-[#D9D9D9] text-center h-8" style={{width: '40px'}}>
                  {idx + 1}
                </td>
                <td className="p-2 border border-[#D9D9D9] h-8" style={{width: 'calc((100% - 110px) / 7)'}}>
                  <input
                    className="w-full h-full focus:outline-none text-[#B3B3B3] text-xs"
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
                <td className="p-2 border border-[#D9D9D9] h-8" style={{width: 'calc((100% - 110px) / 7)'}}>
                  <input
                    className="w-full h-full focus:outline-none text-[#B3B3B3] text-xs"
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
                <td className="p-2 border border-[#D9D9D9] h-8" style={{width: 'calc((100% - 110px) / 7)'}}>
                  <select
                    className="w-full h-full focus:outline-none text-[#B3B3B3] text-xs"
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
                <td className="p-2 border border-[#D9D9D9] h-8" style={{width: 'calc((100% - 110px) / 7)'}}>
                  <div className="flex items-center w-full h-full">
                    <input
                      className="flex-1 h-full focus:outline-none text-[#B3B3B3] text-xs"
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
                    <span className="text-gray-400 text-xs ml-2">주</span>
                  </div>
                </td>
                <td className="p-2 border border-[#D9D9D9] h-8" style={{width: 'calc((100% - 110px) / 7)'}}>
                  <div className="flex items-center w-full h-full">
                    <input
                      className="flex-1 h-full focus:outline-none text-[#B3B3B3] text-xs"
                      placeholder="입력하기"
                      value={row.sharePercentage || ''}
                      onChange={e =>
                        setRows(prev =>
                          prev.map(r =>
                            r.id === row.id ? { ...r, sharePercentage: e.target.value } : r
                          )
                        )
                      }
                    />
                    <span className="text-gray-400 text-xs ml-2">%</span>
                  </div>
                </td>
                <td className="p-2 border border-[#D9D9D9] h-8" style={{width: 'calc((100% - 110px) / 7)'}}>
                  <input
                    className="w-full h-full focus:outline-none text-[#B3B3B3] text-xs"
                    placeholder="입력하기"
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
                <td className="p-2 border border-[#D9D9D9] h-8" style={{width: 'calc((100% - 110px) / 7)'}}>
                  <input
                    className="w-full h-full focus:outline-none text-[#B3B3B3] text-xs"
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
                <td className="p-2 border border-[#D9D9D9] text-center h-8" style={{width: '70px'}}>
                  <button
                    onClick={() => handleDelete(row.id)}
                    className="h-full px-2 text-xs"
                    style={{
                      border: 'none',
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
            <tr className="h-8">
              <td
                colSpan={9}
                className="p-2 border border-[#D9D9D9] text-center h-8"
              >
                <button
                  onClick={addRow}
                  className="text-sm text-[#767676] hover:text-[#1E1E1E] h-full"
                >
                  + 추가하기
                </button>
              </td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>

      <ToastMessage 
        message={toastMessage}
        isVisible={showToast}
        onHide={() => setShowToast(false)}
      />
    </div>
  );
}