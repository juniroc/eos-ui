'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
// import { getToken } from '@/services/api';

interface CheckRow {
  id: number;
  key: string;
  category: string;
  title: string;
  description: string;
  status: 'PENDING' | 'PROCESSING' | 'DONE' | 'NA';
}

interface ClosingCheckResponse {
  closingDate: string;
  items: CheckRow[];
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
  const [modalData, setModalData] = useState<any>(null);
  const [selectedItemKey, setSelectedItemKey] = useState<string>('');
  const [allResults, setAllResults] = useState<any>(null);

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

      const response = await fetch('https://api.eosxai.com/api/closing-check/init', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          closingDate: closingDate,
          mode: 'manual'
        })
      });

      if (!response.ok) {
        throw new Error('API 호출에 실패했습니다.');
      }

      const data: ClosingCheckResponse = await response.json();
      
      // API 응답을 CheckRow 형식으로 변환
      const convertedRows = data.items.map((item, index) => ({
        id: index + 1,
        key: item.key,
        category: item.category,
        title: item.title,
        description: item.description,
        status: item.status as CheckRow['status']
      }));

      setRows(convertedRows);
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
                  } catch (e) {
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
              AI 결산점검
            </h2>
            <p className="text-[#767676]">
              결산항목을 선택하고 결산점검을 시작하세요.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {/* 결산일 선택 */}
            <div className="flex items-center gap-2">
              <label className="text-sm text-[#767676]">결산일:</label>
              <input
                type="date"
                value={closingDate}
                onChange={(e) => setClosingDate(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded text-sm"
              />
            </div>
            
          <div className="flex gap-3">
            <button
                onClick={handleManualCheck}
                disabled={loading}
              className="
    flex items-center justify-center
    min-w-[90px] h-[28px] px-3
    rounded bg-[#2C2C2C] border border-[#2C2C2C]
    text-xs font-medium leading-[100%] text-white
      hover:bg-[#444444] transition disabled:opacity-50
  "
            >
                {loading ? '처리중...' : '직접 점검하기'}
            </button>
            <button
                onClick={handleAutoCheck}
                disabled={loading}
              className="
    relative flex items-center justify-center
    min-w-[90px] h-[28px] px-3
    rounded bg-white
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
        <table className="w-full border border-[#D9D9D9] text-sm">
          <thead>
            <tr>
              <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">구분</th>
              <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                점검항목
              </th>
              <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">내용</th>
              <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
                처리현황
              </th>
              <th className="bg-[#F5F5F5] p-3 border border-[#D9D9D9]">
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
                <td className="p-3 border border-[#D9D9D9]">입력하기</td>
                <td className="p-3 border border-[#D9D9D9]">
                  {renderStatus(r.status)}
                </td>
                <td className="p-3 border border-[#D9D9D9] text-center">
                  <button
                    className="text-xs px-3 py-1 border rounded"
                    onClick={() => {
                      console.log('선택된 항목:', r.key);
                      console.log('전체 결과:', allResults);
                      console.log('해당 항목 데이터:', allResults?.[r.key]);
                      setSelectedItemKey(r.key);
                      setModalData(allResults?.[r.key] || null);
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
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg max-w-6xl w-full p-6">
              {/* 모달 헤더 */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">
                  {selectedItemKey === 'depreciation' && '감가상각 점검'}
                  {selectedItemKey === 'ending_inventory' && '재고자산 실사'}
                  {selectedItemKey === 'bad_debt' && '매출채권 연령 분석'}
                  {selectedItemKey === 'retirement_benefit' && '퇴직급여 충당금'}
                  {selectedItemKey === 'suspense_clear' && '미결산 정리'}
                  {selectedItemKey === 'period_accrual' && '기말수정분개'}
                </h3>
                <div className="flex gap-2">
                  <button
                    className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50"
                    onClick={() => {/* 인쇄 기능 */}}
                  >
                    인쇄하기
                  </button>
                  <button
                    className="px-3 py-1 text-sm bg-black text-white rounded hover:bg-gray-800"
                    onClick={() => {/* 결산 반영 기능 */}}
                  >
                    결산 반영
                  </button>
                </div>
              </div>
              {modalData ? (
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-4">
                    AI가 수행한 {selectedItemKey === 'depreciation' ? '감가상각' : 
                    selectedItemKey === 'ending_inventory' ? '재고자산 실사' :
                    selectedItemKey === 'bad_debt' ? '매출채권 연령 분석' :
                    selectedItemKey === 'retirement_benefit' ? '퇴직급여 충당금' :
                    selectedItemKey === 'suspense_clear' ? '미결산 정리' :
                    '기말수정분개'} 작업을 확인해주세요. 수정사항이 있으면 수정 후 '결산 반영'을 클릭해주세요.
                  </p>
                  
                  {/* 감가상각 테이블 */}
                  {selectedItemKey === 'depreciation' && (
                    <table className="w-full border border-[#D9D9D9] text-sm">
                <thead>
                        <tr className="bg-[#F5F5F5]">
                          <th className="p-2 border border-[#D9D9D9]">계정과목</th>
                          <th className="p-2 border border-[#D9D9D9]">품목</th>
                          <th className="p-2 border border-[#D9D9D9]">매입일</th>
                          <th className="p-2 border border-[#D9D9D9]">매입가</th>
                          <th className="p-2 border border-[#D9D9D9]">감가상각 누계액</th>
                          <th className="p-2 border border-[#D9D9D9]">전기상각액</th>
                          <th className="p-2 border border-[#D9D9D9]">당기상각액</th>
                          <th className="p-2 border border-[#D9D9D9]">생산원가 여부</th>
                          <th className="p-2 border border-[#D9D9D9]">내용연수</th>
                          <th className="p-2 border border-[#D9D9D9]">상각방법</th>
                        </tr>
                      </thead>
                      <tbody>
                        {modalData && modalData.tangible && modalData.tangible.length > 0 ? (
                          modalData.tangible.map((item: any, index: number) => (
                            <tr key={index}>
                              <td className="p-2 border border-[#D9D9D9]">{item.accountName || '-'}</td>
                              <td className="p-2 border border-[#D9D9D9]">
                                <input 
                                  type="text" 
                                  className="w-full px-1 py-1 text-xs" 
                                  defaultValue={item.itemName || ''}
                                />
                              </td>
                              <td className="p-2 border border-[#D9D9D9]">
                                <input 
                                  type="text" 
                                  className="w-full px-1 py-1 text-xs" 
                                  defaultValue={item.purchaseDate || ''}
                                />
                              </td>
                              <td className="p-2 border border-[#D9D9D9]">
                                <input 
                                  type="text" 
                                  className="w-full px-1 py-1 text-xs" 
                                  defaultValue={item.purchasePrice?.toLocaleString() || ''}
                                />
                              </td>
                              <td className="p-2 border border-[#D9D9D9]">
                                <input 
                                  type="text" 
                                  className="w-full px-1 py-1 text-xs" 
                                  defaultValue={item.accumulatedDepreciation?.toLocaleString() || ''}
                                />
                              </td>
                              <td className="p-2 border border-[#D9D9D9]">
                                <div className="flex gap-1">
                                  <input 
                                    type="text" 
                                    className="w-16 px-1 py-1 text-xs" 
                                    defaultValue={item.previousDepreciationDate || ''}
                                    placeholder="일자"
                                  />
                                  <input 
                                    type="text" 
                                    className="w-20 px-1 py-1 text-xs" 
                                    defaultValue={item.previousDepreciationAmount?.toLocaleString() || ''}
                                    placeholder="상각액"
                                  />
                                </div>
                              </td>
                              <td className="p-2 border border-[#D9D9D9]">
                                <div className="flex gap-1">
                                  <input 
                                    type="text" 
                                    className="w-16 px-1 py-1 text-xs" 
                                    defaultValue={item.currentDepreciationDate || ''}
                                    placeholder="일자"
                                  />
                                  <input 
                                    type="text" 
                                    className="w-20 px-1 py-1 text-xs" 
                                    defaultValue={item.currentDepreciationAmount?.toLocaleString() || ''}
                                    placeholder="상각액"
                                  />
                                </div>
                              </td>
                              <td className="p-2 border border-[#D9D9D9]">
                                <select className="w-full px-1 py-1 text-xs">
                                  <option value="no">부</option>
                                  <option value="yes">여</option>
                                </select>
                              </td>
                              <td className="p-2 border border-[#D9D9D9]">
                                <input 
                                  type="text" 
                                  className="w-full px-1 py-1 text-xs" 
                                  defaultValue={item.usefulLife || ''}
                                  placeholder="년"
                                />
                              </td>
                              <td className="p-2 border border-[#D9D9D9]">
                                <select className="w-full px-1 py-1 text-xs">
                                  <option value="straight">정액법</option>
                                  <option value="declining">정률법</option>
                                  <option value="sum">연수합계법</option>
                                </select>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={10} className="p-4 text-center text-gray-500">데이터가 없습니다.</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
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
                        {modalData && modalData.rows && modalData.rows.length > 0 ? (
                          modalData.rows.map((item: any, index: number) => (
                            <tr key={index}>
                              <td className="p-2 border border-[#D9D9D9]">{item.accountCode || '-'}</td>
                              <td className="p-2 border border-[#D9D9D9]">{item.accountName || '-'}</td>
                              <td className="p-2 border border-[#D9D9D9]">
                                <input 
                                  type="text" 
                                  className="w-full px-1 py-1 text-xs" 
                                  defaultValue={item.endingBalance?.toLocaleString() || ''}
                                />
                              </td>
                              <td className="p-2 border border-[#D9D9D9]">
                                <input 
                                  type="text" 
                                  className="w-full px-1 py-1 text-xs" 
                                  defaultValue={item.addAmount?.toLocaleString() || ''}
                                />
                              </td>
                              <td className="p-2 border border-[#D9D9D9]">
                                <input 
                                  type="text" 
                                  className="w-full px-1 py-1 text-xs" 
                                  defaultValue={item.counterAccountId || ''}
                                />
                              </td>
                              <td className="p-2 border border-[#D9D9D9]">
                                <input 
                                  type="text" 
                                  className="w-full px-1 py-1 text-xs" 
                                  defaultValue={item.memo || ''}
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
              ) : (
                <p className="text-gray-500">데이터를 불러오는 중입니다...</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
