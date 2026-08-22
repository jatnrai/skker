'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CoachingHero from './components/CoachingHero';
import CoachingTypes from './components/CoachingTypes';
import CoachingPackages from './components/CoachingPackages';
import CoachingBookingFlow from './components/CoachingBookingFlow';
import CoachingFAQ from './components/CoachingFAQ';
import CoachingCTA from './components/CoachingCTA';

export default function CoachingPage() {
  return (
    <main className="min-h-screen bg-page font-sans relative overflow-hidden">
      <Navbar />
      
      <div className="pt-40 pb-24 px-4 sm:px-6 relative z-10">
        <div className="max-w-[1200px] mx-auto w-full">
          
          <CoachingHero />
          <CoachingTypes />
          <CoachingPackages />
          <CoachingBookingFlow />
          <CoachingFAQ />
          <CoachingCTA />

        </div>
      </div>

      <Footer />
    </main>
  );
}
