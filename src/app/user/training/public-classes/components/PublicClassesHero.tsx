'use client';

import Link from 'next/link';

export default function PublicClassesHero() {
  const steps = [
    'Class dates and seats are published.',
    'Participants register and receive confirmation.',
    'Calendar and meeting details are sent after confirmation.',
    'Materials and follow-up resources are shared through the Academy.'
  ];

  return (
    <div className="relative z-10 mb-20 mt-6">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] xl:grid-cols-[1.3fr_0.9fr] gap-12 lg:gap-16 items-start">
        {/* Left Section: Hero Text & Buttons */}
        <div className="flex flex-col">
          <div className="font-sans text-[11px] font-bold tracking-[0.17em] uppercase text-accent mb-4">
            Public Classes
          </div>
          
          <h1 className="text-[48px] sm:text-[60px] lg:text-[75px] font-sans font-bold text-heading leading-[1.02] tracking-[-0.03em] mb-6">
            Live cohort classes<br />for practical<br />operators.
          </h1>
          
          <p className="text-[16px] text-muted/80 leading-[1.7] font-sans max-w-[500px] mb-10">
            Scheduled group classes for people who want live instruction, peer discussion, clear dates, seat-based registration, and confirmation details.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link href="/academy/home/courses" className="inline-flex items-center justify-center px-8 py-[18px] bg-[#00b8db] text-[#04121d] rounded-full font-sans text-[12px] font-bold tracking-[0.15em] uppercase hover:-translate-y-0.5 transition-transform shadow-[0_12px_30px_rgba(0,184,219,0.2)]">
              Browse Open Courses
            </Link>
            <a href="/user#enquiry" className="inline-flex items-center justify-center px-8 py-[18px] rounded-full text-heading border border-border dark:border-[#232e3e] bg-card/50 dark:bg-white/[0.02] hover:border-border-focus dark:hover:border-[#334255] transition-all hover:-translate-y-0.5 font-sans text-[12px] font-bold tracking-[0.15em] uppercase">
              Request Availability
            </a>
          </div>
        </div>

        {/* Right Section: Workflow Panel */}
        <div className="w-full lg:mt-8">
          <div className="bg-card dark:bg-[#131b26] border border-border dark:border-[#232e3e] rounded-[24px] p-8 sm:p-10 w-full shadow-lg">
            <h2 className="text-[18px] font-sans font-bold text-heading mb-6">
              Public class workflow
            </h2>
            
            <ul className="flex flex-col gap-3">
              {steps.map((step, index) => (
                <li key={index} className="text-[14px] text-muted/90 leading-[1.6] flex gap-2">
                  <span className="font-sans">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
