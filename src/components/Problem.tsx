import { SectionHeader } from "./ui";

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

export default function Problem() {
  return (
    <section id="problem" className="section !pt-20 lg:!pt-24">
      <div className="container-site">
        <SectionHeader
          number="01"
          eyebrow="The problem"
          line="magenta"
          title={
            <>
              More code reaches review than{" "}
              <span className="text-ink-muted">anyone has time to read.</span>
            </>
          }
          lead="Coding assistants changed how fast code gets written. They didn't change how fast a person can understand it — and understanding is still what review, onboarding and every architectural decision depend on."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-3 lg:mt-16">
          {PROBLEMS.map((p) => (
            <article key={p.n} className="card relative flex flex-col gap-4 p-7">
              <span className="label text-[10px] text-magenta">{p.n}</span>
              <h3 className="font-display text-xl font-semibold leading-snug tracking-[-0.02em] text-ink">
                {p.title}
              </h3>
              <p className="copy text-sm text-ink-muted">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
