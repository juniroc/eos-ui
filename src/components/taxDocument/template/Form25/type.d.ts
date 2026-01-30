export type rentalItem = {
  // 임대사항

  buildingDong: string; // ⑤ 동

  floor: string; // ⑥ 층

  unitHo: string; // ⑦ 호

  area: number; // ⑧ 임대면적 (㎡)

  // 임차인 인적사항 및 임대차 계약내용

  tenantName: string; // ⑨ 상호(성명)

  tenantBizNumber: string; // ⑩ 사업자등록번호(주민등록번호)

  moveInDate: string; // ⑪ 입주일 (YYYY-MM-DD)

  renewalDate: string; // ⑫ 갱신일 (YYYY-MM-DD)

  moveOutDate: string; // ⑬ 퇴거일 (YYYY-MM-DD)

  deposit: number; // ⑭ 보증금

  monthlyRent: number; // ⑮ 월 임대료

  // 임대수입금액 (과세표준)

  totalSupplyValue: number; // ⑯ 합계 (⑰ + ⑱)

  depositInterest: number; // ⑰ 보증금 이자(계)

  monthlyRentSum: number; // ⑱ 월 임대료(계)
};

export type Form25Data = {
  /* [헤더] 과세기간 및 귀속 정보 */

  attributionYear: string; // ____년

  attributionTerm: string; // ____기

  periodStartMonth: string; // __월

  periodStartDay: string; // __일 ~

  periodEndMonth: string; // __월

  periodEndDay: string; // __일

  /* [1] 기본 정보 (① ~ ④) */

  propertyAddress: string; // ① 부동산 소재지

  ownerName: string; // ② 상호(소유자 성명)

  bizNumber: string; // ③ 사업자등록번호

  subBizSerialNum?: string; // ④ 사업자 단위 과세자의 종된 사업장 일련번호

  /* [2] 수입금액 내용 기간

                 - 테이블 상단 '수입금액 내용 (기간 __월 ~ __월)' */

  incomePeriodStartMonth: string; // 기간 시작 월

  incomePeriodEndMonth: string; // 기간 종료 월

  /* [3] 임대사업 명세 (⑤ ~ ⑱) - 합계 행과 개별 리스트로 구분 */

  // [합계 행] (Total Row) - 서식 상단 '합계' 행에 들어갈 데이터

  totalStats: {
    totalArea: number; // ⑧ 임대면적 합계

    totalDeposit: number; // ⑭ 보증금 합계

    totalMonthlyRent: number; // ⑮ 월 임대료 합계

    grandTotalSupplyValue: number; // ⑯ 합계 (과세표준 총액)

    totalDepositInterest: number; // ⑰ 보증금 이자(계) 합계

    totalMonthlyRentSum: number; // ⑱ 월 임대료(계) 합계
  };

  // [개별 상세 리스트]

  rentalItems: Array<rentalItem>;
};
