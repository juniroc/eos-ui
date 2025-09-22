import FileUpload from './FileUpload';

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
  return (
    <div
      className={`rounded-lg text-center ${className}`}
      style={{
        width: '100%',
        height: '120px',
        minWidth: '400px',
        padding: '24px',
        background: '#FFFFFF',
        borderWidth: '1px',
        borderStyle: 'dashed',
        borderColor: '#D9D9D9',
        ...style,
      }}
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
          <>
            <div className="text-[#303030]">
              {uploadText}
            </div>
            {showFileTypeInfo && (
              <div className="mt-2" style={{ color: '#434343', fontSize: '12px' }}>
                (JPG, PNG, PDF, XLSX, CSV 파일만 지원됩니다.)
              </div>
            )}
          </>
        )}
      </FileUpload>
    </div>
  );
}
