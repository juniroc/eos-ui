import { FormCode } from '@/components/taxDocument/template/common/type';

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
