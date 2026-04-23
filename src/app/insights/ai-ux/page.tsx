import { Metadata } from "next";
import AIUXClient from "./AIUXClient";

export const metadata: Metadata = {
  title: "AI & Human-Centric UX",
  description: "Designing the protocols for human interaction with agentic systems and intelligent interfaces.",
  alternates: {
    canonical: "/insights/ai-ux",
  },
};

export default function AIUXPage() {
  return <AIUXClient />;
}
