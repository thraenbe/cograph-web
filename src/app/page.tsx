import Hero from "@/components/Hero";
import Demo from "@/components/Demo";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      {/* 1 — Hero: company vision + dual CTA (unchanged) */}
      <Hero />
      {/* 2 — Demo: an early preview of CoGraph Review */}
      <Demo />
      {/* 3 — Team */}
      <Team />
      <Footer />
    </main>
  );
}
