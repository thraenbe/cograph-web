const nodes = [
  { id: "main",      x: 278, y: 195, label: "main",       color: "#3b6ef8", float: "node-float-1", hub: true  },
  { id: "init",      x:  90, y: 128, label: "init",       color: "#eab308", float: "node-float-2", hub: false },
  { id: "config",    x: 172, y:  62, label: "config",     color: "#22c55e", float: "node-float-3", hub: false },
  { id: "render",    x: 418, y:  98, label: "render",     color: "#f97316", float: "node-float-4", hub: false },
  { id: "fetchData", x: 490, y: 192, label: "fetchData",  color: "#3b6ef8", float: "node-float-5", hub: false },
  { id: "parseAST",  x: 440, y: 308, label: "parseAST",   color: "#ec4899", float: "node-float-6", hub: false },
  { id: "process",   x: 198, y: 285, label: "process",    color: "#22c55e", float: "node-float-1", hub: false },
  { id: "validate",  x:  88, y: 278, label: "validate",   color: "#f97316", float: "node-float-2", hub: false },
  { id: "transform", x: 328, y: 360, label: "transform",  color: "#eab308", float: "node-float-3", hub: false },
  { id: "cache",     x: 502, y: 308, label: "cache",      color: "#6366f1", float: "node-float-4", hub: false },
  { id: "resolve",   x: 368, y: 198, label: "resolve",    color: "#f97316", float: "node-float-5", hub: false },
  { id: "output",    x: 190, y: 368, label: "output",     color: "#ec4899", float: "node-float-6", hub: false },
];

const edges = [
  { from: "init",      to: "main",       dir: "forward" },
  { from: "config",    to: "main",       dir: "forward" },
  { from: "main",      to: "render",     dir: "forward" },
  { from: "main",      to: "process",    dir: "reverse" },
  { from: "main",      to: "validate",   dir: "slow"    },
  { from: "render",    to: "fetchData",  dir: "forward" },
  { from: "fetchData", to: "resolve",    dir: "reverse" },
  { from: "fetchData", to: "cache",      dir: "forward" },
  { from: "resolve",   to: "parseAST",   dir: "slow"    },
  { from: "process",   to: "transform",  dir: "forward" },
  { from: "transform", to: "output",     dir: "reverse" },
  { from: "validate",  to: "output",     dir: "slow"    },
];

function getNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

// Per-node animation delay offsets so they don't all pulse in sync
const auraDelays = [0, 0.8, 1.6, 0.4, 1.2, 2.0, 0.6, 1.4, 0.2, 1.0, 1.8, 0.3];

export default function GraphAnimation() {
  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 590 430"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="graphBg" cx="48%" cy="48%" r="52%">
            <stop offset="0%" stopColor="#3b6ef8" stopOpacity="0.09" />
            <stop offset="100%" stopColor="#080810" stopOpacity="0" />
          </radialGradient>

          {/* Glow filters */}
          <filter id="glow-blue"   x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="b" />
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="glow-orange" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="b" />
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="glow-green"  x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="b" />
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="glow-pink"   x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="b" />
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="glow-indigo" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="b" />
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="glow-hub"    x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="b" />
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Background radial glow */}
        <rect width="590" height="430" fill="url(#graphBg)" />

        {/* ── Edges ──────────────────────────────────────────── */}
        {edges.map((edge, i) => {
          const f = getNode(edge.from);
          const t = getNode(edge.to);
          const cls =
            edge.dir === "forward" ? "edge-forward" :
            edge.dir === "reverse" ? "edge-reverse" : "edge-slow";
          return (
            <line
              key={i}
              x1={f.x} y1={f.y}
              x2={t.x} y2={t.y}
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="1.2"
              className={cls}
            />
          );
        })}

        {/* ── Nodes ──────────────────────────────────────────── */}
        {nodes.map((node, idx) => {
          const r     = node.hub ? 12 : 9;
          const auraR = node.hub ? 24 : 17;
          const delay = auraDelays[idx] ?? 0;

          const glowId =
            node.hub                      ? "glow-hub"    :
            node.color === "#3b6ef8"      ? "glow-blue"   :
            node.color === "#f97316"      ? "glow-orange" :
            node.color === "#22c55e"      ? "glow-green"  :
            node.color === "#ec4899"      ? "glow-pink"   :
            node.color === "#6366f1"      ? "glow-indigo" :
            "glow-blue";

          return (
            /*
             * Outer <g>: SVG attribute-based positioning — stays at (x,y).
             * Inner <g>: CSS float animation — translates ±4px around (0,0).
             * Keeping them separate avoids the CSS-overrides-SVG-transform bug.
             */
            <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
              <g className={node.float}>
                {/* Pulsing aura ring */}
                <circle
                  r={auraR}
                  fill={node.color}
                  opacity={0}
                  style={{
                    animation: `${node.hub ? "hubPulse" : "auraPulse"} ${node.hub ? "3.5s" : "3s"} ease-in-out infinite`,
                    animationDelay: `${delay}s`,
                    transformBox: "fill-box",
                    transformOrigin: "center",
                  }}
                />
                {/* Glowing core circle */}
                <circle
                  r={r}
                  fill={node.color}
                  filter={`url(#${glowId})`}
                />
                {/* Inner highlight */}
                <circle
                  r={r * 0.55}
                  fill="white"
                  opacity={0.22}
                />
                {/* Label */}
                <text
                  x={0}
                  y={r + 14}
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.5)"
                  fontSize="9.5"
                  fontFamily="var(--font-geist-mono), ui-monospace, monospace"
                >
                  {node.label}
                </text>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
