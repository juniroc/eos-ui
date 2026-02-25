'use client';

import Image from 'next/image';

interface BreadcrumbProps {
  mainMenu: string;
  subMenu?: string;
  thirdMenu?: string;
}

export default function Breadcrumb({ mainMenu, subMenu, thirdMenu }: BreadcrumbProps) {
  return (
    <div >
      <p className="flex items-center text-sm">
        <span
          style={{
            color: subMenu ? '#B3B3B3' : '#1E1E1E',
            fontFamily: 'var(--font-sans)',
            fontWeight: subMenu ? 400 : 600,
            fontStyle: 'normal',
            fontSize: '12px',
            lineHeight: '140%',
            letterSpacing: '0%',
          }}
        >
          {mainMenu}
        </span>
        {subMenu && (
          <>
            <Image src="/icons/arrow_right.svg" alt="ArrowRight" width={16} height={16}/>
            <span
              style={{
                color: thirdMenu ? '#B3B3B3' : '#1E1E1E',
                fontFamily: 'var(--font-sans)',
                fontWeight: thirdMenu ? 400 : 600,
                fontStyle: 'normal',
                fontSize: '12px',
                lineHeight: '140%',
                letterSpacing: '0%',
              }}
            >
              {subMenu}
            </span>
            {thirdMenu && (
              <>
                <Image src="/icons/arrow_right.svg" alt="ArrowRight" width={16} height={16}/>
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
                  {thirdMenu}
                </span>
              </>
            )}
          </>
        )}
      </p>
    </div>
  );
}
