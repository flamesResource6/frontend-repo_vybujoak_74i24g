function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-tr from-violet-600/20 via-fuchsia-500/20 to-amber-400/20 p-10 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to Supercharge Your AI Conversations?</h3>
          <p className="mt-2 text-white/80">Join thousands of users already experiencing the power of OctaIQ.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90">View pricing</a>
            <a href="#hero" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10">Try it free</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;