// API 서버 호스트
const API_BASE_URL = 'https://api.eosxai.com';

export interface LoginRequest {
  loginId: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    loginId: string;
    email: string;
    name: string;
  };
}

export interface LoginError {
  error: string;
  subscriptionExpired?: boolean;
}

export interface BusinessInfo {
  companyName: string;
  businessNumber: string;
  businessCategory: string;
  corporateNumber: string;
  representativeName: string;
  establishmentDate: string;
  address: string;
  businessType: string;
  businessCategory2: string;
  taxOffice: string;
  settlementMonth?: string;
  settlementDay?: string;
}

export interface BusinessInfoExtractionResponse {
  success: boolean;
  data: {
    companyName: string;
    businessNumber: string;
    businessCategory: string;
    corporateNumber: string;
    representativeName: string;
    establishmentDate: string;
    address: string;
    businessType: string[];
    businessCategory2: string[];
    taxOffice: string;
    isTaxAgent: boolean;
    taxAgentType: string;
  };
}

// 로그인 API
export async function login(credentials: LoginRequest): Promise<LoginResponse> {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const errorData: LoginError = await response.json();
    throw new Error(errorData.error || '로그인에 실패했습니다.');
  }

  return response.json();
}

// ID 중복 확인 API
export async function checkLoginIdDuplicate(loginId: string): Promise<boolean> {
  const response = await fetch(`${API_BASE_URL}/api/auth/check-login-id?loginId=${encodeURIComponent(loginId)}`);
  
  if (!response.ok) {
    throw new Error('ID 중복 확인에 실패했습니다.');
  }

  const data = await response.json();
  return data.duplicated;
}

// 사업자등록증 업로드 및 정보 추출 API (기존 - 인증 필요)
export async function extractBusinessInfoWithAuth(file: File, token: string): Promise<BusinessInfoExtractionResponse> {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${API_BASE_URL}/api/ai/extract-business-info`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error('파일 업로드 및 정보 추출에 실패했습니다.');
  }

  return response.json();
}

// 사업자 정보 조회 API
export async function getBusinessInfo(token: string): Promise<BusinessInfo> {
  const response = await fetch(`${API_BASE_URL}/api/business-info`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('사업자 정보 조회에 실패했습니다.');
  }

  return response.json();
}

// 사업자 정보 저장 API
export async function saveBusinessInfo(businessInfo: BusinessInfo, token: string): Promise<{ success: boolean }> {
  const response = await fetch(`${API_BASE_URL}/api/business-info`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(businessInfo),
  });

  if (!response.ok) {
    throw new Error('사업자 정보 저장에 실패했습니다.');
  }

  return response.json();
}

// API 호출 시 토큰이 필요한 경우를 위한 헬퍼 함수
export function createAuthenticatedFetch(token: string) {
  return async (url: string, options: RequestInit = {}) => {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`API 호출 실패: ${response.status}`);
    }

    return response;
  };
}

// 통장 정보 관련 API
export async function getBankAccountDocs(token: string): Promise<unknown> {
  const response = await fetch(`${API_BASE_URL}/api/bank-account-docs`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('통장 정보 조회에 실패했습니다.');
  }

  return response.json();
}

export async function extractBankAccountDocs(file: File, token: string): Promise<unknown> {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${API_BASE_URL}/api/bank-account-docs/extract`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error('통장 정보 추출에 실패했습니다.');
  }

  return response.json();
}

export async function saveBankAccountDocs(data: { documentId: string; accounts: Array<{ bankName: string; accountNumber: string; withdrawalFee?: string; purpose?: string; note?: string }> }, token: string): Promise<{ success: boolean; partners: Array<{ id: string; bankName: string; accountNumber: string; withdrawalFee: string; purpose: string; note: string; createdAt: string }> }> {
  const response = await fetch(`${API_BASE_URL}/api/bank-account-docs/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('통장 정보 저장에 실패했습니다.');
  }

  return response.json();
}

export async function deleteBankAccount(id: string, token: string): Promise<unknown> {
  const response = await fetch(`${API_BASE_URL}/api/bank-accounts/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('통장 정보 삭제에 실패했습니다.');
  }

  return response.json();
}

