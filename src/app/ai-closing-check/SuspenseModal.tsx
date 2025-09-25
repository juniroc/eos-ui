'use client';

import React, { useState, useEffect } from 'react';

// 타입 정의
interface SuspenseTransaction {
  id: string;
  accountId: string;
  accountCode: string;
  accountName: string;
  debitCredit: 'DEBIT' | 'CREDIT';
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
}

interface SuspenseModalProps {
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
  onApply: (data: SuspenseData) => void;
  closingDate: string;
  onClosingDateChange: (date: string) => void;
  onDirectCheck: (date: string) => void;
}

const SuspenseModal: React.FC<SuspenseModalProps> = ({
  isOpen,
  onClose,
  loading,
  onApply,
  closingDate,
  onClosingDateChange,
  onDirectCheck,
}) => {
  // 내부 상태로 트랜잭션 데이터 관리
  const [transactions, setTransactions] = useState<EditableSuspenseTransaction[]>([]);
  const [data, setData] = useState<SuspenseData | null>(null);

  // 컴포넌트 마운트 시 더미 데이터로 초기화
  useEffect(() => {
    // 더미 데이터 생성
    const dummyData: SuspenseData = {
      key: 'suspense_clear',
      status: 'DONE',
      vouchers: [
        {
          voucherId: 'V2024001',
          date: '2024-12-31',
          description: '가수가지급금 정리',
          transactions: [
            {
              id: 'T001',
              accountId: 'ACC001',
              accountCode: '1310',
              accountName: '가수금',
              debitCredit: 'DEBIT',
              amount: 500000,
              partnerId: 'P001',
              partnerName: '김철수',
              note: '임시 지급금 정리'
            },
            {
              id: 'T002',
              accountId: 'ACC002',
              accountCode: '2110',
              accountName: '현금',
              debitCredit: 'CREDIT',
              amount: 500000,
              partnerId: undefined,
              partnerName: undefined,
              note: '현금 출금'
            },
            {
              id: 'T003',
              accountId: 'ACC003',
              accountCode: '1320',
              accountName: '가지급금',
              debitCredit: 'CREDIT',
              amount: 300000,
              partnerId: 'P002',
              partnerName: '이영희',
              note: '임시 차입금 정리'
            },
            {
              id: 'T004',
              accountId: 'ACC004',
              accountCode: '4110',
              accountName: '급여',
              debitCredit: 'DEBIT',
              amount: 300000,
              partnerId: 'P002',
              partnerName: '이영희',
              note: '급여 지급'
            }
          ]
        }
      ],
      period: {
        start: '2024-01-01',
        end: '2024-12-31'
      }
    };

    const initialTransactions: EditableSuspenseTransaction[] = [];
    dummyData.vouchers.forEach(voucher => {
      voucher.transactions.forEach(transaction => {
        initialTransactions.push({
          ...transaction,
          isEditing: false
        });
      });
    });
    setTransactions(initialTransactions);
    setData(dummyData);
  }, []);

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
  const handleSave = () => {
    if (!data) return;
    
    // 편집된 트랜잭션을 data에 반영
    const updatedData = {
      ...data,
      vouchers: data.vouchers.map(voucher => ({
        ...voucher,
        transactions: voucher.transactions.map(transaction => {
          const editedTransaction = transactions.find(t => t.id === transaction.id);
          return editedTransaction || transaction;
        })
      }))
    };
    
    alert('가수가지급금이 저장되었습니다');
    // onApply(updatedData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="relative w-[1240px] h-[800px] bg-white flex flex-col">
        {/* 상단 헤더 */}
        <div className="flex justify-between items-center p-3 h-[41px] border-b border-[#D9D9D9]">
          {/* 브레드크럼 */}
          <div className="flex items-center gap-1 flex-1">
            <span className="text-xs text-[#B3B3B3]">AI분개</span>
            <span className="text-xs text-[#B3B3B3]">&gt;</span>
            <span className="text-xs text-[#B3B3B3]">AI결산점검</span>
            <span className="text-xs text-[#B3B3B3]">&gt;</span>
            <span className="text-xs font-semibold text-[#1E1E1E]">가수가지급금</span>
          </div>
          
          {/* X 버튼 */}
          <button
            onClick={onClose}
            className="w-4 h-4 text-[#1E1E1E] hover:text-gray-600 flex items-center justify-center"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* 메인 컨텐츠 */}
        <div className="flex-1 flex flex-col p-4 gap-4 overflow-hidden">
          {/* 타이틀 섹션 */}
          <div className="flex justify-between items-end gap-4">
            <div className="w-64">
              <div className="p-[6px_0_2px] rounded-lg">
                <h2 className="text-[15px] font-semibold text-[#1E1E1E] leading-[21px]">가수가지급금</h2>
              </div>
              <p className="text-xs text-[#767676] leading-[17px]">필요한 내용을 입력하고 정보를 저장하세요.</p>
            </div>
            
            {/* 우측 버튼들 */}
            <div className="flex items-center gap-2">
              {/* 날짜 필드 */}
              <div className="flex flex-col w-[150px] h-8 relative">
                <input
                  type="date"
                  value={closingDate}
                  onChange={(e) => onClosingDateChange(e.target.value)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex items-center p-2 gap-2 bg-white border border-[#D9D9D9] h-8 pointer-events-none">
                  <span className="text-xs text-[#B3B3B3] flex-1">{closingDate}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 6H14M5 2V4M11 2V4M3 4H13C13.5523 4 14 4.44772 14 5V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V5C2 4.44772 2.44772 4 3 4Z" 
                          stroke="#757575" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              <div className="w-px h-5 border-l border-[#D9D9D9] "></div>
              
              {/* 직접 점검하기 버튼 */}
              <button
                onClick={() => onDirectCheck(closingDate)}
                disabled={loading}
                className="flex items-center justify-center px-3 py-2 gap-2 w-[90px] h-7 bg-[#2C2C2C] text-white text-xs leading-3"
              >
                {loading ? '처리중...' : '직접 점검하기'}
              </button>
              
              {/* 저장 버튼 */}
              <button className="flex items-center justify-center gap-2 w-[90px] h-7 bg-white border text-xs leading-3"
                style={{
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                }}
                onClick={handleSave}>
                저장
              </button>
            </div>
          </div>

          {/* 전표 테이블 */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {loading ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-[#757575]">가수가지급금 데이터를 불러오는 중...</div>
              </div>
            ) : data && transactions.length > 0 ? (
              <div className="flex flex-col h-full">
                {/* 테이블 헤더 - table 구조 사용 */}
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th rowSpan={2} className="w-[100px] min-w-[100px] h-16 text-center p-2 bg-[#F5F5F5] border border-[#D9D9D9] text-xs font-medium text-[#757575]">
                        일자
                      </th>
                      <th colSpan={3} className="w-[369.33px] h-8 text-center p-2 bg-[#F5F5F5] border-t border-r border-b border-[#D9D9D9] text-xs font-medium text-[#757575]">
                        차번
                      </th>
                      <th colSpan={3} className="w-[369.33px] h-8 text-center p-2 bg-[#F5F5F5] border-t border-r border-b border-[#D9D9D9] text-xs font-medium text-[#757575]">
                        대번
                      </th>
                      <th rowSpan={2} className="w-[369.33px] h-16 text-center p-2 bg-[#F5F5F5] border border-[#D9D9D9] text-xs font-medium text-[#757575]">
                        적요
                      </th>
                    </tr>
                    <tr>
                      <th className="w-[123.11px] min-w-[100px] h-8 text-center p-2 bg-[#F5F5F5] border-l border-r border-b border-[#D9D9D9] text-xs font-medium text-[#757575]">
                        계정과목
                      </th>
                      <th className="w-[123.11px] min-w-[100px] h-8 text-center p-2 bg-[#F5F5F5] border-r border-b border-[#D9D9D9] text-xs font-medium text-[#757575]">
                        금액
                      </th>
                      <th className="w-[123.11px] min-w-[100px] h-8 text-center p-2 bg-[#F5F5F5] border-r border-b border-[#D9D9D9] text-xs font-medium text-[#757575]">
                        거래처
                      </th>
                      <th className="w-[123.11px] min-w-[100px] h-8 text-center p-2 bg-[#F5F5F5] border-r border-b border-[#D9D9D9] text-xs font-medium text-[#757575]">
                        계정과목
                      </th>
                      <th className="w-[123.11px] min-w-[100px] h-8 text-center p-2 bg-[#F5F5F5] border-r border-b border-[#D9D9D9] text-xs font-medium text-[#757575]">
                        금액
                      </th>
                      <th className="w-[123.11px] min-w-[100px] h-8 text-center p-2 bg-[#F5F5F5] border-r border-b border-[#D9D9D9] text-xs font-medium text-[#757575]">
                        거래처
                      </th>
                    </tr>
                  </thead>
                </table>

                {/* 테이블 바디 */}
                <div className="flex-1 overflow-y-auto">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex h-8">
                      {/* 일자 */}
                      <div className="w-[100px] min-w-[100px] h-8 flex items-center justify-center p-2 bg-white border-l border-r border-b border-[#D9D9D9]">
                        <span className="text-xs text-[#757575]">{data?.vouchers[0]?.date || '2024-12-31'}</span>
                      </div>
                      
                      {/* 차변 섹션 */}
                      <div className="w-[369.33px] flex">
                        {/* 차변 계정과목 */}
                        <div className="w-[123.11px] min-w-[100px] h-8 flex items-center p-2 bg-white border-r border-b border-[#D9D9D9]">
                          {transaction.debitCredit === 'DEBIT' ? (
                            <input
                              type="text"
                              value={`${getTransactionValue(transaction.id, 'accountCode')} ${getTransactionValue(transaction.id, 'accountName')}`}
                              className="w-full text-xs text-[#B3B3B3] bg-transparent outline-none"
                              placeholder="입력하기"
                              onChange={(e) => {
                                const [code, ...nameParts] = e.target.value.split(' ');
                                handleTransactionChange(transaction.id, 'accountCode', code || '');
                                handleTransactionChange(transaction.id, 'accountName', nameParts.join(' ') || '');
                              }}
                            />
                          ) : (
                            <input
                              type="text"
                              value={`${getTransactionValue(transaction.id, 'accountCode')} ${getTransactionValue(transaction.id, 'accountName')}`}
                              className="w-full text-xs text-[#B3B3B3] bg-transparent outline-none"
                              placeholder="입력하기"
                              onChange={(e) => {
                                const [code, ...nameParts] = e.target.value.split(' ');
                                handleTransactionChange(transaction.id, 'accountCode', code || '');
                                handleTransactionChange(transaction.id, 'accountName', nameParts.join(' ') || '');
                              }}
                            />
                          )}
                        </div>
                        {/* 차변 금액 */}
                        <div className="w-[123.11px] min-w-[100px] h-8 flex items-center p-2 bg-white border-r border-b border-[#D9D9D9]">
                          {transaction.debitCredit === 'DEBIT' ? (
                            <div className="w-full flex items-center">
                              <input
                                type="text"
                                value={(getTransactionValue(transaction.id, 'amount') as number || 0).toLocaleString()}
                                className="w-[calc(100%-15px)] text-xs text-[#B3B3B3] bg-transparent outline-none text-right"
                                placeholder="입력하기"
                                onChange={(e) => {
                                  const numericValue = parseInt(e.target.value.replace(/,/g, '')) || 0;
                                  handleTransactionChange(transaction.id, 'amount', numericValue);
                                }}
                              />
                              <span className="text-xs text-[#B3B3B3] w-[15px] text-left">원</span>
                            </div>
                          ) : (
                            <div className="w-full flex items-center">
                              <input
                                type="text"
                                value={(getTransactionValue(transaction.id, 'amount') as number || 0).toLocaleString()}
                                className="w-[calc(100%-15px)] text-xs text-[#B3B3B3] bg-transparent outline-none text-right"
                                placeholder="입력하기"
                                onChange={(e) => {
                                  const numericValue = parseInt(e.target.value.replace(/,/g, '')) || 0;
                                  handleTransactionChange(transaction.id, 'amount', numericValue);
                                }}
                              />
                              <span className="text-xs text-[#B3B3B3] w-[15px] text-left">원</span>
                            </div>
                          )}
                        </div>
                        {/* 차변 거래처 */}
                        <div className="w-[123.11px] min-w-[100px] h-8 flex items-center p-2 bg-white border-r border-b border-[#D9D9D9]">
                          {transaction.debitCredit === 'DEBIT' ? (
                            <input
                              type="text"
                              value={getTransactionValue(transaction.id, 'partnerName') as string || ''}
                              className="w-full text-xs text-[#B3B3B3] bg-transparent outline-none"
                              placeholder="입력하기"
                              onChange={(e) => handleTransactionChange(transaction.id, 'partnerName', e.target.value)}
                            />
                          ) : (
                            <input
                              type="text"
                              value={getTransactionValue(transaction.id, 'partnerName') as string || ''}
                              className="w-full text-xs text-[#B3B3B3] bg-transparent outline-none"
                              placeholder="입력하기"
                              onChange={(e) => handleTransactionChange(transaction.id, 'partnerName', e.target.value)}
                            />
                          )}
                        </div>
                      </div>
                      
                      {/* 대변 섹션 */}
                      <div className="w-[369.33px] flex">
                        {/* 대변 계정과목 */}
                        <div className="w-[123.11px] min-w-[100px] h-8 flex items-center p-2 bg-white border-r border-b border-[#D9D9D9]">
                          {transaction.debitCredit === 'CREDIT' ? (
                            <input
                              type="text"
                              value={`${getTransactionValue(transaction.id, 'accountCode')} ${getTransactionValue(transaction.id, 'accountName')}`}
                              className="w-full text-xs text-[#B3B3B3] bg-transparent outline-none"
                              placeholder="입력하기"
                              onChange={(e) => {
                                const [code, ...nameParts] = e.target.value.split(' ');
                                handleTransactionChange(transaction.id, 'accountCode', code || '');
                                handleTransactionChange(transaction.id, 'accountName', nameParts.join(' ') || '');
                              }}
                            />
                          ) : (
                            <input
                              type="text"
                              value={`${getTransactionValue(transaction.id, 'accountCode')} ${getTransactionValue(transaction.id, 'accountName')}`}
                              className="w-full text-xs text-[#B3B3B3] bg-transparent outline-none"
                              placeholder="입력하기"
                              onChange={(e) => {
                                const [code, ...nameParts] = e.target.value.split(' ');
                                handleTransactionChange(transaction.id, 'accountCode', code || '');
                                handleTransactionChange(transaction.id, 'accountName', nameParts.join(' ') || '');
                              }}
                            />
                          )}
                        </div>
                        {/* 대변 금액 */}
                        <div className="w-[123.11px] min-w-[100px] h-8 flex items-center p-2 bg-white border-r border-b border-[#D9D9D9]">
                          {transaction.debitCredit === 'CREDIT' ? (
                            <div className="w-full flex items-center">
                              <input
                                type="text"
                                value={(getTransactionValue(transaction.id, 'amount') as number || 0).toLocaleString()}
                                className="w-[calc(100%-15px)] text-xs text-[#B3B3B3] bg-transparent outline-none text-right"
                                placeholder="입력하기"
                                onChange={(e) => {
                                  const numericValue = parseInt(e.target.value.replace(/,/g, '')) || 0;
                                  handleTransactionChange(transaction.id, 'amount', numericValue);
                                }}
                              />
                              <span className="text-xs text-[#B3B3B3] w-[15px] text-left">원</span>
                            </div>
                          ) : (
                            <div className="w-full flex items-center">
                              <input
                                type="text"
                                value={(getTransactionValue(transaction.id, 'amount') as number || 0).toLocaleString()}
                                className="w-[calc(100%-15px)] text-xs text-[#B3B3B3] bg-transparent outline-none text-right"
                                placeholder="입력하기"
                                onChange={(e) => {
                                  const numericValue = parseInt(e.target.value.replace(/,/g, '')) || 0;
                                  handleTransactionChange(transaction.id, 'amount', numericValue);
                                }}
                              />
                              <span className="text-xs text-[#B3B3B3] w-[15px] text-left">원</span>
                            </div>
                          )}
                        </div>
                        {/* 대변 거래처 */}
                        <div className="w-[123.11px] min-w-[100px] h-8 flex items-center p-2 bg-white border-r border-b border-[#D9D9D9]">
                          {transaction.debitCredit === 'CREDIT' ? (
                            <input
                              type="text"
                              value={getTransactionValue(transaction.id, 'partnerName') as string || ''}
                              className="w-full text-xs text-[#B3B3B3] bg-transparent outline-none"
                              placeholder="입력하기"
                              onChange={(e) => handleTransactionChange(transaction.id, 'partnerName', e.target.value)}
                            />
                          ) : (
                            <input
                              type="text"
                              value={getTransactionValue(transaction.id, 'partnerName') as string || ''}
                              className="w-full text-xs text-[#B3B3B3] bg-transparent outline-none"
                              placeholder="입력하기"
                              onChange={(e) => handleTransactionChange(transaction.id, 'partnerName', e.target.value)}
                            />
                          )}
                        </div>
                      </div>
                      
                      {/* 적요 */}
                      <div className="w-[369.33px] min-w-[100px] h-8 flex items-center p-2 bg-white border-r border-b border-[#D9D9D9]">
                        <input
                          type="text"
                          value={getTransactionValue(transaction.id, 'note') as string || ''}
                          className="w-full text-xs text-[#B3B3B3] bg-transparent outline-none"
                          placeholder="입력하기"
                          onChange={(e) => handleTransactionChange(transaction.id, 'note', e.target.value)}
                        />
                      </div>
                    </div>
                  ))}
                  
                  {/* 소계 행 */}
                  <div className="flex h-8">
                    <div className="w-[100px] min-w-[100px] h-8 flex items-center justify-center p-2 bg-[#F5F5F5] border-l border-r border-b border-[#D9D9D9]">
                      <span className="text-xs font-medium text-[#757575]">소계</span>
                    </div>
                    
                    {/* 차변 소계 */}
                    <div className="w-[369.33px] flex">
                      <div className="w-[123.11px] min-w-[100px] h-8 p-2 bg-[#F5F5F5] border-r border-b border-[#D9D9D9]"></div>
                      <div className="w-[123.11px] min-w-[100px] h-8 flex items-center justify-center p-2 bg-[#F5F5F5] border-r border-b border-[#D9D9D9]">
                        <span className="text-xs text-[#757575]">
                          {transactions
                            .filter(t => t.debitCredit === 'DEBIT')
                            .reduce((sum, t) => sum + t.amount, 0)
                            .toLocaleString()}
                        </span>
                      </div>
                      <div className="w-[123.11px] min-w-[100px] h-8 p-2 bg-[#F5F5F5] border-r border-b border-[#D9D9D9]"></div>
                    </div>
                    
                    {/* 대변 소계 */}
                    <div className="w-[369.33px] flex">
                      <div className="w-[123.11px] min-w-[100px] h-8 p-2 bg-[#F5F5F5] border-r border-b border-[#D9D9D9]"></div>
                      <div className="w-[123.11px] min-w-[100px] h-8 flex items-center justify-center p-2 bg-[#F5F5F5] border-r border-b border-[#D9D9D9]">
                        <span className="text-xs text-[#757575]">
                          {transactions
                            .filter(t => t.debitCredit === 'CREDIT')
                            .reduce((sum, t) => sum + t.amount, 0)
                            .toLocaleString()}
                        </span>
                      </div>
                      <div className="w-[123.11px] min-w-[100px] h-8 p-2 bg-[#F5F5F5] border-r border-b border-[#D9D9D9]"></div>
                    </div>
                    
                    <div className="w-[369.33px] min-w-[100px] h-8 p-2 bg-[#F5F5F5] border-r border-b border-[#D9D9D9]"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-[#757575]">가수가지급금 데이터가 없습니다.</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuspenseModal;
