import {
  BizProfile,
  SubmitterSignature,
  WriteDate,
} from '@/components/taxDocument/types/common';

export interface FarmerPurchaseItem {
  sellerName: string; // ㊹ 성명
  sellerResNumber: string; // 주민등록번호
  itemCount: number; // ㊺ 건수
  itemName: string; // ㊻ 품명
  quantity: number; // ㊼ 수량
  purchasePrice: number; // ㊽ 매입가액
}

export interface OtherCreditCardItem {
  cardMemberNumber: string; // ⑨ 카드회원번호
  supplierBizNumber: string; // ⑩ 공급자(가맹점) 사업자등록번호
  transactionCount: number; // ⑪ 거래건수
  supplyPrice: number; // ⑪ 공급가액
  taxAmount: number; // ⑪ 세액
}

export interface Form15Data extends BizProfile, WriteDate, SubmitterSignature {
  // ⑩ 합계
  summaryTotalSellerCount: number; // ⑤ 매입처 수
  summaryTotalCount: number; // ⑥ 건수
  summaryTotalAmt: number; // ⑦ 매입가액
  summaryTotalDedRate: string; // ⑧ 공제율
  summaryTotalTaxAmt: number; // ⑨ 의제매입세액

  // ⑪ 계산서 수취분
  invoiceSellerCount: number;
  invoiceCount: number;
  invoiceAmt: number;
  invoiceDedRate: string;
  invoiceTaxAmt: number;

  // ⑫ 신용카드 등 수취분
  cardSellerCount: number;
  cardCount: number;
  cardAmt: number;
  cardDedRate: string;
  cardTaxAmt: number;

  // ⑬ 농어민 등으로부터의 매입분
  farmerSellerCount: number;
  farmerCount: number;
  farmerAmt: number;
  farmerDedRate: string;
  farmerTaxAmt: number;

  /* -------------------------------------------------------
   * 3. 면세농산물등 의제매입세액 신고내용 (일반 업종)
   * ----------------------------------------------------- */

  // 가. 과세표준 및 공제 가능한 금액
  baseTotalAmt: number; // ⑭ 과세표준 합계
  basePlannedAmt: number; // ⑮ 예정분
  baseFixedAmt: number; // ⑯ 확정분
  limitRate: string; // ⑰ 한도율
  limitAmt: number; // ⑱ 한도액
  currentPurchaseAmt: number; // ⑲ 당기 매입액
  deductibleTargetAmt: number; // ⑳ 공제대상금액

  // 나. 과세기간 공제할 세액
  deductionRate: string; // ㉑ 공제율
  deductibleTaxAmt: number; // ㉒ 공제대상세액
  preDeductedTotal: number; // ㉓ 기 공제세액 합계
  preDeductedPlanned: number; // ㉔ 예정 신고분
  preDeductedEarly: number; // ㉕ 월별 조기분
  finalDeductibleTax: number; // ㉖ 공제(납부)할 세액

  /* -------------------------------------------------------
   * 4. 제조업 특례 (매입시기 집중 제조업)
   * ----------------------------------------------------- */

  // 가. 과세표준 및 공제 가능한 금액
  manufBaseTotal: number; // ㉗ 과세표준 합계
  manufBaseTerm1: number; // ㉘ 제1기
  manufBaseTerm2: number; // ㉙ 제2기
  manufLimitRate: string; // ㉚ 한도율
  manufLimitAmt: number; // ㉛ 한도액
  manufPurchaseTotal: number; // ㉜ 매입액 합계
  manufPurchaseTerm1: number; // ㉝ 제1기
  manufPurchaseTerm2: number; // ㉞ 제2기
  manufTargetAmt: number; // ㉟ 공제대상금액

  // 나. 제2기 과세기간 공제할 세액
  manufDeductionRate: string; // ㊱ 공제율
  manufDeductibleTaxAmt: number; // ㊲ 공제대상세액
  manufPreDedTotal: number; // ㊳ 기 공제세액 합계
  manufPreDedTerm1: number; // ㊴ 제1기
  manufPreDedTerm2Total: number; // ㊵ 제2기 합계
  manufPreDedTerm2Planned: number; // ㊶ 예정 신고분
  manufPreDedTerm2Early: number; // ㊷ 월별 조기분
  manufFinalDeductibleTax: number; // ㊸ 공제(납부)할 세액

