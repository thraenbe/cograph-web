const features = [
  {
    id: "relationships",
    color: "#3b6ef8",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="3" fill="#3b6ef8" />
        <circle cx="3" cy="4" r="2" fill="#3b6ef8" opacity="0.6" />
        <circle cx="19" cy="4" r="2" fill="#3b6ef8" opacity="0.6" />
        <circle cx="3" cy="18" r="2" fill="#3b6ef8" opacity="0.6" />
        <circle cx="19" cy="18" r="2" fill="#3b6ef8" opacity="0.6" />
        <line x1="5" y1="5.5" x2="9" y2="9" stroke="#3b6ef8" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="17" y1="5.5" x2="13" y2="9" stroke="#3b6ef8" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="5" y1="16.5" x2="9" y2="13" stroke="#3b6ef8" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="17" y1="16.5" x2="13" y2="13" stroke="#3b6ef8" strokeWidth="1" strokeOpacity="0.5" />
      </svg>
    ),
    title: "Function Relationships",
    desc: "See every call and dependency across your entire project. Instantly understand what calls what — and trace the full chain from any function.",
    badge: null,
  },
  {
    id: "git",
    color: "#f97316",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="4" r="2.5" fill="#f97316" opacity="0.8" />
        <circle cx="4" cy="14" r="2.5" fill="#f97316" opacity="0.8" />
        <circle cx="18" cy="14" r="2.5" fill="#f97316" opacity="0.8" />
        <path d="M11 6.5V9.5" stroke="#f97316" strokeWidth="1.2" strokeOpacity="0.5" />
        <path d="M11 9.5C11 12.5 4 12.5 4 11.5" stroke="#f97316" strokeWidth="1.2" strokeOpacity="0.5" fill="none" />
        <path d="M11 9.5C11 12.5 18 12.5 18 11.5" stroke="#f97316" strokeWidth="1.2" strokeOpacity="0.5" fill="none" />
      </svg>
    ),
    title: "Git Integration",
    desc: "Highlight what changed between commits. See exactly which nodes and edges were added, removed, or modified — diff your architecture, not just your code.",
    badge: null,
  },
  {
    id: "oop",
    color: "#22c55e",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="5" width="8" height="12" rx="1.5" stroke="#22c55e" strokeWidth="1.5" strokeOpacity="0.7" fill="none" />
        <rect x="12" y="5" width="8" height="12" rx="1.5" stroke="#22c55e" strokeWidth="1.5" strokeOpacity="0.7" fill="none" />
        <line x1="5" y1="9" x2="7" y2="9" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="5" y1="11.5" x2="7" y2="11.5" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="15" y1="9" x2="17" y2="9" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="15" y1="11.5" x2="17" y2="11.5" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="10" y1="11" x2="12" y2="11" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="1 1" />
      </svg>
    ),
    title: "OOP Class Overlay",
    desc: "Toggle class boundaries over the graph. Methods group visually by their parent class — perfect for object-oriented Python and TypeScript codebases.",
    badge: null,
  },
  {
    id: "folder",
    color: "#ec4899",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M2 6a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" stroke="#ec4899" strokeWidth="1.5" strokeOpacity="0.7" fill="none" />
        <line x1="7" y1="13" x2="15" y2="13" stroke="#ec4899" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="7" y1="10.5" x2="12" y2="10.5" stroke="#ec4899" strokeWidth="1" strokeOpacity="0.5" />
      </svg>
    ),
    title: "Folder Structure",
    desc: "Color-code nodes by directory. Spot cross-module dependencies at a glance and identify coupling between packages before it becomes technical debt.",
    badge: null,
  },
  {
    id: "intelligence",
    color: "#eab308",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2C7.134 2 4 5.134 4 9c0 2.386 1.184 4.497 3 5.796V17h8v-2.204C16.816 13.497 18 11.386 18 9c0-3.866-3.134-7-7-7z" stroke="#eab308" strokeWidth="1.5" strokeOpacity="0.7" fill="none" />
        <line x1="8" y1="17" x2="14" y2="17" stroke="#eab308" strokeWidth="1.5" strokeOpacity="0.5" />
        <line x1="9" y1="19.5" x2="13" y2="19.5" stroke="#eab308" strokeWidth="1.5" strokeOpacity="0.5" />
        <circle cx="11" cy="9" r="2" fill="#eab308" opacity="0.6" />
      </svg>
    ),
    title: "Graph Intelligence",
    desc: "AI-powered insights surface hidden complexity, dead code, and dependency cycles. Ask natural language questions about your architecture.",
    badge: "Premium",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-bg-2">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-14">
          <div className="flex items-center gap-2">
            <span className="w-6 h-px bg-primary" />
            <span className="text-xs font-mono uppercase tracking-widest text-primary">
              Features
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
            Everything you need to see
            <br />
            <span className="text-white/45">how your code actually works</span>
          </h2>
        </div>

        {/* Feature grid — 3 top + 2 bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.slice(0, 3).map((f) => (
            <FeatureCard key={f.id} feature={f} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {features.slice(3).map((f) => (
            <FeatureCard key={f.id} feature={f} large />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  large = false,
}: {
  feature: (typeof features)[0];
  large?: boolean;
}) {
  return (
    <div
      className={`relative group rounded-xl p-6 border border-white/[0.07] transition-all hover:border-white/[0.14] ${
        large ? "flex flex-row gap-5 items-start" : "flex flex-col gap-4"
      }`}
      style={{
        background: "rgba(13,13,26,0.5)",
      }}
    >
      {/* Color accent line */}
      <div
        className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: `linear-gradient(90deg, transparent, ${feature.color}60, transparent)`,
        }}
      />

      {/* Icon */}
      <div
        className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
        style={{
          background: `${feature.color}15`,
          border: `1px solid ${feature.color}25`,
        }}
      >
        {feature.icon}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-white/90">{feature.title}</h3>
          {feature.badge && (
            <span
              className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full"
              style={{
                background: "rgba(234,179,8,0.12)",
                border: "1px solid rgba(234,179,8,0.25)",
                color: "#eab308",
              }}
            >
              {feature.badge}
            </span>
          )}
        </div>
        <p className="text-sm text-white/45 leading-relaxed">{feature.desc}</p>
      </div>
    </div>
  );
}
