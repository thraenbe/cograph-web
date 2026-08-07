// 03 · Logo — one interchange, two branches, one name.
//
// Geometry is derived from x, the radius of the interchange node (x = 4.5 in
// the viewBox below): branch nodes are 0.66x, edge weight is 0.3x, and both
// branches leave the interchange at 45°. The green / blue / magenta triad is
// fixed — never recoloured, never re-spaced, never stacked or outlined.

const X = 4.5;

export function LogoMark({
  size = 32,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={(size * 16.5) / 24}
      height={size}
      viewBox="0 0 16.5 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4.5 12 13.5 3"
        stroke="#4f8cff"
        strokeWidth={X * 0.3}
        strokeLinecap="round"
      />
      <path
        d="M4.5 12 13.5 21"
        stroke="#ff6b9a"
        strokeWidth={X * 0.3}
        strokeLinecap="round"
      />
      <circle cx="13.5" cy="3" r={X * 0.66} fill="#4f8cff" />
      <circle cx="13.5" cy="21" r={X * 0.66} fill="#ff6b9a" />
      <circle cx="4.5" cy="12" r={X} fill="#37d39b" />
    </svg>
  );
}

// Full lockup. The wordmark is Space Grotesk, "Co" at 300 and "Graph" at 700 —
// never one weight, never another face. Cap height tracks the interchange node
// diameter, and the lockup keeps 2x clear on all four sides.
export default function Logo({
  size = 32,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center ${className}`} style={{ gap: size * 0.28 }}>
      <LogoMark size={size} />
      <span
        className="font-display leading-none text-ink whitespace-nowrap"
        style={{ fontSize: size * 0.55, letterSpacing: "-0.01em" }}
      >
        <span className="font-light">Co</span>
        <span className="font-bold">Graph</span>
      </span>
    </span>
  );
}
