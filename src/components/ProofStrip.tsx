import type { ExtensionStats } from "@/lib/marketplace";
import { INCUBATOR, LANGUAGES } from "@/lib/site";

// The approved claims only (brain/07-brand.md · claim register). Installs are
// installs — never users. Set as a spec sheet — field on the left, value and
// its context on the right, one ruled row each — rather than as oversized
// numbers: each figure arrives with the words that say what it counts.
export default function ProofStrip({ stats }: { stats: ExtensionStats }) {
  const items = [
    {
      value: stats.installs.toLocaleString("en-US"),
      label: "Installs",
      detail: `VS Code Marketplace, ${stats.asOf}`,
    },
    {
      value: String(LANGUAGES.length),
      label: "Languages",
      detail: LANGUAGES.join(" · "),
    },
    {
      value: "MIT",
      label: "Licence",
      detail: "Free and open source",
    },
    {
      value: "Winner",
      label: "Cyber Valley",
      detail: `${INCUBATOR.award} · ${INCUBATOR.name}`,
    },
  ];

  return (
    <section aria-label="CoGraph at a glance" className="py-12 lg:py-16">
      <div className="container-site">
        <dl className="grid grid-cols-1 border-t border-edge md:grid-cols-2 md:gap-x-12">
          {items.map((item) => (
            <div
              key={item.label}
              className="grid grid-cols-[7rem_minmax(0,1fr)] items-baseline gap-x-6 gap-y-1.5 border-b border-edge py-6 sm:grid-cols-[9rem_minmax(0,1fr)]"
            >
              <dt className="label text-xs text-ink-faint">{item.label}</dt>
              <dd className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink">{item.value}</dd>
              <dd className="col-start-2 text-sm leading-relaxed text-ink-muted">{item.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
