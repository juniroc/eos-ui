import React, { useState } from 'react';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import {
  Form28Data,
  Form28InputData,
} from '@/components/taxDocument/template/Form28/type';
import { getFormCount } from '@/components/taxDocument/utils/pageUtil';
import { MAX_BUSINESS_PLACE_LENGTH } from '@/components/taxDocument/template/Form28/constants';
import Form28_1 from '@/components/taxDocument/template/Form28/pages/Form28_1/Form28_1';
import { PageSlot } from '@/components/documentCreate/PageSlot';

type Form28Props = UpdaterProps<Form28Data> & { inputType?: Form28InputData };

type Props = Form28Props;

function Form28({ updater, inputType, ...data }: Props) {
  const [formCount, setFormCount] = useState(
    getFormCount(
      data.businessPlaces.length,
      MAX_BUSINESS_PLACE_LENGTH,
      MAX_BUSINESS_PLACE_LENGTH
    )
  );
  return Array.from({ length: formCount + 1 }).map((_, index) => (
    <PageSlot key={index} slotWidth={882} slotHeight={624}>
      <Form28_1
        updater={updater}
        inputType={inputType}
        onAddPage={() => setFormCount(prev => prev + 1)}
        pageIndex={index}
        {...data}
      />
    </PageSlot>
  ));
}

export default Form28;
