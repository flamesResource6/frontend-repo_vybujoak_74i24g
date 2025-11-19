import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 opacity-60 bg-[radial-gradient(800px_400px_at_10%_10%,rgba(124,58,237,0.25),transparent),radial-gradient(600px_300px_at_90%_20%,rgba(168,85,247,0.25),transparent),radial-gradient(700px_350px_at_50%_90%,rgba(251,146,60,0.15),transparent)]" />
      <Header />
      <main className="relative">
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <footer className="relative border-t border-white/10 py-8 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} OctaIQ — All rights reserved.
      </footer>
    </div>
  );
}

export default App;