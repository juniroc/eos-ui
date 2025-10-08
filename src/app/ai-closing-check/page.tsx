'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import SuspenseModal from './SuspenseModal';
import PeriodAccrualModal from './PeriodAccrualModal';
import DepreciationModal from './DepreciationModal';
import EndingInventoryModal from './EndingInventoryModal';
import BadDebtModal from './BadDebtModal';
import RetirementBenefitModal from './RetirementBenefitModal';
import {
  initClosingCheck,
  getClosingCheckStream
} from '@/services/api';
interface CheckRow {
  id: number;
  key: string;
  category: string;
  title: string;
  description: string;
  status: 'PENDING' | 'PROCESSING' | 'DONE' | 'NA';
}



interface ManualModeResponse {
  closingDate: string;
  items: CheckRow[];
}

interface AutoModeResponse {
  jobId: string;
  closingDate: string;
}


export default function AIClosingCheckPage() {
  const router = useRouter();
  const { isAuthenticated, loading: authLoading } = useAuth();
  const [rows, setRows] = useState<CheckRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [closingDate, setClosingDate] = useState<string>('');
  const [streamStatus, setStreamStatus] = useState<string>('');
  
  // 감가상각 팝업 상태
  const [showDepreciationModal, setShowDepreciationModal] = useState(false);

  // 기말재고 팝업 상태
  const [showEndingInventoryModal, setShowEndingInventoryModal] = useState(false);

  // 대손상각 팝업 상태
  const [showBadDebtModal, setShowBadDebtModal] = useState(false);

  // 퇴직급여충당금 팝업 상태
  const [showRetirementBenefitModal, setShowRetirementBenefitModal] = useState(false);

  // 가수가지급금 팝업 상태
  const [showSuspenseModal, setShowSuspenseModal] = useState(false);

  // 기간귀속 팝업 상태
  const [showPeriodAccrualModal, setShowPeriodAccrualModal] = useState(false);

  // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, router]);

  // 현재 날짜를 기본값으로 설정
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    setClosingDate(`${year}-${month}-${day}`);
  }, []);

  /** 기말재고 상태 업데이트 핸들러 */
  const handleEndingInventoryStatusUpdate = (status: 'DONE') => {
    setRows(prev => prev.map(row => 
      row.key === 'ending_inventory' ? { ...row, status } : row
    ));
  };

  /** 대손상각 상태 업데이트 핸들러 */
  const handleBadDebtStatusUpdate = (status: 'DONE') => {
    setRows(prev => prev.map(row => 
      row.key === 'bad_debt' ? { ...row, status } : row
    ));
  };


  /** 퇴직급여충당금 상태 업데이트 핸들러 */
  const handleRetirementBenefitStatusUpdate = (status: 'DONE') => {
    setRows(prev => prev.map(row => 
      row.key === 'retirement_benefit' ? { ...row, status } : row
    ));
  };

  /** 가수가지급금 상태 업데이트 핸들러 */
  const handleSuspenseStatusUpdate = (status: 'DONE') => {
    setRows(prev => prev.map(row => 
      row.key === 'suspense_clear' ? { ...row, status } : row
    ));
  };

  /** 기간귀속 상태 업데이트 핸들러 */
  const handlePeriodAccrualStatusUpdate = (status: 'DONE') => {
    setRows(prev => prev.map(row => 
      row.key === 'period_accrual' ? { ...row, status } : row
    ));
  };

  /** 직접 점검 */
  const handleCheck = async (mode: 'manual' | 'auto') => {
    try {
      setLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      const data = await initClosingCheck({
        closingDate: closingDate,
        mode,
      }, accessToken) 
      

      if (mode === 'manual') {
        const manulData = data as ManualModeResponse;
        setRows(manulData.items);
      } else {
        const autoData = data as AutoModeResponse;
        setStreamStatus('AI 점검을 시작합니다...');
        startSSEStream(autoData.jobId, accessToken);
      }
    } catch (error) {
      console.error('AI 자동 점검 API 호출 오류:', error);
      alert(error instanceof Error ? error.message : 'AI 점검을 시작하는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  /** SSE 스트림 처리 */
  const startSSEStream = async (jobId: string, accessToken: string) => {
    try {
      const stream = await getClosingCheckStream(jobId, accessToken);
      
      if (!stream) {
        throw new Error('스트림을 가져올 수 없습니다.');
      }

      const reader = stream.getReader();

      const decoder = new TextDecoder();
      let buffer = '';
      let currentEventType = '';

      const processStream = async () => {
        try {
          while (true) {
            const { done, value } = await reader.read();
            
            if (done) {
              console.log('스트림 완료');
              break;
            }

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() || '';

            for (const line of lines) {
              if (line.trim() === '') continue;
              
              if (line.startsWith('event:')) {
                currentEventType = line.substring(6).trim();
                console.log('이벤트 타입:', currentEventType);
              } else if (line.startsWith('data:')) {
                const data = line.substring(5).trim();
                if (data) {
                  try {
                    const parsedData = JSON.parse(data);
                    console.log('SSE 데이터:', parsedData);
                    
                    // 이벤트 타입에 따라 UI 업데이트
                    if (currentEventType === 'connected') {
                      setStreamStatus('AI 점검에 연결되었습니다.');
                    } else if (currentEventType === 'progress') {
                      setStreamStatus(`진행 중: ${parsedData.stage} (${parsedData.index || 0}/${parsedData.total || 0})`);
                      
                      // 특정 항목의 상태 업데이트
                      if (parsedData.key) {
                        if (parsedData.stage === 'item_done') {
                          // 항목이 완료된 경우
                          setRows(prev => prev.map(row => 
                            row.key === parsedData.key 
                              ? { ...row, status: 'DONE' as CheckRow['status'] }
                              : row
                          ));
                        } else {
                          // 항목이 진행 중인 경우
                          setRows(prev => prev.map(row => 
                            row.key === parsedData.key 
                              ? { ...row, status: 'PROCESSING' as CheckRow['status'] }
                              : row
                          ));
                        }
                      }
                    } else if (currentEventType === 'done') {
                      setStreamStatus(`완료: ${parsedData.progress}/${parsedData.total} 항목 처리됨`);
                      
                      // 모든 항목을 완료 상태로 설정
                      setRows(prev => prev.map(row => ({ ...row, status: 'DONE' as CheckRow['status'] })));
                    } else if (currentEventType === 'error') {
                      setStreamStatus(`오류: ${parsedData.error}`);
                    }
                  } catch {
                    console.log('SSE 텍스트 데이터:', data);
                  }
                }
              }
            }
          }
        } catch (error) {
          console.error('스트림 처리 오류:', error);
        }
      };

      processStream();
    } catch (error) {
      console.error('SSE 연결 오류:', error);
    }
  };

  /** 감가상각 상태 업데이트 핸들러 */
  const handleDepreciationStatusUpdate = (status: 'DONE') => {
      setRows(prev => prev.map(row => 
      row.key === 'depreciation' ? { ...row, status } : row
    ));
  };


  /** 상태 표시 스타일 */
  const renderStatus = (status: CheckRow['status']) => {
    switch (status) {
      case 'PENDING':
        return <span className="text-red-500">미처리</span>;
      case 'PROCESSING':
        return <span className="text-gray-600">처리중</span>;
      case 'DONE':
        return <span className="text-green-600">처리 완료</span>;
      case 'NA':
        return <span className="text-gray-400">N/A</span>;
    }
  };

  // 로딩 중이거나 인증되지 않은 경우
  if (authLoading) {
    return (
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-8">로딩 중...</div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // 리다이렉트가 처리됨
  }

  return (
    <div className="flex flex-col items-start p-4 gap-4">
      {/* Header */}
      <div className="flex flex-col items-start gap-4  min-w-[520px] self-stretch">
        {/* Title Section */}
        <div className="flex justify-between items-end gap-4 h-[46px] self-stretch">
          {/* Left Title */}
          <div className="flex flex-col items-start w-[256px] h-[46px]">
            <div className="flex flex-col items-start py-1.5 w-[256px] h-[29px] rounded-lg">
              <div className="flex items-start">
                <h2 className="text-[15px] font-semibold leading-[140%] text-[#1E1E1E]">
                  AI결산점검
                </h2>
              </div>
            </div>
            <p className="text-[12px] leading-[140%] text-[#767676]">
              필요한 내용을 입력하고 정보를 저장하세요.
            </p>
          </div>
          
          {/* Right Buttons */}
          <div className="flex justify-end items-center gap-2 h-[32px]">
            {/* Date Input */}
            <div className="flex flex-col justify-center items-start w-[150px] min-w-[100px] h-[32px]">
              <div className="flex items-center p-2 gap-2 bg-white border border-[#D9D9D9] w-[150px] min-w-[100px] h-[32px] self-stretch">
                <input
                  type="date"
                  value={closingDate}
                  onChange={(e) => setClosingDate(e.target.value)}
                  className="flex-1 text-[12px] leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                />
              </div>
            </div>
            
            {/* Divider */}
            <div className="h-5 border-l border-[#D9D9D9]"></div>
            
            {/* Manual Check Button */}
            <div className="w-[90px] h-[28px]">
              <button
                onClick={() => handleCheck('manual')}
                disabled={loading}
                className="flex justify-center items-center py-2 px-3 gap-2 w-[90px] h-[28px] bg-[#2C2C2C] text-[#F5F5F5] text-[12px] leading-[100%] font-medium cursor-pointer"
              >
                {loading ? '처리중...' : '직접 점검하기'}
              </button>
            </div>
            
            {/* AI Check Button */}
            <div className="w-[90px] h-[28px] bg-white">
              <button
                onClick={() => handleCheck('auto')}
                disabled={loading}
                className="flex justify-center items-center gap-2 w-[90px] h-[28px] bg-white border border-solid cursor-pointer"
                style={{
                  borderImageSource: 'linear-gradient(97.16deg, #00D2FF 0%, #4B5CDD 68.75%, #BE26FF 100%)',
                  borderImageSlice: 1
                }}
              >
                <span className="text-[12px] leading-[100%] font-medium bg-gradient-to-r from-[#00D2FF] via-[#4B5CDD] to-[#BE26FF] bg-clip-text text-transparent">
                  {loading ? '처리중...' : 'AI에게 맡기기'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 스트림 상태 표시 */}
      {streamStatus && (
        <div className="w-full p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-blue-700">{streamStatus}</span>
          </div>
        </div>
      )}

      {/* 점검 테이블 */}
      <div className="flex flex-col w-full border border-[#D9D9D9]">
        {/* 테이블 헤더 */}
        <div className="flex w-full h-8">
          <div className="flex flex-col justify-center items-start w-[100px] min-w-[100px] h-8 bg-[#F5F5F5] border-r border-[#D9D9D9] p-2">
            <div className="flex justify-center items-center w-full">
              <span className="text-xs font-medium text-[#757575]">구분</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start w-[100px] min-w-[100px] h-8 bg-[#F5F5F5] border-r border-[#D9D9D9] p-2">
            <div className="flex justify-center items-center w-full">
              <span className="text-xs font-medium text-[#757575]">점검항목</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start flex-[2.8] h-8 bg-[#F5F5F5] border-r border-[#D9D9D9] p-2">
            <div className="flex justify-center items-center w-full">
              <span className="text-xs font-medium text-[#757575]">내용</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start flex-1 h-8 bg-[#F5F5F5] border-r border-[#D9D9D9] p-2">
            <div className="flex justify-center items-center w-full">
              <span className="text-xs font-medium text-[#757575]">처리현황</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start w-[70px] min-w-[70px] h-8 bg-[#F5F5F5] p-2">
            <div className="flex justify-center items-center w-full">
              <span className="text-xs font-medium text-[#757575]">점검/수정</span>
            </div>
          </div>
        </div>

        {/* 테이블 바디 */}
        {rows.length > 0 ? (
          rows.map(r => (
            <div key={r.id} className="flex w-full h-8 border-t border-[#D9D9D9]" style={{ borderBottom: '1px solid #D9D9D9' }}>
              <div className="flex flex-col justify-center items-start w-[100px] min-w-[100px] h-8 bg-white border-r border-[#D9D9D9] p-2">
                <span className="text-xs font-medium text-[#EC221F]">{r.category}</span>
              </div>
              <div className="flex flex-col justify-center items-start w-[100px] min-w-[100px] h-8 bg-white border-r border-[#D9D9D9] p-2">
                <span className="text-xs font-medium text-[#757575]">{r.title}</span>
              </div>
              <div className="flex flex-col justify-center items-start flex-[2.8] h-8 bg-white border-r border-[#D9D9D9] p-2">
                <span className="text-xs font-medium text-[#757575]">{r.description}</span>
              </div>
              <div className="flex flex-col justify-center items-start flex-1 h-8 bg-white border-r border-[#D9D9D9] p-2">
                <span className="text-xs font-medium text-[#1E1E1E]">{renderStatus(r.status)}</span>
              </div>
              <div className="flex flex-col justify-center items-center w-[70px] min-w-[70px] h-8 bg-white p-2">
                <div className="flex justify-center items-center w-[46px] h-[23px]">
                  <button
                    className="flex justify-center items-center py-1.5 gap-2.5 w-[32px] h-[23px] bg-[#2C2C2C] text-xs font-medium text-white cursor-pointer"
                    onClick={() => {
                      if (r.key === 'depreciation') {
                        setShowDepreciationModal(true);
                      } else if (r.key === 'ending_inventory') {
                        setShowEndingInventoryModal(true);
                      } else if (r.key === 'bad_debt') {
                        setShowBadDebtModal(true);
                      } else if (r.key === 'retirement_benefit') {
                        setShowRetirementBenefitModal(true);
                      } else if (r.key === 'suspense_clear') {
                        setShowSuspenseModal(true);
                      } else if (r.key === 'period_accrual') {
                        setShowPeriodAccrualModal(true);
                      }
                    }}
                  >
                    점검
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          /* 빈 상태 행 */
          <div className="flex w-full h-8 border-t border-b border-[#D9D9D9]">
            <div className="flex flex-col justify-center items-start w-[100px] min-w-[100px] h-8 bg-[#F5F5F5] border-r border-b border-[#D9D9D9] p-2">
            </div>
            <div className="flex flex-col justify-center items-start w-[100px] min-w-[100px] h-8 bg-[#F5F5F5] border-r border-b border-[#D9D9D9] p-2">
            </div>
            <div className="flex flex-col justify-center items-start flex-[2.8] h-8 bg-[#F5F5F5] border-r border-b border-[#D9D9D9] p-2">
            </div>
            <div className="flex flex-col justify-center items-start flex-1 h-8 bg-[#F5F5F5] border-r border-b border-[#D9D9D9] p-2">
            </div>
            <div className="flex flex-col justify-center items-center w-[70px] min-w-[70px] h-8 bg-[#F5F5F5] border-b border-[#D9D9D9] p-2">
            </div>
          </div>
        )}
      </div>

      {/* 감가상각 팝업 */}
      <DepreciationModal
        isOpen={showDepreciationModal}
        onClose={() => setShowDepreciationModal(false)}
        closingDate={closingDate}
        onStatusUpdate={handleDepreciationStatusUpdate}
      />

      {/* 기말재고 팝업 */}
      <EndingInventoryModal
        isOpen={showEndingInventoryModal}
        onClose={() => setShowEndingInventoryModal(false)}
        closingDate={closingDate}
        onStatusUpdate={handleEndingInventoryStatusUpdate}
      />

      {/* 대손상각 팝업 */}
      <BadDebtModal
        isOpen={showBadDebtModal}
        onClose={() => setShowBadDebtModal(false)}
        closingDate={closingDate}
        onStatusUpdate={handleBadDebtStatusUpdate}
      />

      {/* 퇴직급여충당금 팝업 */}
      <RetirementBenefitModal
        isOpen={showRetirementBenefitModal}
        onClose={() => setShowRetirementBenefitModal(false)}
        closingDate={closingDate}
        onStatusUpdate={handleRetirementBenefitStatusUpdate}
      />

      {/* 가수가지급금 팝업 */}
      <SuspenseModal
        isOpen={showSuspenseModal}
        onClose={() => setShowSuspenseModal(false)}
        closingDate={closingDate}
        onStatusUpdate={handleSuspenseStatusUpdate}
      />

      {/* 기간귀속 팝업 */}
      <PeriodAccrualModal
        isOpen={showPeriodAccrualModal}
        onClose={() => setShowPeriodAccrualModal(false)}
        closingDate={closingDate}
        onStatusUpdate={handlePeriodAccrualStatusUpdate}
      />
    </div>
  );
}
