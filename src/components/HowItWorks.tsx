const steps = [
  {
    number: "01",
    color: "#3b6ef8",
    title: "Open any Python, TypeScript, or JavaScript project",
    desc: "No configuration files. No setup wizards. Just open your project folder in VS Code like you always do.",
    detail: null,
  },
  {
    number: "02",
    color: "#22c55e",
    title: "Run CoGraph: Visualize Project",
    desc: "Hit ⌘⇧P (or Ctrl+Shift+P) and run the command. Cograph parses your project and builds the call graph in seconds.",
    detail: "CoGraph: Visualize Project",
  },
  {
    number: "03",
    color: "#ec4899",
    title: "Explore the live call graph",
    desc: "Pan, zoom, click nodes to inspect function details. The graph updates automatically as you — or your AI agent — changes the code.",
    detail: null,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-16">
          <div className="flex items-center gap-2">
            <span className="w-6 h-px bg-primary" />
            <span className="text-xs font-mono uppercase tracking-widest text-primary">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
            Zero config.
            <br />
            <span className="text-white/45">Instant visibility.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col gap-5">
              {/* Connector line between steps (desktop only) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-[calc(100%+12px)] w-[calc(100%-24px)] h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
                    zIndex: 0,
                  }}
                />
              )}

              {/* Step number badge */}
              <div className="relative z-10 flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center font-mono text-lg font-semibold flex-shrink-0"
                  style={{
                    background: `${step.color}15`,
                    border: `1px solid ${step.color}30`,
                    color: step.color,
                  }}
                >
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3">
                <h3 className="font-medium text-white/90 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed">
                  {step.desc}
                </p>
                {step.detail && (
                  <div
                    className="inline-flex w-fit items-center gap-2 px-3 py-2 rounded-md font-mono text-sm"
                    style={{
                      background: "rgba(34,197,94,0.08)",
                      border: "1px solid rgba(34,197,94,0.2)",
                      color: "#22c55e",
                    }}
                  >
                    <span className="text-white/30">⌘⇧P</span>
                    <span>&gt; {step.detail}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Languages supported */}
        <div className="mt-16 pt-10 border-t border-white/[0.06]">
          <p className="text-xs text-white/30 uppercase tracking-widest mb-4 font-mono">
            Supported languages
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "Python", color: "#3b6ef8" },
              { name: "TypeScript", color: "#22c55e" },
              { name: "JavaScript", color: "#eab308" },
              { name: "More coming", color: "rgba(255,255,255,0.2)", dimmed: true },
            ].map((lang) => (
              <div
                key={lang.name}
                className="px-4 py-2 rounded-full text-sm font-mono"
                style={{
                  background: `${lang.color}12`,
                  border: `1px solid ${lang.color}30`,
                  color: (lang as { dimmed?: boolean }).dimmed
                    ? "rgba(255,255,255,0.25)"
                    : lang.color,
                }}
              >
                {lang.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
