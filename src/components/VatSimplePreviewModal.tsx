'use client';

import ToastMessage from '@/components/ToastMessage';
import { useAuth } from '@/contexts/AuthContext';
import {
  getVatReport,
  type VatReport,
} from '@/services/vat';
import { useCallback, useEffect, useState } from 'react';

interface VatSimplePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  reportId: string | null;
}

export default function VatSimplePreviewModal({ isOpen, onClose, reportId }: VatSimplePreviewModalProps) {
  const { token } = useAuth();
  const [report, setReport] = useState<VatReport | null>(null);
  const [selectedFormId, setSelectedFormId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // 신고서 상세 조회
  const fetchReport = useCallback(async () => {
    if (!token || !reportId) return;
    
    try {
      setLoading(true);
      const data = await getVatReport(reportId, token);
      setReport(data);
      setSelectedFormId(data.forms?.[0]?.id || null);
    } catch (error) {
      console.error('신고서 조회 실패:', error);
      setToastMessage(error instanceof Error ? error.message : '신고서 조회에 실패했습니다.');
      setShowToast(true);
    } finally {
      setLoading(false);
    }
  }, [token, reportId]);

  useEffect(() => {
    if (isOpen && token && reportId) {
      fetchReport();
    }
  }, [isOpen, token, reportId, fetchReport]);

  // 다운로드
  const handleDownload = () => {
    setToastMessage('다운로드 기능은 준비 중입니다.');
    setShowToast(true);
  };

  // 인쇄하기
  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
        <div className="bg-white p-8">
          <div className="text-center py-8">로딩 중...</div>
        </div>
      </div>
    );
  }

  // report가 없어도 임시로 미리보기 모달 UI 표시
  const selectedForm = report?.forms?.find(f => f.id === selectedFormId);

  return (
    <>
      <div 
        className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        {/* Outer Container - 1280x840, #F5F5F5 */}
        <div 
          className="flex flex-row items-start p-0 pb-4 relative overflow-scroll bg-white w-1/2 h-9/10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Inner Container - 1240x800, #FFFFFF */}
          <div 
            className="flex flex-row items-start p-0 relative w-full h-full"
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 flex flex-row justify-between items-center p-4 bg-white z-10">
              <div className="flex flex-row items-center gap-2">
                <span className="text-[14px] leading-[140%] text-[#1E1E1E] font-semibold">
                  서류보기
                </span>
                <span className="text-[11px] leading-[100%] text-[#757575]">
                  납부할 세액(환급받을 세액): 000,000,000,000원
                </span>
              </div>
              <div className="flex flex-row items-center gap-2">
                <button
                  onClick={handleDownload}
                  className="px-3 py-1.5 text-[11px] leading-[100%] text-[#1E1E1E] bg-[#F3F3F3] hover:bg-[#E6E6E6]"
                >
                  다운로드
                </button>
                <button
                  onClick={handlePrint}
                  className="px-3 py-1.5 text-[11px] leading-[100%] text-[#1E1E1E] bg-[#F3F3F3] hover:bg-[#E6E6E6]"
                >
                  인쇄하기
                </button>
              </div>
            </div>

            {/* Document Viewer - Full Width */}
            <div className="flex flex-col items-center justify-center w-full h-full overflow-hidden mt-[60px] border border-[#D9D9D9] m-4">
              <div className="flex flex-col items-center justify-center w-full h-full bg-white">
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastMessage
        message={toastMessage}
        isVisible={showToast}
        onHide={() => setShowToast(false)}
      />
    </>
  );
}
