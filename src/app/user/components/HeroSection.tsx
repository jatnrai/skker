'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["complexity", "scale", "change", "AI", "ambiguity"];

export default function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-24 overflow-hidden" id="hero">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-cool/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent font-mono text-xs font-bold tracking-widest uppercase w-fit">
            Strategic Systems Architect
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-text to-muted leading-tight tracking-tight">
            Designing Systems that Scale Leadership.
          </h1>

          <div className="flex items-center gap-2 text-xl sm:text-2xl font-medium text-text mt-2">
            <span className="text-muted/80">Built for leaders navigating</span>
            <div className="relative w-32 h-8 flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-accent font-bold absolute"
                >
                  {words[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
          
          <p className="text-lg text-muted/90 leading-relaxed max-w-xl mt-4">
            I work with executives, founders, and organizations to architect high-performance systems across strategy, product, people, and AI.
          </p>

          <div className="flex flex-wrap gap-4 pt-6">
            <Link 
              href="/user/training" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-cool rounded-xl text-white font-semibold shadow-[0_0_20px_rgba(0,184,219,0.3)] hover:shadow-[0_0_30px_rgba(0,184,219,0.5)] transition-all hover:-translate-y-0.5"
            >
              <span>Explore Training →</span>
            </Link>
            <a 
              href="/academy/home/book_session" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-text border border-white/10 glass-panel hover:bg-white/10 transition-all hover:-translate-y-0.5 font-bold"
            >
              <span>Book a Strategy Session →</span>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10 max-w-lg">
            <div>
              <div className="text-3xl font-sans font-bold text-text mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">18+</div>
              <div className="text-[10px] font-sans font-bold uppercase text-muted leading-tight">Years in Industry</div>
            </div>
            <div>
              <div className="text-3xl font-sans font-bold text-text mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">12+</div>
              <div className="text-[10px] font-sans font-bold uppercase text-muted leading-tight">Countries Engaged</div>
            </div>
            <div>
              <div className="text-3xl font-sans font-bold text-text mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">40+</div>
              <div className="text-[10px] font-sans font-bold uppercase text-muted leading-tight">Organizations Advised</div>
            </div>
          </div>
        </motion.div>

        {/* Right Image/Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-end"
        >
          <figure className="relative max-w-[360px] w-full" aria-label="Founder portrait">
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 p-2 shadow-2xl bg-gradient-to-br from-white/5 to-transparent">
              <div className="w-full aspect-[3/4] flex items-end justify-center relative overflow-hidden bg-surface rounded-2xl">
                <img 
                  className="relative z-10 w-[90%] h-auto object-contain bottom-0 grayscale hover:grayscale-0 transition-all duration-700 opacity-90" 
                  src="/assets/images/founder-portrait.png" 
                  alt="Portrait illustration of SK Ker, founder and principal consultant." 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
              </div>
            </div>
            <figcaption className="absolute -bottom-6 -left-6 p-5 rounded-2xl glass-panel border border-white/10 shadow-[0_0_20px_rgba(0,184,219,0.1)] z-20">
              <div className="text-accent text-[10px] font-mono tracking-widest uppercase mb-1">Founder</div>
              <div className="text-xl font-bold text-text mb-1 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">SK Ker</div>
              <div className="text-sm text-muted/90">Strategic Consultant</div>
            </figcaption>
          </figure>
        </motion.div>

      </div>
    </section>
  );
}
