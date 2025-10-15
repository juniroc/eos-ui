'use client';

import { useState, useEffect } from 'react';
import Button from './Button';

interface PasswordEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (currentPassword: string, newPassword: string) => void | Promise<void>;
}

export default function PasswordEditModal({
  isOpen,
  onClose,
  onSave,
}: PasswordEditModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  // 모달이 열릴 때마다 초기화
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setCurrentPassword('');
      setNewPassword('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleNext = () => {
    if (!currentPassword.trim()) {
      alert('현재 비밀번호를 입력해주세요.');
      return;
    }
    setStep(2);
  };

  const handleSave = async () => {
    if (!newPassword.trim()) {
      alert('새 비밀번호를 입력해주세요.');
      return;
    }

    setIsSaving(true);
    try {
      await onSave(currentPassword, newPassword);
    } catch (error) {
      console.error('PasswordEditModal handleSave 에러:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setStep(1);
    setCurrentPassword('');
    setNewPassword('');
    onClose();
  };

  const handleBack = () => {
    setStep(1);
    setNewPassword('');
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
      <div className="flex flex-col items-center p-6 pt-6 pb-4 gap-6 w-[360px] bg-white">
        {/* Title */}
        <h2 className="text-[15px] font-semibold leading-[140%] text-black w-full">
          {step === 1 ? '현재 비밀번호 입력' : '새 비밀번호 입력'}
        </h2>

        {/* Input Field Container */}
        <div className="flex flex-col items-start p-0 gap-2 w-full">
          {step === 1 ? (
            <div className="flex flex-col items-start p-0 gap-2 w-full">
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="현재 비밀번호를 입력해주세요"
                className="flex flex-row items-center p-2 w-full min-w-[100px] h-8 bg-white border border-[#D9D9D9] text-[12px] font-medium leading-[100%] text-[#1E1E1E] placeholder:text-[#B3B3B3]"
                onKeyPress={(e) => e.key === 'Enter' && handleNext()}
              />
            </div>
          ) : (
            <div className="flex flex-col items-start p-0 gap-2 w-full">
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="새 비밀번호를 입력해주세요"
                className="flex flex-row items-center p-2 w-full min-w-[100px] h-8 bg-white border border-[#D9D9D9] text-[12px] font-medium leading-[100%] text-[#1E1E1E] placeholder:text-[#B3B3B3]"
                onKeyPress={(e) => e.key === 'Enter' && handleSave()}
              />
            </div>
          )}
        </div>

        {/* Button Container */}
        <div className="flex flex-row justify-end items-start p-0 gap-2.5 w-full">
          <Button
            variant="neutral"
            size="small"
            onClick={step === 1 ? handleCancel : handleBack}
            disabled={isSaving}
            style={{ width: 'auto', minWidth: 'auto' }}
          >
            {step === 1 ? '취소' : '이전'}
          </Button>
          <Button
            variant="primary"
            size="small"
            onClick={step === 1 ? handleNext : handleSave}
            disabled={isSaving}
            style={{ width: 'auto', minWidth: 'auto' }}
          >
            {step === 1 ? '다음' : isSaving ? '저장 중...' : '저장하기'}
          </Button>
        </div>
      </div>
    </div>
  );
}

