import React, { CSSProperties } from 'react';
import Input from '@/components/taxDocument/template/common/Input';
import { InputType } from '@/components/taxDocument/template/common/type';

type Props = {
  value?: boolean;
  onChange: (value: boolean) => void;
  inputStyle?: CSSProperties;
  mark?: string;
  trueLabel?: string;
  falseLabel?: string;
  inputType?: InputType;
};

const YesNoSelector = ({
  value,
  onChange,
  inputStyle,
  mark = 'V',
  trueLabel = '여',
  falseLabel = '부',
  inputType,
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
        inputType={inputType}
      />
      ] {trueLabel}, [
      <Input
        style={inputStyle}
        value={isFalse ? mark : ''}
        onChange={() => onChange(false)}
        inputType={inputType}
      />
      ] {falseLabel}
    </span>
  );
};

export default YesNoSelector;
