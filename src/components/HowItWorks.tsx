import { LINE, SectionHeader } from "./ui";

// One worked example, end to end: the source file, the analyzer's actual
// output shape ({nodes, edges, files}, ids as <file>::<name>::<line>), and
// the graph it becomes. Amber throughout — this section is line 03,
// auto-derived. Amber marks exactly the things that become nodes.

type Tok = [string, "kw" | "fn" | "call" | "txt" | "dim"];

const CODE: Tok[][] = [
  [["def ", "kw"], ["checkout", "fn"], ["(cart):", "txt"]],
  [["    total = ", "txt"], ["price", "call"], ["(cart)", "txt"]],
  [["    bill = ", "txt"], ["invoice", "call"], ["(total)", "txt"]],
  [["    ", "txt"], ["notify", "call"], ["(bill)", "txt"]],
  [],
  [["def ", "kw"], ["price", "fn"], ["(cart):", "txt"]],
  [["    ", "txt"], ["return ", "kw"], ["cart.subtotal", "txt"]],
  [],
  [["def ", "kw"], ["invoice", "fn"], ["(total):", "txt"]],
  [["    ", "txt"], ["return ", "kw"], ["render", "call"], ["(total)", "txt"]],
  [],
  [["def ", "kw"], ["render", "fn"], ["(total): ", "txt"], ["...", "dim"]],
  [["def ", "kw"], ["notify", "fn"], ["(bill): ", "txt"], ["...", "dim"]],
];

const TOK_CLASS: Record<Tok[1], string> = {
  kw: "text-ink-dim",
  fn: "text-amber",
  call: "text-ink",
  txt: "text-ink-muted",
  dim: "text-ink-dim",
};

function CodePane() {
  return (
    <pre className="overflow-x-auto px-4 py-4 font-mono text-[12.5px] leading-[1.75]">
      <code>
        {CODE.map((line, i) => (
          <div key={i} className="flex">
            <span className="w-7 shrink-0 select-none pr-3 text-right text-ink-dim/60">{i + 1}</span>
            <span className="whitespace-pre">
              {line.map(([text, kind], j) => (
                <span key={j} className={TOK_CLASS[kind]}>
                  {text}
                </span>
              ))}
            </span>
          </div>
        ))}
      </code>
    </pre>
  );
}

function JsonPane() {
  const k = (s: string) => <span className="text-ink-dim">&quot;{s}&quot;</span>;
  const id = (s: string) => <span className="text-amber">&quot;{s}&quot;</span>;
  const v = (s: string) => <span className="text-ink-soft">{s}</span>;
  return (
    <pre className="overflow-x-auto px-4 py-4 font-mono text-[12.5px] leading-[1.75] text-ink-muted">
      <code>
        {"{\n  "}
        {k("nodes")}
        {": [\n    { "}
        {k("id")}
        {": "}
        {id("app.py::checkout::1")}
        {",\n      "}
        {k("name")}
        {": "}
        {v('"checkout"')}
        {", "}
        {k("line")}
        {": "}
        {v("1")}
        {" },\n    { "}
        {k("id")}
        {": "}
        {id("app.py::invoice::9")}
        {",\n      "}
        {k("name")}
        {": "}
        {v('"invoice"')}
        {", "}
        {k("line")}
        {": "}
        {v("9")}
        {" },\n    "}
        <span className="text-ink-dim">…</span>
        {"\n  ],\n  "}
        {k("edges")}
        {": [\n    { "}
        {k("source")}
        {": "}
        {id("app.py::checkout::1")}
        {",\n      "}
        {k("target")}
        {": "}
        {id("app.py::invoice::9")}
        {" },\n    "}
        <span className="text-ink-dim">…</span>
        {"\n  ]\n}"}
      </code>
    </pre>
  );
}

