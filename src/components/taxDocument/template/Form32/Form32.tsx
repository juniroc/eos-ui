import React, { useState } from 'react';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import { Form32Data } from '@/components/taxDocument/template/Form32/type';
import { getFormCount } from '@/components/taxDocument/utils/pageUtil';
import { MAX_BUILDING_MANAGEMENT_ITEM_LENGTH } from '@/components/taxDocument/template/Form32/constants';
import Form32_1 from '@/components/taxDocument/template/Form32/pages/Form32_1/Form32_1';

function Form32({ updater, ...data }: UpdaterProps<Form32Data>) {
  const [pageCount, setPageCount] = useState(
    getFormCount(
      data.buildingManagementItems.length,
      MAX_BUILDING_MANAGEMENT_ITEM_LENGTH,
      MAX_BUILDING_MANAGEMENT_ITEM_LENGTH
    )
  );
  return Array.from({ length: pageCount + 1 }).map((_, index) => (
    <Form32_1
      key={index}
      updater={updater}
      onAddPage={() => setPageCount(prev => prev + 1)}
      pageIndex={index}
      {...data}
    />
  ));
}

export default Form32;
