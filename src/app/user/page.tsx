'use client';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import WhereIOperateSection from './components/WhereIOperateSection';
import ProofInPracticeSection from './components/ProofInPracticeSection';
import ProfessionalJourneySection from './components/ProfessionalJourneySection';
import CoachingSection from './components/CoachingSection';
import TrainingSection from './components/TrainingSection';
import BlogSection from './components/BlogSection';
import ClientsSection from './components/ClientsSection';
import ContactSection from './components/ContactSection';
import Link from 'next/link';
import { ArrowRight, Hexagon, Square, Circle, Triangle, Play, ArrowUpRight, CheckCircle2, ChevronRight, LayoutDashboard, Briefcase, GraduationCap, BookOpen, UserCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" as const }
};

export default function Home() {
  return (
    <main className="min-h-screen text-text selection:bg-accent/30 flex flex-col relative overflow-hidden font-sans bg-page">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMikiLz48L3N2Zz4=')]" style={{ opacity: 0.1 }} />
      </div>

      <Navbar />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 1.5 Capabilities Section */}
      <CapabilitiesSection />

      {/* 3. Where I Operate Section */}
      <WhereIOperateSection />

      {/* 4. Proof in Practice (Case Studies) */}
      <ProofInPracticeSection />

      {/* 5. Professional Journey */}
      <ProfessionalJourneySection />

      {/* 6. Coaching */}
      <CoachingSection />

      {/* 7. Training & Courses */}
      <TrainingSection />

      {/* 8. Blog / Articles */}
      <BlogSection />

      {/* 9. Our Clients */}
      <ClientsSection />


      {/* 10. Contact / Get In Touch */}
      <ContactSection />

      <Footer />
    </main>
  );
}

