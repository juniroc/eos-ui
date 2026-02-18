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
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // activeSection이 변경되면 해당 부모 메뉴를 자동으로 열기
  useEffect(() => {
    if (!isClient) return;
    const parentMenu = navigationItems.find(item =>
      item.subItems?.some(sub => sub.id === activeSection)
    );
    if (parentMenu) {
      setOpenMenuId(parentMenu.id);
    }
  }, [activeSection, isClient]);

  const handleMenuClick = (itemId: string, hasSub?: boolean) => {
    if (hasSub) {
      // 아코디언 토글
      setOpenMenuId(prev => (prev === itemId ? null : itemId));
    } else {
      onSectionChange(itemId);
    }
  };

  const handleSubMenuClick = (subId: string) => {
    if (subId === 'account-ledger') return;
    onSectionChange(subId);
  };

  const getCurrentActiveMenu = () => {
    if (!isClient) return 'basic-info';
    const mainMenu = navigationItems.find(item =>
      item.subItems?.some(sub => sub.id === activeSection)
    );
    return mainMenu ? mainMenu.id : 'basic-info';
  };

  return (
    <div className="w-[160px] min-w-[160px] flex flex-col justify-between items-start bg-[#2C2C2C] h-screen overflow-y-auto">
      {/* 상단 영역 */}
      <div className="flex flex-col items-start w-full gap-[6px]">
        {/* 로고 */}
        <div className="flex items-start px-6 py-4 w-full h-[60px]">
          <Image src="/eos-logo.png" alt="logo" width={80} height={28} />
        </div>

        {/* 메뉴 섹션 */}
        {menuSections.map((section, sectionIdx) => {
          const items = section.itemIds
            .map(id => navItemMap.get(id))
            .filter((item): item is NavItem => !!item);

          return (
            <div key={section.label} className="w-full flex flex-col items-start">
              {sectionIdx > 0 && (
                <div className="w-full h-0 border-t border-white/5" />
              )}

              {/* Menu Heading */}
              <div className="flex items-center px-6 py-2 w-full h-[26px]">
                <span className="text-[10px] font-medium uppercase text-[#F5F5F5] leading-none">
                  {section.label}
                </span>
              </div>

              {/* 상위 메뉴 + 아코디언 서브메뉴 */}
              <div className="flex flex-col items-start w-full gap-[2px]">
                {items.map(item => {
                  const isActive = getCurrentActiveMenu() === item.id;
                  const hasSub = !!item.subItems;
                  const isOpen = openMenuId === item.id;

                  return (
                    <div key={item.id} className="w-full">
                      {/* 상위 메뉴 아이템 */}
                      <button
                        onClick={() => handleMenuClick(item.id, hasSub)}
                        className={`flex items-center justify-between px-6 py-2 w-full h-8 transition-colors cursor-pointer`}
                      >
                        <span className={`text-[11px] font-medium leading-[13px] ${
                          isActive ? 'text-white' : 'text-[#757575]'
                        }`}>
                          {item.label}
                        </span>
                        {hasSub && (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                          >
                            <path
                              d="M4 6L8 10L12 6"
                              stroke={isActive ? '#FFFFFF' : '#757575'}
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </button>

                      {/* 아코디언 서브메뉴 */}
                      {hasSub && isOpen && (
                        <div className="flex flex-col items-start w-full gap-1">
                          {item.subItems!.map(sub => {
                            const isSubActive = activeSection === sub.id;
                            return (
                              <button
                                key={sub.id}
                                onClick={() => handleSubMenuClick(sub.id)}
                                className={`flex items-center px-6 py-1 gap-1 w-full h-8 transition-colors cursor-pointer ${
                                  isSubActive
                                    ? 'bg-white/5 border-r-2 border-[#F26522]'
                                    : 'hover:bg-white/5'
                                }`}
                              >
                                <div className="w-4 h-4 flex items-center justify-center">
                                  <Image src={isSubActive ? '/icons/dot_active.png' : '/icons/dot.png'} alt="dot" width={16} height={16} />
                                </div>
                                <span className={`text-[11px] font-medium leading-[13px] ${
                                  isSubActive ? 'text-white' : 'text-[#757575]'
                                }`}>
                                  {sub.label}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* 하단: 계정관리 + 로그아웃 */}
      <div className="flex items-center justify-between px-6 py-4 w-full h-[60px]">
        <Link href="/account-management" className="flex items-center gap-2">
            <Image src="/user.png" alt="계정관리" width={28} height={28} />
          <span className="text-[11px] font-medium leading-[13px] text-[#757575]">
            계정관리
          </span>
        </Link>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="cursor-pointer">
          <path
            d="M6 2H3C2.44772 2 2 2.44772 2 3V13C2 13.5523 2.44772 14 3 14H6M11 11L14 8M14 8L11 5M14 8H6"
            stroke="#757575"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}