export type AssetAcquisitionRow = {
  count: number; // 건수

  supplyAmount: number; // 공급가액

  taxAmount: number; // 세액

  note?: string; // 비고
};

export type Form27Data = {
  /* [헤더] 과세기간 및 귀속 정보 */

  attributionYear: string; // ____년

  attributionTerm: string; // ____기

  periodStartMonth: string; // __월

  periodStartDay: string; // __일 ~

  periodEndMonth: string; // __월

  periodEndDay: string; // __일

  /* [1] 제출자 인적사항 (① ~ ④) */

  bizName: string; // ① 성명(법인명)

  bizNumber: string; // ② 사업자등록번호

  bizType: string; // ③ 업태

  bizItem: string; // ④ 종목

  /* [2] 감가상각자산 취득명세 합계 (⑤ ~ ⑨)

     - 각 자산 종류별(행)로 건수, 금액 등을 저장 */

  totalStats: AssetAcquisitionRow; // ⑤ 합계 (Total Row)

  buildingStructureStats: AssetAcquisitionRow; // ⑥ 건물ㆍ구축물

  machineryStats: AssetAcquisitionRow; // ⑦ 기계장치

  vehicleStats: AssetAcquisitionRow; // ⑧ 차량운반구

  otherAssetStats: AssetAcquisitionRow; // ⑨ 그 밖의 감가상각자산

  /* [하단] 작성 및 제출 정보 */

  writeYear: string; // 년

  writeMonth: string; // 월

  writeDay: string; // 일

  submitterName: string; // 제출자 (서명 또는 인)
};
