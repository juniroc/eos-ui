'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';
import {
  getVatReport,
  getVatReports,
  type VatReport,
  type VatForm,
  type VatUploadedDocument,
} from '@/services/vat';
import FileUploadBox from '@/components/FileUploadBox';
import ToastMessage from '@/components/ToastMessage';

export default function VatStoredDocumentsPreviewPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const reportId = searchParams.get('id');
  const { isAuthenticated, loading: authLoading, token } = useAuth();
  const [report, setReport] = useState<VatReport | null>(null);
  const [allReports, setAllReports] = useState<VatReport[]>([]);
  const [selectedFormId, setSelectedFormId] = useState<string | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<VatUploadedDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [authLoading, isAuthenticated, router]);

  // 신고서 목록 조회
  const fetchAllReports = useCallback(async () => {
    if (!token) return;
    
    try {
      const data = await getVatReports(token);
      setAllReports(data);
    } catch (error) {
      console.error('신고서 목록 조회 실패:', error);
    }
  }, [token]);

  // 신고서 상세 조회
  const fetchReport = useCallback(async () => {
    if (!token || !reportId) return;
    
    try {
      setLoading(true);
      const data = await getVatReport(reportId, token);
      setReport(data);
      setSelectedFormId(data.forms?.[0]?.id || null);
      // 첫 번째 form의 uploadedDocuments를 기본으로 설정
      if (data.forms && data.forms.length > 0 && data.forms[0].uploadedDocuments) {
        setUploadedFiles(data.forms[0].uploadedDocuments);
      }
    } catch (error) {
      console.error('신고서 조회 실패:', error);
      setToastMessage(error instanceof Error ? error.message : '신고서 조회에 실패했습니다.');
      setShowToast(true);
    } finally {
      setLoading(false);
    }
  }, [token, reportId]);

  useEffect(() => {
    if (token && isAuthenticated) {
      fetchAllReports();
      if (reportId) {
        fetchReport();
      }
    }
  }, [token, isAuthenticated, reportId, fetchAllReports, fetchReport]);

  // Form 선택
  const handleFormSelect = (formId: string) => {
    setSelectedFormId(formId);
    const selectedForm = report?.forms?.find(f => f.id === formId);
    if (selectedForm?.uploadedDocuments) {
      setUploadedFiles(selectedForm.uploadedDocuments);
    } else {
      setUploadedFiles([]);
    }
  };

  // 파일 업로드
  const handleFileUpload = async (file: File) => {
    if (!token || !reportId || !selectedFormId) return;
    
    try {
      setUploading(true);
      // TODO: 실제 파일 업로드 API 호출
      // const uploadedDoc = await uploadVatDocument(reportId, selectedFormId, file, token);
      // setUploadedFiles([...uploadedFiles, uploadedDoc]);
      
      // 임시로 로컬 상태에 추가
      const newDoc: VatUploadedDocument = {
        id: `temp-${Date.now()}`,
        name: file.name,
      };
      setUploadedFiles([...uploadedFiles, newDoc]);
      setToastMessage('파일이 업로드되었습니다.');
      setShowToast(true);
    } catch (error) {
      console.error('파일 업로드 실패:', error);
      setToastMessage(error instanceof Error ? error.message : '파일 업로드에 실패했습니다.');
      setShowToast(true);
    } finally {
      setUploading(false);
    }
  };

  // 파일 삭제
  const handleFileDelete = (docId: string) => {
    setUploadedFiles(uploadedFiles.filter(doc => doc.id !== docId));
    setToastMessage('파일이 삭제되었습니다.');
    setShowToast(true);
  };

  // 파일 다운로드
  const handleFileDownload = (docId: string) => {
    // TODO: 실제 다운로드 API 호출
    setToastMessage('다운로드 기능은 준비 중입니다.');
    setShowToast(true);
  };

  // 작업완료
  const handleWorkComplete = () => {
    setToastMessage('작업이 완료되었습니다.');
    setShowToast(true);
    // TODO: 작업완료 API 호출 후 목록 페이지로 이동
    // router.push('/vat-stored-documents');
  };

  // 다운로드
  const handleDownload = () => {
    setToastMessage('다운로드 기능은 준비 중입니다.');
    setShowToast(true);
  };

  // 인쇄하기
  const handlePrint = () => {
    window.print();
  };

  // 파일변환
  const handleFileConvert = () => {
    setToastMessage('파일 변환 기능은 준비 중입니다.');
    setShowToast(true);
  };

  // 서류 서식 추가하기
  const handleAddForm = () => {
    setToastMessage('서식 추가 기능은 준비 중입니다.');
    setShowToast(true);
  };

  if (authLoading || loading) {
    return (
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-8">로딩 중...</div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  if (!report) {
    return (
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-8">신고서를 찾을 수 없습니다.</div>
        </div>
      </div>
    );
  }

  const selectedForm = report.forms?.find(f => f.id === selectedFormId);

  return (
    <>
      <div className="flex flex-row items-start w-full h-full bg-[#F5F5F5] -m-4">
        {/* Left Sidebar - 생성된 서류 리스트 및 자료 업로드 */}
        <div className="flex flex-col items-start w-[320px] min-w-[320px] h-full bg-[#F5F5F5] p-4 gap-4 overflow-y-auto">
          {/* 생성된 서류 리스트 */}
          <div className="flex flex-col items-start w-full gap-2">
            <div className="flex flex-row items-center justify-between w-full">
              <span className="text-[11px] leading-[100%] text-[#1E1E1E]">
                생성된 서류 리스트 ({report.forms?.length || 0})
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 10L12 6" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            {/* 서류 리스트 */}
            <div className="flex flex-col items-start w-full gap-1">
              {report.forms?.map((form) => (
                <button
                  key={form.id}
                  onClick={() => handleFormSelect(form.id)}
                  className={`w-full text-left p-2 rounded ${
                    selectedFormId === form.id ? 'bg-[#E6E6E6]' : 'bg-white hover:bg-[#F5F5F5]'
                  }`}
                >
                  <span className={`text-[11px] leading-[140%] ${
                    selectedFormId === form.id ? 'text-[#1E1E1E]' : 'text-[#757575]'
                  }`}>
                    {form.name}
                  </span>
                </button>
              ))}
            </div>
            
            {/* 서류 서식 추가하기 버튼 */}
            <button
              onClick={handleAddForm}
              className="w-full p-2 bg-[#2C2C2C] hover:bg-[#1a1a1a] rounded"
            >
              <span className="text-[11px] leading-[100%] text-[#FFFFFF]">
                서류 서식 추가하기
              </span>
            </button>
          </div>

          {/* 자료 업로드 */}
          <div className="flex flex-col items-start w-full gap-3">
            <div className="flex flex-col items-start gap-1">
              <span className="text-[11px] leading-[140%] text-[#1E1E1E]">
                자료 업로드
              </span>
              <span className="text-[10px] leading-[140%] text-[#757575]">
                해당 서류와 관련된 내용이 있는 자료를 업로드하세요. Eos가 읽고 기록해 줍니다.
              </span>
            </div>
            
            <FileUploadBox
              id="vat-document-upload"
              onFileUpload={handleFileUpload}
              loading={uploading}
              uploadText="파일을 선택하거나 여기로 드래그하세요."
            />
            
            {/* 저장하기 버튼 */}
            <button
              onClick={() => {
                setToastMessage('저장되었습니다.');
                setShowToast(true);
              }}
              className="w-full p-2 bg-[#2C2C2C] hover:bg-[#1a1a1a] rounded"
            >
              <span className="text-[11px] leading-[100%] text-[#FFFFFF]">
                저장하기
              </span>
            </button>
            
            {/* 업로드된 파일 리스트 */}
            {uploadedFiles.length > 0 && (
              <div className="flex flex-col items-start w-full gap-2">
                {uploadedFiles.map((doc) => (
                  <div key={doc.id} className="flex flex-row items-center justify-between w-full p-2 bg-white rounded">
                    <span className="text-[11px] leading-[100%] text-[#1E1E1E] flex-1 truncate">
                      {doc.name}
                    </span>
                    <div className="flex flex-row items-center gap-2 ml-2 shrink-0">
                      <button
                        onClick={() => handleFileDownload(doc.id)}
                        className="w-4 h-4 flex items-center justify-center hover:opacity-70"
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 1V8M6 8L3 5M6 8L9 5" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M1 10H11" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </button>
                      <button
                        onClick={() => handleFileDelete(doc.id)}
                        className="w-4 h-4 flex items-center justify-center hover:opacity-70"
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 3L9 9M3 9L9 3" stroke="#FF0000" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Middle Panel - 서류 보기 */}
        <div className="flex flex-col items-start flex-1 h-full bg-white p-4 gap-4 overflow-y-auto min-w-0">
          {/* Header */}
          <div className="flex flex-col items-start w-full gap-2">
            <div className="flex flex-row items-center justify-between w-full">
              <span className="text-[14px] leading-[140%] text-[#1E1E1E] font-semibold">
                서류 보기 납부할 세액(환급받을 세액): 000,000,000,000원
              </span>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-row items-center gap-2">
              <button
                onClick={handleWorkComplete}
                className="px-3 py-1.5 text-[11px] leading-[100%] text-[#FFFFFF] bg-[#FF6B00] hover:bg-[#E55A00] rounded"
              >
                작업완료
              </button>
              <button
                onClick={handleDownload}
                className="px-3 py-1.5 text-[11px] leading-[100%] text-[#1E1E1E] bg-[#F3F3F3] hover:bg-[#E6E6E6] rounded"
              >
                다운로드
              </button>
              <button
                onClick={handlePrint}
                className="px-3 py-1.5 text-[11px] leading-[100%] text-[#1E1E1E] bg-[#F3F3F3] hover:bg-[#E6E6E6] rounded"
              >
                인쇄하기
              </button>
              <button
                onClick={handleFileConvert}
                className="px-3 py-1.5 text-[11px] leading-[100%] text-[#FFFFFF] bg-[#2C2C2C] hover:bg-[#1a1a1a] rounded"
              >
                파일변환
              </button>
            </div>
          </div>

          {/* Document Content Area */}
          <div className="flex flex-col items-center justify-center w-full flex-1 bg-white border border-[#D9D9D9] rounded">
            <p className="text-[11px] text-[#B3B3B3]">
              {selectedForm ? `${selectedForm.name} 내용이 여기에 표시됩니다.` : '서류를 선택해주세요.'}
            </p>
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
