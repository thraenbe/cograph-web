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

// ─── The page as a line ───────────────────────────────────────────────────
// On wide screens every section is a station on one neutral route that runs
// down the left rail, like the strip map above a train door. The station
// label sticks while you read its section. On small screens the rail folds
// into an inline label above the heading.

type Route = "start" | "through" | "end";
type Tone = "ground" | "paper";

// Vertical centre of the station node, measured from the top of the rail.
// Must match the rail's top padding (lg:pt-28 = 112px) + half the node (11px).
const STATION_Y = 123;

function Station({ tone, terminus }: { tone: Tone; terminus?: boolean }) {
  const fill = tone === "paper" ? "#f6f7f9" : "#0b0f14";
  const stroke = tone === "paper" ? "#101418" : "#e8eef5";
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" className="shrink-0">
      {terminus ? (
        <circle cx="11" cy="11" r="7" fill={stroke} />
      ) : (
        <circle cx="11" cy="11" r="7.5" fill={fill} stroke={stroke} strokeWidth="3" />
      )}
    </svg>
  );
}

export function Section({
  id,
  number,
  name,
  line = "signal",
  route = "through",
  tone = "ground",
  terminus,
  className = "",
  children,
}: {
  id?: string;
  number?: string;
  name: string;
  line?: LineName;
  route?: Route;
  tone?: Tone;
  terminus?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const paper = tone === "paper";
  const routeStyle =
    route === "start"
      ? { top: STATION_Y, bottom: 0 }
      : route === "end"
      ? { top: 0, height: STATION_Y }
      : { top: 0, bottom: 0 };

  return (
    <section
      id={id}
      className={`relative ${paper ? "bg-paper text-paper-ink" : "border-t border-edge"}`}
    >
      <div className="container-site grid lg:grid-cols-[160px_minmax(0,1fr)] lg:gap-x-6">
        {/* Rail */}
        <div className="relative hidden pt-28 lg:block">
          <span
            aria-hidden="true"
            className="absolute left-[9.5px] w-[3px] bg-[var(--route)]"
            style={routeStyle}
          />
          <div className={`relative flex items-start gap-3 ${terminus ? "" : "sticky top-[92px]"}`}>
            <Station tone={tone} terminus={terminus} />
            <div className="flex flex-col gap-1 pt-[3px]">
              {number && (
                <span className="label text-[11px]" style={{ color: paper ? "#101418" : LINE[line] }}>
                  {number}
                </span>
              )}
              <span className={`label max-w-[7rem] text-[11px] leading-[1.6] ${paper ? "text-paper-muted" : "text-ink-dim"}`}>
                {name}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={`min-w-0 py-20 lg:py-28 ${className}`}>
          <div className="mb-8 flex items-center gap-2.5 lg:hidden">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: paper ? "#101418" : LINE[line] }} />
            <span className={`label text-[11px] ${paper ? "text-paper-ink" : "text-ink-muted"}`}>
              {number ? `${number} · ` : ""}
              {name}
            </span>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  title,
  lead,
  tone = "ground",
  className = "",
}: {
  title: ReactNode;
  lead?: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const paper = tone === "paper";
  return (
    <div className={`flex max-w-3xl flex-col gap-5 ${className}`}>
      <h2 className={`h2 text-balance ${paper ? "!text-paper-ink" : ""}`}>{title}</h2>
      {lead && (
        <p className={`lead max-w-2xl ${paper ? "!text-paper-muted" : ""}`}>{lead}</p>
      )}
    </div>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────

export function ArrowUpRight({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M5 11L11 5M6 5H11V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
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
