'use client';

import Link from 'next/link';

export default function PublicClassesGrid() {
  const classes = [
    {
      meta: 'Public Class',
      title: 'Kanban System Design',
      desc: 'A live class for visualising work, managing flow, and designing explicit operating policies.',
      cta: 'Register for Class',
      link: '/academy/home/courses',
      image: '/assets/img/training/public-classes.png'
    },
    {
      meta: 'Masterclass',
      title: 'AI and Product Strategy',
      desc: 'A focused cohort session on practical AI adoption, product decisions, and governance basics.',
      cta: 'Register for Class',
      link: '/academy/home/courses',
      image: '/assets/img/training/course-library.png'
    },
    {
      meta: 'Waitlist',
      title: 'Product Leadership Clinic',
      desc: 'A small-group format for managers and leads improving delivery rhythm and decision quality.',
      cta: 'Request Availability',
      link: '/user#enquiry',
      image: '/assets/img/training/private-training.png'
    }
  ];

  return (
    <section className="mb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((cls, index) => (
          <Link 
            href={cls.link} 
            key={index}
            className="group bg-card dark:bg-[#131b26] border border-border dark:border-[#232e3e] rounded-[24px] overflow-hidden hover:border-border-focus dark:hover:border-[#334255] transition-all flex flex-col shadow-md"
          >
            {/* Image container */}
            <div className="w-full h-[220px] relative overflow-hidden bg-surface dark:bg-[#182330]">
              <img 
                src={cls.image} 
                alt={cls.title}
                className="w-full h-full object-cover opacity-90 group-hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
            
            {/* Content */}
            <div className="p-6 flex flex-col flex-1 relative">
              
              <div className="font-sans text-[10px] font-bold tracking-[0.15em] uppercase text-accent mb-3">
                {cls.meta}
              </div>
              
              <h3 className="text-[20px] font-sans font-bold text-heading leading-[1.2] mb-3">
                {cls.title}
              </h3>
              
              <p className="text-[14px] text-muted/70 leading-[1.6] mb-8 flex-1">
                {cls.desc}
              </p>
              
              <div className="font-sans text-[11px] font-bold tracking-[0.1em] uppercase text-accent">
                {cls.cta} -&gt;
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
