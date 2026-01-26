import React from 'react';
import { TaxDocumentTypes } from '@/components/taxDocument/types/types';
import Form15 from '@/components/taxDocument/template/Form15/Form15';

export type Props = {
  type: TaxDocumentTypes;
  data: Object;
};

function TaxDocument({ type, data }: Props) {
  switch (type) {
    case 'FORM15':
      return <Form15 />;
    default:
      return null;
  }
}

export default TaxDocument;
