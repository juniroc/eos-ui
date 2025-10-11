import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigationItems = [
  {
    id: 'basic-info',
    label: '기초정보',
    icon: '/icons/layout_black.png',
    iconGrey: '/icons/layout_grey.png',
    subItems: [
      { id: 'business-info', label: '사업자 정보' },
      { id: 'settlement-info', label: '전기결산 정보' },
      { id: 'account-info', label: '통장 정보' },
      { id: 'card-info', label: '카드 정보' },
      { id: 'employee-info', label: '직원 정보' },
      { id: 'client-info', label: '거래처 정보' },
      { id: 'shareholder-info', label: '주주 정보' },
    ],
  },
  {
    id: 'ai-journal',
    label: 'AI 분개',
    icon: '/icons/chart_black.png',
    iconGrey: '/icons/chart_grey.png',
    subItems: [
      { id: 'ai-journal', label: 'AI 분개' },
      { id: 'guideline-period', label: '지침 주기' },
      { id: 'manual-journal', label: '수동 분개' },
      { id: 'ai-closing-check', label: 'AI 결산점검' },
    ],
  },
  {
    id: 'accounting',
    label: '회계장부',
    icon: '/icons/book_black.png',
    iconGrey: '/icons/book_grey.png',
    subItems: [
      { id: 'proof-storage', label: '증빙보관소' },
      { id: 'journal', label: '전표/수정' },
      { id: 'account-ledger', label: '계정원장' },
      { id: 'cashbook', label: '현금출납장' },
      { id: 'ledger', label: '원장' },
      { id: 'statements', label: '명세서' },
      { id: 'financial-statements', label: '재무제표' },
    ],
  },
  {
    id: 'cost-management',
    label: '원가관리',
    icon: '/icons/trello_black.png',
    iconGrey: '/icons/trello_grey.png',
  },
  {
    id: 'payroll',
    label: '급여관리',
    icon: '/icons/users_black.png',
    iconGrey: '/icons/users_grey.png',
    subItems: [
      { id: 'employee-salary', label: '직원 급여' },
      { id: 'salary-structure', label: '급여 체계' },
      { id: 'tax-deduction', label: '세금 공제' },
    ],
  },
  {
    id: 'ai-tax',
    label: 'AI 세무',
    icon: '/icons/feather_black.png',
    iconGrey: '/icons/feather_grey.png',
  },
];

