'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ArrowRight, Users, Briefcase, FileText } from 'lucide-react';
import Link from 'next/link';

export default function CorporateTrainingPage() {
  return (
    <main className="min-h-screen bg-page font-sans relative overflow-hidden">
      <Navbar />
      
      <div className="pt-40 pb-24 px-4 sm:px-6 relative z-10">
        <div className="max-w-[1200px] mx-auto w-full">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
            <div className="flex flex-col">
              <div className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-accent opacity-80 mb-6">
                Corporate Training
              </div>
              
              <h1 className="text-[48px] sm:text-[60px] lg:text-[75px] font-serif font-bold text-heading leading-[1] tracking-[-0.03em] mb-6">
                Equip your team to <br />
                <em className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-cool italic font-serif">deliver impact.</em>
              </h1>
              
              <p className="text-[15px] text-muted/90 leading-[1.8] font-sans max-w-[500px] mb-10">
                B2B training and consulting-style delivery for teams, departments, and organisations. Align on scope, context, and timeline to solve complex workflow challenges.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#workflow" className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-accent to-accent-cool rounded-[100px] text-page font-mono text-[11px] font-bold tracking-[0.1em] uppercase shadow-[0_0_20px_rgba(0,184,219,0.2)] hover:shadow-[0_0_30px_rgba(0,184,219,0.4)] transition-all hover:-translate-y-0.5">
                  View Workflow
                </a>
              </div>
            </div>

            <div className="w-full flex justify-end">
              <div className="relative w-full max-w-[500px] aspect-square rounded-[32px] overflow-hidden border border-border shadow-[0_30px_80px_rgba(0,0,0,0.5)] group">
                <div className="absolute inset-0 bg-gradient-to-t from-section/40 to-transparent z-10 pointer-events-none" />
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=84" 
                  alt="Corporate team collaboration" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          <section id="workflow" className="mb-32">
            <div className="bg-section/80 backdrop-blur-[20px] border border-border rounded-[32px] p-10 sm:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
              
              <h2 className="text-[32px] sm:text-[40px] font-serif font-bold text-heading mb-10">
                From requirement to proposal.
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { num: '01', title: 'Review Requirements', desc: 'We review your goals within 2-3 business days.' },
                  { num: '02', title: 'Discovery Call', desc: 'Align on scope, audience, context, and timeline.' },
                  { num: '03', title: 'Tailored Proposal', desc: 'A proposal is sent to your email for review.' },
                  { num: '04', title: 'Engagement Begins', desc: 'Proposal finalised, delivery rhythm agreed.' }
                ].map((step, index) => (
                  <div key={index} className="bg-white/[0.03] border border-border rounded-[20px] p-6 hover:bg-white/[0.05] transition-colors flex flex-col h-full">
                    <span className="font-mono text-[10px] font-bold tracking-[0.15em] text-accent mb-4 block">
                      {step.num}
                    </span>
                    <strong className="text-[16px] text-heading font-medium leading-[1.3] mb-3">
                      {step.title}
                    </strong>
                    <p className="text-[13px] text-muted/80 leading-[1.6] mt-auto">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-24 rounded-[32px] p-10 sm:p-16 bg-gradient-to-br from-accent/10 to-section border border-accent/20 text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-serif text-[36px] sm:text-[44px] font-bold text-heading mb-6">Ready to upgrade your team?</h2>
              <p className="text-[15px] text-muted/90 max-w-[600px] mx-auto mb-10">
                Submit a request through our corporate proposal form to initiate the discovery process.
              </p>
              <Link 
                href="/academy/page/corporate-training" 
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white/5 border border-border hover:border-accent/40 rounded-full text-heading font-mono text-[11px] font-bold tracking-[0.1em] uppercase hover:bg-white/10 transition-all hover:text-accent gap-3"
              >
                Submit Proposal Request <ArrowRight size={14} />
              </Link>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}
