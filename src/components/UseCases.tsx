const useCases = [
  {
    color: "#3b6ef8",
    emoji: null,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="3.5" stroke="#3b6ef8" strokeWidth="1.5" fill="none" />
        <path d="M5 19c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#3b6ef8" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
    audience: "Solo developers",
    headline: "Ship faster, break less",
    desc: "When you're the entire team, architectural clarity isn't a nice-to-have — it's the difference between a fast iteration loop and debugging for hours. Cograph keeps your mental model current without effort.",
    bullets: [
      "Understand AI-generated code before shipping it",
      "Spot dead code and orphaned functions",
      "Onboard faster to unfamiliar repos",
    ],
  },
  {
    color: "#22c55e",
    emoji: null,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="8" cy="9" r="2.5" stroke="#22c55e" strokeWidth="1.5" fill="none" />
        <circle cx="16" cy="9" r="2.5" stroke="#22c55e" strokeWidth="1.5" fill="none" />
        <path d="M3 19c0-2.761 2.239-5 5-5h8c2.761 0 5 2.239 5 5" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
    audience: "Engineering teams",
    headline: "Code review that sees the whole picture",
    desc: "PR reviews catch logic bugs. Cograph catches architecture bugs. Share graph snapshots in reviews to communicate intent, not just code.",
    bullets: [
      "Review architectural impact of PRs",
      "Identify unexpected cross-module dependencies",
      "Share graph state as team documentation",
    ],
  },
  {
    color: "#f97316",
    emoji: null,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="13" width="5" height="8" rx="1" stroke="#f97316" strokeWidth="1.5" fill="none" />
        <rect x="9.5" y="8" width="5" height="13" rx="1" stroke="#f97316" strokeWidth="1.5" fill="none" />
        <rect x="16" y="3" width="5" height="18" rx="1" stroke="#f97316" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    audience: "Tech leads & managers",
    headline: "Architectural oversight, not micromanagement",
    desc: "Get a bird's-eye view of how your codebase is evolving — especially in high-velocity AI-driven sprints — without interrupting engineers or reading every line of code.",
    bullets: [
      "Track architecture health over time",
      "Spot coupling and complexity spikes early",
      "Communicate system structure to stakeholders",
    ],
  },
];

export default function UseCases() {
  return (
    <section className="relative py-24">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-14">
          <div className="flex items-center gap-2">
            <span className="w-6 h-px bg-primary" />
            <span className="text-xs font-mono uppercase tracking-widest text-primary">
              Use Cases
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
            Built for every developer
            <br />
            <span className="text-white/45">on AI-accelerated teams</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((uc, i) => (
            <div
              key={i}
              className="group relative flex flex-col gap-6 rounded-xl p-7 border border-white/[0.07] hover:border-white/[0.12] transition-colors"
              style={{ background: "rgba(13,13,26,0.5)" }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-px rounded-t-xl opacity-60"
                style={{
                  background: `linear-gradient(90deg, transparent, ${uc.color}50, transparent)`,
                }}
              />

              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${uc.color}15`,
                    border: `1px solid ${uc.color}25`,
                  }}
                >
                  {uc.icon}
                </div>
                <div className="flex flex-col gap-0.5">
                  <span
                    className="text-xs font-mono uppercase tracking-widest"
                    style={{ color: uc.color }}
                  >
                    {uc.audience}
                  </span>
                  <h3 className="font-semibold text-white/90 leading-snug">
                    {uc.headline}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-white/45 leading-relaxed">
                {uc.desc}
              </p>

              <ul className="flex flex-col gap-2.5">
                {uc.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <div
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: `${uc.color}80` }}
                    />
                    <span className="text-xs text-white/40 leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
