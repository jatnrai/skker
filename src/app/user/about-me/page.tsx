'use client';

import Link from 'next/link';
import { ArrowRight, Download, Globe, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutMePage() {
  return (
    <main className="min-h-screen bg-bg text-text selection:bg-accent/30 flex flex-col relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMikiLz48L3N2Zz4=')] pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <Navbar />
      
      <div className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
        
        {/* Hero Section */}
        <header className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="flex flex-col gap-6">
            <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent font-mono text-xs font-bold tracking-widest uppercase w-fit">
              About Me
            </div>
            <h1 className="text-5xl sm:text-6xl font-serif leading-tight">
              Systems thinking,<br />
              <em className="text-muted italic font-serif">built through practice.</em>
            </h1>
            <p className="text-lg text-muted/80 leading-relaxed max-w-xl">
              I work at the intersection of product leadership, systems architecture, AI strategy, and executive coaching. The thread across the journey is simple: make complex work easier to see, decide, and improve.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="/user/training" className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-cool rounded-xl text-white font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all hover:-translate-y-0.5">
                <span>Explore Training</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#" className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl text-text border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-0.5 glass-panel">
                <span>Download CV</span>
                <Download size={18} className="text-muted group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
          <figure className="relative lg:ml-auto">
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 p-2 w-full max-w-md mx-auto">
              <div className="bg-gradient-to-br from-white/5 to-transparent rounded-2xl w-full h-[500px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-panel border border-white/10 backdrop-blur-xl bg-black/40">
                  <div className="text-accent text-xs font-mono tracking-widest uppercase mb-1">Founder</div>
                  <div className="text-xl font-bold text-text mb-1">SK Ker</div>
                  <div className="text-sm text-muted">Strategic consultant, systems architect, and executive advisor.</div>
                </div>
              </div>
            </div>
          </figure>
        </header>

        {/* Bio and Focus */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          <article className="glass-panel p-10 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10"><Globe size={120} /></div>
            <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4 relative z-10">Bio</div>
            <h2 className="text-3xl font-serif mb-6 relative z-10">A practical operator<br /><em className="text-muted italic">with a systems lens.</em></h2>
            <p className="text-muted/80 leading-relaxed relative z-10">
              My work is shaped by years inside delivery, product, leadership, and transformation environments. I help leaders and teams make better operating choices: what to focus on, how to structure work, where AI can help, and how to build decision systems that last.
            </p>
          </article>
          <article className="glass-panel p-10 rounded-3xl border border-white/10">
            <div className="text-accent text-xs font-mono tracking-widest uppercase mb-6">Focus</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                <h3 className="font-bold text-text mb-2 flex items-center gap-2"><Briefcase size={16} className="text-accent"/> Product</h3>
                <p className="text-sm text-muted/80">Operating models and portfolio flow</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                <h3 className="font-bold text-text mb-2 flex items-center gap-2"><Globe size={16} className="text-accent"/> Systems</h3>
                <p className="text-sm text-muted/80">Work design, decision rights, and interfaces</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                <h3 className="font-bold text-text mb-2 flex items-center gap-2"><ArrowRight size={16} className="text-accent"/> AI</h3>
                <p className="text-sm text-muted/80">Readiness, governance, and practical adoption</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                <h3 className="font-bold text-text mb-2 flex items-center gap-2"><GraduationCap size={16} className="text-accent"/> Coaching</h3>
                <p className="text-sm text-muted/80">Sharper decisions for leaders and operators</p>
              </div>
            </div>
          </article>
        </section>

        {/* Timeline */}
        <section className="mb-24">
          <div className="mb-12 max-w-2xl">
            <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4">Career Timeline</div>
            <h2 className="text-4xl font-serif mb-4">Education and career,<br /><em className="text-muted italic">structured clearly.</em></h2>
            <p className="text-muted/80 text-lg">A premium timeline for education, roles, companies, locations, and career milestones.</p>
          </div>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {/* Timeline Item 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-surface text-accent shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(0,184,219,0.2)] z-10">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-2xl border border-white/10 group-hover:border-accent/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-text">SKKER</h3>
                  <span className="font-mono text-xs text-accent bg-accent/10 px-3 py-1 rounded-full">2023-Now</span>
                </div>
                <div className="text-sm text-muted mb-4 flex items-center gap-2"><MapPin size={14}/> Global advisory, coaching, and training</div>
                <p className="text-sm text-muted/80">Independent advisory work across systems architecture, AI strategy, product leadership, coaching, and training programs.</p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-surface text-muted shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-2 h-2 bg-muted/50 rounded-full group-hover:bg-accent transition-colors"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-2xl border border-white/10 group-hover:border-accent/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-text">Systems architecture and advisory</h3>
                  <span className="font-mono text-xs text-muted">2017-2022</span>
                </div>
                <div className="text-sm text-muted mb-4 flex items-center gap-2"><MapPin size={14}/> Malaysia, UK, US</div>
                <p className="text-sm text-muted/80">Focused on operating model design, leadership alignment, governance, and flow systems across complex organisations.</p>
              </div>
            </div>
            
            {/* Timeline Item 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-surface text-muted shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-2 h-2 bg-muted/50 rounded-full group-hover:bg-accent transition-colors"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-2xl border border-white/10 group-hover:border-accent/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-text">Product & transformation leadership</h3>
                  <span className="font-mono text-xs text-muted">2012-2016</span>
                </div>
                <div className="text-sm text-muted mb-4 flex items-center gap-2"><MapPin size={14}/> APAC and international</div>
                <p className="text-sm text-muted/80">Moved deeper into product leadership, delivery flow, and operating models that help teams scale with less friction.</p>
              </div>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
