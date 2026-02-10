import React, { Fragment, useState } from 'react';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import { getFormCount } from '@/components/taxDocument/utils/pageUtil';
import {
  Form6902Data,
  Form6902InputData,
} from '@/components/taxDocument/template/Form69_2/type';
import {
  FORM_69_2_1_RECEIPT_PURCHASE_ITEM_MAX_LENGTH,
  FORM_69_2_2_RECEIPT_PURCHASE_ITEM_MAX_LENGTH,
} from '@/components/taxDocument/template/Form69_2/constants';
import Form69_2_1 from '@/components/taxDocument/template/Form69_2/pages/Form69_2_1/Form69_2_1';
import Form69_2_2 from '@/components/taxDocument/template/Form69_2/pages/Form69_2_2/Form69_2_2';
import { PageSlot } from '@/components/documentCreate/PageSlot';
type Form69_2Props = UpdaterProps<Form6902Data> & {
  inputType?: Form6902InputData;
};

function Form691({ updater, inputType, ...data }: Form69_2Props) {
  const [pageCount, setPageCount] = useState(
    getFormCount(
      data.receiptPurchaseItems.length,
      FORM_69_2_1_RECEIPT_PURCHASE_ITEM_MAX_LENGTH,
      FORM_69_2_2_RECEIPT_PURCHASE_ITEM_MAX_LENGTH
    )
  );
  return (
    <Fragment>
      <PageSlot slotWidth={624} slotHeight={882}>
        <Form69_2_1
          updater={updater}
          inputType={inputType}
          {...data}
          pageIndex={0}
          onAddPage={() => setPageCount(prev => prev + 1)}
        />
      </PageSlot>
      {Array.from({ length: pageCount }).map((_, index) => (
        <PageSlot key={index} slotWidth={624} slotHeight={882}>
          <Form69_2_2
            updater={updater}
            inputType={inputType}
            onAddPage={() => setPageCount(prev => prev + 1)}
            pageIndex={index}
            {...data}
          />
        </PageSlot>
      ))}
    </Fragment>
  );
}

export default Form691;
