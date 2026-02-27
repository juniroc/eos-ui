import { FormInputData } from '@/components/taxDocument/template/common/type';

export type PaymentItem = {
  issuerName: string; // ⑧ 전자화폐 발행회사

  buyerName: string; // ⑨ 구매자

  paymentDate: string; // ⑩ 결제일 (YYYY-MM-DD)

  paymentAmount: number; // ⑪ 전자결제금액

  processingNumber: string; // ⑫ 결제처리번호

  buyerEmail?: string; // ⑬ 기타 (구매자의 전자우편)
};

export type Form24Data = {
  /* [헤더] 과세기간 및 귀속 정보 */

  attributionYear: string; // ____년

  attributionTerm: string; // ____기

  periodStartMonth: string; // __월

  periodStartDay: string; // __일 ~

  periodEndMonth: string; // __월

  periodEndDay: string; // __일

  /* [1] 제출자 인적사항 (① ~ ⑥) */

  bizName: string; // ① 상호

  repName: string; // ② 성명

  bizNumber: string; // ③ 사업자등록번호

  bizAddress: string; // ④ 사업장 소재지

  // ⑤ 업태 종목 (서식상 한 칸이지만 DB 저장을 위해 분리 추천)

  bizType: string; // ⑤ 업태

  bizItem: string; // ⑤ 종목

  merchantNumber: string; // ⑥ 가맹점번호

  /* [2] 전자화폐결제명세 (⑦ ~ ⑬) */

  // 합계 행 (Total Row)

  totalPaymentAmount: number; // ⑪ 전자결제금액 (합계)

  // 개별 상세 리스트

  // ⑦ 일련번호는 자동 부여 항목이므로 제외

  paymentItems: Array<PaymentItem>;
};

export type Form24InputData = FormInputData<Form24Data>;
