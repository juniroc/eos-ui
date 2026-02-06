import { FormInputData } from '@/components/taxDocument/template/common/type';

/**

 * [공통] 합계 행 구조 (매출처수, 매수, 공급가액, 세액)

 */

export type SummaryRow = {
  sellerCount: number; // ⑦ 매출처수

  invoiceCount: number; // ⑧ 매수

  supplyPrice: SplitCurrency; // ⑨ 공급가액 (분할 필드)

  tax: SplitCurrency; // ⑩ 세액 (분할 필드)
};

export type Form38Data = {
  /* [헤더] 과세기간 */

  attributionYear: string; // 년

  attributionTerm: string; // 기

  taxPeriodStartMonth: string; // 과세기간 시작 월

  taxPeriodStartDay: string; // 과세기간 시작 일

  taxPeriodEndMonth: string; // 과세기간 종료 월

  taxPeriodEndDay: string; // 과세기간 종료 일

  /* 1. 제출자 인적사항 (1) ~ (6) */

  submitterInfo: {
    bizRegNumber: string; // ① 사업자등록번호

    companyName: string; // ② 상호(법인명)

    representativeName: string; // ③ 성명(대표자)

    address: string; // ④ 사업장 소재지

    // ⑤ 거래기간 (년/월/일 ~ 년/월/일)

    transactionStartYear: string;

    transactionStartMonth: string;

    transactionStartDay: string;

    transactionEndYear: string;

    transactionEndMonth: string;

    transactionEndDay: string;

    // ⑥ 작성일 (년/월/일)

    writingYear: string;

    writingMonth: string;

    writingDay: string;
  };

  /* 2. 매출세금계산서 총합계

     각 행(Row)의 의미가 고정되어 있으므로 명시적인 객체로 구조화합니다. */

  summary: {
    // 합계 행

    grandTotal: SummaryRow;

    // 과세기간 종료일 다음 달 11일까지 전송된 전자세금계산서 발급분

    electronicTaxInvoice: {
      issuedToBizRegNumber: SummaryRow; // 사업자등록번호 발급분

      issuedToResidentRegNumber: SummaryRow; // 주민등록번호 발급분

      subTotal: SummaryRow; // 소계
    };

    // 위 전자세금계산서 외의 발급분 (종이 세금계산서 등)

    nonElectronicTaxInvoice: {
      issuedToBizRegNumber: SummaryRow; // 사업자등록번호 발급분

      issuedToResidentRegNumber: SummaryRow; // 주민등록번호 발급분

      subTotal: SummaryRow; // 소계
    };
  };

  /* 3. 매출처별 명세 (전자세금계산서 외 발급분 상세) (11) ~ (16) */

  detailList: Array<{
    bizRegNumber: string; // ⑫ 사업자등록번호

    companyName: string; // ⑬ 상호(법인명)

    invoiceCount: number; // ⑭ 매수

    supplyPrice: SplitCurrency; // ⑮ 공급가액 (분할 필드)

    tax: SplitCurrency; // ⑯ 세액 (분할 필드)

    remarks?: string; // 비고
  }>;
};

export type Form38InputData = FormInputData<Form38Data>;
