import Image from "next/image";
import { ArrowUpRight, LINE, SectionHeader } from "./ui";
import { MARKETPLACE_URL } from "@/lib/site";

// What the shipped extension does today — every card maps to a feature in the
// extension's README / CHANGELOG. Trace blue throughout: this section is about
// navigation (line 02).

const B = LINE.trace;
const NODE = "#e8eef5";
const DIM = "#566273";
const MONO = "var(--font-mono), ui-monospace, monospace";

// Two changed functions on an otherwise neutral graph.
function GitMotif() {
  return (
    <svg viewBox="0 0 260 110" className="h-auto w-full" aria-hidden="true">
      <path d="M20 70H100L140 30H220" stroke={DIM} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M100 70H220" stroke={B} strokeWidth="4" strokeLinecap="round" fill="none" />
      <circle cx="20" cy="70" r="6" fill={DIM} />
      <circle cx="220" cy="30" r="6" fill={DIM} />
      <circle cx="100" cy="70" r="8" fill="#131b24" stroke={NODE} strokeWidth="3" />
      <circle cx="160" cy="70" r="6" fill={B} />
      <circle cx="220" cy="70" r="6" fill={B} />
      <text x="160" y="96" textAnchor="middle" fontSize="10" fill="#9fb0c3" fontFamily={MONO}>modified</text>
      <text x="220" y="96" textAnchor="middle" fontSize="10" fill="#9fb0c3" fontFamily={MONO}>new</text>
    </svg>
  );
}

// External calls folded into one node.
function LibraryMotif() {
  return (
    <div className="flex items-center gap-3" aria-hidden="true">
      <svg viewBox="0 0 120 24" className="h-6 w-[120px] shrink-0">
        <path d="M8 12H112" stroke={B} strokeWidth="4" strokeLinecap="round" />
        <circle cx="8" cy="12" r="6" fill={NODE} />
        <circle cx="60" cy="12" r="6" fill={NODE} />
        <circle cx="112" cy="12" r="7.5" fill="#131b24" stroke={NODE} strokeWidth="3" />
      </svg>
      <span className="rounded border border-edge bg-ground px-2 py-1 font-mono text-xs text-ink-soft">
        numpy (7)
      </span>
    </div>
  );
}

function SaveMotif() {
  return (
    <div className="flex items-center gap-2 font-mono text-xs text-ink-dim" aria-hidden="true">
      <span className="rounded border border-edge bg-ground px-2 py-1 text-ink-soft">⌘S</span>
      <span>→</span>
      <span>re-parse</span>
      <span>→</span>
      <span className="text-trace">graph updated</span>
    </div>
  );
}

function TimelineMotif() {
  const xs = [14, 64, 114, 164, 214];
  return (
    <svg viewBox="0 0 240 40" className="h-auto w-full max-w-[240px]" aria-hidden="true">
      <path d="M14 20H214" stroke={DIM} strokeWidth="4" strokeLinecap="round" />
      <path d="M14 20H139" stroke={B} strokeWidth="4" strokeLinecap="round" />
      {xs.map((x, i) =>
        i < 3 ? (
          <circle key={x} cx={x} cy="20" r="6" fill={NODE} />
        ) : (
          <circle key={x} cx={x} cy="20" r="6" fill={DIM} />
        )
      )}
    </svg>
  );
}

function Card({
  title,
  body,
  children,
  className = "",
}: {
  title: string;
  body: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <article className={`card flex flex-col gap-5 p-7 transition-colors hover:border-ink-dim/60 ${className}`}>
      {children && <div className="flex min-h-[56px] items-center">{children}</div>}
      <div className="flex flex-col gap-2.5">
        <h3 className="font-display text-lg font-semibold leading-snug tracking-[-0.015em] text-ink">
          {title}
        </h3>
        <p className="copy text-sm text-ink-muted">{body}</p>
      </div>
    </article>
  );
}

