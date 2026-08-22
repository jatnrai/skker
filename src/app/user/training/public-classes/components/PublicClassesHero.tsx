'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function PublicClassesHero() {
  const steps = [
    'Class dates and seats are published.',
    'Participants register and receive confirmation.',
    'Calendar and meeting details are sent after confirmation.',
    'Materials and follow-up resources are shared through the Academy.'
  ];

  return (
    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
      {/* Left Column */}
      <div className="flex flex-col">
        <div className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-accent opacity-80 mb-6">
          Public Classes
        </div>
        
        <h1 className="text-[48px] sm:text-[60px] lg:text-[75px] font-serif font-bold text-heading leading-[1] tracking-[-0.03em] mb-6">
          Live cohort classes for <em className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-cool italic font-serif">practical operators.</em>
        </h1>
        
        <p className="text-[15px] text-muted/90 leading-[1.8] font-sans max-w-[500px] mb-10">
          Scheduled group classes for people who want live instruction, peer discussion, clear dates, seat-based registration, and confirmation details.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Link href="/academy/home/courses" className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-accent to-accent-cool rounded-[100px] text-page font-mono text-[11px] font-bold tracking-[0.1em] uppercase shadow-[0_0_20px_rgba(0,184,219,0.2)] hover:shadow-[0_0_30px_rgba(0,184,219,0.4)] transition-all hover:-translate-y-0.5">
            Browse Open Courses
          </Link>
          <a href="/#contact" className="inline-flex items-center justify-center px-10 py-4 rounded-[100px] text-heading border border-border bg-section/50 hover:bg-white/5 transition-all hover:-translate-y-0.5 font-mono text-[11px] font-bold tracking-[0.1em] uppercase shadow-lg">
            Request Availability
          </a>
        </div>
      </div>

      {/* Right Column: Workflow Panel */}
      <div className="lg:ml-auto w-full flex justify-end">
        <div className="bg-section/80 backdrop-blur-[20px] border border-border rounded-[32px] p-8 sm:p-10 w-full max-w-[480px] shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-accent/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <h2 className="text-[24px] sm:text-[28px] font-serif font-bold text-heading mb-8 relative z-10">
            Public class workflow
          </h2>
          
          <div className="flex flex-col gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full border border-accent/20 bg-accent/5 flex items-center justify-center text-accent font-mono text-[10px] font-bold shrink-0 mt-0.5">
                  0{index + 1}
                </div>
                <p className="text-[14px] text-heading/90 leading-[1.6]">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
