"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Github, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200">
            <div className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">

                    {/* Column 1: The Brand (4 Cols) */}
                    <div className="md:col-span-4 space-y-6">
                        <Link href="/" className="flex items-center gap-3 group">
                            <Image src="/images/logo-v2.png" alt="Proto UX Logo" width={32} height={32} className="group-hover:opacity-80 transition-opacity" />
                            <h2 className="text-3xl font-bold font-heading text-authority-navy tracking-tight">PROTO UX</h2>
                        </Link>
                        <p className="text-sm font-bold uppercase tracking-widest text-authority-navy/60">Logic Architecture Lab.</p>
                        <div className="pt-6 text-authority-navy/70 text-sm leading-relaxed font-light">
                            <p>Based in Austin, Texas.</p>
                            <p>Serving the Silicon Hills ecosystem since 2016.</p>
                        </div>
                    </div>

                    {/* Column 2: Explore (2 Cols) */}
                    <div className="md:col-span-2 space-y-6">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-authority-navy/40">Directory</h3>
                        <ul className="space-y-4">
                            {[
                                { name: "Capabilities", href: "/capabilities" },
                                { name: "Work", href: "/work" },
                                { name: "Pricing", href: "/pricing" },
                                { name: "The Lab", href: "/about" },
                                { name: "Insights", href: "/insights" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm font-medium text-authority-navy hover:text-electric-cyan transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Connect (3 Cols) */}
                    <div className="md:col-span-3 space-y-6">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-authority-navy/40">Transmissions</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="https://www.linkedin.com/in/young-ryu-ph-d-8668703/" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-authority-navy hover:text-electric-cyan transition-colors group">
                                    <Linkedin className="w-4 h-4 mr-3 text-authority-navy/40 group-hover:text-electric-cyan transition-colors" />
                                    LinkedIn
                                </a>
                            </li>

                            <li>
                                <a href="mailto:hello@protoux.com" className="flex items-center text-sm font-medium text-authority-navy hover:text-electric-cyan transition-colors group">
                                    <Mail className="w-4 h-4 mr-3 text-authority-navy/40 group-hover:text-electric-cyan transition-colors" />
                                    young@protoux.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Status (3 Cols) */}
                    <div className="md:col-span-3 space-y-6">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-authority-navy/40">Status</h3>
                        <div className="flex items-start gap-3">
                            <span className="relative flex h-3 w-3 mt-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-sm font-medium text-authority-navy leading-relaxed">Accepting New Partners for Q3 2026.</span>
                        </div>
                        <Link href="/start" className="inline-flex items-center text-sm font-bold text-authority-navy hover:text-electric-cyan transition-colors group pt-2">
                            Get Started <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-100 bg-white">
                <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-authority-navy/40">
                    <p>© 2026 Proto UX. All rights reserved.</p>
                    <p className="font-mono">Engineered with Agentic Logic.</p>
                </div>
            </div>
        </footer>
    );
}
