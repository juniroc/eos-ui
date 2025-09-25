'use client';

import React, { useState } from 'react';
import { EditablePeriodAccrualItem, PeriodAccrualResponse } from './page';

// 타입 정의
interface PeriodAccrualItem {
  accountCode: string;
  accountName: string;
  endingBalance: number;
  addAmount: number;
  actualBalance: number;
  memo: string;
}

// 전표 관련 타입 정의
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
  data: PeriodAccrualResponse | null;
  loading: boolean;
  editableItems: EditablePeriodAccrualItem[];
  onItemChange: (id: string, field: keyof EditablePeriodAccrualItem, value: string | number | boolean) => void;
  onApply: (data: PeriodAccrualResponse) => void;
  closingDate: string;
  onClosingDateChange: (date: string) => void;
  onDirectCheck: (date: string) => void;
}

const PeriodAccrualModal: React.FC<PeriodAccrualModalProps> = ({
  isOpen,
  onClose,
  data,
  loading,
  // editableItems, // 현재 사용하지 않음
  // onItemChange, // 현재 사용하지 않음
  // onApply, // 현재 사용하지 않음
  closingDate,
  onClosingDateChange,
  onDirectCheck,
}) => {
  const [showJournalTable, setShowJournalTable] = useState(false);
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);
  
  if (!isOpen) return null;



  const displayData = data || {
    rows: [],
    period: {
      start: '',
      end: '',
    },
    key: '',
    status: '',
  };



  // 결산반영 버튼 클릭 시 전표 생성
  const handleGenerateJournal = async () => {
    const entries = await handleSaveJournal();
    if (!entries) {  
      return;
    }

    setShowJournalTable(true);
  };

  // 전표 저장 함수
  const handleSaveJournal = async () => {
    try {
      // 임의의 전표값 생성부탁
      const dummyData: JournalEntry[] = [
        {
          id: '1',
          date: '2024-01-01',
          debit: { accountCode: '1000', accountName: '차변', amount: 100000, memo: '전표 저장' },
          credit: { accountCode: '2000', accountName: '대변', amount: 100000, memo: '전표 저장' },
          description: '기간귀속 결산반영'
        }];
      setJournalEntries(dummyData);

      return dummyData;

      // const token = localStorage.getItem('accessToken');
      // if (!token) {
      //   alert('로그인이 필요합니다.');
      //   return;
      // }


      // const response = await fetch('https://api.eosxai.com/api/closing-check/apply', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${token}`,
      //   },
      //   body: JSON.stringify({ 
      //     rows: data?.rows || [],
      //     closingDate: closingDate,
      //     key: 'period_accrual',
      //   }),
      // });

      // if (!response.ok) {
      //   const errorData = await response.json();

      //   throw new Error(errorData.error || '전표 조회 실패');
      // }

      // const result = await response.json();
      // console.log('전표 조회 결과:', result);
      // // 전표값 저장
      // return result;

    } catch (error) {
      console.error('전표 저장 에러:', error);
      alert(error instanceof Error ? error.message : '전표 저장 중 문제가 발생했습니다.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white shadow-xl max-w-[1240px] w-full mx-4 max-h-[800px] overflow-hidden">
        {/* 모달 헤더 */}
        <div className="flex justify-between items-center px-3 py-3 border-b border-[#D9D9D9] h-[41px]">
          {/* 브레드크럼 */}
          <div className="flex items-center gap-[2px] flex-1">
            <span className="text-xs text-[#B3B3B3]">기초정보</span>
            <svg className="w-4 h-4 text-[#B3B3B3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-xs text-[#B3B3B3]">AI결산점검</span>
            <svg className="w-4 h-4 text-[#B3B3B3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-xs font-semibold text-[#1E1E1E]">기간귀속</span>
          </div>
          
          <button
            onClick={onClose}
            className="w-4 h-4 text-[#1E1E1E] hover:text-gray-700"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 모달 내용 */}
        <div className="p-4 overflow-y-auto max-h-[calc(800px-41px)]">
          {/* 제목 섹션 */}
          <div className="mb-4">
            <div className="flex justify-between items-end mb-4">
              <div>
                <div className="mb-1">
                  <h2 className="text-base font-semibold text-[#1E1E1E] mb-1">기간귀속</h2>
                  <p className="text-xs text-[#767676]">필요한 내용을 입력하고 정보를 저장하세요.</p>
                </div>
              </div>
              
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
                
                <div className="w-px h-5 bg-[#D9D9D9]"></div>
                
                {/* 직접 점검하기 버튼 */}
                <button
                  onClick={() => onDirectCheck(closingDate)}
                  disabled={loading}
                  className="flex items-center justify-center px-3 py-2 gap-2 w-[90px] h-7 bg-[#2C2C2C] text-white text-xs leading-3"
                >
                  {loading ? '처리중...' : '직접 점검하기'}
                </button>
              </div>
            </div>
          </div>

          {/* 테이블 */}
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
            {displayData.rows && displayData.rows.length > 0 ? (
              displayData.rows.map((item, index) => (
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
                      className="w-full text-xs text-[#757575] bg-transparent border-none outline-none"
                      defaultValue={item.endingBalance.toLocaleString()}
                    />
                    <span className="text-xs text-[#757575] ml-1">원</span>
                  </div>
                  <div className="flex-1 h-8 flex items-center px-2 bg-white border-r border-[#D9D9D9]">
                    <input 
                      type="text" 
                      className="w-full text-xs text-[#757575] bg-transparent border-none outline-none"
                      defaultValue={item.addAmount.toLocaleString()}
                    />
                    <span className="text-xs text-[#757575] ml-1">원</span>
                  </div>
                  <div className="flex-1 h-8 flex items-center px-2 bg-white border-r border-[#D9D9D9]">
                    <input 
                      type="text" 
                      className="w-full text-xs text-[#757575] bg-transparent border-none outline-none"
                      defaultValue={item.endingBalance.toLocaleString() + item.addAmount.toLocaleString()}
                    />
                    <span className="text-xs text-[#757575] ml-1">원</span>
                  </div>
                  <div className="flex-1 h-8 flex items-center px-2 bg-white">
                    <input 
                      type="text" 
                      className="w-full text-xs text-[#757575] bg-transparent border-none outline-none"
                      defaultValue={item.memo}
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
                  {displayData.rows.reduce((sum, item) => sum + item.endingBalance, 0).toLocaleString()}
                </span>
                <span className="text-xs text-[#757575] ml-1">원</span>
              </div>
              <div className="flex-1 h-8 flex items-center px-2 border-r border-[#D9D9D9]">
                <span className="text-xs font-medium text-[#757575] flex-1 text-right">
                  {displayData.rows.reduce((sum, item) => sum + item.addAmount, 0).toLocaleString()}
                </span>
                <span className="text-xs text-[#757575] ml-1">원</span>
              </div>
              <div className="flex-1 h-8 flex items-center px-2 border-r border-[#D9D9D9]">
                <span className="text-xs font-medium text-[#757575] flex-1 text-right">
                  {displayData.rows.reduce((sum, item) => sum + item.endingBalance + item.addAmount, 0).toLocaleString()}
                </span>
                <span className="text-xs text-[#757575] ml-1">원</span>
              </div>
              <div className="flex-1 h-8 flex items-center px-2">
                <span className="text-xs text-[#757575]"></span>
              </div>
            </div>
          </div>

          {/* 버튼 영역 */}
          <div className="flex justify-end gap-2 mt-4">
            <button className="flex items-center justify-center px-4 py-2 h-8 bg-white border border-[#D9D9D9] text-[#757575] text-xs">
              인쇄
            </button>
            <button 
              onClick={handleGenerateJournal}
              className="flex items-center justify-center px-4 py-2 h-8 bg-[#2C2C2C] text-white text-xs"
            >
              결산반영
            </button>
          </div>

          {/* 전표 테이블 */}
          {showJournalTable && (
            <div className="mt-4 border-t border-[#D9D9D9]">
              <div className="pt-4">
                {/* 전표 제목 */}
                <div className="mb-4 flex justify-between items-end">
                  <div>
                    <h3 className="text-base font-semibold text-[#1E1E1E] mb-1">전표</h3>
                    <p className="text-xs text-[#767676]">필요한 내용을 입력하고 정보를 저장하세요.</p>
                  </div>
                  <button 
                    onClick={handleSaveJournal}
                    className="flex items-center justify-center px-3 py-2 h-7 bg-[#2C2C2C] text-white text-xs"
                  >
                    저장
                  </button>
                </div>

                {/* 전표 테이블 헤더 */}
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
                  {journalEntries.map((entry, index) => (
                    <div key={entry.id} className="flex border-b border-[#D9D9D9] last:border-b-0">
                      <div className="w-[100px] min-w-[100px] h-8 flex items-center justify-center px-2 bg-white border-r border-[#D9D9D9]">
                        <span className="text-xs text-[#757575]">{String(index + 1).padStart(3, '0')}</span>
                      </div>
                      <div className="flex-1 h-8 flex border-r border-[#D9D9D9]">
                        <div className="flex-1 flex items-center px-2 bg-white border-r border-[#D9D9D9]">
                          <span className="text-xs text-[#757575]">{entry.debit.accountName}</span>
                        </div>
                        <div className="flex-1 flex items-center px-2 bg-white border-r border-[#D9D9D9]">
                          <span className="text-xs text-[#757575] flex-1 text-right">{entry.debit.amount.toLocaleString()}</span>
                          <span className="text-xs text-[#757575] ml-1">원</span>
                        </div>
                        <div className="flex-1 flex items-center px-2 bg-white">
                          <span className="text-xs text-[#757575]">{entry.debit.memo}</span>
                        </div>
                      </div>
                      <div className="flex-1 h-8 flex">
                        <div className="flex-1 flex items-center px-2 bg-white border-r border-[#D9D9D9]">
                          <span className="text-xs text-[#757575]">{entry.credit.accountName}</span>
                        </div>
                        <div className="flex-1 flex items-center px-2 bg-white border-r border-[#D9D9D9]">
                          <span className="text-xs text-[#757575] flex-1 text-right">{entry.credit.amount.toLocaleString()}</span>
                          <span className="text-xs text-[#757575] ml-1">원</span>
                        </div>
                        <div className="flex-1 flex items-center px-2 bg-white">
                          <span className="text-xs text-[#757575]">{entry.credit.memo}</span>
                        </div>
                      </div>
                      <div className="flex-1 h-8 flex items-center px-2 bg-white border-l border-[#D9D9D9]">
                        <span className="text-xs text-[#757575]">{entry.description}</span>
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
                          {journalEntries.reduce((sum, entry) => sum + entry.debit.amount, 0).toLocaleString()}
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
                          {journalEntries.reduce((sum, entry) => sum + entry.credit.amount, 0).toLocaleString()}
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
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PeriodAccrualModal;
