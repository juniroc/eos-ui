'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { getVatCompanyInfo, saveVatCompanyInfo, type VatCompanyInfo } from '@/services/api';
import ToastMessage from '@/components/ToastMessage';

export default function VatDocumentCreatePage() {
  const router = useRouter();
  const { token, isAuthenticated, loading: authLoading } = useAuth();
  const [reportingPeriodStart, setReportingPeriodStart] = useState<string>('');
  const [reportingPeriodEnd, setReportingPeriodEnd] = useState<string>('');
  const [vatCompanyInfo, setVatCompanyInfo] = useState<VatCompanyInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [showToast, setShowToast] = useState(false);

  /** 회사정보 조회 */
  const fetchVatCompanyInfo = useCallback(async () => {
    if (!token) return;
    
    try {
      setLoading(true);
      const data = await getVatCompanyInfo(token);
      setVatCompanyInfo(data);
    } catch (err) {
      console.error('회사정보 조회 에러:', err);
      alert('회사정보 조회에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (isAuthenticated && token) {
      fetchVatCompanyInfo();
    }
  }, [isAuthenticated, token, fetchVatCompanyInfo]);

  /** 회사정보 저장 */
  const handleSaveCompanyInfo = async () => {
    if (!token || !vatCompanyInfo) return;
    
    try {
      setLoading(true);
      const updateData = {
        name: vatCompanyInfo.name,
        representativeName: vatCompanyInfo.representativeName,
        establishmentDate: vatCompanyInfo.establishmentDate,
        businessType: vatCompanyInfo.businessType,
        businessCategory2: vatCompanyInfo.businessCategory2,
        address: vatCompanyInfo.address,
        phone: vatCompanyInfo.phone,
        refundBankName: vatCompanyInfo.refundBankName,
        refundBankBranch: vatCompanyInfo.refundBankBranch,
        refundAccount: vatCompanyInfo.refundAccount,
        mobilePhone: vatCompanyInfo.mobilePhone,
        email: vatCompanyInfo.email,
      };
      
      const savedData = await saveVatCompanyInfo(updateData, token);
      setVatCompanyInfo(savedData);
      setToastMessage('회사정보가 저장되었습니다!');
      setShowToast(true);
    } catch (err) {
      console.error('회사정보 저장 에러:', err);
      alert('회사정보 저장에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, router]);

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
    <div className="p-4">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end p-0 gap-4 w-full min-h-[46px] mb-4">
          {/* Title Group */}
          <div className="flex flex-col items-start p-0 w-full">
            {/* Menu Heading */}
            <div className="flex flex-col items-start py-[6px] px-0 pb-[2px] rounded-lg">
              <div className="flex flex-row items-start p-0 h-[21px]">
                <h2 className="h-[21px] font-['Pretendard'] font-semibold text-[15px] leading-[140%] text-[#1E1E1E]">
                  서류 생성
                </h2>
              </div>
            </div>
          </div>
          
          {/* 저장 버튼 */}
          {vatCompanyInfo && (
            <div className="flex flex-row justify-start sm:justify-end items-center p-0 gap-2 h-7">
              <button
                onClick={handleSaveCompanyInfo}
                disabled={loading}
                className="flex flex-row justify-center items-center px-3 py-2 gap-2 min-w-[66px] h-7 bg-[#F3F3F3] font-['Pretendard'] font-medium text-xs leading-[100%] text-[#1E1E1E] disabled:opacity-50"
              >
                저장하기
              </button>
            </div>
          )}
        </div>

        {/* 신고기간 입력란 */}
        <div className="flex flex-row items-start p-0 gap-0 mb-4">
          {/* 시작일 */}
          <div className="flex flex-col items-start p-0">
            <div className="flex flex-row items-center p-0">
              <div className="flex flex-row items-center p-2 bg-[#F5F5F5] border border-[#D9D9D9]">
                <span className="text-xs leading-[100%] text-[#757575]">신고기간</span>
              </div>
              <div className="flex flex-col items-start p-0">
                <div className="flex flex-row items-center p-2 gap-2 bg-white border border-[#D9D9D9] border-l-0">
                  <input
                    type="date"
                    className="text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                    placeholder="선택하기"
                    value={reportingPeriodStart}
                    onChange={(e) => setReportingPeriodStart(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* 종료일 */}
          <div className="flex flex-col items-start p-0">
            <div className="flex flex-row items-center p-0">
              <div className="flex flex-row items-center p-2 bg-[#F5F5F5] border border-[#D9D9D9] border-l-0">
                <span className="text-xs leading-[100%] text-[#757575]"></span>
              </div>
              <div className="flex flex-col items-start p-0">
                <div className="flex flex-row items-center p-2 gap-2 bg-white border border-[#D9D9D9] border-l-0">
                  <input
                    type="date"
                    className="text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                    placeholder="선택하기"
                    value={reportingPeriodEnd}
                    onChange={(e) => setReportingPeriodEnd(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 회사정보 입력란 */}
        {vatCompanyInfo && (
          <div className="flex flex-col items-start p-0 gap-4 mb-4">
            <div className="flex flex-col items-start p-0 gap-4 w-full">
              <div className="flex flex-row items-end p-0 gap-5 w-full">
                <div className="flex flex-col items-start p-0">
                  <div className="flex flex-row items-center p-0 gap-4 w-full">
                    <h3 className="text-sm leading-[140%] text-[#1E1E1E]">회사정보</h3>
                  </div>
                </div>
              </div>
              
              {/* 회사정보 필드들 - 2열 구조 */}
              <div className="flex flex-col items-start p-0 gap-0 w-full">
                {/* Row 1: 회사명, 대표자명 */}
                <div className="flex flex-row items-start p-0 w-full">
                  <div className="flex flex-row items-center p-0 w-1/2">
                    <div className="flex flex-row items-center p-2 bg-[#F5F5F5] border border-[#D9D9D9] border-r-0">
                      <span className="text-xs leading-[100%] text-[#757575]">회사명</span>
                    </div>
                    <div className="flex flex-col items-start p-0 flex-1">
                      <div className="flex flex-row items-center p-2 w-full bg-white border border-[#D9D9D9]">
                        <input
                          className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                          placeholder="입력하기"
                          value={vatCompanyInfo.name || ''}
                          onChange={(e) => setVatCompanyInfo(prev => prev ? { ...prev, name: e.target.value } : null)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center p-0 w-1/2">
                    <div className="flex flex-row items-center p-2 bg-[#F5F5F5] border border-[#D9D9D9] border-l-0 border-r-0">
                      <span className="text-xs leading-[100%] text-[#757575]">대표자명</span>
                    </div>
                    <div className="flex flex-col items-start p-0 flex-1">
                      <div className="flex flex-row items-center p-2 w-full bg-white border border-[#D9D9D9] border-l-0">
                        <input
                          className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                          placeholder="입력하기"
                          value={vatCompanyInfo.representativeName || ''}
                          onChange={(e) => setVatCompanyInfo(prev => prev ? { ...prev, representativeName: e.target.value } : null)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 2: 사업자등록번호(수정불가), 법인/개인 구분(수정불가) */}
                <div className="flex flex-row items-start p-0 w-full">
                  <div className="flex flex-row items-center p-0 w-1/2">
                    <div className="flex flex-row items-center p-2 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0 border-r-0">
                      <span className="text-xs leading-[100%] text-[#757575]">사업자등록번호</span>
                    </div>
                    <div className="flex flex-col items-start p-0 flex-1">
                      <div className="flex flex-row items-center p-2 w-full bg-[#E6E6E6] border border-[#D9D9D9] border-t-0">
                        <input
                          className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                          readOnly
                          value={vatCompanyInfo.businessNumber || ''}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center p-0 w-1/2">
                    <div className="flex flex-row items-center p-2 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0 border-l-0 border-r-0">
                      <span className="text-xs leading-[100%] text-[#757575]">법인/개인 구분</span>
                    </div>
                    <div className="flex flex-col items-start p-0 flex-1">
                      <div className="flex flex-row items-center p-2 w-full bg-[#E6E6E6] border border-[#D9D9D9] border-t-0 border-l-0">
                        <input
                          className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                          readOnly
                          value={vatCompanyInfo.businessCategory || ''}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 3: 법인등록번호(수정불가), 개업일자 */}
                <div className="flex flex-row items-start p-0 w-full">
                  <div className="flex flex-row items-center p-0 w-1/2">
                    <div className="flex flex-row items-center p-2 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0 border-r-0">
                      <span className="text-xs leading-[100%] text-[#757575]">법인등록번호</span>
                    </div>
                    <div className="flex flex-col items-start p-0 flex-1">
                      <div className="flex flex-row items-center p-2 w-full bg-[#E6E6E6] border border-[#D9D9D9] border-t-0">
                        <input
                          className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                          readOnly
                          value={vatCompanyInfo.corporateNumber || ''}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center p-0 w-1/2">
                    <div className="flex flex-row items-center p-2 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0 border-l-0 border-r-0">
                      <span className="text-xs leading-[100%] text-[#757575]">개업일자</span>
                    </div>
                    <div className="flex flex-col items-start p-0 flex-1">
                      <div className="flex flex-row items-center p-2 w-full bg-white border border-[#D9D9D9] border-t-0 border-l-0">
                        <input
                          type="date"
                          className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                          value={vatCompanyInfo.establishmentDate || ''}
                          onChange={(e) => setVatCompanyInfo(prev => prev ? { ...prev, establishmentDate: e.target.value } : null)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 4: 업태, 종목 (배열 필드 - 일단 첫 번째 값만 표시) */}
                <div className="flex flex-row items-start p-0 w-full">
                  <div className="flex flex-row items-center p-0 w-1/2">
                    <div className="flex flex-row items-center p-2 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0 border-r-0">
                      <span className="text-xs leading-[100%] text-[#757575]">업태</span>
                    </div>
                    <div className="flex flex-col items-start p-0 flex-1">
                      <div className="flex flex-row items-center p-2 w-full bg-white border border-[#D9D9D9] border-t-0">
                        <input
                          className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                          placeholder="입력하기"
                          value={vatCompanyInfo.businessType?.join(', ') || ''}
                          onChange={(e) => setVatCompanyInfo(prev => prev ? { ...prev, businessType: e.target.value.split(',').map(s => s.trim()).filter(s => s) } : null)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center p-0 w-1/2">
                    <div className="flex flex-row items-center p-2 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0 border-l-0 border-r-0">
                      <span className="text-xs leading-[100%] text-[#757575]">종목</span>
                    </div>
                    <div className="flex flex-col items-start p-0 flex-1">
                      <div className="flex flex-row items-center p-2 w-full bg-white border border-[#D9D9D9] border-t-0 border-l-0">
                        <input
                          className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                          placeholder="입력하기"
                          value={vatCompanyInfo.businessCategory2?.join(', ') || ''}
                          onChange={(e) => setVatCompanyInfo(prev => prev ? { ...prev, businessCategory2: e.target.value.split(',').map(s => s.trim()).filter(s => s) } : null)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 5: 사업장주소 */}
                <div className="flex flex-row items-start p-0 w-full">
                  <div className="flex flex-row items-center p-0 w-full">
                    <div className="flex flex-row items-center p-2 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0">
                      <span className="text-xs leading-[100%] text-[#757575]">사업장주소</span>
                    </div>
                    <div className="flex flex-col items-start p-0 flex-1">
                      <div className="flex flex-row items-center p-2 w-full bg-white border border-[#D9D9D9] border-t-0 border-l-0">
                        <input
                          className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                          placeholder="입력하기"
                          value={vatCompanyInfo.address || ''}
                          onChange={(e) => setVatCompanyInfo(prev => prev ? { ...prev, address: e.target.value } : null)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 6: 사업장 전화번호, 휴대전화 */}
                <div className="flex flex-row items-start p-0 w-full">
                  <div className="flex flex-row items-center p-0 w-1/2">
                    <div className="flex flex-row items-center p-2 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0 border-r-0">
                      <span className="text-xs leading-[100%] text-[#757575]">사업장 전화번호</span>
                    </div>
                    <div className="flex flex-col items-start p-0 flex-1">
                      <div className="flex flex-row items-center p-2 w-full bg-white border border-[#D9D9D9] border-t-0">
                        <input
                          className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                          placeholder="입력하기"
                          value={vatCompanyInfo.phone || ''}
                          onChange={(e) => setVatCompanyInfo(prev => prev ? { ...prev, phone: e.target.value } : null)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center p-0 w-1/2">
                    <div className="flex flex-row items-center p-2 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0 border-l-0 border-r-0">
                      <span className="text-xs leading-[100%] text-[#757575]">휴대전화</span>
                    </div>
                    <div className="flex flex-col items-start p-0 flex-1">
                      <div className="flex flex-row items-center p-2 w-full bg-white border border-[#D9D9D9] border-t-0 border-l-0">
                        <input
                          className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                          placeholder="입력하기"
                          value={vatCompanyInfo.mobilePhone || ''}
                          onChange={(e) => setVatCompanyInfo(prev => prev ? { ...prev, mobilePhone: e.target.value } : null)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 7: 전자우편주소 */}
                <div className="flex flex-row items-start p-0 w-full">
                  <div className="flex flex-row items-center p-0 w-full">
                    <div className="flex flex-row items-center p-2 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0">
                      <span className="text-xs leading-[100%] text-[#757575]">전자우편주소</span>
                    </div>
                    <div className="flex flex-col items-start p-0 flex-1">
                      <div className="flex flex-row items-center p-2 w-full bg-white border border-[#D9D9D9] border-t-0 border-l-0">
                        <input
                          className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                          placeholder="입력하기"
                          value={vatCompanyInfo.email || ''}
                          onChange={(e) => setVatCompanyInfo(prev => prev ? { ...prev, email: e.target.value } : null)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 8: 환급계좌은행(은행), 환급계좌은행(지점) */}
                <div className="flex flex-row items-start p-0 w-full">
                  <div className="flex flex-row items-center p-0 w-1/2">
                    <div className="flex flex-row items-center p-2 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0 border-r-0">
                      <span className="text-xs leading-[100%] text-[#757575]">환급계좌은행(은행)</span>
                    </div>
                    <div className="flex flex-col items-start p-0 flex-1">
                      <div className="flex flex-row items-center p-2 w-full bg-white border border-[#D9D9D9] border-t-0">
                        <input
                          className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                          placeholder="입력하기"
                          value={vatCompanyInfo.refundBankName || ''}
                          onChange={(e) => setVatCompanyInfo(prev => prev ? { ...prev, refundBankName: e.target.value } : null)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center p-0 w-1/2">
                    <div className="flex flex-row items-center p-2 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0 border-l-0 border-r-0">
                      <span className="text-xs leading-[100%] text-[#757575]">환급계좌은행(지점)</span>
                    </div>
                    <div className="flex flex-col items-start p-0 flex-1">
                      <div className="flex flex-row items-center p-2 w-full bg-white border border-[#D9D9D9] border-t-0 border-l-0">
                        <input
                          className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                          placeholder="입력하기"
                          value={vatCompanyInfo.refundBankBranch || ''}
                          onChange={(e) => setVatCompanyInfo(prev => prev ? { ...prev, refundBankBranch: e.target.value } : null)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 9: 계좌번호 */}
                <div className="flex flex-row items-start p-0 w-full">
                  <div className="flex flex-row items-center p-0 w-full">
                    <div className="flex flex-row items-center p-2 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0">
                      <span className="text-xs leading-[100%] text-[#757575]">계좌번호</span>
                    </div>
                    <div className="flex flex-col items-start p-0 flex-1">
                      <div className="flex flex-row items-center p-2 w-full bg-white border border-[#D9D9D9] border-t-0 border-l-0">
                        <input
                          className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                          placeholder="입력하기"
                          value={vatCompanyInfo.refundAccount || ''}
                          onChange={(e) => setVatCompanyInfo(prev => prev ? { ...prev, refundAccount: e.target.value } : null)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <ToastMessage 
        message={toastMessage}
        isVisible={showToast}
        onHide={() => setShowToast(false)}
      />
    </div>
  );
}
