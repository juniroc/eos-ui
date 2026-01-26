/* =========================================================
 * 공통 과세기간 / 귀속 정보
 * ======================================================= */

export interface TaxPeriod {
  attributionYear: string; // 귀속년도
  attributionTerm: string; // 기수
  periodStartMonth: string;
  periodStartDay: string;
  periodEndMonth: string;
  periodEndDay: string;
}

export interface SimpleTaxPeriod {
  taxPeriodStartMonth: string;
  taxPeriodStartDay: string;
  taxPeriodEndMonth: string;
  taxPeriodEndDay: string;
}

/* =========================================================
 * 작성일 / 신고일
 * ======================================================= */

export interface WriteDate {
  writeYear: string;
  writeMonth: string;
  writeDay: string;
}

export interface SubmissionDate {
  submissionYear: string;
  submissionMonth: string;
  submissionDay: string;
}

export interface WritingDateString {
  writingDate: string; // YYYY-MM-DD
}

/* =========================================================
 * 사업자 / 제출자 공통
 * ======================================================= */

export interface BizIdentity {
  companyName: string;
  bizRegNumber: string;
  representativeName: string;
}

export interface BizProfile extends BizIdentity {
  address?: string;
  bizType?: string;
  bizItem?: string;
}

export interface SubmitterSignature {
  submitterName: string;
}

/* =========================================================
 * 금액 / 세액 공통
 * ======================================================= */

export interface TaxAmountPair {
  taxBase: number;
  taxAmount: number;
}

export interface TaxWithRate extends TaxAmountPair {
  taxRate: string;
}

/* =========================================================
 * 금액 분할 입력 (칸 단위)
 * ======================================================= */

/** 입력용 (문자열) */
export interface MoneyGrid {
  trillion: string;
  tenBillion?: string;
  billion?: string;
  million: string;
  thousand: string;
  one: string;
}

/** 계산/합계용 (숫자) */
export interface SplitCurrency {
  trillion: number;
  billion: number;
  million: number;
  thousand: number;
  one: number;
}

/* =========================================================
 * Row / Summary 패턴
 * ======================================================= */

export interface CountAmount {
  count: number;
  amount: number;
}

export interface SupplyTaxAmount {
  count: number;
  supplyAmount: number;
  taxAmount: number;
  note?: string;
}

/* =========================================================
 * 결제수단별 금액 (2300 등)
 * ======================================================= */

export interface PaymentMethodColumns {
  totalAmount: number;
  creditCardAmount: number;
  cashReceiptAmount: number;
  electronicPaymentAmount: number;
}

/* =========================================================
 * 세액 계산 블록 (2800 등)
 * ======================================================= */

export interface TaxCalcGroup {
  penaltyTax: number;
  deductionTax: number;
  payableTax: number;
  note?: string;
}

/* =========================================================
 * 리스트 기본 패턴
 * ======================================================= */

export interface ListWithTotal<T, Total> {
  items: T[];
  total: Total;
}
