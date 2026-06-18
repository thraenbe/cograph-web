import GraphAnimation from "./GraphAnimation";
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
            {/* Positioning tag */}
            <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/8 text-xs text-primary-light font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Read your codebase like a metro map
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.1] tracking-tight">
                The AI writes
                <br />
                the code.
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(105deg, #3b6ef8 0%, #6b91ff 50%, #ec4899 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  You need to understand it.
                </span>
              </h1>
              <p className="text-base lg:text-lg text-white/55 leading-relaxed max-w-lg">
                CoGraph turns your codebase into a living knowledge graph — so
                you can read it like a metro map, even as AI rewrites it
                underneath you. The free VS Code extension is your way in.
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
                Try the prototype
              </a>
              <a
                href="#vision"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-white/12 text-white/75 font-medium text-sm hover:border-white/25 hover:text-white transition-colors"
              >
                See the vision
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M8 3V13M8 13L4 9M8 13L12 9"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
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
