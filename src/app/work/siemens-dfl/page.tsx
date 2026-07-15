import { Metadata } from "next";
import SiemensDFLClient from "./SiemensDFLClient";

export const metadata: Metadata = {
  title: "Siemens Digital Facility Log Case Study",
  description: "Translating physical facility logbooks into a dynamic building operations portal. We designed a touch-first, iPad-proportioned collaboration hub featuring real-time activity streams, QR code asset lookups, and remote acoustic diagnostics.",
  alternates: {
    canonical: "/work/siemens-dfl",
  },
};

export default function SiemensDFLPage() {
  return <SiemensDFLClient />;
}