// 카드 정보 관련 API
export async function getCardDocs(token: string): Promise<unknown> {
  const response = await fetch(`${API_BASE_URL}/api/card-docs`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('카드 정보 조회에 실패했습니다.');
  }

  return response.json();
}

export async function extractCardDocs(file: File, token: string): Promise<unknown> {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${API_BASE_URL}/api/card-docs/extract`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error('카드 정보 추출에 실패했습니다.');
  }

  return response.json();
}


export async function saveCardDocs(data: { documentId: string; cards: Array<{ id: string, cardIssuer: string; cardNumber: string; cardType?: string; purpose?: string; primaryUser?: string }> }, token: string): Promise<{ success: boolean; partners: Array<{ id: string; cardIssuer: string; cardNumber: string; cardType: string; purpose: string; primaryUser: string; createdAt: string }> }> {
  const response = await fetch(`${API_BASE_URL}/api/card-docs/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('카드 정보 저장 실패:', response.status, errorText);
    throw new Error(`카드 정보 저장에 실패했습니다. (${response.status}): ${errorText}`);
  }

  return response.json();
}

export async function deleteCard(id: string, token: string): Promise<unknown> {
  const response = await fetch(`${API_BASE_URL}/api/cards/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('카드 정보 삭제에 실패했습니다.');
  }

  return response.json();
}

// 직원 정보 관련 API
export async function getEmployees(token: string): Promise<unknown> {
  const response = await fetch(`${API_BASE_URL}/api/employees`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('직원 정보 조회에 실패했습니다.');
  }

  return response.json();
}

export async function extractEmployeeDocs(file: File, token: string): Promise<unknown> {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${API_BASE_URL}/api/employee-docs/extract-list`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error('직원 정보 추출에 실패했습니다.');
  }

  return response.json();
}

export async function saveEmployeeDocs(data: { documentId?: string; employees: Array<{ name: string; residentNumber: string; employmentType?: string; monthlySalary?: string; isProduction?: boolean }> }, token: string): Promise<{ success: boolean; employees: Array<{ id: string; name: string; residentNumber: string; employmentType: string; monthlySalary: string; isProduction: boolean; createdAt: string }> }> {
  const response = await fetch(`${API_BASE_URL}/api/employee-docs/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('직원 정보 저장 실패:', response.status, errorText);
    throw new Error(`직원 정보 저장에 실패했습니다. (${response.status}): ${errorText}`);
  }

  return response.json();
}

export async function deleteEmployee(id: string, token: string): Promise<unknown> {
  const response = await fetch(`${API_BASE_URL}/api/employees/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('직원 정보 삭제에 실패했습니다.');
  }

  return response.json();
}

// 거래처 정보 관련 API
export async function getPartnerDocs(token: string): Promise<unknown> {
  const response = await fetch(`${API_BASE_URL}/api/partner-docs`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('거래처 정보 조회에 실패했습니다.');
  }

  return response.json();
}

export async function extractPartnerDocs(file: File, token: string): Promise<unknown> {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${API_BASE_URL}/api/partner-docs/extract-list`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error('거래처 정보 추출에 실패했습니다.');
  }

  return response.json();
}

export async function savePartnerDocs(data: { documentId: string; partners: Array<{ name: string; businessNumber?: string; mainItems?: string; relationship?: string; note?: string }> }, token: string): Promise<{ success: boolean; partners: Array<{ id: string; name: string; businessNumber: string; mainItems: string; relationship: string; note: string; createdAt: string }> }> {
  const response = await fetch(`${API_BASE_URL}/api/partner-docs/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('거래처 정보 저장에 실패했습니다.');
  }

  return response.json();
}

