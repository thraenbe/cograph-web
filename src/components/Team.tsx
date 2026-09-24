import Image from "next/image";
import { GitHubIcon, LinkedInIcon, Section, SectionHeader } from "./ui";
import { FOUNDERS, GITHUB_URL, INCUBATOR } from "@/lib/site";

// FLAG(founder): bios and roles come from src/lib/site.ts — confirm wording
// before launch. Portraits are cropped from the originals in public/team/ so
// the old stage slide behind Bela ("350+ …") is not legible.

const PORTRAIT: Record<string, string> = {
  "Magnus Hornstein": "/team/magnus-portrait.jpg",
  "Bela Thrän": "/team/bela-portrait.jpg",
};

export default function Team() {
  return (
    <Section id="team" number="07" name="Team" line="signal">
        <SectionHeader
          title="Two founders who needed this themselves."
          lead="CoGraph came out of a working engineer's own problem — Bela started it after a data-science internship at Bosch. We build it in Tübingen, in the open."
        />

        <div className="ruled mt-14 md:grid-cols-2 lg:mt-16">
          {FOUNDERS.map((person) => (
            <article key={person.name} className="flex flex-col gap-6 bg-ground p-7 sm:flex-row sm:p-8">
              <div className="relative h-32 w-32 shrink-0 overflow-hidden bg-card">
                <Image
                  src={PORTRAIT[person.name] ?? person.photo}
                  alt={`Portrait of ${person.name}`}
                  fill
                  sizes="128px"
                  className="object-cover grayscale"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-xl font-semibold leading-tight text-ink">{person.name}</h3>
                  <span className="label text-[10px] text-ink-dim">
                    {person.role} · {person.focus}
                  </span>
                </div>
                <p className="copy text-sm text-ink-muted">{person.bio}</p>
                <div className="mt-auto flex items-center gap-2 pt-1">
                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${person.name} on LinkedIn`}
                      className="flex h-9 w-9 items-center justify-center border border-edge text-ink-dim transition-colors hover:border-ink-dim hover:text-ink"
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
                      className="flex h-9 w-9 items-center justify-center border border-edge text-ink-dim transition-colors hover:border-ink-dim hover:text-ink"
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
        <div className="ruled border-t-0 sm:grid-cols-3">
          <div className="flex flex-col gap-1.5 bg-ground p-6">
            <span className="label text-[10px] text-ink-dim">Incubated at</span>
            <span className="font-display text-base font-semibold text-ink">
              {INCUBATOR.name} · {INCUBATOR.batch}
            </span>
            <span className="text-xs text-ink-muted">{INCUBATOR.detail}</span>
          </div>
          <div className="flex flex-col gap-1.5 bg-ground p-6">
            <span className="label text-[10px] text-ink-dim">Based in</span>
            <span className="font-display text-base font-semibold text-ink">Tübingen, Germany</span>
            <span className="text-xs text-ink-muted">Founders from the University of Tübingen</span>
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-1.5 bg-ground p-6 transition-colors hover:bg-card"
          >
            <span className="label text-[10px] text-ink-dim">Built in the open</span>
            <span className="font-display text-base font-semibold text-ink">MIT-licensed on GitHub</span>
            <span className="text-xs text-ink-muted group-hover:text-ink-soft">
              Issues and pull requests welcome →
            </span>
          </a>
        </div>
    </Section>
  );
}
