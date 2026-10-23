import { ArrowUpRight, LINE, Section, SectionHeader } from "./ui";
import { MARKETPLACE_URL } from "@/lib/site";

// What the shipped extension does today — every row maps to a feature in the
// extension's README / CHANGELOG. Trace blue throughout: this section is about
// navigation (line 02).

const B = LINE.trace;
const NODE = "#e8eef5";
const DIM = "#566273"; // lines and idle nodes
const FAINT = "#7d8b9c"; // idle labels — text needs AA contrast
const MONO = "var(--font-mono), ui-monospace, monospace";

// The graph grouped by file, with one function selected: its calls light up,
// everything else stays neutral. Drawn, not captured — the hero already shows
// the real window, and a crop of it is too small to read.
function GroupedGraph() {
  const groups = [
    { name: "checkout.py", x: 20, y: 50, w: 260, h: 170 },
    { name: "payments.py", x: 330, y: 50, w: 230, h: 170 },
    { name: "log.py", x: 240, y: 280, w: 260, h: 100 },
  ];
  // [x, y, label, label position, state]
  const nodes: [number, number, string, "above" | "below", "selected" | "called" | "idle"][] = [
    [80, 100, "checkout", "above", "selected"],
    [80, 180, "validate_cart", "below", "called"],
    [210, 180, "apply_discount", "below", "idle"],
    [390, 100, "charge_card", "above", "called"],
    [390, 180, "retry_payment", "below", "idle"],
    [500, 180, "refund", "below", "idle"],
    [305, 330, "log_event", "below", "called"],
    [430, 330, "format_amount", "below", "idle"],
  ];
  const idle = ["M80 180H210", "M390 100H620", "M390 180V100", "M500 180H580L620 140V100", "M305 330H430"];
  const called = ["M80 100V180", "M80 100H390", "M80 100H305V330"];
  return (
    <svg
      viewBox="0 0 680 400"
      className="h-auto w-full"
      role="img"
      aria-label="A call graph grouped by file. The checkout function is selected; its calls to validate_cart, charge_card and log_event are highlighted. Calls into the stripe library meet at one node."
    >
      <g fontSize="13" fontFamily={MONO}>
        {groups.map((g) => (
          <g key={g.name}>
            <rect x={g.x} y={g.y} width={g.w} height={g.h} fill="none" stroke="#1e2d3d" strokeWidth="1.5" />
            <text x={g.x} y={g.y - 12} fill={FAINT}>{g.name}</text>
          </g>
        ))}
        {idle.map((d) => (
          <path key={d} d={d} stroke={DIM} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        ))}
        {called.map((d) => (
          <path key={d} d={d} stroke={B} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        ))}

        <circle cx="620" cy="100" r="9" fill="#0b0f14" stroke={DIM} strokeWidth="3" />
        <text x="620" y="80" textAnchor="middle" fill={FAINT}>stripe (4)</text>

        {nodes.map(([x, y, label, pos, state]) => (
          <g key={label}>
            {state === "selected" ? (
              <circle cx={x} cy={y} r="9" fill="#0b0f14" stroke={NODE} strokeWidth="3" />
            ) : (
              <circle cx={x} cy={y} r="6.5" fill={state === "called" ? B : DIM} />
            )}
            <text
              x={x}
              y={pos === "above" ? y - 18 : y + 28}
              textAnchor="middle"
              fill={state === "idle" ? FAINT : state === "selected" ? NODE : "#9fb0c3"}
            >
              {label}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}

// Two changed functions on an otherwise neutral graph.
function GitMotif() {
  return (
    <svg viewBox="0 0 260 110" className="h-auto w-full" aria-hidden="true">
      <path d="M20 70H100L140 30H220" stroke={DIM} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M100 70H220" stroke={B} strokeWidth="4" strokeLinecap="round" fill="none" />
      <circle cx="20" cy="70" r="6" fill={DIM} />
      <circle cx="220" cy="30" r="6" fill={DIM} />
      <circle cx="100" cy="70" r="8" fill="#0b0f14" stroke={NODE} strokeWidth="3" />
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
        <circle cx="112" cy="12" r="7.5" fill="#0b0f14" stroke={NODE} strokeWidth="3" />
      </svg>
      <span className="border border-edge px-2 py-1 font-mono text-xs text-ink-soft">
        numpy (7)
      </span>
    </div>
  );
}

function SaveMotif() {
  return (
    <div className="flex items-center gap-2 font-mono text-xs text-ink-faint" aria-hidden="true">
      <span className="border border-edge px-2 py-1 text-ink-soft">⌘S</span>
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

// A feature as a ruled row: what it does first, then the small drawing of it.
// The drawing follows the words instead of sitting above them as an icon.
function Feature({
  title,
  body,
  children,
}: {
  title: string;
  body: string;
  children?: React.ReactNode;
}) {
  return (
    <li className="flex flex-col gap-5 border-b border-edge py-8">
      <div className="flex flex-col gap-2.5">
        <h3 className="h3 text-lg">{title}</h3>
        <p className="body">{body}</p>
      </div>
      {children && <div className="flex max-w-[280px] items-center">{children}</div>}
    </li>
  );
}

// The graph itself stays pinned on the left while the features scroll past on
// the right — every feature below is something you do to that figure.
export default function Extension() {
  return (
    <Section id="extension" number="03" name="The extension" line="trace" space="lg">
      <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
        <SectionHeader
          title="Read your codebase like a metro map."
          lead="Free in VS Code today. Open a folder, run CoGraph: Visualize Project from the command palette, and move through the code by what calls what."
        />
        <a
          href={MARKETPLACE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary shrink-0 self-start xl:self-auto"
        >
          Open in the Marketplace
          <ArrowUpRight />
        </a>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-12 lg:mt-20 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] xl:gap-14">
        {/* Lead — the real graph, not an illustration */}
        <div className="flex flex-col gap-8 xl:sticky xl:top-28 xl:self-start">
          <figure className="border border-edge">
            <div className="px-4 py-8 sm:px-8 sm:py-10">
              <GroupedGraph />
            </div>
            <figcaption className="fig-caption border-t border-edge px-4 py-3">
              <span className="label shrink-0 text-ink-muted">Fig. 3</span>
              <span className="truncate">Grouped by file, one function selected</span>
            </figcaption>
          </figure>
          <div className="flex flex-col gap-3">
            <h3 className="h3 text-2xl">Every function a node. Every call an edge.</h3>
            <p className="body max-w-xl">
              Zoom, pan and filter by name. Group by folder, file or class, and
              use the detail slider to fold low-connectivity nodes away until the
              structure is legible.
            </p>
          </div>
        </div>

        <ul className="border-t border-edge">
          <Feature
            title="Click a node, land on the code."
            body="Jump to any function's definition, or open its source in a popup you can drag, resize and keep open beside others."
          >
            <div className="flex w-full items-center gap-3 font-mono text-xs" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 18 18" className="shrink-0">
                <circle cx="9" cy="9" r="6" fill="#0b0f14" stroke={NODE} strokeWidth="2.6" />
              </svg>
              <span className="h-[3px] flex-1" style={{ background: B }} />
              <span className="border border-edge px-2 py-1 text-ink-soft">app.py:9</span>
            </div>
          </Feature>

          <Feature
            title="See what your working tree touched."
            body="Colour nodes by git status — modified, new, deleted, staged — to see where your uncommitted work sits in the structure and what it's wired to. It refreshes when the git index does."
          >
            <GitMotif />
          </Feature>

          <Feature
            title="Derived again on save."
            body="Save a file and the graph is re-derived. In large repositories only the saved file is re-parsed."
          >
            <SaveMotif />
          </Feature>

          <Feature
            title="Sized for real repositories."
            body="Large-repo mode starts with an instant folder skeleton and parses folders as you open them. External libraries collapse into one node each."
          >
            <LibraryMotif />
          </Feature>

          <Feature
            title="Replay how it grew."
            body="Timeline playback builds the graph in commit order, so you can watch an architecture take shape."
          >
            <TimelineMotif />
          </Feature>
        </ul>
      </div>

      {/* The opt-in layer, set apart below both columns */}
      <div className="mt-16 grid grid-cols-1 gap-6 border-t border-edge pt-10 lg:mt-20 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] xl:gap-14">
        <div className="flex flex-col gap-3">
          <h3 className="h3 text-lg">AI only if you ask for it.</h3>
          <span className="label text-xs text-ink-faint">Optional · off by default</span>
          <p className="body mt-1 max-w-xl">
            An architecture chat and a workflow view can sit on top of the
            graph. Nothing runs until you enable them; then they use your own
            Claude Code or Codex CLI, with your own keys and a budget cap per
            request. The graph never depends on them.
          </p>
        </div>
        <div className="flex flex-wrap content-start gap-2 font-mono text-xs text-ink-faint xl:pt-1">
          <span className="border border-edge px-2.5 py-1.5">graphIntelligence.enabled: false</span>
          <span className="border border-edge px-2.5 py-1.5">maxBudgetUsd</span>
          <span className="border border-edge px-2.5 py-1.5">maxTurns</span>
        </div>
      </div>
    </Section>
  );
}
