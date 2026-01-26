export type BusinessInfo = {
  companyName: string; // ① 상호(법인명)
  bizNumber: string; // ② 사업자등록번호
  bizType: string; // ③ 업태\
  bizItem: string; // ④ 종목
};

export type TaxFreePurchaseAmount = {
  // ⑩ 합계 행
  summaryTotalSellerCount: number; // ⑤ 매입처 수 (합계)
  summaryTotalCount: number; // ⑥ 건수 (합계)
  summaryTotalAmt: number; // ⑦ 매입가액 (합계)
  summaryTotalDedRate: string; // ⑧ 공제율 (합계)
  summaryTotalTaxAmt: number; // ⑨ 의제매입세액 (합계)

  // ⑪ 계산서 수취분

  invoiceSellerCount: number; // ⑤ 매입처 수
  invoiceCount: number; // ⑥ 건수
  invoiceAmt: number; // ⑦ 매입가액
  invoiceDedRate: string; // ⑧ 공제율
  invoiceTaxAmt: number; // ⑨ 의제매입세액

  // ⑫ 신용카드 등 수취분

  cardSellerCount: number; // ⑤ 매입처 수
  cardCount: number; // ⑥ 건수
  cardAmt: number; // ⑦ 매입가액
  cardDedRate: string; // ⑧ 공제율
  cardTaxAmt: number; // ⑨ 의제매입세액

  // ⑬ 농어민 등으로부터의 매입분

  farmerSellerCount: number; // ⑤ 매입처 수
  farmerCount: number; // ⑥ 건수
  farmerAmt: number; // ⑦ 매입가액
  farmerDedRate: string; // ⑧ 공제율
  farmerTaxAmt: number; // ⑨ 의제매입세액
};

export type Form15Data = {
  /* 1. 신고인 인적사항 (① ~ ④) */

  companyName: string; // ① 상호(법인명)

  bizNumber: string; // ② 사업자등록번호

  bizType: string; // ③ 업태

  bizItem: string; // ④ 종목

  /* 2. 면세농산물등 매입가액 합계 (⑤ ~ ⑬) */

  // ⑩ 합계 행

  summaryTotalSellerCount: number; // ⑤ 매입처 수 (합계)

  summaryTotalCount: number; // ⑥ 건수 (합계)

  summaryTotalAmt: number; // ⑦ 매입가액 (합계)

  summaryTotalDedRate: string; // ⑧ 공제율 (합계)

  summaryTotalTaxAmt: number; // ⑨ 의제매입세액 (합계)

  // ⑪ 계산서 수취분

  invoiceSellerCount: number; // ⑤ 매입처 수

  invoiceCount: number; // ⑥ 건수

  invoiceAmt: number; // ⑦ 매입가액

  invoiceDedRate: string; // ⑧ 공제율

  invoiceTaxAmt: number; // ⑨ 의제매입세액

  // ⑫ 신용카드 등 수취분

  cardSellerCount: number; // ⑤ 매입처 수

  cardCount: number; // ⑥ 건수

  cardAmt: number; // ⑦ 매입가액

  cardDedRate: string; // ⑧ 공제율

  cardTaxAmt: number; // ⑨ 의제매입세액

  // ⑬ 농어민 등으로부터의 매입분

  farmerSellerCount: number; // ⑤ 매입처 수

  farmerCount: number; // ⑥ 건수

  farmerAmt: number; // ⑦ 매입가액

  farmerDedRate: string; // ⑧ 공제율

  farmerTaxAmt: number; // ⑨ 의제매입세액

  /* 3. 면세농산물등 의제매입세액 관련 신고내용 (⑭ ~ ㉖) - 일반 업종용 */

  // 가. 과세표준 및 공제 가능한 금액

  baseTotalAmt: number; // ⑭ 과세표준 합계

  basePlannedAmt: number; // ⑮ 과세표준 예정분

  baseFixedAmt: number; // ⑯ 과세표준 확정분

  limitRate: string; // ⑰ 한도율

  limitAmt: number; // ⑱ 한도액

  currentPurchaseAmt: number; // ⑲ 당기 매입액

  deductibleTargetAmt: number; // ⑳ 공제대상금액

  // 나. 과세기간 공제할 세액

  deductionRate: string; // ㉑ 공제율

  deductibleTaxAmt: number; // ㉒ 공제대상세액

  preDeductedTotal: number; // ㉓ 이미 공제받은 세액 합계

  preDeductedPlanned: number; // ㉔ 이미 공제받은 세액 예정 신고분

  preDeductedEarly: number; // ㉕ 이미 공제받은 세액 월별 조기분

  finalDeductibleTax: number; // ㉖ 공제(납부)할 세액

  /* 4. 매입시기 집중 제조업 관련 신고내용 (㉗ ~ ㊸) - 제조업 특례용 */

  // 가. 과세표준 및 공제 가능한 금액

  manufBaseTotal: number; // ㉗ 과세표준 합계

  manufBaseTerm1: number; // ㉘ 과세표준 제1기

  manufBaseTerm2: number; // ㉙ 과세표준 제2기

  manufLimitRate: string; // ㉚ 한도율

  manufLimitAmt: number; // ㉛ 한도액

  manufPurchaseTotal: number; // ㉜ 매입액 합계

  manufPurchaseTerm1: number; // ㉝ 매입액 제1기

  manufPurchaseTerm2: number; // ㉞ 매입액 제2기

  manufTargetAmt: number; // ㉟ 공제대상금액

  // 나. 제2기 과세기간 공제할 세액

  manufDeductionRate: string; // ㊱ 공제율

  manufDeductibleTaxAmt: number; // ㊲ 공제대상세액

  manufPreDedTotal: number; // ㊳ 이미 공제받은 세액 총 합계

  manufPreDedTerm1: number; // ㊴ 이미 공제받은 세액 제1기

  manufPreDedTerm2Total: number; // ㊵ 이미 공제받은 세액 제2기 합계

  manufPreDedTerm2Planned: number; // ㊶ 이미 공제받은 세액 제2기 예정 신고분

  manufPreDedTerm2Early: number; // ㊷ 이미 공제받은 세액 제2기 월별 조기분

  manufFinalDeductibleTax: number; // ㊸ 공제(납부)할 세액

  /* 5. 농어민 등으로부터의 매입분 명세 (㊹ ~ ㊽) */

  // [추가] 리스트 상단 '합계' 행 데이터

  farmerPurchaseTotalCount: number; // ㊺ 건수 (합계)

  farmerPurchaseTotalItemName: string; // ㊻ 품명 (합계)

  farmerPurchaseTotalQuantity: number; // ㊼ 수량 (합계)

  farmerPurchaseTotalAmt: number; // ㊽ 매입가액 (합계)

  // 개별 상세 리스트

  farmerPurchaseItems: Array<{
    sellerName: string; // ㊹ 성명

    sellerResNumber: string; // ㊹ 주민등록번호

    itemCount: number; // ㊺ 건수

    itemName: string; // ㊻ 품명

    quantity: number; // ㊼ 수량

    purchasePrice: number; // ㊽ 매입가액
  }>;

  /* 하단 작성일 및 신고인 */

  writeYear: string; // 년

  writeMonth: string; // 월

  writeDay: string; // 일

  submitterName: string; // 신고인 (서명 또는 인) 옆 이름
};
