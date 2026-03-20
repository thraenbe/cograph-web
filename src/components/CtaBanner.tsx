const MARKETPLACE_URL =
  "https://marketplace.visualstudio.com/items?itemName=thraenbe.cograph";

export default function CtaBanner() {
  return (
    <section className="relative py-24 overflow-hidden">
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
            Get started
          </span>
          <span className="w-6 h-px bg-primary" />
        </div>

        {/* Headline */}
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
            Start for free.
            <br />
            <span className="text-white/45">No config, no accounts.</span>
          </h2>
          <p className="text-white/45 text-lg leading-relaxed max-w-lg mx-auto">
            Install in seconds. Visualize your first call graph before you
            finish your coffee.
          </p>
        </div>

        {/* CTA */}
        <a
          href={MARKETPLACE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shimmer inline-flex items-center gap-3 px-8 py-4 rounded-lg text-white font-medium text-base shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-shadow"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x="2.5"
              y="2.5"
              width="6.5"
              height="6.5"
              rx="1"
              fill="currentColor"
              opacity="0.9"
            />
            <rect
              x="11"
              y="2.5"
              width="6.5"
              height="6.5"
              rx="1"
              fill="currentColor"
              opacity="0.7"
            />
            <rect
              x="2.5"
              y="11"
              width="6.5"
              height="6.5"
              rx="1"
              fill="currentColor"
              opacity="0.7"
            />
            <rect
              x="11"
              y="11"
              width="6.5"
              height="6.5"
              rx="1"
              fill="currentColor"
              opacity="0.5"
            />
          </svg>
          Install for VS Code — it's free
        </a>

        {/* Fine print */}
        <p className="text-white/25 text-sm font-mono">
          Works with Python · TypeScript · JavaScript
        </p>
      </div>
    </section>
  );
}
