'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import ToastMessage from '@/components/ToastMessage';
import {
  getJournalInputAccounts,
  getJournalInputPartners,
  type UserAccount,
  type PartnerItem
} from '@/services/financial';

interface ManualJournalRow {
  id: number;
  date: string;
  debitAccount: string;
  debitAmount: string;
  debitPartner: string;
  creditAccount: string;
  creditAmount: string;
  creditPartner: string;
  description: string;
  voucherId?: string;
}

interface JournalGroup {
  id: number;
  rows: ManualJournalRow[]; // 각 그룹은 최소 2개 이상의 행을 가짐
}

interface JournalGroupComponentProps {
  group: JournalGroup;
  groupIndex: number;
  isFirstGroup: boolean;
  onUpdateRow: (rowId: number, field: keyof ManualJournalRow, value: string) => void;
  onAddAdditionalRow: (groupId: number) => void;
  debitSubtotal: number;
  creditSubtotal: number;
  accounts: UserAccount[];
  partners: PartnerItem[];
}

// 분개 그룹 컴포넌트
const JournalGroupComponent: React.FC<JournalGroupComponentProps> = ({
  group,
  groupIndex,
  isFirstGroup,
  onUpdateRow,
  onAddAdditionalRow,
  debitSubtotal,
  creditSubtotal,
  accounts,
  partners
}) => {
  const [firstRow, ...restRows] = group.rows;

  return (
    <table className="w-full border-collapse" style={{ tableLayout: 'fixed' }}>
      <colgroup>
        <col style={{ width: '40px' }} />
        <col style={{ width: '110px' }} />
        <col />
        <col />
        <col />
        <col />
        <col />
        <col />
        <col />
        <col />
        <col />
      </colgroup>
      {isFirstGroup && (
        <thead>
          <tr className="h-[32px]">
            <th rowSpan={2} className="px-2 py-0 h-[64px] bg-[#F5F5F5] border-l border-t border-r border-b border-[#D9D9D9] text-center align-middle">
              <span className="font-medium text-[12px] leading-[100%] text-[#757575]">번호</span>
            </th>
            <th rowSpan={2} className="px-2 py-0 h-[64px] bg-[#F5F5F5] border-t border-r border-b border-[#D9D9D9] text-center align-middle">
              <span className="font-medium text-[12px] leading-[100%] text-[#757575]">일자</span>
            </th>
            <th colSpan={3} className="px-2 py-0 bg-[#F5F5F5] border-t border-r border-b border-[#D9D9D9] text-center">
              <span className="font-medium text-[12px] leading-[100%] text-[#757575]">차변</span>
            </th>
            <th colSpan={3} className="px-2 py-0 bg-[#F5F5F5] border-t border-r border-b border-[#D9D9D9] text-center">
              <span className="font-medium text-[12px] leading-[100%] text-[#757575]">대변</span>
            </th>
            <th rowSpan={2} colSpan={3} className="px-2 py-0 h-[64px] bg-[#F5F5F5] border-t border-r border-b border-[#D9D9D9] text-center align-middle">
              <span className="font-medium text-[12px] leading-[100%] text-[#757575]">적요</span>
            </th>
          </tr>
          <tr className="h-[32px]">
            <th className="px-2 py-0 bg-[#F5F5F5] border-r border-b border-[#D9D9D9] text-center">
              <span className="font-medium text-[12px] leading-[100%] text-[#757575]">계정과목</span>
            </th>
            <th className="px-2 py-0 bg-[#F5F5F5] border-r border-b border-[#D9D9D9] text-center">
              <span className="font-medium text-[12px] leading-[100%] text-[#757575]">금액</span>
            </th>
            <th className="px-2 py-0 bg-[#F5F5F5] border-r border-b border-[#D9D9D9] text-center">
              <span className="font-medium text-[12px] leading-[100%] text-[#757575]">거래처</span>
            </th>
            <th className="px-2 py-0 bg-[#F5F5F5] border-r border-b border-[#D9D9D9] text-center">
              <span className="font-medium text-[12px] leading-[100%] text-[#757575]">계정과목</span>
            </th>
            <th className="px-2 py-0 bg-[#F5F5F5] border-r border-b border-[#D9D9D9] text-center">
              <span className="font-medium text-[12px] leading-[100%] text-[#757575]">금액</span>
            </th>
            <th className="px-2 py-0 bg-[#F5F5F5] border-r border-b border-[#D9D9D9] text-center">
              <span className="font-medium text-[12px] leading-[100%] text-[#757575]">거래처</span>
            </th>
          </tr>
        </thead>
      )}
      <tbody>
        {/* 첫 번째 데이터 행 (번호/일자 rowSpan) */}
        <tr className="h-[32px]">
          <td rowSpan={group.rows.length} className="px-1 py-0 bg-white border-l border-r border-b border-[#D9D9D9] text-center align-middle">
            <span className="font-medium text-[12px] leading-[100%] text-[#757575]">{groupIndex + 1}</span>
          </td>
          <td rowSpan={group.rows.length} className="px-2 py-0 bg-white border-r border-b border-[#D9D9D9] align-middle">
            <input
              type="date"
              className="w-full text-[12px] leading-[100%] text-[#757575] bg-transparent border-none outline-none text-center" 
              value={firstRow.date || ''}
              onChange={e => onUpdateRow(firstRow.id, 'date', e.target.value)}
            />
          </td>
          <td className="px-2 py-0 bg-white border-r border-b border-[#D9D9D9]">
            <select
              className="w-full font-medium text-[12px] leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none" 
              value={firstRow.debitAccount || ''}
              onChange={e => onUpdateRow(firstRow.id, 'debitAccount', e.target.value)}
            >
              <option value="">선택하기</option>
              {accounts.map(account => (
                <option key={account.id} value={account.id}>
                  {account.code} {account.name}
                </option>
              ))}
            </select>
          </td>
          <td className="px-2 py-0 bg-white border-r border-b border-[#D9D9D9]">
            <div className="flex items-center">
              <input
                type="number"
                className="flex-1 min-w-0 font-medium text-[12px] leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                placeholder="입력하기"
                value={firstRow.debitAmount || ''}
                onChange={e => onUpdateRow(firstRow.id, 'debitAmount', e.target.value)}
              />
              <span className="ml-1 font-medium text-[12px] leading-[100%] text-[#B3B3B3] shrink-0">원</span>
            </div>
          </td>
          <td className="px-2 py-0 bg-white border-r border-b border-[#D9D9D9]">
            <select
              className="w-full font-medium text-[12px] leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none" 
              value={firstRow.debitPartner || ''}
              onChange={e => onUpdateRow(firstRow.id, 'debitPartner', e.target.value)}
            >
              <option value="">선택하기</option>
              {partners.map(partner => (
                <option key={partner.id} value={partner.id}>
                  {partner.name}
                </option>
              ))}
            </select>
          </td>
          <td className="px-2 py-0 bg-white border-r border-b border-[#D9D9D9]">
            <select
              className="w-full font-medium text-[12px] leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none" 
              value={firstRow.creditAccount || ''}
              onChange={e => onUpdateRow(firstRow.id, 'creditAccount', e.target.value)}
            >
              <option value="">선택하기</option>
              {accounts.map(account => (
                <option key={account.id} value={account.id}>
                  {account.code} {account.name}
                </option>
              ))}
            </select>
          </td>
          <td className="px-2 py-0 bg-white border-r border-b border-[#D9D9D9]">
            <div className="flex items-center">
              <input
                type="number"
                className="flex-1 min-w-0 font-medium text-[12px] leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                placeholder="입력하기"
                value={firstRow.creditAmount || ''}
                onChange={e => onUpdateRow(firstRow.id, 'creditAmount', e.target.value)}
              />
              <span className="ml-1 font-medium text-[12px] leading-[100%] text-[#B3B3B3] shrink-0">원</span>
            </div>
          </td>
          <td className="px-2 py-0 bg-white border-r border-b border-[#D9D9D9]">
            <select
              className="w-full font-medium text-[12px] leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none" 
              value={firstRow.creditPartner || ''}
              onChange={e => onUpdateRow(firstRow.id, 'creditPartner', e.target.value)}
            >
              <option value="">선택하기</option>
              {partners.map(partner => (
                <option key={partner.id} value={partner.id}>
                  {partner.name}
                </option>
              ))}
            </select>
          </td>
          <td colSpan={3} className="px-2 py-0 bg-white border-r border-b border-[#D9D9D9]">
            <input
              className="w-full font-medium text-[12px] leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none" 
              placeholder="입력하기"
              value={firstRow.description || ''}
              onChange={e => onUpdateRow(firstRow.id, 'description', e.target.value)}
            />
          </td>
        </tr>
        {/* 나머지 행들 (2번째 행부터 모두 동일한 구조) */}
        {restRows.map((row) => (
          <tr key={row.id} className="h-[32px]">
            <td className="px-2 py-0 bg-white border-r border-b border-[#D9D9D9]">
              <select
                className="w-full font-medium text-[12px] leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none" 
                value={row.debitAccount || ''}
                onChange={e => onUpdateRow(row.id, 'debitAccount', e.target.value)}
              >
                <option value="">선택하기</option>
                {accounts.map(account => (
                  <option key={account.id} value={account.id}>
                    {account.code} {account.name}
                  </option>
                ))}
              </select>
            </td>
            <td className="px-2 py-0 bg-white border-r border-b border-[#D9D9D9]">
              <div className="flex items-center">
                <input
                  type="number"
                  className="flex-1 min-w-0 font-medium text-[12px] leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                  placeholder="입력하기"
                  value={row.debitAmount || ''}
                  onChange={e => onUpdateRow(row.id, 'debitAmount', e.target.value)}
                />
                <span className="ml-1 font-medium text-[12px] leading-[100%] text-[#B3B3B3] shrink-0">원</span>
              </div>
            </td>
            <td className="px-2 py-0 bg-white border-r border-b border-[#D9D9D9]">
              <select
                className="w-full font-medium text-[12px] leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none" 
                value={row.debitPartner || ''}
                onChange={e => onUpdateRow(row.id, 'debitPartner', e.target.value)}
              >
                <option value="">선택하기</option>
                {partners.map(partner => (
                  <option key={partner.id} value={partner.id}>
                    {partner.name}
                  </option>
                ))}
              </select>
            </td>
            <td className="px-2 py-0 bg-white border-r border-b border-[#D9D9D9]">
              <select
                className="w-full font-medium text-[12px] leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none" 
                value={row.creditAccount || ''}
                onChange={e => onUpdateRow(row.id, 'creditAccount', e.target.value)}
              >
                <option value="">선택하기</option>
                {accounts.map(account => (
                  <option key={account.id} value={account.id}>
                    {account.code} {account.name}
                  </option>
                ))}
              </select>
            </td>
            <td className="px-2 py-0 bg-white border-r border-b border-[#D9D9D9]">
              <div className="flex items-center">
                <input
                  type="number"
                  className="flex-1 min-w-0 font-medium text-[12px] leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                  placeholder="입력하기"
                  value={row.creditAmount || ''}
                  onChange={e => onUpdateRow(row.id, 'creditAmount', e.target.value)}
                />
                <span className="ml-1 font-medium text-[12px] leading-[100%] text-[#B3B3B3] shrink-0">원</span>
              </div>
            </td>
            <td className="px-2 py-0 bg-white border-r border-b border-[#D9D9D9]">
              <select
                className="w-full font-medium text-[12px] leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none" 
                value={row.creditPartner || ''}
                onChange={e => onUpdateRow(row.id, 'creditPartner', e.target.value)}
              >
                <option value="">선택하기</option>
                {partners.map(partner => (
                  <option key={partner.id} value={partner.id}>
                    {partner.name}
                  </option>
                ))}
              </select>
            </td>
            <td colSpan={3} className="px-2 py-0 bg-white border-r border-b border-[#D9D9D9]">
              <input
                className="w-full font-medium text-[12px] leading-[100%] text-[#B3B3B3] bg-transparent border-none outline-none" 
                placeholder="입력하기"
                value={row.description || ''}
                onChange={e => onUpdateRow(row.id, 'description', e.target.value)}
              />
            </td>
          </tr>
        ))}
        {/* 추가하기 버튼 행 */}
        <tr className="h-[32px]">
          <td colSpan={11} className="px-2 py-0 bg-white border-l border-r border-b border-[#D9D9D9]">
            <button
              onClick={() => onAddAdditionalRow(group.id)}
              className="w-full h-full flex flex-row justify-center items-center gap-1 cursor-pointer"
            >
              <div className="w-4 h-4">
                <svg className="w-4 h-4" fill="none" stroke="#757575" strokeWidth="1" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 8v8M8 12h8"/>
                </svg>
              </div>
              <span className="font-medium text-[12px] leading-[100%] text-center text-[#757575]">
                추가하기
              </span>
            </button>
          </td>
        </tr>
        {/* 소계 행 */}
        <tr className="h-[32px]">
          <td colSpan={2} className="px-2 py-0 bg-[#F5F5F5] border-l border-r border-b border-[#D9D9D9] text-center">
            <span className="font-medium text-[12px] leading-[100%] text-[#757575]">소계</span>
          </td>
          <td colSpan={3} className="px-2 py-0 bg-white border-r border-b border-[#D9D9D9]">
            <div className="flex items-center">
              <span className="flex-1 font-medium text-[12px] leading-[100%] text-[#757575]">
                {debitSubtotal.toLocaleString()}
              </span>
              <span className="ml-1 font-medium text-[12px] leading-[100%] text-[#757575]">원</span>
            </div>
          </td>
          <td colSpan={3} className="px-2 py-0 bg-white border-r border-b border-[#D9D9D9]">
            <div className="flex items-center">
              <span className="flex-1 font-medium text-[12px] leading-[100%] text-[#757575]">
                {creditSubtotal.toLocaleString()}
              </span>
              <span className="ml-1 font-medium text-[12px] leading-[100%] text-[#757575]">원</span>
            </div>
          </td>
          <td colSpan={3} className="px-2 py-0 bg-white border-r border-b border-[#D9D9D9]"></td>
        </tr>
      </tbody>
    </table>
  );
};

