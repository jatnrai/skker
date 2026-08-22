'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PublicClassesHero from './components/PublicClassesHero';
import PublicClassesGrid from './components/PublicClassesGrid';

export default function PublicClassesPage() {
  return (
    <main className="min-h-screen bg-page font-sans relative overflow-hidden">
      <Navbar />
      
      <div className="pt-40 pb-24 px-4 sm:px-6 relative z-10">
        <div className="max-w-[1200px] mx-auto w-full">
          
          <PublicClassesHero />
          <PublicClassesGrid />

        </div>
      </div>

      <Footer />
    </main>
  );
}
