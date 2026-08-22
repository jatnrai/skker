'use client';

import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { caseStudies } from '@/data/caseStudies';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

export default function ProofInPracticeSection() {
  return (
    <section id="work" className="py-24 sm:py-32 px-4 sm:px-6 relative z-10 bg-section">
      <div className="max-w-[1200px] mx-auto w-full relative z-10 flex flex-col gap-16">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-accent opacity-80 mb-6">
              03 &mdash; Selected Work
            </div>
            <h2 className="text-[40px] sm:text-[50px] font-serif font-bold text-heading leading-[1.05] tracking-[-0.025em]">
              Proof in <br />
              <em className="text-transparent bg-clip-text bg-gradient-to-br from-accent via-[#a2f4fd] to-accent-cool italic font-serif">practice.</em>
            </h2>
          </div>
          <Link 
            href="/user/case-studies" 
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-[9px] font-mono font-bold tracking-[0.15em] uppercase text-muted hover:text-text hover:bg-white/5 hover:border-border transition-all shrink-0"
          >
            All Case Studies <ArrowRight size={14} />
          </Link>
        </div>

        {/* Case Studies List (Animated) */}
        <motion.div 
          className="flex flex-col gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {caseStudies.map((study, idx) => (
            <motion.div key={study.id} variants={itemVariants}>
              <Link 
                href={`/user/case-studies/${study.id}`}
                className="group relative flex flex-col md:flex-row items-center justify-between gap-6 bg-card/50 hover:bg-surface border border-border hover:border-border rounded-[32px] p-4 transition-all duration-300"
              >
                
                {/* Left: Image & Title */}
                <div className="flex items-center gap-6 w-full md:w-auto">
                  <div className="w-[140px] h-[80px] shrink-0 rounded-2xl overflow-hidden border border-border">
                    <img 
                      src={study.thumbnailUrl} 
                      alt={study.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] font-bold tracking-[0.15em] uppercase text-muted mb-2">
                      {study.category} &middot; {study.location}
                    </span>
                    <h3 className="font-serif text-[18px] text-heading font-medium group-hover:text-heading transition-colors max-w-[45ch]">
                      {study.title}
                    </h3>
                  </div>
                </div>

                {/* Right: Metrics & Arrow */}
                <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end pr-4">
                  
                  {/* Metrics Block */}
                  <div className="flex items-center gap-3">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="flex flex-col items-center justify-center min-w-[90px] h-[60px] rounded-2xl border border-border bg-white/[0.02]">
                        <span className="font-serif text-[18px] font-bold text-accent">{metric.value}</span>
                        <span className="font-mono text-[8px] font-bold tracking-[0.15em] uppercase text-muted mt-1">{metric.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Arrow Button */}
                  <div className="w-10 h-10 rounded-full border border-border bg-white/5 flex items-center justify-center text-muted group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-accent-cool group-hover:text-page group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(0,184,219,0.4)] transition-all duration-300">
                    <ArrowRight size={16} />
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
