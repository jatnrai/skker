'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function TrainingCTA() {
  return (
    <section className="mb-24">
      <div className="rounded-[32px] p-10 sm:p-14 lg:p-16 bg-gradient-to-br from-accent/10 via-section/80 to-section border border-accent/20 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-[0_0_50px_rgba(0,184,219,0.05)]">
        
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-[20%] -translate-y-1/2 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 flex-1 max-w-[680px]">
          <div className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-accent/80 mb-4">
            Ready when useful
          </div>
          <h2 className="font-serif text-[32px] sm:text-[44px] lg:text-[50px] font-bold text-heading leading-[1.05] mb-6 tracking-tight">
            Start with the <em className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-cool italic">right format.</em>
          </h2>
          <p className="text-[15px] text-muted/90 leading-[1.8] m-0">
            If you are unsure whether you need a course, private session, public class, or corporate program, start with a short strategy conversation.
          </p>
        </div>
        
        <div className="relative z-10 shrink-0 w-full md:w-auto flex justify-center md:justify-end">
          <Link 
            href="/academy/home/book_session" 
            className="inline-flex items-center justify-center px-10 py-4 w-full md:w-auto bg-gradient-to-r from-accent to-accent-cool rounded-[100px] text-page font-mono text-[11px] font-bold tracking-[0.1em] uppercase shadow-[0_0_20px_rgba(0,184,219,0.2)] hover:shadow-[0_0_30px_rgba(0,184,219,0.4)] transition-all hover:-translate-y-0.5 group gap-3"
          >
            Book a Session <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
      </div>
    </section>
  );
}
