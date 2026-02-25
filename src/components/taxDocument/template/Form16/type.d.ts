import { FormInputData } from '@/components/taxDocument/template/common/type';

export type OtherCreditCardItem = {
  cardMemberNumber: string; // ⑨ 카드회원번호

  supplierBizNumber: string; // ⑩ 공급자(가맹점) 사업자등록번호

  // ⑪ 그 밖의 신용카드 등 거래명세 합계

  transactionCount: number; // 거래건수

  supplyPrice: number; // 공급가액

  taxAmount: number; // 세액
};
export type Form16Data = {
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

  /* 2. 신용카드 등 매입명세 합계 (④ ~ ⑧) - 고정된 행에 대한 건수, 금액, 세액 입력 */

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

           - '⑧ 그 밖의 신용카드 등'에 대한 상세 내역 리스트

           - 일련번호는 자동 생성이므로 제외 */

  otherCreditCardItems: Array<OtherCreditCardItem>;
};

export type Form16HeaderProps = Pick<
  Form16Data,
  | 'attributionYear'
  | 'attributionTerm'
  | 'taxPeriodStartMonth'
  | 'taxPeriodStartDay'
  | 'taxPeriodEndMonth'
  | 'taxPeriodEndDay'
>;

export type Form16_1Props = Form16HeaderProps &
  Pick<
    Form16Data,
    | 'companyName'
    | 'bizNumber'
    | 'repName'
    | 'totalTransactionCount'
    | 'totalSupplyPrice'
    | 'totalTaxAmount'
    | 'cashReceiptCount'
    | 'cashReceiptSupply'
    | 'cashReceiptTax'
    | 'freightCardCount'
    | 'freightCardSupply'
    | 'freightCardTax'
    | 'bizCreditCardCount'
    | 'bizCreditCardSupply'
    | 'bizCreditCardTax'
    | 'otherCreditCardCount'
    | 'otherCreditCardSupply'
    | 'otherCreditCardTax'
    | 'otherCreditCardItems'
  >;

export type Form16_2Props = Form16HeaderProps &
  Pick<Form16Data, 'bizNumber' | 'otherCreditCardItems'>;

export type Form16InputData = FormInputData<Form16Data>;
