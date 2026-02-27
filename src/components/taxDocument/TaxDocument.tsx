import {
  FormCode,
  FormDataMap,
  FormUpdater,
} from '@/components/taxDocument/template/common/type';
import Form22 from '@/components/taxDocument/template/Form22/Form22';
import {
  Form22Data,
  Form22InputData,
} from '@/components/taxDocument/template/Form22/type';
import Form21 from '@/components/taxDocument/template/Form21/Form21';
import Form20 from '@/components/taxDocument/template/Form20/Form20';
import Form19 from '@/components/taxDocument/template/Form19/Form19';
import Form16 from '@/components/taxDocument/template/Form16/Form16';
import Form15 from '@/components/taxDocument/template/Form15/Form15';
import {
  Form15Data,
  Form15InputData,
} from '@/components/taxDocument/template/Form15/types';
import {
  Form16Data,
  Form16InputData,
} from '@/components/taxDocument/template/Form16/type';
import {
  Form19Data,
  Form19InputData,
} from '@/components/taxDocument/template/Form19/type';
import {
  Form20Data,
  Form20InputData,
} from '@/components/taxDocument/template/Form20/type';
import {
  Form21Data,
  Form21InputData,
} from '@/components/taxDocument/template/Form21/type';
import Form23 from '@/components/taxDocument/template/Form23/Form23';
import Form24 from '@/components/taxDocument/template/Form24/Form24';
import Form25 from '@/components/taxDocument/template/Form25/Form25';
import Form26 from '@/components/taxDocument/template/Form26/Form26';
import Form27 from '@/components/taxDocument/template/Form27/Form27';
import Form28 from '@/components/taxDocument/template/Form28/Form28';
import Form29 from '@/components/taxDocument/template/Form29/Form29';
import Form30 from '@/components/taxDocument/template/Form30/Form30';
import Form32 from '@/components/taxDocument/template/Form32/Form32';
import Form33 from '@/components/taxDocument/template/Form33/Form33';
import Form34 from '@/components/taxDocument/template/Form34/Form34';
import Form38 from '@/components/taxDocument/template/Form38/Form38';
import Form39 from '@/components/taxDocument/template/Form39/Form39';
import Form40 from '@/components/taxDocument/template/Form40/Form40';
import Form41 from '@/components/taxDocument/template/Form41/Form41';
import Form42 from '@/components/taxDocument/template/Form42/Form42';
import Form47 from '@/components/taxDocument/template/Form47/Form47';
import Form69_1 from '@/components/taxDocument/template/Form69_1/Form69_1';
import Form69_2 from '@/components/taxDocument/template/Form69_2/Form69_2';
import {
  Form14Data,
  Form14InputData,
} from '@/components/taxDocument/template/Form14/type';
import Form14 from '@/components/taxDocument/template/Form14/Form14';
import {
  Form23Data,
  Form23InputData,
} from '@/components/taxDocument/template/Form23/type';
import {
  Form24Data,
  Form24InputData,
} from '@/components/taxDocument/template/Form24/type';
import {
  Form25Data,
  Form25InputData,
} from '@/components/taxDocument/template/Form25/type';
import {
  Form26Data,
  Form26InputData,
} from '@/components/taxDocument/template/Form26/type';
import {
  Form27Data,
  Form27InputData,
} from '@/components/taxDocument/template/Form27/type';
import {
  Form28Data,
  Form28InputData,
} from '@/components/taxDocument/template/Form28/type';
import {
  Form29Data,
  Form29InputData,
} from '@/components/taxDocument/template/Form29/type';
import {
  Form30Data,
  Form30InputData,
} from '@/components/taxDocument/template/Form30/type';
import {
  Form32Data,
  Form32InputData,
} from '@/components/taxDocument/template/Form32/type';
import {
  Form33Data,
  Form33InputData,
} from '@/components/taxDocument/template/Form33/type';
import {
  Form34Data,
  Form34InputData,
} from '@/components/taxDocument/template/Form34/type';
import {
  Form38Data,
  Form38InputData,
} from '@/components/taxDocument/template/Form38/type';
import {
  Form39Data,
  Form39InputData,
} from '@/components/taxDocument/template/Form39/type';
import {
  Form40Data,
  Form40InputData,
} from '@/components/taxDocument/template/Form40/type';
import {
  Form41Data,
  Form41InputData,
} from '@/components/taxDocument/template/Form41/type';
import {
  Form42Data,
  Form42InputData,
} from '@/components/taxDocument/template/Form42/type';
import {
  Form47Data,
  Form47InputData,
} from '@/components/taxDocument/template/Form47/type';
import {
  Form6901Data,
  Form6901InputData,
} from '@/components/taxDocument/template/Form69_1/type';
import {
  Form6902Data,
  Form6902InputData,
} from '@/components/taxDocument/template/Form69_2/type';

