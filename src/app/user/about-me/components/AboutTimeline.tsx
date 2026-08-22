'use client';

import { MapPin } from 'lucide-react';

export default function AboutTimeline() {
  return (
    <section className="mb-32">
      <div className="mb-20 max-w-[800px] mx-auto text-center">
        <div className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-accent opacity-80 mb-6">Career Timeline</div>
        <h2 className="text-[36px] sm:text-[46px] font-serif font-bold text-heading leading-[1.1] tracking-[-0.02em] mb-6">
          Education and career,<br />
          <em className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-cool italic font-serif">structured clearly.</em>
        </h2>
        <p className="text-[15px] text-muted/90 leading-[1.8] font-sans max-w-[500px] mx-auto">
          A premium timeline for education, roles, companies, locations, and career milestones.
        </p>
      </div>
      
      <div className="max-w-[1000px] mx-auto space-y-12 relative before:absolute before:inset-0 before:ml-[1.2rem] md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        
        {/* Timeline Item 1 */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-page text-accent shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative">
            <div className="w-2 h-2 bg-muted/30 rounded-full group-hover:bg-accent group-hover:shadow-[0_0_15px_rgba(0,184,219,0.8)] transition-all"></div>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gradient-to-br from-white/[0.04] to-transparent p-8 rounded-[32px] border border-border hover:border-accent/40 hover:bg-white/[0.06] hover:-translate-y-1 hover:shadow-2xl transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-accent/5 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="font-mono text-[9px] font-bold tracking-[0.2em] text-accent mb-6 bg-accent/10 w-fit px-4 py-1.5 rounded-full border border-accent/20 uppercase">2007</div>
            <h3 className="text-[22px] font-serif font-bold text-heading mb-2 leading-[1.2]">Early delivery and operations foundation</h3>
            <div className="text-[13px] font-bold text-heading mb-2">Technology and business delivery</div>
            <div className="text-[12px] text-muted mb-4 flex items-center gap-2"><MapPin size={12} className="text-accent/60"/> Malaysia / Regional APAC</div>
            <p className="text-[14px] text-muted/80 leading-[1.7]">Built the early foundation in delivery systems, stakeholder management, and practical problem-solving.</p>
          </div>
        </div>

        {/* Timeline Item 2 */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-page text-accent shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative">
            <div className="w-2 h-2 bg-muted/30 rounded-full group-hover:bg-accent group-hover:shadow-[0_0_15px_rgba(0,184,219,0.8)] transition-all"></div>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gradient-to-br from-white/[0.04] to-transparent p-8 rounded-[32px] border border-border hover:border-accent/40 hover:bg-white/[0.06] hover:-translate-y-1 hover:shadow-2xl transition-all relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[150px] h-[150px] bg-accent/5 rounded-full blur-[50px] -translate-y-1/2 -translate-x-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="font-mono text-[9px] font-bold tracking-[0.2em] text-accent mb-6 bg-accent/10 w-fit px-4 py-1.5 rounded-full border border-accent/20 uppercase">2012-2016</div>
            <h3 className="text-[22px] font-serif font-bold text-heading mb-2 leading-[1.2]">Product and transformation leadership</h3>
            <div className="text-[13px] font-bold text-heading mb-2">Product, Agile, Kanban, and operating rhythm</div>
            <div className="text-[12px] text-muted mb-4 flex items-center gap-2"><MapPin size={12} className="text-accent/60"/> APAC and international teams</div>
            <p className="text-[14px] text-muted/80 leading-[1.7]">Moved deeper into product leadership, delivery flow, and operating models that help teams scale with less friction.</p>
          </div>
        </div>

        {/* Timeline Item 3 */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-page text-accent shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative">
            <div className="w-2 h-2 bg-muted/30 rounded-full group-hover:bg-accent group-hover:shadow-[0_0_15px_rgba(0,184,219,0.8)] transition-all"></div>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gradient-to-br from-white/[0.04] to-transparent p-8 rounded-[32px] border border-border hover:border-accent/40 hover:bg-white/[0.06] hover:-translate-y-1 hover:shadow-2xl transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-accent/5 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="font-mono text-[9px] font-bold tracking-[0.2em] text-accent mb-6 bg-accent/10 w-fit px-4 py-1.5 rounded-full border border-accent/20 uppercase">2017-2022</div>
            <h3 className="text-[22px] font-serif font-bold text-heading mb-2 leading-[1.2]">Systems architecture and advisory work</h3>
            <div className="text-[13px] font-bold text-heading mb-2">Executive advisory and organisational systems</div>
            <div className="text-[12px] text-muted mb-4 flex items-center gap-2"><MapPin size={12} className="text-accent/60"/> Malaysia, UK, US collaboration pathways</div>
            <p className="text-[14px] text-muted/80 leading-[1.7]">Focused on operating model design, leadership alignment, governance, and flow systems across complex organisations.</p>
          </div>
        </div>

        {/* Timeline Item 4 (Current) */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-page text-accent shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(0,184,219,0.2)] z-10 relative">
            <div className="w-3 h-3 bg-accent rounded-full shadow-[0_0_15px_rgba(0,184,219,0.8)] group-hover:scale-110 transition-transform"></div>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gradient-to-br from-white/[0.04] to-transparent p-8 rounded-[32px] border border-border hover:border-accent/40 hover:bg-white/[0.06] hover:-translate-y-1 hover:shadow-2xl transition-all relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[150px] h-[150px] bg-accent/5 rounded-full blur-[50px] -translate-y-1/2 -translate-x-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="font-mono text-[9px] font-bold tracking-[0.2em] text-accent mb-6 bg-accent/10 w-fit px-4 py-1.5 rounded-full border border-accent/20 uppercase">2023-Now</div>
            <h3 className="text-[22px] font-serif font-bold text-heading mb-2 leading-[1.2]">SKKER</h3>
            <div className="text-[13px] font-bold text-heading mb-2">Strategic Systems Architect</div>
            <div className="text-[12px] text-muted mb-4 flex items-center gap-2"><MapPin size={12} className="text-accent/60"/> Global advisory, coaching, and training</div>
            <p className="text-[14px] text-muted/80 leading-[1.7]">Independent advisory work across systems architecture, AI strategy, product leadership, coaching, and training programs.</p>
          </div>
        </div>
        
      </div>
    </section>
  );
}
