import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Vision from "@/components/Vision";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import HowItWorks from "@/components/HowItWorks";
import Roadmap from "@/components/Roadmap";
import UseCases from "@/components/UseCases";
import Market from "@/components/Market";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />
      {/* 1 — Hero: company vision + dual CTA */}
      <Hero />
      {/* 2 — The shift: the macro problem */}
      <Problem />
      {/* 3 — Vision: read your codebase like a metro map (north star) */}
      <Vision />
      {/* 4 — Product today: the shipped prototype */}
      <Features />
      <Screenshots />
      <HowItWorks />
      {/* 5 — Where it goes: platform roadmap */}
      <Roadmap />
      {/* 6 — Who it's for: audiences tied to the roadmap */}
      <UseCases />
      {/* 7 — Market / Why now: qualitative thesis */}
      <Market />
      {/* 8 — Plans: model without prices */}
      <Pricing />
      {/* 9 — Team */}
      <Team />
      {/* 10 — CTA: try the prototype + join the journey */}
      <CtaBanner />
      <Footer />
    </main>
  );
}
