'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import { useAuth } from '@/contexts/AuthContext';
import { getCardDocs, extractCardDocs, saveCardDocs, deleteCard } from '@/services/api';
import FileUploadBox from '@/components/FileUploadBox';
import ToastMessage from '@/components/ToastMessage';
import Image from 'next/image';

interface CardRow {
  id: string;
  cardIssuer: string;
  cardNumber: string;
  cardType?: string; // GENERAL_CREDIT, DEBIT_CARD
  purpose?: string;
  primaryUser?: string;
  serverId?: string; // 서버에 저장된 데이터인지 구분
}

export default function CardInfoPage() {
  const router = useRouter();
  const { token, isAuthenticated, loading: authLoading } = useAuth();
  const [rows, setRows] = useState<CardRow[]>([
    { id: '1', cardIssuer: '', cardNumber: '' },
    { id: '2', cardIssuer: '', cardNumber: '' },
  ]);
  const [loading, setLoading] = useState(false);
  const [, setFirstLoad] = useState(true);
  const [documentId, setDocumentId] = useState<string | null>(null); // documentId 상태 추가
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, router]);

  /** 저장 버튼 활성화 여부 */
  const hasData = rows.some(
    r =>
      r.cardIssuer.trim() ||
      r.cardNumber.trim() ||
      r.cardType?.trim() ||
      r.purpose?.trim() ||
      r.primaryUser?.trim()
  );

  /** 카드 계좌 불러오기 */
  const fetchCards = useCallback(async () => {
    if (!token) return;
    
    try {
      const data = await getCardDocs(token) as { success: boolean; data: CardRow[] };
      if (data.success) {
        // 서버에서 받은 데이터만 표시 (로컬 데이터는 완전히 교체)
        if (data.data && data.data.length > 0) {
          setRows(
            data.data.map((c: CardRow) => ({
              id: c.id,
              cardIssuer: c.cardIssuer || '',
              cardNumber: c.cardNumber || '',
              cardType: c.cardType || '',
              purpose: c.purpose || '',
              primaryUser: c.primaryUser || '',
              serverId: c.id, // 서버 ID 설정
            }))
          );
        } else {
          // 서버에 데이터가 없으면 빈 행으로 초기화 (로컬 데이터 완전 제거)
          setRows([
            { id: '1', cardIssuer: '', cardNumber: '', cardType: '', purpose: '', primaryUser: '' },
            { id: '2', cardIssuer: '', cardNumber: '', cardType: '', purpose: '', primaryUser: '' },
          ]);
        }
      } else {
        // API 호출 실패 시에도 빈 행으로 초기화
        setRows([
          { id: '1', cardIssuer: '', cardNumber: '', cardType: '', purpose: '', primaryUser: '' },
          { id: '2', cardIssuer: '', cardNumber: '', cardType: '', purpose: '', primaryUser: '' },
        ]);
      }
    } catch (err) {
      console.error('카드 정보 조회 에러:', err);
      // 에러 발생 시에도 빈 행으로 초기화
      setRows([
        { id: '1', cardIssuer: '', cardNumber: '', cardType: '', purpose: '', primaryUser: '' },
        { id: '2', cardIssuer: '', cardNumber: '', cardType: '', purpose: '', primaryUser: '' },
      ]);
    } finally {
      setFirstLoad(false);
    }
  }, [token]);

  /** 카드리스트 파일 업로드 */
  const handleFileUpload = async (file: File) => {
    if (!token) return;
    
    try {
      setLoading(true);
      const data = await extractCardDocs(file, token) as { success: boolean; documentId?: string; items: CardRow[] };
      if (data.success) {
        // documentId 저장
        if (data.documentId) {
          setDocumentId(data.documentId);
        }
        
        const extracted = data.items.map((item: CardRow) => ({
          id: Date.now() + Math.random().toString(),
          cardIssuer: item.cardIssuer || '',
          cardNumber: item.cardNumber || '',
          cardType: item.cardType || '',
          purpose: item.purpose || '',
          primaryUser: item.primaryUser || '',
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
      
      // 빈 행들을 필터링하고 유효한 데이터만 전송
      const validCards = rows
        .filter(row => row.cardIssuer.trim() || row.cardNumber.trim())
        .map(row => {
          const card: {
            id: string;
            cardIssuer?: string;
            cardNumber?: string;
            cardType?: string;
            purpose?: string;
            primaryUser?: string;
          } = {
            id: row.id,
            cardIssuer: row.cardIssuer.trim(),
            cardNumber: row.cardNumber.trim(),
          };
          
          // optional 필드들은 값이 있을 때만 포함
          if (row.cardType?.trim()) {
            card.cardType = row.cardType.trim();
          }
          if (row.purpose?.trim()) {
            card.purpose = row.purpose.trim();
          }
          if (row.primaryUser?.trim()) {
            card.primaryUser = row.primaryUser.trim();
          }
          
          return card;
        });
      
      console.log('저장할 데이터:', { documentId, cards: validCards });
      
      const data = await saveCardDocs({
        documentId: documentId || '',
        cards: validCards as CardRow[]
      }, token);
      
      console.log('저장 응답:', data);
      
      if (data.success) {
        setToastMessage('카드 정보가 저장되었습니다!');
        setShowToast(true);
        // documentId 초기화
        setDocumentId('');
        // 저장 후 리스팅 함수 다시 호출하여 서버 데이터로 업데이트
        fetchCards();
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
  const handleDelete = async (id: string) => {
    const row = rows.find(r => r.id === id);
    if (!row) return;

    // 서버에 저장된 데이터인지 확인 (serverId가 있으면 서버에 저장된 것)
    if (row.serverId) {
      // 서버에 저장된 데이터는 API 호출로 삭제
      if (!token) return;
      
      try {
        setLoading(true);
        await deleteCard(row.serverId.toString(), token);
        setRows(prev => prev.filter(r => r.id !== id));
        setToastMessage('카드 정보가 삭제되었습니다!');
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
      { id: Date.now().toString(), cardIssuer: '', cardNumber: '' },
    ]);
  };

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

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
    <div className="flex flex-col items-center p-0 bg-white">
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
                      카드 정보
                    </span>
                  </div>
                </div>
                <span className="text-xs leading-[140%] text-[#767676]">
                  파일을 업로드해서 자동으로 입력하거나 직접 입력하고 정보를 저장하세요.
                </span>
              </div>
              <div className="flex flex-row justify-end items-center p-0 gap-2">
                <Button
                  variant="neutral"
                  size="small"
                  onClick={() => document.getElementById('cardFile')?.click()}
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
                  파일을 선택하거나 여기로 드래그하세요.
                </span>
                <span className="text-xs leading-[140%] text-center text-[#767676]">
                  (PDF, XLS, XLSX, DOC, DOCX, JPG, PNG, GIF 파일을 지원합니다)
                </span>
              </div>
              <FileUploadBox
                id="cardFile"
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
              <div className="flex flex-row items-center justify-center p-2 w-12 h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-r-0 flex-shrink-0">
                <span className="text-xs leading-[100%] text-[#757575]">번호</span>
              </div>
              <div className="flex flex-row items-center justify-center p-2 flex-1 h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-r-0">
                <span className="text-xs leading-[100%] text-[#757575]">카드사</span>
              </div>
              <div className="flex flex-row items-center justify-center p-2 flex-1 h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-r-0">
                <span className="text-xs leading-[100%] text-[#757575]">카드번호</span>
              </div>
              <div className="flex flex-row items-center justify-center p-2 flex-1 h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-r-0">
                <span className="text-xs leading-[100%] text-[#757575]">카드종류</span>
              </div>
              <div className="flex flex-row items-center justify-center p-2 flex-1 h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-r-0">
                <span className="text-xs leading-[100%] text-[#757575]">용도</span>
              </div>
              <div className="flex flex-row items-center justify-center p-2 flex-1 h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-r-0">
                <span className="text-xs leading-[100%] text-[#757575]">주사용자</span>
              </div>
              <div className="flex flex-row items-center justify-center p-2 w-16 h-8 bg-[#F5F5F5] border border-[#D9D9D9] flex-shrink-0">
                <span className="text-xs leading-[100%] text-[#757575]">삭제</span>
              </div>
            </div>

            {/* 데이터 행들 */}
            {rows.map((row, idx) => (
              <div key={row.id} className="flex flex-row items-start p-0 w-full h-8">
                <div className="flex flex-row items-center justify-center p-2 w-12 h-8 bg-white border border-[#D9D9D9] border-t-0 border-r-0 flex-shrink-0">
                  <span className="text-xs leading-[100%] text-[#757575]">{idx + 1}</span>
                </div>
                <div className="flex flex-col items-start p-0 gap-2 flex-1">
                  <div className="flex flex-row items-center p-2 w-full h-8 bg-white border border-[#D9D9D9] border-t-0 border-r-0">
                    <input
                      className="w-full text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                      placeholder="입력하기"
                      value={row.cardIssuer}
                      onChange={e =>
                        setRows(prev =>
                          prev.map(r =>
                            r.id === row.id
                              ? { ...r, cardIssuer: e.target.value }
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
                      className="w-full text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                      placeholder="입력하기"
                      value={row.cardNumber}
                      onChange={e =>
                        setRows(prev =>
                          prev.map(r =>
                            r.id === row.id
                              ? { ...r, cardNumber: e.target.value }
                              : r
                          )
                        )
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start p-0 gap-2 flex-1">
                  <div className="flex flex-row items-center p-2 w-full h-8 bg-white border border-[#D9D9D9] border-t-0 border-r-0">
                    <select
                      className="w-full text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                      value={row.cardType || ''}
                      onChange={e =>
                        setRows(prev =>
                          prev.map(r =>
                            r.id === row.id
                              ? { ...r, cardType: e.target.value }
                              : r
                          )
                        )
                      }
                    >
                      <option value="">선택하기</option>
                      <option value="GENERAL_CREDIT">일반신용</option>
                      <option value="DEBIT_CARD">직불카드</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col items-start p-0 gap-2 flex-1">
                  <div className="flex flex-row items-center p-2 w-full h-8 bg-white border border-[#D9D9D9] border-t-0 border-r-0">
                    <input
                      className="w-full text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                      placeholder="입력하기"
                      value={row.purpose || ''}
                      onChange={e =>
                        setRows(prev =>
                          prev.map(r =>
                            r.id === row.id ? { ...r, purpose: e.target.value } : r
                          )
                        )
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start p-0 gap-2 flex-1">
                  <div className="flex flex-row items-center p-2 w-full h-8 bg-white border border-[#D9D9D9] border-t-0 border-r-0">
                    <input
                      className="w-full text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                      placeholder="입력하기"
                      value={row.primaryUser || ''}
                      onChange={e =>
                        setRows(prev =>
                          prev.map(r =>
                            r.id === row.id ? { ...r, primaryUser: e.target.value } : r
                          )
                        )
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center p-2 w-16 h-8 bg-white border border-[#D9D9D9] border-t-0 flex-shrink-0">
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
            <div className="flex flex-row items-start p-0 w-full cursor-pointer" onClick={addRow}>
              <div className="flex flex-row items-center justify-center gap-1 p-3 w-full bg-white border border-[#D9D9D9] border-t-0">
                <Image src="/icons/plus_circle.svg" alt="추가" width={16} height={16} />
                <button
                  className="text-xs text-[#767676] flex items-center gap-1 cursor-pointer"
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
