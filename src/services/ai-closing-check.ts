// ========================================
// AI 결산점검 관련 API 함수들
// ========================================

const API_BASE_URL = 'https://api.eosxai.com';

export type ClosingCheckKey = 
  | 'depreciation' 
  | 'ending_inventory' 
  | 'bad_debt' 
  | 'retirement_benefit' 
  | 'period_accrual';

export interface ClosingCheckTransaction {
  accountId: string;
  amount: number;
  debitCredit: boolean; // true = DEBIT, false = CREDIT
  partnerId?: string;
  note?: string;
}

export interface ClosingCheckVoucher {
  date: string; // YYYY-MM-DD
  description?: string;
  departmentId?: string;
  documentId?: string;
}

export interface SaveClosingCheckRequest {
  closingDate: string; // YYYY-MM-DD
  key: ClosingCheckKey;
  voucher: ClosingCheckVoucher;
  transactions: ClosingCheckTransaction[];
}

export interface ClosingCheckTransactionResponse {
  id?: number;
  accountId?: string;
  accountCode?: string;
  accountName?: string;
  debitCredit: boolean;
  amount: number;
  partnerId?: string;
  partnerName?: string;
  note?: string;
  account?: {
    id: string;
    code: string;
    name: string;
  };
  partner?: {
    id: string;
    name: string;
  };
}

export interface ClosingCheckVoucherResponse {
  id: number;
  date: string;
  description?: string;
  departmentId?: string;
  documentId?: string;
  debitTotal?: number;
  creditTotal?: number;
  transactions: ClosingCheckTransactionResponse[];
}

export interface SaveClosingCheckError {
  error: string;
}

/**
 * 결산점검 저장
 */
export async function saveClosingCheck(
  token: string,
  data: SaveClosingCheckRequest
): Promise<ClosingCheckVoucherResponse> {
  const response = await fetch(`${API_BASE_URL}/api/closing-check/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData: SaveClosingCheckError = await response.json().catch(() => ({ 
      error: '결산점검 저장에 실패했습니다.' 
    }));
    throw new Error(errorData.error);
  }

  return response.json();
}

