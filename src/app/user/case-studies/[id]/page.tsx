'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { caseStudies } from '@/data/caseStudies';

export default function CaseStudyPage() {
  const { id } = useParams();
  const caseStudy = caseStudies.find(study => study.id === id);

  if (!caseStudy) {
    return (
      <main className="min-h-screen bg-page-bg text-text flex flex-col items-center justify-center">
        <Navbar />
        <h1 className="text-3xl font-serif text-heading-primary mb-4">Case Study Not Found</h1>
        <Link href="/user#work" className="text-accent hover:underline">Return to Home</Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-page-bg text-text font-sans flex flex-col">
      <Navbar />

      <article className="pt-40 pb-24 px-4 sm:px-6 max-w-[1000px] mx-auto flex-grow w-full">
        <Link 
          href="/user#work" 
          className="inline-flex items-center gap-2 text-muted hover:text-text text-[11px] font-mono uppercase tracking-widest mb-10 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Work
        </Link>

        <header className="mb-16">
          <div className="font-mono text-[11px] font-bold tracking-[0.15em] uppercase text-accent mb-6">
            {caseStudy.category} &middot; {caseStudy.location}
          </div>
          <h1 className="text-[40px] sm:text-[60px] font-serif font-bold text-heading-primary leading-tight tracking-tight mb-10">
            {caseStudy.title}
          </h1>

          <div className="w-full aspect-[21/9] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl relative mb-16">
            <img 
              src={caseStudy.thumbnailUrl} 
              alt={caseStudy.title} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-page-bg/50 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-10 border-y border-white/10 bg-card-bg rounded-3xl p-8">
            {caseStudy.metrics.map((metric, i) => (
              <div key={i} className="flex flex-col items-center sm:items-start">
                <span className="font-serif text-[40px] font-bold text-accent leading-none mb-2">{metric.value}</span>
                <span className="font-mono text-[10px] font-bold tracking-[0.15em] uppercase text-muted">{metric.label}</span>
              </div>
            ))}
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none text-muted leading-relaxed mb-20">
          <p className="text-xl text-heading-secondary mb-8 leading-relaxed font-medium">
            {caseStudy.content}
          </p>
          <p>
            At the start of the engagement, the client was facing significant headwinds in their operational model. Delivery cycles were stretching beyond acceptable margins, and cross-functional alignment was suffering due to fragmented systems.
          </p>
          <h2 className="text-2xl font-serif text-heading-primary mt-12 mb-6">The Approach</h2>
          <p>
            We implemented a structured evaluation of their delivery lifecycle, identifying key constraints in their decision matrices. By shifting from a push-based system to a pull-based Kanban flow, we allowed teams to visualize bottlenecks instantly.
          </p>
          <ul className="list-disc pl-6 space-y-4 my-8">
            <li><strong>Constraint Identification:</strong> Mapped the end-to-end value stream to find workflow blockages.</li>
            <li><strong>Governance Re-design:</strong> Stripped away heavy approval boards in favor of localized, high-trust authority.</li>
            <li><strong>Pilot & Scale:</strong> Tested the new operating model on two critical product lines before regional rollout.</li>
          </ul>
          <h2 className="text-2xl font-serif text-heading-primary mt-12 mb-6">The Result</h2>
          <p>
            Within six months, the organization saw the metrics highlighted above. More importantly, the cultural shift from output-focused delivery to outcome-focused value realization fundamentally changed how leadership interacts with product teams.
          </p>
        </div>
      </article>

      <Footer />
    </main>
  );
}
