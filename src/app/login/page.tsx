'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import { useAuth } from '@/contexts/AuthContext';
import { login } from '@/services/api';

interface LoginForm {
  loginId: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: {
    id: string;
    loginId: string;
    email: string;
    name: string;
  };
}

interface LoginError {
  error: string;
  subscriptionExpired?: boolean;
}

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
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            EOS 로그인
          </h2>
          <p className="text-gray-600">
            사업자등록정보 관리 시스템에 로그인하세요
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label htmlFor="loginId" className="block text-sm font-medium text-gray-700 mb-1">
                아이디
              </label>
              <input
                id="loginId"
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="아이디를 입력하세요"
                value={formData.loginId}
                onChange={(e) => handleChange('loginId', e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                비밀번호
              </label>
              <input
                id="password"
                type="password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="비밀번호를 입력하세요"
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-md">
              {error}
            </div>
          )}

          <div>
            <Button
              type="submit"
              variant="primary"
              size="large"
              className="w-full"
              loading={loading}
              disabled={loading}
            >
              {loading ? '로그인 중...' : '로그인'}
            </Button>
          </div>
{/* 
          <div className="text-center text-sm text-gray-600">
            <p>테스트 계정: uitest / 12345</p>
          </div> */}
        </form>
      </div>
    </div>
  );
}
