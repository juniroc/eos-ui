'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import {
  getVatCompanyInfo,
  saveVatCompanyInfo,
  uploadStamp,
  getStamp,
  deleteStamp,
  createVatReport,
  type VatCompanyInfo,
} from '@/services/api';
import ToastMessage from '@/components/ToastMessage';
import ConfirmModal from '@/components/ConfirmModal';
import ModalContainer from '@/components/modal/ModalContainer';
import Image from 'next/image';

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
  const [showSaveConfirm, setShowSaveConfirm] = useState(false);
  const [showCreateConfirm, setShowCreateConfirm] = useState(false);

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

      setToastMessage('서류가 생성됐어요!');
      setShowToast(true);
      router.push(`/vat-document-create/${response.id}`);
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
        {/* 그리드: [테이블 692px | gap 16 | 회사인감 360px]. 버튼 행은 전체 열(1/-1)에 걸쳐 회사인감 위에 위치 */}
        <div
          className="grid gap-x-4 gap-y-4 p-0"
          style={{
            width: 1068,
            minWidth: 1068,
            gridTemplateColumns: '1fr 360px',
          }}
        >
          {/* 액션 그룹: 전체 너비(1 / -1) → 회사인감 영역 위까지 확장 */}
          <div
            className="flex flex-row justify-between items-center gap-2.5 p-0 h-8"
            style={{ gridColumn: '1 / -1' }}
          >
            {/* 신고일자 + 신고구분 */}
            <div className="flex flex-row items-center p-0 gap-2.5 flex-none">
              {/* 신고일자 */}
              <div className="flex flex-row items-center p-0 gap-2 w-[147px] h-8">
                <span className="font-medium text-[11px] leading-[100%] text-[#1E1E1E] flex-none">
                  신고일자
                </span>
                <div className="box-border flex flex-row justify-between items-center px-2 gap-1 w-[100px] h-8 bg-white border border-[#E9EAEB] rounded-[2px] flex-none">
                  <input
                    type="date"
                    className="flex-1 min-w-0 font-medium text-[11px] leading-[100%] text-[#1E1E1E] bg-transparent border-none outline-none"
                    value={reportingPeriodStart}
                    onChange={e => setReportingPeriodStart(e.target.value)}
                  />
                </div>
              </div>
              {/* 신고구분 */}
              <div className="flex flex-row items-center p-0 gap-2 w-[108px] h-8">
                <span className="font-medium text-[11px] leading-[100%] text-[#1E1E1E] flex-none">
                  신고구분
                </span>
                <div className="box-border flex flex-row justify-between items-center px-2 gap-1 w-[80px] h-8 bg-white border border-[#E9EAEB] rounded-[2px] flex-none">
                  <select
                    className="w-full font-medium text-[11px] leading-[100%] text-[#1E1E1E] bg-transparent border-none outline-none cursor-pointer"
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
            {/* 서류 생성 버튼 */}
            <div className="flex flex-row items-start p-0 gap-2 flex-none">
              <button
                type="button"
                onClick={() => setShowCreateConfirm(true)}
                disabled={!canCreateDocument || loading}
                className={`flex flex-row justify-center items-center px-3 py-2 gap-2 font-medium text-[11px] leading-[100%] flex-none ${
                  !canCreateDocument || loading
                    ? 'bg-[#E6E6E6] text-[#B3B3B3] cursor-not-allowed'
                    : 'bg-[#2C2C2C] text-[#F5F5F5]'
                }`}
              >
                서류 생성
              </button>
            </div>
          </div>

          <div
            className="w-full border-t border-[#D9D9D9]"
            style={{ gridColumn: '1 / -1' }}
          />
          {/* 회사정보 + 저장하기: 전체 너비(1 / -1) → 회사인감 위까지 */}
          {vatCompanyInfo && (
            <div
              className="flex flex-row justify-between items-end p-0"
              style={{ gridColumn: '1 / -1' }}
            >
              <h3 className="font-semibold text-sm leading-[140%] text-[#1E1E1E] py-1.5 pr-0 pb-0.5">
                회사정보
              </h3>
              <button
                type="button"
                onClick={() => setShowSaveConfirm(true)}
                disabled={loading}
                className="flex flex-row justify-center items-center px-3 py-2 gap-2 min-w-[66px] h-7 bg-[#F3F3F3] font-medium text-xs leading-[100%] text-[#1E1E1E] disabled:opacity-50"
              >
                저장하기
              </button>
            </div>
          )}

          {/* 테이블: 1열 */}
          {vatCompanyInfo && (
            <div className="box-border flex flex-row items-start p-0 border-t border-l border-[#D9D9D9] w-full">
              <div className="flex flex-col items-start p-0 flex-1">
                {[
                  {
                    label: '회사명',
                    value: vatCompanyInfo.name ?? '',
                    onChange: (v: string) =>
                      setVatCompanyInfo(prev =>
                        prev ? { ...prev, name: v } : null
                      ),
                    readOnly: false,
                  },
                  {
                    label: '개업일자',
                    value: vatCompanyInfo.establishmentDate ?? '',
                    onChange: (v: string) =>
                      setVatCompanyInfo(prev =>
                        prev ? { ...prev, establishmentDate: v } : null
                      ),
                    readOnly: false,
                  },
                  {
                    label: '법인/개인 구분',
                    value: vatCompanyInfo.businessCategory ?? '',
                    onChange: undefined,
                    readOnly: true,
                  },
                  {
                    label: '업태',
                    value: Array.isArray(vatCompanyInfo.businessType)
                      ? vatCompanyInfo.businessType.join(', ')
                      : (vatCompanyInfo.businessType ?? ''),
                    onChange: (v: string) =>
                      setVatCompanyInfo(prev =>
                        prev
                          ? {
                              ...prev,
                              businessType: v
                                .split(',')
                                .map(s => s.trim())
                                .filter(Boolean),
                            }
                          : null
                      ),
                    readOnly: false,
                  },
                  {
                    label: '전화번호',
                    value: vatCompanyInfo.phone ?? '',
                    onChange: (v: string) =>
                      setVatCompanyInfo(prev =>
                        prev ? { ...prev, phone: v } : null
                      ),
                    readOnly: false,
                  },
                  {
                    label: '사업장 주소',
                    value: vatCompanyInfo.address ?? '',
                    onChange: (v: string) =>
                      setVatCompanyInfo(prev =>
                        prev ? { ...prev, address: v } : null
                      ),
                    readOnly: false,
                  },
                  {
                    label: '휴대전화',
                    value: vatCompanyInfo.mobilePhone ?? '',
                    onChange: (v: string) =>
                      setVatCompanyInfo(prev =>
                        prev ? { ...prev, mobilePhone: v } : null
                      ),
                    readOnly: false,
                  },
                ].map(({ label, value, onChange, readOnly }) => (
                  <div
                    key={label}
                    className="flex flex-row items-center w-full min-h-[40px] border-b border-r border-[#D9D9D9]"
                  >
                    <div className="box-border flex flex-row items-center px-4 py-1.5 gap-3 min-w-[118px] h-10 bg-[#F5F5F5] border-r border-[#D9D9D9] flex-shrink-0">
                      <span className="font-bold text-[11px] leading-[13px] text-center text-[#757575]">
                        {label}
                      </span>
                    </div>
                    <div className="box-border flex flex-row items-center p-1.5 flex-1 min-w-0 bg-white">
                      <div
                        className={`box-border flex flex-row items-center px-2 gap-1 flex-1 min-w-0 h-7 rounded-[2px] border border-[#E9EAEB] ${readOnly ? 'bg-[#E6E6E6]' : 'bg-white'}`}
                      >
                        <input
                          className="flex-1 min-w-0 font-medium text-[11px] leading-[100%] text-[#1E1E1E] bg-transparent border-none outline-none placeholder:text-[#1E1E1E]"
                          placeholder="입력"
                          readOnly={readOnly}
                          value={value}
                          onChange={
                            onChange ? e => onChange(e.target.value) : undefined
                          }
                          type={label === '개업일자' ? 'date' : 'text'}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start p-0 flex-1">
                {[
                  {
                    label: '대표자명',
                    value: vatCompanyInfo.representativeName ?? '',
                    onChange: (v: string) =>
                      setVatCompanyInfo(prev =>
                        prev ? { ...prev, representativeName: v } : null
                      ),
                    readOnly: false,
                  },
                  {
                    label: '사업자번호',
                    value: vatCompanyInfo.businessNumber ?? '',
                    onChange: undefined,
                    readOnly: true,
                  },
                  {
                    label: '법인등록번호',
                    value: vatCompanyInfo.corporateNumber ?? '',
                    onChange: undefined,
                    readOnly: true,
                  },
                  {
                    label: '종목/종목코드',
                    value: Array.isArray(vatCompanyInfo.businessCategory2)
                      ? vatCompanyInfo.businessCategory2.join(', ')
                      : (vatCompanyInfo.businessCategory2 ?? ''),
                    onChange: (v: string) =>
                      setVatCompanyInfo(prev =>
                        prev
                          ? {
                              ...prev,
                              businessCategory2: v
                                .split(',')
                                .map(s => s.trim())
                                .filter(Boolean),
                            }
                          : null
                      ),
                    readOnly: false,
                  },
                  {
                    label: '환급계좌은행',
                    value: '',
                    onChange: undefined,
                    readOnly: false,
                    isBank: true,
                  },
                  {
                    label: '계좌번호',
                    value: vatCompanyInfo.refundAccount ?? '',
                    onChange: (v: string) =>
                      setVatCompanyInfo(prev =>
                        prev ? { ...prev, refundAccount: v } : null
                      ),
                    readOnly: false,
                  },
                  {
                    label: '전자우편주소',
                    value: vatCompanyInfo.email ?? '',
                    onChange: (v: string) =>
                      setVatCompanyInfo(prev =>
                        prev ? { ...prev, email: v } : null
                      ),
                    readOnly: false,
                  },
                ].map(({ label, value, onChange, readOnly, isBank }) => (
                  <div
                    key={label}
                    className="flex flex-row items-center w-full min-h-[40px] border-b border-r border-[#D9D9D9]"
                  >
                    <div className="box-border flex flex-row items-center px-4 py-1.5 gap-3 min-w-[118px] h-10 bg-[#F5F5F5] border-r border-[#D9D9D9] flex-shrink-0">
                      <span className="font-bold text-[11px] leading-[13px] text-center text-[#757575]">
                        {label}
                      </span>
                    </div>
                    <div className="box-border flex flex-row items-center p-1.5 flex-1 min-w-0 bg-white">
                      {isBank ? (
                        <div className="flex flex-row items-center flex-1 gap-0 min-w-0">
                          <div className="box-border flex flex-row items-center px-2 gap-1 flex-1 min-w-0 overflow-hidden h-7 bg-white border border-[#E9EAEB] rounded-[2px]">
                            <input
                              className="min-w-[1ch] max-w-16 font-medium text-[11px] leading-[100%] text-[#1E1E1E] bg-transparent border-none outline-none"
                              style={
                                {
                                  fieldSizing: 'content',
                                } as React.CSSProperties
                              }
                              value={vatCompanyInfo.refundBankName ?? ''}
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
                            <span className="font-medium text-[11px] leading-[100%] text-[#757575]">
                              은행
                            </span>
                          </div>
                          <div className="box-border flex flex-row items-center px-2 gap-1 flex-1 min-w-0 overflow-hidden h-7 bg-white border border-[#E9EAEB] border-l-0 rounded-[2px]">
                            <input
                              className="min-w-[1ch] max-w-16 font-medium text-[11px] leading-[100%] text-[#1E1E1E] bg-transparent border-none outline-none"
                              style={
                                {
                                  fieldSizing: 'content',
                                } as React.CSSProperties
                              }
                              value={vatCompanyInfo.refundBankBranch ?? ''}
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
                            <span className="font-medium text-[11px] leading-[100%] text-[#757575]">
                              지점
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div
                          className={`box-border flex flex-row items-center px-2 gap-1 flex-1 min-w-0 h-7 rounded-[2px] border border-[#E9EAEB] ${readOnly ? 'bg-[#E6E6E6]' : 'bg-white'}`}
                        >
                          <input
                            className="flex-1 min-w-0 font-medium text-[11px] leading-[100%] text-[#1E1E1E] bg-transparent border-none outline-none placeholder:text-[#1E1E1E]"
                            placeholder="입력"
                            readOnly={readOnly}
                            value={value}
                            onChange={
                              onChange
                                ? e => onChange(e.target.value)
                                : undefined
                            }
                            type="text"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 회사인감 혹은 서명 등록: 2열 (테이블 우측, 버튼 행 바로 아래) */}
          <div
            className="flex flex-col items-start p-0 gap-4 w-full min-w-0"
            style={{ gridColumn: 2 }}
          >
            <div className="flex flex-col items-start p-0 gap-4 w-full flex-1">
              <h3 className="font-semibold text-sm leading-[140%] text-[#1E1E1E] py-1.5 pr-0 pb-0.5">
                회사인감 혹은 서명 등록
              </h3>
              <div className="flex flex-col items-start p-0 gap-1 w-full flex-1 min-h-[233px]">
                {!stampImageUrl ? (
                  <div className="relative box-border flex flex-col justify-center items-center p-6 gap-3 w-full flex-1 min-h-[233px] bg-white border border-dashed border-[#D9D9D9]">
                    <div className="flex items-center justify-center flex-none">
                      <Image
                        src="/icons/upload.svg"
                        alt="upload"
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className="flex flex-col items-center p-0 gap-0.5">
                      <span className="font-normal text-[11px] leading-[140%] text-center text-[#303030]">
                        파일을 업로드하세요.
                      </span>
                      <span className="font-normal text-[11px] leading-[140%] text-center text-[#767676]">
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
                  <div className="relative box-border flex flex-col items-start p-0 gap-2.5 w-full flex-1 min-h-[233px] bg-white border border-dashed border-[#D9D9D9] isolate">
                    {/* 이미지 레이어 */}
                    <div className="absolute inset-0 w-full h-full z-0">
                      <Image
                        src={stampImageUrl}
                        alt="도장"
                        fill
                        className="object-contain"
                      />
                    </div>
                    {/* 회색 딤 + 삭제 버튼 */}
                    <div className="absolute inset-0 flex flex-row justify-center items-center p-0 gap-2.5 w-full min-h-[233px] bg-black/50 z-[1]">
                      <button
                        type="button"
                        onClick={handleStampDelete}
                        disabled={loading}
                        className="flex flex-row justify-center items-center px-3 py-2 gap-2 w-16 h-7 bg-[#2C2C2C] font-medium text-[11px] leading-[100%] text-[#F5F5F5] flex-none disabled:opacity-50"
                      >
                        <Image
                          src="/icons/trash.svg"
                          alt="삭제"
                          width={12}
                          height={12}
                        />
                        삭제
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ConfirmModal
        isOpen={showSaveConfirm}
        onClose={() => setShowSaveConfirm(false)}
        title="회사정보 저장"
        description={`사업 기본정보도 변경하시겠습니까?\n변하지 않으면 법인세무에만 반영됩니다.`}
        cancelText="회사정보 변경 안함"
        confirmText="수정하기"
        onConfirm={handleSaveCompanyInfo}
      />

      <ModalContainer isOpen={showCreateConfirm}>
        <div className="flex flex-col gap-6 bg-white p-6 w-[400px]">
          <div className="flex flex-col gap-4">
            <span className="font-semibold text-[15px] leading-[140%] text-black">
              서류생성
            </span>
            <div className="flex flex-col gap-0">
              <p className="font-normal text-xs leading-[140%] text-black">
                해당기간에 입력된 회계자료가 없습니다. 서식 양식만 생성합니다.
              </p>
              <br />
              <p className="font-normal text-xs leading-[140%] text-black">
                생성 서류:
              </p>
              <p className="font-normal text-xs leading-[140%] text-black whitespace-pre-line">
                {`* 일반과세자부가가치세신고서\n* 매출처별세금계산서합계표\n* 매입처별세금계산서합계표\n* 신용카드매출전표수령명세서`}
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-end">
            <button
              type="button"
              onClick={() => {
                setShowCreateConfirm(false);
                handleCreateDocument();
              }}
              disabled={loading}
              className="flex flex-row justify-center items-center px-3 py-2 h-7 bg-[#2C2C2C] font-medium text-xs leading-[100%] text-[#F5F5F5] disabled:opacity-50"
            >
              확인
            </button>
          </div>
        </div>
      </ModalContainer>

      <ToastMessage
        message={toastMessage}
        isVisible={showToast}
        onHide={() => setShowToast(false)}
      />
    </div>
  );
}
