import { FormInputData } from '@/components/taxDocument/template/common/type';

export type Form21Data = {
  isScheduled: boolean;

  isFinal: boolean;

  isAfterDeadline: boolean;

  isZeroRateEarlyRefund: boolean;

  attributionYear: string;

  attributionTerm: string;

  periodStartMonth: string;

  periodStartDay: string;

  periodEndMonth: string;

  periodEndDay: string;

  bizName: string;

  repName: string;

  bizNumber: string;

  residentNumber: string;

  phoneNumber: string;

  bizAddress: string;

  homeAddress: string;

  mobileNumber: string;

  email?: string;

  salesTaxInvoice: { amount: number; tax: number };

  salesPurchaserIssued: { amount: number; tax: number };

  salesCreditCard: { amount: number; tax: number };

  salesOther: { amount: number; tax: number };

  salesZeroTaxInvoice: { amount: number; tax: number };

  salesZeroOther: { amount: number; tax: number };

  salesOmission: { amount: number; taxRate: string; tax: number };

  salesBadDebt: { amount: number; taxRate: string; tax: number };

  salesTotal: { amount: number; tax: number };

  purchaseGeneral: { amount: number; taxRate: string; tax: number };

  purchaseImportDeferral: { amount: number; taxRate: string; tax: number };

  purchaseFixedAsset: { amount: number; taxRate: string; tax: number };

  purchaseOmission: { amount: number; taxRate: string; tax: number };

  purchasePurchaserIssued: { amount: number; taxRate: string; tax: number };

  purchaseOtherDeduction: { amount: number; taxRate: string; tax: number };

  purchaseTotalInput: { amount: number; taxRate: string; tax: number };

  purchaseNonDeductible: { amount: number; taxRate: string; tax: number };

  purchaseNetResult: { amount: number; taxRate: string; tax: number };

  taxPayableOrRefundable: { tax: number };

  deductionOther: { amount: number; taxRate: string; tax: number };

  deductionCreditCardIssuance: { amount: number; taxRate: string; tax: number };

  deductionTotal: { amount: number; tax: number };

  smallBizExemption: { amount: number; tax: number };

  prepaidUnrefunded: { amount: number; tax: number };

  prepaidNotified: { amount: number; tax: number };

  prepaidOccasional: { amount: number; tax: number };

  taxPaidByProxy: { amount: number; tax: number };

  taxPaidBySpecialPurchase: { amount: number; tax: number };

  taxPaidByCardCompany: { amount: number; tax: number };

  penaltyTotal: { amount: number; tax: number };

  finalTaxToPay: { tax: number };

  consolidatedPaymentTax: { tax: number };

  refundBankName: string;

  refundBranchName: string;

  refundAccountNumber: string;

  closureDate: string;

  closureReason: string;

  isZeroRateReciprocity: boolean;

  applicationType: string;

  zeroRateBizType: string;

  zeroRateCountry: string;

  taxBaseProofs: Array<{
    bizType: string;

    bizItem: string;

    productionFactor: string;

    bizCode: string;

    amount: number;
  }>;

  writeYear: string;

  writeMonth: string;

  writeDay: string;

  submitterName: string;

  taxAgentName: string;

  taxAgentPhone: string;

  taxAgentBizNumber: string;

  taxAgentMgmtNumber: string;

  taxAgentResidentNumber: string;
};

export type Form21InputData = FormInputData<Form21Data>;
