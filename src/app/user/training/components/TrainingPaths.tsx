'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function TrainingPaths() {
  const paths = [
    {
      num: '01',
      category: 'Courses',
      title: 'Self-Paced Courses',
      desc: 'Structured learning products for scalable access to systems, product, Kanban, and AI strategy content.',
      features: ['Recorded or structured modules', 'Worksheets, resources, and progress', 'Free or paid course access'],
      cta: 'Browse Courses',
      link: '/user/training/courses'
    },
    {
      num: '02',
      category: 'Private Training',
      title: '1-on-1 Training',
      desc: 'Premium individual training for people who want a personalised path instead of a public group class.',
      features: ['Custom scope and pacing', 'Preferred time and topic focus', 'Inquiry or confirmation workflow'],
      cta: 'Request Availability',
      link: '#private-training'
    },
    {
      num: '03',
      category: 'Public Classes',
      title: 'Live Cohorts',
      desc: 'Scheduled group classes for public cohorts, certifications, workshops, and masterclasses.',
      features: ['Class dates and seat availability', 'Registration and payment flow', 'Confirmation and meeting details'],
      cta: 'View Classes',
      link: '/user/training/public-classes'
    },
    {
      num: '04',
      category: 'Corporate',
      title: 'Corporate Training',
      desc: 'B2B training and consulting-style delivery for teams, departments, and organisations.',
      features: ['Company context and objectives', 'Team size, format, and timeline', 'Proposal and sales qualification flow'],
      cta: 'Request Proposal',
      link: '/user/training/corporate-training'
    }
  ];

  return (
    <section id="paths" className="mb-32 mt-20">
      <div className="mb-16">
        <div className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-accent opacity-80 mb-6">
          Training pathways
        </div>
        <h2 className="text-[36px] sm:text-[46px] font-serif font-bold text-heading leading-[1.1] tracking-[-0.02em] mb-6">
          Choose the format that <br />
          <em className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-cool italic font-serif">matches the work.</em>
        </h2>
        <p className="text-[15px] text-muted/90 leading-[1.8] font-sans max-w-[600px]">
          Each path has its own purpose, CTA, and delivery model. Just clear choices based on your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {paths.map((path, index) => (
          <Link 
            href={path.link}
            key={index} 
            className="group block bg-gradient-to-br from-white/[0.03] to-transparent border border-border rounded-[32px] p-8 sm:p-10 hover:border-accent/40 hover:bg-white/[0.05] transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-accent/5 rounded-full blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-[11px] font-bold tracking-[0.15em] uppercase text-accent/80 group-hover:text-accent transition-colors">
                  {path.category}
                </span>
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center font-mono text-[12px] text-heading/50 group-hover:text-heading transition-colors bg-white/5">
                  {path.num}
                </div>
              </div>
              
              <h3 className="text-[28px] font-serif font-bold text-heading mb-4 group-hover:text-accent transition-colors">{path.title}</h3>
              <p className="text-[14px] text-muted/80 leading-[1.7] mb-8">{path.desc}</p>
              
              <ul className="space-y-3 mb-10 mt-auto">
                {path.features.map((feature, i) => (
                  <li key={i} className="text-[13.5px] text-heading/80 flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-accent/60 shrink-0 mt-0.5 group-hover:text-accent transition-colors" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="font-mono text-[11px] font-bold tracking-[0.15em] uppercase text-accent flex items-center gap-2 group-hover:gap-3 transition-all">
                {path.cta} <ArrowRight size={14} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
