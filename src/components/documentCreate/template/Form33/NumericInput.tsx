'use client';

import { ChangeEvent, CSSProperties, useState } from 'react';

type Props = {
  style: CSSProperties;
};

const NumericInput = ({ style }: Props) => {
  const [value, setValue] = useState('');

  const onlyDigits = (str: string) => str.replace(/[^0-9]/g, '');

  const formatNumber = (numStr: string) => {
    if (!numStr) {
      return '';
    }
    return Number.parseInt(numStr, 10).toLocaleString('ko-KR');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(formatNumber(onlyDigits(e.target.value)));
  };

  const handleBlur = () => {
    setValue(formatNumber(onlyDigits(value)));
  };

  return (
    <input
      className="form-input form-input-numeric"
      style={style}
      type="text"
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export default NumericInput;
