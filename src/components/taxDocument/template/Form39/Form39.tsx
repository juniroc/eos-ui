import React, { Fragment, useState } from 'react';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import {Form39Data, Form39InputData} from '@/components/taxDocument/template/Form39/type';
import Form39_2 from '@/components/taxDocument/template/Form39/pages/Form39_2/Form39_2';
import Form39_1 from '@/components/taxDocument/template/Form39/pages/Form39_1/Form39_1';
import { getFormCount } from '@/components/taxDocument/utils/pageUtil';
import {
  FORM_39_1_MAX_DETAIL_LIST_MAX_LENGTH,
  FORM_39_2_MAX_DETAIL_LIST_MAX_LENGTH,
} from '@/components/taxDocument/template/Form39/constants';
import { PageSlot } from '@/components/documentCreate/PageSlot';

type Form39Props = UpdaterProps<Form39Data> & { inputType?: Form39InputData };

function Form39({ updater, inputType, ...data }: Form39Props) {
  const [pageCount, setPageCount] = useState(
    getFormCount(
      data.detailList.length,
      FORM_39_1_MAX_DETAIL_LIST_MAX_LENGTH,
      FORM_39_2_MAX_DETAIL_LIST_MAX_LENGTH
    )
  );

  return (
    <Fragment>
      <PageSlot slotWidth={624} slotHeight={882}>
        <Form39_1
          pageIndex={0}
          updater={updater}
          inputType={inputType}
          onAddPage={() => setPageCount(prev => prev + 1)}
          {...data}
        />
      </PageSlot>
      {Array.from({ length: pageCount }).map((_, i) => (
        <PageSlot key={i} slotWidth={624} slotHeight={882}>
          <Form39_2
            pageIndex={i}
            onAddPage={() => setPageCount(prev => prev + 1)}
            updater={updater}
            inputType={inputType}
            {...data}
          />
        </PageSlot>
      ))}
    </Fragment>
  );
}

export default Form39;
