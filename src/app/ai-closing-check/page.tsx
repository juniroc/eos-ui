'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import SuspenseModal from './SuspenseModal';
import PeriodAccrualModal from './PeriodAccrualModal';
import DepreciationModal from '@/components/DepreciationModal';
import EndingInventoryModal from '@/components/EndingInventoryModal';
import BadDebtModal from '@/components/BadDebtModal';
import RetirementBenefitModal from '@/components/RetirementBenefitModal';
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




// 가수가지급금 관련 타입
interface SuspenseVoucher {
  voucherId: string;
  date: string;
  description: string;
  transactions: {
    id: string;
    accountId: string;
    accountCode: string;
    accountName: string;
    debitCredit: 'DEBIT' | 'CREDIT';
    amount: number;
    partnerId?: string;
    partnerName?: string;
    note?: string;
  }[];
}

interface SuspenseResponse {
  key: string;
  status: string;
  vouchers: SuspenseVoucher[];
  period: {
    start: string;
    end: string;
  };
}

interface EditableSuspenseTransaction {
  id: string;
  accountId: string;
  accountCode: string;
  accountName: string;
  debitCredit: 'DEBIT' | 'CREDIT';
  amount: number;
  partnerId?: string;
  partnerName?: string;
  note?: string;
  isEditing?: boolean;
}

// 기간귀속 관련 타입
interface PeriodAccrualItem {
  accountCode: string;
  accountName: string;
  endingBalance: number;
  addAmount: number;
  counterAccountId?: string | null;
  memo: string;
}

export interface PeriodAccrualResponse {
  key: string;
  status: string;
  rows: PeriodAccrualItem[];
  period: {
    start: string;
    end: string;
  };
}

export interface EditablePeriodAccrualItem extends PeriodAccrualItem {
  id: string;
  isEditing?: boolean;
}

// API에서 요구하는 PeriodAccrualRow 타입
interface PeriodAccrualRow {
  accountCode: string;
  addAmount: number;
  counterAccountId?: string | null;
  memo?: string;
}


interface VoucherTransaction {
  account: {
    id: string;
    code: number;
    name: string;
    debitCredit: boolean;
    attribute: string;
    category: string;
    fsName1: string;
    fsName2: string;
    summarySourceCodes: string[];
    createdAt: string;
    updatedAt: string;
  };
  partner: {
    id: string;
    name: string;
    businessNumber: string | null;
    representative: string | null;
    address: string | null;
    phone: string | null;
    email: string | null;
    userId: string;
    type: string;
    cardIssuer: string | null;
    cardNumber: string | null;
    cardType: string | null;
    primaryUser: string | null;
    bankName: string | null;
    accountNumber: string | null;
    withdrawalFee: number | null;
    purpose: string | null;
    note: string | null;
    mainItems: string | null;
    relationship: string | null;
    documentId: string | null;
    createdAt: string;
    updatedAt: string;
  };
  amount: number;
  debitCredit: 'DEBIT' | 'CREDIT';
  note: string;
}

interface VoucherResponse {
  id: string;
  userId: string;
  date: string;
  description: string;
  departmentId: string | null;
  documentId: string | null;
  createdAt: string;
  updatedAt: string;
  transactions: VoucherTransaction[];
}

