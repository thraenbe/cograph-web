import { Section, SectionHeader } from "./ui";

// Problem-first story. Qualitative on purpose: no market figures here unless
// they carry a source and date from brain/02-market.md.
const PROBLEMS = [
  {
    title: "A diff shows lines, not structure.",
    body: "It tells you which lines changed. It doesn't tell you what calls them, or what they reach. That part you rebuild in your head, every review.",
  },
  {
    title: "Nobody wrote all of it.",
    body: "When much of a module came from an assistant, there is no author to ask how it fits together. The mental model has to be recovered from the code itself.",
  },
  {
    title: "Hand-drawn maps go stale.",
    body: "An architecture diagram is right the day it is drawn and drifts from then on. A stale map is worse than no map.",
  },
];

// The argument on the left, its three reasons on the right as one ruled list:
// a heavy magenta rule opens it, hairlines separate the points. The points
// have no order, so they carry no numbers.
export default function Problem() {
  return (
    <Section id="problem" number="01" name="The problem" line="magenta" route="start" space="lg">
      <div className="grid grid-cols-1 gap-14 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:gap-16">
        <SectionHeader
          className="xl:sticky xl:top-28 xl:self-start"
          title="More code reaches review than anyone has time to read."
          lead="Coding assistants changed how fast code gets written. They didn't change how fast a person can understand it — and understanding is still what review, onboarding and every architectural decision depend on."
        />

        <ul className="border-t-2 border-magenta xl:mt-3">
          {PROBLEMS.map((p) => (
            <li key={p.title} className="flex flex-col gap-3 border-b border-edge py-8">
              <h3 className="h3 sm:text-[1.375rem]">{p.title}</h3>
              <p className="body max-w-xl">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
