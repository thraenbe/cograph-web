const stages = [
  {
    num: "01",
    color: "#3b6ef8",
    audience: "Solo developers",
    desc: "Understand AI-generated code before you ship it.",
    note: "The adoption engine — live today.",
    stagger: "lg:translate-y-12",
    roadmap: false,
  },
  {
    num: "02",
    color: "#22c55e",
    audience: "Engineering teams",
    desc: "Review architectural impact, not just diffs. Share graph state as living documentation.",
    note: null,
    stagger: "lg:translate-y-8",
    roadmap: false,
  },
  {
    num: "03",
    color: "#f97316",
    audience: "Enterprises",
    desc: "Architecture oversight across large, multi-team, multi-repo codebases. Self-host and CI/CD integration.",
    note: null,
    stagger: "lg:translate-y-4",
    roadmap: false,
  },
  {
    num: "04",
    color: "#2dd4bf",
    audience: "AI agents",
    desc: "Agents query the knowledge graph via API / MCP to navigate code. The same map that helps humans becomes infrastructure for machines.",
    note: "On the roadmap",
    stagger: "lg:translate-y-0",
    roadmap: true,
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 bg-bg-2 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-5 mb-16 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="w-6 h-px bg-primary" />
            <span className="text-xs font-mono uppercase tracking-widest text-primary">
              Where it goes · Roadmap
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
            One product.
            <br />
            <span className="text-white/45">
              From solo developer to autonomous agent.
            </span>
          </h2>
          <p className="text-base text-white/55 leading-relaxed">
            No second product, no pivot — the same graph, widening its reach.
            Adoption starts with the individual developer and compounds all the
            way to the agents writing the code.
          </p>
        </div>

        {/* Ascending ladder */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:items-start">
          {stages.map((stage, i) => (
            <div
              key={stage.num}
              className={`relative flex flex-col gap-4 rounded-xl p-6 transition-colors ${stage.stagger}`}
              style={{
                background: stage.roadmap
                  ? "rgba(45,212,191,0.05)"
                  : "rgba(13,13,26,0.5)",
                border: stage.roadmap
                  ? "1px dashed rgba(45,212,191,0.4)"
                  : "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-6 right-6 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${stage.color}60, transparent)`,
                }}
              />

              <div className="flex items-center justify-between">
                <span
                  className="font-mono text-2xl font-semibold"
                  style={{ color: `${stage.color}` }}
                >
                  {stage.num}
                </span>
                {stage.roadmap ? (
                  <span
                    className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(45,212,191,0.12)",
                      border: "1px solid rgba(45,212,191,0.35)",
                      color: "#2dd4bf",
                    }}
                  >
                    Next
                  </span>
                ) : (
                  i < stages.length - 1 && (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      aria-hidden="true"
                      className="text-white/20"
                    >
                      <path
                        d="M4 14L14 4M14 4H6M14 4V12"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )
                )}
              </div>

              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: stage.color }}
                />
                <h3 className="font-semibold text-white/90">{stage.audience}</h3>
              </div>

              <p className="text-sm text-white/50 leading-relaxed flex-1">
                {stage.desc}
              </p>

              {stage.note && (
                <p
                  className="text-xs font-mono"
                  style={{ color: stage.roadmap ? "#2dd4bf" : "rgba(255,255,255,0.4)" }}
                >
                  {stage.note}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Strategic kicker */}
        <p className="mt-16 max-w-3xl text-lg leading-relaxed text-white/70">
          The same map that helps a human read the code becomes the interface an
          agent reads it through.{" "}
          <span className="text-white">
            CoGraph isn&apos;t just for developers — it&apos;s infrastructure for
            whatever writes the code next.
          </span>
        </p>
      </div>
    </section>
  );
}
