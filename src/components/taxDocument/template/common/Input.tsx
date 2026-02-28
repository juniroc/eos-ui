import React, { ComponentPropsWithoutRef, useEffect, useRef, useState } from 'react';
import { InputType } from '@/components/taxDocument/template/common/type';
import { getInputTypeClass } from '@/components/taxDocument/template/common/utils/styleUtils';

type Props = Omit<ComponentPropsWithoutRef<'input'>, 'onChange'> & {
  value?: string;
  onChange: (value: string) => void;
  inputType?: InputType;
};

function Input({
  value,
  onChange,
  style,
  inputType,
  className,
  readOnly: readOnlyProp,
  ...rest
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [forcedReadOnly, setForcedReadOnly] = useState(false);
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

  useEffect(() => {
    if (!inputRef.current) return;
    const td = inputRef.current.closest('td');
    if (td?.classList.contains('readonly-cell')) {
      setForcedReadOnly(true);
    }
  }, []);

  return (
    <input
      ref={inputRef}
      className={mergedClassName}
      style={{ zIndex: 2, ...style }}
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      readOnly={readOnlyProp || forcedReadOnly}
      {...rest}
    />
  );
}

export default Input;
