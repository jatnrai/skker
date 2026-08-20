'use client';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Link from 'next/link';
import { ArrowRight, Hexagon, Square, Circle, Triangle, Play, ArrowUpRight, CheckCircle2, ChevronRight, LayoutDashboard, Briefcase, GraduationCap, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" as const }
};

export default function Home() {
  return (
    <main className="min-h-screen text-text selection:bg-accent/30 flex flex-col relative overflow-hidden font-sans bg-[#060e15]">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMikiLz48L3N2Zz4=')]" style={{ opacity: 0.1 }} />
      </div>

      <Navbar />
      
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Platform / Connected LMS */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full relative z-10" id="platform">
        <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent font-mono text-[11px] font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(0,184,219,0.15)]">
              Connected LMS
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold leading-tight mb-6 text-white tracking-tight">
              Move from the brand into the <em className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-cool not-italic">learning platform.</em>
            </h2>
            <p className="text-[17px] text-muted/90 leading-relaxed mb-8 font-medium">
              The homepage now feeds directly into the SKKER LMS, so discovery, trust, enrollment, and access all live inside one connected experience.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { kicker: 'Access', title: 'Login to the LMS', copy: 'Return directly to your account, protected lessons, course access, and platform sessions.', link: 'Open login', href: '/user/login', icon: LayoutDashboard },
              { kicker: 'Enrollment', title: 'Create a student account', copy: 'Move from visitor to learner with a clean sign-up flow inside the academy experience.', link: 'Open sign up', href: '/user/register', icon: UserCircle },
              { kicker: 'Catalog', title: 'Browse the course library', copy: 'Explore the live academy catalog, current programs, and the learning products available now.', link: 'Open courses', href: '/user/courses', icon: BookOpen },
              { kicker: 'Platform', title: 'Open the academy home', copy: 'Step into the LMS itself and move through the learning environment as part of the SKKER journey.', link: 'Open academy', href: '/user', icon: GraduationCap },
            ].map((card, i) => (
              <Link key={i} href={card.href} className="group bg-[#0b1622] p-8 rounded-3xl border border-white/5 hover:border-accent/40 transition-all duration-300 flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,184,219,0.1)]">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-[#04121d] transition-colors">
                   <card.icon size={20} />
                </div>
                <div className="text-accent text-[10px] font-bold tracking-widest uppercase mb-2">{card.kicker}</div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-[14px] text-muted/80 mb-8 flex-grow leading-relaxed font-medium">{card.copy}</p>
                <div className="text-[12px] font-bold uppercase tracking-widest text-white group-hover:text-accent transition-colors flex items-center gap-2 mt-auto">
                  {card.link} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 3. Story / Quote */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 w-full relative z-10 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <motion.div {...fadeUp} className="max-w-[1000px] mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-8 bg-accent/20 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-accent rounded-full animate-ping" />
            <div className="w-8 h-8 bg-accent rounded-full absolute" />
          </div>
          <div className="text-accent text-[11px] font-bold tracking-widest uppercase mb-8">Pause. Read the signal.</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-sans font-bold text-white leading-tight">
            "Scale is never accidental. It is designed, measured, and rewritten before <em className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-cool not-italic">complexity turns against you.</em>"
          </h2>
        </motion.div>
      </section>

      {/* 4. Authority & Positioning (sk-ops) */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full relative z-10" id="about">
        <motion.div {...fadeUp}>
          <div className="text-accent text-[11px] font-bold tracking-widest uppercase mb-6 flex items-center gap-4">
             <span className="w-8 h-px bg-accent/50" /> 01 — Authority & Positioning
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-end">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold leading-tight text-white tracking-tight">
                The thinking behind <br />systems that endure.
              </h2>
            </div>
            <div>
              <p className="text-[17px] text-muted/90 leading-relaxed mb-8 font-medium">
                SK Ker is a strategic consultant and systems architect with deep expertise in product management, organizational design, AI strategy, and Kanban-based flow systems — operating at the intersection of executive leadership and operational precision.
              </p>
              <div className="flex flex-wrap gap-2">
                {['AI Strategy', 'Product Management', 'Kanban Systems', 'Org Design', 'Flow Optimization', 'Executive Advisory'].map((chip, i) => (
                  <span key={i} className="px-4 py-2 rounded-full border border-white/10 bg-[#0b1622] text-[12px] font-bold text-white shadow-sm hover:border-accent/40 transition-colors cursor-default">{chip}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Hexagon, title: 'Systems Thinking', desc: 'Diagnosing complexity and designing structures that simplify execution, accelerate delivery, and align teams.' },
              { icon: Triangle, title: 'AI Evangelism', desc: 'Translating AI capability into organizational strategy - from readiness assessments to embedded adoption roadmaps.' },
              { icon: Circle, title: 'Product Leadership', desc: 'Building product cultures and management frameworks that produce coherent, customer-led outcomes at scale.' },
              { icon: Square, title: 'Org Architecture', desc: 'Designing team structures, governance models, and operating rhythms that match organizational ambition.' },
            ].map((card, i) => (
              <div key={i} className="bg-[#0b1622] p-8 rounded-3xl border border-white/5 relative group hover:bg-[#0c1a29] transition-colors duration-500">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-cool/10 border border-accent/20 flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(0,184,219,0.15)]">
                  <card.icon size={24} />
                </div>
                <h3 className="text-[22px] font-bold text-white mb-4">{card.title}</h3>
                <p className="text-[15px] text-muted/80 leading-relaxed font-medium">{card.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. Proof in Practice (Case Studies) */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 w-full relative z-10 bg-[#040a0f] border-y border-white/5" id="work">
        <motion.div {...fadeUp} className="max-w-[1400px] mx-auto">
          <div className="text-accent text-[11px] font-bold tracking-widest uppercase mb-6 flex items-center gap-4">
             <span className="w-8 h-px bg-accent/50" /> 02 — Portfolio
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold leading-tight text-white tracking-tight">
              Proof in <br /><em className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-cool not-italic">practice.</em>
            </h2>
            <Link href="/user/case-studies" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-accent hover:bg-accent/10 transition-all font-bold text-[13px] text-white">
              View all case studies <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {[
               { client: 'Fintech Enterprise', title: 'Restructuring agile delivery for 400+ engineers using Kanban systems.', tags: ['Transformation', 'Kanban'], img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80' },
               { client: 'SaaS Scale-up', title: 'Embedding AI into core product workflows resulting in 40% efficiency gains.', tags: ['AI Strategy', 'Product'], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80' }
             ].map((work, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 border border-white/10">
                     <img src={work.img} alt={work.title} className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#040a0f] via-transparent to-transparent opacity-80" />
                     <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                       {work.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[11px] font-bold uppercase tracking-wider text-white">
                            {tag}
                          </span>
                       ))}
                     </div>
                  </div>
                  <div className="text-accent text-[11px] font-bold uppercase tracking-widest mb-3">{work.client}</div>
                  <h3 className="text-2xl font-bold text-white leading-snug group-hover:text-accent transition-colors">{work.title}</h3>
                </div>
             ))}
          </div>
        </motion.div>
      </section>

      {/* 6. Contact / CTA */}
      <section className="py-40 px-4 sm:px-6 lg:px-8 max-w-[1000px] mx-auto w-full relative z-10 text-center" id="contact">
        <motion.div {...fadeUp}>
           <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent font-mono text-[11px] font-bold tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(0,184,219,0.15)]">
              Let's Talk
           </div>
           <h2 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-bold leading-tight text-white tracking-tight mb-8">
              Ready to <em className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-cool not-italic">rearchitect?</em>
           </h2>
           <p className="text-xl text-muted/90 leading-relaxed mb-12 font-medium max-w-2xl mx-auto">
              If your organization is hitting the ceiling of its current operating model, it's time to talk systems.
           </p>
           
           <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a href="/academy/home/book_session" target="_blank" rel="noopener noreferrer" className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-accent to-accent-cool rounded-2xl text-[#04121d] font-extrabold text-[15px] shadow-[0_0_30px_rgba(0,184,219,0.3)] hover:shadow-[0_0_45px_rgba(0,184,219,0.5)] transition-all hover:-translate-y-1">
                 Book a Strategy Call <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="mailto:hello@skker.com" className="text-[15px] font-bold text-white hover:text-accent transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-accent">
                 hello@skker.com
              </a>
           </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}

// Temporary icon component for user icon until import is fixed (if missing)
function UserCircle(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>
    </svg>
  )
}
