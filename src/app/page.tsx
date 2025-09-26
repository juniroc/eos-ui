'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import { useAuth } from '@/contexts/AuthContext';
import { getBusinessInfo, saveBusinessInfo, extractBusinessInfoWithAuth } from '@/services/api';
import FileUploadBox from '@/components/FileUploadBox';
import ToastMessage from '@/components/ToastMessage';
import Image from 'next/image';

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
  businessPhone?: string; // 사업장 전화번호
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
    businessPhone: '',
    settlementMonth: '',
    settlementDay: '',
  });

  const [loading, setLoading] = useState(false);
  const dateInputRef = useRef<HTMLInputElement>(null);
  const [isBusinessCategoryOpen, setIsBusinessCategoryOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

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
  const fetchBusinessInfo = useCallback(async () => {
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
        // businessPhone: data.businessPhone || '',
        settlementMonth: data.settlementMonth || '',
        settlementDay: data.settlementDay || '',
      }));
    } catch (err) {
      console.error('사업자 정보 조회 에러:', err);
      // 초기 로드 시에는 에러 알림 제거
    } finally {
      setLoading(false);
    }
  }, [token]);

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
        // businessPhone: data.data.businessPhone || prev.businessPhone || '',
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
        setShowToast(true);
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
  }, [isAuthenticated, token, fetchBusinessInfo]);

  // dropdown 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isBusinessCategoryOpen) {
        setIsBusinessCategoryOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isBusinessCategoryOpen]);

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
                      사업자 정보
                    </span>
                  </div>
                </div>
                <span className="text-xs leading-[140%] text-center text-[#767676]">
                  파일을 업로드해서 자동으로 입력하거나 직접 입력하고 정보를 저장하세요.
                </span>
              </div>
              <div className="flex flex-row justify-end items-center p-0 gap-2">
                <Button
                  variant="neutral"
                  size="small"
                  onClick={() => document.getElementById('fileUpload')?.click()}
                  disabled={loading}
                  loading={loading}
                  className="flex flex-row justify-center items-center px-3 py-2 gap-2 bg-[#F3F3F3] text-xs leading-[100%] text-[#1E1E1E] font-medium"
                >
                  파일 업로드
                </Button>
                <Button
                  variant="neutral"
                  size="small"
                  onClick={handleSave}
                  disabled={!hasData || loading}
                  loading={loading}
                  className="flex flex-row justify-center items-center px-3 py-2 gap-2 bg-[#E6E6E6] text-xs leading-[100%] text-[#B3B3B3] font-medium"
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
                  파일을 선택하거나 드래그하여 파일을 편하게 업로드하세요.
                </span>
                <span className="text-xs leading-[140%] text-center text-[#767676]">
                  (JPG, PNG, PDF, DOC, DOCX 파일만 지원됩니다.)
                </span>
              </div>
              <FileUploadBox
                id="fileUpload"
                onFileUpload={handleFileUpload}
                loading={loading}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
          </div>

          {/* 제목혼합-3열형 */}
          <div className="flex flex-col items-start p-0 w-full">
            {/* Row 1 */}
            <div className="flex flex-row items-start p-0 w-full h-8">
              <div className="flex flex-row items-center p-0 w-1/2">
                <div className="flex flex-row items-center p-2 w-[100px] h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-r-0">
                  <span className="text-xs leading-[100%] text-[#757575] font-medium">회사명</span>
                </div>
                <div className="flex flex-col items-start p-0 gap-2 flex-1">
                  <div className="flex flex-row items-center p-2 w-full h-8 bg-white border border-[#D9D9D9]">
                    <input
                      className="flex-1 text-xs leading-[100%] text-[#B3B3B3] font-medium bg-transparent border-none outline-none"
                      placeholder="입력하기"
                      value={formData.companyName}
                      onChange={e => handleChange('companyName', e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center p-0 w-1/2">
                <div className="flex flex-row items-center p-2 w-[100px] h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-l-0 border-r-0">
                  <span className="text-xs leading-[100%] text-[#757575] font-medium">대표자명</span>
                </div>
                <div className="flex flex-col items-start p-0 gap-2 flex-1">
                  <div className="flex flex-row items-center p-2 w-full h-8 bg-white border border-[#D9D9D9] border-l-0">
                    <input
                      className="flex-1 text-xs leading-[100%] text-[#B3B3B3] font-medium bg-transparent border-none outline-none"
                      placeholder="입력하기"
                      value={formData.representativeName}
                      onChange={e => handleChange('representativeName', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-row items-start p-0 w-full h-8">
              <div className="flex flex-row items-center p-0 w-1/2">
                <div className="flex flex-row items-center p-2 w-[100px] h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0 border-r-0">
                  <span className="text-xs leading-[100%] text-[#757575] font-medium">개업일자</span>
                </div>
                <div className="flex flex-col items-start p-0 gap-2 flex-1">
                  <div className="flex flex-row items-center p-2 gap-2 w-full h-8 bg-white border border-[#D9D9D9] border-t-0">
                    <input
                      ref={dateInputRef}
                      type="date"
                      className="flex-1 text-xs leading-[100%] text-[#B3B3B3] font-medium bg-transparent border-none outline-none [&::-webkit-calendar-picker-indicator]:opacity-0"
                      value={formData.establishmentDate}
                      onChange={e => handleChange('establishmentDate', e.target.value)}
                    />
                    <div 
                      className="w-4 h-4 flex items-center justify-center cursor-pointer"
                      onClick={() => dateInputRef.current?.showPicker()}
                    >
                      <Image src="/icons/calendar.svg" alt="calendar" width={16} height={16} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center p-0 w-1/2">
                <div className="flex flex-row items-center p-2 w-[100px] h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0 border-l-0 border-r-0">
                  <span className="text-xs leading-[100%] text-[#757575] font-medium">법인/개인 구분</span>
                </div>
                <div className="flex flex-col items-start p-0 gap-2 flex-1 relative">
                  <div 
                    className="flex flex-row items-center justify-between p-2 w-full h-8 bg-white border border-[#D9D9D9] border-t-0 border-l-0 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsBusinessCategoryOpen(!isBusinessCategoryOpen);
                    }}
                  >
                    <span className={`text-xs leading-[100%] font-medium text-[#B3B3B3]`}>
                      {formData.businessCategory || '선택하기'}
                    </span>
                    <div className="w-4 h-4 flex items-center justify-center">
                      <Image 
                        src="/icons/arrow_down.svg" 
                        alt="arrow_down" 
                        width={16} 
                        height={16}
                        className={`transition-transform duration-200 ${isBusinessCategoryOpen ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </div>
                  {isBusinessCategoryOpen && (
                    <div className="absolute top-8 left-0 right-0 z-10 bg-white border border-[#D9D9D9] border-t-0 shadow-lg">
                      <div 
                        className="flex flex-row items-center p-2 h-8 hover:bg-[#F5F5F5] cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleChange('businessCategory', '개인');
                          setIsBusinessCategoryOpen(false);
                        }}
                      >
                        <span className="text-xs leading-[100%] text-[#B3B3B3] font-medium">개인</span>
                      </div>
                      <div 
                        className="flex flex-row items-center p-2 h-8 hover:bg-[#F5F5F5] cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleChange('businessCategory', '법인');
                          setIsBusinessCategoryOpen(false);
                        }}
                      >
                        <span className="text-xs leading-[100%] text-[#B3B3B3] font-medium">법인</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-row items-start p-0 w-full h-8">
              <div className="flex flex-row items-center p-0 w-1/2">
                <div className="flex flex-row items-center p-2 w-[100px] h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0 border-r-0">
                  <span className="text-xs leading-[100%] text-[#757575] font-medium">사업자등록번호</span>
                </div>
                <div className="flex flex-col items-start p-0 gap-2 flex-1">
                  <div className="flex flex-row items-center p-2 w-full h-8 bg-white border border-[#D9D9D9] border-t-0">
                    <input
                      className="flex-1 text-xs leading-[100%] text-[#B3B3B3] font-medium bg-transparent border-none outline-none"
                      placeholder="입력하기"
                      value={formData.businessNumber}
                      onChange={e => handleChange('businessNumber', e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center p-0 w-1/2">
                <div className="flex flex-row items-center p-2 w-[100px] h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0 border-l-0 border-r-0">
                  <span className="text-xs leading-[100%] text-[#757575] font-medium">법인등록번호</span>
                </div>
                <div className="flex flex-col items-start p-0 gap-2 flex-1">
                  <div className="flex flex-row items-center p-2 w-full h-8 bg-white border border-[#D9D9D9] border-t-0 border-l-0">
                    <input
                      className="flex-1 text-xs leading-[100%] text-[#B3B3B3] font-medium bg-transparent border-none outline-none"
                      placeholder="입력하기"
                      value={formData.corporateNumber}
                      onChange={e => handleChange('corporateNumber', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 4 */}
            <div className="flex flex-row items-start p-0 w-full h-8">
              <div className="flex flex-row items-center p-0 w-1/2">
                <div className="flex flex-row items-center p-2 w-[100px] h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0 border-r-0">
                  <span className="text-xs leading-[100%] text-[#757575] font-medium">업태</span>
                </div>
                <div className="flex flex-col items-start p-0 gap-2 flex-1">
                  <div className="flex flex-row items-center p-2 w-full h-8 bg-white border border-[#D9D9D9] border-t-0">
                    <input
                      className="flex-1 text-xs leading-[100%] text-[#B3B3B3] font-medium bg-transparent border-none outline-none"
                      placeholder="입력하기"
                      value={formData.businessType}
                      onChange={e => handleChange('businessType', e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center p-0 w-1/2">
                <div className="flex flex-row items-center p-2 w-[100px] h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0 border-l-0 border-r-0">
                  <span className="text-xs leading-[100%] text-[#757575] font-medium">종목</span>
                </div>
                <div className="flex flex-col items-start p-0 gap-2 flex-1">
                  <div className="flex flex-row items-center p-2 w-full h-8 bg-white border border-[#D9D9D9] border-t-0 border-l-0">
                    <input
                      className="flex-1 text-xs leading-[100%] text-[#B3B3B3] font-medium bg-transparent border-none outline-none"
                      placeholder="입력하기"
                      value={formData.businessCategory2}
                      onChange={e => handleChange('businessCategory2', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 5 */}
            <div className="flex flex-row items-start p-0 w-full h-8">
              <div className="flex flex-row items-center p-0 w-1/2">
                <div className="flex flex-row items-center p-2 w-[100px] h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0 border-r-0">
                  <span className="text-xs leading-[100%] text-[#757575] font-medium">관할세무서</span>
                </div>
                <div className="flex flex-col items-start p-0 gap-2 flex-1">
                  <div className="flex flex-row items-center p-2 w-full h-8 bg-white border border-[#D9D9D9] border-t-0">
                    <input
                      className="flex-1 text-xs leading-[100%] text-[#B3B3B3] font-medium bg-transparent border-none outline-none"
                      placeholder="입력하기"
                      value={formData.taxOffice}
                      onChange={e => handleChange('taxOffice', e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center p-0 w-1/2">
                <div className="flex flex-row items-center p-2 w-[100px] h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0 border-l-0 border-r-0">
                  <span className="text-xs leading-[100%] text-[#757575] font-medium">사업장주소</span>
                </div>
                <div className="flex flex-col items-start p-0 gap-2 flex-1">
                  <div className="flex flex-row items-center p-2 w-full h-8 bg-white border border-[#D9D9D9] border-t-0 border-l-0">
                    <input
                      className="flex-1 text-xs leading-[100%] text-[#B3B3B3] font-medium bg-transparent border-none outline-none"
                      placeholder="입력하기"
                      value={formData.address}
                      onChange={e => handleChange('address', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 6 - 사업장 전화번호 (전체 너비) */}
            <div className="flex flex-row items-start p-0 w-full h-8">
              <div className="flex flex-row items-center p-0 w-full">
                <div className="flex flex-row items-center p-2 w-[100px] h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0 border-r-0">
                  <span className="text-xs leading-[100%] text-[#757575] font-medium">사업장전화번호</span>
                </div>
                <div className="flex flex-col items-start p-0 gap-2 flex-1">
                  <div className="flex flex-row items-center p-2 w-full h-8 bg-white border border-[#D9D9D9] border-t-0">
                    <input
                      className="flex-1 text-xs leading-[100%] text-[#B3B3B3] font-medium bg-transparent border-none outline-none"
                      placeholder="입력하기"
                      value={formData.businessPhone}
                      onChange={e => handleChange('businessPhone', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <ToastMessage 
        message="사업자 정보가 저장되었습니다!" 
        isVisible={showToast} 
        onHide={() => setShowToast(false)}
      />
    </div>
  );
}
