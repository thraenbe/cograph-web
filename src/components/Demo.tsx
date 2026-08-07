import Image from "next/image";
import { MARKETPLACE_URL } from "@/lib/site";

// A first look at CoGraph Review. Frames the hosted demo as an early,
// interactive *preview* — distinct from the shipped VS Code extension.
export default function Demo() {
  return (
    <section id="demo" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Thin top divider — keeps the page one continuous dark surface */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Single soft signal bloom behind the header */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 50% 35%, rgba(55,211,155,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 flex flex-col items-center text-center gap-11 lg:gap-14">
        {/* Header block — kept narrow and centered */}
        <div className="flex flex-col items-center gap-6 max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="label text-[10px] text-signal">
              Preview · CoGraph Review
            </span>
            <span className="label inline-flex items-center rounded-full border border-edge px-2.5 py-1 text-[10px] text-ink-dim">
              Early preview
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-display font-bold text-3xl lg:text-5xl tracking-display-tight leading-[1.1] text-ink">
            A first look at{" "}
            <span className="text-signal">where CoGraph is going.</span>
          </h2>

          {/* Body */}
          <p className="text-base lg:text-lg text-ink-muted copy max-w-xl">
            A working VS Code prototype you can install today.
          </p>
        </div>

        {/* Product shot — the CoGraph extension running live in VS Code */}
        <figure className="relative w-full max-w-5xl">
          {/* Quiet bloom behind the frame — one hue, low weight */}
          <div
            className="absolute -inset-x-10 -inset-y-8 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 55% 65% at 50% 42%, rgba(55,211,155,0.12) 0%, transparent 70%)",
            }}
          />

          <div className="relative rounded-lg overflow-hidden border border-edge bg-card">
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

          {/* Caption — grounded in what the shot actually shows */}
          <figcaption className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-xs text-ink-dim">
            <span>CoGraph for VS Code</span>
            <span className="text-edge">·</span>
            <span>Live call graph</span>
            <span className="text-edge">·</span>
            <span>Static &amp; dynamic views</span>
          </figcaption>
        </figure>

        {/* CTA — the extension is the way in */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href={MARKETPLACE_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-md bg-signal text-ground font-semibold text-sm hover:bg-[#4ae0aa] transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <rect x="2.5" y="2.5" width="6.5" height="6.5" rx="1" fill="currentColor" opacity="0.9" />
              <rect x="11" y="2.5" width="6.5" height="6.5" rx="1" fill="currentColor" opacity="0.7" />
              <rect x="2.5" y="11" width="6.5" height="6.5" rx="1" fill="currentColor" opacity="0.7" />
              <rect x="11" y="11" width="6.5" height="6.5" rx="1" fill="currentColor" opacity="0.5" />
            </svg>
            Try VS-Code Extension
          </a>
        </div>
      </div>
    </section>
  );
}
