import Image from 'next/image';
import { useEffect } from 'react';

interface ToastMessageProps {
  message: string;
  isVisible: boolean;
  onHide: () => void;
}

export default function ToastMessage({ message, isVisible, onHide }: ToastMessageProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onHide();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onHide]);

  if (!isVisible) return null;

  return (
    <div className="fixed flex flex-row items-center px-4 py-2 gap-2 h-12 left-1/2 transform -translate-x-1/2 bottom-10 bg-black/70 z-[2] animate-in fade-in duration-300">
      <div className="flex-none w-4 h-4">
        <Image 
          src="/icons/check_circle.svg" 
          alt="check" 
          width={16} 
          height={16}
          className="w-full h-full"
        />
      </div>
      <span className="flex-none h-5 text-[13px] leading-[150%] font-medium text-[#F5F5F5]">
        {message}
      </span>
    </div>
  );
}
