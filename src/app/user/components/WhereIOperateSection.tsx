'use client';

export default function WhereIOperateSection() {
  const cards = [
    {
      num: "01",
      title: "Executive decisions",
      desc: "Clarify priorities, tradeoffs, and operating cadence under uncertainty."
    },
    {
      num: "02",
      title: "Product and delivery systems",
      desc: "Design how work moves, who decides, and what signals matter."
    },
    {
      num: "03",
      title: "AI readiness",
      desc: "Turn AI interest into governance, use cases, capability, and safe adoption."
    }
  ];

  return (
    <section id="where-operate" className="py-24 sm:py-32 px-4 sm:px-6 relative z-10 bg-section">
      {/* Background subtle grid similar to original */}
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{ backgroundImage: 'radial-gradient(rgb(0 184 219 / 0.15) 1px, transparent 1px)', backgroundSize: '40px 40px', backgroundPosition: '20px 20px' }}></div>
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent pointer-events-none"></div>

      <div className="max-w-[1080px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-20 items-start relative z-10">

        {/* Left Column (Media) */}
        <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[32px] overflow-hidden border border-border shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=84"
            alt="Consulting workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-section/90 via-transparent to-transparent"></div>

          <div className="absolute bottom-6 left-6 right-6 bg-surface/80 backdrop-blur-md border border-border rounded-2xl p-6 shadow-xl">
            <div className="font-serif font-bold text-heading text-xl mb-1">Where I operate</div>
            <div className="font-sans text-sm text-muted/90">
              At the edge between strategy, product, systems, leadership, and AI adoption.
            </div>
          </div>
        </div>

        {/* Right Column (Text & Cards) */}
        <div className="flex flex-col pt-4 md:pt-10">
          {/* Kicker */}
          <div className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-accent opacity-80 mb-6">
            Where I Operate
          </div>

          <h2 className="text-[35px] sm:text-[45px] font-serif font-bold text-heading leading-[1.08] tracking-[-0.025em] mb-6">
            Practical strategy, <br />
            <em className="text-transparent bg-clip-text bg-gradient-to-br from-accent via-[#a2f4fd] to-accent-cool italic font-serif">not theatre.</em>
          </h2>

          <p className="text-[14.5px] text-muted leading-[1.82] font-sans mb-10 max-w-[42ch]">
            The work sits where plans meet execution: operating models, decision systems, delivery flow, product judgment, and AI readiness. Less noise. More usable structure.
          </p>

          <div className="flex flex-col gap-4">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="group flex gap-5 bg-card/40 hover:bg-surface/80 border border-border rounded-2xl p-6 transition-all duration-300"
              >
                <div className="font-mono text-[11px] font-bold tracking-[0.1em] text-accent mt-1">
                  {card.num}
                </div>
                <div className="flex flex-col">
                  <strong className="text-[14.5px] font-bold text-heading mb-1 group-hover:text-heading transition-colors">{card.title}</strong>
                  <span className="text-[13px] text-muted leading-[1.6] group-hover:text-muted/90 transition-colors">{card.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