// 06 · The graph motif: 45°/90° only, filled leaves, hollow interchanges,
// edge weight = leaf radius ÷ 1.5, labels in mono, five nodes.
function GraphPane() {
  const leafR = 7;
  const interR = 9;
  const edge = leafR / 1.5;
  const c = LINE.amber;
  // Labels are placed so none crosses a route.
  const leaves = [
    { x: 176, y: 40, label: "price", lx: 190, ly: 44, anchor: "start" as const },
    { x: 300, y: 120, label: "render", lx: 300, ly: 148, anchor: "middle" as const },
    { x: 176, y: 200, label: "notify", lx: 190, ly: 204, anchor: "start" as const },
  ];
  const inters = [
    { x: 96, y: 120, label: "checkout", lx: 78, ly: 124, anchor: "end" as const },
    { x: 196, y: 120, label: "invoice", lx: 196, ly: 150, anchor: "middle" as const },
  ];
  return (
    <div className="flex h-full items-center justify-center px-2 py-4">
      <svg viewBox="0 0 340 240" className="h-auto w-full max-w-[360px]" role="img" aria-label="The derived graph: checkout calls price, invoice and notify; invoice calls render.">
        <path d="M96 120 176 40" stroke={c} strokeWidth={edge} strokeLinecap="round" fill="none" />
        <path d="M96 120 176 200" stroke={c} strokeWidth={edge} strokeLinecap="round" fill="none" />
        <path d="M96 120H300" stroke={c} strokeWidth={edge} strokeLinecap="round" fill="none" />
        <path
          className="route-pulse"
          d="M96 120H300"
          pathLength={100}
          stroke="#f6f7f9"
          strokeOpacity={0.55}
          strokeWidth={edge}
          strokeLinecap="round"
          fill="none"
        />
        {leaves.map((n) => (
          <g key={n.label}>
            <circle cx={n.x} cy={n.y} r={leafR} fill="#e8eef5" />
            <text x={n.lx} y={n.ly} textAnchor={n.anchor} fontSize="11" fill="#9fb0c3" fontFamily="var(--font-mono), ui-monospace, monospace">
              {n.label}
            </text>
          </g>
        ))}
        {inters.map((n) => (
          <g key={n.label}>
            <circle cx={n.x} cy={n.y} r={interR} fill="#131b24" stroke="#e8eef5" strokeWidth={edge * 0.75} />
            <text x={n.lx} y={n.ly} textAnchor={n.anchor} fontSize="11" fill="#9fb0c3" fontFamily="var(--font-mono), ui-monospace, monospace">
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

const STEPS = [
  {
    n: "01",
    title: "Parse",
    body: "Each language's own parser reads your workspace: Python's ast, the TypeScript compiler API, java-parser, tree-sitter for C++. Each runs as a local process, and your code is never executed.",
    file: "app.py",
    pane: <CodePane />,
  },
  {
    n: "02",
    title: "Derive",
    body: "Every function definition becomes a node, identified by file, name and line. Every call the parser can resolve becomes an edge. The same code always yields the same graph.",
    file: "analyzer → stdout",
    pane: <JsonPane />,
  },
  {
    n: "03",
    title: "Read",
    body: "The graph opens beside your editor. Click a node to jump to its definition. Save a file and the graph is derived again.",
    file: "CoGraph",
    pane: <GraphPane />,
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section">
      <div className="absolute inset-x-0 top-0 section-divider" />
      <div className="container-site">
        <SectionHeader
          number="02"
          eyebrow="How it works"
          line="amber"
          title={
            <>
              Derived from the code.{" "}
              <span className="text-ink-muted">Not generated about it.</span>
            </>
          }
          lead="There is no model guessing at your architecture. CoGraph reads the syntax tree and records what is there — so the graph you see today is the graph you'll see tomorrow, until the code changes."
        />

        <ol className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-3 lg:gap-6">
          {STEPS.map((step, i) => (
            <li key={step.n} className="flex min-w-0 flex-col">
              {/* The route: one amber line through three stations */}
              <div className="mb-6 flex items-center" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 22 22" className="shrink-0">
                  <circle cx="11" cy="11" r="7.5" fill="#0b0f14" stroke={LINE.amber} strokeWidth="3" />
                </svg>
                {i < STEPS.length - 1 && (
                  <div className="hidden h-[3px] flex-1 rounded-full bg-amber/70 lg:block lg:-mr-6" />
                )}
              </div>

              <div className="flex flex-col gap-3">
                <span className="label text-[10px] text-amber">
                  {step.n} · {step.title}
                </span>
                <p className="copy text-sm text-ink-muted lg:min-h-[7.5rem]">{step.body}</p>
              </div>

              <div className="card mt-6 flex min-h-[300px] flex-1 flex-col overflow-hidden">
                <div className="flex items-center gap-2 border-b border-edge px-4 py-2.5">
                  <span className="h-2 w-2 rounded-full bg-edge" />
                  <span className="h-2 w-2 rounded-full bg-edge" />
                  <span className="h-2 w-2 rounded-full bg-edge" />
                  <span className="ml-2 truncate font-mono text-[11px] text-ink-dim">{step.file}</span>
                </div>
                <div className="flex-1">{step.pane}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
