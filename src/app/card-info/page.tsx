'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import { useAuth } from '@/contexts/AuthContext';
import { getCardDocs, extractCardDocs, saveCardDocs, deleteCard } from '@/services/api';
import FileUploadBox from '@/components/FileUploadBox';

interface CardRow {
  id: number;
  cardIssuer: string;
  cardNumber: string;
  cardType?: string; // GENERAL_CREDIT, DEBIT_CARD
  purpose?: string;
  primaryUser?: string;
  serverId?: number; // 서버에 저장된 데이터인지 구분
}

export default function CardInfoPage() {
  const router = useRouter();
  const { token, isAuthenticated, loading: authLoading } = useAuth();
  const [rows, setRows] = useState<CardRow[]>([
    { id: 1, cardIssuer: '', cardNumber: '' },
    { id: 2, cardIssuer: '', cardNumber: '' },
  ]);
  const [loading, setLoading] = useState(false);
  const [, setFirstLoad] = useState(true);
  const [documentId, setDocumentId] = useState<string | null>(null); // documentId 상태 추가

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
            { id: 1, cardIssuer: '', cardNumber: '', cardType: '', purpose: '', primaryUser: '' },
            { id: 2, cardIssuer: '', cardNumber: '', cardType: '', purpose: '', primaryUser: '' },
          ]);
        }
      } else {
        // API 호출 실패 시에도 빈 행으로 초기화
        setRows([
          { id: 1, cardIssuer: '', cardNumber: '', cardType: '', purpose: '', primaryUser: '' },
          { id: 2, cardIssuer: '', cardNumber: '', cardType: '', purpose: '', primaryUser: '' },
        ]);
      }
    } catch (err) {
      console.error('카드 정보 조회 에러:', err);
      // 에러 발생 시에도 빈 행으로 초기화
      setRows([
        { id: 1, cardIssuer: '', cardNumber: '', cardType: '', purpose: '', primaryUser: '' },
        { id: 2, cardIssuer: '', cardNumber: '', cardType: '', purpose: '', primaryUser: '' },
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
          id: Date.now() + Math.random(),
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
    
    if (!documentId) {
      alert('먼저 파일을 업로드해주세요.');
      return;
    }
    
    try {
      setLoading(true);
      
      // 빈 행들을 필터링하고 유효한 데이터만 전송
      const validCards = rows
        .filter(row => row.cardIssuer.trim() || row.cardNumber.trim())
        .map(row => {
          const card: {
            cardIssuer: string;
            cardNumber: string;
            cardType?: string;
            purpose?: string;
            primaryUser?: string;
          } = {
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
        documentId,
        cards: validCards
      }, token);
      
      console.log('저장 응답:', data);
      
      if (data.success) {
        alert('저장되었습니다!');
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
  const handleDelete = async (id: number) => {
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
        alert('삭제되었습니다.');
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
      { id: Date.now(), cardIssuer: '', cardNumber: '' },
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
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold mb-2 text-[#1E1E1E]">카드 정보</h2>
            <p className="text-[#767676]">
            카드리스트 정보 파일을 업로드하거나 직접 입력하세요.

            </p>
          </div>
          <div className="flex gap-3">
            {/* 파일 업로드 버튼 */}
            <Button
              variant="neutral"
              size="small"
              onClick={() => document.getElementById('cardFile')?.click()}
              disabled={loading}
              loading={loading}
            >
              파일 업로드
            </Button>
            {/* 저장하기 버튼 */}
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
            id="cardFile"
            onFileUpload={handleFileUpload}
            loading={loading}
            style={{
              width: '1168px',
            }}
          />
        </div>

        {/* 테이블 */}
        <table className="w-full border border-[#D9D9D9] text-sm text-[#757575] text-center">
          <thead>
            <tr>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-14 font-medium">
                번호
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium">
                카드사
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium">
                카드번호
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium">
                카드종류
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium">용도</td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium">
                주사용자
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium">
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
                    className="w-full focus:outline-none text-[#B3B3B3]"
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
                </td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    className="w-full focus:outline-none text-[#B3B3B3]"
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
                </td>
                <td className="p-3 border border-[#D9D9D9]">
                  <select
                    className="w-full focus:outline-none text-[#B3B3B3]"
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
                </td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    className="w-full focus:outline-none text-[#B3B3B3]"
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
                </td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    className="w-full focus:outline-none text-[#B3B3B3]"
                    placeholder="입력하기"
                    value={row.primaryUser || ''}
                    onChange={e =>
                      setRows(prev =>
                        prev.map(r =>
                          r.id === row.id
                            ? { ...r, primaryUser: e.target.value }
                            : r
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