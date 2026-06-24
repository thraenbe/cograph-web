import { MARKETPLACE_URL, GITHUB_URL, CONTACT_URL, LANGUAGES } from "@/lib/site";

export default function CtaBanner() {
  return (
    <section id="get-started" className="relative py-24 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
        }}
      />

      {/* Background glow effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(59,110,248,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(59,110,248,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, #080810 100%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-2">
          <span className="w-6 h-px bg-primary" />
          <span className="text-xs font-mono uppercase tracking-widest text-primary">
            Join the journey
          </span>
          <span className="w-6 h-px bg-primary" />
        </div>

        {/* Headline */}
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
            Try the demo.
            <br />
            <span className="text-white/45">Then tell us what&apos;s missing.</span>
          </h2>
          <p className="text-white/45 text-lg leading-relaxed max-w-lg mx-auto">
            Open the demo and visualize your first call graph in seconds.
            We&apos;re early, and we want users and perspective, not just
            visitors.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
          <a
            href={MARKETPLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer inline-flex items-center gap-3 px-7 py-4 rounded-lg text-white font-medium text-base shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-shadow"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <rect x="2.5" y="2.5" width="6.5" height="6.5" rx="1" fill="currentColor" opacity="0.9" />
              <rect x="11" y="2.5" width="6.5" height="6.5" rx="1" fill="currentColor" opacity="0.7" />
              <rect x="2.5" y="11" width="6.5" height="6.5" rx="1" fill="currentColor" opacity="0.7" />
              <rect x="11" y="11" width="6.5" height="6.5" rx="1" fill="currentColor" opacity="0.5" />
            </svg>
            Try VS-Code Extension
          </a>
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-lg border border-white/12 text-white/80 font-medium text-base hover:border-white/25 hover:text-white transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            Connect on LinkedIn
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-lg border border-white/12 text-white/80 font-medium text-base hover:border-white/25 hover:text-white transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            Star on GitHub
          </a>
        </div>

        {/* Fine print */}
        <p className="text-white/25 text-sm font-mono">
          Works with {LANGUAGES.join(" · ")}
        </p>
      </div>
    </section>
  );
}
