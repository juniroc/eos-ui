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

// 사업자등록증 업로드 및 정보 추출 API
export async function extractBusinessInfo(file: File, token: string): Promise<BusinessInfoExtractionResponse> {
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
