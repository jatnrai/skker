'use client';

import Link from 'next/link';

export default function CoachingHero() {
  return (
    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
      {/* Left Column: Text Content */}
      <div className="flex flex-col">
        <div className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-accent opacity-80 mb-6">
          SKKER Coaching
        </div>
        
        <h1 className="text-[60px] sm:text-[85px] lg:text-[95px] font-serif font-bold text-heading leading-[0.95] tracking-[-0.03em] mb-6">
          Coaching for <br />
          <em className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-cool italic font-serif">sharper <br />decisions.</em>
        </h1>
        
        <p className="text-[15px] text-muted/90 leading-[1.8] font-sans max-w-[500px] mb-10">
          Practical coaching for leaders, professionals, and teams who want clearer systems, better judgment, and stronger execution without adding more noise.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Link href="/academy/home/book_session" className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-accent to-accent-cool rounded-[100px] text-page font-mono text-[11px] font-bold tracking-[0.1em] uppercase shadow-[0_0_20px_rgba(0,184,219,0.2)] hover:shadow-[0_0_30px_rgba(0,184,219,0.4)] transition-all hover:-translate-y-0.5">
            Book a Session
          </Link>
          <a href="#coaching-types" className="inline-flex items-center justify-center px-10 py-4 rounded-[100px] text-heading border border-border bg-section/50 hover:bg-white/5 transition-all hover:-translate-y-0.5 font-mono text-[11px] font-bold tracking-[0.1em] uppercase shadow-lg">
            Explore Types
          </a>
        </div>
      </div>

      {/* Right Column: Hero Image with Info Panel */}
      <div className="lg:ml-auto w-full max-w-[480px] flex justify-end pt-10 lg:pt-0">
        <div className="relative w-full aspect-[4/5] sm:h-[540px]">
          {/* Main Image Container */}
          <div className="absolute inset-0 rounded-[32px] border border-border bg-section/90 overflow-hidden shadow-2xl">
             <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent z-10 pointer-events-none" />
             <div className="absolute inset-0 flex items-center justify-center z-10">
               <img 
                 src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=84" 
                 alt="Professional coaching conversation" 
                 className="h-full w-full object-cover relative z-20"
               />
             </div>
             {/* Gradient overlay for text readability at bottom */}
             <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-page to-transparent z-20 pointer-events-none" />
          </div>

          {/* Overlapping Bottom Card */}
          <div className="absolute bottom-6 left-6 right-6 bg-page/90 border border-border p-6 rounded-2xl z-30 flex flex-col gap-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-[20px]">
             <span className="text-xl font-bold text-heading tracking-tight">Focused. Practical. Human.</span>
             <span className="text-[13px] font-sans text-muted/80 leading-relaxed mt-1">Sessions are built around decisions, operating habits, and real constraints.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