export default function Extension() {
  return (
    <section id="extension" className="section">
      <div className="absolute inset-x-0 top-0 section-divider" />
      <div className="container-site">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            number="03"
            eyebrow="The extension"
            line="trace"
            title={
              <>
                Read your codebase{" "}
                <span className="text-ink-muted">like a metro map.</span>
              </>
            }
            lead="Free in VS Code today. Open a folder, run CoGraph: Visualize Project from the command palette, and move through the code by what calls what."
          />
          <a
            href={MARKETPLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary shrink-0 self-start lg:self-auto"
          >
            Open in the Marketplace
            <ArrowUpRight />
          </a>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {/* Lead card — the real graph, not an illustration */}
          <article className="card flex flex-col overflow-hidden md:col-span-2 lg:row-span-2">
            <div className="relative border-b border-edge bg-[#131313]">
              <Image
                src="/product/graph-panel.png"
                alt="CoGraph grouping a folder's functions by file: each file is a circle of function nodes, with call edges between them highlighted in blue."
                width={1044}
                height={712}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 760px"
                className="block h-auto w-full"
              />
            </div>
            <div className="flex flex-col gap-2.5 p-7">
              <h3 className="font-display text-lg font-semibold leading-snug tracking-[-0.015em] text-ink">
                Every function a node. Every call an edge.
              </h3>
              <p className="copy text-sm text-ink-muted">
                Zoom, pan and filter by name. Group by folder, file or class, and
                use the detail slider to fold low-connectivity nodes away until the
                structure is legible.
              </p>
            </div>
          </article>

          <Card
            title="Click a node, land on the code."
            body="Jump to any function's definition, or open its source in a popup you can drag, resize and keep open beside others."
          >
            <div className="flex w-full items-center gap-3 font-mono text-xs" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 18 18" className="shrink-0">
                <circle cx="9" cy="9" r="6" fill="#131b24" stroke={NODE} strokeWidth="2.6" />
              </svg>
              <span className="h-[3px] flex-1 rounded-full" style={{ background: B }} />
              <span className="rounded border border-edge bg-ground px-2 py-1 text-ink-soft">
                app.py:9
              </span>
            </div>
          </Card>

          <Card
            title="See what your working tree touched."
            body="Colour nodes by git status — modified, new, deleted, staged — to see where your uncommitted work sits in the structure and what it's wired to. It refreshes when the git index does."
          >
            <GitMotif />
          </Card>

          <Card
            title="Derived again on save."
            body="Save a file and the graph is re-derived. In large repositories only the saved file is re-parsed."
          >
            <SaveMotif />
          </Card>

          <Card
            title="Sized for real repositories."
            body="Large-repo mode starts with an instant folder skeleton and parses folders as you open them. External libraries collapse into one node each."
          >
            <LibraryMotif />
          </Card>

          <Card
            className="md:col-span-2 lg:col-span-1"
            title="Replay how it grew."
            body="Timeline playback builds the graph in commit order, so you can watch an architecture take shape."
          >
            <TimelineMotif />
          </Card>

          <article className="card flex flex-col justify-between gap-6 p-7 md:col-span-2 lg:col-span-3 lg:flex-row lg:items-end">
            <div className="flex flex-col gap-2.5">
              <span className="label text-[10px] text-ink-dim">Optional · off by default</span>
              <h3 className="font-display text-lg font-semibold leading-snug tracking-[-0.015em] text-ink">
                AI only if you ask for it.
              </h3>
              <p className="copy max-w-xl text-sm text-ink-muted">
                An architecture chat and a workflow view can sit on top of the
                graph. Nothing runs until you enable them; then they use your own
                Claude Code or Codex CLI, with your own keys and a budget cap per
                request. The graph never depends on them.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 font-mono text-[11px] text-ink-dim">
              <span className="rounded border border-edge px-2 py-1">graphIntelligence.enabled: false</span>
              <span className="rounded border border-edge px-2 py-1">maxBudgetUsd</span>
              <span className="rounded border border-edge px-2 py-1">maxTurns</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
