'use client';

import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-bg text-text selection:bg-accent/30 flex flex-col relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMikiLz48L3N2Zz4=')] pointer-events-none z-0" />
      <div className="absolute top-1/4 left-[10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-[10%] w-[400px] h-[400px] bg-accent-cool/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <Navbar />
      
      <div className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
        
        {/* Hero Section */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent font-mono text-xs font-bold tracking-widest uppercase w-fit">
              Blog / Articles
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif leading-tight">
              Ideas for<br />
              <em className="text-muted italic font-serif">serious operators.</em>
            </h1>
            <p className="text-lg text-muted/80 leading-relaxed max-w-xl">
              Practical writing on systems architecture, product leadership, AI strategy, coaching, delivery, and organizational transformation.
            </p>
          </div>
          
          <aside className="lg:col-span-4 w-full">
            <div className="glass-panel p-8 rounded-3xl border border-border shadow-xl bg-gradient-to-br from-white/5 to-transparent">
              <span className="text-accent text-xs font-mono tracking-widest uppercase mb-3 block">Current themes</span>
              <strong className="block text-2xl font-serif text-text leading-tight">
                Systems, AI, product leadership, and flow.
              </strong>
            </div>
          </aside>
        </header>

        {/* Featured Article */}
        <section aria-labelledby="featuredTitle" className="mb-32">
          <article className="group glass-panel rounded-3xl border border-border overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2 relative hover:border-accent/30 transition-colors">
            <figure className="relative h-64 lg:h-auto min-h-[400px] overflow-hidden bg-surface">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80" 
                alt="Product leadership" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-bg/80 via-transparent to-transparent lg:hidden" />
              <div className="absolute inset-0 bg-gradient-to-l from-bg/80 via-transparent to-transparent hidden lg:block" />
            </figure>
            
            <div className="flex flex-col justify-center p-8 lg:p-16 relative z-10 bg-gradient-to-br from-surface/50 to-transparent backdrop-blur-sm">
              <span className="text-accent text-xs font-mono tracking-widest uppercase mb-4 inline-block">Featured article</span>
              <h2 id="featuredTitle" className="text-3xl lg:text-4xl font-bold text-text mb-6 leading-tight">
                From Manager to Architect: The Career Move No One Tells You About
              </h2>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-muted tracking-widest uppercase mb-6 divide-x divide-white/10">
                <span>Product Leadership</span>
                <span className="pl-4">28 March 2026</span>
                <span className="pl-4">2 min read</span>
              </div>
              <p className="text-muted/80 text-lg mb-8 leading-relaxed">
                At some point in a product career, managing execution is not enough. The real shift is architectural: from task ownership to system ownership.
              </p>
              <a 
                href="/academy/blog/details/from-manager-to-architect-the-career-move-no-one-tells-you-about/3" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-cool rounded-xl text-heading font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all hover:-translate-y-0.5 w-fit"
              >
                <span>Read Article</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </article>
        </section>

        {/* Latest Articles */}
        <section aria-labelledby="latestTitle" className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-accent text-xs font-mono tracking-widest uppercase mb-4">Latest thinking</div>
              <h2 id="latestTitle" className="text-4xl font-serif">Recent articles.</h2>
            </div>
            
            <label className="relative flex items-center w-full md:w-72 glass-panel border border-border rounded-full px-4 py-3 focus-within:border-accent/50 focus-within:shadow-[0_0_15px_rgba(0,184,219,0.15)] transition-all">
              <Search size={18} className="text-muted mr-3" />
              <input 
                type="search" 
                placeholder="Search by topic" 
                className="bg-transparent border-none outline-none text-sm text-text w-full placeholder:text-muted/50"
              />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Article 1 */}
            <article className="group glass-panel rounded-3xl border border-border overflow-hidden hover:border-accent/30 transition-all hover:-translate-y-1 flex flex-col">
              <a href="/academy/blog/details/from-manager-to-architect-the-career-move-no-one-tells-you-about/3" className="block aspect-[16/10] overflow-hidden border-b border-border bg-surface">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" alt="Product leadership" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
              </a>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center text-[10px] font-mono tracking-widest uppercase text-accent mb-4">
                  <span>Product Leadership</span>
                  <span className="text-muted">28 Mar 2026</span>
                </div>
                <h3 className="text-xl font-bold text-text mb-4 leading-snug group-hover:text-accent transition-colors">
                  <a href="/academy/blog/details/from-manager-to-architect-the-career-move-no-one-tells-you-about/3">
                    From Manager to Architect: The Career Move No One Tells You About
                  </a>
                </h3>
                <p className="text-sm text-muted/80 mb-8 flex-grow">
                  Moving from local execution to system ownership changes the kind of leverage a product leader creates.
                </p>
                <a href="/academy/blog/details/from-manager-to-architect-the-career-move-no-one-tells-you-about/3" className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-accent group-hover:text-accent-cool transition-colors mt-auto">
                  Read more <ArrowRight size={14} />
                </a>
              </div>
            </article>

            {/* Article 2 */}
            <article className="group glass-panel rounded-3xl border border-border overflow-hidden hover:border-accent/30 transition-all hover:-translate-y-1 flex flex-col">
              <a href="/academy/blog/details/the-quiet-discipline-of-flow-what-kanban-actually-teaches/2" className="block aspect-[16/10] overflow-hidden border-b border-border bg-surface">
                <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80" alt="Systems design" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
              </a>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center text-[10px] font-mono tracking-widest uppercase text-accent mb-4">
                  <span>Systems Design</span>
                  <span className="text-muted">28 Mar 2026</span>
                </div>
                <h3 className="text-xl font-bold text-text mb-4 leading-snug group-hover:text-accent transition-colors">
                  <a href="/academy/blog/details/the-quiet-discipline-of-flow-what-kanban-actually-teaches/2">
                    The Quiet Discipline of Flow: What Kanban Actually Teaches
                  </a>
                </h3>
                <p className="text-sm text-muted/80 mb-8 flex-grow">
                  Kanban matters because it reveals how work moves, where it stalls, and which policies shape delivery.
                </p>
                <a href="/academy/blog/details/the-quiet-discipline-of-flow-what-kanban-actually-teaches/2" className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-accent group-hover:text-accent-cool transition-colors mt-auto">
                  Read more <ArrowRight size={14} />
                </a>
              </div>
            </article>

            {/* Article 3 */}
            <article className="group glass-panel rounded-3xl border border-border overflow-hidden hover:border-accent/30 transition-all hover:-translate-y-1 flex flex-col">
              <a href="/academy/blog/details/why-most-organizations-are-misunderstanding-ai-adoption/1" className="block aspect-[16/10] overflow-hidden border-b border-border bg-surface">
                <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80" alt="AI strategy" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
              </a>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center text-[10px] font-mono tracking-widest uppercase text-accent mb-4">
                  <span>AI Strategy</span>
                  <span className="text-muted">28 Mar 2026</span>
                </div>
                <h3 className="text-xl font-bold text-text mb-4 leading-snug group-hover:text-accent transition-colors">
                  <a href="/academy/blog/details/why-most-organizations-are-misunderstanding-ai-adoption/1">
                    Why Most Organizations Are Misunderstanding AI Adoption
                  </a>
                </h3>
                <p className="text-sm text-muted/80 mb-8 flex-grow">
                  AI adoption is a leadership, governance, capability, and operating-model problem before it is a tooling problem.
                </p>
                <a href="/academy/blog/details/why-most-organizations-are-misunderstanding-ai-adoption/1" className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-accent group-hover:text-accent-cool transition-colors mt-auto">
                  Read more <ArrowRight size={14} />
                </a>
              </div>
            </article>

          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
