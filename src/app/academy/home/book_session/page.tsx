'use client';

import Link from 'next/link';
import { ArrowRight, Calendar, Clock, Video } from 'lucide-react';
import Navbar from '@/app/user/components/Navbar';
import Footer from '@/app/user/components/Footer';

export default function BookSessionPage() {
  return (
    <main className="min-h-screen bg-bg text-text selection:bg-accent/30 flex flex-col relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMikiLz48L3N2Zz4=')] pointer-events-none z-0" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <Navbar />
      
      <div className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
        
        <header className="max-w-3xl mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent font-mono text-xs font-bold tracking-widest uppercase mb-6">
            Strategy Session
          </div>
          <h1 className="text-5xl sm:text-6xl font-serif leading-tight mb-6">
            Book a<br />
            <em className="text-muted italic font-serif">Strategy Session.</em>
          </h1>
          <p className="text-lg text-muted/80 leading-relaxed">
            A focused 60-minute session for one decision, one bottleneck, or one operating question. We'll frame the problem and build practical next steps.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-panel p-8 rounded-3xl border border-white/10">
              <h2 className="text-xl font-bold text-text mb-6">Session Details</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-accent border border-white/10 shrink-0"><Clock size={18} /></div>
                  <div>
                    <strong className="block text-text text-sm mb-1">Duration</strong>
                    <p className="text-sm text-muted/80">60 Minutes</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-accent border border-white/10 shrink-0"><Video size={18} /></div>
                  <div>
                    <strong className="block text-text text-sm mb-1">Format</strong>
                    <p className="text-sm text-muted/80">Google Meet (Link provided upon booking)</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-accent border border-white/10 shrink-0"><Calendar size={18} /></div>
                  <div>
                    <strong className="block text-text text-sm mb-1">Scheduling</strong>
                    <p className="text-sm text-muted/80">Pick an available time on the calendar.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
              <h3 className="text-sm font-bold text-text mb-2">How to prepare</h3>
              <p className="text-sm text-muted/80">
                You will be asked to provide context when booking. Please describe the specific decision or system challenge you want to focus on so we can jump straight into the work.
              </p>
            </div>
          </div>

          {/* Booking Form/Embed Column */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl border border-white/10 shadow-xl overflow-hidden h-full min-h-[600px] flex flex-col items-center justify-center p-12 text-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-surface to-bg opacity-50 pointer-events-none" />
              
              <div className="relative z-10 max-w-md mx-auto">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 text-accent">
                  <Calendar size={32} />
                </div>
                <h3 className="text-2xl font-serif text-text mb-4">Calendar Booking System</h3>
                <p className="text-muted/80 mb-8">
                  The SKKER calendar scheduling widget would be embedded here, allowing you to select a time slot and submit your context.
                </p>
                <button className="w-full relative inline-flex justify-center items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-cool rounded-xl text-white font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all hover:-translate-y-0.5">
                  <span>Simulate Booking (Demo)</span>
                  <ArrowRight size={18} />
                </button>
              </div>
              
            </div>
          </div>

        </div>

      </div>

      <Footer />
    </main>
  );
}
