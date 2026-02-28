'use client';

import {
  ChangeEvent,
  CSSProperties,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { isNil } from 'lodash-es';
import { InputType } from '@/components/taxDocument/template/common/type';
import { getInputTypeClass } from '@/components/taxDocument/template/common/utils/styleUtils';

type Props = {
  value?: number;
  onChange?: (value: number) => void;
  maxLength?: number;
  style?: CSSProperties;
  inputType?: InputType;
  disabled?: boolean;
  readOnly?: boolean;
};

const NumericInput = ({
  value,
  onChange,
  maxLength,
  style,
  inputType,
  disabled,
  readOnly: readOnlyProp,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [rawValue, setRawValue] = useState<string | null>(null);
  const [forcedReadOnly, setForcedReadOnly] = useState(false);

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
  const resolvedReadOnly = readOnlyProp || forcedReadOnly;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled || resolvedReadOnly) return;
    const digits = digitsOnly(e.target.value);
    const formatted = formatDigits(digits);

    setRawValue(formatted); // ✅ 숫자 외 입력은 즉시 제거됨
    onChange && onChange(parseDigitsToNumber(digits)); // ✅ 외부는 number로 유지
  };

  const handleBlur = () => {
    if (disabled || resolvedReadOnly) return;
    setRawValue(null); // blur 시 외부 value 기준으로 다시 동기화
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
      type="text"
      className="form-input form-input-numeric"
      style={{ backgroundColor: 'transparent', ...style }}
      value={displayValue}
      maxLength={maxLength}
      onChange={handleChange}
      onBlur={handleBlur}
      inputMode="numeric"
      disabled={disabled}
      readOnly={resolvedReadOnly}
    />
  );
};

export default NumericInput;
