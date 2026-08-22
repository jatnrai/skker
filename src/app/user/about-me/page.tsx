'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHero from './components/AboutHero';
import AboutBioFocus from './components/AboutBioFocus';
import AboutTimeline from './components/AboutTimeline';
import AboutPathwayCV from './components/AboutPathwayCV';

export default function AboutMePage() {
  return (
    <main className="min-h-screen bg-page font-sans relative overflow-hidden">
      <Navbar />
      
      <div className="pt-40 pb-24 px-4 sm:px-6 relative z-10">
        <div className="max-w-[1200px] mx-auto w-full">
          
          {/* Top Hero Section */}
          <AboutHero />

          {/* Bio and Focus */}
          <AboutBioFocus />

          {/* Timeline */}
          <AboutTimeline />

          {/* Pathway + CV */}
          <AboutPathwayCV />

        </div>
      </div>

      <Footer />
    </main>
  );
}
