import React, { CSSProperties } from 'react';
import Input from '@/components/taxDocument/template/common/Input';

type Props = {
  value?: boolean;
  onChange: (value: boolean) => void;
  inputStyle?: CSSProperties;
  mark?: string;
  trueLabel?: string;
  falseLabel?: string;
};

const YesNoSelector = ({
  value,
  onChange,
  inputStyle,
  mark = 'V',
  trueLabel = '여',
  falseLabel = '부',
}: Props) => {
  const isTrue = value === true;
  const isFalse = value === false;
  return (
    <span>
      [ 
      <Input
        style={inputStyle}
        value={isTrue ? mark : ''}
        onChange={() => onChange(true)}
      />
      ] {trueLabel}, [
      <Input
        style={inputStyle}
        value={isFalse ? mark : ''}
        onChange={() => onChange(false)}
      />
      ] {falseLabel}
    </span>
  );
};

export default YesNoSelector;
