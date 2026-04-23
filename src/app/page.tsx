import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustTicker from "@/components/home/TrustTicker";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import EngagementCriteria from "@/components/home/EngagementCriteria";
import TechStack from "@/components/home/TechStack";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proto UX | Advanced UX/UI Design Consultancy",
  description: "Bridging the gap between Cognitive Science and Shipped Code. We design the protocols that govern how humans interact with intelligent systems.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-electric-cyan selection:text-authority-navy font-sans">
      <Navbar />
      <Hero />
      <TrustTicker />
      <ProblemSection />
      <SolutionSection />
      <EngagementCriteria />
      <TechStack />
    </main>
  );
}
