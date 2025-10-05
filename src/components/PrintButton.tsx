'use client';
import React from 'react';
import Button from './Button';
import { printCurrentPage, printElement, printModal, PrintOptions } from '../utils/printUtils';

interface PrintButtonProps {
  /** 인쇄 버튼의 텍스트 */
  children?: React.ReactNode;
  /** 인쇄 타입: 'page' (전체 페이지), 'element' (특정 요소), 'modal' (모달) */
  printType?: 'page' | 'element' | 'modal';
  /** 인쇄할 요소의 선택자 (printType이 'element' 또는 'modal'일 때 필요) */
  targetSelector?: string;
  /** 인쇄 옵션 */
  printOptions?: PrintOptions;
  /** 버튼 스타일 variant */
  variant?: 'primary' | 'neutral';
  /** 버튼 크기 */
  size?: 'small' | 'medium' | 'large';
  /** 추가 클래스명 */
  className?: string;
  /** 인쇄 버튼 비활성화 */
  disabled?: boolean;
}

export default function PrintButton({
  children = '인쇄하기',
  printType = 'page',
  targetSelector,
  printOptions = {},
  variant = 'neutral',
  size = 'small',
  className = '',
  disabled = false,
}: PrintButtonProps) {
  const handlePrint = () => {
    if (disabled) return;

    switch (printType) {
      case 'page':
        printCurrentPage(printOptions);
        break;
      
      case 'element':
        if (!targetSelector) {
          console.error('PrintButton: targetSelector is required when printType is "element"');
          return;
        }
        printElement({
          ...printOptions,
          selector: targetSelector,
        });
        break;
      
      case 'modal':
        if (!targetSelector) {
          console.error('PrintButton: targetSelector is required when printType is "modal"');
          return;
        }
        printModal(targetSelector, printOptions);
        break;
      
      default:
        printCurrentPage(printOptions);
    }
  };

  return (
    <Button
      onClick={handlePrint}
      variant={variant}
      size={size}
      className={className}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}
