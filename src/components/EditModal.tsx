'use client';

import { useState, useEffect } from 'react';
import Button from './Button';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  currentValue: string;
  placeholder?: string;
  onSave: (value: string) => void;
}

export default function EditModal({
  isOpen,
  onClose,
  title,
  currentValue,
  placeholder = '',
  onSave,
}: EditModalProps) {
  const [value, setValue] = useState(currentValue);

  // 모달이 열릴 때마다 currentValue로 초기화
  useEffect(() => {
    if (isOpen) {
      setValue(currentValue);
    }
  }, [isOpen, currentValue]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(value);
    onClose();
  };

  const handleCancel = () => {
    setValue(currentValue); // 원래 값으로 복원
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
      <div className="flex flex-col items-center p-6 pt-6 pb-4 gap-6 w-[360px] bg-white">
        {/* Title */}
        <h2 className="text-[15px] font-semibold leading-[140%] text-black w-full">
          {title}
        </h2>

        {/* Input Field Container */}
        <div className="flex flex-col items-start p-0 gap-2 w-full">
          {/* Input Field */}
          <div className="flex flex-col items-start p-0 gap-2 w-full">
            {/* Input */}
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={placeholder}
              className="flex flex-row items-center p-2 w-full min-w-[100px] h-8 bg-white border border-[#D9D9D9] text-[12px] font-medium leading-[100%] text-[#1E1E1E] placeholder:text-[#B3B3B3]"
            />
          </div>
        </div>

        {/* Button Container */}
        <div className="flex flex-row justify-end items-start p-0 gap-2.5 w-full">
          <Button
            variant="neutral"
            size="small"
            onClick={handleCancel}
            style={{ width: 'auto', minWidth: 'auto' }}
          >
            취소
          </Button>
          <Button
            variant="primary"
            size="small"
            onClick={handleSave}
            style={{ width: 'auto', minWidth: 'auto' }}
          >
            저장하기
          </Button>
        </div>
      </div>
    </div>
  );
}
