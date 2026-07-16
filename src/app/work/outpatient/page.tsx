import { Metadata } from "next";
import OutpatientClient from "./OutpatientClient";

export const metadata: Metadata = {
  title: "ChartWise Outpatient CDI Case Study",
  description: "Optimizing Risk Adjustment Factor (RAF) accuracy and Hierarchical Condition Categories (HCC) capture for Medicare Advantage outpatient healthcare workflows.",
  alternates: {
    canonical: "/work/outpatient",
  },
};

export default function OutpatientPage() {
  return <OutpatientClient />;
}
