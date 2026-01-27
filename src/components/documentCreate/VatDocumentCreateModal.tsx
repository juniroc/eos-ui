'use client';

import React, { useState } from 'react';
import { ModalProps } from '@/types/props';
import Image from 'next/image';
import ChatArea from '@/components/ChatArea';
import AvailableFormsSidebar from '@/components/documentCreate/AvailableFormsSidebar';

interface VatDocumentCreateModalProps extends ModalProps {
  reportId?: string;
}

function VatDocumentCreateModal({ isOpen, onClose, reportId }: VatDocumentCreateModalProps) {
  const [selectedDocument, setSelectedDocument] = useState<string | null>('일반과세자 부가가치세 신고서');
  const [isListOpen, setIsListOpen] = useState(true);
  const [showSidePanel, setShowSidePanel] = useState(false);

  // 사이드 패널 열기
  const handleOpenSidePanel = () => {
    if (!reportId) {
      alert('서류 정보가 없습니다.');
      return;
    }
    setShowSidePanel(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50 p-5">
      <div className="flex flex-col items-center bg-white w-full h-full relative">
        {/* Top 영역 */}
        <div className="flex flex-row justify-between items-center p-3 w-full h-10 flex-shrink-0">
          {/* Breadcrumb */}
          <div className="flex flex-row items-center gap-0.5 flex-1 h-4">
            <span className="text-[11px] leading-[140%] text-[#B3B3B3] font-['Pretendard']">부가세</span>
            <div className="w-4 h-4 flex items-center justify-center">
              <Image src="/icons/arrow_right.svg" alt="arrow_right" width={16} height={16} />
            </div>
            <span className="text-[11px] leading-[140%] text-[#B3B3B3] font-['Pretendard']">서류정보</span>
            <div className="w-4 h-4 flex items-center justify-center">
              <Image src="/icons/arrow_right.svg" alt="arrow_right" width={16} height={16} />
            </div>
            <span className="text-[11px] leading-[140%] text-[#1E1E1E] font-semibold font-['Pretendard']">내용입력</span>
          </div>

          {/* X 버튼 */}
          <button
            className="w-4 h-4 flex items-center justify-center cursor-pointer flex-shrink-0"
            onClick={onClose}
          >
            <Image src="/icons/close.svg" alt="close" width={16} height={16} />
          </button>
        </div>

        {/* 메인 컨텐츠 영역 */}
        <div className="flex flex-row justify-center items-start w-full flex-shrink-0 flex-grow gap-4 px-4 pb-4">
          {/* 왼쪽 영역 (264px) */}
          <div className="flex flex-col items-start gap-4 w-[264px] h-full flex-shrink-0">
            {/* 서류 목록 */}
            <div className="flex flex-col items-start w-full">
              {/* 타이틀 영역 */}
              <div className="flex flex-row items-end gap-5 w-full h-7 flex-shrink-0">
                <div className="flex flex-col items-start flex-1">
                  <div className="flex flex-row items-center py-[6px] px-0 gap-1 rounded-lg">
                    <span className="text-sm leading-[140%] text-[#1E1E1E] font-semibold font-['Pretendard']">
                      생성된 서류 리스트
                    </span>
                  </div>
                </div>
                {/* 열고 닫기 버튼 */}
                <button
                  onClick={() => setIsListOpen(!isListOpen)}
                  className="w-5 h-5 flex items-center justify-center flex-shrink-0"
                >
                  {isListOpen ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 12L8 8L12 12"
                        stroke="#1E1E1E"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 4L8 8L12 4"
                        stroke="#1E1E1E"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {/* 서류 항목들 */}
              {isListOpen && (
                <div className="flex flex-col items-start w-full border border-[#D9D9D9]">
                  <div
                    className={`flex flex-row items-center p-2 w-full h-8 border-b-0 ${selectedDocument === '일반과세자 부가가치세 신고서'
                      ? 'bg-[#F5F5F5]'
                      : 'bg-white'
                      }`}
                    onClick={() => setSelectedDocument('일반과세자 부가가치세 신고서')}
                  >
                    <span
                      className={`text-[11px] leading-[100%] font-['Pretendard'] flex-1 ${selectedDocument === '일반과세자 부가가치세 신고서'
                        ? 'text-[#1E1E1E] font-medium'
                        : 'text-[#757575] font-medium'
                        }`}
                    >
                      일반과세자 부가가치세 신고서
                    </span>
                  </div>
                  <div
                    className={`flex flex-row items-center p-2 w-full h-8 border-t border-[#D9D9D9] ${selectedDocument === '일반과세자 부가가치세 신고서2'
                      ? 'bg-[#F5F5F5]'
                      : 'bg-white'
                      }`}
                    onClick={() => setSelectedDocument('일반과세자 부가가치세 신고서2')}
                  >
                    <span
                      className={`text-[11px] leading-[100%] font-['Pretendard'] flex-1 ${selectedDocument === '일반과세자 부가가치세 신고서2'
                        ? 'text-[#1E1E1E] font-medium'
                        : 'text-[#757575] font-medium'
                        }`}
                    >
                      일반과세자 부가가치세 신고서
                    </span>
                  </div>
                  <div
                    className={`flex flex-row items-center p-2 w-full h-8 border-t border-[#D9D9D9] ${selectedDocument === '일반과세자 부가가치세 신고서3'
                      ? 'bg-[#F5F5F5]'
                      : 'bg-white'
                      }`}
                    onClick={() => setSelectedDocument('일반과세자 부가가치세 신고서3')}
                  >
                    <span
                      className={`text-[11px] leading-[100%] font-['Pretendard'] flex-1 ${selectedDocument === '일반과세자 부가가치세 신고서3'
                        ? 'text-[#1E1E1E] font-medium'
                        : 'text-[#757575] font-medium'
                        }`}
                    >
                      일반과세자 부가가치세 신고서
                    </span>
                  </div>
                  <div
                    className={`flex flex-row items-center p-2 w-full h-8 border-t border-[#D9D9D9] ${selectedDocument === '일반과세자 부가가치세 신고서4'
                      ? 'bg-[#F5F5F5]'
                      : 'bg-white'
                      }`}
                    onClick={() => setSelectedDocument('일반과세자 부가가치세 신고서4')}
                  >
                    <span
                      className={`text-[11px] leading-[100%] font-['Pretendard'] flex-1 ${selectedDocument === '일반과세자 부가가치세 신고서4'
                        ? 'text-[#1E1E1E] font-medium'
                        : 'text-[#757575] font-medium'
                        }`}
                    >
                      일반과세자 부가가치세 신고서
                    </span>
                  </div>
                </div>
              )}

              {/* 추가 서류 버튼 */}
              <button
                onClick={handleOpenSidePanel}
                className="flex flex-row justify-center items-center px-3 py-2 gap-2 w-full h-[27px] bg-[#2C2C2C]"
              >
                <span className="text-[11px] leading-[100%] text-[#F5F5F5] font-medium font-['Pretendard']">
                  서류 서식 추가하기
                </span>
              </button>
            </div>

            {/* 업로드 영역 */}
            <div className="flex flex-col items-start pt-4 gap-[15px] w-full bg-gradient-to-b from-transparent to-white">
              <div className="flex flex-col items-start gap-4 w-full min-w-[264px]">
                <div className="flex flex-row justify-between items-end gap-4 w-full pr-4">
                  <div className="flex flex-col items-start mx-auto w-[248px]">
                    <div className="flex flex-row items-center py-[6px] px-0 gap-1 w-[256px] rounded-lg">
                      <span className="text-sm leading-[140%] text-[#1E1E1E] font-semibold font-['Pretendard']">
                        자료 업로드
                      </span>
                    </div>
                    <span className="text-[11px] leading-[140%] text-[#767676] font-['Pretendard'] w-[248px]">
                      해당 서류와 관련된 내용이 있는 자료를 업로드하세요. Eos가 읽고 기록해 줍니다.
                    </span>
                  </div>
                </div>

                {/* 파일 업로드 영역 */}
                <div className="flex flex-col justify-center items-center p-6 gap-3 w-full min-w-[264px] h-[125px] bg-white border border-dashed border-[#D9D9D9]">
                  <div className="w-5 h-5">
                    {/* Upload 아이콘 */}
                    <Image src="/icons/upload.svg" alt="upload" width={24} height={24} />
                  </div>
                  <div className="flex flex-col items-center gap-0.5 w-[173px]">
                    <span className="text-[11px] leading-[140%] text-center text-[#303030] font-['Pretendard']">
                      파일을 선택하거나 여기로 드래그하세요.
                    </span>
                    <span className="text-[10px] leading-[140%] text-center text-[#767676] font-medium font-['Pretendard'] w-full">
                      (PDF, XLS, XLSX, DOC, DOCX, JPG, PNG, GIF 파일을 지원합니다)
                    </span>
                  </div>
                </div>

                {/* 업로드 버튼 */}
                <div className="flex flex-row justify-end items-center gap-2 w-full h-[27px]">
                  <button className="flex flex-row justify-center items-center px-3 py-2 gap-2 w-[63px] h-[27px] bg-[#2C2C2C]">
                    <span className="text-[11px] leading-[100%] text-[#F5F5F5] font-medium font-['Pretendard']">
                      저장하기
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 중앙 영역 (624px) */}
          <div className="flex flex-col items-start gap-4 flex-1 h-[100%] min-w-0">
            {/* 제목 영역 */}
            <div className="flex flex-col items-start gap-4 w-full min-w-[520px] h-7 flex-shrink-0">
              <div className="flex flex-row items-end gap-5 w-full h-7">
                <div className="flex flex-col items-start flex-1">
                  <div className="flex flex-row items-center py-[6px] px-0 gap-1 w-[278px] rounded-lg">
                    <span className="text-sm leading-[140%] text-[#1E1E1E] font-semibold font-['Pretendard']">
                      서류 보기
                    </span>
                    <span className="text-[11px] leading-[100%] text-[#757575] font-medium font-['Pretendard']">
                      (필요한 내용을 입력하고 정보를 저장하세요.)
                    </span>
                  </div>
                </div>

                {/* 버튼들 */}
                <div className="flex flex-row justify-end items-center gap-2 h-[27px]">
                  <button className="flex flex-row justify-center items-center px-3 py-2 gap-2 w-[63px] h-[27px] bg-[#F26522]">
                    <span className="text-[11px] leading-[100%] text-[#F5F5F5] font-medium font-['Pretendard']">
                      작업완료
                    </span>
                  </button>
                  <button className="flex flex-row justify-center items-center px-3 py-2 gap-2 w-[63px] h-[27px] bg-[#F3F3F3]">
                    <span className="text-[11px] leading-[100%] text-[#1E1E1E] font-medium font-['Pretendard']">
                      다운로드
                    </span>
                  </button>
                  <button className="flex flex-row justify-center items-center px-3 py-2 gap-2 w-[63px] h-[27px] bg-[#F3F3F3]">
                    <span className="text-[11px] leading-[100%] text-[#1E1E1E] font-medium font-['Pretendard']">
                      인쇄하기
                    </span>
                  </button>
                  <button className="flex flex-row justify-center items-center px-3 py-2 gap-2 w-[63px] h-[27px] bg-[#2C2C2C]">
                    <span className="text-[11px] leading-[100%] text-[#F5F5F5] font-medium font-['Pretendard']">
                      파일변환
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* 서류 미리보기 영역 */}
            <div className="w-full h-[100%] bg-white border border-[#D9D9D9] flex-shrink-0">
              {/* 서류 내용이 들어갈 영역 */}
              <div className="p-4">
                <p className="text-sm text-[#1E1E1E]">서류 미리보기 영역</p>
              </div>
            </div>
          </div>

          {/* 오른쪽 영역 (304px) - AI 채팅 */}
          <div className="flex flex-row items-center pl-0 gap-[10px] h-full flex-shrink-0">
            <ChatArea />
          </div>
        </div>

        {/* 사이드 패널 - 추가할 서류 서식 */}
        <AvailableFormsSidebar
          isOpen={showSidePanel}
          onClose={() => setShowSidePanel(false)}
          reportId={reportId}
        />
      </div>
    </div>
  );
}

export default VatDocumentCreateModal;
