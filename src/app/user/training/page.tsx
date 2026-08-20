'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen, User, Users, Building, PlayCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TrainingPage() {
  return (
    <main className="min-h-screen text-text flex flex-col relative overflow-hidden font-sans bg-[url('/assets/images/noise.png')]">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMikiLz48L3N2Zz4=')]" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-cool/10 rounded-full blur-[100px]" />
      </div>

      <Navbar />
      
      <div className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
        
        {/* Hero Section */}
        <header className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="flex flex-col gap-6">
            <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent font-mono text-xs font-bold tracking-widest uppercase w-fit">
              Training at SKKER
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-text to-muted">
              Learn by doing. Deliver with confidence.
            </h1>
            <p className="text-lg text-muted/90 leading-relaxed max-w-xl">
              Choose the right learning path for the moment: self-paced courses, private training, public cohorts, or corporate programs built around real organisational outcomes.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#paths" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-cool rounded-xl text-white font-semibold shadow-[0_0_20px_rgba(0,184,219,0.3)] hover:shadow-[0_0_30px_rgba(0,184,219,0.5)] transition-all hover:-translate-y-0.5"
              >
                <span>Explore Training Paths</span>
                <ArrowRight size={18} />
              </a>
              <a 
                href="/academy/home/book_session" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-text border border-white/10 glass-panel hover:bg-white/10 transition-all hover:-translate-y-0.5 font-bold"
              >
                <span>Book a Session</span>
              </a>
            </div>
          </div>
          <figure className="relative w-full max-w-lg ml-auto">
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 p-2 shadow-2xl bg-gradient-to-br from-white/5 to-transparent">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-surface mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80" 
                  alt="Professional workshop session" 
                  className="object-cover w-full h-full opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="grid grid-cols-3 gap-2 text-center pb-2">
                <div>
                  <strong className="block text-2xl font-bold text-text drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">4</strong>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-muted">Training paths</span>
                </div>
                <div>
                  <strong className="block text-2xl font-bold text-text drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">3</strong>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-muted">Live formats</span>
                </div>
                <div>
                  <strong className="block text-2xl font-bold text-text drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">1</strong>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-muted">Outcome focus</span>
                </div>
              </div>
            </div>
          </figure>
        </header>

        {/* Training Pathways Grid */}
        <section id="paths" className="scroll-mt-32 mb-32">
          <div className="mb-12 max-w-2xl">
            <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4">Training pathways</div>
            <h2 className="text-4xl font-sans font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-text to-muted">Choose the format that matches the work.</h2>
            <p className="text-lg text-muted/90">Each path has its own purpose, CTA, and delivery model. No squeezed text. No overlapping images. Just clear choices.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Path 1 */}
            <Link href="/user/courses" className="group glass-panel rounded-3xl border border-white/10 overflow-hidden hover:border-accent/30 transition-all block flex flex-col hover:-translate-y-1">
              <div className="aspect-[16/10] bg-surface relative overflow-hidden border-b border-white/10">
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" alt="Course Library" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center text-[10px] font-mono tracking-widest uppercase text-accent mb-4">
                  <span className="flex items-center gap-1.5"><BookOpen size={12} /> Courses</span>
                  <span className="w-6 h-6 rounded-lg border border-white/10 flex items-center justify-center text-text bg-white/5">01</span>
                </div>
                <h3 className="text-xl font-bold text-text mb-3">Self-Paced Courses</h3>
                <p className="text-sm text-muted/80 mb-6 flex-grow">Structured learning products for scalable access to systems, product, Kanban, and AI strategy content.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-xs text-text/90"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Recorded or structured modules</li>
                  <li className="flex items-center gap-2 text-xs text-text/90"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Worksheets, resources, and progress</li>
                  <li className="flex items-center gap-2 text-xs text-text/90"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Free or paid course access</li>
                </ul>
                <div className="text-xs font-bold uppercase tracking-widest text-accent group-hover:text-accent-cool transition-colors inline-flex items-center gap-1 mt-auto">
                  Browse Courses <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Path 2 */}
            <Link href="/user/training" className="group glass-panel rounded-3xl border border-white/10 overflow-hidden hover:border-accent/30 transition-all block flex flex-col hover:-translate-y-1 relative">
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="aspect-[16/10] bg-surface relative overflow-hidden border-b border-white/10">
                <img src="https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=80" alt="Private Training" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-8 flex flex-col flex-grow relative z-10">
                <div className="flex justify-between items-center text-[10px] font-mono tracking-widest uppercase text-accent mb-4">
                  <span className="flex items-center gap-1.5"><User size={12} /> 1-on-1</span>
                  <span className="w-6 h-6 rounded-lg border border-white/10 flex items-center justify-center text-text bg-white/5">02</span>
                </div>
                <h3 className="text-xl font-bold text-text mb-3">Private Training</h3>
                <p className="text-sm text-muted/80 mb-6 flex-grow">Focused, dedicated learning with a coach for deep context, feedback, and skill development.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-xs text-text/90"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> 1-on-1 direct coaching</li>
                  <li className="flex items-center gap-2 text-xs text-text/90"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Customised to individual challenges</li>
                  <li className="flex items-center gap-2 text-xs text-text/90"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Hourly booking or packages</li>
                </ul>
                <div className="text-xs font-bold uppercase tracking-widest text-accent group-hover:text-accent-cool transition-colors inline-flex items-center gap-1 mt-auto">
                  Book 1-on-1 <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Path 3 */}
            <Link href="/user/public-classes" className="group glass-panel rounded-3xl border border-white/10 overflow-hidden hover:border-accent/30 transition-all block flex flex-col hover:-translate-y-1">
              <div className="aspect-[16/10] bg-surface relative overflow-hidden border-b border-white/10">
                <img src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=800&q=80" alt="Public Classes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center text-[10px] font-mono tracking-widest uppercase text-accent mb-4">
                  <span className="flex items-center gap-1.5"><Users size={12} /> Cohorts</span>
                  <span className="w-6 h-6 rounded-lg border border-white/10 flex items-center justify-center text-text bg-white/5">03</span>
                </div>
                <h3 className="text-xl font-bold text-text mb-3">Public Classes</h3>
                <p className="text-sm text-muted/80 mb-6 flex-grow">Scheduled cohort-based programs for structured learning and peer interaction.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-xs text-text/90"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Scheduled dates (Calendar integration)</li>
                  <li className="flex items-center gap-2 text-xs text-text/90"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Open to multiple companies</li>
                  <li className="flex items-center gap-2 text-xs text-text/90"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Formal agenda and peer exercises</li>
                </ul>
                <div className="text-xs font-bold uppercase tracking-widest text-accent group-hover:text-accent-cool transition-colors inline-flex items-center gap-1 mt-auto">
                  View Calendar <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Path 4 */}
            <Link href="/user/corporate-training" className="group glass-panel rounded-3xl border border-white/10 overflow-hidden hover:border-accent/30 transition-all block flex flex-col hover:-translate-y-1">
              <div className="aspect-[16/10] bg-surface relative overflow-hidden border-b border-white/10">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" alt="Corporate Training" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center text-[10px] font-mono tracking-widest uppercase text-accent mb-4">
                  <span className="flex items-center gap-1.5"><Building size={12} /> B2B</span>
                  <span className="w-6 h-6 rounded-lg border border-white/10 flex items-center justify-center text-text bg-white/5">04</span>
                </div>
                <h3 className="text-xl font-bold text-text mb-3">Corporate Training</h3>
                <p className="text-sm text-muted/80 mb-6 flex-grow">Company-sponsored events for intact teams, focused on specific organizational outcomes.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-xs text-text/90"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Single-company engagement</li>
                  <li className="flex items-center gap-2 text-xs text-text/90"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Tailored to company context</li>
                  <li className="flex items-center gap-2 text-xs text-text/90"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Lead generation (RFQ/Contact)</li>
                </ul>
                <div className="text-xs font-bold uppercase tracking-widest text-accent group-hover:text-accent-cool transition-colors inline-flex items-center gap-1 mt-auto">
                  Inquire Now <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

          </div>
        </section>

        {/* Feature/Benefits Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4">Methodology</div>
              <h2 className="text-4xl font-sans font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-text to-muted">Learning connected to execution.</h2>
              <p className="text-lg text-muted/90 leading-relaxed mb-8">
                All training paths are grounded in real-world consulting experience. It is not just about understanding frameworks, but knowing how to apply them when the context is messy.
              </p>
              <ul className="space-y-4">
                {[
                  { title: 'Pragmatic Frameworks', desc: 'No theory without application. Everything is built to be used.' },
                  { title: 'Systemic View', desc: 'Connecting product, org design, and technical delivery.' },
                  { title: 'Outcome Driven', desc: 'Focused on solving the problem, not just learning the tool.' }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 p-4 glass-panel rounded-2xl border border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-text">{item.title}</h4>
                      <p className="text-sm text-muted/80">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-panel p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-[80px] pointer-events-none" />
               <div className="relative z-10 text-center py-8">
                 <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mx-auto flex items-center justify-center mb-6">
                   <PlayCircle className="text-accent" size={32} />
                 </div>
                 <h3 className="text-2xl font-bold text-text mb-4">Watch a session snippet</h3>
                 <p className="text-muted/80 text-sm mb-6">Get a feel for the delivery style and content depth before committing to a path.</p>
                 <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 glass-panel text-sm font-bold uppercase tracking-widest text-text hover:bg-white/10 transition-colors">
                   Play Video
                 </button>
               </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
