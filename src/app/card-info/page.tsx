'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import { useAuth } from '@/contexts/AuthContext';
import { getCardDocs, extractCardDocs, saveCardDocs, deleteCard } from '@/services/api';

interface CardRow {
  id: number;
  cardIssuer: string;
  cardNumber: string;
  cardType?: string; // GENERAL_CREDIT, DEBIT_CARD
  purpose?: string;
  primaryUser?: string;
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
      if (data.success && data.data.length > 0) {
        setRows(
          data.data.map((c: CardRow) => ({
            id: c.id,
            cardIssuer: c.cardIssuer || '',
            cardNumber: c.cardNumber || '',
            cardType: c.cardType || '',
            purpose: c.purpose || '',
            primaryUser: c.primaryUser || '',
          }))
        );
      }
    } catch (err) {
      console.error('카드 정보 조회 에러:', err);
      // 에러가 발생해도 조용히 처리 (사용자에게 알림하지 않음)
    } finally {
      setFirstLoad(false);
    }
  }, [token]);

  /** 카드리스트 파일 업로드 */
  const handleFileUpload = async (file: File) => {
    if (!token) return;
    
    try {
      setLoading(true);
      const data = await extractCardDocs(file, token) as { success: boolean; items: CardRow[] };
      if (data.success) {
        const extracted = data.items.map((item: CardRow) => ({
          id: Date.now() + Math.random(),
          cardIssuer: item.cardIssuer || '',
          cardNumber: item.cardNumber || '',
          cardType: item.cardType || '',
          purpose: item.purpose || '',
          primaryUser: item.primaryUser || '',
        }));
        setRows(prev => [...prev, ...extracted]);
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
      const data = await saveCardDocs({
        documentId: documentId || 'temp-document-id',
        cards: rows.map(r => ({
          cardName: r.cardIssuer,
          cardNumber: r.cardNumber,
          expiryDate: r.cardType,
          purpose: r.purpose,
          note: r.primaryUser,
        })),
      }, token);
      
      if (data.success) {
        alert('저장되었습니다!');
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
      await deleteCard(id.toString(), token);
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
              파일을 업로드해서 자동으로 입력하거나 직접 입력하고 정보를
              저장하세요.
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
        <div
          className="rounded-lg text-center mb-6"
          style={{
            width: '1168px',
            height: '120px',
            minWidth: '400px',
            gap: '12px',
            opacity: 1,
            padding: 'var(--Space-600, 24px)',
            background: 'var(--Background-Default-Default, #FFFFFF)',
            borderWidth: '1px',
            borderStyle: 'dashed',
            borderColor: 'var(--Border-Default-Default, #D9D9D9)',
          }}
          data-dasharray="8, 4"
        >
          <input
            type="file"
            className="hidden"
            id="cardFile"
            onChange={e =>
              e.target.files && handleFileUpload(e.target.files[0])
            }
          />
          <label htmlFor="cardFile" className="cursor-pointer block">
            {loading ? (
              <div className="text-gray-500">처리 중...</div>
            ) : (
              <>
                <div className="text-[#303030]">
                  파일을 선택하거나 드래그하여 업로드하세요
                </div>
              </>
            )}
          </label>
        </div>

        {/* 테이블 */}
        <table className="w-full border border-[#D9D9D9] text-sm text-[#757575]">
          <thead>
            <tr>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-12">
                번호
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                카드사
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                카드번호
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                카드종류
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">용도</td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                주사용자
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-24">
                관리
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
                    className="w-full focus:outline-none"
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
                    className="w-full focus:outline-none"
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
                    className="w-full focus:outline-none"
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
                    className="w-full focus:outline-none"
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
                  <Button
                    variant="neutral"
                    size="small"
                    onClick={() => handleDelete(row.id)}
                    disabled={loading}
                  >
                    삭제
                  </Button>
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
