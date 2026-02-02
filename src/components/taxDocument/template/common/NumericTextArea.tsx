import { ChangeEvent, CSSProperties, useMemo, useState } from 'react';
import { isNil } from 'lodash-es';

type Props = {
  value?: number;
  onChange?: (value: number) => void;
  maxLength?: number;
  style?: CSSProperties;
};

const NumericTextArea = ({ value, onChange, maxLength, style }: Props) => {
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

  return (
    <textarea
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
