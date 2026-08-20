'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen, User, Users, Building, PlayCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-bg text-text selection:bg-accent/30 flex flex-col relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMikiLz48L3N2Zz4=')] pointer-events-none z-0" />
      <div className="absolute top-1/4 left-[10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-[10%] w-[400px] h-[400px] bg-accent-cool/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <Navbar />
      
      <div className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
        
        {/* Hero Section */}
        <header className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="flex flex-col gap-6">
            <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent font-mono text-xs font-bold tracking-widest uppercase w-fit">
              Training at SKKER
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif leading-tight">
              Learn by doing.<br />
              <em className="text-muted italic font-serif">Deliver with confidence.</em>
            </h1>
            <p className="text-lg text-muted/80 leading-relaxed max-w-xl">
              Choose the right learning path for the moment: self-paced courses, private training, public cohorts, or corporate programs built around real organisational outcomes.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#paths" 
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-cool rounded-xl text-white font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all hover:-translate-y-0.5"
              >
                <span>Explore Training Paths</span>
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
          <figure className="relative w-full max-w-lg ml-auto">
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 p-2 shadow-2xl bg-gradient-to-br from-white/5 to-transparent">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-surface mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80" 
                  alt="Professional workshop session" 
                  className="object-cover w-full h-full opacity-80"
                />
              </div>
              <div className="grid grid-cols-3 gap-2 text-center pb-2">
                <div>
                  <strong className="block text-2xl font-serif text-text">4</strong>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-muted">Training paths</span>
                </div>
                <div>
                  <strong className="block text-2xl font-serif text-text">3</strong>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-muted">Live formats</span>
                </div>
                <div>
                  <strong className="block text-2xl font-serif text-text">1</strong>
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
            <h2 className="text-4xl font-serif mb-6">Choose the format that matches the work.</h2>
            <p className="text-lg text-muted/80">Each path has its own purpose, CTA, and delivery model. No squeezed text. No overlapping images. Just clear choices.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Path 1 */}
            <Link href="/user/courses" className="group glass-panel rounded-3xl border border-white/10 overflow-hidden hover:border-accent/30 transition-all hover:-translate-y-1 block flex flex-col bg-surface shadow-lg">
              <div className="aspect-[16/10] bg-black relative overflow-hidden border-b border-white/10">
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" alt="Course Library" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center text-[10px] font-mono tracking-widest uppercase text-accent mb-4">
                  <span className="flex items-center gap-1.5"><BookOpen size={12} /> Courses</span>
                  <span className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-text">01</span>
                </div>
                <h3 className="text-xl font-bold text-text mb-3">Self-Paced Courses</h3>
                <p className="text-sm text-muted/80 mb-6 flex-grow">Structured learning products for scalable access to systems, product, Kanban, and AI strategy content.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-xs text-text/80"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Recorded or structured modules</li>
                  <li className="flex items-center gap-2 text-xs text-text/80"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Worksheets, resources, and progress</li>
                  <li className="flex items-center gap-2 text-xs text-text/80"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Free or paid course access</li>
                </ul>
                <div className="text-xs font-bold uppercase tracking-widest text-accent group-hover:text-accent-cool transition-colors inline-flex items-center gap-1 mt-auto">
                  Browse Courses <ArrowRight size={14} />
                </div>
              </div>
            </Link>

            {/* Path 2 */}
            <a href="#private-training" className="group glass-panel rounded-3xl border border-white/10 overflow-hidden hover:border-accent/30 transition-all hover:-translate-y-1 block flex flex-col bg-surface shadow-lg">
              <div className="aspect-[16/10] bg-black relative overflow-hidden border-b border-white/10">
                <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80" alt="Private Training" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center text-[10px] font-mono tracking-widest uppercase text-accent mb-4">
                  <span className="flex items-center gap-1.5"><User size={12} /> Private Training</span>
                  <span className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-text">02</span>
                </div>
                <h3 className="text-xl font-bold text-text mb-3">1-on-1 Training</h3>
                <p className="text-sm text-muted/80 mb-6 flex-grow">Premium individual training for people who want a personalised path instead of a public group class.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-xs text-text/80"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Custom scope and pacing</li>
                  <li className="flex items-center gap-2 text-xs text-text/80"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Preferred time and topic focus</li>
                  <li className="flex items-center gap-2 text-xs text-text/80"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Inquiry or confirmation workflow</li>
                </ul>
                <div className="text-xs font-bold uppercase tracking-widest text-accent group-hover:text-accent-cool transition-colors inline-flex items-center gap-1 mt-auto">
                  Request Availability <ArrowRight size={14} />
                </div>
              </div>
            </a>

            {/* Path 3 */}
            <Link href="/user/public-classes" className="group glass-panel rounded-3xl border border-white/10 overflow-hidden hover:border-accent/30 transition-all hover:-translate-y-1 block flex flex-col bg-surface shadow-lg">
              <div className="aspect-[16/10] bg-black relative overflow-hidden border-b border-white/10">
                <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80" alt="Public Classes" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center text-[10px] font-mono tracking-widest uppercase text-accent mb-4">
                  <span className="flex items-center gap-1.5"><Users size={12} /> Public Classes</span>
                  <span className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-text">03</span>
                </div>
                <h3 className="text-xl font-bold text-text mb-3">Live Cohorts</h3>
                <p className="text-sm text-muted/80 mb-6 flex-grow">Scheduled group classes for public cohorts, certifications, workshops, and masterclasses.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-xs text-text/80"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Class dates and seat availability</li>
                  <li className="flex items-center gap-2 text-xs text-text/80"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Registration and payment flow</li>
                  <li className="flex items-center gap-2 text-xs text-text/80"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Confirmation and meeting details</li>
                </ul>
                <div className="text-xs font-bold uppercase tracking-widest text-accent group-hover:text-accent-cool transition-colors inline-flex items-center gap-1 mt-auto">
                  View Classes <ArrowRight size={14} />
                </div>
              </div>
            </Link>

            {/* Path 4 */}
            <Link href="/user/corporate-training" className="group glass-panel rounded-3xl border border-white/10 overflow-hidden hover:border-accent/30 transition-all hover:-translate-y-1 block flex flex-col bg-surface shadow-lg">
              <div className="aspect-[16/10] bg-black relative overflow-hidden border-b border-white/10">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80" alt="Corporate Training" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center text-[10px] font-mono tracking-widest uppercase text-accent mb-4">
                  <span className="flex items-center gap-1.5"><Building size={12} /> Corporate</span>
                  <span className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-text">04</span>
                </div>
                <h3 className="text-xl font-bold text-text mb-3">Corporate Training</h3>
                <p className="text-sm text-muted/80 mb-6 flex-grow">B2B training and consulting-style delivery for teams, departments, and organisations.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-xs text-text/80"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Company context and objectives</li>
                  <li className="flex items-center gap-2 text-xs text-text/80"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Team size, format, and timeline</li>
                  <li className="flex items-center gap-2 text-xs text-text/80"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Proposal and sales qualification flow</li>
                </ul>
                <div className="text-xs font-bold uppercase tracking-widest text-accent group-hover:text-accent-cool transition-colors inline-flex items-center gap-1 mt-auto">
                  Request Proposal <ArrowRight size={14} />
                </div>
              </div>
            </Link>

          </div>
        </section>

        {/* Matrix and Workflow Grid */}
        <section id="private-training" className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32">
          
          <div className="lg:col-span-5 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-xl bg-surface">
            <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4">How to choose</div>
            <h3 className="text-3xl font-serif mb-6 text-text">Pick by delivery model, not by label.</h3>
            <p className="text-muted/80 leading-relaxed mb-8">
              Courses are productised learning. Private training is personalised. Public classes are scheduled cohorts. Corporate training is a sales and qualification workflow for teams.
            </p>
            <a 
              href="/academy/home/training" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest text-bg bg-accent hover:bg-accent-cool transition-colors"
            >
              Open Academy Overview <ArrowRight size={16} />
            </a>
          </div>

          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-xl bg-surface">
            <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4">Corporate workflow</div>
            <h3 className="text-3xl font-serif mb-8 text-text">From requirement to proposal.</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-accent text-[10px] font-mono font-bold tracking-widest uppercase mb-3 block">01</span>
                <strong className="block text-sm text-text mb-2 leading-snug h-10">Review requirements</strong>
                <p className="text-xs text-muted/80">We review your goals within 2-3 business days.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-accent text-[10px] font-mono font-bold tracking-widest uppercase mb-3 block">02</span>
                <strong className="block text-sm text-text mb-2 leading-snug h-10">Discovery Call</strong>
                <p className="text-xs text-muted/80">Align on scope, audience, context, and timeline.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-accent text-[10px] font-mono font-bold tracking-widest uppercase mb-3 block">03</span>
                <strong className="block text-sm text-text mb-2 leading-snug h-10">Tailored proposal</strong>
                <p className="text-xs text-muted/80">A proposal is sent to your email for review.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-accent text-[10px] font-mono font-bold tracking-widest uppercase mb-3 block">04</span>
                <strong className="block text-sm text-text mb-2 leading-snug h-10">Engagement begins</strong>
                <p className="text-xs text-muted/80">Proposal finalised, delivery rhythm agreed.</p>
              </div>
            </div>
          </div>
          
        </section>

        {/* CTA Panel */}
        <section className="glass-panel rounded-3xl border border-accent/20 p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden bg-gradient-to-br from-surface to-transparent shadow-2xl">
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl">
            <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4">Ready when useful</div>
            <h2 className="text-4xl font-serif mb-6 text-text">Start with the right format.</h2>
            <p className="text-lg text-muted/80 leading-relaxed">
              If you are unsure whether you need a course, private session, public class, or corporate program, start with a short strategy conversation.
            </p>
          </div>
          
          <div className="relative z-10 shrink-0">
            <a 
              href="/academy/home/book_session" 
              className="group relative inline-flex items-center gap-2 px-8 py-5 bg-gradient-to-r from-accent to-accent-cool rounded-xl text-white font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all hover:-translate-y-0.5"
            >
              <PlayCircle size={20} className="text-white" />
              <span>Book a Session</span>
            </a>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
