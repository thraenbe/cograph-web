import type { Metadata } from "next";
import Logo from "@/components/Logo";

// plan.cograph.co (served via src/middleware.ts host rewrite).
//
// Internal planning page for the two founders. Structure follows current
// small-team practice: a Now/Next/Later roadmap (not fixed quarters), Kanban
// flow with one DRI per task, and EXIST's fixed dates as a separate milestone
// layer. Status is maintained here in the repo — tick a task by flipping its
// `done` flag.
export const metadata: Metadata = {
  title: "CoGraph — Plan",
  robots: { index: false, follow: false },
};

// ─── Data ──────────────────────────────────────────────────────────────────

type Owner = "Bela" | "Magnus" | null;

type Task = {
  title: string;
  owner: Owner; // exactly one DRI; null = wird beim Weekly vergeben
  done: boolean;
};

type Topic = {
  title: string;
  lead: Owner;
  tasks: Task[];
};

// Phase colours are darker steps of the brand line colours, validated for
// large fills on the dark surface (dataviz lightness band L 0.48–0.67).
const PHASES = [
  {
    id: "now",
    label: "Now",
    range: "Aug – Okt 2026",
    confidence: "~90 % sicher · wöchentlich aktualisiert",
    color: "#4f8cff",
    startMonth: 0,
    months: 3,
  },
  {
    id: "next",
    label: "Next",
    range: "Nov 2026 – Mär 2027",
    confidence: "~70 % sicher · monatlich aktualisiert",
    color: "#c67f27",
    startMonth: 3,
    months: 5,
  },
  {
    id: "later",
    label: "Later",
    range: "Apr – Sep 2027",
    confidence: "~50 % sicher · quartalsweise aktualisiert",
    color: "#e85c88",
    startMonth: 8,
    months: 6,
  },
] as const;

const MONTHS = [
  "Aug",
  "Sep",
  "Okt",
  "Nov",
  "Dez",
  "Jan",
  "Feb",
  "Mär",
  "Apr",
  "Mai",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
];

// Today marker: 7 Aug 2026 → 7/31 into month 0 of 14.
const TODAY_PCT = ((0 + 7 / 31) / MONTHS.length) * 100;
const TODAY_LABEL = "Heute · 7. Aug";

// Fixed-date commitments live on their own lane, separate from the flexible
// roadmap — EXIST expects work-plan changes to be reported, so these dates
// don't move with the board.
const MILESTONES = [
  { label: "EXIST-Antrag eingereicht (Ziel)", month: 2 }, // Okt 2026
];

const NOW_TOPICS: Topic[] = [
  {
    title: "Cofounder",
    lead: null,
    tasks: [
      { title: "Carla anschreiben", owner: null, done: false },
      { title: "SxE Co-Founder Search", owner: null, done: false },
      { title: "Andere Leute anschreiben", owner: null, done: false },
      { title: "SxE anschreiben wegen Connections", owner: null, done: false },
      {
        title: "Cyber-Valley Startup: Coffee Chat",
        owner: "Magnus",
        done: false,
      },
    ],
  },
  {
    title: "EXIST-Antrag",
    lead: "Magnus",
    tasks: [{ title: "EXIST-Antrag runterladen", owner: "Magnus", done: false }],
  },
  {
    title: "Technical Interviews",
    lead: "Bela",
    tasks: [
      { title: "Leitfaden vorbereiten", owner: "Bela", done: false },
      { title: "Interviews durchführen", owner: null, done: false },
    ],
  },
  {
    title: "AWS Credits",
    lead: "Bela",
    tasks: [{ title: "AWS Credits beantragen", owner: "Bela", done: false }],
  },
  {
    title: "CoGraph Development",
    lead: "Bela",
    tasks: [{ title: "Performance", owner: "Bela", done: false }],
  },
];

const ALL_TASKS = NOW_TOPICS.flatMap((t) => t.tasks);
const OPEN_COUNT = ALL_TASKS.filter((t) => !t.done).length;
const DONE_COUNT = ALL_TASKS.length - OPEN_COUNT;

// ─── Small pieces ──────────────────────────────────────────────────────────

function OwnerChip({ owner }: { owner: Owner }) {
  if (!owner)
    return (
      <span className="label text-[10px] text-ink-dim border border-edge rounded-full px-2 py-0.5">
        DRI offen
      </span>
    );
  return (
    <span className="label text-[10px] text-ink-muted bg-edge/60 rounded-full px-2 py-0.5">
      {owner}
    </span>
  );
}

