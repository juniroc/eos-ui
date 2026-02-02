export type CashSalesDetailItem = {
  // ⑧ 의뢰인

  clientResOrBizNumber: string; // 주민등록번호 (또는 사업자등록번호)

  clientName: string; // 성명 (또는 상호)

  transactionDate: string; // ⑨ 거래일 (YYYY-MM-DD)

  // ⑩ 거래금액

  totalAmount: number; // 공급대가 (공급가액 + 세액)

  supplyValue: number; // 공급가액

  taxAmount: number; // 부가가치세
};

export type Form26Data = {
  /* [헤더] 과세기간 및 귀속 정보 */

  attributionYear: string; // ____년

  attributionTerm: string; // ____기

  periodStartMonth: string; // __월

  periodStartDay: string; // __일 ~

  periodEndMonth: string; // __월

  periodEndDay: string; // __일

  /* [1] 제출자 인적사항 (① ~ ③) */

  bizName: string; // ① 상호(법인명)

  repName: string; // ② 성명(대표자)

  bizNumber: string; // ③ 사업자등록번호

  /* [2] 공급가액 (④ ~ ⑥) - 건수(Count)와 금액(Amount)으로 구성된 요약 정보 */

  // ④ 합계 (⑤ + ⑥)

  totalStats: { count: number; amount: number }; // 건수, 금액

  // ⑤ 현금매출 (순수 현금매출분)

  cashSalesStats: { count: number; amount: number }; // 건수, 금액

  // ⑥ 세금계산서 (현금매출 중 세금계산서 발행분)

  taxInvoiceStats: { count: number; amount: number }; // 건수, 금액

  /* [3] 현금매출 명세 (⑦ ~ ⑩) - 상세 내역 리스트 및 상단 합계 */

  // [합계 행] (리스트 상단) - ⑩ 거래금액에 대한 총합

  cashSalesDetailsTotal: {
    totalAmount: number; // 공급대가 합계

    supplyValue: number; // 공급가액 합계

    taxAmount: number; // 부가가치세 합계
  };

  // [개별 상세 리스트] - ⑦ 일련번호는 자동 부여

  cashSalesDetailItems: Array<CashSalesDetailItem>;
};
