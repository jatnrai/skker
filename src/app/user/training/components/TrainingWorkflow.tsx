'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function TrainingWorkflow() {
  const steps = [
    { num: '01', title: 'Review Requirements', desc: 'We review your goals within 2-3 business days.' },
    { num: '02', title: 'Initiate Discovery Call', desc: 'Align on scope, audience, context, and timeline.' },
    { num: '03', title: 'Prepare Proposal', desc: 'A proposal is sent to your email for review.' },
    { num: '04', title: 'Begin Engagement', desc: 'Proposal finalised, delivery rhythm agreed.' }
  ];

  return (
    <section id="private-training" className="mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-6 lg:gap-8 items-stretch">
        
        {/* Left: How to Choose */}
        <div className="border-gradient rounded-[28px] p-8 sm:p-10 flex flex-col justify-center relative overflow-hidden group shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            <div className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-accent/80 mb-6">
              How to choose
            </div>
            <h3 className="text-[32px] sm:text-[40px] font-serif font-bold text-heading leading-[1.05] tracking-tight mb-6">
              Pick by delivery model, <br />
              <em className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-cool italic font-serif">not by label.</em>
            </h3>
            <p className="text-[15px] text-muted/90 leading-[1.8] font-sans mb-10 max-w-[400px]">
              Courses are productised learning. Private training is personalised. Public classes are scheduled cohorts. Corporate training is a sales and qualification workflow for teams.
            </p>
            
            <Link 
              href="/academy/home/training" 
              className="inline-flex items-center justify-center px-8 py-3.5 bg-surface border border-border hover:border-accent/40 rounded-full text-heading font-mono text-[10px] font-bold tracking-[0.1em] uppercase hover:bg-white/5 transition-all hover:text-accent gap-3 group/btn"
            >
              Open Academy Overview <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right: Corporate Workflow */}
        <div className="border-gradient rounded-[28px] p-8 sm:p-10 shadow-lg">
          <div className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-accent/80 mb-4 text-center">
            Corporate workflow
          </div>
          <h3 className="text-[32px] sm:text-[40px] font-serif font-bold text-heading leading-[1.05] tracking-tight mb-8 text-center">
            From requirement to proposal.
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <div key={index} className="border-gradient-surface rounded-[20px] p-5 flex flex-col items-center text-center h-full hover:border-accent/30 transition-colors shadow-sm">
                <span className="font-mono text-[10px] font-bold tracking-[0.15em] text-accent mb-4 block">
                  {step.num}
                </span>
                <strong className="text-[15px] text-heading font-medium leading-[1.3] block mb-3 min-h-[40px] flex items-center justify-center capitalize">
                  {step.title}
                </strong>
                <p className="text-[12.5px] text-muted/80 leading-[1.6] m-0 mt-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
