'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { extractEmployeeDocs, saveEmployeeDocs, deleteEmployee } from '@/services/api';
import FileUploadBox from '@/components/FileUploadBox';
import ToastMessage from '@/components/ToastMessage';
import Image from 'next/image';

interface EmployeeRow {
  id: number;
  name: string;
  residentNumber: string;
  employmentType?: string;
  monthlySalary?: string;
  isProduction?: boolean;
  serverId?: number; // 서버에 저장된 데이터인지 구분
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
      isProduction: false,
    },
    {
      id: 2,
      name: '',
      residentNumber: '',
      employmentType: '',
      monthlySalary: '',
      isProduction: false,
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [, setFirstLoad] = useState(true);
  const [documentId, setDocumentId] = useState<string>('');
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const hideToast = () => {
    setShowToast(false);
  };

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
      (r.monthlySalary && String(r.monthlySalary).trim()) ||
      r.isProduction !== undefined
  );

  /** 직원 목록 불러오기 */
  const fetchEmployees = useCallback(async () => {
    try {
      if (!token) return;

      const res = await fetch('https://api.eosxai.com/api/employees', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('불러오기 실패');
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        // 서버에서 받은 데이터만 표시 (로컬 데이터는 완전히 교체)
        setRows(
          data.map((emp: EmployeeRow) => ({
            id: emp.id,
            name: emp.name || '',
            residentNumber: emp.residentNumber || '',
            employmentType: emp.employmentType || '',
            monthlySalary: emp.monthlySalary || '',
            isProduction: emp.isProduction || false,
            serverId: emp.id, // 서버 ID 설정
          }))
        );
      } else {
        // 서버에 데이터가 없으면 빈 행으로 초기화 (로컬 데이터 완전 제거)
        setRows([
          { id: 1, name: '', residentNumber: '', employmentType: '', monthlySalary: '', isProduction: false },
          { id: 2, name: '', residentNumber: '', employmentType: '', monthlySalary: '', isProduction: false },
        ]);
      }
    } catch (err) {
      console.error(err);
      // 에러 발생 시에도 빈 행으로 초기화
      setRows([
        { id: 1, name: '', residentNumber: '', employmentType: '', monthlySalary: '', isProduction: false },
        { id: 2, name: '', residentNumber: '', employmentType: '', monthlySalary: '', isProduction: false },
      ]);
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
          isProduction: item.isProduction || false,
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

      // 이름, 주민등록번호, 유형 선택 필수로, 선택 안한경우 alert 알림
      if (!rows.some(row => row.name.trim() && row.residentNumber.trim() && row.employmentType?.trim())) {
        alert('직원명, 주민등록번호, 유형은 필수입니다.');
        return;
      }
      
      // 빈 행들을 필터링하고 유효한 데이터만 전송
      const validEmployees = rows
        .filter(row => row.name.trim() || row.residentNumber.trim())
        .map(row => {
          const employee: { name: string; residentNumber: string; monthlySalary?: string; position?: string; department?: string; startDate?: string; endDate?: string; note?: string; employmentType?: string; isProduction?: boolean } = {
            name: row.name.trim(),
            residentNumber: row.residentNumber.trim(),
            isProduction: row.isProduction || false,
          };
          
          // optional 필드들은 값이 있을 때만 포함
          if (row.employmentType?.trim()) {
            employee.employmentType = row.employmentType.trim();
          }
          if (row.monthlySalary && String(row.monthlySalary).trim()) {
            employee.monthlySalary = String(row.monthlySalary).trim();
          }
          
          return employee;
        });
      
      console.log('저장할 데이터:', { documentId, employees: validEmployees });
      
      const data = await saveEmployeeDocs({
        // documentId,
        employees: validEmployees
      }, token);
      
      if (data.success) {
        setToastMessage('직원 정보가 저장되었습니다!');
        setShowToast(true);
        // documentId 초기화
        setDocumentId('');
        // 저장 후 리스팅 함수 다시 호출하여 서버 데이터로 업데이트
        fetchEmployees();
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
        await deleteEmployee(row.serverId.toString(), token);
        setRows(prev => prev.filter(r => r.id !== id));
        setToastMessage('직원 정보가 삭제되었습니다!');
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
        residentNumber: '',
        employmentType: 'REGULAR',
        monthlySalary: '',
        isProduction: false,
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
    <div className="flex flex-col items-start p-4 gap-4 w-full mx-auto">
      {/* Header */}
      <div className="flex flex-col items-start gap-4 w-full min-w-[520px]">
        <div className="flex flex-row justify-between items-end gap-4 w-full">
          <div className="flex flex-col items-start">
            <div className="flex flex-col items-start p-[6px_0px_2px] w-64 rounded-lg">
              <div className="flex flex-row items-start">
                <h2 className="font-['Pretendard'] font-semibold text-[15px] leading-[140%] text-[#1E1E1E]">
                  직원 정보
                </h2>
              </div>
            </div>
            <p className="font-['Pretendard'] text-[12px] leading-[140%] text-center text-[#767676]">
              파일을 업로드해서 자동으로 입력하거나 직접 입력하고 정보를 저장하세요.
            </p>
          </div>
          <div className="flex flex-row justify-end items-center gap-2">
            {/* 파일 업로드 */}
            <button
              className="flex flex-row justify-center items-center px-3 py-2 gap-2 bg-[#F3F3F3] hover:bg-[#E0E0E0]"
              onClick={() => document.getElementById('employeeFile')?.click()}
              disabled={loading}
            >
              <span className="font-['Pretendard'] font-medium text-[12px] leading-[100%] text-[#1E1E1E]">
                파일 업로드
              </span>
            </button>
            {/* 저장하기 */}
            <button
              className={`flex flex-row justify-center items-center px-3 py-2 min-w-[79px] h-7 gap-2 ${
                hasData && !loading
                  ? 'bg-[#F3F3F3] hover:bg-[#E0E0E0]'
                  : 'bg-[#E6E6E6]'
              }`}
              onClick={handleSave}
              disabled={!hasData || loading}
            >
              <span className={` font-['Pretendard'] font-medium text-[12px] leading-[100%] ${
                hasData && !loading ? 'text-[#1E1E1E]' : 'text-[#B3B3B3]'
              }`}>
                저장하기
              </span>
            </button>
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
            id="employeeFile"
            onFileUpload={handleFileUpload}
            loading={loading}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>

      </div>

        {/* 테이블 */}
        <div className="flex flex-col items-start w-full">
          {/* 테이블 헤더 */}
          <div className="flex flex-row items-center w-full h-8">
            {/* 번호 컴럼 */}
            <div className="flex flex-row justify-center items-center w-12 h-8 bg-[#F5F5F5] border-t border-l border-b border-[#D9D9D9]">
                <span className="font-['Pretendard'] font-medium text-[12px] leading-[100%] text-[#757575]">
                  번호
                </span>
            </div>
            {/* 이름 컴럼 */}
            <div className="flex flex-row justify-center items-center flex-1 h-8 bg-[#F5F5F5] border-t border-l border-b border-[#D9D9D9]">
                <span className="font-['Pretendard'] font-medium text-[12px] leading-[100%] text-[#757575]">
                직원명
                </span>
            </div>
            {/* 주민등록번호 컴럼 */}
            <div className="flex flex-row justify-center items-center flex-1 h-8 bg-[#F5F5F5] border-t border-l border-b border-[#D9D9D9]">
                <span className="font-['Pretendard'] font-medium text-[12px] leading-[100%] text-[#757575]">
                  주민등록번호
                </span>
            </div>
            {/* 유형 컴럼 */}
            <div className="flex flex-row justify-center items-center flex-1 h-8 bg-[#F5F5F5] border-t border-l border-b border-[#D9D9D9]">
                <span className="font-['Pretendard'] font-medium text-[12px] leading-[100%] text-[#757575]">
                  유형
                </span>
            </div>
            {/* 월 급여 컴럼 */}
            <div className="flex flex-row justify-center items-center flex-1 h-8 bg-[#F5F5F5] border-t border-l border-b border-[#D9D9D9]">
                <span className="font-['Pretendard'] font-medium text-[12px] leading-[100%] text-[#757575]">
                  월 급여
                </span>
            </div>
            {/* 생산직 여부 컴럼 */}
            <div className="flex flex-row justify-center items-center flex-1 h-8 bg-[#F5F5F5] border-t border-l border-b border-[#D9D9D9]">
                <span className="font-['Pretendard'] font-medium text-[12px] leading-[100%] text-[#757575]">
                  생산직 여부
                </span>
            </div>
            {/* 관리 컴럼 */}
            <div className="flex flex-row justify-center items-center w-17 h-8 bg-[#F5F5F5] border border-[#D9D9D9]">
                <span className="font-['Pretendard'] font-medium text-[12px] leading-[100%] text-[#757575]">
                  삭제
                </span>
            </div>
          </div>
          {/* 데이터 행들 */}
          {rows.map((row, idx) => (
            <div key={row.id} className="flex flex-row items-center w-full h-8">
              {/* 번호 컴럼 */}
              <div className="flex flex-row justify-center items-center w-12 h-8 bg-white border-l border-b border-[#D9D9D9]">
                <span className="font-['Pretendard'] font-medium text-[12px] leading-[100%] text-[#757575]">
                  {String(idx + 1)}
                </span>
              </div>
              {/* 이름 컴럼 */}
              <div className="flex flex-row items-center px-2 flex-1 h-8 bg-white border-l border-b border-[#D9D9D9]">
                <input
                  className="w-full font-['Pretendard'] font-medium text-[12px] leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
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
              {/* 주민등록번호 컴럼 */}
              <div className="flex flex-row items-center px-2 flex-1 h-8 bg-white border-l border-b border-[#D9D9D9]">
                <input
                  className="w-full font-['Pretendard'] font-medium text-[12px] leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
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
              </div>
              {/* 유형 컴럼 */}
              <div className="flex flex-row items-center px-2 flex-1 h-8 bg-white border-l border-b border-[#D9D9D9]">
                <select
                  className="w-full font-['Pretendard'] font-medium text-[12px] leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
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
                  <option value="REGULAR">정규직</option>
                  <option value="TEMPORARY">계약직</option>
                </select>
              </div>
              {/* 월 급여 컴럼 */}
              <div className="flex flex-row items-center px-2 flex-1 h-8 bg-white border-l border-b border-[#D9D9D9]">
                <input
                  className="w-full font-['Pretendard'] font-medium text-[12px] leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                  placeholder="입력하기"
                  value={row.monthlySalary || '0'}
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
                <span className="font-['Pretendard'] font-medium text-[12px] leading-[100%] text-[#B3B3B3]">
                  원
                </span>
              </div>
              {/* 생산직 여부 컴럼 */}
              <div className="flex flex-row items-center px-2 flex-1 h-8 bg-white border-l border-b border-[#D9D9D9]">
                <select
                  className="w-full font-['Pretendard'] font-medium text-[12px] leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                  value={row.isProduction === undefined ? '' : String(row.isProduction)}
                  onChange={e =>
                    setRows(prev =>
                      prev.map(r =>
                        r.id === row.id
                          ? { ...r, isProduction: e.target.value === 'true' }
                          : r
                      )
                    )
                  }
                >
                  <option value="">선택하기</option>
                  <option value="true">O</option>
                  <option value="false">X</option>
                </select>
              </div>
              {/* 관리 컴럼 */}
              <div className="flex flex-row justify-center items-center w-17 h-8 bg-white border-x border-b border-[#D9D9D9]">
                <button
                  onClick={() => handleDelete(row.id)}
                  className="flex flex-row justify-center items-center px-2 py-1.5 bg-[#F3F3F3] hover:bg-[#E0E0E0]"
                  disabled={loading}
                >
                  <span className="font-['Pretendard'] font-medium text-[12px] leading-[100%] text-[#1E1E1E]">
                    삭제
                  </span>
                </button>
              </div>
            </div>
          ))}
          {/* 추가하기 */}
          <div className="flex flex-row items-center w-full min-w-[200px] h-10">
            <button
              onClick={addRow}
              className="flex flex-row justify-center items-center p-3 gap-1 w-full min-w-[200px] h-10 bg-white border-l border-r border-b border-[#D9D9D9] cursor-pointer "
            >
              <div className="w-4 h-4">
                <Image src="/icons/plus_circle.svg" alt="추가" width={16} height={16} />
              </div>
              <span className="font-['Pretendard'] font-medium text-[12px] leading-[100%] text-center text-[#757575]">
                추가하기
              </span>
            </button>
          </div>
        </div>
      
      <ToastMessage 
        message={toastMessage}
        isVisible={showToast}
        onHide={hideToast}
      />
    </div>
  );
}