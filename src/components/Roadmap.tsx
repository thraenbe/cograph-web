import { ArrowUpRight, LINE, SectionHeader } from "./ui";
import { DEMO_URL, EXTENSION } from "@/lib/site";

// What exists, what is designed, what is only a demo — each labelled. Planned
// work is drawn dashed, the way a metro map draws a line under construction.
// Nothing here may describe CoGraph Review as available, shipping or in beta.

type Stop = {
  status: "Shipped" | "In design";
  title: string;
  body: string;
  meta?: string;
};

const STOPS: Stop[] = [
  {
    status: "Shipped",
    title: "In the editor",
    body: "CoGraph for VS Code. Read the graph where you write the code.",
    meta: `v${EXTENSION.version} · Free · MIT`,
  },
  {
    status: "In design",
    title: "In the repository",
    body: "The graph as a file committed next to the code — byte-stable output and a documented schema, versioned like everything else.",
  },
  {
    status: "In design",
    title: "In the pull request",
    body: "Regenerate the graph for each pull request and compare it with the base branch. The diff shows which functions and calls a change adds, removes or rewires.",
  },
];

// A pull request, read as a change to the graph: one function added, one call
// rewired through it. Blue is the change; everything unchanged stays neutral.
function GraphDiff() {
  const B = LINE.trace;
  const DIM = "#566273";
  const NODE = "#e8eef5";
  const MONO = "var(--font-mono), ui-monospace, monospace";
  const leafR = 7;
  const edge = leafR / 1.5;
  return (
    <svg
      viewBox="0 0 400 200"
      className="h-auto w-full"
      role="img"
      aria-label="Graph diff: checkout used to call charge_card directly; the change adds retry_payment between them."
    >
      {/* unchanged */}
      <path d="M90 100 150 160H210" stroke={DIM} strokeWidth={edge} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M270 100H350" stroke={DIM} strokeWidth={edge} strokeLinecap="round" fill="none" />
      {/* removed */}
      <path d="M90 100H270" stroke={DIM} strokeWidth={edge} strokeDasharray="2 9" strokeLinecap="round" fill="none" />
      {/* added */}
      <path d="M90 100 150 40H210L270 100" stroke={B} strokeWidth={edge} strokeLinecap="round" strokeLinejoin="round" fill="none" />

      <circle cx="210" cy="160" r={leafR} fill={DIM} />
      <circle cx="350" cy="100" r={leafR} fill={DIM} />
      <circle cx="210" cy="40" r={leafR} fill={B} />
      <circle cx="90" cy="100" r="9" fill="#131b24" stroke={NODE} strokeWidth={edge * 0.75} />
      <circle cx="270" cy="100" r="9" fill="#131b24" stroke={NODE} strokeWidth={edge * 0.75} />

      <g fontSize="11" fontFamily={MONO}>
        <text x="74" y="104" textAnchor="end" fill="#9fb0c3">checkout</text>
        <text x="210" y="22" textAnchor="middle" fill={B}>+ retry_payment</text>
        <text x="270" y="128" textAnchor="middle" fill="#9fb0c3">charge_card</text>
        <text x="350" y="126" textAnchor="middle" fill="#566273">gateway</text>
        <text x="224" y="164" fill="#566273">log_event</text>
      </g>
    </svg>
  );
}

export default function Roadmap() {
  return (
    <section id="roadmap" className="section">
      <div className="absolute inset-x-0 top-0 section-divider" />
      <div className="container-site">
        <SectionHeader
          number="05"
          eyebrow="Roadmap"
          line="trace"
          title={
            <>
              One graph.{" "}
              <span className="text-ink-muted">Three places it belongs.</span>
            </>
          }
          lead="The editor is the first surface. Because the graph is derived the same way every time, it can also live in the repository and be compared across pull requests. That work is in design, and we are shaping it with design partners."
        />

        <div className="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          {/* The line */}
          <ol className="relative flex flex-col">
            {STOPS.map((stop, i) => {
              const shipped = stop.status === "Shipped";
              const last = i === STOPS.length - 1;
              // A segment is built only if the station it leads to is built.
              const segmentBuilt = !last && STOPS[i + 1].status === "Shipped";
              return (
                <li key={stop.title} className="relative flex gap-6 pb-10 last:pb-0">
                  {/* Station + the segment to the next one */}
                  <div className="relative flex w-6 shrink-0 justify-center" aria-hidden="true">
                    {!last && (
                      <span
                        className="absolute left-1/2 top-6 bottom-[-4px] w-[3px] -translate-x-1/2 rounded-full"
                        style={
                          segmentBuilt
                            ? { background: LINE.signal }
                            : {
                                backgroundImage:
                                  "linear-gradient(to bottom, #566273 55%, transparent 55%)",
                                backgroundSize: "3px 12px",
                              }
                        }
                      />
                    )}
                    <svg width="24" height="24" viewBox="0 0 24 24" className="relative mt-0.5">
                      {shipped ? (
                        <circle cx="12" cy="12" r="8" fill="#0b0f14" stroke={LINE.signal} strokeWidth="3.2" />
                      ) : (
                        <circle cx="12" cy="12" r="8" fill="#0b0f14" stroke="#566273" strokeWidth="2.6" strokeDasharray="3 3" />
                      )}
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2 pt-0.5">
                    <span className={`label text-[10px] ${shipped ? "text-signal" : "text-ink-dim"}`}>
                      {stop.status}
                    </span>
                    <h3 className="font-display text-xl font-semibold tracking-[-0.015em] text-ink">
                      {stop.title}
                    </h3>
                    <p className="copy max-w-md text-sm text-ink-muted">{stop.body}</p>
                    {stop.meta && (
                      <span className="mt-1 font-mono text-xs text-ink-dim">{stop.meta}</span>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>

          {/* The idea, drawn — plus the demo, labelled as one */}
          <div className="flex flex-col gap-4">
            <figure className="card overflow-hidden">
              <div className="flex items-center justify-between gap-4 border-b border-edge px-5 py-3">
                <span className="truncate font-mono text-[11px] text-ink-dim">
                  main → feature/retry-payments
                </span>
                <span className="label shrink-0 text-[9px] text-ink-dim">Concept</span>
              </div>
              <div className="px-5 py-6 sm:px-8">
                <GraphDiff />
              </div>
              <figcaption className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-edge px-5 py-3 font-mono text-[11px] text-ink-dim">
                <span className="flex items-center gap-2">
                  <span className="h-[3px] w-5 rounded-full bg-trace" /> added
                </span>
                <span className="flex items-center gap-2">
                  <span
                    className="h-[3px] w-5"
                    style={{
                      backgroundImage: "linear-gradient(to right, #566273 40%, transparent 40%)",
                      backgroundSize: "6px 3px",
                    }}
                  />{" "}
                  removed
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-[3px] w-5 rounded-full bg-ink-dim" /> unchanged
                </span>
              </figcaption>
            </figure>

            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex items-start justify-between gap-6 p-6 transition-colors hover:border-ink-dim/60"
            >
              <div className="flex flex-col gap-2">
                <span className="label text-[10px] text-ink-dim">Interactive demo · not a product yet</span>
                <h3 className="font-display text-lg font-semibold text-ink">CoGraph Review</h3>
                <p className="copy text-sm text-ink-muted">
                  A pull request page with the change read on the graph. It shows
                  the direction; it is not something you can install.
                </p>
              </div>
              <span className="mt-1 shrink-0 text-ink-dim transition-colors group-hover:text-ink">
                <ArrowUpRight size={18} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
