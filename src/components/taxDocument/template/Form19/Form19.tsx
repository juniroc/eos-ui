'use client';
import React, { Fragment, useState } from 'react';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import { Form19Data, Form19InputData } from '@/components/taxDocument/template/Form19/type';
import Form19_1 from '@/components/taxDocument/template/Form19/pages/Form19_1/Form19_1';
import Form19_2 from '@/components/taxDocument/template/Form19/pages/Form19_2/Form19_2';
import Form19_3 from '@/components/taxDocument/template/Form19/pages/Form19_3/Form19_3';
import { getFormCount } from '@/components/taxDocument/utils/pageUtil';
import {
  FORM19_1_BAD_DEBT_ITEM_LENGTH,
  FORM19_1_REPAYMENT_ITEM_LENGTH,
  FORM19_2_BAD_DEBT_ITEM_LENGTH,
  FORM19_3_REPAYMENT_ITEM_LENGTH,
} from '@/components/taxDocument/template/Form19/constants';
import { PageSlot } from '@/components/documentCreate/PageSlot';

type Form19Props = UpdaterProps<Form19Data> & { inputType?: Form19InputData };

type Props = Form19Props;

const Form19 = ({ updater, inputType, ...data }: Props) => {
  const [badDebtPageCount, setBadDebtPageCount] = useState(
    getFormCount(
      data.badDebtDeductionItems.length,
      FORM19_1_BAD_DEBT_ITEM_LENGTH,
      FORM19_2_BAD_DEBT_ITEM_LENGTH
    )
  );
  const [repaymentPageCount, setRepaymentPageCount] = useState(
    getFormCount(
      data.repaymentTaxItems.length,
      FORM19_1_REPAYMENT_ITEM_LENGTH,
      FORM19_3_REPAYMENT_ITEM_LENGTH
    )
  );

  const onAddBadDebtPage = () => setBadDebtPageCount(prev => prev + 1);
  const onAddRepaymentPage = () => setRepaymentPageCount(prev => prev + 1);

  return (
    <Fragment>
      <PageSlot slotWidth={624} slotHeight={882}>
        <Form19_1
          updater={updater}
          inputType={inputType}
          onAddBadDebtPage={onAddBadDebtPage}
          onAddRepaymentPage={onAddRepaymentPage}
          {...data}
        />
      </PageSlot>
      {Array.from({ length: badDebtPageCount }).map((_, index) => (
        <PageSlot key={`badDebt-${index}`} slotWidth={624} slotHeight={882}>
          <Form19_2
            index={index}
            updater={updater}
            inputType={inputType}
            onAddPage={onAddBadDebtPage}
            {...data}
          />
        </PageSlot>
      ))}
      {Array.from({ length: repaymentPageCount }).map((_, index) => (
        <PageSlot key={`repayment-${index}`} slotWidth={624} slotHeight={882}>
          <Form19_3
            index={index}
            updater={updater}
            inputType={inputType}
            onAddPage={onAddRepaymentPage}
            {...data}
          />
        </PageSlot>
      ))}
    </Fragment>
  );
};

export default Form19;
