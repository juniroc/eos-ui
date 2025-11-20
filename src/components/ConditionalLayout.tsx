'use client';

import { usePathname } from 'next/navigation';
import DynamicSidebar from '@/components/DynamicSidebar';
import DynamicBreadcrumb from '@/components/DynamicBreadcrumb';
import ChatArea from '@/components/ChatArea';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

const hiddenLayoutPaths = ['/login', '/register'];
const excludedChatPaths = ['/settlement-info', '/'];

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  const shouldHideLayout = hiddenLayoutPaths.includes(pathname);
  const shouldShowChat = !excludedChatPaths.includes(pathname);

  if (shouldHideLayout) {
    return <div className="min-h-screen bg-white">{children}</div>;
  }

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar - 동적 활성화 */}
      <DynamicSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-white w-full">
        {/* Breadcrumb - 동적 변경 */}
        <div className="bg-white flex items-center p-3">
          <DynamicBreadcrumb />
        </div>

        {/* Content Row - 헤더 아래 컨텐츠와 ChatArea */}
        <div className="flex-1 flex overflow-hidden p-4 pt-0">
          {/* Page Content - 동적 변경 */}
          <div className="flex-1 overflow-y-auto">{children}</div>

          {/* Chat Area - 우측에 표시 (settlement-info와 루트 제외) */}
          {shouldShowChat && <ChatArea />}
        </div>
      </div>
    </div>
  );
}
