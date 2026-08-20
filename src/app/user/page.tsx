import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Link from 'next/link';
import { ArrowRight, Hexagon, Square, Circle, Triangle, BookOpen, PlayCircle } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen text-text selection:bg-accent/30 flex flex-col relative overflow-hidden font-sans bg-[url('/assets/images/noise.png')]">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMikiLz48L3N2Zz4=')]" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent-cool/10 rounded-full blur-[100px]" />
      </div>

      <Navbar />
      
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Platform / Connected LMS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10" id="platform">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent font-mono text-xs font-bold tracking-widest uppercase mb-6">
              Connected LMS
            </div>
            <h2 className="text-4xl sm:text-5xl font-sans font-bold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-text to-muted">
              Move from the brand into the learning platform.
            </h2>
            <p className="text-lg text-muted/90 leading-relaxed mb-8">
              The homepage now feeds directly into the SKKER LMS, so discovery, trust, enrollment, and access all live inside one connected experience.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { kicker: 'Access', title: 'Login to the LMS', copy: 'Return directly to your account, protected lessons, course access, and platform sessions.', link: 'Open login', href: '/user/login' },
              { kicker: 'Enrollment', title: 'Create a student account', copy: 'Move from visitor to learner with a clean sign-up flow inside the academy experience.', link: 'Open sign up', href: '/user/register' },
              { kicker: 'Catalog', title: 'Browse the course library', copy: 'Explore the live academy catalog, current programs, and the learning products available now.', link: 'Open courses', href: '/user/courses' },
              { kicker: 'Platform', title: 'Open the academy home', copy: 'Step into the LMS itself and move through the learning environment as part of the SKKER journey.', link: 'Open academy', href: '/user' },
            ].map((card, i) => (
              <Link key={i} href={card.href} className="group glass-panel p-8 rounded-3xl border border-white/10 hover:border-accent/30 transition-all flex flex-col h-full hover:-translate-y-1">
                <div className="text-accent text-[10px] font-mono tracking-widest uppercase mb-3">{card.kicker}</div>
                <h3 className="text-xl font-bold text-text mb-3 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">{card.title}</h3>
                <p className="text-sm text-muted/80 mb-6 flex-grow">{card.copy}</p>
                <div className="text-xs font-bold uppercase tracking-widest text-accent group-hover:text-accent-cool transition-colors inline-flex items-center gap-1 mt-auto">
                  {card.link} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Story */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full text-center relative z-10">
        <div className="text-accent text-xs font-mono tracking-widest uppercase mb-8">Pause. Read the signal.</div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-text to-muted leading-tight max-w-4xl mx-auto">
          "Scale is never accidental. It is designed, measured, and rewritten before complexity turns against you."
        </h2>
      </section>

      {/* 4. 01 - Authority & Positioning */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10" id="about">
        <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4">01 - Authority & Positioning</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-4xl sm:text-5xl font-sans font-bold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-text to-muted">
              The thinking behind systems that endure.
            </h2>
          </div>
          <div>
            <p className="text-lg text-muted/90 leading-relaxed mb-6">
              SK Ker is a strategic consultant and systems architect with deep expertise in product management, organizational design, AI strategy, and Kanban-based flow systems - operating at the intersection of executive leadership and operational precision.
            </p>
            <div className="flex flex-wrap gap-2">
              {['AI Strategy', 'Product Management', 'Kanban Systems', 'Org Design', 'Flow Optimization', 'Executive Advisory', 'Digital Transformation'].map((chip, i) => (
                <span key={i} className="px-4 py-1.5 rounded-full border border-white/10 glass-panel text-xs font-bold text-text">{chip}</span>
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
            <div key={i} className="glass-panel p-8 rounded-3xl border border-white/10 relative group">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent/10 transition-colors">
                <card.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">{card.title}</h3>
              <p className="text-sm text-muted/80 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 02 - Capabilities */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10" id="capabilities">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 sticky top-32 h-fit">
            <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4">02 - Capabilities</div>
            <h2 className="text-4xl sm:text-5xl font-sans font-bold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-text to-muted">
              Where I operate.
            </h2>
            <p className="text-lg text-muted/90 leading-relaxed mb-8">
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
              <div key={i} className="group glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-accent/30 transition-all flex flex-col sm:flex-row gap-6 sm:items-center hover:-translate-y-1 cursor-default">
                <div className="text-accent text-2xl font-mono font-bold shrink-0 opacity-50">{cap.num}</div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors">{cap.title}</h3>
                  <p className="text-sm text-muted/80">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 03 - Selected Work */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10" id="work">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-16">
          <div>
            <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4">03 - Selected Work</div>
            <h2 className="text-4xl sm:text-5xl font-sans font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-text to-muted">
              Proof in practice.
            </h2>
          </div>
          <Link href="/user/case-studies" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 glass-panel text-sm font-bold uppercase tracking-widest text-text hover:bg-white/10 transition-colors">
            All Case Studies <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { tag: 'Financial Services', title: 'Rebuilding the Product Operating Model for a Regional Bank', metrics: [{ v: '68%', l: 'Faster delivery' }, { v: '12mo', l: 'Transformation' }] },
            { tag: 'Technology', title: 'AI Adoption Strategy for a Mid-Market SaaS Company', metrics: [{ v: '4x', l: 'Team velocity' }, { v: '3', l: 'AI pilots' }] },
            { tag: 'Manufacturing', title: 'Kanban Flow System Implementation Across 5 Plants', metrics: [{ v: '42%', l: 'Lead time reduction' }, { v: '5', l: 'Plants' }] },
          ].map((work, i) => (
            <Link key={i} href="/user/case-studies" className="group glass-panel p-8 rounded-3xl border border-white/10 hover:border-accent/30 transition-all flex flex-col h-full hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all" />
              <div className="text-[10px] font-mono tracking-widest uppercase text-accent mb-4 relative z-10">{work.tag}</div>
              <h3 className="text-xl font-bold text-text mb-8 flex-grow group-hover:text-accent transition-colors relative z-10">{work.title}</h3>
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10 relative z-10">
                {work.metrics.map((m, mi) => (
                  <div key={mi}>
                    <div className="text-xl font-bold text-text mb-1 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">{m.v}</div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-muted">{m.l}</div>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. 04 - Professional Journey */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10" id="journey">
        <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4">04 - Professional Journey</div>
        <h2 className="text-4xl sm:text-5xl font-sans font-bold leading-tight mb-16 text-transparent bg-clip-text bg-gradient-to-r from-text to-muted">
          A career built deliberately.
        </h2>

        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-white/10">
          {[
            { date: '2022 - Present', role: 'Founder & Principal Consultant', org: 'skker.com - Independent Practice', desc: 'Building a global consulting practice focused on systems architecture, AI strategy, and organizational transformation.', active: true },
            { date: '2018 - 2022', role: 'Head of Product Management', org: 'Enterprise Technology Firm - Kuala Lumpur', desc: 'Led product management discipline across 6 product lines. Established delivery governance, OKR alignment, and portfolio planning.' },
            { date: '2014 - 2018', role: 'Senior Agile & Kanban Consultant', org: 'Regional Consulting Practice - APAC', desc: 'Delivered Kanban and systems thinking engagements across Southeast Asia. Trained 500+ practitioners across multiple industries.' },
            { date: '2008 - 2014', role: 'Product & Technology Leadership', org: 'Multiple Roles - Financial Services & Technology', desc: 'Progressive leadership roles spanning product development, platform architecture, and cross-functional delivery management.' },
          ].map((item, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border ${item.active ? 'border-accent bg-accent/20 text-accent shadow-[0_0_15px_rgba(0,184,219,0.3)]' : 'border-white/10 bg-white/5 text-muted'} shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 backdrop-blur-md`}>
                <div className={`w-3 h-3 rounded-full ${item.active ? 'bg-accent shadow-[0_0_10px_rgba(0,184,219,0.8)]' : 'bg-muted'}`}></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-8 rounded-3xl border border-white/10 group-hover:border-accent/30 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h3 className="font-bold text-xl text-text">{item.role}</h3>
                  <span className="text-xs text-accent font-mono tracking-widest uppercase">{item.date}</span>
                </div>
                <div className="text-sm font-bold text-muted mb-4 uppercase tracking-widest border-b border-white/10 pb-4">{item.org}</div>
                <p className="text-sm text-muted/80 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Spotlight */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center relative z-10">
        <div className="text-accent text-xs font-mono tracking-widest uppercase mb-8">Keep scrolling</div>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-text to-muted leading-tight max-w-5xl mx-auto tracking-tight">
          Strategy must move before complexity does.
        </h2>
      </section>

      {/* 9. 05 - Coaching & Mentoring */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10" id="coaching">
        <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4">05 - Coaching & Mentoring</div>
        <h2 className="text-4xl sm:text-5xl font-sans font-bold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-text to-muted">
          For those who think seriously about growth.
        </h2>
        <p className="text-lg text-muted/90 leading-relaxed mb-16 max-w-2xl">
          Not another consultant with a framework to sell - a trusted thinking partner for leaders at genuine inflection points.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            { type: 'Executive Mentoring', name: 'Strategic Leadership Coaching', sub: 'For senior leaders who need a real thinking partner.', points: ['Clarity on leadership identity and positioning', 'Strategic decision-making under uncertainty', 'Executive presence and organizational influence', 'Long-term career architecture'] },
            { type: 'Systems Coaching', name: 'Product & Systems Mastery', sub: 'Elevate from task management to systems thinking.', points: ['Product strategy and portfolio thinking', 'Kanban and flow system design', 'Stakeholder alignment and influence', 'Moving from PM to product leader'] },
            { type: 'AI Readiness', name: 'AI Strategy for Leaders', sub: 'Separate signal from noise. Build a real roadmap.', points: ['Personal AI fluency and literacy', 'Organizational AI readiness assessment', 'Tool selection and governance thinking', 'Building an AI-forward leadership stance'] },
          ].map((coach, i) => (
            <div key={i} className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col hover:border-accent/30 transition-all hover:-translate-y-1">
              <div className="text-[10px] font-mono tracking-widest uppercase text-accent mb-4">{coach.type}</div>
              <h3 className="text-2xl font-bold text-text mb-3 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">{coach.name}</h3>
              <p className="text-sm text-muted/80 mb-8 border-b border-white/10 pb-6">{coach.sub}</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {coach.points.map((p, pi) => (
                  <li key={pi} className="flex items-start gap-3 text-sm text-text/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 shadow-[0_0_8px_rgba(0,184,219,0.8)]"></div>
                    {p}
                  </li>
                ))}
              </ul>
              <Link href="/user/coaching" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent hover:text-accent-cool transition-colors mt-auto">
                Explore Coaching <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 10. 06 - Courses & Learning */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10" id="courses">
        <div className="glass-panel rounded-3xl border border-accent/20 p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden bg-gradient-to-br from-white/5 to-transparent">
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4">06 - Courses & Learning</div>
            <h2 className="text-4xl sm:text-5xl font-sans font-bold leading-tight mb-6 text-text">
              Knowledge, structured for application.
            </h2>
          </div>
          
          <div className="relative z-10 shrink-0">
            <Link href="/user/courses" className="group relative inline-flex items-center gap-2 px-8 py-5 bg-gradient-to-r from-accent to-accent-cool rounded-xl text-white font-semibold shadow-[0_0_20px_rgba(0,184,219,0.3)] hover:shadow-[0_0_30px_rgba(0,184,219,0.5)] transition-all hover:-translate-y-0.5">
              <BookOpen size={18} />
              <span>Open Course Library</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 11. 07 - Insights */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10" id="insights">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          <div>
            <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4">07 - Insights</div>
            <h2 className="text-4xl sm:text-5xl font-sans font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-text to-muted">
              Thinking out loud.
            </h2>
          </div>
          <Link href="/user/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 glass-panel text-sm font-bold uppercase tracking-widest text-text hover:bg-white/10 transition-colors">
            All Insights <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* 12. Contact / Work Together */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10 text-center" id="contact">
        <div className="max-w-3xl mx-auto">
          <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4">Work Together</div>
          <h2 className="text-5xl sm:text-6xl font-sans font-bold leading-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-text to-muted">
            The right conversation changes everything.
          </h2>
          <p className="text-lg text-muted/90 leading-relaxed mb-12">
            Whether you are navigating a strategic inflection point, building a team, or rethinking how your organization operates - let us find out if we are the right fit.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="/academy/home/book_session" className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-cool rounded-xl text-white font-semibold shadow-[0_0_20px_rgba(0,184,219,0.3)] hover:shadow-[0_0_30px_rgba(0,184,219,0.5)] transition-all hover:-translate-y-0.5">
              <span>Book a Strategy Session</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="mailto:hello@skker.com" className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl text-text border border-white/10 glass-panel hover:bg-white/10 transition-all hover:-translate-y-0.5 font-bold">
              <span>Send an Inquiry</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
