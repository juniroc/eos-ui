'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import {
  getAvailableForms,
  addFormsToReport,
  type AvailableForm,
} from '@/services/api';
import Image from 'next/image';

interface AvailableFormsModalProps {
  isOpen: boolean;
  onClose: () => void;
  reportId?: string;
  onFormsAdded?: (forms: Array<{ id: string; name: string }>) => void;
}

function AvailableFormsModal({
  isOpen,
  onClose,
  reportId,
  onFormsAdded,
}: AvailableFormsModalProps) {
  const { token } = useAuth();
  const [availableForms, setAvailableForms] = useState<AvailableForm[]>([]);
  const [selectedForms, setSelectedForms] = useState<Set<string>>(new Set());
  const [loadingForms, setLoadingForms] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [appliedKeyword, setAppliedKeyword] = useState('');
  const [previewForm, setPreviewForm] = useState<AvailableForm | null>(null);

  // 서식 목록 조회
  useEffect(() => {
    if (isOpen && reportId && token) {
      const fetchForms = async () => {
        try {
          setLoadingForms(true);
          const response = await getAvailableForms(reportId, token);
          setAvailableForms(response.forms || []);

          // 이미 포함된 서식 체크
          const includedForms = new Set<string>(
            response.forms
              .filter((form: AvailableForm) => form.isIncluded)
              .map((form: AvailableForm) => form.formCode)
          );
          setSelectedForms(includedForms);
        } catch (error) {
          console.error('서식 목록 조회 에러:', error);
          const errorMessage =
            error instanceof Error
              ? error.message
              : '서식 목록 조회에 실패했습니다.';
          alert(errorMessage);
        } finally {
          setLoadingForms(false);
        }
      };

      fetchForms();
    }
  }, [isOpen, reportId, token]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // 체크박스 토글
  const handleToggleForm = (formCode: string) => {
    setSelectedForms(prev => {
      const newSet = new Set(prev);
      if (newSet.has(formCode)) {
        newSet.delete(formCode);
      } else {
        newSet.add(formCode);
      }
      return newSet;
    });
  };

  const filteredForms = useMemo(() => {
    const keyword = appliedKeyword.trim().toLowerCase();
    if (!keyword) {
      return availableForms;
    }

    return availableForms.filter(form =>
      [form.formNumber, form.name, form.description, form.requiredWhen]
        .filter(Boolean)
        .some(value => value.toLowerCase().includes(keyword))
    );
  }, [availableForms, appliedKeyword]);

  // 전체 선택 여부 확인
  const isAllSelected =
    filteredForms.length > 0 &&
    filteredForms.every(form => selectedForms.has(form.formCode));

  // 전체 선택/해제 토글
  const handleToggleAll = () => {
    if (isAllSelected) {
      // 현재 필터 결과만 해제
      setSelectedForms(prev => {
        const newSet = new Set(prev);
        filteredForms.forEach(form => newSet.delete(form.formCode));
        return newSet;
      });
    } else {
      // 현재 필터 결과만 선택
      setSelectedForms(prev => {
        const newSet = new Set(prev);
        filteredForms.forEach(form => newSet.add(form.formCode));
        return newSet;
      });
    }
  };

  // 서식 추가하기
  const handleAddForms = async () => {
    if (!token || !reportId || selectedForms.size === 0) {
      return;
    }

    try {
      setIsAdding(true);
      const formCodes = Array.from(selectedForms);
      const response = await addFormsToReport(reportId, { formCodes }, token);

      // 성공 시 콜백 호출하여 추가된 서식 정보 전달
      if (onFormsAdded && response.forms) {
        const addedForms = response.forms
          .filter((form: { formCode: string }) =>
            formCodes.includes(form.formCode)
          )
          .map((form: { id: string; name: string }) => ({
            id: form.id,
            name: form.name,
          }));
        onFormsAdded(addedForms);
      }

      // 사이드바 닫기
      onClose();
    } catch (error) {
      console.error('서식 추가 에러:', error);
      const errorMessage =
        error instanceof Error ? error.message : '서식 추가에 실패했습니다.';
      alert(errorMessage);
    } finally {
      setIsAdding(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[70] bg-[rgba(15,23,42,0.28)] flex items-center justify-center px-4 py-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[1176px] h-[min(800px,calc(100vh-48px))] bg-white shadow-[0px_24px_48px_-12px_rgba(15,23,42,0.28)] flex flex-col overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* top */}
        <div className="w-full h-10 flex items-center justify-between p-3">
          <div className="flex items-center gap-1 text-[11px] leading-[140%] min-w-0">
            <span className="text-[#B3B3B3]">부가세</span>
            <span className="text-[#B3B3B3]">{'>'}</span>
            <span className="text-[#B3B3B3]">서류정보</span>
            <span className="text-[#B3B3B3]">{'>'}</span>
            <span className="text-[#1E1E1E] font-semibold">서류 서식 추가</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-4 h-4 text-[#1E1E1E] text-sm leading-none flex items-center justify-center"
            aria-label="닫기"
          >
            ✕
          </button>
        </div>

        {/* content */}
        <div className="flex-1 flex justify-center items-stretch p-4 min-h-0">
          <div className="w-full max-w-[972px] flex flex-col gap-4 min-h-0">
            {/* title */}
            <div className="h-7 flex items-end justify-between">
              <h2 className="text-sm leading-[140%] text-[#1E1E1E] font-semibold font-['Pretendard']">
                서류 추가
              </h2>
            </div>

            {/* toolbar */}
            <div className="h-8 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 h-8">
                <span className="text-[11px] leading-[100%] text-[#1E1E1E] font-medium font-['Pretendard']">
                  서식번호/서류명
                </span>
                <div className="h-8 w-[220px] border border-[#D9D9D9] px-2 flex items-center gap-2 bg-white">
                  <input
                    value={searchKeyword}
                    onChange={e => setSearchKeyword(e.target.value)}
                    onKeyDown={e => {
                      if (e.key === 'Enter') setAppliedKeyword(searchKeyword);
                    }}
                    placeholder="검색어를 입력해 주세요"
                    className="w-full text-[11px] leading-[100%] text-[#1E1E1E] font-medium outline-none placeholder:text-[#B3B3B3]"
                  />
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle
                      cx="7"
                      cy="7"
                      r="4.4"
                      stroke="#757575"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M10.5 10.5L14 14"
                      stroke="#757575"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <button
                  type="button"
                  onClick={() => setAppliedKeyword(searchKeyword)}
                  className="flex flex-row justify-center items-center px-3 py-2 gap-2 w-[44px] h-[27px] bg-[#F3F3F3] font-medium text-[11px] leading-[100%] text-[#1E1E1E] flex-none"
                >
                  검색
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleAddForms}
                  disabled={selectedForms.size === 0 || isAdding}
                  className={`h-[27px] px-3 text-[11px] leading-[100%] font-medium ${
                    selectedForms.size > 0 && !isAdding
                      ? 'bg-[#2C2C2C] text-[#F5F5F5]'
                      : 'bg-[#F3F3F3] text-[#A1A1A1]'
                  }`}
                >
                  {isAdding ? '추가중...' : '첨부서류 추가'}
                </button>
              </div>
            </div>

            {/* table */}
            <div className="flex-1 min-h-0 border border-[#D9D9D9] overflow-auto">
              <table className="w-full min-w-[931px] border-collapse table-fixed">
                <thead className="sticky top-0 z-[1]">
                  <tr className="h-[30px] bg-[#F5F5F5]">
                    <th className="w-[71px] border-r border-b border-[#D9D9D9] px-2 text-[11px] text-[#757575] font-bold font-['Pretendard']">
                      서식번호
                    </th>
                    <th className="w-[200px] border-r border-b border-[#D9D9D9] px-2 text-[11px] text-[#757575] font-bold font-['Pretendard']">
                      서식명
                    </th>
                    <th className="w-[300px] border-r border-b border-[#D9D9D9] px-2 text-[11px] text-[#757575] font-bold font-['Pretendard']">
                      서식내용 해설
                    </th>
                    <th className="w-[300px] border-r border-b border-[#D9D9D9] px-2 text-[11px] text-[#757575] font-bold font-['Pretendard']">
                      첨부해야 하는 경우
                    </th>
                    <th className="w-[60px] border-r border-b border-[#D9D9D9]">
                      <button
                        type="button"
                        onClick={handleToggleAll}
                        className={`mx-auto w-4 h-4 rounded-[6px] border flex items-center justify-center ${
                          isAllSelected
                            ? 'bg-[#2C2C2C] border-[#2C2C2C]'
                            : 'bg-white border-[#D9D9D9]'
                        }`}
                        aria-label="전체 선택"
                      >
                        {isAllSelected && (
                          <svg
                            width="9"
                            height="9"
                            viewBox="0 0 9 9"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M1.5 4.5L3.5 6.5L7.5 2.5"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loadingForms && (
                    <tr>
                      <td
                        colSpan={5}
                        className="h-24 text-center text-[11px] text-[#757575] font-['Pretendard']"
                      >
                        로딩 중...
                      </td>
                    </tr>
                  )}
                  {!loadingForms && filteredForms.length === 0 && (
                    <tr>
                      <td
                        colSpan={5}
                        className="h-24 text-center text-[11px] text-[#757575] font-['Pretendard']"
                      >
                        검색 결과가 없습니다.
                      </td>
                    </tr>
                  )}
                  {!loadingForms &&
                    filteredForms.map(form => {
                      const isChecked = selectedForms.has(form.formCode);

                      return (
                        <tr key={form.formCode} className="h-10 bg-white group">
                          <td className="h-10 border-r border-b border-[#D9D9D9] p-[6px] text-[11px] text-[#757575] font-medium align-middle overflow-hidden whitespace-nowrap text-ellipsis">
                            {form.formNumber}
                          </td>
                          <td className="h-10 border-r border-b border-[#D9D9D9] p-[6px] text-[11px] text-[#757575] font-medium align-middle">
                            <div className="flex items-center gap-1 min-w-0">
                              <span className="flex-1 min-w-0 truncate underline">
                                {form.name}
                              </span>
                              <div className="flex items-center gap-1 flex-none opacity-0 group-hover:opacity-100">
                                <button
                                  type="button"
                                  onClick={e => {
                                    e.stopPropagation();
                                    setPreviewForm(form);
                                  }}
                                  className="cursor-pointer"
                                  aria-label={`${form.name} 미리보기`}
                                >
                                  <Image
                                    src="/icons/search.svg"
                                    alt="미리보기"
                                    width={16}
                                    height={16}
                                  />
                                </button>
                                <Image
                                  src="/icons/upload.svg"
                                  alt="내보내기"
                                  width={16}
                                  height={16}
                                  className="cursor-pointer"
                                />
                              </div>
                            </div>
                          </td>
                          <td className="h-10 border-r border-b border-[#D9D9D9] p-[6px] text-[11px] text-[#757575] font-medium align-middle overflow-hidden whitespace-nowrap text-ellipsis">
                            {form.description}
                          </td>
                          <td className="h-10 border-r border-b border-[#D9D9D9] p-[6px] text-[11px] text-[#757575] font-medium align-middle overflow-hidden whitespace-nowrap text-ellipsis">
                            {form.requiredWhen}
                          </td>
                          <td className="h-10 border-r border-b border-[#D9D9D9] text-center">
                            <button
                              type="button"
                              onClick={() => handleToggleForm(form.formCode)}
                              className={`mx-auto w-4 h-4 rounded-[6px] border flex items-center justify-center ${
                                isChecked
                                  ? 'bg-[#2C2C2C] border-[#2C2C2C]'
                                  : 'bg-white border-[#D9D9D9]'
                              }`}
                              aria-label={`${form.name} 선택`}
                            >
                              {isChecked && (
                                <svg
                                  width="9"
                                  height="9"
                                  viewBox="0 0 9 9"
                                  fill="none"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M1.5 4.5L3.5 6.5L7.5 2.5"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              )}
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 서식 미리보기 오버레이 패널 */}
        {previewForm && (
          <div
            className="absolute right-0 top-0 w-[656px] h-full max-h-[800px] bg-white flex flex-col items-center p-4 gap-4 z-10"
            style={{
              boxShadow:
                '0px 8px 20px rgba(0, 0, 0, 0.06), 0px 24px 60px rgba(0, 0, 0, 0.12), 0px 32px 64px -12px rgba(0, 0, 0, 0.14)',
            }}
          >
            {/* Title */}
            <div className="w-[624px] h-7 min-h-[28px] flex items-center">
              <div className="w-[624px] h-5 flex items-center justify-between">
                <div className="flex">
                  <span className="text-sm font-semibold leading-[140%] text-[#1E1E1E]">
                    서식 미리보기
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setPreviewForm(null)}
                  className="w-4 h-4 flex items-center justify-center flex-none"
                  aria-label="미리보기 닫기"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 4L12 12"
                      stroke="#767676"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 4L4 12"
                      stroke="#767676"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content Box */}
            <div className="w-[624px] flex-1 border border-[#D9D9D9] overflow-auto">
              <div className="w-full h-full flex items-center justify-center text-[11px] text-[#757575] font-['Pretendard']">
                서식 미리보기 영역
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AvailableFormsModal;
