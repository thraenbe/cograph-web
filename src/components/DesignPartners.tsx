import JoinWaitlist from "./JoinWaitlist";
import { LinkedInIcon, Section, SectionHeader } from "./ui";
import { CONTACT_URL } from "@/lib/site";

// The one milestone that matters next: three design partners on the free
// four-week pilot (brain/05-business-model.md). An invitation to shape
// something, not a pitch to buy something.
//
// The page's single paper-mode band (04 · Colour — two modes, one system):
// the one ask is set apart by inverting the ground, not by a glow.

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
    <Section id="partners" number="06" name="Design partners" line="signal" tone="paper">
      <div className="grid gap-14 xl:grid-cols-[1.1fr_1fr] xl:gap-16">
        <div className="flex flex-col">
          <SectionHeader
            tone="paper"
            title="Shape the team version with us."
            lead="We are looking for a few engineering teams to pilot what comes next. It's an invitation to shape something, not a pitch to buy something."
          />

          <div className="mt-10">
            <span className="label text-[10px] text-paper-muted">A good fit</span>
            <ul className="mt-4 border-t border-paper-rule">
              {FIT.map((item) => (
                <li key={item} className="flex items-center gap-3 border-b border-paper-rule py-3 text-sm text-paper-ink">
                  <span className="h-2 w-2 rounded-full bg-paper-ink" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <JoinWaitlist
              variant="partner"
              label="Apply as a design partner"
              showArrow={false}
              className="inline-flex h-11 items-center justify-center rounded-[3px] bg-paper-ink px-5 text-sm font-medium text-paper-white transition-colors hover:bg-[#252c35]"
            />
            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-[3px] border border-paper-ink/30 px-5 text-sm font-medium text-paper-ink transition-colors hover:border-paper-ink"
            >
              <LinkedInIcon size={14} />
              Message Magnus
            </a>
          </div>
        </div>

        <div className="flex flex-col xl:pt-2">
          <span className="label text-[10px] text-paper-muted">How a pilot runs · free · one repository</span>
          <ol className="mt-6 flex flex-col">
            {PILOT.map((step, i) => (
              <li key={step.week} className="relative flex gap-5 pb-8 last:pb-0">
                {i < PILOT.length - 1 && (
                  <span aria-hidden="true" className="absolute left-[6.5px] top-4 bottom-[-6px] w-[3px] bg-signal" />
                )}
                <div className="relative flex w-4 shrink-0 justify-center" aria-hidden="true">
                  <span className="relative mt-[3px] h-3.5 w-3.5 rounded-full border-[3px] border-paper-ink bg-paper" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-paper-ink">{step.week}</span>
                  <p className="copy text-sm text-paper-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
