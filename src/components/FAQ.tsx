import { Section, SectionHeader } from "./ui";
import { LANGUAGES } from "@/lib/site";

// Objections a careful engineer raises before installing. Answers stay inside
// the approved claim register (brain/07-brand.md).
const FAQS: { q: string; a: string }[] = [
  {
    q: "Is CoGraph free?",
    a: "Yes. The VS Code extension is free and MIT-licensed, and the source is on GitHub. A team version for repositories and pull requests is in design with design partners.",
  },
  {
    q: "Does my code leave my machine?",
    a: "Not with the extension. Parsing happens in local processes and there is no CoGraph server. The one exception is the optional AI layer: it is off by default, and once you enable it, it runs through your own Claude Code or Codex CLI under your own account.",
  },
  {
    q: "Is there an LLM in the loop?",
    a: "Not in the graph. Nodes and edges come from each language's parser, so the same code always produces the same graph. Two optional AI features sit on top of it, an architecture chat and a workflow view, and both are off by default.",
  },
  {
    q: "Which languages are supported?",
    a: `${LANGUAGES.slice(0, -1).join(", ")} and ${LANGUAGES[LANGUAGES.length - 1]}. Coverage is strongest in Python and TypeScript. Calls that only resolve at runtime (dynamic dispatch, reflection, eval) are not in the graph, and macro-heavy C++ is covered partially.`,
  },
  {
    q: "How large a repository can it handle?",
    a: "Large-repo mode engages automatically: it shows an instant folder skeleton, parses folders lazily as you open them, and caches results between sessions. Repositories the size of NumPy or Django stay navigable.",
  },
  {
    q: "How is this different from an AI code reviewer?",
    a: "An AI reviewer writes comments on a pull request. CoGraph doesn't comment, approve or block. It derives a model of the code that you read yourself, and the two sit side by side.",
  },
];

export default function FAQ() {
  return (
    <Section id="faq" number="08" name="Questions" line="signal">
      <div className="grid gap-12 xl:grid-cols-[0.85fr_1.15fr] xl:gap-16">
        <SectionHeader
          className="xl:sticky xl:top-28 xl:self-start"
          title="The things engineers ask first."
          lead="Something missing? Open an issue on GitHub or message us. We answer both."
        />

        {/* The questions have no order, so they carry no numbers */}
        <div className="border-t border-edge">
          {FAQS.map((item) => (
            <details key={item.q} className="group border-b border-edge">
              <summary className="flex cursor-pointer items-baseline gap-6 py-6 text-left">
                <span className="flex-1 font-display text-[1.0625rem] font-semibold tracking-[-0.01em] text-ink transition-colors group-hover:text-ink-soft sm:text-lg">
                  {item.q}
                </span>
                <span className="w-4 shrink-0 text-right font-mono text-lg text-ink-faint" aria-hidden="true">
                  <span className="faq-plus">+</span>
                  <span className="faq-minus">−</span>
                </span>
              </summary>
              <p className="body max-w-2xl pb-7 pr-10 sm:text-base">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
