'use client';

export default function CoachingBookingFlow() {
  const steps = [
    {
      num: '01',
      title: 'Choose your coaching type.',
      desc: 'Mentoring, Personal Coaching, or Business Coaching.'
    },
    {
      num: '02',
      title: 'Pick an available slot.',
      desc: 'Use the live booking calendar connected to SKKER Academy.'
    },
    {
      num: '03',
      title: 'Confirm details.',
      desc: 'The system creates your booking and keeps it visible under My Sessions.'
    }
  ];

  return (
    <section className="mb-32">
      <div className="mb-16">
        <div className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-accent opacity-80 mb-6">
          Booking Flow
        </div>
        <h2 className="text-[36px] sm:text-[46px] font-serif font-bold text-heading leading-[1.1] tracking-[-0.02em]">
          How it works.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="bg-section/50 border border-border rounded-[24px] p-8 flex flex-col hover:border-accent/20 hover:bg-white/[0.02] transition-colors relative"
          >
            {/* Step Connector Line (hidden on mobile) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-[1px] bg-white/10" />
            )}
            
            <div className="w-12 h-12 rounded-full border border-accent/20 bg-accent/5 flex items-center justify-center text-accent font-mono text-[12px] font-bold tracking-widest mb-8">
              {step.num}
            </div>
            
            <strong className="text-[18px] font-serif text-heading mb-3 block">{step.title}</strong>
            <p className="text-[14px] text-muted/80 leading-[1.6]">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
