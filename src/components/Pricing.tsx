import { MARKETPLACE_URL, CONTACT_URL } from "@/lib/site";

// NOTE: No prices anywhere by founder constraint. Plans are described
// qualitatively only — status words ("Available now" / "Coming soon"), never
// figures.

const freeTier = {
  name: "Free",
  status: "Available now",
  sub: "Full visualization. No account, no config.",
  color: "#3b6ef8",
  cta: "Try the prototype",
  ctaHref: MARKETPLACE_URL,
  features: [
    "Full call-graph visualization",
    "All five languages — Python, TypeScript, JavaScript, Java, C++",
    "OOP class overlay",
    "Folder-structure coloring",
    "Git commit diff view",
    "Pan, zoom & node search",
    "Real-time graph updates",
  ],
};

const premiumTier = {
  name: "Premium",
  status: "Coming soon",
  sub: "Join the waitlist for early access.",
  color: "#eab308",
  cta: "Get notified",
  ctaHref: CONTACT_URL,
  features: [
    "Everything in Free",
    "Graph Intelligence — AI insights",
    "Natural-language graph queries",
    "Multi-agent activity tracking",
    "Team collaboration & sharing",
    "API access for CI/CD pipelines",
    "Priority support",
  ],
};

export default function Pricing() {
  return (
    <section id="plans" className="relative py-24">
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
              Plans
            </span>
            <span className="w-6 h-px bg-primary" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
            Free today.
            <br />
            <span className="text-white/45">
              Paid team and enterprise plans on the way.
            </span>
          </h2>
          <p className="text-white/40 text-base max-w-md mx-auto">
            The core graph visualization is free and live now. Premium and team
            features are in the works — join the waitlist to be first in.
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <TierCard tier={freeTier} featured={true} />
          <TierCard tier={premiumTier} featured={false} />
        </div>

        {/* Teams & enterprise — named, no prices */}
        <div
          className="mt-6 rounded-xl p-6 lg:p-7 border border-white/[0.07] flex flex-col sm:flex-row sm:items-center justify-between gap-5"
          style={{ background: "rgba(13,13,26,0.5)" }}
        >
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-node-orange" />
              <span className="text-xs font-mono uppercase tracking-widest text-white/45">
                Teams & Enterprise
              </span>
              <span
                className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full"
                style={{
                  background: "rgba(249,115,22,0.12)",
                  border: "1px solid rgba(249,115,22,0.3)",
                  color: "#f97316",
                }}
              >
                Coming soon
              </span>
            </div>
            <p className="text-sm text-white/55 leading-relaxed max-w-xl">
              Architecture oversight across multi-team, multi-repo codebases —
              with self-host, SSO and CI/CD integration. Want early access or to
              shape the roadmap?
            </p>
          </div>
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-shrink-0 items-center justify-center gap-2 px-5 py-3 rounded-md border border-white/12 text-white/80 font-medium text-sm hover:border-white/25 hover:text-white transition-colors"
          >
            Talk to us
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
      <div className="flex flex-col gap-3">
        <span
          className="text-xs font-mono uppercase tracking-widest"
          style={{ color: tier.color }}
        >
          {tier.name}
        </span>
        {/* Status word replaces any price */}
        <div className="flex items-center gap-2.5">
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{
              backgroundColor: tier.color,
              boxShadow: `0 0 12px ${tier.color}`,
            }}
          />
          <span className="text-2xl font-semibold tracking-tight text-white/90">
            {tier.status}
          </span>
        </div>
        <span className="text-sm text-white/40">{tier.sub}</span>
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
              <circle cx="8" cy="8" r="7" fill={tier.color} opacity="0.15" />
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
