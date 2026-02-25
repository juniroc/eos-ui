import { Form15Data } from '@/components/taxDocument/template/Form15/types';

export const mockForm15Constants: Form15Data = {
  /* 1. 신고인 인적사항 (① ~ ④) */

  companyName: '상호(법인명)', // ① 상호(법인명)

  bizNumber: '사업자등록번호', // ② 사업자등록번호

  bizType: '업태', // ③ 업태

  bizItem: '종목', // ④ 종목

  /* 2. 면세농산물등 매입가액 합계 (⑤ ~ ⑬) */

  // ⑩ 합계 행

  summaryTotalSellerCount: 5, // ⑤ 매입처 수 (합계)

  summaryTotalCount: 6, // ⑥ 건수 (합계)

  summaryTotalAmt: 7, // ⑦ 매입가액 (합계)

  summaryTotalDedRate: '공제율', // ⑧ 공제율 (합계)

  summaryTotalTaxAmt: 9, // ⑨ 의제매입세액 (합계)

  // ⑪ 계산서 수취분

  invoiceSellerCount: 5, // ⑤ 매입처 수

  invoiceCount: 6, // ⑥ 건수

  invoiceAmt: 7, // ⑦ 매입가액

  invoiceDedRate: '공제율', // ⑧ 공제율

  invoiceTaxAmt: 9, // ⑨ 의제매입세액

  // ⑫ 신용카드 등 수취분

  cardSellerCount: 5, // ⑤ 매입처 수

  cardCount: 6, // ⑥ 건수

  cardAmt: 7, // ⑦ 매입가액

  cardDedRate: '공제율', // ⑧ 공제율

  cardTaxAmt: 9, // ⑨ 의제매입세액

  // ⑬ 농어민 등으로부터의 매입분

  farmerSellerCount: 5, // ⑤ 매입처 수

  farmerCount: 6, // ⑥ 건수

  farmerAmt: 7, // ⑦ 매입가액

  farmerDedRate: '공제율', // ⑧ 공제율

  farmerTaxAmt: 9, // ⑨ 의제매입세액

  /* 3. 면세농산물등 의제매입세액 관련 신고내용 (⑭ ~ ㉖) - 일반 업종용 */

  // 가. 과세표준 및 공제 가능한 금액

  baseTotalAmt: 14, // ⑭ 과세표준 합계

  basePlannedAmt: 15, // ⑮ 과세표준 예정분

  baseFixedAmt: 16, // ⑯ 과세표준 확정분

  limitRate: '한도율', // ⑰ 한도율

  limitAmt: 18, // ⑱ 한도액

  currentPurchaseAmt: 19, // ⑲ 당기 매입액

  deductibleTargetAmt: 20, // ⑳ 공제대상금액

  // 나. 과세기간 공제할 세액

  deductionRate: '공제율', // ㉑ 공제율

  deductibleTaxAmt: 22, // ㉒ 공제대상세액

  preDeductedTotal: 23, // ㉓ 이미 공제받은 세액 합계

  preDeductedPlanned: 24, // ㉔ 이미 공제받은 세액 예정 신고분

  preDeductedEarly: 25, // ㉕ 이미 공제받은 세액 월별 조기분

  finalDeductibleTax: 26, // ㉖ 공제(납부)할 세액

  /* 4. 매입시기 집중 제조업 관련 신고내용 (㉗ ~ ㊸) - 제조업 특례용 */

  // 가. 과세표준 및 공제 가능한 금액

  manufBaseTotal: 27, // ㉗ 과세표준 합계

  manufBaseTerm1: 28, // ㉘ 과세표준 제1기

  manufBaseTerm2: 29, // ㉙ 과세표준 제2기

  manufLimitRate: '한도율', // ㉚ 한도율

  manufLimitAmt: 31, // ㉛ 한도액

  manufPurchaseTotal: 32, // ㉜ 매입액 합계

  manufPurchaseTerm1: 33, // ㉝ 매입액 제1기

  manufPurchaseTerm2: 34, // ㉞ 매입액 제2기

  manufTargetAmt: 35, // ㉟ 공제대상금액

  // 나. 제2기 과세기간 공제할 세액

  manufDeductionRate: '공제율', // ㊱ 공제율

  manufDeductibleTaxAmt: 37, // ㊲ 공제대상세액

  manufPreDedTotal: 38, // ㊳ 이미 공제받은 세액 총 합계

  manufPreDedTerm1: 39, // ㊴ 이미 공제받은 세액 제1기

  manufPreDedTerm2Total: 40, // ㊵ 이미 공제받은 세액 제2기 합계

  manufPreDedTerm2Planned: 41, // ㊶ 이미 공제받은 세액 제2기 예정 신고분

  manufPreDedTerm2Early: 42, // ㊷ 이미 공제받은 세액 제2기 월별 조기분

  manufFinalDeductibleTax: 43, // ㊸ 공제(납부)할 세액

  /* 5. 농어민 등으로부터의 매입분 명세 (㊹ ~ ㊽) */

  // [추가] 리스트 상단 '합계' 행 데이터

  farmerPurchaseTotalCount: 45, // ㊺ 건수 (합계)

  farmerPurchaseTotalItemName: '품명', // ㊻ 품명 (합계)

  farmerPurchaseTotalQuantity: 47, // ㊼ 수량 (합계)

  farmerPurchaseTotalAmt: 48, // ㊽ 매입가액 (합계)

  // 개별 상세 리스트

  farmerPurchaseItems: [
    {
      sellerName: '성명', // ㊹ 성명

      sellerResNumber: '주민등록번호', // ㊹ 주민등록번호

      itemCount: 45, // ㊺ 건수

      itemName: '품명', // ㊻ 품명

      quantity: 47, // ㊼ 수량

      purchasePrice: 48, // ㊽ 매입가액
    },
  ],

  /* 하단 작성일 및 신고인 */

  writeYear: '2026', // 년

  writeMonth: '1', // 월

  writeDay: '26', // 일

  submitterName: '신고인', // 신고인 (서명 또는 인) 옆 이름
};

export const baseFarmerPurchaseItem = {
  sellerName: '테스트', // ㊹ 성명

  sellerResNumber: 'ㅁㄴㅇ', // ㊹ 주민등록번호

  itemCount: 45, // ㊺ 건수

  itemName: 'ㅁㄴㅇ', // ㊻ 품명

  quantity: 47, // ㊼ 수량

  purchasePrice: 48, // ㊽ 매입가액
} as const;
