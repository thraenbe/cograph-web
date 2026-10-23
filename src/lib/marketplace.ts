// ─── Live extension stats ─────────────────────────────────────────────────
// Installs and the current version come from the VS Code Marketplace's public
// gallery API when a page is rendered. Pages that show them export
// `revalidate = 86400`, so on Vercel they are regenerated at most once a day —
// the numbers stay current without a commit or a redeploy. If the API is down
// or answers with something unexpected, the snapshot in EXTENSION is shown.
//
// The figure is the Marketplace "install" statistic: an install count, never
// users, customers or teams (brain/07-brand.md · claim register).

import { EXTENSION } from "./site";

const GALLERY_URL =
  "https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery";
const EXTENSION_ID = "thraenbe.cograph";

// filterType 7 = match by publisher.name.
// flags 768 = IncludeLatestVersionOnly (512) + IncludeStatistics (256).
const QUERY = {
  filters: [{ criteria: [{ filterType: 7, value: EXTENSION_ID }] }],
  flags: 768,
};

export type ExtensionStats = {
  version: string;
  installs: number;
  asOf: string;
};

// Same form as the snapshot ("Oct 2026"), dated where the company is.
function asOfLabel(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "Europe/Berlin",
  });
}

export async function getExtensionStats(): Promise<ExtensionStats> {
  try {
    const res = await fetch(GALLERY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json;api-version=7.1-preview.1",
      },
      body: JSON.stringify(QUERY),
      next: { revalidate: 86400 },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) throw new Error(`Marketplace responded ${res.status}`);

    const data = await res.json();
    const ext = data?.results?.[0]?.extensions?.[0];
    const installs = ext?.statistics?.find(
      (s: { statisticName?: string }) => s.statisticName === "install"
    )?.value;
    const version = ext?.versions?.[0]?.version;

    if (
      typeof installs !== "number" ||
      !Number.isFinite(installs) ||
      installs <= 0 ||
      typeof version !== "string"
    ) {
      throw new Error("Unexpected Marketplace response");
    }

    return { installs: Math.round(installs), version, asOf: asOfLabel(new Date()) };
  } catch (err) {
    console.error("[marketplace] using the EXTENSION snapshot:", err);
    return EXTENSION;
  }
}
