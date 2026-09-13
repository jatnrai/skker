"use client";

import { Menu, Bell, Search, Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface HeaderProps {
  toggleSidebar: () => void;
}

export function Header({ toggleSidebar }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="h-[70px] bg-admin-bg border-b border-admin-border flex items-center justify-between px-6 z-10 shrink-0 transition-colors duration-300">
      <div className="flex items-center gap-6">
        <button 
          onClick={toggleSidebar} 
          className="text-admin-muted hover:text-admin-text hover:bg-admin-surface w-9 h-9 rounded-md flex items-center justify-center transition-colors"
        >
          <Menu size={20} />
        </button>
        
        <div className="relative flex items-center hidden md:flex">
          <Search size={16} className="absolute left-3 text-admin-muted" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-admin-surface border border-admin-border text-admin-text rounded-full py-2 pl-9 pr-4 text-sm w-64 focus:outline-none focus:border-admin-primary focus:ring-1 focus:ring-admin-primary transition-all placeholder:text-admin-muted"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        {mounted && (
          <div className="flex items-center bg-admin-surface border border-admin-border rounded-lg p-1">
            <button 
              onClick={() => setTheme('light')}
              className={`p-1.5 rounded-md transition-colors ${theme === 'light' ? 'bg-admin-bg text-admin-primary shadow-sm' : 'text-admin-muted hover:text-admin-text'}`}
              title="Light Mode"
            >
              <Sun size={16} />
            </button>
            <button 
              onClick={() => setTheme('dark')}
              className={`p-1.5 rounded-md transition-colors ${theme === 'dark' ? 'bg-admin-bg text-admin-primary shadow-sm' : 'text-admin-muted hover:text-admin-text'}`}
              title="Dark Mode"
            >
              <Moon size={16} />
            </button>
            <button 
              onClick={() => setTheme('system')}
              className={`p-1.5 rounded-md transition-colors ${theme === 'system' ? 'bg-admin-bg text-admin-primary shadow-sm' : 'text-admin-muted hover:text-admin-text'}`}
              title="System Theme"
            >
              <Monitor size={16} />
            </button>
          </div>
        )}

        <button className="text-admin-muted hover:text-admin-text hover:bg-admin-surface w-9 h-9 rounded-md flex items-center justify-center transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </header>
  );
}
