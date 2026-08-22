'use client';

import { ArrowRight } from 'lucide-react';

export default function CoachingPackages() {
  const packages = [
    {
      badge: 'Single',
      title: 'Strategy Session',
      desc: 'A focused session for one decision, one bottleneck, or one operating question.',
      features: ['Clear problem framing', 'Practical next steps', 'Useful when speed matters']
    },
    {
      badge: 'Sprint',
      title: 'Coaching Sprint',
      desc: 'A short sequence of sessions for a career move, leadership challenge, or operating model reset.',
      features: ['Session rhythm and follow-up', 'Decision and execution support', 'Useful for transitions']
    }
  ];

  return (
    <section className="mb-32">
      <div className="mb-16">
        <div className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-accent opacity-80 mb-6">
          Packages
        </div>
        <h2 className="text-[36px] sm:text-[46px] font-serif font-bold text-heading leading-[1.1] tracking-[-0.02em] mb-6">
          Simple formats.<br />
          <em className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-cool italic font-serif">Real work.</em>
        </h2>
        <p className="text-[15px] text-muted/90 leading-[1.8] font-sans max-w-[500px]">
          Start with one session or build a short coaching arc around a specific decision, transition, or operating challenge.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {packages.map((pkg, index) => (
          <article 
            key={index} 
            className="bg-white/[0.02] border border-border rounded-[32px] p-8 sm:p-12 hover:border-accent/40 hover:bg-white/[0.04] transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-accent/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="flex flex-col sm:flex-row gap-8 items-start relative z-10">
              <div className="shrink-0">
                <span className="inline-block px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent font-mono text-[10px] font-bold tracking-[0.15em] uppercase">
                  {pkg.badge}
                </span>
              </div>
              
              <div>
                <h3 className="text-[24px] font-serif font-bold text-heading mb-3">{pkg.title}</h3>
                <p className="text-[14px] text-muted/80 leading-[1.7] mb-8 max-w-[360px]">{pkg.desc}</p>
                
                <ul className="space-y-4">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="text-[14px] text-heading/90 flex items-center gap-3">
                      <ArrowRight size={14} className="text-accent/80" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
