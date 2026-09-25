import { Section, SectionHeader } from "./ui";

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

// Where the graph has gaps, each with a line of code a reader recognises.
// Keep in step with brain/01-product.md · limitations.
const GAPS = [
  {
    code: "handlers[event]()",
    title: "Calls decided while the program runs",
    body: "Which function this calls depends on data. Reading the source alone can't know, so the graph draws no edge.",
  },
  {
    code: "eval(src) · getattr(obj, name)",
    title: "Code built from strings",
    body: "The function's name only exists at runtime, so there is nothing in the source to connect.",
  },
  {
    code: "#define · template<T>",
    title: "Heavy C++ macros and templates",
    body: "Partly resolved. Some calls behind them are missing.",
  },
  {
    code: "import numpy",
    title: "Libraries you install",
    body: "Not opened on purpose. All calls into a library meet at one node, so large dependencies don't bury your own code.",
  },
];

export default function Trust() {
  return (
    <Section id="trust" number="04" name="Your code" line="signal">
      <SectionHeader title="It runs where your code is. And it tells you what it can't see." />

      <div className="mt-14 grid border-t border-edge lg:mt-16 xl:grid-cols-2">
        {/* Local-first */}
        <div className="flex flex-col pt-8 xl:pr-10">
          <span className="label text-[10px] text-signal">On your machine</span>
          <ul className="mt-6 flex flex-col divide-y divide-edge">
            {LOCAL.map((item) => (
              <li key={item.title} className="flex gap-4 py-5 first:pt-0">
                <svg width="14" height="14" viewBox="0 0 14 14" className="mt-1.5 shrink-0" aria-hidden="true">
                  <circle cx="7" cy="7" r="5" fill="#37d39b" />
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
        <div className="mt-8 flex flex-col border-t border-edge pt-8 xl:mt-0 xl:border-l xl:border-t-0 xl:pl-10">
          <span className="label text-[10px] text-ink-dim">Where the graph has gaps</span>
          <p className="copy mt-6 text-sm text-ink-soft">
            CoGraph reads your code without running it. A call that is only
            decided at runtime is invisible to it, and gets no edge.
          </p>
          <ul className="mt-6 flex flex-col divide-y divide-edge border-t border-edge">
            {GAPS.map((gap) => (
              <li key={gap.title} className="flex flex-col gap-1.5 py-5">
                <code className="font-mono text-xs text-ink-dim">{gap.code}</code>
                <h3 className="font-display text-base font-semibold text-ink">{gap.title}</h3>
                <p className="copy text-sm text-ink-muted">{gap.body}</p>
              </li>
            ))}
          </ul>
          <p className="copy mt-4 border-l-2 border-ink-dim pl-4 text-sm text-ink-soft xl:mt-auto">
            We would rather show you a smaller graph that is true than a larger
            one that is guessed.
          </p>
        </div>
      </div>
    </Section>
  );
}
