'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CorporateTrainingPage() {
  return (
    <main className="min-h-screen bg-bg text-text selection:bg-accent/30 flex flex-col relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMikiLz48L3N2Zz4=')] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none z-0" />

      <Navbar />
      
      <div className="flex-grow flex items-center justify-center pt-32 pb-24 px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        <div className="max-w-2xl w-full text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent font-mono text-xs font-bold tracking-widest uppercase mb-6">
            Corporate Training
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-serif leading-tight mb-8">
            Opening Corporate<br />
            <em className="text-muted italic font-serif">Training.</em>
          </h1>

          <div className="glass-panel p-8 rounded-3xl border border-white/10 mb-8 inline-block text-left">
            <p className="text-muted/80 text-lg">
              Redirecting to the corporate training proposal form.<br />
              If you are not redirected automatically, click below to open the form.
            </p>
          </div>

          <div className="flex justify-center">
            <a 
              href="/academy/page/corporate-training" 
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-cool rounded-xl text-white font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all hover:-translate-y-0.5"
            >
              <span>Open Form Now</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
