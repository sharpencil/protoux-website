import { Metadata } from "next";
import OperationalIntelligenceClient from "./OperationalIntelligenceClient";

export const metadata: Metadata = {
  title: "Operational Intelligence Case Study",
  description: "A deep dive into how we engineered the experience for a high-stakes operational intelligence platform.",
  alternates: {
    canonical: "/work/operational-intelligence",
  },
};

export default function OperationalIntelligencePage() {
  return <OperationalIntelligenceClient />;
}
