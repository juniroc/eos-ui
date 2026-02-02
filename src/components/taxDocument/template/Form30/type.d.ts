export type SalesDetail = {
  supplyCount: number; // ⑥ 공급 건수

  supplyPrice: number; // ⑦ 공급가액

  remarks?: string; // 비고
};

export type Form30Data = {
  /* [헤더] 귀속 연도 및 과세기간 */

  attributionYear: string; // 년

  attributionTerm: string; // 기

  taxPeriodStartMonth: string; // 과세기간 시작 월

  taxPeriodStartDay: string; // 과세기간 시작 일

  taxPeriodEndMonth: string; // 과세기간 종료 월

  taxPeriodEndDay: string; // 과세기간 종료 일

  /* 1. 제출자 인적사항 */

  submitterInfo: {
    companyName: string; // ① 상호(법인명)

    bizRegNumber: string; // ② 사업자등록번호

    representativeName: string; // ③ 성명(대표자)

    transactionPeriod: string; // ④ 거래기간
  };

  /* 2. 매출 명세 */

  salesDetails: {
    // 가축 진료 (면세 사유 고정)

    livestockDiagnosis: SalesDetail;

    // 수산동물 진료 (면세 사유 고정)

    aquaticAnimalDiagnosis: SalesDetail;

    // 장애인 보조견 진료 (면세 사유 고정)

    serviceDogDiagnosis: SalesDetail;

    // 기초수급자가 기르는 동물 진료 (면세 사유 고정)

    basicLivelihoodRecipientAnimal: SalesDetail;

    // 질병 예방 및 치료 목적 진료 (면세 사유 고정)

    diseasePreventionTreatment: SalesDetail;

    // 기타 또는 추가 입력란 - 면세 사유를 직접 입력할 수 있도록 필드 추가

    otherDiagnosis: {
      exemptionReason: string; // ⑤ 면세 사유 (사용자 입력)

      supplyCount: number;

      supplyPrice: number;

      remarks?: string;
    };
  };

  /* [합계] */

  totalSales: {
    totalSupplyCount: number; // ⑥ 공급 건수 합계

    totalSupplyPrice: number; // ⑦ 공급가액 합계

    remarks?: string; // 비고
  };
};
