'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaBuilding, FaListAlt, FaUserFriends } from 'react-icons/fa';
import { UserButton } from '@clerk/nextjs';

import { cn } from '@/lib/utils';

const Sidebar = () => {
  const pathname = usePathname();

  const sidebarLinks = [
    { label: 'Home', route: '/', icon: FaHome },
    { label: 'Organisations', route: '/organisations', icon: FaBuilding },
    { label: 'MYTodo', route: '/mytodo', icon: FaListAlt },
    { label: 'Friends', route: '/friends', icon: FaUserFriends },
  ];

  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 text-white border-r border-gray-700 lg:w-[264px] shadow-lg pt-6">
      <div className="flex flex-1 flex-col gap-4">
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'flex flex-col items-center gap-2 p-3 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-md',
                {
                  'bg-blue-500 text-white': isActive,
                  'text-gray-300': !isActive,
                }
              )}
            >
              <item.icon size={24} className="transition-transform duration-300 hover:scale-110" />
              <p className="text-[8px] font-semibold lg:text-base">
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center mb-6 p-4">
        <UserButton />
      </div>
    </section>
  );
};

export default Sidebar;
