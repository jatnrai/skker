'use client';

import Link from 'next/link';
import { ArrowRight, Users, CheckCircle2, Calendar, ShieldCheck, TrendingUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PublicClassesPage() {
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
              Public Classes
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-text to-muted">
              Live cohort learning.
            </h1>
            <p className="text-lg text-muted/90 leading-relaxed max-w-xl">
              Scheduled cohort experiences for learners who want live practice, group discussion, peer networking, and clear dates to force momentum.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="mailto:hello@skker.com" 
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-cool rounded-xl text-white font-semibold shadow-[0_0_20px_rgba(0,184,219,0.3)] hover:shadow-[0_0_30px_rgba(0,184,219,0.5)] transition-all hover:-translate-y-0.5"
              >
                <span>Check Availability</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#class-types" className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl text-text border border-white/10 glass-panel hover:bg-white/10 transition-all hover:-translate-y-0.5 font-bold">
                <span>View Formats</span>
              </a>
            </div>
          </div>
          <figure className="relative w-full max-w-lg ml-auto">
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 p-2 shadow-2xl bg-gradient-to-br from-white/5 to-transparent">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-surface">
                <img 
                  src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=800&q=80" 
                  alt="Public Class Session" 
                  className="object-cover w-full h-full opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <figcaption className="absolute bottom-0 left-0 w-full p-6">
                  <div className="text-lg font-bold text-white mb-1">Structured. Peer-driven. Live.</div>
                  <div className="text-sm text-white/80">Intense, multi-day deep dives with industry peers.</div>
                </figcaption>
              </div>
            </div>
          </figure>
        </header>

        {/* Class Types */}
        <section id="class-types" className="scroll-mt-32 mb-32">
          <div className="mb-16 max-w-2xl">
            <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4">Core Class Tracks</div>
            <h2 className="text-4xl font-sans font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-text to-muted">Learn alongside peers.</h2>
            <p className="text-lg text-muted/90">Our public schedules cover three main pillars, offered periodically throughout the year.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Type 1 */}
            <article className="glass-panel p-8 rounded-3xl border border-white/10 relative group hover:border-accent/30 transition-all hover:-translate-y-1">
              <div className="text-4xl font-sans font-bold text-white/5 absolute top-6 right-8 group-hover:text-accent/20 transition-colors">01</div>
              <h3 className="text-2xl font-bold text-text mb-4">Product Leadership</h3>
              <p className="text-muted/80 mb-8 min-h-[80px]">A masterclass on moving from delivery management to strategic product leadership.</p>
              
              <div className="mb-6">
                <div className="text-[10px] font-mono tracking-widest uppercase text-accent mb-2">Ideal for</div>
                <p className="text-sm text-text/90">Senior PMs, Heads of Product, and portfolio directors.</p>
              </div>
              
              <div>
                <div className="text-[10px] font-mono tracking-widest uppercase text-accent mb-3">Outcomes</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-text/90"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Strategic roadmapping</li>
                  <li className="flex items-center gap-2 text-sm text-text/90"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Cross-functional alignment</li>
                  <li className="flex items-center gap-2 text-sm text-text/90"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Outcome-based metrics</li>
                </ul>
              </div>
            </article>

            {/* Type 2 */}
            <article className="glass-panel p-8 rounded-3xl border border-white/10 relative group hover:border-accent/30 transition-all hover:-translate-y-1">
              <div className="text-4xl font-sans font-bold text-white/5 absolute top-6 right-8 group-hover:text-accent/20 transition-colors">02</div>
              <h3 className="text-2xl font-bold text-text mb-4">Kanban System Design</h3>
              <p className="text-muted/80 mb-8 min-h-[80px]">Design, implement, and run Kanban systems that actually expose bottlenecks and improve flow.</p>
              
              <div className="mb-6">
                <div className="text-[10px] font-mono tracking-widest uppercase text-accent mb-2">Ideal for</div>
                <p className="text-sm text-text/90">Delivery leads, Scrum Masters, and operational managers.</p>
              </div>
              
              <div>
                <div className="text-[10px] font-mono tracking-widest uppercase text-accent mb-3">Outcomes</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-text/90"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Flow efficiency mapping</li>
                  <li className="flex items-center gap-2 text-sm text-text/90"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> WIP limit design</li>
                  <li className="flex items-center gap-2 text-sm text-text/90"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Cadence and meetings</li>
                </ul>
              </div>
            </article>

            {/* Type 3 */}
            <article className="glass-panel p-8 rounded-3xl border border-white/10 relative group hover:border-accent/30 transition-all hover:-translate-y-1">
              <div className="text-4xl font-sans font-bold text-white/5 absolute top-6 right-8 group-hover:text-accent/20 transition-colors">03</div>
              <h3 className="text-2xl font-bold text-text mb-4">AI Integration Strategy</h3>
              <p className="text-muted/80 mb-8 min-h-[80px]">A cohort based workshop on assessing AI readiness and safely embedding tools into workflows.</p>
              
              <div className="mb-6">
                <div className="text-[10px] font-mono tracking-widest uppercase text-accent mb-2">Ideal for</div>
                <p className="text-sm text-text/90">Executives, innovation leads, and operational architects.</p>
              </div>
              
              <div>
                <div className="text-[10px] font-mono tracking-widest uppercase text-accent mb-3">Outcomes</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-text/90"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> AI capability mapping</li>
                  <li className="flex items-center gap-2 text-sm text-text/90"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Governance frameworks</li>
                  <li className="flex items-center gap-2 text-sm text-text/90"><div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" /> Implementation playbooks</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* Benefits/Features */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-6 shadow-[0_0_20px_rgba(0,184,219,0.2)]">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">Networking</h3>
              <p className="text-sm text-muted/90">Learn alongside peers from different industries facing similar systemic challenges.</p>
            </div>
            <div className="glass-panel p-8 rounded-3xl border border-accent/20 bg-gradient-to-b from-accent/5 to-transparent flex flex-col items-center text-center shadow-[0_0_30px_rgba(0,184,219,0.1)] relative overflow-hidden">
              <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
              <div className="w-14 h-14 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center text-accent mb-6 shadow-[0_0_30px_rgba(0,184,219,0.4)]">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">Certification</h3>
              <p className="text-sm text-muted/90">Select classes include accredited certification upon successful completion of the cohort.</p>
            </div>
            <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-6 shadow-[0_0_20px_rgba(0,184,219,0.2)]">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">Immediate ROI</h3>
              <p className="text-sm text-muted/90">Exercises are designed so you can bring real work and leave with a usable plan.</p>
            </div>
          </div>
        </section>

        {/* Process & FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          {/* Registration Flow */}
          <section>
            <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4">Registration Flow</div>
            <h2 className="text-3xl font-sans font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-text to-muted">How to join.</h2>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-px before:bg-gradient-to-b before:from-accent/50 before:to-transparent">
              <div className="relative flex items-start gap-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-accent/50 bg-surface text-accent shrink-0 shadow-[0_0_15px_rgba(0,184,219,0.4)] z-10 font-mono text-sm">1</div>
                <div>
                  <strong className="block text-text text-lg mb-1">Check the schedule.</strong>
                  <p className="text-muted/90">Find an upcoming date and time zone that works for your schedule.</p>
                </div>
              </div>
              <div className="relative flex items-start gap-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-surface text-muted shrink-0 z-10 font-mono text-sm">2</div>
                <div>
                  <strong className="block text-text text-lg mb-1">Secure your seat.</strong>
                  <p className="text-muted/90">Register and complete payment online. Seats are strictly limited to ensure quality.</p>
                </div>
              </div>
              <div className="relative flex items-start gap-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-surface text-muted shrink-0 z-10 font-mono text-sm">3</div>
                <div>
                  <strong className="block text-text text-lg mb-1">Receive materials.</strong>
                  <p className="text-muted/90">Get calendar invites, pre-reading, and access to the cohort communication channel.</p>
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
                <strong className="block text-text mb-2">How many people are in a class?</strong>
                <p className="text-sm text-muted/80">We cap public classes at 15-20 participants to ensure everyone gets time for Q&A and active participation in group exercises.</p>
              </div>
              <div className="glass-panel p-6 rounded-2xl border border-white/10">
                <strong className="block text-text mb-2">Are the sessions recorded?</strong>
                <p className="text-sm text-muted/80">Yes. Registered participants will receive access to the recordings and materials for 6 months after the class concludes.</p>
              </div>
              <div className="glass-panel p-6 rounded-2xl border border-white/10">
                <strong className="block text-text mb-2">Do you offer group discounts?</strong>
                <p className="text-sm text-muted/80">Yes. If you are registering 3 or more people from the same organization, please contact us for a group rate.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Final CTA */}
        <section className="text-center glass-panel rounded-3xl border border-white/10 p-12 lg:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mx-auto mb-8 relative z-10">
            <Calendar size={32} />
          </div>
          <h2 className="text-4xl font-sans font-bold mb-6 relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-text to-muted">Ready to join the next cohort?</h2>
          <p className="text-lg text-muted/80 max-w-2xl mx-auto mb-10 relative z-10">
            Check the upcoming schedule to find dates and times that work for you, or subscribe to be notified of future classes.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <a 
              href="mailto:hello@skker.com?subject=Public%20Class%20Schedule%20Request" 
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-cool rounded-xl text-white font-semibold shadow-[0_0_20px_rgba(0,184,219,0.3)] hover:shadow-[0_0_30px_rgba(0,184,219,0.5)] transition-all hover:-translate-y-0.5"
            >
              <span>Request Schedule</span>
            </a>
            <Link href="/user/courses" className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl text-text border border-white/10 glass-panel hover:bg-white/10 transition-all hover:-translate-y-0.5 font-bold">
              <span>View Self-Paced Alternatives</span>
            </Link>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
