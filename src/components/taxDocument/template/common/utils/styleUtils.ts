import { InputType } from '@/components/taxDocument/template/common/type';

export const getInputTypeClass = (inputType: InputType) => {
  switch (inputType) {
    case 'A':
      return 'background-color-[transparent]';
    case 'B':
      return 'background-color-[#FBFEF0] print:background-color-[transparent]';
    case 'C':
      return 'background-color-[#F3EBEB] print:background-color-[transparent]';
    case 'D':
      return 'background-color-[#FBFEF0] print:background-color-[transparent]';
    case 'E':
      return 'background-color-[#EAF4FE] print:background-color-[transparent]';
    case 'F':
      return 'background-color-[#ED8F11] print:background-color-[transparent]';
  }
};
