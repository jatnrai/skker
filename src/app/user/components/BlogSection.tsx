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

export default function BlogSection() {
  const articles = [
    {
      title: "From Manager to Architect: The Career Move No One Tells You About",
      excerpt: "At some point in a product career, continuing to manage execution is not enough. The real shift is architectural: moving from task ownership to system ownership, from local optimization to...",
      tag: "Product Leadership",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      href: "/user/blog/manager-to-architect"
    },
    {
      title: "The Quiet Discipline of Flow: What Kanban Actually Teaches",
      excerpt: "Most teams implement boards. Far fewer implement systems. Kanban is not valuable because it visualizes work. It is valuable because it reveals how work moves, where it stalls, how demand b...",
      tag: "Systems Design",
      img: "https://images.unsplash.com/photo-1531498860502-23c4cbcf3046?auto=format&fit=crop&w=800&q=80",
      href: "/user/blog/discipline-of-flow"
    },
    {
      title: "Why Most Organizations Are Misunderstanding AI Adoption",
      excerpt: "The conversation around AI adoption is still dominated by tools. That framing misses the real work. In practice, organizations do not fail because they chose the wrong tool first. They fai...",
      tag: "AI Strategy",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
      href: "/user/blog/misunderstanding-ai"
    }
  ];

  return (
    <section id="insights" className="py-24 sm:py-32 px-4 sm:px-6 relative z-10 bg-section-alt-bg border-y border-white/5">
      <div className="max-w-[1400px] mx-auto w-full relative z-10 flex flex-col gap-16">
        
        {/* Header Area */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          <motion.div {...fadeUp}>
            <div className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-accent opacity-80 mb-6">
              07 &mdash; Blog / Articles
            </div>
            <h2 className="text-[40px] sm:text-[55px] font-serif font-bold text-[#eef0f8] leading-[1.05] tracking-[-0.025em]">
              Ideas worth <br />
              <em className="text-transparent bg-clip-text bg-gradient-to-br from-accent via-[#a2f4fd] to-accent-cool italic font-serif">reading.</em>
            </h2>
          </motion.div>
          <motion.div {...fadeUp} className="pb-3">
            <Link 
              href="/user/blog" 
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 rounded-full text-[9px] font-mono font-bold tracking-[0.15em] uppercase text-muted hover:text-text hover:bg-white/5 hover:border-white/20 transition-all group"
            >
              View All Articles <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Grid Layout (2fr 1fr 1fr) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Featured Article (Left - Spans 2 columns) */}
          <motion.div 
            {...fadeUp} 
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }} 
            className="lg:col-span-2"
          >
            <Link href={articles[0].href} className="flex flex-col h-full group bg-[#06091a]/80 border border-white/5 rounded-[24px] p-4 hover:bg-white/[0.02] transition-colors shadow-2xl">
              <div className="w-full aspect-[16/10] sm:aspect-[4/3] rounded-[20px] overflow-hidden relative mb-6">
                <img src={articles[0].img} alt={articles[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06091a]/80 via-transparent to-transparent"></div>
              </div>
              <div className="px-2 pb-2 flex flex-col flex-grow">
                <h3 className="font-serif text-[18px] sm:text-[20px] text-white font-bold mb-4 leading-[1.4] group-hover:text-accent transition-colors">
                  {articles[0].title}
                </h3>
                <p className="text-[13px] text-muted/90 leading-[1.6] mb-8 flex-grow">
                  {articles[0].excerpt}
                </p>
                <div className="font-mono text-[9px] font-bold tracking-[0.15em] uppercase text-accent mb-6">
                  {articles[0].tag}
                </div>
                <div className="font-mono text-[9px] font-bold tracking-[0.15em] uppercase text-muted group-hover:text-white transition-colors flex items-center gap-2 mt-auto">
                  READ THE ARTICLE <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Article 2 */}
          <motion.div 
            {...fadeUp} 
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-1"
          >
            <Link href={articles[1].href} className="flex flex-col h-full group bg-[#06091a]/80 border border-white/5 rounded-[24px] p-4 hover:bg-white/[0.02] transition-colors shadow-2xl">
              <div className="w-full aspect-[4/3] sm:aspect-[4/3] rounded-[20px] overflow-hidden relative mb-6">
                <img src={articles[1].img} alt={articles[1].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06091a]/80 via-transparent to-transparent"></div>
              </div>
              <div className="px-2 pb-2 flex flex-col flex-grow">
                <h3 className="font-serif text-[15px] sm:text-[16px] text-white font-bold mb-4 leading-[1.4] group-hover:text-accent transition-colors">
                  {articles[1].title}
                </h3>
                <p className="text-[12px] text-muted/80 leading-[1.6] mb-8 flex-grow">
                  {articles[1].excerpt}
                </p>
                <div className="font-mono text-[9px] font-bold tracking-[0.15em] uppercase text-accent mb-6">
                  {articles[1].tag}
                </div>
                <div className="font-mono text-[9px] font-bold tracking-[0.15em] uppercase text-muted group-hover:text-white transition-colors flex items-center gap-2 mt-auto">
                  READ <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Article 3 */}
          <motion.div 
            {...fadeUp} 
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-1"
          >
            <Link href={articles[2].href} className="flex flex-col h-full group bg-[#06091a]/80 border border-white/5 rounded-[24px] p-4 hover:bg-white/[0.02] transition-colors shadow-2xl">
              <div className="w-full aspect-[4/3] sm:aspect-[4/3] rounded-[20px] overflow-hidden relative mb-6">
                <img src={articles[2].img} alt={articles[2].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06091a]/80 via-transparent to-transparent"></div>
              </div>
              <div className="px-2 pb-2 flex flex-col flex-grow">
                <h3 className="font-serif text-[15px] sm:text-[16px] text-white font-bold mb-4 leading-[1.4] group-hover:text-accent transition-colors">
                  {articles[2].title}
                </h3>
                <p className="text-[12px] text-muted/80 leading-[1.6] mb-8 flex-grow">
                  {articles[2].excerpt}
                </p>
                <div className="font-mono text-[9px] font-bold tracking-[0.15em] uppercase text-accent mb-6">
                  {articles[2].tag}
                </div>
                <div className="font-mono text-[9px] font-bold tracking-[0.15em] uppercase text-muted group-hover:text-white transition-colors flex items-center gap-2 mt-auto">
                  READ <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
