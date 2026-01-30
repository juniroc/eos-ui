import React, { Fragment, useState } from 'react';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import { Form38Data } from '@/components/taxDocument/template/Form38/type';
import { getFormCount } from '@/components/taxDocument/utils/pageUtil';
import {
  FORM_38_1_MAX_DETAIL_LIST_MAX_LENGTH,
  FORM_38_2_MAX_DETAIL_LIST_MAX_LENGTH,
} from '@/components/taxDocument/template/Form38/constants';
import Form38_1 from '@/components/taxDocument/template/Form38/pages/Form38_1/Form38_1';
import Form38_2 from '@/components/taxDocument/template/Form38/pages/Form38_2/Form38_2';

function Form38({ updater, ...data }: UpdaterProps<Form38Data>) {
  const [pageCount, setPageCount] = useState(
    getFormCount(
      data.detailList.length,
      FORM_38_1_MAX_DETAIL_LIST_MAX_LENGTH,
      FORM_38_2_MAX_DETAIL_LIST_MAX_LENGTH
    )
  );
  return (
    <Fragment>
      <Form38_1
        pageIndex={0}
        updater={updater}
        onAddPage={() => setPageCount(prev => prev + 1)}
        {...data}
      />
      {Array.from({ length: pageCount - 1 }).map((_, index) => (
        <Form38_2
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

export default Form38;
