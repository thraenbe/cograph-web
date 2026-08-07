import Link from "next/link";
import Logo from "./Logo";
import { MARKETPLACE_URL, GITHUB_URL, CONTACT_URL } from "@/lib/site";

// A small piece of the graph motif — footers are one of the places the
// grammar is meant to appear (06 · Where it goes). 45°/90° only, filled
// leaves, hollow interchanges, one hue per route.
function FooterMotif() {
  return (
    <svg
      width="100"
      height="30"
      viewBox="0 0 100 30"
      fill="none"
      aria-hidden="true"
      className="opacity-70"
    >
      <path d="M6 24H34" stroke="#37d39b" strokeWidth="2.3" strokeLinecap="round" />
      <path d="M34 24H76" stroke="#ffb454" strokeWidth="2.3" strokeLinecap="round" />
      <path d="M34 24 52 6" stroke="#4f8cff" strokeWidth="2.3" strokeLinecap="round" />
      <path d="M76 24 94 6" stroke="#ff6b9a" strokeWidth="2.3" strokeLinecap="round" />
      <circle cx="6" cy="24" r="3.5" fill="#e8eef5" />
      <circle cx="52" cy="6" r="3.5" fill="#e8eef5" />
      <circle cx="94" cy="6" r="3.5" fill="#e8eef5" />
      <circle cx="34" cy="24" r="4.5" fill="#0b0f14" stroke="#e8eef5" strokeWidth="2.3" />
      <circle cx="76" cy="24" r="4.5" fill="#0b0f14" stroke="#e8eef5" strokeWidth="2.3" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative border-t border-edge py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left — logo + tagline */}
          <div className="flex flex-col gap-3">
            <Logo size={24} />
            <p className="text-xs text-ink-dim max-w-xs copy">
              CoGraph — read your codebase like a metro map.
            </p>
            <p className="font-mono text-xs text-ink-dim">MIT License</p>
            <FooterMotif />
          </div>

          {/* Right — links */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            <div className="flex flex-col gap-3">
              <span className="label text-[10px] text-ink-dim">Links</span>
              <div className="flex flex-row flex-wrap gap-x-5 gap-y-2">
                <a
                  href={MARKETPLACE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-muted hover:text-signal transition-colors"
                >
                  VS Code Marketplace
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-muted hover:text-signal transition-colors flex items-center gap-1.5"
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
                <a
                  href={CONTACT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-muted hover:text-signal transition-colors flex items-center gap-1.5"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-edge flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-ink-dim">
            MIT License · © {new Date().getFullYear()} CoGraph.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/impressum"
              className="font-mono text-xs text-ink-dim hover:text-signal transition-colors"
            >
              Impressum
            </Link>
            <p className="font-mono text-xs text-ink-dim/70">
              Read your codebase like a metro map
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
