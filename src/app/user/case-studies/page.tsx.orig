'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-bg text-text selection:bg-accent/30 flex flex-col relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMikiLz48L3N2Zz4=')] pointer-events-none z-0" />
      <div className="absolute top-1/4 left-[15%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/4 right-[15%] w-[500px] h-[500px] bg-accent-cool/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <Navbar />
      
      <div className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
        
        {/* Hero Section */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-32">
            <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent font-mono text-xs font-bold tracking-widest uppercase w-fit">
              Case Studies
            </div>
            <h1 className="text-5xl sm:text-6xl font-serif leading-tight">
              Proof in<br />
              <em className="text-muted italic font-serif">practice.</em>
            </h1>
            <p className="text-lg text-muted/80 leading-relaxed">
              Examples of systems architecture, operating model design, AI readiness work, and leadership advisory engagements. Detailed stories live in the Academy page.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="/academy/page/case-studies" 
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-cool rounded-xl text-white font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all hover:-translate-y-0.5"
              >
                <span>Open Case Studies</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/academy/home/book_session" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl text-text border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-0.5 glass-panel"
              >
                <span>Book a Session</span>
              </a>
            </div>
          </div>
          
          <aside className="lg:col-span-7 w-full">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-xl bg-gradient-to-br from-white/5 to-transparent">
              
              <div className="flex flex-wrap gap-3 mb-8 pb-6 border-b border-white/10">
                <a href="/academy/page/case-studies" className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-text hover:bg-white/10 transition-colors">All</a>
                <a href="/academy/page/case-studies" className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-text hover:bg-white/10 transition-colors">Operating Model</a>
                <a href="/academy/page/case-studies" className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-text hover:bg-white/10 transition-colors">AI Strategy</a>
                <a href="/academy/page/case-studies" className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-text hover:bg-white/10 transition-colors">Kanban / Flow</a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Card 1 */}
                <a href="/academy/page/case-studies" className="group glass-panel rounded-2xl border border-white/10 overflow-hidden hover:border-accent/30 transition-all hover:-translate-y-1 block flex flex-col">
                  <div className="aspect-[16/9] bg-surface relative overflow-hidden border-b border-white/10">
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" alt="Financial Services" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="text-[10px] font-mono tracking-widest uppercase text-accent mb-2">Financial Services</div>
                    <h3 className="text-lg font-bold text-text mb-2 leading-snug">Product Operating Model Redesign</h3>
                    <p className="text-sm text-muted/80 mb-6 flex-grow">Align decision rights, incentives, and delivery rhythms across units.</p>
                    <div className="text-xs font-bold uppercase tracking-widest text-accent group-hover:text-accent-cool transition-colors inline-flex items-center gap-1 mt-auto">
                      View <ArrowRight size={14} />
                    </div>
                  </div>
                </a>

                {/* Card 2 */}
                <a href="/academy/page/case-studies" className="group glass-panel rounded-2xl border border-white/10 overflow-hidden hover:border-accent/30 transition-all hover:-translate-y-1 block flex flex-col">
                  <div className="aspect-[16/9] bg-surface relative overflow-hidden border-b border-white/10">
                    <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80" alt="Technology" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="text-[10px] font-mono tracking-widest uppercase text-accent mb-2">Technology</div>
                    <h3 className="text-lg font-bold text-text mb-2 leading-snug">AI Adoption Strategy & Governance</h3>
                    <p className="text-sm text-muted/80 mb-6 flex-grow">Move from tools to decision rights, capability, and accountable pilots.</p>
                    <div className="text-xs font-bold uppercase tracking-widest text-accent group-hover:text-accent-cool transition-colors inline-flex items-center gap-1 mt-auto">
                      View <ArrowRight size={14} />
                    </div>
                  </div>
                </a>

                {/* Card 3 */}
                <a href="/academy/page/case-studies" className="group glass-panel rounded-2xl border border-white/10 overflow-hidden hover:border-accent/30 transition-all hover:-translate-y-1 block flex flex-col sm:col-span-2">
                  <div className="aspect-[16/9] sm:aspect-[21/9] bg-surface relative overflow-hidden border-b border-white/10">
                    <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80" alt="Delivery Systems" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between flex-grow gap-4">
                    <div>
                      <div className="text-[10px] font-mono tracking-widest uppercase text-accent mb-2">Delivery Systems</div>
                      <h3 className="text-lg font-bold text-text mb-1 leading-snug">Flow-System Implementation</h3>
                      <p className="text-sm text-muted/80">Improve predictability with WIP limits, service classes, and metrics.</p>
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-accent group-hover:text-accent-cool transition-colors inline-flex items-center gap-1 shrink-0">
                      View <ArrowRight size={14} />
                    </div>
                  </div>
                </a>

              </div>
            </div>
          </aside>
        </header>

      </div>

      <Footer />
    </main>
  );
}
