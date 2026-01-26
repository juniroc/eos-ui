import React, { CSSProperties } from 'react';

type Props = {
  value: string;
  onChange: (value: string) => void;
  style: CSSProperties;
};

function Input({ value, onChange, style }: Props) {
  return (
    <input
      className="form-input form-input-text"
      style={style}
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}

export default Input;
