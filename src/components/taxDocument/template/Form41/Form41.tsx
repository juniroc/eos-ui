import React, { Fragment, useState } from 'react';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import {Form41Data, Form41InputData} from '@/components/taxDocument/template/Form41/type';
import Form41_1 from '@/components/taxDocument/template/Form41/pages/Form41_1/Form41_1';
import Form41_2 from '@/components/taxDocument/template/Form41/pages/Form41_2/Form41_2';
import { getFormCount } from '@/components/taxDocument/utils/pageUtil';
import {
  FORM_41_1_MAX_DETAIL_LIST_MAX_LENGTH,
  FORM_41_2_MAX_DETAIL_LIST_MAX_LENGTH,
} from '@/components/taxDocument/template/Form41/constants';
import { PageSlot } from '@/components/documentCreate/PageSlot';

type Form41Props = UpdaterProps<Form41Data> & { inputType?: Form41InputData };

function Form41({ updater, inputType, ...data }: Form41Props) {
  const [pageCount, setPageCount] = useState(
    getFormCount(
      data.detailList.length,
      FORM_41_1_MAX_DETAIL_LIST_MAX_LENGTH,
      FORM_41_2_MAX_DETAIL_LIST_MAX_LENGTH
    )
  );

  return (
    <Fragment>
      <PageSlot slotWidth={624} slotHeight={882}>
        <Form41_1
          pageIndex={0}
          updater={updater}
          inputType={inputType}
          onAddPage={() => setPageCount(prev => prev + 1)}
          {...data}
        />
      </PageSlot>
      {Array.from({ length: pageCount }).map((_, i) => (
        <PageSlot key={i} slotWidth={624} slotHeight={882}>
          <Form41_2
            pageIndex={i}
            updater={updater}
            inputType={inputType}
            onAddPage={() => setPageCount(prev => prev + 1)}
            {...data}
          />
        </PageSlot>
      ))}
    </Fragment>
  );
}

export default Form41;
