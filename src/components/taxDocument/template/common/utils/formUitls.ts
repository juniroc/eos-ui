import { FormCode } from '@/components/taxDocument/template/common/type';
import { VatFormData } from '@/services/api';

const landscapeForms: FormCode[] = ['2500', '2800', '3400', '4700'];

export const getOrientation = (formCode?: FormCode) => {
  if (!formCode) {
    return 'portrait';
  }

  if (landscapeForms.includes(formCode)) {
    return 'landscape';
  }
  return 'portrait';
};

export const removeEmptyFromArrays = <T>(value: T): T => {
  if (Array.isArray(value)) {
    return value.filter(Boolean).map(removeEmptyFromArrays) as T;
  }

  if (value && typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>).map(
      ([key, nestedValue]) => [key, removeEmptyFromArrays(nestedValue)]
    );
    return Object.fromEntries(entries) as T;
  }

  return value;
};

export const convertToApiData = (FormData: VatFormData) => {
  return {
    ...FormData,
    data: {
      ...FormData.data,
      data: removeEmptyFromArrays(FormData.data.data),
    },
  };
};