export default function ManualJournalPage() {
  const router = useRouter();
  const { isAuthenticated, loading: authLoading, token } = useAuth();
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  
  // 계정과목 및 거래처 목록
  const [accounts, setAccounts] = useState<UserAccount[]>([]);
  const [partners, setPartners] = useState<PartnerItem[]>([]);
  
  // 오늘 날짜를 YYYY-MM-DD 형식으로 반환
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const createEmptyRow = (id: number): ManualJournalRow => ({
    id,
      date: getTodayDate(),
      debitAccount: '',
      debitAmount: '',
      debitPartner: '',
      creditAccount: '',
      creditAmount: '',
      creditPartner: '',
      description: '',
  });

  const createEmptyGroup = (groupId: number): JournalGroup => ({
    id: groupId,
    rows: [createEmptyRow(groupId * 10 + 1), createEmptyRow(groupId * 10 + 2)]
  });

  const initialGroupsData = [createEmptyGroup(1), createEmptyGroup(2)];
  const [journalGroups, setJournalGroups] = useState<JournalGroup[]>(initialGroupsData);
  const [initialJournalGroups, setInitialJournalGroups] = useState<JournalGroup[]>(initialGroupsData);

  // 계정과목 및 거래처 조회
  useEffect(() => {
    const fetchData = async () => {
      if (!token) return;
      
      try {
        const [accountsData, partnersData] = await Promise.all([
          getJournalInputAccounts(token),
          getJournalInputPartners(token)
        ]);
        
        setAccounts(accountsData);
        // 모든 거래처를 하나의 배열로 합침
        setPartners([
          ...partnersData.companies,
          ...partnersData.cards,
          ...partnersData.bankAccounts
        ]);
      } catch (err) {
        console.error('계정과목/거래처 조회 실패:', err);
      }
    };
    
    fetchData();
  }, [token]);

  // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, router]);

  const [loading] = useState(false);

  // 모든 행을 평면화하여 가져오는 헬퍼 함수
  const getAllRows = (): ManualJournalRow[] => 
    journalGroups.flatMap(group => group.rows);

  /** 변경사항 확인 */
  const hasChanges = JSON.stringify(journalGroups) !== JSON.stringify(initialJournalGroups);
  
  /** 저장할 데이터가 있는지 확인 */
  const hasData = getAllRows().some(
    r =>
      r.date.trim() ||
      r.debitAccount.trim() ||
      r.debitAmount.trim() ||
      r.debitPartner.trim() ||
      r.creditAccount.trim() ||
      r.creditAmount.trim() ||
      r.creditPartner.trim() ||
      r.description.trim()
  );


  /** 그룹 추가 */
  const addGroup = () => {
    const newGroupId = Math.max(...journalGroups.map(g => g.id)) + 1;
    setJournalGroups(prev => [...prev, createEmptyGroup(newGroupId)]);
  };

  /** 특정 행 업데이트 */
  const updateRow = (rowId: number, field: keyof ManualJournalRow, value: string) => {
    setJournalGroups(prev => 
      prev.map(group => ({
        ...group,
        rows: group.rows.map(row => 
          row.id === rowId ? { ...row, [field]: value } : row
        )
      }))
    );
  };

  /** 추가 행 추가 */
  const addAdditionalRow = (groupId: number) => {
    setJournalGroups(prev => 
      prev.map(group => {
        if (group.id === groupId) {
          const newRowId = Date.now();
          return {
            ...group,
            rows: [...group.rows, createEmptyRow(newRowId)]
          };
        }
        return group;
      })
    );
  };

  /** 저장 */
  const handleSave = async () => {
    if (!hasChanges || !hasData) return;
    
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        alert('로그인이 필요합니다.');
        return;
      }

      // 분개장 데이터를 API 형식으로 변환
      const allVouchers = getAllRows().map(row => {
        const transactions = [
          // 차변 거래
          ...(row.debitAccount && row.debitAmount ? [{
            // id: String(Math.floor(Date.now() + Math.random() * 1000)),
            accountId: row.debitAccount,
            partnerId: row.debitPartner || undefined,
            amount: parseFloat(row.debitAmount) || undefined,
            note: row.description || undefined,
            debitCredit: true
          }] : []),
          // 대변 거래
          ...(row.creditAccount && row.creditAmount ? [{
            // id: String(Math.floor(Date.now() + Math.random() * 1000) + 1),
            accountId: row.creditAccount,
            partnerId: row.creditPartner || undefined,
            amount: parseFloat(row.creditAmount) || undefined,
            note: row.description || undefined,
            debitCredit: false
          }] : [])
        ];

        return {
          voucher: {
          //   id: row.voucherId || String(Date.now()),
            date: row.date || undefined,
          //   description: row.description || undefined,
          },
          transactions
        };
      });

      // transaction 검증: 빈 배열이 아니면서 amount나 debitCredit이 없는 경우 체크
      for (const voucher of allVouchers) {
        if (voucher.transactions.length > 0) {
          for (const transaction of voucher.transactions) {
            if (!transaction.amount || transaction.debitCredit === undefined) {
              alert('거래 내역에 필수 항목(금액, 차변/대변 구분)이 누락되었습니다.');
              return;
            }
          }
        }
      }

      // 빈 transactions 배열인 voucher 제거
      const vouchers = allVouchers.filter(voucher => voucher.transactions.length > 0);

      // 저장할 voucher가 없는 경우
      if (vouchers.length === 0) {
        alert('저장할 거래 내역이 없습니다.');
        return;
      }

      const res = await fetch('https://api.eosxai.com/api/vouchers/upsert-with-transactions/batch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ items: vouchers }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || '저장 실패');
      }

      const data = await res.json();
      if (data.success) {
        // data.results 배열의 각 항목에서 error 여부 확인
        const hasErrors = data.results && data.results.some((result: { error?: boolean | string }) => result.error);
        
        if (hasErrors) {
          alert('저장 중 문제가 발생했습니다.');
          return;
        }

        setToastMessage(`${vouchers.length}개의 전표가 생성되었습니다!`);
        setShowToast(true);

        // 저장 후 로컬 데이터 초기화
        const newInitialGroups = [createEmptyGroup(1), createEmptyGroup(2)];
        setJournalGroups(newInitialGroups);
        setInitialJournalGroups(newInitialGroups);
      } else {
        alert('저장 중 문제가 발생했습니다.');
      }
    } catch (err) {
      console.error('저장 에러:', err);
      alert('저장 중 문제가 발생했습니다.');
    }
  };

  // 로딩 중이거나 인증되지 않은 경우
  if (authLoading) {
    return (
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-8">로딩 중...</div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="flex flex-col items-start p-4 gap-4 w-full mx-auto">
      {/* Header */}
      <div className="flex flex-col items-start gap-4 w-full min-w-[520px]">
        <div className="flex flex-row justify-between items-end gap-4 w-full">
          {/* Title Section */}
          <div className="flex flex-col items-start">
            <div className="flex flex-col items-start p-[6px_0px_2px] rounded-lg">
              <div className="flex flex-row items-start">
                <h2 className="font-semibold text-[15px] leading-[140%] text-[#1E1E1E]">
                  수동분개
                </h2>
              </div>
            </div>
            <p className="font-normal text-[12px] leading-[140%] text-[#767676]">
              필요한 내용을 입력하고 정보를 저장하세요.
            </p>
          </div>
          
          {/* Buttons */}
          <div className="flex flex-row justify-end items-center gap-2">
            <button
              className={`flex flex-row justify-center items-center px-3 py-2 gap-2 h-[28px] font-medium text-[12px] leading-[100%] cursor-pointer ${
                hasChanges && hasData && !loading
                  ? 'bg-[#F3F3F3] text-[#1E1E1E]'
                  : 'bg-[#E6E6E6] text-[#B3B3B3]'
              }`}
              disabled={!hasChanges || !hasData || loading}
              onClick={handleSave}
            >
              저장하기
            </button>
          </div>
        </div>
      </div>

      {/* 반응형 테이블 컨테이너 */}
      <div className="w-full overflow-x-auto">
        <div className="flex flex-col items-start">
          {/* 분개 그룹들 렌더링 */}
          {journalGroups.map((group, index) => {
            const groupDebitSubtotal = group.rows.reduce((sum, row) => 
              sum + (parseFloat(row.debitAmount) || 0), 0);
            const groupCreditSubtotal = group.rows.reduce((sum, row) => 
              sum + (parseFloat(row.creditAmount) || 0), 0);

            return (
              <JournalGroupComponent
                key={group.id}
                group={group}
                groupIndex={index}
                isFirstGroup={index === 0}
                onUpdateRow={updateRow}
                onAddAdditionalRow={addAdditionalRow}
                debitSubtotal={groupDebitSubtotal}
                creditSubtotal={groupCreditSubtotal}
                accounts={accounts}
                partners={partners}
              />
            );
          })}

          {/* 추가하기 버튼 */}
          <div className="flex flex-row items-center w-full min-w-[200px] h-[40px]">
            <button
              onClick={addGroup}
              className="flex flex-row justify-center items-center px-3 py-2 gap-1 w-full min-w-[200px] h-[40px] bg-white border-l border-r border-b border-[#D9D9D9] cursor-pointer"
            >
              <div className="w-4 h-4">
                <svg className="w-4 h-4" fill="none" stroke="#757575" strokeWidth="1" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 8v8M8 12h8"/>
                </svg>
              </div>
              <span className="font-medium text-[12px] leading-[100%] text-center text-[#757575]">
                추가하기
              </span>
            </button>
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