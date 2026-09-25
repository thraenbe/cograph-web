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

// Order follows the page research: prove it exists, name the problem, show the
// mechanism, show the product, answer "is it safe / is it true", show where it
// goes, make the one ask, show who is behind it, clear objections, ask again.
export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-ground">
        <Hero />
        <ProofStrip />
        <Problem />
        <HowItWorks />
        <Extension />
        <Trust />
        <Roadmap />
        <DesignPartners />
        <Team />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
