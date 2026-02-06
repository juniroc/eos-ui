import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import { Form42Data } from '@/components/taxDocument/template/Form42/type';
import { useState } from 'react';
import Form42_1 from '@/components/taxDocument/template/Form42/pages/Form42_1/Form42_1';
import { getFormCount } from '@/components/taxDocument/utils/pageUtil';

function Form42({ updater, ...data }: UpdaterProps<Form42Data>) {
  const [pageCount, setPageCount] = useState(
    getFormCount(
      data.attachmentItems.length,
      MAX_ATTACHMENT_ITEM_LENGTH,
      MAX_ATTACHMENT_ITEM_LENGTH
    )
  );

  return Array.from({ length: pageCount + 1 }).map((_, index) => (
    <Form42_1
      pageIndex={index}
      updater={updater}
      onAddPage={() => setPageCount(prev => prev + 1)}
      {...data}
    />
  ));
}

export default Form42;
