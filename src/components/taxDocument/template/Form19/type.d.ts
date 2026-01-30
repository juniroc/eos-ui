export type badDebtDeductionItem = {
  originalSupplyDate: string; // ⑤ 당초 공급 연월일 (YYYY-MM-DD)

  badDebtConfirmDate: string; // ⑥ 대손확정 연월일 (YYYY-MM-DD)

  badDebtAmount: number; // ⑦ 대손금액

  deductionRate: string; // ⑧ 공제율 (10/110)

  badDebtTaxAmount: number; // ⑨ 대손세액

  // 공급받는 자 정보

  recipientCompanyName: string; // ⑩ 상호

  recipientRepName: string; // ⑪ 성명

  recipientBizNumber: string; // ⑫ 사업자등록번호

  badDebtReason: string; // ⑬ 대손사유
};

export type repaymentTaxItem = {
  originalBadDebtConfirmDate: string; // ⑭ 당초 대손 확정연월일 (YYYY-MM-DD)

  repaymentDate: string; // ⑮ 변제 연월일 (YYYY-MM-DD)

  repaymentAmount: number; // ⑯ 변제금액

  deductionRate: string; // ⑰ 공제율 (10/110)

  repaymentTaxAmount: number; // ⑱ 변제세액

  // 공급자 정보

  supplierCompanyName: string; // ⑲ 상호

  supplierRepName: string; // ⑳ 성명

  supplierBizNumber: string; // ㉑ 사업자등록번호

  repaymentReason: string; // ㉒ 변제사유
};

export type Form19Data = {
  /* 1. 신고인 인적사항 (① ~ ④) */

  companyName: string; // ① 상호(법인명)

  bizNumber: string; // ② 사업자등록번호

  repName: string; // ③ 성명

  bizAddress: string; // ④ 사업장 소재지

  /* 2. 대손세액 계산신고 내용 (⑤ ~ ⑬) - 리스트 형태 (행 추가 가능) */

  badDebtDeductionItems: Array<badDebtDeductionItem>;

  /* 3. 변제세액 계산신고 내용 (⑭ ~ ㉒) - 리스트 형태 (행 추가 가능) */

  repaymentTaxItems: Array<repaymentTaxItem>;

  /* 하단 작성일 및 신고인 */

  writeYear: string; // 년

  writeMonth: string; // 월

  writeDay: string; // 일

  submitterName: string; // 신고인 (서명 또는 인) 옆 이름
};

export type Form19ApplicantProps = Pick<
  Form19Data,
  'companyName' | 'bizNumber' | 'repName' | 'bizAddress'
>;

export type Form19_1Props = Form19ApplicantProps &
  Pick<
    Form19Data,
    | 'badDebtDeductionItems'
    | 'repaymentTaxItems'
    | 'writeYear'
    | 'writeMonth'
    | 'writeDay'
    | 'submitterName'
  >;

export type Form19_2Props = Form19ApplicantProps &
  Pick<Form19Data, 'badDebtDeductionItems'>;

export type Form19_3Props = Form19ApplicantProps &
  Pick<Form19Data, 'repaymentTaxItems'>;
