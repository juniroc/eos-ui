import {
  Form25Data,
  rentalItem,
} from '@/components/taxDocument/template/Form25/type';

export const baseRentalItem: rentalItem = {
  // 임대사항

  buildingDong: '', // ⑤ 동

  floor: '', // ⑥ 층

  unitHo: '', // ⑦ 호

  area: 0, // ⑧ 임대면적 (㎡)

  // 임차인 인적사항 및 임대차 계약내용

  tenantName: '', // ⑨ 상호(성명)

  tenantBizNumber: '', // ⑩ 사업자등록번호(주민등록번호)

  moveInDate: '', // ⑪ 입주일 (YYYY-MM-DD)

  renewalDate: '', // ⑫ 갱신일 (YYYY-MM-DD)

  moveOutDate: '', // ⑬ 퇴거일 (YYYY-MM-DD)

  deposit: 0, // ⑭ 보증금

  monthlyRent: 0, // ⑮ 월 임대료

  // 임대수입금액 (과세표준)

  totalSupplyValue: 0, // ⑯ 합계 (⑰ + ⑱)

  depositInterest: 0, // ⑰ 보증금 이자(계)

  monthlyRentSum: 0, // ⑱ 월 임대료(계)
};

export const baseForm25Data: Form25Data = {
  attributionYear: '', // ____년

  attributionTerm: '', // ____기

  periodStartMonth: '', // __월

  periodStartDay: '', // __일 ~

  periodEndMonth: '', // __월

  periodEndDay: '', // __일

  /* [1] 기본 정보 (① ~ ④) */

  propertyAddress: '', // ① 부동산 소재지

  ownerName: '', // ② 상호(소유자 성명)

  bizNumber: '', // ③ 사업자등록번호

  subBizSerialNum: '', // ④ 사업자 단위 과세자의 종된 사업장 일련번호

  /* [2] 수입금액 내용 기간

               - 테이블 상단 '수입금액 내용 (기간 __월 ~ __월)' */

  incomePeriodStartMonth: '', // 기간 시작 월

  incomePeriodEndMonth: '', // 기간 종료 월

  /* [3] 임대사업 명세 (⑤ ~ ⑱) - 합계 행과 개별 리스트로 구분 */

  // [합계 행] (Total Row) - 서식 상단 '합계' 행에 들어갈 데이터

  totalStats: {
    totalArea: 0, // ⑧ 임대면적 합계

    totalDeposit: 0, // ⑭ 보증금 합계

    totalMonthlyRent: 0, // ⑮ 월 임대료 합계

    grandTotalSupplyValue: 0, // ⑯ 합계 (과세표준 총액)

    totalDepositInterest: 0, // ⑰ 보증금 이자(계) 합계

    totalMonthlyRentSum: 0, // ⑱ 월 임대료(계) 합계
  },

  // [개별 상세 리스트]

  rentalItems: [baseRentalItem],
};

export const RENTAL_ITEM_MAX_LENGTH = 8;
