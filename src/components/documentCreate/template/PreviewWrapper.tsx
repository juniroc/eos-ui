'use client';

import React, { useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
  /** 프리뷰 영역 최대 폭(px) */
  maxWidth?: number;
  /** 폼 원본 폭(px) - 기본: 624pt를 px로 환산한 값 */
  baseWidthPx?: number;
};

export default function PreviewWrapper({
  children,
  maxWidth = 1000,
  baseWidthPx = 832, // 624pt * (96/72) ≈ 832px
}: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      const available = el.clientWidth;
      setScale(Math.min(available / baseWidthPx, 1));
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, [baseWidthPx]);

  return (
    <div className="w-full" style={{ maxWidth }} ref={hostRef}>
      <div>
        <div
          style={{
            width: baseWidthPx,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
        >
          {children}
        </div>

        {/* 스케일로 줄어든 만큼 아래 공간 보정 */}
        <div style={{ height: Math.max(0, 600 * (1 - scale)) }} />
      </div>
    </div>
  );
}
