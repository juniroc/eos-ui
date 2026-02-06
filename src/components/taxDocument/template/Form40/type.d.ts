import { FormInputData } from '@/components/taxDocument/template/common/type';

export type ExportItem = {
  exportDeclarationNumber: string; // ⑬ 수출신고번호

  shippingDate: string; // ⑭ 선(기)적일자

  currencyCode: string; // ⑮ 통화코드

  exchangeRate: string; // ⑯ 환율

  foreignAmount: number; // ⑰ 외화 금액

  wonAmount: number; // ⑱ 원화 금액
};

export type Form40Data = {
  /* [헤더] 귀속 연도 및 과세기간 */

  attributionYear: string; // 년

  attributionTerm: string; // 기

  taxPeriodStartMonth: string; // 과세기간 시작 월

  taxPeriodStartDay: string; // 과세기간 시작 일

  taxPeriodEndMonth: string; // 과세기간 종료 월

  taxPeriodEndDay: string; // 과세기간 종료 일

  /* 1. 제출자 인적사항 */

  submitterInfo: {
    bizRegNumber: string; // ① 사업자등록번호

    companyName: string; // ② 상호(법인명)

    representativeName: string; // ③ 성명(대표자)

    address: string; // ④ 사업장 소재지

    bizType: string; // ⑤ 업태

    bizItem: string; // ⑥ 종목
  };

  /* [날짜 정보] */

  // ⑦ 거래기간 (년/월/일 ~ 월/일)

  // 서식상 년도는 앞에 하나만 존재하므로 startYear 대신 year로 정의하고 endYear 삭제

  transactionPeriod: {
    year: string; // 년

    startMonth: string; // 시작 월

    startDay: string; // 시작 일

    endMonth: string; // 종료 월

    endDay: string; // 종료 일
  };

  // ⑧ 작성일자

  writingDate: string; // 문자열 하나로 관리 (예: "2024-01-01")

  /* [요약] 구분별 실적 합계 */

  summary: {
    // ⑨ 합계 (⑩ + ⑪)

    grandTotal: {
      count: number; // 건수

      foreignAmount: number; // 외화금액

      wonAmount: number; // 원화금액

      remarks?: string; // 비고
    };

    // ⑩ 수출재화

    exportGoodsTotal: {
      count: number;

      foreignAmount: number;

      wonAmount: number;

      remarks?: string;
    };

    // ⑪ 기타 영세율적용

    otherZeroRateTotal: {
      count: number;

      foreignAmount: number;

      wonAmount: number;

      remarks?: string;
    };
  };

  /* [상세 리스트] 수출재화 명세

     리스트 상단 합계 행 (⑫ 아래 '합계' 행) */

  exportItemsTotal: {
    foreignAmount: number; // ⑰ 외화 금액 합계

    wonAmount: number; // ⑱ 원화 금액 합계
  };

  // 리스트 아이템

  exportItems: Array<ExportItem>;
};

export type Form40InputData = FormInputData<Form40Data>;
