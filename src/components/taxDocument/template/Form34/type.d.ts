import { FormInputData } from '@/components/taxDocument/template/common/type';

export type WorkplaceItem = {
  // 1. 기본 정보

  location: string; // 소재지

  // [수정] 사업자등록번호 2줄 입력 반영

  // 하나의 Item(사업장) 내에 상단/하단 라인이 구분되어 있는 경우를 대비

  bizRegNumberRow1: string; // 사업자등록번호 (상단)

  bizRegNumberRow2: string; // 사업자등록번호 (하단)

  // 2. 매출세액 (Sales Tax) - 상단(과세) / 하단(영세율)

  salesTaxable: {
    // 구분: 과세

    taxBase: number; // 과세표준

    taxRate: string; // 세율 (분자 값)

    taxAmount: number; // 세액
  };

  salesZeroRate: {
    // 구분: 영세율

    taxBase: number; // 과세표준

    taxRate: string; // 세율 (분자 값)

    taxAmount: number; // 세액
  };

  // 3. 매입세액 (Purchase Tax) - 상단(과세) / 하단(의제등)

  purchaseTaxable: {
    // 구분: 과세

    taxBase: number; // 과세표준

    taxRate: string; // 세율

    taxAmount: number; // 세액
  };

  purchaseDeemed: {
    // 구분: 의제등

    taxBase: number; // 과세표준

    taxRate: string; // 세율

    taxAmount: number; // 세액
  };

  // 4. 세액 조정 및 결과

  penaltyTax: number; // 가산세

  deductionTax: number; // 공제세액

  payableOrRefundableTax: number; // 납부세액(환급세액)

  // 5. 내부거래 (판매목적)

  internalTransaction: {
    outflowAmount: number; // 반출액

    inflowAmount: number; // 반입액
  };

  // 6. 비고

  remarks?: string;
};

export type Form34Data = {
  /* [헤더] 신고기간 */

  reportingYear: string; // 년

  reportingTerm: string; // 기

  taxPeriodStartMonth: string; // 과세기간 시작 월

  taxPeriodStartDay: string; // 과세기간 시작 일

  taxPeriodEndMonth: string; // 과세기간 종료 월

  taxPeriodEndDay: string; // 과세기간 종료 일

  /* [리스트] 사업장별 명세 */

  workplaceItems: Array<WorkplaceItem>;

  /* [합계] */

  total: {
    // 매출세액 합계

    salesTaxableTotal: {
      taxBase: number;

      taxRate: string; // 세율

      taxAmount: number;
    };

    salesZeroRateTotal: {
      taxBase: number;

      taxAmount: number;
    };

    // 매입세액 합계

    purchaseTaxableTotal: {
      taxBase: number;

      taxRate: string; // 세율

      taxAmount: number;
    };

    purchaseDeemedTotal: {
      taxBase: number;

      taxAmount: number;
    };

    // 기타 합계

    penaltyTaxTotal: number; // 가산세 합계

    deductionTaxTotal: number; // 공제세액 합계

    payableOrRefundableTaxTotal: number; // 납부(환급)세액 합계

    // 내부거래 합계

    internalTransactionTotal: {
      outflowAmount: number;

      inflowAmount: number;
    };

    // [추가] 합계 비고

    remarks?: string;
  };
};

export type Form34InputData = FormInputData<Form34Data>;
