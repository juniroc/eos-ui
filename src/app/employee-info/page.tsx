'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { extractEmployeeDocs, saveEmployeeDocs, deleteEmployee } from '@/services/api';
import FileUploadBox from '@/components/FileUploadBox';

interface EmployeeRow {
  id: number;
  name: string;
  residentNumber: string;
  employmentType?: string;
  monthlySalary?: string;
  isProduction?: string; // 'YES' | 'NO'
}

export default function EmployeeInfoPage() {
  const router = useRouter();
  const { token, isAuthenticated, loading: authLoading } = useAuth();
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
      r.name.trim() ||
      r.residentNumber.trim() ||
      r.employmentType?.trim() ||
      r.monthlySalary?.trim() ||
      r.isProduction?.trim()
  );

  /** 직원 목록 불러오기 */
  const fetchEmployees = useCallback(async () => {
    try {
      const res = await fetch('https://api.eosxai.com/api/employees', {
        headers: { Authorization: `Bearer ${token}` },
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
  }, [token]);

  /** 직원리스트 파일 업로드 */
  const handleFileUpload = async (file: File) => {
    if (!token) return;
    
    try {
      setLoading(true);
      const data = await extractEmployeeDocs(file, token) as { success: boolean; documentId?: string; items: EmployeeRow[] };
      if (data.success && data.items) {
        // documentId 저장
        if (data.documentId) {
          setDocumentId(data.documentId);
        }
        
        const extracted = data.items.map((item: EmployeeRow) => ({
          id: Date.now() + Math.random(),
          name: item.name || '',
          residentNumber: item.residentNumber || '',
          employmentType: item.employmentType || '',
          monthlySalary: item.monthlySalary || '',
          isProduction: item.isProduction ? 'YES' : 'NO',
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
      const validEmployees = rows
        .filter(row => row.name.trim() || row.residentNumber.trim())
        .map(row => {
          const employee: { name: string; residentNumber: string; monthlySalary?: string; position?: string; department?: string; startDate?: string; endDate?: string; note?: string; employmentType?: string; isProduction?: string } = {
            name: row.name.trim(),
            residentNumber: row.residentNumber.trim(),
          };
          
          // optional 필드들은 값이 있을 때만 포함
          if (row.employmentType?.trim()) {
            employee.employmentType = row.employmentType.trim();
          }
          if (row.monthlySalary?.trim()) {
            employee.monthlySalary = row.monthlySalary.trim();
          }
          if (row.isProduction?.trim()) {
            employee.isProduction = row.isProduction.trim();
          }
          
          return employee;
        });
      
      console.log('저장할 데이터:', { documentId, employees: validEmployees });
      
      const data = await saveEmployeeDocs({
        documentId,
        employees: validEmployees
      }, token);
      
      if (data.success) {
        alert('저장되었습니다!');
        // documentId 초기화
        setDocumentId('');
        // 저장 후 리스팅 함수 다시 호출하여 서버 데이터로 업데이트
        fetchEmployees();
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
      await deleteEmployee(id.toString(), token);
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
        <div className="mb-6">
          <FileUploadBox
            id="employeeFile"
            onFileUpload={handleFileUpload}
            loading={loading}
          />
        </div>

        {/* 테이블 */}
        <table className="w-full border border-[#D9D9D9] text-sm text-[#757575]">
          <thead>
            <tr>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-12 font-medium">
                번호
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium">이름</td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium">
                주민등록번호
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium">
                유형
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium">월 급여</td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] font-medium">
                생산직 여부
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-24 font-medium">
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
                    className="w-full focus:outline-none text-[#B3B3B3]"
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
                    className="w-full focus:outline-none text-[#B3B3B3]"
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
                    className="w-full focus:outline-none text-[#B3B3B3]"
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
                  <div className="flex items-center w-full">
                    {!row.monthlySalary && (
                      <span className="text-gray-400 text-sm mr-2 w-max">입력하기</span>
                    )}
                    <input
                      className="flex-1 focus:outline-none text-[#B3B3B3]"
                      placeholder=""
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
                    <span className="text-gray-400 text-sm ml-2">원</span>
                  </div>
                </td>
                <td className="p-3 border border-[#D9D9D9]">
                  <select
                    className="w-full focus:outline-none text-[#B3B3B3]"
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