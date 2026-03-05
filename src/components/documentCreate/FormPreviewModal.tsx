'use client';

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
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

const previewFrameWidth = 624;

export default function FormPreviewModal({
  isOpen,
  onClose,
  title = '서류보기',
  documentList,
}: FormPreviewModalProps) {
  const previewContainerRef = useRef<HTMLDivElement>(null);
  const previewContentRef = useRef<HTMLDivElement>(null);

  const [previewScale, setPreviewScale] = useState(1);
  const [previewContainerWidth, setPreviewContainerWidth] =
    useState(previewFrameWidth);
  const [previewContentWidth, setPreviewContentWidth] =
    useState(previewFrameWidth);
  const [previewContentHeight, setPreviewContentHeight] =
    useState(previewFrameWidth);

  const onPrint = () => {
    printElement({ selector: '#preview-content' });
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

  useLayoutEffect(() => {
    if (!isOpen) return;

    const container = previewContainerRef.current;
    if (!container) return;

    const updateScale = () => {
      const width = container.clientWidth;
      if (!width) return;
      const computed = window.getComputedStyle(container);
      const paddingX =
        parseFloat(computed.paddingLeft) + parseFloat(computed.paddingRight);
      const borderX =
        parseFloat(computed.borderLeftWidth) +
        parseFloat(computed.borderRightWidth);
      const availableWidth = Math.max(1, width - paddingX - borderX);
      setPreviewContainerWidth(availableWidth);

      const contentWidth =
        previewContentRef.current?.scrollWidth || previewFrameWidth;
      const contentHeight =
        previewContentRef.current?.scrollHeight || previewFrameWidth;
      if (contentWidth !== previewContentWidth) {
        setPreviewContentWidth(contentWidth);
      }
      if (contentHeight !== previewContentHeight) {
        setPreviewContentHeight(contentHeight);
      }

      const safetyGap = 2;
      setPreviewScale(Math.min(1, (availableWidth - safetyGap) / contentWidth));
    };

    updateScale();
    const ro = new ResizeObserver(() => updateScale());
    ro.observe(container);
    return () => ro.disconnect();
  }, [isOpen, previewContentHeight, previewContentWidth]);

  useLayoutEffect(() => {
    if (!isOpen) return;
    const content = previewContentRef.current;
    if (!content) return;

    const updateContent = () => {
      const width = content.scrollWidth || previewFrameWidth;
      const height = content.scrollHeight || previewFrameWidth;
      if (width !== previewContentWidth) {
        setPreviewContentWidth(width);
      }
      if (height !== previewContentHeight) {
        setPreviewContentHeight(height);
      }
    };

    updateContent();
    const ro = new ResizeObserver(() => updateContent());
    ro.observe(content);
    return () => ro.disconnect();
  }, [isOpen, previewContentHeight, previewContentWidth]);

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
        <div
          className="overflow-auto w-[624px] mx-auto mb-2.5 border border-[#E6E6E6]"
          style={{ height: Math.ceil(previewContentHeight * previewScale) }}
          ref={previewContainerRef}
        >
          <div
            className="mx-auto print-preview print-preview-modal"
            style={{
              width: previewContainerWidth,
              minWidth: previewContainerWidth,
              maxWidth: previewContainerWidth,
              boxSizing: 'border-box',
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: previewContentWidth * previewScale,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: previewContentWidth,
                  zoom: previewScale,
                }}
              >
                <div
                  ref={previewContentRef}
                  style={{
                    width: 'fit-content',
                    maxWidth: 'none',
                    display: 'inline-block',
                  }}
                >
                  <PreviewWrapper orientation={'portrait'} maxWidth={882}>
                    {documentList.map(doc => (
                      <TaxDocument
                        key={doc.formCode}
                        formCode={doc.formCode}
                        data={doc.data}
                        inputType={doc.inputType}
                      />
                    ))}
                  </PreviewWrapper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
