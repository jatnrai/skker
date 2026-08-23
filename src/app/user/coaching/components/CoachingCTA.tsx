'use client';

import Link from 'next/link';

export default function CoachingCTA() {
  return (
    <section className="mb-24">
      <div className="rounded-[32px] p-10 sm:p-16 bg-gradient-to-br from-accent/20 to-white/[0.04] border border-accent/30 text-center relative overflow-hidden shadow-[0_0_50px_rgba(0,184,219,0.1)]">
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-[700px] mx-auto">
          <h2 className="font-serif text-[36px] sm:text-[48px] font-bold text-heading leading-[1.1] mb-6 tracking-tight">
            Ready for a clearer next move?
          </h2>
          
          <p className="text-[15px] text-heading/80 leading-[1.8] mb-10">
            Book a focused strategy session and bring the decision, system, or leadership challenge that matters most right now.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/academy/home/book_session" 
              className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-accent to-accent-cool rounded-[100px] text-page font-mono text-[11px] font-bold tracking-[0.1em] uppercase shadow-[0_0_20px_rgba(0,184,219,0.2)] hover:shadow-[0_0_30px_rgba(0,184,219,0.4)] transition-all hover:-translate-y-0.5"
            >
              Book a Session
            </Link>
            <a 
              href="/user#enquiry" 
              className="inline-flex items-center justify-center px-10 py-4 rounded-[100px] text-heading border border-border bg-transparent hover:bg-white/5 transition-all hover:-translate-y-0.5 font-mono text-[11px] font-bold tracking-[0.1em] uppercase"
            >
              Contact Me
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
}
