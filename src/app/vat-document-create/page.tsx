'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import {
  createVatReport,
  deleteStamp,
  getStamp,
  getVatCompanyInfo,
  saveVatCompanyInfo,
  uploadStamp,
  type VatCompanyInfo,
  VatFormData,
} from '@/services/api';
import ToastMessage from '@/components/ToastMessage';
import Image from 'next/image';
import VatDocumentCreateModal from '@/components/documentCreate/VatDocumentCreateModal';

export default function VatDocumentCreatePage() {
  const router = useRouter();
  const { token, isAuthenticated, loading: authLoading } = useAuth();
  // 오늘 날짜를 YYYY-MM-DD 형식으로 반환하는 함수
  const getTodayDateString = (): string => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // 날짜에 따른 기본 신고유형 계산 함수
  const getDefaultReportingType = (): string => {
    const today = new Date();
    const month = today.getMonth() + 1; // 1-12
    const day = today.getDate(); // 1-31

    // 1.26~4.25, 7.26~10.25 → 예정
    // 4.26~7.25, 10.26~1.25 → 확정

    if (
      (month === 1 && day >= 26) ||
      (month >= 2 && month <= 3) ||
      (month === 4 && day <= 25) ||
      (month === 7 && day >= 26) ||
      (month >= 8 && month <= 9) ||
      (month === 10 && day <= 25)
    ) {
      return '예정';
    } else {
      return '확정';
    }
  };

  const [reportingPeriodStart, setReportingPeriodStart] =
    useState<string>(getTodayDateString());
  const [reportingType, setReportingType] = useState<string>(
    getDefaultReportingType()
  );
  const [vatCompanyInfo, setVatCompanyInfo] = useState<VatCompanyInfo | null>(
    null
  );
  const [stampImageUrl, setStampImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [showToast, setShowToast] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createdReportId, setCreatedReportId] = useState<string | null>(null);
  const [reportForms, setReportForms] = useState<VatFormData[]>([]);

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

  /** 도장 조회 */
  const fetchStamp = useCallback(async () => {
    if (!token) return;

    try {
      const url = await getStamp(token);
      setStampImageUrl(url);
    } catch {
      // 404는 정상 (도장이 없는 경우)
      setStampImageUrl(null);
    }
  }, [token]);

  useEffect(() => {
    if (isAuthenticated && token) {
      fetchVatCompanyInfo();
      fetchStamp();
    }
  }, [isAuthenticated, token, fetchVatCompanyInfo, fetchStamp]);

  /** 도장 업로드 */
  const handleStampUpload = async (file: File) => {
    if (!token) return;

    // PNG/JPG 파일만 허용
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    if (!allowedTypes.includes(file.type)) {
      alert('PNG 또는 JPG 파일만 업로드 가능합니다.');
      return;
    }

    try {
      setLoading(true);
      await uploadStamp(file, token);
      // 업로드 후 다시 조회
      await fetchStamp();
      setToastMessage('등록된 인감 혹은 서명이 완료됐어요!');
      setShowToast(true);
    } catch (err) {
      console.error('도장 업로드 에러:', err);
      const errorMessage =
        err instanceof Error ? err.message : '도장 업로드에 실패했습니다.';
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  /** 도장 삭제 */
  const handleStampDelete = async () => {
    if (!token) return;

    if (!confirm('도장을 삭제하시겠습니까?')) return;

    try {
      setLoading(true);
      await deleteStamp(token);
      setStampImageUrl(null);
      setToastMessage('도장이 삭제되었습니다!');
      setShowToast(true);
    } catch (err) {
      console.error('도장 삭제 에러:', err);
      alert('도장 삭제에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

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
      setToastMessage('회사정보가 저장됐어요!');
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

  // 서류 생성 버튼 활성화 조건
  const canCreateDocument =
    reportingPeriodStart !== '' &&
    reportingType !== '' &&
    stampImageUrl !== null;

  /** 서류 생성하기 */
  const handleCreateDocument = async () => {
    if (!token) {
      alert('로그인이 필요합니다.');
      return;
    }

    if (!canCreateDocument) {
      alert('신고일정, 신고유형을 선택하고 도장을 등록해주세요.');
      return;
    }

    // reportingType을 API의 filingType으로 매핑
    const filingTypeMap: Record<
      string,
      'SCHEDULED' | 'CONFIRMED' | 'AFTER_DEADLINE' | 'EARLY_REFUND'
    > = {
      예정: 'SCHEDULED',
      확정: 'CONFIRMED',
      '기한 후 환급': 'AFTER_DEADLINE',
      '조기 환급': 'EARLY_REFUND',
    };

    const filingType = filingTypeMap[reportingType] || 'SCHEDULED';

    try {
      setLoading(true);
      const response = await createVatReport(
        {
          filingDate: reportingPeriodStart,
          filingType: filingType,
        },
        token
      );

      // 성공 시 모달 열기 및 토스트 메시지 표시
      setCreatedReportId(response.id);
      setReportForms(response.forms);
      setToastMessage('서류가 생성됐어요!');
      setShowToast(true);
      setIsModalOpen(true);
    } catch (err) {
      console.error('서류 생성 에러:', err);
      const errorMessage =
        err instanceof Error ? err.message : '서류 생성에 실패했습니다.';
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mx-auto my-4 mr-4">
        {/* 메인 컨텐츠 영역 - 2열 구조 */}
        <div className="flex flex-row items-start p-0 gap-4 w-full">
          {/* 왼쪽: 신고기간 + 회사정보 */}
          <div className="flex flex-col items-start p-0 gap-4 flex-1">
            {/* 신고기간 입력란 */}
            <div className="flex flex-col items-start p-0 gap-4 w-full">
              <div className="flex flex-row items-end p-0 gap-5 w-full">
                <div className="flex flex-col items-start p-0">
                  <div className="flex flex-row items-center p-0 gap-4 w-full">
                    <h3 className="text-sm leading-[140%] text-[#1E1E1E]">
                      신고기간
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-row items-start p-0 w-full h-8">
                {/* 신고일정 */}
                <div className="flex flex-row items-center p-0 w-1/2">
                  <div className="flex flex-row items-center p-2 w-[100px] h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-r-0">
                    <span className="text-xs leading-[100%] text-[#757575]">
                      신고일정
                    </span>
                  </div>
                  <div className="flex flex-col items-start p-0 gap-2 flex-1">
                    <div className="flex flex-row items-center p-2 gap-2 w-full h-8 bg-white border border-[#D9D9D9]">
                      <input
                        type="date"
                        className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                        placeholder="선택하기"
                        value={reportingPeriodStart}
                        onChange={e => setReportingPeriodStart(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                {/* 신고유형 */}
                <div className="flex flex-row items-center p-0 w-1/2">
                  <div className="flex flex-row items-center p-2 w-[100px] h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-l-0 border-r-0">
                    <span className="text-xs leading-[100%] text-[#757575]">
                      신고유형
                    </span>
                  </div>
                  <div className="flex flex-col items-start p-0 gap-2 flex-1">
                    <div className="flex flex-row items-center p-2 w-full h-8 bg-white border border-[#D9D9D9] border-l-0">
                      <select
                        className="w-full text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                        value={reportingType}
                        onChange={e => setReportingType(e.target.value)}
                      >
                        <option value="예정">예정</option>
                        <option value="확정">확정</option>
                        <option value="기한 후 환급">기한 후 환급</option>
                        <option value="조기 환급">조기 환급</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 회사정보 입력란 */}
            {vatCompanyInfo && (
              <div className="flex flex-col items-start p-0 gap-4 w-full">
                <div className="flex flex-row items-end p-0 gap-5 w-full">
                  <div className="flex flex-col items-start p-0">
                    <div className="flex flex-row items-center p-0 gap-4 w-full">
                      <h3 className="text-sm leading-[140%] text-[#1E1E1E]">
                        회사정보
                      </h3>
                    </div>
                  </div>
                </div>

                {/* 회사정보 필드들 - 2열 구조 */}
                <div className="flex flex-col items-start p-0 gap-0 w-full">
                  {/* Row 1: 회사명, 대표자명 */}
                  <div className="flex flex-row items-start p-0 w-full h-8">
                    <div className="flex flex-row items-center p-0 w-1/2">
                      <div className="flex flex-row items-center p-2 w-[100px] h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-r-0">
                        <span className="text-xs leading-[100%] text-[#757575]">
                          회사명
                        </span>
                      </div>
                      <div className="flex flex-col items-start p-0 gap-2 flex-1">
                        <div className="flex flex-row items-center p-2 w-full h-8 bg-white border border-[#D9D9D9]">
                          <input
                            className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                            placeholder="입력하기"
                            value={vatCompanyInfo.name || ''}
                            onChange={e =>
                              setVatCompanyInfo(prev =>
                                prev ? { ...prev, name: e.target.value } : null
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center p-0 w-1/2">
                      <div className="flex flex-row items-center p-2 w-[100px] h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-l-0 border-r-0">
                        <span className="text-xs leading-[100%] text-[#757575]">
                          대표자명
                        </span>
                      </div>
                      <div className="flex flex-col items-start p-0 gap-2 flex-1">
                        <div className="flex flex-row items-center p-2 w-full h-8 bg-white border border-[#D9D9D9] border-l-0">
                          <input
                            className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                            placeholder="입력하기"
                            value={vatCompanyInfo.representativeName || ''}
                            onChange={e =>
                              setVatCompanyInfo(prev =>
                                prev
                                  ? {
                                      ...prev,
                                      representativeName: e.target.value,
                                    }
                                  : null
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 2: 사업자등록번호(수정불가), 법인/개인 구분(수정불가) */}
                  <div className="flex flex-row items-start p-0 w-full h-8">
                    <div className="flex flex-row items-center p-0 w-1/2">
                      <div className="flex flex-row items-center p-2 w-[100px] h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0 border-r-0">
                        <span className="text-xs leading-[100%] text-[#757575]">
                          사업자등록번호
                        </span>
                      </div>
                      <div className="flex flex-col items-start p-0 gap-2 flex-1">
                        <div className="flex flex-row items-center p-2 w-full h-8 bg-[#E6E6E6] border border-[#D9D9D9] border-t-0">
                          <input
                            className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                            readOnly
                            value={vatCompanyInfo.businessNumber || ''}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center p-0 w-1/2">
                      <div className="flex flex-row items-center p-2 w-[100px] h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0 border-l-0 border-r-0">
                        <span className="text-xs leading-[100%] text-[#757575]">
                          법인/개인 구분
                        </span>
                      </div>
                      <div className="flex flex-col items-start p-0 gap-2 flex-1">
                        <div className="flex flex-row items-center p-2 w-full h-8 bg-[#E6E6E6] border border-[#D9D9D9] border-t-0 border-l-0">
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
                  <div className="flex flex-row items-start p-0 w-full h-8">
                    <div className="flex flex-row items-center p-0 w-1/2">
                      <div className="flex flex-row items-center p-2 w-[100px] h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0 border-r-0">
                        <span className="text-xs leading-[100%] text-[#757575]">
                          법인등록번호
                        </span>
                      </div>
                      <div className="flex flex-col items-start p-0 gap-2 flex-1">
                        <div className="flex flex-row items-center p-2 w-full h-8 bg-[#E6E6E6] border border-[#D9D9D9] border-t-0">
                          <input
                            className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                            readOnly
                            value={vatCompanyInfo.corporateNumber || ''}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center p-0 w-1/2">
                      <div className="flex flex-row items-center p-2 w-[100px] h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0 border-l-0 border-r-0">
                        <span className="text-xs leading-[100%] text-[#757575]">
                          개업일자
                        </span>
                      </div>
                      <div className="flex flex-col items-start p-0 gap-2 flex-1">
                        <div className="flex flex-row items-center p-2 w-full h-8 bg-white border border-[#D9D9D9] border-t-0 border-l-0">
                          <input
                            type="date"
                            className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                            value={vatCompanyInfo.establishmentDate || ''}
                            onChange={e =>
                              setVatCompanyInfo(prev =>
                                prev
                                  ? {
                                      ...prev,
                                      establishmentDate: e.target.value,
                                    }
                                  : null
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 4: 업태, 종목 (배열 필드 - 일단 첫 번째 값만 표시) */}
                  <div className="flex flex-row items-start p-0 w-full h-8">
                    <div className="flex flex-row items-center p-0 w-1/2">
                      <div className="flex flex-row items-center p-2 w-[100px] h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0 border-r-0">
                        <span className="text-xs leading-[100%] text-[#757575]">
                          업태
                        </span>
                      </div>
                      <div className="flex flex-col items-start p-0 gap-2 flex-1">
                        <div className="flex flex-row items-center p-2 w-full h-8 bg-white border border-[#D9D9D9] border-t-0">
                          <input
                            className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                            placeholder="입력하기"
                            value={
                              Array.isArray(vatCompanyInfo.businessType)
                                ? vatCompanyInfo.businessType.join(', ')
                                : vatCompanyInfo.businessType || ''
                            }
                            onChange={e =>
                              setVatCompanyInfo(prev =>
                                prev
                                  ? {
                                      ...prev,
                                      businessType: e.target.value
                                        .split(',')
                                        .map(s => s.trim())
                                        .filter(s => s),
                                    }
                                  : null
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center p-0 w-1/2">
                      <div className="flex flex-row items-center p-2 w-[100px] h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0 border-l-0 border-r-0">
                        <span className="text-xs leading-[100%] text-[#757575]">
                          종목
                        </span>
                      </div>
                      <div className="flex flex-col items-start p-0 gap-2 flex-1">
                        <div className="flex flex-row items-center p-2 w-full h-8 bg-white border border-[#D9D9D9] border-t-0 border-l-0">
                          <input
                            className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                            placeholder="입력하기"
                            value={
                              Array.isArray(vatCompanyInfo.businessCategory2)
                                ? vatCompanyInfo.businessCategory2.join(', ')
                                : vatCompanyInfo.businessCategory2 || ''
                            }
                            onChange={e =>
                              setVatCompanyInfo(prev =>
                                prev
                                  ? {
                                      ...prev,
                                      businessCategory2: e.target.value
                                        .split(',')
                                        .map(s => s.trim())
                                        .filter(s => s),
                                    }
                                  : null
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 5: 사업장주소, 사업장 전화번호 */}
                  <div className="flex flex-row items-start p-0 w-full h-8">
                    <div className="flex flex-row items-center p-0 w-1/2">
                      <div className="flex flex-row items-center p-2 w-[100px] h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0 border-r-0">
                        <span className="text-xs leading-[100%] text-[#757575]">
                          사업장주소
                        </span>
                      </div>
                      <div className="flex flex-col items-start p-0 gap-2 flex-1">
                        <div className="flex flex-row items-center p-2 w-full h-8 bg-white border border-[#D9D9D9] border-t-0">
                          <input
                            className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                            placeholder="입력하기"
                            value={vatCompanyInfo.address || ''}
                            onChange={e =>
                              setVatCompanyInfo(prev =>
                                prev
                                  ? { ...prev, address: e.target.value }
                                  : null
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center p-0 w-1/2">
                      <div className="flex flex-row items-center p-2 w-[100px] h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0 border-l-0 border-r-0">
                        <span className="text-xs leading-[100%] text-[#757575]">
                          사업장 전화번호
                        </span>
                      </div>
                      <div className="flex flex-col items-start p-0 gap-2 flex-1">
                        <div className="flex flex-row items-center p-2 w-full h-8 bg-white border border-[#D9D9D9] border-t-0 border-l-0">
                          <input
                            className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                            placeholder="입력하기"
                            value={vatCompanyInfo.phone || ''}
                            onChange={e =>
                              setVatCompanyInfo(prev =>
                                prev ? { ...prev, phone: e.target.value } : null
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 6: 환급계좌은행 (은행 + 지점), 계좌번호 */}
                  <div className="flex flex-row items-start p-0 w-full h-8">
                    <div className="flex flex-row items-center p-0 w-1/2">
                      <div className="flex flex-row items-center p-2 w-[100px] h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0 border-r-0">
                        <span className="text-xs leading-[100%] text-[#757575]">
                          환급계좌은행
                        </span>
                      </div>
                      <div className="flex flex-row items-center p-0 flex-1 min-w-0">
                        {/* 왼쪽 1/2: 은행 */}
                        <div className="flex flex-col items-start p-0 gap-2 flex-1 min-w-0">
                          <div className="flex flex-row items-center p-2 w-full h-8 bg-white border border-[#D9D9D9] border-t-0">
                            <input
                              className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none min-w-0"
                              placeholder="입력하기"
                              value={vatCompanyInfo.refundBankName || ''}
                              onChange={e =>
                                setVatCompanyInfo(prev =>
                                  prev
                                    ? {
                                        ...prev,
                                        refundBankName: e.target.value,
                                      }
                                    : null
                                )
                              }
                            />
                          </div>
                        </div>
                        {/* 오른쪽 1/2: 지점 */}
                        <div className="flex flex-col items-start p-0 gap-2 flex-1 min-w-0">
                          <div className="flex flex-row items-center p-2 w-full h-8 bg-white border border-[#D9D9D9] border-t-0 border-l-0">
                            <input
                              className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none min-w-0"
                              placeholder="입력하기"
                              value={vatCompanyInfo.refundBankBranch || ''}
                              onChange={e =>
                                setVatCompanyInfo(prev =>
                                  prev
                                    ? {
                                        ...prev,
                                        refundBankBranch: e.target.value,
                                      }
                                    : null
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center p-0 w-1/2">
                      <div className="flex flex-row items-center p-2 w-[100px] h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0 border-l-0 border-r-0">
                        <span className="text-xs leading-[100%] text-[#757575]">
                          계좌번호
                        </span>
                      </div>
                      <div className="flex flex-col items-start p-0 gap-2 flex-1">
                        <div className="flex flex-row items-center p-2 w-full h-8 bg-white border border-[#D9D9D9] border-t-0 border-l-0">
                          <input
                            className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                            placeholder="입력하기"
                            value={vatCompanyInfo.refundAccount || ''}
                            onChange={e =>
                              setVatCompanyInfo(prev =>
                                prev
                                  ? { ...prev, refundAccount: e.target.value }
                                  : null
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 7: 휴대전화, 전자우편주소 */}
                  <div className="flex flex-row items-start p-0 w-full h-8">
                    <div className="flex flex-row items-center p-0 w-1/2">
                      <div className="flex flex-row items-center p-2 w-[100px] h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0 border-r-0">
                        <span className="text-xs leading-[100%] text-[#757575]">
                          휴대전화
                        </span>
                      </div>
                      <div className="flex flex-col items-start p-0 gap-2 flex-1">
                        <div className="flex flex-row items-center p-2 w-full h-8 bg-white border border-[#D9D9D9] border-t-0">
                          <input
                            className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                            placeholder="입력하기"
                            value={vatCompanyInfo.mobilePhone || ''}
                            onChange={e =>
                              setVatCompanyInfo(prev =>
                                prev
                                  ? { ...prev, mobilePhone: e.target.value }
                                  : null
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center p-0 w-1/2">
                      <div className="flex flex-row items-center p-2 w-[100px] h-8 bg-[#F5F5F5] border border-[#D9D9D9] border-t-0 border-l-0 border-r-0">
                        <span className="text-xs leading-[100%] text-[#757575]">
                          전자우편주소
                        </span>
                      </div>
                      <div className="flex flex-col items-start p-0 gap-2 flex-1">
                        <div className="flex flex-row items-center p-2 w-full h-8 bg-white border border-[#D9D9D9] border-t-0 border-l-0">
                          <input
                            className="flex-1 text-xs leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                            placeholder="입력하기"
                            value={vatCompanyInfo.email || ''}
                            onChange={e =>
                              setVatCompanyInfo(prev =>
                                prev ? { ...prev, email: e.target.value } : null
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 저장 버튼 */}
            {vatCompanyInfo && (
              <div className="flex flex-row justify-end items-center p-0 gap-2 h-7 w-full">
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

          {/* 오른쪽: 도장 관리 영역 */}
          <div className="flex flex-col items-start p-0 gap-4">
            <div className="flex flex-col items-start p-0 gap-4">
              <div className="flex flex-row items-end p-0 gap-5">
                <div className="flex flex-col items-start p-0">
                  <div className="flex flex-row items-center p-0 gap-4">
                    <h3 className="text-sm leading-[140%] text-[#1E1E1E]">
                      회사인감 혹은 서명 등록
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start p-0 gap-1 w-[200px]">
                {/* 도장 업로드 영역 */}
                {!stampImageUrl ? (
                  <div className="relative flex flex-col justify-center items-center p-6 gap-3 w-[200px] bg-white border border-dashed border-[#D9D9D9]">
                    <div className="flex items-center justify-center">
                      <Image
                        src="/icons/upload.svg"
                        alt="upload"
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className="flex flex-col items-center p-0 gap-0.5">
                      <span className="text-xs leading-[140%] text-center text-[#303030]">
                        파일을 업로드하세요.
                      </span>
                      <span className="text-xs leading-[140%] text-center text-[#767676]">
                        (PNG 파일을 지원합니다)
                      </span>
                    </div>
                    <input
                      type="file"
                      accept="image/png,image/jpeg,image/jpg"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={e => {
                        const file = e.target.files?.[0];
                        if (file) handleStampUpload(file);
                      }}
                      disabled={loading}
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center p-0 w-[200px]">
                    <div className="relative w-[200px] h-[116px] border border-[#D9D9D9]">
                      <Image
                        src={stampImageUrl}
                        alt="도장"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}

                {/* 설명 영역 - 도장 하단 4px 간격 */}
                <div className="flex flex-row justify-center items-center p-0 gap-0.5 w-[200px]">
                  <div className="relative w-4 h-4 flex items-center justify-center">
                    <Image
                      src="/icons/alert.svg"
                      alt="alert"
                      width={16}
                      height={16}
                    />
                  </div>
                  <span className="text-xs leading-[140%] text-center text-[#767676]">
                    도장선택 기능은 준비중입니다.
                  </span>
                </div>

                {/* 버튼 영역 */}
                <div className="flex flex-row justify-end items-center p-0 gap-2 w-[200px]">
                  {!stampImageUrl ? (
                    <label className="flex flex-row justify-center items-center px-3 py-2 gap-2 bg-[#F3F3F3] text-xs leading-[100%] text-[#1E1E1E] cursor-pointer">
                      도장선택
                      <input
                        type="file"
                        accept="image/png,image/jpeg,image/jpg"
                        className="hidden"
                        onChange={e => {
                          const file = e.target.files?.[0];
                          if (file) handleStampUpload(file);
                        }}
                        disabled={loading}
                      />
                    </label>
                  ) : (
                    <button
                      onClick={handleStampDelete}
                      disabled={!stampImageUrl || loading}
                      className={`flex flex-row justify-center items-center px-3 py-2 gap-2 h-[27px] font-['Pretendard'] font-medium text-[11px] leading-[100%] ${
                        stampImageUrl && !loading
                          ? 'bg-[#F3F3F3] text-[#1E1E1E]'
                          : 'bg-[#E6E6E6] text-[#B3B3B3]'
                      }`}
                    >
                      도장삭제
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 최종 서류 생성하기 */}
        <div className="flex flex-col items-start gap-4 w-full mt-8">
          {/* 구분선 */}
          <div className="w-full border-t border-[#D9D9D9]"></div>

          {/* 제목과 버튼 영역 */}
          <div className="flex flex-col items-start p-0 gap-4 w-full">
            <div className="flex flex-row justify-between items-end p-0 gap-5 w-full">
              <div className="flex flex-col items-start p-0">
                <div className="flex flex-row items-center py-[6px] px-0 pb-[2px]">
                  <h2 className="text-sm leading-[140%] text-[#1E1E1E] font-semibold">
                    최종 서류 생성하기
                  </h2>
                </div>
              </div>
              <div className="flex flex-row justify-end items-center p-0 gap-2">
                <button
                  onClick={handleCreateDocument}
                  disabled={!canCreateDocument || loading}
                  className={`flex flex-row justify-center items-center px-3 py-2 gap-2 h-[27px] font-['Pretendard'] font-medium text-[11px] leading-[100%] ${
                    !canCreateDocument || loading
                      ? 'bg-[#E6E6E6] text-[#B3B3B3]'
                      : 'bg-[#F3F3F3] text-[#1E1E1E]'
                  }`}
                >
                  서류 생성하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastMessage
        message={toastMessage}
        isVisible={showToast}
        onHide={() => setShowToast(false)}
      />

      <VatDocumentCreateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        reportForms={reportForms}
        reportId={createdReportId || undefined}
      />
    </div>
  );
}
