'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
interface CheckRow {
  id: number;
  key: string;
  category: string;
  title: string;
  description: string;
  status: 'PENDING' | 'PROCESSING' | 'DONE' | 'NA';
}

interface AutoModeResponse {
  jobId: string;
  closingDate: string;
}

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

// API에서 요구하는 DepRow 타입
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

interface EditableDepreciationItem extends DepreciationItem {
  id: string;
  isEditing?: boolean;
}

// 기말재고 관련 타입
interface EndingInventoryItem {
  itemName: string;
  priorDate: string;
  priorQty?: number;
  priorAmount: number;
  currentDate: string;
  currentQty?: number;
  currentAmount: number;
  usagePurpose: string;
  usageCount: number;
  cogsAmount: number;
}

interface EndingInventoryResponse {
  key: string;
  status: string;
  rows: EndingInventoryItem[];
  meta: {
    accountCode: number;
    fiscalYear: string;
    fromBasicOpening: boolean;
    totals?: unknown;
  };
}

interface EditableEndingInventoryItem extends EndingInventoryItem {
  id: string;
  isEditing?: boolean;
}

// API에서 요구하는 EndingInventoryRow 타입
interface EndingInventoryRow {
  itemName: string;
  priorDate: string;
  priorQty?: number;
  priorAmount: number;
  currentDate: string;
  currentQty?: number;
  currentAmount: number;
  usagePurpose: string;
  usageCount: number;
  cogsAmount: number;
}

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

// 퇴직급여충당금 관련 타입
interface RetirementBenefitItem {
  label: string;
  paidTotal: number;
  ratioText: string;
  provisionAmount: number;
  note: string;
  debitAccountCode: string;
}

interface RetirementBenefitResponse {
  key: string;
  status: string;
  rows: RetirementBenefitItem[];
  meta: {
    period: {
      start: string;
      end: string;
    };
    allowanceBalance: {
      prior: number;
      current: number;
    };
    codes: {
      EXEC_SALARY_PAN: string;
      STAFF_SALARY_PAN: string;
      SALARY_PRODUCT: string;
      SALARY_SERVICE: string;
      RETIRE_EXP_PAN: string;
      RETIRE_EXP_PRODUCT: string;
      RETIRE_EXP_SERVICE: string;
      RETIRE_ALLOW_LIAB: string;
    };
  };
}

interface EditableRetirementBenefitItem extends RetirementBenefitItem {
  id: string;
  isEditing?: boolean;
}

// API에서 요구하는 RetirementBenefitRow 타입
interface RetirementBenefitRow {
  provisionAmount: number;
  debitAccountCode: string;
  note?: string;
}

// 가수가지급금 관련 타입
interface SuspenseVoucher {
  voucherId: string;
  date: string;
  description: string;
  transactions: {
    id: string;
    accountId: string;
    accountCode: string;
    accountName: string;
    debitCredit: 'DEBIT' | 'CREDIT';
    amount: number;
    partnerId?: string;
    partnerName?: string;
    note?: string;
  }[];
}

interface SuspenseResponse {
  key: string;
  status: string;
  vouchers: SuspenseVoucher[];
  period: {
    start: string;
    end: string;
  };
}

interface EditableSuspenseTransaction {
  id: string;
  accountId: string;
  accountCode: string;
  accountName: string;
  debitCredit: 'DEBIT' | 'CREDIT';
  amount: number;
  partnerId?: string;
  partnerName?: string;
  note?: string;
  isEditing?: boolean;
}

// 기간귀속 관련 타입
interface PeriodAccrualItem {
  accountCode: string;
  accountName: string;
  endingBalance: number;
  addAmount: number;
  counterAccountId?: string | null;
  memo: string;
}

interface PeriodAccrualResponse {
  key: string;
  status: string;
  rows: PeriodAccrualItem[];
  period: {
    start: string;
    end: string;
  };
}

interface EditablePeriodAccrualItem extends PeriodAccrualItem {
  id: string;
  isEditing?: boolean;
}

// API에서 요구하는 PeriodAccrualRow 타입
interface PeriodAccrualRow {
  accountCode: string;
  addAmount: number;
  counterAccountId?: string | null;
  memo?: string;
}

interface DepreciationResponse {
  key: string;
  status: string;
  tangible: DepreciationItem[];
  intangible: DepreciationItem[];
}

interface VoucherTransaction {
  account: string;
  partner: string;
  amount: number;
  debitCredit: 'DEBIT' | 'CREDIT';
  note: string;
}

interface VoucherResponse {
  voucher: {
    transactions: VoucherTransaction[];
  };
}