  /* -------------------------------------------------------
   * 5. 농어민 등으로부터의 매입분 명세
   * ----------------------------------------------------- */

  // 합계 행
  farmerPurchaseTotalCount: number; // ㊺ 건수
  farmerPurchaseTotalItemName: string; // ㊻ 품명
  farmerPurchaseTotalQuantity: number; // ㊼ 수량
  farmerPurchaseTotalAmt: number; // ㊽ 매입가액

  // 상세 리스트
  farmerPurchaseItems: FarmerPurchaseItem[];
}

export interface Form16Data {
  /* [헤더] 과세기간 및 귀속 정보 */
  attributionYear: string; // ____년
  attributionTerm: string; // ____기
  taxPeriodStartMonth: string; // ( __월 ...
  taxPeriodStartDay: string; // ... __일 ~
  taxPeriodEndMonth: string; // ... __월 ...
  taxPeriodEndDay: string; // ... __일 )

  /* 1. 제출자 인적사항 (① ~ ③) */
  companyName: string; // ① 상호(법인명)
  bizNumber: string; // ② 사업자등록번호
  repName: string; // ③ 성명(대표자)

  /* 2. 신용카드 등 매입명세 합계 (④ ~ ⑧) */
  // ④ 합계
  totalTransactionCount: number; // 거래건수 (합계)
  totalSupplyPrice: number; // 공급가액 (합계)
  totalTaxAmount: number; // 세액 (합계)

  // ⑤ 현금영수증
  cashReceiptCount: number; // 거래건수
  cashReceiptSupply: number; // 공급가액
  cashReceiptTax: number; // 세액

  // ⑥ 화물운전자복지카드
  freightCardCount: number; // 거래건수
  freightCardSupply: number; // 공급가액
  freightCardTax: number; // 세액

  // ⑦ 사업용 신용카드
  bizCreditCardCount: number; // 거래건수
  bizCreditCardSupply: number; // 공급가액
  bizCreditCardTax: number; // 세액

  // ⑧ 그 밖의 신용카드 등
  otherCreditCardCount: number; // 거래건수
  otherCreditCardSupply: number; // 공급가액
  otherCreditCardTax: number; // 세액

  /* 3. 그 밖의 신용카드 등 수령금액 합계 명세 (⑨ ~ ⑪)
   * - '⑧ 그 밖의 신용카드 등' 상세 리스트
   * - 일련번호는 자동 생성이므로 제외
   */
  otherCreditCardItems: OtherCreditCardItem[];
}

/* =========================================================
 * 대손세액 공제 항목
 * ======================================================= */

export interface BadDebtDeductionItem {
  originalSupplyDate: string; // ⑤ 당초 공급 연월일 (YYYY-MM-DD)
  badDebtConfirmDate: string; // ⑥ 대손확정 연월일
  badDebtAmount: number; // ⑦ 대손금액
  deductionRate: string; // ⑧ 공제율 (10/110)
  badDebtTaxAmount: number; // ⑨ 대손세액

  recipientCompanyName: string; // ⑩ 상호
  recipientRepName: string; // ⑪ 성명
  recipientBizNumber: string; // ⑫ 사업자등록번호
  badDebtReason: string; // ⑬ 대손사유
}

/* =========================================================
 * 변제세액 신고 항목
 * ======================================================= */

export interface RepaymentTaxItem {
  originalBadDebtConfirmDate: string; // ⑭ 당초 대손 확정연월일
  repaymentDate: string; // ⑮ 변제 연월일
  repaymentAmount: number; // ⑯ 변제금액
  deductionRate: string; // ⑰ 공제율 (10/110)
  repaymentTaxAmount: number; // ⑱ 변제세액

  supplierCompanyName: string; // ⑲ 상호
  supplierRepName: string; // ⑳ 성명
  supplierBizNumber: string; // ㉑ 사업자등록번호
  repaymentReason: string; // ㉒ 변제사유
}

export interface Form19Data {
  /* 1. 신고인 인적사항 (① ~ ④) */
  companyName: string; // ① 상호(법인명)
  bizNumber: string; // ② 사업자등록번호
  repName: string; // ③ 성명
  bizAddress: string; // ④ 사업장 소재지

  /* 2. 대손세액 계산신고 내용 (⑤ ~ ⑬) */
  badDebtDeductionItems: BadDebtDeductionItem[];

