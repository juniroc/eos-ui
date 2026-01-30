'use client';

import React, { Fragment, useState } from 'react';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import { Form19Data } from '@/components/taxDocument/template/Form19/type';
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

type Props = UpdaterProps<Form19Data> & { data: Form19Data };

const Form19 = ({ data, updater }: Props) => {
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
      <Form19_1
        updater={updater}
        onAddBadDebtPage={onAddBadDebtPage}
        onAddRepaymentPage={onAddRepaymentPage}
        {...data}
      />
      {Array.from({ length: badDebtPageCount }).map((_, index) => (
        <Form19_2
          key={`badDebt-${index}`}
          index={index}
          updater={updater}
          onAddPage={onAddBadDebtPage}
          {...data}
        />
      ))}
      {Array.from({ length: repaymentPageCount }).map((_, index) => (
        <Form19_3
          key={`repayment-${index}`}
          index={index}
          updater={updater}
          onAddPage={onAddRepaymentPage}
          {...data}
        />
      ))}
    </Fragment>
  );
};

export default Form19;
