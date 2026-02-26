import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { uploadVatFormFile, VatFormData, VatFormUploadResponse, } from '@/services/api';
import { useAuth } from '@/contexts/AuthContext';

type UploadItem = {
  id: string;
  name: string;
  size?: number;
  progress?: number;
  status?: 'uploading' | 'success' | 'error';
};

type Props = {
  selectedDocument: VatFormData | null;
  onSuccess: (res: VatFormUploadResponse) => void;
};

type FileType = 'pdf' | 'xls' | 'xlsx' | 'doc' | 'docx' | 'jpg' | 'png' | 'csv';

const allowedExtensions = [
  'pdf',
  'xls',
  'xlsx',
  'doc',
  'docx',
  'jpg',
  'png',
  'csv',
];

function FileIcon({ fileType }: { fileType: FileType }) {
  switch (fileType) {
    case 'pdf':
      return (
        <Image src="/icons/file_pdf.svg" alt="pdf" width={30} height={30} />
      );
    case 'xls':
      return (
        <Image src="/icons/file_xls.svg" alt="xls" width={30} height={30} />
      );
    case 'xlsx':
      return (
        <Image src="/icons/file_xlsx.svg" alt="xlsx" width={30} height={30} />
      );
    case 'doc':
      return (
        <Image src="/icons/file_doc.svg" alt="doc" width={30} height={30} />
      );
    case 'docx':
      return (
        <Image src="/icons/file_docx.svg" alt="docx" width={30} height={30} />
      );
    case 'jpg':
      return (
        <Image src="/icons/file_jpg.svg" alt="jpg" width={30} height={30} />
      );
    case 'png':
      return (
        <Image src="/icons/file_png.svg" alt="png" width={30} height={30} />
      );
    case 'csv':
      return (
        <Image src="/icons/file_xls.svg" alt="csv" width={30} height={30} />
      );
  }
}

function UploadProgressItem({
  item,
  onCancel,
}: {
  item: UploadItem;
  onCancel: (id: string) => void;
}) {
  const clampedProgress = Math.min(100, Math.max(0, item?.progress || 100));
  const fileType = item.name.split('.').pop()?.toLowerCase() || 'pdf';
  const formatSize = (size?: number) => {
    if (size === undefined) return '';
    const units = ['B', 'KB', 'MB', 'GB'];
    let value = size;
    let unitIndex = 0;
    while (value >= 1024 && unitIndex < units.length - 1) {
      value /= 1024;
      unitIndex += 1;
    }
    const decimals = value >= 100 ? 0 : value >= 10 ? 1 : 2;
    return `${value.toFixed(decimals)}${units[unitIndex]}`;
  };
  const sizeLabel = formatSize(item.size);
  return (
    <div
      key={item.id}
      className="flex flex-col items-start w-full border border-[#E9EAEB] rounded p-[16px] gap-2.5 mb-2.5"
    >
      <div className="flex flex-row items-start gap-3 w-full h-[30px] flex-none order-0 self-stretch grow-0">
        <FileIcon fileType={fileType as FileType} />
        <div className="flex flex-col items-start gap-1 p-0 flex-1 h-[26px]">
          <span>{item.name}</span>
          {sizeLabel && <span>{sizeLabel}</span>}
        </div>
        <div className="flex flex-row items-center gap-4 w-[48px] h-[16px]">
          {item.status === 'success' && (
            <Image
              src="/icons/file_complete.svg"
              alt="success"
              width={16}
              height={16}
            />
          )}
          {item.status === 'uploading' && (
            <button
              type="button"
              onClick={() => onCancel(item.id)}
              className="flex items-center justify-center w-[16px] h-[16px]"
              aria-label="업로드 취소"
            >
              <Image
                src="/icons/file_stop.svg"
                alt="cancel"
                width={16}
                height={16}
              />
            </button>
          )}
          <Image
            src="/icons/file_delete.svg"
            alt="delete"
            width={16}
            height={16}
          />
        </div>
      </div>
      <div className="flex flex-row items-center gap-2.5 w-full h-[15px]">
        <div className="flex flex-col items-start p-[2px] gap-2.5 w-full h-[8px] bg-[#F5F5F5] rounded-full flex-1">
          <div
            className="h-[4px] bg-[#F26522] rounded-full"
            style={{ width: `${clampedProgress}%` }}
          />
        </div>
        <span className="w-[28px] h-[15px] text-[11px] leading-[140%] text-center text-[#767676] font-['Pretendard']">
          {clampedProgress}%
        </span>
      </div>
    </div>
  );
}

