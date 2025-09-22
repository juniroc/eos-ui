import Image from 'next/image';
import { useState, useRef } from 'react';

interface FileUploadBoxProps {
  id: string;
  onFileUpload: (file: File) => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  uploadText?: string;
  showFileTypeInfo?: boolean;
  customLoadingContent?: React.ReactNode;
}

export default function FileUploadBox({
  id,
  onFileUpload,
  loading = false,
  disabled = false,
  className = '',
  style,
  uploadText = '파일을 선택하거나 드래그하여 업로드하세요',
  showFileTypeInfo = true,
  customLoadingContent,
}: FileUploadBoxProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileUpload(e.target.files[0]);
    }
  };

  const handleClick = () => {
    if (!disabled && !loading) {
      fileInputRef.current?.click();
    }
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled && !loading) {
      setIsDragOver(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // 현재 요소를 벗어나고 부모 요소로 이동하는 경우에만 드래그 상태 해제
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;
    
    // 마우스가 요소 영역을 완전히 벗어났을 때만 드래그 상태 해제
    if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
      setIsDragOver(false);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    if (disabled || loading) return;

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      // 파일 확장자 검증
      const allowedExtensions = ['.pdf', '.xlsx', '.xls', '.csv', '.jpg', '.jpeg', '.png'];
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      
      if (allowedExtensions.includes(fileExtension)) {
        onFileUpload(file);
      } else {
        alert('지원하지 않는 파일 형식입니다. (JPG, PNG, PDF, XLSX, XLS, CSV 파일만 지원됩니다.)');
      }
    }
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.xlsx,.xls,.csv,.jpg,.jpeg,.png"
        className="hidden"
        id={id}
        onChange={handleFileChange}
        disabled={disabled || loading}
      />
      <div
        className={`rounded-lg text-center w-full transition-colors duration-200 cursor-pointer ${disabled || loading ? 'cursor-not-allowed opacity-50' : ''} ${className}`}
        style={{
          width: '100%',
          height: '120px',
          minWidth: '300px',
          padding: '24px',
          background: isDragOver && !disabled && !loading ? '#f0f9ff' : '#FFFFFF',
          borderWidth: '1px',
          borderStyle: 'dashed',
          borderColor: isDragOver && !disabled && !loading ? '#3b82f6' : '#D9D9D9',
          ...style,
        }}
        onClick={handleClick}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {loading ? (
          customLoadingContent || <div className="text-gray-500">처리 중...</div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <Image 
              src="/icons/upload.png" 
              alt="upload" 
              width={24} 
              height={24}
              className={isDragOver && !disabled && !loading ? 'opacity-70' : ''}
            />
            <div className={`text-[#303030] mt-[12px] ${isDragOver && !disabled && !loading ? 'text-blue-600' : ''}`}>
              {isDragOver && !disabled && !loading ? '파일을 여기에 놓으세요' : uploadText}
            </div>
            {showFileTypeInfo && (
              <div className="mt-2" style={{ color: '#434343', fontSize: '12px' }}>
                (JPG, PNG, PDF, XLSX, XLS, CSV 파일만 지원됩니다.)
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
