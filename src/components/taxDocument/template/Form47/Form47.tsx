import React, { Fragment, useState } from 'react';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import { Form47Data } from '@/components/taxDocument/template/Form47/type';
import { getFormCount } from '@/components/taxDocument/utils/pageUtil';
import Form47_1 from '@/components/taxDocument/template/Form47/pages/Form47_1/Form47_1';
import Form47_2 from '@/components/taxDocument/template/Form47/pages/Form47_2/Form47_2';

function Form47({ updater, ...data }: UpdaterProps<Form47Data>) {
  const [pageCount, setPageCount] = useState(
    getFormCount(
      data.salesItems.length,
      FORM_47_1_SALES_ITEM_MAX_LENGTH,
      FORM_47_2_SALES_ITEM_MAX_LENGTH
    )
  );
  return (
    <Fragment>
      <Form47_1
        updater={updater}
        {...data}
        pageIndex={0}
        onAddPage={() => setPageCount(prev => prev + 1)}
      />
      {Array.from({ length: pageCount }).map((_, index) => (
        <Form47_2
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

export default Form47;
