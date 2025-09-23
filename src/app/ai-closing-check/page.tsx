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
  const [modalLoading, setModalLoading] = useState(false);

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
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      // 직접 점검용 하드코딩된 데이터
      const manualCheckItems = [
        { id: 1, key: 'depreciation', category: '필수', title: '감가상각처리', description: '내용', status: 'PENDING' as CheckRow['status'] },
        { id: 2, key: 'ending_inventory', category: '필수', title: '기말재고확인', description: '내용', status: 'PENDING' as CheckRow['status'] },
        { id: 3, key: 'bad_debt', category: '필수', title: '대손상각', description: '내용', status: 'PENDING' as CheckRow['status'] },
        { id: 4, key: 'retirement_benefit', category: '필수', title: '퇴직급여충당', description: '내용', status: 'PENDING' as CheckRow['status'] },
        { id: 5, key: 'suspense_clear', category: '필수', title: '가수, 가지급 정리', description: '내용', status: 'PENDING' as CheckRow['status'] },
        { id: 6, key: 'period_accrual', category: '외부감사시 필수', title: '기간귀속', description: '내용', status: 'PENDING' as CheckRow['status'] },
        { id: 7, key: 'negative_balance', category: '정합성', title: '마이너스잔액', description: '내용', status: 'PENDING' as CheckRow['status'] },
      ];

      setRows(manualCheckItems);
    } catch (error) {
      console.error('직접 점검 API 호출 오류:', error);
      alert('점검 항목을 불러오는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
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
      setModalLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      const response = await fetch('https://api.eosxai.com/api/closing-check/run-item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          closingDate: closingDate,
          key: 'depreciation'
        })
      });

      if (!response.ok) {
        throw new Error('감가상각 점검 API 호출에 실패했습니다.');
      }

      const data = await response.json();
      setModalData(data);
    } catch (error) {
      console.error('감가상각 점검 오류:', error);
      alert('감가상각 점검을 실행하는데 실패했습니다.');
    } finally {
      setModalLoading(false);
    }
  };

  /** 기말재고 점검 실행 */
  const handleEndingInventoryCheck = async () => {
    try {
      setModalLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      
      if (!accessToken) {
        alert('로그인이 필요합니다.');
        return;
      }

      const response = await fetch('https://api.eosxai.com/api/closing-check/run-item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          closingDate: closingDate,
          key: 'ending_inventory'
        })
      });

      if (!response.ok) {
        throw new Error('기말재고 점검 API 호출에 실패했습니다.');
      }

      const data = await response.json();
      setModalData(data);
    } catch (error) {
      console.error('기말재고 점검 오류:', error);
      alert('기말재고 점검을 실행하는데 실패했습니다.');
    } finally {
      setModalLoading(false);
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
                      } else if (r.key === 'ending_inventory') {
                        handleEndingInventoryCheck();
                      } else {
                        setModalData((allResults?.[r.key] as Record<string, unknown>) || null);
                      }
                      setShowModal(true);
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
                    onClick={() => {/* 인쇄 기능 */}}
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
                  
                {/* 감가상각 테이블 */}
                {selectedItemKey === 'depreciation' && (
                  <div>
                    {modalLoading ? (
                      <div className="text-center py-8">
                        <div className="text-gray-500">감가상각 점검을 실행 중입니다...</div>
                      </div>
                    ) : modalData ? (
                      <table className="w-full border border-[#D9D9D9] text-sm">
                <thead>
                          <tr className="bg-[#F5F5F5]">
                            <th className="p-3 border border-[#D9D9D9] text-center">계정과목</th>
                            <th className="p-3 border border-[#D9D9D9] text-center">품목</th>
                            <th className="p-3 border border-[#D9D9D9] text-center">매입일</th>
                            <th className="p-3 border border-[#D9D9D9] text-center">매입가</th>
                            <th className="p-3 border border-[#D9D9D9] text-center">감가상각 누계액</th>
                            <th className="p-3 border border-[#D9D9D9] text-center" colSpan={2}>전기상각액</th>
                            <th className="p-3 border border-[#D9D9D9] text-center" colSpan={2}>당기상각액</th>
                            <th className="p-3 border border-[#D9D9D9] text-center">생산원가 여부</th>
                            <th className="p-3 border border-[#D9D9D9] text-center">내용연수</th>
                            <th className="p-3 border border-[#D9D9D9] text-center">상각방법</th>
                          </tr>
                          <tr className="bg-[#F5F5F5]">
                            <th className="p-3 border border-[#D9D9D9]"></th>
                            <th className="p-3 border border-[#D9D9D9]"></th>
                            <th className="p-3 border border-[#D9D9D9]"></th>
                            <th className="p-3 border border-[#D9D9D9]"></th>
                            <th className="p-3 border border-[#D9D9D9]"></th>
                            <th className="p-3 border border-[#D9D9D9] text-center">일자</th>
                            <th className="p-3 border border-[#D9D9D9] text-center">상각액</th>
                            <th className="p-3 border border-[#D9D9D9] text-center">일자</th>
                            <th className="p-3 border border-[#D9D9D9] text-center">상각액</th>
                            <th className="p-3 border border-[#D9D9D9]"></th>
                            <th className="p-3 border border-[#D9D9D9]"></th>
                            <th className="p-3 border border-[#D9D9D9]"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* 유형자산 데이터 */}
                          {modalData.tangible && Array.isArray(modalData.tangible) && modalData.tangible.length > 0 && (
                            (modalData.tangible as Record<string, unknown>[]).map((item: Record<string, unknown>, index: number) => {
                              // 타입 오류 방지 및 안전한 접근을 위한 타입 단언 및 구조 분해
                              const priorDep = item.priorDep as { date?: string; amount?: number };
                              const currentDep = item.currentDep as { date?: string; amount?: number };
                              return (
                                <tr key={`tangible-${index}`}>
                                  <td className="p-3 border border-[#D9D9D9] text-center">{String(item.accountName ?? '-')}</td>
                                  <td className="p-3 border border-[#D9D9D9] text-center">
                                    <input 
                                      type="text" 
                                      className="w-full px-2 py-1 text-xs border rounded" 
                                      defaultValue={String(item.itemName ?? '')}
                                    />
                                  </td>
                                  <td className="p-3 border border-[#D9D9D9] text-center">
                                    <input 
                                      type="text" 
                                      className="w-full px-2 py-1 text-xs border rounded" 
                                      defaultValue={String(item.purchaseDate ?? '')}
                                    />
                                  </td>
                                  <td className="p-3 border border-[#D9D9D9] text-center">
                                    <input 
                                      type="text" 
                                      className="w-full px-2 py-1 text-xs border rounded" 
                                      defaultValue={typeof item.purchaseAmount === 'number' ? item.purchaseAmount.toLocaleString() : String(item.purchaseAmount ?? '')}
                                    />
                                  </td>
                                  <td className="p-3 border border-[#D9D9D9] text-center">
                                    <input 
                                      type="text" 
                                      className="w-full px-2 py-1 text-xs border rounded" 
                                      defaultValue={typeof item.accumulatedDep === 'number' ? item.accumulatedDep.toLocaleString() : String(item.accumulatedDep ?? '')}
                                    />
                                  </td>
                                  <td className="p-3 border border-[#D9D9D9] text-center">
                                    <input 
                                      type="text" 
                                      className="w-full px-2 py-1 text-xs border rounded" 
                                      defaultValue={String(priorDep?.date ?? '')}
                                    />
                                  </td>
                                  <td className="p-3 border border-[#D9D9D9] text-center">
                                    <input 
                                      type="text" 
                                      className="w-full px-2 py-1 text-xs border rounded" 
                                      defaultValue={typeof priorDep?.amount === 'number' ? priorDep.amount.toLocaleString() : String(priorDep?.amount ?? '')}
                                    />
                                  </td>
                                  <td className="p-3 border border-[#D9D9D9] text-center">
                                    <input 
                                      type="text" 
                                      className="w-full px-2 py-1 text-xs border rounded" 
                                      defaultValue={String(currentDep?.date ?? '')}
                                    />
                                  </td>
                                  <td className="p-3 border border-[#D9D9D9] text-center">
                                    <input 
                                      type="text" 
                                      className="w-full px-2 py-1 text-xs border rounded" 
                                      defaultValue={typeof currentDep?.amount === 'number' ? currentDep.amount.toLocaleString() : String(currentDep?.amount ?? '')}
                                    />
                                  </td>
                                  <td className="p-3 border border-[#D9D9D9] text-center">
                                    <select className="w-full px-2 py-1 text-xs border rounded" defaultValue={item.isProductionCost === true ? "true" : "false"}>
                                      <option value="false">부</option>
                                      <option value="true">여</option>
                                    </select>
                                  </td>
                                  <td className="p-3 border border-[#D9D9D9] text-center">
                                    <input 
                                      type="text" 
                                      className="w-full px-2 py-1 text-xs border rounded" 
                                      defaultValue={String(item.usefulLifeMonths ?? '')}
                                      placeholder="개월"
                                    />
                                  </td>
                                  <td className="p-3 border border-[#D9D9D9] text-center">
                                    <select className="w-full px-2 py-1 text-xs border rounded" defaultValue={String(item.method ?? 'straight')}>
                                      <option value="straight">정액법</option>
                                      <option value="declining">정률법</option>
                                      <option value="sum">연수합계법</option>
                                    </select>
                                  </td>
                                </tr>
                              );
                            })
                          )}
                          
                          {/* 무형자산 데이터 */}
                          {modalData.intangible && Array.isArray(modalData.intangible) && modalData.intangible.length > 0 && (
                            (modalData.intangible as Record<string, unknown>[]).map((item: Record<string, unknown>, index: number) => (
                              <tr key={`intangible-${index}`}>
                                <td className="p-3 border border-[#D9D9D9] text-center">{String(item.accountName || '-')}</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-xs border rounded" 
                                    defaultValue={String(item.itemName || '')}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-xs border rounded" 
                                    defaultValue={String(item.purchaseDate || '')}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-xs border rounded" 
                                    defaultValue={typeof item.purchaseAmount === 'number' ? item.purchaseAmount.toLocaleString() : String(item.purchaseAmount || '')}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-xs border rounded" 
                                    defaultValue={typeof item.accumulatedDep === 'number' ? item.accumulatedDep.toLocaleString() : String(item.accumulatedDep || '')}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-xs border rounded" 
                                    defaultValue={String((item.priorDep as Record<string, unknown>)?.date || '')}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-xs border rounded" 
                                    defaultValue={typeof (item.priorDep as Record<string, unknown>)?.amount === 'number' ? ((item.priorDep as Record<string, unknown>).amount as number).toLocaleString() : String((item.priorDep as Record<string, unknown>)?.amount || '')}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-xs border rounded" 
                                    defaultValue={String((item.currentDep as Record<string, unknown>)?.date || '')}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-xs border rounded" 
                                    defaultValue={typeof (item.currentDep as Record<string, unknown>)?.amount === 'number' ? ((item.currentDep as Record<string, unknown>).amount as number).toLocaleString() : String((item.currentDep as Record<string, unknown>)?.amount || '')}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <select className="w-full px-2 py-1 text-xs border rounded">
                                    <option value="false" selected={item.isProductionCost === false}>부</option>
                                    <option value="true" selected={item.isProductionCost === true}>여</option>
                                  </select>
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-xs border rounded" 
                                    defaultValue={String(item.usefulLifeMonths || '')}
                                    placeholder="개월"
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <select className="w-full px-2 py-1 text-xs border rounded">
                                    <option value="straight" selected={item.method === 'straight'}>정액법</option>
                                    <option value="declining" selected={item.method === 'declining'}>정률법</option>
                                    <option value="sum" selected={item.method === 'sum'}>연수합계법</option>
                                  </select>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    ) : (
                      <div className="text-center py-8">
                        <div className="text-gray-500">감가상각 점검을 실행해주세요.</div>
                      </div>
                    )}
                  </div>
                )}
                
                {/* 기말재고 테이블 */}
                {selectedItemKey === 'ending_inventory' && (
                  <div>
                    {modalLoading ? (
                      <div className="text-center py-8">
                        <div className="text-gray-500">기말재고 점검을 실행 중입니다...</div>
                      </div>
                    ) : modalData ? (
                      <table className="w-full border border-[#D9D9D9] text-sm">
                        <thead>
                          <tr className="bg-[#F5F5F5]">
                            <th className="p-3 border border-[#D9D9D9] text-center">계정과목</th>
                            <th className="p-3 border border-[#D9D9D9] text-center">기초재고</th>
                            <th className="p-3 border border-[#D9D9D9] text-center">기중매입</th>
                            <th className="p-3 border border-[#D9D9D9] text-center">장부상재고액</th>
                            <th className="p-3 border border-[#D9D9D9] text-center" colSpan={2}>기말실사액</th>
                            <th className="p-3 border border-[#D9D9D9] text-center">매출 외 사용</th>
                            <th className="p-3 border border-[#D9D9D9] text-center">매출원가</th>
                          </tr>
                          <tr className="bg-[#F5F5F5]">
                            <th className="p-3 border border-[#D9D9D9]"></th>
                            <th className="p-3 border border-[#D9D9D9]"></th>
                            <th className="p-3 border border-[#D9D9D9]"></th>
                            <th className="p-3 border border-[#D9D9D9]"></th>
                            <th className="p-3 border border-[#D9D9D9] text-center">사용불능재고(*)</th>
                            <th className="p-3 border border-[#D9D9D9]"></th>
                            <th className="p-3 border border-[#D9D9D9]"></th>
                            <th className="p-3 border border-[#D9D9D9]"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* 실제 데이터 또는 샘플 데이터 */}
                          {modalData.rows && Array.isArray(modalData.rows) && modalData.rows.length > 0 ? (
                            (modalData.rows as Record<string, unknown>[]).map((item: Record<string, unknown>, index: number) => (
                              <tr key={index}>
                                <td className="p-3 border border-[#D9D9D9] text-center">{String(item.itemName || '상품')}</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-xs border rounded" 
                                    defaultValue={String(item.priorQty || '')}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-xs border rounded" 
                                    defaultValue={typeof item.priorAmount === 'number' ? item.priorAmount.toLocaleString() : String(item.priorAmount || '')}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-xs border rounded" 
                                    defaultValue={String(item.currentQty || '')}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-xs border rounded" 
                                    defaultValue={typeof item.currentAmount === 'number' ? item.currentAmount.toLocaleString() : String(item.currentAmount || '')}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-xs border rounded" 
                                    defaultValue={String(item.priorQty || '')}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-xs border rounded" 
                                    defaultValue={typeof item.priorAmount === 'number' ? item.priorAmount.toLocaleString() : String(item.priorAmount || '')}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-xs border rounded" 
                                    defaultValue={String(item.currentQty || '')}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-xs border rounded" 
                                    defaultValue={typeof item.currentAmount === 'number' ? item.currentAmount.toLocaleString() : String(item.currentAmount || '')}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-xs border rounded" 
                                    defaultValue={String(item.usageCount || '')}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-xs border rounded" 
                                    defaultValue={String(item.usageCount || '')}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-xs border rounded" 
                                    defaultValue={typeof item.cogsAmount === 'number' ? item.cogsAmount.toLocaleString() : String(item.cogsAmount || '')}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-xs border rounded" 
                                    defaultValue={String(item.usageCount || '')}
                                  />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input 
                                    type="text" 
                                    className="w-full px-2 py-1 text-xs border rounded" 
                                    defaultValue={typeof item.cogsAmount === 'number' ? item.cogsAmount.toLocaleString() : String(item.cogsAmount || '')}
                                  />
                                </td>
                              </tr>
                            ))
                          ) : (
                            // 샘플 데이터
                            <>
                              <tr>
                                <td className="p-3 border border-[#D9D9D9] text-center">상품</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input type="text" className="w-full px-2 py-1 text-xs border rounded" defaultValue="000 원" />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input type="text" className="w-full px-2 py-1 text-xs border rounded" defaultValue="000 원" />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input type="text" className="w-full px-2 py-1 text-xs border rounded" defaultValue="000 원" />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input type="text" className="w-full px-2 py-1 text-xs border rounded" defaultValue="000 원" />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input type="text" className="w-full px-2 py-1 text-xs border rounded" defaultValue="000 원" />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input type="text" className="w-full px-2 py-1 text-xs border rounded" defaultValue="000 원" />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input type="text" className="w-full px-2 py-1 text-xs border rounded" defaultValue="000 원" />
                                </td>
                              </tr>
                              <tr>
                                <td className="p-3 border border-[#D9D9D9] text-center">상품</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input type="text" className="w-full px-2 py-1 text-xs border rounded" defaultValue="000 원" />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input type="text" className="w-full px-2 py-1 text-xs border rounded" defaultValue="000 원" />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input type="text" className="w-full px-2 py-1 text-xs border rounded" defaultValue="000 원" />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input type="text" className="w-full px-2 py-1 text-xs border rounded" defaultValue="000 원" />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input type="text" className="w-full px-2 py-1 text-xs border rounded" defaultValue="000 원" />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input type="text" className="w-full px-2 py-1 text-xs border rounded" defaultValue="000 원" />
                                </td>
                                <td className="p-3 border border-[#D9D9D9] text-center">
                                  <input type="text" className="w-full px-2 py-1 text-xs border rounded" defaultValue="000 원" />
                                </td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="p-3 border border-[#D9D9D9] text-center font-medium">소계</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">000 원</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">000 원</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">000 원</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">000 원</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">000 원</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">000 원</td>
                                <td className="p-3 border border-[#D9D9D9] text-center">000 원</td>
                              </tr>
                            </>
                          )}
                        </tbody>
                      </table>
                    ) : (
                      <div className="text-center py-8">
                        <div className="text-gray-500">기말재고 점검을 실행해주세요.</div>
                      </div>
                    )}
                    
                    {/* 각주 */}
                    <div className="mt-4 text-xs text-gray-500">
                      (*)사용불능재고는 유통기한경과, 마모, 손상, 분실 등으로 판매 불가한 재고가액을 의미합니다.
                    </div>
                  </div>
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
      </div>
    </div>
  );
}
