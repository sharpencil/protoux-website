import { Metadata } from "next";
import WorkClient from "./WorkClient";

export const metadata: Metadata = {
  title: "Work",
  description: "A showcase of our architectural logic and design execution across high-complexity systems and intelligence-driven products.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return <WorkClient />;
}
