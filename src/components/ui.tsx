import type { ReactNode } from "react";

// The four line colours. A section picks one and holds it — colour means a
// line, not a mood (06 · rule 04).
export const LINE = {
  signal: "#37d39b",
  trace: "#4f8cff",
  amber: "#ffb454",
  magenta: "#ff6b9a",
} as const;

export type LineName = keyof typeof LINE;

// Section eyebrow drawn as a station: a hollow interchange node on a short
// stub of its route, then the mono label.
export function Eyebrow({
  number,
  children,
  line = "signal",
}: {
  number?: string;
  children: ReactNode;
  line?: LineName;
}) {
  const color = LINE[line];
  return (
    <div className="flex items-center gap-3">
      <svg width="30" height="10" viewBox="0 0 30 10" aria-hidden="true">
        <path d="M0 5H20" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="24" cy="5" r="3.6" fill="#0b0f14" stroke={color} strokeWidth="2" />
      </svg>
      <span className="label text-[11px]" style={{ color }}>
        {number ? `${number} · ` : ""}
        {children}
      </span>
    </div>
  );
}

export function SectionHeader({
  number,
  eyebrow,
  line,
  title,
  lead,
  align = "left",
  className = "",
}: {
  number?: string;
  eyebrow: string;
  line?: LineName;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div
      className={`flex flex-col gap-5 ${
        centered ? "items-center text-center mx-auto" : ""
      } max-w-3xl ${className}`}
    >
      <Eyebrow number={number} line={line}>
        {eyebrow}
      </Eyebrow>
      <h2 className="h2 text-balance">{title}</h2>
      {lead && <p className={`lead max-w-2xl ${centered ? "mx-auto" : ""}`}>{lead}</p>}
    </div>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────

export function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M2.5 8H13M9.5 4.5L13 8L9.5 11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowUpRight({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M5 11L11 5M6 5H11V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

// Generic editor glyph — not the VS Code trademark.
export function ExtensionIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="6" height="6" rx="1" fill="currentColor" opacity="0.9" />
      <rect x="10" y="2" width="6" height="6" rx="1" fill="currentColor" opacity="0.7" />
      <rect x="2" y="10" width="6" height="6" rx="1" fill="currentColor" opacity="0.7" />
      <rect x="10" y="10" width="6" height="6" rx="1" fill="currentColor" opacity="0.5" />
    </svg>
  );
}
