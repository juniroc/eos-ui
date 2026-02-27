import { FormInputData } from '@/components/taxDocument/template/common/type';

interface TaxAmountPair {
  taxBase: number; // 과세표준

  taxAmount: number; // 세액
}

/**

 * [공통 타입] 우측 세액 계산 그룹 (한 줄 분량)

 * - 가산세, 공제세액, 납부세액, 비고

 * - 이 그룹이 상단/하단 각각 존재함

 */

interface TaxCalcGroup {
  penaltyTax: number; // 가산세

  deductionTax: number; // 공제세액

  payableTax: number; // 납부세액(환급세액)

  note?: string; // 비고
}

/**

 * [Row 데이터] 개별 사업장별 상세 내역

 * - 일련번호(0000, 0001...)는 자동 생성이므로 제외

 */

interface BusinessPlaceRow {
  /* [좌측] 사업장 기본 정보 (Merge된 셀) */

  bizName: string; // 상호

  address: string; // 소재지

  /* [중간] 매출 및 매입 세액 정보

     - 매출: 4줄 구조 (과세-세금/기타, 영세-세금/기타)

     - 매입: 2줄 구조 (과세, 의제) */

  sales: {
    taxable: {
      invoice: TaxAmountPair; // 과세 - 세금계산서

      other: TaxAmountPair; // 과세 - 기타
    };

    zeroRate: {
      invoice: TaxAmountPair; // 영세율 - 세금계산서

      other: TaxAmountPair; // 영세율 - 기타
    };
  };

  purchase: {
    taxable: TaxAmountPair; // 과세 (상단 라인 대응)

    deemedEtc: TaxAmountPair; // 의제 등 (하단 라인 대응)
  };

  /* [우측] 세액 계산 및 기타 (2줄 구조)

     - 이미지를 보면 우측 칸도 가로선으로 상/하가 나뉘어 있음 */

  calcResult: {
    row1: TaxCalcGroup; // 상단 라인 (보통 과세 매출/매입 라인과 수평)

    row2: TaxCalcGroup; // 하단 라인 (보통 영세율/의제 라인과 수평)
  };
}

/**

 * [합계 데이터] 전체 합계 (Total)

 * - 표의 맨 아래 '합 계' 행

 */

interface TotalTaxStats {
  sales: {
    taxable: {
      invoice: TaxAmountPair;

      other: TaxAmountPair;
    };

    zeroRate: {
      invoice: TaxAmountPair;

      other: TaxAmountPair;
    };
  };

  purchase: {
    taxable: TaxAmountPair;

    deemedEtc: TaxAmountPair;
  };

  /* 합계 행도 우측이 상/하단으로 나뉨 */

  calcResult: {
    row1: TaxCalcGroup;

    row2: TaxCalcGroup;
  };
}

export type Form28Data = {
  reportingYear: string; // 신고년도

  reportingTerm: string; // 신고기수

  periodStartMonth: string;

  periodStartDay: string;

  periodEndMonth: string;

  periodEndDay: string;

  mainBizNumber: string; // 본점 사업자등록번호

  businessPlaces: BusinessPlaceRow[]; // 본점+지점 리스트

  totalStats: TotalTaxStats; // 합계
};

export type Form28InputData = FormInputData<Form28Data>;
