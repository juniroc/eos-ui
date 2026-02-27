import { FormInputData } from '@/components/taxDocument/template/common/type';

export type Form41DetailItem = {
  type: string; // ⑬ 구분 (예: "내국신용장" 또는 "구매확인서")

  documentNumber: string; // ⑭ 서류번호

  issueDate: string; // ⑮ 발급일 (YYYY-MM-DD)

  buyerBizRegNumber: string; // ⑯ 공급받는 자의 사업자등록번호

  amount: number; // ⑰ 금액(원)

  remarks?: string; // ⑱ 비고
};

export type Form41Data = {
  /* [헤더] 귀속 연도 및 과세기간 */

  attributionYear: string; // 년

  attributionTerm: string; // 기

  taxPeriodStartMonth: string; // 과세기간 시작 월

  taxPeriodStartDay: string; // 과세기간 시작 일

  taxPeriodEndMonth: string; // 과세기간 종료 월

  taxPeriodEndDay: string; // 과세기간 종료 일

  /* 1. 제출자 인적사항 (1) ~ (6) */

  submitterInfo: {
    companyName: string; // ① 상호(법인명)

    bizRegNumber: string; // ② 사업자등록번호

    representativeName: string; // ③ 성명(대표자)

    address: string; // ④ 사업장 소재지

    bizType: string; // ⑤ 업태

    bizItem: string; // ⑥ 종목
  };

  /* [날짜 정보] (7) ~ (8) */

  // ⑦ 거래기간 (년 월 일 ~ 월 일)

  transactionPeriod: {
    year: string; // 년

    startMonth: string; // 시작 월

    startDay: string; // 시작 일

    endMonth: string; // 종료 월

    endDay: string; // 종료 일
  };

  // ⑧ 작성일 (년 월 일)

  writingDate: string; // 문자열 하나로 관리 (예: "2024-01-01")

  /* 2. 공급실적 합계 (9) ~ (11) */

  summary: {
    // ⑨ 합계 (=⑩+⑪)

    grandTotal: {
      count: number; // 건수

      amount: number; // 금액(원)

      remarks?: string; // 비고
    };

    // ⑩ 내국신용장

    localLC: {
      count: number;

      amount: number;

      remarks?: string;
    };

    // ⑪ 구매확인서

    purchaseConfirmation: {
      count: number;

      amount: number;

      remarks?: string;
    };
  };

  /* 3. 공급실적 명세 (12) ~ (18)

     ⑫ 번호는 제외 */

  detailList: Array<Form41DetailItem>;
};

export type Form41InputData = FormInputData<Form41Data>;
