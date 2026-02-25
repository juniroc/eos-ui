import { FormInputData } from '@/components/taxDocument/template/common/type';

export type Form22MissingDetails = {
  count: number;
  supplyAmount: number;
  taxAmount: number;
  note?: string;
};

export type Form22CommonTaxAllocationItem = {
  commonSupplyAmount: number; // ⑩ 공급가액

  commonTaxAmount: number; // ⑪ 세액

  totalSupplyAmount: number; // ⑫ 총공급가액 등

  taxFreeSupplyAmount: number; // ⑬ 면세공급가액 등

  nonDeductibleTaxAmount: number; // ⑭ 불공제 매입세액
};

export type CommonTaxSettlementItem = {
  totalCommonTaxAmount: number; // ⑮ 총공통매입세액

  taxFreeRatio: string; // ⑯ 면세사업등 확정비율

  totalNonDeductibleTaxAmount: number; // ⑰ 불공제 매입세액 총액

  alreadyNonDeductedTaxAmount: number; // ⑱ 기 불공제 매입세액

  finalAdjustmentTaxAmount: number; // ⑲ 가산 또는 공제되는 매입세액
};

export type TaxRecalculationItem = {
  goodsTaxAmount: number; // ⑳ 재화의 공급에 대한 부가가치세액

  reductionRate: string; // ㉑ 감소율

  fluctuationRatio: string; // ㉒ 변동비율

  recalculatedTaxAmount: number; // ㉓ 재계산된 세액
};

export type Form22Data = {
  /* [헤더] 과세기간 및 귀속 정보 */

  attributionYear: string; // ____년

  attributionTerm: string; // ____기

  periodStartMonth: string; // __월

  periodStartDay: string; // __일 ~

  periodEndMonth: string; // __월

  periodEndDay: string; // __일

  /* [1] 제출자 인적사항 */

  bizName: string; // 상호(법인명)

  repName: string; // 성명(대표자)

  bizNumber: string; // 사업자등록번호

  /* [2] 공제받지 못할 매입세액 명세 (① ~ ⑨) */

  // ① 필요적 기재사항 누락 등

  missingRequiredDetails: Form22MissingDetails;

  // ② 사업과 직접 관련 없는 지출

  unrelatedToBusiness: Form22MissingDetails;

  // ③ 개별소비세법... 자동차 구입·유지 및 임차

  nonBizCarPurchaseMaintain: Form22MissingDetails;

  // ④ 접대비 및 이와 유사한 비용 관련

  entertainmentExpenses: Form22MissingDetails;

  // ⑤ 면세사업등 관련

  taxFreeBusinessRelated: Form22MissingDetails;

  // ⑥ 토지의 자본적 지출 관련

  landCapitalExpenditure: Form22MissingDetails;

  // ⑦ 사업자등록 전 매입세액

  preRegistrationTax: Form22MissingDetails;

  // ⑧ 금·구리 스크랩 거래계좌 미사용 관련 매입세액

  goldCopperScrapAccountUnused: Form22MissingDetails;

  // ⑨ 합계

  section2Total: Form22MissingDetails;

  /* [3] 공통매입세액 안분 계산 명세 (⑩ ~ ⑭) */

  commonTaxAllocationItems: Array<Form22CommonTaxAllocationItem>;

  // [3] 합계 행

  commonTaxAllocationTotal: Form22CommonTaxAllocationItem;

  /* [4] 공통매입세액의 정산 명세 (⑮ ~ ⑲) */

  commonTaxSettlementItems: Array<CommonTaxSettlementItem>;

  // [4] 합계 행

  commonTaxSettlementTotal: CommonTaxSettlementItem;

  /* [5] 납부세액 또는 환급세액 재계산 명세 (⑳ ~ ㉓) */

  taxRecalculationItems: Array<TaxRecalculationItem>;

  taxRecalculationTotal: TaxRecalculationItem;
};

export type Form22InputData = FormInputData<Form22Data>;
