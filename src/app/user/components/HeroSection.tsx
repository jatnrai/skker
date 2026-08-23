'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-8 overflow-hidden" id="hero">
      {/* Background glow effects - keeping them subtle */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-accent/30 dark:bg-accent/15 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-accent-cool/25 dark:bg-accent-cool/10 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col gap-8"
        >
          {/* Kicker */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-[1px] bg-accent"></div>
            <span className="text-accent font-mono text-[10px] font-bold tracking-[0.2em] uppercase">
              WELCOME TO SKKER
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[48px] sm:text-[60px] lg:text-[72px] font-serif font-bold text-text leading-[1.05] tracking-tight">
            Learn systems, strategy, <br />
            <em className="text-accent italic font-serif">and AI</em> with clarity.
          </h1>

          {/* Subheadline */}
          <p className="text-[15px] text-muted/80 leading-relaxed max-w-xl font-sans">
            Practical programs and advisory for leaders, teams, and professionals who want clearer systems, stronger decisions, and better execution.
          </p>

          {/* Primary Buttons - Fixed Uniform Width */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full max-w-[580px]">
            <Link
              href="/user/training"
              className="group flex justify-center items-center gap-3 w-full py-5 bg-gradient-to-r from-accent to-accent-cool rounded-full text-heading font-mono text-[13px] font-extrabold tracking-[0.1em] uppercase shadow-[0_0_20px_rgba(0,184,219,0.3)] hover:shadow-[0_0_35px_rgba(0,184,219,0.5)] transition-all hover:-translate-y-1"
            >
              <span>Explore Training</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </Link>
            <a
              href="/user#enquiry"
              className="group flex justify-center items-center gap-3 w-full py-5 rounded-full text-text border border-border bg-surface hover:bg-page transition-all font-mono text-[13px] font-bold tracking-[0.1em] uppercase hover:-translate-y-1"
            >
              <span>Book a Strategy Session</span>
            </a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-surface/80 backdrop-blur-md border border-border rounded-2xl p-6 flex flex-col gap-2 shadow-sm">
              <div className="text-3xl font-serif font-bold text-text">18<span className="text-muted/60 text-2xl">+</span></div>
              <div className="text-[9px] font-mono font-bold uppercase text-muted tracking-[0.15em]">Years in Industry</div>
            </div>
            <div className="bg-surface/80 backdrop-blur-md border border-border rounded-2xl p-6 flex flex-col gap-2 shadow-sm">
              <div className="text-3xl font-serif font-bold text-text">12<span className="text-muted/60 text-2xl">+</span></div>
              <div className="text-[9px] font-mono font-bold uppercase text-muted tracking-[0.15em]">Countries Engaged</div>
            </div>
            <div className="bg-surface/80 backdrop-blur-md border border-border rounded-2xl p-6 flex flex-col gap-2 shadow-sm">
              <div className="text-3xl font-serif font-bold text-text">40<span className="text-muted/60 text-2xl">+</span></div>
              <div className="text-[9px] font-mono font-bold uppercase text-muted tracking-[0.15em]">Organizations Advised</div>
            </div>
          </div>

        </motion.div>

        {/* Right Graphic/Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 relative hidden lg:flex justify-end h-full items-center"
        >
          {/* Container holding the image and nameplate */}
          <div className="relative w-[380px] h-[480px]">

            {/* Main Image Container */}
            <div className="absolute inset-0 rounded-[32px] border border-border bg-surface overflow-hidden shadow-2xl">
              {/* Glossy reflection effect */}
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent z-10 pointer-events-none" />

              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

              {/* The Portrait */}
              <div className="absolute inset-0 flex items-end justify-center z-10 pb-8">
                <img
                  src="/assets/images/founder-portrait.png"
                  alt="SK Ker Portrait"
                  className="object-contain w-full h-[90%] drop-shadow-2xl"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>
            </div>

            {/* Overlapping Bottom Nameplate Card */}
            <div className="absolute -bottom-6 -left-6 -right-6 glass-panel border border-border p-6 rounded-2xl z-20 flex flex-col gap-2 shadow-2xl backdrop-blur-[30px]">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-accent">Founder</span>
              <span className="text-xl font-serif font-bold text-text">SK Ker</span>
              <span className="text-[12px] font-sans text-muted/80 leading-relaxed mt-1">Strategic consultant, systems architect, and executive advisor.</span>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Bottom Nav Pills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="w-full flex justify-center mt-12 relative z-10 px-4"
      >
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 p-4 sm:p-3 rounded-[32px] sm:rounded-full border border-border bg-card shadow-lg backdrop-blur-md w-full sm:w-auto">
          <Link href="/user/login" className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full hover:bg-surface transition-colors text-[11px] font-mono font-bold uppercase tracking-[0.1em] text-muted hover:text-heading">
            Login to Academy
          </Link>
          
          <div className="w-[1px] h-5 bg-border hidden sm:block"></div>
          <div className="h-[1px] w-full bg-border block sm:hidden"></div>
          
          <Link href="/user/training/courses" className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full hover:bg-surface transition-colors text-[11px] font-mono font-bold uppercase tracking-[0.1em] text-muted hover:text-heading">
            Browse Courses
          </Link>
          
          <div className="w-[1px] h-5 bg-border hidden sm:block"></div>
          <div className="h-[1px] w-full bg-border block sm:hidden"></div>
          
          <Link href="/academy/home/book_session" className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full hover:bg-surface transition-colors text-[11px] font-mono font-bold uppercase tracking-[0.1em] text-muted hover:text-heading">
            Book a Session
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
