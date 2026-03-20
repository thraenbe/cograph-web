const MARKETPLACE_URL =
  "https://marketplace.visualstudio.com/items?itemName=thraenbe.cograph";
const GITHUB_URL = "https://github.com/thraenbe/cograph";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left — logo + tagline */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="3.5" fill="#3b6ef8" />
                <circle cx="4" cy="7" r="2.5" fill="#f97316" opacity="0.7" />
                <circle cx="20" cy="7" r="2.5" fill="#22c55e" opacity="0.7" />
                <circle cx="4" cy="17" r="2.5" fill="#ec4899" opacity="0.7" />
                <circle cx="20" cy="17" r="2.5" fill="#eab308" opacity="0.7" />
                <line
                  x1="6.2"
                  y1="8.4"
                  x2="9.5"
                  y2="10.8"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                />
                <line
                  x1="17.8"
                  y1="8.4"
                  x2="14.5"
                  y2="10.8"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                />
                <line
                  x1="6.2"
                  y1="15.6"
                  x2="9.5"
                  y2="13.2"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                />
                <line
                  x1="17.8"
                  y1="15.6"
                  x2="14.5"
                  y2="13.2"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                />
              </svg>
              <span className="text-white/75 font-semibold tracking-[0.12em] text-sm uppercase">
                Cograph
              </span>
            </div>
            <p className="text-xs text-white/30 max-w-xs leading-relaxed">
              Real-time call graph visualization for AI-driven development.
              Making the invisible visible.
            </p>
            <p className="text-xs text-white/20 font-mono">MIT License</p>
          </div>

          {/* Right — links */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] text-white/25 uppercase tracking-widest font-mono">
                Links
              </span>
              <div className="flex flex-col gap-2">
                <a
                  href={MARKETPLACE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/40 hover:text-white/75 transition-colors"
                >
                  VS Code Marketplace
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/40 hover:text-white/75 transition-colors flex items-center gap-1.5"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[10px] text-white/25 uppercase tracking-widest font-mono">
                Navigate
              </span>
              <div className="flex flex-col gap-2">
                <a
                  href="#features"
                  className="text-sm text-white/40 hover:text-white/75 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className="text-sm text-white/40 hover:text-white/75 transition-colors"
                >
                  How it works
                </a>
                <a
                  href="#pricing"
                  className="text-sm text-white/40 hover:text-white/75 transition-colors"
                >
                  Pricing
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} Cograph. Open source under MIT License.
          </p>
          <p className="text-xs text-white/15 font-mono">
            Real-Time Intelligence for AI-Driven Development
          </p>
        </div>
      </div>
    </footer>
  );
}
