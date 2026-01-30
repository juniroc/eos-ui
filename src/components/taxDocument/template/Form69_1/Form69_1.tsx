import React, { Fragment, useState } from 'react';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import { Form6901Data } from '@/components/taxDocument/template/Form69_1/type';
import { getFormCount } from '@/components/taxDocument/utils/pageUtil';
import {
  FORM_69_1_1_RECEIPT_PURCHASE_ITEM_MAX_LENGTH,
  FORM_69_1_2_RECEIPT_PURCHASE_ITEM_MAX_LENGTH,
} from '@/components/taxDocument/template/Form69_1/constants';
import Form69_1_1 from '@/components/taxDocument/template/Form69_1/pages/Form69_1_1/Form69_1_1';
import Form69_1_2 from '@/components/taxDocument/template/Form69_1/pages/Form69_1_2/Form69_1_2';

function Form691({ updater, ...data }: UpdaterProps<Form6901Data>) {
  const [pageCount, setPageCount] = useState(
    getFormCount(
      data.receiptPurchaseItems.length,
      FORM_69_1_1_RECEIPT_PURCHASE_ITEM_MAX_LENGTH,
      FORM_69_1_2_RECEIPT_PURCHASE_ITEM_MAX_LENGTH
    )
  );
  return (
    <Fragment>
      <Form69_1_1
        updater={updater}
        {...data}
        pageIndex={0}
        onAddPage={() => setPageCount(prev => prev + 1)}
      />
      {Array.from({ length: pageCount }).map((_, index) => (
        <Form69_1_2
          key={index}
          updater={updater}
          onAddPage={() => setPageCount(prev => prev + 1)}
          pageIndex={index}
          {...data}
        />
      ))}
    </Fragment>
  );
}

export default Form691;
