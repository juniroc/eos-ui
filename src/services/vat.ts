// ========================================
// 부가세 보관서류 페이지 관련 API 함수들
// ========================================

const API_BASE_URL = 'https://api.eosxai.com';

// 타입 정의
export interface VatUploadedDocument {
  id: string;
  name: string;
}

export interface VatForm {
  id: string;
  formCode: string;
  name: string;
  uploadedDocuments?: VatUploadedDocument[];
  data?: {
    values: Record<string, unknown>;
    states: Record<string, unknown>;
  };
  uploadedDocumentIds?: string[];
}

export interface VatReport {
  id: string;
  userId?: string;
  title: string;
  filingDate?: string;
  filingType: string;
  isCompleted: boolean;
  isDeadlinePassed?: boolean;
  lastModifiedAt: string;
  forms: VatForm[];
}

export interface VatReportListResponse {
  reports: VatReport[];
}

export interface VatReportDetailResponse extends VatReport {}

export interface VatWorkRequest {
  actionType: 'continue' | 'rework' | 'amendment';
}

export interface VatWorkResponse extends VatReport {}

export interface VatDeleteResponse {
  message: string;
}

export interface VatDownloadResponse {
  url: string;
}

/**
 * 신고서 목록 조회
 */
export async function getVatReports(token: string): Promise<VatReport[]> {
  // 임시 mockdata - 실제 API 연동 시 아래 실제 API 호출 코드로 교체
  const mockReports: VatReport[] = [
    {
      "id": "rpt_2025_01_confirmed_001",
      "title": "0000년 0기 확정 신고서",
      "filingType": "CONFIRMED",
      "isCompleted": true,
      "isDeadlinePassed": true,
      "lastModifiedAt": "2025-01-25T10:12:33.000Z",
      "forms": [
        {
          "id": "form_rpt_2025_01_001",
          "formCode": "VAT_SALES_BY_CREDITCARD_SUMMARY",
          "name": "매출처별 세금계산서 합계표",
          "uploadedDocuments": [
            { "id": "doc_20250111_001", "name": "20251111.xlsx" },
            { "id": "doc_20250111_002", "name": "20251111.xlsx" },
            { "id": "doc_20250111_003", "name": "20251111.xlsx" },
            { "id": "doc_20250111_004", "name": "20251111.xlsx" }
          ]
        },
        {
          "id": "form_rpt_2025_01_002",
          "formCode": "VAT_SALES_TAXINVOICE_SUMMARY",
          "name": "매출처별 세금계산서 합계표",
          "uploadedDocuments": [
            { "id": "doc_20250111_005", "name": "20251111.xlsx" },
            { "id": "doc_20250111_006", "name": "20251111.xlsx" },
            { "id": "doc_20250111_007", "name": "20251111.xlsx" }
          ]
        },
        {
          "id": "form_rpt_2025_01_003",
          "formCode": "VAT_PURCHASE_TAXINVOICE_SUMMARY",
          "name": "매출처별 세금계산서 합계표",
          "uploadedDocuments": [
            { "id": "doc_20250111_008", "name": "20251111.xlsx" },
            { "id": "doc_20250111_009", "name": "20251111.xlsx" }
          ]
        }
      ]
    },
    {
      "id": "rpt_2025_04_expected_001",
      "title": "0000년 0기 예정 신고서",
      "filingType": "EXPECTED",
      "isCompleted": false,
      "isDeadlinePassed": false,
      "lastModifiedAt": "2025-04-25T06:40:10.000Z",
      "forms": [
        {
          "id": "form_rpt_2025_04_001",
          "formCode": "VAT_SALES_TAXINVOICE_SUMMARY",
          "name": "매출처별 세금계산서 합계표",
          "uploadedDocuments": [
            { "id": "doc_20250425_001", "name": "20251111.xlsx" },
            { "id": "doc_20250425_002", "name": "20251111.xlsx" },
            { "id": "doc_20250425_003", "name": "20251111.xlsx" },
            { "id": "doc_20250425_004", "name": "20251111.xlsx" },
            { "id": "doc_20250425_005", "name": "20251111.xlsx" },
            { "id": "doc_20250425_006", "name": "20251111.xlsx" }
          ]
        },
        {
          "id": "form_rpt_2025_04_002",
          "formCode": "VAT_CREDITCARD_SALES_STATEMENT",
          "name": "매출처별 세금계산서 합계표",
          "uploadedDocuments": [
            { "id": "doc_20250425_007", "name": "20251111.xlsx" },
            { "id": "doc_20250425_008", "name": "20251111.xlsx" },
            { "id": "doc_20250425_009", "name": "20251111.xlsx" }
          ]
        }
      ]
    }
  ]

  // 임시로 mockdata 반환 (실제 API 연동 시 아래 코드로 교체)
  return mockReports.sort((a, b) => 
    new Date(b.lastModifiedAt).getTime() - new Date(a.lastModifiedAt).getTime()
  );

  // 실제 API 호출 코드 (실제 API 연동 시 위의 mockdata 반환 코드를 제거하고 아래 주석 해제)
  /*
  const response = await fetch(`${API_BASE_URL}/api/vat/reports`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || '신고서 목록 조회에 실패했습니다.');
  }

  const data = await response.json();
  // 최종수정일자 내림차순 정렬
  const reports = Array.isArray(data) ? data : (data.reports || []);
  return reports.sort((a: VatReport, b: VatReport) => 
    new Date(b.lastModifiedAt).getTime() - new Date(a.lastModifiedAt).getTime()
  );
  */
}

