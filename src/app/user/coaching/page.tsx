'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CoachingPage() {
  return (
    <main className="min-h-screen bg-bg text-text selection:bg-accent/30 flex flex-col relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMikiLz48L3N2Zz4=')] pointer-events-none z-0" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent-cool/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <Navbar />
      
      <div className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
        
        {/* Hero Section */}
        <header className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="flex flex-col gap-6">
            <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent font-mono text-xs font-bold tracking-widest uppercase w-fit">
              SKKER Coaching
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif leading-tight">
              Coaching for<br />
              <em className="text-muted italic font-serif">sharper decisions.</em>
            </h1>
            <p className="text-lg text-muted/80 leading-relaxed max-w-xl">
              Practical coaching for leaders, professionals, and teams who want clearer systems, better judgment, and stronger execution without adding more noise.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="/academy/home/book_session" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-cool rounded-xl text-white font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all hover:-translate-y-0.5"
              >
                <span>Book a Session</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#coaching-types" className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl text-text border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-0.5 glass-panel">
                <span>Explore Types</span>
              </a>
            </div>
          </div>
          <figure className="relative w-full max-w-lg ml-auto">
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 p-2 shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-surface">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=84" 
                  alt="Professional coaching conversation" 
                  className="object-cover w-full h-full opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <figcaption className="absolute bottom-0 left-0 w-full p-6">
                  <div className="text-lg font-bold text-white mb-1">Focused. Practical. Human.</div>
                  <div className="text-sm text-white/80">Sessions are built around decisions, operating habits, and real constraints.</div>
                </figcaption>
              </div>
            </div>
          </figure>
        </header>

        {/* Coaching Types */}
        <section id="coaching-types" className="scroll-mt-32 mb-32">
          <div className="mb-16 max-w-2xl">
            <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4">Three Coaching Types</div>
            <h2 className="text-4xl font-serif mb-6">Choose the right<br /><em className="text-muted italic">conversation.</em></h2>
            <p className="text-lg text-muted/80">Each track is concise, contextual, and designed around the work you are actually trying to improve.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Type 1 */}
            <article className="glass-panel p-8 rounded-3xl border border-white/10 relative group hover:border-accent/30 transition-all hover:-translate-y-1">
              <div className="text-4xl font-serif text-white/10 absolute top-6 right-8 group-hover:text-accent/20 transition-colors">01</div>
              <h3 className="text-2xl font-bold text-text mb-4">Mentoring</h3>
              <p className="text-muted/80 mb-8 min-h-[80px]">A thinking partner for direction, leverage, career architecture, and stronger operating habits.</p>
              
              <div className="mb-6">
                <div className="text-[10px] font-mono tracking-widest uppercase text-accent mb-2">Best for</div>
                <p className="text-sm text-text/90">Professionals and leaders making role, scope, or career decisions.</p>
              </div>
              
              <div>
                <div className="text-[10px] font-mono tracking-widest uppercase text-accent mb-3">Outcomes</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-text/80"><CheckCircle2 size={14} className="text-accent"/> Sharper direction</li>
                  <li className="flex items-center gap-2 text-sm text-text/80"><CheckCircle2 size={14} className="text-accent"/> Better leverage points</li>
                  <li className="flex items-center gap-2 text-sm text-text/80"><CheckCircle2 size={14} className="text-accent"/> Clearer next moves</li>
                </ul>
              </div>
            </article>

            {/* Type 2 */}
            <article className="glass-panel p-8 rounded-3xl border border-white/10 relative group hover:border-accent/30 transition-all hover:-translate-y-1">
              <div className="text-4xl font-serif text-white/10 absolute top-6 right-8 group-hover:text-accent/20 transition-colors">02</div>
              <h3 className="text-2xl font-bold text-text mb-4">Personal Coaching</h3>
              <p className="text-muted/80 mb-8 min-h-[80px]">Focused coaching for clarity, decision quality, execution rhythm, and personal leadership context.</p>
              
              <div className="mb-6">
                <div className="text-[10px] font-mono tracking-widest uppercase text-accent mb-2">Best for</div>
                <p className="text-sm text-text/90">Operators who need stronger personal systems and decision discipline.</p>
              </div>
              
              <div>
                <div className="text-[10px] font-mono tracking-widest uppercase text-accent mb-3">Outcomes</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-text/80"><CheckCircle2 size={14} className="text-accent"/> Better decision hygiene</li>
                  <li className="flex items-center gap-2 text-sm text-text/80"><CheckCircle2 size={14} className="text-accent"/> Cleaner execution rhythm</li>
                  <li className="flex items-center gap-2 text-sm text-text/80"><CheckCircle2 size={14} className="text-accent"/> Reduced overwhelm</li>
                </ul>
              </div>
            </article>

            {/* Type 3 */}
            <article className="glass-panel p-8 rounded-3xl border border-white/10 relative group hover:border-accent/30 transition-all hover:-translate-y-1">
              <div className="text-4xl font-serif text-white/10 absolute top-6 right-8 group-hover:text-accent/20 transition-colors">03</div>
              <h3 className="text-2xl font-bold text-text mb-4">Business Coaching</h3>
              <p className="text-muted/80 mb-8 min-h-[80px]">Operating model clarity, delivery rhythm, stakeholder alignment, and practical execution systems.</p>
              
              <div className="mb-6">
                <div className="text-[10px] font-mono tracking-widest uppercase text-accent mb-2">Best for</div>
                <p className="text-sm text-text/90">Founders, executives, and teams navigating scale, friction, or transformation.</p>
              </div>
              
              <div>
                <div className="text-[10px] font-mono tracking-widest uppercase text-accent mb-3">Outcomes</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-text/80"><CheckCircle2 size={14} className="text-accent"/> Clear operating cadence</li>
                  <li className="flex items-center gap-2 text-sm text-text/80"><CheckCircle2 size={14} className="text-accent"/> Aligned priorities</li>
                  <li className="flex items-center gap-2 text-sm text-text/80"><CheckCircle2 size={14} className="text-accent"/> Better delivery flow</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* Packages */}
        <section className="mb-32">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4">Packages</div>
            <h2 className="text-4xl font-serif mb-6">Simple formats.<br />Real work.</h2>
            <p className="text-lg text-muted/80">Start with one session or build a short coaching arc around a specific decision, transition, or operating challenge.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <article className="glass-panel p-8 rounded-3xl border border-white/10 relative">
              <span className="absolute -top-4 left-8 px-4 py-1 bg-surface border border-white/10 rounded-full text-xs font-mono text-accent">Single</span>
              <h3 className="text-2xl font-bold text-text mt-2 mb-4">Strategy Session</h3>
              <p className="text-muted/80 mb-6">A focused session for one decision, one bottleneck, or one operating question.</p>
              <ul className="space-y-3 border-t border-white/10 pt-6">
                <li className="flex items-center gap-3 text-sm text-text"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Clear problem framing</li>
                <li className="flex items-center gap-3 text-sm text-text"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Practical next steps</li>
                <li className="flex items-center gap-3 text-sm text-text"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Useful when speed matters</li>
              </ul>
            </article>

            <article className="glass-panel p-8 rounded-3xl border border-accent/20 relative bg-gradient-to-br from-accent/5 to-transparent">
              <span className="absolute -top-4 left-8 px-4 py-1 bg-accent border border-accent/20 text-white rounded-full text-xs font-mono">Sprint</span>
              <h3 className="text-2xl font-bold text-text mt-2 mb-4">Coaching Sprint</h3>
              <p className="text-muted/80 mb-6">A short sequence of sessions for a career move, leadership challenge, or operating model reset.</p>
              <ul className="space-y-3 border-t border-white/10 pt-6">
                <li className="flex items-center gap-3 text-sm text-text"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Session rhythm and follow-up</li>
                <li className="flex items-center gap-3 text-sm text-text"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Decision and execution support</li>
                <li className="flex items-center gap-3 text-sm text-text"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Useful for transitions</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Booking Flow & FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          {/* Booking Flow */}
          <section>
            <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4">Booking Flow</div>
            <h2 className="text-3xl font-serif mb-10">How it works.</h2>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-accent/50 before:to-transparent">
              <div className="relative flex items-start gap-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-accent/30 bg-surface text-accent shrink-0 shadow-[0_0_15px_rgba(0,184,219,0.2)] z-10 font-mono text-sm">1</div>
                <div>
                  <strong className="block text-text text-lg mb-1">Choose your coaching type.</strong>
                  <p className="text-muted/80">Mentoring, Personal Coaching, or Business Coaching.</p>
                </div>
              </div>
              <div className="relative flex items-start gap-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-surface text-muted shrink-0 z-10 font-mono text-sm">2</div>
                <div>
                  <strong className="block text-text text-lg mb-1">Pick an available slot.</strong>
                  <p className="text-muted/80">Use the live booking calendar connected to SKKER Academy.</p>
                </div>
              </div>
              <div className="relative flex items-start gap-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-surface text-muted shrink-0 z-10 font-mono text-sm">3</div>
                <div>
                  <strong className="block text-text text-lg mb-1">Confirm details.</strong>
                  <p className="text-muted/80">The system creates your booking and keeps it visible under My Sessions.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4">FAQ</div>
            <h2 className="text-3xl font-serif mb-10">Common questions.</h2>
            
            <div className="space-y-6">
              <div className="glass-panel p-6 rounded-2xl border border-white/10">
                <strong className="block text-text mb-2">Who is coaching for?</strong>
                <p className="text-sm text-muted/80">Leaders, professionals, founders, and teams who need clearer thinking and better operating habits.</p>
              </div>
              <div className="glass-panel p-6 rounded-2xl border border-white/10">
                <strong className="block text-text mb-2">How is coaching delivered?</strong>
                <p className="text-sm text-muted/80">Sessions are booked online and delivered live. The format can be adapted to your context.</p>
              </div>
              <div className="glass-panel p-6 rounded-2xl border border-white/10">
                <strong className="block text-text mb-2">Can sessions be customized?</strong>
                <p className="text-sm text-muted/80">Yes. Bring your real situation, decision, or operating challenge. The session is built around that.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Final CTA */}
        <section className="text-center glass-panel rounded-3xl border border-white/10 p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] pointer-events-none" />
          <h2 className="text-4xl font-serif mb-6 relative z-10">Ready for a clearer next move?</h2>
          <p className="text-lg text-muted/80 max-w-2xl mx-auto mb-10 relative z-10">
            Book a focused strategy session and bring the decision, system, or leadership challenge that matters most right now.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <a 
              href="/academy/home/book_session" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-cool rounded-xl text-white font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all hover:-translate-y-0.5"
            >
              <span>Book a Session</span>
            </a>
            <Link href="/user/about-me" className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl text-text border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-0.5 glass-panel">
              <span>Contact Me</span>
            </Link>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
