import MetroMap from "./MetroMap";

const dimensions = [
  {
    color: "#3b6ef8",
    name: "Structure",
    desc: "Files, folders & modules",
    tag: null,
  },
  {
    color: "#ec4899",
    name: "Call graph",
    desc: "What calls what",
    tag: "Shipped",
  },
  {
    color: "#22c55e",
    name: "Class hierarchy",
    desc: "OOP overlays",
    tag: null,
  },
  {
    color: "#f97316",
    name: "Git history",
    desc: "Changes across commits",
    tag: null,
  },
  {
    color: "#2dd4bf",
    name: "AI changes",
    desc: "What the agent just touched",
    tag: null,
  },
];

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative py-24 bg-bg-2 overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
        }}
      />
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(59,110,248,0.10) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 45%, transparent 40%, #0d0d1a 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-12 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="w-6 h-px bg-primary" />
            <span className="text-xs font-mono uppercase tracking-widest text-primary">
              The Vision
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight leading-[1.1]">
            Read your repository
            <br />
            <span
              style={{
                background:
                  "linear-gradient(105deg, #3b6ef8 0%, #6b91ff 45%, #2dd4bf 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              like a metro map.
            </span>
          </h2>
          <p className="text-base lg:text-lg text-white/55 leading-relaxed">
            CoGraph turns your codebase into a living knowledge graph — every
            critical dimension on one navigable surface. Structure,
            dependencies, class hierarchies, version-control history, and what
            AI just touched. The invisible architecture, finally drawn.
          </p>
        </div>

        {/* Map + legend */}
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 items-center">
          {/* Metro map panel */}
          <div
            className="relative rounded-xl border border-white/[0.06] overflow-hidden"
            style={{
              background: "rgba(13,13,26,0.6)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs text-white/25 font-mono">
                CoGraph: Knowledge Graph — project
              </span>
            </div>
            <div className="p-5 sm:p-7">
              <MetroMap />
            </div>
          </div>

          {/* Legend + platform note */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-white/35">
                One map, every dimension
              </span>
              <ul className="flex flex-col gap-3">
                {dimensions.map((d) => (
                  <li key={d.name} className="flex items-center gap-3">
                    <span
                      className="w-5 h-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: d.color }}
                    />
                    <span className="text-sm text-white/80 font-medium">
                      {d.name}
                    </span>
                    <span className="text-sm text-white/35">{d.desc}</span>
                    {d.tag && (
                      <span
                        className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full"
                        style={{
                          background: "rgba(236,72,153,0.12)",
                          border: "1px solid rgba(236,72,153,0.3)",
                          color: "#ec4899",
                        }}
                      >
                        {d.tag}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px bg-white/[0.06]" />

            <p className="text-sm text-white/55 leading-relaxed">
              The call graph is the{" "}
              <span className="text-white/85">first line on the map</span> — and
              it&apos;s shipping today. The vision is the whole network: one
              surface that{" "}
              <span className="text-white/85">
                humans and AI agents can navigate
              </span>{" "}
              together. Not a single visualization — the situational-awareness
              layer for your code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
