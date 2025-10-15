'use client';

import { useState, useEffect, useCallback } from 'react';
import { checkEndingInventory, applyEndingInventory } from '@/services/api';
import { saveClosingCheck } from '@/services/ai-closing-check';
import ToastMessage from '@/components/ToastMessage';
import PrintButton from '@/components/PrintButton';
import Image from 'next/image';

// 기말재고 관련 타입
interface EndingInventoryItem {
  itemName: string;
  priorDate: string;
  priorQty?: number;
  priorAmount: number;
  currentDate: string;
  currentQty?: number;
  currentAmount: number;
  usagePurpose: string;
  usageCount: number;
  cogsAmount: number;
}

interface EndingInventoryResponse {
  key: string;
  status: string;
  rows: EndingInventoryItem[];
  meta: {
    accountCode: number;
    fiscalYear: string;
    fromBasicOpening: boolean;
    totals?: unknown;
  };
}

interface EditableEndingInventoryItem extends EndingInventoryItem {
  id: string;
  isEditing?: boolean;
}

// API에서 요구하는 EndingInventoryRow 타입
interface EndingInventoryRow {
  itemName: string;
  priorDate: string;
  priorQty?: number;
  priorAmount: number;
  currentDate: string;
  currentQty?: number;
  currentAmount: number;
  usagePurpose: string;
  usageCount: number;
  cogsAmount: number;
}

// API 응답 타입 (결산 반영 시 받는 간단한 구조)
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

interface ApplyEndingInventoryResponse {
  voucher: {
    date: string;
    description?: string;
  };
  transactions: ApplyTransaction[];
}

// 기존의 상세한 타입 (필요시 사용 - 현재 미사용)
// interface VoucherTransaction {
//   account: {
//     id: string;
//     code: number;
//     name: string;
//     debitCredit: boolean;
//     attribute: string;
//     category: string;
//     fsName1: string;
//     fsName2: string;
//     summarySourceCodes: string[];
//     createdAt: string;
//     updatedAt: string;
//   };
//   partner: {
//     id: string;
//     name: string;
//     businessNumber: string | null;
//     representative: string | null;
//     address: string | null;
//     phone: string | null;
//     email: string | null;
//     userId: string;
//     type: string;
//     cardIssuer: string | null;
//     cardNumber: string | null;
//     cardType: string | null;
//     primaryUser: string | null;
//     bankName: string | null;
//     accountNumber: string | null;
//     withdrawalFee: number | null;
//     purpose: string | null;
//     note: string | null;
//     mainItems: string | null;
//     relationship: string | null;
//     documentId: string | null;
//     createdAt: string;
//     updatedAt: string;
//   };
//   amount: number;
//   debitCredit: 'DEBIT' | 'CREDIT';
//   note: string;
// }

// interface VoucherResponse {
//   id: string;
//   userId: string;
//   date: string;
//   description: string;
//   departmentId: string | null;
//   documentId: string | null;
//   createdAt: string;
//   updatedAt: string;
//   transactions: VoucherTransaction[];
// }

interface EndingInventoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  closingDate: string;
  onStatusUpdate: (status: 'DONE') => void;
}

