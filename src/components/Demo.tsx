import Image from "next/image";
import { DEMO_URL, MARKETPLACE_URL } from "@/lib/site";

// A first look at CoGraph Review. Frames the hosted demo as an early,
// interactive *preview* — distinct from the shipped VS Code extension.
export default function Demo() {
  return (
    <section id="demo" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Thin top divider — keeps the page one continuous dark surface */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
        }}
      />

      {/* Soft centered glow, reusing the hero's blue accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 50% 40%, rgba(59,110,248,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 flex flex-col items-center text-center gap-11 lg:gap-14">
        {/* Header block — kept narrow and centered */}
        <div className="flex flex-col items-center gap-6 max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-primary-light">
              Preview · CoGraph Review
            </span>
            <span className="inline-flex items-center rounded-full border border-white/12 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest text-white/50">
              Early preview
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight leading-[1.1]">
            A first look at{" "}
            <span
              style={{
                background:
                  "linear-gradient(105deg, #3b6ef8 0%, #6b91ff 35%, #ec4899 70%, #2dd4bf 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              where CoGraph is going.
            </span>
          </h2>

          {/* Body */}
          <p className="text-base lg:text-lg text-white/55 leading-relaxed max-w-xl">
            A working VS Code prototype you can install today — plus an early
            demo of how reviewing pull requests could look with CoGraph Review.
          </p>
        </div>

        {/* Product shot — the CoGraph extension running live in VS Code */}
        <figure className="relative w-full max-w-5xl">
          {/* Brand-tinted glow bloom behind the frame */}
          <div
            className="absolute -inset-x-10 -inset-y-8 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 55% 65% at 50% 42%, rgba(59,110,248,0.20) 0%, rgba(236,72,153,0.06) 45%, transparent 72%)",
            }}
          />

          {/* Hairline gradient ring around the frame */}
          <div
            className="relative rounded-xl p-px shadow-2xl shadow-primary/20"
            style={{
              background:
                "linear-gradient(135deg, rgba(59,110,248,0.45) 0%, rgba(255,255,255,0.06) 38%, rgba(45,212,191,0.28) 100%)",
            }}
          >
            <div className="rounded-[11px] overflow-hidden bg-bg-2 border border-white/[0.04]">
              <Image
                src="/cograph-extension.png"
                alt="The CoGraph VS Code extension showing a live, colour-coded call graph of a codebase alongside its chat and layout controls."
                width={2400}
                height={1482}
                quality={90}
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="block w-full h-auto"
              />
            </div>
          </div>

          {/* Caption — grounded in what the shot actually shows */}
          <figcaption className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-mono text-white/40">
            <span>CoGraph for VS Code</span>
            <span className="text-white/15">·</span>
            <span>Live call graph</span>
            <span className="text-white/15">·</span>
            <span>Static &amp; dynamic views</span>
          </figcaption>
        </figure>

        {/* CTAs — mirror the hero: primary = extension, secondary = review demo */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href={MARKETPLACE_URL}
            target="_blank"
            rel="noopener"
            className="btn-shimmer inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-md text-white font-medium text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <rect x="2.5" y="2.5" width="6.5" height="6.5" rx="1" fill="currentColor" opacity="0.9" />
              <rect x="11" y="2.5" width="6.5" height="6.5" rx="1" fill="currentColor" opacity="0.7" />
              <rect x="2.5" y="11" width="6.5" height="6.5" rx="1" fill="currentColor" opacity="0.7" />
              <rect x="11" y="11" width="6.5" height="6.5" rx="1" fill="currentColor" opacity="0.5" />
            </svg>
            Try VS-Code Extension
          </a>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md border border-white/12 text-white/75 font-medium text-sm hover:border-white/25 hover:text-white transition-colors"
          >
            Try CoGraph Review
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M2.5 8H13M9.5 4.5L13 8L9.5 11.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
