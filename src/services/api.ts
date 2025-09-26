// 실제 API 서버 호스트 (명세서에 따라 수정 필요)
const API_BASE_URL = 'https://api.eosxai.com'; // 실제 API 서버 URL로 변경 필요

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

  const response = await fetch(`https://api.eosxai.com/api/ai/extract-business-info`, {
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


export async function saveCardDocs(data: { documentId: string; cards: Array<{ cardIssuer: string; cardNumber: string; cardType?: string; purpose?: string; primaryUser?: string }> }, token: string): Promise<{ success: boolean; partners: Array<{ id: string; cardIssuer: string; cardNumber: string; cardType: string; purpose: string; primaryUser: string; createdAt: string }> }> {
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

  const response = await fetch(`https://api.eosxai.com/api/shareholder-docs/extract-list`, {
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
  const response = await fetch(`https://api.eosxai.com/api/shareholder-docs/save`, {
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
  const response = await fetch(`https://api.eosxai.com/api/shareholders/${id}`, {
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

  const response = await fetch(`https://api.eosxai.com/api/ai/extract-business-info-with-tax-agent`, {
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
