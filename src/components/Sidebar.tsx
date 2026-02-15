import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

interface NavItem {
  id: string;
  label: string;
  subItems?: { id: string; label: string }[];
}

const navigationItems: NavItem[] = [
  {
    id: 'basic-info',
    label: '기초정보',
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
    subItems: [
      { id: 'journal', label: '전표/수정' },
      { id: 'cashbook', label: '현금출납장' },
      { id: 'ledger', label: '계정원장' },
      { id: 'statements', label: '계정명세서' },
      { id: 'financial-statements', label: '재무제표' },
      { id: 'proof-storage', label: '증빙보관소' },
    ],
  },
  { id: 'cost-management', label: '원가관리' },
  {
    id: 'payroll',
    label: '급여관리',
    subItems: [
      { id: 'employee-salary', label: '직원 급여' },
      { id: 'salary-structure', label: '급여 체계' },
      { id: 'tax-deduction', label: '세금 공제' },
    ],
  },
  { id: 'withholding-tax', label: '원천세' },
  {
    id: 'vat',
    label: '부가세',
    subItems: [
      { id: 'vat-document-create', label: '서류생성' },
      { id: 'vat-stored-documents', label: '보관서류' },
    ],
  },
  { id: 'corporate-tax', label: '법인세' },
];

const menuSections = [
  { label: '회계', itemIds: ['basic-info', 'ai-journal', 'accounting'] },
  { label: 'AI세무', itemIds: ['withholding-tax', 'vat', 'corporate-tax'] },
  { label: 'ERP', itemIds: ['cost-management', 'payroll'] },
];

const navItemMap = new Map(navigationItems.map(item => [item.id, item]));

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
    // account-ledger 선택 시 라우팅 이동 없음
    if (subId === 'account-ledger') {
      return;
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
    <div className="flex h-screen bg-[#2C2C2C]">
      {/* 왼쪽 큰 메뉴 */}
      <div className="w-[160px] flex flex-col justify-between items-start p-0 gap-2 bg-[#2C2C2C]">
        {/* 상단 영역: 로고 + 네비게이션 */}
        <div className="flex flex-col items-start w-full">
          {/* 로고 섹션 */}
          <div className="flex flex-col items-start justify-center p-3 w-full h-[52px]">
            <div className="flex flex-col justify-center items-start h-7">
              <Image src="/eos-logo.png" alt="logo" width={80} height={28}/>
            </div>
          </div>

          {/* 메인 네비게이션 섹션 */}
          <div className="flex flex-col items-start py-2 gap-3 w-full flex-1">
            {menuSections.map((section, sectionIdx) => {
              const items = section.itemIds
                .map(id => navItemMap.get(id))
                .filter((item): item is NavItem => !!item);

              return (
                <div key={section.label} className="w-full">
                  {sectionIdx > 0 && (
                    <div className="w-full h-px border-t border-[#4A4A4A] mb-3"></div>
                  )}
                  <div className="w-full flex flex-col items-start gap-2">
                    <div className="flex flex-row items-center gap-[2px] h-3 rounded px-6 w-full">
                      <span className="text-xs font-medium text-[#F5F5F5]">{section.label}</span>
                    </div>
                    <div className="flex flex-col items-start gap-[4px] w-full">
                      {items.map(item => {
                        const isActive = getCurrentActiveMenu() === item.id;
                        const hasSub = !!item.subItems;
                        return (
                          <button
                            key={item.id}
                            onClick={() => handleMenuClick(item.id, hasSub)}
                            onMouseEnter={() => setHoveredMenu(item.id)}
                            className={`flex flex-row items-center p-2 gap-[6px] h-8 transition-colors cursor-pointer px-6 w-full ${
                              isActive ? 'bg-[#404040]' : 'hover:bg-[#3A3A3A]'
                            }`}
                          >
                            <span className={`text-xs font-medium text-center ${
                              isActive ? 'text-white' : 'text-[#999999]'
                            }`}>
                              {item.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 계정관리 섹션 (하단 고정) */}
        <Link href="/account-management" className="flex flex-col justify-center items-center w-full gap-1 pb-3 cursor-pointer">
          <div className="flex flex-col justify-center items-center w-7 h-7 bg-[#5A5A5A] rounded-full">
            <Image
              src="/user.png"
              alt="계정관리"
              width={28}
              height={28}
            />
          </div>
          <span className="text-xs font-medium text-[#999999] text-center">계정관리</span>
        </Link>
      </div>

      {/* 오른쪽 서브메뉴 - 호버 시에만 표시 */}
      {(() => {
        const hoveredItem = hoveredMenu ? navItemMap.get(hoveredMenu) : undefined;
        if (!hoveredItem?.subItems) return null;

        return (
          <div
            className="absolute left-[160px] top-0 flex flex-col items-start w-[120px] h-full bg-[#363636] animate-in slide-in-from-left duration-300 ease-out z-10"
            onMouseEnter={() => setHoveredMenu(hoveredMenu)}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            {/* 헤더 섹션 */}
            <div className="flex flex-col items-start py-3 px-3 w-full h-[41px]">
              <div className="flex flex-row items-start h-[17px]">
                <h2 className="text-xs font-semibold leading-[140%] text-white">
                  {hoveredItem.label}
                </h2>
              </div>
            </div>

            {/* 구분선 섹션 */}
            <div className="flex flex-col items-start px-3 gap-[10px] w-full h-0">
              <div className="w-full h-px border-t border-[#4A4A4A]"></div>
            </div>

            {/* 네비게이션 버튼 리스트 */}
            <div className="flex flex-col justify-center items-start py-3 px-3 gap-[10px] w-full">
              <div className="flex flex-col items-start gap-[2px] w-full">
                {hoveredItem.subItems.map((sub) => {
                  const isSubActive = activeSection === sub.id;
                  return (
                    <button
                      key={sub.id}
                      onClick={() => handleSubMenuClick(sub.id)}
                      className={`flex flex-row items-center p-2 gap-[6px] w-full h-7 rounded transition-colors cursor-pointer ${
                        isSubActive ? 'bg-[#4A4A4A]' : 'hover:bg-[#4A4A4A]'
                      }`}
                    >
                      <span className={`text-xs font-medium leading-[100%] text-center ${
                        isSubActive ? 'text-white' : 'text-[#999999]'
                      }`}>
                        {sub.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}