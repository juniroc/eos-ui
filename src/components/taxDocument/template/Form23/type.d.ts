export type PaymentMethodColumns = {
  totalAmount: number; // ⑤ 합계

  creditCardAmount: number; // ⑥ 신용ㆍ직불ㆍ기명식 선불카드

  cashReceiptAmount: number; // ⑦ 현금영수증

  electronicPaymentAmount: number; // ⑧ 직불전자지급수단 및 기명식선불전자지급수단
};

export type Form23Data = {
  /* [헤더] 과세기간 및 귀속 정보 */

  attributionYear: string; // ____년

  attributionTerm: string; // ____기

  periodStartMonth: string; // __월

  periodStartDay: string; // __일 ~

  periodEndMonth: string; // __월

  periodEndDay: string; // __일

  /* [1] 제출자 인적사항 (① ~ ④) */

  bizName: string; // ① 상호(법인명)

  repName: string; // ② 성명(대표자)

  bizAddress: string; // ③ 사업장 소재지

  bizNumber: string; // ④ 사업자등록번호

  /* [2] 신용카드매출전표등 발행금액 현황 (⑤ ~ ⑧)

     - 각 구분(행)별로 4가지 결제수단(열) 금액을 저장 */

  grandTotalStats: PaymentMethodColumns; // 합계 행 (Total Row)

  taxableSalesStats: PaymentMethodColumns; // 과세 매출분 행

  taxFreeSalesStats: PaymentMethodColumns; // 면세 매출분 행

  serviceChargeStats: PaymentMethodColumns; // 봉사료 행

  /* [3] 신용카드매출전표등 발행금액(⑤ 합계) 중 세금계산서(계산서) 발급명세

     - 중복 발행된 금액을 기재하는 란 (⑨ ~ ⑩) */

  taxInvoiceIssuedAmount: number; // ⑨ 세금계산서 발급금액

  invoiceIssuedAmount: number; // ⑩ 계산서 발급금액
};
