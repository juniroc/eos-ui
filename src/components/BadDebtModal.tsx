'use client';

import { useState, useEffect } from 'react';
import { checkBadDebt, applyBadDebt } from '@/services/api';
import Image from 'next/image';
import ToastMessage from './ToastMessage';

// 대손상각 관련 타입
interface BadDebtItem {
  accountCode: string;
  accountName: string;
  partnerId?: string | null;
  partnerName?: string | null;
  endingBalance: number;
  rate: number;
  amount: number;
  reason?: string;
}

interface BadDebtResponse {
  key: string;
  status: string;
  rows: BadDebtItem[];
  meta: {
    receivableCodes: string[];
  };
}

interface EditableBadDebtItem extends BadDebtItem {
  id: string;
  isEditing?: boolean;
}

// API에서 요구하는 BadDebtRow 타입
interface BadDebtRow {
  accountCode: string;
  amount: number;
  partnerId?: string | null;
  reason?: string;
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

interface BadDebtModalProps {
  isOpen: boolean;
  onClose: () => void;
  closingDate: string;
  onStatusUpdate: (status: 'DONE') => void;
}

export default function BadDebtModal({ isOpen, onClose, closingDate, onStatusUpdate }: BadDebtModalProps) {
  const [badDebtData, setBadDebtData] = useState<BadDebtResponse | null>(null);
  const [badDebtVoucherData, setBadDebtVoucherData] = useState<VoucherResponse | null>(null);
  const [badDebtLoading, setBadDebtLoading] = useState(false);
  const [editableBadDebtItems, setEditableBadDebtItems] = useState<EditableBadDebtItem[]>([]);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  // 팝업이 열릴 때 대손상각 점검 API 호출
  useEffect(() => {
    if (isOpen && closingDate) {
      handleBadDebtCheck();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, closingDate]);

  /** 대손상각 점검 */
  const handleBadDebtCheck = async () => {
    try {
      setBadDebtLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      console.log('대손상각 점검 API 요청:', {
        closingDate: closingDate
      });

      const data: BadDebtResponse = await checkBadDebt(closingDate, accessToken) as BadDebtResponse;
      setBadDebtData(data);
      
      // 편집 가능한 형태로 변환
      const editableItems: EditableBadDebtItem[] = data.rows.map((item, index) => ({
        ...item,
        partnerId: item.partnerId || '',
        partnerName: item.partnerName || '',
        id: `${item.accountCode}-${item.partnerId || 'unknown'}-${index}`,
        isEditing: false
      }));
      setEditableBadDebtItems(editableItems);
      
    } catch (error) {
      console.error('대손상각 점검 API 호출 오류:', error);
      alert(error instanceof Error ? error.message : '대손상각 점검 중 오류가 발생했습니다.');
    } finally {
      setBadDebtLoading(false);
    }
  };

  /** 대손상각 결산 반영 */
  const handleBadDebtApply = async () => {
    try {
      setBadDebtLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      // API에서 요구하는 형태로 데이터 변환
      const rows: BadDebtRow[] = editableBadDebtItems.map(item => {
        const row: BadDebtRow = {
          accountCode: item.accountCode,
          amount: item.amount,
          reason: item.reason
        };
        // partnerId가 있는 경우에만 추가
        if (item.partnerId) {
          row.partnerId = item.partnerId;
        }
        return row;
      });

      const data: VoucherResponse = await applyBadDebt({
        closingDate: closingDate,
        rows: rows
      }, accessToken) as VoucherResponse;
      setBadDebtVoucherData(data);

      setToastMessage('대손상각의 결산반영이 완료되었습니다.');
      setShowToast(true);
      
    } catch (error) {
      console.error('대손상각 결산 반영 API 호출 오류:', error);
      alert(error instanceof Error ? error.message : '대손상각 결산 반영 중 오류가 발생했습니다.');
    } finally {
      setBadDebtLoading(false);
    }
  };

  /** 대손상각 전표 저장 */
  const handleBadDebtSave = async () => {
    // TODO: 저장 기능 구현
    
    setToastMessage('대손상각의 전표 저장이 완료되었습니다.');
    setShowToast(true);

    // 상태 업데이트
    onStatusUpdate('DONE');
  };

  /** 대손상각 아이템 변경 핸들러 */
  const handleBadDebtItemChange = (id: string, field: keyof EditableBadDebtItem, value: string | number | boolean) => {
    setEditableBadDebtItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-50 p-5">
      <div className="relative w-full h-full bg-white flex flex-col pb-5">
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
              <span className="text-xs leading-[140%] text-[#1E1E1E] font-semibold font-['Pretendard']">대손상각</span>
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
                    <span className="text-[15px] leading-[140%] text-[#1E1E1E] font-semibold font-['Pretendard']">대손상각</span>
                  </div>
                </div>
                <span className="text-xs leading-[140%] text-[#767676] font-['Pretendard']">
                  최종 실사 확인된 재고자산액과 장부상 재고액을 조정하여 원가를 계산합니다.<br/>
                  제조업과 상품의 품목별 단가, 원가율 등의 관리를 하고자 하는 회사는 원가관리 메뉴를 활용하여 대손상각작업을 진행하세요.
                </span>
              </div>
              
              {/* 버튼 그룹 */}
              <div className="flex flex-row justify-end items-center gap-2 w-[143px] h-7">
                <div className="flex flex-row items-start w-[66px] h-7">
                  <button
                    className="flex flex-row justify-center items-center py-2 px-3 gap-2 w-[66px] h-7 bg-[#F3F3F3] hover:bg-gray-200"
                    onClick={() => window.print()}
                  >
                    <span className="text-xs leading-[100%] text-[#1E1E1E] font-medium font-['Pretendard']">인쇄하기</span>
                  </button>
                </div>
                <div className="flex flex-row items-start w-[69px] h-7">
                  <button
                    className="flex flex-row justify-center items-center py-2 px-3 gap-2 w-[69px] h-7 bg-[#2C2C2C] hover:bg-[#444444]"
                    onClick={handleBadDebtApply}
                    disabled={badDebtLoading}
                  >
                    <span className="text-xs leading-[100%] text-[#F5F5F5] font-medium font-['Pretendard']">
                      {badDebtLoading ? '처리중...' : '결산 반영'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* 대손상각 테이블 섹션 */}
          <div className="flex flex-col items-start w-full ">
            {badDebtLoading ? (
              <div className="flex items-center justify-center w-full h-full">
                <div className="text-[#757575]">대손상각 데이터를 불러오는 중...</div>
              </div>
            ) : badDebtData ? (
              <>
                {/* 대손상각 테이블 */}
                <div className="w-full">
                  <table className="w-full border-collapse border border-[#D9D9D9] text-xs text-[#757575]">
                    <thead>
                      <tr>
                        <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium">계정과목</th>
                        <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium">거래처</th>
                        <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium">기말잔액</th>
                        <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium">대손상각액</th>
                        <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium">대손사유</th>
                        <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium">비율</th>
                      </tr>
                    </thead>
                    <tbody>
                      {editableBadDebtItems.length > 0 ? (
                        editableBadDebtItems.map((item) => (
                          <tr key={item.id}>
                            <td className="p-2 border border-[#D9D9D9] text-center">{item.accountName}</td>
                            <td className="p-2 border border-[#D9D9D9] text-center">{item.partnerName}</td>
                            <td className="p-2 border border-[#D9D9D9] text-center">
                              <input 
                                type="text" 
                                className="w-full px-2 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                value={item.endingBalance.toLocaleString()}
                                onChange={(e) => handleBadDebtItemChange(item.id, 'endingBalance', parseFloat(e.target.value.replace(/,/g, '')) || 0)}
                              />
                            </td>
                            <td className="p-2 border border-[#D9D9D9] text-center">
                              <input 
                                type="text" 
                                className="w-full px-2 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                value={item.amount.toLocaleString()}
                                onChange={(e) => handleBadDebtItemChange(item.id, 'amount', parseFloat(e.target.value.replace(/,/g, '')) || 0)}
                              />
                            </td>
                            <td className="p-2 border border-[#D9D9D9] text-center">
                              <select 
                                className="w-full text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                value={item.reason || '세법상 인정액'}
                                onChange={(e) => handleBadDebtItemChange(item.id, 'reason', e.target.value)}
                              >
                                <option value="세법상 인정액">세법상 인정액</option>
                                <option value="기타">기타</option>
                              </select>
                            </td>
                            <td className="p-2 border border-[#D9D9D9] text-center">
                              <input 
                                type="text" 
                                className="w-full px-2 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                value={`${item.rate}%`}
                                onChange={(e) => handleBadDebtItemChange(item.id, 'rate', parseFloat(e.target.value.replace('%', '')) || 0)}
                              />
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={6} className="p-8 text-center text-gray-500">
                            대손상각 데이터가 없습니다. 대손상각 점검을 실행해주세요.
                          </td>
                        </tr>
                      )}
                      {/* 합계 행 */}
                      {editableBadDebtItems.length > 0 && (
                        <tr className="bg-[#F5F5F5]">
                          <td className="p-2 border border-[#D9D9D9] text-center font-medium">합계</td>
                          <td className="p-2 border border-[#D9D9D9] text-center font-medium">-</td>
                          <td className="p-2 border border-[#D9D9D9] text-center font-medium">
                            {editableBadDebtItems.reduce((sum, item) => sum + item.endingBalance, 0).toLocaleString()}
                          </td>
                          <td className="p-2 border border-[#D9D9D9] text-center font-medium">
                            {editableBadDebtItems.reduce((sum, item) => sum + item.amount, 0).toLocaleString()}
                          </td>
                          <td className="p-2 border border-[#D9D9D9] text-center font-medium">-</td>
                          <td className="p-2 border border-[#D9D9D9] text-center font-medium">-</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* 전표 점검 섹션 - badDebtVoucherData가 있을 때만 표시 */}
                {badDebtVoucherData && (
                <div className="w-full pt-4 mt-19 border-t border-[#D9D9D9]">
                  <div className="mb-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-[15px] leading-[140%] text-[#1E1E1E] font-semibold font-['Pretendard']">전표 점검</h3>
                        <p className="text-xs leading-[140%] text-[#767676] font-['Pretendard']">생성된 전표를 확인하고 저장해주세요.</p>
                      </div>
                      <button
                        className="flex flex-row justify-center items-center py-2 px-3 gap-2 h-7 bg-[#2C2C2C] hover:bg-[#444444]"
                        onClick={handleBadDebtSave}
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
                      {badDebtVoucherData && badDebtVoucherData.transactions?.length > 0 ? (
                        <>
                          {badDebtVoucherData.transactions.map((transaction, index) => (
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
                              {badDebtVoucherData.transactions
                                .filter(t => t.debitCredit === 'DEBIT')
                                .reduce((sum, t) => sum + t.amount, 0)
                                .toLocaleString()}
                            </td>
                            <td className="p-2 border border-[#D9D9D9] text-center h-8 text-[#B3B3B3]">-</td>
                            <td className="p-2 border border-[#D9D9D9] text-center h-8 text-[#B3B3B3]">-</td>
                            <td className="p-2 border border-[#D9D9D9] text-center h-8">
                              {badDebtVoucherData.transactions
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
                <div className="text-[#757575]">대손상각 데이터가 없습니다.</div>
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
