'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

interface FSRow {
  label: string;
  current?: number;
  prior?: number;
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
  account: Account;
  debitSum: number;
  creditSum: number;
  balance: number;
  direction: 'DEBIT' | 'CREDIT';
}

interface CashFlowRow {
  id: string;
  label: string;
  current: number;
  depth: number;
  rowType: string;
  styles: Record<string, unknown>;
}

interface StatementMeta {
  asOfDate?: string;
  periods?: {
    current: string;
    prior: string;
  };
  terms?: {
    current: string;
    prior: string;
  };
  totals?: {
    debit: number;
    credit: number;
  };
}

interface StatementData {
  type: string;
  meta: StatementMeta;
  rows: FSRow[] | TrialBalanceRow[] | CashFlowRow[];
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
  const [loading, setLoading] = useState(false);
  const [statementData, setStatementData] = useState<StatementData | null>(null);

  // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, router]);

  /** 재무제표 조회 */
  const fetchStatement = useCallback(async () => {
    if (!token) return;

    try {
      setLoading(true);
      const params = new URLSearchParams();

      params.append('type', selectedType);
      if (date) params.append('date', date);
      if (startDate) params.append('startDate', startDate);

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
  }, [token, selectedType, date, startDate]);

  /** 다운로드 */
  const handleDownload = () => {
    if (!statementData) return;

    let csvContent: string[][] = [];
    
    if (selectedType === 'trial_balance') {
      csvContent = [
        ['계정코드', '계정명', '차변합계', '대변합계', '잔액', '방향'],
        ...(statementData.rows as TrialBalanceRow[]).map(row => [
          row.account.code,
          row.account.name,
          row.debitSum.toLocaleString(),
          row.creditSum.toLocaleString(),
          row.balance.toLocaleString(),
          row.direction === 'DEBIT' ? '차변' : '대변'
        ])
      ];
    } else if (selectedType === 'cash_flow') {
      csvContent = [
        ['항목', '금액'],
        ...(statementData.rows as CashFlowRow[]).map(row => [
          row.label,
          row.current.toLocaleString()
        ])
      ];
    } else {
      csvContent = [
        ['항목', '당기', '전기'],
        ...(statementData.rows as FSRow[]).map(row => [
          row.label,
          row.current ? row.current.toLocaleString() : '',
          row.prior ? row.prior.toLocaleString() : ''
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

  /** 인쇄하기 */
  const handlePrint = () => {
    window.print();
  };

  /** 조회하기 */
  const handleSearch = () => {
    if (selectedType === 'balance_sheet' || selectedType === 'trial_balance') {
      if (!date) {
        alert('조회일자를 입력해주세요.');
        return;
      }
    } else {
      if (!startDate) {
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

  // 로딩/인증 처리
  if (authLoading) {
    return <div className="p-8 text-center">로딩 중...</div>;
  }
  if (!isAuthenticated) return null;

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold mb-2 text-[#1E1E1E]">재무제표</h2>
            <p className="text-[#767676]">결산일자를 선택하고 결산점검을 시작하세요.</p>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="date"
              value={selectedType === 'balance_sheet' || selectedType === 'trial_balance' ? date : startDate}
              onChange={(e) => {
                if (selectedType === 'balance_sheet' || selectedType === 'trial_balance') {
                  setDate(e.target.value);
                } else {
                  setStartDate(e.target.value);
                }
              }}
              className="border border-gray-300 rounded px-3 py-1 text-sm"
            />
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-[#2C2C2C] text-white text-sm"
            >
              조회하기
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-[#2C2C2C] text-white text-sm"
            >
              다운로드
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-[#F3F3F3] text-[#2C2C2C] text-sm"
            >
              인쇄하기
            </button>
          </div>
        </div>


        {/* 탭 메뉴 */}
        <div className="flex border-b border-gray-200 mb-6">
          {statementTypes.map((type) => (
            <button
              key={type.key}
              onClick={() => setSelectedType(type.key)}
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                selectedType === type.key
                  ? 'border-[#1E1E1E] text-[#1E1E1E]'
                  : 'border-transparent text-[#757575] hover:text-gray-700'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* 재무제표 데이터 */}
        {statementData && statementData.rows.length > 0 ? (
          <div className="bg-white border border-[#D9D9D9] rounded">
            {/* 제목 및 기간 정보 */}
            <div className="text-center py-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold mb-4">
                {statementTypes.find(s => s.key === selectedType)?.label}
              </h3>
              {statementData.meta.periods && statementData.meta.periods.current && statementData.meta.periods.prior && 
               formatDate(statementData.meta.periods.current) !== '날짜 정보 없음' && 
               formatDate(statementData.meta.periods.prior) !== '날짜 정보 없음' ? (
                <div className="text-sm text-gray-600">
                  <div>제 6기 {formatDate(statementData.meta.periods.current)} 현재</div>
                  <div>제 5기 {formatDate(statementData.meta.periods.prior)} 현재</div>
                </div>
              ) : statementData.meta.asOfDate && formatDate(statementData.meta.asOfDate) !== '날짜 정보 없음' ? (
                <div className="text-sm text-gray-600">
                  {formatDate(statementData.meta.asOfDate)} 현재
                </div>
              ) : date ? (
                <div className="text-sm text-gray-600">
                  <div>제 6기 {date} 현재</div>
                  <div>제 5기 {date} 현재</div>
                </div>
              ) : null}
            </div>

            {/* 회사명 및 단위 */}
            <div className="flex justify-between items-center px-6 py-2 text-sm text-gray-600">
              <span>회사명 : 주식회사 000</span>
              <span>(단위 : 원)</span>
            </div>

            {/* 테이블 */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-[#757575]">
                <thead className="bg-[#F5F5F5]">
                  <tr>
                    <th className="p-3 border border-[#D9D9D9] text-left font-medium">과목</th>
                    {selectedType === 'trial_balance' ? (
                      <>
                        <th className="p-3 border border-[#D9D9D9] text-right font-medium">차변합계</th>
                        <th className="p-3 border border-[#D9D9D9] text-right font-medium">대변합계</th>
                        <th className="p-3 border border-[#D9D9D9] text-right font-medium">잔액</th>
                        <th className="p-3 border border-[#D9D9D9] text-center font-medium">방향</th>
                      </>
                    ) : selectedType === 'cash_flow' ? (
                      <th className="p-3 border border-[#D9D9D9] text-right font-medium">금액</th>
                    ) : (
                      <>
                        <th className="p-3 border border-[#D9D9D9] text-right font-medium">
                          <div>제6(당)기</div>
                          <div className="text-xs font-normal">금액</div>
                        </th>
                        <th className="p-3 border border-[#D9D9D9] text-right font-medium">
                          <div>제5(전)기</div>
                          <div className="text-xs font-normal">금액</div>
                        </th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {statementData.rows.map((row: FSRow | TrialBalanceRow | CashFlowRow, index: number) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="p-3 border border-[#D9D9D9]">
                        <span style={{ paddingLeft: `${('depth' in row ? row.depth || 0 : 0) * 20}px` }}>
                          {'label' in row ? row.label : 'account' in row ? row.account.name : 'Unknown'}
                        </span>
                      </td>
                      {selectedType === 'trial_balance' ? (
                        <>
                          <td className="p-3 border text-right">
                            {'debitSum' in row ? row.debitSum?.toLocaleString() || '-' : '-'}
                          </td>
                          <td className="p-3 border text-right">
                            {'creditSum' in row ? row.creditSum?.toLocaleString() || '-' : '-'}
                          </td>
                          <td className="p-3 border text-right">
                            {'balance' in row ? row.balance?.toLocaleString() || '-' : '-'}
                          </td>
                          <td className="p-3 border text-center">
                            {'direction' in row ? (row.direction === 'DEBIT' ? '차변' : '대변') : '-'}
                          </td>
                        </>
                      ) : selectedType === 'cash_flow' ? (
                        <td className="p-3 border text-right">
                          {'current' in row ? row.current?.toLocaleString() || '-' : '-'}
                        </td>
                      ) : (
                        <>
                          <td className="p-3 border text-right">
                            {'current' in row ? row.current?.toLocaleString() || '-' : '-'}
                          </td>
                          <td className="p-3 border text-right">
                            {'prior' in row ? row.prior?.toLocaleString() || '-' : '-'}
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          !loading && (
            <div className="text-center text-gray-500 py-8">
              조회된 내역이 없습니다.
            </div>
          )
        )}
      </div>
    </div>
  );
}
