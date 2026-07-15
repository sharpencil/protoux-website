import { Metadata } from "next";
import EvergreenClient from "./EvergreenClient";

export const metadata: Metadata = {
  title: "Evergreen Beauty College SIS Case Study",
  description: "Modernizing educational administration for clock-hour institutions. We re-engineered the student account management workflow, enabling compliance tracking, predictive risk monitoring, and seamless role impersonation to streamline audits.",
  alternates: {
    canonical: "/work/evergreen-sis",
  },
};

export default function EvergreenSISPage() {
  return <EvergreenClient />;
}
