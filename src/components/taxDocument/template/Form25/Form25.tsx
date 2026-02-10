import React, { useState } from 'react';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import {
  Form25Data,
  Form25InputData,
} from '@/components/taxDocument/template/Form25/type';
import { getFormCount } from '@/components/taxDocument/utils/pageUtil';
import { RENTAL_ITEM_MAX_LENGTH } from '@/components/taxDocument/template/Form25/constants';
import Form25_1 from '@/components/taxDocument/template/Form25/pages/Form25_1/Form25_1';
import { PageSlot } from '@/components/documentCreate/PageSlot';

type Form25Props = UpdaterProps<Form25Data> & { inputType?: Form25InputData };

type Props = Form25Data & Form25Props;

function Form25({ updater, inputType, ...data }: Props) {
  const [pageCount, setPageCount] = useState(
    getFormCount(
      data.rentalItems.length,
      RENTAL_ITEM_MAX_LENGTH,
      RENTAL_ITEM_MAX_LENGTH
    )
  );

  return Array.from({ length: pageCount + 1 }).map((_, index) => (
    <PageSlot key={index} slotWidth={882} slotHeight={624}>
      <Form25_1
        index={index}
        updater={updater}
        inputType={inputType}
        onAddPage={() => setPageCount(prev => prev + 1)}
        {...data}
      />
    </PageSlot>
  ));
}

export default Form25;
