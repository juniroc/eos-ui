import { FormInputData } from '@/components/taxDocument/template/common/type';

export type Form33Data = {
  /* [헤더] 귀속 연도 및 과세기간 */

  attributionYear: string; // 년

  attributionTerm: string; // 기

  taxPeriodStartMonth: string; // 과세기간 시작 월

  taxPeriodStartDay: string; // 과세기간 시작 일

  taxPeriodEndMonth: string; // 과세기간 종료 월

  taxPeriodEndDay: string; // 과세기간 종료 일

  /* 1. 인적사항 */

  submitterInfo: {
    companyName: string; // 상호(법인명)

    representativeName: string; // 성명(대표자명)

    bizRegNumber: string; // 사업자등록번호
  };

  /* 2. 기본사항 (자가·타가) */

  basicStatus: {
    // ① 사업장 (대지 및 건물 정보)

    workplace: {
      landArea: number; // 대지 (㎡)

      building: {
        basementFloors: number; // 건물 지하 층수

        groundFloors: number; // 건물 지상 층수

        floorArea: number; // 바닥면적 (㎡)

        totalFloorArea: number; // 연면적 (㎡)
      };
    };

    // ② ~ ⑤ 시설 관련 (음식/숙박업)

    facilities: {
      roomCount: number; // ② 객실 수 (개)

      tableCount: number; // ③ 탁자 수 (개)

      chairCount: number; // ④ 의자 수 (개)

      parkingLotStatus: boolean; // ⑤ 주차장 (유: true, 무: false)
    };

    // ⑥ 종업원 수

    employeeCount: number; // 종업원 수 (명)

    // ⑦ 차량 보유 현황

    vehicles: {
      passengerCarCount: number; // 승용차 (대)

      cargoCarCount: number; // 화물차 (대)
    };
  };

  /* 3. 기본경비 (6월, 12월 기준) ※ 단위: 천원 */

  basicExpenses: {
    // ⑧ 임차료

    rent: {
      deposit: number; // 보증금

      monthlyRent: number; // 월세
    };

    electricityGasFee: number; // ⑨ 전기·가스료

    waterFee: number; // ⑩ 수도료

    laborCost: number; // ⑪ 인건비

    otherExpenses: number; // ⑫ 기타

    // ⑬ 월 기본경비 합계

    totalMonthlyExpenses: number;
  };

  /* [푸터] 신고일 및 신고인 */

  submissionYear: string; // 년

  submissionMonth: string; // 월

  submissionDay: string; // 일

  applicantName: string; // 신고인 (서명 또는 인)
};

export type Form33InputData = FormInputData<Form33Data>;