function Checkbox({ done }: { done: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] border ${
        done ? "border-signal bg-signal" : "border-edge bg-card"
      }`}
    >
      {done && (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path
            d="M2 5.2 4.2 7.4 8 3"
            stroke="#0b0f14"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </span>
  );
}

function StatTile({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-lg border border-edge bg-card px-5 py-4">
      <p className="label text-[10px] text-ink-muted">{label}</p>
      <p className="mt-2 font-sans text-3xl font-semibold text-ink">{value}</p>
      {hint && <p className="mt-1 text-xs text-ink-dim">{hint}</p>}
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function Plan() {
  return (
    <main className="min-h-screen bg-dot-grid bg-dot-32">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Header */}
        <header className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Logo size={32} />
            <p className="label text-trace text-xs mt-6 mb-3">plan.cograph.co</p>
            <h1 className="font-display font-semibold text-4xl tracking-display text-ink">
              Plan
            </h1>
            <p className="copy text-ink-muted mt-3 max-w-xl">
              Interne Roadmap und Aufgaben. Now/Next/Later statt fester
              Quartale; Status wird im Repo gepflegt.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatTile label="Offen" value={String(OPEN_COUNT)} hint="Aufgaben in Now" />
            <StatTile label="Erledigt" value={String(DONE_COUNT)} />
            <StatTile label="Phase" value="1 / 3" hint="Now · Aug – Okt" />
            <StatTile label="Meilenstein" value="Okt" hint="EXIST-Antrag (Ziel)" />
          </div>
        </header>

        {/* ─── Timeline ────────────────────────────────────────────────── */}
        <section className="mt-16">
          <p className="label text-xs text-ink-muted mb-6">01 · Zeitplan</p>

          <div className="overflow-x-auto">
            <div className="min-w-[640px]">
              {/* Month axis */}
              <div
                className="grid border-b border-edge pb-2"
                style={{ gridTemplateColumns: `repeat(${MONTHS.length}, 1fr)` }}
              >
                {MONTHS.map((m, i) => (
                  <span
                    key={i}
                    className="label text-[10px] text-ink-dim text-center"
                  >
                    {m}
                  </span>
                ))}
              </div>

              {/* Lanes */}
              <div className="relative">
                <div
                  className="grid gap-y-3 py-4"
                  style={{ gridTemplateColumns: `repeat(${MONTHS.length}, 1fr)` }}
                >
                  {PHASES.map((p) => (
                    <div
                      key={p.id}
                      title={`${p.label} · ${p.range} · ${p.confidence}`}
                      className="flex h-6 items-center rounded-[4px] px-3"
                      style={{
                        gridColumn: `${p.startMonth + 1} / span ${p.months}`,
                        backgroundColor: p.color,
                      }}
                    >
                      <span className="label whitespace-nowrap text-[10px] text-ground">
                        {p.label} · {p.range}
                      </span>
                    </div>
                  ))}

                  {/* Milestone lane — fixed dates, separate from the flexible phases */}
                  {MILESTONES.map((m) => (
                    <div
                      key={m.label}
                      className="flex h-6 items-center gap-2"
                      style={{ gridColumn: `${m.month + 1} / span ${MONTHS.length - m.month}` }}
                    >
                      <span
                        aria-hidden="true"
                        className="h-2.5 w-2.5 shrink-0 rotate-45 bg-signal ring-2 ring-ground"
                      />
                      <span className="label whitespace-nowrap text-[10px] text-ink-muted">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Today marker */}
                <div
                  aria-hidden="true"
                  className="absolute inset-y-0 w-px bg-signal"
                  style={{ left: `${TODAY_PCT}%` }}
                />
              </div>

              <p className="label mt-1 text-[10px] text-signal" style={{ marginLeft: `${TODAY_PCT}%` }}>
                {TODAY_LABEL}
              </p>
            </div>
          </div>

          {/* Phase legend with confidence — identity never rests on colour alone */}
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
            {PHASES.map((p) => (
              <li key={p.id} className="flex items-center gap-2 text-xs text-ink-muted">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-[3px]"
                  style={{ backgroundColor: p.color }}
                />
                <span className="text-ink-soft">{p.label}</span>
                <span className="text-ink-dim">{p.confidence}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="section-divider my-16" />

        {/* ─── Project management ──────────────────────────────────────── */}
        <section>
          <p className="label text-xs text-ink-muted mb-6">02 · Projektmanagement</p>

          {/* Now — the only horizon with committed tasks */}
          <div className="mb-4 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-[3px]"
              style={{ backgroundColor: PHASES[0].color }}
            />
            <h2 className="font-display text-2xl font-semibold tracking-display text-ink">
              Now
            </h2>
            <span className="label text-[10px] text-ink-dim">Aug – Okt 2026</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {NOW_TOPICS.map((topic) => {
              const done = topic.tasks.filter((t) => t.done).length;
              return (
                <div
                  key={topic.title}
                  className="rounded-lg border border-edge bg-card p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display font-semibold text-ink">
                      {topic.title}
                    </h3>
                    <span className="label text-[10px] text-ink-dim whitespace-nowrap">
                      {done}/{topic.tasks.length} erledigt
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-ink-dim">
                    Lead: {topic.lead ?? "offen"}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {topic.tasks.map((task) => (
                      <li key={task.title} className="flex items-start gap-2.5">
                        <Checkbox done={task.done} />
                        <span
                          className={`copy flex-1 text-sm ${
                            task.done
                              ? "text-ink-dim line-through"
                              : "text-ink-soft"
                          }`}
                        >
                          {task.title}
                        </span>
                        <OwnerChip owner={task.owner} />
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Next / Later — direction, not commitments */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {PHASES.slice(1).map((p) => (
              <div
                key={p.id}
                className="rounded-lg border border-dashed border-edge p-5"
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-[3px]"
                    style={{ backgroundColor: p.color }}
                  />
                  <h2 className="font-display text-xl font-semibold tracking-display text-ink">
                    {p.label}
                  </h2>
                  <span className="label text-[10px] text-ink-dim">{p.range}</span>
                </div>
                <p className="copy mt-3 text-sm text-ink-muted">
                  Noch keine committeten Themen — Richtung wird beim{" "}
                  {p.id === "next" ? "Monats-Review" : "Quartals-Review"}{" "}
                  konkretisiert. Bewusst leer: Termine, die hier stünden, wären
                  geraten.
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider my-16" />

        {/* ─── Working agreement ───────────────────────────────────────── */}
        <section>
          <p className="label text-xs text-ink-muted mb-6">03 · Arbeitsweise</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-edge bg-card p-5">
              <h3 className="font-display font-semibold text-ink">
                Kanban statt Scrum
              </h3>
              <p className="copy mt-2 text-sm text-ink-muted">
                Kontinuierlicher Flow ohne Zeremonien. WIP-Limit: max. 2
                Aufgaben gleichzeitig pro Person — Verstöße werden im Weekly
                angesprochen, nicht täglich kontrolliert.
              </p>
            </div>
            <div className="rounded-lg border border-edge bg-card p-5">
              <h3 className="font-display font-semibold text-ink">
                Ein DRI pro Aufgabe
              </h3>
              <p className="copy mt-2 text-sm text-ink-muted">
                Jede Aufgabe hat genau eine verantwortliche Person (directly
                responsible individual). Aufgaben ohne DRI werden im nächsten
                Weekly vergeben — geteilte Verantwortung ist keine.
              </p>
            </div>
            <div className="rounded-lg border border-edge bg-card p-5">
              <h3 className="font-display font-semibold text-ink">
                Weekly Check-in · 30 min
              </h3>
              <p className="copy mt-2 text-sm text-ink-muted">
                Board von rechts nach links durchgehen: Erledigtes abhaken,
                Blocker klären, WIP prüfen, die 1–3 Prioritäten der Woche
                festlegen. Ersetzt Daily Standups.
              </p>
            </div>
            <div className="rounded-lg border border-edge bg-card p-5">
              <h3 className="font-display font-semibold text-ink">
                Horizonte &amp; EXIST-Termine
              </h3>
              <p className="copy mt-2 text-sm text-ink-muted">
                Now wöchentlich, Next monatlich, Later quartalsweise
                aktualisieren. Feste EXIST-Termine (nach Bewilligung:
                Zwischenbericht Monat 5, Businessplan Monat 10) laufen auf der
                Meilenstein-Spur, getrennt von der flexiblen Roadmap.
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-16 border-t border-edge pt-6">
          <p className="label text-[10px] text-ink-dim">
            Methode: Kanban · Now/Next/Later · DRI — Stand 7. Aug 2026
          </p>
        </footer>
      </div>
    </main>
  );
}
