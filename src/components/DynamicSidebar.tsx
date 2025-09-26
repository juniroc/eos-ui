'use client';

import { usePathname, useRouter } from 'next/navigation';
import Sidebar from './Sidebar';

export default function DynamicSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const activeSection = pathname === '/' ? 'business-info' : pathname.slice(1);

  return (
    <Sidebar
      activeSection={activeSection}
      onSectionChange={section => {
        if (section === 'business-info') {
          router.push('/');
        } else {
          router.push(`/${section}`);
        }
      }}
    />
  );
}
