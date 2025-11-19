function Tier({ name, price, period, features, highlight }) {
  return (
    <div className={`relative rounded-2xl border ${highlight ? 'border-fuchsia-400/60 bg-fuchsia-400/5' : 'border-white/10 bg-white/5'} p-6`}> 
      {highlight && (
        <div className="absolute -top-3 left-6 rounded-full bg-fuchsia-500 text-white text-[10px] font-semibold px-2 py-0.5">Most Popular</div>
      )}
      <div className="text-white font-semibold text-lg">{name}</div>
      <div className="mt-2 flex items-end gap-1">
        <div className="text-3xl font-bold text-white">₹{price}</div>
        <div className="text-white/60 text-sm mb-1">/{period}</div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-amber-400" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a href="#cta" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold ${highlight ? 'bg-white text-slate-900 hover:bg-white/90' : 'border border-white/20 text-white/90 hover:bg-white/10'}`}>Get started</a>
    </div>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Start free, upgrade when you need more power and volume.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Tier name="Free" price="0" period="month" features={[
            '100 requests/month',
            '5 AI models',
            'Basic history',
            'Export to PDF/JSON/Text'
          ]} />

          <Tier name="Pro" price="999" period="month" highlight features={[
            '1,000 requests/month',
            '10+ models',
            'IQ Mode & IQ Firewall',
            'Priority support',
            'Usage analytics'
          ]} />

          <Tier name="Elite" price="2,500" period="month" features={[
            '5,000 requests/month',
            'All Pro features',
            'Custom model training',
            'API access',
            'Dedicated support',
            'Team collaboration'
          ]} />
        </div>
      </div>
    </section>
  );
}

export default Pricing;