// TODO: add screenshots — replace placeholder boxes with actual plugin screenshots

export default function Screenshots() {
  return (
    <section className="relative py-24 bg-bg-2">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-6 h-px bg-primary" />
            <span className="text-xs font-mono uppercase tracking-widest text-primary">
              See It In Action
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
            Your codebase,
            <br />
            <span className="text-white/45">finally visible.</span>
          </h2>
        </div>

        {/* Screenshot placeholders — 16:9 aspect ratio */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* TODO: add screenshot — call graph view */}
          <div className="flex flex-col gap-3">
            <div
              className="relative rounded-xl overflow-hidden"
              style={{ aspectRatio: "16 / 9" }}
            >
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 border-2 rounded-xl"
                style={{
                  borderColor: "rgba(59,110,248,0.25)",
                  borderStyle: "dashed",
                  background: "rgba(13,13,26,0.7)",
                }}
              >
                {/* Placeholder grid pattern */}
                <div
                  className="absolute inset-0 rounded-xl opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(59,110,248,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59,110,248,0.08) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                {/* Icon */}
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    className="opacity-30"
                    aria-hidden="true"
                  >
                    <circle cx="20" cy="20" r="5" fill="#3b6ef8" />
                    <circle cx="8" cy="10" r="3.5" fill="#f97316" />
                    <circle cx="32" cy="10" r="3.5" fill="#22c55e" />
                    <circle cx="8" cy="30" r="3.5" fill="#ec4899" />
                    <circle cx="32" cy="30" r="3.5" fill="#eab308" />
                    <line x1="11" y1="12" x2="16.5" y2="17" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
                    <line x1="29" y1="12" x2="23.5" y2="17" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
                    <line x1="11" y1="28" x2="16.5" y2="23" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
                    <line x1="29" y1="28" x2="23.5" y2="23" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
                  </svg>
                  <span className="text-white/30 text-sm font-mono">
                    // TODO: add screenshot
                  </span>
                  <span className="text-white/20 text-xs">
                    Call graph visualization view
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm text-white/35 font-mono px-1">
              Call graph — full project view
            </p>
          </div>

          {/* TODO: add screenshot — git diff / class overlay view */}
          <div className="flex flex-col gap-3">
            <div
              className="relative rounded-xl overflow-hidden"
              style={{ aspectRatio: "16 / 9" }}
            >
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 border-2 rounded-xl"
                style={{
                  borderColor: "rgba(236,72,153,0.25)",
                  borderStyle: "dashed",
                  background: "rgba(13,13,26,0.7)",
                }}
              >
                {/* Placeholder grid pattern */}
                <div
                  className="absolute inset-0 rounded-xl opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(236,72,153,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(236,72,153,0.08) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                {/* Icon */}
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    className="opacity-30"
                    aria-hidden="true"
                  >
                    <rect x="4" y="8" width="14" height="24" rx="2" stroke="#ec4899" strokeWidth="1.5" fill="none" />
                    <rect x="22" y="8" width="14" height="24" rx="2" stroke="#22c55e" strokeWidth="1.5" fill="none" />
                    <line x1="7" y1="15" x2="15" y2="15" stroke="#ec4899" strokeWidth="1" strokeOpacity="0.5" />
                    <line x1="7" y1="19" x2="13" y2="19" stroke="#ec4899" strokeWidth="1" strokeOpacity="0.5" />
                    <line x1="25" y1="15" x2="33" y2="15" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.5" />
                    <line x1="25" y1="19" x2="30" y2="19" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.5" />
                    <line x1="18" y1="20" x2="22" y2="20" stroke="white" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="2 2" />
                  </svg>
                  <span className="text-white/30 text-sm font-mono">
                    // TODO: add screenshot
                  </span>
                  <span className="text-white/20 text-xs">
                    Git diff overlay / class view
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm text-white/35 font-mono px-1">
              Git diff + OOP class overlay
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
