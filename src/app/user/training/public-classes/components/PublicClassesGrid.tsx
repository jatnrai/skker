'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function PublicClassesGrid() {
  const classes = [
    {
      meta: 'Public Class',
      title: 'Kanban System Design',
      desc: 'A live class for visualising work, managing flow, and designing explicit operating policies.',
      cta: 'Register for Class',
      link: '/academy/home/courses',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=84'
    },
    {
      meta: 'Masterclass',
      title: 'AI and Product Strategy',
      desc: 'A focused cohort session on practical AI adoption, product decisions, and governance basics.',
      cta: 'Register for Class',
      link: '/academy/home/courses',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=84'
    },
    {
      meta: 'Waitlist',
      title: 'Product Leadership Clinic',
      desc: 'A small-group format for managers and leads improving delivery rhythm and decision quality.',
      cta: 'Request Availability',
      link: '/#contact',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=84'
    }
  ];

  return (
    <section className="mb-32 mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {classes.map((cls, index) => (
          <Link 
            href={cls.link} 
            key={index}
            className="group bg-section/50 border border-border rounded-[28px] overflow-hidden hover:border-accent/40 transition-all flex flex-col hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          >
            {/* Image container */}
            <div className="w-full h-[220px] relative overflow-hidden bg-white/5 border-b border-border">
              <div className="absolute inset-0 bg-gradient-to-t from-section/40 to-transparent z-10" />
              <img 
                src={cls.image} 
                alt={cls.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Content */}
            <div className="p-8 flex flex-col flex-1 relative bg-gradient-to-br from-white/[0.02] to-transparent group-hover:bg-white/[0.04] transition-colors">
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-accent/5 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-accent mb-4">
                {cls.meta}
              </div>
              
              <h3 className="text-[22px] font-serif font-bold text-heading leading-[1.2] mb-3">
                {cls.title}
              </h3>
              
              <p className="text-[14px] text-muted/80 leading-[1.6] mb-8 flex-1">
                {cls.desc}
              </p>
              
              <div className="font-mono text-[11px] font-bold tracking-[0.12em] uppercase text-accent flex items-center gap-2 group-hover:gap-3 transition-all">
                {cls.cta} <ArrowRight size={14} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
