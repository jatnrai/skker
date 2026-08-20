import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Link from 'next/link';
import { ArrowRight, Hexagon, Square, Circle, Triangle, BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text selection:bg-accent/30 flex flex-col relative overflow-hidden font-sans">
      <Navbar />
      
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Platform / Connected LMS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10" id="platform">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="inline-block px-3 py-1 bg-surface border border-border text-text text-xs font-bold tracking-widest uppercase mb-6 rounded-md shadow-sm">
              Connected LMS
            </div>
            <h2 className="text-4xl sm:text-5xl font-sans font-bold leading-tight mb-6 text-text">
              Move from the brand into the learning platform.
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8">
              The homepage now feeds directly into the SKKER LMS, so discovery, trust, enrollment, and access all live inside one connected experience.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { kicker: 'Access', title: 'Login to the LMS', copy: 'Return directly to your account, protected lessons, course access, and platform sessions.', link: 'Open login', href: '/user/login' },
              { kicker: 'Enrollment', title: 'Create a student account', copy: 'Move from visitor to learner with a clean sign-up flow inside the academy experience.', link: 'Open sign up', href: '/user/register' },
              { kicker: 'Catalog', title: 'Browse the course library', copy: 'Explore the live academy catalog, current programs, and the learning products available now.', link: 'Open courses', href: '/user/courses' },
              { kicker: 'Platform', title: 'Open the academy home', copy: 'Step into the LMS itself and move through the learning environment as part of the SKKER journey.', link: 'Open academy', href: '/user' },
            ].map((card, i) => (
              <a key={i} href={card.href} className="group bg-surface p-6 rounded-md border border-border hover:border-accent transition-all flex flex-col h-full shadow-sm">
                <div className="text-accent text-[10px] font-bold tracking-widest uppercase mb-2">{card.kicker}</div>
                <h3 className="text-xl font-bold text-text mb-3">{card.title}</h3>
                <p className="text-sm text-muted mb-6 flex-grow">{card.copy}</p>
                <div className="text-xs font-bold uppercase tracking-widest text-accent transition-colors inline-flex items-center gap-1 mt-auto">
                  {card.link} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Story */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full text-center relative z-10 border-t border-border">
        <div className="text-accent text-xs font-bold tracking-widest uppercase mb-8">Pause. Read the signal.</div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-text leading-tight max-w-4xl mx-auto">
          "Scale is never accidental. It is designed, measured, and rewritten before complexity turns against you."
        </h2>
      </section>

      {/* 4. 01 - Authority & Positioning */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10" id="about">
        <div className="text-accent text-xs font-bold tracking-widest uppercase mb-4">01 - Authority & Positioning</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-4xl sm:text-5xl font-sans font-bold leading-tight mb-6">
              The thinking behind systems that endure.
            </h2>
          </div>
          <div>
            <p className="text-lg text-muted leading-relaxed mb-6">
              SK Ker is a strategic consultant and systems architect with deep expertise in product management, organizational design, AI strategy, and Kanban-based flow systems - operating at the intersection of executive leadership and operational precision.
            </p>
            <div className="flex flex-wrap gap-2">
              {['AI Strategy', 'Product Management', 'Kanban Systems', 'Org Design', 'Flow Optimization', 'Executive Advisory', 'Digital Transformation'].map((chip, i) => (
                <span key={i} className="px-3 py-1 rounded-md border border-border bg-surface text-xs font-bold text-text">{chip}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Hexagon, title: 'Systems Thinking', desc: 'Diagnosing complexity and designing structures that simplify execution, accelerate delivery, and align teams to outcomes.' },
            { icon: Square, title: 'AI Evangelism', desc: 'Translating AI capability into organizational strategy - from readiness assessments to embedded adoption roadmaps.' },
            { icon: Circle, title: 'Product Leadership', desc: 'Building product cultures and management frameworks that produce coherent, customer-led outcomes at scale.' },
            { icon: Triangle, title: 'Org Architecture', desc: 'Designing team structures, governance models, and operating rhythms that match organizational ambition to execution reality.' },
          ].map((card, i) => (
            <div key={i} className="bg-surface p-8 rounded-md border border-border shadow-sm">
              <div className="w-12 h-12 rounded-md bg-bg border border-border flex items-center justify-center text-text mb-6">
                <card.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">{card.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 02 - Capabilities */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10 border-t border-border" id="capabilities">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 sticky top-32 h-fit">
            <div className="text-accent text-xs font-bold tracking-widest uppercase mb-4">02 - Capabilities</div>
            <h2 className="text-4xl sm:text-5xl font-sans font-bold leading-tight mb-6">
              Where I operate.
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8">
              A focused range of consulting capabilities, each grounded in direct experience and applied across industries, geographies, and scales.
            </p>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-4">
            {[
              { num: '01', title: 'Strategic Consulting', desc: 'Translating ambiguous executive mandates into structured, executable strategy. From organizational audits to transformation blueprints.' },
              { num: '02', title: 'Systems Design', desc: 'Architecting workflow systems, operating models, and delivery frameworks that scale without losing coherence.' },
              { num: '03', title: 'AI Strategy', desc: 'Building AI readiness, governing adoption risk, and integrating intelligent tools into organizational DNA - not just workflows.' },
              { num: '04', title: 'Product Leadership', desc: 'Establishing product management disciplines, hiring frameworks, and delivery cultures that consistently produce results.' },
              { num: '05', title: 'Org Transformation', desc: 'Guiding teams through structural redesign, cultural change, and operating model transitions with clarity and confidence.' },
              { num: '06', title: 'Executive Advisory', desc: 'A trusted thinking partner for CEOs, CPOs, and leadership teams navigating inflection points, decisions, and organizational risk.' },
            ].map((cap, i) => (
              <div key={i} className="group bg-surface p-6 sm:p-8 rounded-md border border-border hover:border-accent transition-all shadow-sm flex flex-col sm:flex-row gap-6 sm:items-center">
                <div className="text-text text-2xl font-bold shrink-0">{cap.num}</div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors">{cap.title}</h3>
                  <p className="text-sm text-muted">{cap.desc}</p>
                </div>
                <div className="shrink-0 hidden sm:block opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all">
                  <ArrowRight size={20} className="text-accent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 03 - Selected Work */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10 border-t border-border" id="work">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-16">
          <div>
            <div className="text-accent text-xs font-bold tracking-widest uppercase mb-4">03 - Selected Work</div>
            <h2 className="text-4xl sm:text-5xl font-sans font-bold leading-tight">
              Proof in practice.
            </h2>
          </div>
          <a href="/user/case-studies" className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border bg-surface text-sm font-bold uppercase tracking-widest text-text hover:bg-bg transition-colors shadow-sm">
            All Case Studies <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { tag: 'Financial Services - Malaysia', title: 'Rebuilding the Product Operating Model for a Regional Bank', metrics: [{ v: '68%', l: 'Faster delivery' }, { v: '8', l: 'Units aligned' }, { v: '12mo', l: 'Transformation' }] },
            { tag: 'Technology - Singapore', title: 'AI Adoption Strategy for a Mid-Market SaaS Company', metrics: [{ v: '4x', l: 'Team velocity' }, { v: '3', l: 'AI pilots launched' }] },
            { tag: 'Manufacturing - Regional APAC', title: 'Kanban Flow System Implementation Across 5 Plants', metrics: [{ v: '42%', l: 'Lead time reduction' }, { v: '5', l: 'Plants transformed' }] },
          ].map((work, i) => (
            <a key={i} href="/user/case-studies" className="group bg-surface p-8 rounded-md border border-border hover:border-accent transition-all shadow-sm flex flex-col h-full">
              <div className="text-[10px] font-bold tracking-widest uppercase text-muted mb-4">{work.tag}</div>
              <h3 className="text-xl font-bold text-text mb-8 flex-grow group-hover:text-accent transition-colors">{work.title}</h3>
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                {work.metrics.map((m, mi) => (
                  <div key={mi}>
                    <div className="text-xl font-bold text-text mb-1">{m.v}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted">{m.l}</div>
                  </div>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 7. 04 - Professional Journey */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10 border-t border-border" id="journey">
        <div className="text-accent text-xs font-bold tracking-widest uppercase mb-4">04 - Professional Journey</div>
        <h2 className="text-4xl sm:text-5xl font-sans font-bold leading-tight mb-16">
          A career built deliberately.
        </h2>

        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-border">
          {[
            { date: '2022 - Present', role: 'Founder & Principal Consultant', org: 'skker.com - Independent Practice', desc: 'Building a global consulting practice focused on systems architecture, AI strategy, and organizational transformation.', active: true },
            { date: '2018 - 2022', role: 'Head of Product Management', org: 'Enterprise Technology Firm - Kuala Lumpur', desc: 'Led product management discipline across 6 product lines. Established delivery governance, OKR alignment, and portfolio planning.' },
            { date: '2014 - 2018', role: 'Senior Agile & Kanban Consultant', org: 'Regional Consulting Practice - APAC', desc: 'Delivered Kanban and systems thinking engagements across Southeast Asia. Trained 500+ practitioners across multiple industries.' },
            { date: '2008 - 2014', role: 'Product & Technology Leadership', org: 'Multiple Roles - Financial Services & Technology', desc: 'Progressive leadership roles spanning product development, platform architecture, and cross-functional delivery management.' },
          ].map((item, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border ${item.active ? 'border-accent bg-accent text-white' : 'border-border bg-surface text-muted'} shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-sm`}>
                <div className={`w-3 h-3 rounded-full ${item.active ? 'bg-white' : 'bg-muted'}`}></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface p-8 rounded-md border border-border group-hover:border-accent transition-colors shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h3 className="font-bold text-xl text-text">{item.role}</h3>
                  <span className="text-xs text-accent font-bold uppercase tracking-widest">{item.date}</span>
                </div>
                <div className="text-sm font-bold text-muted mb-4 uppercase tracking-widest">{item.org}</div>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Spotlight */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center relative z-10 border-t border-border">
        <div className="text-accent text-xs font-bold tracking-widest uppercase mb-8">Keep scrolling</div>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold text-text leading-tight max-w-5xl mx-auto tracking-tight">
          Strategy must move before complexity does.
        </h2>
      </section>

      {/* 9. 05 - Coaching & Mentoring */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10 border-t border-border" id="coaching">
        <div className="text-accent text-xs font-bold tracking-widest uppercase mb-4">05 - Coaching & Mentoring</div>
        <h2 className="text-4xl sm:text-5xl font-sans font-bold leading-tight mb-6">
          For those who think seriously about growth.
        </h2>
        <p className="text-lg text-muted leading-relaxed mb-16 max-w-2xl">
          Not another consultant with a framework to sell - a trusted thinking partner for leaders at genuine inflection points.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            { type: 'Executive Mentoring', name: 'Strategic Leadership Coaching', sub: 'For senior leaders who need a real thinking partner.', points: ['Clarity on leadership identity and positioning', 'Strategic decision-making under uncertainty', 'Executive presence and organizational influence', 'Long-term career architecture'] },
            { type: 'Systems Coaching', name: 'Product & Systems Mastery', sub: 'Elevate from task management to systems thinking.', points: ['Product strategy and portfolio thinking', 'Kanban and flow system design', 'Stakeholder alignment and influence', 'Moving from PM to product leader'] },
            { type: 'AI Readiness', name: 'AI Strategy for Leaders', sub: 'Separate signal from noise. Build a real roadmap.', points: ['Personal AI fluency and literacy', 'Organizational AI readiness assessment', 'Tool selection and governance thinking', 'Building an AI-forward leadership stance'] },
          ].map((coach, i) => (
            <div key={i} className="bg-surface p-8 rounded-md border border-border shadow-sm flex flex-col">
              <div className="text-[10px] font-bold tracking-widest uppercase text-muted mb-4">{coach.type}</div>
              <h3 className="text-2xl font-bold text-text mb-3">{coach.name}</h3>
              <p className="text-sm text-muted mb-8">{coach.sub}</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {coach.points.map((p, pi) => (
                  <li key={pi} className="flex items-start gap-3 text-sm text-text">
                    <div className="w-1.5 h-1.5 rounded-full bg-text mt-2 shrink-0"></div>
                    {p}
                  </li>
                ))}
              </ul>
              <a href="/academy/home/book_session" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent hover:text-[#401b9c] transition-colors mt-auto">
                Book a Session <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 10. 06 - Courses & Learning */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10 border-t border-border" id="courses">
        <div className="bg-surface rounded-md border border-border shadow-sm p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <div className="text-accent text-xs font-bold tracking-widest uppercase mb-4">06 - Courses & Learning</div>
            <h2 className="text-4xl sm:text-5xl font-sans font-bold leading-tight mb-6 text-text">
              Knowledge, structured for application.
            </h2>
          </div>
          
          <div className="relative z-10 shrink-0">
            <a href="/user/courses" className="group relative inline-flex items-center gap-2 px-8 py-5 bg-accent border border-accent rounded-md text-white font-bold uppercase tracking-widest text-sm hover:bg-[#401b9c] hover:border-[#401b9c] transition-all shadow-sm">
              <BookOpen size={18} />
              <span>Open Course Library</span>
            </a>
          </div>
        </div>
      </section>

      {/* 11. 07 - Insights */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10 border-t border-border" id="insights">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          <div>
            <div className="text-accent text-xs font-bold tracking-widest uppercase mb-4">07 - Insights</div>
            <h2 className="text-4xl sm:text-5xl font-sans font-bold leading-tight">
              Thinking out loud.
            </h2>
          </div>
          <a href="/user/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border bg-surface text-sm font-bold uppercase tracking-widest text-text hover:bg-bg transition-colors shadow-sm">
            All Insights <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* 12. Contact / Work Together */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10 border-t border-border text-center" id="contact">
        <div className="max-w-3xl mx-auto">
          <div className="text-accent text-xs font-bold tracking-widest uppercase mb-4">Work Together</div>
          <h2 className="text-5xl sm:text-6xl font-sans font-bold leading-tight mb-8">
            The right conversation changes everything.
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-12">
            Whether you are navigating a strategic inflection point, building a team, or rethinking how your organization operates - let us find out if we are the right fit.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="/academy/home/book_session" className="group relative inline-flex items-center gap-2 px-8 py-4 bg-accent rounded-md text-white font-bold shadow-sm hover:bg-[#401b9c] transition-colors">
              <span>Book a Strategy Session</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="mailto:hello@skker.com" className="group inline-flex items-center gap-2 px-8 py-4 rounded-md text-text border border-border bg-surface hover:bg-bg transition-colors font-bold shadow-sm">
              <span>Send an Inquiry</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
