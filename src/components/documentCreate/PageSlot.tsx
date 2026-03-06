'use client';

import React, {
  Fragment,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

type Fit = 'contain' | 'cover' | 'width' | 'height';
type Crop = Partial<{
  top: number;
  right: number;
  bottom: number;
  left: number;
}>;

type PageSlotProps = {
  children: React.ReactNode;

  // 기본값: A4 비율(624×882)
  slotWidth?: number;
  slotHeight?: number;

  fit?: Fit;
  crop?: Crop;
  zoom?: number;
  className?: string;
};

export function PageSlot({
  children,
  slotWidth = 624,
  slotHeight = 882,
  fit = 'width',
  crop,
  zoom = 1,
  className,
}: PageSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [containerScale, setContainerScale] = useState(1);
  const [childSize, setChildSize] = useState<{ w: number; h: number } | null>(
    null
  );

  const c = {
    top: crop?.top ?? 0,
    right: crop?.right ?? 0,
    bottom: crop?.bottom ?? 0,
    left: crop?.left ?? 0,
  };

  useLayoutEffect(() => {
    const el = measureRef.current;
    if (!el) return;

    const measure = () => {
      // ✅ transform 영향을 받지 않는 “레이아웃 크기”
      const w = Math.max(1, el.offsetWidth);
      const h = Math.max(1, el.offsetHeight);
      setChildSize(prev => (prev?.w === w && prev?.h === h ? prev : { w, h }));
    };

    measure();

    const ro = new ResizeObserver(() => measure());
    ro.observe(el);

    return () => ro.disconnect();
  }, []);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measure = () => {
      const available = Math.max(1, el.clientWidth);
      const next = Math.min(1, available / slotWidth);
      setContainerScale(prev =>
        Math.abs(prev - next) < 0.001 ? prev : next
      );
    };

    measure();

    const ro = new ResizeObserver(() => measure());
    ro.observe(el);

    return () => ro.disconnect();
  }, [slotWidth]);

  const scale = useMemo(() => {
    if (!childSize) return 1;

    const visibleW = Math.max(1, childSize.w - c.left - c.right);
    const visibleH = Math.max(1, childSize.h - c.top - c.bottom);

    const sx = slotWidth / visibleW;
    const sy = slotHeight / visibleH;

    switch (fit) {
      case 'cover':
        return Math.max(sx, sy) * zoom;
      case 'width':
        return sx * zoom;
      case 'height':
        return sy * zoom;
      case 'contain':
      default:
        return Math.min(sx, sy) * zoom;
    }
  }, [
    childSize,
    slotWidth,
    slotHeight,
    fit,
    zoom,
    c.left,
    c.right,
    c.top,
    c.bottom,
  ]);

  return (
    <Fragment>
      <div ref={containerRef} data-pageslot-wrapper style={{ width: '100%' }}>
        <div
          style={{
            width: `${slotWidth * containerScale}px`,
            height: `${slotHeight * containerScale}px`,
            margin: '0 auto',
          }}
        >
          <div
            data-pageslot
            className={['print:hidden', className].filter(Boolean).join(' ')}
            style={{
              width: `${slotWidth}px`,
              height: `${slotHeight}px`,
              position: 'relative',
              overflow: 'hidden',
              background: 'white',
              boxSizing: 'border-box',
              tableLayout: 'fixed',
              breakAfter: 'page',
              breakInside: 'avoid',
              pageBreakAfter: 'always',
              pageBreakInside: 'avoid',
              transform: `scale(${containerScale})`,
              transformOrigin: 'top left',
            }}
          >
            <div
              data-pagecanvas
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                transformOrigin: 'top left',
                transform: `translate(${-c.left}px, ${-c.top}px) scale(${scale})`,
                width: `${slotWidth / scale}px`,
              }}
            >
              <div
                ref={measureRef}
                style={{
                  display: 'block', // ✅ margin auto 먹게
                  width: 'fit-content', // 내용 크기만큼
                  margin: '0 auto',
                }}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={'hidden print:block print:break-inside-avoid print-preview-page'}
        data-pageslot-orientation={
          slotWidth > slotHeight ? 'landscape' : 'portrait'
        }
      >
        <div
          style={{
            width: '100%',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {children}
        </div>
      </div>
    </Fragment>
  );
}
