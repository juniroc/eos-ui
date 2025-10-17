'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import PrintButton from '@/components/PrintButton';

interface FSRow {
  label: string;
  current?: number;
  prior?: number;
  currentLeft?: number;
  currentRight?: number;
  priorLeft?: number;
  priorRight?: number;
  id?: string;
  depth?: number;
  rowType?: string;
  styles?: Record<string, unknown>;
}

interface Account {
  code: string;
  name: string;
}

interface TrialBalanceRow {
  account: string;
  debitBalance: number;
  creditBalance: number;
  debitSum: number;
  creditSum: number;
  styles?: Record<string, unknown>;
}

interface StatementMeta {
  asOfDate?: string;
  periods?: {
    current: {
      start: string;
      end: string;
    }
    prior: {
      start: string;
      end: string;
    }
  };
  terms: {
    current: number;
    prior: number;
  };
  totals?: {
    debit: number;
    credit: number;
  };
  companyName?: string;
  unit?: string;
  title?: string;
  currentPeriodLabel?: string;
  priorPeriodLabel?: string;
}

interface StatementData {
  type: string;
  meta: StatementMeta;
  rows: FSRow[] | TrialBalanceRow[];
}

type StatementType = 'balance_sheet' | 'income_statement' | 'cost_report' | 'cash_flow' | 'trial_balance' | 'retained_earnings';

const statementTypes: { key: StatementType; label: string }[] = [
  { key: 'balance_sheet', label: '재무상태표' },
  { key: 'income_statement', label: '손익계산서' },
  { key: 'cost_report', label: '원가명세서' },
  { key: 'cash_flow', label: '현금흐름표' },
  { key: 'trial_balance', label: '합계잔액시산표' },
  { key: 'retained_earnings', label: '이익잉여금처분계산서' },
];

