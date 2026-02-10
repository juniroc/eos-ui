import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import {Form42Data, Form42InputData} from '@/components/taxDocument/template/Form42/type';
import { useState } from 'react';
import Form42_1 from '@/components/taxDocument/template/Form42/pages/Form42_1/Form42_1';
import { getFormCount } from '@/components/taxDocument/utils/pageUtil';
import { MAX_ATTACHMENT_ITEM_LENGTH } from '@/components/taxDocument/template/Form42/constants';
import { PageSlot } from '@/components/documentCreate/PageSlot';
type Form42Props = UpdaterProps<Form42Data> & { inputType?: Form42InputData };

function Form42({ updater, inputType, ...data }: Form42Props) {
  const [pageCount, setPageCount] = useState(
    getFormCount(
      data.attachmentItems.length,
      MAX_ATTACHMENT_ITEM_LENGTH,
      MAX_ATTACHMENT_ITEM_LENGTH
    )
  );

  return Array.from({ length: pageCount + 1 }).map((_, index) => (
    <PageSlot key={index} slotWidth={624} slotHeight={882}>
      <Form42_1
        pageIndex={index}
        updater={updater}
        inputType={inputType}
        onAddPage={() => setPageCount(prev => prev + 1)}
        {...data}
      />
    </PageSlot>
  ));
}

export default Form42;
