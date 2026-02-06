import { FormInputData } from '@/components/taxDocument/template/common/type';

export type Form20Data = {
  /* 1. 신고인 인적사항 (① ~ ⑥) */

  companyName: string; // ① 상호

  bizNumber: string; // ② 사업자등록번호

  repName: string; // ③ 성명

  phoneNumber: string; // ④ 전화번호

  bizAddress: string; // ⑤ 사업장 소재지

  // ⑥ 직전연도 공급가액 3억원 미만 여부 (체크박스)

  // true: 여, false: 부

  isUnder300Million: boolean;

  /* 2. 전자세금계산서 발급세액공제 계산신고 내용 (⑦ ~ ⑬) */

  // 가. 공제대상 세액

  issuanceCount: number; // ⑦ 전자세금계산서 발급건수

  deductionPerIssuance: number; // ⑧ 건당 공제금액 (서식상 200원)

  calculableTaxAmount: number; // ⑨ 공제가능 세액 (⑦ × ⑧)

  finalDeductionAmount: number; // ⑩ 해당 공제세액 (⑨와 ⑬ 중 적은 금액)

  // 나. 공제 한도액 계산

  annualDeductionLimit: number; // ⑪ 연간 공제한도액 (서식상 100만원)

  alreadyDeductedAmount: number; // ⑫ 기 공제세액

  periodDeductionLimit: number; // ⑬ 해당 과세기간 공제한도액 (⑪ - ⑫)

  /* 하단 작성일 및 신고인 */

  writeYear: string; // 년

  writeMonth: string; // 월

  writeDay: string; // 일

  submitterName: string; // 신고인 (서명 또는 인) 옆 이름
};

export type Form20InputData = FormInputData<Form20Data>;
