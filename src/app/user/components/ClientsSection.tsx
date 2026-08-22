'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" as const }
};

const clients = [
  { initial: "PTR", name: "PETRONAS", category: "ENERGY", logo: "" }, // Placeholder for logo if provided later
  { initial: "CIMB", name: "CIMB BANK", category: "FINANCIAL SERVICES" },
  { initial: "MBB", name: "MAYBANK", category: "FINANCIAL SERVICES" },
  { initial: "AA", name: "AIRASIA", category: "AVIATION" },
  { initial: "TM", name: "TELEKOM MALAYSIA", category: "TELECOM" },
  { initial: "DHL", name: "DHL EXPRESS", category: "LOGISTICS" },
  { initial: "SHE", name: "SHELL", "category": "ENERGY" },
  { initial: "TNB", name: "TNB", "category": "UTILITIES" }
];

export default function ClientsSection() {
  return (
    <section id="clients" className="py-24 sm:py-32 px-4 sm:px-6 relative z-10 bg-page">
      <div className="max-w-[1200px] mx-auto w-full relative z-10 flex flex-col gap-16">
        
        {/* Header Area */}
        <motion.div {...fadeUp} className="text-center max-w-[800px] mx-auto">
          <div className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-accent opacity-80 mb-6">
            Our Clients
          </div>
          <h2 className="text-[45px] sm:text-[60px] font-serif font-bold text-heading leading-[1.05] tracking-[-0.025em] mb-6">
            Organisations we have <br />
            <em className="text-transparent bg-clip-text bg-gradient-to-br from-accent via-[#a2f4fd] to-accent-cool italic font-serif">worked with.</em>
          </h2>
          <p className="text-[15px] text-muted leading-[1.8] font-sans max-w-[600px] mx-auto">
            A track record across industries, sectors, and scales — from regional champions to global operators.
          </p>
        </motion.div>

        {/* Clients Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          {clients.map((client, idx) => (
            <motion.div 
              key={idx} 
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              className="bg-section/80 border border-border rounded-[24px] p-6 sm:p-8 flex flex-col items-center justify-center text-center hover:bg-white/[0.03] hover:border-border transition-colors shadow-xl group"
            >
              {/* Logo / Initial Area */}
              <div className="h-[40px] flex items-center justify-center mb-4">
                {client.logo ? (
                  <img src={client.logo} alt={client.name} className="max-h-full max-w-[60px] opacity-70 group-hover:opacity-100 transition-opacity" />
                ) : (
                  <div className="font-mono text-[12px] font-bold tracking-widest text-muted group-hover:text-heading transition-colors">
                    {client.initial}
                  </div>
                )}
              </div>
              
              {/* Client Name */}
              <h3 className="font-mono text-[11px] font-bold tracking-[0.1em] text-heading uppercase mb-2 group-hover:text-accent-cool transition-colors">
                {client.name}
              </h3>
              
              {/* Category */}
              <div className="font-mono text-[9px] font-bold tracking-[0.15em] uppercase text-accent/60 group-hover:text-accent transition-colors">
                {client.category}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
