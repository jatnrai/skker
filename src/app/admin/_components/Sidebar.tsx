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
  Server,
  LogOut
} from 'lucide-react';
import { useRouter } from 'next/navigation';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
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

import { X } from 'lucide-react'; // Added above, wait I need to check if X is imported. Let's just import it here or at top.
export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = "skker_admin_auth=; path=/; max-age=0";
    router.push('/admin-login');
    router.refresh();
  };

  return (
    <aside 
      className={`
        fixed md:relative top-0 left-0 h-full flex flex-col 
        bg-neutral-950 border-r border-neutral-800 
        transition-all duration-300 ease-in-out z-50 md:z-0 overflow-hidden
        ${isOpen 
          ? 'w-64 translate-x-0' 
          : 'w-64 -translate-x-full md:w-0 md:translate-x-0 md:opacity-0 md:border-r-0'
        }
      `}
    >
      <div className="h-[70px] flex items-center justify-between px-6 border-b border-neutral-800 shrink-0">
        <div className="text-xl font-bold text-white tracking-tight">
          <span className="text-blue-500">SKKER</span> Admin
        </div>
        <button onClick={() => setIsOpen(false)} className="md:hidden text-neutral-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
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
      
      <div className="p-4 border-t border-neutral-800 shrink-0 space-y-3">
        <div className="flex items-center gap-3 p-2 rounded-lg bg-neutral-900 border border-neutral-800">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-xs font-bold text-white shrink-0">
            SK
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-semibold text-white truncate">Soon Kiat Ker</span>
            <span className="text-[10px] text-neutral-400 uppercase tracking-wider truncate">Owner / Super Admin</span>
          </div>
        </div>
        <button 
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-neutral-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
        >
          <LogOut size={16} /> Log Out
        </button>
      </div>
    </aside>
  );
}
