import { Form15Data } from '@/components/taxDocument/template/Form15/types';

export const mockForm15Constants: Form15Data = {
  /* 1. 신고인 인적사항 (① ~ ④) */

  companyName: '', // ① 상호(법인명)

  bizNumber: '', // ② 사업자등록번호

  bizType: '', // ③ 업태

  bizItem: '', // ④ 종목

  /* 2. 면세농산물등 매입가액 합계 (⑤ ~ ⑬) */

  // ⑩ 합계 행

  summaryTotalSellerCount: 0, // ⑤ 매입처 수 (합계)

  summaryTotalCount: 0, // ⑥ 건수 (합계)

  summaryTotalAmt: 0, // ⑦ 매입가액 (합계)

  summaryTotalDedRate: '', // ⑧ 공제율 (합계)

  summaryTotalTaxAmt: 0, // ⑨ 의제매입세액 (합계)

  // ⑪ 계산서 수취분

  invoiceSellerCount: 0, // ⑤ 매입처 수

  invoiceCount: 0, // ⑥ 건수

  invoiceAmt: 0, // ⑦ 매입가액

  invoiceDedRate: '', // ⑧ 공제율

  invoiceTaxAmt: 0, // ⑨ 의제매입세액

  // ⑫ 신용카드 등 수취분

  cardSellerCount: 0, // ⑤ 매입처 수

  cardCount: 0, // ⑥ 건수

  cardAmt: 0, // ⑦ 매입가액

  cardDedRate: '', // ⑧ 공제율

  cardTaxAmt: 0, // ⑨ 의제매입세액

  // ⑬ 농어민 등으로부터의 매입분

  farmerSellerCount: 0, // ⑤ 매입처 수

  farmerCount: 0, // ⑥ 건수

  farmerAmt: 0, // ⑦ 매입가액

  farmerDedRate: '', // ⑧ 공제율

  farmerTaxAmt: 0, // ⑨ 의제매입세액

  /* 3. 면세농산물등 의제매입세액 관련 신고내용 (⑭ ~ ㉖) - 일반 업종용 */

  // 가. 과세표준 및 공제 가능한 금액

  baseTotalAmt: 0, // ⑭ 과세표준 합계

  basePlannedAmt: 0, // ⑮ 과세표준 예정분

  baseFixedAmt: 0, // ⑯ 과세표준 확정분

  limitRate: '', // ⑰ 한도율

  limitAmt: 0, // ⑱ 한도액

  currentPurchaseAmt: 0, // ⑲ 당기 매입액

  deductibleTargetAmt: 0, // ⑳ 공제대상금액

  // 나. 과세기간 공제할 세액

  deductionRate: '', // ㉑ 공제율

  deductibleTaxAmt: 0, // ㉒ 공제대상세액

  preDeductedTotal: 0, // ㉓ 이미 공제받은 세액 합계

  preDeductedPlanned: 0, // ㉔ 이미 공제받은 세액 예정 신고분

  preDeductedEarly: 0, // ㉕ 이미 공제받은 세액 월별 조기분

  finalDeductibleTax: 0, // ㉖ 공제(납부)할 세액

  /* 4. 매입시기 집중 제조업 관련 신고내용 (㉗ ~ ㊸) - 제조업 특례용 */

  // 가. 과세표준 및 공제 가능한 금액

  manufBaseTotal: 10, // ㉗ 과세표준 합계

  manufBaseTerm1: 20, // ㉘ 과세표준 제1기

  manufBaseTerm2: 30, // ㉙ 과세표준 제2기

  manufLimitRate: '', // ㉚ 한도율

  manufLimitAmt: 0, // ㉛ 한도액

  manufPurchaseTotal: 0, // ㉜ 매입액 합계

  manufPurchaseTerm1: 0, // ㉝ 매입액 제1기

  manufPurchaseTerm2: 0, // ㉞ 매입액 제2기

  manufTargetAmt: 0, // ㉟ 공제대상금액

  // 나. 제2기 과세기간 공제할 세액

  manufDeductionRate: '', // ㊱ 공제율

  manufDeductibleTaxAmt: 0, // ㊲ 공제대상세액

  manufPreDedTotal: 0, // ㊳ 이미 공제받은 세액 총 합계

  manufPreDedTerm1: 0, // ㊴ 이미 공제받은 세액 제1기

  manufPreDedTerm2Total: 0, // ㊵ 이미 공제받은 세액 제2기 합계

  manufPreDedTerm2Planned: 0, // ㊶ 이미 공제받은 세액 제2기 예정 신고분

  manufPreDedTerm2Early: 0, // ㊷ 이미 공제받은 세액 제2기 월별 조기분

  manufFinalDeductibleTax: 0, // ㊸ 공제(납부)할 세액

  /* 5. 농어민 등으로부터의 매입분 명세 (㊹ ~ ㊽) */

  // [추가] 리스트 상단 '합계' 행 데이터

  farmerPurchaseTotalCount: 0, // ㊺ 건수 (합계)

  farmerPurchaseTotalItemName: '', // ㊻ 품명 (합계)

  farmerPurchaseTotalQuantity: 0, // ㊼ 수량 (합계)

  farmerPurchaseTotalAmt: 0, // ㊽ 매입가액 (합계)

  // 개별 상세 리스트

  farmerPurchaseItems: [
    {
      sellerName: '', // ㊹ 성명

      sellerResNumber: '', // ㊹ 주민등록번호

      itemCount: 0, // ㊺ 건수

      itemName: '', // ㊻ 품명

      quantity: 0, // ㊼ 수량

      purchasePrice: 0, // ㊽ 매입가액
    },
  ],

  /* 하단 작성일 및 신고인 */

  writeYear: '2025', // 년

  writeMonth: '12', // 월

  writeDay: '31', // 일

  submitterName: '', // 신고인 (서명 또는 인) 옆 이름
};
