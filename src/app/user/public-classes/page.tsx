'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PublicClassesPage() {
  return (
    <main className="min-h-screen bg-bg text-text selection:bg-accent/30 flex flex-col relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMikiLz48L3N2Zz4=')] pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-cool/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <Navbar />
      
      <div className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
        
        {/* Hero Section */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent font-mono text-xs font-bold tracking-widest uppercase w-fit">
              Public Classes
            </div>
            <h1 className="text-5xl sm:text-6xl font-serif leading-tight">
              Live cohort classes for<br />
              <em className="text-muted italic font-serif">practical operators.</em>
            </h1>
            <p className="text-lg text-muted/80 leading-relaxed max-w-xl">
              Scheduled group classes for people who want live instruction, peer discussion, clear dates, seat-based registration, and confirmation details.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="/academy/home/courses" 
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-cool rounded-xl text-white font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all hover:-translate-y-0.5"
              >
                <span>Browse Open Courses</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link href="/user/about-me" className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl text-text border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-0.5 glass-panel">
                <span>Request Availability</span>
              </Link>
            </div>
          </div>
          
          <aside className="lg:col-span-5 w-full">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 shadow-xl">
              <h2 className="text-2xl font-serif text-text mb-6">Public class workflow</h2>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-3.5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-accent/50 before:to-transparent">
                <div className="relative flex items-start gap-4">
                  <div className="flex items-center justify-center w-7 h-7 rounded-full bg-surface text-text border border-white/10 shrink-0 z-10 font-mono text-xs">1</div>
                  <p className="text-sm text-text/90 pt-1">Class dates and seats are published.</p>
                </div>
                <div className="relative flex items-start gap-4">
                  <div className="flex items-center justify-center w-7 h-7 rounded-full bg-surface text-text border border-white/10 shrink-0 z-10 font-mono text-xs">2</div>
                  <p className="text-sm text-text/90 pt-1">Participants register and receive confirmation.</p>
                </div>
                <div className="relative flex items-start gap-4">
                  <div className="flex items-center justify-center w-7 h-7 rounded-full bg-surface text-text border border-white/10 shrink-0 z-10 font-mono text-xs">3</div>
                  <p className="text-sm text-text/90 pt-1">Calendar and meeting details are sent after confirmation.</p>
                </div>
                <div className="relative flex items-start gap-4">
                  <div className="flex items-center justify-center w-7 h-7 rounded-full bg-surface text-text border border-white/10 shrink-0 z-10 font-mono text-xs">4</div>
                  <p className="text-sm text-text/90 pt-1">Materials and follow-up resources are shared through the Academy.</p>
                </div>
              </div>
            </div>
          </aside>
        </header>

        {/* Classes Grid */}
        <section aria-label="Upcoming public class examples" className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <a href="/academy/home/courses" className="group glass-panel rounded-3xl border border-white/10 overflow-hidden hover:border-accent/30 transition-all hover:-translate-y-1 block">
              <div className="aspect-[16/10] bg-surface relative overflow-hidden border-b border-white/10">
                <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80" alt="Workshop room" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="text-[10px] font-mono tracking-widest uppercase text-accent mb-2">Public Class</div>
                <h3 className="text-xl font-bold text-text mb-3">Kanban System Design</h3>
                <p className="text-sm text-muted/80 mb-6 line-clamp-2">A live class for visualising work, managing flow, and designing explicit operating policies.</p>
                <div className="text-xs font-bold uppercase tracking-widest text-accent group-hover:text-accent-cool transition-colors inline-flex items-center gap-1">
                  Register for Class <ArrowRight size={14} />
                </div>
              </div>
            </a>

            {/* Card 2 */}
            <a href="/academy/home/courses" className="group glass-panel rounded-3xl border border-white/10 overflow-hidden hover:border-accent/30 transition-all hover:-translate-y-1 block">
              <div className="aspect-[16/10] bg-surface relative overflow-hidden border-b border-white/10">
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80" alt="Learning dashboard" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="text-[10px] font-mono tracking-widest uppercase text-accent mb-2">Masterclass</div>
                <h3 className="text-xl font-bold text-text mb-3">AI and Product Strategy</h3>
                <p className="text-sm text-muted/80 mb-6 line-clamp-2">A focused cohort session on practical AI adoption, product decisions, and governance basics.</p>
                <div className="text-xs font-bold uppercase tracking-widest text-accent group-hover:text-accent-cool transition-colors inline-flex items-center gap-1">
                  Register for Class <ArrowRight size={14} />
                </div>
              </div>
            </a>

            {/* Card 3 */}
            <Link href="/user/about-me" className="group glass-panel rounded-3xl border border-white/10 overflow-hidden hover:border-accent/30 transition-all hover:-translate-y-1 block">
              <div className="aspect-[16/10] bg-surface relative overflow-hidden border-b border-white/10">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80" alt="Executive discussion" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="text-[10px] font-mono tracking-widest uppercase text-accent mb-2">Waitlist</div>
                <h3 className="text-xl font-bold text-text mb-3">Product Leadership Clinic</h3>
                <p className="text-sm text-muted/80 mb-6 line-clamp-2">A small-group format for managers and leads improving delivery rhythm and decision quality.</p>
                <div className="text-xs font-bold uppercase tracking-widest text-accent group-hover:text-accent-cool transition-colors inline-flex items-center gap-1">
                  Request Availability <ArrowRight size={14} />
                </div>
              </div>
            </Link>

          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