export default function AIClosingCheckPage() {
  const router = useRouter();
  const { isAuthenticated, loading: authLoading } = useAuth();
  const [rows, setRows] = useState<CheckRow[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [closingDate, setClosingDate] = useState<string>('');
  const [streamStatus, setStreamStatus] = useState<string>('');
  const [modalData, setModalData] = useState<{
    tangible?: Record<string, unknown>[];
    intangible?: Record<string, unknown>[];
    rows?: Record<string, unknown>[];
  } | null>(null);
  const [selectedItemKey, setSelectedItemKey] = useState<string>('');
  const [allResults, setAllResults] = useState<Record<string, unknown> | null>(null);
  
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
  const [suspenseData, setSuspenseData] = useState<SuspenseResponse | null>(null);
  const [suspenseLoading, setSuspenseLoading] = useState(false);
  const [editableSuspenseTransactions, setEditableSuspenseTransactions] = useState<EditableSuspenseTransaction[]>([]);

  // 기간귀속 팝업 상태
  const [showPeriodAccrualModal, setShowPeriodAccrualModal] = useState(false);
  const [periodAccrualData, setPeriodAccrualData] = useState<PeriodAccrualResponse | null>(null);
  const [periodAccrualVoucherData, setPeriodAccrualVoucherData] = useState<VoucherResponse | null>(null);
  const [periodAccrualLoading, setPeriodAccrualLoading] = useState(false);
  const [editablePeriodAccrualItems, setEditablePeriodAccrualItems] = useState<EditablePeriodAccrualItem[]>([]);

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

  /** 가수가지급금 점검 */
  const handleSuspenseCheck = async () => {
    try {
      setSuspenseLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      // 가수가지급금 점검 API 호출
      const requestBody = {
        closingDate: closingDate,
        key: 'suspense_clear'
      };
      
      console.log('가수가지급금 점검 API 요청:', {
        url: 'https://api.eosxai.com/api/closing-check/run-item',
        method: 'POST',
        body: requestBody,
        closingDate: closingDate
      });

      const response = await fetch('https://api.eosxai.com/api/closing-check/run-item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API 에러 응답:', errorData);
        
        if (response.status === 500) {
          alert('서버 내부 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        } else {
          alert(`가수가지급금 점검에 실패했습니다. (${response.status})`);
        }
        return;
      }

      const data: SuspenseResponse = await response.json();
      setSuspenseData(data);
      
      // 편집 가능한 형태로 변환
      const allTransactions: EditableSuspenseTransaction[] = [];
      data.vouchers.forEach(voucher => {
        voucher.transactions.forEach(transaction => {
          allTransactions.push({
            ...transaction,
            isEditing: false
          });
        });
      });
      setEditableSuspenseTransactions(allTransactions);
      
      // 기존 모달 닫기
      setShowModal(false);
      
      // 가수가지급금 팝업 열기
      setShowSuspenseModal(true);
      
      // 테이블에 가수가지급금 항목 표시
      const updatedRows = rows.map(row => 
        row.key === 'suspense_clear' 
          ? { ...row, status: 'DONE' as CheckRow['status'] }
          : row
      );
      setRows(updatedRows);
    } catch (error) {
      console.error('가수가지급금 점검 API 호출 오류:', error);
      alert('가수가지급금 점검 중 네트워크 오류가 발생했습니다.');
    } finally {
      setSuspenseLoading(false);
    }
  };

  /** 가수가지급금 직접 점검 */
  const callSuspenseAPI = async (date: string) => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      // 가수가지급금 점검 API 호출
      const requestBody = {
        closingDate: date,
        key: 'suspense_clear',
      };

      const response = await fetch('https://api.eosxai.com/api/closing-check/run-item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API 에러 응답:', errorData);
        
        if (response.status === 500) {
          alert('서버 내부 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        } else {
          alert(`가수가지급금 점검에 실패했습니다. (${response.status})`);
        }
        return;
      }

      const data: SuspenseResponse = await response.json();
      setSuspenseData(data);

      return data;
    } catch (error) {
      console.error('가수가지급금 직접 점검 API 호출 오류:', error);
      alert('가수가지급금 직접 점검 중 네트워크 오류가 발생했습니다.');
    }
  };

  /** 가수가지급금 결산 반영 */
  const handleSuspenseApply = async (newData: SuspenseResponse) => {
    try {
      setSuspenseLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      // 가수가지급금 점검 API 호출
      const requestBody = {
        closingDate: closingDate,
        key: 'suspense_clear',
        vouchers: newData.vouchers
      };

      const response = await fetch('https://api.eosxai.com/api/closing-check/run-item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API 에러 응답:', errorData);
        
        if (response.status === 500) {
          alert('서버 내부 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        } else {
          alert(`가수가지급금 점검에 실패했습니다. (${response.status})`);
        }
        return;
      }
      // 성공했습니다는 안내문구
      alert('가수가지급금 결산 반영이 완료되었습니다.');

      // const data: SuspenseResponse = await response.json();
      // setSuspenseData(data);
      
      // // 편집 가능한 형태로 변환
      // const allTransactions: EditableSuspenseTransaction[] = [];
      // data.vouchers.forEach(voucher => {
      //   voucher.transactions.forEach(transaction => {
      //     allTransactions.push({
      //       ...transaction,
      //       isEditing: false
      //     });
      //   });
      // });
      // setEditableSuspenseTransactions(allTransactions);
      
    } catch (error) {
      console.error('가수가지급금 점검 API 호출 오류:', error);
      alert('가수가지급금 점검 중 네트워크 오류가 발생했습니다.');
    } finally {
      setSuspenseLoading(false);
    }
  };

  /** 기간귀속 점검 API 호출 */
  const callPeriodAccrualAPI = async (date: string): Promise<PeriodAccrualResponse> => {
    const accessToken = localStorage.getItem('accessToken');
    
    if (!accessToken) {
      throw new Error('로그인이 필요합니다.');
    }

    // 기간귀속 점검 API 호출
    const requestBody = {
      closingDate: date,
      key: 'period_accrual'
    };
    
    console.log('기간귀속 점검 API 요청:', {
      url: 'https://api.eosxai.com/api/closing-check/run-item',
      method: 'POST',
      body: requestBody,
      closingDate: date
    });

    const response = await fetch('https://api.eosxai.com/api/closing-check/run-item', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('API 에러 응답:', errorData);
      
      if (response.status === 500) {
        throw new Error('서버 내부 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      } else {
        throw new Error(`기간귀속 점검에 실패했습니다. (${response.status})`);
      }
    }

    const data: PeriodAccrualResponse = await response.json();
    setPeriodAccrualData(data);
    return data;
  };

  /** 기간귀속 점검 */
  const handlePeriodAccrualCheck = async () => {
    try {
      const data = await callPeriodAccrualAPI(closingDate);
      
      // 편집 가능한 형태로 변환
      const editableItems: EditablePeriodAccrualItem[] = data.rows.map((item, index) => ({
        ...item,
        counterAccountId: item.counterAccountId || '',
        id: `${item.accountCode}-${index}`,
        isEditing: false
      }));
      setEditablePeriodAccrualItems(editableItems);
      
      // 기존 모달 닫기
      setShowModal(false);
      
      // 기간귀속 팝업 열기
      setShowPeriodAccrualModal(true);
      
      // 테이블에 기간귀속 항목 표시
      const updatedRows = rows.map(row => 
        row.key === 'period_accrual' 
          ? { ...row, status: 'DONE' as CheckRow['status'] }
          : row
      );
      setRows(updatedRows);
    } catch (error) {
      console.error('기간귀속 점검 오류:', error);
      alert(error instanceof Error ? error.message : '기간귀속 점검 중 네트워크 오류가 발생했습니다.');
    } finally {
      setPeriodAccrualLoading(false);
    }
  };

  /** 기간귀속 결산 반영 */
  const handlePeriodAccrualApply = async () => {
    try {
      setPeriodAccrualLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      // API에서 요구하는 형태로 데이터 변환
      const rows: PeriodAccrualRow[] = editablePeriodAccrualItems.map(item => {
        const row: PeriodAccrualRow = {
          accountCode: item.accountCode,
          addAmount: item.addAmount,
          memo: item.memo
        };
        // counterAccountId가 있는 경우에만 추가
        if (item.counterAccountId) {
          row.counterAccountId = item.counterAccountId;
        }
        return row;
      });

      const response = await fetch('https://api.eosxai.com/api/closing-check/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          closingDate: closingDate,
          key: 'period_accrual',
          description: '기간귀속 결산 반영',
          rows: rows
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API 에러 응답:', errorData);
        
        if (response.status === 500) {
          alert('기간귀속 결산반영 중 서버 오류가 발생했습니다.');
        } else {
          alert(`기간귀속 결산 반영에 실패했습니다. (${response.status})`);
        }
        return;
      }

      const data: VoucherResponse = await response.json();
      setPeriodAccrualVoucherData(data);
      
      // 메인 테이블 상태 업데이트
      setRows(prev => prev.map(row => 
        row.key === 'period_accrual' ? { ...row, status: 'DONE' } : row
      ));
      
    } catch (error) {
      console.error('기간귀속 결산 반영 API 호출 오류:', error);
      alert('기간귀속 결산 반영 중 네트워크 오류가 발생했습니다.');
    } finally {
      setPeriodAccrualLoading(false);
    }
  };

  /** 기간귀속 아이템 변경 핸들러 */
  const handlePeriodAccrualItemChange = (id: string, field: keyof EditablePeriodAccrualItem, value: string | number | boolean) => {
    setEditablePeriodAccrualItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    );
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
                      
                      // 모든 결과 데이터 저장
                      setAllResults(parsedData.results);
                      
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
          <div className="flex justify-end items-center gap-2 w-[354px] h-[32px]">
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
            <div className="w-5 h-0 border-t border-[#D9D9D9] rotate-90"></div>
            
            {/* Manual Check Button */}
            <div className="w-[90px] h-[28px]">
              <button
                onClick={() => handleCheck('manual')}
                disabled={loading}
                className="flex justify-center items-center py-2 px-3 gap-2 w-[90px] h-[28px] bg-[#2C2C2C] text-[#F5F5F5] text-[12px] leading-[100%] font-medium"
              >
                {loading ? '처리중...' : '직접 점검하기'}
              </button>
            </div>
            
            {/* AI Check Button */}
            <div className="w-[90px] h-[28px] bg-white">
              <button
                onClick={() => handleCheck('auto')}
                disabled={loading}
                className="flex justify-center items-center gap-2 w-[90px] h-[28px] bg-white border border-solid"
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
        <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
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
          <div className="flex flex-col justify-center items-start flex-1 h-8 bg-[#F5F5F5] border-r border-[#D9D9D9] p-2">
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
              <div className="flex flex-col justify-center items-start flex-1 h-8 bg-white border-r border-[#D9D9D9] p-2">
                <span className="text-xs font-medium text-[#757575]">{r.description}</span>
              </div>
              <div className="flex flex-col justify-center items-start flex-1 h-8 bg-white border-r border-[#D9D9D9] p-2">
                <span className="text-xs font-medium text-[#1E1E1E]">{renderStatus(r.status)}</span>
              </div>
              <div className="flex flex-col justify-center items-center w-[70px] min-w-[70px] h-8 bg-white p-2">
                <div className="flex justify-center items-center w-[46px] h-[23px]">
                  <button
                    className="flex justify-center items-center py-1.5 gap-2.5 w-[32px] h-[23px] bg-[#2C2C2C] text-xs font-medium text-white"
                    onClick={() => {
                      setSelectedItemKey(r.key);
                      if (r.key === 'depreciation') {
                        setShowDepreciationModal(true);
                      } else if (r.key === 'ending_inventory') {
                        setShowEndingInventoryModal(true);
                      } else if (r.key === 'bad_debt') {
                        setShowBadDebtModal(true);
                      } else if (r.key === 'retirement_benefit') {
                        setShowRetirementBenefitModal(true);
                      } else if (r.key === 'suspense_clear') {
                        handleSuspenseCheck();
                      } else if (r.key === 'period_accrual') {
                        handlePeriodAccrualCheck();
                      } else {
                        setModalData((allResults?.[r.key] as Record<string, unknown>) || null);
                        setShowModal(true);
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
            <div className="flex flex-col justify-center items-start flex-1 h-8 bg-[#F5F5F5] border-r border-b border-[#D9D9D9] p-2">
            </div>
            <div className="flex flex-col justify-center items-start flex-1 h-8 bg-[#F5F5F5] border-r border-b border-[#D9D9D9] p-2">
            </div>
            <div className="flex flex-col justify-center items-center w-[70px] min-w-[70px] h-8 bg-[#F5F5F5] border-b border-[#D9D9D9] p-2">
            </div>
          </div>
        )}
      </div>

      {/* 모달 */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white shadow-lg max-w-7xl w-full mx-4 max-h-[90vh] overflow-hidden">
            {/* 모달 헤더 */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <div>
                <div className="text-sm text-gray-500 mb-1">
                  AI분개 &gt; AI결산점검 &gt; {selectedItemKey === 'depreciation' && '감가상각'}
                  {selectedItemKey === 'ending_inventory' && '기말재고'}
                  {selectedItemKey === 'bad_debt' && '매출채권 연령 분석'}
                  {selectedItemKey === 'retirement_benefit' && '퇴직급여 충당금'}
                  {selectedItemKey === 'suspense_clear' && '미결산 정리'}
                  {selectedItemKey === 'period_accrual' && '기말수정분개'}
                </div>
                <h3 className="text-lg font-bold">
                  {selectedItemKey === 'depreciation' && '감가상각'}
                  {selectedItemKey === 'ending_inventory' && '기말재고'}
                  {selectedItemKey === 'bad_debt' && '매출채권 연령 분석'}
                  {selectedItemKey === 'retirement_benefit' && '퇴직급여 충당금'}
                  {selectedItemKey === 'suspense_clear' && '미결산 정리'}
                  {selectedItemKey === 'period_accrual' && '기말수정분개'}
                </h3>
              </div>
              <div className="flex gap-2">
                <button
                  className="px-4 py-2 text-sm bg-[#F3F3F3] text-[#2C2C2C] hover:bg-gray-200"
                  onClick={() => window.print()}
                >
                  인쇄하기
                </button>
                <button
                  className="px-4 py-2 text-sm bg-[#2C2C2C] text-white hover:bg-[#444444]"
                  onClick={() => {/* 결산 반영 기능 */}}
                >
                  결산 반영
                </button>
                <button
                  className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700"
                  onClick={() => setShowModal(false)}
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <p className="text-sm text-gray-600 mb-4">
                {selectedItemKey === 'depreciation' && 'AI가 수행한 감가상각 작업을 확인해 주세요. 수정사항이 있으면 수정 후 결산반영을 누르면 됩니다.'}
                {selectedItemKey === 'ending_inventory' && '최종 실사 확인된 재고자산액과 장부상 재고액을 조정하여 원가를 계산합니다. 제조업과 상품의 품목별 단가, 원가율 등의 관리를 하고자 하는 회사는 원가관리 메뉴를 활용하여 기말재고작업을 진행하세요.'}
                {selectedItemKey === 'bad_debt' && 'AI가 수행한 매출채권 연령 분석 작업을 확인해 주세요. 수정사항이 있으면 수정 후 결산반영을 누르면 됩니다.'}
                {selectedItemKey === 'retirement_benefit' && 'AI가 수행한 퇴직급여 충당금 작업을 확인해 주세요. 수정사항이 있으면 수정 후 결산반영을 누르면 됩니다.'}
                {selectedItemKey === 'suspense_clear' && 'AI가 수행한 미결산 정리 작업을 확인해 주세요. 수정사항이 있으면 수정 후 결산반영을 누르면 됩니다.'}
                {selectedItemKey === 'period_accrual' && 'AI가 수행한 기말수정분개 작업을 확인해 주세요. 수정사항이 있으면 수정 후 결산반영을 누르면 됩니다.'}
              </p>
                
              {/* 감가상각은 별도 팝업으로 처리 */}
              {selectedItemKey === 'depreciation' && (
                <div className="text-center py-8">
                  <div className="text-gray-500">감가상각 점검을 실행해주세요.</div>
                </div>
              )}

              {/* 다른 항목들 */}
              {selectedItemKey !== 'depreciation' && selectedItemKey !== 'ending_inventory' && selectedItemKey !== 'bad_debt' && selectedItemKey !== 'retirement_benefit' && modalData && (
                <>
                  {/* 기말수정분개 테이블 */}
                  {selectedItemKey === 'period_accrual' && (
                    <div>
                      <div className="text-center py-8">
                        <div className="text-gray-500">기말수정분개 데이터가 없습니다.</div>
                      </div>
                    </div>
                  )}
                </>
              )}
              
              {/* 기말수정분개 테이블 */}
              {selectedItemKey === 'period_accrual' && (
                <table className="w-full border border-[#D9D9D9] text-sm">
              <thead>
                    <tr className="bg-[#F5F5F5]">
                      <th className="p-2 border border-[#D9D9D9]">계정코드</th>
                      <th className="p-2 border border-[#D9D9D9]">계정명</th>
                      <th className="p-2 border border-[#D9D9D9]">기말잔액</th>
                      <th className="p-2 border border-[#D9D9D9]">추가금액</th>
                      <th className="p-2 border border-[#D9D9D9]">대상계정</th>
                      <th className="p-2 border border-[#D9D9D9]">메모</th>
                </tr>
              </thead>
              <tbody>
                    {modalData && modalData.rows && Array.isArray(modalData.rows) && modalData.rows.length > 0 ? (
                      (modalData.rows as Record<string, unknown>[]).map((item: Record<string, unknown>, index: number) => (
                        <tr key={index}>
                          <td className="p-2 border border-[#D9D9D9]">{String(item.accountCode || '-')}</td>
                          <td className="p-2 border border-[#D9D9D9]">{String(item.accountName || '-')}</td>
                          <td className="p-2 border border-[#D9D9D9]">
                            <input 
                              type="text" 
                              className="w-full px-1 py-1 text-xs" 
                              defaultValue={typeof item.endingBalance === 'number' ? item.endingBalance.toLocaleString() : String(item.endingBalance || '')}
                            />
                          </td>
                          <td className="p-2 border border-[#D9D9D9]">
                            <input 
                              type="text" 
                              className="w-full px-1 py-1 text-xs" 
                              defaultValue={typeof item.addAmount === 'number' ? item.addAmount.toLocaleString() : String(item.addAmount || '')}
                            />
                          </td>
                          <td className="p-2 border border-[#D9D9D9]">
                            <input 
                              type="text" 
                              className="w-full px-1 py-1 text-xs" 
                              defaultValue={String(item.counterAccountId || '')}
                            />
                          </td>
                          <td className="p-2 border border-[#D9D9D9]">
                            <input 
                              type="text" 
                              className="w-full px-1 py-1 text-xs" 
                              defaultValue={String(item.memo || '')}
                            />
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="p-4 text-center text-gray-500">데이터가 없습니다.</td>
                </tr>
                    )}
              </tbody>
            </table>
              )}
            </div>
          </div>
        </div>
      )}

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
        loading={suspenseLoading}
        onApply={(data: SuspenseResponse) => handleSuspenseApply(data)}
        closingDate={closingDate}
        onClosingDateChange={setClosingDate}
        onDirectCheck={(date: string) => callSuspenseAPI(date)}
      />

      {/* 기간귀속 팝업 */}
      <PeriodAccrualModal
        isOpen={showPeriodAccrualModal}
        onClose={() => setShowPeriodAccrualModal(false)}
        data={periodAccrualData}
        loading={periodAccrualLoading}
        editableItems={editablePeriodAccrualItems}
        onItemChange={handlePeriodAccrualItemChange}
        onApply={handlePeriodAccrualApply}
        closingDate={closingDate}
        onClosingDateChange={setClosingDate}
        onDirectCheck={(date: string) => callPeriodAccrualAPI(date)}
      />
    </div>
  );
}
