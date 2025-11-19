import { Menu, MessageSquare, Brain, Shield } from "lucide-react";

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/10 dark:bg-slate-900/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-amber-400 shadow-lg shadow-fuchsia-500/30 flex items-center justify-center text-white">
              <Brain size={20} />
            </div>
            <div className="leading-tight">
              <div className="text-white font-semibold text-lg">OctaIQ</div>
              <div className="text-[11px] text-white/60 -mt-1">Advanced AI Chat</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#pricing" className="hidden sm:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white border border-white/20 hover:bg-white/10 transition">
              <Shield size={16} />
              IQ Firewall
            </a>
            <a href="#cta" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-slate-900 bg-white hover:bg-white/90 transition">
              <MessageSquare size={16} />
              Start Free
            </a>
            <button className="md:hidden h-9 w-9 inline-flex items-center justify-center rounded-xl border border-white/20 text-white/90">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;