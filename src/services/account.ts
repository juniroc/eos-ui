// ========================================
// 계정관리 관련 API 함수들
// ========================================

const API_BASE_URL = 'https://api.eosxai.com';

// ========================================
// 타입 정의
// ========================================

export interface AccountInfo {
  name: string;
  email: string;
  mobilePhone: string;
  companyPhone: string;
  companyWebsite: string;
  isValidBusiness: boolean;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export interface ChangeNameRequest {
  name: string;
}

export interface ChangeEmailRequest {
  email: string;
}

export interface ChangeMobilePhoneRequest {
  mobilePhone: string;
}

export interface ChangeCompanyPhoneRequest {
  companyPhone: string;
}

export interface ChangeCompanyWebsiteRequest {
  companyWebsite: string;
}

export interface SuccessResponse {
  success: boolean;
}

export interface ErrorResponse {
  error: string;
}

// ========================================
// API 함수들
// ========================================

/**
 * 계정 정보 조회
 */
export async function getAccountInfo(token: string): Promise<AccountInfo> {
  const response = await fetch(`${API_BASE_URL}/api/account`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('계정 정보 조회에 실패했습니다.');
  }

  return response.json();
}

/**
 * 비밀번호 변경
 */
export async function changePassword(
  data: ChangePasswordRequest,
  token: string
): Promise<SuccessResponse> {
  const response = await fetch(`${API_BASE_URL}/api/account/password`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData: ErrorResponse = await response.json();
    throw new Error(errorData.error || '비밀번호 변경에 실패했습니다.');
  }

  return response.json();
}

/**
 * 이름 변경
 */
export async function changeName(
  data: ChangeNameRequest,
  token: string
): Promise<{ name: string }> {
  const response = await fetch(`${API_BASE_URL}/api/account/name`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData: ErrorResponse = await response.json();
    throw new Error(errorData.error || '이름 변경에 실패했습니다.');
  }

  return response.json();
}

/**
 * 이메일 변경
 */
export async function changeEmail(
  data: ChangeEmailRequest,
  token: string
): Promise<{ email: string }> {
  const response = await fetch(`${API_BASE_URL}/api/account/email`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData: ErrorResponse = await response.json();
    throw new Error(errorData.error || '이메일 변경에 실패했습니다.');
  }

  return response.json();
}

/**
 * 개인 전화번호 변경
 */
export async function changeMobilePhone(
  data: ChangeMobilePhoneRequest,
  token: string
): Promise<{ mobilePhone: string }> {
  const response = await fetch(`${API_BASE_URL}/api/account/mobile-phone`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData: ErrorResponse = await response.json();
    throw new Error(errorData.error || '개인 전화번호 변경에 실패했습니다.');
  }

  return response.json();
}

/**
 * 회사 전화번호 변경
 */
export async function changeCompanyPhone(
  data: ChangeCompanyPhoneRequest,
  token: string
): Promise<{ companyPhone: string }> {
  const response = await fetch(`${API_BASE_URL}/api/account/company-phone`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData: ErrorResponse = await response.json();
    throw new Error(errorData.error || '회사 전화번호 변경에 실패했습니다.');
  }

  return response.json();
}

/**
 * 회사 홈페이지 변경
 */
export async function changeCompanyWebsite(
  data: ChangeCompanyWebsiteRequest,
  token: string
): Promise<{ companyWebsite: string }> {
  const response = await fetch(`${API_BASE_URL}/api/account/company-website`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData: ErrorResponse = await response.json();
    throw new Error(errorData.error || '회사 홈페이지 변경에 실패했습니다.');
  }

  return response.json();
}

/**
 * 회원 탈퇴
 */
export async function deleteAccount(token: string): Promise<SuccessResponse> {
  const response = await fetch(`${API_BASE_URL}/api/account/delete-account`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData: ErrorResponse = await response.json();
    throw new Error(errorData.error || '회원 탈퇴에 실패했습니다.');
  }

  return response.json();
}