  /* 3. 변제세액 계산신고 내용 (⑭ ~ ㉒) */
  repaymentTaxItems: RepaymentTaxItem[];

  /* 하단 작성일 및 신고인 */
  writeYear: string; // 년
  writeMonth: string; // 월
  writeDay: string; // 일
  submitterName: string; // 신고인
}

export interface Form20Data extends WriteDate, SubmitterSignature {
  /* 1. 신고인 인적사항 (① ~ ⑥) */
  companyName: string; // ① 상호
  bizNumber: string; // ② 사업자등록번호
  repName: string; // ③ 성명
  phoneNumber: string; // ④ 전화번호
  bizAddress: string; // ⑤ 사업장 소재지

  // ⑥ 직전연도 공급가액 3억원 미만 여부
  // true: 여, false: 부
  isUnder300Million: boolean;

  /* 2. 전자세금계산서 발급세액공제 계산신고 내용 (⑦ ~ ⑬) */

  // 가. 공제대상 세액
  issuanceCount: number; // ⑦ 발급건수
  deductionPerIssuance: number; // ⑧ 건당 공제금액 (서식상 200원)
  calculableTaxAmount: number; // ⑨ 공제가능 세액 (⑦ × ⑧)
  finalDeductionAmount: number; // ⑩ 해당 공제세액

  // 나. 공제 한도액 계산
  annualDeductionLimit: number; // ⑪ 연간 공제한도액 (서식상 100만원)
  alreadyDeductedAmount: number; // ⑫ 기 공제세액
  periodDeductionLimit: number; // ⑬ 해당 과세기간 공제한도액
}

export interface Form21Data extends WriteDate, SubmitterSignature {
  /* =====================================================
   * 신고 유형
   * =================================================== */
  isScheduled: boolean; // 예정
  isFinal: boolean; // 확정
  isAfterDeadline: boolean; // 기한후
  isZeroRateEarlyRefund: boolean; // 영세율 조기환급

  /* =====================================================
   * 귀속 / 과세기간
   * =================================================== */
  attributionYear: string;
  attributionTerm: string;
  periodStartMonth: string;
  periodStartDay: string;
  periodEndMonth: string;
  periodEndDay: string;

  /* =====================================================
   * 납세자 인적사항
   * =================================================== */
  bizName: string;
  repName: string;
  bizNumber: string;
  residentNumber: string;
  phoneNumber: string;
  mobileNumber: string;
  email?: string;
  bizAddress: string;
  homeAddress: string;

  /* =====================================================
   * 매출세액
   * =================================================== */
  salesTaxInvoice: AmountTax;
  salesPurchaserIssued: AmountTax;
  salesCreditCard: AmountTax;
  salesOther: AmountTax;

  salesZeroTaxInvoice: AmountOnly;
  salesZeroOther: AmountOnly;

  salesOmission: AmountTaxRate;
  salesBadDebt: AmountTaxRate;

  salesTotal: AmountTax;

  /* =====================================================
   * 매입세액
   * =================================================== */
  purchaseGeneral: AmountTaxRate;
  purchaseImportDeferral: TaxOnlyRate;
  purchaseFixedAsset: AmountTaxRate;
  purchaseOmission: AmountTaxRate;
  purchasePurchaserIssued: AmountTaxRate;
  purchaseOtherDeduction: AmountTaxRate;

  purchaseTotalInput: AmountTax;
  purchaseNonDeductible: AmountTaxRate;
  purchaseNetResult: AmountTax;

  /* =====================================================
   * 납부 / 환급
   * =================================================== */
  taxPayableOrRefundable: TaxOnly;

  /* =====================================================
   * 공제 및 감면
   * =================================================== */
  deductionOther: TaxOnlyRate;
  deductionCreditCardIssuance: AmountTaxRate;
  deductionTotal: TaxOnly;

  smallBizExemption: TaxOnly;

  /* =====================================================
   * 기납부세액
   * =================================================== */
  prepaidUnrefunded: TaxOnly;
  prepaidNotified: TaxOnly;
  prepaidOccasional: TaxOnly;
  taxPaidByProxy: TaxOnly;
  taxPaidBySpecialPurchase: TaxOnly;
  taxPaidByCardCompany: TaxOnly;

