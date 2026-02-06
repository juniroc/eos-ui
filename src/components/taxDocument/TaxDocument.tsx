import {
  FormCode,
  FormDataMap,
  FormUpdater,
} from '@/components/taxDocument/template/common/type';
import Form22 from '@/components/taxDocument/template/Form22/Form22';
import { Form22Data } from '@/components/taxDocument/template/Form22/type';
import Form21 from '@/components/taxDocument/template/Form21/Form21';
import Form20 from '@/components/taxDocument/template/Form20/Form20';
import Form19 from '@/components/taxDocument/template/Form19/Form19';
import Form16 from '@/components/taxDocument/template/Form16/Form16';
import Form15 from '@/components/taxDocument/template/Form15/Form15';
import { Form15Data } from '@/components/taxDocument/template/Form15/types';
import { Form16Data } from '@/components/taxDocument/template/Form16/type';
import { Form19Data } from '@/components/taxDocument/template/Form19/type';
import { Form20Data } from '@/components/taxDocument/template/Form20/type';
import { Form21Data } from '@/components/taxDocument/template/Form21/type';
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
import { Form14Data } from '@/components/taxDocument/template/Form14/type';
import Form14 from '@/components/taxDocument/template/Form14/Form14';
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

export type Props = {
  formCode: FormCode;
  data: FormDataMap[Props['formCode']];
  updater: FormUpdater<FormDataMap[Props['formCode']]>;
};

function TaxDocument({ formCode, data, updater }: Props) {
  switch (formCode) {
    case '1404':
      return <Form14 updater={updater} {...(data as Form14Data)} />;
    case '1500':
      return <Form15 updater={updater} {...(data as Form15Data)} />;
    case '1600':
      return <Form16 updater={updater} {...(data as Form16Data)} />;
    case '1900':
      return <Form19 updater={updater} {...(data as Form19Data)} />;
    case '2000':
      return <Form20 updater={updater} {...(data as Form20Data)} />;
    case '2100':
      return <Form21 updater={updater} {...(data as Form21Data)} />;
    case '2200':
      return <Form22 updater={updater} {...(data as Form22Data)} />;
    case '2300':
      return <Form23 updater={updater} {...(data as Form23Data)} />;
    case '2400':
      return <Form24 updater={updater} {...(data as Form24Data)} />;
    case '2500':
      return <Form25 updater={updater} {...(data as Form25Data)} />;
    case '2600':
      return <Form26 updater={updater} {...(data as Form26Data)} />;
    case '2700':
      return <Form27 updater={updater} {...(data as Form27Data)} />;
    case '2800':
      return <Form28 updater={updater} {...(data as Form28Data)} />;
    case '2900':
      return <Form29 updater={updater} {...(data as Form29Data)} />;
    case '3000':
      return <Form30 updater={updater} {...(data as Form30Data)} />;
    case '3200':
      return <Form32 updater={updater} {...(data as Form32Data)} />;
    case '3300':
      return <Form33 updater={updater} {...(data as Form33Data)} />;
    case '3400':
      return <Form34 updater={updater} {...(data as Form34Data)} />;
    case '3800':
      return <Form38 updater={updater} {...(data as Form38Data)} />;
    case '3900':
      return <Form39 updater={updater} {...(data as Form39Data)} />;
    case '4000':
      return <Form40 updater={updater} {...(data as Form40Data)} />;
    case '4100':
      return <Form41 updater={updater} {...(data as Form41Data)} />;
    case '4200':
      return <Form42 updater={updater} {...(data as Form42Data)} />;
    case '4700':
      return <Form47 updater={updater} {...(data as Form47Data)} />;
    case '6900':
      return <Form69_1 updater={updater} {...(data as Form6901Data)} />;
    case '6902':
      return <Form69_2 updater={updater} {...(data as Form6902Data)} />;

    default:
      return null;
  }
}

export default TaxDocument;
