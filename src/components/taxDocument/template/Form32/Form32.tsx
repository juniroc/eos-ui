import React, { useState } from 'react';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import {Form32Data, Form32InputData} from '@/components/taxDocument/template/Form32/type';
import { getFormCount } from '@/components/taxDocument/utils/pageUtil';
import { MAX_BUILDING_MANAGEMENT_ITEM_LENGTH } from '@/components/taxDocument/template/Form32/constants';
import Form32_1 from '@/components/taxDocument/template/Form32/pages/Form32_1/Form32_1';
import { PageSlot } from '@/components/documentCreate/PageSlot';
type Form32Props = UpdaterProps<Form32Data> & { inputType?: Form32InputData };

function Form32({ updater, inputType, ...data }: Form32Props) {
  const [pageCount, setPageCount] = useState(
    getFormCount(
      data.buildingManagementItems.length,
      MAX_BUILDING_MANAGEMENT_ITEM_LENGTH,
      MAX_BUILDING_MANAGEMENT_ITEM_LENGTH
    )
  );
  return Array.from({ length: pageCount + 1 }).map((_, index) => (
    <PageSlot key={index} slotWidth={624} slotHeight={882}>
      <Form32_1
        updater={updater}
        inputType={inputType}
        onAddPage={() => setPageCount(prev => prev + 1)}
        pageIndex={index}
        {...data}
      />
    </PageSlot>
  ));
}

export default Form32;
