import { Metadata } from "next";
import SiemensConfigClient from "./SiemensConfigClient";

export const metadata: Metadata = {
  title: "Siemens Config Tool Case Study",
  description: "Simplifying complex building gateway commissioning. We re-designed the Siemens Technical Operational Center configuration workspace, replacing technical JSON formats with guided wizards and bulk deployment panels.",
  alternates: {
    canonical: "/work/siemens-config-tool",
  },
};

export default function SiemensConfigPage() {
  return <SiemensConfigClient />;
}
