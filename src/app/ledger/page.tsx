'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Button from '@/components/Button';
import PrintButton from '@/components/PrintButton';
import AutocompleteInput from '@/components/AutocompleteInput';
import ExcelJS from 'exceljs';
import { getJournalInputPartners, getJournalInputAccounts, type PartnerItem, type UserAccount } from '@/services/financial';

type dataType = 'ACCOUNT' | 'ACCOUNTS' | 'ACCOUNT_PARTNER' | 'PARTNER';

interface LedgerRow {
  date: string;
  debit: number;
  credit: number;
  balance: number;
  partnerName?: string;
  description?: string;
  note?: string;
  voucherId?: number;
  transactionId?: number;
  accountCode?: string;
  accountName?: string;
}

interface Account {
  code: string;
  name: string;
}

interface Partner {
  id: string;
  name: string;
}

interface LedgerAccount {
  account: Account;
  openingBalance: number;
  rows: LedgerRow[];
}

interface LedgerPartner {
  partner: Partner;
  accounts: LedgerAccount[];
}

interface LedgerFilters {
  startDate: string;
  endDate: string;
  accountCode?: string;
  partnerId?: string;
  minAmount?: number;
  maxAmount?: number;
}

export default function LedgerPage() {
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

  const [filters, setFilters] = useState<LedgerFilters>(() => {
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
  const [, setLoading] = useState(false);
  const [ledgerType, setLedgerType] = useState<dataType>('ACCOUNTS');
  const [ledgerData, setLedgerData] = useState<LedgerAccount[] | LedgerPartner[]>([]);
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

  // 모든 거래처를 하나의 배열로 통합
  const allPartners = useMemo(() => [
    ...partners.companies,
    ...partners.cards,
    ...partners.bankAccounts
  ], [partners]);

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

  /** 원장 조회 */
  const fetchLedger = useCallback(async () => {
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

      const url = `https://api.eosxai.com/api/ledger?${params.toString()}`;
      const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
      const data = await res.json();
      console.log('원장 API 응답:', data);
      console.log('data.type:', data.type);
      console.log('data.accounts:', data.accounts);
      
      if (!!data) {
        setLedgerType(data.type || 'ACCOUNTS');
        
        // API 응답 구조에 따라 데이터 처리
        if (data.accounts && Array.isArray(data.accounts)) {
          // 전체 조회 또는 여러 계정 조회 시
          console.log('accounts 배열 길이:', data.accounts.length);
          setLedgerData(data.accounts);
        } else if (data.rows && Array.isArray(data.rows)) {
          // 단일 계정 조회 시 (data.rows가 직접 있는 경우)
          console.log('단일 계정 rows 길이:', data.rows.length);
          setLedgerData([{
            account: data.account || { code: '', name: '' },
            openingBalance: data.openingBalance || 0,
            rows: data.rows
          }]);
        } else {
          console.warn('예상하지 못한 API 응답 구조:', data);
          setLedgerData([]);
        }
      } else {
        setLedgerData([]);
      }

    } catch (err) {
      console.error('원장 조회 에러:', err);
    } finally {
      setLoading(false);
      setHasSearched(true);
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

    // 헤더를 ledgerType에 따라 동적으로 생성
    const headers = ['일자'];
    if (ledgerType === 'ACCOUNTS' || ledgerType === 'PARTNER') {
      headers.push('계정과목');
    }
    headers.push('차변금액', '대변금액', '잔액');
    if (ledgerType === 'ACCOUNTS' || ledgerType === 'ACCOUNT') {
      headers.push('거래처');
    }
    headers.push('적요');

    // 데이터 준비
    const tableData = (Array.isArray(ledgerData) ? ledgerData : []).flatMap((account: LedgerAccount | LedgerPartner) => {
      const rows = 'rows' in account ? account.rows : [];
      const accountInfo = 'account' in account ? account.account : null;
      
      return rows ? rows.map((row: LedgerRow) => {
        const rowData = [formatDate(row.date)];
        if (ledgerType === 'ACCOUNTS' || ledgerType === 'PARTNER') {
          rowData.push(row.accountName || accountInfo?.name || '');
        }
        rowData.push(
          row.debit.toString(),
          row.credit.toString(),
          row.balance.toString()
        );
        if (ledgerType === 'ACCOUNTS' || ledgerType === 'ACCOUNT') {
          rowData.push(row.partnerName || '');
        }
        rowData.push(row.description || '');
        return rowData;
      }) : [];
    });

    // ExcelJS 워크북 생성
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('원장');

    // 1행: 타이틀 "원장"
    const titleRange = `A1:${String.fromCharCode(64 + headers.length)}1`;
    worksheet.mergeCells(titleRange);
    const titleCell = worksheet.getCell('A1');
    titleCell.value = '원장';
    titleCell.font = { size: 14 };
    titleCell.alignment = { horizontal: 'center', vertical: 'middle' };
    
    // 2행: 빈 줄

    // 3행: 헤더
    const headerRow = worksheet.getRow(3);
    headerRow.values = headers;
    headerRow.font = { bold: true };
    headerRow.eachCell((cell) => {
      cell.border = {
        top: { style: 'thin', color: { argb: 'FF000000' } },
        left: { style: 'thin', color: { argb: 'FF000000' } },
        bottom: { style: 'thin', color: { argb: 'FF000000' } },
        right: { style: 'thin', color: { argb: 'FF000000' } }
      };
      cell.alignment = { horizontal: 'center', vertical: 'middle' };
    });

    // 4행부터: 데이터
    tableData.forEach((rowData, index) => {
      const row = worksheet.getRow(4 + index);
      row.values = rowData;
      row.eachCell((cell, colNumber) => {
        cell.border = {
          top: { style: 'thin', color: { argb: 'FF000000' } },
          left: { style: 'thin', color: { argb: 'FF000000' } },
          bottom: { style: 'thin', color: { argb: 'FF000000' } },
          right: { style: 'thin', color: { argb: 'FF000000' } }
        };
        // 숫자 열(차변금액, 대변금액, 잔액)은 오른쪽 정렬
        const isNumberColumn = headers[colNumber - 1] === '차변금액' || 
                               headers[colNumber - 1] === '대변금액' || 
                               headers[colNumber - 1] === '잔액';
        if (isNumberColumn) {
          cell.alignment = { horizontal: 'right', vertical: 'middle' };
        } else {
          cell.alignment = { horizontal: 'left', vertical: 'middle' };
        }
      });
    });

    // 컬럼 너비 설정
    worksheet.getColumn(1).width = 10;  // 일자
    for (let i = 2; i <= headers.length; i++) {
      worksheet.getColumn(i).width = 16;  // 나머지 컬럼
    }

    // Excel 파일 다운로드
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `원장_${filters.startDate}_${filters.endDate}.xlsx`;
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
    fetchLedger();
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
                    <h2 className="text-[15px] leading-[140%] font-semibold text-[#1E1E1E]">계정원장</h2>
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
                  targetSelector="#ledger-table"
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
                <AutocompleteInput
                  value={filters.accountCode || ''}
                  onChange={(value) => setFilters(prev => ({ ...prev, accountCode: value }))}
                  items={accounts}
                  getItemId={(item) => String(item.code)}
                  getItemLabel={(item) => item.name}
                  placeholder="선택하기"
                />
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
                  items={allPartners}
                  getItemId={(item) => String(item.id)}
                  getItemLabel={(item) => item.name}
                  placeholder="선택하기"
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

        {/* 원장 테이블 - 조회 후 표시 */}
        {hasSearched && (
          <div id="ledger-table" className="bg-white">
            <table className="w-full text-sm text-[#757575]">
              <thead>
                <tr>
                  <th className="text-xs bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium text-[#757575] w-[90px]">일자</th>
                  {(ledgerType === 'ACCOUNTS' || ledgerType === 'PARTNER') && (
                    <th className="text-xs bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium text-[#757575]">계정과목</th>
                  )}
                  <th className="text-xs bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium text-[#757575]">차변금액</th>
                  <th className="text-xs bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium text-[#757575]">대변금액</th>
                  <th className="text-xs bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium text-[#757575]">잔액</th>
                  {(ledgerType === 'ACCOUNTS' || ledgerType === 'ACCOUNT') && (
                    <th className="text-xs bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium text-[#757575]">거래처</th>
                  )}
                  <th className="text-xs bg-[#F5F5F5] p-2 border border-[#D9D9D9] font-medium text-[#757575]">적요</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(ledgerData) && ledgerData.length > 0 && (
                  ledgerData.flatMap((account: LedgerAccount | LedgerPartner, accountIndex: number) => {
                    // API 응답 구조에 따라 rows 추출
                    const rows = 'rows' in account ? account.rows : [];
                    const accountInfo = 'account' in account ? account.account : null;
                    
                    if (!rows || rows.length === 0) {
                      console.log('rows가 비어있습니다:', account);
                      return (                  <tr>
                        <td 
                          colSpan={
                            1 + // 일자
                            ((ledgerType === 'ACCOUNTS' || ledgerType === 'PARTNER') ? 1 : 0) + // 계정과목
                            3 + // 차변금액, 대변금액, 잔액
                            ((ledgerType === 'ACCOUNTS' || ledgerType === 'ACCOUNT') ? 1 : 0) + // 거래처
                            1 // 적요
                          }
                          className="p-2 text-xs border border-[#D9D9D9] text-center text-gray-500"
                        >
                          조회된 내역이 없습니다.
                        </td>
                      </tr>)
                    }
                    
                    return rows.map((row: LedgerRow, rowIndex: number) => (
                      <tr 
                        key={`${accountIndex}-${rowIndex}`}
                      >
                        <td className="p-2 text-xs border border-[#D9D9D9] text-center">
                          {row.date ? new Date(row.date).toLocaleDateString('ko-KR', {
                            year: '2-digit',
                            month: '2-digit',
                            day: '2-digit'
                          }).replace(/\./g, '').replace(/\s/g, '') : '-'}
                        </td>
                        {(ledgerType === 'ACCOUNTS' || ledgerType === 'PARTNER') && (
                          <td className="p-2 text-xs border border-[#D9D9D9]">
                            {row.accountName || accountInfo?.name || '-'}
                          </td>
                        )}
                        <td className="p-2 text-xs border border-[#D9D9D9] text-right">{row.debit.toLocaleString()}</td>
                        <td className="p-2 text-xs border border-[#D9D9D9] text-right">{row.credit.toLocaleString()}</td>
                        <td className="p-2 text-xs border border-[#D9D9D9] text-right">{row.balance.toLocaleString()}원</td>
                        {(ledgerType === 'ACCOUNTS' || ledgerType === 'ACCOUNT') && (
                          <td className="p-2 text-xs border border-[#D9D9D9]">{row.partnerName || '-'}</td>
                        )}
                        <td className="p-2 text-xs border border-[#D9D9D9]">{row.description || '-'}</td>
                      </tr>
                    ));
                  })
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
