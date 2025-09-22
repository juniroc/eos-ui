import { useRef, useState } from 'react';

interface FileUploadProps {
  id: string;
  onFileUpload: (file: File) => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function FileUpload({
  id,
  onFileUpload,
  loading = false,
  disabled = false,
  className = '',
  style,
  children,
}: FileUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);

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
    setIsDragOver(false);
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
        className={`cursor-pointer ${disabled || loading ? 'cursor-not-allowed opacity-50' : ''} ${className}`}
        style={{
          ...style,
          ...(isDragOver && !disabled && !loading ? {
            backgroundColor: '#f0f9ff',
            borderColor: '#3b82f6',
            borderWidth: '2px',
            borderStyle: 'dashed',
          } : {})
        }}
        onClick={handleClick}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {children}
      </div>
    </>
  );
}
