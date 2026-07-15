import { Metadata } from "next";
import SmartStreamClient from "./SmartStreamClient";

export const metadata: Metadata = {
  title: "SmartStream Case Study",
  description: "How we translated the AI-Driven Continuous Flow Methodology (AI-CFM) into a high-performance Project Execution Engine.",
  alternates: {
    canonical: "/work/smartstream",
  },
};

export default function SmartStreamPage() {
  return <SmartStreamClient />;
}
