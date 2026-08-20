'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Menu, ChevronDown, Moon, Sun } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTrainingMenuOpen, setIsTrainingMenuOpen] = useState(false);
  const trainingMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (trainingMenuRef.current && !trainingMenuRef.current.contains(event.target as Node)) {
        setIsTrainingMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link href="/user" className="group flex items-center gap-3">
              <div className="flex items-center justify-center bg-gradient-to-r from-accent to-accent-cool text-white rounded-xl h-10 w-14 shadow-[0_0_15px_rgba(0,184,219,0.5)] transition-all group-hover:shadow-[0_0_25px_rgba(0,184,219,0.8)]">
                <span className="font-bold text-lg">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-widest uppercase flex items-center text-text">
                  SKKER
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/user#capabilities" className="text-text hover:text-accent font-sans text-sm font-semibold transition-colors">Capabilities</Link>
            <Link href="/user/about-me" className="text-text hover:text-accent font-sans text-sm font-semibold transition-colors">About Me</Link>
            <Link href="/user/coaching" className="text-text hover:text-accent font-sans text-sm font-semibold transition-colors">Coaching</Link>
            
            <div className="relative group">
              <Link 
                href="/user/training"
                className="flex items-center gap-1 text-text hover:text-accent font-sans text-sm font-semibold transition-colors py-4"
              >
                Training <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </Link>
              
              <div className="absolute top-[80%] left-0 w-56 glass-panel rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(0,184,219,0.15)] flex flex-col z-50 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-2 group-hover:translate-y-0">
                <Link href="/user/courses" className="relative z-10 px-5 py-3.5 text-sm font-semibold text-text hover:text-accent hover:bg-white/10 transition-colors border-b border-white/10">Courses</Link>
                <Link href="/user/private-training" className="relative z-10 px-5 py-3.5 text-sm font-semibold text-text hover:text-accent hover:bg-white/10 transition-colors border-b border-white/10">Private Training</Link>
                <Link href="/user/public-classes" className="relative z-10 px-5 py-3.5 text-sm font-semibold text-text hover:text-accent hover:bg-white/10 transition-colors border-b border-white/10">Public Classes</Link>
                <Link href="/user/corporate-training" className="relative z-10 px-5 py-3.5 text-sm font-semibold text-text hover:text-accent hover:bg-white/10 transition-colors">Corporate Training</Link>
              </div>
            </div>

            <Link href="/user/blog" className="text-text hover:text-accent font-sans text-sm font-semibold transition-colors">Blog</Link>
            <Link href="/user/case-studies" className="text-text hover:text-accent font-sans text-sm font-semibold transition-colors">Case Studies</Link>
          </div>

          <div className="flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="hidden sm:flex items-center justify-center w-10 h-10 rounded-md border border-border bg-surface text-text hover:bg-bg transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            
            <div className="hidden sm:flex items-center gap-3">
              <Link href="/user/login" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent to-accent-cool text-sm font-sans font-bold text-white shadow-[0_0_15px_rgba(0,184,219,0.3)] hover:shadow-[0_0_25px_rgba(0,184,219,0.5)] transition-all">Login</Link>
              <Link href="/user/about-me" className="px-5 py-2.5 rounded-xl glass-panel text-text text-sm font-sans font-bold border border-white/10 hover:bg-white/10 transition-all">Book Session</Link>
            </div>

            <button 
              className="md:hidden p-2 text-text"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-panel border-t border-white/10 p-4 flex flex-col gap-4">
          <Link href="/user#capabilities" className="text-text font-bold text-sm p-2 hover:text-accent">Capabilities</Link>
          <Link href="/user/about-me" className="text-text font-bold text-sm p-2 hover:text-accent">About Me</Link>
          <Link href="/user/coaching" className="text-text font-bold text-sm p-2 hover:text-accent">Coaching</Link>
          <div className="p-2 border-y border-border flex flex-col gap-2 bg-bg rounded-md">
            <span className="text-muted font-bold text-xs uppercase tracking-widest mb-1 px-2">Training</span>
            <Link href="/user/courses" className="text-sm text-text font-semibold hover:text-accent px-2 py-1">Courses</Link>
            <Link href="/user/training" className="text-sm text-text font-semibold hover:text-accent px-2 py-1">Private Training</Link>
            <Link href="/user/public-classes" className="text-sm text-text font-semibold hover:text-accent px-2 py-1">Public Classes</Link>
            <Link href="/user/corporate-training" className="text-sm text-text font-semibold hover:text-accent px-2 py-1">Corporate Training</Link>
          </div>
          <Link href="/user/blog" className="text-text font-bold text-sm p-2 hover:text-accent">Blog</Link>
          <Link href="/user/case-studies" className="text-text font-bold text-sm p-2 hover:text-accent">Case Studies</Link>
          
          <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-md border border-border bg-surface text-sm font-bold text-text hover:bg-bg"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
            )}
            <Link href="/user/login" className="text-center w-full px-4 py-3 rounded-xl bg-gradient-to-r from-accent to-accent-cool text-sm font-bold text-white shadow-[0_0_15px_rgba(0,184,219,0.3)]">Login</Link>
            <Link href="/user/about-me" className="text-center w-full px-4 py-3 rounded-xl glass-panel text-text border border-white/10 text-sm font-bold">Book Session</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
