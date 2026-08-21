'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" as const }
};

export default function CoachingSection() {
  return (
    <section id="coaching" className="py-24 sm:py-32 px-4 sm:px-6 relative z-10 bg-page-bg">
      <div className="max-w-[1200px] mx-auto w-full relative z-10 flex flex-col items-center gap-16">
        
        {/* Header Area */}
        <motion.div {...fadeUp} className="text-center max-w-[800px] mx-auto">
          <div className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-accent opacity-80 mb-6">
            05 &mdash; Coaching
          </div>
          <h2 className="text-[45px] sm:text-[65px] font-serif font-bold text-[#eef0f8] leading-[1.05] tracking-[-0.025em] mb-6">
            Coaching for <br />
            <em className="text-transparent bg-clip-text bg-gradient-to-br from-accent via-[#a2f4fd] to-accent-cool italic font-serif">serious operators.</em>
          </h2>
          <p className="text-[15px] text-muted leading-[1.8] font-sans max-w-[600px] mx-auto">
            Practical coaching for leaders, professionals, and teams who want clearer systems, better decisions, and stronger execution.
          </p>
        </motion.div>

        {/* Main Image */}
        <motion.div {...fadeUp} className="w-full max-w-[900px] aspect-[16/9] sm:aspect-[21/9] relative rounded-[32px] overflow-hidden border border-white/5 shadow-2xl">
           <img 
             src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80" 
             alt="Coaching session" 
             className="w-full h-full object-cover object-center opacity-90 transition-transform hover:scale-105 duration-700" 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-page-bg via-transparent to-transparent z-10 pointer-events-none"></div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1000px]">
          
          {/* Card 1 */}
          <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }} className="bg-card-bg/40 border border-white/5 rounded-[24px] p-8 flex flex-col h-full hover:bg-card-hover-bg transition-colors">
            <div className="font-mono text-[10px] font-bold tracking-[0.15em] uppercase text-accent mb-6">01 Mentoring</div>
            <h3 className="font-serif text-[22px] text-white font-bold mb-4">Mentoring</h3>
            <p className="text-[14px] text-muted/90 leading-[1.6]">
              A thinking partner for direction, leverage, and career architecture.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="bg-card-bg/60 border border-white/10 rounded-[24px] p-8 flex flex-col h-full hover:bg-card-hover-bg transition-colors relative shadow-[0_0_30px_rgba(0,184,219,0.05)]">
            <div className="flex items-center justify-between mb-6">
              <div className="font-mono text-[10px] font-bold tracking-[0.15em] uppercase text-accent">02 Personal Coaching</div>
            </div>
            <div className="flex items-center gap-3 mb-4">
               <h3 className="font-serif text-[22px] text-white font-bold">Personal Coaching</h3>
               <span className="px-2 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-[8px] font-bold tracking-[0.15em] uppercase whitespace-nowrap">Most Popular</span>
            </div>
            <p className="text-[14px] text-muted/90 leading-[1.6]">
              Clarity, decision quality, and execution habits built for your context.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="bg-card-bg/40 border border-white/5 rounded-[24px] p-8 flex flex-col h-full hover:bg-card-hover-bg transition-colors">
            <div className="font-mono text-[10px] font-bold tracking-[0.15em] uppercase text-accent mb-6">03 Business Coaching</div>
            <h3 className="font-serif text-[22px] text-white font-bold mb-4">Business Coaching</h3>
            <p className="text-[14px] text-muted/90 leading-[1.6]">
              Operating model clarity, delivery rhythm, and leadership alignment.
            </p>
          </motion.div>

        </div>

        {/* CTA Buttons */}
        <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Link 
            href="/user/coaching"
            className="px-8 py-3.5 rounded-full font-mono text-[11px] font-bold tracking-[0.1em] uppercase text-accent border border-white/10 bg-[#06091a]/80 hover:bg-white/5 hover:border-accent/50 hover:text-white transition-all group"
          >
            Explore Coaching <span className="ml-1 group-hover:translate-x-1 inline-block transition-transform">&rarr;</span>
          </Link>
          <Link 
            href="/academy/home/book_session"
            className="px-8 py-3.5 rounded-full font-mono text-[11px] font-bold tracking-[0.1em] uppercase text-accent border border-white/10 bg-[#06091a]/80 hover:bg-white/5 hover:border-accent/50 hover:text-white transition-all group"
          >
            Book a Session <span className="ml-1 group-hover:translate-x-1 inline-block transition-transform">&rarr;</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
