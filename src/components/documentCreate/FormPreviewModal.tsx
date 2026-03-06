'use client';

import React, { useEffect } from 'react';
import TaxDocument from '@/components/taxDocument/TaxDocument';
import PreviewWrapper from '@/components/documentCreate/PreviewWrapper';
import { VatFormData } from '@/services/api';
import { printElement } from '@/utils/printUtils';

type FormPreviewModalProps = {
  isOpen: boolean;
  title?: string;
  documentList: VatFormData[];
  onClose: () => void;
};

export default function FormPreviewModal({
  isOpen,
  onClose,
  title = '서류보기',
  documentList,
}: FormPreviewModalProps) {
  const onPrint = () => {
    printElement({ selector: '#form-preview-content' });
  };

  useEffect(() => {
    if (!isOpen) return;
    document.body.classList.add('print-preview');
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      document.body.classList.remove('print-preview');
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[70] bg-[rgba(15,23,42,0.28)] flex items-center justify-center px-4 py-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white w-full max-w-[656px] max-h-[90vh] flex flex-col shadow-xl"
        onClick={event => event.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <h2 className="text-[14px] font-semibold text-[#1E1E1E]">{title}</h2>
          <button
            type="button"
            onClick={onPrint}
            className="text-[12px] leading-[100%] text-[#1E1E1E] w-[64px] h-[28px] bg-[#F3F3F3] weight-[medium]"
            aria-label="닫기"
          >
            인쇄하기
          </button>
        </div>
        <div className="overflow-auto w-[624px] h-[724px] mx-auto mb-2.5 border border-[#E6E6E6]">
          <div
            className="mx-auto print-preview print-preview-modal"
            style={{
              width: '100%',
              boxSizing: 'border-box',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <PreviewWrapper
              id="form-preview-content"
              orientation={'portrait'}
              maxWidth={882}
              className="w-auto"
              style={{ maxWidth: 'none' }}
            >
              {documentList.map((doc, index) => (
                <div
                  key={`${doc.formCode}-${index}`}
                  style={{
                    width: 'fit-content',
                    maxWidth: 'none',
                    display: 'inline-block',
                  }}
                >
                  <TaxDocument
                    formCode={doc.formCode}
                    data={doc.data}
                    inputType={doc.inputType}
                  />
                </div>
              ))}
            </PreviewWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
