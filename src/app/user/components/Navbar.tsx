'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Menu, Settings, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="fixed top-3 left-0 right-0 z-50 w-full flex justify-center px-4 sm:px-8 pointer-events-none">
      <nav className="w-full max-w-[1300px] bg-card/80 backdrop-blur-[30px] border border-border shadow-[0_20px_40px_rgba(0,0,0,0.4)] rounded-full px-4 sm:px-6 py-2 flex justify-between items-center pointer-events-auto transition-all duration-300">

        {/* Left: Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="/user" className="group flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center bg-surface overflow-hidden shadow-[0_0_15px_rgba(0,184,219,0.2)]">
              <img src="/assets/Logoicon.png" alt="SKKER Icon" className="h-6 w-6 object-contain" />
            </div>
            <span className="text-[16px] font-bold tracking-[0.2em] uppercase text-text group-hover:text-accent transition-colors">
              SKKER
            </span>
          </Link>
        </div>

        {/* Middle: Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link href="/user#capabilities" className="text-[9.5px] font-mono font-bold tracking-[0.15em] uppercase text-muted hover:text-text transition-colors">Capabilities</Link>
          <Link href="/user/about-me" className="text-[9.5px] font-mono font-bold tracking-[0.15em] uppercase text-muted hover:text-text transition-colors">About Me</Link>
          <Link href="/user/coaching" className="text-[9.5px] font-mono font-bold tracking-[0.15em] uppercase text-muted hover:text-text transition-colors">Coaching</Link>
          
          <div className="relative group flex items-center gap-2 cursor-pointer py-4">
            <Link href="/user/training" className="text-[9.5px] font-mono font-bold tracking-[0.15em] uppercase text-muted group-hover:text-text transition-colors">
              Training
            </Link>
            {/* Hollow circle indicator for dropdown */}
            <div className="w-5 h-5 rounded-full border border-border/50 group-hover:border-text/50 transition-colors flex items-center justify-center bg-surface/30" />
            
            {/* Dropdown Menu */}
            <div className="absolute top-[90%] left-1/2 -translate-x-1/2 w-64 bg-card/95 backdrop-blur-2xl rounded-2xl border border-border shadow-2xl flex flex-col z-50 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-2 group-hover:translate-y-0 py-2">
              <Link href="/user/training/courses" className="px-6 py-3 text-[10px] font-mono font-bold tracking-[0.15em] uppercase text-muted hover:text-text hover:bg-white/5 transition-colors border-b border-border">Courses</Link>
              <Link href="/user/training" className="px-6 py-3 text-[10px] font-mono font-bold tracking-[0.15em] uppercase text-muted hover:text-text hover:bg-white/5 transition-colors border-b border-border">Private Training</Link>
              <Link href="/user/training/public-classes" className="px-6 py-3 text-[10px] font-mono font-bold tracking-[0.15em] uppercase text-muted hover:text-text hover:bg-white/5 transition-colors border-b border-border">Public Classes</Link>
              <Link href="/user/training/corporate-training" className="px-6 py-3 text-[10px] font-mono font-bold tracking-[0.15em] uppercase text-muted hover:text-text hover:bg-white/5 transition-colors">Corporate Training</Link>
            </div>
          </div>

          <Link href="/user/blog" className="text-[9.5px] font-mono font-bold tracking-[0.15em] uppercase text-muted hover:text-text transition-colors">Blog / Articles</Link>
          <Link href="/user/case-studies" className="text-[9.5px] font-mono font-bold tracking-[0.15em] uppercase text-muted hover:text-text transition-colors">Case Studies</Link>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle - Dark Pill with glow */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="hidden sm:flex items-center justify-center p-2.5 rounded-full border border-border bg-surface text-muted hover:text-text transition-colors relative overflow-hidden group"
              aria-label="Toggle Theme"
            >
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          )}

          <div className="hidden sm:flex items-center gap-2">
            <Link href="/user/login" className="px-5 py-2.5 rounded-full border border-border bg-section text-[9.5px] font-mono font-bold tracking-[0.15em] uppercase text-muted hover:text-text hover:bg-white/5 transition-all">
              Login
            </Link>
            <Link href="/academy/home/book_session" className="px-5 py-2.5 rounded-full border border-border bg-section text-[9.5px] font-mono font-bold tracking-[0.15em] uppercase text-muted hover:text-text hover:bg-white/5 transition-all">
              Contact
            </Link>
            <Link href="/academy/home/book_session" className="px-6 py-2.5 ml-1 rounded-full bg-gradient-to-r from-accent to-accent-cool text-[9.5px] font-mono font-extrabold tracking-[0.15em] uppercase text-page shadow-[0_0_20px_rgba(0,184,219,0.3)] hover:shadow-[0_0_30px_rgba(0,184,219,0.5)] transition-all">
              Book Session
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-text"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[80px] left-4 right-4 lg:hidden bg-card/95 backdrop-blur-2xl border border-border p-4 rounded-3xl flex flex-col gap-4 max-h-[80vh] overflow-y-auto pointer-events-auto shadow-2xl">
          <Link href="/user#capabilities" className="text-text font-mono font-bold tracking-widest uppercase text-[10px] p-2 hover:text-accent">Capabilities</Link>
          <Link href="/user/about-me" className="text-text font-mono font-bold tracking-widest uppercase text-[10px] p-2 hover:text-accent">About Me</Link>
          <Link href="/user/coaching" className="text-text font-mono font-bold tracking-widest uppercase text-[10px] p-2 hover:text-accent">Coaching</Link>
          
          <div className="p-3 border border-border flex flex-col gap-2 bg-section rounded-xl">
            <span className="text-accent font-mono font-bold tracking-widest uppercase text-[10px] mb-2 px-2">Training</span>
            <Link href="/user/training/courses" className="text-text font-mono font-bold tracking-widest uppercase text-[10px] hover:text-accent px-2 py-1">Courses</Link>
            <Link href="/user/training" className="text-text font-mono font-bold tracking-widest uppercase text-[10px] hover:text-accent px-2 py-1">Private Training</Link>
            <Link href="/user/training/public-classes" className="text-text font-mono font-bold tracking-widest uppercase text-[10px] hover:text-accent px-2 py-1">Public Classes</Link>
            <Link href="/user/training/corporate-training" className="text-text font-mono font-bold tracking-widest uppercase text-[10px] hover:text-accent px-2 py-1">Corporate Training</Link>
          </div>
          
          <Link href="/user/blog" className="text-text font-mono font-bold tracking-widest uppercase text-[10px] p-2 hover:text-accent">Blog / Articles</Link>
          <Link href="/user/case-studies" className="text-text font-mono font-bold tracking-widest uppercase text-[10px] p-2 hover:text-accent">Case Studies</Link>

          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
            <Link href="/user/login" className="text-center w-full px-4 py-3 rounded-full border border-border bg-section text-text font-mono font-bold tracking-widest uppercase text-[10px]">Login</Link>
            <Link href="/academy/home/book_session" className="text-center w-full px-4 py-3 rounded-full bg-gradient-to-r from-accent to-accent-cool text-page font-mono font-extrabold tracking-widest uppercase text-[10px]">Book Session</Link>
          </div>
        </div>
      )}
    </div>
  );
}
 
