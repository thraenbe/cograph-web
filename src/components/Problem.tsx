import { Section, SectionHeader } from "./ui";

// Problem-first story. Qualitative on purpose: no market figures here unless
// they carry a source and date from brain/02-market.md.
const PROBLEMS = [
  {
    n: "01",
    title: "A diff shows lines, not structure.",
    body: "It tells you which lines changed. It doesn't tell you what calls them, or what they reach. That part you rebuild in your head, every review.",
  },
  {
    n: "02",
    title: "Nobody wrote all of it.",
    body: "When much of a module came from an assistant, there is no author to ask how it fits together. The mental model has to be recovered from the code itself.",
  },
  {
    n: "03",
    title: "Hand-drawn maps go stale.",
    body: "An architecture diagram is right the day it is drawn and drifts from then on. A stale map is worse than no map.",
  },
];

// Laid out like the brand book's "Four habits" spread: a heavy rule over each
// point instead of a box around it.
export default function Problem() {
  return (
    <Section id="problem" number="01" name="The problem" line="magenta" route="start">
      <SectionHeader
        title="More code reaches review than anyone has time to read."
        lead="Coding assistants changed how fast code gets written. They didn't change how fast a person can understand it — and understanding is still what review, onboarding and every architectural decision depend on."
      />

      <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-16">
        {PROBLEMS.map((p) => (
          <article key={p.n} className="flex flex-col gap-4 border-t-2 border-magenta pt-5">
            <span className="font-mono text-xs text-ink-dim">{p.n}</span>
            <h3 className="font-display text-xl font-semibold leading-snug tracking-[-0.02em] text-ink">
              {p.title}
            </h3>
            <p className="copy text-sm text-ink-muted">{p.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
