'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-page font-sans relative overflow-hidden flex flex-col">
      <Navbar />
      <div className="pt-24 flex-grow">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
