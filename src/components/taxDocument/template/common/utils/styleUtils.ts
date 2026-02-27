import { InputType } from '@/components/taxDocument/template/common/type';

export const getInputTypeClass = (inputType?: InputType) => {
  switch (inputType) {
    case 'B':
      return 'bg-[#FBFEF0] print:bg-[transparent]';
    case 'C':
      return 'bg-[#F3EBEB] print:bg-[transparent]';
    case 'E':
      return 'bg-[#EAF4FE] print:bg-[transparent]';
    case 'F':
      return 'bg-[#ED8F11] print:bg-[transparent]';
    default:
      return 'bg-[transparent] print:bg-[transparent]';
  }
};
