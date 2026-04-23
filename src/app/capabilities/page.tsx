import { Metadata } from "next";
import CapabilitiesClient from "./CapabilitiesClient";

export const metadata: Metadata = {
  title: "Capabilities",
  description: "Explore our specialized services in UX architecture, system logic, and cognitive engineering for complex digital products.",
  alternates: {
    canonical: "/capabilities",
  },
};

export default function CapabilitiesPage() {
  return <CapabilitiesClient />;
}
