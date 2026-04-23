import { Metadata } from "next";
import DesignSystemsClient from "./DesignSystemsClient";

export const metadata: Metadata = {
  title: "Design Systems as Infrastructure",
  description: "Moving beyond component libraries to design systems that serve as the fundamental infrastructure for product development.",
  alternates: {
    canonical: "/insights/design-systems-infrastructure",
  },
};

export default function DesignSystemsPage() {
  return <DesignSystemsClient />;
}
