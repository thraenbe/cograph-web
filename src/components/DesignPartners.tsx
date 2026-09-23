import JoinWaitlist from "./JoinWaitlist";
import { LinkedInIcon, SectionHeader } from "./ui";
import { CONTACT_URL } from "@/lib/site";

// The one milestone that matters next: three design partners on the free
// four-week pilot (brain/05-business-model.md). An invitation to shape
// something, not a pitch to buy something.

const FIT = [
  "5–50 engineers",
  "Python or TypeScript",
  "Code on GitHub, work in VS Code",
  "AI assistants in daily use",
  "Review load you can feel",
];

const PILOT = [
  { week: "Before", text: "We reconstruct a baseline from your last 90 days of pull requests." },
  { week: "Week 1", text: "Install on one repository." },
  { week: "Weeks 2–3", text: "Use it in real review, with a direct line to both founders." },
  { week: "Week 4", text: "We go through the results together — including what didn't work." },
];

export default function DesignPartners() {
  return (
    <section id="partners" className="section">
      <div className="absolute inset-x-0 top-0 section-divider" />
      <div className="container-site">
        <div className="card relative overflow-hidden">
          <div
            className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px]"
            style={{
              background: "radial-gradient(circle, rgba(55,211,155,0.09) 0%, transparent 65%)",
            }}
          />
          <div className="relative grid gap-12 p-8 sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:p-14">
            <div className="flex flex-col">
              <SectionHeader
                number="06"
                eyebrow="Design partners"
                line="signal"
                title="Shape the team version with us."
                lead="We are looking for a few engineering teams to pilot what comes next. It's an invitation to shape something, not a pitch to buy something."
              />

              <div className="mt-10">
                <span className="label text-[10px] text-ink-dim">A good fit</span>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {FIT.map((item) => (
                    <li key={item} className="rounded-full border border-edge bg-ground/60 px-3.5 py-1.5 text-sm text-ink-soft">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <JoinWaitlist variant="partner" label="Apply as a design partner" className="btn-primary px-6" />
                <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary px-6">
                  <LinkedInIcon size={15} />
                  Message Magnus
                </a>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="label text-[10px] text-ink-dim">How a pilot runs · free · one repository</span>
              <ol className="mt-6 flex flex-col">
                {PILOT.map((step, i) => (
                  <li key={step.week} className="relative flex gap-5 pb-7 last:pb-0">
                    <div className="relative flex w-4 shrink-0 justify-center" aria-hidden="true">
                      {i < PILOT.length - 1 && (
                        <span className="absolute left-1/2 top-4 bottom-[-2px] w-[3px] -translate-x-1/2 rounded-full bg-signal/50" />
                      )}
                      <span className="relative mt-1 h-3 w-3 rounded-full bg-signal" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-medium text-ink-soft">{step.week}</span>
                      <p className="copy text-sm text-ink-muted">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
