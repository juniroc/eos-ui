'use client';
import React, { Fragment, useState } from 'react';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import { Form16Data } from '@/components/taxDocument/template/Form16/type';
import Form16_1 from '@/components/taxDocument/template/Form16/pages/Form16_1/Form16_1';
import {
  FORM16_1_MAX_OTHER_CREDIT_CARD_ITEM_LENGTH,
  FORM16_2_MAX_OTHER_CREDIT_CARD_ITEM_LENGTH,
} from '@/components/taxDocument/template/Form16/constants';
import Form16_2 from '@/components/taxDocument/template/Form16/pages/Form16_2/Form16_2';
import { getFormCount } from '@/components/taxDocument/utils/pageUtil';

type Props = UpdaterProps<Form16Data> & {
  data: Form16Data;
};

function Form16({ data, updater }: Props) {
  const [page2Count, setPage2Count] = useState(
    getFormCount(
      data.otherCreditCardItems.length,
      FORM16_1_MAX_OTHER_CREDIT_CARD_ITEM_LENGTH,
      FORM16_2_MAX_OTHER_CREDIT_CARD_ITEM_LENGTH
    )
  );
  const onAddPage = () => {
    setPage2Count(prev => prev + 1);
  };

  return (
    <Fragment>
      <Form16_1 updater={updater} onAddPage={onAddPage} {...data} />
      {Array.from({ length: page2Count }).map((_, index) => (
        <Form16_2
          key={index}
          index={index}
          updater={updater}
          onAddPage={onAddPage}
          {...data}
        />
      ))}
    </Fragment>
  );
}

export default Form16;
