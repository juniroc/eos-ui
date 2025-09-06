'use client';

import { useEffect, useState, useCallback } from 'react';

interface EmployeeRow {
  id: number;
  name: string;
  residentNumber: string;
  employmentType?: string;
  monthlySalary?: string;
  isProduction?: string; // 'YES' | 'NO'
}

const accessToken = 'YOUR_ACCESS_TOKEN'; // ✅ 교체 필요

export default function EmployeeInfoPage() {
  const [rows, setRows] = useState<EmployeeRow[]>([
    {
      id: 1,
      name: '',
      residentNumber: '',
      employmentType: '',
      monthlySalary: '',
      isProduction: '',
    },
    {
      id: 2,
      name: '',
      residentNumber: '',
      employmentType: '',
      monthlySalary: '',
      isProduction: '',
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [, setFirstLoad] = useState(true);

  /** 저장 버튼 활성화 여부 */
  const hasData = rows.some(
    r =>
      r.name.trim() ||
      r.residentNumber.trim() ||
      r.employmentType?.trim() ||
      r.monthlySalary?.trim() ||
      r.isProduction?.trim()
  );

  /** 직원 목록 불러오기 */
  const fetchEmployees = useCallback(async () => {
    try {
      const res = await fetch('/api/employees', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (!res.ok) throw new Error('불러오기 실패');
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        setRows(
          data.map((emp: EmployeeRow) => ({
            id: emp.id,
            name: emp.name || '',
            residentNumber: emp.residentNumber || '',
            employmentType: emp.employmentType || '',
            monthlySalary: emp.monthlySalary || '',
            isProduction: emp.isProduction ? 'YES' : 'NO',
          }))
        );
      }
    } catch (err) {
      console.error(err);
    } finally {
      setFirstLoad(false);
    }
  }, []);

  /** 직원리스트 파일 업로드 */
  const handleFileUpload = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      setLoading(true);
      const res = await fetch('/api/employee-docs/extract-list', {
        method: 'POST',
        headers: { Authorization: `Bearer ${accessToken}` },
        body: formData,
      });
      if (!res.ok) throw new Error('업로드 실패');
      const data = await res.json();
      if (data.success && data.items) {
        const extracted = data.items.map((item: EmployeeRow) => ({
          id: Date.now() + Math.random(),
          name: item.name || '',
          residentNumber: item.residentNumber || '',
          employmentType: item.employmentType || '',
          monthlySalary: item.monthlySalary || '',
          isProduction: item.isProduction ? 'YES' : 'NO',
        }));
        setRows(prev => [...prev, ...extracted]);
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
    alert('저장 API는 추후 구현 예정입니다.');
  };

  /** 삭제 */
  const handleDelete = async (id: number) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/employees/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (!res.ok) throw new Error('삭제 실패');
      await res.json();
      setRows(prev => prev.filter(r => r.id !== id));
    } catch (err) {
      console.error(err);
      alert('삭제 실패');
    } finally {
      setLoading(false);
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
        employmentType: '',
        monthlySalary: '',
        isProduction: '',
      },
    ]);
  };

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold mb-2 text-[#1E1E1E]">직원 정보</h2>
            <p className="text-[#767676]">
              파일을 업로드해서 자동으로 입력하거나 직접 입력하고 정보를
              저장하세요.
            </p>
          </div>
          <div className="flex gap-3">
            {/* 파일 업로드 */}
            <button
              className="flex items-center justify-center min-w-[79px] h-[28px] px-3 text-[12px] leading-[12px] text-[#1E1E1E] bg-[#F3F3F3] hover:bg-[#E0E0E0] rounded"
              onClick={() => document.getElementById('employeeFile')?.click()}
              disabled={loading}
            >
              파일 업로드
            </button>
            {/* 저장하기 */}
            <button
              className={`flex items-center justify-center min-w-[79px] h-[28px] px-3 text-[12px] leading-[12px] text-[#1E1E1E] rounded ${
                hasData && !loading
                  ? 'bg-[#F3F3F3] hover:bg-[#E0E0E0]'
                  : 'bg-[#E6E6E6]'
              }`}
              onClick={handleSave}
              disabled={!hasData || loading}
            >
              저장하기
            </button>
          </div>
        </div>

        {/* 파일 업로드 박스 */}
        <div
          className="rounded-lg text-center mb-6"
          style={{
            width: '100%',
            height: '120px',
            padding: '24px',
            background: '#FFFFFF',
            border: '1px dashed #D9D9D9',
          }}
        >
          <input
            type="file"
            accept=".jpg,.png,.pdf,.doc,.docx"
            className="hidden"
            id="employeeFile"
            onChange={e =>
              e.target.files && handleFileUpload(e.target.files[0])
            }
          />
          <label htmlFor="employeeFile" className="cursor-pointer block">
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
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-12">
                번호
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">이름</td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                주민등록번호
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                고용형태
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">월급</td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-12">
                원
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                생산직 여부
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
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    className="w-full focus:outline-none"
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
                <td className="p-3 border border-[#D9D9D9]">
                  <select
                    className="w-full focus:outline-none"
                    value={row.employmentType || ''}
                    onChange={e =>
                      setRows(prev =>
                        prev.map(r =>
                          r.id === row.id
                            ? { ...r, employmentType: e.target.value }
                            : r
                        )
                      )
                    }
                  >
                    <option value="">선택하기</option>
                    <option value="FULL_TIME">정규직</option>
                    <option value="CONTRACT">계약직</option>
                    <option value="PART_TIME">파트타임</option>
                  </select>
                </td>
                <td className="p-3 border border-[#D9D9D9]">
                  <input
                    className="w-full focus:outline-none"
                    placeholder="입력하기"
                    value={row.monthlySalary || ''}
                    onChange={e =>
                      setRows(prev =>
                        prev.map(r =>
                          r.id === row.id
                            ? { ...r, monthlySalary: e.target.value }
                            : r
                        )
                      )
                    }
                  />
                </td>
                <td className="p-3 border border-[#D9D9D9] text-center">원</td>
                <td className="p-3 border border-[#D9D9D9]">
                  <select
                    className="w-full focus:outline-none"
                    value={row.isProduction || ''}
                    onChange={e =>
                      setRows(prev =>
                        prev.map(r =>
                          r.id === row.id
                            ? { ...r, isProduction: e.target.value }
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
                <td className="p-3 border border-[#D9D9D9] text-center">
                  <button
                    onClick={() => handleDelete(row.id)}
                    className="flex items-center justify-center min-w-[66px] h-[28px] px-3 text-[12px] text-[#1E1E1E] bg-[#F3F3F3] hover:bg-[#E0E0E0] rounded"
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
                colSpan={8}
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
