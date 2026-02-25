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

  // (7) 매출 누락분 상세
  omissionSalesTaxInvoice: { amount: number; taxRate: string; tax: number }; // (36) 과세_세금계산서
  omissionSalesOther: { amount: number; taxRate: string; tax: number }; // (37) 과세_기타
  omissionSalesZeroTaxInvoice: { amount: number; taxRate: string; tax: number }; // (38) 영세율_세금계산서
  omissionSalesZeroOther: { amount: number; taxRate: string; tax: number }; // (39) 영세율_기타
  omissionSalesTotal: { amount: number; tax: number }; // (40) 합계

  // (13) 매입 누락분 상세
  omissionPurchaseTaxInvoice: { amount: number; taxRate: string; tax: number }; // (41) 세금계산서
  omissionPurchaseOther: { amount: number; taxRate: string; tax: number }; // (42) 그 밖의 공제매입세액
  omissionPurchaseTotal: { amount: number; tax: number }; // (43) 합계

  // [7] 뒷면: 그 밖의 공제매입세액 명세 ((15)의 상세)
  otherDedCreditCardGeneral: { amount: number; taxRate: string; tax: number }; // (44) 신용카드_일반매입
  otherDedCreditCardFixed: { amount: number; taxRate: string; tax: number }; // (45) 신용카드_고정자산매입
  otherDedDeemedInput: { amount: number; taxRate: string; tax: number }; // (46) 의제매입세액
  otherDedRecycledInput: { amount: number; taxRate: string; tax: number }; // (47) 재활용폐자원등 매입세액
  otherDedTaxTrans: { amount: number; taxRate: string; tax: number }; // (48) 과세사업전환 매입세액
  otherDedInventory: { amount: number; taxRate: string; tax: number }; // (49) 재고매입세액
  otherDedBadDebtRepay: { amount: number; taxRate: string; tax: number }; // (50) 변제대손세액
  otherDedForeignerRefund: { amount: number; taxRate: string; tax: number }; // (51) 외국인 관광객에 대한 환급세액
  otherDedTotal: { amount: number; tax: number }; // (52) 합계

  // [8] 뒷면: 공제받지 못할 매입세액 명세 ((17)의 상세)
  nonDedInputTax: { amount: number; taxRate: string; tax: number }; // (53) 공제받지 못할 매입세액
  nonDedCommonTax: { amount: number; taxRate: string; tax: number }; // (54) 공통매입세액 중 면세사업 해당분
  nonDedBadDebtDisposition: { amount: number; taxRate: string; tax: number }; // (55) 대손처분받은 세액
  nonDedTotal: { amount: number; tax: number }; // (56) 합계

  // [9] 뒷면: 그 밖의 경감·공제세액 명세 ((19)의 상세)
  creditElectronicReport: { taxRate: string; tax: number }; // (57) 전자신고 세액공제
  creditElectronicInvoice: { taxRate: string; tax: number }; // (58) 전자세금계산서 발급세액 공제
  creditTaxiTransport: { amount: number; taxRate: string; tax: number }; // (59) 일반택시 운송사업자 경감세액
  creditProxyPayment: { taxRate: string; tax: number }; // (60) 대리납부 세액공제
  creditCashReceiptBiz: { taxRate: string; tax: number }; // (61) 현금영수증사업자 세액공제
  creditOther: { taxRate: string; tax: number }; // (62) 기타
  creditTotal: { tax: number }; // (63) 합계

  // [10] 뒷면: 가산세액 명세
  // 사업자 미등록 등
  penaltyBizReg: { amount: number; taxRate: string; tax: number }; // (64) 사업자미등록 등

  // 세금계산서 관련
  penaltyTaxInvoiceDelayIssue: { amount: number; taxRate: string; tax: number }; // (65) 지연발급 등
  penaltyTaxInvoiceDelayReceipt: {
    amount: number;
    taxRate: string;
    tax: number;
  }; // (66) 지연수취
  penaltyTaxInvoiceNonIssue: { amount: number; taxRate: string; tax: number }; // (67) 미발급 등

  // 전자세금계산서 관련
  penaltyElecInvoiceDelayTrans: {
    amount: number;
    taxRate: string;
    tax: number;
  }; // (68) 지연전송
  penaltyElecInvoiceNonTrans: { amount: number; taxRate: string; tax: number }; // (69) 미전송

  // 세금계산서 합계표 관련
  penaltySummaryTableSubmitUnfaithful: {
    amount: number;
    taxRate: string;
    tax: number;
  }; // (70) 제출 불성실
  penaltySummaryTableDelaySubmit: {
    amount: number;
    taxRate: string;
    tax: number;
  }; // (71) 지연제출

  // 신고 불성실
  penaltyNoReportGeneral: { amount: number; taxRate: string; tax: number }; // (72) 무신고(일반)
  penaltyNoReportFraud: { amount: number; taxRate: string; tax: number }; // (73) 무신고(부당)
  penaltyUnderReportGeneral: { amount: number; taxRate: string; tax: number }; // (74) 과소·초과환급신고(일반)
  penaltyUnderReportFraud: { amount: number; taxRate: string; tax: number }; // (75) 과소·초과환급신고(부당)

  // 납부 지연 및 기타
  penaltyLatePayment: { amount: number; taxRate: string; tax: number }; // (76) 납부지연
  penaltyZeroRateUnfaithful: { amount: number; taxRate: string; tax: number }; // (77) 영세율 과세표준신고 불성실
  penaltyCashSalesUnfaithful: { amount: number; taxRate: string; tax: number }; // (78) 현금매출명세서 불성실
  penaltyRealEstateUnfaithful: { amount: number; taxRate: string; tax: number }; // (79) 부동산임대공급가액명세서 불성실

  // 매입자 납부특례 관련
  penaltySpecialAccountUnused: { amount: number; taxRate: string; tax: number }; // (80) 거래계좌 미사용
  penaltySpecialAccountDelay: { amount: number; taxRate: string; tax: number }; // (81) 거래계좌 지연입금

  // 신용카드 관련
  penaltyCreditCardUnsubmitted: {
    amount: number;
    taxRate: string;
    tax: number;
  }; // (82) 신용카드매출전표 등 수령명세서 미제출·과다기재

  penaltySumTotal: { amount: number; tax: number }; // (83) 합계

  // [11] 뒷면: 면세사업 수입금액 및 계산서 발급·수취 명세
  taxFreeRevenue1: {
    bizType: string;
    bizItem: string;
    code: string;
    amount: number;
  }; // (84) 첫 번째 업종
  taxFreeRevenue2: {
    bizType: string;
    bizItem: string;
    code: string;
    amount: number;
  }; // (85) 두 번째 업종
  taxFreeRevenueExcluded: { bizItem: string; code: string; amount: number }; // (86) 수입금액 제외
  taxFreeRevenueTotal: { amount: number }; // (87) 합계

  // 계산서 발급 및 수취
  billIssuedAmount: { amount: number }; // (88) 계산서 발급금액
  billReceivedAmount: { amount: number }; // (89) 계산서 수취금액
};

export type Form21InputData = FormInputData<Form21Data>;
