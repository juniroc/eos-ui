import React, { Fragment, useState } from 'react';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import { getFormCount } from '@/components/taxDocument/utils/pageUtil';
import { Form6902Data } from '@/components/taxDocument/template/Form69_2/type';
import {
  FORM_69_2_1_RECEIPT_PURCHASE_ITEM_MAX_LENGTH,
  FORM_69_2_2_RECEIPT_PURCHASE_ITEM_MAX_LENGTH,
} from '@/components/taxDocument/template/Form69_2/constants';
import Form69_2_1 from '@/components/taxDocument/template/Form69_2/pages/Form69_2_1/Form69_2_1';
import Form69_2_2 from '@/components/taxDocument/template/Form69_2/pages/Form69_2_2/Form69_2_2';

function Form691({ updater, ...data }: UpdaterProps<Form6902Data>) {
  const [pageCount, setPageCount] = useState(
    getFormCount(
      data.receiptPurchaseItems.length,
      FORM_69_2_1_RECEIPT_PURCHASE_ITEM_MAX_LENGTH,
      FORM_69_2_2_RECEIPT_PURCHASE_ITEM_MAX_LENGTH
    )
  );
  return (
    <Fragment>
      <Form69_2_1
        updater={updater}
        {...data}
        pageIndex={0}
        onAddPage={() => setPageCount(prev => prev + 1)}
      />
      {Array.from({ length: pageCount }).map((_, index) => (
        <Form69_2_2
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
