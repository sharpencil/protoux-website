import { Metadata } from "next";
import InsightsClient from "./InsightsClient";

export const metadata: Metadata = {
  title: "Insights",
  description: "Advanced perspectives on UX logic, design systems infrastructure, and the intersection of AI and human interaction.",
  alternates: {
    canonical: "/insights",
  },
};

export default function InsightsPage() {
  return <InsightsClient />;
}
