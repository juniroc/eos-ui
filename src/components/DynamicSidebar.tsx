'use client';

import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';

export default function DynamicSidebar() {
  const pathname = usePathname();
  const activeSection = pathname === '/' ? 'business-info' : pathname.slice(1);

  return (
    <Sidebar 
      activeSection={activeSection}
      onSectionChange={(section) => {
        if (section === 'business-info') {
          window.location.href = '/';
        } else {
          window.location.href = `/${section}`;
        }
      }}
    />
  );
}
