'use client';

import { usePathname } from 'next/navigation';
import DynamicSidebar from '@/components/DynamicSidebar';
import DynamicBreadcrumb from '@/components/DynamicBreadcrumb';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

const hiddenLayoutPaths = ['/login', '/register'];

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  const shouldHideLayout = hiddenLayoutPaths.includes(pathname);

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

        {/* Page Content - 동적 변경 */}
        <div className="flex-1 overflow-y-auto w-full">{children}</div>
      </div>
    </div>
  );
}
