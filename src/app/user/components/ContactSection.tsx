'use client';

import { motion } from 'framer-motion';
import { Phone, Send, MapPin, ArrowRight, Share2 } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" as const }
};

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 relative z-10 bg-[#040816]">
      <div className="max-w-[1300px] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* Left Column: Text & Image */}
        <motion.div {...fadeUp} className="flex flex-col">
          <div className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-accent opacity-80 mb-6">
            08 &mdash; Get In Touch
          </div>
          <h2 className="text-[50px] sm:text-[65px] lg:text-[75px] font-serif font-bold text-[#eef0f8] leading-[1.05] tracking-[-0.02em] mb-6">
            The right <br />
            conversation <br />
            <em className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-cool italic font-serif">changes <br />everything.</em>
          </h2>
          <p className="text-[15px] text-muted/90 leading-[1.8] font-sans max-w-[450px] mb-12">
            Use the enquiry form for advisory, coaching, training, speaking, or partnership requests.
          </p>

          <div className="w-full max-w-[500px] aspect-[4/3] rounded-[32px] overflow-hidden relative border border-white/5 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
              alt="Handshake meeting"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#040816]/60 via-transparent to-transparent mix-blend-multiply"></div>
          </div>
        </motion.div>

        {/* Right Column: Cards */}
        <div className="flex flex-col gap-6 lg:mt-8">

          {/* Form Card */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="bg-[#06091a]/90 border border-white/10 rounded-[32px] p-8 sm:p-10 shadow-2xl backdrop-blur-sm"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[9px] font-bold tracking-[0.15em] uppercase text-accent">First Name</label>
                  <input type="text" placeholder="First" className="bg-transparent border border-white/10 rounded-xl px-4 py-3.5 text-white text-[14px] placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:bg-white/[0.02] transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[9px] font-bold tracking-[0.15em] uppercase text-accent">Last Name</label>
                  <input type="text" placeholder="Last" className="bg-transparent border border-white/10 rounded-xl px-4 py-3.5 text-white text-[14px] placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:bg-white/[0.02] transition-colors" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[9px] font-bold tracking-[0.15em] uppercase text-accent">Email</label>
                <input type="email" placeholder="you@company.com" className="bg-transparent border border-white/10 rounded-xl px-4 py-3.5 text-white text-[14px] placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:bg-white/[0.02] transition-colors" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[9px] font-bold tracking-[0.15em] uppercase text-accent">Subject</label>
                <input type="text" placeholder="e.g. Strategy Session Request" className="bg-transparent border border-white/10 rounded-xl px-4 py-3.5 text-white text-[14px] placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:bg-white/[0.02] transition-colors" />
              </div>

              <div className="flex flex-col gap-2 mb-2">
                <label className="font-mono text-[9px] font-bold tracking-[0.15em] uppercase text-accent">Message</label>
                <textarea rows={4} placeholder="Tell me about your situation and what you are trying to solve." className="bg-transparent border border-white/10 rounded-xl px-4 py-4 text-white text-[14px] placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:bg-white/[0.02] transition-colors resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-accent to-accent-cool text-[#04121d] font-mono text-[11px] font-bold tracking-[0.1em] uppercase py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,184,219,0.4)] transition-all group">
                Send Message <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info Card */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-[#06091a]/90 border border-white/10 rounded-[32px] p-8 sm:p-10 shadow-2xl backdrop-blur-sm"
          >
            <h3 className="font-serif text-[28px] sm:text-[32px] text-white font-bold mb-4">
              Reach Your Goals with Us Today
            </h3>
            <p className="text-[14px] text-muted/90 leading-[1.6] mb-8">
              Send a short note with your context, timeline, and the decision you are trying to make. We will route it to the right next step.
            </p>

            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <a href="tel:+19898000321" className="flex items-center gap-4 p-4 rounded-2xl bg-transparent border border-white/10 hover:border-accent/40 hover:bg-white/[0.02] transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center shrink-0">
                    <Phone size={18} className="fill-current" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[8px] font-bold tracking-[0.15em] uppercase text-accent mb-1">Give us a call</span>
                    <span className="text-[13px] font-bold text-white group-hover:text-accent transition-colors">+1 989 800 0321</span>
                  </div>
                </a>

                {/* Email */}
                <a href="mailto:hi@skker.com" className="flex items-center gap-4 p-4 rounded-2xl bg-transparent border border-white/10 hover:border-accent/40 hover:bg-white/[0.02] transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center shrink-0">
                    <Send size={18} className="fill-current" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[8px] font-bold tracking-[0.15em] uppercase text-accent mb-1">Drop us a message</span>
                    <span className="text-[13px] font-bold text-white group-hover:text-accent transition-colors">hi@skker.com</span>
                  </div>
                </a>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-transparent border border-white/10">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center shrink-0">
                  <MapPin size={18} className="fill-current" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[8px] font-bold tracking-[0.15em] uppercase text-accent mb-1">Address</span>
                  <span className="text-[13px] font-bold text-white">Remote advisory across APAC, NA and EU markets</span>
                </div>
              </div>

              {/* Social Media */}
              <a href="#" className="flex items-center gap-4 p-4 rounded-2xl bg-transparent border border-white/10 hover:border-accent/40 hover:bg-white/[0.02] transition-colors group">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center shrink-0">
                  <Share2 size={18} className="fill-current" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[8px] font-bold tracking-[0.15em] uppercase text-accent mb-1">Social Media</span>
                  <span className="text-[13px] font-bold text-white group-hover:text-accent transition-colors">LinkedIn Profile</span>
                </div>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
