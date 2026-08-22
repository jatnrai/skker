'use client';

import Link from 'next/link';

export default function TrainingHero() {
  return (
    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
      {/* Left Column: Text Content */}
      <div className="flex flex-col">
        <div className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-accent opacity-80 mb-6">
          Training at SKKER
        </div>
        
        <h1 className="text-[54px] sm:text-[75px] lg:text-[85px] font-serif font-bold text-heading leading-[0.95] tracking-[-0.03em] mb-6">
          Learn by doing. <br />
          <em className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-cool italic font-serif">Deliver with<br />confidence.</em>
        </h1>
        
        <p className="text-[15px] text-muted/90 leading-[1.8] font-sans max-w-[500px] mb-10">
          Choose the right learning path for the moment: self-paced courses, private training, public cohorts, or corporate programs built around real organisational outcomes.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a href="#paths" className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-accent to-accent-cool rounded-[100px] text-page font-mono text-[11px] font-bold tracking-[0.1em] uppercase shadow-[0_0_20px_rgba(0,184,219,0.2)] hover:shadow-[0_0_30px_rgba(0,184,219,0.4)] transition-all hover:-translate-y-0.5">
            Explore Paths
          </a>
          <Link href="/academy/home/book_session" className="inline-flex items-center justify-center px-10 py-4 rounded-[100px] text-heading border border-border bg-section/50 hover:bg-white/5 transition-all hover:-translate-y-0.5 font-mono text-[11px] font-bold tracking-[0.1em] uppercase shadow-lg">
            Book a Session
          </Link>
        </div>
      </div>

      {/* Right Column: Hero Image with Stats Panel */}
      <div className="w-full flex justify-end pt-10 lg:pt-0">
        <div className="relative w-full max-w-[500px] aspect-[4/3] sm:aspect-square lg:aspect-[4/5] lg:h-[540px]">
          
          <div className="absolute inset-0 rounded-[32px] border border-border bg-section/90 overflow-hidden shadow-2xl">
             <div className="absolute inset-0 flex items-center justify-center z-10">
               <img 
                 src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=84" 
                 alt="Professional training session" 
                 className="h-full w-full object-cover relative z-20"
               />
             </div>
             <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-page/70 to-transparent z-20 pointer-events-none" />
          </div>

          {/* Overlapping Stats Panel */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] bg-page/95 border border-border p-6 rounded-[24px] z-30 flex justify-between items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-[20px]">
            <div className="flex flex-col items-center text-center px-4">
              <strong className="text-[28px] sm:text-[32px] font-serif font-bold text-heading leading-none mb-1">4</strong>
              <span className="text-[10px] sm:text-[11px] font-mono text-accent uppercase tracking-wider">Training paths</span>
            </div>
            
            <div className="w-[1px] h-12 bg-white/10"></div>
            
            <div className="flex flex-col items-center text-center px-4">
              <strong className="text-[28px] sm:text-[32px] font-serif font-bold text-heading leading-none mb-1">3</strong>
              <span className="text-[10px] sm:text-[11px] font-mono text-accent uppercase tracking-wider">Live formats</span>
            </div>
            
            <div className="w-[1px] h-12 bg-white/10"></div>
            
            <div className="flex flex-col items-center text-center px-4">
              <strong className="text-[28px] sm:text-[32px] font-serif font-bold text-heading leading-none mb-1">1</strong>
              <span className="text-[10px] sm:text-[11px] font-mono text-accent uppercase tracking-wider">Outcome focus</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
