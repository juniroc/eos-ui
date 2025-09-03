'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import BusinessRegistrationForm from '@/components/BusinessRegistrationForm';
import FileUploadModal from '@/components/FileUploadModal';
import NoticeModal from '@/components/NoticeModal';

interface FormData {
  businessCertificate: File | null;
  companyName: string;
  businessNumber: string;
  representativeName: string;
  openingDate: string;
  corporateNumber: string;
  businessType: string;
  businessCategory: string;
  businessAddress: string;
  detailedAddress: string;
}

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    businessCertificate: null,
    companyName: '',
    businessNumber: '',
    representativeName: '',
    openingDate: '',
    corporateNumber: '',
    businessType: '',
    businessCategory: '',
    businessAddress: '',
    detailedAddress: '',
  });
  const [showFileUploadModal, setShowFileUploadModal] = useState(false);
  const [showNoticeModal, setShowNoticeModal] = useState(false);
  const [noticeMessage, setNoticeMessage] = useState('');

  const handleSave = () => {
    setNoticeMessage('저장되었습니다.');
    setShowNoticeModal(true);
  };

  const isFormComplete: boolean = Boolean(formData.companyName && formData.businessNumber && 
    formData.representativeName && formData.openingDate && 
    formData.businessType && formData.businessCategory && 
    formData.businessAddress);

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">사업자등록정보</h1>
          <button
            style={{ backgroundColor: '#2C2C2C' }}
            className="px-4 py-2 text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            onClick={() => setShowFileUploadModal(true)}
          >
            사업자등록정보 추가
          </button>
        </div>

        <BusinessRegistrationForm
          formData={formData}
          setFormData={setFormData}
          onSave={handleSave}
          isComplete={isFormComplete}
        />
      </div>

      {/* Modals */}
      {showFileUploadModal && (
        <FileUploadModal
          onClose={() => setShowFileUploadModal(false)}
          onFileUpload={(file: File) => {
            setFormData({ ...formData, businessCertificate: file });
            setShowFileUploadModal(false);
          }}
        />
      )}

      {showNoticeModal && (
        <NoticeModal
          onClose={() => setShowNoticeModal(false)}
          onConfirm={() => setShowNoticeModal(false)}
        />
      )}
    </div>
  );
}
