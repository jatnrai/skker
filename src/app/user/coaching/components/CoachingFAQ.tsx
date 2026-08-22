'use client';

export default function CoachingFAQ() {
  const faqs = [
    {
      q: 'Who is coaching for?',
      a: 'Leaders, professionals, founders, and teams who need clearer thinking and better operating habits.'
    },
    {
      q: 'How is coaching delivered?',
      a: 'Sessions are booked online and delivered live. The format can be adapted to your context.'
    },
    {
      q: 'Can sessions be customized?',
      a: 'Yes. Bring your real situation, decision, or operating challenge. The session is built around that.'
    },
    {
      q: 'How do I book?',
      a: 'Use the Book Session button. Choose the type, date, time, and submit your notes before confirming.'
    }
  ];

  return (
    <section className="mb-32">
      <div className="mb-16 text-center">
        <div className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-accent opacity-80 mb-6">
          FAQ
        </div>
        <h2 className="text-[36px] sm:text-[46px] font-serif font-bold text-heading leading-[1.1] tracking-[-0.02em]">
          Common questions.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="bg-white/[0.02] border border-border rounded-[20px] p-8 hover:bg-white/[0.04] transition-colors"
          >
            <strong className="block text-[16px] text-heading font-medium mb-3">{faq.q}</strong>
            <p className="text-[14px] text-muted/80 leading-[1.6] m-0">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
