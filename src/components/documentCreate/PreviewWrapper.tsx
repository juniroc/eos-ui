import React from 'react';

type Orientation = 'portrait' | 'landscape';
type Fit = 'content' | 'width';

type Props = {
  children: React.ReactNode;
  maxWidth?: number;
  orientation?: Orientation;

  /**
   * content: children의 실제 크기(scrollWidth/Height) 기준으로 스케일
   * width:  width만 기준(높이는 자연스럽게)
   */
  fit?: Fit;

  /** 프린트에서는 스케일 제거(원본 그대로) */
  disableScaleOnPrint?: boolean;
};

export default function PreviewWrapper({
  children,
  maxWidth = 1000,
  orientation = 'portrait',
  fit: _fit = 'content',
  disableScaleOnPrint = true,
}: Props) {
  return (
    <div className="w-full" style={{ maxWidth }}>
      <div
        id={'preview-section'}
        className="flex flex-col items-start overflow-x-hidden [scrollbar-gutter:stable]"
        style={{ gap: 8 }}
      >
        {children}
      </div>
    </div>
  );
}
