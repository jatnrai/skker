'use client';

import { CheckCircle2 } from 'lucide-react';

export default function CoachingTypes() {
  const types = [
    {
      num: '01',
      title: 'Mentoring',
      desc: 'A thinking partner for direction, leverage, career architecture, and stronger operating habits.',
      bestFor: 'Professionals and leaders making role, scope, or career decisions.',
      outcomes: ['Sharper direction', 'Better leverage points', 'Clearer next moves']
    },
    {
      num: '02',
      title: 'Personal Coaching',
      desc: 'Focused coaching for clarity, decision quality, execution rhythm, and personal leadership context.',
      bestFor: 'Operators who need stronger personal systems and decision discipline.',
      outcomes: ['Better decision hygiene', 'Cleaner execution rhythm', 'Reduced overwhelm']
    },
    {
      num: '03',
      title: 'Business Coaching',
      desc: 'Operating model clarity, delivery rhythm, stakeholder alignment, and practical execution systems.',
      bestFor: 'Founders, executives, and teams navigating scale, friction, or transformation.',
      outcomes: ['Clear operating cadence', 'Aligned priorities', 'Better delivery flow']
    }
  ];

  return (
    <section id="coaching-types" className="mb-32">
      <div className="mb-16">
        <div className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-accent opacity-80 mb-6">
          Three Coaching Types
        </div>
        <h2 className="text-[36px] sm:text-[46px] font-serif font-bold text-heading leading-[1.1] tracking-[-0.02em] mb-6">
          Choose the right<br />
          <em className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-cool italic font-serif">conversation.</em>
        </h2>
        <p className="text-[15px] text-muted/90 leading-[1.8] font-sans max-w-[500px]">
          Each track is concise, contextual, and designed around the work you are actually trying to improve.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {types.map((type, index) => (
          <article 
            key={index} 
            className="bg-gradient-to-br from-white/[0.04] to-transparent border border-border rounded-[24px] p-8 hover:border-accent/30 hover:bg-white/[0.06] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,184,219,0.15)] transition-all group flex flex-col h-full relative overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-accent/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="font-mono text-[10px] font-bold tracking-[0.2em] text-accent/50 mb-6 group-hover:text-accent transition-colors relative z-10">
              {type.num}
            </div>
            <h3 className="text-[22px] font-serif font-bold text-heading mb-4 relative z-10">{type.title}</h3>
            <p className="text-[14px] text-muted/80 leading-[1.6] mb-8 relative z-10">{type.desc}</p>
            
            <div className="mt-auto relative z-10">
              <div className="mb-6">
                <div className="font-mono text-[9px] font-bold tracking-[0.15em] uppercase text-heading/50 mb-2">Best For</div>
                <p className="text-[13px] text-heading/90 leading-[1.6] font-medium">{type.bestFor}</p>
              </div>
              
              <div>
                <div className="font-mono text-[9px] font-bold tracking-[0.15em] uppercase text-heading/50 mb-3">Outcomes</div>
                <ul className="space-y-2">
                  {type.outcomes.map((outcome, i) => (
                    <li key={i} className="text-[13px] text-muted/80 flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                      <span>{outcome}</span>
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
