import { Metadata } from "next";
import IodineClient from "./IodineClient";

export const metadata: Metadata = {
  title: "Iodine Software Interact Mobile Case Study",
  description: "Modernizing clinical documentation queries. We designed a touch-optimized mobile interface and push system for physicians, transforming clunky desktop EMR widgets into simple, two-minute response loops.",
  alternates: {
    canonical: "/work/iodine-interact",
  },
};

export default function IodinePage() {
  return <IodineClient />;
}