export async function deletePartner(id: string, token: string): Promise<unknown> {
  const response = await fetch(`${API_BASE_URL}/api/partners/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('거래처 정보 삭제에 실패했습니다.');
  }

  return response.json();
}

// 주주 정보 관련 API
export async function getShareholderDocs(token: string): Promise<unknown> {
  const response = await fetch(`${API_BASE_URL}/api/shareholder-docs`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('주주 정보 조회에 실패했습니다.');
  }

  return response.json();
}

export async function extractShareholderDocs(file: File, token: string): Promise<unknown> {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${API_BASE_URL}/api/shareholder-docs/extract-list`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error('주주 정보 추출에 실패했습니다.');
  }

  return response.json();
}

export async function saveShareholderDocs(data: { documentId: string; shareholders: Array<{ name: string; residentNumber?: string; isRelatedParty: string; shares?: string; acquisitionDate?: string; note?: string }> }, token: string): Promise<{ success: boolean; shareholders: Array<{ id: string; name: string; residentNumber: string; isRelatedParty: string; shares: string; acquisitionDate: string; note: string; createdAt: string }> }> {
  const response = await fetch(`${API_BASE_URL}/api/shareholder-docs/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('주주 정보 저장 실패:', response.status, errorText);
    throw new Error(`주주 정보 저장에 실패했습니다. (${response.status}): ${errorText}`);
  }

  return response.json();
}

export async function deleteShareholder(id: string, token: string): Promise<unknown> {
  const response = await fetch(`${API_BASE_URL}/api/shareholders/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('주주 정보 삭제에 실패했습니다.');
  }

  return response.json();
}

// 회원가입 관련 API
export async function checkLoginId(loginId: string): Promise<{ duplicated: boolean }> {
  const response = await fetch(`${API_BASE_URL}/api/auth/check-login-id?loginId=${loginId}`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('ID 중복 확인에 실패했습니다.');
  }

  return response.json();
}

export async function extractBusinessInfo(file: File): Promise<{
  success: boolean;
  data: {
    companyName: string;
    businessNumber: string;
    businessCategory: string;
    corporateNumber: string;
    representativeName: string;
    establishmentDate: string;
    address: string;
    businessType: string[];
    businessCategory2: string[];
    taxOffice: string;
    isTaxAgent: boolean;
    taxAgentType: string;
  };
}> {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${API_BASE_URL}/api/ai/extract-business-info-with-tax-agent`, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error('사업자등록증 정보 추출에 실패했습니다.');
  }

  return response.json();
}

export async function registerUser(data: {
  businessRegistrationFile: File;
  businessInfo: string;
  loginId: string;
  email: string;
  password: string;
  name: string;
  mobilePhone: string;
  companyPhone: string;
  companyWebsite?: string;
}): Promise<{ token: string; user: { id: string; loginId: string; email: string; name: string } }> {
  const formData = new FormData();
  formData.append('businessRegistrationFile', data.businessRegistrationFile);
  formData.append('businessInfo', data.businessInfo);
  formData.append('loginId', data.loginId);
  formData.append('email', data.email);
  formData.append('password', data.password);
  formData.append('name', data.name);
  formData.append('mobilePhone', data.mobilePhone);
  formData.append('companyPhone', data.companyPhone);
  if (data.companyWebsite) {
    formData.append('companyWebsite', data.companyWebsite);
  }

  const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || '회원가입에 실패했습니다.');
  }

  return response.json();
}

// 결산점검 관련 API
export async function initClosingCheck(data: { closingDate: string; mode: 'manual' | 'auto' }, token: string): Promise<unknown> {
  const response = await fetch(`${API_BASE_URL}/api/closing-check/init`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('결산점검 초기화에 실패했습니다.');
  }

  return response.json();
}

export async function getClosingCheckStream(jobId: string, token: string): Promise<ReadableStream<Uint8Array> | null> {
  const response = await fetch(`${API_BASE_URL}/api/closing-check/stream?jobId=${jobId}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'text/event-stream',
    },
  });

  if (!response.ok) {
    throw new Error('결산점검 스트림 조회에 실패했습니다.');
  }

  return response.body;
}