  /* =====================================================
   * 가산세 및 최종세액
   * =================================================== */
  penaltyTotal: TaxOnly;
  finalTaxToPay: TaxOnly;
  consolidatedPaymentTax: TaxOnly;

  /* =====================================================
   * 환급 계좌
   * =================================================== */
  refundBankName: string;
  refundBranchName: string;
  refundAccountNumber: string;

  /* =====================================================
   * 폐업 / 영세율
   * =================================================== */
  closureDate: string;
  closureReason: string;
  isZeroRateReciprocity: boolean;
  applicationType: string;
  zeroRateBizType: string;
  zeroRateCountry: string;

  /* =====================================================
   * 과세표준 명세
   * =================================================== */
  taxBaseProofs: TaxBaseProof[];

  /* =====================================================
   * 세무대리인
   * =================================================== */
  taxAgentName: string;
  taxAgentPhone: string;
  taxAgentBizNumber: string;
  taxAgentMgmtNumber: string;
  taxAgentResidentNumber: string;
}

/* =========================================================
 * 공통 소형 블록 타입
 * ======================================================= */

export interface AmountOnly {
  amount: number;
}

export interface TaxOnly {
  tax: number;
}

export interface AmountTax {
  amount: number;
  tax: number;
}

export interface AmountTaxRate {
  amount: number;
  taxRate: string;
  tax: number;
}

export interface TaxOnlyRate {
  taxRate: string;
  tax: number;
}

/* =========================================================
 * 과세표준 증명
 * ======================================================= */

export interface TaxBaseProof {
  bizType: string;
  bizItem: string;
  productionFactor: string;
  bizCode: string;
  amount: number;
}

export interface Form25Data {
  /* =====================================================
   * 귀속 / 과세기간
   * =================================================== */
  attributionYear: string; // ____년
  attributionTerm: string; // ____기
  periodStartMonth: string; // __월
  periodStartDay: string; // __일 ~
  periodEndMonth: string; // __월
  periodEndDay: string; // __일

  /* =====================================================
   * 1. 기본 정보 (① ~ ④)
   * =================================================== */
  propertyAddress: string; // ① 부동산 소재지
  ownerName: string; // ② 상호(소유자 성명)
  bizNumber: string; // ③ 사업자등록번호
  subBizSerialNum?: string; // ④ 종된 사업장 일련번호

  /* =====================================================
   * 2. 수입금액 내용 기간
   * =================================================== */
  incomePeriodStartMonth: string; // 기간 시작 월
  incomePeriodEndMonth: string; // 기간 종료 월

  /* =====================================================
   * 3. 임대사업 명세 (⑤ ~ ⑱)
   * =================================================== */
  totalStats: RentalTotalStats; // 합계 행
  rentalItems: RentalItem[]; // 상세 리스트
}

/* =========================================================
 * 임대사업 합계 행
 * ======================================================= */

export interface RentalTotalStats {
  totalArea: number; // ⑧ 임대면적 합계
  totalDeposit: number; // ⑭ 보증금 합계
  totalMonthlyRent: number; // ⑮ 월 임대료 합계
  grandTotalSupplyValue: number; // ⑯ 과세표준 총액
  totalDepositInterest: number; // ⑰ 보증금 이자(계)
  totalMonthlyRentSum: number; // ⑱ 월 임대료(계)
}

/* =========================================================
 * 임대사업 상세 항목
 * ======================================================= */

export interface RentalItem {
  /* 임대사항 */
  buildingDong: string; // ⑤ 동
  floor: string; // ⑥ 층
  unitHo: string; // ⑦ 호
  area: number; // ⑧ 임대면적 (㎡)

  /* 임차인 및 계약 */
  tenantName: string; // ⑨ 상호(성명)
  tenantBizNumber: string; // ⑩ 사업자등록번호(주민등록번호)
  moveInDate: string; // ⑪ 입주일 (YYYY-MM-DD)
  renewalDate: string; // ⑫ 갱신일 (YYYY-MM-DD)
  moveOutDate: string; // ⑬ 퇴거일 (YYYY-MM-DD)

  /* 금액 */
  deposit: number; // ⑭ 보증금
  monthlyRent: number; // ⑮ 월 임대료
  totalSupplyValue: number; // ⑯ 합계 (⑰ + ⑱)
  depositInterest: number; // ⑰ 보증금 이자(계)
  monthlyRentSum: number; // ⑱ 월 임대료(계)
}
