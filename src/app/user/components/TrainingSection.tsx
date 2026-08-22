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

export default function TrainingSection() {
  const trainingCards = [
    {
      format: "Self-Paced Courses",
      title: "Course Library",
      href: "/user/training/courses",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
    },
    {
      format: "Private Training",
      title: "1-on-1 Strategy & Coaching",
      href: "/user/training",
      img: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=800&q=80"
    },
    {
      format: "Workshops",
      title: "Public Classes",
      href: "/user/training/public-classes",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
    },
    {
      format: "Team Programs",
      title: "Corporate Training",
      href: "/user/training/corporate-training",
      img: "https://images.unsplash.com/photo-1531498860502-23c4cbcf3046?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="training" className="py-24 sm:py-32 px-4 sm:px-6 relative z-10 bg-page">
      <div className="max-w-[1200px] mx-auto w-full relative z-10 flex flex-col gap-16">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Left: Titles */}
          <motion.div {...fadeUp} className="lg:col-span-4">
            <div className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-accent opacity-80 mb-6">
              06 &mdash; Training & Courses
            </div>
            <h2 className="text-[40px] sm:text-[50px] font-serif font-bold text-heading leading-[1.05] tracking-[-0.025em]">
              Training built for <br />
              <em className="text-transparent bg-clip-text bg-gradient-to-br from-accent via-[#a2f4fd] to-accent-cool italic font-serif">real work.</em>
            </h2>
          </motion.div>

          {/* Center: Main Image */}
          <motion.div {...fadeUp} className="lg:col-span-5 h-[200px] sm:h-[280px] rounded-[32px] overflow-hidden border border-border relative">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80" 
              alt="Training Workshop" 
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-page to-transparent mix-blend-multiply opacity-50"></div>
          </motion.div>

          {/* Right: View Link */}
          <motion.div {...fadeUp} className="lg:col-span-3 flex lg:justify-end pb-4">
            <Link 
              href="/user/training" 
              className="inline-flex items-center gap-2 text-[10px] font-mono font-bold tracking-[0.15em] uppercase text-accent hover:text-heading transition-colors group"
            >
              View Training <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>

        {/* 2x2 Grid Area */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          {trainingCards.map((card, idx) => (
            <motion.div 
              key={idx} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            >
              <Link 
                href={card.href}
                className="group flex items-center justify-between gap-6 p-6 sm:p-8 bg-card/30 border border-border hover:border-border hover:bg-surface rounded-[32px] transition-all duration-300 relative overflow-hidden"
              >
                {/* Text Content */}
                <div className="flex flex-col z-10 flex-grow">
                  <div className="font-mono text-[9px] font-bold tracking-[0.15em] uppercase text-accent/70 mb-3 group-hover:text-accent transition-colors">
                    {card.format}
                  </div>
                  <h3 className="font-serif text-[18px] sm:text-[20px] text-heading font-bold group-hover:text-accent-cool transition-colors">
                    {card.title}
                  </h3>
                </div>

                {/* Right Area: Image + Arrow */}
                <div className="flex items-center gap-4 z-10 shrink-0">
                  <div className="w-[100px] h-[60px] sm:w-[130px] sm:h-[75px] rounded-2xl overflow-hidden border border-border relative">
                    <img 
                      src={card.img} 
                      alt={card.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-page-bg/80 via-transparent to-transparent"></div>
                  </div>
                  <ArrowRight size={16} className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
