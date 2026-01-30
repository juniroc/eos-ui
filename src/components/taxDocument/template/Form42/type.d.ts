export type AttachmentItem = {
  documentName: string; // ⑩ 서류명

  issuerName: string; // ⑪ 발급자

  issueDate: string; // ⑫ 발급일자 (YYYY-MM-DD)

  shippingDate: string; // ⑬ 선적일자 (YYYY-MM-DD)

  currencyCode: string; // ⑭ 통화코드

  exchangeRate: string; // ⑮ 환율

  // 당기제출금액

  currentSubmissionAmount: {
    foreign: number; // ⑯ 외화

    won: number; // ⑰ 원화
  };

  // 당기신고해당분

  currentReportPortion: {
    foreign: number; // ⑱ 외화

    won: number; // ⑲ 원화
  };

  remarks?: string; // ⑳ 비고
};

export type Form42ata = {
  /* [헤더] 귀속 연도 및 과세기간 */

  attributionYear: string; // 년

  attributionTerm: string; // 기

  taxPeriodStartMonth: string; // 과세기간 시작 월

  taxPeriodStartDay: string; // 과세기간 시작 일

  taxPeriodEndMonth: string; // 과세기간 종료 월

  taxPeriodEndDay: string; // 과세기간 종료 일

  /* 1. 제출자 인적사항 (1) ~ (5) */

  submitterInfo: {
    bizRegNumber: string; // ① 사업자등록번호

    companyName: string; // ② 상호(법인명)

    representativeName: string; // ③ 성명(대표자)

    addressAndContact: string; // ④ 사업장 소재지 및 연락처

    bizTypeAndItem: string; // ⑤ 업태(종목) - 서식상 통합된 필드
  };

  /* [날짜 및 사유] (6) ~ (8) */

  // ⑥ 거래기간

  transactionPeriod: string;

  // ⑦ 작성일자

  writingDate: string;

  // ⑧ 제출사유

  submissionReason: string;

  /* [상세 리스트] (9) ~ (20)

     ⑨ 일련번호는 제외 */

  attachmentItems: Array<AttachmentItem>;
};
