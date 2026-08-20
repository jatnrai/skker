'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

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
    <section className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-24 bg-bg border-b border-border" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="inline-block px-3 py-1 bg-surface border border-border text-text text-xs font-bold tracking-widest uppercase w-fit rounded-md shadow-sm">
            Strategic Systems Architect
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-bold text-text leading-tight tracking-tight">
            Designing Systems that Scale Leadership.
          </h1>

          <div className="flex items-center gap-2 text-xl sm:text-2xl font-medium text-text mt-2">
            <span className="text-muted">Built for leaders navigating</span>
            <span className="text-accent font-bold w-32 inline-block transition-all duration-300">
              {words[currentWordIndex]}
            </span>
          </div>
          
          <p className="text-lg text-muted leading-relaxed max-w-xl mt-4">
            I work with executives, founders, and organizations to architect high-performance systems across strategy, product, people, and AI.
          </p>

          <div className="flex flex-wrap gap-4 pt-6">
            <Link 
              href="/user/training" 
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent rounded-md text-white font-bold hover:bg-[#401b9c] transition-colors shadow-sm"
            >
              <span>Explore Training →</span>
            </Link>
            <a 
              href="/academy/home/book_session" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-text border border-border bg-surface hover:bg-bg transition-colors shadow-sm font-bold"
            >
              <span>Book a Strategy Session →</span>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border max-w-lg">
            <div>
              <div className="text-3xl font-sans font-bold text-text mb-1">18+</div>
              <div className="text-[10px] font-sans font-bold uppercase text-muted leading-tight">Years in Industry</div>
            </div>
            <div>
              <div className="text-3xl font-sans font-bold text-text mb-1">12+</div>
              <div className="text-[10px] font-sans font-bold uppercase text-muted leading-tight">Countries Engaged</div>
            </div>
            <div>
              <div className="text-3xl font-sans font-bold text-text mb-1">40+</div>
              <div className="text-[10px] font-sans font-bold uppercase text-muted leading-tight">Organizations Advised</div>
            </div>
          </div>
        </div>

        {/* Right Image/Graphic */}
        <div className="lg:col-span-5 relative flex justify-end">
          <figure className="relative max-w-[360px] w-full" aria-label="Founder portrait">
            <div className="relative rounded-md overflow-hidden bg-surface border border-border shadow-md">
              <div className="w-full aspect-[3/4] flex items-end justify-center relative overflow-hidden bg-[#e5e7eb]">
                <img 
                  className="relative z-10 w-[90%] h-auto object-contain bottom-0 grayscale hover:grayscale-0 transition-all duration-700" 
                  src="/assets/images/founder-portrait.png" 
                  alt="Portrait illustration of SK Ker, founder and principal consultant." 
                />
              </div>
            </div>
            <figcaption className="absolute -bottom-6 -left-6 p-5 rounded-md bg-surface border border-border shadow-lg">
              <div className="text-accent text-xs font-bold uppercase tracking-wider mb-1">Founder</div>
              <div className="text-lg font-bold text-text mb-1">SK Ker</div>
              <div className="text-sm text-muted">Founder · Strategic Consultant</div>
            </figcaption>
          </figure>
        </div>

      </div>
    </section>
  );
}
