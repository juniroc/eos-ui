'use client';

import { usePathname } from 'next/navigation';
import Breadcrumb from './Breadcrumb';

// Breadcrumb 정보 매핑
const getBreadcrumbInfo = (pathname: string) => {
  const breadcrumbMap: Record<string, { mainMenu: string; subMenu: string }> = {
    '/': { mainMenu: '기초정보', subMenu: '사업자 정보' },
    '/settlement-info': { mainMenu: '기초정보', subMenu: '전기결산 정보' },
    '/account-info': { mainMenu: '기초정보', subMenu: '통장 정보' },
    '/card-info': { mainMenu: '기초정보', subMenu: '카드 정보' },
    '/employee-info': { mainMenu: '기초정보', subMenu: '직원 정보' },
    '/client-info': { mainMenu: '기초정보', subMenu: '거래처 정보' },
    '/shareholder-info': { mainMenu: '기초정보', subMenu: '주주 정보' },
    '/doc-archive': { mainMenu: '기초정보', subMenu: '문서보관' },
    '/ai-journal': { mainMenu: 'AI 분개', subMenu: 'AI 분개' },
    '/guideline-period': { mainMenu: 'AI 분개', subMenu: '지침 주기' },
    '/manual-journal': { mainMenu: 'AI 분개', subMenu: '수동 분개' },
    '/ai-closing-check': { mainMenu: 'AI 분개', subMenu: 'AI 결산점검' },
    '/settlement-info-ai': { mainMenu: 'AI 분개', subMenu: '정산정보 AI' },
    '/proof-storage': { mainMenu: '회계장부', subMenu: '증빙보관소' },
    '/journal': { mainMenu: '회계장부', subMenu: '전표/수정' },
    '/general-ledger': { mainMenu: '회계장부', subMenu: '계정원장' },
    '/cashbook': { mainMenu: '회계장부', subMenu: '현금출납장' },
    '/ledger': { mainMenu: '회계장부', subMenu: '계정원장' },
    '/statements': { mainMenu: '회계장부', subMenu: '계정명세서' },
    '/financial-statements': { mainMenu: '회계장부', subMenu: '재무제표' },
    '/trial-balance': { mainMenu: '회계장부', subMenu: '시산표' },
    '/sub-ledger': { mainMenu: '회계장부', subMenu: '보조원장' },
    '/account-ledger': { mainMenu: '회계장부', subMenu: '계정원장' },
    '/employee-salary': { mainMenu: '급여관리', subMenu: '직원 급여' },
    '/salary-structure': { mainMenu: '급여관리', subMenu: '급여 체계' },
    '/tax-deduction': { mainMenu: '급여관리', subMenu: '세금 공제' },
    '/account-management': { mainMenu: '계정관리', subMenu: '' },
    '/vat-document-create': { mainMenu: '부가세', subMenu: '서류생성' },
  };

  return (
    breadcrumbMap[pathname] || {
      mainMenu: '기초정보',
      subMenu: '사업자등록정보',
    }
  );
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
