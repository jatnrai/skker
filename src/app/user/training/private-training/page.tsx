'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import TrainingPaths from '../components/TrainingPaths';
import TrainingWorkflow from '../components/TrainingWorkflow';

export default function PrivateTrainingPage() {
  return (
    <main className="min-h-screen bg-page font-sans relative overflow-hidden text-text">
      <Navbar />
      
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-[1400px] mx-auto w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center mb-40 mt-6">
            <div className="flex flex-col gap-6 max-w-[650px]">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/10 w-fit mb-2">
                <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(0,184,219,0.8)]" />
                <span className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-accent">Private Training</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-heading leading-[1.05] tracking-tight">
                Personalised paths for <br />
                <em className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-cool italic font-serif">focused growth.</em>
              </h1>
              
              <p className="text-[17px] sm:text-[18px] text-muted/90 leading-relaxed font-sans pr-12 mt-2">
                Premium individual training for people who want a customised path instead of a public group class. Tailor the scope, pacing, and context to your unique goals.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <a href="#lead-intake" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent to-accent-cool text-page rounded-full font-mono text-[13px] font-bold tracking-[0.1em] uppercase transition-all gap-2 group shadow-[0_12px_28px_rgba(0,184,219,0.28)] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,184,219,0.38)]">
                  Request Proposal <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="w-full flex justify-end">
              <div className="bg-gradient-to-br from-white/10 to-transparent p-[1px] rounded-[36px] w-full max-w-[500px] shadow-2xl">
                <div className="relative w-full aspect-square rounded-[36px] overflow-hidden border border-border group">
                  <div className="absolute inset-0 bg-gradient-to-t from-section/40 to-transparent z-10 pointer-events-none" />
                  <img 
                    src="/assets/images/training/private-training.png" 
                    alt="Private Training" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

          <TrainingPaths exclude="private-training" />

          <div id="workflow">
            <TrainingWorkflow />
          </div>

          {/* Lead Intake Form */}
          <section id="lead-intake" className="mt-40 mb-32 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 scroll-mt-32">
            {/* Left: Lead Intake Info */}
            <div className="surface-gradient border border-accent/20 rounded-3xl p-12 shadow-lg h-fit sticky top-32">
              <div className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-accent mb-6">
                Lead Intake
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-heading leading-tight mb-8">
                Request a private training proposal.
              </h2>
              <p className="text-[16px] text-muted/90 leading-relaxed mb-12">
                This is a qualification and sales flow, not a scheduling system. Share enough context for SKKER to shape the right next step.
              </p>
              
              <div className="space-y-8">
                {[
                  'Capture objectives, audience, and delivery needs.',
                  'Stored in the SKKER CRM as a private training lead.',
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
                    <input type="text" placeholder="Your name" className="bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Work Email</label>
                    <input type="email" placeholder="you@company.com" className="bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm" />
                  </div>
                </div>
                
                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Phone / Whatsapp</label>
                    <input type="text" placeholder="+60 ..." className="bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Company</label>
                    <input type="text" placeholder="Company name" className="bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm" />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Job Title / Role</label>
                    <input type="text" placeholder="Your role" className="bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Type of Request</label>
                    <select className="bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading focus:outline-none focus:border-accent/50 transition-colors shadow-sm appearance-none">
                      <option>Private Coaching</option>
                      <option>Corporate Training</option>
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
                        <div className="w-5 h-5 rounded-md border border-border bg-surface group-hover:border-accent/50 transition-colors flex items-center justify-center shrink-0">
                          <div className="w-2.5 h-2.5 rounded-sm bg-accent opacity-0 group-hover:opacity-20 transition-opacity" />
                        </div>
                        <span className="font-mono text-[12px] font-bold tracking-[0.1em] text-muted/80 group-hover:text-heading transition-colors uppercase pt-0.5">{topic}</span>
                      </label>
                    ))}
                  </div>
                  <input type="text" placeholder="If Custom, briefly describe the topic" className="bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm mt-3" />
                </div>

                {/* Objective */}
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Objective / Problem Statement</label>
                  <textarea rows={5} placeholder="What capability, behaviour, or operating problem should the training address?" className="bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm resize-none" />
                </div>

                {/* Industry & Size */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Industry</label>
                    <input type="text" placeholder="e.g. Financial Services, Technology" className="bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Company Size</label>
                    <select className="bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading focus:outline-none focus:border-accent/50 transition-colors shadow-sm appearance-none text-muted/50">
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
                    <input type="text" placeholder="e.g. 1 (Private Coaching)" className="bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-5 -mt-3">
                  <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Target Audience</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-5 gap-x-4">
                    {['Executives', 'Managers', 'Engineers', 'Cross-Functional Teams'].map((topic, i) => (
                      <label key={i} className="flex items-center gap-3 cursor-pointer group w-fit">
                        <div className="w-5 h-5 rounded-md border border-border bg-surface group-hover:border-accent/50 transition-colors flex items-center justify-center shrink-0">
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
                    <select className="bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading focus:outline-none focus:border-accent/50 transition-colors shadow-sm appearance-none text-muted/50">
                      <option>Select format</option>
                      <option>Virtual</option>
                      <option>In-Person</option>
                      <option>Hybrid</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Location</label>
                    <input type="text" placeholder="City / country, if on-site or hybrid" className="bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors shadow-sm" />
                  </div>
                </div>

                {/* Timeline & Duration */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Timeline</label>
                    <select className="bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading focus:outline-none focus:border-accent/50 transition-colors shadow-sm appearance-none text-muted/50">
                      <option>Select...</option>
                      <option>Asap</option>
                      <option>Within 1-3 Months</option>
                      <option>Future Planning</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Duration</label>
                    <select className="bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading focus:outline-none focus:border-accent/50 transition-colors shadow-sm appearance-none text-muted/50">
                      <option>Select...</option>
                      <option>Hourly</option>
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
                    <select className="bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading focus:outline-none focus:border-accent/50 transition-colors shadow-sm appearance-none">
                      <option>Prefer not to say</option>
                      <option>&lt; $5k</option>
                      <option>$5k - $15k</option>
                      <option>&gt; $15k</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-muted/90">Have you done similar training before?</label>
                    <select className="bg-surface border border-border rounded-xl px-5 py-4 text-[15px] text-heading focus:outline-none focus:border-accent/50 transition-colors shadow-sm appearance-none text-muted/50">
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
                  <div className="bg-surface border border-border rounded-xl px-5 py-3 flex items-center gap-4 shadow-sm">
                    <label className="px-4 py-2 bg-white/10 hover:bg-white/15 text-[14px] font-medium text-heading rounded-lg cursor-pointer transition-colors border border-white/5 shadow-sm">
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
      </div>
      <Footer />
    </main>
  );
}
