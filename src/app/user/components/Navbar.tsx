'use client';

import Link from 'next/link';
import { Menu, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
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
    <nav className="fixed top-0 w-full z-50 bg-surface border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link href="/user" className="group flex items-center gap-3">
              <div className="flex items-center justify-center bg-accent text-white rounded-md h-10 w-14 transition-colors">
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
            
            <div className="relative" ref={trainingMenuRef}>
              <button 
                onClick={() => setIsTrainingMenuOpen(!isTrainingMenuOpen)}
                className="flex items-center gap-1 text-text hover:text-accent font-sans text-sm font-semibold transition-colors"
              >
                Training <ChevronDown size={14} className={`transition-transform ${isTrainingMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isTrainingMenuOpen && (
                <div className="absolute top-full left-0 mt-4 w-56 bg-surface rounded-lg border border-border shadow-lg flex flex-col z-50 overflow-hidden">
                  <Link href="/user/courses" className="px-4 py-3 text-sm font-semibold text-text hover:text-accent hover:bg-bg transition-colors">Courses</Link>
                  <Link href="/user/training" className="px-4 py-3 text-sm font-semibold text-text hover:text-accent hover:bg-bg transition-colors">Private Training</Link>
                  <Link href="/user/public-classes" className="px-4 py-3 text-sm font-semibold text-text hover:text-accent hover:bg-bg transition-colors">Public Classes</Link>
                  <Link href="/user/corporate-training" className="px-4 py-3 text-sm font-semibold text-text hover:text-accent hover:bg-bg transition-colors">Corporate Training</Link>
                </div>
              )}
            </div>

            <Link href="/user/blog" className="text-text hover:text-accent font-sans text-sm font-semibold transition-colors">Blog</Link>
            <Link href="/user/case-studies" className="text-text hover:text-accent font-sans text-sm font-semibold transition-colors">Case Studies</Link>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-3">
              <Link href="/user/login" className="px-5 py-2.5 rounded-md border border-border bg-surface text-sm font-sans font-bold text-text hover:bg-bg transition-all">Login</Link>
              <Link href="/user/about-me" className="px-5 py-2.5 rounded-md bg-accent text-white text-sm font-sans font-bold hover:bg-[#401b9c] transition-all">Book Session</Link>
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
        <div className="md:hidden bg-surface border-t border-border p-4 flex flex-col gap-4 shadow-lg">
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
            <Link href="/user/login" className="text-center w-full px-4 py-3 rounded-md border border-border bg-surface text-sm font-bold text-text">Login</Link>
            <Link href="/user/about-me" className="text-center w-full px-4 py-3 rounded-md bg-accent text-white text-sm font-bold">Book Session</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
