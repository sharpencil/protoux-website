"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function InsightsClient() {
    const articles = [
        {
            id: "ai-ux",
            title: "What AI Is Good at in UX—and What It Isn’t.",
            category: "PERSPECTIVE",
            date: "Jan 24, 2026",
            excerpt: "A clear-eyed look at where AI actually helps. AI is a force multiplier for execution, but a liability for intent. We explore the 'Pilot vs. Plane' dynamic in modern product architecture.",
            slug: "/insights/ai-ux"
        },
        {
            id: "wireframes",
            title: "When Wireframes Are Still the Right Tool.",
            category: "METHODOLOGY",
            date: "Jan 09, 2026",
            excerpt: "A pragmatic take on Axure, Figma, and code-first prototyping. Why we sometimes skip Figma entirely to build 'Logic Maps' or go straight to Next.js for validation.",
            slug: "/insights/wireframes"
        }
    ];

    return (
        <main className="min-h-screen bg-white selection:bg-electric-cyan selection:text-authority-navy font-sans">
            <Navbar />

            {/* 1. Hero Section (White Background) */}
            <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-authority-navy mb-6 tracking-tight">
                        Research & Transmissions.
                    </h1>
                    <p className="text-xl text-authority-navy/80 font-light max-w-2xl mx-auto leading-relaxed mb-16">
                        Field notes on Logic Architecture, Agentic Design, and the future of Human-AI interaction.
                    </p>
                    <div className="w-full h-px bg-authority-navy/10 max-w-6xl mx-auto"></div>
                </motion.div>
            </section>

            {/* 2. Featured Article (Slate Gray Background) */}
            <section className="py-20 bg-slate-gray">
                <div className="container mx-auto px-6 max-w-6xl">
                    <Link href="/insights/design-systems-infrastructure" className="block w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-8 md:p-12 lg:p-16 rounded-3xl shadow-xl shadow-slate-200/50 border border-white hover:-translate-y-1 transition-transform duration-300 group cursor-pointer"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="bg-electric-cyan/10 text-authority-navy px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">SYSTEMS</span>
                                <span className="font-mono text-sm text-authority-navy/60">Feb 08, 2026</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-authority-navy mb-6 leading-tight group-hover:text-authority-navy/90 transition-colors">
                                Design Systems Aren’t UI Libraries—They’re Organizational Infrastructure.
                            </h2>

                            <p className="text-lg md:text-xl text-authority-navy/80 font-light leading-relaxed max-w-3xl mb-8">
                                Why most teams misunderstand their purpose. We move beyond sticker sheets to build Headless Design Systems (tokens.json) that act as active infrastructure, not static artifacts.
                            </p>

                            <div className="inline-flex items-center text-authority-navy font-bold text-lg group-hover:text-electric-cyan transition-colors">
                                Read Article <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>
                    </Link>
                </div>
            </section>

            {/* 3. The Article Grid (White Background) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {articles.map((article, index) => (
                            <Link key={article.id} href={article.slug} className="block h-full group">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="bg-slate-100 text-authority-navy px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">{article.category}</span>
                                        <span className="font-mono text-sm text-authority-navy/60">{article.date}</span>
                                    </div>

                                    <h3 className="text-2xl font-bold font-heading text-authority-navy mb-4 leading-snug group-hover:text-authority-navy/90">
                                        {article.title}
                                    </h3>

                                    <p className="text-authority-navy/70 leading-relaxed mb-6 flex-grow font-light">
                                        {article.excerpt}
                                    </p>

                                    <div className="inline-flex items-center text-authority-navy font-semibold text-sm group-hover:text-electric-cyan transition-colors mt-auto">
                                        Read <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Newsletter / Updates (Slate Gray Background) */}
            <section className="py-24 bg-slate-gray text-center">
                <div className="container mx-auto px-6 max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-authority-navy mb-4">Subscribe to the Protocol.</h2>
                    <p className="text-authority-navy/70 mb-8 font-light text-lg">
                        Join technical leaders receiving monthly insights on Logic Architecture.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4">
                        <div className="relative flex-grow">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-authority-navy/40" />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full pl-12 pr-4 py-3 rounded-full bg-white shadow-sm border border-slate-200 focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan outline-none transition-all text-authority-navy"
                            />
                        </div>
                        <button
                            type="submit"
                            className="px-8 py-3 bg-electric-cyan text-authority-navy font-bold rounded-full shadow-lg shadow-electric-cyan/20 hover:shadow-electric-cyan/40 hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>

        </main>
    );
}
