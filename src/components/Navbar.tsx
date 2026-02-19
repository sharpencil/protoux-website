"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Capabilities", href: "/capabilities" },
    { name: "Work", href: "/work" },
    { name: "The Lab", href: "/about" },
    { name: "Insights", href: "/insights" },
    { name: "Pricing", href: "/pricing" },
];

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm"
        >
            <div className="flex items-center">
                <Link href="/" className="flex items-center gap-3 text-2xl font-bold text-authority-navy tracking-tight font-heading">
                    <Image src="/images/logo-v2.png" alt="Proto UX Logo" width={32} height={32} />
                    PROTO UX
                </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-sm font-medium text-authority-navy hover:text-electric-cyan transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            <div className="flex items-center">
                <Link
                    href="/start"
                    className="px-6 py-2.5 text-sm font-semibold text-authority-navy bg-electric-cyan rounded-full shadow-lg shadow-electric-cyan/20 hover:shadow-electric-cyan/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                    Get Started
                </Link>
            </div>
        </motion.nav>
    );
}
