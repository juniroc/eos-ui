'use client';

import Button from './Button';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  cancelText?: string;
  confirmText?: string;
  confirmVariant?: 'primary' | 'danger';
  onConfirm: () => void;
}

export default function ConfirmModal({
  isOpen,
  onClose,
  title,
  description,
  cancelText = '취소',
  confirmText = '확인',
  confirmVariant = 'primary',
  onConfirm,
}: ConfirmModalProps) {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
      <div className="flex flex-col items-center p-6 pt-6 pb-4 gap-6 w-[360px] bg-white">
        {/* Content Container */}
        <div className="flex flex-col items-start p-0 gap-1 w-full">
          {/* Title */}
          <h2 className="text-[15px] font-semibold leading-[140%] text-black w-full">
            {title}
          </h2>
          
          {/* Description */}
          <p className="text-[12px] leading-[140%] text-black w-full">
            {description}
          </p>
        </div>

        {/* Button Container */}
        <div className="flex flex-row justify-end items-start p-0 gap-2.5 w-full">
          <Button
            variant="neutral"
            size="small"
            onClick={onClose}
            style={{ width: 'auto', minWidth: 'auto' }}
          >
            {cancelText}
          </Button>
          <Button
            variant="primary"
            size="small"
            onClick={handleConfirm}
            style={{ 
              width: 'auto', 
              minWidth: 'auto',
              ...(confirmVariant === 'danger' && {
                background: '#EC221F',
                color: '#F5F5F5'
              })
            }}
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
}
