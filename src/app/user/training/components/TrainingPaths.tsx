'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function TrainingPaths({ exclude }: { exclude?: string }) {
  const paths = [
    {
      num: '01',
      category: 'Courses',
      title: 'Self-Paced Courses',
      desc: 'Structured learning products for scalable access to systems, product, Kanban, and AI strategy content.',
      features: ['Recorded or structured modules', 'Worksheets, resources, and progress', 'Free or paid course access'],
      cta: 'Browse Courses',
      link: '/user/training/courses',
      image: '/assets/images/training/course-library.png'
    },
    {
      num: '02',
      category: 'Private Training',
      title: '1-on-1 Training',
      desc: 'Premium individual training for people who want a personalised path instead of a public group class.',
      features: ['Custom scope and pacing', 'Preferred time and topic focus', 'Inquiry or confirmation workflow'],
      cta: 'Request Availability',
      link: '/user/training/private-training',
      image: '/assets/images/training/private-training.png'
    },
    {
      num: '03',
      category: 'Public Classes',
      title: 'Live Cohorts',
      desc: 'Scheduled group classes for public cohorts, certifications, workshops, and masterclasses.',
      features: ['Class dates and seat availability', 'Registration and payment flow', 'Confirmation and meeting details'],
      cta: 'View Classes',
      link: '/user/training/public-classes',
      image: '/assets/images/training/public-classes.png'
    },
    {
      num: '04',
      category: 'Corporate',
      title: 'Corporate Training',
      desc: 'B2B training and consulting-style delivery for teams, departments, and organisations.',
      features: ['Company context and objectives', 'Team size, format, and timeline', 'Proposal and sales qualification flow'],
      cta: 'Request Proposal',
      link: '/user/training/corporate-training',
      image: '/assets/images/training/corporate-training.png'
    }
  ];

  return (
    <section id="paths" className="mb-12 mt-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-8">
        <div>
          <div className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-accent opacity-80 mb-6">
            Training pathways
          </div>
          <h2 className="text-[36px] sm:text-[46px] lg:text-[50px] font-serif font-bold text-heading leading-[1.1] tracking-[-0.02em]">
            Choose the format that <br />
            <em className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-cool italic font-serif">matches the work.</em>
          </h2>
        </div>
        <div>
          <p className="text-[15px] text-muted/90 leading-[1.8] font-sans max-w-[450px]">
            Each path has its own purpose, CTA, and delivery model. No squeezed text. No overlapping images. Just clear choices.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {paths.filter(p => !exclude || !p.link.includes(exclude)).map((path, index) => (
          <Link 
            href={path.link}
            key={index} 
            className="group flex flex-col bg-card border border-border rounded-[28px] overflow-hidden hover:border-accent/40 transition-all shadow-lg hover:-translate-y-1"
          >
            <div className="w-full aspect-[4/3] bg-surface relative overflow-hidden">
              <img src={path.image} alt={path.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] font-bold tracking-[0.15em] uppercase text-accent group-hover:text-accent-cool transition-colors">
                  {path.category}
                </span>
                <div className="w-7 h-7 rounded-full border border-border flex items-center justify-center font-mono text-[10px] text-heading/70 bg-surface">
                  {path.num}
                </div>
              </div>
              
              <h3 className="text-[20px] font-serif font-bold text-heading mb-3 group-hover:text-accent transition-colors">{path.title}</h3>
              <p className="text-[12.5px] text-muted/80 leading-[1.6] mb-6">{path.desc}</p>
              
              <ul className="space-y-3 mb-8 mt-auto">
                {path.features.map((feature, i) => (
                  <li key={i} className="text-[12px] text-heading/80 flex items-start gap-3">
                    <div className="w-[4px] h-[4px] rounded-full bg-accent mt-[7px] shrink-0" />
                    <span className="leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="font-mono text-[10px] font-bold tracking-[0.15em] uppercase text-accent flex items-center gap-2 group-hover:gap-3 transition-all mt-auto pt-4 border-t border-border">
                {path.cta} <ArrowRight size={12} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
