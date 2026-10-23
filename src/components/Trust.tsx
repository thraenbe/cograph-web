import { Section, SectionHeader } from "./ui";

// Three promises about where the code goes. "Your code never leaves your
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

// Set on the raised card band: three promises, side by side because they are
// parallel, each opened by a signal-green leaf beside its title.
export default function Trust() {
  return (
    <Section id="trust" number="04" name="Your code" line="signal" tone="card">
      <SectionHeader title="It runs where your code is." />

      <ul className="mt-12 grid grid-cols-1 border-t border-edge lg:mt-14 lg:grid-cols-3">
        {LOCAL.map((item, i) => (
          <li
            key={item.title}
            className={`flex flex-col gap-3 border-b border-edge py-8 lg:border-b-0 lg:pb-2 lg:pt-8 ${
              i > 0 ? "lg:border-l lg:pl-8" : ""
            } ${i < LOCAL.length - 1 ? "lg:pr-8" : ""}`}
          >
            <h3 className="flex items-start gap-3">
              <svg width="14" height="14" viewBox="0 0 14 14" className="mt-[7px] shrink-0" aria-hidden="true">
                <circle cx="7" cy="7" r="5" fill="#37d39b" />
              </svg>
              <span className="h3 text-lg">{item.title}</span>
            </h3>
            <p className="body pl-[26px]">{item.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
