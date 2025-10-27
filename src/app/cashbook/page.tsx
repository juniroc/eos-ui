'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Button from '@/components/Button';
import PrintButton from '@/components/PrintButton';
import AutocompleteInput from '@/components/AutocompleteInput';
import ExcelJS from 'exceljs';
import { getJournalInputPartners, getJournalInputAccounts, type PartnerItem, type UserAccount } from '@/services/financial';

interface CashTransaction {
  id: string;
  date: string;
  deposit?: number;
  withdrawal?: number;
  balance: number;
  accountName: string;
  partnerName?: string;
  note?: string;
  voucherId?: string;
}

interface CashbookFilters {
  startDate: string;
  endDate: string;
  accountCode?: string;
  partnerId?: string;
  minAmount?: number;
  maxAmount?: number;
}

export default function CashbookPage() {
  const router = useRouter();
  const { token, isAuthenticated, loading: authLoading } = useAuth();

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

  const [filters, setFilters] = useState<CashbookFilters>(() => {
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
  const [loading, setLoading] = useState(false);
  const [cashTransactions, setCashTransactions] = useState<CashTransaction[]>([]);
  const [depositTransactions, setDepositTransactions] = useState<Array<{ accountCode: string; transactions: CashTransaction[] }>>([]);
  const [hasSearched, setHasSearched] = useState(false);
  
  // 계정과목 및 거래처 옵션
  const [accounts, setAccounts] = useState<UserAccount[]>([]);
  const [partners, setPartners] = useState<{
    companies: PartnerItem[];
    cards: PartnerItem[];
    bankAccounts: PartnerItem[];
  }>({
    companies: [],
    cards: [],
    bankAccounts: []
  });

  // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, router]);

  // 페이지 첫 진입 시 계정과목 및 거래처 조회
  useEffect(() => {
    const fetchInitialData = async () => {
      if (!token) return;

      try {
        // 계정과목 조회
        const accountsData = await getJournalInputAccounts(token);
        setAccounts(accountsData || []);

        // 거래처 조회
        const partnersData = await getJournalInputPartners(token);
        setPartners({
          companies: partnersData.companies || [],
          cards: partnersData.cards || [],
          bankAccounts: partnersData.bankAccounts || []
        });
      } catch (error) {
        console.error('초기 데이터 조회 에러:', error);
      }
    };

    if (token) {
      fetchInitialData();
    }
  }, [token]);

  /** 현금출납장 조회 */
  const fetchCashbook = useCallback(async () => {
    if (!token) return;

    try {
      setLoading(true);
      const params = new URLSearchParams();

      // 조회기간을 startDate, endDate 로 설정
      if (filters.startDate) params.append('startDate', filters.startDate);
      if (filters.endDate) params.append('endDate', filters.endDate);

      if (filters.accountCode) params.append('accountCode', filters.accountCode);
      if (filters.partnerId) params.append('partnerId', filters.partnerId);
      if (filters.minAmount) params.append('minAmount', filters.minAmount.toString());
      if (filters.maxAmount) params.append('maxAmount', filters.maxAmount.toString());

      const url = `https://api.eosxai.com/api/cashbook?${params.toString()}`;
      
      // 요청 파라미터 확인 로그
      console.log('현금출납장 조회 요청:', {
        url,
        filters: {
          startDate: filters.startDate,
          endDate: filters.endDate,
          accountCode: filters.accountCode,
          partnerId: filters.partnerId,
          minAmount: filters.minAmount,
          maxAmount: filters.maxAmount
        }
      });
      
      const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
      const data = await res.json();
      
      // API 응답 구조에 맞게 데이터 파싱
      let cashData: CashTransaction[] = [];
      const depositDataGroups: Array<{ accountCode: string; transactions: CashTransaction[] }> = [];
      
      // API 응답 구조 처리: results 배열 또는 직접 응답
      if (data && data.results && Array.isArray(data.results)) {
        // 전체 조회 시: data.results 배열
        data.results.forEach((item: { accountCode: number; result?: { type?: string; rows?: unknown[]; accounts?: unknown[] } }) => {
          // accountCode 필터링 (문자열로 비교)
          const accountCodeStr = item.accountCode.toString();
          if (filters.accountCode && filters.accountCode !== accountCodeStr) {
            return;
          }
          
          if (item.result && item.result.type === 'CASH' && item.result.rows) {
            const newCashData = (item.result.rows as { transactionId: string; date: string; inAmount?: number; outAmount?: number; balance: number; accountName: string; partnerName?: string; note?: string; voucherId?: string }[]).map((row) => ({
              id: row.transactionId,
              date: row.date,
              deposit: row.inAmount || 0,
              withdrawal: row.outAmount || 0,
              balance: row.balance,
              accountName: row.accountName,
              partnerName: row.partnerName,
              note: row.note,
              voucherId: row.voucherId
            }));
            cashData = [...cashData, ...newCashData];
          } else if (item.result && item.result.type === 'DEPOSIT' && item.result.accounts) {
            const depositTransactionsForAccount: CashTransaction[] = [];
            
            (item.result.accounts as { partnerId: string; partnerName: string; bankName: string; accountNumber: string; openingBalance: number; rows?: unknown[] }[]).forEach((account) => {
              // rows가 있으면 거래 내역 추가
              if (account.rows && account.rows.length > 0) {
                const accountData = (account.rows as { transactionId: string; date: string; inAmount?: number; outAmount?: number; balance: number; accountName: string; partnerName?: string; note?: string; voucherId?: string }[]).map((row) => ({
                  id: row.transactionId,
                  date: row.date,
                  deposit: row.inAmount || 0,
                  withdrawal: row.outAmount || 0,
                  balance: row.balance,
                  accountName: row.accountName,
                  partnerName: row.partnerName,
                  note: row.note,
                  voucherId: row.voucherId
                }));
                depositTransactionsForAccount.push(...accountData);
              } else {
                // rows가 없어도 계좌 정보는 표시 (openingBalance 기준)
                const accountInfo = {
                  id: account.partnerId,
                  date: '',
                  deposit: 0,
                  withdrawal: 0,
                  balance: account.openingBalance,
                  accountName: account.bankName,
                  partnerName: account.partnerName,
                  note: `계좌번호: ${account.accountNumber}`,
                  voucherId: undefined
                };
                depositTransactionsForAccount.push(accountInfo);
              }
            });
            
            depositDataGroups.push({
              accountCode: accountCodeStr,
              transactions: depositTransactionsForAccount
            });
          }
        });
      } else if (data && data.type) {
        // 특정 계정코드 조회 시: 직접 응답
        if (data.type === 'CASH' && data.rows) {
          cashData = (data.rows as { transactionId: string; date: string; inAmount?: number; outAmount?: number; balance: number; accountName: string; partnerName?: string; note?: string; voucherId?: string }[]).map((row) => ({
            id: row.transactionId,
            date: row.date,
            deposit: row.inAmount || 0,
            withdrawal: row.outAmount || 0,
            balance: row.balance,
            accountName: row.accountName,
            partnerName: row.partnerName,
            note: row.note,
            voucherId: row.voucherId
          }));
        } else if (data.type === 'DEPOSIT' && data.accounts) {
          const depositTransactionsForAccount: CashTransaction[] = [];
          
          (data.accounts as { partnerId: string; partnerName: string; bankName: string; accountNumber: string; openingBalance: number; rows?: unknown[] }[]).forEach((account) => {
            // rows가 있으면 거래 내역 추가
            if (account.rows && account.rows.length > 0) {
              const accountData = (account.rows as { transactionId: string; date: string; inAmount?: number; outAmount?: number; balance: number; accountName: string; partnerName?: string; note?: string; voucherId?: string }[]).map((row) => ({
                id: row.transactionId,
                date: row.date,
                deposit: row.inAmount || 0,
                withdrawal: row.outAmount || 0,
                balance: row.balance,
                accountName: row.accountName,
                partnerName: row.partnerName,
                note: row.note,
                voucherId: row.voucherId
              }));
              depositTransactionsForAccount.push(...accountData);
            } else {
              // rows가 없어도 계좌 정보는 표시 (openingBalance 기준)
              const accountInfo = {
                id: account.partnerId,
                date: '',
                deposit: 0,
                withdrawal: 0,
                balance: account.openingBalance,
                accountName: account.bankName,
                partnerName: account.partnerName,
                note: `계좌번호: ${account.accountNumber}`,
                voucherId: undefined
              };
              depositTransactionsForAccount.push(accountInfo);
            }
          });
          
          // 특정 계정코드 조회 시 accountCode는 URL 파라미터에서 가져온 값 사용
          depositDataGroups.push({
            accountCode: filters.accountCode || 'DEPOSIT',
            transactions: depositTransactionsForAccount
          });
        }
      }
      
      // 중복 제거 후 데이터 설정
      setCashTransactions(cashData);
      setDepositTransactions(depositDataGroups);
      setHasSearched(true);
    } catch (err) {
      console.error('현금출납장 조회 에러:', err);
    } finally {
      setLoading(false);
    }
  }, [token, filters]);

  /** 다운로드 */
  const handleDownload = async () => {
    // 날짜를 yymmdd 형식으로 변환
    const formatDate = (dateStr: string) => {
      if (!dateStr) return '';
      const date = new Date(dateStr);
      const yy = String(date.getFullYear()).slice(2);
      const mm = String(date.getMonth() + 1).padStart(2, '0');
      const dd = String(date.getDate()).padStart(2, '0');
      return `${yy}${mm}${dd}`;
    };

    // ExcelJS 워크북 생성
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('현금출납장');

    let currentRow = 1;

    // 1행: 타이틀 "현금출납장"
    worksheet.mergeCells(`A${currentRow}:H${currentRow}`);
    const titleCell = worksheet.getCell(`A${currentRow}`);
    titleCell.value = '현금출납장';
    titleCell.font = { size: 14 };
    titleCell.alignment = { horizontal: 'center', vertical: 'middle' };
    currentRow++;

    // 2행: 빈 줄
    currentRow++;

    // 현금 테이블
    if (cashTransactions.length > 0) {
      // 부제목: 현금
      worksheet.mergeCells(`A${currentRow}:H${currentRow}`);
      const cashSubtitleCell = worksheet.getCell(`A${currentRow}`);
      cashSubtitleCell.value = '현금';
      cashSubtitleCell.font = { size: 11 };
      cashSubtitleCell.alignment = { horizontal: 'left', vertical: 'middle' };
      currentRow++;

      // 헤더
      const cashHeaderRow = worksheet.getRow(currentRow);
      cashHeaderRow.values = ['일자', '입금', '출금', '잔액', '계정과목', '거래처', '적요'];
      cashHeaderRow.font = { bold: true };
      cashHeaderRow.eachCell((cell) => {
        cell.border = {
          top: { style: 'thin', color: { argb: 'FF000000' } },
          left: { style: 'thin', color: { argb: 'FF000000' } },
          bottom: { style: 'thin', color: { argb: 'FF000000' } },
          right: { style: 'thin', color: { argb: 'FF000000' } }
        };
        cell.alignment = { horizontal: 'center', vertical: 'middle' };
      });
      currentRow++;

      // 데이터
      cashTransactions.forEach((tx) => {
        const row = worksheet.getRow(currentRow);
        row.values = [
          formatDate(tx.date),
          tx.deposit || '',
          tx.withdrawal || '',
          tx.balance,
          tx.accountName,
          tx.partnerName || '',
          tx.note || ''
        ];
        row.eachCell((cell, colNumber) => {
          cell.border = {
            top: { style: 'thin', color: { argb: 'FF000000' } },
            left: { style: 'thin', color: { argb: 'FF000000' } },
            bottom: { style: 'thin', color: { argb: 'FF000000' } },
            right: { style: 'thin', color: { argb: 'FF000000' } }
          };
          // 숫자 컬럼(입금, 출금, 잔액)은 오른쪽 정렬
          if (colNumber >= 2 && colNumber <= 4) {
            cell.alignment = { horizontal: 'right', vertical: 'middle' };
          } else {
            cell.alignment = { horizontal: 'left', vertical: 'middle' };
          }
        });
        currentRow++;
      });

      // 현금 테이블 후 빈 줄
      currentRow++;
    }

    // 보통예금 테이블들
    depositTransactions.forEach((group, groupIndex) => {
      if (group.transactions.length > 0) {
        // 부제목: 보통예금-계좌번호
        worksheet.mergeCells(`A${currentRow}:H${currentRow}`);
        const depositSubtitleCell = worksheet.getCell(`A${currentRow}`);
        depositSubtitleCell.value = `보통예금-${group.accountCode}`;
        depositSubtitleCell.font = { size: 11 };
        depositSubtitleCell.alignment = { horizontal: 'left', vertical: 'middle' };
        currentRow++;

        // 헤더
        const depositHeaderRow = worksheet.getRow(currentRow);
        depositHeaderRow.values = ['일자', '입금', '출금', '잔액', '계정과목', '거래처', '적요'];
        depositHeaderRow.font = { bold: true };
        depositHeaderRow.eachCell((cell) => {
          cell.border = {
            top: { style: 'thin', color: { argb: 'FF000000' } },
            left: { style: 'thin', color: { argb: 'FF000000' } },
            bottom: { style: 'thin', color: { argb: 'FF000000' } },
            right: { style: 'thin', color: { argb: 'FF000000' } }
          };
          cell.alignment = { horizontal: 'center', vertical: 'middle' };
        });
        currentRow++;

        // 데이터
        group.transactions.forEach((tx) => {
          const row = worksheet.getRow(currentRow);
          row.values = [
            formatDate(tx.date),
            tx.deposit || '',
            tx.withdrawal || '',
            tx.balance,
            tx.accountName,
            tx.partnerName || '',
            tx.note || ''
          ];
          row.eachCell((cell, colNumber) => {
            cell.border = {
              top: { style: 'thin', color: { argb: 'FF000000' } },
              left: { style: 'thin', color: { argb: 'FF000000' } },
              bottom: { style: 'thin', color: { argb: 'FF000000' } },
              right: { style: 'thin', color: { argb: 'FF000000' } }
            };
            // 숫자 컬럼(입금, 출금, 잔액)은 오른쪽 정렬
            if (colNumber >= 2 && colNumber <= 4) {
              cell.alignment = { horizontal: 'right', vertical: 'middle' };
            } else {
              cell.alignment = { horizontal: 'left', vertical: 'middle' };
            }
          });
          currentRow++;
        });

        // 보통예금 테이블 후 빈 줄 (마지막 테이블이 아니면)
        if (groupIndex < depositTransactions.length - 1) {
          currentRow++;
        }
      }
    });

    // 컬럼 너비 설정
    worksheet.getColumn(1).width = 10;  // 일자
    worksheet.getColumn(2).width = 15;  // 입금
    worksheet.getColumn(3).width = 15;  // 출금
    worksheet.getColumn(4).width = 15;  // 잔액
    worksheet.getColumn(5).width = 20;  // 계정과목
    worksheet.getColumn(6).width = 20;  // 거래처
    worksheet.getColumn(7).width = 30;  // 적요

    // 불필요한 열 숨기기
    for (let i = 8; i <= 11; i++) {
      worksheet.getColumn(i).hidden = true;
    }

    // Excel 파일 다운로드
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `현금출납장_${filters.startDate}_${filters.endDate}.xlsx`;
    link.click();
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
    fetchCashbook();
  };

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
                    <h2 className="text-[15px] leading-[140%] font-semibold text-[#1E1E1E]">현금출납장</h2>
                  </div>
                  <p className="text-[12px] leading-[140%] text-[#767676]">조회기간을 선택하고 결산점검을 시작하세요.</p>
                </div>
              </div>
              <div className="flex flex-row justify-end items-center gap-2 w-41">
                <Button
                  variant="primary"
                  onClick={handleSearch}
                  className="flex flex-row justify-center items-center gap-2"
                >
                  조회하기
                </Button>
                <Button
                  variant="primary"
                  onClick={handleDownload}
                  className="flex flex-row justify-center items-center gap-2"
                >
                  다운로드
                </Button>
                <PrintButton
                  printType="element"
                  targetSelector="#cashbook-tables"
                  variant="neutral"
                  className="flex flex-row justify-center items-center gap-2"
                >
                  인쇄하기
                </PrintButton>
              </div>
            </div>
          </div>
        </div>

        {/* 회계장부 필터 */}
        <div className="flex flex-row items-stretch border border-[#D9D9D9] min-w-0 overflow-x-auto mb-4">
          {/* 조회기간(필수) */}
          <div className="flex flex-row items-stretch flex-1 min-w-[310px]">
            <div className="flex flex-row justify-center items-center py-2 px-1 gap-1 w-[80px] md:w-[100px] bg-[#F5F5F5] border-r border-[#D9D9D9] shrink-0">
              <span className="text-[11px] md:text-[12px] leading-[100%] text-xs text-[#757575] text-center">조회기간(필수)</span>
            </div>
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <div className="flex flex-row items-center py-1 px-2 gap-1 bg-white h-full">
                <input
                  type="date"
                  value={filters.startDate}
                  onChange={(e) => setFilters(prev => ({ ...prev, startDate: e.target.value }))}
                  className="w-[90px] text-[11px] leading-[100%] text-xs text-[#B3B3B3] bg-transparent border-none outline-none"
                  placeholder="시작일"
                />
                <span className="text-[11px] text-[#757575] shrink-0">-</span>
                <input
                  type="date"
                  value={filters.endDate}
                  onChange={(e) => setFilters(prev => ({ ...prev, endDate: e.target.value }))}
                  className="w-[90px] text-[11px] leading-[100%] text-xs text-[#B3B3B3] bg-transparent border-none outline-none"
                  placeholder="종료일"
                />
              </div>
            </div>
          </div>

          {/* 계정과목 */}
          <div className="flex flex-row items-stretch flex-1 min-w-[150px] border-l border-[#D9D9D9]">
            <div className="flex flex-row justify-center items-center py-2 px-1 gap-1 w-[60px] md:w-[80px] bg-[#F5F5F5] border-r border-[#D9D9D9] shrink-0">
              <span className="text-[11px] md:text-[12px] leading-[100%] text-xs text-[#757575] text-center">계정과목</span>
            </div>
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <div className="flex flex-row items-center py-2 px-2 gap-2 bg-white h-full">
                <select
                  value={filters.accountCode || ''}
                  onChange={(e) => setFilters(prev => ({ ...prev, accountCode: e.target.value }))}
                  className="flex-1 text-[12px] leading-[100%] text-xs text-[#B3B3B3] bg-transparent border-none outline-none min-w-0"
                >
                  <option value="">선택하기</option>
                  {accounts
                    .filter(account => ['11111', '11112', '11113'].includes(account.code.toString()))
                    .map((account) => (
                      <option key={account.id} value={account.code}>
                        {account.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>

          {/* 거래처 */}
          <div className="flex flex-row items-stretch flex-1 min-w-[120px] border-l border-[#D9D9D9]">
            <div className="flex flex-row justify-center items-center py-2 px-1 gap-1 w-[50px] md:w-[60px] bg-[#F5F5F5] border-r border-[#D9D9D9] shrink-0">
              <span className="text-[11px] md:text-[12px] leading-[100%] text-xs text-[#757575] text-center">거래처</span>
            </div>
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <div className="flex flex-row items-center py-2 px-2 gap-2 bg-white h-full">
                <AutocompleteInput
                  value={filters.partnerId || ''}
                  onChange={(value) => setFilters(prev => ({ ...prev, partnerId: value }))}
                  items={[...partners.companies, ...partners.cards, ...partners.bankAccounts]}
                  getItemId={(item) => item.id}
                  getItemLabel={(item) => item.name}
                  placeholder="입력하기"
                  className="flex-1 text-[12px] leading-[100%] text-xs text-[#B3B3B3] min-w-0"
                />
              </div>
            </div>
          </div>

          {/* 최소금액 */}
          <div className="flex flex-row items-stretch flex-1 min-w-[130px] border-l border-[#D9D9D9]">
            <div className="flex flex-row justify-center items-center py-2 px-1 gap-1 w-[60px] md:w-[70px] bg-[#F5F5F5] border-r border-[#D9D9D9] shrink-0">
              <span className="text-[11px] md:text-[12px] leading-[100%] text-xs text-[#757575] text-center">최소금액</span>
            </div>
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <div className="flex flex-row items-center py-2 px-2 bg-white h-full">
                <input
                  type="number"
                  placeholder="입력하기"
                  value={filters.minAmount || ''}
                  onChange={(e) => setFilters(prev => ({ ...prev, minAmount: e.target.value ? Number(e.target.value) : undefined }))}
                  className="flex-1 text-[12px] leading-[100%] text-xs text-[#B3B3B3] bg-transparent border-none outline-none min-w-0"
                />
              </div>
            </div>
          </div>

          {/* 최대금액 */}
          <div className="flex flex-row items-stretch flex-1 min-w-[130px] border-l border-[#D9D9D9]">
            <div className="flex flex-row justify-center items-center py-2 px-1 gap-1 w-[60px] md:w-[70px] bg-[#F5F5F5] border-r border-[#D9D9D9] shrink-0">
              <span className="text-[11px] md:text-[12px] leading-[100%] text-xs text-[#757575] text-center">최대금액</span>
            </div>
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <div className="flex flex-row items-center py-2 px-2 bg-white h-full">
                <input
                  type="number"
                  placeholder="입력하기"
                  value={filters.maxAmount || ''}
                  onChange={(e) => setFilters(prev => ({ ...prev, maxAmount: e.target.value ? Number(e.target.value) : undefined }))}
                  className="flex-1 text-[12px] leading-[100%] text-xs text-[#B3B3B3] bg-transparent border-none outline-none min-w-0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 현금 테이블 - 조회 후 표시 */}
        <div id="cashbook-tables">
        {hasSearched && (
           <div className="flex flex-col gap-2 mb-4">
             <h3 className="text-[13px] leading-[140%] font-semibold text-[#1E1E1E]">현금</h3>
             <table className="w-full border border-[#D9D9D9] text-sm text-[#757575] table-fixed">
               <thead>
                 <tr>
                   <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-xs text-[#757575] w-[69px]">일자</th>
                   <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-xs text-[#757575] w-[calc((100%-69px)/6)]">입금</th>
                   <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-xs text-[#757575] w-[calc((100%-69px)/6)]">출금</th>
                   <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-xs text-[#757575] w-[calc((100%-69px)/6)]">잔액</th>
                   <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-xs text-[#757575] w-[calc((100%-69px)/6)]">계정과목</th>
                   <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-xs text-[#757575] w-[calc((100%-69px)/6)]">거래처</th>
                   <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-xs text-[#757575] w-[calc((100%-69px)/6)]">적요</th>
               </tr>
             </thead>
            <tbody>
                {cashTransactions.length > 0 ? (
                  cashTransactions.map((tx, index) => (
                <tr 
                  key={`cash-${tx.id}-${index}`}
                >
                      <td className="p-2 text-xs border border-[#D9D9D9] text-center">
                        {tx.date ? new Date(tx.date).toLocaleDateString('ko-KR', {
                          year: '2-digit',
                          month: '2-digit',
                          day: '2-digit'
                        }).replace(/\./g, '').replace(/\s/g, '') : '-'}
                      </td>
                      <td className="p-2 text-xs border border-[#D9D9D9] text-right">{tx.deposit ? tx.deposit.toLocaleString() : '-'}</td>
                      <td className="p-2 text-xs border border-[#D9D9D9] text-right">{tx.withdrawal ? tx.withdrawal.toLocaleString() : '-'}</td>
                      <td className="p-2 text-xs border border-[#D9D9D9] text-right">{tx.balance.toLocaleString()}원</td>
                      <td className="p-2 text-xs border border-[#D9D9D9]">{tx.accountName}</td>
                      <td className="p-2 text-xs border border-[#D9D9D9]">{tx.partnerName || '-'}</td>
                      <td className="p-2 text-xs border border-[#D9D9D9]">{tx.note || '-'}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="p-2 text-xs border border-[#D9D9D9] text-center text-gray-500">
                      {loading ? '조회 중...' : '조회된 내역이 없습니다.'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* 보통예금 테이블 - 조회 후 표시 */}
        {hasSearched && depositTransactions.map((depositGroup, groupIndex) => (
          <div key={`deposit-group-${groupIndex}`} className="flex flex-col gap-2 mb-6">
            <h3 className="text-[13px] leading-[140%] font-semibold text-[#1E1E1E]">보통예금-계좌번호({depositGroup.accountCode})</h3>
            <table className="w-full border border-[#D9D9D9] text-sm text-[#757575] table-fixed">
              <thead>
                <tr>
                  <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-xs text-[#757575] w-[69px]">일자</th>
                  <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-xs text-[#757575] w-[calc((100%-69px)/6)]">입금</th>
                  <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-xs text-[#757575] w-[calc((100%-69px)/6)]">출금</th>
                  <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-xs text-[#757575] w-[calc((100%-69px)/6)]">잔액</th>
                  <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-xs text-[#757575] w-[calc((100%-69px)/6)]">계정과목</th>
                  <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-xs text-[#757575] w-[calc((100%-69px)/6)]">거래처</th>
                  <th className="bg-[#F5F5F5] p-2 border border-[#D9D9D9] text-xs text-[#757575] w-[calc((100%-69px)/6)]">적요</th>
                </tr>
              </thead>
              <tbody>
                {depositGroup.transactions.length > 0 ? (
                  depositGroup.transactions.map((tx, index) => (
                    <tr 
                      key={`deposit-${depositGroup.accountCode}-${tx.id}-${index}`}
                    >
                      <td className="p-2 text-xs border border-[#D9D9D9] text-center">
                        {tx.date ? new Date(tx.date).toLocaleDateString('ko-KR', {
                          year: '2-digit',
                          month: '2-digit',
                          day: '2-digit'
                        }).replace(/\./g, '').replace(/\s/g, '') : '-'}
                      </td>
                      <td className="p-2 text-xs border border-[#D9D9D9] text-right">{tx.deposit ? tx.deposit.toLocaleString() : '-'}</td>
                      <td className="p-2 text-xs border border-[#D9D9D9] text-right">{tx.withdrawal ? tx.withdrawal.toLocaleString() : '-'}</td>
                      <td className="p-2 text-xs border border-[#D9D9D9] text-right">{tx.balance.toLocaleString()}원</td>
                      <td className="p-2 text-xs border border-[#D9D9D9]">{tx.accountName}</td>
                      <td className="p-2 text-xs border border-[#D9D9D9]">{tx.partnerName || '-'}</td>
                      <td className="p-2 text-xs border border-[#D9D9D9]">{tx.note || '-'}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="p-2 text-xs border border-[#D9D9D9] text-center text-gray-500">
                      {loading ? '조회 중...' : '조회된 내역이 없습니다.'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
