import Image from "next/image";
import CopyCommand from "./CopyCommand";
import { ArrowRight, ArrowUpRight, ExtensionIcon, GitHubIcon } from "./ui";
import {
  CHANGELOG_URL,
  EXTENSION,
  GITHUB_URL,
  INSTALL_COMMAND,
  MARKETPLACE_URL,
} from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 lg:pt-40">
      {/* Dot grid — neutral, because colour here would be decoration */}
      <div className="pointer-events-none absolute inset-0 bg-dot-grid bg-dot-32 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_20%,black,transparent)]" />
      {/* A single soft signal-green bloom — the 2% */}
      <div
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[640px] w-[1100px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(55,211,155,0.10) 0%, transparent 62%)",
        }}
      />

      <div className="container-site relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Release pill */}
          <a
            href={CHANGELOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="fade-in-up group inline-flex items-center gap-3 rounded-full border border-edge bg-card/70 py-1 pl-1 pr-4 text-xs text-ink-muted transition-colors hover:border-ink-dim hover:text-ink"
          >
            <span className="label rounded-full bg-signal/10 px-2.5 py-1 text-[10px] text-signal">
              v{EXTENSION.version}
            </span>
            Free on the VS Code Marketplace
            <span className="text-ink-dim transition-transform group-hover:translate-x-0.5">
              <ArrowRight size={14} />
            </span>
          </a>

          <h1
            className="fade-in-up mt-8 font-display text-[2.6rem] font-bold leading-[1.02] tracking-display-tight text-ink sm:text-6xl lg:text-[5.2rem]"
            style={{ animationDelay: "60ms" }}
          >
            <span className="block text-balance">Writing code got cheap.</span>
            <span className="block text-balance text-ink-muted">Reading it did not.</span>
          </h1>

          <p
            className="fade-in-up mt-7 max-w-2xl text-base text-ink-muted copy sm:text-lg lg:text-xl lg:leading-[1.6]"
            style={{ animationDelay: "120ms" }}
          >
            CoGraph derives a call graph from your repository — every function a
            node, every call an edge — and opens it beside your code in VS Code.{" "}
            <span className="text-ink-soft">
              Parsed from the syntax tree: never run, never guessed.
            </span>
          </p>

          <div
            className="fade-in-up mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
            style={{ animationDelay: "180ms" }}
          >
            <a
              href={MARKETPLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full px-6 sm:w-auto"
            >
              <ExtensionIcon size={16} />
              Install for VS Code
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full px-6 sm:w-auto"
            >
              <GitHubIcon size={16} />
              View the source
              <ArrowUpRight />
            </a>
          </div>

          <div className="fade-in-up mt-6 w-full sm:w-auto" style={{ animationDelay: "240ms" }}>
            <CopyCommand command={INSTALL_COMMAND} className="w-full sm:w-auto" />
          </div>
        </div>

        {/* Product shot — the real extension, not an illustration */}
        <figure
          className="fade-in-up relative mx-auto mt-16 max-w-6xl lg:mt-20"
          style={{ animationDelay: "320ms" }}
        >
          <div
            className="pointer-events-none absolute -inset-x-16 -top-16 bottom-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 55% at 50% 30%, rgba(55,211,155,0.10) 0%, transparent 70%)",
            }}
          />
          <div className="relative overflow-hidden rounded-[14px] border border-edge bg-card shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)] ring-1 ring-white/[0.03]">
            <Image
              src="/product/extension-window.png"
              alt="The CoGraph extension in VS Code: a call graph of the extension's own analyzer scripts, grouped by file, with the layout controls and the chat panel beside it."
              width={2234}
              height={1318}
              priority
              quality={90}
              sizes="(max-width: 1200px) 100vw, 1152px"
              className="block h-auto w-full"
            />
          </div>
          {/* Fade the bottom of the shot into the ground */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-ground" />
          <figcaption className="relative -mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-xs text-ink-dim">
            <span>CoGraph for VS Code</span>
            <span className="text-edge">·</span>
            <span>CoGraph&apos;s own analyzers, read as a graph</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
