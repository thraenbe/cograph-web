// ─── Central site config ──────────────────────────────────────────────────
// Founder-confirmable values live here so they are trivial to update in one
// place. Items marked TODO(founder) still need real assets/links.

export const SITE_URL = "https://cograph.co";

export const MARKETPLACE_URL =
  "https://marketplace.visualstudio.com/items?itemName=thraenbe.cograph";

export const INSTALL_COMMAND = "code --install-extension thraenbe.cograph";

// Interactive demo of CoGraph Review. It is a demo, not a product — every
// place that links here must say so.
export const DEMO_URL = "https://cograph-review.lovable.app/";

export const GITHUB_URL = "https://github.com/thraenbe/cograph";
export const CHANGELOG_URL = `${GITHUB_URL}/blob/main/CHANGELOG.md`;

// Web3Forms access key for the waitlist. This is a PUBLIC routing token — it is
// embedded in the client bundle and shipped to every visitor, so it is not a
// secret. It routes signups to the founder inbox configured in the Web3Forms
// dashboard; that destination email lives on Web3Forms' servers, never here.
// An env var (NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY) overrides it for rotation.
export const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  "c81ea59e-2e5d-4606-9edd-aff8bbbd386c";

// Human contact / "join the journey" channel. Founder chose LinkedIn (Magnus)
// over a mailto for the waitlist, enterprise contact, and follow-the-journey
// asks. Reused everywhere a non-install CTA needs a person to reach.
export const CONTACT_URL = "https://www.linkedin.com/in/magnus-hornstein/";

// Languages the shipped extension actually supports (site was previously out
// of date — only listed the first three).
export const LANGUAGES = [
  "Python",
  "TypeScript",
  "JavaScript",
  "Java",
  "C++",
] as const;

// ─── Public numbers ───────────────────────────────────────────────────────
// Only claims from the approved register (brain/07-brand.md). INSTALLS is an
// install count from the VS Code Marketplace — never call it users, customers
// or teams; there is no telemetry behind it. Re-check both values against the
// marketplace before each deploy and move the date with them.
export const EXTENSION = {
  version: "1.2.0",
  installs: 667,
  asOf: "Sep 2026",
};

export const INCUBATOR = {
  name: "Cyber Valley AI Incubator",
  award: "Best Business Award",
};

// ─── Founders ──────────────────────────────────────────────────────────────
// TODO(founder): confirm bios + roles, and fill the remaining profile links
// (Magnus GitHub). Bios below stick to what the handover supplied — no
// invented details.
// Typed (not `as const`) so optional links stay `string | null` — otherwise a
// non-null literal makes `person.linkedin || person.github` narrow to `never`.
type Founder = {
  name: string;
  role: string;
  focus: string;
  initials: string;
  photo: string;
  bio: string;
  linkedin: string | null;
  github: string | null;
};

// ─── Legal (Impressum) ─────────────────────────────────────────────────────
// CoGraph is not yet a registered company — the site is run by the two
// founders as private individuals, so the imprint lists them directly.
export const IMPRINT = {
  names: ["Magnus Hornstein", "Bela Thrän"],
  street: "Autenriethstraße 12",
  city: "72072 Tübingen",
  country: "Germany",
  email: "hornstein.magnus@gmail.com",
};

export const FOUNDERS: Founder[] = [
  {
    name: "Magnus Hornstein",
    role: "Co-founder",
    focus: "Business & Strategy",
    initials: "MH",
    photo: "/team/magnus.jpg",
    bio: "Finishing an ML master's at the University of Tübingen. Pairs technical depth with a strategy-consulting background to steer product and go-to-market.",
    linkedin: "https://www.linkedin.com/in/magnus-hornstein/",
    github: null, // TODO(founder): add Magnus GitHub if desired
  },
  {
    name: "Bela Thrän",
    role: "Co-founder",
    focus: "Engineering & Product",
    initials: "BT",
    photo: "/team/bela.jpg",
    bio: "Computer Science master's at the University of Tübingen. Originated CoGraph after a data-science internship at Bosch, and writes most of the extension.",
    linkedin: "https://www.linkedin.com/in/bela-thraen-474854316/",
    github: "https://github.com/thraenbe",
  },
];

// ─── Navigation ───────────────────────────────────────────────────────────
export const NAV = [
  { label: "How it works", href: "#how" },
  { label: "Extension", href: "#extension" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Design partners", href: "#partners" },
  { label: "Team", href: "#team" },
] as const;
