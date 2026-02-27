import React, { ComponentPropsWithoutRef, useEffect, useRef } from 'react';
import { InputType } from '@/components/taxDocument/template/common/type';
import { getInputTypeClass } from '@/components/taxDocument/template/common/utils/styleUtils';

type Props = Omit<ComponentPropsWithoutRef<'input'>, 'onChange'> & {
  value?: string;
  onChange: (value: string) => void;
  inputType?: InputType;
};

function Input({ value, onChange, style, inputType, className, ...rest }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const mergedClassName = ['form-input form-input-text', className]
    .filter(Boolean)
    .join(' ');

  useEffect(() => {
    if (!inputType || !inputRef.current) return;
    const className = getInputTypeClass(inputType);
    if (!className) return;
    const target = inputRef.current.closest('td') ?? inputRef.current;
    const classes = className.split(' ').filter(Boolean);
    target.classList.add(...classes);
    return () => {
      target.classList.remove(...classes);
    };
  }, [inputType]);

  return (
    <input
      ref={inputRef}
      className={mergedClassName}
      style={{ zIndex: 2, ...style }}
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      {...rest}
    />
  );
}

export default Input;
