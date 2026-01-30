import React, { Fragment, useState } from 'react';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import { Form40Data } from '@/components/taxDocument/template/Form40/type';
import { getFormCount } from '@/components/taxDocument/utils/pageUtil';
import {
  FORM_40_1_MAX_EXPORT_DETAIL_LIST_MAX_LENGTH,
  FORM_40_2_MAX_LOCAL_DETAIL_LIST_MAX_LENGTH,
} from '@/components/taxDocument/template/Form40/constants';
import Form40_1 from '@/components/taxDocument/template/Form40/pages/Form40_1/Form40_1';
import Form40_2 from '@/components/taxDocument/template/Form40/pages/Form40_2/Form40_2';

function Form40({ updater, ...data }: UpdaterProps<Form40Data>) {
  const [pageCount, setPageCount] = useState(
    getFormCount(
      data.exportItems.length,
      FORM_40_1_MAX_EXPORT_DETAIL_LIST_MAX_LENGTH,
      FORM_40_2_MAX_LOCAL_DETAIL_LIST_MAX_LENGTH
    )
  );
  return (
    <Fragment>
      <Form40_1
        pageIndex={0}
        updater={updater}
        onAddPage={() => setPageCount(prev => prev + 1)}
        {...data}
      />
      {Array.from({ length: pageCount }).map((_, i) => (
        <Form40_2
          key={i}
          pageIndex={i}
          onAddPage={() => setPageCount(prev => prev + 1)}
          updater={updater}
          {...data}
        />
      ))}
    </Fragment>
  );
}

export default Form40;
