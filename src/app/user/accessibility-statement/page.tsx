import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AccessibilityStatementPage() {
  return (
    <main className="min-h-screen bg-bg text-text selection:bg-accent/30 flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center pt-24 pb-12">
        <h1 className="text-4xl font-serif text-accent">Accessibility Statement</h1>
      </div>
      <Footer />
    </main>
  );
}
