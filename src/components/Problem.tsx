export default function Problem() {
  return (
    <section className="relative py-24 border-t border-white/[0.06]">
      {/* Subtle top gradient from hero */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(59,110,248,0.3), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — problem statement */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="w-6 h-px bg-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary">
                The Problem
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-semibold leading-tight tracking-tight">
              AI writes the code.
              <br />
              <span className="text-white/50">Can you understand it?</span>
            </h2>
            <div className="flex flex-col gap-4 text-white/55 text-base leading-relaxed">
              <p>
                Copilot, Cursor, Claude — AI coding agents are shipping
                features at unprecedented speed. But every new function,
                every refactor, every generated file makes the call graph
                harder to hold in your head.
              </p>
              <p>
                The mental model you had an hour ago is already out of date.
                Code review catches bugs, not architecture drift. And
                onboarding a new engineer into an AI-accelerated codebase?
                Good luck.
              </p>
            </div>
          </div>

          {/* Right — stat + key insight */}
          <div className="flex flex-col gap-6">
            {/* Big stat */}
            <div
              className="rounded-xl p-8 border border-white/[0.08]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(59,110,248,0.08) 0%, rgba(13,13,26,0.6) 100%)",
              }}
            >
              <div
                className="text-6xl font-bold tracking-tight mb-2"
                style={{
                  background:
                    "linear-gradient(105deg, #3b6ef8, #6b91ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                40%
              </div>
              <div className="text-white/70 text-base leading-relaxed">
                of new production code is AI-assisted — and growing. The
                humans responsible for that code need tools that keep up.
              </div>
            </div>

            {/* Three pain points */}
            <div className="flex flex-col gap-3">
              {[
                {
                  color: "#f97316",
                  text: "Can't see what calls what after an AI refactor",
                },
                {
                  color: "#ec4899",
                  text: "Architecture drift goes unnoticed until it's a crisis",
                },
                {
                  color: "#22c55e",
                  text: "New engineers lost in unfamiliar, AI-generated code",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-white/55 text-sm leading-relaxed">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
