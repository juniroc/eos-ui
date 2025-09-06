'use client';

import { useEffect, useState, useCallback } from 'react';
import Button from '@/components/Button';

interface CardRow {
  id: number;
  cardIssuer: string;
  cardNumber: string;
  cardType?: string; // GENERAL_CREDIT, DEBIT_CARD
  purpose?: string;
  primaryUser?: string;
}

const accessToken = 'YOUR_ACCESS_TOKEN'; // ✅ 교체 필요

export default function CardInfoPage() {
  const [rows, setRows] = useState<CardRow[]>([
    { id: 1, cardIssuer: '', cardNumber: '' },
    { id: 2, cardIssuer: '', cardNumber: '' },
  ]);
  const [loading, setLoading] = useState(false);
  const [, setFirstLoad] = useState(true);

  /** 저장 버튼 활성화 여부 */
  const hasData = rows.some(
    (r) =>
      r.cardIssuer.trim() ||
      r.cardNumber.trim() ||
      r.cardType?.trim() ||
      r.purpose?.trim() ||
      r.primaryUser?.trim()
  );

  /** 카드 계좌 불러오기 */
  const fetchCards = useCallback(async () => {
    try {
      const res = await fetch('/api/card-docs', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (!res.ok) throw new Error('불러오기 실패');
      const data = await res.json();
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
      console.error(err);
    } finally {
      setFirstLoad(false);
    }
  }, []);

  /** 카드리스트 파일 업로드 */
  const handleFileUpload = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      setLoading(true);
      const res = await fetch('/api/card-docs/extract', {
        method: 'POST',
        headers: { Authorization: `Bearer ${accessToken}` },
        body: formData,
      });
      if (!res.ok) throw new Error('업로드 실패');
      const data = await res.json();
      if (data.success) {
        const extracted = data.items.map((item: CardRow) => ({
          id: Date.now() + Math.random(),
          cardIssuer: item.cardIssuer || '',
          cardNumber: item.cardNumber || '',
          cardType: item.cardType || '',
          purpose: item.purpose || '',
          primaryUser: item.primaryUser || '',
        }));
        setRows((prev) => [...prev, ...extracted]);
      }
    } catch (err) {
      console.error(err);
      alert('파일 업로드 실패');
    } finally {
      setLoading(false);
    }
  };

  /** 저장 */
  const handleSave = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/card-docs/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          cards: rows.map((r) => ({
            cardIssuer: r.cardIssuer,
            cardNumber: r.cardNumber,
            cardType: r.cardType,
            purpose: r.purpose,
            primaryUser: r.primaryUser,
          })),
        }),
      });
      if (!res.ok) throw new Error('저장 실패');
      const data = await res.json();
      if (data.success) {
        alert('저장되었습니다!');
      } else {
        alert('저장 실패');
      }
    } catch (err) {
      console.error(err);
      alert('저장 중 문제가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  /** 삭제 */
  const handleDelete = async (id: number) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/cards/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (!res.ok) throw new Error('삭제 실패');
      await res.json();
      setRows((prev) => prev.filter((r) => r.id !== id));
    } catch (err) {
      console.error(err);
      alert('삭제 실패');
    } finally {
      setLoading(false);
    }
  };

  /** 행 추가 */
  const addRow = () => {
    setRows((prev) => [
      ...prev,
      { id: Date.now(), cardIssuer: '', cardNumber: '' },
    ]);
  };

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold mb-2 text-[#1E1E1E]">카드 정보</h2>
            <p className="text-[#767676]">
              파일을 업로드해서 자동으로 입력하거나 직접 입력하고 정보를 저장하세요.
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
            borderColor: 'var(--Border-Default-Default, #D9D9D9)'
          }}
          data-dasharray="8, 4"
        >
          <input
            type="file"
            accept=".jpg,.png,.pdf,.doc,.docx"
            className="hidden"
            id="cardFile"
            onChange={(e) =>
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
                <div className="text-sm text-[#767676] mt-2">
                  (JPG, PNG, PDF, DOC, DOCX 파일만 지원됩니다.)
                </div>
              </>
            )}
          </label>
        </div>

        {/* 테이블 */}
        <table className="w-full border border-[#D9D9D9] text-sm text-[#757575]">
          <thead>
            <tr>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-12">번호</td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">카드사</td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">카드번호</td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">카드종류</td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">용도</td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">주사용자</td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-24">관리</td>
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
                    onChange={(e) =>
                      setRows((prev) =>
                        prev.map((r) =>
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
                    onChange={(e) =>
                      setRows((prev) =>
                        prev.map((r) =>
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
                    onChange={(e) =>
                      setRows((prev) =>
                        prev.map((r) =>
                          r.id === row.id ? { ...r, cardType: e.target.value } : r
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
                    onChange={(e) =>
                      setRows((prev) =>
                        prev.map((r) =>
                          r.id === row.id ? { ...r, purpose: e.target.value } : r
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
                    onChange={(e) =>
                      setRows((prev) =>
                        prev.map((r) =>
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
              <td colSpan={7} className="p-3 border border-[#D9D9D9] text-center">
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
