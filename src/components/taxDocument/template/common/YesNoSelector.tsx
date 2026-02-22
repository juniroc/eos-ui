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
  const optionStyle: CSSProperties = {
    cursor: 'pointer',
    userSelect: 'none',
  };
  return (
    <span>
      <span
        style={optionStyle}
        role="button"
        tabIndex={0}
        onClick={() => onChange(true)}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onChange(true);
          }
        }}
      >
        [ 
        <Input
          style={inputStyle}
          value={isTrue ? mark : ''}
          onChange={() => onChange(true)}
          onClick={() => onChange(true)}
          readOnly
          inputType={inputType}
        />
        ] {trueLabel}
      </span>
      ,{' '}
      <span
        style={optionStyle}
        role="button"
        tabIndex={0}
        onClick={() => onChange(false)}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onChange(false);
          }
        }}
      >
        [
        <Input
          style={inputStyle}
          value={isFalse ? mark : ''}
          onChange={() => onChange(false)}
          onClick={() => onChange(false)}
          readOnly
          inputType={inputType}
        />
        ] {falseLabel}
      </span>
    </span>
  );
};

export default YesNoSelector;
