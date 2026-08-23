'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CorporateTrainingPage() {
  return (
    <main className="min-h-screen font-sans relative overflow-hidden bg-page text-text bg-corporate-gradient">
      <Navbar />

      {/* 1. Hero Section wrapper */}
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">

        <section className="grid grid-cols-1 lg:grid-cols-[1fr_500px] xl:grid-cols-[1.2fr_550px] gap-16 lg:gap-10 xl:gap-16 items-center mb-32 mt-6">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full border border-accent/20 bg-surface dark:bg-white/[0.03] w-fit mb-2">
              <div className="w-[6px] h-[6px] rounded-full bg-accent" />
              <span className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-accent">Corporate Training</span>
            </div>

            <h1 className="text-[45px] sm:text-[72px] lg:text-[84px] font-sans font-bold text-heading leading-[1.02] tracking-[-0.03em] max-w-[800px]">
              Transform your<br />teams.<br />Accelerate<br />business<br />growth.
            </h1>

            <p className="text-[16px] text-muted/70 leading-[1.7] font-sans mt-2 max-w-[500px]">
              Modern organisations need more than traditional training. SKKER designs practical programs that combine business strategy, AI-powered workflows, leadership capability, and measurable execution outcomes.
            </p>

            <div className="font-sans text-[11px] font-bold tracking-[0.15em] uppercase text-muted/70 border border-border dark:border-[#232e3e] bg-surface dark:bg-white/[0.02] rounded-full px-5 py-[10px] w-fit mt-3">
              OUTCOME-FOCUSED. INTERACTIVE. BUSINESS-DRIVEN.
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a href="#lead-intake" className="inline-flex items-center justify-center px-8 py-[18px] bg-gradient-to-br from-[#7beaff] to-accent text-[#04121d] rounded-full font-sans text-[12px] font-bold tracking-[0.15em] uppercase transition-all gap-2 group shadow-[0_16px_46px_rgba(0,184,219,0.18)] hover:-translate-y-0.5 border border-accent/70">
                Request Proposal &rarr;
              </a>
              <Link href="/academy/home/book_session" className="inline-flex items-center justify-center px-8 py-[18px] bg-surface dark:bg-white/5 border border-border dark:border-[#232e3e] hover:border-border-focus dark:hover:border-[#334255] text-heading rounded-full font-sans text-[12px] font-bold tracking-[0.15em] uppercase transition-all">
                Book Discovery Call
              </Link>
            </div>
          </div>

          <div className="w-full relative lg:pl-10">
            {/* The Visual Matrix */}
            <div className="relative w-full rounded-[28px] border border-accent/20 overflow-hidden bg-white/60 dark:bg-white/[0.055] backdrop-blur-[22px] backdrop-saturate-[1.22] shadow-[0_28px_90px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.09)] min-h-[420px] p-7">
              {/* Background gradient angles */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-white/5 pointer-events-none" />
              <div className="absolute -inset-[28%] bg-[linear-gradient(115deg,transparent_15%,rgba(0,184,219,0.15)_30%,transparent_46%)] rotate-[-12deg] pointer-events-none" />

              <div className="relative z-10 grid grid-cols-2 gap-3.5 h-full min-h-[360px]">
                <div className="bg-card/90 dark:bg-[#030d18]/40 border border-border dark:border-white/10 shadow-sm rounded-[22px] p-5 flex flex-col justify-between">
                  <span className="font-sans text-[11px] font-black tracking-[0.12em] uppercase text-muted/70 mb-4 block">Format</span>
                  <strong className="text-[17px] font-bold text-heading leading-tight">Online, offline,<br />or live hybrid</strong>
                </div>
                <div className="bg-card/90 dark:bg-[#030d18]/40 border border-border dark:border-white/10 shadow-sm rounded-[22px] p-5 flex flex-col justify-between">
                  <span className="font-sans text-[11px] font-black tracking-[0.12em] uppercase text-muted/70 mb-4 block">Audience</span>
                  <strong className="text-[17px] font-bold text-heading leading-tight">Executives,<br />managers,<br />technical teams</strong>
                </div>
                <div className="bg-card/90 dark:bg-[#030d18]/40 border border-border dark:border-white/10 shadow-sm rounded-[22px] p-5 flex flex-col justify-between">
                  <span className="font-sans text-[11px] font-black tracking-[0.12em] uppercase text-muted/70 mb-4 block">Focus</span>
                  <strong className="text-[17px] font-bold text-heading leading-tight">AI, strategy,<br />leadership,<br />innovation</strong>
                </div>
                <div className="bg-card/90 dark:bg-[#030d18]/40 border border-border dark:border-white/10 shadow-sm rounded-[22px] p-5 flex flex-col justify-between">
                  <span className="font-sans text-[11px] font-black tracking-[0.12em] uppercase text-muted/70 mb-4 block">Outcome</span>
                  <strong className="text-[17px] font-bold text-heading leading-tight">Capability that<br />transfers into<br />work</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Why Choose Our Training */}
        <section className="mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-16">
            <div>
              <div className="font-sans text-[11px] font-black tracking-[0.17em] uppercase text-accent mb-2.5">Why Choose Our Training?</div>
              <h2 className="text-[42px] sm:text-[56px] font-sans font-black text-heading leading-[1.04] tracking-[-0.04em]">
                Designed for business impact, not generic classroom time.
              </h2>
            </div>
            <div>
              <p className="text-[16px] text-muted/70 leading-[1.72] font-sans max-w-[460px]">
                Every program is tailored to your organisation's goals, industry, and current challenges.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: '01', title: 'Strategic Learning', desc: 'Every program is shaped around your organisation\'s goals, industry, and operating challenges.' },
              { num: '02', title: 'Practical Implementation', desc: 'Participants work on real business scenarios instead of abstract examples.' },
              { num: '03', title: 'AI-Powered Productivity', desc: 'Learn how AI can improve workflows, decision-making, automation, and team efficiency.' },
              { num: '04', title: 'Executive Perspective', desc: 'Training combines technology, leadership, business strategy, and innovation.' }
            ].map((card, i) => (
              <div key={i} className="bg-card dark:bg-[#131b26] border border-border dark:border-[#232e3e] rounded-[24px] p-6 flex flex-col h-full hover:border-border-focus dark:hover:border-[#334255] transition-all shadow-md group">
                <div className="w-[42px] h-[42px] rounded-[15px] bg-[#00b8db]/10 border border-[#00b8db]/20 flex items-center justify-center font-sans text-[13px] font-black text-accent mb-[22px] group-hover:bg-[#00b8db]/20 transition-colors">
                  {card.num}
                </div>
                <h3 className="text-[20.5px] font-black text-heading leading-[1.2] tracking-[-0.02em] mb-2.5">{card.title}</h3>
                <p className="text-[15px] text-muted/70 leading-[1.6]">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Six Practical Areas */}
        <section className="mb-32 xl:px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-12">
            <div>
              <div className="font-sans text-[11px] font-black tracking-[0.17em] uppercase text-accent mb-2.5">Training Areas</div>
              <h2 className="text-[42px] sm:text-[56px] font-sans font-black text-heading leading-[1.04] tracking-[-0.04em]">
                Six practical areas for<br />modern teams.
              </h2>
            </div>
            <div>
              <p className="text-[16px] text-muted/70 leading-[1.72] font-sans max-w-[460px] lg:justify-self-end">
                Programs can be delivered as executive workshops, team training, bootcamps, or hybrid capability-building journeys.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                tag: 'AI',
                title: 'Artificial Intelligence for Business',
                desc: 'Discover how AI can transform operations, customer experience, marketing, HR, finance, and decision-making.',
                bullets: ['AI fundamentals, generative AI, and ChatGPT for business', 'AI automation, prompt engineering, governance, and responsible AI', 'Business use cases tied to real organisational workflows']
              },
              {
                tag: 'DX',
                title: 'Digital Transformation',
                desc: 'Help your organisation embrace digital change successfully.',
                bullets: ['Digital strategy and process optimisation', 'Innovation frameworks and change management', 'Digital leadership and customer experience']
              },
              {
                tag: 'LD',
                title: 'Leadership Development',
                desc: 'Develop leaders who inspire teams and drive business growth.',
                bullets: ['Executive leadership and strategic thinking', 'Decision making, communication, and team management', 'High-performance culture and leadership routines']
              },
              {
                tag: 'PM',
                title: 'Product Management',
                desc: 'Build products customers actually want.',
                bullets: ['Product strategy, discovery, and agile product management', 'Roadmapping, customer research, and product metrics', 'Operating cadence for product and delivery teams']
              },
              {
                tag: 'BS',
                title: 'Business Strategy',
                desc: 'Improve organisational performance through strategic planning and execution.',
                bullets: ['Business models and competitive strategy', 'Performance management and KPI design', 'Operational excellence and execution rhythm']
              },
              {
                tag: 'IN',
                title: 'Innovation Workshops',
                desc: 'Interactive sessions that help teams create better products, services, and processes.',
                bullets: ['Design thinking, innovation labs, and brainstorming frameworks', 'Business model innovation and AI innovation sessions', 'Action plans that turn ideas into implementation steps']
              },
            ].map((area, i) => (
              <div key={i} className="bg-card dark:bg-[#131b26] border border-border dark:border-[#232e3e] rounded-[24px] p-6 flex flex-col h-full hover:border-border-focus dark:hover:border-[#334255] transition-all shadow-md">
                <div className="w-[42px] h-[42px] rounded-[15px] bg-[#00b8db]/10 border border-[#00b8db]/20 flex items-center justify-center font-sans text-[13px] font-black text-accent mb-[22px]">
                  {area.tag}
                </div>
                <h3 className="text-[20.5px] font-black text-heading leading-[1.2] tracking-[-0.02em] mb-2.5">{area.title}</h3>
                <p className="text-[15px] text-muted/70 leading-[1.6] mb-5">{area.desc}</p>
                
                <ul className="grid gap-[10px] mt-auto">
                  {area.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-[14.5px] text-muted/70 leading-[1.55] grid grid-cols-[12px_1fr] gap-2.5 items-start">
                      <div className="w-[6px] h-[6px] rounded-full bg-accent mt-[8px]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Delivery Formats & Audience */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-32">
          <div className="rounded-[28px] border border-[#00b8db]/20 p-6 sm:p-10 bg-white/60 dark:bg-white/[0.055] backdrop-blur-[18px] backdrop-saturate-[1.18] shadow-[0_24px_70px_rgba(0,0,0,0.15)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,184,219,0.13),rgba(255,255,255,0.035))] pointer-events-none" />
            <div className="relative z-10">
              <div className="font-sans text-[11px] font-black tracking-[0.17em] uppercase text-accent mb-2.5">Delivery Formats</div>
              <h2 className="text-[42px] sm:text-[56px] font-sans font-black text-heading leading-[1.04] tracking-[-0.04em] mb-12">
                Choose the<br />format that fits<br />your<br />organisation.
              </h2>

              <div className="flex flex-wrap gap-2.5">
                {['On-site Training', 'Live Virtual Training', 'Hybrid Programs', 'Executive Workshops', 'Leadership Retreats', 'Multi-Day Bootcamps'].map((pill, i) => (
                  <div key={i} className="px-[13px] py-[8px] min-h-[38px] inline-flex items-center rounded-full border border-border dark:border-white/10 bg-card dark:bg-white/[0.055] text-heading text-[13px] font-extrabold">
                    {pill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-[#00b8db]/20 p-6 sm:p-10 bg-white/60 dark:bg-white/[0.055] backdrop-blur-[18px] backdrop-saturate-[1.18] shadow-[0_24px_70px_rgba(0,0,0,0.15)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,184,219,0.13),rgba(255,255,255,0.035))] pointer-events-none" />
            <div className="relative z-10">
              <div className="font-sans text-[11px] font-black tracking-[0.17em] uppercase text-accent mb-2.5">Who Should Attend?</div>
              <h2 className="text-[42px] sm:text-[56px] font-sans font-black text-heading leading-[1.04] tracking-[-0.04em] mb-12">
                Built for teams<br />that shape<br />decisions.
              </h2>

              <div className="flex flex-wrap gap-2.5">
                {['Executives', 'Directors', 'Department Managers', 'Team Leaders', 'Engineers', 'Product Managers', 'HR Professionals', 'Business Analysts', 'University Leaders'].map((pill, i) => (
                  <div key={i} className="px-[13px] py-[8px] min-h-[38px] inline-flex items-center rounded-full border border-border dark:border-white/10 bg-card dark:bg-white/[0.055] text-heading text-[13px] font-extrabold">
                    {pill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Methodology & Industries */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-10 items-end mb-16">
            <div>
              <div className="font-sans text-[11px] font-black tracking-[0.17em] uppercase text-accent mb-4">Training Methodology</div>
              <h2 className="text-[42px] sm:text-[60px] font-sans font-semibold text-heading leading-[1.04] tracking-[-0.04em]">
                Interactive, practical, and<br />immediately usable.
              </h2>
            </div>
            <div>
              <p className="text-[15px] text-muted/70 leading-[1.72] font-sans max-w-[420px] lg:justify-self-end">
                Every participant leaves with practical knowledge that can be<br />implemented immediately.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card dark:bg-[#131b26] border border-border dark:border-[#232e3e] rounded-[24px] p-8 flex flex-col h-full hover:border-border-focus dark:hover:border-[#334255] transition-all shadow-md">
              <div className="w-10 h-10 rounded-full bg-surface dark:bg-[#1c2a39] flex items-center justify-center font-sans text-[12px] font-bold text-accent mb-6">
                01
              </div>
              <h3 className="text-[20px] font-black text-heading tracking-[-0.02em] mb-6">How sessions work</h3>
              <ul className="grid gap-[16px]">
                {['Interactive presentations and live demonstrations', 'Group discussions and hands-on exercises', 'Real business case studies and team workshops', 'Action plans for immediate implementation'].map((bullet, idx) => (
                  <li key={idx} className="text-[14px] text-muted/70 leading-[1.5] grid grid-cols-[8px_1fr] gap-3 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card dark:bg-[#131b26] border border-border dark:border-[#232e3e] rounded-[24px] p-8 flex flex-col h-full hover:border-border-focus dark:hover:border-[#334255] transition-all shadow-md">
              <div className="w-10 h-10 rounded-full bg-surface dark:bg-[#1c2a39] flex items-center justify-center font-sans text-[12px] font-bold text-accent mb-6">
                02
              </div>
              <h3 className="text-[20px] font-black text-heading tracking-[-0.02em] mb-6">What makes SKKER different?</h3>
              <ul className="grid gap-[16px]">
                {['Business-first approach with AI integrated into every program', 'Customized content and executive-level delivery', 'Practical implementation and international best practices', 'Measurable outcomes tied to business capability'].map((bullet, idx) => (
                  <li key={idx} className="text-[14px] text-muted/70 leading-[1.5] grid grid-cols-[8px_1fr] gap-3 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Industries */}
          <div className="bg-surface dark:bg-[#182330] border border-border dark:border-[#232e3e] rounded-[28px] p-8 sm:p-12 shadow-lg mt-16 relative overflow-hidden">
            <div className="relative z-10">
              <div className="font-sans text-[11px] font-black tracking-[0.17em] uppercase text-accent mb-4">Industries We Serve</div>
              <h2 className="text-[42px] sm:text-[60px] font-sans font-semibold text-heading leading-[1.04] tracking-[-0.04em] mb-12 max-w-[900px]">
                Relevant across sectors, teams, and<br />operating contexts.
              </h2>

              <div className="flex flex-wrap gap-3">
                {['Higher Education', 'Government', 'Banking', 'Healthcare', 'Manufacturing', 'Retail', 'Telecommunications', 'Technology', 'Startups', 'NGOs'].map((pill, i) => (
                  <div key={i} className="px-4 py-2 min-h-[38px] inline-flex items-center rounded-full border border-border dark:border-white/10 bg-card dark:bg-[#212f3f] text-heading/80 text-[13px] font-semibold">
                    {pill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Workflow Row */}
        <section className="mb-24">
          <div className="surface-gradient border border-border rounded-3xl p-12 flex flex-col md:flex-row shadow-lg">
            {[
              { num: '01', text: 'We will review your requirements within 2-3 business days.' },
              { num: '02', text: 'Discovery call to align on scope and timeline.' },
              { num: '03', text: 'A tailored proposal will be sent to your email.' },
              { num: '04', text: 'Proposal finalised and engagement begins.' }
            ].map((step, idx) => (
              <div key={idx} className={`flex-1 flex flex-col gap-4 ${idx !== 3 ? 'md:border-r border-border/40 md:pr-10 mb-8 md:mb-0' : ''} ${idx !== 0 ? 'md:pl-10' : ''}`}>
                <span className="font-mono text-[14px] font-bold tracking-[0.1em] text-accent">{step.num}</span>
                <p className="text-[16px] text-heading/90 leading-relaxed font-medium max-w-[220px]">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Lead Intake Form */}
        <section id="lead-intake" className="mb-32 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 scroll-mt-32">
          {/* Left: Lead Intake Info */}
          <div className="surface-gradient border border-accent/20 rounded-3xl p-12 shadow-lg h-fit sticky top-32">
            <div className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-accent mb-6">
              Lead Intake
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-heading leading-tight mb-8">
              Request a corporate training proposal.
            </h2>
            <p className="text-[16px] text-muted/90 leading-relaxed mb-12">
              This is a qualification and sales flow, not a scheduling system. Share enough context for SKKER to shape the right next step.
            </p>

            <div className="space-y-8">
              {[
                'Capture objectives, audience, and delivery needs.',
                'Stored in the SKKER CRM as a corporate training lead.',
                'Confirmation email sent to you and notification sent to admin.'
              ].map((text, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center font-mono text-[13px] font-bold text-accent shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-[15px] text-muted/90 leading-relaxed pt-2">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="card-gradient border border-border rounded-3xl p-10 sm:p-14 shadow-xl">
            <form className="flex flex-col gap-10">

              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Full Name</label>
                  <input type="text" placeholder="Your name" className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Work Email</label>
                  <input type="email" placeholder="you@company.com" className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm" />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Phone / Whatsapp</label>
                  <input type="text" placeholder="+60 ..." className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Company</label>
                  <input type="text" placeholder="Company name" className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm" />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Job Title / Role</label>
                  <input type="text" placeholder="Your role" className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Type of Request</label>
                  <select className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading focus:outline-none focus:border-accent/50 transition-colors shadow-sm appearance-none">
                    <option>Corporate Training</option>
                    <option>Private Coaching</option>
                    <option>Consulting</option>
                  </select>
                </div>
              </div>

              {/* Training Topics */}
              <div className="flex flex-col gap-5">
                <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Training Topics</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-5 gap-x-4">
                  {['AI Strategy', 'Product Management', 'Kanban / Flow', 'Org Design', 'Custom'].map((topic, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer group w-fit">
                      <div className="w-5 h-5 rounded-md border border-border bg-page dark:bg-surface group-hover:border-accent/50 transition-colors flex items-center justify-center shrink-0">
                        <div className="w-2.5 h-2.5 rounded-sm bg-accent opacity-0 group-hover:opacity-20 transition-opacity" />
                      </div>
                      <span className="font-mono text-[12px] font-bold tracking-[0.1em] text-muted/80 group-hover:text-heading transition-colors uppercase pt-0.5">{topic}</span>
                    </label>
                  ))}
                </div>
                <input type="text" placeholder="If Custom, briefly describe the topic" className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm mt-3" />
              </div>

              {/* Objective */}
              <div className="flex flex-col gap-3">
                <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Objective / Problem Statement</label>
                <textarea rows={5} placeholder="What capability, behaviour, or operating problem should the training address?" className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm resize-none" />
              </div>

              {/* Industry & Size */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Industry</label>
                  <input type="text" placeholder="e.g. Financial Services, Technology" className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Company Size</label>
                  <select className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading focus:outline-none focus:border-accent/50 transition-colors shadow-sm appearance-none text-muted/50">
                    <option>Select...</option>
                    <option>1-50</option>
                    <option>51-200</option>
                    <option>201-500</option>
                    <option>500+</option>
                  </select>
                </div>
              </div>

              {/* Participants & Target Audience */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Number of Participants</label>
                  <input type="text" placeholder="e.g. 15-20" className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm" />
                </div>
              </div>

              <div className="flex flex-col gap-5 -mt-3">
                <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Target Audience</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-5 gap-x-4">
                  {['Executives', 'Managers', 'Engineers', 'Cross-Functional Teams'].map((topic, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer group w-fit">
                      <div className="w-5 h-5 rounded-md border border-border bg-page dark:bg-surface group-hover:border-accent/50 transition-colors flex items-center justify-center shrink-0">
                        <div className="w-2.5 h-2.5 rounded-sm bg-accent opacity-0 group-hover:opacity-20 transition-opacity" />
                      </div>
                      <span className="font-mono text-[12px] font-bold tracking-[0.1em] text-muted/80 group-hover:text-heading transition-colors uppercase pt-0.5">{topic}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Format & Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-3">
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Format</label>
                  <select className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading focus:outline-none focus:border-accent/50 transition-colors shadow-sm appearance-none text-muted/50">
                    <option>Select format</option>
                    <option>In-Person</option>
                    <option>Virtual</option>
                    <option>Hybrid</option>
                  </select>
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Location</label>
                  <input type="text" placeholder="City / country, if on-site or hybrid" className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm" />
                </div>
              </div>

              {/* Timeline & Duration */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Timeline</label>
                  <select className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading focus:outline-none focus:border-accent/50 transition-colors shadow-sm appearance-none text-muted/50">
                    <option>Select...</option>
                    <option>Asap</option>
                    <option>Within 1-3 Months</option>
                    <option>Future Planning</option>
                  </select>
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Duration</label>
                  <select className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading focus:outline-none focus:border-accent/50 transition-colors shadow-sm appearance-none text-muted/50">
                    <option>Select...</option>
                    <option>Half Day</option>
                    <option>Full Day</option>
                    <option>Multi-Day</option>
                  </select>
                </div>
              </div>

              {/* Budget & Similar Training */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Estimated Budget <span className="normal-case opacity-70 tracking-normal">(optional)</span></label>
                  <select className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading focus:outline-none focus:border-accent/50 transition-colors shadow-sm appearance-none">
                    <option>Prefer not to say</option>
                    <option>&lt; $5k</option>
                    <option>$5k - $15k</option>
                    <option>&gt; $15k</option>
                  </select>
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Have you done similar training before?</label>
                  <select className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading focus:outline-none focus:border-accent/50 transition-colors shadow-sm appearance-none text-muted/50">
                    <option>Select...</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>

              {/* What didn't work previously */}
              <div className="flex flex-col gap-3">
                <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">If yes, what didn't work previously?</label>
                <textarea rows={4} placeholder="Optional — helps us avoid repeating the same gaps" className="bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm resize-none" />
              </div>

              {/* Attachment */}
              <div className="flex flex-col gap-3">
                <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Attachment <span className="normal-case opacity-70 tracking-normal">(optional — brief, RFP, org chart, etc.)</span></label>
                <div className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-3 flex items-center gap-4 shadow-sm">
                  <label className="px-4 py-2 bg-surface dark:bg-white/10 hover:bg-card dark:hover:bg-white/15 text-[14px] font-medium text-heading rounded-lg cursor-pointer transition-colors border border-border dark:border-white/5 shadow-sm">
                    Choose file
                    <input type="file" className="hidden" />
                  </label>
                  <span className="text-[14px] text-muted/60">No file chosen</span>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="flex flex-col gap-3">
                <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Additional Notes</label>
                <textarea rows={5} placeholder="Anything else that would help us shape the proposal?" className="bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm resize-none" />
              </div>

              {/* Consent & Submit */}
              <div className="flex flex-col gap-8 mt-8 border-t border-border pt-10">
                <label className="flex items-center gap-4 cursor-pointer group w-fit">
                  <div className="w-5 h-5 rounded-md border border-border bg-surface group-hover:border-accent/50 transition-colors flex items-center justify-center shrink-0">
                    <div className="w-2.5 h-2.5 rounded-sm bg-accent opacity-0 group-hover:opacity-20 transition-opacity" />
                  </div>
                  <span className="font-mono text-[12px] font-bold tracking-[0.1em] text-muted/90 group-hover:text-heading transition-colors uppercase pt-0.5">
                    I consent to Skker storing this information to prepare a proposal. <span className="text-accent ml-1">*</span>
                  </span>
                </label>

                <button type="button" className="w-fit flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent-cool text-page rounded-full px-10 py-4 font-bold text-[14px] font-mono tracking-[0.1em] uppercase hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(0,184,219,0.3)] transition-all">
                  Request Proposal <ArrowRight size={18} className="-mr-1" />
                </button>
              </div>

            </form>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
