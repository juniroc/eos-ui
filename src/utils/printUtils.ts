/**
 * 인쇄 관련 유틸리티 함수들
 */

export interface PrintOptions {
  /** 인쇄할 특정 요소의 선택자 (예: '#print-area', '.print-content') */
  selector?: string;
  /** 인쇄 시 페이지 제목 */
  title?: string;
  /** 인쇄 전 딜레이 (ms) - 이미지 로딩 등을 위해 */
  delay?: number;
  /** 인쇄 완료 후 콜백 함수 */
  onAfterPrint?: () => void;
  /** 인쇄 전 콜백 함수 */
  onBeforePrint?: () => void;
}

/**
 * 현재 페이지 전체를 인쇄합니다
 */
export const printCurrentPage = (options: PrintOptions = {}) => {
  const { title, delay = 100, onBeforePrint, onAfterPrint } = options;
  
  if (onBeforePrint) {
    onBeforePrint();
  }

  // 페이지 제목 임시 변경
  const originalTitle = document.title;
  if (title) {
    document.title = title;
  }

  // 인쇄 실행
  setTimeout(() => {
    window.print();
    
    // 제목 복원
    if (title) {
      document.title = originalTitle;
    }
    
    if (onAfterPrint) {
      onAfterPrint();
    }
  }, delay);
};

/**
 * 특정 요소만 인쇄합니다
 */
export const printElement = (options: PrintOptions) => {
  const { selector, title, delay = 100, onBeforePrint, onAfterPrint } = options;
  
  if (!selector) {
    console.error('printElement: selector is required');
    return;
  }

  const element = document.querySelector(selector);
  if (!element) {
    console.error(`printElement: Element with selector "${selector}" not found`);
    return;
  }

  if (onBeforePrint) {
    onBeforePrint();
  }

  // 새 창에서 인쇄
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    console.error('printElement: Failed to open print window');
    return;
  }

  // 현재 페이지의 스타일 복사
  const styles = Array.from(document.styleSheets)
    .map(styleSheet => {
      try {
        return Array.from(styleSheet.cssRules)
          .map(rule => rule.cssText)
          .join('\n');
      } catch {
        // 외부 스타일시트는 접근할 수 없을 수 있음
        return '';
      }
    })
    .join('\n');

  // 링크된 스타일시트 복사
  const linkTags = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
    .map(link => link.outerHTML)
    .join('\n');

  // HTML 구성
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>${title || document.title}</title>
        ${linkTags}
        <style>
          ${styles}
          
          /* 인쇄 전용 스타일 */
          @media print {
            body {
              margin: 0;
            }
            
            /* 불필요한 요소 숨기기 */
            .no-print {
              display: none !important;
            }
            
            /* 스크롤 영역 전체 내용 표시 */
            * {
              overflow: visible !important;
              max-height: none !important;
              height: auto !important;
            }
            
            /* 모달 배경 제거 */
            .fixed.inset-0 {
              position: static !important;
            }
            
            /* 스크롤 컨테이너 높이 제한 해제 */
            .overflow-y-auto,
            .overflow-auto,
            .overflow-scroll {
              overflow: visible !important;
              max-height: none !important;
              height: auto !important;
            }
            
            /* Input 요소들 인쇄 스타일 */
            input, select, textarea {
              -webkit-print-color-adjust: exact !important;
              color-adjust: exact !important;
              background: white !important;
              box-shadow: none !important;
            }
            
            /* 숫자 입력 필드 스핀 버튼 숨기기 */
            input[type="number"]::-webkit-outer-spin-button,
            input[type="number"]::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }
            
            input[type="number"] {
              -moz-appearance: textfield;
            }

            select {
              -webkit-appearance: none;
              appearance: none;
            }
          }
        </style>
      </head>
      <body>
        ${element.outerHTML}
      </body>
    </html>
  `;

  printWindow.document.write(htmlContent);
  printWindow.document.close();

  // 인쇄 실행
  setTimeout(() => {
    printWindow.print();
    
    // 인쇄 후 창 닫기
    setTimeout(() => {
      printWindow.close();
      if (onAfterPrint) {
        onAfterPrint();
      }
    }, delay);
  }, delay);
};

/**
 * 모달이나 팝업 컴포넌트를 인쇄합니다
 */
export const printModal = (modalSelector: string, options: Omit<PrintOptions, 'selector'> = {}) => {
  printElement({
    ...options,
    selector: modalSelector,
  });
};

/**
 * 인쇄 미리보기를 위한 CSS 클래스 토글
 */
export const togglePrintPreview = () => {
  document.body.classList.toggle('print-preview');
};
