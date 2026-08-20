'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

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
      {/* Glow Orbs */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-accent/15 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-accent-cool/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent font-mono text-[11px] font-bold tracking-widest uppercase w-fit drop-shadow-[0_0_15px_rgba(0,184,219,0.2)]">
            WELCOME TO SKKER
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-sans font-bold text-white leading-[1.1] tracking-tight">
            Learn systems, strategy, <br className="hidden sm:block" />
            <em className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-cool not-italic">and AI</em> with clarity.
          </h1>

          <div className="flex flex-wrap items-center gap-2 text-xl sm:text-3xl font-medium text-white mt-2">
            <span className="text-muted/80">For leaders navigating</span>
            <div className="relative w-32 sm:w-48 h-10 flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="text-accent font-bold absolute italic"
                >
                  {words[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
          
          <p className="text-lg text-muted/90 leading-relaxed max-w-xl mt-4 font-medium">
            Practical programs and advisory for leaders, teams, and professionals who want clearer systems, stronger decisions, and better execution.
          </p>

          <div className="flex flex-wrap gap-4 pt-6">
            <Link 
              href="/user/training" 
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-cool rounded-xl text-[#04121d] font-extrabold shadow-[0_0_20px_rgba(0,184,219,0.3)] hover:shadow-[0_0_35px_rgba(0,184,219,0.5)] transition-all hover:-translate-y-1"
            >
              <span>Explore Training</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <a 
              href="/academy/home/book_session" 
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1 font-bold shadow-lg"
            >
              <span>Book a Strategy Session</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 sm:gap-8 mt-12 pt-10 border-t border-white/10 max-w-xl">
            <div>
              <div className="text-3xl sm:text-4xl font-sans font-black text-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">18+</div>
              <div className="text-[11px] sm:text-[12px] font-sans font-bold uppercase text-muted leading-tight tracking-wider">Years in Industry</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-sans font-black text-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">12+</div>
              <div className="text-[11px] sm:text-[12px] font-sans font-bold uppercase text-muted leading-tight tracking-wider">Countries Engaged</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-sans font-black text-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">40+</div>
              <div className="text-[11px] sm:text-[12px] font-sans font-bold uppercase text-muted leading-tight tracking-wider">Organizations Advised</div>
            </div>
          </div>
        </motion.div>

        {/* Right Image/Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 relative hidden lg:flex justify-end"
        >
          <div className="relative w-[450px] aspect-[4/5] rounded-[40px] border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-2 backdrop-blur-sm shadow-[0_30px_60px_rgba(0,0,0,0.6)] group">
             {/* Inner Image Container */}
             <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-[#0a1520]">
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#040b12] via-transparent to-transparent z-10"></div>
                
                <img 
                  src="/assets/images/founder-portrait.png" 
                  alt="SK Ker Portrait" 
                  className="object-cover w-full h-full opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to abstract graphic if image isn't available
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80";
                  }}
                />
             </div>
             
             {/* Founder Tag */}
             <div className="absolute bottom-10 -left-10 glass-panel border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-xl z-20 flex items-center gap-4 group-hover:-translate-y-2 transition-transform duration-500">
                <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent font-bold shrink-0">
                  SK
                </div>
                <div className="flex flex-col pr-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent mb-0.5">Founder</span>
                  <span className="text-[16px] font-bold text-white">SK Ker</span>
                  <span className="text-[12px] font-medium text-muted/90">Strategic Consultant</span>
                </div>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
