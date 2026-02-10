import { ChangeEvent, CSSProperties, useEffect, useMemo, useRef, useState } from 'react';
import { isNil } from 'lodash-es';
import { InputType } from '@/components/taxDocument/template/common/type';
import { getInputTypeClass } from '@/components/taxDocument/template/common/utils/styleUtils';

type Props = {
  value?: number;
  onChange?: (value: number) => void;
  maxLength?: number;
  style?: CSSProperties;
  inputType?: InputType;
};

const NumericTextArea = ({
  value,
  onChange,
  maxLength,
  style,
  inputType,
}: Props) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [rawValue, setRawValue] = useState<string | null>(null);

  const digitsOnly = (str: string) => str.replace(/[^0-9]/g, '');

  const formatDigits = (digits: string) => {
    if (!digits) return '';
    return Number(digits).toLocaleString('ko-KR');
  };

  const parseDigitsToNumber = (digits: string): number => {
    if (!digits) return 0;
    return Number(digits);
  };

  const displayValue = useMemo(() => {
    if (rawValue !== null) return rawValue;
    if (isNil(value)) return '';
    return value?.toLocaleString('ko-KR');
  }, [rawValue, value]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const digits = digitsOnly(e.target.value);
    const formatted = formatDigits(digits);

    setRawValue(formatted);
    onChange && onChange(parseDigitsToNumber(digits));
  };

  const handleBlur = () => {
    setRawValue(null);
  };

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
    <textarea
      ref={inputRef}
      className="form-input form-input-numeric"
      style={style}
      value={displayValue}
      maxLength={maxLength}
      onChange={handleChange}
      onBlur={handleBlur}
      inputMode="numeric"
    />
  );
};

export default NumericTextArea;
