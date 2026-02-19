// ========================================
// 부가세 보관서류 페이지 관련 API 함수들
// ========================================

import { VatFormData } from '@/services/api';

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
  forms: VatFormData[];
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
      id: 'rpt_2025_01_confirmed_001',
      title: '0000년 0기 확정 신고서',
      filingType: 'CONFIRMED',
      isCompleted: true,
      isDeadlinePassed: true,
      lastModifiedAt: '2025-01-25T10:12:33.000Z',
      forms: [],
    },
    {
      id: 'rpt_2025_04_expected_001',
      title: '0000년 0기 예정 신고서',
      filingType: 'EXPECTED',
      isCompleted: false,
      isDeadlinePassed: false,
      lastModifiedAt: '2025-04-25T06:40:10.000Z',
      forms: [],
    },
  ];

  // 임시로 mockdata 반환 (실제 API 연동 시 아래 코드로 교체)
  return mockReports.sort(
    (a, b) =>
      new Date(b.lastModifiedAt).getTime() -
      new Date(a.lastModifiedAt).getTime()
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
export async function getVatReport(
  id: string,
  token: string
): Promise<VatReportDetailResponse> {
  const response = await fetch(`${API_BASE_URL}/api/vat/reports/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || '신고서 조회에 실패했습니다.');
  }

  return response.json();
}

/**
 * 신고서 삭제
 */
export async function deleteVatReport(
  id: string,
  token: string
): Promise<VatDeleteResponse> {
  const response = await fetch(`${API_BASE_URL}/api/vat/reports/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
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
  const response = await fetch(
    `${API_BASE_URL}/api/vat/reports/${reportId}/work`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ actionType }),
    }
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || '작업 처리에 실패했습니다.');
  }

  return response.json();
}

/**
 * 서식 삭제
 */
export async function deleteVatForm(
  formId: string,
  token: string
): Promise<VatDeleteResponse> {
  const response = await fetch(`${API_BASE_URL}/api/vat/forms/${formId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
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
export async function deleteVatDocument(
  documentId: string,
  token: string
): Promise<VatDeleteResponse> {
  const response = await fetch(
    `${API_BASE_URL}/api/vat/documents/${documentId}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

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
  const response = await fetch(
    `${API_BASE_URL}/api/vat/documents/${documentId}/download`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || '다운로드 URL 조회에 실패했습니다.');
  }

  return response.json();
}