// 가이드라인 관련 API
export async function getGuidelines(token: string): Promise<unknown> {
  const response = await fetch(`${API_BASE_URL}/api/instructions`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    throw new Error('가이드라인 조회에 실패했습니다.');
  }

  return response.json();
}

export async function deleteGuideline(id: string, token: string): Promise<unknown> {
  const response = await fetch(`${API_BASE_URL}/api/instructions/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    throw new Error('가이드라인 삭제에 실패했습니다.');
  }

  return response.json();
}

export async function saveGuideline(data: { providedAt: string; content: string }, token: string): Promise<unknown> {
  const response = await fetch(`${API_BASE_URL}/api/instructions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('가이드라인 저장에 실패했습니다.');
  }

  return response.json();
}

// 분개장 관련 API
export async function getJournal(params: URLSearchParams, token: string): Promise<unknown> {
  const url = `${API_BASE_URL}/api/journal?${params.toString()}`;
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    throw new Error('분개장 조회에 실패했습니다.');
  }

  return response.json();
}

export async function saveJournal(data: unknown, token: string): Promise<unknown> {
  const response = await fetch(`${API_BASE_URL}/api/journal/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('분개장 저장에 실패했습니다.');
  }

  return response.json();
}

// 대차대조표 관련 API
export async function getBalanceSheet(params: URLSearchParams, token: string): Promise<unknown> {
  const url = `${API_BASE_URL}/api/balance?${params.toString()}`;
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    throw new Error('대차대조표 조회에 실패했습니다.');
  }

  return response.json();
}

// 원장 관련 API
export async function getLedger(params: URLSearchParams, token: string): Promise<unknown> {
  const url = `${API_BASE_URL}/api/ledger?${params.toString()}`;
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    throw new Error('원장 조회에 실패했습니다.');
  }

  return response.json();
}

export async function getLedgerVoucher(voucherId: string, token: string): Promise<unknown> {
  const response = await fetch(`${API_BASE_URL}/api/ledger/voucher/${voucherId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    throw new Error('원장 전표 조회에 실패했습니다.');
  }

  return response.json();
}

export async function saveLedgerVoucher(voucherId: string, data: unknown, token: string): Promise<unknown> {
  const response = await fetch(`${API_BASE_URL}/api/ledger/voucher/${voucherId}/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('원장 전표 저장에 실패했습니다.');
  }

  return response.json();
}

// 손익계산서 관련 API
export async function getFinancialStatements(params: URLSearchParams, token: string): Promise<unknown> {
  const url = `${API_BASE_URL}/api/statements?${params.toString()}`;
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    throw new Error('손익계산서 조회에 실패했습니다.');
  }

  return response.json();
}

// 현금출납부 관련 API
export async function getCashbook(params: URLSearchParams, token: string): Promise<unknown> {
  const url = `${API_BASE_URL}/api/cashbook?${params.toString()}`;
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    throw new Error('현금출납부 조회에 실패했습니다.');
  }

  return response.json();
}

export async function getCashbookVoucher(voucherId: string, token: string): Promise<unknown> {
  const response = await fetch(`${API_BASE_URL}/api/cashbook/voucher/${voucherId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    throw new Error('현금출납부 전표 조회에 실패했습니다.');
  }

  return response.json();
}

export async function saveCashbookVoucher(voucherId: string, data: unknown, token: string): Promise<unknown> {
  const response = await fetch(`${API_BASE_URL}/api/cashbook/voucher/${voucherId}/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('현금출납부 전표 저장에 실패했습니다.');
  }

  return response.json();
}

// 증빙보관 관련 API
export async function getProofs(token: string): Promise<unknown> {
  const response = await fetch(`${API_BASE_URL}/api/proof`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    throw new Error('증빙보관 조회에 실패했습니다.');
  }

  return response.json();
}

export async function getProofUrl(id: string, token: string): Promise<unknown> {
  const response = await fetch(`${API_BASE_URL}/api/proof/${id}/url`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    throw new Error('증빙 URL 조회에 실패했습니다.');
  }

  return response.json();
}

export async function deleteProof(id: string, token: string): Promise<unknown> {
  const response = await fetch(`${API_BASE_URL}/api/proof/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    throw new Error('증빙 삭제에 실패했습니다.');
  }

  return response.json();
}

// AI 분개 관련 API
export interface RawTransaction {
  date: string;
  description: string;
  counterpartyName: string;
  counterpartyBusinessNumber?: string;
  counterpartyRepresentative?: string;
  counterpartyAddress?: string;
  counterpartyPhone?: string;
  counterpartyEmail?: string;
  cardApprovalNumber?: string;
  cardNumberInText?: string;
  bankAccountInText?: string;
  isCancelled: boolean;
  totalAmount: number;
  vatAmount: number;
  items: string[];
  documentType: string;
  transactionType: string;
  groundRuleNumber: string;
  fileName: string;
}

export interface AIJournalTransaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  partnerName?: string;
  partnerId?: string; // 거래처 ID
  accountName?: string;
  accountId?: string; // 계정과목 ID
  debitCredit?: boolean; // true: 차변, false: 대변
  note?: string;
}

export interface AIJournalVoucher {
  id: string;
  date: string;
  transactions: AIJournalTransaction[];
  description?: string;
  departmentId?: string; // 현재 미사용
  documentId?: string; // 현재 미사용
}

export interface NewPartner {
  id?: string;
  name: string;
  businessNumber?: string | null;
  mainItems?: string;
  relationship?: string;
  note?: string;
  type: 'BANK_ACCOUNT' | 'COMPANY';
  representative?: string | null;
  address?: string | null;
  phone?: string | null;
  email?: string | null;
  cardIssuer?: string | null;
  cardNumber?: string | null;
  bankName?: string | null;
  accountNumber?: string | null;
}

// 1단계: 증빙 추출 시작
export async function startExtractRawTransactions(files: File[], token: string): Promise<{ jobId: string }> {
  const formData = new FormData();
  files.forEach(file => {
    formData.append('files', file);
  });

  const response = await fetch(`${API_BASE_URL}/api/ai/extract-raw-transactions/start`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || '증빙 추출 시작에 실패했습니다.');
  }

  return response.json();
}

