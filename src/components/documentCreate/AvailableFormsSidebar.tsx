'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';
import { getAvailableForms, addFormsToReport, type AvailableForm } from '@/services/api';

interface AvailableFormsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  reportId?: string;
  onFormsAdded?: (forms: Array<{ id: string; name: string }>) => void;
}

function AvailableFormsSidebar({ isOpen, onClose, reportId, onFormsAdded }: AvailableFormsSidebarProps) {
  const { token } = useAuth();
  const [availableForms, setAvailableForms] = useState<AvailableForm[]>([]);
  const [selectedForms, setSelectedForms] = useState<Set<string>>(new Set());
  const [loadingForms, setLoadingForms] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

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
            response.forms.filter((form: AvailableForm) => form.isIncluded).map((form: AvailableForm) => form.formCode)
          );
          setSelectedForms(includedForms);
        } catch (error) {
          console.error('서식 목록 조회 에러:', error);
          const errorMessage = error instanceof Error ? error.message : '서식 목록 조회에 실패했습니다.';
          alert(errorMessage);
        } finally {
          setLoadingForms(false);
        }
      };

      fetchForms();
    }
  }, [isOpen, reportId, token]);

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

  // 전체 선택 여부 확인
  const isAllSelected = availableForms.length > 0 && availableForms.every(form => selectedForms.has(form.formCode));

  // 전체 선택/해제 토글
  const handleToggleAll = () => {
    if (isAllSelected) {
      // 전체 해제
      setSelectedForms(new Set());
    } else {
      // 전체 선택
      const allFormCodes = new Set(availableForms.map(form => form.formCode));
      setSelectedForms(allFormCodes);
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
      const response = await addFormsToReport(
        reportId,
        { formCodes },
        token
      );

      // 성공 시 콜백 호출하여 추가된 서식 정보 전달
      if (onFormsAdded && response.forms) {
        const addedForms = response.forms
          .filter((form: { formCode: string }) => formCodes.includes(form.formCode))
          .map((form: { id: string; name: string }) => ({ id: form.id, name: form.name }));
        onFormsAdded(addedForms);
      }

      // 사이드바 닫기
      onClose();
    } catch (error) {
      console.error('서식 추가 에러:', error);
      const errorMessage = error instanceof Error ? error.message : '서식 추가에 실패했습니다.';
      alert(errorMessage);
    } finally {
      setIsAdding(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 bottom-0 w-3/4 bg-white shadow-[0px_16px_32px_-4px_rgba(12,12,13,0.1),0px_4px_4px_-4px_rgba(12,12,13,0.05)] z-[60] flex flex-col">
      {/* 헤더 */}
      <div className="flex flex-row justify-between items-center p-3 w-full h-[52px] flex-shrink-0">
        <div className="flex flex-row items-center py-[6px] px-0 gap-1">
          <span className="text-sm leading-[140%] text-[#1E1E1E] font-semibold font-['Pretendard']">
            추가할 서류 서식
          </span>
        </div>
        <button
          onClick={onClose}
          className="w-5 h-5 flex items-center justify-center cursor-pointer flex-shrink-0"
        >
          <Image src="/icons/close.svg" alt="close" width={20} height={20} />
        </button>
      </div>

      {/* 컨텐츠 영역 */}
      <div className="flex flex-col items-start p-3 gap-[10px] flex-1 overflow-hidden">
        {/* 테이블 영역 */}
        <div className="flex flex-col items-start w-full overflow-auto flex-1">
          {/* 테이블 헤더 */}
          <div className="flex flex-row items-stretch p-0 w-full h-7 flex-shrink-0">
            {/* 체크박스 헤더 */}
            <div className="flex flex-row items-center justify-center p-2 w-[28px] max-w-[32px] bg-white border border-[#D9D9D9] flex-shrink-0">
              <div
                className={`flex flex-row justify-center items-center w-3 h-3 border rounded cursor-pointer ${isAllSelected
                    ? 'border-[#2C2C2C] bg-[#2C2C2C]'
                    : 'border-[#D9D9D9] bg-white'
                  }`}
                onClick={handleToggleAll}
              >
                {isAllSelected && (
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <path
                      d="M1.5 4.5L3.5 6.5L7.5 2.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </div>
            {/* 서식번호 */}
            <div className="flex flex-row items-center p-2 w-[140px] min-w-[140px] bg-white border-t border-b border-r border-[#D9D9D9] flex-shrink-0">
              <span className="text-[10px] leading-[100%] text-[#B3B3B3] font-medium font-['Pretendard']">
                서식번호
              </span>
            </div>
            {/* 서식명 */}
            <div className="flex flex-row items-center p-2 w-[220px] min-w-[220px] max-w-[220px] bg-white border-t border-b border-r border-[#D9D9D9] flex-shrink-0">
              <span className="text-[10px] leading-[100%] text-[#B3B3B3] font-medium font-['Pretendard']">
                서식명
              </span>
            </div>
            {/* 서식내용 해설 */}
            <div className="flex flex-row items-center p-2 min-w-[240px] bg-white border-t border-b border-r border-[#D9D9D9] flex-1">
              <span className="text-[10px] leading-[100%] text-[#B3B3B3] font-medium font-['Pretendard']">
                서식내용 해설
              </span>
            </div>
            {/* 첨부해야 하는 경우 */}
            <div className="flex flex-row items-center p-2 min-w-[240px] bg-white border-t border-b border-r border-[#D9D9D9] flex-1">
              <span className="text-[10px] leading-[100%] text-[#B3B3B3] font-medium font-['Pretendard']">
                첨부해야 하는 경우
              </span>
            </div>
          </div>

          {/* 테이블 바디 */}
          {loadingForms ? (
            <div className="flex items-center justify-center w-full h-40">
              <span className="text-sm text-[#757575]">로딩 중...</span>
            </div>
          ) : (
            availableForms.map((form) => (
              <div key={form.formCode} className="flex flex-row items-stretch p-0 w-full">
                {/* 체크박스 */}
                <div className="flex flex-row items-center justify-center p-2 w-[28px] max-w-[32px] bg-white border-b border-l border-r border-[#D9D9D9] flex-shrink-0">
                  <div
                    className={`flex flex-row justify-center items-center w-3 h-3 border rounded cursor-pointer ${selectedForms.has(form.formCode)
                      ? 'border-[#2C2C2C] bg-[#2C2C2C]'
                      : 'border-[#D9D9D9] bg-white'
                      }`}
                    onClick={() => handleToggleForm(form.formCode)}
                  >
                    {selectedForms.has(form.formCode) && (
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path
                          d="M1.5 4.5L3.5 6.5L7.5 2.5"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                {/* 서식번호 */}
                <div className="flex flex-row items-center p-2 w-[140px] min-w-[140px] max-w-[160px] bg-white border-b border-r border-[#D9D9D9] flex-shrink-0">
                  <span className="text-[10px] leading-[140%] text-[#757575] font-medium font-['Pretendard']">
                    {form.formNumber}
                  </span>
                </div>
                {/* 서식명 */}
                <div className="flex flex-row items-center p-2 w-[220px] min-w-[200px] max-w-[220px] bg-white border-b border-r border-[#D9D9D9] flex-shrink-0">
                  <span className="text-[11px] leading-[140%] text-[#757575] font-medium font-['Pretendard']">
                    {form.name}
                  </span>
                </div>
                {/* 서식내용 해설 */}
                <div className="flex flex-row items-center p-2 min-w-[240px] bg-white border-b border-r border-[#D9D9D9] flex-1">
                  <span className="text-[11px] leading-[140%] text-[#757575] font-medium font-['Pretendard']">
                    {form.description}
                  </span>
                </div>
                {/* 첨부해야 하는 경우 */}
                <div className="flex flex-row items-center p-2 min-w-[240px] bg-white border-b border-r border-[#D9D9D9] flex-1">
                  <span className="text-[11px] leading-[140%] text-[#757575] font-medium font-['Pretendard']">
                    {form.requiredWhen}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* 하단 버튼 */}
        <div className="flex flex-row justify-end items-center gap-2 w-full h-[27px] flex-shrink-0">
          <button
            onClick={handleAddForms}
            disabled={selectedForms.size === 0 || isAdding}
            className={`flex flex-row justify-center items-center px-3 py-2 gap-2 w-[84px] h-[27px] ${
              selectedForms.size > 0 && !isAdding
                ? 'bg-[#2C2C2C] cursor-pointer'
                : 'bg-[#E6E6E6] cursor-not-allowed'
            }`}
          >
            <span
              className={`text-[11px] leading-[100%] font-medium font-['Pretendard'] ${
                selectedForms.size > 0 && !isAdding
                  ? 'text-[#F5F5F5]'
                  : 'text-[#B3B3B3]'
              }`}
            >
              {isAdding ? '추가중...' : '서식 추가하기'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AvailableFormsSidebar;
