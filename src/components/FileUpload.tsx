import { useRef } from 'react';

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
        style={style}
        onClick={handleClick}
      >
        {children}
      </div>
    </>
  );
}
