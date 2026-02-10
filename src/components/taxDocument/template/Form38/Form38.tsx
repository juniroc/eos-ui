import React, { Fragment, useState } from 'react';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import {Form38Data, Form38InputData} from '@/components/taxDocument/template/Form38/type';
import { getFormCount } from '@/components/taxDocument/utils/pageUtil';
import {
  FORM_38_1_MAX_DETAIL_LIST_MAX_LENGTH,
  FORM_38_2_MAX_DETAIL_LIST_MAX_LENGTH,
} from '@/components/taxDocument/template/Form38/constants';
import Form38_1 from '@/components/taxDocument/template/Form38/pages/Form38_1/Form38_1';
import Form38_2 from '@/components/taxDocument/template/Form38/pages/Form38_2/Form38_2';
import { PageSlot } from '@/components/documentCreate/PageSlot';
type Form38Props = UpdaterProps<Form38Data> & { inputType?: Form38InputData };

function Form38({ updater, inputType, ...data }: Form38Props) {
  const [pageCount, setPageCount] = useState(
    getFormCount(
      data.detailList.length,
      FORM_38_1_MAX_DETAIL_LIST_MAX_LENGTH,
      FORM_38_2_MAX_DETAIL_LIST_MAX_LENGTH
    )
  );
  return (
    <Fragment>
      <PageSlot slotWidth={624} slotHeight={882}>
        <Form38_1
          pageIndex={0}
          updater={updater}
          inputType={inputType}
          onAddPage={() => setPageCount(prev => prev + 1)}
          {...data}
        />
      </PageSlot>
      {Array.from({ length: pageCount - 1 }).map((_, index) => (
        <PageSlot key={index} slotWidth={624} slotHeight={882}>
          <Form38_2
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

export default Form38;
