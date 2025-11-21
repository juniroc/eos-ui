'use client';

import { useAuth } from '@/contexts/AuthContext';
import { login } from '@/services/api';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
interface LoginForm {
  loginId: string;
  password: string;
}

// interface LoginResponse {
//   token: string;
//   user: {
//     id: string;
//     loginId: string;
//     email: string;
//     name: string;
//   };
// }

// interface LoginError {
//   error: string;
//   subscriptionExpired?: boolean;
// }

export default function LoginPage() {
  const router = useRouter();
  const { login: authLogin } = useAuth();
  const [formData, setFormData] = useState<LoginForm>({
    loginId: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field: keyof LoginForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError(''); // 입력 시 에러 메시지 초기화
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.loginId.trim() || !formData.password.trim()) {
      setError('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    try {
      setLoading(true);
      setError('');

      const loginData = await login({
        loginId: formData.loginId,
        password: formData.password,
      });
      
      // AuthContext를 통해 로그인 처리
      authLogin(loginData.token, loginData.user);
      
      // 메인 페이지로 리다이렉트
      router.push('/');
    } catch (err) {
      console.error('로그인 에러:', err);
      setError(err instanceof Error ? err.message : '네트워크 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* 왼쪽 배경 이미지 */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <Image
          src="/login_bg.png"
          alt="Login Background"
          fill
          className="object-cover"
        />
      </div>

      {/* 오른쪽 로그인 폼 */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-[#F5F5F5]">
        <div className="w-full max-w-md space-y-8">
          <div className="text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              EOS 회계시스템 로그인
            </h2>
            <p className="text-[#757575]">
              시작하려면 로그인 또는 회원가입을 해주세요.
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="space-y-4">
              <div>
                <label htmlFor="loginId" className="block text-sm font-medium text-[#757575] mb-1">
                  아이디
                </label>
                <input
                  id="loginId"
                  type="text"
                  required
                  className="w-full px-3 py-2 border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="아이디를 입력해주세요."
                  value={formData.loginId}
                  onChange={(e) => handleChange('loginId', e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#757575] mb-1">
                  비밀번호
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 bg-white"
                  placeholder="비밀번호를 입력해주세요."
                  value={formData.password}
                  onChange={(e) => handleChange('password', e.target.value)}
                />
              </div>
            </div>

            {/* 계정/비밀번호 찾기 링크 */}
            <div className="text-center">
              <span className="text-[#757575]">계정, 비밀번호를 잊으셨나요? </span>
              <button
                type="button"
                className="text-gray-700 bold"
              >
                계정정보 찾기
              </button>
            </div>

            {error && (
              <div className="text-red-600 text-sm text-center bg-red-50 p-3">
                {error}
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full bg-[#2C2C2C] text-white py-3 px-4 hover:bg-[#2C2C2C] disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? '로그인 중...' : '로그인'}
              </button>
            </div>

            <div className="text-center">
              <span className="text-[#757575]">계정이 없으신가요? </span>
              <button
                type="button"
                onClick={() => router.push('/register')}
                className="text-[#1ACCFF] underline"
              >
                회원가입
              </button>
            </div>

          </form>

          {/* 하단 로고 및 저작권 */}
          <div className="mt-12 flex flex-col items-center">
            <Image src="/eos-logo.svg" alt="logo" width={80} height={28} />
            <p className="text-xs text-[#B3B3B3] mt-[8px]">© 2025 EOSSOLUTION, Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