// 1단계: 증빙 추출 진행률 스트림
export async function getExtractRawTransactionsStream(jobId: string, token: string): Promise<ReadableStream<Uint8Array> | null> {
  const response = await fetch(`${API_BASE_URL}/api/ai/extract-raw-transactions/stream?jobId=${jobId}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'text/event-stream',
    },
  });

  if (!response.ok) {
    throw new Error('증빙 추출 스트림 조회에 실패했습니다.');
  }

  return response.body;
}

// 2단계: 분개 처리 시작
export async function startProcessJournalEntries(transactions: RawTransaction[], token: string): Promise<{ jobId: string }> {
  console.log('분개 처리 API 호출 - 전달할 데이터:', { transactions });
  
  const response = await fetch(`${API_BASE_URL}/api/ai/process-journal-entries/start`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ transactions }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error('분개 처리 API 에러:', errorData);
    throw new Error(errorData.error || '분개 처리 시작에 실패했습니다.');
  }

  const result = await response.json();
  console.log('분개 처리 API 응답:', result);
  return result;
}

// 2단계: 분개 처리 진행률 스트림
export async function getProcessJournalEntriesStream(jobId: string, token: string): Promise<ReadableStream<Uint8Array> | null> {
  const response = await fetch(`${API_BASE_URL}/api/ai/process-journal-entries/stream?jobId=${jobId}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'text/event-stream',
    },
  });

  if (!response.ok) {
    throw new Error('분개 처리 스트림 조회에 실패했습니다.');
  }

  return response.body;
}

