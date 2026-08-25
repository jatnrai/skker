"use client";

import { useState } from 'react';
import { Sidebar } from './_components/Sidebar';
import { Header } from './_components/Header';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-neutral-950 text-neutral-50 overflow-hidden antialiased">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* UAT Persistent Banner (Section 2.4) */}
        {process.env.NEXT_PUBLIC_APP_ENV !== 'production' && (
          <div className="bg-amber-500/20 border-b border-amber-500/30 text-amber-500 text-xs font-semibold py-1.5 px-4 text-center shrink-0 flex items-center justify-center gap-2 z-50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            Development ENVIRONMENT - NON-PRODUCTION DATA
          </div>
        )}

        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
