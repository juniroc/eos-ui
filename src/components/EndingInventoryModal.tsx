'use client';

import { useState, useEffect } from 'react';
import { checkEndingInventory, applyEndingInventory } from '@/services/api';

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
      
    } catch (error) {
      console.error('기말재고 결산 반영 API 호출 오류:', error);
      alert(error instanceof Error ? error.message : '기말재고 결산 반영 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  /** 기말재고 전표 저장 */
  const handleEndingInventorySave = async () => {
    alert('저장했습니다');
    onClose();
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
    <div className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-50 p-6">
      <div className="bg-white shadow-lg w-full h-full max-h-[calc(100vh-48px)] overflow-hidden">
        {/* 팝업 헤더 */}
        <div className="relative p-6 border-b border-gray-200">
          {/* X 버튼 - 우측 상단 고정 */}
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
            onClick={onClose}
          >
            ✕
          </button>
          
          <div className="flex justify-between items-start pr-12">
            <div>
              <div className="text-sm text-gray-500 mb-1">AI분개 &gt; AI결산점검 &gt; 기말재고</div>
              <h2 className="text-2xl font-bold text-gray-900">기말재고</h2>
              <p className="text-gray-600 mt-2">
                최종 실사 확인된 재고자산액과 장부상 재고액을 조정하여 원가를 계산합니다. 제조업과 상품의 품목별 단가, 원가율 등의 관리를 하고자 하는 회사는 원가관리 메뉴를 활용하여 기말재고작업을 진행하세요.
              </p>
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
                onClick={handleEndingInventoryApply}
                disabled={loading}
              >
                {loading ? '처리중...' : '결산 반영'}
              </button>
            </div>
          </div>
        </div>

        {/* 팝업 내용 */}
        <div className="p-6 overflow-y-auto h-[calc(100%-120px)]">
          {loading ? (
            <div className="text-center py-8">
              <div className="text-gray-500">기말재고 데이터를 불러오는 중...</div>
            </div>
          ) : endingInventoryData ? (
            <>
              {/* 기말재고 테이블 */}
              <div className="mb-8">
                <table className="w-full border-collapse border border-[#D9D9D9] text-sm text-[#757575]">
                  <thead>
                    <tr>
                      <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">계정과목</th>
                      <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">기초재고</th>
                      <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">기중매입</th>
                      <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">장부상재고액</th>
                      <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">기말실사액</th>
                      <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">매출 외 사용</th>
                      <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">매출원가</th>
                    </tr>
                  </thead>
                  <tbody>
                    {editableInventoryItems.length > 0 ? (
                      editableInventoryItems.map((item) => (
                        <tr key={item.id}>
                          <td className="p-3 border border-[#D9D9D9] text-center">{item.itemName}</td>
                          <td className="p-3 border border-[#D9D9D9] text-center">
                            <input 
                              type="text" 
                              className="w-full px-2 py-1 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                              value={item.priorAmount.toLocaleString()}
                              onChange={(e) => handleInventoryItemChange(item.id, 'priorAmount', parseFloat(e.target.value.replace(/,/g, '')) || 0)}
                            />
                          </td>
                          <td className="p-3 border border-[#D9D9D9] text-center">
                            <input 
                              type="text" 
                              className="w-full px-2 py-1 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                              value={item.currentAmount.toLocaleString()}
                              onChange={(e) => handleInventoryItemChange(item.id, 'currentAmount', parseFloat(e.target.value.replace(/,/g, '')) || 0)}
                            />
                          </td>
                          <td className="p-3 border border-[#D9D9D9] text-center">
                            <input 
                              type="text" 
                              className="w-full px-2 py-1 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                              value={(item.priorAmount + item.currentAmount).toLocaleString()}
                              readOnly
                            />
                          </td>
                          <td className="p-3 border border-[#D9D9D9] text-center">
                            <input 
                              type="text" 
                              className="w-full px-2 py-1 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                              value={item.currentAmount.toLocaleString()}
                              onChange={(e) => handleInventoryItemChange(item.id, 'currentAmount', parseFloat(e.target.value.replace(/,/g, '')) || 0)}
                            />
                            <div className="text-xs text-gray-400 mt-1">사용불능재고(*)</div>
                          </td>
                          <td className="p-3 border border-[#D9D9D9] text-center">
                            <input 
                              type="text" 
                              className="w-full px-2 py-1 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                              value={item.usageCount.toLocaleString()}
                              onChange={(e) => handleInventoryItemChange(item.id, 'usageCount', parseFloat(e.target.value.replace(/,/g, '')) || 0)}
                            />
                          </td>
                          <td className="p-3 border border-[#D9D9D9] text-center">
                            <input 
                              type="text" 
                              className="w-full px-2 py-1 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                              value={item.cogsAmount.toLocaleString()}
                              onChange={(e) => handleInventoryItemChange(item.id, 'cogsAmount', parseFloat(e.target.value.replace(/,/g, '')) || 0)}
                            />
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={7} className="p-8 text-center text-gray-500">
                          기말재고 데이터가 없습니다. 기말재고 점검을 실행해주세요.
                        </td>
                      </tr>
                    )}
                    {/* 소계 행 */}
                    {editableInventoryItems.length > 0 && (
                      <tr className="bg-[#F5F5F5]">
                        <td className="p-3 border border-[#D9D9D9] text-center font-medium">소계</td>
                        <td className="p-3 border border-[#D9D9D9] text-center">
                          {editableInventoryItems.reduce((sum, item) => sum + item.priorAmount, 0).toLocaleString()}
                        </td>
                        <td className="p-3 border border-[#D9D9D9] text-center">
                          {editableInventoryItems.reduce((sum, item) => sum + item.currentAmount, 0).toLocaleString()}
                        </td>
                        <td className="p-3 border border-[#D9D9D9] text-center">
                          {editableInventoryItems.reduce((sum, item) => sum + item.priorAmount + item.currentAmount, 0).toLocaleString()}
                        </td>
                        <td className="p-3 border border-[#D9D9D9] text-center">
                          {editableInventoryItems.reduce((sum, item) => sum + item.currentAmount, 0).toLocaleString()}
                        </td>
                        <td className="p-3 border border-[#D9D9D9] text-center">
                          {editableInventoryItems.reduce((sum, item) => sum + item.usageCount, 0).toLocaleString()}
                        </td>
                        <td className="p-3 border border-[#D9D9D9] text-center">
                          {editableInventoryItems.reduce((sum, item) => sum + item.cogsAmount, 0).toLocaleString()}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
                
                {/* 각주 */}
                <div className="mt-4 text-xs text-gray-500">
                  (*)사용불능재고는 유통기한경과, 마모, 손상, 분실 등으로 판매 불가한 재고가액을 의미합니다.
                </div>
              </div>

              {/* 전표 점검 섹션 */}
              <div>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">전표 점검</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">생성된 전표를 확인하고 저장해주세요.</p>
                    <button
                      className="px-6 py-2 bg-[#2C2C2C] text-white hover:bg-[#444444]"
                      onClick={handleEndingInventorySave}
                    >
                      저장
                    </button>
                  </div>
                </div>
                
                <table className="w-full border-collapse border border-[#D9D9D9] text-sm text-[#757575]">
                  <thead>
                    <tr>
                      <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">일자</th>
                      <th colSpan={3} className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">차변</th>
                      <th colSpan={3} className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">대변</th>
                      <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">적요</th>
                    </tr>
                    <tr>
                      <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium"></th>
                      <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">계정과목</th>
                      <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">금액</th>
                      <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">거래처</th>
                      <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">계정과목</th>
                      <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">금액</th>
                      <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">거래처</th>
                      <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {endingInventoryVoucherData && endingInventoryVoucherData.transactions?.length > 0 ? (
                      <>
                        {endingInventoryVoucherData.transactions.map((transaction, index) => (
                          <tr key={index}>
                            <td className="p-3 border border-[#D9D9D9] text-center">{closingDate}</td>
                            {transaction.debitCredit === 'DEBIT' ? (
                              <>
                                <td className="p-3 border border-[#D9D9D9] text-center">{transaction.account?.name || '-'}</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">{transaction.amount.toLocaleString()}</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">{transaction.partner?.name || '-'}</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                              </>
                            ) : (
                              <>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">{transaction.account?.name || '-'}</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">{transaction.amount.toLocaleString()}</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">{transaction.partner?.name || '-'}</td>
                              </>
                            )}
                            <td className="p-3 border border-[#D9D9D9] text-center">{transaction.note}</td>
                          </tr>
                        ))}
                        <tr>
                          <td className="p-3 border border-[#D9D9D9] text-center font-medium bg-[#F5F5F5]">소계</td>
                          <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                          <td className="p-3 border border-[#D9D9D9] text-center">
                            {endingInventoryVoucherData.transactions
                              .filter(t => t.debitCredit === 'DEBIT')
                              .reduce((sum, t) => sum + t.amount, 0)
                              .toLocaleString()}
                          </td>
                          <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                          <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                          <td className="p-3 border border-[#D9D9D9] text-center">
                            {endingInventoryVoucherData.transactions
                              .filter(t => t.debitCredit === 'CREDIT')
                              .reduce((sum, t) => sum + t.amount, 0)
                              .toLocaleString()}
                          </td>
                          <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                          <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                        </tr>
                      </>
                    ) : (
                      <tr>
                        <td colSpan={8} className="p-8 text-center text-gray-500">
                          결산반영을 실행하면 전표가 생성됩니다.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>

              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="text-gray-500">기말재고 데이터가 없습니다.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
