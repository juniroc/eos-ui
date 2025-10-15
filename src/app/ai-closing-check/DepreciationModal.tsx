'use client';

import { useState, useEffect, useCallback } from 'react';
import { checkDepreciation, applyDepreciation } from '@/services/api';
import { saveClosingCheck } from '@/services/ai-closing-check';
import Image from 'next/image';
import ToastMessage from '@/components/ToastMessage';
import PrintButton from '@/components/PrintButton';

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

interface ApplyDepreciationResponse {
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
  const [voucherData, setVoucherData] = useState<ApplyDepreciationResponse | null>(null);
  const [editableVoucherData, setEditableVoucherData] = useState<ApplyDepreciationResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [editableItems, setEditableItems] = useState<EditableDepreciationItem[]>([]);

  /** 날짜를 YYYY-MM-DD 형식으로 포맷 */
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

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
        voucher: prev.voucher,
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
      
      // API 응답 구조: { voucher: { date, description }, transactions: [...] }
      setVoucherData(data as ApplyDepreciationResponse);
      setEditableVoucherData(data as ApplyDepreciationResponse);

      setToastMessage('감가삼각의 결산반영이 완료되었습니다.');
      setShowToast(true);
      
    } catch (error) {
      console.error('감가상각 결산반영 오류:', error);
      alert(error instanceof Error ? error.message : '감가상각 결산반영 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  /** 감가상각 전표 저장 */
  const handleDepreciationSave = async () => {
    try {
      setLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      if (!editableVoucherData) {
        alert('저장할 전표 데이터가 없습니다.');
        return;
      }

      // accountId 유효성 검사
      const hasInvalidAccount = editableVoucherData.transactions.some(
        transaction => !transaction.accountId
      );
      
      if (hasInvalidAccount) {
        alert('계정과목이 설정되지 않은 거래가 있습니다. 모든 거래에 계정과목을 지정해주세요.');
        return;
      }

      // API 요청 데이터 구조로 변환
      const requestData = {
        closingDate,
        key: 'depreciation' as const,
        voucher: {
          date: editableVoucherData.voucher.date,
          description: editableVoucherData.voucher.description,
        },
        transactions: editableVoucherData.transactions.map(transaction => ({
          accountId: transaction.accountId,
          amount: transaction.amount,
          debitCredit: transaction.debitCredit,
          partnerId: transaction.partnerId,
          note: transaction.note,
        })),
      };

      await saveClosingCheck(accessToken, requestData);
      
      setToastMessage('감가삼각의 전표 점검이 저장되었습니다.');
      setShowToast(true);

      // 메인 테이블 상태 업데이트
      onStatusUpdate('DONE');
      
    } catch (error) {
      console.error('감가상각 전표 저장 오류:', error);
      alert(error instanceof Error ? error.message : '감가상각 전표 저장 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-50 p-5">
      <div id="depreciation-modal" className="relative w-full h-full bg-white flex flex-col pb-5">
        {/* 상단 헤더 */}
        <div className="flex flex-row justify-between items-center p-3 h-[41px]">
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
              <span className="text-xs leading-[140%] text-[#1E1E1E] font-semibold font-['Pretendard']">감가상각</span>
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
              <div className="flex flex-col items-start max-w-[458px] h-[46px]">
                <div className="flex flex-col items-start p-1.5 px-0 pt-1.5 pb-0.5 w-64 h-[29px] rounded-lg">
                  <div className="flex flex-row items-start">
                    <span className="text-[15px] leading-[140%] text-[#1E1E1E] font-semibold font-['Pretendard']">감가상각</span>
                  </div>
                </div>
                <span className="w-[458px] h-[17px] text-xs leading-[140%] text-[#767676] font-['Pretendard']">AI가 수행한 감가상각 작업을 확인해 주세요. 수정사항이 있으면 수정후 결산반영을 누르면 됩니다.</span>
              </div>
              
              {/* 버튼 그룹 */}
              <div className="flex flex-row justify-end items-center gap-2 h-7">
                <div className="flex flex-row items-start h-7">
                  <PrintButton
                    printType="modal"
                    targetSelector="#depreciation-modal"
                    variant="neutral"
                    size="small"
                    printOptions={{
                      delay: 500,
                      onBeforePrint: () => {
                        // 인쇄 전에 모든 스크롤 영역을 최상단으로 이동
                        const scrollElements = document.querySelectorAll('.overflow-y-auto');
                        scrollElements.forEach(el => {
                          (el as HTMLElement).scrollTop = 0;
                        });
                      }
                    }}
                  >
                    인쇄하기
                  </PrintButton>
                </div>
                <div className="flex flex-row items-start w-[69px] h-7">
                  <button
                    className="flex flex-row justify-center items-center py-2 px-3 gap-2 w-[69px] h-7 bg-[#2C2C2C] cursor-pointer"
                    onClick={handleDepreciationApply}
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

          {/* 감가상각 테이블 섹션 */}
          <div className="flex flex-col items-start w-full">
            {loading ? (
              <div className="flex items-center justify-center w-full h-full">
                <div className="text-[#757575]">감가상각 데이터를 불러오는 중...</div>
              </div>
            ) : depreciationData ? (
              <>
                {/* 감가상각 테이블 */}
                <div className="w-full">
                <table className="w-full border-collapse border border-[#D9D9D9] text-xs text-[#757575] table-fixed">
                  <colgroup>
                    <col className="w-[11%]" />
                    <col className="w-[11%]" />
                    <col className="w-[9%]" />
                    <col className="w-[11%]" />
                    <col className="w-[11%]" />
                    <col className="w-[9%]" />
                    <col className="w-[9%]" />
                    <col className="w-[9%]" />
                    <col className="w-[9%]" />
                    <col className="w-[7%]" />
                    <col className="w-[7%]" />
                    <col className="w-[7%]" />
                  </colgroup>
                  <thead className="h-16">
                    <tr className="h-8">
                      <th rowSpan={2} className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium h-8">계정과목</th>
                      <th rowSpan={2} className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium h-8">품목</th>
                      <th rowSpan={2} className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium h-8">매입일</th>
                      <th rowSpan={2} className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium h-8">매입가</th>
                      <th rowSpan={2} className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium h-8">감가상각<br/>누계액</th>
                      <th colSpan={2} className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium h-8">전기상각액</th>
                      <th colSpan={2} className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium h-8">당기상각액</th>
                      <th rowSpan={2} className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium h-8">생산원가<br/>여부</th>
                      <th rowSpan={2} className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium h-8">내용연수</th>
                      <th rowSpan={2} className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium h-8">상각방법</th>
                    </tr>
                    <tr className="h-8">
                      <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium h-8">일자</th>
                      <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium h-8">상각액</th>
                      <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium h-8">일자</th>
                      <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium h-8">상각액</th>
                    </tr>
                  </thead>
                  <tbody>
                    {editableItems.length > 0 ? (
                      editableItems.map((item) => (
                        <tr key={item.id} className="h-8">
                          <td className="p-2 border border-[#D9D9D9] text-center h-8">{item.accountName}</td>
                          <td className="p-2 border border-[#D9D9D9] text-center h-8">{item.itemName}</td>
                          <td className="p-2 border border-[#D9D9D9] text-center h-8">{item.purchaseDate}</td>
                          <td className="p-2 border border-[#D9D9D9] text-center h-8">{item.purchaseAmount.toLocaleString()} 원</td>
                          <td className="p-2 border border-[#D9D9D9] text-center h-8">{item.accumulatedDep.toLocaleString()} 원</td>
                          <td className="p-2 border border-[#D9D9D9] text-center h-8">{item.priorDep?.date || '-'}</td>
                          <td className="p-2 border border-[#D9D9D9] text-center h-8">{item.priorDep?.amount.toLocaleString() || '0'} 원</td>
                          <td className="p-2 border border-[#D9D9D9] text-center h-8">{item.currentDep?.date || '-'}</td>
                          <td className="p-2 border border-[#D9D9D9] text-center h-8">{item.currentDep?.amount.toLocaleString() || '0'} 원</td>
                          <td className="p-2 border border-[#D9D9D9] text-center h-8">
                            <select 
                              className="w-full text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                              value={item.isProductionCost ? '예' : '부'}
                              onChange={(e) => handleItemChange(item.id, 'isProductionCost', e.target.value === '예')}
                            >
                              <option value="예">예</option>
                              <option value="부">부</option>
                            </select>
                          </td>
                          <td className="p-2 border border-[#D9D9D9] text-center h-8">
                            <div className="flex items-center justify-center gap-1">
                              <input 
                                type="number" 
                                className="w-full text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                value={Math.floor(item.usefulLifeMonths / 12)}
                                onChange={(e) => handleItemChange(item.id, 'usefulLifeMonths', parseInt(e.target.value) * 12)}
                              />
                              <span className="text-[#B3B3B3]">년</span>
                            </div>
                          </td>
                          <td className="p-2 border border-[#D9D9D9] text-center h-8">
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
                      <tr className="h-8">
                        <td colSpan={12} className="p-2 text-center text-gray-500 h-8">
                          감가상각 데이터가 없습니다. 감가상각 점검을 실행해주세요.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* 전표 점검 섹션 - voucherData가 있을 때만 표시 */}
              {voucherData && (
              <div className="w-full pt-4 mt-19 border-t border-[#D9D9D9]">
                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-[15px] leading-[140%] text-[#1E1E1E] font-semibold font-['Pretendard']">전표 점검</h3>
                      <p className="text-xs leading-[140%] text-[#767676] font-['Pretendard']">생성된 전표를 확인하고 저장해주세요.</p>
                    </div>
                    <button
                      className="flex flex-row justify-center items-center py-2 px-3 gap-2 h-7 bg-[#2C2C2C] cursor-pointer"
                      onClick={handleDepreciationSave}
                      disabled={loading}
                    >
                      <span className="text-xs leading-[100%] text-[#F5F5F5] font-medium font-['Pretendard']">
                        {loading ? '저장중...' : '저장하기'}
                      </span>
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
                    {editableVoucherData ? (
                      <>
                        {editableVoucherData.transactions?.map((transaction, index) => (
                          <tr key={index} className="h-8">
                            <td className="p-2 border border-[#D9D9D9] text-center h-8">{formatDate(editableVoucherData.voucher.date)}</td>
                            {transaction.debitCredit ? (
                              <>
                                <td className="p-2 border border-[#D9D9D9] text-center h-8">
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
                                <td className="p-2 border border-[#D9D9D9] text-center h-8">
                                  <input 
                                    type="number" 
                                    className="w-full text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                    value={transaction.amount}
                                    onChange={(e) => {
                                      handleTransactionChange(index, 'amount', parseInt(e.target.value) || 0);
                                    }}
                                  />
                                </td>
                                <td className="p-2 border border-[#D9D9D9] text-center h-8">
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
                                <td className="p-2 border border-[#D9D9D9] text-center h-8">-</td>
                                <td className="p-2 border border-[#D9D9D9] text-center h-8">-</td>
                                <td className="p-2 border border-[#D9D9D9] text-center h-8">-</td>
                              </>
                            ) : (
                              <>
                                <td className="p-2 border border-[#D9D9D9] text-center h-8">-</td>
                                <td className="p-2 border border-[#D9D9D9] text-center h-8">-</td>
                                <td className="p-2 border border-[#D9D9D9] text-center h-8">-</td>
                                <td className="p-2 border border-[#D9D9D9] text-center h-8">
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
                                <td className="p-2 border border-[#D9D9D9] text-center h-8">
                                  <input 
                                    type="number" 
                                    className="w-full text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                    value={transaction.amount}
                                    onChange={(e) => {
                                      handleTransactionChange(index, 'amount', parseInt(e.target.value) || 0);
                                    }}
                                  />
                                </td>
                                <td className="p-2 border border-[#D9D9D9] text-center h-8">
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
                            <td className="p-2 border border-[#D9D9D9] text-center h-8">
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
                        <tr className="h-8">
                          <td className="p-2 border border-[#D9D9D9] text-center h-8 font-medium bg-[#F5F5F5]">소계</td>
                          <td className="p-2 border border-[#D9D9D9] text-center h-8 text-[#B3B3B3]">-</td>
                          <td className="p-2 border border-[#D9D9D9] text-center h-8">
                            {editableVoucherData.transactions
                              ?.filter(t => t.debitCredit)
                              .reduce((sum, t) => sum + t.amount, 0)
                              .toLocaleString()}
                          </td>
                          <td className="p-2 border border-[#D9D9D9] text-center h-8 text-[#B3B3B3]">-</td>
                          <td className="p-2 border border-[#D9D9D9] text-center h-8 text-[#B3B3B3]">-</td>
                          <td className="p-2 border border-[#D9D9D9] text-center h-8">
                            {editableVoucherData.transactions
                              ?.filter(t => !t.debitCredit)
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
                          결산반영을 실행하면 전표가 생성됩니다.
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
                <div className="text-[#757575]">감가상각 데이터가 없습니다.</div>
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