export type Props = {
  formCode: FormCode;
  data: FormDataMap[Props['formCode']];
  updater: FormUpdater<FormDataMap[Props['formCode']]>;
  inputType?: Record<string, unknown>;
};

function TaxDocument({ formCode, data, updater, inputType }: Props) {
  switch (formCode) {
    case '1404':
      return (
        <Form14
          updater={updater}
          {...(data as Form14Data)}
          inputType={inputType as Form14InputData}
        />
      );
    case '1500':
      return (
        <Form15
          updater={updater}
          {...(data as Form15Data)}
          inputType={inputType as Form15InputData}
        />
      );
    case '1600':
      return (
        <Form16
          updater={updater}
          {...(data as Form16Data)}
          inputType={inputType as Form16InputData}
        />
      );
    case '1900':
      return (
        <Form19
          updater={updater}
          {...(data as Form19Data)}
          inputType={inputType as Form19InputData}
        />
      );
    case '2000':
      return (
        <Form20
          updater={updater}
          {...(data as Form20Data)}
          inputType={inputType as Form20InputData}
        />
      );
    case '2100':
      return (
        <Form21
          updater={updater}
          {...(data as Form21Data)}
          inputType={inputType as Form21InputData}
        />
      );
    case '2200':
      return (
        <Form22
          updater={updater}
          {...(data as Form22Data)}
          inputType={inputType as Form22InputData}
        />
      );
    case '2300':
      return (
        <Form23
          updater={updater}
          {...(data as Form23Data)}
          inputType={inputType as Form23InputData}
        />
      );
    case '2400':
      return (
        <Form24
          updater={updater}
          {...(data as Form24Data)}
          inputType={inputType as Form24InputData}
        />
      );
    case '2500':
      return (
        <Form25
          updater={updater}
          {...(data as Form25Data)}
          inputType={inputType as Form25InputData}
        />
      );
    case '2600':
      return (
        <Form26
          updater={updater}
          {...(data as Form26Data)}
          inputType={inputType as Form26InputData}
        />
      );
    case '2700':
      return (
        <Form27
          updater={updater}
          {...(data as Form27Data)}
          inputType={inputType as Form27InputData}
        />
      );
    case '2800':
      return (
        <Form28
          updater={updater}
          {...(data as Form28Data)}
          inputType={inputType as Form28InputData}
        />
      );
    case '2900':
      return (
        <Form29
          updater={updater}
          {...(data as Form29Data)}
          inputType={inputType as Form29InputData}
        />
      );
    case '3000':
      return (
        <Form30
          updater={updater}
          {...(data as Form30Data)}
          inputType={inputType as Form30InputData}
        />
      );
    case '3200':
      return (
        <Form32
          updater={updater}
          {...(data as Form32Data)}
          inputType={inputType as Form32InputData}
        />
      );
    case '3300':
      return (
        <Form33
          updater={updater}
          {...(data as Form33Data)}
          inputType={inputType as Form33InputData}
        />
      );
    case '3400':
      return (
        <Form34
          updater={updater}
          {...(data as Form34Data)}
          inputType={inputType as Form34InputData}
        />
      );
    case '3800':
      return (
        <Form38
          updater={updater}
          {...(data as Form38Data)}
          inputType={inputType as Form38InputData}
        />
      );
    case '3900':
      return (
        <Form39
          updater={updater}
          {...(data as Form39Data)}
          inputType={inputType as Form39InputData}
        />
      );
    case '4000':
      return (
        <Form40
          updater={updater}
          {...(data as Form40Data)}
          inputType={inputType as Form40InputData}
        />
      );
    case '4100':
      return (
        <Form41
          updater={updater}
          {...(data as Form41Data)}
          inputType={inputType as Form41InputData}
        />
      );
    case '4200':
      return (
        <Form42
          updater={updater}
          {...(data as Form42Data)}
          inputType={inputType as Form42InputData}
        />
      );
    case '4700':
      return (
        <Form47
          updater={updater}
          {...(data as Form47Data)}
          inputType={inputType as Form47InputData}
        />
      );
    case '6900':
      return (
        <Form69_1
          updater={updater}
          {...(data as Form6901Data)}
          inputType={inputType as Form6901InputData}
        />
      );
    case '6902':
      return (
        <Form69_2
          updater={updater}
          {...(data as Form6902Data)}
          inputType={inputType as Form6902InputData}
        />
      );

    default:
      return null;
  }
}

export default TaxDocument;
