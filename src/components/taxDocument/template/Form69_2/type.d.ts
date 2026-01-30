export type ReceiptPurchaseItem = {
  // ⑧ 공급자

  supplierName: string; // 성명 또는 상호(기관명)

  supplierIdNumber: string; // 주민등록번호 또는 사업자등록번호

  count: number; // ⑨ 건수

  itemName: string; // ⑩ 품명

  quantity: number; // ⑪ 수량

  acquisitionAmount: number; // ⑫ 취득금액

  deemedPurchaseTax: number; // ⑬ 의제매입세액
};

export type Form6902Data = {
  /* [헤더] 귀속 연도 및 과세기간

     서식 상단: ( 년 기 ) */

  attributionYear: string; // 년

  attributionTerm: string; // 기

  /* 1. 신고자 인적사항 (1) ~ (4) */

  submitterInfo: {
    companyName: string; // ① 성명(법인명)

    bizRegNumber: string; // ② 사업자등록번호

    bizType: string; // ③ 업태

    bizItem: string; // ④ 종목
  };

  /* 2. 스크랩등 매입 합계 (5) ~ (7)

     [구분] 합계 / 영수증 수취분 / 계산서 수취분 */

  purchaseSummary: {
    // ⑤ 합계

    total: {
      sellerCount: number; // 매입처 수

      count: number; // 건수

      quantity: number; // 수량

      acquisitionAmount: number; // 취득금액

      deemedPurchaseTax: number; // 의제매입세액
    };

    // ⑥ 영수증 수취분

    receiptReceived: {
      sellerCount: number;

      count: number;

      quantity: number;

      acquisitionAmount: number;

      deemedPurchaseTax: number;
    };

    // ⑦ 계산서 수취분

    invoiceReceived: {
      sellerCount: number;

      count: number;

      quantity: number;

      acquisitionAmount: number;

      deemedPurchaseTax: number;
    };
  };

  /* 3. 영수증 수취분에 대한 매입처 명세 (8) ~ (13)

     일련번호는 제외 */

  receiptPurchaseItems: Array<ReceiptPurchaseItem>;

  /* [푸터] 신고일 및 신고인 */

  submissionYear: string; // 년

  submissionMonth: string; // 월

  submissionDay: string; // 일

  applicantName: string; // 신고인 (서명 또는 인)
};
