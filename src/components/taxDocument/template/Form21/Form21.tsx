'use client';

import React, { Fragment } from 'react';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import {
  Form21Data,
  Form21InputData,
} from '@/components/taxDocument/template/Form21/type';
import Form21_1 from '@/components/taxDocument/template/Form21/pages/Form21_1/Form21_1';
import Form21_2 from '@/components/taxDocument/template/Form21/pages/Form21_2/Form21_2';
import Form21_3 from '@/components/taxDocument/template/Form21/pages/Form21_3/Form21_3';
import { PageSlot } from '@/components/documentCreate/PageSlot';

type Form21Props = UpdaterProps<Form21Data> & { inputType?: Form21InputData };

function Form21({ updater, inputType, ...data }: Form21Props) {
  return (
    <Fragment>
      <PageSlot>
        <Form21_1 updater={updater} inputType={inputType} {...data} />
      </PageSlot>
      <PageSlot>
        <Form21_2 updater={updater} inputType={inputType} {...data} />
      </PageSlot>
      <PageSlot slotHeight={1000}>
        <Form21_3 updater={updater} inputType={inputType} {...data} />
      </PageSlot>
    </Fragment>
  );
}

export default Form21;
