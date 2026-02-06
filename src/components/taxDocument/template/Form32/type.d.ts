import { FormInputData } from '@/components/taxDocument/template/common/type';

export type Form32Data = {
  /* [헤더] 귀속 연도 및 과세기간

     서식 상단: 년 제 기 ( 월 일 ~ 월 일) */

  attributionYear: string; // 년

  attributionTerm: string; // 기

  taxPeriodStartMonth: string; // 과세기간 시작 월

  taxPeriodStartDay: string; // 과세기간 시작 일

  taxPeriodEndMonth: string; // 과세기간 종료 월

  taxPeriodEndDay: string; // 과세기간 종료 일

  /* 1. 제출자 (관리업자) 인적사항 (1) ~ (4) */

  submitterInfo: {
    propertyLocation: string; // ① 부동산 소재지

    buildingName: string; // ② 건물명

    managerCompanyName: string; // ③ 상호(관리업자)

    managerBizRegNumber: string; // ④ 사업자등록번호
  };

  /* 2. 건물관리명세 (5) ~ (13)

     [합계 행] - ⑤~⑦, ⑨~⑫는 합계란에 기재하지 않으므로,

     면적(⑧)과 관리비(⑬)의 합계만 정의 */

  buildingManagementTotal: {
    totalArea: number; // ⑧ 면적(㎡) 합계

    totalManagementFee: number; // ⑬ 관리비(원) 합계
  };

  /* [리스트 아이템] - ⑤ 일련번호는 제외 (자동 순번) */

  buildingManagementItems: Array<{
    floor: string; // ⑥ 층별

    roomName: string; // ⑦ 호실명·번호

    area: number; // ⑧ 면적(㎡)

    tenantName: string; // ⑨ 상호(성명)

    tenantBizRegNumber: string; // ⑩ 사업자등록번호(주민등록번호)

    moveInDate: string; // ⑪ 입주일 (YYYY-MM-DD)

    moveOutDate: string; // ⑫ 퇴거일 (YYYY-MM-DD)

    managementFee: number; // ⑬ 관리비(원)
  }>;
};

export type Form32InputData = FormInputData<Form32Data>;
