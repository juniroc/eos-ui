import React, { useCallback, useEffect, useState } from 'react';
import FormPreviewModal from '@/components/documentCreate/FormPreviewModal';
import { getVatReport, VatFormData } from '@/services/api';
import { useAuth } from '@/contexts/AuthContext';

type Props = {
  isOpen: boolean;
  reportId?: string | null;
  formId?: string | null;
  onClose: () => void;
};

function ReportPreviewModal({ reportId, formId, isOpen, onClose }: Props) {
  const { token } = useAuth();
  const [documentList, setDocumentList] = useState<VatFormData[]>([]);

  const fetchDocumentList = useCallback(async () => {
    if (!token) {
      alert('로그인이 필요합니다.');
      return;
    }

    if (!reportId || !formId) {
      setDocumentList([]);
      return;
    }
    try {
      const { forms } = await getVatReport(reportId, token);
      if (formId) {
        setDocumentList(forms.filter(form => form.id === formId));
      } else {
        setDocumentList(forms);
      }
    } catch (error) {
      console.error('서류 조회 중 오류 발생:', error);
      alert('서류 조회에 실패했습니다. 다시 시도해주세요.');
    }
  }, [formId, reportId, token]);

  useEffect(() => {
    fetchDocumentList();
  }, [fetchDocumentList]);

  return (
    <FormPreviewModal
      title="서류 보기"
      isOpen={isOpen}
      documentList={documentList}
      onClose={onClose}
    />
  );
}

export default ReportPreviewModal;
