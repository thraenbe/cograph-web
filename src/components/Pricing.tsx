const freeTier = {
  name: "Free",
  price: "$0",
  sub: "Forever free",
  color: "#3b6ef8",
  cta: "Install for VS Code",
  ctaHref:
    "https://marketplace.visualstudio.com/items?itemName=thraenbe.cograph",
  features: [
    "Full call graph visualization",
    "Python, TypeScript & JavaScript",
    "OOP class overlay",
    "Folder structure coloring",
    "Git commit diff view",
    "Pan, zoom & node search",
    "Real-time graph updates",
  ],
};

const premiumTier = {
  name: "Premium",
  price: "Coming soon",
  sub: "Notify me",
  color: "#eab308",
  cta: "Get notified",
  ctaHref: "https://github.com/thraenbe/cograph",
  features: [
    "Everything in Free",
    "Graph Intelligence (AI insights)",
    "Natural language graph queries",
    "Multi-agent activity tracking",
    "Team collaboration & sharing",
    "API access for CI/CD pipelines",
    "Priority support",
  ],
};

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-bg-2">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-14 text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-primary" />
            <span className="text-xs font-mono uppercase tracking-widest text-primary">
              Pricing
            </span>
            <span className="w-6 h-px bg-primary" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
            Start for free.
            <br />
            <span className="text-white/45">No config, no accounts.</span>
          </h2>
          <p className="text-white/40 text-base max-w-md mx-auto">
            Core graph visualization is free forever. Premium features are
            coming — join the waitlist to be notified.
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <TierCard tier={freeTier} featured={true} />
          <TierCard tier={premiumTier} featured={false} />
        </div>
      </div>
    </section>
  );
}

function TierCard({
  tier,
  featured,
}: {
  tier: typeof freeTier;
  featured: boolean;
}) {
  return (
    <div
      className="relative flex flex-col gap-7 rounded-xl p-8 border transition-colors"
      style={{
        background: featured
          ? `linear-gradient(135deg, rgba(59,110,248,0.1) 0%, rgba(13,13,26,0.8) 100%)`
          : "rgba(13,13,26,0.5)",
        borderColor: featured
          ? "rgba(59,110,248,0.35)"
          : "rgba(255,255,255,0.07)",
      }}
    >
      {/* Top colored line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl"
        style={{
          background: `linear-gradient(90deg, transparent, ${tier.color}, transparent)`,
          opacity: featured ? 0.8 : 0.4,
        }}
      />

      {/* Tier header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span
            className="text-xs font-mono uppercase tracking-widest"
            style={{ color: tier.color }}
          >
            {tier.name}
          </span>
          {featured && (
            <span
              className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full"
              style={{
                background: "rgba(59,110,248,0.15)",
                border: "1px solid rgba(59,110,248,0.3)",
                color: "#3b6ef8",
              }}
            >
              Available now
            </span>
          )}
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-white/90">{tier.price}</span>
        </div>
        <span className="text-sm text-white/35">{tier.sub}</span>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/[0.06]" />

      {/* Feature list */}
      <ul className="flex flex-col gap-3 flex-1">
        {tier.features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="mt-0.5 flex-shrink-0"
              aria-hidden="true"
            >
              <circle
                cx="8"
                cy="8"
                r="7"
                fill={tier.color}
                opacity={i === 0 && !featured ? "0.15" : "0.15"}
              />
              <path
                d="M5 8L7 10L11 6"
                stroke={tier.color}
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className="text-sm leading-relaxed"
              style={{
                color:
                  i === 0 && !featured
                    ? "rgba(255,255,255,0.35)"
                    : "rgba(255,255,255,0.65)",
              }}
            >
              {f}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={tier.ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-md font-medium text-sm transition-all"
        style={
          featured
            ? {
                background: "#3b6ef8",
                color: "white",
              }
            : {
                background: "rgba(234,179,8,0.1)",
                border: "1px solid rgba(234,179,8,0.25)",
                color: "#eab308",
              }
        }
      >
        {tier.cta}
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}
