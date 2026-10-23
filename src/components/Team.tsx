import Image from "next/image";
import { GitHubIcon, LinkedInIcon, Section, SectionHeader } from "./ui";
import { FOUNDERS, GITHUB_URL, INCUBATOR } from "@/lib/site";

// FLAG(founder): bios and roles come from src/lib/site.ts — confirm wording
// before launch. Portraits are 4:5 crops of the originals in public/team/; the
// stale stage slide behind Bela ("350+ …") is retouched out of his crop.

const PORTRAIT: Record<string, string> = {
  "Magnus Hornstein": "/team/magnus-4x5.jpg",
  "Bela Thrän": "/team/bela-4x5.jpg",
};

export default function Team() {
  return (
    <Section id="team" number="07" name="Team" line="signal">
        <SectionHeader
          title="Two founders who needed this themselves."
          lead="CoGraph came out of a working engineer's own problem: Bela started it after a data-science internship at Bosch. We build it in Tübingen, in the open."
        />

        {/* One founder per row, like a masthead: the bio gets a reading width
            instead of a sliver beside the portrait. */}
        <div className="mt-16 grid grid-cols-1 gap-px border border-edge bg-edge lg:mt-20">
          {FOUNDERS.map((person) => (
            <article key={person.name} className="flex flex-col gap-7 bg-ground p-7 sm:flex-row sm:gap-10 sm:p-8">
              <div className="relative aspect-[4/5] w-full max-w-[13rem] shrink-0 overflow-hidden bg-card sm:w-40">
                <Image
                  src={PORTRAIT[person.name] ?? person.photo}
                  alt={`Portrait of ${person.name}`}
                  fill
                  sizes="208px"
                  className="object-cover grayscale"
                />
              </div>
              <div className="flex max-w-xl flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <h3 className="h3">{person.name}</h3>
                  <span className="text-sm text-ink-faint">
                    {person.role} · {person.focus}
                  </span>
                </div>
                <p className="body">{person.bio}</p>
                <div className="mt-auto flex items-center gap-2 pt-1">
                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${person.name} on LinkedIn`}
                      className="flex h-10 w-10 items-center justify-center border border-edge text-ink-faint transition-colors hover:border-ink-dim hover:text-ink"
                    >
                      <LinkedInIcon size={15} />
                    </a>
                  )}
                  {person.github && (
                    <a
                      href={person.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${person.name} on GitHub`}
                      className="flex h-10 w-10 items-center justify-center border border-edge text-ink-faint transition-colors hover:border-ink-dim hover:text-ink"
                    >
                      <GitHubIcon size={15} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Backing and context — approved claims only */}
        <div className="grid grid-cols-1 gap-px border border-t-0 border-edge bg-edge sm:grid-cols-3">
          <div className="flex flex-col gap-1.5 bg-ground p-6">
            <span className="label text-xs text-ink-faint">Incubated at</span>
            <span className="font-display text-base font-semibold text-ink">
              {INCUBATOR.name}
            </span>
            <span className="text-sm text-ink-muted">Winner of the {INCUBATOR.award}</span>
          </div>
          <div className="flex flex-col gap-1.5 bg-ground p-6">
            <span className="label text-xs text-ink-faint">Based in</span>
            <span className="font-display text-base font-semibold text-ink">Tübingen, Germany</span>
            <span className="text-sm text-ink-muted">Founders from the University of Tübingen</span>
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-1.5 bg-ground p-6 transition-colors hover:bg-card"
          >
            <span className="label text-xs text-ink-faint">Built in the open</span>
            <span className="font-display text-base font-semibold text-ink">MIT-licensed on GitHub</span>
            <span className="text-sm text-ink-muted group-hover:text-ink-soft">
              Issues and pull requests welcome →
            </span>
          </a>
        </div>
    </Section>
  );
}
