import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Extension from "@/components/Extension";
import Trust from "@/components/Trust";
import Roadmap from "@/components/Roadmap";
import DesignPartners from "@/components/DesignPartners";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { getExtensionStats } from "@/lib/marketplace";

// Regenerate the page at most once a day so the Marketplace install count and
// version stay current without a redeploy.
export const revalidate = 86400;

// Order follows the page research: prove it exists, name the problem, show the
// mechanism, show the product, answer "is it safe / is it true", show where it
// goes, make the one ask, show who is behind it, clear objections, ask again.
export default async function Home() {
  const stats = await getExtensionStats();
  return (
    <>
      <Header />
      <main className="min-h-screen bg-ground">
        <Hero stats={stats} />
        <ProofStrip stats={stats} />
        <Problem />
        <HowItWorks />
        <Extension />
        <Trust />
        <Roadmap stats={stats} />
        <DesignPartners />
        <Team />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