function FileUpload({ selectedDocument, onSuccess }: Props) {
  const { token } = useAuth();
  const [uploads, setUploads] = useState<UploadItem[]>([]);
  const uploadTimersRef = useRef<
    Record<string, ReturnType<typeof setInterval>>
  >({});
  const initializedDocRef = useRef<string | null>(null);
  const uploadAbortRef = useRef<Record<string, AbortController>>({});

  const stopFakeProgress = (id: string) => {
    const timer = uploadTimersRef.current[id];
    if (timer) {
      clearInterval(timer);
      delete uploadTimersRef.current[id];
    }
  };

  const stopAbortController = (id: string) => {
    if (uploadAbortRef.current[id]) {
      delete uploadAbortRef.current[id];
    }
  };

  const startFakeProgress = (id: string) => {
    stopFakeProgress(id);
    uploadTimersRef.current[id] = setInterval(() => {
      setUploads(prev =>
        prev.map(item => {
          if (
            item.id !== id ||
            item.status !== 'uploading' ||
            item.progress === undefined
          )
            return item;
          if (item.progress >= 90) return item;
          const next =
            item.progress + Math.max(1, Math.floor(Math.random() * 6));
          return { ...item, progress: Math.min(next, 90) };
        })
      );
    }, 300);
  };

  const updateUpload = (id: string, next: Partial<UploadItem>) => {
    setUploads(prev =>
      prev.map(item => (item.id === id ? { ...item, ...next } : item))
    );
  };

  const cancelUpload = (id: string) => {
    stopFakeProgress(id);
    uploadAbortRef.current[id]?.abort();
    stopAbortController(id);
    setUploads(prev => prev.filter(item => item.id !== id));
    alert('업로드가 취소되었습니다.');
  };

  const handleUploadFile = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;
      const extension = file.name.split('.').pop()?.toLowerCase() ?? '';
      if (!allowedExtensions.includes(extension)) {
        alert(
          `지원되지 않는 파일 형식입니다. (${allowedExtensions
            .map(ext => ext.toUpperCase())
            .join(', ')})`
        );
        event.target.value = '';
        return;
      }
      if (!selectedDocument) {
        alert('업로드할 서류를 선택해주세요.');
        return;
      }
      if (!token) {
        alert('로그인이 필요합니다.');
        return;
      }

      const uploadId = `${file.name}-${Date.now()}`;
      const abortController = new AbortController();
      uploadAbortRef.current[uploadId] = abortController;
      try {
        setUploads(prev => [
          ...prev,
          {
            id: uploadId,
            name: file.name,
            size: file.size,
            progress: 0,
            status: 'uploading',
          },
        ]);
        startFakeProgress(uploadId);
        const res = await uploadVatFormFile(
          selectedDocument.id,
          file,
          token,
          abortController.signal
        );
        onSuccess(res);
        stopFakeProgress(uploadId);
        stopAbortController(uploadId);
        updateUpload(uploadId, { progress: 100, status: 'success' });
      } catch (error) {
        stopFakeProgress(uploadId);
        stopAbortController(uploadId);
        console.error('자료 업로드 에러:', error);
        if (error instanceof DOMException && error.name === 'AbortError') {
          return;
        }
        const message =
          error instanceof Error
            ? error.message
            : '자료 업로드에 실패했습니다.';
        alert(message);
        updateUpload(uploadId, { progress: 0, status: 'error' });
      } finally {
        event.target.value = '';
      }
    },
    [selectedDocument, token, startFakeProgress, onSuccess]
  );

  useEffect(() => {
    const docId = selectedDocument?.id ?? null;
    if (!docId || initializedDocRef.current === docId) return;
    setUploads(
      selectedDocument?.uploadedDocuments?.map(doc => ({
        id: doc.id,
        name: doc.name,
        progress: 100,
        status: 'success' as const,
      })) ?? []
    );
    initializedDocRef.current = docId;
  }, [selectedDocument]);

  useEffect(() => {
    return () => {
      Object.values(uploadTimersRef.current).forEach(timer =>
        clearInterval(timer)
      );
    };
  }, []);

  return (
    <div className="flex flex-col items-start w-full h-auto bg-[#FFFFFF] ">
      <div className="flex flex-row justify-between items-center w-full min-h-[28px] gap-[51px] flex-none mb-2.5">
        <h1 className="font-['Pretendard'] font-semibold text-[18px] leading-[140%] text-[#1E1E1E] w-[63px]">
          부가세
        </h1>
        <div className="flex flex-row items-start gap-2.5">
          <label
            htmlFor="vat-document-upload"
            className="box-border flex flex-row justify-center items-center py-2 px-3 gap-2 h-7 bg-white border border-[#F26522] cursor-pointer"
          >
            <Image
              src="/icons/upload_orange.svg"
              alt="upload"
              width={12}
              height={12}
            />
            <span className="font-['Pretendard'] font-medium text-[11px] leading-[100%] text-[#F26522]">
              자료 업로드
            </span>
          </label>
          <input
            id="vat-document-upload"
            type="file"
            className="hidden"
            accept={allowedExtensions.map(ext => `.${ext}`).join(',')}
            onChange={handleUploadFile}
          />
        </div>
      </div>
      {uploads.map(item => (
        <UploadProgressItem key={item.id} item={item} onCancel={cancelUpload} />
      ))}
    </div>
  );
}

export default FileUpload;
