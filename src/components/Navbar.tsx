const MARKETPLACE_URL =
  "https://marketplace.visualstudio.com/items?itemName=thraenbe.cograph";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/[0.06] bg-bg/80 backdrop-blur-md">
      {/* Logo */}
      <a
        href="/"
        className="flex items-center gap-2.5 select-none group"
        aria-label="Cograph home"
      >
        {/* Mini graph icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="flex-shrink-0"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="3.5" fill="#3b6ef8" />
          <circle cx="4" cy="7" r="2.5" fill="#f97316" />
          <circle cx="20" cy="7" r="2.5" fill="#22c55e" />
          <circle cx="4" cy="17" r="2.5" fill="#ec4899" />
          <circle cx="20" cy="17" r="2.5" fill="#eab308" />
          <line
            x1="6.2"
            y1="8.4"
            x2="9.5"
            y2="10.8"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1"
          />
          <line
            x1="17.8"
            y1="8.4"
            x2="14.5"
            y2="10.8"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1"
          />
          <line
            x1="6.2"
            y1="15.6"
            x2="9.5"
            y2="13.2"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1"
          />
          <line
            x1="17.8"
            y1="15.6"
            x2="14.5"
            y2="13.2"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1"
          />
        </svg>
        <span className="text-white font-semibold tracking-[0.12em] text-sm uppercase">
          Cograph
        </span>
      </a>

      {/* Nav links (desktop) */}
      <div className="hidden md:flex items-center gap-8">
        <a
          href="#features"
          className="text-sm text-white/50 hover:text-white/90 transition-colors"
        >
          Features
        </a>
        <a
          href="#how-it-works"
          className="text-sm text-white/50 hover:text-white/90 transition-colors"
        >
          How it works
        </a>
        <a
          href="#pricing"
          className="text-sm text-white/50 hover:text-white/90 transition-colors"
        >
          Pricing
        </a>
      </div>

      {/* CTA */}
      <a
        href={MARKETPLACE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 8.5L6 12.5L14 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Install for VS Code
      </a>
    </nav>
  );
}