export default function AIClosingCheckPage() {
  const router = useRouter();
  const { isAuthenticated, loading: authLoading } = useAuth();
  const [rows, setRows] = useState<CheckRow[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [autoJobId, setAutoJobId] = useState<string | null>(null);
  const [closingDate, setClosingDate] = useState<string>('');
  const [streamStatus, setStreamStatus] = useState<string>('');
  const [modalData, setModalData] = useState<{
    tangible?: Record<string, unknown>[];
    intangible?: Record<string, unknown>[];
    rows?: Record<string, unknown>[];
  } | null>(null);
  const [selectedItemKey, setSelectedItemKey] = useState<string>('');
  const [allResults, setAllResults] = useState<Record<string, unknown> | null>(null);
  
  // 감가상각 팝업 상태
  const [showDepreciationModal, setShowDepreciationModal] = useState(false);
  const [depreciationData, setDepreciationData] = useState<DepreciationResponse | null>(null);
  const [voucherData, setVoucherData] = useState<VoucherResponse | null>(null);
  const [depreciationLoading, setDepreciationLoading] = useState(false);
  const [editableItems, setEditableItems] = useState<EditableDepreciationItem[]>([]);

  // 기말재고 팝업 상태
  const [showEndingInventoryModal, setShowEndingInventoryModal] = useState(false);
  const [endingInventoryData, setEndingInventoryData] = useState<EndingInventoryResponse | null>(null);
  const [endingInventoryVoucherData, setEndingInventoryVoucherData] = useState<VoucherResponse | null>(null);
  const [endingInventoryLoading, setEndingInventoryLoading] = useState(false);
  const [editableInventoryItems, setEditableInventoryItems] = useState<EditableEndingInventoryItem[]>([]);

  // 대손상각 팝업 상태
  const [showBadDebtModal, setShowBadDebtModal] = useState(false);
  const [badDebtData, setBadDebtData] = useState<BadDebtResponse | null>(null);
  const [badDebtVoucherData, setBadDebtVoucherData] = useState<VoucherResponse | null>(null);
  const [badDebtLoading, setBadDebtLoading] = useState(false);
  const [editableBadDebtItems, setEditableBadDebtItems] = useState<EditableBadDebtItem[]>([]);

  // 퇴직급여충당금 팝업 상태
  const [showRetirementBenefitModal, setShowRetirementBenefitModal] = useState(false);
  const [retirementBenefitData, setRetirementBenefitData] = useState<RetirementBenefitResponse | null>(null);
  const [retirementBenefitVoucherData, setRetirementBenefitVoucherData] = useState<VoucherResponse | null>(null);
  const [retirementBenefitLoading, setRetirementBenefitLoading] = useState(false);
  const [editableRetirementBenefitItems, setEditableRetirementBenefitItems] = useState<EditableRetirementBenefitItem[]>([]);

  // 가수가지급금 팝업 상태
  const [showSuspenseModal, setShowSuspenseModal] = useState(false);
  const [suspenseData, setSuspenseData] = useState<SuspenseResponse | null>(null);
  const [suspenseLoading, setSuspenseLoading] = useState(false);
  const [editableSuspenseTransactions, setEditableSuspenseTransactions] = useState<EditableSuspenseTransaction[]>([]);

  // 기간귀속 팝업 상태
  const [showPeriodAccrualModal, setShowPeriodAccrualModal] = useState(false);
  const [periodAccrualData, setPeriodAccrualData] = useState<PeriodAccrualResponse | null>(null);
  const [periodAccrualVoucherData, setPeriodAccrualVoucherData] = useState<VoucherResponse | null>(null);
  const [periodAccrualLoading, setPeriodAccrualLoading] = useState(false);
  const [editablePeriodAccrualItems, setEditablePeriodAccrualItems] = useState<EditablePeriodAccrualItem[]>([]);

  // 인증되지 않은 경우 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, router]);

  // 현재 날짜를 기본값으로 설정
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    setClosingDate(`${year}-${month}-${day}`);
  }, []);

  /** 직접 점검하기 */
  const handleManualCheck = async () => {
    try {
      setLoading(true);
      
      // 직접 점검을 위한 기본 항목들 설정
      const manualCheckItems = [
        { id: 1, key: 'depreciation', category: '필수', title: '감가상각처리', description: '내용', status: 'PENDING' as CheckRow['status'] },
        { id: 2, key: 'ending_inventory', category: '필수', title: '기말재고확인', description: '내용', status: 'PENDING' as CheckRow['status'] },
        { id: 3, key: 'bad_debt', category: '필수', title: '대손상각', description: '내용', status: 'PENDING' as CheckRow['status'] },
        { id: 4, key: 'retirement_benefit', category: '필수', title: '퇴직급여충당금', description: '내용', status: 'PENDING' as CheckRow['status'] },
        { id: 5, key: 'suspense_clear', category: '필수', title: '가수, 가지급 정리', description: '내용', status: 'PENDING' as CheckRow['status'] },
        { id: 6, key: 'period_accrual', category: '외부감사시 필수', title: '기간귀속', description: '내용', status: 'PENDING' as CheckRow['status'] },
        { id: 7, key: 'negative_balance', category: '정합성', title: '마이너스잔액', description: '내용', status: 'PENDING' as CheckRow['status'] },
      ];

      setRows(manualCheckItems);
    } catch (error) {
      console.error('직접 점검 설정 오류:', error);
      alert('직접 점검 설정 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  /** 기말재고 점검 */
  const handleEndingInventoryCheck = async () => {
    try {
      setEndingInventoryLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      // 기말재고 점검 API 호출
      const requestBody = {
        closingDate: closingDate,
        key: 'ending_inventory'
      };
      
      console.log('기말재고 점검 API 요청:', {
        url: 'https://api.eosxai.com/api/closing-check/run-item',
        method: 'POST',
        body: requestBody,
        closingDate: closingDate
      });

      const response = await fetch('https://api.eosxai.com/api/closing-check/run-item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API 에러 응답:', errorData);
        
        if (response.status === 500) {
          alert('서버 내부 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        } else {
          alert(`기말재고 점검에 실패했습니다. (${response.status})`);
        }
        return;
      }

      const data: EndingInventoryResponse = await response.json();
      setEndingInventoryData(data);
      
      // 편집 가능한 형태로 변환
      const editableItems: EditableEndingInventoryItem[] = data.rows.map((item, index) => ({
        ...item,
        id: `${item.itemName}-${index}`,
        isEditing: false
      }));
      setEditableInventoryItems(editableItems);
      
      // 기존 모달 닫기
      setShowModal(false);
      
      // 기말재고 팝업 열기
      setShowEndingInventoryModal(true);
      
      // 테이블에 기말재고 항목 표시
      const updatedRows = rows.map(row => 
        row.key === 'ending_inventory' 
          ? { ...row, status: 'DONE' as CheckRow['status'] }
          : row
      );
      setRows(updatedRows);
    } catch (error) {
      console.error('기말재고 점검 API 호출 오류:', error);
      alert('기말재고 점검 중 네트워크 오류가 발생했습니다.');
    } finally {
      setEndingInventoryLoading(false);
    }
  };

  /** 기말재고 결산 반영 */
  const handleEndingInventoryApply = async () => {
    try {
      setEndingInventoryLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      // API에서 요구하는 형태로 데이터 변환
      const rows: EndingInventoryRow[] = editableInventoryItems.map(item => ({
        itemName: item.itemName,
        priorDate: item.priorDate,
        priorQty: item.priorQty,
        priorAmount: item.priorAmount,
        currentDate: item.currentDate,
        currentQty: item.currentQty,
        currentAmount: item.currentAmount,
        usagePurpose: item.usagePurpose,
        usageCount: item.usageCount,
        cogsAmount: item.cogsAmount
      }));

      const response = await fetch('https://api.eosxai.com/api/closing-check/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          closingDate: closingDate,
          key: 'ending_inventory',
          description: '기말재고 결산 반영',
          rows: rows
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API 에러 응답:', errorData);
        
        if (response.status === 500) {
          alert('서버 내부 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        } else {
          alert(`기말재고 결산 반영에 실패했습니다. (${response.status})`);
        }
        return;
      }

      const data: VoucherResponse = await response.json();
      setEndingInventoryVoucherData(data);
    } catch (error) {
      console.error('기말재고 결산 반영 API 호출 오류:', error);
      alert('기말재고 결산 반영 중 네트워크 오류가 발생했습니다.');
    } finally {
      setEndingInventoryLoading(false);
    }
  };

  /** 기말재고 아이템 변경 핸들러 */
  const handleInventoryItemChange = (id: string, field: keyof EditableEndingInventoryItem, value: string | number | boolean) => {
    setEditableInventoryItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  /** 대손상각 점검 */
  const handleBadDebtCheck = async () => {
    try {
      setBadDebtLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      // 대손상각 점검 API 호출
      const requestBody = {
        closingDate: closingDate,
        key: 'bad_debt'
      };
      
      console.log('대손상각 점검 API 요청:', {
        url: 'https://api.eosxai.com/api/closing-check/run-item',
        method: 'POST',
        body: requestBody,
        closingDate: closingDate
      });

      const response = await fetch('https://api.eosxai.com/api/closing-check/run-item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API 에러 응답:', errorData);
        
        if (response.status === 500) {
          alert('서버 내부 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        } else {
          alert(`대손상각 점검에 실패했습니다. (${response.status})`);
        }
        return;
      }

      const data: BadDebtResponse = await response.json();
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
      
      // 기존 모달 닫기
      setShowModal(false);
      
      // 대손상각 팝업 열기
      setShowBadDebtModal(true);
      
      // 테이블에 대손상각 항목 표시
      const updatedRows = rows.map(row => 
        row.key === 'bad_debt' 
          ? { ...row, status: 'DONE' as CheckRow['status'] }
          : row
      );
      setRows(updatedRows);
    } catch (error) {
      console.error('대손상각 점검 API 호출 오류:', error);
      alert('대손상각 점검 중 네트워크 오류가 발생했습니다.');
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

      const response = await fetch('https://api.eosxai.com/api/closing-check/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          closingDate: closingDate,
          key: 'bad_debt',
          description: '대손상각 결산 반영',
          rows: rows
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API 에러 응답:', errorData);
        
        if (response.status === 500) {
          const errorMessage = errorData.detail?.includes('name_userId') 
            ? '서버 설정 오류가 발생했습니다. 관리자에게 문의해주세요.'
            : '서버 내부 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
          alert(errorMessage);
        } else {
          alert(`대손상각 결산 반영에 실패했습니다. (${response.status})`);
        }
        return;
      }

      const data: VoucherResponse = await response.json();
      setBadDebtVoucherData(data);
    } catch (error) {
      console.error('대손상각 결산 반영 API 호출 오류:', error);
      alert('대손상각 결산 반영 중 네트워크 오류가 발생했습니다.');
    } finally {
      setBadDebtLoading(false);
    }
  };

  /** 대손상각 아이템 변경 핸들러 */
  const handleBadDebtItemChange = (id: string, field: keyof EditableBadDebtItem, value: string | number | boolean) => {
    setEditableBadDebtItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  /** 퇴직급여충당금 점검 */
  const handleRetirementBenefitCheck = async () => {
    try {
      setRetirementBenefitLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      // 퇴직급여충당금 점검 API 호출
      const requestBody = {
        closingDate: closingDate,
        key: 'retirement_benefit'
      };
      
      console.log('퇴직급여충당금 점검 API 요청:', {
        url: 'https://api.eosxai.com/api/closing-check/run-item',
        method: 'POST',
        body: requestBody,
        closingDate: closingDate
      });

      const response = await fetch('https://api.eosxai.com/api/closing-check/run-item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API 에러 응답:', errorData);
        
        if (response.status === 500) {
          alert('서버 내부 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        } else {
          alert(`퇴직급여충당금 점검에 실패했습니다. (${response.status})`);
        }
        return;
      }

      const data: RetirementBenefitResponse = await response.json();
      setRetirementBenefitData(data);
      
      // 편집 가능한 형태로 변환
      const editableItems: EditableRetirementBenefitItem[] = data.rows.map((item, index) => ({
        ...item,
        id: `${item.label}-${index}`,
        isEditing: false
      }));
      setEditableRetirementBenefitItems(editableItems);
      
      // 기존 모달 닫기
      setShowModal(false);
      
      // 퇴직급여충당금 팝업 열기
      setShowRetirementBenefitModal(true);
      
      // 테이블에 퇴직급여충당금 항목 표시
      const updatedRows = rows.map(row => 
        row.key === 'retirement_benefit' 
          ? { ...row, status: 'DONE' as CheckRow['status'] }
          : row
      );
      setRows(updatedRows);
    } catch (error) {
      console.error('퇴직급여충당금 점검 API 호출 오류:', error);
      alert('퇴직급여충당금 점검 중 네트워크 오류가 발생했습니다.');
    } finally {
      setRetirementBenefitLoading(false);
    }
  };

  /** 퇴직급여충당금 결산 반영 */
  const handleRetirementBenefitApply = async () => {
    try {
      setRetirementBenefitLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      // API에서 요구하는 형태로 데이터 변환
      const rows: RetirementBenefitRow[] = editableRetirementBenefitItems.map(item => ({
        provisionAmount: item.provisionAmount,
        debitAccountCode: item.debitAccountCode,
        note: item.note
      }));

      const response = await fetch('https://api.eosxai.com/api/closing-check/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          closingDate: closingDate,
          key: 'retirement_benefit',
          description: '퇴직급여충당금 결산 반영',
          rows: rows
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API 에러 응답:', errorData);
        
        if (response.status === 500) {
          const errorMessage = errorData.detail?.includes('name_userId') 
            ? '서버 설정 오류가 발생했습니다. 관리자에게 문의해주세요.'
            : '서버 내부 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
          alert(errorMessage);
        } else {
          alert(`퇴직급여충당금 결산 반영에 실패했습니다. (${response.status})`);
        }
        return;
      }

      const data: VoucherResponse = await response.json();
      setRetirementBenefitVoucherData(data);
    } catch (error) {
      console.error('퇴직급여충당금 결산 반영 API 호출 오류:', error);
      alert('퇴직급여충당금 결산 반영 중 네트워크 오류가 발생했습니다.');
    } finally {
      setRetirementBenefitLoading(false);
    }
  };

  /** 퇴직급여충당금 아이템 변경 핸들러 */
  const handleRetirementBenefitItemChange = (id: string, field: keyof EditableRetirementBenefitItem, value: string | number | boolean) => {
    setEditableRetirementBenefitItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  /** 가수가지급금 점검 */
  const handleSuspenseCheck = async () => {
    try {
      setSuspenseLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      // 가수가지급금 점검 API 호출
      const requestBody = {
        closingDate: closingDate,
        key: 'suspense_clear'
      };
      
      console.log('가수가지급금 점검 API 요청:', {
        url: 'https://api.eosxai.com/api/closing-check/run-item',
        method: 'POST',
        body: requestBody,
        closingDate: closingDate
      });

      const response = await fetch('https://api.eosxai.com/api/closing-check/run-item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API 에러 응답:', errorData);
        
        if (response.status === 500) {
          alert('서버 내부 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        } else {
          alert(`가수가지급금 점검에 실패했습니다. (${response.status})`);
        }
        return;
      }

      const data: SuspenseResponse = await response.json();
      setSuspenseData(data);
      
      // 편집 가능한 형태로 변환
      const allTransactions: EditableSuspenseTransaction[] = [];
      data.vouchers.forEach(voucher => {
        voucher.transactions.forEach(transaction => {
          allTransactions.push({
            ...transaction,
            isEditing: false
          });
        });
      });
      setEditableSuspenseTransactions(allTransactions);
      
      // 기존 모달 닫기
      setShowModal(false);
      
      // 가수가지급금 팝업 열기
      setShowSuspenseModal(true);
      
      // 테이블에 가수가지급금 항목 표시
      const updatedRows = rows.map(row => 
        row.key === 'suspense_clear' 
          ? { ...row, status: 'DONE' as CheckRow['status'] }
          : row
      );
      setRows(updatedRows);
    } catch (error) {
      console.error('가수가지급금 점검 API 호출 오류:', error);
      alert('가수가지급금 점검 중 네트워크 오류가 발생했습니다.');
    } finally {
      setSuspenseLoading(false);
    }
  };

  /** 가수가지급금 아이템 변경 핸들러 */
  const handleSuspenseItemChange = (id: string, field: keyof EditableSuspenseTransaction, value: string | number | boolean) => {
    setEditableSuspenseTransactions(prev => 
      prev.map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  /** 기간귀속 점검 */
  const handlePeriodAccrualCheck = async () => {
    try {
      setPeriodAccrualLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      // 기간귀속 점검 API 호출
      const requestBody = {
        closingDate: closingDate,
        key: 'period_accrual'
      };
      
      console.log('기간귀속 점검 API 요청:', {
        url: 'https://api.eosxai.com/api/closing-check/run-item',
        method: 'POST',
        body: requestBody,
        closingDate: closingDate
      });

      const response = await fetch('https://api.eosxai.com/api/closing-check/run-item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API 에러 응답:', errorData);
        
        if (response.status === 500) {
          alert('서버 내부 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        } else {
          alert(`기간귀속 점검에 실패했습니다. (${response.status})`);
        }
        return;
      }

      const data: PeriodAccrualResponse = await response.json();
      setPeriodAccrualData(data);
      
      // 편집 가능한 형태로 변환
      const editableItems: EditablePeriodAccrualItem[] = data.rows.map((item, index) => ({
        ...item,
        counterAccountId: item.counterAccountId || '',
        id: `${item.accountCode}-${index}`,
        isEditing: false
      }));
      setEditablePeriodAccrualItems(editableItems);
      
      // 기존 모달 닫기
      setShowModal(false);
      
      // 기간귀속 팝업 열기
      setShowPeriodAccrualModal(true);
      
      // 테이블에 기간귀속 항목 표시
      const updatedRows = rows.map(row => 
        row.key === 'period_accrual' 
          ? { ...row, status: 'DONE' as CheckRow['status'] }
          : row
      );
      setRows(updatedRows);
    } catch (error) {
      console.error('기간귀속 점검 API 호출 오류:', error);
      alert('기간귀속 점검 중 네트워크 오류가 발생했습니다.');
    } finally {
      setPeriodAccrualLoading(false);
    }
  };

  /** 기간귀속 결산 반영 */
  const handlePeriodAccrualApply = async () => {
    try {
      setPeriodAccrualLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      // API에서 요구하는 형태로 데이터 변환
      const rows: PeriodAccrualRow[] = editablePeriodAccrualItems.map(item => {
        const row: PeriodAccrualRow = {
          accountCode: item.accountCode,
          addAmount: item.addAmount,
          memo: item.memo
        };
        // counterAccountId가 있는 경우에만 추가
        if (item.counterAccountId) {
          row.counterAccountId = item.counterAccountId;
        }
        return row;
      });

      const response = await fetch('https://api.eosxai.com/api/closing-check/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          closingDate: closingDate,
          key: 'period_accrual',
          description: '기간귀속 결산 반영',
          rows: rows
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API 에러 응답:', errorData);
        
        if (response.status === 500) {
          const errorMessage = errorData.detail?.includes('name_userId') 
            ? '서버 설정 오류가 발생했습니다. 관리자에게 문의해주세요.'
            : '서버 내부 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
          alert(errorMessage);
        } else {
          alert(`기간귀속 결산 반영에 실패했습니다. (${response.status})`);
        }
        return;
      }

      const data: VoucherResponse = await response.json();
      setPeriodAccrualVoucherData(data);
    } catch (error) {
      console.error('기간귀속 결산 반영 API 호출 오류:', error);
      alert('기간귀속 결산 반영 중 네트워크 오류가 발생했습니다.');
    } finally {
      setPeriodAccrualLoading(false);
    }
  };

  /** 기간귀속 아이템 변경 핸들러 */
  const handlePeriodAccrualItemChange = (id: string, field: keyof EditablePeriodAccrualItem, value: string | number | boolean) => {
    setEditablePeriodAccrualItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  /** AI 자동 점검 */
  const handleAutoCheck = async () => {
    try {
      setLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      const response = await fetch('https://api.eosxai.com/api/closing-check/init', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          closingDate: closingDate,
          mode: 'auto'
        })
      });

      if (!response.ok) {
        throw new Error('API 호출에 실패했습니다.');
      }

      const data: AutoModeResponse = await response.json();
      setAutoJobId(data.jobId);
      setStreamStatus('AI 점검을 시작합니다...');
      
      // AI 점검 항목들을 미리 테이블에 표시
      const aiCheckItems = [
        { id: 1, key: 'depreciation', category: '필수', title: '감가상각 누계 확인', description: '감가상각 누계 확인', status: 'PENDING' as CheckRow['status'] },
        { id: 2, key: 'ending_inventory', category: '필수', title: '재고자산 실사', description: '재고자산 실사', status: 'PENDING' as CheckRow['status'] },
        { id: 3, key: 'bad_debt', category: '필수', title: '매출채권 연령 분석', description: '매출채권 연령 분석', status: 'PENDING' as CheckRow['status'] },
        { id: 4, key: 'retirement_benefit', category: '필수', title: '퇴직급여 충당금', description: '퇴직급여 충당금', status: 'PENDING' as CheckRow['status'] },
        { id: 5, key: 'suspense_clear', category: '정합성', title: '미결산 정리', description: '미결산 정리', status: 'PENDING' as CheckRow['status'] },
        { id: 6, key: 'period_accrual', category: '정합성', title: '기말수정분개', description: '기말수정분개', status: 'PENDING' as CheckRow['status'] },
      ];
      setRows(aiCheckItems);
      
      // SSE 스트림 시작
      startSSEStream(data.jobId, accessToken);
    } catch (error) {
      console.error('AI 자동 점검 API 호출 오류:', error);
      alert('AI 점검을 시작하는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  /** SSE 스트림 처리 */
  const startSSEStream = async (jobId: string, accessToken: string) => {
    try {
      const response = await fetch(`https://api.eosxai.com/api/closing-check/stream?jobId=${jobId}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'text/event-stream',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('No reader available');
      }

      const decoder = new TextDecoder();
      let buffer = '';
      let currentEventType = '';

      const processStream = async () => {
        try {
          while (true) {
            const { done, value } = await reader.read();
            
            if (done) {
              console.log('스트림 완료');
              break;
            }

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() || '';

            for (const line of lines) {
              if (line.trim() === '') continue;
              
              if (line.startsWith('event:')) {
                currentEventType = line.substring(6).trim();
                console.log('이벤트 타입:', currentEventType);
              } else if (line.startsWith('data:')) {
                const data = line.substring(5).trim();
                if (data) {
                  try {
                    const parsedData = JSON.parse(data);
                    console.log('SSE 데이터:', parsedData);
                    
                    // 이벤트 타입에 따라 UI 업데이트
                    if (currentEventType === 'connected') {
                      setStreamStatus('AI 점검에 연결되었습니다.');
                    } else if (currentEventType === 'progress') {
                      setStreamStatus(`진행 중: ${parsedData.stage} (${parsedData.index || 0}/${parsedData.total || 0})`);
                      
                      // 특정 항목의 상태 업데이트
                      if (parsedData.key) {
                        if (parsedData.stage === 'item_done') {
                          // 항목이 완료된 경우
                          setRows(prev => prev.map(row => 
                            row.key === parsedData.key 
                              ? { ...row, status: 'DONE' as CheckRow['status'] }
                              : row
                          ));
                        } else {
                          // 항목이 진행 중인 경우
                          setRows(prev => prev.map(row => 
                            row.key === parsedData.key 
                              ? { ...row, status: 'PROCESSING' as CheckRow['status'] }
                              : row
                          ));
                        }
                      }
                    } else if (currentEventType === 'done') {
                      setStreamStatus(`완료: ${parsedData.progress}/${parsedData.total} 항목 처리됨`);
                      
                      // 모든 결과 데이터 저장
                      setAllResults(parsedData.results);
                      
                      // 모든 항목을 완료 상태로 설정
                      setRows(prev => prev.map(row => ({ ...row, status: 'DONE' as CheckRow['status'] })));
                    } else if (currentEventType === 'error') {
                      setStreamStatus(`오류: ${parsedData.error}`);
                    }
                  } catch {
                    console.log('SSE 텍스트 데이터:', data);
                  }
                }
              }
            }
          }
        } catch (error) {
          console.error('스트림 처리 오류:', error);
        }
      };

      processStream();
    } catch (error) {
      console.error('SSE 연결 오류:', error);
    }
  };

  /** 감가상각 점검 실행 */
  const handleDepreciationCheck = async () => {
    try {
      setDepreciationLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      const requestBody = {
        closingDate: closingDate,
        key: 'depreciation'
      };
      
      console.log('감가상각 점검 API 요청:', {
        url: 'https://api.eosxai.com/api/closing-check/run-item',
        method: 'POST',
        body: requestBody,
        closingDate: closingDate
      });

      const response = await fetch('https://api.eosxai.com/api/closing-check/run-item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API 에러 응답:', errorData);
        
        if (response.status === 500) {
          alert('서버 내부 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        } else {
          alert(`감가상각 점검에 실패했습니다. (${response.status})`);
        }
        return;
      }

      const data: DepreciationResponse = await response.json();
      setDepreciationData(data);
      
      // 편집 가능한 형태로 변환
      const allItems = [...(data.tangible || []), ...(data.intangible || [])];
      const editableItems: EditableDepreciationItem[] = allItems.map((item, index) => ({
        ...item,
        id: `${item.accountName}-${item.itemName}-${index}`,
        isEditing: false
      }));
      setEditableItems(editableItems);
      
      setShowDepreciationModal(true);
    } catch (error) {
      console.error('감가상각 점검 오류:', error);
      alert('감가상각 점검 중 네트워크 오류가 발생했습니다.');
    } finally {
      setDepreciationLoading(false);
    }
  };


  /** 감가상각 항목 값 변경 */
  const handleItemChange = (id: string, field: keyof EditableDepreciationItem, value: string | number | boolean) => {
    setEditableItems(prev => prev.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  /** 감가상각 결산반영 */
  const handleDepreciationApply = async () => {
    try {
      setDepreciationLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      const response = await fetch('https://api.eosxai.com/api/closing-check/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          closingDate: closingDate,
          key: 'depreciation',
          description: '감가상각 처리',
          tangible: editableItems.filter(item => 
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
          } as DepRow)),
          intangible: editableItems.filter(item => 
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
          } as DepRow))
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API 에러 응답:', errorData);
        
        if (response.status === 500) {
          const errorMessage = errorData.detail?.includes('name_userId') 
            ? '서버 설정 오류가 발생했습니다. 관리자에게 문의해주세요.'
            : '서버 내부 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
          alert(errorMessage);
        } else {
          alert(`감가상각 결산반영에 실패했습니다. (${response.status})`);
        }
        return;
      }

      const data: VoucherResponse = await response.json();
      setVoucherData(data);
      
      // 성공 메시지 표시
      alert('감가상각 결산반영이 완료되었습니다.');
    } catch (error) {
      console.error('감가상각 결산반영 오류:', error);
      alert('감가상각 결산반영 중 네트워크 오류가 발생했습니다.');
    } finally {
      setDepreciationLoading(false);
    }
  };


  /** 상태 표시 스타일 */
  const renderStatus = (status: CheckRow['status']) => {
    switch (status) {
      case 'PENDING':
        return <span className="text-red-500">미처리</span>;
      case 'PROCESSING':
        return <span className="text-gray-600">처리중</span>;
      case 'DONE':
        return <span className="text-green-600">처리 완료</span>;
      case 'NA':
        return <span className="text-gray-400">N/A</span>;
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
    return null; // 리다이렉트가 처리됨
  }

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold mb-2 text-[#1E1E1E]">
              AI결산점검
            </h2>
            <p className="text-[#767676]">
              결산일자를 선택하고 결산점검을 시작하세요.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="date"
              value={closingDate}
              onChange={(e) => setClosingDate(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded text-sm"
            />
            <button
              onClick={handleManualCheck}
              disabled={loading}
              className="px-4 py-2 bg-[#2C2C2C] text-white text-sm"
            >
              {loading ? '처리중...' : '직접 점검하기'}
            </button>
            <button
              onClick={handleAutoCheck}
              disabled={loading}
              className="
    relative flex items-center justify-center
    px-4 py-[12px] text-sm
    bg-white
      hover:bg-gray-50 disabled:opacity-50
  "
            >
              {/* 보더 그라데이션 */}
              <span
                className="
      absolute inset-0 rounded border 
      [border-image:linear-gradient(to_right,#00D2FF,#4B5CDD,#BE26FF)_1]
    "
              />
              {/* 텍스트 그라데이션 */}
              <span
                className="
      relative text-xs font-medium leading-[100%]
      bg-gradient-to-r from-[#00D2FF] via-[#4B5CDD] to-[#BE26FF]
      bg-clip-text text-transparent
    "
              >
                  {loading ? '처리중...' : 'AI에게 맡기기'}
              </span>
            </button>
          </div>
        </div>

        {/* 스트림 상태 표시 */}
        {autoJobId && streamStatus && (
          <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-blue-700">{streamStatus}</span>
            </div>
          </div>
        )}

        {/* 점검 테이블 */}
        <table className="w-full border border-[#D9D9D9] text-sm text-[#757575]">
          <thead>
            <tr>
              <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-[120px]">구분</th>
              <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                점검항목
              </th>
              <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">내용</th>
              <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                처리현황
              </th>
              <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] w-[90px]">
                점검/수정
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.id}>
                <td className="p-3 border border-[#D9D9D9] text-red-500">
                  {r.category}
                </td>
                <td className="p-3 border border-[#D9D9D9]">{r.title}</td>
                <td className="p-3 border border-[#D9D9D9]">내용</td>
                <td className="p-3 border border-[#D9D9D9]">
                  {renderStatus(r.status)}
                </td>
                <td className="p-3 border border-[#D9D9D9] text-center">
                  <button
                    className="px-3 py-1 text-xs bg-[#2C2C2C] text-white"
                    onClick={() => {
                      setSelectedItemKey(r.key);
                      if (r.key === 'depreciation') {
                        handleDepreciationCheck();
                        // 감가상각은 별도 팝업을 사용하므로 기존 모달을 열지 않음
                      } else if (r.key === 'ending_inventory') {
                        handleEndingInventoryCheck();
                        // 기말재고는 별도 팝업을 사용하므로 기존 모달을 열지 않음
                      } else if (r.key === 'bad_debt') {
                        handleBadDebtCheck();
                        // 대손상각은 별도 팝업을 사용하므로 기존 모달을 열지 않음
                      } else if (r.key === 'retirement_benefit') {
                        handleRetirementBenefitCheck();
                        // 퇴직급여충당금은 별도 팝업을 사용하므로 기존 모달을 열지 않음
                      } else {
                        setModalData((allResults?.[r.key] as Record<string, unknown>) || null);
                        setShowModal(true);
                      }
                    }}
                  >
                  점검
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* 모달 */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white shadow-lg max-w-7xl w-full mx-4 max-h-[90vh] overflow-hidden">
              {/* 모달 헤더 */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <div>
                  <div className="text-sm text-gray-500 mb-1">
                    AI분개 &gt; AI결산점검 &gt; {selectedItemKey === 'depreciation' && '감가상각'}
                    {selectedItemKey === 'ending_inventory' && '기말재고'}
                    {selectedItemKey === 'bad_debt' && '매출채권 연령 분석'}
                    {selectedItemKey === 'retirement_benefit' && '퇴직급여 충당금'}
                    {selectedItemKey === 'suspense_clear' && '미결산 정리'}
                    {selectedItemKey === 'period_accrual' && '기말수정분개'}
                  </div>
                  <h3 className="text-lg font-bold">
                    {selectedItemKey === 'depreciation' && '감가상각'}
                    {selectedItemKey === 'ending_inventory' && '기말재고'}
                    {selectedItemKey === 'bad_debt' && '매출채권 연령 분석'}
                    {selectedItemKey === 'retirement_benefit' && '퇴직급여 충당금'}
                    {selectedItemKey === 'suspense_clear' && '미결산 정리'}
                    {selectedItemKey === 'period_accrual' && '기말수정분개'}
                  </h3>
                </div>
                <div className="flex gap-2">
                  <button
                    className="px-4 py-2 text-sm bg-[#F3F3F3] text-[#2C2C2C] hover:bg-gray-200"
                    onClick={() => window.print()}
                  >
                    인쇄하기
                  </button>
                  <button
                    className="px-4 py-2 text-sm bg-[#2C2C2C] text-white hover:bg-[#444444]"
                    onClick={() => {/* 결산 반영 기능 */}}
                  >
                    결산 반영
                  </button>
                  <button
                    className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700"
                    onClick={() => setShowModal(false)}
                  >
                    ✕
                  </button>
                </div>
              </div>
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <p className="text-sm text-gray-600 mb-4">
                  {selectedItemKey === 'depreciation' && 'AI가 수행한 감가상각 작업을 확인해 주세요. 수정사항이 있으면 수정 후 결산반영을 누르면 됩니다.'}
                  {selectedItemKey === 'ending_inventory' && '최종 실사 확인된 재고자산액과 장부상 재고액을 조정하여 원가를 계산합니다. 제조업과 상품의 품목별 단가, 원가율 등의 관리를 하고자 하는 회사는 원가관리 메뉴를 활용하여 기말재고작업을 진행하세요.'}
                  {selectedItemKey === 'bad_debt' && 'AI가 수행한 매출채권 연령 분석 작업을 확인해 주세요. 수정사항이 있으면 수정 후 결산반영을 누르면 됩니다.'}
                  {selectedItemKey === 'retirement_benefit' && 'AI가 수행한 퇴직급여 충당금 작업을 확인해 주세요. 수정사항이 있으면 수정 후 결산반영을 누르면 됩니다.'}
                  {selectedItemKey === 'suspense_clear' && 'AI가 수행한 미결산 정리 작업을 확인해 주세요. 수정사항이 있으면 수정 후 결산반영을 누르면 됩니다.'}
                  {selectedItemKey === 'period_accrual' && 'AI가 수행한 기말수정분개 작업을 확인해 주세요. 수정사항이 있으면 수정 후 결산반영을 누르면 됩니다.'}
                </p>
                  
                {/* 감가상각은 별도 팝업으로 처리 */}
                {selectedItemKey === 'depreciation' && (
                  <div className="text-center py-8">
                    <div className="text-gray-500">감가상각 점검을 실행해주세요.</div>
                  </div>
                )}

                {/* 다른 항목들 */}
                {selectedItemKey !== 'depreciation' && selectedItemKey !== 'ending_inventory' && selectedItemKey !== 'bad_debt' && selectedItemKey !== 'retirement_benefit' && modalData && (
                  <>
                    {/* 기말수정분개 테이블 */}
                    {selectedItemKey === 'period_accrual' && (
                      <div>
                        <div className="text-center py-8">
                          <div className="text-gray-500">기말수정분개 데이터가 없습니다.</div>
                        </div>
                      </div>
                    )}
                  </>
                )}
                
                {/* 기말수정분개 테이블 */}
                {selectedItemKey === 'period_accrual' && (
                  <table className="w-full border border-[#D9D9D9] text-sm">
                <thead>
                      <tr className="bg-[#F5F5F5]">
                        <th className="p-2 border border-[#D9D9D9]">계정코드</th>
                        <th className="p-2 border border-[#D9D9D9]">계정명</th>
                        <th className="p-2 border border-[#D9D9D9]">기말잔액</th>
                        <th className="p-2 border border-[#D9D9D9]">추가금액</th>
                        <th className="p-2 border border-[#D9D9D9]">대상계정</th>
                        <th className="p-2 border border-[#D9D9D9]">메모</th>
                  </tr>
                </thead>
                <tbody>
                      {modalData && modalData.rows && Array.isArray(modalData.rows) && modalData.rows.length > 0 ? (
                        (modalData.rows as Record<string, unknown>[]).map((item: Record<string, unknown>, index: number) => (
                          <tr key={index}>
                            <td className="p-2 border border-[#D9D9D9]">{String(item.accountCode || '-')}</td>
                            <td className="p-2 border border-[#D9D9D9]">{String(item.accountName || '-')}</td>
                            <td className="p-2 border border-[#D9D9D9]">
                              <input 
                                type="text" 
                                className="w-full px-1 py-1 text-xs" 
                                defaultValue={typeof item.endingBalance === 'number' ? item.endingBalance.toLocaleString() : String(item.endingBalance || '')}
                              />
                            </td>
                            <td className="p-2 border border-[#D9D9D9]">
                              <input 
                                type="text" 
                                className="w-full px-1 py-1 text-xs" 
                                defaultValue={typeof item.addAmount === 'number' ? item.addAmount.toLocaleString() : String(item.addAmount || '')}
                              />
                            </td>
                            <td className="p-2 border border-[#D9D9D9]">
                              <input 
                                type="text" 
                                className="w-full px-1 py-1 text-xs" 
                                defaultValue={String(item.counterAccountId || '')}
                              />
                            </td>
                            <td className="p-2 border border-[#D9D9D9]">
                              <input 
                                type="text" 
                                className="w-full px-1 py-1 text-xs" 
                                defaultValue={String(item.memo || '')}
                              />
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={6} className="p-4 text-center text-gray-500">데이터가 없습니다.</td>
                  </tr>
                      )}
                </tbody>
              </table>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 감가상각 팝업 */}
        {showDepreciationModal && (
          <div className="fixed inset-0 bg-black bg-opacity-5 flex items-center justify-center z-50 p-6">
            <div className="bg-white shadow-lg w-full h-full max-h-[calc(100vh-48px)] overflow-hidden">
              {/* 팝업 헤더 */}
              <div className="relative p-6 border-b border-gray-200">
                {/* X 버튼 - 우측 상단 고정 */}
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
                  onClick={() => setShowDepreciationModal(false)}
                >
                  ✕
                </button>
                
                <div className="flex justify-between items-start pr-12">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">AI분개 &gt; AI결산점검 &gt; 감가상각</div>
                    <h2 className="text-2xl font-bold text-gray-900">감가상각</h2>
                    <p className="text-gray-600 mt-2">
                      AI가 수행한 감가상각 작업을 확인해 주세요. 수정사항이 있으면 수정후 결산반영을 누르면 됩니다.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="px-4 py-2 text-sm bg-[#F3F3F3] text-[#2C2C2C] hover:bg-gray-200"
                      onClick={() => window.print()}
                    >
                      인쇄하기
                    </button>
                    <button
                      className="px-4 py-2 text-sm bg-[#2C2C2C] text-white hover:bg-[#444444]"
                      onClick={handleDepreciationApply}
                      disabled={depreciationLoading}
                    >
                      {depreciationLoading ? '처리중...' : '결산 반영'}
                </button>
              </div>
            </div>
          </div>

              {/* 팝업 내용 */}
              <div className="p-6 overflow-y-auto h-[calc(100%-120px)]">
                {depreciationLoading ? (
                  <div className="text-center py-8">
                    <div className="text-gray-500">감가상각 데이터를 불러오는 중...</div>
          </div>
                ) : depreciationData ? (
                  <>
                    {/* 감가상각 테이블 */}
                    <div className="mb-8">
                      <table className="w-full border-collapse border border-[#D9D9D9] text-sm text-[#757575]">
                        <thead>
                          <tr>
                            <th rowSpan={2} className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">계정과목</th>
                            <th rowSpan={2} className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">품목</th>
                            <th rowSpan={2} className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">매입일</th>
                            <th rowSpan={2} className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">매입가</th>
                            <th rowSpan={2} className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">감가상각 누계액</th>
                            <th colSpan={2} className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">전기상각액</th>
                            <th colSpan={2} className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">당기상각액</th>
                            <th rowSpan={2} className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">생산원가 여부</th>
                            <th rowSpan={2} className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">내용연수</th>
                            <th rowSpan={2} className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">상각방법</th>
                          </tr>
                          <tr>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">일자</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">상각액</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">일자</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">상각액</th>
                  </tr>
                </thead>
                <tbody>
                          {editableItems.length > 0 ? (
                            editableItems.map((item) => (
                              <tr key={item.id}>
                                <td className="p-3 border border-[#D9D9D9] text-center">{item.accountName}</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">{item.itemName}</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">{item.purchaseDate}</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">{item.purchaseAmount.toLocaleString()} 원</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">{item.accumulatedDep.toLocaleString()} 원</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">{item.priorDep?.date || '-'}</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">{item.priorDep?.amount.toLocaleString() || '0'} 원</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">{item.currentDep?.date || '-'}</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">{item.currentDep?.amount.toLocaleString() || '0'} 원</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <select 
                                    className="w-full text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                    value={item.isProductionCost ? '예' : '부'}
                                    onChange={(e) => handleItemChange(item.id, 'isProductionCost', e.target.value === '예')}
                                  >
                                    <option value="예">예</option>
                                    <option value="부">부</option>
                                  </select>
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="number" 
                                    className="w-full text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                    value={Math.floor(item.usefulLifeMonths / 12)}
                                    onChange={(e) => handleItemChange(item.id, 'usefulLifeMonths', parseInt(e.target.value) * 12)}
                                  />
                                  <span className="ml-1">년</span>
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
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
                            <tr>
                              <td colSpan={12} className="p-8 text-center text-gray-500">
                                감가상각 데이터가 없습니다. 감가상각 점검을 실행해주세요.
                              </td>
                  </tr>
                          )}
                </tbody>
              </table>
                    </div>

                    {/* 전표 점검 섹션 */}
                    <div>
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold">전표 점검</h3>
                        <div className="flex justify-between items-center">
                          <p className="text-gray-600">생성된 전표를 확인하고 저장해주세요.</p>
                <button
                            className="px-6 py-2 bg-[#2C2C2C] text-white hover:bg-[#444444]"
                            onClick={() => {
                              alert('전표가 저장되었습니다.');
                              setShowDepreciationModal(false);
                            }}
                          >
                            저장
                </button>
                        </div>
                      </div>
                      
                      <table className="w-full border-collapse border border-[#D9D9D9] text-sm text-[#757575]">
                        <thead>
                          <tr>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">일자</th>
                            <th colSpan={3} className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">차변</th>
                            <th colSpan={3} className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">대변</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">적요</th>
                          </tr>
                          <tr>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium"></th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">계정과목</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">금액</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">거래처</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">계정과목</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">금액</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">거래처</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {voucherData && voucherData.voucher.transactions.length > 0 ? (
                            <>
                              {voucherData.voucher.transactions.map((transaction, index) => (
                                <tr key={index}>
                                  <td className="p-3 border border-[#D9D9D9] text-center">{closingDate}</td>
                                  {transaction.debitCredit === 'DEBIT' ? (
                                    <>
                                      <td className="p-3 border border-[#D9D9D9] text-center">{transaction.account}</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">{transaction.amount.toLocaleString()}</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">{transaction.partner}</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                    </>
                                  ) : (
                                    <>
                                      <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">{transaction.account}</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">{transaction.amount.toLocaleString()}</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">{transaction.partner}</td>
                                    </>
                                  )}
                                  <td className="p-3 border border-[#D9D9D9] text-center">{transaction.note}</td>
                                </tr>
                              ))}
                              <tr>
                                <td className="p-3 border border-[#D9D9D9] text-center font-medium bg-[#F5F5F5]">소계</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  {voucherData.voucher.transactions
                                    .filter(t => t.debitCredit === 'DEBIT')
                                    .reduce((sum, t) => sum + t.amount, 0)
                                    .toLocaleString()}
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  {voucherData.voucher.transactions
                                    .filter(t => t.debitCredit === 'CREDIT')
                                    .reduce((sum, t) => sum + t.amount, 0)
                                    .toLocaleString()}
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                              </tr>
                            </>
                          ) : (
                            <tr>
                              <td colSpan={8} className="p-8 text-center text-gray-500">
                                결산반영을 실행하면 전표가 생성됩니다.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                      
                      <div className="mt-4">
                        <p className="text-sm text-gray-500 mb-4">플로우 : - 기존에 작성되어있는 데이터 백 API 에서 가져옴</p>
                        <div className="flex justify-end">
                          <button
                            className="px-6 py-2 bg-[#2C2C2C] text-white hover:bg-[#444444]"
                            onClick={() => {
                              alert('전표가 저장되었습니다.');
                              setShowDepreciationModal(false);
                            }}
                          >
                            저장
                </button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-gray-500">감가상각 데이터가 없습니다.</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 기말재고 팝업 */}
        {showEndingInventoryModal && (
          <div className="fixed inset-0 bg-black bg-opacity-5 flex items-center justify-center z-50 p-6">
            <div className="bg-white shadow-lg w-full h-full max-h-[calc(100vh-48px)] overflow-hidden">
              {/* 팝업 헤더 */}
              <div className="relative p-6 border-b border-gray-200">
                {/* X 버튼 - 우측 상단 고정 */}
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
                  onClick={() => setShowEndingInventoryModal(false)}
                >
                  ✕
                </button>
                
                <div className="flex justify-between items-start pr-12">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">AI분개 &gt; AI결산점검 &gt; 기말재고</div>
                    <h2 className="text-2xl font-bold text-gray-900">기말재고</h2>
                    <p className="text-gray-600 mt-2">
                      최종 실사 확인된 재고자산액과 장부상 재고액을 조정하여 원가를 계산합니다. 제조업과 상품의 품목별 단가, 원가율 등의 관리를 하고자 하는 회사는 원가관리 메뉴를 활용하여 기말재고작업을 진행하세요.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="px-4 py-2 text-sm bg-[#F3F3F3] text-[#2C2C2C] hover:bg-gray-200"
                      onClick={() => window.print()}
                    >
                      인쇄하기
                    </button>
                    <button
                      className="px-4 py-2 text-sm bg-[#2C2C2C] text-white hover:bg-[#444444]"
                      onClick={handleEndingInventoryApply}
                      disabled={endingInventoryLoading}
                    >
                      {endingInventoryLoading ? '처리중...' : '결산 반영'}
                    </button>
                  </div>
                </div>
              </div>

              {/* 팝업 내용 */}
              <div className="p-6 overflow-y-auto h-[calc(100%-120px)]">
                {endingInventoryLoading ? (
                  <div className="text-center py-8">
                    <div className="text-gray-500">기말재고 데이터를 불러오는 중...</div>
                  </div>
                ) : endingInventoryData ? (
                  <>
                    {/* 기말재고 테이블 */}
                    <div className="mb-8">
                      <table className="w-full border-collapse border border-[#D9D9D9] text-sm text-[#757575]">
                        <thead>
                          <tr>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">계정과목</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">기초재고</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">기중매입</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">장부상재고액</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">기말실사액</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">매출 외 사용</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">매출원가</th>
                          </tr>
                        </thead>
                        <tbody>
                          {editableInventoryItems.length > 0 ? (
                            editableInventoryItems.map((item) => (
                              <tr key={item.id}>
                                <td className="p-3 border border-[#D9D9D9] text-center">{item.itemName}</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                    value={item.priorAmount.toLocaleString()}
                                    onChange={(e) => handleInventoryItemChange(item.id, 'priorAmount', parseFloat(e.target.value.replace(/,/g, '')) || 0)}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                    value={item.currentAmount.toLocaleString()}
                                    onChange={(e) => handleInventoryItemChange(item.id, 'currentAmount', parseFloat(e.target.value.replace(/,/g, '')) || 0)}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                    value={(item.priorAmount + item.currentAmount).toLocaleString()}
                                    readOnly
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                    value={item.currentAmount.toLocaleString()}
                                    onChange={(e) => handleInventoryItemChange(item.id, 'currentAmount', parseFloat(e.target.value.replace(/,/g, '')) || 0)}
                                  />
                                  <div className="text-xs text-gray-400 mt-1">사용불능재고(*)</div>
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                    value={item.usageCount.toLocaleString()}
                                    onChange={(e) => handleInventoryItemChange(item.id, 'usageCount', parseFloat(e.target.value.replace(/,/g, '')) || 0)}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                    value={item.cogsAmount.toLocaleString()}
                                    onChange={(e) => handleInventoryItemChange(item.id, 'cogsAmount', parseFloat(e.target.value.replace(/,/g, '')) || 0)}
                                  />
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan={7} className="p-8 text-center text-gray-500">
                                기말재고 데이터가 없습니다. 기말재고 점검을 실행해주세요.
                              </td>
                            </tr>
                          )}
                          {/* 소계 행 */}
                          {editableInventoryItems.length > 0 && (
                            <tr className="bg-[#F5F5F5]">
                              <td className="p-3 border border-[#D9D9D9] text-center font-medium">소계</td>
                              <td className="p-3 border border-[#D9D9D9] text-center">
                                {editableInventoryItems.reduce((sum, item) => sum + item.priorAmount, 0).toLocaleString()}
                              </td>
                              <td className="p-3 border border-[#D9D9D9] text-center">
                                {editableInventoryItems.reduce((sum, item) => sum + item.currentAmount, 0).toLocaleString()}
                              </td>
                              <td className="p-3 border border-[#D9D9D9] text-center">
                                {editableInventoryItems.reduce((sum, item) => sum + item.priorAmount + item.currentAmount, 0).toLocaleString()}
                              </td>
                              <td className="p-3 border border-[#D9D9D9] text-center">
                                {editableInventoryItems.reduce((sum, item) => sum + item.currentAmount, 0).toLocaleString()}
                              </td>
                              <td className="p-3 border border-[#D9D9D9] text-center">
                                {editableInventoryItems.reduce((sum, item) => sum + item.usageCount, 0).toLocaleString()}
                              </td>
                              <td className="p-3 border border-[#D9D9D9] text-center">
                                {editableInventoryItems.reduce((sum, item) => sum + item.cogsAmount, 0).toLocaleString()}
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                      
                      {/* 각주 */}
                      <div className="mt-4 text-xs text-gray-500">
                        (*)사용불능재고는 유통기한경과, 마모, 손상, 분실 등으로 판매 불가한 재고가액을 의미합니다.
                      </div>
                    </div>

                    {/* 전표 점검 섹션 */}
                    <div>
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold">전표 점검</h3>
                        <div className="flex justify-between items-center">
                          <p className="text-gray-600">생성된 전표를 확인하고 저장해주세요.</p>
                          <button
                            className="px-6 py-2 bg-[#2C2C2C] text-white hover:bg-[#444444]"
                            onClick={() => {
                              alert('전표가 저장되었습니다.');
                              setShowEndingInventoryModal(false);
                            }}
                          >
                            저장
                          </button>
                        </div>
                      </div>
                      
                      <table className="w-full border-collapse border border-[#D9D9D9] text-sm text-[#757575]">
                        <thead>
                          <tr>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">일자</th>
                            <th colSpan={3} className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">차변</th>
                            <th colSpan={3} className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">대변</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">적요</th>
                          </tr>
                          <tr>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium"></th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">계정과목</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">금액</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">거래처</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">계정과목</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">금액</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">거래처</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {endingInventoryVoucherData && endingInventoryVoucherData.voucher.transactions.length > 0 ? (
                            <>
                              {endingInventoryVoucherData.voucher.transactions.map((transaction, index) => (
                                <tr key={index}>
                                  <td className="p-3 border border-[#D9D9D9] text-center">{closingDate}</td>
                                  {transaction.debitCredit === 'DEBIT' ? (
                                    <>
                                      <td className="p-3 border border-[#D9D9D9] text-center">{transaction.account}</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">{transaction.amount.toLocaleString()}</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">{transaction.partner}</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                    </>
                                  ) : (
                                    <>
                                      <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">{transaction.account}</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">{transaction.amount.toLocaleString()}</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">{transaction.partner}</td>
                                    </>
                                  )}
                                  <td className="p-3 border border-[#D9D9D9] text-center">{transaction.note}</td>
                                </tr>
                              ))}
                              <tr>
                                <td className="p-3 border border-[#D9D9D9] text-center font-medium bg-[#F5F5F5]">소계</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  {endingInventoryVoucherData.voucher.transactions
                                    .filter(t => t.debitCredit === 'DEBIT')
                                    .reduce((sum, t) => sum + t.amount, 0)
                                    .toLocaleString()}
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  {endingInventoryVoucherData.voucher.transactions
                                    .filter(t => t.debitCredit === 'CREDIT')
                                    .reduce((sum, t) => sum + t.amount, 0)
                                    .toLocaleString()}
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                              </tr>
                            </>
                          ) : (
                            <tr>
                              <td colSpan={8} className="p-8 text-center text-gray-500">
                                결산반영을 실행하면 전표가 생성됩니다.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                      
                      <div className="mt-4">
                        <p className="text-sm text-gray-500 mb-4">플로우 : - 기존에 작성되어있는 데이터 백 API 에서 가져옴</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-gray-500">기말재고 데이터가 없습니다.</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 대손상각 팝업 */}
        {showBadDebtModal && (
          <div className="fixed inset-0 bg-black bg-opacity-5 flex items-center justify-center z-50 p-6">
            <div className="bg-white shadow-lg w-full h-full max-h-[calc(100vh-48px)] overflow-hidden">
              {/* 팝업 헤더 */}
              <div className="relative p-6 border-b border-gray-200">
                {/* X 버튼 - 우측 상단 고정 */}
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
                  onClick={() => setShowBadDebtModal(false)}
                >
                  ✕
                </button>
                
                <div className="flex justify-between items-start pr-12">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">AI분개 &gt; AI결산점검 &gt; 대손상각</div>
                    <h2 className="text-2xl font-bold text-gray-900">대손상각</h2>
                    <p className="text-gray-600 mt-2">
                      AI가 수행한 대손상각 작업을 확인해 주세요. 수정사항이 있으면 수정 후 결산반영을 누르면 됩니다.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="px-4 py-2 text-sm bg-[#F3F3F3] text-[#2C2C2C] hover:bg-gray-200"
                      onClick={() => window.print()}
                    >
                      인쇄하기
                    </button>
                    <button
                      className="px-4 py-2 text-sm bg-[#2C2C2C] text-white hover:bg-[#444444]"
                      onClick={handleBadDebtApply}
                      disabled={badDebtLoading}
                    >
                      {badDebtLoading ? '처리중...' : '결산 반영'}
                    </button>
                  </div>
                </div>
              </div>

              {/* 팝업 내용 */}
              <div className="p-6 overflow-y-auto h-[calc(100%-120px)]">
                {badDebtLoading ? (
                  <div className="text-center py-8">
                    <div className="text-gray-500">대손상각 데이터를 불러오는 중...</div>
                  </div>
                ) : badDebtData ? (
                  <>
                    {/* 대손상각 테이블 */}
                    <div className="mb-8">
                      <table className="w-full border-collapse border border-[#D9D9D9] text-sm text-[#757575]">
                        <thead>
                          <tr>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">계정과목</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">거래처</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">기말잔액</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">대손상각액</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">대손사유</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">비율</th>
                          </tr>
                        </thead>
                        <tbody>
                          {editableBadDebtItems.length > 0 ? (
                            editableBadDebtItems.map((item) => (
                              <tr key={item.id}>
                                <td className="p-3 border border-[#D9D9D9] text-center">{item.accountName}</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">{item.partnerName}</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                    value={item.endingBalance.toLocaleString()}
                                    onChange={(e) => handleBadDebtItemChange(item.id, 'endingBalance', parseFloat(e.target.value.replace(/,/g, '')) || 0)}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                    value={item.amount.toLocaleString()}
                                    onChange={(e) => handleBadDebtItemChange(item.id, 'amount', parseFloat(e.target.value.replace(/,/g, '')) || 0)}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <select 
                                    className="w-full text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                    value={item.reason || '세법상 인정액'}
                                    onChange={(e) => handleBadDebtItemChange(item.id, 'reason', e.target.value)}
                                  >
                                    <option value="세법상 인정액">세법상 인정액</option>
                                    <option value="기타">기타</option>
                                  </select>
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
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
                              <td className="p-3 border border-[#D9D9D9] text-center font-medium">합계</td>
                              <td className="p-3 border border-[#D9D9D9] text-center font-medium">-</td>
                              <td className="p-3 border border-[#D9D9D9] text-center font-medium">
                                {editableBadDebtItems.reduce((sum, item) => sum + item.endingBalance, 0).toLocaleString()}
                              </td>
                              <td className="p-3 border border-[#D9D9D9] text-center font-medium">
                                {editableBadDebtItems.reduce((sum, item) => sum + item.amount, 0).toLocaleString()}
                              </td>
                              <td className="p-3 border border-[#D9D9D9] text-center font-medium">-</td>
                              <td className="p-3 border border-[#D9D9D9] text-center font-medium">-</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>

                    {/* 전표 점검 섹션 */}
                    <div>
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold">전표 점검</h3>
                        <div className="flex justify-between items-center">
                          <p className="text-gray-600">생성된 전표를 확인하고 저장해주세요.</p>
                          <button
                            className="px-6 py-2 bg-[#2C2C2C] text-white hover:bg-[#444444]"
                            onClick={() => {
                              alert('전표가 저장되었습니다.');
                              setShowBadDebtModal(false);
                            }}
                          >
                            저장
                          </button>
                        </div>
                      </div>
                      
                      <table className="w-full border-collapse border border-[#D9D9D9] text-sm text-[#757575]">
                        <thead>
                          <tr>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">일자</th>
                            <th colSpan={3} className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">차변</th>
                            <th colSpan={3} className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">대변</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">적요</th>
                          </tr>
                          <tr>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium"></th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">계정과목</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">금액</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">거래처</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">계정과목</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">금액</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">거래처</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {badDebtVoucherData && badDebtVoucherData.voucher.transactions.length > 0 ? (
                            <>
                              {badDebtVoucherData.voucher.transactions.map((transaction, index) => (
                                <tr key={index}>
                                  <td className="p-3 border border-[#D9D9D9] text-center">{closingDate}</td>
                                  {transaction.debitCredit === 'DEBIT' ? (
                                    <>
                                      <td className="p-3 border border-[#D9D9D9] text-center">{transaction.account}</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">{transaction.amount.toLocaleString()}</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">{transaction.partner}</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                    </>
                                  ) : (
                                    <>
                                      <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">{transaction.account}</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">{transaction.amount.toLocaleString()}</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">{transaction.partner}</td>
                                    </>
                                  )}
                                  <td className="p-3 border border-[#D9D9D9] text-center">{transaction.note}</td>
                                </tr>
                              ))}
                              <tr>
                                <td className="p-3 border border-[#D9D9D9] text-center font-medium bg-[#F5F5F5]">소계</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  {badDebtVoucherData.voucher.transactions
                                    .filter(t => t.debitCredit === 'DEBIT')
                                    .reduce((sum, t) => sum + t.amount, 0)
                                    .toLocaleString()}
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  {badDebtVoucherData.voucher.transactions
                                    .filter(t => t.debitCredit === 'CREDIT')
                                    .reduce((sum, t) => sum + t.amount, 0)
                                    .toLocaleString()}
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                              </tr>
                            </>
                          ) : (
                            <tr>
                              <td colSpan={8} className="p-8 text-center text-gray-500">
                                결산반영을 실행하면 전표가 생성됩니다.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                      
                      <div className="mt-4">
                        <p className="text-sm text-gray-500 mb-4">플로우 : - 기존에 작성되어있는 데이터 백 API 에서 가져옴</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-gray-500">대손상각 데이터가 없습니다.</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 퇴직급여충당금 팝업 */}
        {showRetirementBenefitModal && (
          <div className="fixed inset-0 bg-black bg-opacity-5 flex items-center justify-center z-50 p-6">
            <div className="bg-white shadow-lg w-full h-full max-h-[calc(100vh-48px)] overflow-hidden">
              {/* 팝업 헤더 */}
              <div className="relative p-6 border-b border-gray-200">
                {/* X 버튼 - 우측 상단 고정 */}
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
                  onClick={() => setShowRetirementBenefitModal(false)}
                >
                  ✕
                </button>
                
                <div className="flex justify-between items-start pr-12">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">AI분개 &gt; AI결산점검 &gt; 퇴직급여충당금</div>
                    <h2 className="text-2xl font-bold text-gray-900">퇴직급여충당금</h2>
                    <p className="text-gray-600 mt-2">
                      AI가 수행한 퇴직급여충당금 작업을 확인해 주세요. 수정사항이 있으면 수정 후 결산반영을 누르면 됩니다.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="px-4 py-2 text-sm bg-[#F3F3F3] text-[#2C2C2C] hover:bg-gray-200"
                      onClick={() => window.print()}
                    >
                      인쇄하기
                    </button>
                    <button
                      className="px-4 py-2 text-sm bg-[#2C2C2C] text-white hover:bg-[#444444]"
                      onClick={handleRetirementBenefitApply}
                      disabled={retirementBenefitLoading}
                    >
                      {retirementBenefitLoading ? '처리중...' : '결산 반영'}
                    </button>
                  </div>
                </div>
              </div>

              {/* 팝업 내용 */}
              <div className="p-6 overflow-y-auto h-[calc(100%-120px)]">
                {retirementBenefitLoading ? (
                  <div className="text-center py-8">
                    <div className="text-gray-500">퇴직급여충당금 데이터를 불러오는 중...</div>
                  </div>
                ) : retirementBenefitData ? (
                  <>
                    {/* 퇴직급여충당금 테이블 */}
                    <div className="mb-8">
                      <table className="w-full border-collapse border border-[#D9D9D9] text-sm text-[#757575]">
                        <thead>
                          <tr>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">구분</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">지급총액</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">비율</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">충당금</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">적요</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">차변계정</th>
                          </tr>
                        </thead>
                        <tbody>
                          {editableRetirementBenefitItems.length > 0 ? (
                            editableRetirementBenefitItems.map((item) => (
                              <tr key={item.id}>
                                <td className="p-3 border border-[#D9D9D9] text-center">{item.label}</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                    value={item.paidTotal.toLocaleString()}
                                    onChange={(e) => handleRetirementBenefitItemChange(item.id, 'paidTotal', parseFloat(e.target.value.replace(/,/g, '')) || 0)}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">{item.ratioText}</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                    value={item.provisionAmount.toLocaleString()}
                                    onChange={(e) => handleRetirementBenefitItemChange(item.id, 'provisionAmount', parseFloat(e.target.value.replace(/,/g, '')) || 0)}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-center border-none bg-transparent focus:outline-none text-[#B3B3B3]"
                                    value={item.note}
                                    onChange={(e) => handleRetirementBenefitItemChange(item.id, 'note', e.target.value)}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">{item.debitAccountCode}</td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan={6} className="p-8 text-center text-gray-500">
                                퇴직급여충당금 데이터가 없습니다. 퇴직급여충당금 점검을 실행해주세요.
                              </td>
                            </tr>
                          )}
                          {/* 합계 행 */}
                          {editableRetirementBenefitItems.length > 0 && (
                            <tr className="bg-[#F5F5F5]">
                              <td className="p-3 border border-[#D9D9D9] text-center font-medium">합계</td>
                              <td className="p-3 border border-[#D9D9D9] text-center font-medium">
                                {editableRetirementBenefitItems.reduce((sum, item) => sum + item.paidTotal, 0).toLocaleString()}
                              </td>
                              <td className="p-3 border border-[#D9D9D9] text-center font-medium">-</td>
                              <td className="p-3 border border-[#D9D9D9] text-center font-medium">
                                {editableRetirementBenefitItems.reduce((sum, item) => sum + item.provisionAmount, 0).toLocaleString()}
                              </td>
                              <td className="p-3 border border-[#D9D9D9] text-center font-medium">-</td>
                              <td className="p-3 border border-[#D9D9D9] text-center font-medium">-</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>

                    {/* 전표 점검 섹션 */}
                    <div>
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold">전표 점검</h3>
                        <div className="flex justify-between items-center">
                          <p className="text-gray-600">생성된 전표를 확인하고 저장해주세요.</p>
                          <button
                            className="px-6 py-2 bg-[#2C2C2C] text-white hover:bg-[#444444]"
                            onClick={() => {
                              alert('전표가 저장되었습니다.');
                              setShowRetirementBenefitModal(false);
                            }}
                          >
                            저장
                          </button>
                        </div>
                      </div>
                      
                      <table className="w-full border-collapse border border-[#D9D9D9] text-sm text-[#757575]">
                        <thead>
                          <tr>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">일자</th>
                            <th colSpan={3} className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">차변</th>
                            <th colSpan={3} className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">대변</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">적요</th>
                          </tr>
                          <tr>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium"></th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">계정과목</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">금액</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">거래처</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">계정과목</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">금액</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium">거래처</th>
                            <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9] text-center font-medium"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {retirementBenefitVoucherData && retirementBenefitVoucherData.voucher.transactions.length > 0 ? (
                            <>
                              {retirementBenefitVoucherData.voucher.transactions.map((transaction, index) => (
                                <tr key={index}>
                                  <td className="p-3 border border-[#D9D9D9] text-center">{closingDate}</td>
                                  {transaction.debitCredit === 'DEBIT' ? (
                                    <>
                                      <td className="p-3 border border-[#D9D9D9] text-center">{transaction.account}</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">{transaction.amount.toLocaleString()}</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">{transaction.partner}</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                    </>
                                  ) : (
                                    <>
                                      <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">{transaction.account}</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">{transaction.amount.toLocaleString()}</td>
                                      <td className="p-3 border border-[#D9D9D9] text-center">{transaction.partner}</td>
                                    </>
                                  )}
                                  <td className="p-3 border border-[#D9D9D9] text-center">{transaction.note}</td>
                                </tr>
                              ))}
                              <tr>
                                <td className="p-3 border border-[#D9D9D9] text-center font-medium bg-[#F5F5F5]">소계</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  {retirementBenefitVoucherData.voucher.transactions
                                    .filter(t => t.debitCredit === 'DEBIT')
                                    .reduce((sum, t) => sum + t.amount, 0)
                                    .toLocaleString()}
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  {retirementBenefitVoucherData.voucher.transactions
                                    .filter(t => t.debitCredit === 'CREDIT')
                                    .reduce((sum, t) => sum + t.amount, 0)
                                    .toLocaleString()}
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">-</td>
                              </tr>
                            </>
                          ) : (
                            <tr>
                              <td colSpan={8} className="p-8 text-center text-gray-500">
                                결산반영을 실행하면 전표가 생성됩니다.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                      
                      <div className="mt-4">
                        <p className="text-sm text-gray-500 mb-4">플로우 : - 기존에 작성되어있는 데이터 백 API 에서 가져옴</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-gray-500">퇴직급여충당금 데이터가 없습니다.</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
