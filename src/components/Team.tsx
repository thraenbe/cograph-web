import Image from "next/image";
import { FOUNDERS } from "@/lib/site";

// FLAG(founder): bios and roles below are drafts built only from the
// handover — confirm/replace wording before launch.
// Profile links come from src/lib/site.ts (Magnus GitHub + Bela LinkedIn TODO).

export default function Team() {
  return (
    <section id="team" className="relative py-24 bg-card">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-12">
          <div className="flex items-center gap-3">
            <span className="w-8 h-0.5 bg-signal" />
            <span className="label text-[10px] text-signal">Team</span>
          </div>
          <h2 className="font-display font-bold text-3xl lg:text-4xl tracking-display text-ink">
            Built by two founders
            <br />
            <span className="text-ink-dim">who needed this themselves.</span>
          </h2>
          <p className="text-base text-ink-muted copy max-w-2xl">
            From Tübingen. CoGraph started as the tool we wished we had while
            trying to read code we hadn&apos;t written by hand.
          </p>
        </div>

        {/* Founder cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {FOUNDERS.map((person) => (
            <div
              key={person.name}
              className="relative flex flex-col gap-5 rounded-lg p-7 border border-edge bg-ground"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border border-edge bg-card">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-display font-semibold text-ink text-lg leading-tight">
                    {person.name}
                  </h3>
                  <span className="text-sm text-ink-dim">
                    {person.role}
                    <span className="text-edge"> · </span>
                    <span className="text-ink-muted">{person.focus}</span>
                  </span>
                </div>
              </div>

              <p className="text-sm text-ink-muted copy">{person.bio}</p>

              {/* Social links — only render the ones that exist */}
              {(person.linkedin || person.github) && (
                <div className="flex items-center gap-3 mt-auto pt-1">
                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${person.name} on LinkedIn`}
                      className="w-9 h-9 rounded-md flex items-center justify-center border border-edge text-ink-dim hover:text-signal hover:border-signal/40 transition-colors"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  )}
                  {person.github && (
                    <a
                      href={person.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${person.name} on GitHub`}
                      className="w-9 h-9 rounded-md flex items-center justify-center border border-edge text-ink-dim hover:text-signal hover:border-signal/40 transition-colors"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
