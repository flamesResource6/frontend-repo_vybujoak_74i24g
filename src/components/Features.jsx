import { Shuffle, Bot, ShieldCheck, History, FileOutput, Zap } from "lucide-react";

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
      <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-amber-400 text-white flex items-center justify-center shadow-md shadow-fuchsia-500/30">
        <Icon size={18} />
      </div>
      <h3 className="mt-4 text-white font-semibold">{title}</h3>
      <p className="mt-1 text-white/70 text-sm">{desc}</p>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Built for power and privacy</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Multi‑model switching, automatic model selection, bulletproof privacy, and thoughtful tooling for sharing and search.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={Bot} title="Multi‑Model AI" desc="Access 10+ leading models including GPT‑5, Gemini 2.5, and Claude. Switch models mid‑conversation." />
          <FeatureCard icon={Shuffle} title="IQ Mode" desc="Smart selector automatically picks the best model for code, analysis, writing, or brainstorming." />
          <FeatureCard icon={ShieldCheck} title="IQ Firewall" desc="End‑to‑end encrypted. No sensitive data stored or shared — ever." />
          <FeatureCard icon={History} title="Conversation History" desc="Powerful, searchable history with filters and pinned threads." />
          <FeatureCard icon={FileOutput} title="Export & Share" desc="Export chats as PDF, JSON, or plain text. Share links for collaboration." />
          <FeatureCard icon={Zap} title="Lightning Fast" desc="Optimized for instant responses and frictionless model switching." />
        </div>
      </div>
    </section>
  );
}

export default Features;