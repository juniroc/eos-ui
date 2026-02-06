'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ModalProps } from '@/types/props';
import Image from 'next/image';
import ChatArea from '@/components/ChatArea';
import AvailableFormsSidebar from '@/components/documentCreate/AvailableFormsSidebar';
import ToastMessage from '@/components/ToastMessage';
import { deleteVatForm, uploadVatFormFile, VatFormData } from '@/services/api';
import { useAuth } from '@/contexts/AuthContext';
import { getOrientation } from '@/components/taxDocument/template/common/utils/formUitls';
import { FormCode } from '@/components/taxDocument/template/common/type';
import PreviewWrapper from '@/components/documentCreate/PreviewWrapper';
import TaxDocument from '@/components/taxDocument/TaxDocument';

interface VatDocumentCreateModalProps extends ModalProps {
  reportForms: VatFormData[];
  reportId?: string;
}

interface DocumentItem {
  id: string;
  name: string;
  formCode: string;
  isAdded?: boolean; // 추가된 서식인지 여부
}

function VatDocumentCreateModal({
  isOpen,
  onClose,
  reportForms,
  reportId,
}: VatDocumentCreateModalProps) {
  const { token } = useAuth();
  const [documentList, setDocumentList] = useState<VatFormData[]>(reportForms);
  const [selectedDocument, setSelectedDocument] = useState<VatFormData | null>(
    null
  );
  const [isListOpen, setIsListOpen] = useState(true);
  const [showSidePanel, setShowSidePanel] = useState(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [showToast, setShowToast] = useState(false);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const previewOrientation = getOrientation(
    selectedDocument?.formCode as FormCode
  );

  const handleDocumentUpdate = (field: string, value: unknown) => {
    if (!selectedDocument) return;

    const nextDocument = {
      ...selectedDocument,
      data: {
        ...selectedDocument.data,
        data: {
          ...selectedDocument.data.data,
          [field]: value,
        },
      },
    } as VatFormData;

    setSelectedDocument(nextDocument);
    setDocumentList(prev =>
      prev.map(doc => (doc.id === nextDocument.id ? nextDocument : doc))
    );
  };
  // 사이드 패널 열기
  const handleOpenSidePanel = () => {
    if (!reportId) {
      alert('서류 정보가 없습니다.');
      return;
    }
    setShowSidePanel(true);
  };

  // 서식 추가 완료 핸들러
  const handleFormsAdded = (addedForms: Array<VatFormData>) => {
    // 추가된 서식을 서류 리스트에 추가 (isAdded 플래그 설정)
    const newForms = addedForms.map(form => ({ ...form, isAdded: true }));
    setDocumentList(prev => [...prev, ...newForms]);
    // 토스트 메시지 표시
    setToastMessage('서류 서식이 추가됐어요!');
    setShowToast(true);
  };

  // 파일 선택 핸들러
  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
  };

  // 파일 input 변경 핸들러
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  // 드래그 앤 드롭 핸들러
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  // 파일 업로드 핸들러
  const handleUpload = async () => {
    if (!selectedFile || !token) {
      alert('파일을 선택해주세요.');
      return;
    }

    if (!selectedDocument) {
      alert('서류를 선택해주세요.');
      return;
    }

    try {
      setIsUploading(true);
      await uploadVatFormFile(selectedDocument.id, selectedFile, token);

      // 성공 시 파일 선택 초기화 및 토스트 메시지 표시
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      setToastMessage('파일이 업로드되었습니다!');
      setShowToast(true);
    } catch (error) {
      console.error('파일 업로드 에러:', error);
      const errorMessage =
        error instanceof Error ? error.message : '파일 업로드에 실패했습니다.';
      alert(errorMessage);
    } finally {
      setIsUploading(false);
    }
  };

  // 추가된 서식 삭제 핸들러
  const handleRemoveAddedForm = async (formId: string, e: React.MouseEvent) => {
    e.stopPropagation(); // 클릭 이벤트 전파 방지

    if (!token) {
      alert('로그인이 필요합니다.');
      return;
    }

    try {
      setIsDeleting(formId);
      await deleteVatForm(formId, token);

      // 성공 시 리스트에서 제거
      setDocumentList(prev => prev.filter(doc => doc.id !== formId));

      // 선택된 문서가 삭제된 경우 첫 번째 문서 선택
      if (selectedDocument?.id === formId) {
        setSelectedDocument(documentList[0] || null);
      }

      // 토스트 메시지 표시
      setToastMessage('서류가 삭제됐어요!');
      setShowToast(true);
    } catch (error) {
      console.error('서식 삭제 에러:', error);
      const errorMessage =
        error instanceof Error ? error.message : '서식 삭제에 실패했습니다.';
      alert(errorMessage);
    } finally {
      setIsDeleting(null);
    }
  };

  useEffect(() => {
    setDocumentList(reportForms);
  }, [reportForms]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50 p-5">
      <div
        className={[
          'flex flex-col items-center bg-white h-full relative',
          previewOrientation === 'landscape' ? 'w-[1482px]' : 'w-[1240px]',
        ].join(' ')}
      >
        {/* Top 영역 */}
        <div className="flex flex-row justify-between items-center p-3 w-full h-10 flex-shrink-0">
          {/* Breadcrumb */}
          <div className="flex flex-row items-center gap-0.5 flex-1 h-4">
            <span className="text-[11px] leading-[140%] text-[#B3B3B3] font-['Pretendard']">
              부가세
            </span>
            <div className="w-4 h-4 flex items-center justify-center">
              <Image
                src="/icons/arrow_right.svg"
                alt="arrow_right"
                width={16}
                height={16}
              />
            </div>
            <span className="text-[11px] leading-[140%] text-[#B3B3B3] font-['Pretendard']">
              서류정보
            </span>
            <div className="w-4 h-4 flex items-center justify-center">
              <Image
                src="/icons/arrow_right.svg"
                alt="arrow_right"
                width={16}
                height={16}
              />
            </div>
            <span className="text-[11px] leading-[140%] text-[#1E1E1E] font-semibold font-['Pretendard']">
              내용입력
            </span>
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
        <div className="flex flex-row justify-center items-start w-full h-[760px] flex-shrink-0 flex-grow gap-4 px-4 pb-4">
          {/* 왼쪽 영역 (264px) */}
          <div className="flex flex-col items-start gap-4 w-[264px] h-full flex-shrink-0">
            {/* 서류 목록 */}
            <div className="flex flex-col items-start w-full">
              {/* 타이틀 영역 */}
              <div className="flex flex-row items-center gap-5 w-full h-7 flex-shrink-0">
                <div className="flex flex-col items-start flex-1">
                  <div className="flex flex-row items-center py-[6px] px-0 gap-1 rounded-lg">
                    <span className="text-sm leading-[140%] text-[#1E1E1E] font-semibold font-['Pretendard']">
                      생성된 서류 리스트 ({documentList.length})
                    </span>
                  </div>
                </div>
                {/* 열고 닫기 버튼 */}
                <button
                  onClick={() => setIsListOpen(!isListOpen)}
                  className="w-5 h-5 flex items-center justify-center flex-shrink-0"
                >
                  {isListOpen ? (
                    <Image
                      src="/icons/arrow_down_black.svg"
                      alt="arrow_down_black"
                      width={16}
                      height={16}
                    />
                  ) : (
                    <Image
                      src="/icons/arrow_up.svg"
                      alt="arrow_up"
                      width={16}
                      height={16}
                    />
                  )}
                </button>
              </div>

              {/* 서류 항목들 */}
              {isListOpen && (
                <>
                  {/* 기존 서식 항목들 */}
                  <div className="flex flex-col items-start w-full border border-[#D9D9D9]">
                    {documentList.map((doc, index) => (
                      <div
                        key={doc.id}
                        className={`flex flex-row justify-between items-center p-2 w-full h-8 ${
                          index === 0
                            ? 'border-b-0'
                            : 'border-t border-[#D9D9D9]'
                        } ${doc.isAdded ? 'bg-[#F5F5F5]' : 'bg-white'} cursor-pointer`}
                        onClick={() => setSelectedDocument(doc)}
                      >
                        <span
                          className={`text-[11px] leading-[100%] font-['Pretendard'] flex-1 ${doc.isAdded ? 'text-[#1E1E1E]' : 'text-[#757575]'} font-medium`}
                        >
                          {doc.name}
                        </span>
                        {doc.isAdded && (
                          <button
                            onClick={e => handleRemoveAddedForm(doc.id, e)}
                            disabled={isDeleting === doc.id}
                            className="w-4 h-4 flex items-center justify-center flex-shrink-0 relative disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isDeleting === doc.id ? (
                              <div className="w-4 h-4 border-2 border-[#757575] border-t-transparent rounded-full animate-spin" />
                            ) : (
                              <Image
                                src="/icons/close.svg"
                                alt="close"
                                width={16}
                                height={16}
                              />
                            )}
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* 추가 서류 버튼 */}
              <button
                onClick={handleOpenSidePanel}
                className="flex flex-row justify-center items-center px-3 py-2 gap-2 w-full h-[27px] bg-[#2C2C2C] mt-4"
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
                      해당 서류와 관련된 내용이 있는 자료를 업로드하세요. Eos가
                      읽고 기록해 줍니다.
                    </span>
                  </div>
                </div>

                {/* 파일 업로드 영역 */}
                <div
                  className={`flex flex-col justify-center items-center p-6 gap-3 w-full min-w-[264px] h-[125px] bg-white border border-dashed ${
                    isDragging
                      ? 'border-[#2C2C2C] bg-[#F5F5F5]'
                      : 'border-[#D9D9D9]'
                  } cursor-pointer`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.xls,.xlsx,.doc,.docx,.jpg,.jpeg,.png,.gif"
                    className="hidden"
                    onChange={handleFileInputChange}
                  />
                  {selectedFile ? (
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-5 h-5">
                        <Image
                          src="/icons/check_circle.svg"
                          alt="check"
                          width={24}
                          height={24}
                        />
                      </div>
                      <span className="text-[11px] leading-[140%] text-center text-[#303030] font-['Pretendard']">
                        {selectedFile.name}
                      </span>
                    </div>
                  ) : (
                    <>
                      <div className="w-5 h-5">
                        {/* Upload 아이콘 */}
                        <Image
                          src="/icons/upload.svg"
                          alt="upload"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="flex flex-col items-center gap-0.5 w-[173px]">
                        <span className="text-[11px] leading-[140%] text-center text-[#303030] font-['Pretendard']">
                          파일을 선택하거나 여기로 드래그하세요.
                        </span>
                        <span className="text-[10px] leading-[140%] text-center text-[#767676] font-medium font-['Pretendard'] w-full">
                          (PDF, XLS, XLSX, DOC, DOCX, JPG, PNG, GIF 파일을
                          지원합니다)
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* 업로드 버튼 */}
                <div className="flex flex-row justify-end items-center gap-2 w-full h-[27px]">
                  <button
                    onClick={handleUpload}
                    disabled={!selectedFile || isUploading}
                    className={`flex flex-row justify-center items-center px-3 py-2 gap-2 w-[63px] h-[27px] font-['Pretendard'] font-medium text-[11px] leading-[100%] ${
                      selectedFile && !isUploading
                        ? 'bg-[#2C2C2C] text-[#F5F5F5]'
                        : 'bg-[#E6E6E6] text-[#B3B3B3]'
                    }`}
                  >
                    <span>{isUploading ? '업로드중...' : '저장하기'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 중앙 영역 (624px) */}
          <div
            className={[
              'flex flex-col items-start gap-4 h-[100%] min-w-0',
              previewOrientation === 'landscape'
                ? 'min-w-[882px] flex-1'
                : 'flex-1',
            ].join(' ')}
          >
            {/* 제목 영역 */}
            <div className="flex flex-col items-start gap-4 w-full h-7 flex-shrink-0">
              <div className="flex flex-row items-end gap-5 w-full h-7 justify-between">
                <div className="flex flex-col items-start">
                  <div className="flex flex-row items-center py-[6px] px-0 gap-1 rounded-lg">
                    <span className="text-sm leading-[140%] text-[#1E1E1E] font-semibold font-['Pretendard']">
                      서류 보기
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
            <div className="w-full h-[calc(100%-40px)] bg-white border border-[#D9D9D9] flex-shrink-0 overflow-y-scroll">
              {selectedDocument && (
                <PreviewWrapper orientation={previewOrientation} maxWidth={624}>
                  <TaxDocument
                    formCode={selectedDocument.formCode}
                    data={selectedDocument.data.data}
                    updater={handleDocumentUpdate}
                  />
                </PreviewWrapper>
              )}
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
          onFormsAdded={handleFormsAdded}
        />

        {/* 토스트 메시지 */}
        <ToastMessage
          message={toastMessage}
          isVisible={showToast}
          onHide={() => setShowToast(false)}
        />
      </div>
    </div>
  );
}

export default VatDocumentCreateModal;
