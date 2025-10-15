'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { saveClosingCheck, applyClosingCheck } from '@/services/ai-closing-check';
import Image from 'next/image';
import ToastMessage from '@/components/ToastMessage';
import PrintButton from '@/components/PrintButton';

// 기간귀속 관련 타입
interface PeriodAccrualItem {
  accountCode: string;
  accountName: string;
  endingBalance: number;
  addAmount: number;
  counterAccountId?: string | null;
  memo: string;
}

interface PeriodAccrualResponse {
  key: string;
  status: string;
  rows: PeriodAccrualItem[];
  period: {
    start: string;
    end: string;
  };
}

// API에서 요구하는 PeriodAccrualRow 타입 (결산반영 시 사용)
interface PeriodAccrualRow {
  accountCode: string;
  addAmount: number;
  counterAccountId?: string | null;
  memo?: string;
}

// API 응답 타입 (결산 반영 시 받는 구조)
interface ApplyTransaction {
  accountId: string;
  account: {
    id: string;
    code: number;
    name: string;
  };
  partnerId?: string;
  partner?: {
    id: string;
    name: string;
  };
  amount: number;
  debitCredit: boolean;
  note?: string;
}

interface ApplyPeriodAccrualResponse {
  voucher: {
    date: string;
    description?: string;
  };
  transactions: ApplyTransaction[];
}

// 전표 관련 타입 정의 (UI 표시용)
interface JournalEntry {
  id: string;
  date: string;
  debit: {
    accountCode: string;
    accountName: string;
    amount: number;
    memo: string;
  };
  credit: {
    accountCode: string;
    accountName: string;
    amount: number;
    memo: string;
  };
  description: string;
}



interface PeriodAccrualModalProps {
  isOpen: boolean;
  onClose: () => void;
  closingDate: string;
  onStatusUpdate: (status: 'DONE') => void;
}

