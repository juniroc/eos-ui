import FileUpload from './FileUpload';
import Image from 'next/image';
import { useState } from 'react';

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

  const handleDragEnter = () => {
    if (!disabled && !loading) {
      setIsDragOver(true);
    }
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  return (
    <div
      className={`rounded-lg text-center w-full transition-colors duration-200 ${className}`}
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
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      <FileUpload
        id={id}
        onFileUpload={onFileUpload}
        loading={loading}
        disabled={disabled}
        className="cursor-pointer block h-full flex flex-col justify-center"
      >
        {loading ? (
          customLoadingContent || <div className="text-gray-500">처리 중...</div>
        ) : (
          <div className="flex flex-col items-center justify-center">
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
      </FileUpload>
    </div>
  );
}