/**
 * 신고서 상세 조회
 */
export async function getVatReport(id: string, token: string): Promise<VatReportDetailResponse> {
  // 임시 mockdata - 실제 API 연동 시 아래 실제 API 호출 코드로 교체
  const mockReports: VatReport[] = [
    {
      id: '1',
      title: '0000년 0기 예정 신고서',
      filingType: 'provisional',
      isCompleted: false,
      isDeadlinePassed: false,
      lastModifiedAt: '2025-04-25T00:00:00Z',
      forms: [
        {
          id: 'form-1',
          formCode: 'form-69-2-2',
          name: '일반과세자 부가가치세 신고서',
          uploadedDocuments: [
            { id: 'doc-1', name: '20251111.xlsx' },
          ],
        },
        {
          id: 'form-2',
          formCode: 'form-69-2-2',
          name: '매출처별 세금계산서 합계표',
          uploadedDocuments: [
            { id: 'doc-2', name: '20251111.xlsx' },
            { id: 'doc-3', name: '20251111.xlsx' },
          ],
        },
        {
          id: 'form-3',
          formCode: 'form-69-2-2-2',
          name: '매입처별 세금계산서 합계표',
          uploadedDocuments: [],
        },
        {
          id: 'form-4',
          formCode: 'form-69-2-2-2',
          name: '신용카드 매출전표 등 수령 명세서',
          uploadedDocuments: [],
        },
      ],
    },
    {
      id: '2',
      title: '0000년 0기 확정 신고서',
      filingType: 'final',
      isCompleted: true,
      isDeadlinePassed: false,
      lastModifiedAt: '2025-01-25T00:00:00Z',
      forms: [
        {
          id: 'form-6',
          formCode: 'form-69-2-2',
          name: '일반과세자 부가가치세 신고서',
          uploadedDocuments: [
            { id: 'doc-13', name: '20251111.xlsx' },
          ],
        },
        {
          id: 'form-7',
          formCode: 'form-69-2-2',
          name: '매출처별 세금계산서 합계표',
          uploadedDocuments: [
            { id: 'doc-14', name: '20251111.xlsx' },
            { id: 'doc-15', name: '20251111.xlsx' },
          ],
        },
        {
          id: 'form-8',
          formCode: 'form-69-2-2-2',
          name: '매입처별 세금계산서 합계표',
          uploadedDocuments: [],
        },
        {
          id: 'form-9',
          formCode: 'form-69-2-2-2',
          name: '신용카드 매출전표 등 수령 명세서',
          uploadedDocuments: [],
        },
      ],
    },
  ];

  // 임시로 mockdata 반환 (실제 API 연동 시 아래 코드로 교체)
  const mockReport = mockReports.find(r => r.id === id);
  if (mockReport) {
    return mockReport;
  }

  throw new Error('신고서를 찾을 수 없습니다.');

  // 실제 API 호출 코드 (실제 API 연동 시 위의 mockdata 반환 코드를 제거하고 아래 주석 해제)
  /*
  const response = await fetch(`${API_BASE_URL}/api/vat/reports/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || '신고서 조회에 실패했습니다.');
  }

  return response.json();
  */
}

/**
 * 신고서 삭제
 */
export async function deleteVatReport(id: string, token: string): Promise<VatDeleteResponse> {
  const response = await fetch(`${API_BASE_URL}/api/vat/reports/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || '신고서 삭제에 실패했습니다.');
  }

  return response.json();
}

/**
 * 작업하기 (continue/rework/amendment)
 */
export async function workOnVatReport(
  reportId: string,
  actionType: 'continue' | 'rework' | 'amendment',
  token: string
): Promise<VatWorkResponse> {
  const response = await fetch(`${API_BASE_URL}/api/vat/reports/${reportId}/work`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ actionType }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || '작업 처리에 실패했습니다.');
  }

  return response.json();
}

/**
 * 서식 삭제
 */
export async function deleteVatForm(formId: string, token: string): Promise<VatDeleteResponse> {
  const response = await fetch(`${API_BASE_URL}/api/vat/forms/${formId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || '서식 삭제에 실패했습니다.');
  }

  return response.json();
}

/**
 * 업로드 파일 삭제
 */
export async function deleteVatDocument(documentId: string, token: string): Promise<VatDeleteResponse> {
  const response = await fetch(`${API_BASE_URL}/api/vat/documents/${documentId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || '파일 삭제에 실패했습니다.');
  }

  return response.json();
}

/**
 * 업로드 파일 다운로드 URL 조회
 */
export async function getVatDocumentDownloadUrl(
  documentId: string,
  token: string
): Promise<VatDownloadResponse> {
  const response = await fetch(`${API_BASE_URL}/api/vat/documents/${documentId}/download`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || '다운로드 URL 조회에 실패했습니다.');
  }

  return response.json();
}
