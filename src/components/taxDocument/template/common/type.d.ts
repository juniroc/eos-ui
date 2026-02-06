import { Form14Data } from '@/components/taxDocument/template/Form14/type';
import { Form15Data } from '@/components/taxDocument/template/Form15/types';
import { Form16Data } from '@/components/taxDocument/template/Form16/type';
import { Form19Data } from '@/components/taxDocument/template/Form19/type';
import { Form20Data } from '@/components/taxDocument/template/Form20/type';
import { Form21Data } from '@/components/taxDocument/template/Form21/type';
import { Form22Data } from '@/components/taxDocument/template/Form22/type';
import { Form23Data } from '@/components/taxDocument/template/Form23/type';
import { Form24Data } from '@/components/taxDocument/template/Form24/type';
import { Form25Data } from '@/components/taxDocument/template/Form25/type';
import { Form26Data } from '@/components/taxDocument/template/Form26/type';
import { Form27Data } from '@/components/taxDocument/template/Form27/type';
import { Form28Data } from '@/components/taxDocument/template/Form28/type';
import { Form29Data } from '@/components/taxDocument/template/Form29/type';
import { Form30Data } from '@/components/taxDocument/template/Form30/type';
import { Form32Data } from '@/components/taxDocument/template/Form32/type';
import { Form33Data } from '@/components/taxDocument/template/Form33/type';
import { Form34Data } from '@/components/taxDocument/template/Form34/type';
import { Form38Data } from '@/components/taxDocument/template/Form38/type';
import { Form39Data } from '@/components/taxDocument/template/Form39/type';
import { Form40Data } from '@/components/taxDocument/template/Form40/type';
import { Form41Data } from '@/components/taxDocument/template/Form41/type';
import { Form42Data } from '@/components/taxDocument/template/Form42/type';
import { Form47Data } from '@/components/taxDocument/template/Form47/type';
import { Form6901Data } from '@/components/taxDocument/template/Form69_1/type';
import { Form6902Data } from '@/components/taxDocument/template/Form69_2/type';

export type FormUpdater<K> = <T extends keyof K>(field: T, value: K[T]) => void;

export type UpdaterProps<K> = K & {
  updater: FormUpdater<K>;
};

export type FormPageProps<K> = UpdaterProps<K> & {
  pageIndex: number;
  onAddPage: () => void;
};

export type SplitCurrency = {
  trillion: number; // 조

  billion: number; // 십억

  million: number; // 백만

  thousand: number; // 천

  one: number; // 일
};

export type FormDataMap = {
  '1404': Form14Data;
  '1500': Form15Data;
  '1600': Form16Data;
  '1900': Form19Data;
  '2000': Form20Data;
  '2100': Form21Data;
  '2200': Form22Data;
  '2300': Form23Data;
  '2400': Form24Data;
  '2500': Form25Data;
  '2600': Form26Data;
  '2700': Form27Data;
  '2800': Form28Data;
  '2900': Form29Data;
  '3000': Form30Data;
  '3200': Form32Data;
  '3300': Form33Data;
  '3400': Form34Data;
  '3800': Form38Data;
  '3900': Form39Data;
  '4000': Form40Data;
  '4100': Form41Data;
  '4200': Form42Data;
  '4700': Form47Data;
  '6900': Form6901Data;
  '6902': Form6902Data;
};

export type FormCode = keyof FormDataMap;

export type FormType = {
  [K in FormCode]: { formCode: K; data: FormDataMap[K] };
}[FormCode];

export type InputType = 'A' | 'B' | 'C' | 'D' | 'E';

export type FormInputData<T> = T extends (infer U)[]
  ? FormInputData<U>[]
  : T extends object
    ? { [K in keyof T]: FormInputData<T[K]> }
    : InputType;
