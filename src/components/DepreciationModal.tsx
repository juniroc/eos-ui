'use client';

import { useState, useEffect, useCallback } from 'react';
import { checkDepreciation, applyDepreciation } from '@/services/api';

// 타입 정의
interface DepreciationItem {
  accountName: string;
  itemName: string;
  purchaseDate: string;
  purchaseAmount: number;
  accumulatedDep: number;
  priorDep: { date: string; amount: number } | null;
  currentDep: { date: string; amount: number } | null;
  isProductionCost: boolean;
  usefulLifeMonths: number;
  method: string;
}

interface EditableDepreciationItem extends DepreciationItem {
  id: string;
  isEditing?: boolean;
}

interface DepreciationResponse {
  key: string;
  status: string;
  tangible: DepreciationItem[];
  intangible: DepreciationItem[];
}

interface DepRow {
  accountName: string;
  itemName: string;
  purchaseDate: string;
  purchaseAmount: number;
  accumulatedDep: number;
  priorDep: { date: string; amount: number } | null;
  currentDep: { date: string; amount: number } | null;
  isProductionCost: boolean;
  usefulLifeMonths: number;
  method: string;
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

interface DepreciationModalProps {
  isOpen: boolean;
  onClose: () => void;
  closingDate: string;
  onStatusUpdate: (status: 'DONE') => void;
}

export default function DepreciationModal({ 
  isOpen, 
  onClose, 
  closingDate, 
  onStatusUpdate 
}: DepreciationModalProps) {
  const [depreciationData, setDepreciationData] = useState<DepreciationResponse | null>(null);
  const [voucherData, setVoucherData] = useState<VoucherResponse | null>(null);
  const [editableVoucherData, setEditableVoucherData] = useState<VoucherResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [editableItems, setEditableItems] = useState<EditableDepreciationItem[]>([]);

  /** 감가상각 점검 실행 */
  const handleDepreciationCheck = useCallback(async () => {
    try {
      setLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      const data: DepreciationResponse = await checkDepreciation(closingDate, accessToken) as DepreciationResponse;
      setDepreciationData(data);
      
      // 편집 가능한 형태로 변환
      const allItems = [...(data.tangible || []), ...(data.intangible || [])];
      const editableItems: EditableDepreciationItem[] = allItems.map((item, index) => ({
        ...item,
        id: `${item.accountName}-${item.itemName}-${index}`,
        isEditing: false
      }));
      setEditableItems(editableItems);
      
    } catch (error) {
      console.error('감가상각 점검 오류:', error);
      alert(error instanceof Error ? error.message : '감가상각 점검 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  }, [closingDate]);

  // 팝업이 열렸을 때 감가상각 데이터 조회
  useEffect(() => {
    if (isOpen) {
      handleDepreciationCheck();
    }
  }, [isOpen, handleDepreciationCheck]);

  /** 감가상각 항목 값 변경 */
  const handleItemChange = (id: string, field: keyof EditableDepreciationItem, value: string | number | boolean) => {
    setEditableItems(prev => prev.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  /** 전표 거래 항목 수정 */
  const handleTransactionChange = (transactionIndex: number, field: string, value: string | number | object) => {
    if (!editableVoucherData) return;
    
    setEditableVoucherData(prev => {
      if (!prev) return null;
      
      const updatedTransactions = [...prev.transactions];
      updatedTransactions[transactionIndex] = {
        ...updatedTransactions[transactionIndex],
        [field]: value
      };
      
      return {
        ...prev,
        transactions: updatedTransactions
      };
    });
  };

  /** 감가상각 결산반영 */
  const handleDepreciationApply = async () => {
    try {
      setLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      const tangible = editableItems.filter(item => 
        depreciationData?.tangible?.some(t => t.accountName === item.accountName && t.itemName === item.itemName)
      ).map(item => ({
        accountName: item.accountName,
        itemName: item.itemName,
        purchaseDate: item.purchaseDate,
        purchaseAmount: item.purchaseAmount,
        accumulatedDep: item.accumulatedDep,
        priorDep: item.priorDep,
        currentDep: item.currentDep,
        isProductionCost: item.isProductionCost,
        usefulLifeMonths: item.usefulLifeMonths,
        method: item.method
      } as DepRow));

      const intangible = editableItems.filter(item => 
        depreciationData?.intangible?.some(i => i.accountName === item.accountName && i.itemName === item.itemName)
      ).map(item => ({
        accountName: item.accountName,
        itemName: item.itemName,
        purchaseDate: item.purchaseDate,
        purchaseAmount: item.purchaseAmount,
        accumulatedDep: item.accumulatedDep,
        priorDep: item.priorDep,
        currentDep: item.currentDep,
        isProductionCost: item.isProductionCost,
        usefulLifeMonths: item.usefulLifeMonths,
        method: item.method
      } as DepRow));

      const data = await applyDepreciation({
        closingDate: closingDate,
        tangible: tangible,
        intangible: intangible
      }, accessToken);
      console.log('감가상각 API 응답 데이터:', data);
      
      // API 응답을 그대로 사용 (이미 전표 형태로 반환됨)
      setVoucherData(data as VoucherResponse);
      setEditableVoucherData(data as VoucherResponse);
      
      // 메인 테이블 상태 업데이트
      onStatusUpdate('DONE');
      
    } catch (error) {
      console.error('감가상각 결산반영 오류:', error);
      alert(error instanceof Error ? error.message : '감가상각 결산반영 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  /** 감가상각 전표 저장 */
  const handleDepreciationSave = async () => {
    alert('저장했습니다');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-6">
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
              <div className="text-sm text-gray-500 mb-1">AI분개 &gt; AI결산점검 &gt; 감가상각</div>
              <h2 className="text-2xl font-bold text-gray-900">감가상각</h2>
              <p className="text-gray-600 mt-2">
                AI가 수행한 감가상각 작업을 확인해 주세요. 수정사항이 있으면 수정후 결산반영을 누르면 됩니다.
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
                onClick={handleDepreciationApply}
                disabled={loading}
              >
                {loading ? '처리중...' : '결산 반영'}
              </button>
            </div>
          </div>
        </div>

        {/* 팝업 내용 */}
        <div className="p-6 overflow-y-auto" style={{height: 'calc(100vh - 200px)'}}>
          {loading ? (
            <div className="text-center py-8">
              <div className="text-gray-500">감가상각 데이터를 불러오는 중...</div>
            </div>
          ) : depreciationData ? (
            <>
              {/* 감가상각 테이블 */}
              <div className="mb-8">
                <table className="w-full border-collapse border border-[#D9D9D9] text-sm text-[#757575]">
                  <thead>
                    <tr>
                      <th rowSpan={2} className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">계정과목</th>
                      <th rowSpan={2} className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">품목</th>
                      <th rowSpan={2} className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">매입일</th>
                      <th rowSpan={2} className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">매입가</th>
                      <th rowSpan={2} className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">감가상각 누계액</th>
                      <th colSpan={2} className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">전기상각액</th>
                      <th colSpan={2} className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">당기상각액</th>
                      <th rowSpan={2} className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">생산원가 여부</th>
                      <th rowSpan={2} className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">내용연수</th>
                      <th rowSpan={2} className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">상각방법</th>
                    </tr>
                    <tr>
                      <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">일자</th>
                      <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">상각액</th>
                      <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">일자</th>
                      <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">상각액</th>
                    </tr>
                  </thead>
                  <tbody>
                    {editableItems.length > 0 ? (
                      editableItems.map((item) => (
                        <tr key={item.id}>
                          <td className="p-3 border border-[#D9D9D9] text-center">{item.accountName}</td>
                          <td className="p-3 border border-[#D9D9D9] text-center">{item.itemName}</td>
                          <td className="p-3 border border-[#D9D9D9] text-center">{item.purchaseDate}</td>
                          <td className="p-3 border border-[#D9D9D9] text-center">{item.purchaseAmount.toLocaleString()} 원</td>
                          <td className="p-3 border border-[#D9D9D9] text-center">{item.accumulatedDep.toLocaleString()} 원</td>
                          <td className="p-3 border border-[#D9D9D9] text-center">{item.priorDep?.date || '-'}</td>
                          <td className="p-3 border border-[#D9D9D9] text-center">{item.priorDep?.amount.toLocaleString() || '0'} 원</td>
                          <td className="p-3 border border-[#D9D9D9] text-center">{item.currentDep?.date || '-'}</td>
                          <td className="p-3 border border-[#D9D9D9] text-center">{item.currentDep?.amount.toLocaleString() || '0'} 원</td>
                          <td className="p-3 border border-[#D9D9D9] text-center">
                            <select 
                              className="w-full text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                              value={item.isProductionCost ? '예' : '부'}
                              onChange={(e) => handleItemChange(item.id, 'isProductionCost', e.target.value === '예')}
                            >
                              <option value="예">예</option>
                              <option value="부">부</option>
                            </select>
                          </td>
                          <td className="p-3 border border-[#D9D9D9] text-center">
                            <input 
                              type="number" 
                              className="w-full text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                              value={Math.floor(item.usefulLifeMonths / 12)}
                              onChange={(e) => handleItemChange(item.id, 'usefulLifeMonths', parseInt(e.target.value) * 12)}
                            />
                            <span className="ml-1">년</span>
                          </td>
                          <td className="p-3 border border-[#D9D9D9] text-center">
                            <select 
                              className="w-full text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                              value={item.method}
                              onChange={(e) => handleItemChange(item.id, 'method', e.target.value)}
                            >
                              <option value="정액법">정액법</option>
                              <option value="정률법">정률법</option>
                              <option value="생산량비례법">생산량비례법</option>
                            </select>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={12} className="p-8 text-center text-gray-500">
                          감가상각 데이터가 없습니다. 감가상각 점검을 실행해주세요.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* 전표 점검 섹션 */}
              <div>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">전표 점검</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">생성된 전표를 확인하고 저장해주세요.</p>
                    <button
                      className="px-6 py-2 bg-[#2C2C2C] text-white hover:bg-[#444444]"
                      onClick={handleDepreciationSave}
                      disabled={loading}
                    >
                      {loading ? '저장중...' : '저장'}
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
                    {editableVoucherData ? (
                      <>
                        {editableVoucherData.transactions?.map((transaction, index) => (
                          <tr key={index}>
                            <td className="p-3 border border-[#D9D9D9] text-center">{closingDate}</td>
                            {transaction.debitCredit ? (
                              <>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                    value={transaction.account?.name || ''}
                                    onChange={(e) => {
                                      handleTransactionChange(index, 'account', {
                                        ...transaction.account,
                                        name: e.target.value
                                      });
                                    }}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="number" 
                                    className="w-full text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                    value={transaction.amount}
                                    onChange={(e) => {
                                      handleTransactionChange(index, 'amount', parseInt(e.target.value) || 0);
                                    }}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                    value={transaction.partner?.name || ''}
                                    onChange={(e) => {
                                      handleTransactionChange(index, 'partner', {
                                        ...transaction.partner,
                                        name: e.target.value
                                      });
                                    }}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                              </>
                            ) : (
                              <>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                    value={transaction.account?.name || ''}
                                    onChange={(e) => {
                                      handleTransactionChange(index, 'account', {
                                        ...transaction.account,
                                        name: e.target.value
                                      });
                                    }}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="number" 
                                    className="w-full text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                    value={transaction.amount}
                                    onChange={(e) => {
                                      handleTransactionChange(index, 'amount', parseInt(e.target.value) || 0);
                                    }}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                    value={transaction.partner?.name || ''}
                                    onChange={(e) => {
                                      handleTransactionChange(index, 'partner', {
                                        ...transaction.partner,
                                        name: e.target.value
                                      });
                                    }}
                                  />
                                </td>
                              </>
                            )}
                            <td className="p-3 border border-[#D9D9D9] text-center">
                              <input 
                                type="text" 
                                className="w-full text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                value={transaction.note || ''}
                                onChange={(e) => {
                                  handleTransactionChange(index, 'note', e.target.value);
                                }}
                              />
                            </td>
                          </tr>
                        ))}
                        <tr>
                          <td className="p-3 border border-[#D9D9D9] text-center font-medium bg-[#F5F5F5]">소계</td>
                          <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                          <td className="p-3 border border-[#D9D9D9] text-center">
                            {editableVoucherData.transactions
                              ?.filter(t => t.debitCredit === 'DEBIT')
                              .reduce((sum, t) => sum + t.amount, 0)
                              .toLocaleString()}
                          </td>
                          <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                          <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                          <td className="p-3 border border-[#D9D9D9] text-center">
                            {editableVoucherData.transactions
                              ?.filter(t => t.debitCredit === 'CREDIT')
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
              <div className="text-gray-500">감가상각 데이터가 없습니다.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
