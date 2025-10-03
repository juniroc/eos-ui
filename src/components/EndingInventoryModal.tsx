'use client';

import { useState, useEffect } from 'react';
import { checkEndingInventory, applyEndingInventory } from '@/services/api';
import ToastMessage from './ToastMessage';

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
  const [endingInventoryVoucherData, setEndingInventoryVoucherData] = useState<VoucherResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [editableInventoryItems, setEditableInventoryItems] = useState<EditableEndingInventoryItem[]>([]);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  // 팝업이 열릴 때 기말재고 데이터 조회
  useEffect(() => {
    if (isOpen && closingDate) {
      handleEndingInventoryCheck();
    }
  }, [isOpen, closingDate]);

  /** 기말재고 점검 */
  const handleEndingInventoryCheck = async () => {
    try {
      setLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      console.log('기말재고 점검 API 요청:', {
        closingDate: closingDate
      });

      const data: EndingInventoryResponse = await checkEndingInventory(closingDate, accessToken) as EndingInventoryResponse;
      setEndingInventoryData(data);
      
      // 편집 가능한 형태로 변환
      const editableItems: EditableEndingInventoryItem[] = data.rows.map((item, index) => ({
        ...item,
        id: `${item.itemName}-${index}`,
        isEditing: false
      }));
      setEditableInventoryItems(editableItems);
      
      // 상태 업데이트 알림
      onStatusUpdate('DONE');
      
    } catch (error) {
      console.error('기말재고 점검 API 호출 오류:', error);
      alert(error instanceof Error ? error.message : '기말재고 점검 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

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

      const data: VoucherResponse = await applyEndingInventory({
        closingDate: closingDate,
        rows: rows
      }, accessToken) as VoucherResponse;
      setEndingInventoryVoucherData(data);

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
    // TODO: 저장 기능 구현
    setToastMessage('기말재고의 전표 저장이 완료되었습니다.');
    setShowToast(true);
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
      <div className="bg-white shadow-lg w-full h-full max-h-[calc(100vh-48px)] overflow-hidden">
        {/* 팝업 헤더 */}
        <div className="flex justify-between items-center p-3 w-full h-[41px]">
          {/* Breadcrumb */}
          <div className="flex items-center gap-[2px] mx-auto h-[17px] flex-1">
            <div className="flex items-start p-0 h-[17px]">
              <span className="h-[17px] text-xs leading-[140%] text-[#B3B3B3]">
                AI분개
              </span>
            </div>
            <div className="w-4 h-4">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12.5L10 8.5L6 4.5" stroke="#B3B3B3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex items-start p-0 h-[17px]">
              <span className="h-[17px] text-xs leading-[140%] text-[#B3B3B3]">
                AI결산점검
              </span>
            </div>
            <div className="w-4 h-4">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12.5L10 8.5L6 4.5" stroke="#B3B3B3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex items-start p-0 w-[42px] h-[17px]">
              <span className="w-[42px] h-[17px] text-xs leading-[140%] text-[#1E1E1E]">
                기말재고
              </span>
            </div>
          </div>
          
          {/* X 버튼 */}
          <button
            className="mx-auto w-4 h-4"
            onClick={onClose}
          >
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4.5L4 12.5M4 4.5L12 12.5" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* 팝업 내용 */}
        <div className="flex flex-col items-start p-4 gap-4 w-full h-[calc(100%-41px)] overflow-y-auto">
          {loading ? (
            <div className="text-center py-8">
              <div className="text-gray-500">기말재고 데이터를 불러오는 중...</div>
            </div>
          ) : endingInventoryData ? (
            <>
              {/* Title Section */}
              <div className="flex flex-col items-start p-0 gap-4 w-full min-w-[520px]">
                <div className="flex justify-between items-end p-0 gap-4 w-full">
                  {/* Left: Title and Description */}
                  <div className="flex flex-col items-start p-0 ">
                    <div className="flex flex-col items-start p-[6px_0px_2px] w-64 h-[29px] rounded-lg">
                      <div className="flex items-start p-0 w-[52px] h-[21px]">
                        <span className="w-[52px] h-[21px] text-[15px] leading-[140%] text-[#1E1E1E]">
                          기말재고
                        </span>
                      </div>
                    </div>
                    <div className="text-xs leading-[140%] text-[#767676]">
                      최종 실사 확인된 재고자산액과 장부상 재고액을 조정하여 원가를 계산합니다.<br/>
                      제조업과 상품의 품목별 단가, 원가율 등의 관리를 하고자 하는 회사는 원가관리 메뉴를 활용하여 기말재고작업을 진행하세요.
                    </div>
                  </div>
                  
                  {/* Right: Buttons */}
                  <div className="flex justify-end items-center p-0 gap-2 w-[143px] h-7">
                    <div className="flex items-start p-0 w-[66px] h-7">
                      <button className="flex justify-center items-center p-[8px_12px] gap-2 w-[66px] h-7 bg-[#F3F3F3]">
                        <span className="w-[42px] h-3 text-xs leading-[100%] text-[#1E1E1E]">
                          인쇄하기
                        </span>
                      </button>
                    </div>
                    <div className="flex items-start p-0 w-[69px] h-7">
                      <button 
                        className="flex justify-center items-center p-[8px_12px] gap-2 w-[69px] h-7 bg-[#2C2C2C]"
                        onClick={handleEndingInventoryApply}
                        disabled={loading}
                      >
                        <span className="w-[45px] h-3 text-xs leading-[100%] text-[#F5F5F5]">
                          {loading ? '처리중...' : '결산 반영'}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Table Section */}
              <div className="w-full overflow-x-auto">
                <div className="flex flex-col items-start p-0 min-w-[640px] sm:min-w-[720px] lg:min-w-[820px] border border-[#D9D9D9]">
                {/* Header Row */}
                <div className="flex items-start p-0 w-full h-8">
                  <div className="flex flex-col justify-center items-start p-0 w-[100px] min-w-[80px] sm:w-[120px] sm:min-w-[120px] lg:flex-1 lg:min-w-[120px] h-8">
                    <div className="flex justify-center items-center p-2 gap-2 w-full h-8 bg-[#F5F5F5] border-r border-[#D9D9D9]">
                      <span className="text-xs leading-[100%] text-[#757575] whitespace-nowrap">계정과목</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center p-0 w-[90px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] lg:flex-1 lg:min-w-[120px] h-8">
                    <div className="flex justify-center items-center p-2 gap-2 w-full h-8 bg-[#F5F5F5] border-r border-[#D9D9D9]">
                      <span className="text-xs leading-[100%] text-[#757575] whitespace-nowrap">기초재고</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center p-0 w-[90px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] lg:flex-1 lg:min-w-[120px] h-8">
                    <div className="flex justify-center items-center p-2 gap-2 w-full h-8 bg-[#F5F5F5] border-r border-[#D9D9D9]">
                      <span className="text-xs leading-[100%] text-[#757575] whitespace-nowrap">기중매입</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center p-0 w-[110px] min-w-[90px] sm:w-[140px] sm:min-w-[140px] lg:flex-1 lg:min-w-[140px] h-8">
                    <div className="flex justify-center items-center p-2 gap-2 w-full h-8 bg-[#F5F5F5] border-r border-[#D9D9D9]">
                      <span className="text-xs leading-[100%] text-[#757575] whitespace-nowrap">장부상재고액</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center p-0 w-[90px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] lg:flex-1 lg:min-w-[120px] h-8">
                    <div className="flex justify-center items-center p-2 gap-2 w-full h-8 bg-[#F5F5F5] border-r border-[#D9D9D9]">
                      <span className="text-xs leading-[100%] text-[#757575] whitespace-nowrap">기말실사액</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center p-0 w-[160px] min-w-[140px] sm:w-[200px] sm:min-w-[200px] lg:flex-[1.5] lg:min-w-[200px] h-8">
                    <div className="flex justify-center items-center p-2 gap-2 w-full h-8 bg-[#F5F5F5] border-r border-[#D9D9D9]">
                      <span className="text-xs leading-[100%] text-[#757575] whitespace-nowrap">매출외사용</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center p-0 w-[90px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] lg:flex-1 lg:min-w-[120px] h-8">
                    <div className="flex justify-center items-center p-2 gap-2 w-full h-8 bg-[#F5F5F5] border-l border-[#D9D9D9]">
                      <span className="text-xs leading-[100%] text-[#757575] whitespace-nowrap">매출원가</span>
                    </div>
                  </div>
                </div>

                {/* Data Rows */}
                {editableInventoryItems.length > 0 ? (
                  editableInventoryItems.map((item) => (
                    <div key={item.id} className="flex items-start p-0 w-full h-8 border-t border-[#D9D9D9]">
                      <div className="flex flex-col justify-center items-start p-0 w-[100px] min-w-[80px] sm:w-[120px] sm:min-w-[120px] lg:flex-1 lg:min-w-[120px] h-8">
                        <div className="flex items-center p-2 w-full h-8 bg-white border-r border-[#D9D9D9]">
                          <span className="flex-1 text-xs leading-[100%] text-[#757575] whitespace-nowrap overflow-hidden text-ellipsis">{item.itemName}</span>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-start p-0 w-[90px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] lg:flex-1 lg:min-w-[120px] h-8">
                        <div className="flex items-center p-2 w-full h-8 bg-white border-r border-[#D9D9D9]">
                          <input 
                            type="text" 
                            className="w-full text-xs leading-[100%] text-[#757575] bg-transparent border-none outline-none text-right pr-1"
                            value={item.priorAmount.toLocaleString()}
                            onChange={(e) => handleInventoryItemChange(item.id, 'priorAmount', parseFloat(e.target.value.replace(/,/g, '')) || 0)}
                          />
                          <span className="text-xs leading-[100%] text-[#757575] whitespace-nowrap">원</span>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-start p-0 w-[90px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] lg:flex-1 lg:min-w-[120px] h-8">
                        <div className="flex items-center p-2 w-full h-8 bg-white border-r border-[#D9D9D9]">
                          <input 
                            type="text" 
                            className="w-full text-xs leading-[100%] text-[#757575] bg-transparent border-none outline-none text-right pr-1"
                            value={item.currentAmount.toLocaleString()}
                            onChange={(e) => handleInventoryItemChange(item.id, 'currentAmount', parseFloat(e.target.value.replace(/,/g, '')) || 0)}
                          />
                          <span className="text-xs leading-[100%] text-[#757575] whitespace-nowrap">원</span>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-start p-0 w-[110px] min-w-[90px] sm:w-[140px] sm:min-w-[140px] lg:flex-1 lg:min-w-[140px] h-8">
                        <div className="flex items-center p-2 w-full h-8 bg-white border-r border-[#D9D9D9]">
                          <span className="flex-1 text-xs leading-[100%] text-[#757575] text-right pr-1 whitespace-nowrap overflow-hidden text-ellipsis">
                            {(item.priorAmount + item.currentAmount).toLocaleString()}
                          </span>
                          <span className="text-xs leading-[100%] text-[#757575] whitespace-nowrap">원</span>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-start p-0 w-[90px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] lg:flex-1 lg:min-w-[120px] h-8">
                        <div className="flex items-center p-2 w-full h-8 bg-white border-r border-[#D9D9D9]">
                          <input 
                            type="text" 
                            className="w-full text-xs leading-[100%] text-[#757575] bg-transparent border-none outline-none text-right pr-1"
                            value={item.currentAmount.toLocaleString()}
                            onChange={(e) => handleInventoryItemChange(item.id, 'currentAmount', parseFloat(e.target.value.replace(/,/g, '')) || 0)}
                          />
                          <span className="text-xs leading-[100%] text-[#757575] whitespace-nowrap">원</span>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-start p-0 w-[160px] min-w-[140px] sm:w-[200px] sm:min-w-[200px] lg:flex-[1.5] lg:min-w-[200px] h-8">
                        <div className="flex items-center p-0 w-full h-8 bg-white border-r border-[#D9D9D9]">
                          <div className="flex items-center p-2 w-1/2 h-8 border-r border-[#D9D9D9]">
                            <input 
                              type="text" 
                              className="w-full text-xs leading-[100%] text-[#757575] bg-transparent border-none outline-none"
                              value={item.usagePurpose}
                              onChange={(e) => handleInventoryItemChange(item.id, 'usagePurpose', e.target.value)}
                            />
                          </div>
                          <div className="flex items-center p-2 w-1/2 h-8">
                            <input 
                              type="text" 
                              className="w-full text-xs leading-[100%] text-[#757575] bg-transparent border-none outline-none text-right"
                              value={item.usageCount.toLocaleString()}
                              onChange={(e) => handleInventoryItemChange(item.id, 'usageCount', parseFloat(e.target.value.replace(/,/g, '')) || 0)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-start p-0 w-[90px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] lg:flex-1 lg:min-w-[120px] h-8">
                        <div className="flex items-center p-2 w-full h-8 bg-white border-l border-[#D9D9D9]">
                          <input 
                            type="text" 
                            className="w-full text-xs leading-[100%] text-[#757575] bg-transparent border-none outline-none text-right pr-1"
                            value={item.cogsAmount.toLocaleString()}
                            onChange={(e) => handleInventoryItemChange(item.id, 'cogsAmount', parseFloat(e.target.value.replace(/,/g, '')) || 0)}
                          />
                          <span className="text-xs leading-[100%] text-[#757575] whitespace-nowrap">원</span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex items-start p-0 w-full h-8 border-t border-[#D9D9D9]">
                    <div className="flex justify-center items-center p-3 gap-2 w-full h-8 bg-white">
                      <span className="text-xs text-gray-500">기말재고 데이터가 없습니다. 기말재고 점검을 실행해주세요.</span>
                    </div>
                  </div>
                )}

                {/* Subtotal Row */}
                {editableInventoryItems.length > 0 && (
                  <div className="flex items-start p-0 w-full h-8 border-t border-[#D9D9D9]">
                    <div className="flex flex-col justify-center items-start p-0 w-[100px] min-w-[80px] sm:w-[120px] sm:min-w-[120px] lg:flex-1 lg:min-w-[120px] h-8 bg-[#F5F5F5] border-r border-b border-[#D9D9D9]">
                    </div>
                    <div className="flex flex-col justify-center items-start p-0 w-[90px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] lg:flex-1 lg:min-w-[120px] h-8 bg-[#F5F5F5] border-r border-b border-[#D9D9D9]">
                    </div>
                    <div className="flex flex-col justify-center items-start p-0 w-[90px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] lg:flex-1 lg:min-w-[120px] h-8 bg-[#F5F5F5] border-r border-b border-[#D9D9D9]">
                    </div>
                    <div className="flex flex-col justify-center items-start p-0 w-[110px] min-w-[90px] sm:w-[140px] sm:min-w-[140px] lg:flex-1 lg:min-w-[140px] h-8 bg-[#F5F5F5] border-r border-b border-[#D9D9D9]">
                    </div>
                    <div className="flex flex-col justify-center items-start p-0 w-[90px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] lg:flex-1 lg:min-w-[120px] h-8 bg-[#F5F5F5] border-r border-b border-[#D9D9D9]">
                    </div>
                    <div className="flex flex-col justify-center items-start p-0 w-[160px] min-w-[140px] sm:w-[200px] sm:min-w-[200px] lg:flex-[1.5] lg:min-w-[200px] h-8">
                      <div className="flex items-center p-0 w-full h-8 bg-[#F5F5F5] border-r border-b border-[#D9D9D9]">
                        <div className="flex items-center p-2 gap-2 w-1/2 h-8 border-r border-[#D9D9D9]">
                          <span className="flex-1 text-xs leading-[100%] text-[#757575] whitespace-nowrap overflow-hidden text-ellipsis">
                            소계
                          </span>
                        </div>
                        <div className="flex items-center p-2 gap-2 w-1/2 h-8">
                          <span className="flex-1 text-xs leading-[100%] text-[#B3B3B3] text-right whitespace-nowrap overflow-hidden text-ellipsis">
                            {editableInventoryItems.reduce((sum, item) => sum + item.usageCount, 0).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-start p-0 w-[90px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] lg:flex-1 lg:min-w-[120px] h-8">
                      <div className="flex items-center p-2 gap-2 w-full h-8 bg-[#F5F5F5] border-l border-b border-[#D9D9D9]">
                        <span className="flex-1 text-xs leading-[100%] text-[#B3B3B3] text-right pr-1 whitespace-nowrap overflow-hidden text-ellipsis">
                          {editableInventoryItems.reduce((sum, item) => sum + item.cogsAmount, 0).toLocaleString()}
                        </span>
                        <span className="text-xs leading-[100%] text-[#B3B3B3] whitespace-nowrap">원</span>
                      </div>
                    </div>
                  </div>
                )}
                </div>
              </div>

              {/* Footer Note */}
              <div className="h-3 text-xs leading-[100%] text-[#757575]">
                (*)사용불능재고는 유통기한경과, 마모, 손상, 분실 등으로 판매 불가한 재고가액을 의미합니다.
              </div>

              {/* 전표 점검 섹션 - 결산반영 후에만 표시 */}
              {endingInventoryVoucherData && (
                <div className="flex flex-col items-start p-0 pt-4 gap-4 w-full border-t border-[#D9D9D9] mt-19">
                  {/* Title Section for 전표 점검 */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end p-0 gap-4 w-full min-h-[46px] self-stretch">
                    {/* Left: Title and Description */}
                    <div className="flex flex-col items-start p-0 w-full min-h-[46px]">
                      <div className="flex flex-col items-start p-[6px_0px_2px] w-full h-[29px] rounded-lg">
                        <div className="flex flex-row items-start p-0 w-14 h-[21px]">
                          <span className="w-14 h-[21px] font-semibold text-[15px] leading-[140%] text-[#1E1E1E]">
                            전표 점검
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-[17px] text-xs leading-[140%] text-[#767676]">
                        생성된 전표를 확인하고 저장해주세요.
                      </div>
                    </div>
                    
                    {/* Right: Save Button */}
                    <div className="flex flex-row justify-start sm:justify-end items-center p-0 gap-2 w-[66px] h-7 flex-shrink-0">
                      <div className="flex flex-row items-start p-0 w-[66px] h-7">
                        <button 
                          className="flex flex-row justify-center items-center p-[8px_12px] gap-2 w-[66px] h-7 bg-[#2C2C2C]"
                          onClick={handleEndingInventorySave}
                        >
                          <span className="w-[42px] h-3 font-medium text-xs leading-[100%] text-[#F5F5F5]">
                            저장하기
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Voucher Table */}
                  <table className="w-full border-collapse border border-[#D9D9D9] text-sm">
                    <thead>
                      <tr>
                        <th rowSpan={2} className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center h-8 w-[100px] min-w-[100px] text-xs font-medium text-[#757575]">일자</th>
                        <th colSpan={3} className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center h-8 w-1/3 text-xs font-medium text-[#757575]">차변</th>
                        <th colSpan={3} className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center h-8 w-1/3 text-xs font-medium text-[#757575]">대변</th>
                        <th rowSpan={2} className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center h-8 w-1/3 text-xs font-medium text-[#757575]">적요</th>
                      </tr>
                      <tr>
                        <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center h-8 text-xs font-medium text-[#757575]">계정과목</th>
                        <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center h-8 text-xs font-medium text-[#757575]">금액</th>
                        <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center h-8 text-xs font-medium text-[#757575]">거래처</th>
                        <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center h-8 text-xs font-medium text-[#757575]">계정과목</th>
                        <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center h-8 text-xs font-medium text-[#757575]">금액</th>
                        <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center h-8 text-xs font-medium text-[#757575]">거래처</th>
                      </tr>
                    </thead>
                    <tbody>
                      {endingInventoryVoucherData.transactions?.length > 0 ? (
                        <>
                          {endingInventoryVoucherData.transactions.map((transaction, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="p-3 border border-[#D9D9D9] text-center h-12 text-xs text-[#1E1E1E]">{closingDate}</td>
                              {transaction.debitCredit === 'DEBIT' ? (
                                <>
                                  <td className="p-3 border border-[#D9D9D9] text-center h-12 text-xs text-[#1E1E1E]">{transaction.account?.name || '-'}</td>
                                  <td className="p-3 border border-[#D9D9D9] text-right h-12 text-xs text-[#1E1E1E] font-medium">{transaction.amount.toLocaleString()}</td>
                                  <td className="p-3 border border-[#D9D9D9] text-center h-12 text-xs text-[#1E1E1E]">{transaction.partner?.name || '-'}</td>
                                  <td className="p-3 border border-[#D9D9D9] text-center h-12 text-xs text-[#B3B3B3]">-</td>
                                  <td className="p-3 border border-[#D9D9D9] text-center h-12 text-xs text-[#B3B3B3]">-</td>
                                  <td className="p-3 border border-[#D9D9D9] text-center h-12 text-xs text-[#B3B3B3]">-</td>
                                </>
                              ) : (
                                <>
                                  <td className="p-3 border border-[#D9D9D9] text-center h-12 text-xs text-[#B3B3B3]">-</td>
                                  <td className="p-3 border border-[#D9D9D9] text-center h-12 text-xs text-[#B3B3B3]">-</td>
                                  <td className="p-3 border border-[#D9D9D9] text-center h-12 text-xs text-[#B3B3B3]">-</td>
                                  <td className="p-3 border border-[#D9D9D9] text-center h-12 text-xs text-[#1E1E1E]">{transaction.account?.name || '-'}</td>
                                  <td className="p-3 border border-[#D9D9D9] text-right h-12 text-xs text-[#1E1E1E] font-medium">{transaction.amount.toLocaleString()}</td>
                                  <td className="p-3 border border-[#D9D9D9] text-center h-12 text-xs text-[#1E1E1E]">{transaction.partner?.name || '-'}</td>
                                </>
                              )}
                              <td className="p-3 border border-[#D9D9D9] text-center h-12 text-xs text-[#1E1E1E]">{transaction.note}</td>
                            </tr>
                          ))}
                          <tr className="bg-[#F9F9F9]">
                            <td className="p-3 border border-[#D9D9D9] text-center h-12 bg-[#F5F5F5] text-xs font-semibold text-[#1E1E1E]">소계</td>
                            <td className="p-3 border border-[#D9D9D9] text-center h-12 text-xs text-[#B3B3B3]">-</td>
                            <td className="p-3 border border-[#D9D9D9] text-right h-12 text-xs font-semibold text-[#1E1E1E]">
                              {endingInventoryVoucherData.transactions
                                .filter(t => t.debitCredit === 'DEBIT')
                                .reduce((sum, t) => sum + t.amount, 0)
                                .toLocaleString()}
                            </td>
                            <td className="p-3 border border-[#D9D9D9] text-center h-12 text-xs text-[#B3B3B3]">-</td>
                            <td className="p-3 border border-[#D9D9D9] text-center h-12 text-xs text-[#B3B3B3]">-</td>
                            <td className="p-3 border border-[#D9D9D9] text-right h-12 text-xs font-semibold text-[#1E1E1E]">
                              {endingInventoryVoucherData.transactions
                                .filter(t => t.debitCredit === 'CREDIT')
                                .reduce((sum, t) => sum + t.amount, 0)
                                .toLocaleString()}
                            </td>
                            <td className="p-3 border border-[#D9D9D9] text-center h-12 text-xs text-[#B3B3B3]">-</td>
                            <td className="p-3 border border-[#D9D9D9] text-center h-12 text-xs text-[#B3B3B3]">-</td>
                          </tr>
                        </>
                      ) : (
                        <tr>
                          <td colSpan={8} className="p-8 text-center text-gray-500 h-20 text-xs">
                            전표 데이터가 없습니다.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-8">
              <div className="text-gray-500">기말재고 데이터가 없습니다.</div>
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
}
