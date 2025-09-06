'use client';

import { useCallback, useEffect, useState } from 'react';
import Button from '@/components/Button';

interface SettlementRow {
  id: number;
  type: '필수' | '선택';
  value: string;
  fileName?: string;
  fileId?: string;
}

const accessToken = 'YOUR_ACCESS_TOKEN'; // ✅ 로그인 시 발급받은 토큰으로 교체

export default function SettlementInfoPage() {
  const [rows, setRows] = useState<SettlementRow[]>([
    { id: 1, type: '필수', value: '' },
    { id: 2, type: '필수', value: '' },
    { id: 3, type: '선택', value: '' },
    { id: 4, type: '선택', value: '' },
    { id: 5, type: '선택', value: '' },
  ]);
  const [, setFirstLoad] = useState(true);
  const [loading, setLoading] = useState(false);

  /** 저장 버튼 활성화 여부 → 데이터가 하나라도 있으면 true */
  const hasData = rows.some(row => row.value.trim() !== '');

  /** 전기결산정보 불러오기 */
  const fetchDocs = useCallback(async () => {
    try {
      const res = await fetch('/api/previous-docs', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
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
      console.error(e);
    } finally {
      setFirstLoad(false);
    }
  }, []);

  /** 파일 업로드 */
  const handleFileUpload = async (rowId: number, file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      setLoading(true);
      const res = await fetch(`/api/previous-docs/upload?type=OTHER`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${accessToken}` },
        body: formData,
      });
      if (!res.ok) throw new Error('파일 업로드 실패');
      const data = await res.json();

      if (data.success) {
        setRows(prev =>
          prev.map(row =>
            row.id === rowId
              ? {
                  ...row,
                  fileName: data.data.originalName,
                  fileId: data.data.id,
                }
              : row
          )
        );
      }
    } catch (e) {
      console.error(e);
      alert('파일 업로드 실패');
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

    try {
      setLoading(true);
      const res = await fetch(`/api/previous-docs/${fileId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (!res.ok) throw new Error('삭제 실패');
      const data = await res.json();
      if (data.success) {
        setRows(prev => prev.filter(row => row.id !== rowId));
      }
    } catch (e) {
      console.error(e);
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
    try {
      setLoading(true);
      const res = await fetch('/api/business-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ settlementDocs: rows }),
      });
      if (!res.ok) throw new Error('저장 실패');
      const result = await res.json();
      if (result.success) {
        alert('저장되었습니다!');
      } else {
        alert('저장 실패');
      }
    } catch (e) {
      console.error(e);
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
              정기결산 정보
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
        <table className="w-full border border-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 border border-gray-200 w-24">구분</th>
              <th className="p-3 border border-gray-200">title</th>
              <th className="p-3 border border-gray-200 w-48 text-left">
                title
              </th>
              <th className="p-3 border border-gray-200 w-32">title</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row.id}>
                <td
                  className={`p-3 border border-gray-200 text-center ${
                    row.type === '필수' ? 'text-red-500 font-medium' : ''
                  }`}
                >
                  {row.type}
                </td>
                <td className="p-3 border border-gray-200">
                  <input
                    className="w-full px-2 py-1 text-gray-700 focus:outline-none"
                    placeholder="입력하기"
                    value={row.value}
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
                  <label className="cursor-pointer text-gray-400 hover:text-gray-600">
                    파일 업로드
                    <input
                      type="file"
                      className="hidden"
                      onChange={e =>
                        e.target.files &&
                        handleFileUpload(row.id, e.target.files[0])
                      }
                    />
                  </label>
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
                  className="text-sm text-[#767676] flex justify-center gap-1 hover:text-[#1E1E1E]"
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
