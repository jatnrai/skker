'use client';

import Link from 'next/link';


export default function Footer() {
  return (
    <footer className="bg-[#040816] border-t border-white/5 relative z-10 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Social */}
          <div className="flex flex-col gap-6 lg:pr-12">
            <Link href="/" className="group flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-card-hover-bg overflow-hidden shadow-[0_0_15px_rgba(0,184,219,0.2)]">
                <img src="/assets/Logoicon.png" alt="SKKER Icon" className="h-6 w-6 object-contain" />
              </div>
              <span className="font-mono text-[16px] font-bold tracking-[0.2em] text-white uppercase group-hover:text-accent transition-colors">SKKER</span>
            </Link>
            
            <p className="text-[12px] text-muted/80 leading-[1.8] font-medium max-w-[250px]">
              Strategic systems. Executive advisory. Built from practice.
            </p>
            
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-muted hover:text-white hover:border-white/20 hover:bg-white/[0.05] transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-muted hover:text-white hover:border-white/20 hover:bg-white/[0.05] transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="mailto:hi@skker.com" className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-muted hover:text-white hover:border-white/20 hover:bg-white/[0.05] transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                  <path d="M2 4l10 8 10-8"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: About Me */}
          <div className="flex flex-col">
            <h3 className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase text-accent/80 mb-6">
              About Me
            </h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/user/about-me" className="text-[13px] font-medium text-muted hover:text-white transition-colors">About Me</Link></li>
              <li><Link href="/user/capabilities" className="text-[13px] font-medium text-muted hover:text-white transition-colors">Capabilities</Link></li>
              <li><Link href="/user/case-studies" className="text-[13px] font-medium text-muted hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/user/speaking" className="text-[13px] font-medium text-muted hover:text-white transition-colors">Speaking</Link></li>
            </ul>
          </div>

          {/* Column 3: Learn */}
          <div className="flex flex-col">
            <h3 className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase text-accent/80 mb-6">
              Learn
            </h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/user/coaching" className="text-[13px] font-medium text-muted hover:text-white transition-colors">Coaching</Link></li>
              <li><Link href="/user/training" className="text-[13px] font-medium text-muted hover:text-white transition-colors">Training</Link></li>
              <li><Link href="/user/courses" className="text-[13px] font-medium text-muted hover:text-white transition-colors">Course Library</Link></li>
              <li><Link href="/user/blog" className="text-[13px] font-medium text-muted hover:text-white transition-colors">Blog/Articles</Link></li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="flex flex-col">
            <h3 className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase text-accent/80 mb-6">
              Connect
            </h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="#contact" className="text-[13px] font-medium text-muted hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/user/login" className="text-[13px] font-medium text-muted hover:text-white transition-colors">Login</Link></li>
              <li><Link href="/academy" className="text-[13px] font-medium text-muted hover:text-white transition-colors">Open Academy</Link></li>
              <li><a href="mailto:hi@skker.com" className="text-[13px] font-medium text-muted hover:text-white transition-colors">Email</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-mono text-[9px] font-bold tracking-[0.15em] uppercase text-muted/60">
            2026 SKKER - skker.com - All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6 font-mono text-[9px] font-bold tracking-[0.1em] uppercase">
            <Link href="/user/privacy-policy" className="text-muted/60 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/user/terms-of-use" className="text-muted/60 hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/user/refund-policy" className="text-muted/60 hover:text-white transition-colors">Refund Policy</Link>
            <Link href="/user/accessibility" className="text-muted/60 hover:text-white transition-colors">Accessibility Statement</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
