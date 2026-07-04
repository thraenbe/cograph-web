import GraphAnimation from "./GraphAnimation";
import JoinWaitlist from "./JoinWaitlist";
import { MARKETPLACE_URL, LANGUAGES } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(59,110,248,0.12) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      {/* Radial vignette over grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, #080810 100%)",
        }}
      />
      {/* Blue glow in center */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "30%",
          left: "35%",
          width: "600px",
          height: "400px",
          background:
            "radial-gradient(ellipse at center, rgba(59,110,248,0.1) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — Text content */}
          <div className="flex flex-col gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="3.5" fill="#3b6ef8" />
                <circle cx="4" cy="7" r="2.5" fill="#f97316" />
                <circle cx="20" cy="7" r="2.5" fill="#22c55e" />
                <circle cx="4" cy="17" r="2.5" fill="#ec4899" />
                <circle cx="20" cy="17" r="2.5" fill="#eab308" />
                <line
                  x1="6.2"
                  y1="8.4"
                  x2="9.5"
                  y2="10.8"
                  stroke="rgba(255,255,255,0.25)"
                  strokeWidth="1"
                />
                <line
                  x1="17.8"
                  y1="8.4"
                  x2="14.5"
                  y2="10.8"
                  stroke="rgba(255,255,255,0.25)"
                  strokeWidth="1"
                />
                <line
                  x1="6.2"
                  y1="15.6"
                  x2="9.5"
                  y2="13.2"
                  stroke="rgba(255,255,255,0.25)"
                  strokeWidth="1"
                />
                <line
                  x1="17.8"
                  y1="15.6"
                  x2="14.5"
                  y2="13.2"
                  stroke="rgba(255,255,255,0.25)"
                  strokeWidth="1"
                />
              </svg>
              <span className="text-white/90 font-semibold tracking-[0.12em] text-base uppercase">
                Cograph
              </span>
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl lg:text-5xl font-semibold leading-[1.12] tracking-tight">
                Lost in your AI generated codebase?
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(105deg, #3b6ef8 0%, #6b91ff 35%, #ec4899 70%, #2dd4bf 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Try CoGraph to get back into the driver&apos;s seat.
                </span>
              </h1>
              <p className="text-base lg:text-lg text-white/55 leading-relaxed max-w-lg">
                The AI writes the code. You need to understand it. CoGraph turns
                your codebase into a living knowledge graph, so you can see how
                every piece connects, even as AI rewrites it underneath you.{" "}
                <span className="text-white/80">
                  Try the demo and join the waitlist.
                </span>
              </p>
            </div>

            {/* CTAs — primary: try the prototype, secondary: see the vision */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={MARKETPLACE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-white font-medium text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="2"
                    y="2"
                    width="6"
                    height="6"
                    rx="1"
                    fill="currentColor"
                    opacity="0.9"
                  />
                  <rect
                    x="10"
                    y="2"
                    width="6"
                    height="6"
                    rx="1"
                    fill="currentColor"
                    opacity="0.7"
                  />
                  <rect
                    x="2"
                    y="10"
                    width="6"
                    height="6"
                    rx="1"
                    fill="currentColor"
                    opacity="0.7"
                  />
                  <rect
                    x="10"
                    y="10"
                    width="6"
                    height="6"
                    rx="1"
                    fill="currentColor"
                    opacity="0.5"
                  />
                </svg>
                Try VS-Code Extension
              </a>
              <JoinWaitlist className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-white/12 text-white/75 font-medium text-sm hover:border-white/25 hover:text-white transition-colors" />
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-white/35">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M7 1.5L8.545 5.13L12.5 5.635L9.75 8.315L10.59 12.25L7 10.255L3.41 12.25L4.25 8.315L1.5 5.635L5.455 5.13L7 1.5Z"
                    fill="rgba(234,179,8,0.7)"
                  />
                </svg>
                <span>{LANGUAGES.join(" · ")}</span>
              </div>
              <span className="text-white/15">|</span>
              <span className="text-xs text-white/35">Free VS Code extension</span>
            </div>
          </div>

          {/* Right — Graph animation */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Outer glow ring behind graph */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(59,110,248,0.07) 0%, transparent 70%)",
              }}
            />
            {/* Graph container */}
            <div
              className="relative w-full max-w-xl lg:max-w-2xl rounded-xl border border-white/[0.06] overflow-hidden"
              style={{
                background: "rgba(13,13,26,0.6)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Fake editor chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs text-white/25 font-mono">
                  CoGraph: Call Graph — project
                </span>
              </div>
              <div className="p-4">
                <GraphAnimation />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