function PeriodAccrualModal({
  isOpen,
  onClose,
  closingDate,
  onStatusUpdate,
}: PeriodAccrualModalProps) {
  const [loading, setLoading] = useState(false);
  const [editableData, setEditableData] = useState<PeriodAccrualItem[]>([]);
  const [editableJournalEntries, setEditableJournalEntries] = useState<JournalEntry[]>([]);
  const [voucherData, setVoucherData] = useState<ApplyPeriodAccrualResponse | null>(null);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  
  // API 호출 중복 방지를 위한 ref
  const isApiCallInProgress = useRef(false);

  /** 날짜를 YYYY-MM-DD 형식으로 포맷 */
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  
  /** 기간귀속 점검 API 호출 */
  const handlePeriodAccrualCheck = useCallback(async () => {
    // 이미 API 호출 중이면 중복 호출 방지
    if (isApiCallInProgress.current) {
      return;
    }
    
    try {
      setLoading(true);
      isApiCallInProgress.current = true;
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        throw new Error('로그인이 필요합니다.');
      }

      const requestBody = {
        closingDate: closingDate,
        key: 'period_accrual'
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
          throw new Error('서버 내부 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        } else {
          throw new Error(`기간귀속 점검에 실패했습니다. (${response.status})`);
        }
      }

      const responseData: PeriodAccrualResponse = await response.json();
      
      // API 응답 직후 editableData 초기화
      if (responseData?.rows) {
        setEditableData(responseData.rows.map(item => ({
          accountCode: item.accountCode,
          accountName: item.accountName,
          endingBalance: item.endingBalance,
          addAmount: item.addAmount,
          counterAccountId: item.counterAccountId,
          memo: item.memo
        })));
      }
      
      // 부모 컴포넌트에 상태 업데이트 알림
      onStatusUpdate('DONE');
      
    } catch (error) {
      console.error('기간귀속 점검 오류:', error);
      alert(error instanceof Error ? error.message : '기간귀속 점검 중 네트워크 오류가 발생했습니다.');
    } finally {
      setLoading(false);
      isApiCallInProgress.current = false;
    }
  }, [closingDate, onStatusUpdate]);

  // 모달이 열릴 때 자동으로 API 호출
  useEffect(() => {
    if (isOpen && closingDate) {
      handlePeriodAccrualCheck();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, closingDate]);

  // 개별 필드 수정 핸들러
  const handleFieldChange = (index: number, field: keyof PeriodAccrualItem, value: string | number) => {
    setEditableData(prev => {
      const newData = [...prev];
      if (field === 'endingBalance' || field === 'addAmount') {
        const numValue = typeof value === 'string' ? parseFloat(value.replace(/,/g, '')) || 0 : value;
        newData[index] = { ...newData[index], [field]: numValue };
      } else {
        newData[index] = { ...newData[index], [field]: value };
      }
      return newData;
    });
  };

  // 숫자 포맷팅 함수
  const formatNumber = (value: number): string => {
    return value.toLocaleString();
  };

  // 실제 잔액 계산 함수
  const calculateActualBalance = (endingBalance: number, addAmount: number): number => {
    return endingBalance + addAmount;
  };

  // 숫자 입력 처리 함수
  const handleNumberInput = (value: string): number => {
    return parseFloat(value.replace(/,/g, '')) || 0;
  };

  // 전표 필드 수정 핸들러
  const handleJournalFieldChange = (index: number, side: 'debit' | 'credit', field: string, value: string | number) => {
    setEditableJournalEntries(prev => {
      const newEntries = [...prev];
      if (field === 'amount') {
        const numValue = typeof value === 'string' ? handleNumberInput(value) : value;
        newEntries[index] = {
          ...newEntries[index],
          [side]: { ...newEntries[index][side], [field]: numValue }
        };
      } else {
        newEntries[index] = {
          ...newEntries[index],
          [side]: { ...newEntries[index][side], [field]: value }
        };
      }
      return newEntries;
    });
  };

  const handleJournalDescriptionChange = (index: number, value: string) => {
    setEditableJournalEntries(prev => {
      const newEntries = [...prev];
      newEntries[index] = { ...newEntries[index], description: value };
      return newEntries;
    });
  };

  // 전표 저장하기 버튼 핸들러
  const handleSaveVoucher = async () => {
    try {
      setLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      if (!voucherData) {
        alert('저장할 전표 데이터가 없습니다.');
        return;
      }

      // JournalEntry를 API 요청 형식으로 변환
      const transactions = [];
      for (const entry of editableJournalEntries) {
        // 차변 추가
        if (entry.debit.amount > 0 && entry.debit.accountName) {
          transactions.push({
            accountId: voucherData.transactions.find(
              t => t.account.name === entry.debit.accountName
            )?.accountId || '',
            amount: entry.debit.amount,
            debitCredit: true,
            note: entry.debit.memo || undefined,
          });
        }
        // 대변 추가
        if (entry.credit.amount > 0 && entry.credit.accountName) {
          transactions.push({
            accountId: voucherData.transactions.find(
              t => t.account.name === entry.credit.accountName
            )?.accountId || '',
            amount: entry.credit.amount,
            debitCredit: false,
            note: entry.credit.memo || undefined,
          });
        }
      }

      // accountId 유효성 검사
      const hasInvalidAccount = transactions.some(t => !t.accountId);
      if (hasInvalidAccount) {
        alert('계정과목이 설정되지 않은 거래가 있습니다. 모든 거래에 계정과목을 지정해주세요.');
        return;
      }

      const requestData = {
        closingDate,
        key: 'period_accrual' as const,
        voucher: {
          date: voucherData.voucher.date,
          description: voucherData.voucher.description,
        },
        transactions,
      };

      await saveClosingCheck(accessToken, requestData);

      setToastMessage('기간귀속의 전표 저장이 완료되었습니다.');
      setShowToast(true);

      // 메인 테이블 상태 업데이트
      onStatusUpdate('DONE');
    } catch (error) {
      console.error('전표 저장 오류:', error);
      alert(error instanceof Error ? error.message : '전표 저장 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };
  
  if (!isOpen) return null;



  // 결산반영 버튼 클릭 시 전표 생성
  const handleGenerateJournal = async () => {
    await handleSaveJournal();
    setToastMessage('기간귀속의 결산반영이 완료되었습니다.');
    setShowToast(true);
  };

  // 전표 저장 함수 (결산반영 API 호출)
  const handleSaveJournal = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('accessToken');
      if (!token) {
        alert('로그인이 필요합니다.');
        return;
      }

      // rows 데이터 변환
      const rows: PeriodAccrualRow[] = editableData.map(item => ({
        accountCode: item.accountCode,
        addAmount: item.addAmount,
        counterAccountId: item.counterAccountId || null,
        memo: item.memo,
      }));

      const result: ApplyPeriodAccrualResponse = await applyClosingCheck(token, {
        closingDate: closingDate,
        key: 'period_accrual',
        rows: rows,
      });

      setVoucherData(result);

      // API 응답을 JournalEntry 형태로 변환
      // transactions를 차변/대변 쌍으로 그룹화
      const journalEntries: JournalEntry[] = [];
      const debitTransactions = result.transactions.filter(t => t.debitCredit);
      const creditTransactions = result.transactions.filter(t => !t.debitCredit);
      
      const maxLength = Math.max(debitTransactions.length, creditTransactions.length);
      
      for (let i = 0; i < maxLength; i++) {
        const debit = debitTransactions[i];
        const credit = creditTransactions[i];
        
        journalEntries.push({
          id: String(i + 1),
          date: result.voucher.date,
          debit: debit ? {
            accountCode: String(debit.account.code),
            accountName: debit.account.name,
            amount: debit.amount,
            memo: debit.note || ''
          } : {
            accountCode: '',
            accountName: '',
            amount: 0,
            memo: ''
          },
          credit: credit ? {
            accountCode: String(credit.account.code),
            accountName: credit.account.name,
            amount: credit.amount,
            memo: credit.note || ''
          } : {
            accountCode: '',
            accountName: '',
            amount: 0,
            memo: ''
          },
          description: result.voucher.description || ''
        });
      }
      
      setEditableJournalEntries(journalEntries);

    } catch (error) {
      console.error('전표 조회 에러:', error);
      alert(error instanceof Error ? error.message : '전표 조회 중 문제가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-50 p-5">
      <div id="period-accrual-modal" className="bg-white shadow-xl w-full h-full overflow-hidden">
        {/* 모달 헤더 */}
        <div className="flex justify-between items-center px-3 py-3 h-[41px]">
          {/* 브레드크럼 */}
          <div className="flex items-center gap-[2px] flex-1">
            <span className="text-xs text-[#B3B3B3]">기초정보</span>
            <Image src="/icons/arrow_right.svg" alt="arrow_right" width="16" height="16" />
            <span className="text-xs text-[#B3B3B3]">AI결산점검</span>
            <Image src="/icons/arrow_right.svg" alt="arrow_right" width="16" height="16" />
            <span className="text-xs font-semibold text-[#1E1E1E]">기간귀속</span>
          </div>
          
          <button
            onClick={onClose}
            className="w-4 h-4 text-[#1E1E1E] cursor-pointer"
          >
            <Image src="/icons/close.svg" alt="close" width={16} height={16} />
          </button>
        </div>

        {/* 모달 내용 */}
        <div className="p-4 overflow-y-auto max-h-[calc(100%-41px)]">
          {/* 제목 섹션 */}
          <div className="mb-4">
            <div className="flex justify-between items-end mb-4">
              <div>
                <div className="mb-1">
                  <h2 className="text-base font-semibold text-[#1E1E1E] mb-1">기간귀속</h2>
                  <p className="text-xs text-[#767676]">필요한 내용을 입력하고 정보를 저장하세요.</p>
                </div>
              </div>
              
              {/* 버튼 영역 */}
              <div className="flex justify-end gap-2">
                <PrintButton
                  variant="neutral"
                  size="small"
                  printType="modal"
                  targetSelector="#period-accrual-modal"
                >
                  인쇄하기
                </PrintButton>
                <button 
                  onClick={handleGenerateJournal}
                  className="flex items-center justify-center px-4 py-2 h-7 bg-[#2C2C2C] text-white text-xs cursor-pointer"
                >
                  결산반영
                </button>
              </div>
            </div>
          </div>

          {/* 테이블 */}
          {loading ? (
            <div className="flex items-center justify-center h-32 border border-[#D9D9D9]">
              <div className="text-xs text-[#757575]">데이터를 불러오는 중...</div>
            </div>
          ) : (
            <div className="border border-[#D9D9D9]">
            {/* 테이블 헤더 */}
            <div className="flex bg-[#F5F5F5]">
              <div className="w-[100px] min-w-[100px] h-8 flex items-center justify-center px-2 border-r border-[#D9D9D9]">
                <span className="text-xs text-[#757575]">계정과목</span>
              </div>
              <div className="flex-1 h-8 flex items-center justify-center px-2 border-r border-[#D9D9D9]">
                <span className="text-xs text-[#757575]">계정명</span>
              </div>
              <div className="flex-1 h-8 flex items-center justify-center px-2 border-r border-[#D9D9D9]">
                <span className="text-xs text-[#757575]">기말잔액</span>
              </div>
              <div className="flex-1 h-8 flex items-center justify-center px-2 border-r border-[#D9D9D9]">
                <span className="text-xs text-[#757575]">추가설정액</span>
              </div>
              <div className="flex-1 h-8 flex items-center justify-center px-2 border-r border-[#D9D9D9]">
                <span className="text-xs text-[#757575]">실제 잔액</span>
              </div>
              <div className="flex-1 h-8 flex items-center justify-center px-2">
                <span className="text-xs text-[#757575]">적요</span>
              </div>
            </div>

            {/* 테이블 바디 */}
            {editableData.length > 0 ? (
              editableData.map((item, index) => (
                <div key={index} className="flex border-b border-[#D9D9D9] last:border-b-0">
                  <div className="w-[100px] min-w-[100px] h-8 flex items-center px-2 bg-white border-r border-[#D9D9D9]">
                    <span className="text-xs text-[#757575]">{item.accountCode}</span>
                  </div>
                  <div className="flex-1 h-8 flex items-center px-2 bg-white border-r border-[#D9D9D9]">
                    <span className="text-xs text-[#757575]">{item.accountName}</span>
                  </div>
                  <div className="flex-1 h-8 flex items-center px-2 bg-white border-r border-[#D9D9D9]">
                    <input 
                      type="text" 
                      className="w-full text-xs text-[#757575] bg-transparent border-none outline-none text-right"
                      value={formatNumber(item.endingBalance)}
                      onChange={(e) => handleFieldChange(index, 'endingBalance', e.target.value)}
                      onBlur={(e) => {
                        const numValue = handleNumberInput(e.target.value);
                        handleFieldChange(index, 'endingBalance', numValue);
                      }}
                    />
                    <span className="text-xs text-[#757575] ml-1">원</span>
                  </div>
                  <div className="flex-1 h-8 flex items-center px-2 bg-white border-r border-[#D9D9D9]">
                    <input 
                      type="text" 
                      className="w-full text-xs text-[#757575] bg-transparent border-none outline-none text-right"
                      value={formatNumber(item.addAmount)}
                      onChange={(e) => handleFieldChange(index, 'addAmount', e.target.value)}
                      onBlur={(e) => {
                        const numValue = handleNumberInput(e.target.value);
                        handleFieldChange(index, 'addAmount', numValue);
                      }}
                    />
                    <span className="text-xs text-[#757575] ml-1">원</span>
                  </div>
                  <div className="flex-1 h-8 flex items-center px-2 bg-white border-r border-[#D9D9D9]">
                    <input 
                      type="text" 
                      className="w-full text-xs text-[#757575] bg-transparent border-none outline-none text-right"
                      value={formatNumber(calculateActualBalance(item.endingBalance, item.addAmount))}
                      readOnly
                    />
                    <span className="text-xs text-[#757575] ml-1">원</span>
                  </div>
                  <div className="flex-1 h-8 flex items-center px-2 bg-white">
                    <input 
                      type="text" 
                      className="w-full text-xs text-[#757575] bg-transparent border-none outline-none"
                      value={item.memo}
                      onChange={(e) => handleFieldChange(index, 'memo', e.target.value)}
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="flex items-center justify-center h-32">
                <div className="text-xs text-[#757575]">기간귀속 데이터가 없습니다.</div>
              </div>
            )}

            {/* 합계 행 */}
            <div className="flex h-8 bg-[#F5F5F5] border-t border-[#D9D9D9]">
              <div className="w-[100px] min-w-[100px] h-8 flex items-center justify-center px-2 border-r border-[#D9D9D9]">
                <span className="text-xs font-medium text-[#757575]">합계</span>
              </div>
              <div className="flex-1 h-8 flex items-center justify-center px-2 border-r border-[#D9D9D9]">
                <span className="text-xs text-[#757575]"></span>
              </div>
              <div className="flex-1 h-8 flex items-center px-2 border-r border-[#D9D9D9]">
                <span className="text-xs font-medium text-[#757575] flex-1 text-right">
                  {editableData.reduce((sum, item) => sum + item.endingBalance, 0).toLocaleString()}
                </span>
                <span className="text-xs text-[#757575] ml-1">원</span>
              </div>
              <div className="flex-1 h-8 flex items-center px-2 border-r border-[#D9D9D9]">
                <span className="text-xs font-medium text-[#757575] flex-1 text-right">
                  {editableData.reduce((sum, item) => sum + item.addAmount, 0).toLocaleString()}
                </span>
                <span className="text-xs text-[#757575] ml-1">원</span>
              </div>
              <div className="flex-1 h-8 flex items-center px-2 border-r border-[#D9D9D9]">
                <span className="text-xs font-medium text-[#757575] flex-1 text-right">
                  {editableData.reduce((sum, item) => sum + calculateActualBalance(item.endingBalance, item.addAmount), 0).toLocaleString()}
                </span>
                <span className="text-xs text-[#757575] ml-1">원</span>
              </div>
              <div className="flex-1 h-8 flex items-center px-2">
                <span className="text-xs text-[#757575]"></span>
              </div>
            </div>
          </div>
          )}


          {/* 전표 테이블 - voucherData가 있을 때만 표시 */}
          {voucherData && (
            <div className="mt-19 border-t border-[#D9D9D9] w-full pt-4">
              <div className="mb-4 flex justify-between items-center">
                <div>
                  <h3 className="text-[15px] leading-[140%] text-[#1E1E1E] font-semibold font-['Pretendard']">전표 점검</h3>
                  <p className="text-xs leading-[140%] text-[#767676] font-['Pretendard']">생성된 전표를 확인하고 저장해주세요.</p>
                </div>
                <button 
                  onClick={handleSaveVoucher}
                  className="flex flex-row justify-center items-center py-2 px-3 gap-2 h-7 bg-[#2C2C2C] cursor-pointer"
                >
                  <span className="text-xs leading-[100%] text-[#F5F5F5] font-medium font-['Pretendard']">저장하기</span>
                </button>
              </div>

              {/* 전표 테이블 */}
              <div className="border border-[#D9D9D9]">
                  <div className="flex bg-[#F5F5F5]">
                      <div className="w-[100px] min-w-[100px] h-16 flex items-center justify-center px-2 border-r border-[#D9D9D9]">
                        <span className="text-xs text-[#757575]">일자</span>
                      </div>
                    <div className="flex-1 h-16 flex flex-col border-r border-[#D9D9D9]">
                      <div className="h-8 flex items-center justify-center border-b border-[#D9D9D9]">
                        <span className="text-xs text-[#757575]">차변</span>
                      </div>
                      <div className="flex h-8">
                        <div className="flex-1 flex items-center justify-center border-r border-[#D9D9D9]">
                          <span className="text-xs text-[#757575]">계정과목</span>
                        </div>
                        <div className="flex-1 flex items-center justify-center border-r border-[#D9D9D9]">
                          <span className="text-xs text-[#757575]">금액</span>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                          <span className="text-xs text-[#757575]">적요</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 h-16 flex flex-col">
                      <div className="h-8 flex items-center justify-center border-b border-[#D9D9D9]">
                        <span className="text-xs text-[#757575]">대변</span>
                      </div>
                      <div className="flex h-8">
                        <div className="flex-1 flex items-center justify-center border-r border-[#D9D9D9]">
                          <span className="text-xs text-[#757575]">계정과목</span>
                        </div>
                        <div className="flex-1 flex items-center justify-center border-r border-[#D9D9D9]">
                          <span className="text-xs text-[#757575]">금액</span>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                          <span className="text-xs text-[#757575]">적요</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 h-16 flex items-center justify-center px-2 border-l border-[#D9D9D9]">
                      <span className="text-xs text-[#757575]">적요</span>
                    </div>
                  </div>

                  {/* 전표 테이블 바디 */}
                  {editableJournalEntries.length > 0 ? (
                    <>
                  {editableJournalEntries.map((entry, index) => (
                    <div key={entry.id} className="flex border-b border-[#D9D9D9] last:border-b-0">
                      <div className="w-[100px] min-w-[100px] h-8 flex items-center justify-center px-2 bg-white border-r border-[#D9D9D9]">
                        <span className="text-xs text-[#757575]">{formatDate(entry.date)}</span>
                      </div>
                      <div className="flex-1 h-8 flex border-r border-[#D9D9D9]">
                        <div className="flex-1 flex items-center px-2 bg-white border-r border-[#D9D9D9]">
                          <input
                            type="text"
                            className="w-full text-xs text-[#757575] bg-transparent border-none outline-none"
                            value={entry.debit.accountName}
                            onChange={(e) => handleJournalFieldChange(index, 'debit', 'accountName', e.target.value)}
                          />
                        </div>
                        <div className="flex-1 flex items-center px-2 bg-white border-r border-[#D9D9D9]">
                          <input
                            type="text"
                            className="w-full text-xs text-[#757575] bg-transparent border-none outline-none text-right"
                            value={formatNumber(entry.debit.amount)}
                            onChange={(e) => handleJournalFieldChange(index, 'debit', 'amount', e.target.value)}
                            onBlur={(e) => {
                              const numValue = handleNumberInput(e.target.value);
                              handleJournalFieldChange(index, 'debit', 'amount', numValue);
                            }}
                          />
                          <span className="text-xs text-[#757575] ml-1">원</span>
                        </div>
                        <div className="flex-1 flex items-center px-2 bg-white">
                          <input
                            type="text"
                            className="w-full text-xs text-[#757575] bg-transparent border-none outline-none"
                            value={entry.debit.memo}
                            onChange={(e) => handleJournalFieldChange(index, 'debit', 'memo', e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="flex-1 h-8 flex">
                        <div className="flex-1 flex items-center px-2 bg-white border-r border-[#D9D9D9]">
                          <input
                            type="text"
                            className="w-full text-xs text-[#757575] bg-transparent border-none outline-none"
                            value={entry.credit.accountName}
                            onChange={(e) => handleJournalFieldChange(index, 'credit', 'accountName', e.target.value)}
                          />
                        </div>
                        <div className="flex-1 flex items-center px-2 bg-white border-r border-[#D9D9D9]">
                          <input
                            type="text"
                            className="w-full text-xs text-[#757575] bg-transparent border-none outline-none text-right"
                            value={formatNumber(entry.credit.amount)}
                            onChange={(e) => handleJournalFieldChange(index, 'credit', 'amount', e.target.value)}
                            onBlur={(e) => {
                              const numValue = handleNumberInput(e.target.value);
                              handleJournalFieldChange(index, 'credit', 'amount', numValue);
                            }}
                          />
                          <span className="text-xs text-[#757575] ml-1">원</span>
                        </div>
                        <div className="flex-1 flex items-center px-2 bg-white">
                          <input
                            type="text"
                            className="w-full text-xs text-[#757575] bg-transparent border-none outline-none"
                            value={entry.credit.memo}
                            onChange={(e) => handleJournalFieldChange(index, 'credit', 'memo', e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="flex-1 h-8 flex items-center px-2 bg-white border-l border-[#D9D9D9]">
                        <input
                          type="text"
                          className="w-full text-xs text-[#757575] bg-transparent border-none outline-none"
                          value={entry.description}
                          onChange={(e) => handleJournalDescriptionChange(index, e.target.value)}
                        />
                      </div>
                    </div>
                  ))}

                  {/* 합계 행 */}
                  <div className="flex">
                    <div className="w-[100px] min-w-[100px] h-8 flex items-center justify-center px-2 bg-[#F5F5F5] border-r border-[#D9D9D9]">
                      <span className="text-xs font-medium text-[#757575]">합계</span>
                    </div>
                    <div className="flex-1 h-8 flex border-r border-[#D9D9D9]">
                      <div className="flex-1 flex items-center px-2 bg-[#F5F5F5] border-r border-[#D9D9D9]">
                        <span className="text-xs text-[#757575]"></span>
                      </div>
                      <div className="flex-1 flex items-center px-2 bg-[#F5F5F5] border-r border-[#D9D9D9]">
                        <span className="text-xs font-medium text-[#757575] flex-1 text-right">
                          {editableJournalEntries.reduce((sum, entry) => sum + entry.debit.amount, 0).toLocaleString()}
                        </span>
                        <span className="text-xs text-[#757575] ml-1">원</span>
                      </div>
                      <div className="flex-1 flex items-center px-2 bg-[#F5F5F5]">
                        <span className="text-xs text-[#757575]"></span>
                      </div>
                    </div>
                    <div className="flex-1 h-8 flex">
                      <div className="flex-1 flex items-center px-2 bg-[#F5F5F5] border-r border-[#D9D9D9]">
                        <span className="text-xs text-[#757575]"></span>
                      </div>
                      <div className="flex-1 flex items-center px-2 bg-[#F5F5F5] border-r border-[#D9D9D9]">
                        <span className="text-xs font-medium text-[#757575] flex-1 text-right">
                          {editableJournalEntries.reduce((sum, entry) => sum + entry.credit.amount, 0).toLocaleString()}
                        </span>
                        <span className="text-xs text-[#757575] ml-1">원</span>
                      </div>
                      <div className="flex-1 flex items-center px-2 bg-[#F5F5F5]">
                        <span className="text-xs text-[#757575]"></span>
                      </div>
                    </div>
                    <div className="flex-1 h-8 flex items-center px-2 bg-[#F5F5F5] border-l border-[#D9D9D9]">
                      <span className="text-xs text-[#757575]"></span>
                    </div>
                  </div>
                    </>
                  ) : (
                    <div className="flex h-32 items-center justify-center border-b border-[#D9D9D9]">
                      <span className="text-xs text-[#757575]">결산반영을 실행하면 전표가 생성됩니다.</span>
                    </div>
                  )}
              </div>
            </div>
          )}
        </div>
      </div>
      <ToastMessage
        message={toastMessage} 
        isVisible={showToast} 
        onHide={() => setShowToast(false)}
      />
    </div>
  );
};

export default PeriodAccrualModal;
