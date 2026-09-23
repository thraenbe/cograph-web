import { SectionHeader } from "./ui";
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
    a: "Not in the graph. Nodes and edges come from each language's parser, so the same code always produces the same graph. The optional AI features — an architecture chat and a workflow view — sit on top of it and are off by default.",
  },
  {
    q: "Which languages are supported?",
    a: `${LANGUAGES.slice(0, -1).join(", ")} and ${LANGUAGES[LANGUAGES.length - 1]}. Coverage is strongest in Python and TypeScript. Calls that only resolve at runtime — dynamic dispatch, reflection, eval — are not in the graph, and macro-heavy C++ is covered partially.`,
  },
  {
    q: "How large a repository can it handle?",
    a: "Large-repo mode engages automatically: it shows an instant folder skeleton, parses folders lazily as you open them, and caches results between sessions. Repositories the size of NumPy or Django stay navigable.",
  },
  {
    q: "How is this different from an AI code reviewer?",
    a: "An AI reviewer writes comments on a pull request. CoGraph writes nothing: it derives a model of the code that you read yourself, and it never comments, approves or blocks. The two sit side by side.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="absolute inset-x-0 top-0 section-divider" />
      <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeader
          number="08"
          eyebrow="Questions"
          title="The things engineers ask first."
          lead="Something missing? Open an issue on GitHub or message us — we answer both."
        />

        <div className="flex flex-col divide-y divide-edge border-y border-edge">
          {FAQS.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-left">
                <span className="font-display text-base font-semibold text-ink sm:text-lg">{item.q}</span>
                <span
                  className="faq-plus flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-edge text-ink-muted transition-transform duration-200 group-hover:border-ink-dim"
                  aria-hidden="true"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1.5V10.5M1.5 6H10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="copy max-w-2xl pb-6 pr-10 text-sm text-ink-muted sm:text-[15px]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