export default function FinancialStatementsPage() {
  const router = useRouter();
  const { token, isAuthenticated, loading: authLoading } = useAuth();

  const [selectedType, setSelectedType] = useState<StatementType>('balance_sheet');
  const [date, setDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [, setLoading] = useState(false);
  const [statementData, setStatementData] = useState<StatementData | null>(null);

  const initDate = () => {
    // 한국 시간대 기준으로 오늘 날짜 설정
    const today = new Date();
    const koreaDate = new Date(today.toLocaleString("en-US", {timeZone: "Asia/Seoul"}));
    const currentYear = koreaDate.getFullYear();
    const month = String(koreaDate.getMonth() + 1).padStart(2, '0');
    const day = String(koreaDate.getDate()).padStart(2, '0');
    
    const todayString = `${currentYear}-${month}-${day}`;
    const yearStart = `${currentYear}-01-01`;

    setDate(todayString);
    setStartDate(yearStart);
    setEndDate(todayString);
  };

  // 컴포넌트 마운트 시 기본값 설정
  useEffect(() => {
    initDate();
  }, []);

  // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, router]);

  // 오늘 날짜를 기본값으로 설정
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const todayString = `${year}-${month}-${day}`;
    
    setDate(todayString);
    setStartDate(todayString);
    setEndDate(todayString);
  }, []);

  /** 재무제표 조회 */
  const fetchStatement = useCallback(async () => {
    if (!token) return;

    try {
      setLoading(true);
      const params = new URLSearchParams();

      params.append('type', selectedType);
      if (selectedType === 'balance_sheet' || selectedType === 'trial_balance') {
        if (date) params.append('date', date);
      } else {
        if (startDate) params.append('startDate', startDate);
        if (endDate) params.append('endDate', endDate);
      }

      const url = `https://api.eosxai.com/api/statements?${params.toString()}`;
      console.log('API 호출 URL:', url);

      const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
      const data = await res.json();
      console.log('API 응답 데이터:', data);
      console.log('meta 정보:', data.meta);
      console.log('periods 정보:', data.meta?.periods);
      setStatementData(data);
    } catch (err) {
      console.error('재무제표 조회 에러:', err);
    } finally {
      setLoading(false);
    }
  }, [token, selectedType, date, startDate, endDate]);

  /** 다운로드 */
  const handleDownload = () => {
    if (!statementData || !statementData.rows || !Array.isArray(statementData.rows)) return;

    let csvContent: string[][] = [];
    
    if (selectedType === 'trial_balance') {
      csvContent = [
        ['차변잔액', '차변합계', '계정과목', '대변합계', '대변잔액'],
        ...(statementData.rows as TrialBalanceRow[]).map(row => [
          row.debitBalance.toLocaleString(),
          row.debitSum.toLocaleString(),
          row.account,
          row.creditSum.toLocaleString(),
          row.creditBalance.toLocaleString(),
        ])
      ];
    } else if (selectedType === 'cash_flow') {
      csvContent = [
        ['항목', '증감액', '현금흐름'],
        ...(statementData.rows as FSRow[]).map(row => [
          row.label,
          row.currentLeft ? row.currentLeft.toLocaleString() : '',
          row.currentRight ? row.currentRight.toLocaleString() : ''
        ])
      ];
    } else {
      csvContent = [
        ['항목', '당기 좌측', '당기 우측', '전기 좌측', '전기 우측'],
        ...(statementData.rows as FSRow[]).map(row => [
          row.label,
          row.currentLeft ? row.currentLeft.toLocaleString() : (row.current ? row.current.toLocaleString() : ''),
          row.currentRight ? row.currentRight.toLocaleString() : '',
          row.priorLeft ? row.priorLeft.toLocaleString() : (row.prior ? row.prior.toLocaleString() : ''),
          row.priorRight ? row.priorRight.toLocaleString() : ''
        ])
      ];
    }

    const csvString = csvContent.map(row => row.join(',')).join('\n');
    const blob = new Blob(['\uFEFF' + csvString], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${statementTypes.find(s => s.key === selectedType)?.label}_${date || '전체'}.csv`;
    link.click();
  };


  /** 조회하기 */
  const handleSearch = () => {
    if (selectedType === 'balance_sheet' || selectedType === 'trial_balance') {
      if (!date) {
        alert('조회일자를 입력해주세요.');
        return;
      }
    } else {
      if (!startDate || !endDate) {
        alert('조회기간을 입력해주세요.');
        return;
      }
    }
    fetchStatement();
  };

  /** 날짜 포맷팅 */
  const formatDate = (dateStr: unknown) => {
    if (!dateStr) return '';
    
    // 객체인 경우 처리
    if (typeof dateStr === 'object' && dateStr !== null) {
      const dateObj = dateStr as Record<string, unknown>;
      // { year, month, day } 형태인 경우
      if (dateObj.year && dateObj.month && dateObj.day) {
        return `${dateObj.year}년 ${dateObj.month}월 ${dateObj.day}일`;
      }
      // { date } 형태인 경우
      if (dateObj.date) {
        return formatDate(dateObj.date);
      }
      // 기타 객체는 JSON으로 변환해서 로그 출력
      console.warn('날짜 객체 파싱 실패:', dateStr);
      return '날짜 정보 없음';
    }
    
    // 문자열이 아닌 경우 문자열로 변환
    const dateString = typeof dateStr === 'string' ? dateStr : String(dateStr);
    
    // YYYY-MM-DD 형식인 경우
    if (dateString.includes('-')) {
      const [year, month, day] = dateString.split('-');
      return `${year}년 ${parseInt(month)}월 ${parseInt(day)}일`;
    }
    
    // 다른 형식인 경우 Date 객체로 파싱 시도
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      console.warn('날짜 파싱 실패:', dateStr, '타입:', typeof dateStr);
      return '날짜 정보 없음';
    }
    
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  /** 텍스트를 파싱하여 번호 매김과 내용을 분리하고, 내용에 균등 간격 적용 */
  const formatLabelWithSpacing = (label: string) => {
    // 패턴: 숫자., 숫자), (숫자), 로마숫자. 등
    const prefixPattern = /^(\d+\.|[①②③④⑤⑥⑦⑧⑨⑩]+|\(\d+\)|[ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ]+\.|\d+\))\s*/;
    const match = label.match(prefixPattern);
    
    if (match) {
      const prefix = match[1]; // 번호 매김 부분
      const content = label.substring(match[0].length); // 나머지 내용
      
      // 내용 텍스트의 글자 사이에 공백 추가
      const spacedContent = content.split('').join(' ');
      
      return (
        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <span style={{ flexShrink: 0, marginRight: '0.5em' }}>{prefix}</span>
          <span style={{ flex: 1, textAlign: 'justify', textAlignLast: 'justify' }}>
            {spacedContent}
          </span>
        </div>
      );
    }
    
    // 패턴이 없으면 전체 텍스트에 글자 간격 적용
    const spacedLabel = label.split('').join(' ');
    return (
      <span style={{ display: 'block', width: '100%', textAlign: 'justify', textAlignLast: 'justify' }}>
        {spacedLabel}
      </span>
    );
  };

  // 로딩/인증 처리
  if (authLoading) {
    return <div className="p-8 text-center">로딩 중...</div>;
  }
  if (!isAuthenticated) return null;

  return (
    <div className="flex flex-col items-start p-4 gap-4">
        {/* Header */}
        <div className="flex flex-col items-start gap-4 min-w-[520px] self-stretch">
          {/* Title Section */}
          <div className="flex justify-between items-end gap-4 h-[46px] self-stretch">
            {/* Left Title */}
            <div className="flex flex-col items-start w-[256px] h-[46px]">
              <div className="flex flex-col items-start py-1.5 w-[256px] h-[29px] rounded-lg">
                <div className="flex items-start">
                  <h2 className="text-[15px] font-semibold leading-[140%] text-[#1E1E1E]">
                    재무제표
                  </h2>
                </div>
              </div>
              <p className="text-[12px] leading-[140%] text-[#767676]">
                조회일자를 선택하고 결산점검을 시작하세요.
              </p>
            </div>
            
            {/* Right Buttons */}
            <div className="flex justify-end items-center gap-2 h-[32px]">
              {/* Date Input - 재무상태표, 합계잔액시산표는 단일 날짜 */}
              {(selectedType === 'balance_sheet' || selectedType === 'trial_balance') ? (
                <div className="flex flex-col justify-center items-start w-[150px] min-w-[100px] h-[32px]">
                  <div className="flex items-center p-2 gap-2 bg-white border border-[#D9D9D9] w-[150px] min-w-[100px] h-[32px] self-stretch">
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="flex-1 text-[12px] leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none"
                    />
                  </div>
                </div>
              ) : (
                /* 손익계산서, 원가명세서, 현금흐름표, 이익잉여금처분계산서는 기간 설정 */
                <div className="flex flex-row items-stretch border border-[#D9D9D9] min-w-0 overflow-x-auto">
                  {/* 시작일 */}
                  <div className="flex flex-row items-stretch flex-1 min-w-[120px]">
                    <div className="flex flex-row justify-center items-center py-2 px-1 gap-1 w-[60px] bg-[#F5F5F5] border-r border-[#D9D9D9] shrink-0">
                      <span className="text-[11px] leading-[100%] text-[#757575] text-center">시작일</span>
                    </div>
                    <div className="flex flex-col justify-center flex-1 min-w-0">
                      <div className="flex flex-row items-center py-2 px-2 gap-2 bg-white h-full">
                        <input
                          type="date"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                          className="flex-1 text-[12px] leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none min-w-0"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* 종료일 */}
                  <div className="flex flex-row items-stretch flex-1 min-w-[120px] border-l border-[#D9D9D9]">
                    <div className="flex flex-row justify-center items-center py-2 px-1 gap-1 w-[60px] bg-[#F5F5F5] border-r border-[#D9D9D9] shrink-0">
                      <span className="text-[11px] leading-[100%] text-[#757575] text-center">종료일</span>
                    </div>
                    <div className="flex flex-col justify-center flex-1 min-w-0">
                      <div className="flex flex-row items-center py-2 px-2 gap-2 bg-white h-full">
                        <input
                          type="date"
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                          className="flex-1 text-[12px] leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none min-w-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Divider */}
              <div className="h-5 border-l border-[#D9D9D9]"></div>
              
              {/* Search Button */}
              <div className="w-[90px] h-[28px]">
                <button
                  onClick={handleSearch}
                  className="flex justify-center items-center py-2 px-3 gap-2 w-[90px] h-[28px] bg-[#2C2C2C] text-[#F5F5F5] text-[12px] leading-[100%] font-medium cursor-pointer"
                >
                  조회하기
                </button>
              </div>
              
              {/* Download Button */}
              <div className="w-[90px] h-[28px]">
                <button
                  onClick={handleDownload}
                  className="flex justify-center items-center py-2 px-3 gap-2 w-[90px] h-[28px] bg-[#2C2C2C] text-[#F5F5F5] text-[12px] leading-[100%] font-medium cursor-pointer"
                >
                  다운로드
                </button>
              </div>
              
              {/* Print Button */}
              <div className="w-[90px] h-[28px]">
                <PrintButton
                  printType="element"
                  targetSelector="#financial-statements-data"
                  variant="neutral"
                  className="flex justify-center items-center py-2 px-3 gap-2 w-[90px] h-[28px] bg-[#F3F3F3] text-[#2C2C2C] text-[12px] leading-[100%] font-medium cursor-pointer"
                >
                  인쇄하기
                </PrintButton>
              </div>
            </div>
          </div>
        </div>

        {/* 탭 메뉴 */}
        <div className="flex flex-row items-center p-0 h-[38px] w-full">
          {statementTypes.map((type) => (
            <button
              key={type.key}
              onClick={() => {
                setSelectedType(type.key);
                initDate();
                setStatementData(null); // 탭 변경 시 데이터 리셋
              }}
              className={`flex flex-col justify-center items-center pt-1 pb-4 flex-1 h-[38px] border-b ${
                selectedType === type.key
                  ? 'border-[#383838]'
                  : 'border-[#D9D9D9]'
              }`}
            >
              <div className="flex flex-row justify-center items-center p-0 h-[18px] self-stretch">
                <span className={`text-[13px] font-semibold leading-[140%] ${
                  selectedType === type.key
                    ? 'text-[#1E1E1E]'
                    : 'text-[#757575]'
                }`}>
                  {type.label}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* 재무제표 데이터 */}
        {statementData && statementData.rows && Array.isArray(statementData.rows) && statementData.rows.length > 0 && (
          <div id="financial-statements-data" className="w-full bg-white rounded">
            {/* 제목 및 기간 정보 */}
            <div className="flex flex-col justify-center items-center py-2 px-1 gap-1 w-full min-w-[100px] h-[83px]">
              {/* 제목 */}
              <div className="flex flex-row items-center p-0 gap-3 h-[29px]">
                <h3 className="text-2xl font-semibold leading-[120%] tracking-wide text-[#1E1E1E]">
                  {(statementData.meta.title || statementTypes.find(s => s.key === selectedType)?.label || '').split('').join(' ')}
                </h3>
              </div>
              
              {/* 기간 정보 */}
              {statementData.meta.periods && statementData.meta.periods.current && statementData.meta.periods.prior ? (
                <div className="flex flex-col items-start p-0 h-[34px]">
                  <div className="h-[17px] text-[12px] leading-[140%] text-[#757575]">
                    {`제 ${statementData.meta.terms.current} 기`} {formatDate(statementData.meta.periods.current.start)}부터 {formatDate(statementData.meta.periods.current.end)}까지
                  </div>
                  <div className="h-[17px] text-[12px] leading-[140%] text-[#757575]">
                    {`제 ${statementData.meta.terms.prior} 기`} {formatDate(statementData.meta.periods.prior.start)}부터 {formatDate(statementData.meta.periods.prior.end)}까지
                  </div>
                </div>
              ) : statementData.meta.asOfDate && formatDate(statementData.meta.asOfDate) !== '날짜 정보 없음' ? (
                <div className="flex flex-col items-start p-0 h-[34px]">
                  <div className="h-[17px] text-[12px] leading-[140%] text-[#757575]">
                    {formatDate(statementData.meta.asOfDate)} 현재
                  </div>
                </div>
              ) : date ? (
                <div className="flex flex-col items-start p-0 h-[34px]">
                  <div className="h-[17px] text-[12px] leading-[140%] text-[#757575]">
                    { date} 현재
                  </div>
                </div>
              ) : null}
            </div>

            {/* 회사명 및 단위 */}
            <div className="flex flex-row justify-between items-center py-[10px] px-1 gap-2 w-full min-w-[100px] h-[32px]">
              <span className="h-[12px] text-[12px] font-medium leading-[100%] text-[#757575]">
                회사명 : {statementData.meta.companyName || ''}
              </span>
              <span className="h-[12px] text-[12px] font-medium leading-[100%] text-[#757575]">
                (단위 : {statementData.meta.unit || '원'})
              </span>
            </div>

            {/* 테이블 */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-[#757575]" style={{tableLayout: 'fixed'}}>
                <colgroup>
                  {selectedType === 'trial_balance' ? (
                    <>
                      <col style={{width: '25%'}} />
                      <col style={{width: '25%'}} />
                      <col style={{width: '210px'}} />
                      <col style={{width: '25%'}} />
                      <col style={{width: '25%'}} />
                    </>
                  ) : selectedType === 'cash_flow' ? (
                    <>
                      <col style={{width: '210px'}} />
                      <col style={{width: '50%'}} />
                      <col style={{width: '50%'}} />
                    </>
                  ) : (
                    <>
                      <col style={{width: '210px'}} />
                      <col style={{width: '25%'}} />
                      <col style={{width: '25%'}} />
                      <col style={{width: '25%'}} />
                      <col style={{width: '25%'}} />
                    </>
                  )}
                </colgroup>
                <thead className="bg-[#F5F5F5]">
                  {selectedType === 'trial_balance' ? (
                    <>
                      <tr>
                        <th colSpan={2} className="p-2 text-xs border border-[#D9D9D9] text-center font-medium">차변</th>
                        <th rowSpan={2} className="p-2 text-xs border border-[#D9D9D9] text-center font-medium">계정과목</th>
                        <th colSpan={2} className="p-2 text-xs border border-[#D9D9D9] text-center font-medium">대변</th>
                      </tr>
                      <tr>
                        <th className="p-2 text-xs border border-[#D9D9D9] text-center font-medium">잔액</th>
                        <th className="p-2 text-xs border border-[#D9D9D9] text-center font-medium">합계</th>
                        <th className="p-2 text-xs border border-[#D9D9D9] text-center font-medium">합계</th>
                        <th className="p-2 text-xs border border-[#D9D9D9] text-center font-medium">잔액</th>
                      </tr>
                    </>
                  ) : selectedType === 'cash_flow' ? (
                    <tr>
                      <th className="p-2 text-xs border border-[#D9D9D9] text-center font-medium">과목</th>
                      <th className="p-2 text-xs border border-[#D9D9D9] text-center font-medium">증감액</th>
                      <th className="p-2 text-xs border border-[#D9D9D9] text-center font-medium">현금흐름</th>
                    </tr>
                  ) : (
                    <>
                      <tr>
                        <th rowSpan={2} className="p-2 text-xs border border-[#D9D9D9] text-center font-medium">과목</th>
                        <th colSpan={2} className="p-2 text-xs border border-[#D9D9D9] text-center font-medium">
                          제{statementData.meta.terms?.current}(당)기
                        </th>
                        <th colSpan={2} className="p-2 text-xs border border-[#D9D9D9] text-center font-medium">
                          제{statementData.meta.terms?.prior}(전)기
                        </th>
                      </tr>
                      <tr>
                        <th colSpan={2} className="p-2 text-xs border border-[#D9D9D9] text-center font-normal">금액</th>
                        <th colSpan={2} className="p-2 text-xs border border-[#D9D9D9] text-center font-normal">금액</th>
                      </tr>
                    </>
                  )}
                </thead>
                <tbody>
                  {statementData.rows && Array.isArray(statementData.rows) ? statementData.rows.map((row: FSRow | TrialBalanceRow, index: number) => {
                    const isLastRow = index === statementData.rows.length - 1;
                    const borderClass = isLastRow ? 'border-l border-r border-b border-[#D9D9D9]' : 'border-l border-r border-[#D9D9D9]';
                    
                    return (
                    <tr key={index} className="hover:bg-gray-50">
                      {selectedType === 'trial_balance' ? (
                        <>
                          <td className={`p-2 text-xs ${borderClass} text-right`}>
                            <span className={('styles' in row && row.styles?.bold) ? 'font-bold' : ''}>
                              {'debitBalance' in row ? row.debitBalance?.toLocaleString() || '0' : '0'}
                            </span>
                          </td>
                          <td className={`p-2 text-xs ${borderClass} text-right`}>
                            <span className={('styles' in row && row.styles?.bold) ? 'font-bold' : ''}>
                              {'debitSum' in row ? row.debitSum?.toLocaleString() || '0' : '0'}
                            </span>
                          </td>
                          <td className={`p-2 text-xs ${borderClass}`}>
                            <div className={('styles' in row && row.styles?.bold) ? 'font-bold' : ''}>
                              {'account' in row ? formatLabelWithSpacing(row.account) : ''}
                            </div>
                          </td>
                          <td className={`p-2 text-xs ${borderClass} text-right`}>
                            <span className={('styles' in row && row.styles?.bold) ? 'font-bold' : ''}>
                              {'creditSum' in row ? row.creditSum?.toLocaleString() || '0' : '0'}
                            </span>
                          </td>
                          <td className={`p-2 text-xs ${borderClass} text-right`}>
                            <span className={('styles' in row && row.styles?.bold) ? 'font-bold' : ''}>
                              {'creditBalance' in row ? row.creditBalance?.toLocaleString() || '0' : '0'}
                            </span>
                          </td>
                        </>
                      ) : selectedType === 'cash_flow' ? (
                        <>
                          <td className={`p-2 text-xs ${borderClass}`}>
                            <div style={{ paddingLeft: `${('depth' in row ? row.depth || 0 : 0) * 12}px` }}>
                              {'label' in row ? formatLabelWithSpacing(row.label) : ''}
                            </div>
                          </td>
                          <td className={`p-2 text-xs ${borderClass} text-right`}>
                            <span className={('styles' in row && row.styles?.bold) ? 'font-bold' : ''}>
                              {'currentLeft' in row ? row.currentLeft?.toLocaleString() || '0' : '0'}
                            </span>
                          </td>
                          <td className={`p-2 text-xs ${borderClass} text-right`}>
                            <span className={('styles' in row && row.styles?.bold) ? 'font-bold' : ''}>
                              {'currentRight' in row ? row.currentRight?.toLocaleString() || '0' : '0'}
                            </span>
                          </td>
                        </>
                      ) : (
                        <>
                          <td className={`p-2 text-xs ${borderClass}`}>
                            <div style={{ paddingLeft: `${('depth' in row ? row.depth || 0 : 0) * 12}px` }}>
                              {'label' in row ? formatLabelWithSpacing(row.label) : ''}
                            </div>
                          </td>
                          <td className={`p-2 text-xs ${borderClass} text-right`}>
                            <span className={('styles' in row && row.styles?.bold) ? 'font-bold' : ''}>
                              {'currentLeft' in row ? row.currentLeft?.toLocaleString() || '' : 
                                'current' in row ? row.current?.toLocaleString() || '' : ''}
                            </span>
                          </td>
                          <td className={`p-2 text-xs ${borderClass} text-right`}>
                            <span className={('styles' in row && row.styles?.bold) ? 'font-bold' : ''}>
                              {'currentRight' in row ? row.currentRight?.toLocaleString() || '' : ''}
                            </span>
                          </td>
                          <td className={`p-2 text-xs ${borderClass} text-right`}>
                            <span className={('styles' in row && row.styles?.bold) ? 'font-bold' : ''}>
                              {'priorLeft' in row ? row.priorLeft?.toLocaleString() || '' : 
                                'prior' in row ? row.prior?.toLocaleString() || '' : ''}
                            </span>
                          </td>
                          <td className={`p-2 text-xs ${borderClass} text-right`}>
                            <span className={('styles' in row && row.styles?.bold) ? 'font-bold' : ''}>
                              {'priorRight' in row ? row.priorRight?.toLocaleString() || '' : ''}
                            </span>
                          </td>
                        </>
                      )}
                    </tr>
                    );
                  }) : null}
                </tbody>
              </table>
            </div>
          </div>
        )}
    </div>
  );
}
