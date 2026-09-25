import CopyCommand from "./CopyCommand";
import JoinWaitlist from "./JoinWaitlist";
import { Section } from "./ui";
import { INSTALL_COMMAND, MARKETPLACE_URL } from "@/lib/site";

// Closing statement: the approved one-sentence narrative (brain/07-brand.md),
// then the same single action the hero asks for. The page route terminates
// here — "End of line", as on the last page of the brand book.
export default function FinalCTA() {
  return (
    <Section name="End of line" route="end" terminus>
      {/* The full four-line system — allowed here: this is the whole idea */}
      <svg width="132" height="36" viewBox="0 0 132 36" fill="none" aria-hidden="true" className="mb-10">
        <path d="M8 28H44" stroke="#37d39b" strokeWidth="3" strokeLinecap="round" />
        <path d="M44 28H100" stroke="#ffb454" strokeWidth="3" strokeLinecap="round" />
        <path d="M44 28 64 8" stroke="#4f8cff" strokeWidth="3" strokeLinecap="round" />
        <path d="M100 28 120 8" stroke="#ff6b9a" strokeWidth="3" strokeLinecap="round" />
        <circle cx="8" cy="28" r="4.5" fill="#e8eef5" />
        <circle cx="64" cy="8" r="4.5" fill="#e8eef5" />
        <circle cx="120" cy="8" r="4.5" fill="#e8eef5" />
        <circle cx="44" cy="28" r="5.5" fill="#0b0f14" stroke="#e8eef5" strokeWidth="3" />
        <circle cx="100" cy="28" r="5.5" fill="#0b0f14" stroke="#e8eef5" strokeWidth="3" />
      </svg>

      <h2 className="max-w-4xl text-balance font-display text-[2.5rem] font-light leading-[1.04] tracking-[-0.04em] text-ink sm:text-6xl lg:text-[4.25rem]">
        AI writes the code. CoGraph is how your team still understands it.
      </h2>
      <p className="lead mt-8 max-w-xl">
        Install the extension, open a folder, and run{" "}
        <span className="whitespace-nowrap font-mono text-[0.92em] text-ink-soft">CoGraph: Visualize Project</span>.
      </p>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
        <a href={MARKETPLACE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
          Install for VS Code
        </a>
        <JoinWaitlist
          variant="waitlist"
          label="Get notified about the team version"
          showArrow={false}
          className="btn-secondary"
        />
      </div>
      <CopyCommand command={INSTALL_COMMAND} className="mt-4 w-full sm:w-auto" />
    </Section>
  );
}
