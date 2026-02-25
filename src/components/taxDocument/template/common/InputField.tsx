import React, { ComponentPropsWithoutRef, useEffect, useRef } from 'react';
import { InputType } from '@/components/taxDocument/template/common/type';
import { getInputTypeClass } from '@/components/taxDocument/template/common/utils/styleUtils';

type Props = ComponentPropsWithoutRef<'input'> & {
  inputType?: InputType;
};

function InputField({ inputType, ...rest }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

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

  const mergedStyle = rest.style
    ? { zIndex: 2, ...rest.style }
    : { zIndex: 2 };

  return <input ref={inputRef} {...rest} style={mergedStyle} />;
}

export default InputField;
