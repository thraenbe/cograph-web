import { SectionHeader } from "./ui";

// Two promises, stated with their limits. "Your code never leaves your
// machine" is only true for the extension with the AI layer off — never
// widen it to the team version (brain/07-brand.md · prohibited claims).

const LOCAL = [
  {
    title: "No account, no CoGraph server.",
    body: "Analysis runs in local processes on your machine. There is nothing to sign up for and nowhere for your code to be uploaded to.",
  },
  {
    // Scoped to "your code" on purpose: opening a Python *library* node's popup
    // imports that installed package to read its docstring (describe_lib.py).
    title: "Your code is never executed.",
    body: "The graph comes from static analysis. CoGraph parses your source files; it never imports, builds or runs your project.",
  },
  {
    title: "With AI off — the default — nothing leaves.",
    body: "The optional AI features are the only part that talks to a model, through your own CLI and account, and only once you switch them on.",
  },
];

const LIMITS = [
  ["Dynamic dispatch", "and calls resolved only at runtime"],
  ["eval and reflection", "and functions generated at runtime"],
  ["Macro- and template-heavy C++", "coverage is partial"],
  ["Installed packages", "not followed, on purpose — library calls collapse into one node"],
];

export default function Trust() {
  return (
    <section id="trust" className="section">
      <div className="absolute inset-x-0 top-0 section-divider" />
      <div className="container-site">
        <SectionHeader
          number="04"
          eyebrow="Your code"
          line="signal"
          title={
            <>
              It runs where your code is.{" "}
              <span className="text-ink-muted">And it tells you what it can&apos;t see.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-4 lg:mt-16 lg:grid-cols-2">
          {/* Local-first */}
          <div className="card flex flex-col p-8 lg:p-10">
            <span className="label text-[10px] text-signal">On your machine</span>
            <ul className="mt-6 flex flex-col divide-y divide-edge">
              {LOCAL.map((item) => (
                <li key={item.title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" className="mt-1 shrink-0" aria-hidden="true">
                    <circle cx="9" cy="9" r="5" fill="#37d39b" />
                  </svg>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-display text-base font-semibold text-ink">{item.title}</h3>
                    <p className="copy text-sm text-ink-muted">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Honest limits */}
          <div className="card flex flex-col p-8 lg:p-10">
            <span className="label text-[10px] text-ink-dim">What static analysis can&apos;t see</span>
            <ul className="mt-6 flex flex-col divide-y divide-edge">
              {LIMITS.map(([title, detail]) => (
                <li key={title} className="flex gap-4 py-4 first:pt-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" className="mt-0.5 shrink-0" aria-hidden="true">
                    <circle cx="9" cy="9" r="5" fill="none" stroke="#566273" strokeWidth="2" strokeDasharray="2.5 2.5" />
                  </svg>
                  <p className="text-sm leading-relaxed">
                    <span className="font-medium text-ink-soft">{title}</span>{" "}
                    <span className="text-ink-muted">— {detail}</span>
                  </p>
                </li>
              ))}
            </ul>
            <p className="copy mt-auto border-t border-edge pt-6 text-sm text-ink-soft">
              CoGraph shows statically resolvable calls. We would rather show you a
              smaller graph that is true than a larger one that is guessed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
