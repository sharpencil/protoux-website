import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://protoux.com"),
  title: {
    default: "Proto UX | Advanced UX/UI Design Consultancy",
    template: "%s | Proto UX",
  },
  description: "Advanced UX/UI Design Consultancy specializing in Cognitive Science and System Architecture.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Proto UX",
    description: "Advanced UX/UI Design Consultancy",
    url: "https://protoux.com",
    siteName: "Proto UX",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proto UX",
    description: "Advanced UX/UI Design Consultancy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-white text-authority-navy`}
        suppressHydrationWarning
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
