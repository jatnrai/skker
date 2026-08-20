'use client';

import Link from 'next/link';
import { ArrowRight, Building, CheckCircle2, Crosshair, Users, BrainCircuit, Globe, LineChart, Briefcase, Network, Lightbulb, MapPin, Video, MonitorPlay } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CorporateTrainingPage() {
  return (
    <main className="min-h-screen text-text flex flex-col relative overflow-hidden font-sans bg-[url('/assets/images/noise.png')]">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMikiLz48L3N2Zz4=')]" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent-cool/10 rounded-full blur-[100px] pointer-events-none z-0" />
      </div>

      <Navbar />
      
      <div className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
        
        {/* Hero Section */}
        <header className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent font-mono text-xs font-bold tracking-widest uppercase w-fit shadow-[0_0_15px_rgba(0,184,219,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> Corporate Training
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-text to-muted">
              Transform your teams. Accelerate business growth.
            </h1>
            <p className="text-lg text-muted/90 leading-relaxed max-w-xl">
              Modern organisations need more than traditional training. SKKER designs practical programs that combine business strategy, AI-powered workflows, leadership capability, and measurable execution outcomes.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <span className="px-4 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent-cool text-xs font-bold tracking-wider uppercase">
                Outcome-focused. Interactive. Business-driven.
              </span>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#request" 
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-cool rounded-xl text-white font-semibold shadow-[0_0_20px_rgba(0,184,219,0.3)] hover:shadow-[0_0_30px_rgba(0,184,219,0.5)] transition-all hover:-translate-y-0.5"
              >
                <span>Request Proposal</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/academy/home/book_session" className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl text-text border border-white/10 glass-panel hover:bg-white/10 transition-all hover:-translate-y-0.5 font-bold">
                <span>Book Discovery Call</span>
              </a>
            </div>
          </div>
          <figure className="relative w-full max-w-lg ml-auto">
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl bg-gradient-to-br from-white/5 to-transparent h-[420px] flex flex-col items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
              <div className="relative z-10 w-full px-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-panel p-4 rounded-2xl border border-white/5 flex flex-col justify-between h-[150px] bg-white/[0.02]">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted">Format</span>
                    <strong className="text-text leading-tight text-sm">Online, offline, or live hybrid</strong>
                  </div>
                  <div className="glass-panel p-4 rounded-2xl border border-white/5 flex flex-col justify-between h-[150px] bg-white/[0.02]">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted">Audience</span>
                    <strong className="text-text leading-tight text-sm">Executives, managers, technical teams</strong>
                  </div>
                  <div className="glass-panel p-4 rounded-2xl border border-white/5 flex flex-col justify-between h-[150px] bg-white/[0.02]">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted">Focus</span>
                    <strong className="text-text leading-tight text-sm">AI, strategy, leadership, innovation</strong>
                  </div>
                  <div className="glass-panel p-4 rounded-2xl border border-white/5 flex flex-col justify-between h-[150px] bg-white/[0.02]">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted">Outcome</span>
                    <strong className="text-text leading-tight text-sm">Capability that transfers into work</strong>
                  </div>
                </div>
              </div>
            </div>
          </figure>
        </header>

        {/* Why Choose Our Training */}
        <section className="mb-32">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-xl">
              <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4">Why Choose Our Training?</div>
              <h2 className="text-4xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-text to-muted">Designed for business impact, not generic classroom time.</h2>
            </div>
            <p className="text-lg text-muted/90 max-w-md">Every program is tailored to your organisation's goals, industry, and current challenges.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <article className="glass-panel p-6 rounded-3xl border border-white/10 relative hover:border-accent/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 text-accent font-mono font-bold flex items-center justify-center mb-6">01</div>
              <h3 className="text-xl font-bold text-text mb-2">Strategic Learning</h3>
              <p className="text-sm text-muted/80">Every program is shaped around your organisation's goals, industry, and operating challenges.</p>
            </article>
            <article className="glass-panel p-6 rounded-3xl border border-white/10 relative hover:border-accent/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 text-accent font-mono font-bold flex items-center justify-center mb-6">02</div>
              <h3 className="text-xl font-bold text-text mb-2">Practical Implementation</h3>
              <p className="text-sm text-muted/80">Participants work on real business scenarios instead of abstract examples.</p>
            </article>
            <article className="glass-panel p-6 rounded-3xl border border-white/10 relative hover:border-accent/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 text-accent font-mono font-bold flex items-center justify-center mb-6">03</div>
              <h3 className="text-xl font-bold text-text mb-2">AI-Powered Productivity</h3>
              <p className="text-sm text-muted/80">Learn how AI can improve workflows, decision-making, automation, and team efficiency.</p>
            </article>
            <article className="glass-panel p-6 rounded-3xl border border-white/10 relative hover:border-accent/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 text-accent font-mono font-bold flex items-center justify-center mb-6">04</div>
              <h3 className="text-xl font-bold text-text mb-2">Executive Perspective</h3>
              <p className="text-sm text-muted/80">Training combines technology, leadership, business strategy, and innovation.</p>
            </article>
          </div>
        </section>

        {/* Training Areas */}
        <section className="mb-32">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-xl">
              <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4">Training Areas</div>
              <h2 className="text-4xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-text to-muted">Six practical areas for modern teams.</h2>
            </div>
            <p className="text-lg text-muted/90 max-w-md">Programs can be delivered as executive workshops, team training, bootcamps, or hybrid capability-building journeys.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* AI */}
            <article className="glass-panel p-8 rounded-3xl border border-white/10 hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 text-accent font-mono font-bold flex items-center justify-center mb-6 text-xs tracking-wider">AI</div>
              <h3 className="text-xl font-bold text-text mb-3">Artificial Intelligence for Business</h3>
              <p className="text-sm text-muted/80 mb-6 min-h-[60px]">Discover how AI can transform operations, customer experience, marketing, HR, finance, and decision-making.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-muted/90"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shadow-[0_0_8px_rgba(0,184,219,0.8)] shrink-0" /> AI fundamentals, generative AI, and ChatGPT for business</li>
                <li className="flex items-start gap-2 text-sm text-muted/90"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shadow-[0_0_8px_rgba(0,184,219,0.8)] shrink-0" /> AI automation, prompt engineering, governance</li>
                <li className="flex items-start gap-2 text-sm text-muted/90"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shadow-[0_0_8px_rgba(0,184,219,0.8)] shrink-0" /> Business use cases tied to real organisational workflows</li>
              </ul>
            </article>

            {/* DX */}
            <article className="glass-panel p-8 rounded-3xl border border-white/10 hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 text-accent font-mono font-bold flex items-center justify-center mb-6 text-xs tracking-wider">DX</div>
              <h3 className="text-xl font-bold text-text mb-3">Digital Transformation</h3>
              <p className="text-sm text-muted/80 mb-6 min-h-[60px]">Help your organisation embrace digital change successfully.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-muted/90"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shadow-[0_0_8px_rgba(0,184,219,0.8)] shrink-0" /> Digital strategy and process optimisation</li>
                <li className="flex items-start gap-2 text-sm text-muted/90"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shadow-[0_0_8px_rgba(0,184,219,0.8)] shrink-0" /> Innovation frameworks and change management</li>
                <li className="flex items-start gap-2 text-sm text-muted/90"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shadow-[0_0_8px_rgba(0,184,219,0.8)] shrink-0" /> Digital leadership and customer experience</li>
              </ul>
            </article>

            {/* LD */}
            <article className="glass-panel p-8 rounded-3xl border border-white/10 hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 text-accent font-mono font-bold flex items-center justify-center mb-6 text-xs tracking-wider">LD</div>
              <h3 className="text-xl font-bold text-text mb-3">Leadership Development</h3>
              <p className="text-sm text-muted/80 mb-6 min-h-[60px]">Develop leaders who inspire teams and drive business growth.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-muted/90"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shadow-[0_0_8px_rgba(0,184,219,0.8)] shrink-0" /> Executive leadership and strategic thinking</li>
                <li className="flex items-start gap-2 text-sm text-muted/90"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shadow-[0_0_8px_rgba(0,184,219,0.8)] shrink-0" /> Decision making, communication, and team management</li>
                <li className="flex items-start gap-2 text-sm text-muted/90"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shadow-[0_0_8px_rgba(0,184,219,0.8)] shrink-0" /> High-performance culture and leadership routines</li>
              </ul>
            </article>

            {/* PM */}
            <article className="glass-panel p-8 rounded-3xl border border-white/10 hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 text-accent font-mono font-bold flex items-center justify-center mb-6 text-xs tracking-wider">PM</div>
              <h3 className="text-xl font-bold text-text mb-3">Product Management</h3>
              <p className="text-sm text-muted/80 mb-6 min-h-[60px]">Build products customers actually want.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-muted/90"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shadow-[0_0_8px_rgba(0,184,219,0.8)] shrink-0" /> Product strategy, discovery, and agile product management</li>
                <li className="flex items-start gap-2 text-sm text-muted/90"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shadow-[0_0_8px_rgba(0,184,219,0.8)] shrink-0" /> Roadmapping, customer research, and product metrics</li>
                <li className="flex items-start gap-2 text-sm text-muted/90"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shadow-[0_0_8px_rgba(0,184,219,0.8)] shrink-0" /> Operating cadence for product and delivery teams</li>
              </ul>
            </article>

            {/* BS */}
            <article className="glass-panel p-8 rounded-3xl border border-white/10 hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 text-accent font-mono font-bold flex items-center justify-center mb-6 text-xs tracking-wider">BS</div>
              <h3 className="text-xl font-bold text-text mb-3">Business Strategy</h3>
              <p className="text-sm text-muted/80 mb-6 min-h-[60px]">Improve organisational performance through strategic planning and execution.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-muted/90"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shadow-[0_0_8px_rgba(0,184,219,0.8)] shrink-0" /> Business models and competitive strategy</li>
                <li className="flex items-start gap-2 text-sm text-muted/90"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shadow-[0_0_8px_rgba(0,184,219,0.8)] shrink-0" /> Performance management and KPI design</li>
                <li className="flex items-start gap-2 text-sm text-muted/90"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shadow-[0_0_8px_rgba(0,184,219,0.8)] shrink-0" /> Operational excellence and execution rhythm</li>
              </ul>
            </article>

            {/* IN */}
            <article className="glass-panel p-8 rounded-3xl border border-white/10 hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 text-accent font-mono font-bold flex items-center justify-center mb-6 text-xs tracking-wider">IN</div>
              <h3 className="text-xl font-bold text-text mb-3">Innovation Workshops</h3>
              <p className="text-sm text-muted/80 mb-6 min-h-[60px]">Interactive sessions that help teams create better products, services, and processes.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-muted/90"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shadow-[0_0_8px_rgba(0,184,219,0.8)] shrink-0" /> Design thinking, innovation labs, and brainstorming</li>
                <li className="flex items-start gap-2 text-sm text-muted/90"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shadow-[0_0_8px_rgba(0,184,219,0.8)] shrink-0" /> Business model innovation and AI innovation sessions</li>
                <li className="flex items-start gap-2 text-sm text-muted/90"><div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shadow-[0_0_8px_rgba(0,184,219,0.8)] shrink-0" /> Action plans that turn ideas into implementation steps</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Bands: Delivery Formats & Who Should Attend */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel p-10 rounded-[28px] border border-white/10 shadow-2xl relative overflow-hidden bg-gradient-to-br from-white/[0.04] to-transparent">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[60px]" />
              <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4 relative z-10">Delivery Formats</div>
              <h2 className="text-3xl font-sans font-bold mb-8 relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-text to-muted">Choose the format that fits your organisation.</h2>
              <ul className="flex flex-wrap gap-3 relative z-10">
                {['On-site Training', 'Live Virtual Training', 'Hybrid Programs', 'Executive Workshops', 'Leadership Retreats', 'Multi-Day Bootcamps'].map((item, i) => (
                  <li key={i} className="inline-flex items-center px-4 py-2 border border-white/10 rounded-full bg-white/5 text-sm font-bold shadow-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-panel p-10 rounded-[28px] border border-white/10 shadow-2xl relative overflow-hidden bg-gradient-to-br from-white/[0.04] to-transparent">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-cool/10 rounded-full blur-[60px]" />
              <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4 relative z-10">Who Should Attend?</div>
              <h2 className="text-3xl font-sans font-bold mb-8 relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-text to-muted">Built for teams that shape decisions.</h2>
              <ul className="flex flex-wrap gap-3 relative z-10">
                {['Executives', 'Directors', 'Department Managers', 'Team Leaders', 'Engineers', 'Product Managers', 'HR Professionals', 'Business Analysts', 'University Leaders'].map((item, i) => (
                  <li key={i} className="inline-flex items-center px-4 py-2 border border-white/10 rounded-full bg-white/5 text-sm font-bold shadow-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Training Methodology */}
        <section className="mb-32">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-xl">
              <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4">Training Methodology</div>
              <h2 className="text-4xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-text to-muted">Interactive, practical, and immediately usable.</h2>
            </div>
            <p className="text-lg text-muted/90 max-w-sm">Every participant leaves with practical knowledge that can be implemented immediately.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="glass-panel p-8 rounded-3xl border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 text-accent font-mono font-bold flex items-center justify-center mb-6">01</div>
              <h3 className="text-2xl font-bold text-text mb-6">How sessions work</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-muted/90"><div className="w-2 h-2 rounded-full bg-accent mt-1.5 shadow-[0_0_8px_rgba(0,184,219,0.8)] shrink-0" /> Interactive presentations and live demonstrations</li>
                <li className="flex items-start gap-3 text-muted/90"><div className="w-2 h-2 rounded-full bg-accent mt-1.5 shadow-[0_0_8px_rgba(0,184,219,0.8)] shrink-0" /> Group discussions and hands-on exercises</li>
                <li className="flex items-start gap-3 text-muted/90"><div className="w-2 h-2 rounded-full bg-accent mt-1.5 shadow-[0_0_8px_rgba(0,184,219,0.8)] shrink-0" /> Real business case studies and team workshops</li>
                <li className="flex items-start gap-3 text-muted/90"><div className="w-2 h-2 rounded-full bg-accent mt-1.5 shadow-[0_0_8px_rgba(0,184,219,0.8)] shrink-0" /> Action plans for immediate implementation</li>
              </ul>
            </article>
            <article className="glass-panel p-8 rounded-3xl border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 text-accent font-mono font-bold flex items-center justify-center mb-6">02</div>
              <h3 className="text-2xl font-bold text-text mb-6">What makes SKKER different?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-muted/90"><div className="w-2 h-2 rounded-full bg-accent mt-1.5 shadow-[0_0_8px_rgba(0,184,219,0.8)] shrink-0" /> Business-first approach with AI integrated into every program</li>
                <li className="flex items-start gap-3 text-muted/90"><div className="w-2 h-2 rounded-full bg-accent mt-1.5 shadow-[0_0_8px_rgba(0,184,219,0.8)] shrink-0" /> Customized content and executive-level delivery</li>
                <li className="flex items-start gap-3 text-muted/90"><div className="w-2 h-2 rounded-full bg-accent mt-1.5 shadow-[0_0_8px_rgba(0,184,219,0.8)] shrink-0" /> Practical implementation and international best practices</li>
                <li className="flex items-start gap-3 text-muted/90"><div className="w-2 h-2 rounded-full bg-accent mt-1.5 shadow-[0_0_8px_rgba(0,184,219,0.8)] shrink-0" /> Measurable outcomes tied to business capability</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="mb-32">
          <div className="glass-panel p-10 rounded-[28px] border border-white/10 shadow-xl text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent pointer-events-none" />
             <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4 relative z-10">Industries We Serve</div>
             <h2 className="text-3xl font-sans font-bold mb-10 relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-text to-muted">Relevant across sectors, teams, and operating contexts.</h2>
             <ul className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto relative z-10">
                {['Higher Education', 'Government', 'Banking', 'Healthcare', 'Manufacturing', 'Retail', 'Telecommunications', 'Technology', 'Startups', 'NGOs'].map((item, i) => (
                  <li key={i} className="inline-flex items-center px-5 py-2.5 border border-white/10 rounded-full bg-white/5 text-sm font-bold shadow-sm hover:border-accent/30 hover:bg-white/10 transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
          </div>
        </section>

        {/* Process */}
        <section className="mb-32">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
             <div className="glass-panel p-6 min-h-[190px] border border-white/10 rounded-tl-2xl rounded-tr-2xl sm:rounded-tr-none lg:rounded-bl-2xl">
                <b className="block text-accent text-sm font-mono tracking-widest mb-6">01</b>
                <p className="text-lg font-bold text-text">We will review your requirements within 2-3 business days.</p>
             </div>
             <div className="glass-panel p-6 min-h-[190px] border border-white/10 sm:rounded-tr-2xl lg:rounded-tr-none">
                <b className="block text-accent text-sm font-mono tracking-widest mb-6">02</b>
                <p className="text-lg font-bold text-text">Discovery call to align on scope and timeline.</p>
             </div>
             <div className="glass-panel p-6 min-h-[190px] border border-white/10 sm:rounded-bl-2xl lg:rounded-bl-none">
                <b className="block text-accent text-sm font-mono tracking-widest mb-6">03</b>
                <p className="text-lg font-bold text-text">A tailored proposal will be sent to your email.</p>
             </div>
             <div className="glass-panel p-6 min-h-[190px] border border-white/10 rounded-bl-2xl rounded-br-2xl sm:rounded-bl-none">
                <b className="block text-accent text-sm font-mono tracking-widest mb-6">04</b>
                <p className="text-lg font-bold text-text">Proposal finalised and engagement begins.</p>
             </div>
           </div>
        </section>

        {/* Request Form */}
        <section id="request" className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sidebar Context */}
            <aside className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-accent/5 to-transparent">
              <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4">Lead Intake</div>
              <h3 className="text-3xl font-sans font-bold text-text mb-4">Request a corporate training proposal.</h3>
              <p className="text-muted/90 mb-8">This is a qualification and sales flow, not a scheduling system. Share enough context for SKKER to shape the right next step.</p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-mono font-bold">1</div>
                  <p className="text-sm text-muted/90 mt-2">Capture objectives, audience, and delivery needs.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-mono font-bold">2</div>
                  <p className="text-sm text-muted/90 mt-2">Stored securely as a corporate training lead.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-mono font-bold">3</div>
                  <p className="text-sm text-muted/90 mt-2">Confirmation email sent immediately.</p>
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
               <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Lead submitted in demo UI!"); }}>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-xs font-mono tracking-widest uppercase text-text font-bold">Full name</label>
                     <input type="text" placeholder="Your name" required className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-text placeholder:text-muted/50 outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-xs font-mono tracking-widest uppercase text-text font-bold">Email</label>
                     <input type="email" placeholder="you@company.com" required className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-text placeholder:text-muted/50 outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-xs font-mono tracking-widest uppercase text-text font-bold">Phone / WhatsApp</label>
                     <input type="text" placeholder="+60 ..." className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-text placeholder:text-muted/50 outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-xs font-mono tracking-widest uppercase text-text font-bold">Company</label>
                     <input type="text" placeholder="Company name" className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-text placeholder:text-muted/50 outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-xs font-mono tracking-widest uppercase text-text font-bold">Role</label>
                     <input type="text" placeholder="Your role" className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-text placeholder:text-muted/50 outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-xs font-mono tracking-widest uppercase text-text font-bold">Preferred Format</label>
                     <select className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-text outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all appearance-none">
                       <option value="" className="bg-surface text-text">Select format</option>
                       <option value="Online" className="bg-surface text-text">Online</option>
                       <option value="Offline" className="bg-surface text-text">Offline / in-person</option>
                       <option value="Hybrid" className="bg-surface text-text">Live hybrid</option>
                       <option value="Not sure" className="bg-surface text-text">Not sure yet</option>
                     </select>
                   </div>
                   <div className="space-y-2">
                     <label className="text-xs font-mono tracking-widest uppercase text-text font-bold">Timeline</label>
                     <input type="text" placeholder="e.g. Q3, next month, flexible" className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-text placeholder:text-muted/50 outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-xs font-mono tracking-widest uppercase text-text font-bold">Optional Budget</label>
                     <input type="text" placeholder="Optional range" className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-text placeholder:text-muted/50 outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all" />
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-xs font-mono tracking-widest uppercase text-text font-bold">Company context / audience</label>
                   <textarea placeholder="Team size, roles, departments, region, maturity level..." rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-text placeholder:text-muted/50 outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all resize-y" />
                 </div>
                 
                 <div className="space-y-2">
                   <label className="text-xs font-mono tracking-widest uppercase text-text font-bold">Training scope and objectives</label>
                   <textarea placeholder="What capability, behaviour, or operating problem should the training address?" rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-text placeholder:text-muted/50 outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all resize-y" />
                 </div>

                 <button type="submit" className="group relative inline-flex justify-center items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-cool rounded-xl text-white font-semibold shadow-[0_0_20px_rgba(0,184,219,0.3)] hover:shadow-[0_0_30px_rgba(0,184,219,0.5)] transition-all hover:-translate-y-0.5 w-full sm:w-auto mt-4">
                   <span>Submit Request &rarr;</span>
                 </button>
               </form>
            </div>
            
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
