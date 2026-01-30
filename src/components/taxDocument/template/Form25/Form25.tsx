import React, { useState } from 'react';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import { Form25Data } from '@/components/taxDocument/template/Form25/type';
import { getFormCount } from '@/components/taxDocument/utils/pageUtil';
import { RENTAL_ITEM_MAX_LENGTH } from '@/components/taxDocument/template/Form25/constants';
import Form25_1 from '@/components/taxDocument/template/Form25/pages/Form25_1/Form25_1';

type Props = Form25Data & UpdaterProps<Form25Data>;

function Form25({ updater, ...data }: Props) {
  const [pageCount, setPageCount] = useState(
    getFormCount(
      data.rentalItems.length,
      RENTAL_ITEM_MAX_LENGTH,
      RENTAL_ITEM_MAX_LENGTH
    )
  );

  return Array.from({ length: pageCount + 1 }).map((_, index) => (
    <Form25_1
      key={index}
      index={index}
      updater={updater}
      onAddPage={() => setPageCount(prev => prev + 1)}
      {...data}
    />
  ));
}

export default Form25;