// 전표 생성 API
export async function createVouchers(data: {
  proof?: File;
  vouchers: Array<{
    date: string;
    description?: string;
    departmentId?: string;
    documentId?: string;
  }>;
}, token: string): Promise<{ success: boolean; ids: string[] }> {
  // proof 파일이 있으면 multipart/form-data로 전송
  if (data.proof) {
    const formData = new FormData();
    formData.append('proof', data.proof);
    formData.append('vouchers', JSON.stringify(data.vouchers));

    const response = await fetch(`${API_BASE_URL}/api/vouchers`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        // Content-Type은 FormData 사용 시 브라우저가 자동으로 설정 (multipart/form-data)
      },
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || '전표 생성에 실패했습니다.');
    }

    return response.json();
  } else {
    // proof 파일이 없으면 application/json으로 전송
    const response = await fetch(`${API_BASE_URL}/api/vouchers`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ vouchers: data.vouchers }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || '전표 생성에 실패했습니다.');
    }

    return response.json();
  }
}

// 거래 생성 API
export async function createTransactions(data: {
  transactions: Array<{
    voucherId: string;
    amount: number;
    partnerId?: string;
    accountId: string;
    debitCredit: boolean;
    note?: string;
  }>;
}, token: string): Promise<{ success: boolean; ids: string[] }> {
  const response = await fetch(`${API_BASE_URL}/api/transactions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || '거래 생성에 실패했습니다.');
  }

  return response.json();
}

// AI 분개 결과 저장 API (새로운 2단계 방식)
export async function saveAIJournal(vouchers: AIJournalVoucher[], token: string): Promise<{ success: boolean; voucherIds: string[] }> {
  try {
    console.log('전표 생성 중:', vouchers.length, '개');
    
    // 1단계: 모든 전표를 한 번에 생성
    const voucherResult = await createVouchers({
      vouchers: vouchers.map(voucher => ({
        date: voucher.date,
        description: voucher.description,
        departmentId: voucher.departmentId,
        documentId: voucher.documentId,
      }))
    }, token);
    
    console.log('전표 생성 완료:', voucherResult.ids);
    
    // 2단계: 각 전표의 거래에 voucherId를 매핑하여 모든 거래를 한 번에 생성
    const allTransactions = vouchers.flatMap((voucher, index) => {
      const voucherId = voucherResult.ids[index];
      return voucher.transactions.map(transaction => ({
        voucherId,
        amount: transaction.amount,
        accountId: transaction.accountId || '',
        debitCredit: transaction.debitCredit || false,
        note: transaction.note,
        partnerId: transaction.partnerId,
      }));
    });
    
    console.log('거래 생성 중:', allTransactions.length, '개');
    
    await createTransactions({ transactions: allTransactions }, token);
    
    console.log('거래 생성 완료');
    
    return { success: true, voucherIds: voucherResult.ids };
  } catch (error) {
    console.error('저장 중 오류:', error);
    throw error;
  }
}

// ===== AI 결산점검 관련 API =====

// 결산점검 항목별 실행 API
export async function runClosingCheckItem(data: { closingDate: string; key: string }, token: string): Promise<unknown> {
  const response = await fetch(`${API_BASE_URL}/api/closing-check/run-item`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error('API 에러 응답:', errorData);
    
    if (response.status === 500) {
      throw new Error('서버 내부 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } else {
      throw new Error(`결산점검 항목 실행에 실패했습니다. (${response.status})`);
    }
  }

  return response.json();
}

// 결산점검 결산반영 API
export async function applyClosingCheck(data: { 
  closingDate: string; 
  key: string; 
  description: string; 
  rows?: unknown[];
  tangible?: unknown[];
  intangible?: unknown[];
  vouchers?: unknown[];
}, token: string): Promise<unknown> {
  const response = await fetch(`${API_BASE_URL}/api/closing-check/apply`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error('API 에러 응답:', errorData);
    
    if (response.status === 500) {
      throw new Error('결산반영 중 서버 오류가 발생했습니다.');
    } else {
      throw new Error(`결산 반영에 실패했습니다. (${response.status})`);
    }
  }

  return response.json();
}

// 감가상각 점검 API
export async function checkDepreciation(closingDate: string, token: string): Promise<unknown> {
  return runClosingCheckItem({ closingDate, key: 'depreciation' }, token);
}

// 감가상각 결산반영 API
export async function applyDepreciation(data: {
  closingDate: string;
  tangible: unknown[];
  intangible: unknown[];
}, token: string): Promise<unknown> {
  return applyClosingCheck({
    closingDate: data.closingDate,
    key: 'depreciation',
    description: '감가상각 처리',
    tangible: data.tangible,
    intangible: data.intangible,
  }, token);
}

// 기말재고 점검 API
export async function checkEndingInventory(closingDate: string, token: string): Promise<unknown> {
  return runClosingCheckItem({ closingDate, key: 'ending_inventory' }, token);
}

// 기말재고 결산반영 API
export async function applyEndingInventory(data: {
  closingDate: string;
  rows: unknown[];
}, token: string): Promise<unknown> {
  return applyClosingCheck({
    closingDate: data.closingDate,
    key: 'ending_inventory',
    description: '기말재고 결산 반영',
    rows: data.rows,
  }, token);
}

// 대손상각 점검 API
export async function checkBadDebt(closingDate: string, token: string): Promise<unknown> {
  return runClosingCheckItem({ closingDate, key: 'bad_debt' }, token);
}

// 대손상각 결산반영 API
export async function applyBadDebt(data: {
  closingDate: string;
  rows: unknown[];
}, token: string): Promise<unknown> {
  return applyClosingCheck({
    closingDate: data.closingDate,
    key: 'bad_debt',
    description: '대손상각 결산 반영',
    rows: data.rows,
  }, token);
}

// 퇴직급여충당금 점검 API
export async function checkRetirementBenefit(closingDate: string, token: string): Promise<unknown> {
  return runClosingCheckItem({ closingDate, key: 'retirement_benefit' }, token);
}

// 퇴직급여충당금 결산반영 API
export async function applyRetirementBenefit(data: {
  closingDate: string;
  rows: unknown[];
}, token: string): Promise<unknown> {
  return applyClosingCheck({
    closingDate: data.closingDate,
    key: 'retirement_benefit',
    description: '퇴직급여충당금 결산 반영',
    rows: data.rows,
  }, token);
}

// 가수가지급금 점검 API
export async function checkSuspense(closingDate: string, token: string): Promise<unknown> {
  return runClosingCheckItem({ closingDate, key: 'suspense_clear' }, token);
}

// 가수가지급금 결산반영 API
export async function applySuspense(data: {
  closingDate: string;
  vouchers: unknown[];
}, token: string): Promise<unknown> {
  const response = await fetch(`${API_BASE_URL}/api/closing-check/run-item`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      closingDate: data.closingDate,
      key: 'suspense_clear',
      vouchers: data.vouchers,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error('API 에러 응답:', errorData);
    
    if (response.status === 500) {
      throw new Error('서버 내부 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } else {
      throw new Error(`가수가지급금 결산반영에 실패했습니다. (${response.status})`);
    }
  }

  return response.json();
}

// 기간귀속 점검 API
export async function checkPeriodAccrual(closingDate: string, token: string): Promise<unknown> {
  return runClosingCheckItem({ closingDate, key: 'period_accrual' }, token);
}

// 기간귀속 결산반영 API
export async function applyPeriodAccrual(data: {
  closingDate: string;
  rows: unknown[];
}, token: string): Promise<unknown> {
  return applyClosingCheck({
    closingDate: data.closingDate,
    key: 'period_accrual',
    description: '기간귀속 결산 반영',
    rows: data.rows,
  }, token);
}

// ===== 부가세 서류 생성 관련 API =====

// VAT 회사정보 인터페이스
export interface VatCompanyInfo {
  name: string;
  businessNumber: string;
  businessCategory: string;
  corporateNumber: string;
  representativeName: string;
  establishmentDate: string;
  businessType: string[];
  businessCategory2: string[];
  address: string;
  phone: string;
  refundBankName: string;
  refundBankBranch: string;
  refundAccount: string;
  mobilePhone: string;
  email: string;
}

// VAT 회사정보 저장 요청 인터페이스 (수정 가능한 필드만)
export interface VatCompanyInfoUpdate {
  name?: string;
  representativeName?: string;
  establishmentDate?: string;
  businessType?: string[];
  businessCategory2?: string[];
  address?: string;
  phone?: string;
  refundBankName?: string;
  refundBankBranch?: string;
  refundAccount?: string;
  mobilePhone?: string;
  email?: string;
}

// VAT 회사정보 조회 API
export async function getVatCompanyInfo(token: string): Promise<VatCompanyInfo> {
  const response = await fetch(`${API_BASE_URL}/api/vat/company`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || 'VAT 회사정보 조회에 실패했습니다.');
  }

  return response.json();
}

// VAT 회사정보 저장 API
export async function saveVatCompanyInfo(
  data: VatCompanyInfoUpdate,
  token: string
): Promise<VatCompanyInfo> {
  const response = await fetch(`${API_BASE_URL}/api/vat/company`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || 'VAT 회사정보 저장에 실패했습니다.');
  }

  return response.json();
}

// 도장 업로드 API
export async function uploadStamp(file: File, token: string): Promise<{ success: boolean; message: string }> {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${API_BASE_URL}/api/user-assets/stamp`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      // Content-Type은 FormData 사용 시 브라우저가 자동으로 설정 (multipart/form-data)
    },
    body: formData,
  });

  if (!response.ok) {
    const errorText = await response.text();
    let errorData;
    try {
      errorData = JSON.parse(errorText);
    } catch {
      errorData = { error: errorText || `도장 업로드에 실패했습니다. (${response.status})` };
    }
    console.error('도장 업로드 API 에러:', {
      status: response.status,
      statusText: response.statusText,
      errorData,
      errorText,
    });
    throw new Error(errorData.error || errorData.message || `도장 업로드에 실패했습니다. (${response.status})`);
  }

  return response.json();
}

