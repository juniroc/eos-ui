'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';

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
  fit = 'content',
  disableScaleOnPrint = true,
}: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);

  const [scale, setScale] = useState(1);
  const [contentSize, setContentSize] = useState({ w: 0, h: 0 });

  // fallback(측정 전 초기값): A4 96dpi 근사치
  const fallback = useMemo(() => {
    const portraitA4 = { w: 794, h: 1123 };
    const landscapeA4 = { w: 1123, h: 794 };
    return orientation === 'landscape' ? landscapeA4 : portraitA4;
  }, [orientation]);

  // 1) children의 “원본” 크기 측정 (transform 없는 레이어)
  useEffect(() => {
    const el = measureRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      // ✅ 스케일 안 걸린 상태의 실제 콘텐츠 크기
      // scrollWidth/scrollHeight가 table의 고정 pt 폭 같은 것도 잘 잡음
      const w = Math.max(el.scrollWidth, el.offsetWidth, fallback.w);
      const h = Math.max(el.scrollHeight, el.offsetHeight, fallback.h);

      setContentSize({ w, h });
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, [children, fallback.w, fallback.h]);

  // 2) host 폭 기준으로 scale 계산
  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const ro = new ResizeObserver(() => {
      const available = host.clientWidth;

      const baseW = contentSize.w || fallback.w;
      const next = Math.min(available / baseW, 1);

      // 너무 미세하게 흔들리는 것 방지(선택)
      setScale(Math.round(next * 1000) / 1000);
    });

    ro.observe(host);
    return () => ro.disconnect();
  }, [contentSize.w, fallback.w]);

  const baseW = contentSize.w || fallback.w;
  const baseH = contentSize.h || fallback.h;

  // ✅ “보이는 크기만큼” 레이아웃을 실제로 차지하게 만드는 값
  const layoutW = baseW * scale;
  const layoutH = fit === 'content' ? baseH * scale : undefined;

  return (
    <div ref={hostRef} className="w-full" style={{ maxWidth }}>
      {/* ✅ 스케일된 크기만큼 레이아웃을 잡아줌 (아래 여백/겹침 방지) */}
      <div
        style={{
          width: layoutW,
          height: layoutH,
          position: 'relative',
        }}
      >
        {/* ✅ 여기서만 스케일 적용 */}
        <div
          style={{
            width: baseW,
            height: fit === 'content' ? baseH : 'auto',
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
          className={disableScaleOnPrint ? 'print:transform-none' : undefined}
        >
          {/* ✅ 측정용 레이어(=원본 크기 측정). transform 금지 */}
          <div
            ref={measureRef}
            style={{
              display: 'inline-block',
              overflow: 'visible',
              transform: 'none',
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
