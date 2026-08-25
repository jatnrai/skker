'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addLead } from '@/store/slices/adminSlice';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CorporateTrainingPage() {
  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    requestType: 'Corporate Training',
    topics: [] as string[],
    customTopic: '',
    objective: '',
    industry: '',
    companySize: '',
    participants: '',
    targetAudience: [] as string[],
    format: '',
    location: '',
    timeline: '',
    duration: '',
    budget: '',
    similarTraining: '',
    pastIssues: '',
    notes: '',
    consent: false
  });

  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [reference, setReference] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTopicToggle = (topic: string) => {
    setFormData(prev => ({
      ...prev,
      topics: prev.topics.includes(topic) ? prev.topics.filter(t => t !== topic) : [...prev.topics, topic]
    }));
  };

  const handleAudienceToggle = (aud: string) => {
    setFormData(prev => ({
      ...prev,
      targetAudience: prev.targetAudience.includes(aud) ? prev.targetAudience.filter(a => a !== aud) : [...prev.targetAudience, aud]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    
    if (formData.topics.length === 0) {
      setFormError('Please select at least one training topic.');
      return;
    }
    if (formData.targetAudience.length === 0) {
      setFormError('Please select at least one target audience.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API delay
    setTimeout(() => {
      const ref = `CT-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
      
      // Dispatch to Redux store
      dispatch(addLead({
        id: ref,
        company: formData.company,
        contact: formData.name,
        email: formData.email,
        topic: formData.topics.join(', '),
        timeline: formData.timeline,
        value: formData.budget || 'Not specified',
        status: 'New',
        date: 'Just now'
      }));

      setReference(ref);
      setIsSuccess(true);
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: '', email: '', phone: '', company: '', jobTitle: '', requestType: 'Corporate Training',
        topics: [], customTopic: '', objective: '', industry: '', companySize: '', participants: '',
        targetAudience: [], format: '', location: '', timeline: '', duration: '', budget: '',
        similarTraining: '', pastIssues: '', notes: '', consent: false
      });
    }, 1200);
  };

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
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-heading mb-4">Request Received</h3>
                <p className="text-[16px] text-muted/80 max-w-[400px] mb-8">
                  Your enquiry reference is <span className="font-mono text-accent">{reference}</span>. We will review your requirements and respond within 2-3 business days.
                </p>
                <div className="flex flex-col gap-4 w-full max-w-[300px]">
                  <Link href="/academy/home/book_session" className="flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent-cool text-page rounded-full px-6 py-4 font-bold text-[14px] font-mono tracking-[0.1em] uppercase hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(0,184,219,0.3)] transition-all">
                    Book Discovery Call
                  </Link>
                  <button onClick={() => setIsSuccess(false)} className="text-muted hover:text-heading text-sm font-medium transition-colors">
                    Submit another request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                {formError && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm font-medium">
                    {formError}
                  </div>
                )}
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Full Name *</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your name" className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Work Email *</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="you@company.com" className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm" />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Phone / Whatsapp</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+60 ..." className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Company *</label>
                    <input required type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="Company name" className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm" />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Job Title / Role *</label>
                    <input required type="text" name="jobTitle" value={formData.jobTitle} onChange={handleInputChange} placeholder="Your role" className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Type of Request *</label>
                    <select name="requestType" value={formData.requestType} onChange={handleInputChange} className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading focus:outline-none focus:border-accent/50 transition-colors shadow-sm appearance-none">
                      <option>Corporate Training</option>
                      <option>Workshop</option>
                      <option>Coaching</option>
                      <option>Consulting</option>
                    </select>
                  </div>
                </div>

                {/* Training Topics */}
                <div className="flex flex-col gap-5">
                  <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Training Topics *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-5 gap-x-4">
                    {['AI Strategy', 'Product Management', 'Kanban & Flow', 'Org Design', 'Custom'].map((topic, i) => (
                      <label key={i} className="flex items-center gap-3 cursor-pointer group w-fit">
                        <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors ${formData.topics.includes(topic) ? 'border-accent bg-accent/10' : 'border-border bg-page dark:bg-surface group-hover:border-accent/50'}`}>
                          <input type="checkbox" className="hidden" checked={formData.topics.includes(topic)} onChange={() => handleTopicToggle(topic)} />
                          <div className={`w-2.5 h-2.5 rounded-sm bg-accent transition-opacity ${formData.topics.includes(topic) ? 'opacity-100' : 'opacity-0 group-hover:opacity-20'}`} />
                        </div>
                        <span className="font-mono text-[12px] font-bold tracking-[0.1em] text-muted/80 group-hover:text-heading transition-colors uppercase pt-0.5">{topic}</span>
                      </label>
                    ))}
                  </div>
                  {formData.topics.includes('Custom') && (
                    <input type="text" name="customTopic" value={formData.customTopic} onChange={handleInputChange} placeholder="Briefly describe the custom topic" className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm mt-3" />
                  )}
                </div>

                {/* Objective */}
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Objective / Problem Statement *</label>
                  <textarea required name="objective" value={formData.objective} onChange={handleInputChange} rows={5} placeholder="What capability, behaviour, or operating problem should the training address?" className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm resize-none" />
                </div>

                {/* Industry & Size */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Industry *</label>
                    <input required type="text" name="industry" value={formData.industry} onChange={handleInputChange} placeholder="e.g. Financial Services, Technology" className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Company Size *</label>
                    <select required name="companySize" value={formData.companySize} onChange={handleInputChange} className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading focus:outline-none focus:border-accent/50 transition-colors shadow-sm appearance-none">
                      <option value="">Select...</option>
                      <option>1-50</option>
                      <option>51-200</option>
                      <option>201-1000</option>
                      <option>1000+</option>
                    </select>
                  </div>
                </div>

                {/* Participants & Target Audience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Number of Participants *</label>
                    <input required type="text" name="participants" value={formData.participants} onChange={handleInputChange} placeholder="e.g. 15-20" className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm" />
                  </div>
                </div>

                <div className="flex flex-col gap-5 -mt-3">
                  <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Target Audience *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-5 gap-x-4">
                    {['Executives', 'Managers', 'Engineers', 'Cross-Functional Teams'].map((topic, i) => (
                      <label key={i} className="flex items-center gap-3 cursor-pointer group w-fit">
                        <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors ${formData.targetAudience.includes(topic) ? 'border-accent bg-accent/10' : 'border-border bg-page dark:bg-surface group-hover:border-accent/50'}`}>
                          <input type="checkbox" className="hidden" checked={formData.targetAudience.includes(topic)} onChange={() => handleAudienceToggle(topic)} />
                          <div className={`w-2.5 h-2.5 rounded-sm bg-accent transition-opacity ${formData.targetAudience.includes(topic) ? 'opacity-100' : 'opacity-0 group-hover:opacity-20'}`} />
                        </div>
                        <span className="font-mono text-[12px] font-bold tracking-[0.1em] text-muted/80 group-hover:text-heading transition-colors uppercase pt-0.5">{topic}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Format & Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-3">
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Format *</label>
                    <select required name="format" value={formData.format} onChange={handleInputChange} className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading focus:outline-none focus:border-accent/50 transition-colors shadow-sm appearance-none">
                      <option value="">Select format</option>
                      <option>On-site</option>
                      <option>Virtual</option>
                      <option>Hybrid</option>
                    </select>
                  </div>
                  {(formData.format === 'On-site' || formData.format === 'Hybrid') && (
                    <div className="flex flex-col gap-3">
                      <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Location *</label>
                      <input required type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="City / country" className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm" />
                    </div>
                  )}
                </div>

                {/* Timeline & Duration */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Timeline *</label>
                    <select required name="timeline" value={formData.timeline} onChange={handleInputChange} className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading focus:outline-none focus:border-accent/50 transition-colors shadow-sm appearance-none">
                      <option value="">Select...</option>
                      <option>ASAP</option>
                      <option>1-3 months</option>
                      <option>3-6 months</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Duration *</label>
                    <select required name="duration" value={formData.duration} onChange={handleInputChange} className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading focus:outline-none focus:border-accent/50 transition-colors shadow-sm appearance-none">
                      <option value="">Select...</option>
                      <option>Half-day</option>
                      <option>1 day</option>
                      <option>Multi-day</option>
                      <option>Not sure</option>
                    </select>
                  </div>
                </div>

                {/* Budget & Similar Training */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Estimated Budget <span className="normal-case opacity-70 tracking-normal">(optional)</span></label>
                    <select name="budget" value={formData.budget} onChange={handleInputChange} className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading focus:outline-none focus:border-accent/50 transition-colors shadow-sm appearance-none">
                      <option value="">Not sure</option>
                      <option>&lt; RM10k</option>
                      <option>RM10k - 30k</option>
                      <option>RM30k - 80k</option>
                      <option>RM80k+</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Similar training before?</label>
                    <select name="similarTraining" value={formData.similarTraining} onChange={handleInputChange} className="bg-page dark:bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading focus:outline-none focus:border-accent/50 transition-colors shadow-sm appearance-none">
                      <option value="">Select...</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                {/* What didn't work previously */}
                {formData.similarTraining === 'Yes' && (
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">What didn't work previously?</label>
                    <textarea name="pastIssues" value={formData.pastIssues} onChange={handleInputChange} rows={3} placeholder="Optional — helps us avoid repeating the same gaps" className="bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm resize-none" />
                  </div>
                )}

                {/* Additional Notes */}
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Additional Notes</label>
                  <textarea name="notes" value={formData.notes} onChange={handleInputChange} rows={3} placeholder="Anything else that would help us shape the proposal?" className="bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm resize-none" />
                </div>

                {/* Consent & Submit */}
                <div className="flex flex-col gap-8 mt-8 border-t border-border pt-10">
                  <label className="flex items-center gap-4 cursor-pointer group w-fit">
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors ${formData.consent ? 'border-accent bg-accent/10' : 'border-border bg-surface group-hover:border-accent/50'}`}>
                      <input required type="checkbox" name="consent" checked={formData.consent} onChange={(e) => setFormData(prev => ({...prev, consent: e.target.checked}))} className="hidden" />
                      <div className={`w-2.5 h-2.5 rounded-sm bg-accent transition-opacity ${formData.consent ? 'opacity-100' : 'opacity-0 group-hover:opacity-20'}`} />
                    </div>
                    <span className="font-mono text-[12px] font-bold tracking-[0.1em] text-muted/90 group-hover:text-heading transition-colors uppercase pt-0.5">
                      I consent to Skker storing this information to prepare a proposal. <span className="text-accent ml-1">*</span>
                    </span>
                  </label>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-fit flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent-cool text-page rounded-full px-10 py-4 font-bold text-[14px] font-mono tracking-[0.1em] uppercase hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(0,184,219,0.3)] transition-all disabled:opacity-50 disabled:hover:-translate-y-0 disabled:hover:shadow-none"
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Proposal'} <ArrowRight size={18} className="-mr-1" />
                  </button>
                </div>

              </form>
            )}
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
