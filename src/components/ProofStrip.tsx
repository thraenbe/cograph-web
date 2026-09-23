import { EXTENSION, INCUBATOR, LANGUAGES } from "@/lib/site";

// The approved claims only (brain/07-brand.md · claim register). Installs are
// installs — never users.
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
      value: INCUBATOR.batch,
      label: "Cyber Valley",
      detail: `AI Incubator · ${INCUBATOR.detail}`,
    },
  ];

  return (
    <section aria-label="CoGraph at a glance" className="relative pb-8 pt-16 lg:pt-20">
      <div className="container-site">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-edge bg-edge lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="flex flex-col gap-2 bg-ground px-5 py-6 sm:px-7 sm:py-7">
              <dt className="label order-2 text-[10px] text-ink-dim">{item.label}</dt>
              <dd className="order-1 font-display text-3xl font-bold tracking-display text-ink sm:text-[2.1rem]">
                {item.value}
              </dd>
              <dd className="order-3 text-xs leading-relaxed text-ink-muted">{item.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
