'use client';

export default function AboutHero() {
  return (
    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
      {/* Left Column: Text Content */}
      <div className="flex flex-col">
        <div className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-accent opacity-80 mb-6">
          About Me
        </div>
        
        <h1 className="text-[60px] sm:text-[85px] lg:text-[95px] font-serif font-bold text-heading leading-[0.95] tracking-[-0.03em] mb-6">
          Systems <br />
          thinking, <br />
          <em className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-cool italic font-serif">built through <br />practice.</em>
        </h1>
        
        <p className="text-[15px] text-muted/90 leading-[1.8] font-sans max-w-[500px] mb-10">
          I work at the intersection of product leadership, systems architecture, AI strategy, and executive coaching. The thread across the journey is simple: make complex work easier to see, decide, and improve.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a href="#cv" className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-accent to-accent-cool rounded-[100px] text-page font-mono text-[11px] font-bold tracking-[0.1em] uppercase shadow-[0_0_20px_rgba(0,184,219,0.2)] hover:shadow-[0_0_30px_rgba(0,184,219,0.4)] transition-all hover:-translate-y-0.5">
            View CV
          </a>
          <a href="/assets/files/skker-cv.pdf" download className="inline-flex items-center justify-center px-10 py-4 rounded-[100px] text-heading border border-border bg-transparent hover:bg-white/5 transition-all hover:-translate-y-0.5 font-mono text-[11px] font-bold tracking-[0.1em] uppercase">
            Download CV
          </a>
        </div>
      </div>

      {/* Right Column: Profile Image with Info Panel */}
      <div className="lg:ml-auto mx-auto lg:mx-0 w-full max-w-[420px] flex justify-center lg:justify-end pt-10 lg:pt-0">
        <div className="relative w-full max-w-[380px] aspect-[38/48]">
          {/* Main Image Container */}
          <div className="absolute inset-0 rounded-[32px] overflow-hidden border border-border shadow-[0_20px_40px_rgba(0,184,219,0.15)] bg-section group">
             <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent z-10 pointer-events-none" />
             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
             <div className="absolute inset-0 flex items-end justify-center z-10 pb-8">
               <img 
                 src="/assets/images/founder-portrait.png" 
                 alt="SK Ker" 
                 className="h-[90%] w-auto object-contain relative z-20 drop-shadow-2xl"
               />
             </div>
          </div>

          {/* Overlapping Bottom Nameplate Card */}
          <div className="absolute -bottom-6 -left-6 -right-6 bg-page/80 border border-border p-6 rounded-2xl z-20 flex flex-col gap-2 shadow-2xl backdrop-blur-[30px]">
             <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-accent">Founder</span>
             <span className="text-xl font-serif font-bold text-heading">SK Ker</span>
             <span className="text-[12px] font-sans text-muted/80 leading-relaxed mt-1">Strategic consultant, systems architect, and executive advisor.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
