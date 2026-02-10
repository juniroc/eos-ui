'use client';

import React, { Fragment, useState } from 'react';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import {
  Form16Data,
  Form16InputData,
} from '@/components/taxDocument/template/Form16/type';
import Form16_1 from '@/components/taxDocument/template/Form16/pages/Form16_1/Form16_1';
import {
  FORM16_1_MAX_OTHER_CREDIT_CARD_ITEM_LENGTH,
  FORM16_2_MAX_OTHER_CREDIT_CARD_ITEM_LENGTH,
} from '@/components/taxDocument/template/Form16/constants';
import Form16_2 from '@/components/taxDocument/template/Form16/pages/Form16_2/Form16_2';
import { getFormCount } from '@/components/taxDocument/utils/pageUtil';
import { PageSlot } from '@/components/documentCreate/PageSlot';

type Form16Props = UpdaterProps<Form16Data> & { inputType?: Form16InputData };

type Props = Form16Props;

function Form16({ updater, inputType, ...data }: Props) {
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
      <PageSlot slotWidth={624} slotHeight={882}>
        <Form16_1
          updater={updater}
          inputType={inputType}
          onAddPage={onAddPage}
          {...data}
        />
      </PageSlot>
      {Array.from({ length: page2Count }).map((_, index) => (
        <PageSlot slotWidth={624} slotHeight={882}>
          <Form16_2
            key={index}
            pageIndex={index}
            updater={updater}
            inputType={inputType}
            onAddPage={onAddPage}
            {...data}
          />
        </PageSlot>
      ))}
    </Fragment>
  );
}

export default Form16;