export default function Sidebar({
  activeSection,
  onSectionChange,
}: SidebarProps) {
  const { } = useAuth();
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  // 클라이언트에서만 실행되도록 보장
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMenuClick = (itemId: string, hasSub?: boolean) => {
    if (hasSub) {
      // 하위메뉴가 있는 경우 첫 번째 하위메뉴로 이동
      const firstSubItem = navigationItems
        .find(item => item.id === itemId)
        ?.subItems?.[0];
      if (firstSubItem) {
        onSectionChange(firstSubItem.id);
      }
    } else {
      onSectionChange(itemId);
    }
  };

  const handleSubMenuClick = (subId: string) => {
    // account-ledger 선택 시 cashbook으로 이동
    if (subId === 'account-ledger') {
      onSectionChange('cashbook');
    } else {
      onSectionChange(subId);
    }
  };

  // 현재 활성화된 메뉴를 찾는 함수
  const getCurrentActiveMenu = () => {
    if (!isClient) {
      return 'basic-info';
    }

    const mainMenu = navigationItems.find(item =>
      item.subItems?.some(sub => sub.id === activeSection)
    );
    return mainMenu ? mainMenu.id : 'basic-info';
  };

  return (
    <div className="flex h-screen bg-[#F5F5F5]">
      {/* 왼쪽 큰 메뉴 */}
      <div className="w-[104px] flex flex-col items-start pb-3 bg-[#F5F5F5]">
        {/* 로고 섹션 */}
        <div className="flex flex-col items-center justify-center p-3 w-full h-[52px]">
          <div className="flex flex-col justify-center items-center h-7">
            <Image src="/logo.png" alt="logo" width={80} height={26} className="w-20" style={{ width: 'auto', height: 'auto' }} />
          </div>
        </div>

        {/* 메인 네비게이션 섹션 */}
        <div className="flex flex-col items-center p-3 gap-3 w-full flex-1">
          {/* 기초정보 섹션 */}
          <div className="w-full flex flex-col items-start gap-2">
            <div className="flex flex-row items-center gap-[2px] h-3 rounded">
              <span className="text-xs font-medium text-[#757575]">회계</span>
            </div>
            <div className="flex flex-col items-start gap-[2px]">
              <button
                onClick={() => handleMenuClick('basic-info', true)}
                onMouseEnter={() => setHoveredMenu('basic-info')}
                className={`flex flex-row items-center p-2 gap-[6px] h-8 rounded transition-colors cursor-pointer ${
                  getCurrentActiveMenu() === 'basic-info'
                    ? 'bg-[#E6E6E6]'
                    : 'hover:bg-[#E6E6E6]'
                }`}
              >
                <Image
                  src={getCurrentActiveMenu() === 'basic-info' ? '/icons/layout_black.png' : '/icons/layout_grey.png'}
                  alt="기초정보"
                  width={16}
                  height={16}
                />
                <span className={`text-xs font-medium text-center ${
                  getCurrentActiveMenu() === 'basic-info' ? 'text-[#1E1E1E]' : 'text-[#757575]'
                }`}>
                  기초정보
                </span>
              </button>
              <button
                onClick={() => handleMenuClick('ai-journal', true)}
                onMouseEnter={() => setHoveredMenu('ai-journal')}
                className={`flex flex-row items-center p-2 gap-[6px] h-8 rounded transition-colors cursor-pointer ${
                  getCurrentActiveMenu() === 'ai-journal'
                    ? 'bg-[#E6E6E6]'
                    : 'hover:bg-[#E6E6E6]'
                }`}
              >
                <Image
                  src={getCurrentActiveMenu() === 'ai-journal' ? '/icons/chart_black.png' : '/icons/chart_grey.png'}
                  alt="AI 분개"
                  width={16}
                  height={16}
                />
                <span className={`text-xs font-medium text-center ${
                  getCurrentActiveMenu() === 'ai-journal' ? 'text-[#1E1E1E]' : 'text-[#757575]'
                }`}>
                  AI 분개
                </span>
              </button>
              <button
                onClick={() => handleMenuClick('accounting', true)}
                onMouseEnter={() => setHoveredMenu('accounting')}
                className={`flex flex-row items-center p-2 gap-[6px] h-8 rounded transition-colors cursor-pointer ${
                  getCurrentActiveMenu() === 'accounting'
                    ? 'bg-[#E6E6E6]'
                    : 'hover:bg-[#E6E6E6]'
                }`}
              >
                <Image
                  src={getCurrentActiveMenu() === 'accounting' ? '/icons/book_black.png' : '/icons/book_grey.png'}
                  alt="회계장부"
                  width={16}
                  height={16}
                />
                <span className={`text-xs font-medium text-center ${
                  getCurrentActiveMenu() === 'accounting' ? 'text-[#1E1E1E]' : 'text-[#757575]'
                }`}>
                  회계장부
                </span>
              </button>
            </div>
          </div>

          {/* 구분선 */}
          <div className="w-20 h-px border-t border-[#D9D9D9]"></div>

          {/* 세무 섹션 */}
          <div className="w-full flex flex-col items-start gap-2">
            <div className="flex flex-row items-center gap-[2px] h-3 rounded">
              <span className="text-xs font-medium text-[#757575]">세무</span>
            </div>
            <button
              onClick={() => handleMenuClick('ai-tax', false)}
              onMouseEnter={() => setHoveredMenu('ai-tax')}
              className={`flex flex-row items-center p-2 gap-[6px] h-8 rounded transition-colors cursor-pointer ${
                getCurrentActiveMenu() === 'ai-tax'
                  ? 'bg-[#E6E6E6]'
                  : 'hover:bg-[#E6E6E6]'
              }`}
            >
              <Image
                src={getCurrentActiveMenu() === 'ai-tax' ? '/icons/feather_black.png' : '/icons/feather_grey.png'}
                alt="AI 세무"
                width={16}
                height={16}
              />
              <span className={`text-xs font-medium text-center ${
                getCurrentActiveMenu() === 'ai-tax' ? 'text-[#1E1E1E]' : 'text-[#757575]'
              }`}>
                AI 세무
              </span>
            </button>
          </div>

          {/* 구분선 */}
          <div className="w-20 h-px border-t border-[#D9D9D9]"></div>

          {/* ERP 섹션 */}
          <div className="w-full flex flex-col items-start gap-2">
            <div className="flex flex-row items-center gap-[2px] h-3 rounded">
              <span className="text-xs font-medium text-[#757575]">ERP</span>
            </div>
            <div className="flex flex-col items-start gap-[2px]">
              <button
                onClick={() => handleMenuClick('cost-management', false)}
                onMouseEnter={() => setHoveredMenu('cost-management')}
                className={`flex flex-row items-center p-2 gap-[6px] h-8 rounded transition-colors cursor-pointer ${
                  getCurrentActiveMenu() === 'cost-management'
                    ? 'bg-[#E6E6E6]'
                    : 'hover:bg-[#E6E6E6]'
                }`}
              >
                <Image
                  src={getCurrentActiveMenu() === 'cost-management' ? '/icons/trello_black.png' : '/icons/trello_grey.png'}
                  alt="원가관리"
                  width={16}
                  height={16}
                />
                <span className={`text-xs font-medium text-center ${
                  getCurrentActiveMenu() === 'cost-management' ? 'text-[#1E1E1E]' : 'text-[#757575]'
                }`}>
                  원가관리
                </span>
              </button>
              <button
                onClick={() => handleMenuClick('payroll', true)}
                onMouseEnter={() => setHoveredMenu('payroll')}
                className={`flex flex-row items-center p-2 gap-[6px] h-8 rounded transition-colors cursor-pointer ${
                  getCurrentActiveMenu() === 'payroll'
                    ? 'bg-[#E6E6E6]'
                    : 'hover:bg-[#E6E6E6]'
                }`}
              >
                <Image
                  src={getCurrentActiveMenu() === 'payroll' ? '/icons/users_black.png' : '/icons/users_grey.png'}
                  alt="급여관리"
                  width={16}
                  height={16}
                />
                <span className={`text-xs font-medium text-center ${
                  getCurrentActiveMenu() === 'payroll' ? 'text-[#1E1E1E]' : 'text-[#757575]'
                }`}>
                  급여관리
                </span>
              </button>
            </div>
          </div>
        </div>
        
        {/* 계정관리 섹션 */}
        <Link href="/account-management" className="flex flex-col justify-center items-center w-full gap-1 cursor-pointer">
          <div className="flex flex-col justify-center items-center w-7 h-7 bg-[#5A5A5A] rounded-full">
            <Image
              src="/user.png"
              alt="계정관리"
              width={28}
              height={28}
            />
          </div>
          <span className="text-xs font-medium text-[#757575] text-center">계정관리</span>
        </Link>
      </div>

      {/* 오른쪽 서브메뉴 - 호버 시에만 표시 */}
      {hoveredMenu &&
        navigationItems.find(i => i.id === hoveredMenu)?.subItems && (
          <div 
            className="absolute left-[104px] top-0 flex flex-col items-start w-[108px] h-full bg-[#F5F5F5] animate-in slide-in-from-left duration-300 ease-out z-10"
            onMouseEnter={() => setHoveredMenu(hoveredMenu)}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            {/* 헤더 섹션 */}
            <div className="flex flex-col items-start py-3 px-3 pr-3 pl-1 w-full h-[41px]">
              <div className="flex flex-row items-start w-[92px] h-[17px]">
                <h2 className="text-xs font-semibold leading-[140%] text-[#1E1E1E]">
                  {navigationItems.find(i => i.id === hoveredMenu)?.label}
                </h2>
              </div>
            </div>

            {/* 구분선 섹션 */}
            <div className="flex flex-col items-start py-0 px-3 pr-3 pl-1 gap-[10px] w-full h-0">
              <div className="w-[92px] h-px border-t border-[#D9D9D9]"></div>
            </div>

            {/* 네비게이션 버튼 리스트 */}
            <div className="flex flex-col justify-center items-start py-3 px-3 pr-3 pl-1 gap-[10px] w-full">
              <div className="flex flex-col items-start gap-[2px] w-[92px]">
                {navigationItems
                  .find(i => i.id === hoveredMenu)
                  ?.subItems?.map((sub) => {
                    // 회계장부의 특별한 구조: 원장, 명세서, 재무제표는 들여쓰기
                    const isIndented = hoveredMenu === 'accounting' && 
                      (sub.id === 'ledger' || sub.id === 'statements' || sub.id === 'cashbook');
                    
                    if (isIndented) {
                      return (
                        <div key={sub.id} className="flex flex-col items-start pl-4 gap-[10px] w-[92px] h-7">
                        <button
                          key={sub.id}
                          onClick={() => handleSubMenuClick(sub.id)}
                          className={`flex flex-row items-center p-2 gap-[6px] w-[76px] h-7 rounded transition-colors cursor-pointer ${
                            activeSection === sub.id
                              ? 'bg-[#E6E6E6]'
                              : 'hover:bg-[#E6E6E6]'
                          }`}
                        >
                            <span className={`text-xs font-medium leading-[100%] text-center ${
                              activeSection === sub.id ? 'text-[#1E1E1E]' : 'text-[#757575]'
                            }`}>
                              {sub.label}
                            </span>
                          </button>
                        </div>
                      );
                    }

                    return (
                      <button
                        key={sub.id}
                        onClick={() => handleSubMenuClick(sub.id)}
                        className={`flex flex-row items-center p-2 gap-[6px] w-[92px] h-7 rounded transition-colors cursor-pointer ${
                          activeSection === sub.id
                            ? 'bg-[#E6E6E6]'
                            : 'hover:bg-[#E6E6E6]'
                        }`}
                      >
                        <span className={`text-xs font-medium leading-[100%] text-center ${
                          activeSection === sub.id ? 'text-[#1E1E1E]' : 'text-[#757575]'
                        }`}>
                          {sub.label}
                        </span>
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>
        )}
    </div>
  );
}