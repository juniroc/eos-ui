import { FormInputData } from '@/components/taxDocument/template/common/type';

export type receiptPurchaseItem = {
  // ㉔ 공급자

  supplierName: string; // 성명 또는 상호(기관명)

  supplierIdNumber: string; // 주민등록번호 또는 사업자등록번호

  classificationCode: string; // ㉕ 구분코드 (1:중고자동차, 2:기타)

  count: number; // ㉖ 건수

  itemName: string; // ㉗ 품명

  quantity: number; // ㉘ 수량

  // 중고자동차 전용 항목

  vehicleNumber?: string; // ㉙ 차량번호

  chassisNumber?: string; // ㉚ 차대번호

  acquisitionAmount: number; // ㉛ 취득금액
};

export type Form6901Data = {
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

  /* 2. 재활용폐자원 등 매입 합계 (5) ~ (7)

     [구분] 합계 / 영수증 수취분 / 계산서 수취분 */

  purchaseSummary: {
    // ⑤ 합계

    total: {
      sellerCount: number; // 매입처수

      count: number; // 건수

      acquisitionAmount: number; // 취득금액

      deductionAmount: number; // 매입세액 공제액
    };

    // ⑥ 영수증 수취분

    receiptReceived: {
      sellerCount: number;

      count: number;

      acquisitionAmount: number;

      deductionAmount: number;
    };

    // ⑦ 계산서 수취분

    invoiceReceived: {
      sellerCount: number;

      count: number;

      acquisitionAmount: number;

      deductionAmount: number;
    };
  };

  /* 3. 재활용폐자원 매입세액공제 관련 신고내용 */

  // 가. 과세기간 과세표준 및 공제가능한 금액 등 (8) ~ (16)

  taxBaseAndDeductible: {
    // 매출액

    salesTotal: number; // ⑧ 합계

    salesScheduled: number; // ⑨ 예정분

    salesConfirmed: number; // ⑩ 확정분

    // 대상액 한도계산

    limitRate: string; // ⑪ 한도율

    limitAmount: number; // ⑫ 한도액

    // 당기 매입액

    purchaseTotal: number; // ⑬ 합계

    purchaseTaxInvoice: number; // ⑭ 세금계산서

    purchaseReceipts: number; // ⑮ 영수증 등

    // ⑯ 공제가능한 금액 (= ⑫ - ⑭)

    deductibleAmount: number;
  };

  // 나. 과세기간 공제할 세액 (17) ~ (23)

  deductibleTax: {
    // ⑰ 공제대상금액 (= ⑮와 ⑯ 중 적은 금액)

    deductibleTargetAmount: number;

    // 공제대상세액

    deductionRate: string; // ⑱ 공제율 (예: 3/103)

    deductionTaxAmount: number; // ⑲ 공제대상세액

    // 이미 공제받은 세액

    alreadyDeductedTotal: number; // ⑳ 합계

    alreadyDeductedScheduled: number; // ㉑ 예정신고분

    alreadyDeductedEarly: number; // ㉒ 월별 조기분

    // ㉓ 공제(납부)할 세액 (= ⑲ - ⑳)

    finalDeductibleTax: number;
  };

  /* 4. 영수증 수취분에 대한 매입처 명세 (24) ~ (31) */

  // [리스트 합계 행]

  receiptPurchaseItemsTotal: {
    count: number; // ㉖ 건수 합계

    quantity: number; // ㉘ 수량 합계

    acquisitionAmount: number; // ㉛ 취득금액 합계
  };

  // [상세 리스트]

  receiptPurchaseItems: Array<receiptPurchaseItem>;

  /* [푸터] 신고일 및 신고인 */

  submissionYear: string; // 년

  submissionMonth: string; // 월

  submissionDay: string; // 일

  applicantName: string; // 신고인 (서명 또는 인)
};

export type Form6901InputData = FormInputData<Form6901Data>;
