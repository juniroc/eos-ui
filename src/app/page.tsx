'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import { useAuth } from '@/contexts/AuthContext';
import { getBusinessInfo, saveBusinessInfo, extractBusinessInfoWithAuth } from '@/services/api';

interface FormData {
  companyName: string;
  businessNumber: string;
  businessCategory: string; // 법인/개인 구분
  corporateNumber: string;
  representativeName: string;
  establishmentDate: string;
  address: string;
  businessType: string; // 업태
  businessCategory2: string; // 종목
  taxOffice: string;
  settlementMonth?: string;
  settlementDay?: string;
}

export default function BusinessInfoPage() {
  const router = useRouter();
  const { token, isAuthenticated, loading: authLoading } = useAuth();
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    businessNumber: '',
    businessCategory: '',
    corporateNumber: '',
    representativeName: '',
    establishmentDate: '',
    address: '',
    businessType: '',
    businessCategory2: '',
    taxOffice: '',
    settlementMonth: '',
    settlementDay: '',
  });

  const [loading, setLoading] = useState(false);

  // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, router]);

  /** 저장 버튼 활성화 여부 → 필수 데이터가 하나라도 있으면 true */
  const hasData = Object.values(formData).some(value => 
    value !== undefined && value !== null && value.toString().trim() !== ''
  );

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  /** 초기 데이터 불러오기 */
  const fetchBusinessInfo = async () => {
    if (!token) return;
    
    try {
      setLoading(true);
      const data = await getBusinessInfo(token);
      setFormData(prev => ({
        ...prev,
        // API에서 받은 데이터의 null 값을 빈 문자열로 변환
        companyName: data.companyName || '',
        businessNumber: data.businessNumber || '',
        businessCategory: data.businessCategory || '',
        corporateNumber: data.corporateNumber || '',
        representativeName: data.representativeName || '',
        establishmentDate: data.establishmentDate || '',
        address: data.address || '',
        businessType: data.businessType || '',
        businessCategory2: data.businessCategory2 || '',
        taxOffice: data.taxOffice || '',
        settlementMonth: data.settlementMonth || '',
        settlementDay: data.settlementDay || '',
      }));
    } catch (err) {
      console.error('사업자 정보 조회 에러:', err);
      // 초기 로드 시에는 에러 알림 제거
    } finally {
      setLoading(false);
    }
  };

  /** 사업자등록증 파일 업로드 → AI 추출 API */
  const handleFileUpload = async (file: File) => {
    if (!token) return;
    
    try {
      setLoading(true);
      const data = await extractBusinessInfoWithAuth(file, token);

      setFormData(prev => ({
        ...prev,
        companyName: data.data.companyName || prev.companyName || '',
        businessNumber: data.data.businessNumber || prev.businessNumber || '',
        businessCategory: data.data.businessCategory || prev.businessCategory || '',
        corporateNumber: data.data.corporateNumber || prev.corporateNumber || '',
        representativeName: data.data.representativeName || prev.representativeName || '',
        establishmentDate: data.data.establishmentDate || prev.establishmentDate || '',
        address: data.data.address || prev.address || '',
        businessType: data.data.businessType?.[0] || prev.businessType || '',
        businessCategory2: data.data.businessCategory2?.[0] || prev.businessCategory2 || '',
        taxOffice: data.data.taxOffice || prev.taxOffice || '',
      }));
    } catch (err) {
      console.error('파일 업로드 에러:', err);
      alert('파일 업로드 중 문제가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  /** 저장 API 호출 */
  const handleSave = async () => {
    if (!token) return;
    
    try {
      setLoading(true);
      const result = await saveBusinessInfo(formData, token);

      if (result.success) {
        alert('저장되었습니다!');
      } else {
        alert('저장에 실패했습니다.');
      }
    } catch (err) {
      console.error('저장 에러:', err);
      alert('저장 중 문제가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  // ✅ 페이지 진입 시 기존 데이터 불러오기
  useEffect(() => {
    if (isAuthenticated && token) {
      fetchBusinessInfo();
    }
  }, [isAuthenticated, token]);

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold mb-2 text-[#1E1E1E]">
              사업자 정보
            </h2>
            <p className="text-[#767676]">
              파일을 업로드해서 자동으로 입력하거나 직접 입력하고 정보를
              저장하세요.
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="neutral"
              size="small"
              onClick={() => document.getElementById('fileUpload')?.click()}
              disabled={loading}
              loading={loading}
            >
              파일 업로드
            </Button>
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
            accept=".jpg,.png,.pdf,.doc,.docx"
            className="hidden"
            id="fileUpload"
            onChange={e =>
              e.target.files && handleFileUpload(e.target.files[0])
            }
          />
          <label htmlFor="fileUpload" className="cursor-pointer block">
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

        {/* 입력 테이블 */}
        <table className="w-full border border-[#D9D9D9] text-sm text-[#757575]">
          <tbody>
            <tr>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                회사명
              </td>
              <td className="p-3 border border-[#D9D9D9]">
                <input
                  className="w-full px-2 py-1"
                  placeholder="입력하기"
                  value={formData.companyName}
                  onChange={e => handleChange('companyName', e.target.value)}
                />
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                대표자명
              </td>
              <td className="p-3 border border-[#D9D9D9]">
                <input
                  className="w-full px-2 py-1"
                  placeholder="입력하기"
                  value={formData.representativeName}
                  onChange={e =>
                    handleChange('representativeName', e.target.value)
                  }
                />
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                개업일자
              </td>
              <td className="p-3 border border-[#D9D9D9]">
                <input
                  type="date"
                  className="w-full px-2 py-1"
                  value={formData.establishmentDate}
                  onChange={e =>
                    handleChange('establishmentDate', e.target.value)
                  }
                />
              </td>
            </tr>

            <tr>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                법인/개인 구분
              </td>
              <td className="p-3 border border-[#D9D9D9]">
                <select
                  className="w-full px-2 py-1"
                  value={formData.businessCategory}
                  onChange={e =>
                    handleChange('businessCategory', e.target.value)
                  }
                >
                  <option value="">선택하기</option>
                  <option value="법인">법인</option>
                  <option value="개인">개인</option>
                </select>
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                사업자등록번호
              </td>
              <td className="p-3 border border-[#D9D9D9]">
                <input
                  className="w-full px-2 py-1"
                  placeholder="입력하기"
                  value={formData.businessNumber}
                  onChange={e => handleChange('businessNumber', e.target.value)}
                />
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                법인등록번호
              </td>
              <td className="p-3 border border-[#D9D9D9]">
                <input
                  className="w-full px-2 py-1"
                  placeholder="입력하기"
                  value={formData.corporateNumber}
                  onChange={e =>
                    handleChange('corporateNumber', e.target.value)
                  }
                />
              </td>
            </tr>

            <tr>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">업태</td>
              <td className="p-3 border border-[#D9D9D9]">
                <input
                  className="w-full px-2 py-1"
                  placeholder="입력하기"
                  value={formData.businessType}
                  onChange={e => handleChange('businessType', e.target.value)}
                />
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">종목</td>
              <td className="p-3 border border-[#D9D9D9]">
                <input
                  className="w-full px-2 py-1"
                  placeholder="입력하기"
                  value={formData.businessCategory2}
                  onChange={e =>
                    handleChange('businessCategory2', e.target.value)
                  }
                />
              </td>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                관할세무서
              </td>
              <td className="p-3 border border-[#D9D9D9]">
                <input
                  className="w-full px-2 py-1"
                  placeholder="입력하기"
                  value={formData.taxOffice}
                  onChange={e => handleChange('taxOffice', e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                사업장주소
              </td>
              <td className="p-3 border border-[#D9D9D9]" colSpan={5}>
                <input
                  className="w-full px-2 py-1"
                  placeholder="입력하기"
                  value={formData.address}
                  onChange={e => handleChange('address', e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
