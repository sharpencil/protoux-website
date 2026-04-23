import { Metadata } from "next";
import WireframesClient from "./WireframesClient";

export const metadata: Metadata = {
  title: "Wireframes & Logic Architecture",
  description: "How we use wireframes as a functional blueprint for system logic, not just visual layout.",
  alternates: {
    canonical: "/insights/wireframes",
  },
};

export default function WireframesPage() {
  return <WireframesClient />;
}
