import { NextRequest, NextResponse } from "next/server";

// ─── Subdomain routing ─────────────────────────────────────────────────────
// dev.cograph.co and plan.cograph.co are extra domains on this same Vercel
// project. Matching on the first host label (not the full domain) keeps local
// testing easy: dev.localhost:3000 and plan.localhost:3000 work too.
const SUBDOMAIN_PAGES: Record<string, string> = {
  dev: "/dev",
  plan: "/plan",
};

export function middleware(req: NextRequest) {
  const host = req.headers.get("host")?.split(":")[0] ?? "";
  const page = SUBDOMAIN_PAGES[host.split(".")[0]];
  if (!page) return NextResponse.next();

  // Every path on a subdomain serves its placeholder page for now.
  const url = req.nextUrl.clone();
  url.pathname = page;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals, API routes, and static files (anything with a dot).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
