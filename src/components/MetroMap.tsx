// Schematic metro map of a codebase. Each colored line is one dimension of the
// knowledge graph; stations are functions / classes / files; the teal line is
// "changed by AI". Pure illustration — kept in the site's node palette so it
// can be reused as a motif (Vision, Market).

type Pt = [number, number];

type Line = {
  id: string;
  color: string;
  points: Pt[];
  dashed?: boolean;
};

const lines: Line[] = [
  // Structure — files, folders, modules
  {
    id: "structure",
    color: "#3b6ef8",
    points: [
      [60, 150],
      [240, 150],
      [320, 220],
      [470, 220],
      [560, 150],
      [660, 150],
    ],
  },
  // Call graph — what calls what (the shipped dimension)
  {
    id: "callgraph",
    color: "#ec4899",
    points: [
      [150, 60],
      [150, 220],
      [320, 220],
      [470, 220],
      [560, 300],
      [660, 300],
    ],
  },
  // Class hierarchy — OOP overlays
  {
    id: "classes",
    color: "#22c55e",
    points: [
      [60, 300],
      [240, 300],
      [320, 220],
      [400, 150],
      [560, 150],
    ],
  },
  // Git history — changes across commits
  {
    id: "git",
    color: "#f97316",
    points: [
      [400, 60],
      [400, 150],
      [470, 220],
      [560, 300],
      [640, 300],
    ],
  },
  // Changed by AI — animated, dashed
  {
    id: "ai",
    color: "#2dd4bf",
    points: [
      [70, 360],
      [300, 360],
      [390, 270],
      [470, 220],
      [560, 120],
      [650, 60],
    ],
    dashed: true,
  },
];

// Stations where multiple lines meet — drawn as ring interchanges on top.
const interchanges: Pt[] = [
  [320, 220],
  [470, 220],
  [560, 150],
  [400, 150],
  [560, 300],
];

const isInterchange = (p: Pt) =>
  interchanges.some(([x, y]) => x === p[0] && y === p[1]);

const pointsAttr = (pts: Pt[]) => pts.map((p) => p.join(",")).join(" ");

export default function MetroMap({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 720 420"
      className={`w-full h-auto ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A codebase drawn as a metro map: colored lines for structure, call graph, classes, git history and AI changes, meeting at interchange stations."
    >
      {/* Soft underglow + crisp line for each route */}
      {lines.map((line) => (
        <g key={line.id}>
          <polyline
            points={pointsAttr(line.points)}
            fill="none"
            stroke={line.color}
            strokeWidth={12}
            strokeOpacity={0.12}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <polyline
            points={pointsAttr(line.points)}
            fill="none"
            stroke={line.color}
            strokeWidth={4.5}
            strokeLinejoin="round"
            strokeLinecap="round"
            className={line.dashed ? "edge-slow" : undefined}
          />
        </g>
      ))}

      {/* Plain stations (line vertices that aren't interchanges) */}
      {lines.flatMap((line) =>
        line.points
          .filter((p) => !isInterchange(p))
          .map((p, i) => (
            <circle
              key={`${line.id}-${i}`}
              cx={p[0]}
              cy={p[1]}
              r={4.5}
              fill="#0d0d1a"
              stroke={line.color}
              strokeWidth={2.5}
            />
          )),
      )}

      {/* Interchange stations on top */}
      {interchanges.map((p, i) => (
        <circle
          key={`ix-${i}`}
          cx={p[0]}
          cy={p[1]}
          r={7.5}
          fill="#0d0d1a"
          stroke="rgba(255,255,255,0.85)"
          strokeWidth={2.5}
        />
      ))}

      {/* Hub label */}
      <text
        x={470}
        y={250}
        textAnchor="middle"
        fill="rgba(255,255,255,0.55)"
        fontSize="12"
        fontFamily="var(--font-geist-mono), ui-monospace, monospace"
      >
        main
      </text>
      <text
        x={320}
        y={250}
        textAnchor="middle"
        fill="rgba(255,255,255,0.4)"
        fontSize="11"
        fontFamily="var(--font-geist-mono), ui-monospace, monospace"
      >
        Parser
      </text>

      {/* "changed by AI" callout pill, pinned to the teal line */}
      <g>
        <rect
          x={540}
          y={92}
          width={132}
          height={26}
          rx={13}
          fill="rgba(45,212,191,0.12)"
          stroke="rgba(45,212,191,0.4)"
        />
        <circle cx={557} cy={105} r={3.5} fill="#2dd4bf" />
        <text
          x={569}
          y={109}
          fill="#2dd4bf"
          fontSize="11"
          fontFamily="var(--font-geist-mono), ui-monospace, monospace"
        >
          changed by AI
        </text>
      </g>
    </svg>
  );
}
