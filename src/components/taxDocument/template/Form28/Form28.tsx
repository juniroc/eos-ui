import React, { useState } from 'react';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import { Form28Data } from '@/components/taxDocument/template/Form28/type';
import { getFormCount } from '@/components/taxDocument/utils/pageUtil';
import { MAX_BUSINESS_PLACE_LENGTH } from '@/components/taxDocument/template/Form28/constants';
import Form28_1 from '@/components/taxDocument/template/Form28/pages/Form28_1/Form28_1';

type Props = UpdaterProps<Form28Data>;

function Form28({ updater, ...data }: Props) {
  const [formCount, setFormCount] = useState(
    getFormCount(
      data.businessPlaces.length,
      MAX_BUSINESS_PLACE_LENGTH,
      MAX_BUSINESS_PLACE_LENGTH
    )
  );
  return Array.from({ length: formCount }).map((_, index) => (
    <Form28_1
      key={index}
      updater={updater}
      onAddPage={() => setFormCount(prev => prev + 1)}
      pageIndex={index}
      {...data}
    />
  ));
}

export default Form28;
