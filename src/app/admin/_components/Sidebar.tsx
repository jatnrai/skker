"use client";

import { useState } from 'react';
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
  LogOut,
  ChevronDown,
  X
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
  { 
    name: 'Academy', 
    path: '/admin/academy', 
    icon: GraduationCap,
    subItems: [
      { name: 'Overview', path: '/admin/academy' },
      { name: 'Public Classes', path: '/admin/academy/public' },
      { name: 'Corporate Training', path: '/admin/academy/corporate' },
      { name: 'Private Training', path: '/admin/academy/private' },
      { name: 'Self-Paced Courses', path: '/admin/academy/self-paced' },
      { name: 'Sessions & Calendar', path: '/admin/academy/sessions' },
      { name: 'Enrolments', path: '/admin/academy/enrolments' },
      { name: 'Certificates', path: '/admin/academy/certificates' },
      { name: 'Categories & Instructors', path: '/admin/academy/categories' },
      { name: 'Settings', path: '/admin/academy/settings' },
    ]
  },
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

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({
    'Academy': pathname.startsWith('/admin/academy')
  });

  const toggleMenu = (name: string) => {
    setExpandedMenus(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const handleLogout = () => {
    document.cookie = "skker_admin_auth=; path=/; max-age=0";
    router.push('/admin-login');
    router.refresh();
  };

  return (
    <aside 
      className={`
        fixed md:relative top-0 left-0 h-full flex flex-col 
        bg-admin-bg border-r border-admin-border 
        transition-all duration-300 ease-in-out z-50 md:z-0 overflow-hidden
        ${isOpen 
          ? 'w-64 translate-x-0' 
          : 'w-64 -translate-x-full md:w-0 md:translate-x-0 md:opacity-0 md:border-r-0'
        }
      `}
    >
      <div className="h-[70px] flex items-center justify-between px-6 border-b border-admin-border shrink-0">
        <Link href="/admin" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-admin-border flex items-center justify-center bg-admin-surface overflow-hidden shadow-[0_0_15px_rgba(0,184,219,0.2)]">
            <img src="/assets/Logoicon.png" alt="SKKER Icon" className="h-5 w-5 object-contain" />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-[14px] font-bold tracking-[0.2em] uppercase text-admin-text">
              SKKER
            </span>
            <span className="text-[10px] font-medium text-admin-muted uppercase tracking-widest">
              Admin
            </span>
          </div>
        </Link>
        <button onClick={() => setIsOpen(false)} className="md:hidden text-admin-muted hover:text-admin-text">
          <X size={20} />
        </button>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-6 px-4">
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            
            // If it has subItems, handle the accordion
            if (item.subItems) {
              const isExpanded = expandedMenus[item.name];
              const isChildActive = item.subItems.some(sub => pathname === sub.path);
              
              return (
                <li key={item.path} className="flex flex-col gap-1">
                  <button 
                    onClick={() => toggleMenu(item.name)}
                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isChildActive 
                        ? 'bg-admin-primary-bg/50 text-admin-primary' 
                        : 'text-admin-muted hover:bg-admin-surface hover:text-admin-text'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={18} className="shrink-0" />
                      <span className="whitespace-nowrap">{item.name}</span>
                    </div>
                    <ChevronDown size={16} className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isExpanded && (
                    <ul className="flex flex-col gap-1 pl-11 pr-2 py-1">
                      {item.subItems.map(sub => (
                        <li key={sub.path}>
                          <Link 
                            href={sub.path}
                            className={`block px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                              pathname === sub.path 
                                ? 'bg-admin-primary/10 text-admin-primary' 
                                : 'text-admin-muted hover:text-admin-text hover:bg-admin-surface'
                            }`}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }
            
            // Standard link
            const isActive = pathname === item.path || (pathname.startsWith(item.path) && item.path !== '/admin');
            return (
              <li key={item.path}>
                <Link 
                  href={item.path} 
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-admin-primary-bg text-admin-primary' 
                      : 'text-admin-muted hover:bg-admin-surface hover:text-admin-text'
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
      
      <div className="p-4 border-t border-admin-border shrink-0 space-y-3">
        <div className="flex items-center gap-3 p-2 rounded-lg bg-admin-surface border border-admin-border">
          <div className="w-8 h-8 rounded-full bg-admin-primary flex items-center justify-center text-xs font-bold text-white shrink-0">
            SK
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-semibold text-admin-text truncate">Soon Kiat Ker</span>
            <span className="text-[10px] text-admin-muted uppercase tracking-wider truncate">Owner / Super Admin</span>
          </div>
        </div>
        <button 
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-admin-muted hover:text-red-500 hover:bg-red-500/10 transition-colors"
        >
          <LogOut size={16} /> Log Out
        </button>
      </div>
    </aside>
  );
}
