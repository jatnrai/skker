'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, User } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivateTrainingPage() {
  return (
    <main className="min-h-screen text-text flex flex-col relative overflow-hidden font-sans bg-[url('/assets/images/noise.png')]">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMikiLz48L3N2Zz4=')]" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent-cool/10 rounded-full blur-[100px] pointer-events-none z-0" />
      </div>

      <Navbar />
      
      <div className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
        
        {/* Hero Section */}
        <header className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="flex flex-col gap-6">
            <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent font-mono text-xs font-bold tracking-widest uppercase w-fit">
              Private Training
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-text to-muted">
              1-on-1 focused learning.
            </h1>
            <p className="text-lg text-muted/90 leading-relaxed max-w-xl">
              Personalized learning for professionals who want private attention, flexible timing, and a focus tailored precisely to their role and context.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="/academy/home/book_session" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-cool rounded-xl text-white font-semibold shadow-[0_0_20px_rgba(0,184,219,0.3)] hover:shadow-[0_0_30px_rgba(0,184,219,0.5)] transition-all hover:-translate-y-0.5"
              >
                <span>Book Private Training</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#training-types" className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl text-text border border-white/10 glass-panel hover:bg-white/10 transition-all hover:-translate-y-0.5 font-bold">
                <span>Explore Options</span>
              </a>
            </div>
          </div>
          <figure className="relative w-full max-w-lg ml-auto">
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 p-2 shadow-2xl bg-gradient-to-br from-white/5 to-transparent">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-surface">
                <img 
                  src="https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=80" 
                  alt="Private Training Session" 
                  className="object-cover w-full h-full opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <figcaption className="absolute bottom-0 left-0 w-full p-6">
                  <div className="text-lg font-bold text-white mb-1">Tailored. Direct. Practical.</div>
                  <div className="text-sm text-white/80">Sessions built entirely around your workflow and objectives.</div>
                </figcaption>
              </div>
            </div>
          </figure>
        </header>

        {/* Training Types */}
        <section id="training-types" className="scroll-mt-32 mb-32">
          <div className="mb-16 max-w-2xl">
            <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4">Three Training Focus Areas</div>
            <h2 className="text-4xl font-sans font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-text to-muted">Choose your depth.</h2>
            <p className="text-lg text-muted/90">Each track is dedicated to specific outcomes, bypassing generic curriculum to focus on what you actually need.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Type 1 */}
            <article className="glass-panel p-8 rounded-3xl border border-white/10 relative group hover:border-accent/30 transition-all hover:-translate-y-1">
              <div className="text-4xl font-sans font-bold text-white/5 absolute top-6 right-8 group-hover:text-accent/20 transition-colors">01</div>
              <h3 className="text-2xl font-bold text-text mb-4">Executive Mentoring</h3>
              <p className="text-muted/80 mb-8 min-h-[80px]">A thinking partner for direction, leverage, career architecture, and stronger operating habits.</p>
              
              <div className="mb-6">
                <div className="text-[10px] font-mono tracking-widest uppercase text-accent mb-2">Best for</div>
                <p className="text-sm text-text/90">Professionals and leaders making role, scope, or career decisions.</p>
              </div>
              
              <div>
                <div className="text-[10px] font-mono tracking-widest uppercase text-accent mb-3">Outcomes</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-text/90"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Sharper direction</li>
                  <li className="flex items-center gap-2 text-sm text-text/90"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Better leverage points</li>
                  <li className="flex items-center gap-2 text-sm text-text/90"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Clearer next moves</li>
                </ul>
              </div>
            </article>

            {/* Type 2 */}
            <article className="glass-panel p-8 rounded-3xl border border-white/10 relative group hover:border-accent/30 transition-all hover:-translate-y-1">
              <div className="text-4xl font-sans font-bold text-white/5 absolute top-6 right-8 group-hover:text-accent/20 transition-colors">02</div>
              <h3 className="text-2xl font-bold text-text mb-4">Systems Mastery</h3>
              <p className="text-muted/80 mb-8 min-h-[80px]">Focused training on Kanban, product strategy, and operational frameworks for your specific context.</p>
              
              <div className="mb-6">
                <div className="text-[10px] font-mono tracking-widest uppercase text-accent mb-2">Best for</div>
                <p className="text-sm text-text/90">Operators who need stronger personal systems and decision discipline.</p>
              </div>
              
              <div>
                <div className="text-[10px] font-mono tracking-widest uppercase text-accent mb-3">Outcomes</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-text/90"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Better decision hygiene</li>
                  <li className="flex items-center gap-2 text-sm text-text/90"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Cleaner execution rhythm</li>
                  <li className="flex items-center gap-2 text-sm text-text/90"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Deep framework application</li>
                </ul>
              </div>
            </article>

            {/* Type 3 */}
            <article className="glass-panel p-8 rounded-3xl border border-white/10 relative group hover:border-accent/30 transition-all hover:-translate-y-1">
              <div className="text-4xl font-sans font-bold text-white/5 absolute top-6 right-8 group-hover:text-accent/20 transition-colors">03</div>
              <h3 className="text-2xl font-bold text-text mb-4">AI Readiness</h3>
              <p className="text-muted/80 mb-8 min-h-[80px]">Private sessions on leveraging AI capabilities, tool selection, and building an AI-forward stance.</p>
              
              <div className="mb-6">
                <div className="text-[10px] font-mono tracking-widest uppercase text-accent mb-2">Best for</div>
                <p className="text-sm text-text/90">Leaders navigating the integration of AI into their workflows.</p>
              </div>
              
              <div>
                <div className="text-[10px] font-mono tracking-widest uppercase text-accent mb-3">Outcomes</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-text/90"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Personal AI fluency</li>
                  <li className="flex items-center gap-2 text-sm text-text/90"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Tool governance thinking</li>
                  <li className="flex items-center gap-2 text-sm text-text/90"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Strategy alignment</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* Packages */}
        <section className="mb-32">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4">Engagements</div>
            <h2 className="text-4xl font-sans font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-text to-muted">Flexible formats.<br />Real progress.</h2>
            <p className="text-lg text-muted/90">Start with one session or build a short training arc around a specific framework, transition, or operating challenge.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <article className="glass-panel p-8 rounded-3xl border border-white/10 relative">
              <span className="absolute -top-4 left-8 px-4 py-1 bg-surface border border-white/10 rounded-full text-xs font-mono text-accent">Single</span>
              <h3 className="text-2xl font-bold text-text mt-2 mb-4">Deep Dive Session</h3>
              <p className="text-muted/80 mb-6">A focused 1-on-1 session for one decision, one framework, or one operating question.</p>
              <ul className="space-y-3 border-t border-white/10 pt-6">
                <li className="flex items-center gap-3 text-sm text-text"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Clear problem framing</li>
                <li className="flex items-center gap-3 text-sm text-text"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Practical next steps</li>
                <li className="flex items-center gap-3 text-sm text-text"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Useful when speed matters</li>
              </ul>
            </article>

            <article className="glass-panel p-8 rounded-3xl border border-accent/30 relative bg-gradient-to-br from-accent/10 to-transparent shadow-[0_0_30px_rgba(0,184,219,0.1)]">
              <span className="absolute -top-4 left-8 px-4 py-1 bg-accent border border-accent/20 text-white rounded-full text-xs font-mono shadow-[0_0_15px_rgba(0,184,219,0.5)]">Sprint</span>
              <h3 className="text-2xl font-bold text-text mt-2 mb-4">Training Sprint</h3>
              <p className="text-muted/80 mb-6">A short sequence of sessions to master a new skill, system, or operating model reset.</p>
              <ul className="space-y-3 border-t border-white/10 pt-6">
                <li className="flex items-center gap-3 text-sm text-text"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Session rhythm and follow-up</li>
                <li className="flex items-center gap-3 text-sm text-text"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Decision and execution support</li>
                <li className="flex items-center gap-3 text-sm text-text"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Useful for transitions</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Booking Flow & FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          {/* Booking Flow */}
          <section>
            <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4">Booking Flow</div>
            <h2 className="text-3xl font-sans font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-text to-muted">How it works.</h2>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-px before:bg-gradient-to-b before:from-accent/50 before:to-transparent">
              <div className="relative flex items-start gap-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-accent/50 bg-surface text-accent shrink-0 shadow-[0_0_15px_rgba(0,184,219,0.4)] z-10 font-mono text-sm">1</div>
                <div>
                  <strong className="block text-text text-lg mb-1">Choose your focus.</strong>
                  <p className="text-muted/90">Executive Mentoring, Systems Mastery, or AI Readiness.</p>
                </div>
              </div>
              <div className="relative flex items-start gap-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-surface text-muted shrink-0 z-10 font-mono text-sm">2</div>
                <div>
                  <strong className="block text-text text-lg mb-1">Pick an available slot.</strong>
                  <p className="text-muted/90">Use the live booking calendar connected to SKKER Academy.</p>
                </div>
              </div>
              <div className="relative flex items-start gap-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-surface text-muted shrink-0 z-10 font-mono text-sm">3</div>
                <div>
                  <strong className="block text-text text-lg mb-1">Confirm details.</strong>
                  <p className="text-muted/90">The system creates your booking and keeps it visible under My Sessions.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4">FAQ</div>
            <h2 className="text-3xl font-sans font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-text to-muted">Common questions.</h2>
            
            <div className="space-y-6">
              <div className="glass-panel p-6 rounded-2xl border border-white/10">
                <strong className="block text-text mb-2">Who is private training for?</strong>
                <p className="text-sm text-muted/80">Leaders, professionals, founders, and teams who need clearer thinking and customized 1-on-1 instruction outside of a public cohort.</p>
              </div>
              <div className="glass-panel p-6 rounded-2xl border border-white/10">
                <strong className="block text-text mb-2">How is it delivered?</strong>
                <p className="text-sm text-muted/80">Sessions are booked online and delivered live. The format can be adapted entirely to your context and timeline.</p>
              </div>
              <div className="glass-panel p-6 rounded-2xl border border-white/10">
                <strong className="block text-text mb-2">Can sessions be customized?</strong>
                <p className="text-sm text-muted/80">Yes. Bring your real situation, decision, or operating challenge. The session is built entirely around that.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Final CTA */}
        <section className="text-center glass-panel rounded-3xl border border-white/10 p-12 lg:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mx-auto mb-8 relative z-10">
            <User size={32} />
          </div>
          <h2 className="text-4xl font-sans font-bold mb-6 relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-text to-muted">Ready for personalized impact?</h2>
          <p className="text-lg text-muted/80 max-w-2xl mx-auto mb-10 relative z-10">
            Book a focused private training session and bring the decision, system, or leadership challenge that matters most right now.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <a 
              href="/academy/home/book_session" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-cool rounded-xl text-white font-semibold shadow-[0_0_20px_rgba(0,184,219,0.3)] hover:shadow-[0_0_30px_rgba(0,184,219,0.5)] transition-all hover:-translate-y-0.5"
            >
              <span>Book a Session</span>
            </a>
            <Link href="/user/about-me" className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl text-text border border-white/10 glass-panel hover:bg-white/10 transition-all hover:-translate-y-0.5 font-bold">
              <span>Contact Me</span>
            </Link>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
