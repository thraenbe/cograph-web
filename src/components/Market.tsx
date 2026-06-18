// Market section — DELIBERATELY qualitative. Per founder constraints: no
// TAM/SAM/SOM, no dollar figures, no headcounts, no nested-circle diagram.
// Directional thesis only, with a growth motif instead of a sized chart.

const whyNow = [
  {
    color: "#3b6ef8",
    title: "A booming category",
    desc: "AI coding tools are one of the fastest-growing categories in all of developer tooling.",
  },
  {
    color: "#22c55e",
    title: "More developers every year",
    desc: "The population of professional developers keeps growing — and every one of them now ships AI-assisted code.",
  },
  {
    color: "#2dd4bf",
    title: "The problem compounds",
    desc: "The AI tailwind makes understanding harder over time, not easier. The gap widens as the code multiplies.",
  },
];

export default function Market() {
  return (
    <section id="market" className="relative py-24 bg-bg-2 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — thesis */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="w-6 h-px bg-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary">
                Market · Why now
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight leading-tight">
              Selling shovels
              <br />
              <span className="text-white/45">in a gold rush.</span>
            </h2>
            <p className="text-base text-white/55 leading-relaxed">
              We don&apos;t bet on which AI coding tool wins. We bet that they
              all keep generating more code — and that someone has to understand
              what comes out. The more shovels sold, the more ground there is to
              map.
            </p>

            {/* Structural insight — the most important line */}
            <div
              className="rounded-xl p-6 lg:p-7 border border-white/[0.08]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(45,212,191,0.08) 0%, rgba(13,13,26,0.6) 100%)",
              }}
            >
              <p className="text-lg lg:text-xl leading-relaxed text-white/85">
                Every dollar invested in AI that writes code makes our problem{" "}
                <span className="text-white">bigger, not smaller.</span> The more
                code AI generates, the more there is for a human — or an agent —
                to understand.
              </p>
            </div>
          </div>

          {/* Right — growth motif + why-now points */}
          <div className="flex flex-col gap-8">
            {/* Up-and-to-the-right multiplying lines (no axes, no numbers) */}
            <div
              className="relative rounded-xl border border-white/[0.06] p-6 overflow-hidden"
              style={{ background: "rgba(13,13,26,0.5)" }}
            >
              <GrowthMotif />
              <span className="absolute bottom-4 left-6 text-[10px] font-mono uppercase tracking-widest text-white/25">
                More code · more to understand
              </span>
            </div>

            {/* Why-now directional points */}
            <ul className="flex flex-col gap-4">
              {whyNow.map((point) => (
                <li key={point.title} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: point.color }}
                  />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-white/85">
                      {point.title}
                    </span>
                    <span className="text-sm text-white/45 leading-relaxed">
                      {point.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Diverging lines fanning up-and-to-the-right — a growth/multiplication motif,
// intentionally NOT a sized chart. No axis ticks, no values.
function GrowthMotif() {
  const curves = [
    { d: "M30,150 C120,140 240,120 370,30", color: "#3b6ef8" },
    { d: "M30,150 C120,148 230,140 365,70", color: "#22c55e" },
    { d: "M30,150 C120,150 230,150 360,110", color: "#f97316" },
    { d: "M30,150 C120,155 230,158 355,145", color: "#ec4899" },
  ];
  return (
    <svg
      viewBox="0 0 400 180"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* origin */}
      <circle cx="30" cy="150" r="4" fill="#6b91ff" />
      {curves.map((c, i) => (
        <g key={i}>
          <path
            d={c.d}
            fill="none"
            stroke={c.color}
            strokeWidth="10"
            strokeOpacity="0.12"
            strokeLinecap="round"
          />
          <path
            d={c.d}
            fill="none"
            stroke={c.color}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>
      ))}
      {/* teal "AI" line, dashed + animated, climbing steepest */}
      <path
        d="M30,150 C110,135 220,100 380,15"
        fill="none"
        stroke="#2dd4bf"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="edge-slow"
      />
      {/* end stations */}
      <circle cx="370" cy="30" r="4" fill="#3b6ef8" />
      <circle cx="365" cy="70" r="4" fill="#22c55e" />
      <circle cx="360" cy="110" r="4" fill="#f97316" />
      <circle cx="355" cy="145" r="4" fill="#ec4899" />
      <circle cx="380" cy="15" r="4" fill="#2dd4bf" />
    </svg>
  );
}
