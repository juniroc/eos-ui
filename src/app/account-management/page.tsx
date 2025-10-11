'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import FileUpload from '@/components/FileUpload';
import EditModal from '@/components/EditModal';
import ConfirmModal from '@/components/ConfirmModal';

export default function AccountManagement() {
  const { user, logout } = useAuth();
  const router = useRouter();

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

  const handleFileUpload = (file: File) => {
    console.log('사업자등록증 파일 업로드:', file);
    // TODO: 파일 업로드 API 호출
  };

  // Modal save handlers
  const handlePasswordSave = (newPassword: string) => {
    console.log('비밀번호 변경:', newPassword);
    // TODO: 비밀번호 변경 API 호출
  };

  const handleNameSave = (newName: string) => {
    console.log('성명 변경:', newName);
    // TODO: 성명 변경 API 호출
  };

  const handleEmailSave = (newEmail: string) => {
    console.log('이메일 변경:', newEmail);
    // TODO: 이메일 변경 API 호출
  };

  const handlePhoneSave = (newPhone: string) => {
    console.log('개인 전화번호 변경:', newPhone);
    // TODO: 개인 전화번호 변경 API 호출
  };

  const handleCompanyPhoneSave = (newPhone: string) => {
    console.log('회사 전화번호 변경:', newPhone);
    // TODO: 회사 전화번호 변경 API 호출
  };

  const handleCompanyWebsiteSave = (newWebsite: string) => {
    console.log('회사 홈페이지 변경:', newWebsite);
    // TODO: 회사 홈페이지 변경 API 호출
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
      currentValue: user?.name || '',
      placeholder: '성명을 입력해주세요',
      onSave: handleNameSave,
    },
    email: {
      title: '이메일 변경',
      currentValue: user?.email || '',
      placeholder: '이메일을 입력해주세요',
      onSave: handleEmailSave,
    },
    phone: {
      title: '개인 전화번호 변경',
      currentValue: '010-1234-5678',
      placeholder: '전화번호를 입력해주세요',
      onSave: handlePhoneSave,
    },
    companyPhone: {
      title: '회사 전화번호 변경',
      currentValue: '02-1234-5678',
      placeholder: '회사 전화번호를 입력해주세요',
      onSave: handleCompanyPhoneSave,
    },
    companyWebsite: {
      title: '회사 홈페이지 변경',
      currentValue: '',
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

  const confirmWithdraw = () => {
    console.log('회원 탈퇴');
    // TODO: 회원 탈퇴 API 호출
  };
  return (
    <div className="flex flex-col items-center p-4 gap-4 max-w-[1200px] mx-auto">
      {/* Account Section */}
      <div className="flex flex-col items-start p-4 gap-4 w-[480px]">
        {/* Menu Heading */}
        <div className="flex flex-col items-start py-1.5 px-0 pb-0.5 w-full rounded-lg">
          <div className="flex flex-row items-start p-0 w-[52px]">
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
            <span className="text-[12px] font-semibold leading-[140%] text-[#009951] w-full">
              정상적인 사업자입니다. {/* TODO: db값 반영하기 */}
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
          <div className="flex flex-col items-start p-0 w-[66px]">
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
              {user?.name || '홍길동'}
            </span>
          </div>
          <div className="flex flex-col items-start p-0 w-[66px]">
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
              {user?.email || 'example@eossolution.com'}
            </span>
          </div>
          <div className="flex flex-col items-start p-0 w-[66px]">
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
              010-1234-5678 {/* TODO: db값 반영하기 */}
            </span>
          </div>
          <div className="flex flex-col items-start p-0 w-[66px]">
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
              02-1234-5678 {/* TODO: db값 반영하기 */}
            </span>
          </div>
          <div className="flex flex-col items-start p-0 w-[66px]">
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
            <span className="text-[12px] font-semibold leading-[140%] text-[#B3B3B3] w-full">
              등록을 완료해주세요.
            </span>
          </div>
          <div className="flex flex-col items-start p-0 w-[45px]">
            <Button 
              variant="neutral" 
              size="small" 
              onClick={handleCompanyWebsiteChange}
              style={{ width: 'auto', minWidth: 'auto' }}
            >
              등록
            </Button>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-[#D9D9D9]"></div>

        {/* Bottom Buttons */}
        <div className="flex flex-col items-start p-0 gap-1 w-[66px]">
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
    </div>
  );
}
