'use client';

import { useEffect, useState, useCallback, useMemo, useRef, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Button from '@/components/Button';
import { 
  fetchJournalData, 
  batchSaveVouchers,
  saveVoucher, 
  type Transaction, 
  type Voucher, 
  type JournalFilters 
} from '@/services/financial';
import ToastMessage from '@/components/ToastMessage';

function JournalPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const voucherIds = useMemo(() => searchParams.get('voucherIds')?.split(',') || [], [searchParams]);
  const startDateInputRef = useRef<HTMLInputElement>(null);
  const endDateInputRef = useRef<HTMLInputElement>(null);

  // 기본 날짜 계산 함수
  const getDefaultDates = () => {
    // 한국 시간대로 현재 날짜 가져오기
    const today = new Date();
    const koreaTime = new Date(today.getTime() + (9 * 60 * 60 * 1000)); // UTC+9
    
    const currentYear = koreaTime.getFullYear();
    const currentMonth = koreaTime.getMonth(); // 0-based (0=1월, 11=12월)
    
    // 전월 1일 계산
    let startYear = currentYear;
    let startMonth = currentMonth - 1; // 이전 달
    
    // 1월인 경우 작년 12월로 조정
    if (startMonth < 0) {
      startMonth = 11;
      startYear = currentYear - 1;
    }
    
    const startDate = new Date(startYear, startMonth, 1);
    const endDate = new Date(koreaTime.getFullYear(), koreaTime.getMonth(), koreaTime.getDate());
    
    // YYYY-MM-DD 형식으로 변환
    const formatDate = (date: Date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };
    
    return {
      startDate: formatDate(startDate),
      endDate: formatDate(endDate)
    };
  };

  const { token, isAuthenticated, loading: authLoading } = useAuth();
  const [vouchers, setVouchers] = useState<Voucher[]>([]);
  const [loading, setLoading] = useState({ isLoading: false, message: '' });
  const [filters, setFilters] = useState<JournalFilters>(() => {
    const defaultDates = getDefaultDates();
    return {
      startDate: defaultDates.startDate,
      endDate: defaultDates.endDate,
      accountCode: '',
      partnerId: '',
      minAmount: undefined,
      maxAmount: undefined,
    };
  });
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, router]);

  /** 전표 조회 */
  const fetchJournal = useCallback(async () => {
    if (!token) return;

    try {
      setLoading({ isLoading: true, message: '전표를 조회하고 있습니다...' });
      const data = await fetchJournalData(token, filters, voucherIds);
      
      if (data.vouchers.length === 0) {
        alert('조회된 전표가 없습니다.');
      }
      
      console.log('포맷된 전표 데이터:', data.vouchers);
      setVouchers(data.vouchers);
    } catch (err) {
      console.error('전표 조회 에러:', err);
      alert('전표 조회에 실패했습니다: ' + (err instanceof Error ? err.message : '알 수 없는 오류'));
    } finally {
      setLoading({ isLoading: false, message: '' });
    }
  }, [token, filters, voucherIds]);

  /** 개별 전표 저장 */
  const handleSaveVoucher = async (voucher: Voucher) => {
    if (!token) {
      alert('로그인이 필요합니다.');
      return;
    }

    try {
      const data = await saveVoucher(token, voucher);

      if (data.success) {
        setToastMessage(`전표가 저장되었습니다.`);
        setShowToast(true);
      } else {
        alert('저장 실패: ' + (data.message || '알 수 없는 오류'));
      }
    } catch (err) {
      console.error('전표 저장 에러:', err);
      alert('저장 실패: ' + (err instanceof Error ? err.message : '알 수 없는 오류'));
    } finally {
      setLoading({ isLoading: false, message: '' });
    }
  };

  /** 일괄 저장 */
  const handleBatchSave = async () => {
    if (!token) {
      alert('로그인이 필요합니다.');
      return;
    }
    
    if (vouchers.length === 0) {
      alert('저장할 전표가 없습니다.');
      return;
    }

    try {
      setLoading({ isLoading: true, message: '전표를 저장하고 있습니다...' });
      console.log('저장할 데이터:', vouchers);
      const data = await batchSaveVouchers(token, vouchers);
      console.log('저장 응답:', data);

      if (data.success) {
        setToastMessage(`전표가 일괄로 저장되었습니다.`);
        setShowToast(true);
        // 저장 후 리스팅 함수 다시 호출하여 서버 데이터로 업데이트
        fetchJournal();
      } else {
        alert('저장 실패: ' + (data.message || '알 수 없는 오류'));
      }
    } catch (err) {
      console.error('저장 에러:', err);
      alert('저장 실패: ' + (err instanceof Error ? err.message : '알 수 없는 오류'));
    } finally {
      setLoading({ isLoading: false, message: '' });
    }
  };

  /** 조회하기 */
  const handleSearch = () => {
    if (!filters.startDate || !filters.endDate) {
      alert('조회기간을 입력해주세요.');
      return;
    }
    if (filters.startDate > filters.endDate) {
      alert('시작일은 종료일보다 이전이어야 합니다.');
      return;
    }
    fetchJournal();
  };

  useEffect(() => {
    if (voucherIds.length > 0) {
      fetchJournal();
    }
  }, [fetchJournal, voucherIds.length]);

  // 로딩/인증 처리
  if (authLoading) {
    return <div className="p-8 text-center">로딩 중...</div>;
  }
  if (!isAuthenticated) return null;

  return (
    <div className="p-4">
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-start gap-4 self-stretch">
            <div className="flex flex-row justify-between items-end gap-4 self-stretch">
              <div className="flex flex-col items-start w-64">
                <div className="flex flex-col items-start py-1.5 px-0 pb-0.5 rounded-lg">
                  <div className="flex flex-row items-start">
                    <h2 className="text-[15px] leading-[140%] font-semibold text-[#1E1E1E]">전표/수정</h2>
                  </div>
                  <p className="text-[12px] leading-[140%] text-[#767676]">필요한 내용을 입력하고 정보를 저장하세요.</p>
                </div>
              </div>
              <div className="flex flex-row justify-end items-center gap-2 w-41">
                <Button
                  variant="primary"
                  onClick={handleSearch}
                  className="flex flex-row justify-center items-center gap-2"
                  style={{
                    paddingTop: '8px',
                    paddingBottom: '8px',
                    paddingLeft: '12px',
                    paddingRight: '12px',
                    fontSize: '12px',
                    lineHeight: '100%',
                    fontWeight: '500',
                    minWidth: 'auto',
                    height: 'auto'
                  }}
                >
                  조회하기
                </Button>
                <Button
                  variant="primary"
                  onClick={handleBatchSave}
                  className="flex flex-row justify-center items-center gap-2"
                  style={{
                    paddingTop: '8px',
                    paddingBottom: '8px',
                    paddingLeft: '12px',
                    paddingRight: '12px',
                    fontSize: '12px',
                    lineHeight: '100%',
                    fontWeight: '500',
                    minWidth: 'auto',
                    height: 'auto'
                  }}
                >
                  일괄 저장하기
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* 회계장부 필터 */}
        <div className="flex flex-row items-stretch border border-[#D9D9D9] min-w-0 overflow-x-auto">
          {/* 조회일(필수) */}
          <div className="flex flex-row items-stretch flex-1 min-w-[310px]">
            <div className="flex flex-row justify-center items-center py-2 px-1 gap-1 w-[80px] md:w-[100px] bg-[#F5F5F5] border-r border-[#D9D9D9] shrink-0">
              <span className="text-[11px] md:text-[12px] leading-[100%] font-medium text-[#757575] text-center">조회기간(필수)</span>
            </div>
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <div className="flex flex-row items-center py-1 px-2 gap-1 bg-white h-full">
                <input
                  ref={startDateInputRef}
                  type="date"
                  value={filters.startDate}
                  onChange={(e) => setFilters(prev => ({ ...prev, startDate: e.target.value }))}
                  className="w-[90px] text-[11px] leading-[100%] font-medium text-[#B3B3B3] bg-transparent border-none outline-none"
                  placeholder="시작일"
                />
                <span className="text-[11px] text-[#757575] shrink-0">-</span>
                <input
                  ref={endDateInputRef}
                  type="date"
                  value={filters.endDate}
                  onChange={(e) => setFilters(prev => ({ ...prev, endDate: e.target.value }))}
                  className="w-[90px] text-[11px] leading-[100%] font-medium text-[#B3B3B3] bg-transparent border-none outline-none"
                  placeholder="종료일"
                />
              </div>
            </div>
          </div>

          {/* 계정과목 */}
          <div className="flex flex-row items-stretch flex-1 min-w-[150px] border-l border-[#D9D9D9]">
            <div className="flex flex-row justify-center items-center py-2 px-1 gap-1 w-[60px] md:w-[80px] bg-[#F5F5F5] border-r border-[#D9D9D9] shrink-0">
              <span className="text-[11px] md:text-[12px] leading-[100%] font-medium text-[#757575] text-center">계정과목</span>
            </div>
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <div className="flex flex-row items-center py-2 px-2 gap-2 bg-white h-full">
                <select
                  value={filters.accountCode || ''}
                  onChange={(e) => setFilters(prev => ({ ...prev, accountCode: e.target.value }))}
                  className="flex-1 text-[12px] leading-[100%] font-medium text-[#B3B3B3] bg-transparent border-none outline-none min-w-0"
                >
                  <option value="">선택하기</option>
                  <option value="현금">현금</option>
                  <option value="당좌예금">당좌예금</option>
                  <option value="예금">예금</option>
                </select>
              </div>
            </div>
          </div>

          {/* 거래처 */}
          <div className="flex flex-row items-stretch flex-1 min-w-[120px] border-l border-[#D9D9D9]">
            <div className="flex flex-row justify-center items-center py-2 px-1 gap-1 w-[50px] md:w-[60px] bg-[#F5F5F5] border-r border-[#D9D9D9] shrink-0">
              <span className="text-[11px] md:text-[12px] leading-[100%] font-medium text-[#757575] text-center">거래처</span>
            </div>
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <div className="flex flex-row items-center py-2 px-2 gap-2 bg-white h-full">
                <select
                  value={filters.partnerId || ''}
                  onChange={(e) => setFilters(prev => ({ ...prev, partnerId: e.target.value }))}
                  className="flex-1 text-[12px] leading-[100%] font-medium text-[#B3B3B3] bg-transparent border-none outline-none min-w-0"
                >
                  <option value="">선택하기</option>
                  {/* 나중에 거래처 옵션들을 추가할 예정 */}
                </select>
              </div>
            </div>
          </div>

          {/* 최소금액 */}
          <div className="flex flex-row items-stretch flex-1 min-w-[130px] border-l border-[#D9D9D9]">
            <div className="flex flex-row justify-center items-center py-2 px-1 gap-1 w-[60px] md:w-[70px] bg-[#F5F5F5] border-r border-[#D9D9D9] shrink-0">
              <span className="text-[11px] md:text-[12px] leading-[100%] font-medium text-[#757575] text-center">최소금액</span>
            </div>
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <div className="flex flex-row items-center py-2 px-2 bg-white h-full">
                <input
                  type="number"
                  placeholder="입력하기"
                  value={filters.minAmount || ''}
                  onChange={(e) => setFilters(prev => ({ ...prev, minAmount: e.target.value ? Number(e.target.value) : undefined }))}
                  className="flex-1 text-[12px] leading-[100%] font-medium text-[#B3B3B3] bg-transparent border-none outline-none min-w-0"
                />
              </div>
            </div>
          </div>

          {/* 최대금액 */}
          <div className="flex flex-row items-stretch flex-1 min-w-[130px] border-l border-[#D9D9D9]">
            <div className="flex flex-row justify-center items-center py-2 px-1 gap-1 w-[60px] md:w-[70px] bg-[#F5F5F5] border-r border-[#D9D9D9] shrink-0">
              <span className="text-[11px] md:text-[12px] leading-[100%] font-medium text-[#757575] text-center">최대금액</span>
            </div>
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <div className="flex flex-row items-center py-2 px-2 bg-white h-full">
                <input
                  type="number"
                  placeholder="입력하기"
                  value={filters.maxAmount || ''}
                  onChange={(e) => setFilters(prev => ({ ...prev, maxAmount: e.target.value ? Number(e.target.value) : undefined }))}
                  className="flex-1 text-[12px] leading-[100%] font-medium text-[#B3B3B3] bg-transparent border-none outline-none min-w-0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 전표 리스트 */}
        {loading.isLoading ? (
          <div className="p-8 text-center text-xs">{loading.message}</div>
        ) : vouchers.length > 0 && (
          vouchers.map((voucher, voucherIndex) => (
            <div key={voucher.id}>
              {/* 전표 테이블 */}
              <table className="w-full border border-[#D9D9D9] text-xs text-[#757575] table-fixed">
                <thead>
                  <tr>
                    <td rowSpan={2} className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] w-[120px] font-medium text-center">일자</td>
                    <td className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium" colSpan={3}>
                      차변
                    </td>
                    <td className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-center font-medium" colSpan={3}>
                      대변
                    </td>
                    <td rowSpan={2} className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] w-3/7 font-medium text-center">적요</td>
                  </tr>
                  <tr>
                    {/* <td className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] w-[100px]"></td> */}
                      <td className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium min-w-[120px]">계정과목</td>
                      <td className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium min-w-[120px]">금액</td>
                      <td className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium min-w-[100px]">거래처</td>
                      <td className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium min-w-[120px]">계정과목</td>
                      <td className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium min-w-[120px]">금액</td>
                      <td className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium min-w-[100px]">거래처</td>
                    {/* <td className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] w-3/10 font-medium">적요</td> */}
                  </tr>
                </thead>
                <tbody>
                  {/* 전표 데이터 행들 */}
                  {voucher.transactions.map((transaction, index) => (
                    <tr key={`${voucher.id}-${index}`}>
                        <td className="p-2 border border-[#D9D9D9] text-center w-[120px]">
                          <input
                            type="date"
                            className="w-full focus:outline-none text-center"
                            value={voucher.date || ''}
                            onChange={(e) => {
                              const newVouchers = [...vouchers];
                              newVouchers[voucherIndex].date = e.target.value;
                              setVouchers(newVouchers);
                            }}
                          />
                      </td>
                      {/* 차변 */}
                        <td className="p-2 border border-[#D9D9D9] min-w-[120px]">
                        {transaction.debitCredit === true ? (
                          <input
                            className="w-full focus:outline-none"
                            placeholder="입력하기"
                            value={transaction.accountName || ''}
                            onChange={(e) => {
                              const newVouchers = [...vouchers];
                              newVouchers[voucherIndex].transactions[index].accountName = e.target.value;
                              setVouchers(newVouchers);
                            }}
                          />
                        ) : (
                          <div className="w-full"></div>
                        )}
                      </td>
                        <td className="p-2 border border-[#D9D9D9] min-w-[120px]">
                        {transaction.debitCredit === true ? (
                          <div className="flex items-center w-full overflow-hidden">
                            <input
                              className="flex-1 focus:outline-none text-right min-w-0"
                              placeholder="0"
                              value={transaction.amount ? transaction.amount.toLocaleString() : ''}
                              onChange={(e) => {
                                const value = e.target.value.replace(/,/g, '');
                                const newVouchers = [...vouchers];
                                newVouchers[voucherIndex].transactions[index].amount = Number(value) || 0;
                                setVouchers(newVouchers);
                              }}
                            />
                            <span className="text-gray-400 text-xs ml-1 shrink-0">원</span>
                          </div>
                        ) : (
                          <div className="w-full"></div>
                        )}
                      </td>
                        <td className="p-2 border border-[#D9D9D9] min-w-[100px]">
                        {transaction.debitCredit === true ? (
                          <input
                            className="w-full focus:outline-none"
                            placeholder="입력하기"
                            value={transaction.partnerName || ''}
                            onChange={(e) => {
                              const newVouchers = [...vouchers];
                              newVouchers[voucherIndex].transactions[index].partnerName = e.target.value;
                              setVouchers(newVouchers);
                            }}
                          />
                        ) : (
                          <div className="w-full"></div>
                        )}
                      </td>
                      {/* 대변 */}
                        <td className="p-2 border border-[#D9D9D9] min-w-[120px]">
                        {transaction.debitCredit === false ? (
                          <input
                            className="w-full focus:outline-none"
                            placeholder="입력하기"
                            value={transaction.accountName || ''}
                            onChange={(e) => {
                              const newVouchers = [...vouchers];
                              newVouchers[voucherIndex].transactions[index].accountName = e.target.value;
                              setVouchers(newVouchers);
                            }}
                          />
                        ) : (
                          <div className="w-full"></div>
                        )}
                      </td>
                        <td className="p-2 border border-[#D9D9D9] min-w-[120px]">
                        {transaction.debitCredit === false ? (
                          <div className="flex items-center w-full overflow-hidden">
                            <input
                              className="flex-1 focus:outline-none text-right min-w-0"
                              placeholder="0"
                              value={transaction.amount ? transaction.amount.toLocaleString() : ''}
                              onChange={(e) => {
                                const value = e.target.value.replace(/,/g, '');
                                const newVouchers = [...vouchers];
                                newVouchers[voucherIndex].transactions[index].amount = Number(value) || 0;
                                setVouchers(newVouchers);
                              }}
                            />
                            <span className="text-gray-400 text-xs ml-1 shrink-0">원</span>
                          </div>
                        ) : (
                          <div className="w-full"></div>
                        )}
                      </td>
                        <td className="p-2 border border-[#D9D9D9] min-w-[100px]">
                        {transaction.debitCredit === false ? (
                          <input
                            className="w-full focus:outline-none"
                            placeholder="입력하기"
                            value={transaction.partnerName || ''}
                            onChange={(e) => {
                              const newVouchers = [...vouchers];
                              newVouchers[voucherIndex].transactions[index].partnerName = e.target.value;
                              setVouchers(newVouchers);
                            }}
                          />
                        ) : (
                          <div className="w-full"></div>
                        )}
                      </td>
                      {/* 적요 */}
                        <td className="p-2 border border-[#D9D9D9] w-3/10 min-w-[150px]">
                        {index === 0 ? (
                          <input
                            className="w-full focus:outline-none"
                            placeholder="입력하기"
                            value={transaction.note || ''}
                            onChange={(e) => {
                              const newVouchers = [...vouchers];
                              newVouchers[voucherIndex].transactions[index].note = e.target.value;
                              setVouchers(newVouchers);
                            }}
                          />
                        ) : (
                          <div className="w-full"></div>
                        )}
                      </td>
                    </tr>
                  ))}
                  
                  {/* 소계 행 */}
                  <tr>
                    <td className="p-2 border border-[#D9D9D9] text-center bg-gray-50 w-[120px]">소계</td>
                    <td className="p-2 border border-[#D9D9D9] bg-gray-50 min-w-[120px]">
                      <input
                        className="w-full focus:outline-none"
                        placeholder="입력하기"
                        defaultValue=""
                        readOnly
                      />
                    </td>
                    <td className="p-2 border border-[#D9D9D9] bg-gray-50 min-w-[120px]">
                      <div className="flex items-center w-full overflow-hidden">
                        <input
                          className="flex-1 focus:outline-none text-right min-w-0"
                          placeholder=""
                          value={voucher.transactions
                            .filter((t: Transaction) => t.debitCredit === true)
                            .reduce((sum: number, t: Transaction) => sum + (t.amount || 0), 0)
                            .toLocaleString()}
                          readOnly
                        />
                        <span className="text-gray-400 text-xs ml-1 shrink-0">원</span>
                      </div>
                    </td>
                    <td className="p-2 border border-[#D9D9D9] bg-gray-50 min-w-[100px]">
                      <input
                        className="w-full focus:outline-none"
                        placeholder="입력하기"
                        defaultValue=""
                        readOnly
                      />
                    </td>
                    <td className="p-2 border border-[#D9D9D9] bg-gray-50 min-w-[120px]">
                      <input
                        className="w-full focus:outline-none"
                        placeholder="입력하기"
                        defaultValue=""
                        readOnly
                      />
                    </td>
                    <td className="p-2 border border-[#D9D9D9] bg-gray-50 min-w-[120px]">
                      <div className="flex items-center w-full overflow-hidden">
                        <input
                          className="flex-1 focus:outline-none text-right min-w-0"
                          placeholder=""
                          value={voucher.transactions
                            .filter((t: Transaction) => t.debitCredit === false)
                            .reduce((sum: number, t: Transaction) => sum + (t.amount || 0), 0)
                            .toLocaleString()}
                          readOnly
                        />
                        <span className="text-gray-400 text-xs ml-1 shrink-0">원</span>
                      </div>
                    </td>
                    <td className="p-2 border border-[#D9D9D9] bg-gray-50 min-w-[100px]">
                      <input
                        className="w-full focus:outline-none"
                        placeholder="입력하기"
                        defaultValue=""
                        readOnly
                      />
                    </td>
                    <td className="p-2 border border-[#D9D9D9] bg-gray-50 w-3/10 min-w-[150px]">
                      <input
                        className="w-full focus:outline-none"
                        placeholder="입력하기"
                        defaultValue=""
                        readOnly
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              
              {/* 개별 저장 버튼 */}
              <div className="flex justify-end mt-2">
                <Button
                  variant="primary"
                  onClick={() => handleSaveVoucher(voucher)}
                  disabled={loading.isLoading}
                  style={{
                    padding: '6px 12px',
                    fontSize: '11px',
                    lineHeight: '100%',
                    fontWeight: '500',
                  }}
                >
                  저장하기
                </Button>
              </div>
              
            </div>
          ))
        )}
      </div>
      <ToastMessage message={toastMessage} isVisible={showToast} onHide={() => setShowToast(false)} />
    </div>
  );
}

export default function JournalPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">페이지를 불러오고 있습니다...</div>}>
      <JournalPageContent />
    </Suspense>
  );
}
