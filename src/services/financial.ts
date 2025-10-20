// ========================================
// 증빙보관 페이지 관련 API 함수들
// ========================================

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

// ========================================
// 전표/수정 페이지 관련 API 함수들
// ========================================

export interface Transaction {
  id: number;
  accountId?: string;
  accountCode?: string;
  accountName?: string;
  debitCredit?: boolean; // true = DEBIT, false = CREDIT
  amount?: number;
  partnerId?: string;
  partnerName?: string;
  note?: string;
  matched?: boolean;
}

export interface Voucher {
  id: number;
  date?: string;
  description?: string;
  debitTotal: number;
  creditTotal: number;
  transactions: Transaction[];
}

export interface JournalFilters {
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  accountCode?: string;
  partnerId?: string;
  minAmount?: number;
  maxAmount?: number;
}

export interface JournalResponse {
  vouchers: Voucher[];
}

export interface BatchSaveRequest {
  vouchers: {
    id: number;
    date?: string;
    description?: string;
    transactions: {
      id: number;
      accountId?: string;
      partnerId?: string;
      amount?: number;
      note?: string;
      debitCredit?: boolean;
    }[];
  }[];
}

export interface BatchSaveResponse {
  success: boolean;
  message?: string;
}

/**
 * 전표 조회
 */
export async function fetchJournalData(
  token: string, 
  filters: JournalFilters, 
  voucherIds: string[] = []
): Promise<JournalResponse> {
  const params = new URLSearchParams();

  // 시작일과 종료일을 API 파라미터로 설정
  if (filters.startDate && filters.endDate) {
    params.append('startDate', filters.startDate);
    params.append('endDate', filters.endDate);
  }

  if (filters.accountCode) params.append('accountCode', filters.accountCode);
  if (filters.partnerId) params.append('partnerId', filters.partnerId);
  if (filters.minAmount) params.append('minAmount', filters.minAmount.toString());
  if (filters.maxAmount) params.append('maxAmount', filters.maxAmount.toString());
  if (voucherIds.length > 0) {
    params.append('voucherIds', voucherIds.join(','));
  }

  const url = `${API_BASE_URL}/api/journal?${params.toString()}`;
  const response = await fetch(url, { 
    headers: { 
      Authorization: `Bearer ${token}` 
    } 
  });

  if (!response.ok) {
    throw new Error('전표 조회에 실패했습니다.');
  }

  const data = await response.json();
  
  if (data.vouchers && Array.isArray(data.vouchers)) {
    // 날짜 포맷팅 및 데이터 구조 확인
    const formattedVouchers = data.vouchers.map((voucher: { id: string; date: string; description: string; transactions: unknown[] }) => ({
      ...voucher,
      date: voucher.date ? new Date(voucher.date).toISOString().split('T')[0] : '',
      transactions: voucher.transactions || []
    }));
    
    return { vouchers: formattedVouchers };
  }

  return { vouchers: [] };
}

/**
 * 전표 일괄 저장
 */
export async function batchSaveVouchers(
  token: string, 
  vouchers: Voucher[]
): Promise<BatchSaveResponse> {
  // API 명세에 맞게 데이터 구조 변환
  const formattedVouchers = vouchers.map(voucher => ({
    id: voucher.id,
    date: voucher.date,
    description: voucher.description,
    transactions: voucher.transactions.map(transaction => ({
      id: transaction.id,
      accountId: transaction.accountId,
      partnerId: transaction.partnerId,
      amount: transaction.amount,
      note: transaction.note,
      debitCredit: transaction.debitCredit
    }))
  }));

  const response = await fetch(`${API_BASE_URL}/api/journal/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ vouchers: formattedVouchers }),
  });

  if (!response.ok) {
    throw new Error('전표 저장에 실패했습니다.');
  }

  return response.json();
}

/**
 * 개별 전표 저장
 */
export async function saveVoucher(
  token: string, 
  voucher: Voucher
): Promise<BatchSaveResponse> {
  return batchSaveVouchers(token, [voucher]);
}

// ========================================
// 계정원장 페이지 관련 API 함수들
// ========================================

export interface PartnerItem {
  id: string;
  name: string;
}

export interface PartnersResponse {
  companies: PartnerItem[];
  cards: PartnerItem[];
  bankAccounts: PartnerItem[];
}

export interface UserAccount {
  id: string;
  code: number;
  name: string;
}

export type UserAccountsResponse = UserAccount[];

/**
 * 전표입력 거래처 조회
 */
export async function getJournalInputPartners(token: string): Promise<PartnersResponse> {
  const response = await fetch(`${API_BASE_URL}/api/partners/journal-input`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
  });

  if (!response.ok) {
    throw new Error('거래처 조회에 실패했습니다.');
  }

  return response.json();
}

/**
 * 전표입력 계정과목 조회
 */
export async function getJournalInputAccounts(token: string): Promise<UserAccountsResponse> {
  const response = await fetch(`${API_BASE_URL}/api/user-accounts/journal-input`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
  });

  if (!response.ok) {
    throw new Error('계정과목 조회에 실패했습니다.');
  }

  return response.json();
}
