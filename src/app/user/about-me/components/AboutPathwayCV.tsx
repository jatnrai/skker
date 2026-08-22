'use client';

import PathwayGlobe from '../../components/PathwayGlobe';

export default function AboutPathwayCV() {
  return (
    <section id="cv" className="mb-24">
      <div className="mb-12 max-w-[800px]">
        <div className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-accent opacity-80 mb-6">Pathway + CV</div>
        <h2 className="text-[36px] sm:text-[46px] font-serif font-bold text-heading leading-[1.1] tracking-[-0.02em] mb-6">
          Malaysia to the UK<br />
          <em className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-cool italic font-serif">to the US.</em>
        </h2>
        <p className="text-[15px] text-muted/90 leading-[1.8] font-sans max-w-[500px]">
          The global pathway maps the journey across markets, while the CV profile below gives a clean overview of expertise and focus.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Left: Pathway Globe */}
        <div className="h-full">
          <PathwayGlobe />
        </div>

        {/* Right: CV Preview */}
        <article className="bg-gradient-to-br from-white/[0.04] to-transparent border border-border rounded-[32px] p-8 sm:p-12 relative overflow-hidden shadow-2xl flex flex-col h-full group">
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-accent/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="mb-8 relative z-10">
            <div className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-accent opacity-80 mb-4">CV</div>
            <h3 className="text-[28px] font-serif font-bold text-heading leading-[1.1] tracking-[-0.02em]">
              A sharper<br />
              <em className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-cool italic font-serif">profile preview.</em>
            </h3>
          </div>
          
          {/* Actual CV Document Preview */}
          <div className="flex-grow bg-[#eef5f8] rounded-[24px] p-8 sm:p-10 text-page relative overflow-hidden shadow-inner mb-8">
            <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-b from-accent to-accent-cool"></div>
            <div className="absolute top-6 right-6 font-mono text-[54px] font-black tracking-tighter text-[#007fa3]/5 pointer-events-none select-none">CV</div>
            
            <div className="flex justify-between items-start mb-10 relative z-10">
              <div>
                <div className="font-serif text-[32px] sm:text-[38px] font-bold leading-none mb-2 tracking-[-0.04em] text-page">SK Ker</div>
                <div className="font-mono text-[10px] font-bold tracking-[0.15em] text-[#007fa3] uppercase">Strategic Systems Architect</div>
              </div>
              <div className="border border-[#007fa3]/20 bg-[#007fa3]/10 text-[#007fa3] rounded-full px-3 py-1.5 font-mono text-[9px] font-bold tracking-[0.15em] uppercase">Profile</div>
            </div>
            
            <div className="space-y-6 relative z-10">
              <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] gap-4 pt-5 border-t border-[#071927]/10">
                <div className="font-mono text-[10px] font-bold tracking-[0.15em] uppercase text-[#315263]">Focus</div>
                <div className="text-[14px] text-[#213947] font-medium leading-relaxed">Systems architecture, AI strategy, product leadership, executive coaching.</div>
              </div>
              
              <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] gap-4 pt-5 border-t border-[#071927]/10">
                <div className="font-mono text-[10px] font-bold tracking-[0.15em] uppercase text-[#315263]">Experience</div>
                <div className="text-[14px] text-[#213947] font-medium leading-relaxed">18+ years across delivery, product, transformation, and advisory contexts.</div>
              </div>
              
              <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] gap-4 pt-5 border-t border-[#071927]/10">
                <div className="font-mono text-[10px] font-bold tracking-[0.15em] uppercase text-[#315263]">Markets</div>
                <div className="text-[14px] text-[#213947] font-medium leading-relaxed">Malaysia, APAC, UK, US, and cross-market executive collaboration.</div>
              </div>
              
              <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] gap-4 pt-5 border-t border-[#071927]/10 pb-16">
                <div className="font-mono text-[10px] font-bold tracking-[0.15em] uppercase text-[#315263]">Work</div>
                <div className="text-[14px] text-[#213947] font-medium leading-relaxed">Operating models, decision systems, flow, governance, and leadership clarity.</div>
              </div>
            </div>
            
            <div className="absolute bottom-6 left-8 right-8 flex flex-col sm:flex-row justify-between gap-2 pt-4 border-t border-[#071927]/10 text-[11px] font-medium text-[#315263]">
              <div>SKKER · Strategic Systems Architect</div>
              <div>skker.com</div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 relative z-10">
            <a href="/assets/files/skker-cv.pdf" target="_blank" rel="noopener" className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-accent to-accent-cool rounded-full text-page font-mono text-[10px] font-bold tracking-[0.1em] uppercase shadow-[0_0_20px_rgba(0,184,219,0.2)] hover:shadow-[0_0_30px_rgba(0,184,219,0.4)] transition-all hover:-translate-y-0.5">
              Open PDF
            </a>
            <a href="/assets/files/skker-cv.pdf" download className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-heading border border-border bg-transparent hover:bg-white/5 transition-all hover:-translate-y-0.5 font-mono text-[10px] font-bold tracking-[0.1em] uppercase">
              Download
            </a>
          </div>
        </article>

      </div>
    </section>
  );
}
