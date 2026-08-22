'use client';

export default function AboutBioFocus() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-32">
      <article className="bg-gradient-to-br from-white/[0.04] to-transparent border border-border rounded-[32px] p-10 sm:p-14 relative overflow-hidden shadow-2xl group">
        {/* Ambient Background Glow */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        <div className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-accent opacity-80 mb-6 relative z-10">Bio</div>
        <h2 className="text-[36px] sm:text-[46px] font-serif font-bold text-heading leading-[1.1] tracking-[-0.02em] mb-8 relative z-10">
          A practical operator<br />
          <em className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-cool italic font-serif">with a systems lens.</em>
        </h2>
        <p className="text-[15px] text-muted/90 leading-[1.8] font-sans relative z-10">
          My work is shaped by years inside delivery, product, leadership, and transformation environments. I help leaders and teams make better operating choices: what to focus on, how to structure work, where AI can help, and how to build decision systems that last.
        </p>
      </article>
      
      <article className="bg-gradient-to-br from-white/[0.04] to-transparent border border-border rounded-[32px] p-10 sm:p-14 relative overflow-hidden shadow-2xl">
        <div className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-accent opacity-80 mb-8">Focus</div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white/[0.02] border border-border rounded-[24px] p-8 hover:border-accent/30 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,184,219,0.1)] transition-all group">
            <div className="font-mono text-[10px] font-bold tracking-[0.2em] text-accent/50 mb-6 group-hover:text-accent transition-colors">01</div>
            <h3 className="text-[17px] font-bold text-heading mb-2">Product</h3>
            <p className="text-[13px] text-muted/80 leading-[1.6]">Operating models and portfolio flow</p>
          </div>
          
          <div className="bg-white/[0.02] border border-border rounded-[24px] p-8 hover:border-accent/30 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,184,219,0.1)] transition-all group">
            <div className="font-mono text-[10px] font-bold tracking-[0.2em] text-accent/50 mb-6 group-hover:text-accent transition-colors">02</div>
            <h3 className="text-[17px] font-bold text-heading mb-2">Systems</h3>
            <p className="text-[13px] text-muted/80 leading-[1.6]">Work design, decision rights, and interfaces</p>
          </div>
          
          <div className="bg-white/[0.02] border border-border rounded-[24px] p-8 hover:border-accent/30 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,184,219,0.1)] transition-all group">
            <div className="font-mono text-[10px] font-bold tracking-[0.2em] text-accent/50 mb-6 group-hover:text-accent transition-colors">03</div>
            <h3 className="text-[17px] font-bold text-heading mb-2">AI</h3>
            <p className="text-[13px] text-muted/80 leading-[1.6]">Readiness, governance, and practical adoption</p>
          </div>
          
          <div className="bg-white/[0.02] border border-border rounded-[24px] p-8 hover:border-accent/30 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,184,219,0.1)] transition-all group">
            <div className="font-mono text-[10px] font-bold tracking-[0.2em] text-accent/50 mb-6 group-hover:text-accent transition-colors">04</div>
            <h3 className="text-[17px] font-bold text-heading mb-2">Coaching</h3>
            <p className="text-[13px] text-muted/80 leading-[1.6]">Sharper decisions for leaders and operators</p>
          </div>
        </div>
      </article>
    </section>
  );
}
