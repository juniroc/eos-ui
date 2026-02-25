import { FormInputData } from '@/components/taxDocument/template/common/type';

export type Form29Data = {
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

    address: string; // ④ 사업장 소재지

    bizType: string; // ⑤ 업태

    bizItem: string; // ⑥ 종목
  };

  /* 2. 영세율 적용 공급실적 합계 - [부가가치세법]

     제21, 23, 24조의 세부 항목별 입력칸 분리 반영 */

  vatLawPerformance: {
    // --- 제21조 ---

    art21_directExport: number; // 직접수출(대행수출 포함)

    art21_intermediaryTrade: number; // 중계무역·위탁판매·외국인도 또는 위탁가공무역 방식의 수출

    art21_localLC: number; // 내국신용장·구매확인서에 의하여 공급하는 재화

    art21_koicaRedCross: number; // 한국국제협력단, 한국국제보건의료재단 및 대한적십자사에 공급하는 해외반출용 재화

    art21_processingTrade: number; // 수탁가공무역 수출용으로 공급하는 재화

    // --- 제22조 ---

    art22_abroadService: number; // 국외에서 공급하는 용역

    // --- 제23조 ---

    art23_foreignNavigation: number; // 선박·항공기에 의한 외국항행용역

    art23_intMultimodalTransport: number; // 국제복합운송계약에 의한 외국항행용역

    // --- 제24조 ---

    art24_nonResidentSupply: number; // 국내에서 비거주자·외국법인에 공급되는 재화 또는 용역

    art24_exportGoodsProcessing: number; // 수출재화임가공용역

    art24_foreignNavigationSupplies: number; // 외국항행 선박·항공기 등에 공급하는 재화 또는 용역

    art24_diplomaticMission: number; // 국내 주재 외교공관, 영사기관, 국제연합... 공급하는 재화 또는 용역

    art24_touristAgency: number; // '관광진흥법 시행령'에 따른 일반여행업자가 외국인 관광객에게 공급하는 관광알선용역

    art24_foreignerShop: number; // 외국인전용판매장 또는 주한외국군인 등의 전용 유흥음식점에서 공급하는 재화 또는 용역

    art24_diplomatSupply: number; // 외교관 등에게 공급하는 재화 또는 용역

    art24_foreignPatient: number; // 외국인환자 유치용역
  };

  // ⑪ '부가가치세법'에 따른 영세율 적용 공급실적 합계 (위 항목들의 합)

  subTotalVatLaw: number;

  /* 2. 영세율 적용 공급실적 합계 - [조세특례제한법] */

  specialTaxLawPerformance: {
    art105_1_1_DefenseMaterials: number; // 제105조제1항제1호 (방위산업물자...)

    art105_1_2_MilitaryOil: number; // 제105조제1항제2호 (군부대 석유류)

    art105_1_3_UrbanRail: number; // 제105조제1항제3호 (도시철도건설용역)

    art105_1_3_2_SocialInfra: number; // 제105조제1항제3호의2 (사회기반시설 등)

    art105_1_4_DisabledEquipment: number; // 제105조제1항제4호 (장애인용 보장구 등)

    art105_1_5_FarmersEquipment: number; // 제105조제1항제5호 (농어민 등 기자재)

    art105_1_6_FisheryEquipment: number; // 제105조제1항제6호 (어민용 어업용 기자재)

    art107_ForeignTouristGoods: number; // 제107조 (외국인 관광객 등에게 공급하는 재화)

    art121_13_JejuDutyFree: number; // 제121조의13 (제주특별자치도 면세품...)
  };

  // ⑫ '조세특례제한법' 및 그 밖의 법률에 따른 영세율 적용 공급실적 합계

  subTotalSpecialLaw: number;

  /* [총괄] */

  // ⑬ 영세율 적용 공급실적 총 합계 (⑪ + ⑫)

  grandTotalSupplyPrice: number;
};

export type Form29InputData = FormInputData<Form29Data>;
