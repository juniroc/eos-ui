'use client';

interface BreadcrumbProps {
  mainMenu: string;
  subMenu: string;
}

export default function Breadcrumb({ mainMenu, subMenu }: BreadcrumbProps) {
  return (
    <div className="mb-4">
      <p className="text-sm">
        <span style={{ 
          color: '#B3B3B3',
          fontFamily: 'var(--font-sans)',
          fontWeight: 400,
          fontStyle: 'normal',
          fontSize: '12px',
          lineHeight: '140%',
          letterSpacing: '0%'
        }}>{mainMenu}</span>
        <span style={{ 
          color: '#B3B3B3',
          fontFamily: 'var(--font-sans)',
          fontWeight: 400,
          fontStyle: 'normal',
          fontSize: '12px',
          lineHeight: '140%',
          letterSpacing: '0%'
        }}> &gt; </span>
        <span style={{ 
          color: '#1E1E1E',
          fontFamily: 'var(--font-sans)',
          fontWeight: 600,
          fontStyle: 'normal',
          fontSize: '12px',
          lineHeight: '140%',
          letterSpacing: '0%'
        }}>{subMenu}</span>
      </p>
    </div>
  );
}
