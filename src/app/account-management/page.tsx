'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import FileUpload from '@/components/FileUpload';
import EditModal from '@/components/EditModal';
import ConfirmModal from '@/components/ConfirmModal';
import ToastMessage from '@/components/ToastMessage';
import {
  getAccountInfo,
  changePassword,
  changeName,
  changeEmail,
  changeMobilePhone,
  changeCompanyPhone,
  changeCompanyWebsite,
  deleteAccount,
  AccountInfo,
} from '@/services/account';

export default function AccountManagement() {
  const { user, token, logout } = useAuth();
  const router = useRouter();
  const [accountInfo, setAccountInfo] = useState<AccountInfo | null>(null);
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  // Modal states
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    title: string;
    currentValue: string;
    placeholder: string;
    onSave: (value: string) => void;
  }>({
    isOpen: false,
    title: '',
    currentValue: '',
    placeholder: '',
    onSave: () => {},
  });

  // Confirm Modal 설정
  const [confirmModalConfig, setConfirmModalConfig] = useState<{
    isOpen: boolean;
    title: string;
    description: string;
    cancelText: string;
    confirmText: string;
    confirmVariant: 'primary' | 'danger';
    onConfirm: () => void;
  }>({
    isOpen: false,
    title: '',
    description: '',
    cancelText: '취소',
    confirmText: '확인',
    confirmVariant: 'primary',
    onConfirm: () => {},
  });

  // 계정 정보 불러오기
  useEffect(() => {
    const loadAccountInfo = async () => {
      if (!token) {
        console.log('토큰이 없어서 계정 정보를 불러올 수 없습니다.');
        return;
      }

      try {
        const data = await getAccountInfo(token);
        setAccountInfo(data);
      } catch (error) {
        console.error('계정 정보 조회 실패:', error);
      }
    };

    loadAccountInfo();
  }, [token]);

  // 토스트 메시지 표시 함수
  const showToast = (message: string) => {
    setToastMessage(message);
    setIsToastVisible(true);
  };

  const handleFileUpload = (file: File) => {
    console.log('사업자등록증 파일 업로드:', file);
    // TODO: 파일 업로드 API 호출
  };

  // Modal save handlers
  const handlePasswordSave = async (newPassword: string) => {
    if (!token) return;

    try {
      // EditModal에서는 새 비밀번호만 입력받으므로, 현재 비밀번호는 별도 처리 필요
      // 여기서는 임시로 currentPassword를 빈 문자열로 처리
      // 실제로는 비밀번호 변경 모달을 별도로 만들거나 두 필드를 받아야 함
      await changePassword({ currentPassword: '', newPassword }, token);
      closeModal();
      showToast('비밀번호가 변경되었습니다.');
    } catch (error) {
      console.error('비밀번호 변경 실패:', error);
      alert(error instanceof Error ? error.message : '비밀번호 변경에 실패했습니다.');
    }
  };

  const handleNameSave = async (newName: string) => {
    if (!token) return;

    try {
      await changeName({ name: newName }, token);
      setAccountInfo(prev => prev ? { ...prev, name: newName } : null);
      closeModal();
      showToast('성명이 변경되었습니다.');
    } catch (error) {
      console.error('성명 변경 실패:', error);
      alert(error instanceof Error ? error.message : '성명 변경에 실패했습니다.');
    }
  };

  const handleEmailSave = async (newEmail: string) => {
    if (!token) return;

    try {
      await changeEmail({ email: newEmail }, token);
      setAccountInfo(prev => prev ? { ...prev, email: newEmail } : null);
      closeModal();
      showToast('이메일이 변경되었습니다.');
    } catch (error) {
      console.error('이메일 변경 실패:', error);
      alert(error instanceof Error ? error.message : '이메일 변경에 실패했습니다.');
    }
  };

  const handlePhoneSave = async (newPhone: string) => {
    if (!token) return;

    try {
      await changeMobilePhone({ mobilePhone: newPhone }, token);
      setAccountInfo(prev => prev ? { ...prev, mobilePhone: newPhone } : null);
      closeModal();
      showToast('개인 전화번호가 변경되었습니다.');
    } catch (error) {
      console.error('개인 전화번호 변경 실패:', error);
      alert(error instanceof Error ? error.message : '개인 전화번호 변경에 실패했습니다.');
    }
  };

  const handleCompanyPhoneSave = async (newPhone: string) => {
    if (!token) return;

    try {
      await changeCompanyPhone({ companyPhone: newPhone }, token);
      setAccountInfo(prev => prev ? { ...prev, companyPhone: newPhone } : null);
      closeModal();
      showToast('회사 전화번호가 변경되었습니다.');
    } catch (error) {
      console.error('회사 전화번호 변경 실패:', error);
      alert(error instanceof Error ? error.message : '회사 전화번호 변경에 실패했습니다.');
    }
  };

  const handleCompanyWebsiteSave = async (newWebsite: string) => {
    if (!token) return;

    try {
      await changeCompanyWebsite({ companyWebsite: newWebsite }, token);
      setAccountInfo(prev => prev ? { ...prev, companyWebsite: newWebsite } : null);
      closeModal();
      showToast('회사 홈페이지가 변경되었습니다.');
    } catch (error) {
      console.error('회사 홈페이지 변경 실패:', error);
      alert(error instanceof Error ? error.message : '회사 홈페이지 변경에 실패했습니다.');
    }
  };

  // 필드별 설정 데이터
  const fieldConfigs = {
    password: {
      title: '비밀번호 변경',
      currentValue: '',
      placeholder: '새 비밀번호를 입력해주세요',
      onSave: handlePasswordSave,
    },
    name: {
      title: '성명 변경',
      currentValue: accountInfo?.name || user?.name || '',
      placeholder: '성명을 입력해주세요',
      onSave: handleNameSave,
    },
    email: {
      title: '이메일 변경',
      currentValue: accountInfo?.email || user?.email || '',
      placeholder: '이메일을 입력해주세요',
      onSave: handleEmailSave,
    },
    phone: {
      title: '개인 전화번호 변경',
      currentValue: accountInfo?.mobilePhone || '',
      placeholder: '전화번호를 입력해주세요',
      onSave: handlePhoneSave,
    },
    companyPhone: {
      title: '회사 전화번호 변경',
      currentValue: accountInfo?.companyPhone || '',
      placeholder: '회사 전화번호를 입력해주세요',
      onSave: handleCompanyPhoneSave,
    },
    companyWebsite: {
      title: '회사 홈페이지 변경',
      currentValue: accountInfo?.companyWebsite || '',
      placeholder: '회사 홈페이지 주소를 입력해주세요',
      onSave: handleCompanyWebsiteSave,
    },
  };

  // 범용 모달 열기 함수
  const openModal = (fieldKey: keyof typeof fieldConfigs) => {
    setModalConfig({
      isOpen: true,
      ...fieldConfigs[fieldKey],
    });
  };

  const closeModal = () => {
    setModalConfig(prev => ({ ...prev, isOpen: false }));
  };

  // 각 필드별 핸들러들 (한 줄로 단순화)
  const handlePasswordChange = () => openModal('password');
  const handleNameChange = () => openModal('name');
  const handleEmailChange = () => openModal('email');
  const handlePhoneChange = () => openModal('phone');
  const handleCompanyPhoneChange = () => openModal('companyPhone');
  const handleCompanyWebsiteChange = () => openModal('companyWebsite');

  // 범용 확인 모달 열기 함수
  const openConfirmModal = (config: {
    title: string;
    description: string;
    cancelText: string;
    confirmText: string;
    confirmVariant?: 'primary' | 'danger';
    onConfirm: () => void;
  }) => {
    setConfirmModalConfig({
      isOpen: true,
      confirmVariant: 'primary',
      ...config,
    });
  };

  const closeConfirmModal = () => {
    setConfirmModalConfig(prev => ({ ...prev, isOpen: false }));
  };

  const handleLogout = () => {
    openConfirmModal({
      title: '로그아웃 하시겠어요?',
      description: '로그아웃하면 현재 세션이 즉시 종료됩니다.',
      cancelText: '뒤로가기',
      confirmText: '로그아웃',
      onConfirm: confirmLogout,
    });
  };

  const confirmLogout = () => {
    logout();
    router.push('/login');
  };

  const handleWithdraw = () => {
    openConfirmModal({
      title: '정말 탈퇴하시겠어요?',
      description: '탈퇴하면 로그인과 모든 기능이 종료됩니다.',
      cancelText: '뒤로가기',
      confirmText: '탈퇴',
      confirmVariant: 'danger',
      onConfirm: confirmWithdraw,
    });
  };

  const confirmWithdraw = async () => {
    if (!token) return;

    try {
      await deleteAccount(token);
      showToast('회원 탈퇴가 완료되었습니다.');
      setTimeout(() => {
        logout();
        router.push('/login');
      }, 1000);
    } catch (error) {
      console.error('회원 탈퇴 실패:', error);
      alert(error instanceof Error ? error.message : '회원 탈퇴에 실패했습니다.');
    }
  };
  return (
    <div className="flex flex-col items-center p-4 gap-4">
      {/* Account Section */}
      <div className="flex flex-col items-start p-4 gap-4 w-[480px]">
        {/* Menu Heading */}
        <div className="flex flex-col items-start py-1.5 px-0 pb-0.5 w-full rounded-lg">
          <div className="flex flex-row items-start p-0">
            <span className="text-[15px] font-semibold leading-[140%] text-[#1E1E1E]">
              계정
            </span>
          </div>
        </div>

        {/* Business Registration Item */}
        <div className="flex flex-row justify-between items-center p-0 gap-3 w-full">
          <div className="flex flex-col items-start p-0 flex-1">
            <span className="text-[13px] leading-[140%] text-[#757575] w-full">
              사업자등록증
            </span>
            <span className={`text-[12px] font-semibold leading-[140%] w-full ${
              accountInfo?.isValidBusiness ? 'text-[#009951]' : 'text-[#FF0000]'
            }`}>
              {accountInfo?.isValidBusiness ? '정상적인 사업자입니다.' : '사업자 확인이 필요합니다.'}
            </span>
          </div>
          <div className="flex flex-col items-start p-0">
            <FileUpload
              id="business-registration"
              onFileUpload={handleFileUpload}
              className="w-full"
            >
              <Button variant="neutral" size="small" className="w-full">
                사업자등록증 재업로드
              </Button>
            </FileUpload>
          </div>
        </div>

        {/* ID Item */}
        <div className="flex flex-row justify-between items-center p-0 gap-3 w-full">
          <div className="flex flex-col items-start p-0 flex-1">
            <span className="text-[13px] leading-[140%] text-[#757575] w-full">
              ID
            </span>
            <span className="text-[12px] font-semibold leading-[140%] text-[#1E1E1E] w-full">
              {user?.loginId || 'EOSSOLUTION1'}
            </span>
          </div>
        </div>

        {/* Password Item */}
        <div className="flex flex-row justify-between items-center p-0 gap-3 w-full">
          <div className="flex flex-col items-start p-0 flex-1">
            <span className="text-[13px] leading-[140%] text-[#757575] w-full">
              PW
            </span>
            <span className="text-[12px] font-semibold leading-[140%] text-[#1E1E1E] w-full">
              ********
            </span>
          </div>
          <div className="flex flex-col items-start p-0">
            <Button 
              variant="primary" 
              size="small" 
              onClick={handlePasswordChange}
              style={{ width: 'auto', minWidth: 'auto' }}
            >
              수정하기
            </Button>
          </div>
        </div>

        {/* Additional ID Items */}
        <div className="flex flex-row justify-between items-center p-0 gap-3 w-full">
          <div className="flex flex-col items-start p-0 flex-1">
            <span className="text-[13px] leading-[140%] text-[#757575] w-full">
              성명
            </span>
            <span className="text-[12px] font-semibold leading-[140%] text-[#1E1E1E] w-full">
              {accountInfo?.name || user?.name || '홍길동'}
            </span>
          </div>
          <div className="flex flex-col items-start p-0">
            <Button 
              variant="primary" 
              size="small" 
              onClick={handleNameChange}
              style={{ width: 'auto', minWidth: 'auto' }}
            >
              수정하기
            </Button>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center p-0 gap-3 w-full">
          <div className="flex flex-col items-start p-0 flex-1">
            <span className="text-[13px] leading-[140%] text-[#757575] w-full">
              이메일
            </span>
            <span className="text-[12px] font-semibold leading-[140%] text-[#1E1E1E] w-full">
              {accountInfo?.email || user?.email || 'example@eossolution.com'}
            </span>
          </div>
          <div className="flex flex-col items-start p-0">
            <Button 
              variant="primary" 
              size="small" 
              onClick={handleEmailChange}
              style={{ width: 'auto', minWidth: 'auto' }}
            >
              수정하기
            </Button>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center p-0 gap-3 w-full">
          <div className="flex flex-col items-start p-0 flex-1">
            <span className="text-[13px] leading-[140%] text-[#757575] w-full">
              개인 전화번호
            </span>
            <span className="text-[12px] font-semibold leading-[140%] text-[#1E1E1E] w-full">
              {accountInfo?.mobilePhone || '등록을 완료해주세요.'}
            </span>
          </div>
          <div className="flex flex-col items-start p-0">
            <Button 
              variant="primary" 
              size="small" 
              onClick={handlePhoneChange}
              style={{ width: 'auto', minWidth: 'auto' }}
            >
              수정하기
            </Button>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center p-0 gap-3 w-full">
          <div className="flex flex-col items-start p-0 flex-1">
            <span className="text-[13px] leading-[140%] text-[#757575] w-full">
              회사 전화번호
            </span>
            <span className="text-[12px] font-semibold leading-[140%] text-[#1E1E1E] w-full">
              {accountInfo?.companyPhone || '등록을 완료해주세요.'}
            </span>
          </div>
          <div className="flex flex-col items-start p-0">
            <Button 
              variant="primary" 
              size="small" 
              onClick={handleCompanyPhoneChange}
              style={{ width: 'auto', minWidth: 'auto' }}
            >
              수정하기
            </Button>
          </div>
        </div>

        {/* Incomplete Registration Item */}
        <div className="flex flex-row justify-between items-center p-0 gap-3 w-full">
          <div className="flex flex-col items-start p-0 flex-1">
            <span className="text-[13px] leading-[140%] text-[#757575] w-full">
              회사 홈페이지
            </span>
            <span className={`text-[12px] font-semibold leading-[140%] w-full ${
              accountInfo?.companyWebsite ? 'text-[#1E1E1E]' : 'text-[#B3B3B3]'
            }`}>
              {accountInfo?.companyWebsite || '등록을 완료해주세요.'}
            </span>
          </div>
          <div className="flex flex-col items-start p-0">
            <Button 
              variant={accountInfo?.companyWebsite ? "primary" : "neutral"}
              size="small" 
              onClick={handleCompanyWebsiteChange}
              style={{ width: 'auto', minWidth: 'auto' }}
            >
              {accountInfo?.companyWebsite ? '수정하기' : '등록'}
            </Button>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-[#D9D9D9]"></div>

        {/* Bottom Buttons */}
        <div className="flex flex-col items-start p-0 gap-1">
          <Button 
            variant="neutral" 
            size="small" 
            onClick={handleLogout}
            className="w-full"
            style={{
              background: 'transparent',
              border: 'none',
              padding: '8px 12px'
            }}
          >
            로그아웃
          </Button>
          <Button 
            variant="neutral" 
            size="small" 
            onClick={handleWithdraw}
            className="w-full"
            style={{
              background: 'transparent',
              border: 'none',
              padding: '8px 12px'
            }}
          >
            탈퇴하기
          </Button>
        </div>
      </div>

      {/* Modals */}
      <EditModal
        isOpen={modalConfig.isOpen}
        onClose={closeModal}
        title={modalConfig.title}
        currentValue={modalConfig.currentValue}
        placeholder={modalConfig.placeholder}
        onSave={modalConfig.onSave}
      />

      <ConfirmModal
        isOpen={confirmModalConfig.isOpen}
        onClose={closeConfirmModal}
        title={confirmModalConfig.title}
        description={confirmModalConfig.description}
        cancelText={confirmModalConfig.cancelText}
        confirmText={confirmModalConfig.confirmText}
        confirmVariant={confirmModalConfig.confirmVariant}
        onConfirm={confirmModalConfig.onConfirm}
      />

      <ToastMessage
        message={toastMessage}
        isVisible={isToastVisible}
        onHide={() => setIsToastVisible(false)}
      />
    </div>
  );
}
