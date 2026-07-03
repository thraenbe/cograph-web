// ─── Central site config ──────────────────────────────────────────────────
// Founder-confirmable values live here so they are trivial to update in one
// place. Items marked TODO(founder) still need real assets/links.

export const MARKETPLACE_URL =
  "https://marketplace.visualstudio.com/items?itemName=thraenbe.cograph";

// Hosted, in-browser demo — the low-friction "try it" path (no install).
export const DEMO_URL = "https://cograph-review.lovable.app/";

export const GITHUB_URL = "https://github.com/thraenbe/cograph";

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

// ─── Founders ──────────────────────────────────────────────────────────────
// TODO(founder): confirm bios + roles, add headshots, and fill the remaining
// profile links (Magnus GitHub). Bios below stick to what the handover
// supplied — no invented details.
// Typed (not `as const`) so optional links stay `string | null` — otherwise a
// non-null literal makes `person.linkedin || person.github` narrow to `never`.
type Founder = {
  name: string;
  role: string;
  focus: string;
  initials: string;
  bio: string;
  linkedin: string | null;
  github: string | null;
};

export const FOUNDERS: Founder[] = [
  {
    name: "Magnus Hornstein",
    role: "Co-founder",
    focus: "Business & Strategy",
    initials: "MH",
    bio: "Finishing an ML master's at the University of Tübingen. Pairs technical depth with a strategy-consulting background to steer product and go-to-market.",
    linkedin: "https://www.linkedin.com/in/magnus-hornstein/",
    github: null, // TODO(founder): add Magnus GitHub if desired
  },
  {
    name: "Bela Thrän",
    role: "Co-founder",
    focus: "Engineering & Product",
    initials: "BT",
    bio: "Computer Science master's at the University of Tübingen. Originated CoGraph after a data-science internship at Bosch.",
    linkedin: "https://www.linkedin.com/in/bela-thraen-474854316/",
    github: "https://github.com/thraenbe",
  },
];
