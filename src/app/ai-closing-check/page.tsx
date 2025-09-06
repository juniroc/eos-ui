'use client';

import { useState } from 'react';

interface CheckRow {
  id: number;
  category: string;
  description: string;
  status: 'pending' | 'processing' | 'done' | 'na';
}

export default function AIClosingCheckPage() {
  const [rows, setRows] = useState<CheckRow[]>([]);
  const [showModal, setShowModal] = useState(false);

  /** AI 점검 시작 */
  const _handleStartCheck = async () => {
    setRows([
      {
        id: 1,
        category: '필수',
        description: '차대변 합계 일치 여부',
        status: 'pending',
      },
      {
        id: 2,
        category: '필수',
        description: '현금출납장 대조',
        status: 'pending',
      },
      {
        id: 3,
        category: '필수',
        description: '매출채권 연령 분석',
        status: 'pending',
      },
      {
        id: 4,
        category: '외부감사시 필수',
        description: '재고자산 실사',
        status: 'pending',
      },
      {
        id: 5,
        category: '정합성',
        description: '감가상각 누계 확인',
        status: 'pending',
      },
    ]);

    // 시뮬레이션: 순차 처리
    setTimeout(() => {
      setRows(prev =>
        prev.map((r, i) =>
          i === 0 ? { ...r, status: 'done' } : { ...r, status: 'processing' }
        )
      );
    }, 1500);

    setTimeout(() => {
      setRows(prev =>
        prev.map((r, i) => (i === 1 ? { ...r, status: 'na' } : r))
      );
    }, 3000);
  };

  /** 상태 표시 스타일 */
  const renderStatus = (status: CheckRow['status']) => {
    switch (status) {
      case 'pending':
        return <span className="text-red-500">미처리</span>;
      case 'processing':
        return <span className="text-gray-600">처리중</span>;
      case 'done':
        return <span className="text-green-600">처리 완료</span>;
      case 'na':
        return <span className="text-gray-400">N/A</span>;
    }
  };

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
          <div className="flex gap-3">
            <button
              className="
    flex items-center justify-center
    min-w-[90px] h-[28px] px-3
    rounded bg-[#2C2C2C] border border-[#2C2C2C]
    text-xs font-medium leading-[100%] text-white
    hover:bg-[#444444] transition
  "
            >
              직접 점검하기
            </button>
            <button
              className="
    relative flex items-center justify-center
    min-w-[90px] h-[28px] px-3
    rounded bg-white
    hover:bg-gray-50
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
                AI에게 맡기기
              </span>
            </button>
          </div>
        </div>

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
                <td className="p-3 border border-[#D9D9D9]">{r.description}</td>
                <td className="p-3 border border-[#D9D9D9]">입력하기</td>
                <td className="p-3 border border-[#D9D9D9]">
                  {renderStatus(r.status)}
                </td>
                <td className="p-3 border border-[#D9D9D9] text-center">
                  <button
                    className="text-xs px-3 py-1 border rounded"
                    onClick={() => setShowModal(true)}
                  >
                    보기
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* 모달 */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-6">
              <h3 className="text-lg font-bold mb-4">감가상각 점검</h3>
              <table className="w-full border border-[#D9D9D9] text-sm mb-4">
                <thead>
                  <tr>
                    <th className="p-2 border">계정과목</th>
                    <th className="p-2 border">품목</th>
                    <th className="p-2 border">매입일</th>
                    <th className="p-2 border">매입가</th>
                    <th className="p-2 border">감가상각 누계액</th>
                    <th className="p-2 border">당기상각액</th>
                    <th className="p-2 border">내용연수</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border">비품</td>
                    <td className="p-2 border">책상</td>
                    <td className="p-2 border">2023-01-01</td>
                    <td className="p-2 border">250,000</td>
                    <td className="p-2 border">25,000</td>
                    <td className="p-2 border">25,000</td>
                    <td className="p-2 border">10년</td>
                  </tr>
                </tbody>
              </table>
              <div className="flex justify-end gap-2">
                <button
                  className="px-4 py-2 bg-gray-100 rounded"
                  onClick={() => setShowModal(false)}
                >
                  닫기
                </button>
                <button className="px-4 py-2 bg-[#4F46E5] text-white rounded">
                  결산 반영
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
