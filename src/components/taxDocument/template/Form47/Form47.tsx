import React, { Fragment, useState } from 'react';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import {
  Form47Data,
  Form47InputData,
} from '@/components/taxDocument/template/Form47/type';
import { getFormCount } from '@/components/taxDocument/utils/pageUtil';
import {
  FORM_47_1_SALES_ITEM_MAX_LENGTH,
  FORM_47_2_SALES_ITEM_MAX_LENGTH,
} from '@/components/taxDocument/template/Form47/constants';
import Form47_1 from '@/components/taxDocument/template/Form47/pages/Form47_1/Form47_1';
import Form47_2 from '@/components/taxDocument/template/Form47/pages/Form47_2/Form47_2';
import { PageSlot } from '@/components/documentCreate/PageSlot';

type Form47Props = UpdaterProps<Form47Data> & { inputType?: Form47InputData };

function Form47({ updater, inputType, ...data }: Form47Props) {
  const [pageCount, setPageCount] = useState(
    getFormCount(
      data.salesItems.length,
      FORM_47_1_SALES_ITEM_MAX_LENGTH,
      FORM_47_2_SALES_ITEM_MAX_LENGTH
    )
  );
  return (
    <Fragment>
      <PageSlot slotWidth={882} slotHeight={624}>
        <Form47_1
          updater={updater}
          inputType={inputType}
          {...data}
          pageIndex={0}
          onAddPage={() => setPageCount(prev => prev + 1)}
        />
      </PageSlot>
      {Array.from({ length: pageCount }).map((_, index) => (
        <PageSlot key={index} slotWidth={624} slotHeight={882}>
          <Form47_2
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

export default Form47;