// 도장 조회 API (이미지 URL 반환)
export async function getStamp(token: string): Promise<string | null> {
  const response = await fetch(`${API_BASE_URL}/api/user-assets/stamp`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || '도장 조회에 실패했습니다.');
  }

  // 이미지 파일을 Blob으로 변환하여 URL 생성
  const blob = await response.blob();
  return URL.createObjectURL(blob);
}

// 도장 삭제 API
export async function deleteStamp(token: string): Promise<{ success: boolean; message: string }> {
  const response = await fetch(`${API_BASE_URL}/api/user-assets/stamp`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || '도장 삭제에 실패했습니다.');
  }

  return response.json();
}

// VAT 신고서 생성 API
export interface VatReportCreateRequest {
  filingDate: string; // YYYY-MM-DD
  filingType: 'SCHEDULED' | 'CONFIRMED' | 'AFTER_DEADLINE' | 'EARLY_REFUND';
}

export interface VatFormData {
  id: string;
  reportId: string;
  formCode: string;
  name: string;
  data: {
    values: Record<string, unknown>;
    states: Record<string, unknown>;
  };
}

export interface VatReportCreateResponse {
  id: string;
  userId: string;
  title: string;
  filingDate: string;
  filingType: string;
  isCompleted: boolean;
  lastModifiedAt: string;
  forms: VatFormData[];
}

export async function createVatReport(
  data: VatReportCreateRequest,
  token: string
): Promise<VatReportCreateResponse> {
  const response = await fetch(`${API_BASE_URL}/api/vat/reports`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || '신고서 생성에 실패했습니다.');
  }

  return response.json();
}
