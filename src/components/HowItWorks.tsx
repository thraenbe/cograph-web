import { LINE, Section, SectionHeader } from "./ui";

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
  kw: "text-ink-faint",
  fn: "text-amber",
  call: "text-ink",
  txt: "text-ink-muted",
  dim: "text-ink-faint",
};

function CodePane() {
  return (
    <pre className="overflow-x-auto px-4 py-5 font-mono text-[12.5px] leading-[1.75]">
      <code>
        {CODE.map((line, i) => (
          <div key={i} className="flex">
            <span className="w-7 shrink-0 select-none pr-3 text-right text-ink-dim">{i + 1}</span>
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
  const k = (s: string) => <span className="text-ink-faint">&quot;{s}&quot;</span>;
  const id = (s: string) => <span className="text-amber">&quot;{s}&quot;</span>;
  const v = (s: string) => <span className="text-ink-soft">{s}</span>;
  return (
    <pre className="overflow-x-auto px-4 py-5 font-mono text-[11.5px] leading-[1.75] text-ink-muted">
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
        <span className="text-ink-faint">…</span>
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
        <span className="text-ink-faint">…</span>
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
            <circle cx={n.x} cy={n.y} r={interR} fill="#0b0f14" stroke="#e8eef5" strokeWidth={edge * 0.75} />
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

// One pipeline, read left to right: the three figures share their borders so
// they read as a single drawing in three panes (Fig. 2a–c), and one amber line
// runs through the three stations above them. The numbers are a real order.
export default function HowItWorks() {
  return (
    <Section id="how" number="02" name="How it works" line="amber">
      <SectionHeader
        title="Every node and edge comes from the parser."
        lead="CoGraph reads the syntax tree and records what is there. No model guesses at your architecture, so the graph you see today is the graph you'll see tomorrow, until the code changes."
      />

      <ol className="mt-16 grid grid-cols-1 gap-16 lg:mt-20 xl:grid-cols-3 xl:gap-0">
        {STEPS.map((step, i) => (
          <li key={step.n} className="flex min-w-0 flex-col">
            {/* The route: one amber line through three stations */}
            <div className="mb-6 flex items-center" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 22 22" className="shrink-0">
                <circle cx="11" cy="11" r="7.5" fill="#0b0f14" stroke={LINE.amber} strokeWidth="3" />
              </svg>
              {i < STEPS.length - 1 && <div className="hidden h-[3px] flex-1 bg-amber xl:block" />}
            </div>

            <div className="flex flex-col gap-3 xl:pr-10">
              <h3 className="flex items-baseline gap-3">
                <span className="font-mono text-sm text-amber">{step.n}</span>
                <span className="h3">{step.title}</span>
              </h3>
              <p className="body max-w-xl xl:min-h-[8.5rem]">{step.body}</p>
            </div>

            <figure
              className={`mt-6 flex min-h-[320px] flex-1 flex-col border border-edge ${
                i > 0 ? "xl:border-l-0" : ""
              }`}
            >
              <figcaption className="fig-caption border-b border-edge px-4 py-3">
                <span className="truncate text-ink-muted">{step.file}</span>
                <span className="label shrink-0">Fig. 2{"abc"[i]}</span>
              </figcaption>
              <div className="flex-1">{step.pane}</div>
            </figure>
          </li>
        ))}
      </ol>
    </Section>
  );
}
