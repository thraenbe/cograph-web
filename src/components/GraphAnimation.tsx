// 06 · The graph motif — drawn to the six rules.
//
//  01  45° and 90° only. Every segment below moves on the transit grid.
//  02  Two node sizes: filled leaf, hollow interchange. Nothing else.
//  03  Edge weight = node radius ÷ 1.5.
//  04  Colour means a line, not a mood. One hue held for a whole route.
//  05  Labels in mono, horizontal, never rotated.
//  06  Nine nodes maximum — this is a diagram of an idea, not a repo dump.

const LEAF_R = 9;
const INTERCHANGE_R = 11;
const EDGE_W = LEAF_R / 1.5;

// Four routes, each holding one hue from end to end. Mixing all four is
// permitted here because this is a full-system diagram.
const routes = [
  { id: "in-editor", color: "#37d39b", d: "M120 80 240 200 360 320", delay: "0s" },
  { id: "bidirectional", color: "#4f8cff", d: "M240 200 420 200 540 200", delay: "1.6s" },
  { id: "auto-derived", color: "#ffb454", d: "M300 80 420 200 540 320", delay: "0.8s" },
  { id: "live", color: "#ff6b9a", d: "M240 80 240 200 240 320", delay: "2.4s" },
];

type Node = {
  id: string;
  x: number;
  y: number;
  label: string;
  interchange?: boolean;
  // Where the label sits relative to the node — chosen so no label ever
  // crosses a route.
  place: "above" | "below" | "left" | "right" | "below-left";
};

const nodes: Node[] = [
  { id: "main", x: 240, y: 200, label: "main", interchange: true, place: "left" },
  { id: "resolve", x: 420, y: 200, label: "resolve", interchange: true, place: "below-left" },
  { id: "config", x: 120, y: 80, label: "config", place: "above" },
  { id: "parseAST", x: 240, y: 80, label: "parseAST", place: "above" },
  { id: "render", x: 300, y: 80, label: "render", place: "right" },
  { id: "output", x: 240, y: 320, label: "output", place: "below" },
  { id: "process", x: 360, y: 320, label: "process", place: "below" },
  { id: "fetchData", x: 540, y: 200, label: "fetchData", place: "below" },
  { id: "cache", x: 540, y: 320, label: "cache", place: "below" },
];

function labelPosition(node: Node) {
  const r = node.interchange ? INTERCHANGE_R : LEAF_R;
  switch (node.place) {
    case "above":
      return { x: node.x, y: node.y - r - 12, anchor: "middle" as const };
    case "left":
      return { x: node.x - r - 12, y: node.y + 4, anchor: "end" as const };
    case "right":
      return { x: node.x + r + 12, y: node.y + 4, anchor: "start" as const };
    case "below-left":
      return { x: node.x - 14, y: node.y + r + 15, anchor: "end" as const };
    default:
      return { x: node.x, y: node.y + r + 20, anchor: "middle" as const };
  }
}

export default function GraphAnimation() {
  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 640 400"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Routes — solid base, with a short segment travelling along each one */}
        {routes.map((route) => (
          <g key={route.id}>
            <path
              d={route.d}
              fill="none"
              stroke={route.color}
              strokeWidth={EDGE_W}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={0.32}
            />
            <path
              className="route-pulse"
              d={route.d}
              pathLength={100}
              fill="none"
              stroke={route.color}
              strokeWidth={EDGE_W}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ animationDelay: route.delay }}
            />
          </g>
        ))}

        {/* Nodes — filled leaf, hollow interchange */}
        {nodes.map((node) => {
          const pos = labelPosition(node);
          return (
            <g key={node.id}>
              {node.interchange ? (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={INTERCHANGE_R}
                  fill="#0b0f14"
                  stroke="#e8eef5"
                  strokeWidth={EDGE_W * 0.75}
                />
              ) : (
                <circle cx={node.x} cy={node.y} r={LEAF_R} fill="#e8eef5" />
              )}
              <text
                x={pos.x}
                y={pos.y}
                textAnchor={pos.anchor}
                fill="#9fb0c3"
                fontSize="13"
                fontFamily="var(--font-mono), ui-monospace, monospace"
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
