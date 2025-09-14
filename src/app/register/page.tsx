'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { checkLoginId, extractBusinessInfo, registerUser } from '@/services/api';

interface BusinessInfo {
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
}

export default function RegisterPage() {
  const router = useRouter();
  const { login } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 단계별 상태
  const [step, setStep] = useState<'type' | 'business' | 'phone' | 'form'>('type');
  const [memberType, setMemberType] = useState<'business' | 'individual' | 'taxAgent' | null>(null);

  // 사업자등록증 관련
  const [businessFile, setBusinessFile] = useState<File | null>(null);
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo | null>(null);
  const [businessError, setBusinessError] = useState('');
  const [businessLoading, setBusinessLoading] = useState(false);

  // 전화번호 인증 관련
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [codeSent, setCodeSent] = useState(false);

  // 회원가입 폼
  const [formData, setFormData] = useState({
    loginId: '',
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    mobilePhone: '',
    companyPhone: '',
    companyWebsite: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isIdChecking, setIsIdChecking] = useState(false);
  const [isIdAvailable, setIsIdAvailable] = useState<boolean | null>(null);
  const [isRegistering, setIsRegistering] = useState(false);

  // 사업자등록증 파일 선택
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setBusinessFile(file);
      setBusinessError('');
    }
  };

  // 사업자등록증 업로드 및 정보 추출
  const handleBusinessUpload = async () => {
    if (!businessFile) return;

    setBusinessLoading(true);
    setBusinessError('');

    try {
      const result = await extractBusinessInfo(businessFile);
      if (result.success) {
        setBusinessInfo(result.data);
        setStep('phone');
      }
    } catch (error) {
      setBusinessError(error instanceof Error ? error.message : '사업자등록증 처리에 실패했습니다.');
    } finally {
      setBusinessLoading(false);
    }
  };

  // 전화번호 인증번호 발송
  const handleSendCode = () => {
    if (!phoneNumber) {
      setPhoneError('전화번호를 입력해주세요.');
      return;
    }
    setCodeSent(true);
    setPhoneError('');
  };

  // 전화번호 인증
  const handleVerifyPhone = () => {
    if (!verificationCode) {
      setPhoneError('인증번호를 입력해주세요.');
      return;
    }
    setPhoneVerified(true);
    setStep('form');
    setPhoneError('');
  };

  // ID 중복 확인
  const handleCheckId = async () => {
    if (!formData.loginId) return;

    setIsIdChecking(true);
    try {
      const result = await checkLoginId(formData.loginId);
      setIsIdAvailable(!result.duplicated);
    } catch (error) {
      console.error('ID 중복 확인 에러:', error);
    } finally {
      setIsIdChecking(false);
    }
  };

  // 폼 유효성 검사
  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.loginId) errors.loginId = '아이디를 입력해주세요.';
    if (!formData.email) errors.email = '이메일을 입력해주세요.';
    if (!formData.password) errors.password = '비밀번호를 입력해주세요.';
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = '비밀번호가 일치하지 않습니다.';
    }
    if (!formData.name) errors.name = '이름을 입력해주세요.';
    if (!formData.mobilePhone) errors.mobilePhone = '휴대폰 번호를 입력해주세요.';
    if (!formData.companyPhone) errors.companyPhone = '회사 전화번호를 입력해주세요.';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // 회원가입 처리
  const handleRegister = async () => {
    if (!validateForm()) return;

    if (memberType === 'business' && (!businessFile || !businessInfo)) {
      alert('사업자등록증을 업로드하고 인증을 완료해주세요.');
      return;
    }

    setIsRegistering(true);

    try {
      const result = await registerUser({
        businessRegistrationFile: businessFile || new File([], 'dummy.pdf', { type: 'application/pdf' }),
        businessInfo: businessInfo ? JSON.stringify(businessInfo) : JSON.stringify({
          companyName: '',
          businessNumber: '',
          businessCategory: memberType === 'individual' ? '개인' : '',
          corporateNumber: '',
          representativeName: formData.name,
          establishmentDate: '',
          address: '',
          businessType: [],
          businessCategory2: [],
          taxOffice: '',
          isTaxAgent: memberType === 'taxAgent',
          taxAgentType: memberType === 'taxAgent' ? '세무대리인' : '',
        }),
        loginId: formData.loginId,
        email: formData.email,
        password: formData.password,
        name: formData.name,
        mobilePhone: formData.mobilePhone,
        companyPhone: formData.companyPhone,
        companyWebsite: formData.companyWebsite,
      });

      await login(result.token, result.user);
      router.push('/');
    } catch (error) {
      console.error('회원가입 에러:', error);
      alert(error instanceof Error ? error.message : '회원가입에 실패했습니다.');
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow rounded-lg p-12 w-[400px] text-center">
        {/* 유형 선택 화면 */}
        {step === 'type' && (
          <>
            <h2 className="text-xl font-bold text-gray-900">회원가입</h2>
            <p className="mt-2 text-gray-500 text-sm">회원가입 유형을 선택해주세요.</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <button
                onClick={() => {
                  setMemberType('business');
                  setStep('business');
                }}
                className="border border-gray-300 rounded-lg p-6 hover:border-black hover:bg-gray-50 transition"
              >
                <div className="flex flex-col items-center">
                  <span className="text-4xl mb-2">👜</span>
                  <span className="text-sm font-medium text-gray-900">기업 회원가입</span>
                </div>
              </button>
              <button
                onClick={() => {
                  setMemberType('taxAgent');
                  setStep('form');
                }}
                className="border border-gray-300 rounded-lg p-6 hover:border-black hover:bg-gray-50 transition"
              >
                <div className="flex flex-col items-center">
                  <span className="text-4xl mb-2">💲</span>
                  <span className="text-sm font-medium text-gray-900">세무대리인 회원가입</span>
                </div>
              </button>
            </div>
            <div className="mt-10">
              <p className="text-xs text-gray-400">© 2025 EOSSOLUTION, Inc.</p>
            </div>
          </>
        )}

        {/* 사업자등록증 업로드 */}
        {step === 'business' && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">사업자등록증 인증</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
              <div className="text-4xl mb-4">📄</div>
              <p className="text-gray-600 mb-4">사업자등록증을 업로드해주세요</p>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileSelect}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                파일 선택
              </button>
              {businessFile && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600">{businessFile.name}</p>
                  <button
                    onClick={handleBusinessUpload}
                    disabled={businessLoading}
                    className="mt-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 disabled:opacity-50"
                  >
                    {businessLoading ? '처리 중...' : '인증하기'}
                  </button>
                </div>
              )}
              {businessError && (
                <p className="mt-2 text-sm text-red-600">{businessError}</p>
              )}
            </div>
          </div>
        )}

        {/* 전화번호 인증 */}
        {step === 'phone' && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">전화번호 인증</h3>
            <input
              type="tel"
              placeholder="전화번호를 입력하세요"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
            />
            <button
              onClick={handleSendCode}
              disabled={codeSent}
              className="w-full bg-blue-600 text-white py-2 rounded-md mb-4 disabled:opacity-50"
            >
              {codeSent ? '인증번호 발송됨' : '인증번호 발송'}
            </button>
            {codeSent && (
              <>
                <input
                  type="text"
                  placeholder="인증번호를 입력하세요"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
                />
                <button
                  onClick={handleVerifyPhone}
                  className="w-full bg-green-600 text-white py-2 rounded-md"
                >
                  인증하기
                </button>
              </>
            )}
            {phoneError && <p className="text-sm text-red-600 mt-2">{phoneError}</p>}
          </div>
        )}

        {/* 최종 폼 */}
        {step === 'form' && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">회원 정보 입력</h3>
            <div className="space-y-4 text-left">
              {/* 아이디 */}
              <div>
                <label className="block text-sm font-medium text-gray-700">아이디</label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={formData.loginId}
                    onChange={(e) => setFormData({ ...formData, loginId: e.target.value })}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                  />
                  <button
                    onClick={handleCheckId}
                    disabled={isIdChecking || !formData.loginId}
                    className="px-4 py-2 bg-gray-600 text-white rounded-md"
                  >
                    {isIdChecking ? '확인 중...' : '중복 확인'}
                  </button>
                </div>
                {isIdAvailable === true && <p className="text-sm text-green-600">사용 가능한 아이디입니다.</p>}
                {isIdAvailable === false && <p className="text-sm text-red-600">이미 사용 중인 아이디입니다.</p>}
              </div>

              {/* 이메일 */}
              <div>
                <label className="block text-sm font-medium text-gray-700">이메일</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* 비밀번호 */}
              <div>
                <label className="block text-sm font-medium text-gray-700">비밀번호</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* 비밀번호 확인 */}
              <div>
                <label className="block text-sm font-medium text-gray-700">비밀번호 확인</label>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* 이름 */}
              <div>
                <label className="block text-sm font-medium text-gray-700">이름</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* 휴대폰 */}
              <div>
                <label className="block text-sm font-medium text-gray-700">휴대폰 번호</label>
                <input
                  type="tel"
                  value={formData.mobilePhone}
                  onChange={(e) => setFormData({ ...formData, mobilePhone: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* 회사 전화번호 */}
              <div>
                <label className="block text-sm font-medium text-gray-700">회사 전화번호</label>
                <input
                  type="tel"
                  value={formData.companyPhone}
                  onChange={(e) => setFormData({ ...formData, companyPhone: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* 회사 웹사이트 */}
              <div>
                <label className="block text-sm font-medium text-gray-700">회사 웹사이트 (선택)</label>
                <input
                  type="url"
                  value={formData.companyWebsite}
                  onChange={(e) => setFormData({ ...formData, companyWebsite: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <button
                onClick={handleRegister}
                disabled={isRegistering || isIdAvailable === false}
                className="w-full bg-blue-600 text-white py-2 rounded-md"
              >
                {isRegistering ? '가입 중...' : '가입하기'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
