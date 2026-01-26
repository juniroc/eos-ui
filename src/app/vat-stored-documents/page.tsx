'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';
import {
  getVatReports,
  deleteVatReport,
  workOnVatReport,
  deleteVatForm,
  deleteVatDocument,
  getVatDocumentDownloadUrl,
  type VatReport,
} from '@/services/vat';
import type { VatForm, VatUploadedDocument } from '@/services/vat';
import ToastMessage from '@/components/ToastMessage';
import VatPreviewModal from '@/components/VatPreviewModal';
import VatSimplePreviewModal from '@/components/VatSimplePreviewModal';

export default function VatStoredDocumentsPage() {
  const router = useRouter();
  const { isAuthenticated, loading: authLoading, token } = useAuth();
  const [selectedDate, setSelectedDate] = useState('');
  const [reports, setReports] = useState<VatReport[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedReport, setSelectedReport] = useState<VatReport | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showWorkModal, setShowWorkModal] = useState(false);
  const [workActionType, setWorkActionType] = useState<'rework' | 'amendment' | null>(null);
  const [reportToDelete, setReportToDelete] = useState<string | null>(null);
  const [reportToWork, setReportToWork] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [openMenuReportId, setOpenMenuReportId] = useState<string | null>(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [previewReportId, setPreviewReportId] = useState<string | null>(null);
  const [showSimplePreviewModal, setShowSimplePreviewModal] = useState(false);
  const [simplePreviewReportId, setSimplePreviewReportId] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const dateInputRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [authLoading, isAuthenticated, router]);

  // 신고서 목록 조회
  const fetchReports = useCallback(async () => {
    if (!token) return;
    
    try {
      setLoading(true);
      const data = await getVatReports(token);
      setReports(data);
    } catch (error) {
      console.error('신고서 목록 조회 실패:', error);
      setToastMessage(error instanceof Error ? error.message : '신고서 목록 조회에 실패했습니다.');
      setShowToast(true);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (token && isAuthenticated) {
      // 초기 로딩 완료 처리 (조회 전까지 데이터 불러오지 않음)
      setLoading(false);
    }
  }, [token, isAuthenticated]);

  // 외부 클릭시 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenuReportId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDatePickerClick = () => {
    dateInputRef.current?.showPicker();
  };

  const handleSearch = () => {
    setHasSearched(true);
    fetchReports();
  };

  // 신고서 목록 (필터링 없이 전체 표시)
  const filteredReports = reports;

  const formatDateForDisplay = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const year = String(date.getFullYear()).slice(-2);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

  // 서류명 클릭 - simple preview 모달 열기
  const handleReportClick = (reportId: string) => {
    setSimplePreviewReportId(reportId);
    setShowSimplePreviewModal(true);
  };

  // 신고서 삭제
  const handleDeleteReport = async () => {
    if (!token || !reportToDelete) return;
    
    try {
      await deleteVatReport(reportToDelete, token);
      setToastMessage('신고서가 삭제되었습니다.');
      setShowToast(true);
      setShowDeleteModal(false);
      setReportToDelete(null);
      fetchReports();
    } catch (error) {
      console.error('신고서 삭제 실패:', error);
      setToastMessage(error instanceof Error ? error.message : '신고서 삭제에 실패했습니다.');
      setShowToast(true);
    }
  };

  // 작업하기 (재작업/수정신고)
  const handleWork = async () => {
    if (!token || !reportToWork || !workActionType) return;
    
    try {
      await workOnVatReport(reportToWork, workActionType, token);
      setToastMessage(workActionType === 'rework' ? '재작업이 시작되었습니다.' : '수정신고가 시작되었습니다.');
      setShowToast(true);
      setShowWorkModal(false);
      setReportToWork(null);
      setWorkActionType(null);
      fetchReports();
    } catch (error) {
      console.error('작업 처리 실패:', error);
      setToastMessage(error instanceof Error ? error.message : '작업 처리에 실패했습니다.');
      setShowToast(true);
    }
  };

  // 서식 삭제
  const handleDeleteForm = async (formId: string) => {
    if (!token) return;
    
    if (!confirm('서식을 삭제하시겠어요?')) return;
    
    try {
      await deleteVatForm(formId, token);
      setToastMessage('서식이 삭제되었습니다.');
      setShowToast(true);
      fetchReports();
    } catch (error) {
      console.error('서식 삭제 실패:', error);
      setToastMessage(error instanceof Error ? error.message : '서식 삭제에 실패했습니다.');
      setShowToast(true);
    }
  };

  // 파일 삭제
  const handleDeleteDocument = async (documentId: string) => {
    if (!token) return;
    
    if (!confirm('파일을 삭제하시겠어요?')) return;
    
    try {
      await deleteVatDocument(documentId, token);
      setToastMessage('파일이 삭제되었습니다.');
      setShowToast(true);
      fetchReports();
    } catch (error) {
      console.error('파일 삭제 실패:', error);
      setToastMessage(error instanceof Error ? error.message : '파일 삭제에 실패했습니다.');
      setShowToast(true);
    }
  };

  // 파일 다운로드
  const handleDownloadDocument = async (documentId: string) => {
    if (!token) return;
    
    try {
      const { url } = await getVatDocumentDownloadUrl(documentId, token);
      window.open(url, '_blank');
    } catch (error) {
      console.error('다운로드 실패:', error);
      setToastMessage(error instanceof Error ? error.message : '다운로드에 실패했습니다.');
      setShowToast(true);
    }
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

  return (
    <>
      <div className="flex flex-col items-start p-4 gap-4 w-full">
        {/* Title Section */}
        <div className="flex flex-col items-start gap-4 w-full">
          <div className="flex flex-row items-end gap-5 w-full">
            <div className="flex flex-col items-start flex-1">
              <div className="flex flex-row items-center px-0 py-1.5 gap-1 rounded-lg">
                <span className="text-[14px] leading-[140%] text-[#1E1E1E] font-semibold">
                  부가세 보관서류
                </span>
              </div>
              <span className="text-[11px] leading-[140%] text-[#767676]">
                서류명을 누르면 서류내용을 볼 수 있습니다.
              </span>
            </div>

            {/* Date Picker and Search Button */}
            <div className="flex flex-row justify-end items-center gap-2 h-8">
              {/* Calendar Input */}
              <div className="flex flex-col justify-center items-start w-[150px] min-w-[100px] h-8">
                <div className="flex flex-row items-center p-2 gap-2 w-[150px] min-w-[82px] h-8 bg-white border border-[#D9D9D9] relative cursor-pointer" onClick={handleDatePickerClick}>
                  {selectedDate ? (
                    <span className="flex-1 text-[11px] leading-[100%] text-[#1E1E1E]">
                      {formatDateForDisplay(selectedDate)}
                    </span>
                  ) : (
                    <span className="flex-1 text-[11px] leading-[100%] text-[#B3B3B3]">
                      선택하기
                    </span>
                  )}
                  <input
                    ref={dateInputRef}
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <div className="flex items-center justify-center w-4 h-4 pointer-events-none shrink-0">
                    <Image src="/icons/calendar.svg" alt="Calendar" width={16} height={16} />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-5 border-l border-[#D9D9D9]"></div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                disabled={!selectedDate}
                className={`flex flex-row justify-center items-center px-3 py-2 gap-2 w-[63px] h-[27px] ${
                  selectedDate
                    ? 'bg-[#2C2C2C] cursor-pointer hover:bg-[#1a1a1a]'
                    : 'bg-[#E6E6E6] cursor-not-allowed'
                }`}
              >
                <span className={`text-[11px] leading-[100%] ${
                  selectedDate ? 'text-[#FFFFFF]' : 'text-[#B3B3B3]'
                }`}>
                  조회하기
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Table - 헤더와 데이터를 하나의 연속된 표로 */}
        {(() => {
            // 모든 report의 행들을 미리 계산 - form 단위로 행 생성
            const allTableRows: Array<{
              report: VatReport;
              row: { form?: VatForm };
              reportRowIndex: number;
              globalRowIndex: number;
            }> = [];

            let globalRowIndex = 1; // 헤더가 0번째 행

            filteredReports.forEach((report) => {
              const forms = report.forms || [];

              if (forms.length === 0) {
                allTableRows.push({
                  report,
                  row: {},
                  reportRowIndex: 0,
                  globalRowIndex: globalRowIndex++,
                });
              } else {
                forms.forEach((form, idx) => {
                  allTableRows.push({
                    report,
                    row: { form },
                    reportRowIndex: idx,
                    globalRowIndex: globalRowIndex++,
                  });
                });
              }
            });

            const rowHeight = 32;

            // 각 report의 시작 행과 끝 행 계산
            const reportRowRanges = new Map<string, { start: number; end: number; totalRows: number }>();
            let currentRow = 1;

            filteredReports.forEach((report) => {
              const formsCount = Math.max(report.forms?.length || 0, 1);

              reportRowRanges.set(report.id, {
                start: currentRow,
                end: currentRow + formsCount - 1,
                totalRows: formsCount,
              });

              currentRow += formsCount;
            });
            
            return (
              <div 
                className="grid w-full"
                style={{
                  gridTemplateColumns: '80px minmax(250px, auto) 1fr 1fr 63px',
                  gridAutoRows: `${rowHeight}px`,
                }}
              >
                {/* 헤더 행 */}
                <div className={`flex flex-row items-center p-2 bg-white border-l border-t border-r ${!hasSearched || filteredReports.length === 0 ? 'border-b' : ''} border-[#D9D9D9]`} style={{ gridRow: 1, gridColumn: 1 }}>
                  <span className="text-[10px] leading-[100%] text-[#B3B3B3]">작성일자</span>
                </div>
                <div className={`flex flex-row items-center p-2 bg-white border-t border-r ${!hasSearched || filteredReports.length === 0 ? 'border-b' : ''} border-[#D9D9D9]`} style={{ gridRow: 1, gridColumn: 2 }}>
                  <span className="text-[10px] leading-[100%] text-[#B3B3B3]">서류명</span>
                </div>
                <div className={`flex flex-row items-center p-2 bg-white border-t border-r ${!hasSearched || filteredReports.length === 0 ? 'border-b' : ''} border-[#D9D9D9]`} style={{ gridRow: 1, gridColumn: 3 }}>
                  <span className="text-[10px] leading-[100%] text-[#B3B3B3]">첨부서류명</span>
                </div>
                <div className={`flex flex-row items-center p-2 bg-white border-t border-r ${!hasSearched || filteredReports.length === 0 ? 'border-b' : ''} border-[#D9D9D9]`} style={{ gridRow: 1, gridColumn: 4 }}>
                  <span className="text-[10px] leading-[100%] text-[#B3B3B3]">업로드한 관련 파일</span>
                </div>
                <button className={`flex flex-row justify-center items-center px-3 py-2 gap-2 bg-[#E6E6E6] border-t border-r ${!hasSearched || filteredReports.length === 0 ? 'border-b' : ''} border-[#D9D9D9] cursor-pointer hover:bg-[#D9D9D9]`} style={{ gridRow: 1, gridColumn: 5 }}>
                  <span className="text-[11px] leading-[100%] text-[#B3B3B3]">업로드</span>
                </button>

                {/* 데이터 행들 */}
                {hasSearched && allTableRows.map(({ report, reportRowIndex, globalRowIndex }) => {
                  const range = reportRowRanges.get(report.id)!;
                  const isFirstDataRow = globalRowIndex === 1;
                  
                  return (
                    <React.Fragment key={`${report.id}-${globalRowIndex}`}>
                      {/* 작성일자 - 첫 번째 행에만 표시하고 병합 */}
                      {reportRowIndex === 0 ? (
                        <div 
                          className={`flex flex-col justify-center items-start p-2 bg-white border-l border-r border-b ${isFirstDataRow ? 'border-t' : ''} border-[#D9D9D9]`}
                          style={{ gridRow: `${range.start + 1} / ${range.end + 2}`, gridColumn: 1 }}
                        >
                          <span className="text-[10px] leading-[140%] text-[#757575]">
                            {formatDateForDisplay(report.lastModifiedAt)}
                          </span>
                        </div>
                      ) : (
                        <div className="bg-white border-l border-r border-b border-[#D9D9D9]" style={{ gridRow: globalRowIndex + 1, gridColumn: 1 }}></div>
                      )}
                      
                      {/* 서류명 - 첫 번째 행에만 표시하고 병합 */}
                      {reportRowIndex === 0 ? (
                        <div
                          className={`flex flex-col items-start bg-white border-r border-b ${isFirstDataRow ? 'border-t' : ''} border-[#D9D9D9] p-2 overflow-visible`}
                          style={{ gridRow: `${range.start + 1} / ${range.end + 2}`, gridColumn: 2, minWidth: '250px', width: '100%' }}
                        >
                          <span
                            onClick={() => handleReportClick(report.id)}
                            className="text-[10px] leading-[140%] text-[#757575] cursor-pointer hover:underline mb-1 block w-full"
                          >
                            {report.title}
                          </span>
                          {/* Action Buttons */}
                          <div className="flex flex-row gap-1 w-full" ref={openMenuReportId === report.id ? menuRef : null}>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setReportToDelete(report.id);
                                setShowDeleteModal(true);
                                setOpenMenuReportId(null);
                              }}
                              className="px-2 py-1 text-[11px] leading-[100%] text-[#1E1E1E] bg-[#F3F3F3] hover:bg-[#E6E6E6] whitespace-nowrap flex-shrink-0"
                            >
                              삭제
                            </button>
                            {report.isCompleted ? (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setReportToWork(report.id);
                                  setWorkActionType('amendment');
                                  setShowWorkModal(true);
                                  setOpenMenuReportId(null);
                                }}
                                className="px-2 py-1 text-[11px] leading-[100%] text-[#FFFFFF] bg-[#2C2C2C] hover:bg-[#1a1a1a] whitespace-nowrap flex-shrink-0"
                              >
                                수정신고
                              </button>
                            ) : (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setPreviewReportId(report.id);
                                  setShowPreviewModal(true);
                                  setOpenMenuReportId(null);
                                }}
                                className="px-2 py-1 text-[11px] leading-[100%] text-[#FFFFFF] bg-[#2C2C2C] hover:bg-[#1a1a1a] whitespace-nowrap flex-shrink-0"
                              >
                                재작업
                              </button>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="bg-white border-r border-b border-[#D9D9D9]" style={{ gridRow: globalRowIndex + 1, gridColumn: 2 }}></div>
                      )}
                      
                      {/* 첨부서류명 - 첫 번째 행에만 표시하고 병합 */}
                      {reportRowIndex === 0 ? (
                        <div
                          className={`flex flex-col items-start bg-white border-r border-b ${isFirstDataRow ? 'border-t' : ''} border-[#D9D9D9]`}
                          style={{ gridRow: `${range.start + 1} / ${range.end + 2}`, gridColumn: 3, minWidth: '240px' }}
                        >
                          {(() => {
                            const reportRows = allTableRows.filter(r => r.report.id === report.id);
                            return (
                              <div className="flex flex-col w-full">
                                {reportRows.map((reportRow, idx) => (
                                  <div
                                    key={idx}
                                    className={`flex flex-row items-center justify-between p-2 ${idx < reportRows.length - 1 ? 'border-b border-[#D9D9D9]' : ''}`}
                                  >
                                    {reportRow.row.form ? (
                                      <>
                                        <span className="text-[10px] leading-[140%] text-[#757575] flex-1">
                                          {reportRow.row.form.name}
                                        </span>
                                        <button
                                          onClick={() => handleDeleteForm(reportRow.row.form!.id)}
                                          className="ml-2 w-4 h-4 flex items-center justify-center hover:opacity-70 shrink-0"
                                        >
                                          <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.5 2.5L7.5 7.5M2.5 7.5L7.5 2.5" stroke="#C00F0C" strokeWidth="1.2" strokeLinecap="round"/>
                                          </svg>
                                        </button>
                                      </>
                                    ) : (
                                      <span className="text-[10px] leading-[140%] text-[#757575]">-</span>
                                    )}
                                  </div>
                                ))}
                              </div>
                            );
                          })()}
                        </div>
                      ) : (
                        <div className="bg-white border-r border-b border-[#D9D9D9]" style={{ gridRow: globalRowIndex + 1, gridColumn: 3 }}></div>
                      )}

                      {/* 업로드한 관련 파일 - 첫 번째 행에만 표시하고 병합 */}
                      {reportRowIndex === 0 ? (
                        <div
                          className={`flex flex-col items-start bg-white border-r border-b ${isFirstDataRow ? 'border-t' : ''} border-[#D9D9D9]`}
                          style={{ gridRow: `${range.start + 1} / ${range.end + 2}`, gridColumn: 4, minWidth: '240px' }}
                        >
                          {(() => {
                            const reportRows = allTableRows.filter(r => r.report.id === report.id);
                            return (
                              <div className="flex flex-col w-full">
                                {reportRows.map((reportRow, idx) => {
                                  const docs = reportRow.row.form?.uploadedDocuments || [];
                                  const firstDoc = docs[0];
                                  return (
                                    <div
                                      key={idx}
                                      className={`flex flex-row items-center justify-between p-2 ${idx < reportRows.length - 1 ? 'border-b border-[#D9D9D9]' : ''}`}
                                    >
                                      {firstDoc ? (
                                        <>
                                          <span className="text-[10px] leading-[140%] text-[#757575] flex-1">
                                            {firstDoc.name}
                                            {docs.length > 1 && ` 외 ${docs.length - 1}개`}
                                          </span>
                                          <div className="flex flex-row items-center gap-1 ml-2 shrink-0">
                                            <button
                                              onClick={() => handleDownloadDocument(firstDoc.id)}
                                              className="w-4 h-4 flex items-center justify-center hover:opacity-70"
                                            >
                                              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 0.5V7M5 7L2.5 4.5M5 7L7.5 4.5" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M0.5 8.5H9.5" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round"/>
                                              </svg>
                                            </button>
                                            <button
                                              onClick={() => handleDeleteDocument(firstDoc.id)}
                                              className="w-4 h-4 flex items-center justify-center hover:opacity-70"
                                            >
                                              <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.5 2.5L7.5 7.5M2.5 7.5L7.5 2.5" stroke="#C00F0C" strokeWidth="1.2" strokeLinecap="round"/>
                                              </svg>
                                            </button>
                                          </div>
                                        </>
                                      ) : (
                                        <span className="text-[10px] leading-[140%] text-[#757575]">-</span>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            );
                          })()}
                        </div>
                      ) : (
                        <div className="bg-white border-r border-b border-[#D9D9D9]" style={{ gridRow: globalRowIndex + 1, gridColumn: 4 }}></div>
                      )}
                      
                      {/* Upload Button Column - 첫 번째 행에만 표시 */}
                      {reportRowIndex === 0 ? (
                        <div 
                          className={`flex flex-col justify-center items-center bg-[#E6E6E6] border-r border-b ${isFirstDataRow ? 'border-t' : ''} border-[#D9D9D9]`}
                          style={{ gridRow: `${range.start + 1} / ${range.end + 2}`, gridColumn: 5 }}
                        >
                          <button className="flex flex-row justify-center items-center px-3 py-2 gap-2 cursor-pointer hover:bg-[#D9D9D9]">
                            <span className="text-[11px] leading-[100%] text-[#B3B3B3]">업로드</span>
                          </button>
                        </div>
                      ) : (
                        <div className={`bg-white border-r border-b ${isFirstDataRow ? 'border-t' : ''} border-[#D9D9D9]`} style={{ gridRow: globalRowIndex + 1, gridColumn: 5 }}></div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            );
          })()}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
            <h3 className="text-[14px] font-semibold text-[#1E1E1E] mb-2">삭제하시겠어요?</h3>
            <p className="text-[11px] text-[#767676] mb-4">한 번 삭제하면 되돌릴 수 없어요.</p>
            <div className="flex flex-row gap-2 justify-end">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setReportToDelete(null);
                }}
                className="px-4 py-2 text-[11px] text-[#1E1E1E] bg-[#E6E6E6] hover:bg-[#D9D9D9]"
              >
                뒤로가기
              </button>
              <button
                onClick={handleDeleteReport}
                className="px-4 py-2 text-[11px] text-[#FFFFFF] bg-[#2C2C2C] hover:bg-[#1a1a1a]"
              >
                삭제
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Work Confirmation Modal */}
      {showWorkModal && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
            <h3 className="text-[14px] font-semibold text-[#1E1E1E] mb-2">
              {workActionType === 'rework' ? '재작업을 진행하시겠어요?' : '수정신고를 진행하시겠어요?'}
            </h3>
            <p className="text-[11px] text-[#767676] mb-4">
              {workActionType === 'rework' 
                ? '기존 신고서를 재작업합니다.'
                : '기존 신고서는 유지되며, 새로운 신고서를 추가로 생성합니다.'}
            </p>
            <div className="flex flex-row gap-2 justify-end">
              <button
                onClick={() => {
                  setShowWorkModal(false);
                  setReportToWork(null);
                  setWorkActionType(null);
                }}
                className="px-4 py-2 text-[11px] text-[#1E1E1E] bg-[#E6E6E6] hover:bg-[#D9D9D9]"
              >
                뒤로가기
              </button>
              <button
                onClick={handleWork}
                className="px-4 py-2 text-[11px] text-[#FFFFFF] bg-[#2C2C2C] hover:bg-[#1a1a1a]"
              >
                {workActionType === 'rework' ? '재작업' : '수정신고'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Document View Modal */}
      {selectedReport && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] flex flex-col">
            <div className="flex flex-row justify-between items-center p-4 border-b border-[#D9D9D9]">
              <div className="flex flex-col">
                <h3 className="text-[14px] font-semibold text-[#1E1E1E]">
                  서류보기 납부할 세액(환급받을 세액): 0원
                </h3>
              </div>
              <div className="flex flex-row gap-2">
                <button className="px-3 py-1 text-[11px] text-[#1E1E1E] bg-[#E6E6E6] hover:bg-[#D9D9D9]">
                  다운로드
                </button>
                <button className="px-3 py-1 text-[11px] text-[#1E1E1E] bg-[#E6E6E6] hover:bg-[#D9D9D9]">
                  인쇄하기
                </button>
                <button
                  onClick={() => setSelectedReport(null)}
                  className="w-6 h-6 flex items-center justify-center hover:opacity-70"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L4 12M4 4L12 12" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex-1 p-4 overflow-auto">
              <div className="w-full h-full bg-white">
                {/* Document content would be rendered here */}
                <p className="text-[11px] text-[#B3B3B3]">문서 내용이 여기에 표시됩니다.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <ToastMessage
        message={toastMessage}
        isVisible={showToast}
        onHide={() => setShowToast(false)}
      />

      {/* Preview Modal */}
      <VatPreviewModal
        isOpen={showPreviewModal}
        onClose={() => {
          setShowPreviewModal(false);
          setPreviewReportId(null);
        }}
        reportId={previewReportId}
      />

      {/* Simple Preview Modal - 서류명 클릭 시 열림 */}
      <VatSimplePreviewModal
        isOpen={showSimplePreviewModal}
        onClose={() => {
          setShowSimplePreviewModal(false);
          setSimplePreviewReportId(null);
        }}
        reportId={simplePreviewReportId}
      />
    </>
  );
}
