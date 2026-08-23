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

export default function ProfessionalJourneySection() {
  return (
    <section id="journey" className="py-24 sm:py-32 px-4 sm:px-6 relative z-10 bg-section">
      <div className="max-w-[1200px] mx-auto w-full relative z-10 flex flex-col gap-16">

        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.div {...fadeUp} className="md:w-1/2">
            <div className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-accent opacity-80 mb-6">
              04 &mdash; Professional Journey
            </div>
            <h2 className="text-[40px] sm:text-[55px] font-serif font-bold text-heading leading-[1.05] tracking-[-0.025em]">
              A career built <br />
              <em className="text-transparent bg-clip-text bg-gradient-to-br from-accent via-[#a2f4fd] to-accent-cool italic font-serif">deliberately.</em>
            </h2>
          </motion.div>
          <motion.div {...fadeUp} className="md:w-[45%] flex flex-col items-start md:pb-3">
            <p className="text-[14.5px] text-muted leading-[1.8] font-sans mb-6">
              Eighteen years across product, delivery, and leadership systems. Today: independent advisory work for teams navigating inflection points.
            </p>
            <Link
              href="/user/about-me"
              className="inline-flex items-center gap-2 text-[10px] font-mono font-bold tracking-[0.15em] uppercase text-accent hover:text-heading transition-colors group"
            >
              View the full timeline <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Grid Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Left Column: Portrait */}
          <motion.div {...fadeUp} className="lg:col-span-4 relative rounded-[32px] overflow-hidden border border-border bg-card/40 shadow-2xl flex flex-col h-full min-h-[500px]">
            {/* Floating Stat Badge */}
            <div className="absolute top-6 right-6 w-20 h-20 rounded-full border border-border bg-section/80 backdrop-blur-md flex flex-col items-center justify-center shadow-xl z-20">
              <span className="font-serif font-bold text-heading text-[22px] leading-none mb-1">18+</span>
              <span className="font-mono text-[8px] tracking-[0.15em] uppercase text-muted">Years</span>
            </div>

            <img
              src="/assets/images/founder-portrait.png"
              alt="SK Ker"
              className="w-full h-full object-cover object-top absolute inset-0 opacity-100 transition-transform hover:scale-105 duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-page via-page/30 to-transparent z-10 pointer-events-none"></div>

            <div className="relative z-20 mt-auto p-8 flex flex-col">
              <div className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase text-accent mb-3">Founder</div>
              <h3 className="font-serif text-[28px] text-heading font-bold mb-3">SK Ker</h3>
              <p className="text-[13px] text-muted/90 leading-[1.6]">
                Strategic consultant, systems architect, and executive advisor.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Cards */}
          <div className="lg:col-span-8 flex flex-col gap-6">

            {/* Top Row: Timeline */}
            <motion.div {...fadeUp} className="grid grid-cols-1 sm:grid-cols-3 bg-card/30 border border-border rounded-[32px] overflow-hidden">
              {/* Timeline Item 1 */}
              <div className="p-8 sm:border-r border-border relative group hover:bg-white/[0.02] transition-colors">
                <div className="w-4 h-4 rounded-full border-2 border-accent flex items-center justify-center mb-6">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                </div>
                <div className="font-mono text-[10px] font-bold tracking-widest text-accent mb-4">2007</div>
                <h4 className="font-serif text-[17px] text-heading font-bold mb-3">Delivery foundations</h4>
                <p className="text-[13px] text-muted leading-[1.6]">Technology, operations, and practical problem-solving across regional teams.</p>
              </div>

              {/* Timeline Item 2 */}
              <div className="p-8 sm:border-r border-border relative group hover:bg-white/[0.02] transition-colors">
                <div className="w-4 h-4 rounded-full border-2 border-accent mb-6"></div>
                <div className="font-mono text-[10px] font-bold tracking-widest text-accent mb-4">2017</div>
                <h4 className="font-serif text-[17px] text-heading font-bold mb-3">Systems and advisory</h4>
                <p className="text-[13px] text-muted leading-[1.6]">Operating models, flow systems, governance, and leadership alignment.</p>
              </div>

              {/* Timeline Item 3 */}
              <div className="p-8 relative group hover:bg-white/[0.02] transition-colors">
                <div className="w-4 h-4 rounded-full bg-accent mb-6 shadow-[0_0_10px_rgba(0,184,219,0.5)]"></div>
                <div className="font-mono text-[10px] font-bold tracking-widest text-accent mb-4">Now</div>
                <h4 className="font-serif text-[17px] text-heading font-bold mb-3">SKKER</h4>
                <p className="text-[13px] text-muted leading-[1.6]">Independent strategy, coaching, AI readiness, and product leadership.</p>
              </div>
            </motion.div>

            {/* Bottom Row: Capabilities/Features */}
            <motion.div {...fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { num: "01", title: "Product & operating models", desc: "Design the system before scaling execution." },
                { num: "02", title: "Flow & delivery", desc: "Reduce lead time with explicit policies, not more meetings." },
                { num: "03", title: "Leadership advisory", desc: "Sharper decisions when the path is uncertain." }
              ].map((item, idx) => (
                <div key={idx} className="bg-card/40 border border-border rounded-[24px] p-6 hover:bg-surface transition-colors">
                  <div className="font-mono text-[10px] font-bold tracking-[0.15em] text-accent mb-4">{item.num}</div>
                  <h4 className="font-serif text-[15px] text-heading font-bold mb-3 leading-snug">{item.title}</h4>
                  <p className="text-[13px] text-muted leading-[1.5]">{item.desc}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div {...fadeUp} className="flex flex-wrap items-center gap-4 mt-4">
              <Link
                href="/user/about-me"
                className="px-8 py-3.5 rounded-full font-mono text-[11px] font-bold tracking-[0.1em] uppercase text-page bg-gradient-to-r from-[#a2f4fd] via-accent to-[#2f88ff] shadow-[0_0_20px_rgba(0,184,219,0.3)] hover:shadow-[0_0_30px_rgba(0,184,219,0.5)] transition-all hover:scale-[1.02]"
              >
                About Me <span className="ml-1">&rarr;</span>
              </Link>
              <Link
                href="/academy/home/book_session"
                className="px-8 py-3.5 rounded-full font-mono text-[11px] font-bold tracking-[0.1em] uppercase text-heading border border-border bg-white/5 hover:bg-white/10 hover:border-border transition-all"
              >
                Book a Session
              </Link>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
