'use client';

import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const capabilities = [
  {
    num: "01",
    title: "Strategic Consulting",
    desc: "Turn ambiguity into a clear plan, decisions, and a delivery rhythm."
  },
  {
    num: "02",
    title: "Systems Design",
    desc: "Design operating models, workflows, and interfaces that scale."
  },
  {
    num: "03",
    title: "AI Strategy",
    desc: "AI adoption that covers governance, capability, and real pilots."
  },
  {
    num: "04",
    title: "Product Leadership",
    desc: "Product leadership and delivery practices that ship reliably."
  }
];

export default function CapabilitiesSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="capabilities" className="scroll-mt-[100px] py-24 sm:py-32 px-4 sm:px-6 relative z-10 bg-section">
      {/* Background subtle grid similar to original */}
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{ backgroundImage: 'radial-gradient(rgb(0 184 219 / 0.15) 1px, transparent 1px)', backgroundSize: '40px 40px', backgroundPosition: '20px 20px' }}></div>
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent pointer-events-none"></div>

      <div className="max-w-[1080px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-24 items-start relative z-10">

        {/* Left Column */}
        <div className="flex flex-col">
          {/* Kicker */}
          <div className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-accent opacity-80 mb-6">
            02 &mdash; Capabilities
          </div>

          <h2 className="text-[35px] sm:text-[45px] font-serif font-bold text-heading leading-[1.08] tracking-[-0.025em] mb-6">
            What I do <br />
            <em className="text-transparent bg-clip-text bg-gradient-to-br from-accent via-[#a2f4fd] to-accent-cool italic font-serif">in practice.</em>
          </h2>

          <p className="text-[14.5px] text-muted leading-[1.82] font-sans mb-8 max-w-[42ch]">
            Strategy and operating systems, built from delivery work. Start small, measure, iterate.
          </p>

          <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-transparent mb-10"></div>

          {/* Stats Box */}
          <div className="relative border border-border bg-card-glass-bg rounded-xl p-6 overflow-hidden mb-8">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            <div className="relative z-10 flex flex-col gap-1">
              <span className="text-accent font-mono text-[9px] font-bold tracking-[0.15em] uppercase opacity-90">Advising Since 2023</span>
              <div className="text-[32px] font-serif font-bold text-heading flex items-baseline gap-2 mt-1">
                40+ <span className="text-[9px] font-mono tracking-[0.2em] text-accent font-bold uppercase">Orgs</span>
              </div>
              <span className="text-muted font-mono text-[9px] font-medium tracking-wide mt-2">
                Across 12 countries &middot; APAC, North America, Europe
              </span>
            </div>
          </div>

          {/* Abstract Image Block */}
          <div className="w-full aspect-[16/9] rounded-xl overflow-hidden border border-border shadow-xl relative">
            <div className="absolute inset-0 bg-gradient-to-t from-section-alt-bg/80 to-transparent z-10 mix-blend-overlay"></div>
            <img
              src="/assets/images/capabilities-abstract.jpg"
              alt="Abstract Flow"
              className="w-full h-full object-cover filter brightness-90 contrast-125"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=1200&q=80";
              }}
            />
          </div>
        </div>

        {/* Right Column (List) */}
        <div className="flex flex-col border-t border-border md:border-none pt-8 md:pt-0">
          {capabilities.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`group relative grid grid-cols-[32px_1fr_20px] gap-4 items-start px-3 py-5 border-b border-border cursor-pointer rounded-lg transition-colors duration-200 ${hoveredIdx === idx ? 'bg-white/5' : ''}`}
            >
              <div className={`font-mono text-[10px] font-bold tracking-[0.08em] text-accent mt-1 transition-opacity duration-200 ${hoveredIdx === idx ? 'opacity-100' : 'opacity-40'}`}>
                {item.num}
              </div>

              <div className="flex flex-col">
                <h3 className={`text-[16px] font-serif font-medium tracking-tight mb-1.5 transition-colors duration-200 ${hoveredIdx === idx ? 'text-heading' : 'text-muted'}`}>
                  {item.title}
                </h3>
                <p className="text-[13px] text-muted leading-[1.72]">
                  {item.desc}
                </p>
              </div>

              <div className="relative shrink-0 flex justify-end mt-1">
                {/* Arrow */}
                <ArrowUpRight
                  size={15}
                  className={`relative z-10 text-accent transition-all duration-200 ${hoveredIdx === idx ? 'opacity-90' : 'opacity-25'}`}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
