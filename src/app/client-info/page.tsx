'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { getPartnerDocs, extractPartnerDocs, savePartnerDocs, deletePartner } from '@/services/api';
import FileUploadBox from '@/components/FileUploadBox';
import ToastMessage from '@/components/ToastMessage';
import Image from 'next/image';
interface ClientRow {
  id: number;
  name: string; // 거래처명
  businessNumber: string; // 사업자등록번호
  mainItems?: string; // 주요품목
  relationship?: string; // 관계
  note?: string; // 비고
  serverId?: number; // 서버에 저장된 데이터인지 구분
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
  const [documentId, setDocumentId] = useState<string>('');
  const [toastMessage, setToastMessage] = useState('');
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
      if (data.success) {
        // 서버에서 받은 데이터만 표시 (로컬 데이터는 완전히 교체)
        if (Array.isArray(data.data) && data.data.length > 0) {
          // 서버에 실제 데이터가 있으면 그것만 표시
          setRows(
            data.data.map((client: ClientRow) => ({
              id: client.id,
              name: client.name || '',
              businessNumber: client.businessNumber || '',
              mainItems: client.mainItems || '',
              relationship: client.relationship || '',
              note: client.note || '',
              serverId: client.id, // 서버 ID 설정
            }))
          );
        } else {
          // 서버에 데이터가 없으면 빈 행으로 초기화 (로컬 데이터 완전 제거)
          setRows([
            { id: 1, name: '', businessNumber: '', mainItems: '', relationship: '', note: '' },
            { id: 2, name: '', businessNumber: '', mainItems: '', relationship: '', note: '' },
          ]);
        }
      } else {
        // API 호출 실패 시에도 빈 행으로 초기화
        setRows([
          { id: 1, name: '', businessNumber: '', mainItems: '', relationship: '', note: '' },
          { id: 2, name: '', businessNumber: '', mainItems: '', relationship: '', note: '' },
        ]);
      }
    } catch (err) {
      console.error('거래처 정보 조회 에러:', err);
      // 에러 발생 시에도 빈 행으로 초기화
      setRows([
        { id: 1, name: '', businessNumber: '', mainItems: '', relationship: '', note: '' },
        { id: 2, name: '', businessNumber: '', mainItems: '', relationship: '', note: '' },
      ]);
    } finally {
      setFirstLoad(false);
    }
  }, [token]);

  /** 거래처리스트 파일 업로드 */
  const handleFileUpload = async (file: File) => {
    if (!token) return;
    
    try {
      setLoading(true);
      const data = await extractPartnerDocs(file, token) as { success: boolean; documentId?: string; items: ClientRow[] };
      if (data.success && data.items) {
        // documentId 저장
        if (data.documentId) {
          setDocumentId(data.documentId);
        }
        
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
    if (!token) return;
    
    try {
      setLoading(true);
      
      // 유효한 데이터만 필터링
      const validPartners = rows
        .filter(row => row.name.trim())
        .map(row => ({
          name: row.name.trim(),
          businessNumber: row.businessNumber.trim(),
          mainItems: row.mainItems?.trim(),
          relationship: row.relationship?.trim(),
          note: row.note?.trim(),
        }));
      
      const data = await savePartnerDocs({
        documentId,
        partners: validPartners
      }, token);
      
      if (data.success) {
        setToastMessage('거래처 정보가 저장되었습니다!');
        setShowToast(true);
        // documentId 초기화
        setDocumentId('');
        // 저장 후 리스팅 함수 다시 호출하여 서버 데이터로 업데이트
        fetchClients();
      } else {
        alert('저장 중 문제가 발생했습니다.');
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
        await deletePartner(row.serverId.toString(), token);
        setRows(prev => prev.filter(r => r.id !== id));
        setToastMessage('거래처 정보가 삭제되었습니다!');
        setShowToast(true);
      } catch (err) {
        console.error('삭제 에러:', err);
        alert('삭제 중 문제가 발생했습니다.');
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
    <div className="flex flex-col items-start p-4 gap-4">
      {/* content */}
      <div className="flex flex-col items-start gap-4 w-full">
        {/* title */}
        <div className="flex flex-row justify-between items-end gap-4 w-full">
          {/* Frame 56 */}
          <div className="flex flex-col items-start">
            {/* Menu Heading */}
            <div className="flex flex-col items-start py-[6px_0px_2px] rounded-lg">
              {/* Text Strong */}
              <div className="flex flex-row items-start">
                <h2 className="font-semibold text-[15px] leading-[140%] text-[#1E1E1E]">
                  거래처 정보
                </h2>
              </div>
            </div>
            <p className="text-[12px] leading-[140%] text-[#767676]">
              파일을 업로드해서 자동으로 입력하거나 직접 입력하고 정보를 저장하세요.
            </p>
          </div>

          {/* title - buttons type */}
          <div className="flex flex-row justify-end items-center gap-2">
            {/* Button medium - 파일 업로드 */}
            <div className="flex flex-row items-start">
              <button
                className="flex flex-row justify-center items-center px-3 py-2 gap-2 bg-[#F3F3F3] hover:bg-[#E0E0E0] text-[12px] leading-[100%] text-[#1E1E1E]"
                onClick={() => document.getElementById('clientFile')?.click()}
                disabled={loading}
              >
                파일 업로드
              </button>
            </div>

            {/* Button medium - 저장하기 */}
            <div className="flex flex-row items-start">
              <button
                className={`flex flex-row justify-center items-center px-3 py-2 gap-2 text-[12px] leading-[100%] ${
                  hasData && !loading
                    ? 'bg-[#F3F3F3] hover:bg-[#E0E0E0] text-[#1E1E1E]'
                    : 'bg-[#E6E6E6] text-[#B3B3B3]'
                }`}
                onClick={handleSave}
                disabled={!hasData || loading}
              >
                저장하기
              </button>
            </div>
          </div>
        </div>


        {/* Upload */}
        <div className="relative flex flex-col justify-center items-center p-6 gap-3 w-full min-w-[400px] bg-white border border-dashed border-[#D9D9D9]">
          <div className="flex items-center justify-center">
            <Image src="/icons/upload.png" alt="upload" width={24} height={24} />
          </div>
          <div className="flex flex-col items-center p-0 gap-0.5">
            <span className="text-xs leading-[140%] text-center text-[#303030]">
              파일을 선택하거나 여기로 드래그하세요.
            </span>
            <span className="text-xs leading-[140%] text-center text-[#767676]">
              (PDF, XLS, XLSX, DOC, DOCX, JPG, PNG, GIF 파일을 지원합니다)
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
        <div className="w-full border border-[#D9D9D9]">
          {/* Header Row */}
          <div className="flex w-full h-8">
            <div className="flex items-center justify-center w-[56px] bg-[#F5F5F5] border-r border-[#D9D9D9]">
              <span className="text-[12px] font-medium text-[#757575]">번호</span>
            </div>
            <div className="flex items-center justify-center min-w-[100px] w-[150px] bg-[#F5F5F5] border-r border-[#D9D9D9]">
              <span className="text-[12px] font-medium text-[#757575]">거래처명</span>
            </div>
            <div className="flex items-center justify-center min-w-[150px] w-[200px] bg-[#F5F5F5] border-r border-[#D9D9D9]">
              <span className="text-[12px] font-medium text-[#757575]">사업자등록번호(주민등록번호)</span>
            </div>
            <div className="flex items-center justify-center min-w-[100px] w-[150px] bg-[#F5F5F5] border-r border-[#D9D9D9]">
              <span className="text-[12px] font-medium text-[#757575]">주요거래품목</span>
            </div>
            <div className="flex items-center justify-center min-w-[100px] w-[150px] bg-[#F5F5F5] border-r border-[#D9D9D9]">
              <span className="text-[12px] font-medium text-[#757575]">우리회사와의 관계</span>
            </div>
            <div className="flex items-center justify-center min-w-[162px] flex-1 bg-[#F5F5F5] border-r border-[#D9D9D9]">
              <span className="text-[12px] font-medium text-[#757575]">기타 거래처 이해를 위한 참고사항</span>
            </div>
            <div className="flex items-center justify-center w-[64px] bg-[#F5F5F5]">
              <span className="text-[12px] font-medium text-[#757575]">삭제</span>
            </div>
          </div>

          {/* Data Rows */}
          {rows.map((row, idx) => (
            <div key={row.id} className="flex w-full h-8 border-t border-[#D9D9D9]">
              <div className="flex items-center justify-center w-[56px] bg-white border-r border-[#D9D9D9]">
                <span className="text-[12px] text-[#757575]">{idx + 1}</span>
              </div>
              <div className="flex items-center px-2 min-w-[100px] w-[150px] bg-white border-r border-[#D9D9D9]">
                <input
                  className="w-full text-[12px] text-[#B3B3B3] focus:outline-none bg-transparent"
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
              </div>
              <div className="flex items-center px-2 min-w-[150px] w-[200px] bg-white border-r border-[#D9D9D9]">
                <input
                  className="w-full text-[12px] text-[#B3B3B3] focus:outline-none bg-transparent"
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
              </div>
              <div className="flex items-center px-2 min-w-[100px] w-[150px] bg-white border-r border-[#D9D9D9]">
                <input
                  className="w-full text-[12px] text-[#B3B3B3] focus:outline-none bg-transparent"
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
              </div>
              <div className="flex items-center px-2 min-w-[100px] w-[150px] bg-white border-r border-[#D9D9D9]">
                <select
                  className="w-full text-[12px] text-[#B3B3B3] focus:outline-none bg-transparent"
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
                >
                  <option value="">선택하기</option>
                  <option value="매출처">매출처</option>
                  <option value="매입처">매입처</option>
                  <option value="주주">주주</option>
                  <option value="직원">직원</option>
                  <option value="투자자">투자자</option>
                  <option value="거래은행">거래은행</option>
                  <option value="관공서">관공서</option>
                  <option value="기타">기타</option>
                </select>
              </div>
              <div className="flex items-center px-2 min-w-[162px] flex-1 bg-white border-r border-[#D9D9D9]">
                <input
                  className="w-full text-[12px] text-[#B3B3B3] focus:outline-none bg-transparent"
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
              </div>
              <div className="flex items-center justify-center w-[64px] bg-white">
                <button
                  className="flex items-center justify-center px-2 py-1 text-[12px] text-[#1E1E1E] bg-[#F3F3F3] hover:bg-[#E0E0E0]"
                  onClick={() => handleDelete(row.id)}
                  disabled={loading}
                >
                  삭제
                </button>
              </div>
            </div>
          ))}

          {/* 추가하기 Row */}
          <div className="flex w-full p-3 border-t border-[#D9D9D9]">
            <div className="flex items-center justify-center w-full bg-white cursor-pointer" onClick={addRow}>
              <button
                className="flex items-center gap-1 text-[12px] text-[#757575]"
              >
                <Image src="/icons/plus_circle.svg" alt="추가" width={16} height={16} />
                <span className="text-xs text-[#757575]">추가하기</span>
              </button>
            </div>
          </div>
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