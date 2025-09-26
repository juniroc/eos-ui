'use client';

import Image from 'next/image';

interface BreadcrumbProps {
  mainMenu: string;
  subMenu: string;
}

export default function Breadcrumb({ mainMenu, subMenu }: BreadcrumbProps) {
  return (
    <div >
      <p className="flex items-center text-sm">
        <span
          style={{
            color: '#B3B3B3',
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '12px',
            lineHeight: '140%',
            letterSpacing: '0%',
          }}
        >
          {mainMenu}
        </span>
        <Image src="/icons/arrow_right.svg" alt="ArrowRight" width={16} height={16} />
        <span
          style={{
            color: '#1E1E1E',
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
            fontStyle: 'normal',
            fontSize: '12px',
            lineHeight: '140%',
            letterSpacing: '0%',
          }}
        >
          {subMenu}
        </span>
      </p>
    </div>
  );
}
