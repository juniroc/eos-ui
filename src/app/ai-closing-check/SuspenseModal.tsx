'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { saveClosingCheck } from '@/services/ai-closing-check';
import Image from 'next/image';
import ToastMessage from '@/components/ToastMessage';
import PrintButton from '@/components/PrintButton';

// 타입 정의
interface SuspenseTransaction {
  id: string;
  accountId: string;
  accountCode: string;
  accountName: string;
  debitCredit: boolean;
  amount: number;
  partnerId?: string;
  partnerName?: string;
  note?: string;
}

interface SuspenseVoucher {
  voucherId: string;
  date: string;
  description: string;
  transactions: SuspenseTransaction[];
}

interface SuspenseData {
  key: string;
  status: string;
  vouchers: SuspenseVoucher[];
  period: {
    start: string;
    end: string;
  };
}

interface EditableSuspenseTransaction extends SuspenseTransaction {
  isEditing?: boolean;
  voucherId?: string;
  voucherDate?: string;
}

interface SuspenseModalProps {
  isOpen: boolean;
  onClose: () => void;
  closingDate: string;
  onStatusUpdate: (status: 'DONE') => void;
}

const SuspenseModal: React.FC<SuspenseModalProps> = ({
  isOpen,
  onClose,
  closingDate,
  onStatusUpdate,
}) => {
  // 내부 상태로 트랜잭션 데이터 관리
  const [transactions, setTransactions] = useState<EditableSuspenseTransaction[]>([]);
  const [data, setData] = useState<SuspenseData | null>(null);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  /** 날짜를 YYYY-MM-DD 형식으로 포맷 */
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  /** 가수가지급금 점검 API 호출 */
  const callSuspenseAPI = async (date: string): Promise<SuspenseData> => {
    const accessToken = localStorage.getItem('accessToken');
    
    if (!accessToken) {
      throw new Error('로그인이 필요합니다.');
    }

    const requestBody = {
      closingDate: date,
      key: 'suspense_clear'
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
        throw new Error(`가수가지급금 점검에 실패했습니다. (${response.status})`);
      }
    }

    const data: SuspenseData = await response.json();
    return data;
  };

  /** 가수가지급금 점검 */
  const handleSuspenseCheck = useCallback(async () => {
    try {
      setLoading(true);
      const data = await callSuspenseAPI(closingDate);
      setData(data);
      
      // 편집 가능한 형태로 변환
      const allTransactions: EditableSuspenseTransaction[] = [];
      data.vouchers.forEach(voucher => {
        voucher.transactions.forEach(transaction => {
          allTransactions.push({
            ...transaction,
            isEditing: false,
            voucherId: voucher.voucherId,
            voucherDate: voucher.date
          });
        });
      });
      setTransactions(allTransactions);
      
    } catch (error) {
      console.error('가수가지급금 점검 API 호출 오류:', error);
      alert(error instanceof Error ? error.message : '가수가지급금 점검 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  }, [closingDate]);

  // 팝업이 열릴 때 가수가지급금 점검 API 호출
  useEffect(() => {
    if (isOpen && closingDate) {
      handleSuspenseCheck();
    }
  }, [isOpen, closingDate, handleSuspenseCheck]);

  // 트랜잭션 값 변경 핸들러
  const handleTransactionChange = (id: string, field: keyof EditableSuspenseTransaction, value: string | number | boolean) => {
    setTransactions(prev => 
      prev.map(transaction => 
        transaction.id === id 
          ? { ...transaction, [field]: value }
          : transaction
      )
    );
  };

  // 편집된 트랜잭션에서 값을 가져오는 헬퍼 함수
  const getTransactionValue = (transactionId: string, field: keyof EditableSuspenseTransaction) => {
    const transaction = transactions.find(t => t.id === transactionId);
    return transaction ? transaction[field] : '';
  };

  // 저장 핸들러
  const handleSave = async () => {
    try {
      setLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      if (!data || transactions.length === 0) {
        alert('저장할 전표 데이터가 없습니다.');
        return;
      }

      // accountId 유효성 검사
      const hasInvalidAccount = transactions.some(
        transaction => !transaction.accountId
      );
      
      if (hasInvalidAccount) {
        alert('계정과목이 설정되지 않은 거래가 있습니다. 모든 거래에 계정과목을 지정해주세요.');
        return;
      }

      // 첫 번째 voucher의 정보를 사용
      const firstVoucher = data.vouchers[0];
      
      // API 요청 데이터 구조로 변환
      const requestData = {
        closingDate,
        key: 'suspense_clear' as const,
        voucher: {
          date: firstVoucher.date,
          description: firstVoucher.description,
        },
        transactions: transactions.map(transaction => ({
          accountId: transaction.accountId,
          amount: transaction.amount,
          debitCredit: transaction.debitCredit,
          partnerId: transaction.partnerId,
          note: transaction.note,
        })),
      };

      await saveClosingCheck(accessToken, requestData);
      
      setToastMessage('가수가지급금의 전표 저장이 완료되었습니다.');
      setShowToast(true);
      
      // 상태 업데이트
      onStatusUpdate('DONE');
      
    } catch (error) {
      console.error('가수가지급금 전표 저장 오류:', error);
      alert(error instanceof Error ? error.message : '가수가지급금 전표 저장 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-50 p-5">
      <div id="suspense-modal" className="relative w-full h-full bg-white flex flex-col pb-5">
        {/* 상단 헤더 */}
        <div className="flex flex-row justify-between items-center p-2 h-[41px]">
          {/* Breadcrumb */}
          <div className="flex flex-row items-center gap-0.5 flex-1 h-[17px]">
            <div className="flex flex-row items-start">
              <span className="text-xs leading-[140%] text-[#B3B3B3] font-['Pretendard']">AI분개</span>
            </div>
            <div className="w-4 h-4 flex items-center justify-center">
              <Image src="/icons/arrow_right.svg" alt="arrow_right" width="16" height="16"/>
            </div>
            <div className="flex flex-row items-start">
              <span className="text-xs leading-[140%] text-[#B3B3B3] font-['Pretendard']">AI결산점검</span>
            </div>
            <div className="w-4 h-4 flex items-center justify-center">
              <Image src="/icons/arrow_right.svg" alt="arrow_right" width="16" height="16"/>
            </div>
            <div className="flex flex-row items-start">
              <span className="text-xs leading-[140%] text-[#1E1E1E] font-semibold font-['Pretendard']">가수가지급금</span>
            </div>
          </div>
          
          {/* X 버튼 */}
          <button
            className="w-4 h-4 flex items-center justify-center cursor-pointer"
            onClick={onClose}
          >
          <Image src="/icons/close.svg" alt="close" width={16} height={16} />
          </button>
        </div>

        {/* 콘텐츠 영역 */}
        <div className="flex flex-col items-start p-4 gap-4 flex-1 overflow-y-auto">
          {/* 제목 섹션 */}
          <div className="flex flex-col items-start gap-4 w-full min-w-[520px] h-[46px]">
            <div className="flex flex-row justify-between items-end gap-4 w-full h-[46px]">
              <div className="flex flex-col items-start">
                <div className="flex flex-col items-start p-1.5 px-0 pt-1.5 pb-0.5 w-64 h-[29px] rounded-lg">
                  <div className="flex flex-row items-start">
                    <span className="text-[15px] leading-[140%] text-[#1E1E1E] font-semibold font-['Pretendard']">가수가지급금</span>
                  </div>
                </div>
                <span className="text-xs leading-[140%] text-[#767676] font-['Pretendard']">
                  필요한 내용을 입력하고 정보를 저장하세요.
                </span>
              </div>
              
              {/* 버튼 그룹 */}
              <div className="flex flex-row justify-end items-center gap-2 h-7">
                <div className="flex flex-row items-start h-7">
                  <PrintButton
                    variant="neutral"
                    size="small"
                    printType="modal"
                    targetSelector="#suspense-modal"
                  >
                    인쇄하기
                  </PrintButton>
                </div>
                <div className="flex flex-row items-start h-7">
                  <button
                    className="flex flex-row justify-center items-center py-2 px-3 gap-2 h-7 bg-[#2C2C2C] cursor-pointer"
                    onClick={handleSave}
                  >
                    <span className="text-xs leading-[100%] text-[#F5F5F5] font-medium font-['Pretendard']">저장하기</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 가수가지급금 테이블 섹션 */}
          <div className="flex flex-col items-start w-full">
            {loading ? (
              <div className="flex items-center justify-center w-full h-full">
                <div className="text-[#757575]">가수가지급금 데이터를 불러오는 중...</div>
              </div>
            ) : data && transactions.length > 0 ? (
              <>
                {/* 가수가지급금 테이블 */}
                <div className="w-full">
                  <table className="w-full border-collapse border border-[#D9D9D9] text-xs text-[#757575]">
                    <thead>
                      <tr>
                        <th rowSpan={2} className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium w-[100px] min-w-[100px]">일자</th>
                        <th colSpan={3} className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium w-1/3">차변</th>
                        <th colSpan={3} className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium w-1/3">대변</th>
                        <th rowSpan={2} className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium w-1/3">적요</th>
                      </tr>
                      <tr>
                        <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium">계정과목</th>
                        <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium">금액</th>
                        <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium">거래처</th>
                        <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium">계정과목</th>
                        <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium">금액</th>
                        <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium">거래처</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                          <td className="p-2 border border-[#D9D9D9] text-center">{transaction.voucherDate ? formatDate(transaction.voucherDate) : ''}</td>
                          {/* 차변 섹션 */}
                          {transaction.debitCredit ? (
                            <>
                              <td className="p-2 border border-[#D9D9D9] text-center">
                                <input
                                  type="text"
                                  className="w-full px-2 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                  value={`${getTransactionValue(transaction.id, 'accountName')}`}
                                  onChange={(e) => {
                                    const [code, ...nameParts] = e.target.value.split(' ');
                                    handleTransactionChange(transaction.id, 'accountCode', code || '');
                                    handleTransactionChange(transaction.id, 'accountName', nameParts.join(' ') || '');
                                  }}
                                />
                              </td>
                              <td className="p-2 border border-[#D9D9D9] text-center">
                                <input
                                  type="text"
                                  className="w-full px-2 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                  value={(getTransactionValue(transaction.id, 'amount') as number || 0).toLocaleString()}
                                  onChange={(e) => {
                                    const numericValue = parseInt(e.target.value.replace(/,/g, '')) || 0;
                                    handleTransactionChange(transaction.id, 'amount', numericValue);
                                  }}
                                />
                              </td>
                              <td className="p-2 border border-[#D9D9D9] text-center">
                                <input
                                  type="text"
                                  className="w-full px-2 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                  value={getTransactionValue(transaction.id, 'partnerName') as string || ''}
                                  onChange={(e) => handleTransactionChange(transaction.id, 'partnerName', e.target.value)}
                                />
                              </td>
                              <td className="p-2 border border-[#D9D9D9] text-center text-[#B3B3B3]">-</td>
                              <td className="p-2 border border-[#D9D9D9] text-center text-[#B3B3B3]">-</td>
                              <td className="p-2 border border-[#D9D9D9] text-center text-[#B3B3B3]">-</td>
                            </>
                          ) : (
                            <>
                              <td className="p-2 border border-[#D9D9D9] text-center text-[#B3B3B3]">-</td>
                              <td className="p-2 border border-[#D9D9D9] text-center text-[#B3B3B3]">-</td>
                              <td className="p-2 border border-[#D9D9D9] text-center text-[#B3B3B3]">-</td>
                              <td className="p-2 border border-[#D9D9D9] text-center">
                                <input
                                  type="text"
                                  className="w-full px-2 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                  value={`${getTransactionValue(transaction.id, 'accountName')}`}
                                  onChange={(e) => {
                                    const [code, ...nameParts] = e.target.value.split(' ');
                                    handleTransactionChange(transaction.id, 'accountCode', code || '');
                                    handleTransactionChange(transaction.id, 'accountName', nameParts.join(' ') || '');
                                  }}
                                />
                              </td>
                              <td className="p-2 border border-[#D9D9D9] text-center">
                                <input
                                  type="text"
                                  className="w-full px-2 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                  value={(getTransactionValue(transaction.id, 'amount') as number || 0).toLocaleString()}
                                  onChange={(e) => {
                                    const numericValue = parseInt(e.target.value.replace(/,/g, '')) || 0;
                                    handleTransactionChange(transaction.id, 'amount', numericValue);
                                  }}
                                />
                              </td>
                              <td className="p-2 border border-[#D9D9D9] text-center">
                                <input
                                  type="text"
                                  className="w-full px-2 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                  value={getTransactionValue(transaction.id, 'partnerName') as string || ''}
                                  onChange={(e) => handleTransactionChange(transaction.id, 'partnerName', e.target.value)}
                                />
                              </td>
                            </>
                          )}
                          <td className="p-2 border border-[#D9D9D9] text-center">
                            <input
                              type="text"
                              className="w-full px-2 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                              value={getTransactionValue(transaction.id, 'note') as string || ''}
                              onChange={(e) => handleTransactionChange(transaction.id, 'note', e.target.value)}
                            />
                          </td>
                        </tr>
                      ))}
                      {/* 소계 행 */}
                      <tr className="bg-[#F5F5F5]">
                        <td className="p-2 border border-[#D9D9D9] text-center font-medium">소계</td>
                        <td className="p-2 border border-[#D9D9D9] text-center font-medium text-[#B3B3B3]">-</td>
                        <td className="p-2 border border-[#D9D9D9] text-center font-medium">
                          {transactions
                            .filter(t => t.debitCredit)
                            .reduce((sum, t) => sum + t.amount, 0)
                            .toLocaleString()}
                        </td>
                        <td className="p-2 border border-[#D9D9D9] text-center font-medium text-[#B3B3B3]">-</td>
                        <td className="p-2 border border-[#D9D9D9] text-center font-medium text-[#B3B3B3]">-</td>
                        <td className="p-2 border border-[#D9D9D9] text-center font-medium">
                          {transactions
                            .filter(t => !t.debitCredit)
                            .reduce((sum, t) => sum + t.amount, 0)
                            .toLocaleString()}
                        </td>
                        <td className="p-2 border border-[#D9D9D9] text-center font-medium text-[#B3B3B3]">-</td>
                        <td className="p-2 border border-[#D9D9D9] text-center font-medium text-[#B3B3B3]">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center w-full h-full">
                <div className="text-[#757575]">가수가지급금 데이터가 없습니다.</div>
              </div>
            )}
          </div>
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

export default SuspenseModal;
