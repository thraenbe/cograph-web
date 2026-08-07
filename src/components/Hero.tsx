import GraphAnimation from "./GraphAnimation";
import JoinWaitlist from "./JoinWaitlist";
import Logo from "./Logo";
import { MARKETPLACE_URL, LANGUAGES } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Dot grid — neutral, because colour here would be decoration */}
      <div
        className="absolute inset-0 pointer-events-none bg-dot-grid bg-dot-32"
      />
      {/* Vignette settles the grid back into the ground */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 25%, #0b0f14 100%)",
        }}
      />
      {/* A single soft signal-green bloom — the 2% */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "38%",
          left: "38%",
          width: "720px",
          height: "480px",
          background:
            "radial-gradient(ellipse at center, rgba(55,211,155,0.10) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — Text content */}
          <div className="flex flex-col gap-8">
            <Logo size={34} />

            {/* Headline */}
            <div className="flex flex-col gap-5">
              <h1 className="font-display font-bold text-4xl lg:text-[3.4rem] leading-[1.08] tracking-display-tight text-ink">
                Lost in your AI generated codebase?
                <br />
                <span className="text-signal">
                  Try CoGraph to get back into the driver&apos;s seat.
                </span>
              </h1>
              <p className="text-base lg:text-lg text-ink-muted copy max-w-lg">
                The AI writes the code. You need to understand it. CoGraph turns
                your codebase into a living knowledge graph, so you can see how
                every piece connects, even as AI rewrites it underneath you.{" "}
                <span className="text-ink-soft font-medium">
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
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-md bg-signal text-ground font-semibold text-sm hover:bg-[#4ae0aa] transition-colors"
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
              <JoinWaitlist className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-edge text-ink-muted font-medium text-sm hover:border-ink-dim hover:text-ink transition-colors" />
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
              <div className="flex items-center gap-2 font-mono text-xs text-ink-dim">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M7 1.5L8.545 5.13L12.5 5.635L9.75 8.315L10.59 12.25L7 10.255L3.41 12.25L4.25 8.315L1.5 5.635L5.455 5.13L7 1.5Z"
                    fill="#566273"
                  />
                </svg>
                <span>{LANGUAGES.join(" · ")}</span>
              </div>
              <span className="text-edge">|</span>
              <span className="font-mono text-xs text-ink-dim">
                Free VS Code extension
              </span>
            </div>
          </div>

          {/* Right — Graph animation */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Graph container */}
            <div className="relative w-full max-w-xl lg:max-w-2xl rounded-lg border border-edge overflow-hidden bg-card">
              {/* Editor chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-edge">
                <span className="w-2.5 h-2.5 rounded-full bg-edge" />
                <span className="w-2.5 h-2.5 rounded-full bg-edge" />
                <span className="w-2.5 h-2.5 rounded-full bg-edge" />
                <span className="ml-3 font-mono text-xs text-ink-dim">
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
