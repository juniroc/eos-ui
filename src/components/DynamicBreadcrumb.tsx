'use client';

import { usePathname } from 'next/navigation';
import Breadcrumb from './Breadcrumb';

// Breadcrumb 정보 매핑
const getBreadcrumbInfo = (pathname: string) => {
  const breadcrumbMap: Record<string, { mainMenu: string; subMenu: string }> = {
    '/': { mainMenu: '기초정보', subMenu: '사업자 정보' },
    '/settlement-info': { mainMenu: '기초정보', subMenu: '정기결산 정보' },
    '/account-info': { mainMenu: '기초정보', subMenu: '통장 정보' },
    '/card-info': { mainMenu: '기초정보', subMenu: '카드 정보' },
    '/employee-info': { mainMenu: '기초정보', subMenu: '직원 정보' },
    '/client-info': { mainMenu: '기초정보', subMenu: '거래처 정보' },
    '/shareholder-info': { mainMenu: '기초정보', subMenu: '주주 정보' },
    '/doc-archive': { mainMenu: '기초정보', subMenu: '문서보관' },
    '/guideline-period': { mainMenu: 'AI 분개', subMenu: '기준기간' },
    '/settlement-info-ai': { mainMenu: 'AI 분개', subMenu: '정산정보 AI' },
    '/general-ledger': { mainMenu: '회계장부', subMenu: '총계정원장' },
    '/subsidiary-ledger': { mainMenu: '회계장부', subMenu: '보조원장' },
    '/trial-balance': { mainMenu: '회계장부', subMenu: '시산표' },
    '/employee-salary': { mainMenu: '급여관리', subMenu: '직원급여' },
    '/salary-structure': { mainMenu: '급여관리', subMenu: '급여구조' },
    '/tax-deduction': { mainMenu: '급여관리', subMenu: '세금공제' },
  };
  
  return breadcrumbMap[pathname] || { mainMenu: '기초정보', subMenu: '사업자등록정보' };
};

export default function DynamicBreadcrumb() {
  const pathname = usePathname();
  const breadcrumbInfo = getBreadcrumbInfo(pathname);

  return (
    <Breadcrumb 
      mainMenu={breadcrumbInfo.mainMenu} 
      subMenu={breadcrumbInfo.subMenu} 
    />
  );
}
