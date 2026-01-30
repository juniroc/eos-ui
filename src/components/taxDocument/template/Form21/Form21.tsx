import React, { Fragment } from 'react';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import { Form21Data } from '@/components/taxDocument/template/Form21/type';
import Form21_1 from '@/components/taxDocument/template/Form21/pages/Form21_1/Form21_1';
import Form21_2 from '@/components/taxDocument/template/Form21/pages/Form21_2/Form21_2';

type Props = UpdaterProps<Form21Data>;

function Form21({ updater, ...data }: Props) {
  return (
    <Fragment>
      <Form21_1 updater={updater} {...data} />
      <Form21_2 updater={updater} {...data} />
    </Fragment>
  );
}

export default Form21;
