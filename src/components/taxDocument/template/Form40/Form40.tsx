import React, { Fragment, useState } from 'react';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import {Form40Data, Form40InputData} from '@/components/taxDocument/template/Form40/type';
import { getFormCount } from '@/components/taxDocument/utils/pageUtil';
import {
  FORM_40_1_MAX_EXPORT_DETAIL_LIST_MAX_LENGTH,
  FORM_40_2_MAX_LOCAL_DETAIL_LIST_MAX_LENGTH,
} from '@/components/taxDocument/template/Form40/constants';
import Form40_1 from '@/components/taxDocument/template/Form40/pages/Form40_1/Form40_1';
import Form40_2 from '@/components/taxDocument/template/Form40/pages/Form40_2/Form40_2';
import { PageSlot } from '@/components/documentCreate/PageSlot';
type Form40Props = UpdaterProps<Form40Data> & { inputType?: Form40InputData };

function Form40({ updater, inputType, ...data }: Form40Props) {
  const [pageCount, setPageCount] = useState(
    getFormCount(
      data.exportItems.length,
      FORM_40_1_MAX_EXPORT_DETAIL_LIST_MAX_LENGTH,
      FORM_40_2_MAX_LOCAL_DETAIL_LIST_MAX_LENGTH
    )
  );
  return (
    <Fragment>
      <PageSlot slotWidth={624} slotHeight={882}>
        <Form40_1
          pageIndex={0}
          updater={updater}
          inputType={inputType}
          onAddPage={() => setPageCount(prev => prev + 1)}
          {...data}
        />
      </PageSlot>
      {Array.from({ length: pageCount }).map((_, i) => (
        <PageSlot key={i} slotWidth={624} slotHeight={882}>
          <Form40_2
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

export default Form40;
