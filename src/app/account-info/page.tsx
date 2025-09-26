'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import { useAuth } from '@/contexts/AuthContext';
import { getBankAccountDocs, extractBankAccountDocs, saveBankAccountDocs } from '@/services/api';
import FileUploadBox from '@/components/FileUploadBox';
import ToastMessage from '@/components/ToastMessage';
import Image from 'next/image';

interface AccountRow {
  id: number;
  bankName: string;
  accountNumber: string;
  withdrawalFee?: string;
  purpose?: string;
  note?: string;
  serverId?: number; // 서버에 저장된 데이터인지 구분
}

export default function AccountInfoPage() {
  const router = useRouter();
  const { token, isAuthenticated, loading: authLoading } = useAuth();
  const [rows, setRows] = useState<AccountRow[]>([
    { id: 1, bankName: '', accountNumber: '' },
    { id: 2, bankName: '', accountNumber: '' },
  ]);
  const [loading, setLoading] = useState(false);
  const [, setFirstLoad] = useState(true);
  const [documentId, setDocumentId] = useState<string>('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, router]);

  /** 저장 버튼 활성화 여부 → 데이터가 하나라도 있으면 true */
  const hasData = rows.some(
    r =>
      r.bankName.trim() ||
      r.accountNumber.trim() ||
      r.withdrawalFee?.trim() ||
      r.purpose?.trim() ||
      r.note?.trim()
  );

  /** 통장 계좌 불러오기 */
  const fetchAccounts = useCallback(async () => {
    if (!token) return;
    
    try {
      const data = await getBankAccountDocs(token) as { success: boolean; data: AccountRow[] };
      if (data.success) {
        // 서버에서 받은 데이터만 표시 (로컬 데이터는 완전히 교체)
        if (data.data && data.data.length > 0) {
          // 실제 데이터만 필터링하여 설정
          const validData = data.data.filter((acc: AccountRow) => 
            acc.bankName?.trim() || acc.accountNumber?.trim()
          );
          
          if (validData.length > 0) {
            setRows(
              validData.map((acc: AccountRow) => ({
                id: acc.id,
                bankName: acc.bankName || '',
                accountNumber: acc.accountNumber || '',
                withdrawalFee: acc.withdrawalFee || '',
                purpose: acc.purpose || '',
                note: acc.note || '',
                serverId: acc.id, // 서버 ID 설정
              }))
            );
          } else {
            // 유효한 데이터가 없으면 빈 행으로 초기화 (로컬 데이터 완전 제거)
            setRows([
              { id: 1, bankName: '', accountNumber: '', withdrawalFee: '', purpose: '', note: '' },
              { id: 2, bankName: '', accountNumber: '', withdrawalFee: '', purpose: '', note: '' },
            ]);
          }
        } else {
          // 서버에 데이터가 없으면 빈 행으로 초기화 (로컬 데이터 완전 제거)
          setRows([
            { id: 1, bankName: '', accountNumber: '', withdrawalFee: '', purpose: '', note: '' },
            { id: 2, bankName: '', accountNumber: '', withdrawalFee: '', purpose: '', note: '' },
          ]);
        }
      } else {
        // API 호출 실패 시에도 빈 행으로 초기화
        setRows([
          { id: 1, bankName: '', accountNumber: '', withdrawalFee: '', purpose: '', note: '' },
          { id: 2, bankName: '', accountNumber: '', withdrawalFee: '', purpose: '', note: '' },
        ]);
      }
    } catch (err) {
      console.error('통장 정보 조회 에러:', err);
      // 에러 발생 시에도 빈 행으로 초기화
      setRows([
        { id: 1, bankName: '', accountNumber: '', withdrawalFee: '', purpose: '', note: '' },
        { id: 2, bankName: '', accountNumber: '', withdrawalFee: '', purpose: '', note: '' },
      ]);
    } finally {
      setFirstLoad(false);
    }
  }, [token]);

/** 파일 업로드 → 추출 */
const handleFileUpload = async (file: File) => {
  if (!token) return;
  
  try {
    setLoading(true);
    const response = await extractBankAccountDocs(file, token) as { 
      success: boolean; 
      documentId?: string; 
      items: AccountRow[]; // data 대신 items 사용
    };
    
    if (response.success) {
      // documentId 저장
      if (response.documentId) {
        setDocumentId(response.documentId);
      }
      
      const extracted = response.items.map((item: AccountRow) => ({
        id: Date.now() + Math.random(),
        bankName: item.bankName || '',
        accountNumber: item.accountNumber || '',
        withdrawalFee: item.withdrawalFee || '',
        purpose: item.purpose || '',
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
      const validAccounts = rows
        .filter(row => row.bankName.trim() || row.accountNumber.trim())
        .map(row => ({
          bankName: row.bankName.trim(),
          accountNumber: row.accountNumber.trim(),
          withdrawalFee: row.withdrawalFee?.trim(),
          purpose: row.purpose?.trim(),
          note: row.note?.trim(),
        }));
      
      const data = await saveBankAccountDocs({
        documentId: documentId,
        accounts: validAccounts,
      }, token);
      
      if (data.success) {
        setToastMessage('통장 정보가 저장되었습니다!');
        setShowToast(true);
        // documentId 초기화
        setDocumentId('');
        // 저장 후 리스팅 함수 다시 호출하여 서버 데이터로 업데이트
        fetchAccounts();
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
        const res = await fetch(`https://api.eosxai.com/api/bank-accounts/${row.serverId}`, {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${token}` },
        });
        
        if (!res.ok) {
          throw new Error('삭제 실패');
        }
        
        const data = await res.json();
        console.log('삭제 응답:', data);
        
        // 서버에서 삭제 성공하면 로컬에서도 제거
        setRows(prev => prev.filter(r => r.id !== id));
        setToastMessage('통장 정보가 삭제되었습니다!');
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
      { id: Date.now(), bankName: '', accountNumber: '' },
    ]);
  };

  useEffect(() => {
    fetchAccounts();
  }, [fetchAccounts]);

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
    <div className="flex flex-col items-center p-0 bg-white min-h-screen">
      <div className="flex flex-col items-center p-0 w-full">
        {/* Content */}
        <div className="flex flex-col items-start p-4 gap-4 w-full">
          {/* Title */}
          <div className="flex flex-col items-start p-0 gap-4 w-full min-w-[520px]">
            {/* Title Header */}
            <div className="flex flex-row justify-between items-end p-0 gap-4 w-full">
              <div className="flex flex-col items-start p-0">
                <div className="flex flex-col items-start px-0 py-1.5 rounded-lg">
                  <div className="flex flex-row items-start p-0">
                    <span className="text-[15px] leading-[140%] text-[#1E1E1E] font-semibold">
                      통장 정보
                    </span>
                  </div>
                </div>
                <span className="text-xs leading-[140%] text-center text-[#767676]">
                  파일을 업로드해서 자동으로 입력하거나 직접 입력하고 정보를 저장하세요.
                </span>
              </div>
              <div className="flex flex-row justify-end items-center p-0 gap-2">
                <Button
                  variant="neutral"
                  size="small"
                  onClick={() => document.getElementById('accountFile')?.click()}
                  disabled={loading}
                  loading={loading}
                  className="flex flex-row justify-center items-center px-3 py-2 gap-2 bg-[#F3F3F3] text-xs leading-[100%] text-[#1E1E1E]"
                >
                  파일 업로드
                </Button>
                <Button
                  variant="neutral"
                  size="small"
                  onClick={handleSave}
                  disabled={!hasData || loading}
                  loading={loading}
                  className={`flex flex-row justify-center items-center px-3 py-2 gap-2 text-xs leading-[100%] ${
                    !hasData || loading 
                      ? 'bg-[#E6E6E6] text-[#B3B3B3]' 
                      : 'bg-[#F3F3F3] text-[#1E1E1E]'
                  }`}
                >
                  저장하기
                </Button>
              </div>
            </div>

            {/* Upload */}
            <div className="relative flex flex-col justify-center items-center p-6 gap-3 w-full min-w-[400px] bg-white border border-dashed border-[#D9D9D9]">
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
                id="accountFile"
                onFileUpload={handleFileUpload}
                loading={loading}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
          </div>

          {/* 테이블 형태의 폼 */}
          <div className="flex flex-col items-start p-0 w-full">
            {/* 헤더 행 */}
            <div className="flex flex-row items-start p-0 w-full h-8">
              <div className="flex flex-row items-center justify-center p-2 w-16 h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-r-0">
                <span className="text-xs leading-[100%] text-[#757575]">번호</span>
              </div>
              <div className="flex flex-row items-center justify-center p-2 flex-1 h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-r-0">
                <span className="text-xs leading-[100%] text-[#757575]">은행명</span>
              </div>
              <div className="flex flex-row items-center justify-center p-2 flex-1 h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-r-0">
                <span className="text-xs leading-[100%] text-[#757575]">계좌번호</span>
              </div>
              <div className="flex flex-row items-center justify-center p-2 flex-1 h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-r-0">
                <span className="text-xs leading-[100%] text-[#757575]">출금수수료(원)</span>
              </div>
              <div className="flex flex-row items-center justify-center p-2 flex-1 h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-r-0">
                <span className="text-xs leading-[100%] text-[#757575]">용도</span>
              </div>
              <div className="flex flex-row items-center justify-center p-2 flex-1 h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-r-0">
                <span className="text-xs leading-[100%] text-[#757575]">특이사항</span>
              </div>
              <div className="flex flex-row items-center justify-center p-2 w-20 h-8 bg-[#F5F5F5] border border-[#D9D9D9]">
                <span className="text-xs leading-[100%] text-[#757575]">삭제</span>
              </div>
            </div>

            {/* 데이터 행들 */}
            {rows.map((row, idx) => (
              <div key={row.id} className="flex flex-row items-start p-0 w-full h-8">
                <div className="flex flex-row items-center justify-center p-2 w-16 h-8 bg-white border border-[#D9D9D9] border-t-0 border-r-0">
                  <span className="text-xs leading-[100%] text-[#757575]">{idx + 1}</span>
                </div>
                <div className="flex flex-col items-start p-0 gap-2 flex-1">
                  <div className="flex flex-row items-center p-2 w-full h-8 bg-white border border-[#D9D9D9] border-t-0 border-r-0">
                    <input
                      className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                      placeholder="입력하기"
                      value={row.bankName}
                      onChange={e =>
                        setRows(prev =>
                          prev.map(r =>
                            r.id === row.id
                              ? { ...r, bankName: e.target.value }
                              : r
                          )
                        )
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start p-0 gap-2 flex-1">
                  <div className="flex flex-row items-center p-2 w-full h-8 bg-white border border-[#D9D9D9] border-t-0 border-r-0">
                    <input
                      className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                      placeholder="입력하기"
                      value={row.accountNumber}
                      onChange={e =>
                        setRows(prev =>
                          prev.map(r =>
                            r.id === row.id
                              ? { ...r, accountNumber: e.target.value }
                              : r
                          )
                        )
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start p-0 gap-2 flex-1">
                  <div className="flex flex-row items-center p-2 w-full h-8 bg-white border border-[#D9D9D9] border-t-0 border-r-0">
                    <input
                      className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                      placeholder="입력하기"
                      value={row.withdrawalFee || 0}
                      onChange={e =>
                        setRows(prev =>
                          prev.map(r =>
                            r.id === row.id
                              ? { ...r, withdrawalFee: e.target.value }
                              : r
                          )
                        )
                      }
                    />
                    <span className="text-xs text-[#767676] ml-1">원</span>
                  </div>
                </div>
                <div className="flex flex-col items-start p-0 gap-2 flex-1">
                  <div className="flex flex-row items-center p-2 w-full h-8 bg-white border border-[#D9D9D9] border-t-0 border-r-0">
                    <input
                      className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                      placeholder="입력하기"
                      value={row.purpose || ''}
                      onChange={e =>
                        setRows(prev =>
                          prev.map(r =>
                            r.id === row.id
                              ? { ...r, purpose: e.target.value }
                              : r
                          )
                        )
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start p-0 gap-2 flex-1">
                  <div className="flex flex-row items-center p-2 w-full h-8 bg-white border border-[#D9D9D9] border-t-0 border-r-0">
                    <input
                      className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
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
                </div>
                <div className="flex flex-row items-center justify-center p-2 w-20 h-8 bg-white border border-[#D9D9D9] border-t-0">
                  <button
                    onClick={() => handleDelete(row.id)}
                    className="text-xs leading-[100%] text-[#1E1E1E] bg-[#F3F3F3] px-2 py-1.5"
                    disabled={loading}
                  >
                    삭제
                  </button>
                </div>
              </div>
            ))}

            {/* 추가하기 버튼 행 */}
            <div className="flex flex-row items-start p-0 w-full h-8">
              <div className="flex flex-row items-center justify-center gap-1 p-2 w-full h-8 bg-white border border-[#D9D9D9] border-t-0">
                <Image src="/icons/plus_circle.svg" alt="추가" width={16} height={16} />
                <button
                  onClick={addRow}
                  className="text-xs text-[#767676] hover:text-[#1E1E1E] flex items-center gap-1"
                >
                  추가하기
                </button>
              </div>
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
