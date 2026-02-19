"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, FileCode, CheckCircle2, Quote } from "lucide-react";

export default function About() {
    return (
        <main className="min-h-screen bg-white selection:bg-electric-cyan selection:text-authority-navy font-sans">
            <Navbar />

            {/* 1. Hero Section (White Background) */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 text-center px-6 overflow-hidden">
                {/* Background Visual - Geometric Lattice */}
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10 max-w-5xl mx-auto"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-authority-navy mb-8 leading-tight">
                        We don’t just design interfaces. <br />
                        We engineer the <span className="text-transparent bg-clip-text bg-gradient-to-r from-authority-navy to-electric-cyan">psychology behind them.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-authority-navy/80 font-light max-w-3xl mx-auto leading-relaxed border-t border-authority-navy/10 pt-8">
                        Bridging the gap between Cognitive Science and Shipped Code.
                    </p>
                </motion.div>
            </section>

            {/* 2. The Founder’s Dossier (Slate Gray Background) */}
            <section className="py-24 bg-slate-gray">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

                        {/* Left: Image (Placeholder) with Corner Brackets */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-[3/4] max-w-xs mx-auto w-full rounded-2xl overflow-hidden shadow-2xl"
                        >
                            {/* Founder Image */}
                            <Image
                                src="/images/founder.png"
                                alt="Founder Portrait"
                                fill
                                className="object-cover"
                            />
                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-black via-black/70 to-transparent z-10" />

                            <div className="absolute -bottom-6 right-0 text-xs font-mono text-authority-navy/60">
                                REF: 001-ARCHITECT
                            </div>
                        </motion.div>

                        {/* Right: The Story */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-authority-navy mb-8">
                                From Observation to Execution.
                            </h2>
                            <div className="space-y-6 text-lg text-authority-navy/80 leading-relaxed font-light">
                                <p>
                                    For a decade, I operated as a traditional UX consultant. I realized that design doesn't stop at the pixel. It stops at the logic. To truly control the User Experience, you must control the System Architecture.
                                </p>
                                <p>
                                    Most agencies hand off a Figma file and hope for the best. We view that as a failure of responsibility.
                                </p>
                                <p className="font-semibold text-authority-navy">
                                    Today, Proto UX is a Logic Architecture Lab. We don't just hand you a blueprint; we pour the foundation.
                                </p>
                            </div>

                            <div className="mt-12 border-t border-authority-navy/10 pt-6">
                                <div className="text-authority-navy font-bold text-sm tracking-wider">Founder & Principal Architect</div>
                                <div className="text-authority-navy text-sm tracking-wider mt-1">Young Ryu, Ph.D.</div>
                                <div className="text-authority-navy/60 text-sm uppercase tracking-wider mt-1">Proto UX Lab</div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 3. The Philosophy Block (Deep Navy Background) */}
            <section className="py-32 bg-authority-navy text-white text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-electric-cyan mb-12 opacity-80">Redefining 'Proto'</h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-4xl md:text-6xl font-black font-heading tracking-tight mb-12">
                        <span className="text-white/30 line-through decoration-electric-cyan/50 decoration-4">Prototype</span>
                        <span className="text-electric-cyan hidden md:inline">→</span>
                        <span className="text-electric-cyan md:hidden">↓</span>
                        <span className="text-white drop-shadow-[0_0_15px_rgba(0,229,255,0.5)]">PROTOCOL</span>
                    </div>

                    <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light max-w-2xl mx-auto">
                        In 2016, Proto stood for Prototype. <br className="hidden md:block" />
                        In 2026, it stands for Protocol. <br className="hidden md:block" />
                        <span className="text-white font-medium mt-4 block">We design the protocols that govern how humans interact with intelligent systems.</span>
                    </p>
                </div>
            </section>

            {/* 4. The "Unfair Advantage" Grid (White Background) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12">

                        {/* Card 1: The Science */}
                        <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 border border-slate-100">
                                <Brain className="w-8 h-8 text-authority-navy" />
                            </div>
                            <h3 className="text-3xl font-bold font-heading text-authority-navy mb-2">The Science (Ph.D.)</h3>
                            <p className="text-authority-navy/60 mb-8 uppercase tracking-wider text-sm font-semibold">Cognitive Systems Engineering</p>

                            <ul className="space-y-4">
                                {["Cognitive Load Management", "Error Proofing & Resilience", "Statistical Validation"].map(item => (
                                    <li key={item} className="flex items-start gap-4 text-authority-navy/80 text-lg">
                                        <CheckCircle2 className="w-6 h-6 text-electric-cyan shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Card 2: The Logic */}
                        <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 border border-slate-100">
                                <FileCode className="w-8 h-8 text-authority-navy" />
                            </div>
                            <h3 className="text-3xl font-bold font-heading text-authority-navy mb-2">The Logic (Build)</h3>
                            <p className="text-authority-navy/60 mb-8 uppercase tracking-wider text-sm font-semibold">Systems Architecture</p>

                            <ul className="space-y-4">
                                {["Type Safety (TypeScript)", "Agentic Systems (JSON Schema)", "Full-Stack Velocity (Next.js)"].map(item => (
                                    <li key={item} className="flex items-start gap-4 text-authority-navy/80 text-lg">
                                        <CheckCircle2 className="w-6 h-6 text-electric-cyan shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
}
