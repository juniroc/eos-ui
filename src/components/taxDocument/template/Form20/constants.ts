import { Form20Data } from '@/components/taxDocument/template/Form20/type';

export const baseForm20Data: Form20Data = {
  companyName: '',
  bizNumber: '',
  repName: '',
  phoneNumber: '',
  bizAddress: '',
  isUnder300Million: false,
  issuanceCount: 0,
  deductionPerIssuance: 200,
  calculableTaxAmount: 0,
  finalDeductionAmount: 0,
  annualDeductionLimit: 1000000,
  alreadyDeductedAmount: 0,
  periodDeductionLimit: 0,
  writeYear: '',
  writeMonth: '',
  writeDay: '',
  submitterName: '',
};
