import React, { ComponentPropsWithoutRef } from 'react';

type Props = Omit<ComponentPropsWithoutRef<'input'>, 'onChange'> & {
  value?: string;
  onChange: (value: string) => void;
};

function Input({ value, onChange, style, ...rest }: Props) {
  return (
    <input
      className="form-input form-input-text"
      style={style}
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      {...rest}
    />
  );
}

export default Input;
