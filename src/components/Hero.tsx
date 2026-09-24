import Image from "next/image";
import CopyCommand from "./CopyCommand";
import { ArrowUpRight } from "./ui";
import {
  CHANGELOG_URL,
  EXTENSION,
  GITHUB_URL,
  INSTALL_COMMAND,
  MARKETPLACE_URL,
} from "@/lib/site";

// Left-aligned, flat, one colour of type. The display face is set light
// (Space Grotesk 300) at size; weight contrast does the work gradients and
// glows would do on a template.
export default function Hero() {
  return (
    <section id="top" className="relative pt-32 lg:pt-40">
      <div className="container-site">
        <div className="max-w-[60rem]">
          <a
            href={CHANGELOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 font-mono text-xs text-ink-muted transition-colors hover:text-ink"
          >
            <span className="h-2 w-2 bg-signal" aria-hidden="true" />
            <span className="text-ink-soft">v{EXTENSION.version}</span>
            <span className="text-ink-dim">—</span>
            <span className="link-under">Free on the VS Code Marketplace</span>
          </a>

          <h1 className="mt-10 font-display text-[2.75rem] font-light leading-[1.02] tracking-[-0.04em] text-ink sm:text-[4rem] lg:text-[5.25rem]">
            <span className="block text-balance">Writing code got cheap.</span>
            <span className="block text-balance">Reading it did not.</span>
          </h1>

          <p className="copy mt-8 max-w-[40rem] text-base text-ink-muted sm:text-lg">
            CoGraph derives a call graph from your repository — every function a
            node, every call an edge — and opens it beside your code in VS Code.{" "}
            <span className="text-ink-soft">Parsed from the syntax tree: never run, never guessed.</span>
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={MARKETPLACE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Install for VS Code
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              View the source
              <ArrowUpRight />
            </a>
          </div>

          <CopyCommand command={INSTALL_COMMAND} className="mt-4 w-full sm:w-auto" />
        </div>

        {/* Product shot — the real extension, captioned like a figure */}
        <figure className="mt-20 border border-edge lg:mt-24">
          <Image
            src="/product/extension-window.png"
            alt="The CoGraph extension in VS Code: a call graph of the extension's own analyzer scripts, grouped by file, with the layout controls and the chat panel beside it."
            width={2234}
            height={1318}
            priority
            quality={90}
            sizes="(max-width: 1200px) 100vw, 1120px"
            className="block h-auto w-full"
          />
          <figcaption className="fig-caption border-t border-edge px-4 py-3">
            <span className="label text-[10px] text-ink-muted">Fig. 1</span>
            <span className="truncate">CoGraph for VS Code · CoGraph&apos;s own analyzers, read as a graph</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
