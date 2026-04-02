'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, MessageSquare, User } from 'lucide-react';
import './NavigationTabBar.css';

export default function NavigationTabBar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Messages', href: '/messages', icon: MessageSquare },
    { name: 'Profile', href: '/profile', icon: User },
  ];

  return (
    <nav className="bottom-nav">
      <div className="nav-container">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link key={item.name} href={item.href} className={`nav-item ${isActive ? 'active' : ''}`}>
              <Icon className="nav-icon" size={24} />
              <span className="nav-label">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
