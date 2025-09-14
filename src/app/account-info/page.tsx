'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import { useAuth } from '@/contexts/AuthContext';
import { getBankAccountDocs, extractBankAccountDocs, saveBankAccountDocs, deleteBankAccount } from '@/services/api';

interface AccountRow {
  id: number;
  bankName: string;
  accountNumber: string;
  withdrawalFee?: string;
  purpose?: string;
  note?: string;
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
      const data = await getBankAccountDocs(token);
      if (data.success && data.data && data.data.length > 0) {
        // 실제 데이터만 필터링하여 설정
        const validData = data.data.filter((acc: AccountRow) => 
          acc.bankName?.trim() || acc.accountNumber?.trim()
        );
        
        if (validData.length > 0) {
          // 기존 빈 행을 제거하고 실제 데이터만 설정
          setRows(
            validData.map((acc: AccountRow) => ({
              id: acc.id,
              bankName: acc.bankName || '',
              accountNumber: acc.accountNumber || '',
              withdrawalFee: acc.withdrawalFee || '',
              purpose: acc.purpose || '',
              note: acc.note || '',
            }))
          );
        }
        // 데이터가 없으면 기본 빈 행 유지
      }
      // API 호출 실패해도 기본 빈 행 유지
    } catch (err) {
      console.error('통장 정보 조회 에러:', err);
      // 에러가 발생해도 기본 빈 행 유지
    } finally {
      setFirstLoad(false);
    }
  }, [token]);

  /** 파일 업로드 → 추출 */
  const handleFileUpload = async (file: File) => {
    if (!token) return;
    
    try {
      setLoading(true);
      const data = await extractBankAccountDocs(file, token);
      if (data.success) {
        const extracted = data.items.map((item: AccountRow) => ({
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
      const data = await saveBankAccountDocs({
        accounts: rows.map(r => ({
          bankName: r.bankName,
          accountNumber: r.accountNumber,
          withdrawalFee: r.withdrawalFee,
          purpose: r.purpose,
          note: r.note,
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
      await deleteBankAccount(id.toString(), token);
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
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold mb-2 text-[#1E1E1E]">통장 정보</h2>
            <p className="text-[#767676]">
              파일을 업로드해서 자동으로 입력하거나 직접 입력하고 정보를
              저장하세요.
            </p>
          </div>
          <div className="flex gap-3">
            {/* 파일 업로드 */}
            <Button
              variant="neutral"
              size="small"
              onClick={() => document.getElementById('accountFile')?.click()}
              disabled={loading}
              loading={loading}
            >
              파일 업로드
            </Button>
            {/* 저장하기 */}
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
            width: '100%',
            height: '120px',
            minWidth: '400px',
            padding: '24px',
            background: '#FFFFFF',
            borderWidth: '1px',
            borderStyle: 'dashed',
            borderColor: '#D9D9D9',
          }}
        >
          <input
            type="file"
            className="hidden"
            id="accountFile"
            onChange={e =>
              e.target.files && handleFileUpload(e.target.files[0])
            }
          />
          <label htmlFor="accountFile" className="cursor-pointer block">
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
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 border border-[#D9D9D9] w-12">번호</th>
              <th className="p-3 border border-[#D9D9D9]">은행명</th>
              <th className="p-3 border border-[#D9D9D9]">계좌번호</th>
              <th className="p-3 border border-[#D9D9D9]">출금수수료</th>
              <th className="p-3 border border-[#D9D9D9] w-16">단위</th>
              <th className="p-3 border border-[#D9D9D9]">용도</th>
              <th className="p-3 border border-[#D9D9D9]">비고</th>
              <th className="p-3 border border-[#D9D9D9] w-24">삭제</th>
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
                    className="w-full px-2 py-1 text-gray-700 focus:outline-none"
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
                </td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    className="w-full px-2 py-1 text-gray-700 focus:outline-none"
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
                </td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    className="w-full px-2 py-1 text-gray-700 focus:outline-none"
                    placeholder="입력하기"
                    value={row.withdrawalFee || ''}
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
                </td>
                <td className="p-3 border border-[#D9D9D9] text-center">원</td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    className="w-full px-2 py-1 text-gray-700 focus:outline-none"
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
                    className="w-full px-2 py-1 text-gray-700 focus:outline-none"
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
                <td className="p-3 border border-[#D9D9D9] text-center">
                  <button
                    onClick={() => handleDelete(row.id)}
                    style={{
                      width: 'auto',
                      minWidth: '66px',
                      height: '28px',
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

            {/* 추가하기 버튼 행 */}
            <tr>
              <td
                colSpan={8}
                className="p-3 border border-[#D9D9D9] text-center"
              >
                <button
                  onClick={addRow}
                  className="text-sm text-[#767676] flex items-center gap-1 hover:text-[#1E1E1E] mx-auto"
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
