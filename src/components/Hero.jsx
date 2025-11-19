import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[86vh] flex items-center" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(168,85,247,0.25),transparent_35%),radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.2),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(251,146,60,0.15),transparent_45%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Lightning‑fast, privacy‑first AI chat platform
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-[0_0_22px_rgba(124,58,237,0.35)]">
            One interface. Every model. Zero friction.
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-xl">
            Access GPT‑5, Gemini 2.5, Claude and more in a unified, blazing‑fast chat experience. Switch models instantly or let IQ Mode pick the best for you.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#cta" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-slate-900 bg-white hover:bg-white/90">
              Start free — 100 requests/month
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white/90 border border-white/20 hover:bg-white/10">
              Explore features
            </a>
          </div>
          <div className="mt-6 text-xs text-white/60">
            IQ Firewall ensures end‑to‑end encryption. No sensitive data stored or shared.
          </div>
        </div>
        <div className="lg:col-span-6" />
      </div>
    </section>
  );
}

export default Hero;