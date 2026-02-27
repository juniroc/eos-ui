'use client';

import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import AvailableFormsModal from '@/components/documentCreate/AvailableFormsModal';
import ToastMessage from '@/components/ToastMessage';
import { completeVatForm, completeVatReport, deleteVatForm, VatFormData, } from '@/services/api';
import { useAuth } from '@/contexts/AuthContext';
import ConfirmModal from '@/components/ConfirmModal';
import TaxDocument from '@/components/taxDocument/TaxDocument';
import PreviewWrapper from '@/components/documentCreate/PreviewWrapper';
import { convertToApiData, getOrientation, } from '@/components/taxDocument/template/common/utils/formUitls';
import { FormCode } from '@/components/taxDocument/template/common/type';
import { getVatReport } from '@/services/vat';
import FileUpload from '@/components/documentCreate/FileUpload';

interface DocumentItem {
  id: string;
  name: string;
  isAdded?: boolean;
}

function VatDocumentCreateContent() {
  const params = useParams();
  const router = useRouter();
  const reportId =
    typeof params.reportId === 'string' ? params.reportId : undefined;
  const { token } = useAuth();

  const [documentList, setDocumentList] = useState<VatFormData[]>([]);
  const [selectedDocument, setSelectedDocument] = useState<VatFormData | null>(
    null
  );
  const [isListOpen, setIsListOpen] = useState(true);
  const [showSidePanel, setShowSidePanel] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);

  const handleOpenSidePanel = useCallback(() => {
    if (!reportId) {
      alert('서류 정보가 없습니다.');
      return;
    }
    setShowSidePanel(true);
  }, [reportId]);

  const handleFormsAdded = useCallback((addedForms: Array<VatFormData>) => {
    const newForms = addedForms.map(form => ({ ...form, isAdded: true }));
    setDocumentList(prev => [...prev, ...newForms]);
    setToastMessage('서류 서식이 추가됐어요!');
    setShowToast(true);
  }, []);

  const handleRemoveAddedForm = useCallback(
    async (formId: string) => {
      if (!token) {
        alert('로그인이 필요합니다.');
        return;
      }
      try {
        setIsDeleting(formId);
        await deleteVatForm(formId, token);
        setDocumentList(prev => prev.filter(doc => doc.id !== formId));
        if (selectedDocument?.id === formId) {
          setSelectedDocument(
            documentList.find(doc => doc.id !== formId) ?? null
          );
        }
        setToastMessage('서류가 삭제됐어요!');
        setShowToast(true);
      } catch (error) {
        console.error('서식 삭제 에러:', error);
        const msg =
          error instanceof Error ? error.message : '서식 삭제에 실패했습니다.';
        alert(msg);
      } finally {
        setIsDeleting(null);
      }
    },
    [token, selectedDocument, documentList]
  );

  const handleDocumentUpdate = (field: string, value: unknown) => {
    if (!selectedDocument) return;
    setSelectedDocument(prev => {
      if (!prev) return prev;
      return {
        ...prev,
        data: {
          ...prev.data,
          [field]: value,
        },
      } as VatFormData;
    });
  };

  const getDocumentList = useCallback(async () => {
    if (!reportId) return;
    if (!token) return;

    const { forms } = await getVatReport(reportId, token);
    setDocumentList(forms);
  }, [reportId, token]);

  const handleCompleteForm = async () => {
    try {
      if (!selectedDocument) return;
      const { id, data, inputType } = convertToApiData(selectedDocument);
      await completeVatForm(id, { data, inputType }, token!);
      const { forms } = await getVatReport(reportId!, token!);
      setDocumentList(forms);

      setToastMessage('서류가 저장됐어요!');
      setShowToast(true);
    } catch (error) {
      console.error('서식 저장 에러:', error);
      const errorMessage =
        error instanceof Error ? error.message : '서식 저장에 실패했습니다.';
      alert(errorMessage);
    }
  };

  const handleCompleteReport = async () => {
    try {
      if (!reportId) return;
      // 완료 API 호출
      await completeVatReport(reportId, token!);
      // 토스트 메시지 표시
      setToastMessage('서류 작성이 완료되었습니다!');
      setShowToast(true);
    } catch (error) {
      console.error('서류 작성 완료 에러:', error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : '서류 작성 완료에 실패했습니다.';
      alert(errorMessage);
    }
  };

  const handleUploadFile = useCallback(
    async ({ data, inputType, uploadedDocuments }: VatFormData) => {
      setSelectedDocument({
        ...selectedDocument,
        // @ts-ignore
        data,
        inputType,
        uploadedDocuments,
      });
      setToastMessage('자료가 업로드됐어요!');
      setShowToast(true);
    },
    [selectedDocument]
  );

  const previewOrientation = getOrientation(
    selectedDocument?.formCode as FormCode
  );
  const previewFrameWidth = 884;

  const docListItems = useMemo(
    () =>
      documentList.map(doc => (
        <DocListItem
          key={doc.id}
          doc={doc}
          isSelected={selectedDocument?.id === doc.id}
          isDeleting={isDeleting === doc.id}
          onSelect={() => setSelectedDocument(doc)}
          onRemove={e => {
            e.stopPropagation();
            setPendingDeleteId(doc.id);
          }}
        />
      )),
    [documentList, selectedDocument, isDeleting]
  );

  useEffect(() => {
    getDocumentList();
  }, [getDocumentList]);

  if (!reportId) {
    return (
      <div className="flex flex-col items-start py-4 gap-6 max-w-[1100px] w-full flex-1">
        <p className="text-sm text-[#1E1E1E]">서류 정보가 없습니다.</p>
        <button
          type="button"
          onClick={() => router.push('/vat-document-create')}
          className="font-medium text-[11px] text-[#F26522] border border-[#F26522] px-3 py-2"
        >
          부가세 서류 생성으로 돌아가기
        </button>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col items-start py-4 gap-6 w-full max-w-[1100px] flex-1 min-h-0 h-full"
      style={{ minHeight: 'calc(100vh - 120px)' }}
    >
      {/* Title row */}

      <FileUpload
        selectedDocument={selectedDocument}
        onSuccess={handleUploadFile}
      />

      {/* Main content: 서류리스트 + 서식보기 */}
      <div className="flex flex-row items-stretch gap-4 w-full flex-1 min-h-0">
        {/* 서류리스트 - 200px */}
        <div className="flex flex-col items-start gap-4 w-[200px] flex-none">
          <div className="flex flex-col justify-center items-start w-full gap-4 flex-none">
            <div className="flex flex-row justify-between items-center w-full min-h-[28px] gap-5">
              <div className="flex flex-row items-center gap-1 flex-1">
                <div className="flex flex-row items-center gap-1">
                  <span className="font-semibold text-[14px] leading-[140%] text-[#1E1E1E]">
                    생성된 서류 리스트
                  </span>
                </div>
                <span className="font-semibold text-[14px] leading-[140%] text-[#1E1E1E]">
                  ({documentList.length})
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsListOpen(!isListOpen)}
                className="w-4 h-4 flex items-center justify-center flex-none"
              >
                {isListOpen ? (
                  <Image
                    src="/icons/arrow_up.svg"
                    alt="collapse"
                    width={16}
                    height={16}
                  />
                ) : (
                  <Image
                    src="/icons/arrow_down_black.svg"
                    alt="expand"
                    width={16}
                    height={16}
                  />
                )}
              </button>
            </div>
            {isListOpen && (
              <div className="flex flex-col items-start w-full">
                {docListItems}
                <button
                  type="button"
                  onClick={handleOpenSidePanel}
                  className="flex flex-row justify-center items-center py-2 px-3 gap-2 w-full h-[27px] bg-[#2C2C2C] flex-none  mt-4"
                >
                  <span className="font-medium text-[11px] leading-[100%] text-[#F5F5F5]">
                    서류 서식 추가하기
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 서식보기 - 미리보기 영역 최대 너비/높이 + 하단 버튼 그룹 */}
        <div className="flex flex-col items-stretch gap-4 flex-1 min-w-0 min-h-0 w-full overflow-hidden">
          <div className="flex flex-row justify-between items-center w-full min-h-[28px] gap-[51px] flex-none">
            <span className="font-semibold text-[14px] leading-[140%] text-[#1E1E1E]">
              서류보기
            </span>
            {/* 미리보기·파일변환 버튼 그룹: 136×27, gap 10px */}
            <div className="flex flex-row items-start p-0 gap-[10px] w-[136px] h-[27px] flex-none grow-0">
              <button
                type="button"
                className="box-border flex flex-row justify-center items-center py-2 px-3 gap-2 w-[63px] h-[27px] flex-none grow-0 bg-[#F3F3F3] font-medium text-[11px] leading-[100%] text-[#1E1E1E]"
              >
                미리보기
              </button>
              <button
                type="button"
                className="box-border flex flex-row justify-center items-center py-2 px-3 gap-2 w-[63px] h-[27px] flex-none grow-0 bg-[#2C2C2C] font-medium text-[11px] leading-[100%] text-[#F5F5F5]"
              >
                파일변환
              </button>
            </div>
          </div>

          {/* 서류 미리보기 프레임 - 내용 없어도 가용 영역 꽉 채움 */}
          <div className="flex flex-col items-stretch w-full flex-1 min-h-0 min-w-0 bg-white overflow-hidden gap-4">
            <div className="flex-1 min-h-0 min-w-0 p-[1px] overflow-y-auto overflow-x-hidden box-border border border-[#D9D9D9]">
              {selectedDocument && (
                <div
                  className="mx-auto"
                  style={{
                    width: previewFrameWidth,
                    minWidth: previewFrameWidth,
                    maxWidth: previewFrameWidth,
                    boxSizing: 'border-box',
                  }}
                >
                  <PreviewWrapper
                    orientation={previewOrientation}
                    maxWidth={882}
                  >
                    <TaxDocument
                      formCode={selectedDocument.formCode}
                      data={selectedDocument.data}
                      inputType={selectedDocument.inputType}
                      updater={handleDocumentUpdate}
                    />
                  </PreviewWrapper>
                </div>
              )}
            </div>
            {/* button group - 작업완료, 반영하기 (스펙: 852×27, space-between) */}
            <div className="flex flex-row justify-between items-start p-0 gap-[10px] h-[27px] flex-none">
              <button
                type="button"
                className="flex flex-row justify-center items-center py-2 px-3 gap-2 h-[27px] w-[63px] flex-none bg-[#F3F3F3] font-medium text-[11px] leading-[100%] text-[#1E1E1E]"
                onClick={handleCompleteReport}
              >
                작업완료
              </button>
              <button
                type="button"
                className="flex flex-row justify-center items-center py-2 px-3 gap-2 h-[27px] w-[63px] flex-none bg-[#F3F3F3] font-medium text-[11px] leading-[100%] text-[#1E1E1E]"
                onClick={handleCompleteForm}
              >
                반영하기
              </button>
            </div>
          </div>
        </div>
      </div>

      <AvailableFormsModal
        isOpen={showSidePanel}
        onClose={() => setShowSidePanel(false)}
        reportId={reportId}
        onFormsAdded={handleFormsAdded}
      />

      <ConfirmModal
        isOpen={pendingDeleteId !== null}
        onClose={() => setPendingDeleteId(null)}
        title="서류 삭제하시겠어요?"
        description="한 번 삭제하면 되돌릴 수 없어요."
        cancelText="뒤로가기"
        confirmText="삭제하기"
        onConfirm={() => {
          if (pendingDeleteId) handleRemoveAddedForm(pendingDeleteId);
        }}
      />

      <ToastMessage
        message={toastMessage}
        isVisible={showToast}
        onHide={() => setShowToast(false)}
      />
    </div>
  );
}

const DocListItem = memo(function DocListItem({
  doc,
  isSelected,
  isDeleting,
  onSelect,
  onRemove,
}: {
  doc: DocumentItem;
  isSelected: boolean;
  isDeleting: boolean;
  onSelect: () => void;
  onRemove: (e: React.MouseEvent) => void;
}) {
  return (
    <div
      className={`flex flex-row justify-between items-center p-2 w-full min-w-[60px] h-8 border border-[#D9D9D9] cursor-pointer ${
        isSelected ? 'bg-[#F5F5F5]' : 'bg-white'
      }`}
      onClick={onSelect}
    >
      <span
        className={`font-medium text-[11px] leading-[100%] flex-1 ${
          isSelected ? 'text-[#1E1E1E]' : 'text-[#757575]'
        }`}
      >
        {doc.name}
      </span>
      {doc.isAdded && (
        <button
          type="button"
          onClick={onRemove}
          disabled={isDeleting}
          className="w-4 h-4 flex items-center justify-center flex-none disabled:opacity-50"
        >
          {isDeleting ? (
            <div className="w-4 h-4 border-2 border-[#757575] border-t-transparent rounded-full animate-spin" />
          ) : (
            <Image
              src="/icons/trash_red.svg"
              alt="삭제"
              width={14}
              height={14}
            />
          )}
        </button>
      )}
    </div>
  );
});

export default VatDocumentCreateContent;
