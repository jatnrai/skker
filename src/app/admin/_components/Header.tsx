"use client";

import { Menu, Bell, Search } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
}

export function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="h-[70px] bg-neutral-950 border-b border-neutral-800 flex items-center justify-between px-6 z-10 shrink-0">
      <div className="flex items-center gap-6">
        <button 
          onClick={toggleSidebar} 
          className="text-neutral-400 hover:text-white hover:bg-neutral-900 w-9 h-9 rounded-md flex items-center justify-center transition-colors"
        >
          <Menu size={20} />
        </button>
        
        <div className="relative flex items-center hidden md:flex">
          <Search size={16} className="absolute left-3 text-neutral-500" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-neutral-900 border border-neutral-800 text-white rounded-full py-2 pl-9 pr-4 text-sm w-64 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-neutral-500"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="text-neutral-400 hover:text-white hover:bg-neutral-900 w-9 h-9 rounded-md flex items-center justify-center transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </header>
  );
}
