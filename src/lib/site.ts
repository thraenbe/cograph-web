// ─── Central site config ──────────────────────────────────────────────────
// Founder-confirmable values live here so they are trivial to update in one
// place. Items marked TODO(founder) still need real assets/links.

export const MARKETPLACE_URL =
  "https://marketplace.visualstudio.com/items?itemName=thraenbe.cograph";

export const GITHUB_URL = "https://github.com/thraenbe/cograph";

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
// profile links (Magnus GitHub, Bela LinkedIn). Bios below stick to what the
// handover supplied — no invented details.
export const FOUNDERS = [
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
    linkedin: null, // TODO(founder): add Bela LinkedIn
    github: "https://github.com/thraenbe",
  },
] as const;
