'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TrainingHero from './components/TrainingHero';
import TrainingPaths from './components/TrainingPaths';
import TrainingWorkflow from './components/TrainingWorkflow';
import TrainingCTA from './components/TrainingCTA';

export default function TrainingOverviewPage() {
  return (
    <main className="min-h-screen bg-page font-sans relative overflow-hidden">
      <Navbar />
      
      <div className="pt-24 pb-8 px-4 sm:px-6 relative z-10">
        <div className="max-w-[1200px] mx-auto w-full">
          
          <TrainingHero />
          <TrainingPaths />
          <TrainingWorkflow />
          <TrainingCTA />

        </div>
      </div>

      <Footer />
    </main>
  );
}
