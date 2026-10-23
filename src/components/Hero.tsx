import Image from "next/image";
import CopyCommand from "./CopyCommand";
import JoinWaitlist from "./JoinWaitlist";
import type { ExtensionStats } from "@/lib/marketplace";
import { CHANGELOG_URL, GITHUB_URL, INSTALL_COMMAND, MARKETPLACE_URL } from "@/lib/site";

// The headline opens the page — nothing stacked above it. The display face is
// set light (Space Grotesk 300) at size; weight contrast does the work
// gradients and glows would do on a template. Below it the explanation and the
// action sit side by side, so the product shot reaches the first screen.
export default function Hero({ stats }: { stats: ExtensionStats }) {
  return (
    <section id="top" className="relative">
      <div className="container-site pt-28 sm:pt-32 lg:pt-40">
        <h1 className="font-display text-[2.625rem] font-light leading-[1.04] tracking-[-0.035em] text-ink sm:text-[3.25rem] lg:text-[3.5rem] xl:text-[4.25rem]">
          <span className="block">AI already writes your code.</span>
          <span className="block">We make sure you still understand it.</span>
        </h1>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-8">
          <p className="copy max-w-[36rem] text-[1.0625rem] text-ink-muted sm:text-lg lg:col-span-6 lg:pr-6">
            CoGraph shows which functions in your repository call which, as a
            graph next to your code in VS Code. It reads the source and never
            runs it.{" "}
            <span className="text-ink-soft">Same code, same graph.</span>
          </p>

          <div className="flex flex-col gap-4 lg:col-span-6 lg:col-start-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={MARKETPLACE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Install for VS Code
              </a>
              <JoinWaitlist
                label="Get notified about the team version"
                showArrow={false}
                className="btn-secondary"
              />
            </div>
            <CopyCommand command={INSTALL_COMMAND} className="w-full" />
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-ink-faint">
              <a
                href={CHANGELOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-soft transition-colors hover:text-ink"
              >
                v{stats.version}
              </a>
              <span aria-hidden="true">—</span>
              <a
                href={MARKETPLACE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-under transition-colors hover:text-ink"
              >
                Free on the VS Code Marketplace
              </a>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-under hidden transition-colors hover:text-ink sm:inline"
              >
                Source on GitHub
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Product shot — the real extension on its own band, edge to edge, so
          the first thing below the promise is the thing itself. */}
      <div className="mt-16 border-y border-edge bg-card lg:mt-20">
        <figure className="container-site py-6 sm:py-10 lg:py-14">
          <Image
            src="/product/extension-window.png"
            alt="The CoGraph extension in VS Code: a call graph of the extension's own analyzer scripts, grouped by file, with the layout controls and the chat panel beside it."
            width={2234}
            height={1318}
            priority
            quality={90}
            sizes="(max-width: 1200px) 100vw, 1120px"
            className="block h-auto w-full border border-edge"
          />
          <figcaption className="fig-caption mt-4 gap-6">
            <span className="label shrink-0 text-ink-muted">Fig. 1</span>
            <span className="text-right">CoGraph for VS Code · CoGraph&apos;s own analyzers, read as a graph</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
