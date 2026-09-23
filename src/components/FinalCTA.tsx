import CopyCommand from "./CopyCommand";
import JoinWaitlist from "./JoinWaitlist";
import { ExtensionIcon } from "./ui";
import { INSTALL_COMMAND, MARKETPLACE_URL } from "@/lib/site";

// Closing statement: the approved one-sentence narrative (brain/07-brand.md),
// then the same single action the hero asks for.
export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-x-0 top-0 section-divider" />
      <div className="pointer-events-none absolute inset-0 bg-dot-grid bg-dot-32 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 45% 55% at 50% 50%, rgba(55,211,155,0.09) 0%, transparent 70%)",
        }}
      />

      <div className="container-site relative flex flex-col items-center text-center">
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

        <h2 className="max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-display-tight text-ink sm:text-5xl lg:text-6xl">
          AI writes the code.{" "}
          <span className="text-ink-muted">CoGraph is how your team still understands it.</span>
        </h2>
        <p className="lead mt-7 max-w-xl">
          Install the extension, open a folder, and run{" "}
          <span className="whitespace-nowrap font-mono text-[0.92em] text-ink-soft">CoGraph: Visualize Project</span>.
        </p>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <a
            href={MARKETPLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full px-6 sm:w-auto"
          >
            <ExtensionIcon size={16} />
            Install for VS Code
          </a>
          <JoinWaitlist
            variant="waitlist"
            label="Get notified about the team version"
            className="btn-secondary w-full px-6 sm:w-auto"
          />
        </div>
        <CopyCommand command={INSTALL_COMMAND} className="mt-6 w-full sm:w-auto" />
      </div>
    </section>
  );
}
