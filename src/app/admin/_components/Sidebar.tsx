"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  FileText, 
  Image as ImageIcon, 
  Lightbulb, 
  GraduationCap, 
  Calendar, 
  Briefcase, 
  Users, 
  HardDrive, 
  Search, 
  BarChart, 
  Settings, 
  Palette, 
  Link as LinkIcon, 
  Activity, 
  Server
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

const navItems = [
  { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { name: 'Website Content', path: '/admin/content', icon: FileText },
  { name: 'Portfolio & Cases', path: '/admin/portfolio', icon: ImageIcon },
  { name: 'Insights / Blog', path: '/admin/insights', icon: Lightbulb },
  { name: 'Academy', path: '/admin/academy', icon: GraduationCap },
  { name: 'Bookings', path: '/admin/bookings', icon: Calendar },
  { name: 'Corporate Leads', path: '/admin/leads', icon: Briefcase },
  { name: 'Contacts / CRM', path: '/admin/crm', icon: Users },
  { name: 'Media', path: '/admin/media', icon: HardDrive },
  { name: 'SEO & Redirects', path: '/admin/seo', icon: Search },
  { name: 'Analytics', path: '/admin/analytics', icon: BarChart },
  { name: 'Users & Roles', path: '/admin/users', icon: Settings },
  { name: 'Global Design', path: '/admin/design', icon: Palette },
  { name: 'Integrations', path: '/admin/integrations', icon: LinkIcon },
  { name: 'Audit Log', path: '/admin/audit', icon: Activity },
  { name: 'System', path: '/admin/system', icon: Server },
];

export function Sidebar({ isOpen }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className={`flex flex-col bg-neutral-950 border-r border-neutral-800 transition-all duration-300 z-20 ${isOpen ? 'w-64' : 'w-0 overflow-hidden opacity-0 border-r-0'}`}>
      <div className="h-[70px] flex items-center px-6 border-b border-neutral-800 shrink-0">
        <div className="text-xl font-bold text-white tracking-tight">
          <span className="text-blue-500">SKKER</span> Admin
        </div>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-6 px-4">
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path || (pathname.startsWith(item.path) && item.path !== '/admin');
            
            return (
              <li key={item.path}>
                <Link 
                  href={item.path} 
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-blue-500/10 text-blue-500' 
                      : 'text-neutral-400 hover:bg-neutral-900 hover:text-white'
                  }`}
                >
                  <Icon size={18} className="shrink-0" />
                  <span className="whitespace-nowrap">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-neutral-800 shrink-0">
        <div className="flex items-center gap-3 p-2 rounded-lg bg-neutral-900 border border-neutral-800">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-xs font-bold text-white shrink-0">
            SK
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-semibold text-white truncate">Soon Kiat Ker</span>
            <span className="text-[10px] text-neutral-400 uppercase tracking-wider truncate">Owner / Super Admin</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
