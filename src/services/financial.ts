// 증빙보관 관련 API 함수들

const API_BASE_URL = 'https://api.eosxai.com';

export interface ProofItem {
  id: number;
  uploadedAt: string;
  fileName: string;
  type: string;
  mimeType: string;
  size: number;
  voucherIds?: number[];
}

export interface ProofListResponse {
  items: ProofItem[];
}

export interface ProofUrlResponse {
  url: string;
}

/**
 * 증빙 리스트 조회
 */
export async function getProofList(token: string): Promise<ProofListResponse> {
  const response = await fetch(`${API_BASE_URL}/api/proof`, {
    headers: { 
      Authorization: `Bearer ${token}` 
    },
  });

  if (!response.ok) {
    throw new Error('증빙 리스트 조회에 실패했습니다.');
  }

  return response.json();
}

/**
 * 증빙 다운로드 URL 조회
 */
export async function getProofDownloadUrl(id: number, token: string): Promise<ProofUrlResponse> {
  const response = await fetch(`${API_BASE_URL}/api/proof/${id}/url`, {
    headers: { 
      Authorization: `Bearer ${token}` 
    },
  });

  if (!response.ok) {
    throw new Error('증빙 다운로드 URL 조회에 실패했습니다.');
  }

  return response.json();
}

/**
 * 증빙 삭제
 */
export async function deleteProofItem(id: number, token: string): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/api/proof/${id}`, {
    method: 'DELETE',
    headers: { 
      Authorization: `Bearer ${token}` 
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || '증빙 삭제에 실패했습니다.');
  }
}
