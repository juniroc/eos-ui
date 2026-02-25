import {
  Form16Data,
  OtherCreditCardItem,
} from '@/components/taxDocument/template/Form16/type';

export const baseOtherCreditCardItem: OtherCreditCardItem = {
  cardMemberNumber: '', // ⑨ 카드회원번호

  supplierBizNumber: '', // ⑩ 공급자(가맹점) 사업자등록번호

  // ⑪ 그 밖의 신용카드 등 거래명세 합계

  transactionCount: 0, // 거래건수

  supplyPrice: 0, // 공급가액

  taxAmount: 0, // 세액
};

export const baseForm16Data: Form16Data = {
  /* [헤더] 과세기간 및 귀속 정보 */

  attributionYear: '', // ____년

  attributionTerm: '', // ____기

  taxPeriodStartMonth: '', // ( __월 ...

  taxPeriodStartDay: '', // ... __일 ~

  taxPeriodEndMonth: '', // ... __월 ...

  taxPeriodEndDay: '', // ... __일 )

  /* 1. 제출자 인적사항 (① ~ ③) */

  companyName: '', // ① 상호(법인명)

  bizNumber: '', // ② 사업자등록번호

  repName: '', // ③ 성명(대표자)

  /* 2. 신용카드 등 매입명세 합계 (④ ~ ⑧) - 고정된 행에 대한 건수, 금액, 세액 입력 */

  // ④ 합계

  totalTransactionCount: 0, // 거래건수 (합계)

  totalSupplyPrice: 0, // 공급가액 (합계)

  totalTaxAmount: 0, // 세액 (합계)

  // ⑤ 현금영수증

  cashReceiptCount: 0, // 거래건수

  cashReceiptSupply: 0, // 공급가액

  cashReceiptTax: 0, // 세액

  // ⑥ 화물운전자복지카드

  freightCardCount: 0, // 거래건수

  freightCardSupply: 0, // 공급가액

  freightCardTax: 0, // 세액

  // ⑦ 사업용 신용카드

  bizCreditCardCount: 0, // 거래건수

  bizCreditCardSupply: 0, // 공급가액

  bizCreditCardTax: 0, // 세액

  // ⑧ 그 밖의 신용카드 등

  otherCreditCardCount: 0, // 거래건수

  otherCreditCardSupply: 0, // 공급가액

  otherCreditCardTax: 0, // 세액

  /* 3. 그 밖의 신용카드 등 수령금액 합계 명세 (⑨ ~ ⑪)

                     - '⑧ 그 밖의 신용카드 등'에 대한 상세 내역 리스트

                     - 일련번호는 자동 생성이므로 제외 */

  otherCreditCardItems: [baseOtherCreditCardItem, baseOtherCreditCardItem],
};

export const FORM16_1_MAX_OTHER_CREDIT_CARD_ITEM_LENGTH = 15;
export const FORM16_2_MAX_OTHER_CREDIT_CARD_ITEM_LENGTH = 26;
