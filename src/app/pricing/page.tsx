"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
    return (
        <main className="min-h-screen bg-white selection:bg-electric-cyan selection:text-authority-navy font-sans">
            <Navbar />

            {/* 1. Hero Section (White Background) */}
            <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-authority-navy mb-6">
                        Engagement Models.
                    </h1>
                    <p className="text-xl md:text-2xl text-authority-navy/80 font-light max-w-3xl mx-auto leading-relaxed">
                        Flexible frameworks designed to match the stage, complexity, and risk profile of your product. Pricing reflects scope, speed, and level of involvement.
                    </p>
                </motion.div>
            </section>

            {/* 2. The Pricing Cards (Slate Gray Background) */}
            <section className="py-24 bg-slate-gray">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

                        {/* Card 1: Project-Based Engagements */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-white hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
                        >
                            <h3 className="text-3xl font-bold font-heading text-authority-navy mb-4">Project-Based Engagements</h3>
                            <p className="text-authority-navy/70 text-sm font-medium italic mb-8 border-b border-gray-100 pb-6">Best for: Defined initiatives, new product efforts, major redesigns, or validation-heavy phases.</p>

                            <div className="space-y-8 flex-grow">
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-authority-navy/50 mb-4">How It Works</h4>
                                    <ul className="space-y-3">
                                        {["Fixed scope and timeline", "Clear outcomes and deliverables", "One or more phases of the Proto UX process", "Ideal when goals and constraints are well understood"].map(item => (
                                            <li key={item} className="flex items-start gap-3 text-authority-navy/80 text-sm">
                                                <Check className="w-5 h-5 text-electric-cyan shrink-0" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-authority-navy/50 mb-4">Typical Projects</h4>
                                    <ul className="space-y-3">
                                        {["Discovery & opportunity framing", "Experience architecture and interaction design", "Complex workflow prototyping and validation", "Design system creation or modernization"].map(item => (
                                            <li key={item} className="flex items-start gap-3 text-authority-navy/80 text-sm">
                                                <Check className="w-5 h-5 text-electric-cyan shrink-0" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-authority-navy/50 mb-4">Investment Range (Indicative)</h4>
                                    <div className="space-y-3 text-authority-navy/80 text-sm">
                                        <div className="flex justify-between border-b border-gray-50 pb-2">
                                            <span>Discovery & Framing</span>
                                            <span className="font-bold">$3k – $5k</span>
                                        </div>
                                        <div className="flex justify-between border-b border-gray-50 pb-2">
                                            <span>Experience Architecture + Prototyping</span>
                                            <span className="font-bold">$5k – $10k</span>
                                        </div>
                                        <div className="flex justify-between border-b border-gray-50 pb-2">
                                            <span>Design Systems & UI Execution</span>
                                            <span className="font-bold">$8k – $15k</span>
                                        </div>
                                        <div className="flex justify-between border-b border-gray-50 pb-2">
                                            <span>End-to-End Engagements</span>
                                            <span className="font-bold">$16k – $20k+</span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-authority-navy/40 mt-3 italic">* Final pricing is based on complexity, timeline, and stakeholder involvement.</p>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <Link href="/start" className="w-full block py-4 text-center border-2 border-authority-navy text-authority-navy font-bold rounded-lg hover:bg-authority-navy hover:text-white transition-colors">
                                    Start Build
                                </Link>
                            </div>
                        </motion.div>

                        {/* Card 2: Fractional Design Partnership */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-10 rounded-3xl shadow-2xl shadow-electric-cyan/10 border-2 border-electric-cyan transform scale-100 lg:scale-105 z-10 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-electric-cyan text-authority-navy text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">MOST POPULAR</div>

                            <h3 className="text-3xl font-bold font-heading text-authority-navy mb-4">Fractional Design Partnership</h3>
                            <p className="text-authority-navy/70 text-sm font-medium italic mb-8 border-b border-gray-100 pb-6">Best for: Teams that need ongoing senior design leadership without hiring full-time.</p>

                            <div className="space-y-8 flex-grow">
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-authority-navy/50 mb-4">How It Works</h4>
                                    <ul className="space-y-3">
                                        {["Monthly subscription model", "Predictable cost, flexible scope", "Acts as an extension of your internal team", "Supports evolving priorities and fast iteration"].map(item => (
                                            <li key={item} className="flex items-start gap-3 text-authority-navy/80 text-sm">
                                                <Check className="w-5 h-5 text-electric-cyan shrink-0" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-authority-navy/50 mb-4">Typical Use Cases</h4>
                                    <ul className="space-y-3">
                                        {["Product strategy and UX leadership", "Continuous discovery and validation", "Design system evolution", "Prototyping and design support across multiple initiatives", "Design-to-engineering collaboration"].map(item => (
                                            <li key={item} className="flex items-start gap-3 text-authority-navy/80 text-sm">
                                                <Check className="w-5 h-5 text-electric-cyan shrink-0" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-authority-navy/50 mb-4">Monthly Investment (Indicative)</h4>
                                    <div className="space-y-3 text-authority-navy/80 text-sm">
                                        <div className="flex justify-between border-b border-gray-50 pb-2">
                                            <span>Light Partnership</span>
                                            <span className="font-bold">$5k – $9k / mo</span>
                                        </div>
                                        <div className="flex justify-between border-b border-gray-50 pb-2">
                                            <span>Core Partnership</span>
                                            <span className="font-bold">$10k – $14k / mo</span>
                                        </div>
                                        <div className="flex justify-between border-b border-gray-50 pb-2">
                                            <span>Embedded Partnership</span>
                                            <span className="font-bold">$15k+ / mo</span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-authority-navy/40 mt-3 italic">* Minimum 3-month engagement recommended for meaningful impact.</p>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <Link href="/start" className="w-full block py-4 text-center bg-electric-cyan text-authority-navy font-bold rounded-lg hover:bg-authority-navy hover:text-white transition-colors shadow-lg shadow-electric-cyan/20">
                                    Inquire for Retainer
                                </Link>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 3. Engagement Criteria (White Background) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-authority-navy mb-12 text-center">Engagement Criteria.</h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-bold text-authority-navy mb-6 pb-2 border-b border-gray-100">You Need</h3>
                            <ul className="space-y-6">
                                {["Clear Deliverables & Fixed Scope", "Ongoing Leadership & Direction", "Rapid Iteration & Prototyping", "Scientific Validation of Logic"].map((item, i) => (
                                    <li key={i} className="flex items-center justify-between text-authority-navy/80">
                                        <span>{item}</span>
                                        <ArrowRight className="w-4 h-4 text-electric-cyan" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-authority-navy mb-6 pb-2 border-b border-gray-100">We Recommend</h3>
                            <ul className="space-y-6">
                                {["Project-Based Engagement", "Fractional Design Partnership", "Fractional Design Partnership", "Project-Based (Discovery) or Fractional"].map((item, i) => (
                                    <li key={i} className="text-authority-navy font-medium">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Included vs. Excluded (Deep Navy Background) */}
            <section className="py-24 bg-authority-navy text-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-24">

                        {/* Included */}
                        <div>
                            <h3 className="text-2xl font-bold font-heading text-white mb-8 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-electric-cyan text-authority-navy">
                                    <Check className="w-5 h-5" />
                                </span>
                                What’s Included
                            </h3>
                            <ul className="space-y-4">
                                {["Senior Leadership & Strategy", "AI-Native Workflows", "Risk Reduction & Compliance", "Scalable System Architecture", "Direct Access to Founders"].map(item => (
                                    <li key={item} className="flex items-start gap-4 text-white/90 text-lg">
                                        <Check className="w-6 h-6 text-electric-cyan shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Excluded */}
                        <div>
                            <h3 className="text-2xl font-bold font-heading text-white mb-8 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-700 text-white border border-white/20">
                                    <X className="w-5 h-5" />
                                </span>
                                What We Don’t Do
                            </h3>
                            <ul className="space-y-4">
                                {["Fixed screen counts without logic", "Unvalidated / 'Pretty' only work", "Unsupervised AI content generation", "Maintenance of legacy PHP/WordPress", "Race-to-the-bottom pricing"].map(item => (
                                    <li key={item} className="flex items-start gap-4 text-white/50 text-lg">
                                        <X className="w-6 h-6 text-slate-500 shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* 5. CTA Section (White Background) */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-authority-navy mb-8">Let’s discuss the protocol.</h2>
                    <Link
                        href="/start"
                        className="inline-block px-10 py-4 text-lg font-bold text-authority-navy bg-electric-cyan rounded-full shadow-lg shadow-electric-cyan/20 hover:shadow-electric-cyan/40 hover:-translate-y-1 transition-all duration-300"
                    >
                        Schedule Conversation
                    </Link>
                </div>
            </section>
        </main>
    );
}
