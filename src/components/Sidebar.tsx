import { useState } from "react";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigationItems = [
  {
    id: "basic-info",
    label: "기초정보",
    icon: "/icons/layout_black.png",
    iconGrey: "/icons/layout_grey.png",
    subItems: [
      { id: "business-info", label: "사업자 정보" },
      { id: "settlement-info", label: "정기결산 정보" },
      { id: "account-info", label: "통장 정보" },
      { id: "card-info", label: "카드 정보" },
      { id: "employee-info", label: "직원 정보" },
      { id: "client-info", label: "거래처 정보" },
      { id: "shareholder-info", label: "주주 정보" },
      { id: "doc-archive", label: "증빙보관소" },
    ],
  },
  {
    id: "ai-journal",
    label: "AI 분개",
    icon: "/icons/chart_black.png",
    iconGrey: "/icons/chart_grey.png",
    subItems: [
      { id: "guideline-period", label: "지침 주기" },
      { id: "settlement-info-ai", label: "정기결산 정보" },
    ],
  },
  {
    id: "accounting",
    label: "회계장부",
    icon: "/icons/book_black.png",
    iconGrey: "/icons/book_grey.png",
    subItems: [
      { id: "general-ledger", label: "일반장부" },
      { id: "subsidiary-ledger", label: "보조장부" },
      { id: "trial-balance", label: "시산표" },
    ],
  },
  {
    id: "cost-management",
    label: "원가관리",
    icon: "/icons/trello_black.png",
    iconGrey: "/icons/trello_grey.png",
  },
  {
    id: "payroll",
    label: "급여관리",
    icon: "/icons/users_black.png",
    iconGrey: "/icons/users_grey.png",
    subItems: [
      { id: "employee-salary", label: "직원 급여" },
      { id: "salary-structure", label: "급여 체계" },
      { id: "tax-deduction", label: "세금 공제" },
    ],
  },
  {
    id: "ai-tax",
    label: "AI 세무",
    icon: "/icons/feather_black.png",
    iconGrey: "/icons/feather_grey.png",
  },
];

export default function Sidebar({
  activeSection,
  onSectionChange,
}: SidebarProps) {
  const [selectedMenu, setSelectedMenu] = useState<string | null>("basic-info");

  const handleMenuClick = (itemId: string, hasSub?: boolean) => {
    if (hasSub) {
      setSelectedMenu(itemId);
    } else {
      onSectionChange(itemId);
    }
  };

  // 현재 선택된 메뉴를 결정하는 로직
  const getCurrentSelectedMenu = () => {
    // activeSection이 서브메뉴인 경우, 해당하는 메인 메뉴를 찾음
    const mainMenu = navigationItems.find(item => 
      item.subItems?.some(sub => sub.id === activeSection)
    );
    return mainMenu ? mainMenu.id : selectedMenu;
  };

  return (
    <div className="flex h-screen bg-[#F5F5F5]">
      {/* 왼쪽 큰 메뉴 */}
      <div className="w-24 flex flex-col items-center py-4 space-y-3">
        <div className="mb-6">
          <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-lg font-bold">
            E
          </div>
        </div>

        {navigationItems.map((item, index) => {
          const isActive = getCurrentSelectedMenu() === item.id;
          const icon = isActive ? item.icon : item.iconGrey;
          return (
            <div key={item.id}>
              <button
                onClick={() => handleMenuClick(item.id, !!item.subItems)}
                className={`w-[56px] h-[56px] flex flex-col items-center justify-center rounded-lg transition-colors ${
                  isActive
                    ? "bg-[#E6E6E6] text-[#2C2C2C]"
                    : "bg-none text-[#757575] hover:bg-[#E6E6E6]"
                }`}
              >
                <img src={icon} alt={item.label} className="w-6 h-6 mb-2" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
              
              {/* Divider */}
              {(index === 2 || index === 4) && (
                <div className="w-12 h-px bg-[#D9D9D9] mx-auto mt-3"></div>
              )}
            </div>
          );
        })}
      </div>

      {/* 오른쪽 서브메뉴 */}
      <div className="flex-1 p-6 w-max">
        {getCurrentSelectedMenu() &&
          navigationItems.find((i) => i.id === getCurrentSelectedMenu())?.subItems && (
            <div>
              <h2 className="text-lg font-semibold mb-4" style={{ color: '#1E1E1E' }}>
                {
                  navigationItems.find((i) => i.id === getCurrentSelectedMenu())?.label
                }
              </h2>
              {/* Divider */}
              <div className="w-full h-px bg-[#D9D9D9] mb-6"></div>
              <ul className="space-y-2">
                {navigationItems
                  .find((i) => i.id === getCurrentSelectedMenu())
                  ?.subItems?.map((sub) => (
                    <li key={sub.id}>
                      <button
                        onClick={() => onSectionChange(sub.id)}
                        className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                          activeSection === sub.id
                            ? "bg-[#E6E6E6] text-[#2C2C2C] font-medium"
                            : "text-[#757575] hover:bg-[#E6E6E6] hover:text-[#2C2C2C]"
                        }`}
                      >
                        {sub.label}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          )}
      </div>
    </div>
  );
}
