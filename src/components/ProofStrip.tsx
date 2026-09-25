import { EXTENSION, INCUBATOR, LANGUAGES } from "@/lib/site";

// The approved claims only (brain/07-brand.md · claim register). Installs are
// installs — never users. Set as a spec-sheet row: rules, not tiles.
export default function ProofStrip() {
  const items = [
    {
      value: EXTENSION.installs.toLocaleString("en-US"),
      label: "Installs",
      detail: `VS Code Marketplace, ${EXTENSION.asOf}`,
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
    <section aria-label="CoGraph at a glance" className="pb-20 pt-16 lg:pb-24">
      <div className="container-site">
        <dl className="grid grid-cols-2 border-y border-edge lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col gap-3 py-6 pr-4 sm:py-8 ${i % 2 === 1 ? "border-l border-edge pl-5 sm:pl-8" : ""} ${
                i >= 2 ? "border-t border-edge lg:border-t-0" : ""
              } ${i === 2 ? "lg:border-l lg:pl-8" : ""}`}
            >
              <dt className="label text-[10px] text-ink-dim">{item.label}</dt>
              <dd className="font-display text-4xl font-light tracking-[-0.03em] text-ink sm:text-5xl">
                {item.value}
              </dd>
              <dd className="max-w-[16rem] text-xs leading-relaxed text-ink-muted">{item.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
