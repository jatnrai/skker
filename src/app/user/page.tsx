'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

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

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" as const }
};

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);
  
  // Outer circle (slower spring)
  const cursorXOuter = useMotionValue(-100);
  const cursorYOuter = useMotionValue(-100);
  const outerSpringConfig = { damping: 25, stiffness: 200, mass: 0.8 };
  const cursorXOuterSpring = useSpring(cursorXOuter, outerSpringConfig);
  const cursorYOuterSpring = useSpring(cursorYOuter, outerSpringConfig);

  // Inner dot (faster spring or instant)
  const cursorXInner = useMotionValue(-100);
  const cursorYInner = useMotionValue(-100);
  const innerSpringConfig = { damping: 30, stiffness: 500, mass: 0.2 };
  const cursorXInnerSpring = useSpring(cursorXInner, innerSpringConfig);
  const cursorYInnerSpring = useSpring(cursorYInner, innerSpringConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setIsHovering(true);
      // Outer circle centers at mouse (width 40px = 20px offset)
      cursorXOuter.set(e.clientX - 20);
      cursorYOuter.set(e.clientY - 20);
      
      // Inner dot centers at mouse (width 6px = 3px offset)
      cursorXInner.set(e.clientX - 3);
      cursorYInner.set(e.clientY - 3);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseMove);
    };
  }, [cursorXOuter, cursorYOuter, cursorXInner, cursorYInner]);

  return (
    <main className="min-h-screen text-text selection:bg-accent/30 flex flex-col relative overflow-hidden font-sans bg-page cursor-default">
      {/* Custom Cursor - Outer Circle */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-accent/50 pointer-events-none z-[100] hidden md:block"
        style={{
          x: cursorXOuterSpring,
          y: cursorYOuterSpring,
          opacity: isHovering ? 1 : 0,
        }}
      />
      {/* Custom Cursor - Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-[6px] h-[6px] bg-accent rounded-full pointer-events-none z-[100] hidden md:block"
        style={{
          x: cursorXInnerSpring,
          y: cursorYInnerSpring,
          opacity: isHovering ? 1 : 0,
        }}
      />

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

