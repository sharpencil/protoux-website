import { Metadata } from "next";
import StartClient from "./StartClient";

export const metadata: Metadata = {
  title: "Start Your Project",
  description: "Ready to engineer your product's psychology? Schedule a conversation to discuss your project and how we can help.",
  alternates: {
    canonical: "/start",
  },
};

export default function StartPage() {
  return <StartClient />;
}
