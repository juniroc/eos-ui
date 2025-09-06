import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import DynamicSidebar from '@/components/DynamicSidebar';
import DynamicBreadcrumb from '@/components/DynamicBreadcrumb';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EOS Business Registration Information Management System',
  description: 'EOS 사업자등록정보 관리 시스템',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="flex h-screen bg-white">
          {/* Sidebar - 동적 활성화 */}
          <DynamicSidebar />
          
          {/* Main Content Area */}
          <div className="flex-1 flex flex-col bg-white w-full">
            {/* Breadcrumb - 동적 변경 */}
            <div className="h-16 bg-white flex items-center px-8">
              <DynamicBreadcrumb />
            </div>
            
            {/* Page Content - 동적 변경 */}
            <div className="flex-1 overflow-y-auto w-full">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
