export type MoneyGrid = {
  trillion: string; // [조] 단위 칸 (입력값)

  tenBillion: string; // [십억] 단위 칸 (입력값)

  million: string; // [백만] 단위 칸 (입력값)

  thousand: string; // [천] 단위 칸 (입력값)

  one: string; // [일] 단위 칸 (입력값)
};

export type Item = {
  sellerBizNumber: string; // ⑫ 사업자등록번호

  sellerCompanyName: string; // ⑬ 상호(법인명)

  invoiceCount: number; // ⑭ 매수 (단일칸)

  supplyPrice: MoneyGrid; // ⑮ 공급가액 (5칸 분리)

  taxAmount: MoneyGrid; // ⑯ 세액 (5칸 분리)

  remark?: string; // 비고
};

export type Form14Data = {
  /* [헤더] 과세기간 및 귀속 정보 */

  attributionYear: string; // ____년

  attributionTerm: string; // ____기

  taxPeriodStartMonth: string; // ( __월 ...

  taxPeriodStartDay: string; // ... __일 ~

  taxPeriodEndMonth: string; // ... __월 ...

  taxPeriodEndDay: string; // ... __일 )

  /* 1. 제출자 인적사항 (① ~ ⑥) */

  submitterBizNumber: string; // ① 사업자등록번호

  submitterCompanyName: string; // ② 상호(법인명)

  submitterRepName: string; // ③ 성명(대표자)

  submitterAddress: string; // ④ 사업장 소재지

  /* ⑤ 거래기간 (년/월/일 분리) */

  transactionStartYear: string; // ⑤ 거래기간 시작 년

  transactionStartMonth: string; // ⑤ 거래기간 시작 월

  transactionStartDay: string; // ⑤ 거래기간 시작 일

  transactionEndYear: string; // ⑤ 거래기간 종료 년

  transactionEndMonth: string; // ⑤ 거래기간 종료 월

  transactionEndDay: string; // ⑤ 거래기간 종료 일

  /* ⑥ 작성일 (년/월/일 분리) */

  writeYear: string; // ⑥ 작성 년

  writeMonth: string; // ⑥ 작성 월

  writeDay: string; // ⑥ 작성 일

  /* 2. 매입자발행세금계산서 총합계 (⑦ ~ ⑩) */

  totalSellerCount: number; // ⑦ 매입처수 (단일칸)

  totalInvoiceCount: number; // ⑧ 매수 (단일칸)

  totalSupplyPrice: MoneyGrid; // ⑨ 공급가액 (5칸 분리)

  totalTaxAmount: MoneyGrid; // ⑩ 세액 (5칸 분리)

  /* 3. 매입처별 명세 (⑫ ~ ⑯ + 비고) */

  items: Array<Item>;
};
