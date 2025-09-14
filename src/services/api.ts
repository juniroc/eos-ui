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

export async function saveCardDocs(data: { documentId: string; cards: Array<{ cardName: string; cardNumber: string; expiryDate?: string; purpose?: string; note?: string }> }, token: string): Promise<{ success: boolean; cards: Array<{ id: string; cardName: string; cardNumber: string; expiryDate: string; purpose: string; note: string; createdAt: string }> }> {
  const response = await fetch(`${API_BASE_URL}/api/card-docs/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('카드 정보 저장에 실패했습니다.');
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
