function FAQ() {
  const faqs = [
    {
      q: 'Which AI models are available?',
      a: 'You can access 10+ leading models including GPT‑5, Gemini 2.5, Claude and more. The full list is always visible in the chat interface and can be switched in real-time.'
    },
    {
      q: 'How does IQ Mode work?',
      a: 'IQ Mode evaluates your prompt and automatically selects the optimal model based on task type — code, reasoning, writing, or creative.'
    },
    {
      q: 'What is IQ Firewall?',
      a: 'Advanced privacy with end‑to‑end encryption. Sensitive data is never stored or shared.'
    },
    {
      q: 'Can I export my chats?',
      a: 'Yes — export any conversation as PDF, JSON or plain text and share read‑only links.'
    },
    {
      q: 'What are the request limits?',
      a: 'Free: 100/month, Pro: 1,000/month, Elite: 5,000/month. You can upgrade anytime.'
    }
  ];

  return (
    <section id="faq" className="relative py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">FAQs</h2>
        <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {faqs.map((f, i) => (
            <details key={i} className="group p-6">
              <summary className="list-none cursor-pointer select-none text-white/90 font-medium flex items-center justify-between">
                {f.q}
                <span className="ml-4 text-white/60 group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-2 text-white/70 text-sm">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;