'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ToastMessage from '@/components/ToastMessage';
import PrintButton from '@/components/PrintButton';

// 퇴직급여충당금 관련 타입
interface RetirementBenefitItem {
  label: string;
  paidTotal: number;
  ratioText: string;
  provisionAmount: number;
  note: string;
  debitAccountCode: string;
}

interface RetirementBenefitResponse {
  key: string;
  status: string;
  rows: RetirementBenefitItem[];
  meta: {
    period: {
      start: string;
      end: string;
    };
    allowanceBalance: {
      prior: number;
      current: number;
    };
    codes: {
      EXEC_SALARY_PAN: string;
      STAFF_SALARY_PAN: string;
      SALARY_PRODUCT: string;
      SALARY_SERVICE: string;
      RETIRE_EXP_PAN: string;
      RETIRE_EXP_PRODUCT: string;
      RETIRE_EXP_SERVICE: string;
      RETIRE_ALLOW_LIAB: string;
    };
  };
}

interface EditableRetirementBenefitItem extends RetirementBenefitItem {
  id: string;
  isEditing?: boolean;
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

// API에서 요구하는 RetirementBenefitRow 타입
interface RetirementBenefitRow {
  provisionAmount: number;
  debitAccountCode: string;
  note?: string;
}

interface RetirementBenefitModalProps {
  isOpen: boolean;
  onClose: () => void;
  closingDate: string;
  onStatusUpdate: (status: 'DONE') => void;
}

export default function RetirementBenefitModal({
  isOpen,
  onClose,
  closingDate,
  onStatusUpdate
}: RetirementBenefitModalProps) {
  const [retirementBenefitData, setRetirementBenefitData] = useState<RetirementBenefitResponse | null>(null);
  const [retirementBenefitVoucherData, setRetirementBenefitVoucherData] = useState<VoucherResponse | null>(null);
  const [retirementBenefitLoading, setRetirementBenefitLoading] = useState(false);
  const [editableRetirementBenefitItems, setEditableRetirementBenefitItems] = useState<EditableRetirementBenefitItem[]>([]);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  // 팝업이 열릴 때 API 호출
  useEffect(() => {
    if (isOpen) {
      handleRetirementBenefitCheck();
    }
  }, [isOpen, closingDate]);

  /** 퇴직급여충당금 점검 */
  const handleRetirementBenefitCheck = async () => {
    try {
      setRetirementBenefitLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      // 퇴직급여충당금 점검 API 호출
      const requestBody = {
        closingDate: closingDate,
        key: 'retirement_benefit'
      };
      
      console.log('퇴직급여충당금 점검 API 요청:', {
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
          alert(`퇴직급여충당금 점검에 실패했습니다. (${response.status})`);
        }
        return;
      }

      const data: RetirementBenefitResponse = await response.json();
      setRetirementBenefitData(data);
      
      // 편집 가능한 형태로 변환
      const editableItems: EditableRetirementBenefitItem[] = data.rows.map((item, index) => ({
        ...item,
        id: `${item.label}-${index}`,
        isEditing: false
      }));
      setEditableRetirementBenefitItems(editableItems);
    } catch (error) {
      console.error('퇴직급여충당금 점검 API 호출 오류:', error);
      alert('퇴직급여충당금 점검 중 네트워크 오류가 발생했습니다.');
    } finally {
      setRetirementBenefitLoading(false);
    }
  };

  /** 퇴직급여충당금 결산 반영 */
  const handleRetirementBenefitApply = async () => {
    try {
      setRetirementBenefitLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      // API에서 요구하는 형태로 데이터 변환
      const rows: RetirementBenefitRow[] = editableRetirementBenefitItems.map(item => ({
        provisionAmount: item.provisionAmount,
        debitAccountCode: item.debitAccountCode,
        note: item.note
      }));

      const response = await fetch('https://api.eosxai.com/api/closing-check/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          closingDate: closingDate,
          key: 'retirement_benefit',
          description: '퇴직급여충당금 결산 반영',
          rows: rows
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API 에러 응답:', errorData);
        
        if (response.status === 500) {
          alert('퇴직급여충당금 결산반영 중 서버 오류가 발생했습니다.');
        } else {
          alert(`퇴직급여충당금 결산 반영에 실패했습니다. (${response.status})`);
        }
        return;
      }

      const data: VoucherResponse = await response.json();
      setRetirementBenefitVoucherData(data);

      setToastMessage('퇴직급여충당금의 결산반영이 완료되었습니다.');
      setShowToast(true);
      
    } catch (error) {
      console.error('퇴직급여충당금 결산 반영 API 호출 오류:', error);
      alert('퇴직급여충당금 결산 반영 중 네트워크 오류가 발생했습니다.');
    } finally {
      setRetirementBenefitLoading(false);
    }
  };

  /** 퇴직급여충당금 전표 저장 */
  const handleRetirementBenefitSave = async () => {
    // TODO: 저장 기능 구현
    
    setToastMessage('퇴직급여충당금의 전표 저장이 완료되었습니다.');
    setShowToast(true);

    // 상태 업데이트
    onStatusUpdate('DONE');
  };

  /** 퇴직급여충당금 아이템 변경 핸들러 */
  const handleRetirementBenefitItemChange = (id: string, field: keyof EditableRetirementBenefitItem, value: string | number | boolean) => {
    setEditableRetirementBenefitItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-50 p-5">
      <div id="retirement-benefit-modal" className="relative w-full h-full bg-white flex flex-col pb-5">
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
              <span className="text-xs leading-[140%] text-[#1E1E1E] font-semibold font-['Pretendard']">퇴직급여충당금</span>
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
                    <span className="text-[15px] leading-[140%] text-[#1E1E1E] font-semibold font-['Pretendard']">퇴직급여충당금</span>
                  </div>
                </div>
                <span className="text-xs leading-[140%] text-[#767676] font-['Pretendard']">
                  AI가 수행한 퇴직급여충당금 작업을 확인해 주세요. 수정사항이 있으면 수정 후 결산반영을 누르면 됩니다.
                </span>
              </div>
              
              {/* 버튼 그룹 */}
              <div className="flex flex-row justify-end items-center gap-2 h-7">
                <div className="flex flex-row items-start h-7">
                  <PrintButton
                    variant="neutral"
                    size="small"
                    printType="modal"
                    targetSelector="#retirement-benefit-modal"
                  >
                    인쇄하기
                  </PrintButton>
                </div>
                <div className="flex flex-row items-start w-[69px] h-7">
                  <button
                    className="flex flex-row justify-center items-center py-2 px-3 gap-2 w-[69px] h-7 bg-[#2C2C2C] cursor-pointer"
                    onClick={handleRetirementBenefitApply}
                    disabled={retirementBenefitLoading}
                  >
                    <span className="text-xs leading-[100%] text-[#F5F5F5] font-medium font-['Pretendard']">
                      {retirementBenefitLoading ? '처리중...' : '결산 반영'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* 퇴직급여충당금 테이블 섹션 */}
          <div className="flex flex-col items-start w-full ">
            {retirementBenefitLoading ? (
              <div className="flex items-center justify-center w-full h-full">
                <div className="text-[#757575]">퇴직급여충당금 데이터를 불러오는 중...</div>
              </div>
            ) : retirementBenefitData ? (
              <>
                {/* 퇴직급여충당금 테이블 */}
                <div className="w-full">
                  <table className="w-full border-collapse border border-[#D9D9D9] text-xs text-[#757575]">
                    <thead>
                      <tr>
                        <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium">구분</th>
                        <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium">지급총액</th>
                        <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium">비율</th>
                        <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium">충당금</th>
                        <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium">적요</th>
                        <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium">차변계정</th>
                      </tr>
                    </thead>
                    <tbody>
                      {editableRetirementBenefitItems.length > 0 ? (
                        editableRetirementBenefitItems.map((item) => (
                          <tr key={item.id}>
                            <td className="p-2 border border-[#D9D9D9] text-center">{item.label}</td>
                            <td className="p-2 border border-[#D9D9D9] text-center">
                              <input 
                                type="text" 
                                className="w-full px-2 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                value={item.paidTotal.toLocaleString()}
                                onChange={(e) => handleRetirementBenefitItemChange(item.id, 'paidTotal', parseFloat(e.target.value.replace(/,/g, '')) || 0)}
                              />
                            </td>
                            <td className="p-2 border border-[#D9D9D9] text-center">{item.ratioText}</td>
                            <td className="p-2 border border-[#D9D9D9] text-center">
                              <input 
                                type="text" 
                                className="w-full px-2 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                value={item.provisionAmount.toLocaleString()}
                                onChange={(e) => handleRetirementBenefitItemChange(item.id, 'provisionAmount', parseFloat(e.target.value.replace(/,/g, '')) || 0)}
                              />
                            </td>
                            <td className="p-2 border border-[#D9D9D9] text-center">
                              <input 
                                type="text" 
                                className="w-full px-2 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                value={item.note}
                                onChange={(e) => handleRetirementBenefitItemChange(item.id, 'note', e.target.value)}
                              />
                            </td>
                            <td className="p-2 border border-[#D9D9D9] text-center">{item.debitAccountCode}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={6} className="p-8 text-center text-gray-500">
                            퇴직급여충당금 데이터가 없습니다. 퇴직급여충당금 점검을 실행해주세요.
                          </td>
                        </tr>
                      )}
                      {/* 합계 행 */}
                      {editableRetirementBenefitItems.length > 0 && (
                        <tr className="bg-[#F5F5F5]">
                          <td className="p-2 border border-[#D9D9D9] text-center font-medium">합계</td>
                          <td className="p-2 border border-[#D9D9D9] text-center font-medium">
                            {editableRetirementBenefitItems.reduce((sum, item) => sum + item.paidTotal, 0).toLocaleString()}
                          </td>
                          <td className="p-2 border border-[#D9D9D9] text-center font-medium">-</td>
                          <td className="p-2 border border-[#D9D9D9] text-center font-medium">
                            {editableRetirementBenefitItems.reduce((sum, item) => sum + item.provisionAmount, 0).toLocaleString()}
                          </td>
                          <td className="p-2 border border-[#D9D9D9] text-center font-medium">-</td>
                          <td className="p-2 border border-[#D9D9D9] text-center font-medium">-</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* 전표 점검 섹션 - retirementBenefitVoucherData가 있을 때만 표시 */}
                {retirementBenefitVoucherData && (
                <div className="w-full pt-4 mt-19 border-t border-[#D9D9D9]">
                  <div className="mb-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-[15px] leading-[140%] text-[#1E1E1E] font-semibold font-['Pretendard']">전표 점검</h3>
                        <p className="text-xs leading-[140%] text-[#767676] font-['Pretendard']">생성된 전표를 확인하고 저장해주세요.</p>
                      </div>
                      <button
                        className="flex flex-row justify-center items-center py-2 px-3 gap-2 h-7 bg-[#2C2C2C] cursor-pointer"
                        onClick={handleRetirementBenefitSave}
                      >
                        <span className="text-xs leading-[100%] text-[#F5F5F5] font-medium font-['Pretendard']">저장하기</span>
                      </button>
                    </div>
                  </div>
                  
                  <table className="w-full border-collapse border border-[#D9D9D9] text-xs text-[#757575]">
                    <thead className="h-16">
                      <tr className="h-8">
                        <th rowSpan={2} className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium h-8 w-[100px] min-w-[100px]">일자</th>
                        <th colSpan={3} className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium h-8 w-1/3">차변</th>
                        <th colSpan={3} className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium h-8 w-1/3">대변</th>
                        <th rowSpan={2} className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium h-8 w-1/3">적요</th>
                      </tr>
                      <tr className="h-8">
                        <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium h-8">계정과목</th>
                        <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium h-8">금액</th>
                        <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium h-8">거래처</th>
                        <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium h-8">계정과목</th>
                        <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium h-8">금액</th>
                        <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium h-8">거래처</th>
                      </tr>
                    </thead>
                    <tbody>
                      {retirementBenefitVoucherData && retirementBenefitVoucherData.transactions?.length > 0 ? (
                        <>
                          {retirementBenefitVoucherData.transactions.map((transaction, index) => (
                            <tr key={index} className="h-8">
                              <td className="p-2 border border-[#D9D9D9] text-center h-8">{closingDate}</td>
                              {transaction.debitCredit === 'DEBIT' ? (
                                <>
                                  <td className="p-2 border border-[#D9D9D9] text-center h-8">{transaction.account?.name || '-'}</td>
                                  <td className="p-2 border border-[#D9D9D9] text-center h-8">{transaction.amount.toLocaleString()}</td>
                                  <td className="p-2 border border-[#D9D9D9] text-center h-8">{transaction.partner?.name || '-'}</td>
                                  <td className="p-2 border border-[#D9D9D9] text-center h-8">-</td>
                                  <td className="p-2 border border-[#D9D9D9] text-center h-8">-</td>
                                  <td className="p-2 border border-[#D9D9D9] text-center h-8">-</td>
                                </>
                              ) : (
                                <>
                                  <td className="p-2 border border-[#D9D9D9] text-center h-8">-</td>
                                  <td className="p-2 border border-[#D9D9D9] text-center h-8">-</td>
                                  <td className="p-2 border border-[#D9D9D9] text-center h-8">-</td>
                                  <td className="p-2 border border-[#D9D9D9] text-center h-8">{transaction.account?.name || '-'}</td>
                                  <td className="p-2 border border-[#D9D9D9] text-center h-8">{transaction.amount.toLocaleString()}</td>
                                  <td className="p-2 border border-[#D9D9D9] text-center h-8">{transaction.partner?.name || '-'}</td>
                                </>
                              )}
                              <td className="p-2 border border-[#D9D9D9] text-center h-8">{transaction.note}</td>
                            </tr>
                          ))}
                          <tr className="h-8">
                            <td className="p-2 border border-[#D9D9D9] text-center h-8 font-medium bg-[#F5F5F5]">소계</td>
                            <td className="p-2 border border-[#D9D9D9] text-center h-8 text-[#B3B3B3]">-</td>
                            <td className="p-2 border border-[#D9D9D9] text-center h-8">
                              {retirementBenefitVoucherData.transactions
                                .filter(t => t.debitCredit === 'DEBIT')
                                .reduce((sum, t) => sum + t.amount, 0)
                                .toLocaleString()}
                            </td>
                            <td className="p-2 border border-[#D9D9D9] text-center h-8 text-[#B3B3B3]">-</td>
                            <td className="p-2 border border-[#D9D9D9] text-center h-8 text-[#B3B3B3]">-</td>
                            <td className="p-2 border border-[#D9D9D9] text-center h-8">
                              {retirementBenefitVoucherData.transactions
                                .filter(t => t.debitCredit === 'CREDIT')
                                .reduce((sum, t) => sum + t.amount, 0)
                                .toLocaleString()}
                            </td>
                            <td className="p-2 border border-[#D9D9D9] text-center h-8 text-[#B3B3B3]">-</td>
                            <td className="p-2 border border-[#D9D9D9] text-center h-8 text-[#B3B3B3]">-</td>
                          </tr>
                        </>
                      ) : (
                        <tr className="h-8">
                          <td colSpan={8} className="p-2 text-center text-gray-500 h-8">
                            전표전검 데이터가 없습니다.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                  
                </div>
                )}
            </>
            ) : (
              <div className="flex items-center justify-center w-full h-full">
                <div className="text-[#757575]">퇴직급여충당금 데이터가 없습니다.</div>
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
}