export default function EndingInventoryModal({
  isOpen,
  onClose,
  closingDate,
  onStatusUpdate
}: EndingInventoryModalProps) {
  const [endingInventoryData, setEndingInventoryData] = useState<EndingInventoryResponse | null>(null);
  const [endingInventoryVoucherData, setEndingInventoryVoucherData] = useState<ApplyEndingInventoryResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [editableInventoryItems, setEditableInventoryItems] = useState<EditableEndingInventoryItem[]>([]);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  /** 날짜를 YYYY-MM-DD 형식으로 포맷 */
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  /** 기말재고 점검 */
  const handleEndingInventoryCheck = useCallback(async () => {
    try {
      setLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }
      const data: EndingInventoryResponse = await checkEndingInventory(closingDate, accessToken) as EndingInventoryResponse;
      setEndingInventoryData(data);
      
      // 편집 가능한 형태로 변환
      const editableItems: EditableEndingInventoryItem[] = data.rows.map((item, index) => ({
        ...item,
        id: `${item.itemName}-${index}`,
        isEditing: false
      }));
      setEditableInventoryItems(editableItems);
      
    } catch (error) {
      console.error('기말재고 점검 API 호출 오류:', error);
      alert(error instanceof Error ? error.message : '기말재고 점검 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  }, [closingDate]);

  // 팝업이 열릴 때 기말재고 데이터 조회
  useEffect(() => {
    if (isOpen && closingDate) {
      handleEndingInventoryCheck();
    }
  }, [isOpen, closingDate, handleEndingInventoryCheck]);

  /** 기말재고 결산 반영 */
  const handleEndingInventoryApply = async () => {
    try {
      setLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      // API에서 요구하는 형태로 데이터 변환
      const rows: EndingInventoryRow[] = editableInventoryItems.map(item => ({
        itemName: item.itemName,
        priorDate: item.priorDate,
        priorQty: item.priorQty,
        priorAmount: item.priorAmount,
        currentDate: item.currentDate,
        currentQty: item.currentQty,
        currentAmount: item.currentAmount,
        usagePurpose: item.usagePurpose,
        usageCount: item.usageCount,
        cogsAmount: item.cogsAmount
      }));

      const data = await applyEndingInventory({
        closingDate: closingDate,
        rows: rows
      }, accessToken);
      
      // API 응답 구조: { voucher: { date, description }, transactions: [...] }
      setEndingInventoryVoucherData(data as ApplyEndingInventoryResponse);

      setToastMessage('기말재고의 결산반영이 완료되었습니다.');
      setShowToast(true);
      
    } catch (error) {
      console.error('기말재고 결산 반영 API 호출 오류:', error);
      alert(error instanceof Error ? error.message : '기말재고 결산 반영 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  /** 기말재고 전표 저장 */
  const handleEndingInventorySave = async () => {
    try {
      setLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      if (!endingInventoryVoucherData) {
        alert('저장할 전표 데이터가 없습니다.');
        return;
      }

      // accountId 유효성 검사
      const hasInvalidAccount = endingInventoryVoucherData.transactions.some(
        transaction => !transaction.accountId
      );
      
      if (hasInvalidAccount) {
        alert('계정과목이 설정되지 않은 거래가 있습니다. 모든 거래에 계정과목을 지정해주세요.');
        return;
      }

      // API 요청 데이터 구조로 변환
      const requestData = {
        closingDate,
        key: 'ending_inventory' as const,
        voucher: {
          date: endingInventoryVoucherData.voucher.date,
          description: endingInventoryVoucherData.voucher.description,
        },
        transactions: endingInventoryVoucherData.transactions.map(transaction => ({
          accountId: transaction.accountId,
          amount: transaction.amount,
          debitCredit: transaction.debitCredit,
          partnerId: transaction.partnerId,
          note: transaction.note,
        })),
      };

      await saveClosingCheck(accessToken, requestData);
      
      setToastMessage('기말재고의 전표 저장이 완료되었습니다.');
      setShowToast(true);

      // 상태 업데이트 알림
      onStatusUpdate('DONE');
      
    } catch (error) {
      console.error('기말재고 전표 저장 오류:', error);
      alert(error instanceof Error ? error.message : '기말재고 전표 저장 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  /** 기말재고 아이템 변경 핸들러 */
  const handleInventoryItemChange = (id: string, field: keyof EditableEndingInventoryItem, value: string | number | boolean) => {
    setEditableInventoryItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-50 p-5">
      <div id="ending-inventory-modal" className="relative w-full h-full bg-white flex flex-col pb-5">
        {/* 상단 헤더 */}
        <div className="flex flex-row justify-between items-center p-2 h-[41px]">
          {/* Breadcrumb */}
          <div className="flex flex-row items-center gap-0.5 flex-1 h-[17px]">
            <div className="flex flex-row items-start">
              <span className="text-xs leading-[140%] text-[#B3B3B3] font-['Pretendard']">AI분개</span>
            </div>
            <div className="w-4 h-4 flex items-center justify-center">
              <Image src="/icons/arrow_right.svg" alt="arrow_right" width="16" height="16" />
            </div>
            <div className="flex flex-row items-start">
              <span className="text-xs leading-[140%] text-[#B3B3B3] font-['Pretendard']">AI결산점검</span>
            </div>
            <div className="w-4 h-4 flex items-center justify-center">
              <Image src="/icons/arrow_right.svg" alt="arrow_right" width="16" height="16" />
            </div>
            <div className="flex flex-row items-start">
              <span className="text-xs leading-[140%] text-[#1E1E1E] font-semibold font-['Pretendard']">기말재고</span>
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
          {/* 기말재고 테이블 섹션 */}
          <div className="flex flex-col items-start w-full ">
            {loading ? (
              <div className="flex items-center justify-center w-full h-full">
                <div className="text-[#757575]">기말재고 데이터를 불러오는 중...</div>
              </div>
            ) : endingInventoryData ? (
            <>
              {/* 제목 섹션 */}
              <div className="flex flex-col items-start gap-4 w-full min-w-[520px]">
                <div className="flex flex-row justify-between items-end gap-4 w-full">
                  <div className="flex flex-col items-start">
                    <div className="flex flex-col items-start p-1.5 px-0 pt-1.5 pb-0.5 w-64 h-[29px] rounded-lg">
                      <div className="flex flex-row items-start">
                        <span className="text-[15px] leading-[140%] text-[#1E1E1E] font-semibold font-['Pretendard']">기말재고</span>
                      </div>
                    </div>
                    <span className="text-xs leading-[140%] text-[#767676] font-['Pretendard']">
                      최종 실사 확인된 재고자산액과 장부상 재고액을 조정하여 원가를 계산합니다.<br/>
                      제조업과 상품의 품목별 단가, 원가율 등의 관리를 하고자 하는 회사는 원가관리 메뉴를 활용하여 기말재고작업을 진행하세요.
                    </span>
                  </div>
                  
                  {/* 버튼 그룹 */}
                  <div className="flex flex-row justify-end items-center gap-2 h-7">
                    <div className="flex flex-row items-start h-7">
                      <PrintButton
                        variant="neutral"
                        size="small"
                        printType="modal"
                        targetSelector="#ending-inventory-modal"
                      >
                        인쇄하기
                      </PrintButton>
                    </div>
                    <div className="flex flex-row items-start w-[69px] h-7">
                      <button 
                        className="flex flex-row justify-center items-center py-2 px-3 gap-2 w-[69px] h-7 bg-[#2C2C2C] cursor-pointer"
                        onClick={handleEndingInventoryApply}
                        disabled={loading}
                      >
                        <span className="text-xs leading-[100%] text-[#F5F5F5] font-medium font-['Pretendard']">
                          {loading ? '처리중...' : '결산 반영'}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 기말재고 테이블 */}
              <div className="w-full overflow-x-auto my-4">
                <table className="w-full border-collapse border border-[#D9D9D9] text-xs text-[#757575] table-fixed min-w-[800px]">
                  <colgroup>
                    <col className="w-[100px]" />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                  </colgroup>
                  <thead>
                    <tr>
                      <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium">계정과목</th>
                      <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium">기초재고</th>
                      <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium">기중매입</th>
                      <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium">장부상재고액</th>
                      <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium">기말실사액</th>
                      <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium" colSpan={2}>매출외사용</th>
                      <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium">매출원가</th>
                    </tr>
                  </thead>
                  <tbody>
                    {editableInventoryItems.length > 0 ? (
                      <>
                        {editableInventoryItems.map((item) => (
                          <tr key={item.id}>
                            <td className="p-2 border border-[#D9D9D9] text-center">{item.itemName}</td>
                            <td className="p-2 border border-[#D9D9D9] text-center">
                              <input 
                                type="text" 
                                className="w-full px-2 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                value={item.priorAmount.toLocaleString() + '원'}
                                onChange={(e) => handleInventoryItemChange(item.id, 'priorAmount', parseFloat(e.target.value.replace(/,/g, '').replace('원', '')) || 0)}
                              />
                            </td>
                            <td className="p-2 border border-[#D9D9D9] text-center">
                              <input 
                                type="text" 
                                className="w-full px-2 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                value={item.currentAmount.toLocaleString() + '원'}
                                onChange={(e) => handleInventoryItemChange(item.id, 'currentAmount', parseFloat(e.target.value.replace(/,/g, '').replace('원', '')) || 0)}
                              />
                            </td>
                            <td className="p-2 border border-[#D9D9D9] text-center">
                              {(item.priorAmount + item.currentAmount).toLocaleString()}원
                            </td>
                            <td className="p-2 border border-[#D9D9D9] text-center">
                              <input 
                                type="text" 
                                className="w-full px-2 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                value={item.currentAmount.toLocaleString() + '원'}
                                onChange={(e) => handleInventoryItemChange(item.id, 'currentAmount', parseFloat(e.target.value.replace(/,/g, '').replace('원', '')) || 0)}
                              />
                            </td>
                            <td className="p-2 border border-[#D9D9D9] text-center">
                              <input 
                                type="text" 
                                className="w-full text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                value={item.usagePurpose}
                                onChange={(e) => handleInventoryItemChange(item.id, 'usagePurpose', e.target.value)}
                              />
                            </td>
                            <td className="p-2 border border-[#D9D9D9] text-center">
                              <input 
                                type="text" 
                                className="w-full px-2 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                value={item.usageCount.toLocaleString()}
                                onChange={(e) => handleInventoryItemChange(item.id, 'usageCount', parseFloat(e.target.value.replace(/,/g, '')) || 0)}
                              />
                            </td>
                            <td className="p-2 border border-[#D9D9D9] text-center">
                              <input 
                                type="text" 
                                className="w-full px-2 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                value={item.cogsAmount.toLocaleString() + '원'}
                                onChange={(e) => handleInventoryItemChange(item.id, 'cogsAmount', parseFloat(e.target.value.replace(/,/g, '').replace('원', '')) || 0)}
                              />
                            </td>
                          </tr>
                        ))}
                        {/* 소계 행 */}
                        <tr className="bg-[#F5F5F5]">
                          <td className="p-2 border border-[#D9D9D9] text-center font-medium" colSpan={5}></td>
                          <td className="p-2 border border-[#D9D9D9] text-center font-medium">소계</td>
                          <td className="p-2 border border-[#D9D9D9] text-center font-medium">
                            {editableInventoryItems.reduce((sum, item) => sum + item.usageCount, 0).toLocaleString()}
                          </td>
                          <td className="p-2 border border-[#D9D9D9] text-center font-medium">
                            {editableInventoryItems.reduce((sum, item) => sum + item.cogsAmount, 0).toLocaleString()}원
                          </td>
                        </tr>
                      </>
                    ) : (
                      <tr>
                        <td colSpan={8} className="p-8 text-center text-gray-500">
                          기말재고 데이터가 없습니다. 기말재고 점검을 실행해주세요.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Footer Note */}
              <div className="h-3 text-xs leading-[100%] text-[#757575]">
                (*)사용불능재고는 유통기한경과, 마모, 손상, 분실 등으로 판매 불가한 재고가액을 의미합니다.
              </div>

              {/* 전표 점검 섹션 - endingInventoryVoucherData가 있을 때만 표시 */}
              {endingInventoryVoucherData && (
              <div className="w-full pt-4 mt-19 border-t border-[#D9D9D9]">
                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-[15px] leading-[140%] text-[#1E1E1E] font-semibold font-['Pretendard']">전표 점검</h3>
                      <p className="text-xs leading-[140%] text-[#767676] font-['Pretendard']">생성된 전표를 확인하고 저장해주세요.</p>
                    </div>
                    <button
                      className="flex flex-row justify-center items-center py-2 px-3 gap-2 h-7 bg-[#2C2C2C] cursor-pointer"
                      onClick={handleEndingInventorySave}
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
                    {endingInventoryVoucherData && endingInventoryVoucherData.transactions?.length > 0 ? (
                      <>
                        {endingInventoryVoucherData.transactions.map((transaction, index) => (
                          <tr key={index} className="h-8">
                            <td className="p-2 border border-[#D9D9D9] text-center h-8">{formatDate(endingInventoryVoucherData.voucher.date)}</td>
                            {transaction.debitCredit ? (
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
                            {endingInventoryVoucherData.transactions
                              .filter(t => t.debitCredit)
                              .reduce((sum, t) => sum + t.amount, 0)
                              .toLocaleString()}
                          </td>
                          <td className="p-2 border border-[#D9D9D9] text-center h-8 text-[#B3B3B3]">-</td>
                          <td className="p-2 border border-[#D9D9D9] text-center h-8 text-[#B3B3B3]">-</td>
                          <td className="p-2 border border-[#D9D9D9] text-center h-8">
                            {endingInventoryVoucherData.transactions
                              .filter(t => !t.debitCredit)
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
                          기말재고의 결산반영 데이터가 없습니다.
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
                <div className="text-[#757575]">기말재고 데이터가 없습니다.</div>
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
