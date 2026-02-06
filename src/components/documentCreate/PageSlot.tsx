'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';

type Orientation = 'portrait' | 'landscape';

type Props = {
  children: React.ReactNode;
  orientation?: Orientation;
  disableScaleOnPrint?: boolean;
};

export default function PageSlot({
  children,
  orientation = 'portrait',
  disableScaleOnPrint = true,
}: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [contentSize, setContentSize] = useState<{ w: number; h: number } | null>(null);

  const base = useMemo(() => {
    const portraitA4 = { w: 794, h: 1123 };
    const landscapeA4 = { w: 1123, h: 794 };
    return orientation === 'landscape' ? landscapeA4 : portraitA4;
  }, [orientation]);

  useEffect(() => {
    const el = measureRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      const w = Math.max(el.offsetWidth, el.scrollWidth, base.w);
      const h = Math.max(el.offsetHeight, el.scrollHeight, base.h);
      setContentSize({ w, h });
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, [base.h, base.w, children]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const ro = new ResizeObserver(() => {
      const available = host.clientWidth;
      const baseW = contentSize?.w ?? base.w;
      const next = Math.min(available / baseW, 1);
      setScale(next);
    });

    ro.observe(host);
    return () => ro.disconnect();
  }, [base.w, contentSize?.w]);

  const baseW = contentSize?.w ?? base.w;
  const baseH = contentSize?.h ?? base.h;
  const layoutW = Math.floor(baseW * scale);
  const layoutH = Math.floor(baseH * scale);

  return (
    <div ref={hostRef} className="w-full">
      <div
        style={{
          width: '100%',
          height: layoutH,
          position: 'relative',
        }}
      >
        <div
          style={{
            width: baseW,
            height: baseH,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
          className={disableScaleOnPrint ? 'print:transform-none' : undefined}
        >
          <div
            ref={measureRef}
            style={{ display: 'inline-block', width: 'auto', height: 'auto' }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
