import { FormInputData } from '@/components/taxDocument/template/common/type';

export type SalesItem = {
  supplyDate: string; // ⑥ 공급일자 (YYYY-MM-DD)

  exemptionReason: string; // ⑦ 면세 사유

  animalType: string; // ⑧ 동물의 종류

  diagnosisDetails: string; // ⑨ 진료내용

  supplyPrice: number; // ⑩ 공급가액

  // 공급받은 자 정보

  recipientName: string; // ⑪ 성명

  recipientResidentNumber: string; // ⑫ 주민등록번호

  recipientContact: string; // ⑬ 연락처

  remarks?: string; // ⑭ 비고
};

export type Form47Data = {
  /* [헤더] 귀속 연도 및 과세기간 */

  attributionYear: string; // 년

  attributionTerm: string; // 기

  taxPeriodStartMonth: string; // 과세기간 시작 월

  taxPeriodStartDay: string; // 과세기간 시작 일

  taxPeriodEndMonth: string; // 과세기간 종료 월

  taxPeriodEndDay: string; // 과세기간 종료 일

  /* 1. 제출자 인적사항 (1) ~ (4) */

  submitterInfo: {
    companyName: string; // ① 상호(법인명)

    bizRegNumber: string; // ② 사업자등록번호

    representativeName: string; // ③ 성명(대표자)

    transactionPeriod: string; // ④ 거래기간 (요청사항 반영: 단일 문자열)
  };

  /* 2. 동물 진료용역 매출 명세 (5) ~ (14)

     ⑤ 일련번호는 제외 */

  salesItems: Array<SalesItem>;
};

export type Form47InputData = FormInputData<Form47Data>;
