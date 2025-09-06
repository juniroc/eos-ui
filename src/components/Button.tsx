import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'neutral';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function Button({
  children,
  onClick,
  disabled = false,
  variant = 'neutral',
  size = 'small',
  loading = false,
  className = '',
  style = {},
}: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    width: 'auto',
    minWidth: size === 'small' ? '79px' : 'auto',
    height: size === 'small' ? '28px' : size === 'medium' ? '36px' : '44px',
    gap: '8px',
    opacity: 1,
    paddingTop: 'var(--Space-200, 8px)',
    paddingRight: 'var(--Space-300, 12px)',
    paddingBottom: 'var(--Space-200, 8px)',
    paddingLeft: 'var(--Space-300, 12px)',
    background: disabled || loading 
      ? '#E6E6E6' 
      : variant === 'primary' 
        ? 'var(--Background-Primary, #2563EB)' 
        : 'var(--Background-Neutral-Tertiary, #F3F3F3)',
    color: disabled || loading 
      ? '#9CA3AF' 
      : variant === 'primary' 
        ? '#FFFFFF' 
        : '#1E1E1E',
    fontSize: size === 'small' ? '12px' : size === 'medium' ? '14px' : '16px',
    lineHeight: size === 'small' ? '12px' : size === 'medium' ? '14px' : '16px',
    border: 'none',
    borderRadius: '0',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease',
    ...style,
  };

  return (
    <button
      className={className}
      style={baseStyle}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? '처리 중...' : children}
    </button>
  );
}
