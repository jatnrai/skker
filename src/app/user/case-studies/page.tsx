'use client';

import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-page font-sans flex flex-col relative overflow-hidden text-text">
      <Navbar />
      
      <div className="flex-grow pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full relative z-10">
        
        {/* Top Banner */}
        <div className="relative w-full rounded-[32px] overflow-hidden bg-gradient-to-b from-card via-section to-page border border-border mb-12 min-h-[200px] sm:min-h-[220px] flex items-center px-8 sm:px-12 shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#00b8db]/15 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10 w-full flex justify-between items-center">
            <div className="flex flex-col gap-4 max-w-2xl">
              <nav className="flex items-center gap-2 text-[12px] font-semibold text-muted/70 tracking-wide">
                <Link href="/" className="hover:text-heading transition-colors flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  Home
                </Link>
                <ChevronRight size={14} className="opacity-50" />
                <span className="text-heading font-bold">Case Studies</span>
              </nav>
              <h1 className="text-4xl sm:text-[44px] font-bold tracking-tight text-heading mt-1">Case Studies</h1>
            </div>
            
            <div className="hidden md:block relative w-[220px] h-[180px] -mr-8">
              {/* Fallback image if actual book image is missing. Using course-library as proxy since it often has books */}
              <img 
                src="/assets/img/training/course-library.png" 
                alt="" 
                className="w-full h-full object-contain object-right drop-shadow-2xl opacity-90 transition-transform hover:scale-105 duration-700" 
                onError={(e) => e.currentTarget.style.display = 'none'} 
              />
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="flex flex-col bg-card rounded-[24px] border border-border overflow-hidden transition-all duration-300 hover:border-border hover:shadow-2xl group">
            <div className="aspect-[16/10] relative bg-page overflow-hidden border-b border-border">
               <img src="/assets/img/blog/systems-design.png" alt="Operating Model" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 flex flex-col flex-grow items-start">
              <div className="inline-block px-3 py-1 bg-highlight text-white text-[9.5px] font-extrabold tracking-widest uppercase rounded-full mb-5 shadow-[0_0_15px_rgba(42,167,255,0.4)] border border-border">
                Operating Model
              </div>
              <h3 className="text-[17px] font-bold text-heading leading-[1.5] mb-4">
                Operating Model Redesign for a Regional Banking Group
              </h3>
              <p className="text-[14px] text-muted/70 leading-[1.65] mb-8">
                A regional bank needed to reduce cross-team handoffs and speed up delivery without increasing headcount.
              </p>
              <div className="mt-auto">
                <Link href="/academy/page/case-studies" className="text-[13px] font-semibold text-muted/60 hover:text-heading transition-colors flex items-center gap-1.5 group/link">
                  Read case study <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col bg-card rounded-[24px] border border-border overflow-hidden transition-all duration-300 hover:border-border hover:shadow-2xl group">
            <div className="aspect-[16/10] relative bg-page overflow-hidden border-b border-border">
               <img src="/assets/img/blog/ai-strategy.png" alt="AI Readiness" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 flex flex-col flex-grow items-start">
              <div className="inline-block px-3 py-1 bg-highlight text-white text-[9.5px] font-extrabold tracking-widest uppercase rounded-full mb-5 shadow-[0_0_15px_rgba(42,167,255,0.4)] border border-border">
                AI Readiness
              </div>
              <h3 className="text-[17px] font-bold text-heading leading-[1.5] mb-4">
                AI Adoption Strategy and Governance Blueprint
              </h3>
              <p className="text-[14px] text-muted/70 leading-[1.65] mb-8">
                A fast-growing SaaS company needed a coherent AI strategy before their board-mandated AI initiative went live across ...
              </p>
              <div className="mt-auto">
                <Link href="/academy/page/case-studies" className="text-[13px] font-semibold text-muted/60 hover:text-heading transition-colors flex items-center gap-1.5 group/link">
                  Read case study <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col bg-card rounded-[24px] border border-border overflow-hidden transition-all duration-300 hover:border-border hover:shadow-2xl group">
            <div className="aspect-[16/10] relative bg-page overflow-hidden border-b border-border">
               <img src="/assets/img/blog/kanban.png" alt="Kanban & Flow" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 flex flex-col flex-grow items-start">
              <div className="inline-block px-3 py-1 bg-highlight text-white text-[9.5px] font-extrabold tracking-widest uppercase rounded-full mb-5 shadow-[0_0_15px_rgba(42,167,255,0.4)] border border-border">
                Kanban & Flow
              </div>
              <h3 className="text-[17px] font-bold text-heading leading-[1.5] mb-4">
                Kanban Flow System Implementation Across Functions
              </h3>
              <p className="text-[14px] text-muted/70 leading-[1.65] mb-8">
                A telecoms operator needed to stabilise unpredictable delivery output across six operational teams without a costly t...
              </p>
              <div className="mt-auto">
                <Link href="/academy/page/case-studies" className="text-[13px] font-semibold text-muted/60 hover:text-heading transition-colors flex items-center gap-1.5 group/link">
                  Read case study <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Duplicating the cards to match the 2-row layout shown in screenshot */}
          {/* Card 4 */}
          <div className="flex flex-col bg-card rounded-[24px] border border-border overflow-hidden transition-all duration-300 hover:border-border hover:shadow-2xl group">
            <div className="aspect-[16/10] relative bg-page overflow-hidden border-b border-border">
               <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" alt="Org Design" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 flex flex-col flex-grow items-start">
              <div className="inline-block px-3 py-1 bg-highlight text-white text-[9.5px] font-extrabold tracking-widest uppercase rounded-full mb-5 shadow-[0_0_15px_rgba(42,167,255,0.4)] border border-border">
                ORG DESIGN
              </div>
              <h3 className="text-[17px] font-bold text-heading leading-[1.5] mb-4">
                Enterprise Product Structure Realignment
              </h3>
              <p className="text-[14px] text-muted/70 leading-[1.65] mb-8">
                Restructuring the engineering and product org to eliminate dependencies and accelerate delivery speed...
              </p>
              <div className="mt-auto">
                <Link href="/academy/page/case-studies" className="text-[13px] font-semibold text-muted/60 hover:text-heading transition-colors flex items-center gap-1.5 group/link">
                  Read case study <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col bg-card rounded-[24px] border border-border overflow-hidden transition-all duration-300 hover:border-border hover:shadow-2xl group">
            <div className="aspect-[16/10] relative bg-page overflow-hidden border-b border-border">
               <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80" alt="Strategy" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 flex flex-col flex-grow items-start">
              <div className="inline-block px-3 py-1 bg-highlight text-white text-[9.5px] font-extrabold tracking-widest uppercase rounded-full mb-5 shadow-[0_0_15px_rgba(42,167,255,0.4)] border border-border">
                LEADERSHIP
              </div>
              <h3 className="text-[17px] font-bold text-heading leading-[1.5] mb-4">
                Executive Transition Coaching Program
              </h3>
              <p className="text-[14px] text-muted/70 leading-[1.65] mb-8">
                Supporting newly appointed product executives in establishing their operating cadence and board reporting...
              </p>
              <div className="mt-auto">
                <Link href="/academy/page/case-studies" className="text-[13px] font-semibold text-muted/60 hover:text-heading transition-colors flex items-center gap-1.5 group/link">
                  Read case study <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="flex flex-col bg-card rounded-[24px] border border-border overflow-hidden transition-all duration-300 hover:border-border hover:shadow-2xl group">
            <div className="aspect-[16/10] relative bg-page overflow-hidden border-b border-border">
               <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80" alt="Technology" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 flex flex-col flex-grow items-start">
              <div className="inline-block px-3 py-1 bg-highlight text-white text-[9.5px] font-extrabold tracking-widest uppercase rounded-full mb-5 shadow-[0_0_15px_rgba(42,167,255,0.4)] border border-border">
                TRANSFORMATION
              </div>
              <h3 className="text-[17px] font-bold text-heading leading-[1.5] mb-4">
                Digital Core Modernization Governance
              </h3>
              <p className="text-[14px] text-muted/70 leading-[1.65] mb-8">
                Establishing the steering committee and decision rights structure for a multi-year cloud migration effort...
              </p>
              <div className="mt-auto">
                <Link href="/academy/page/case-studies" className="text-[13px] font-semibold text-muted/60 hover:text-heading transition-colors flex items-center gap-1.5 group/link">
                  Read case study <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
