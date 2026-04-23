"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function WorkClient() {
    const caseStudies = [
        {
            id: "tforce",
            title: "Operational Intelligence.",
            client: "TForce Logistics",
            tags: ["Legacy Modernization", "React", "Complex Data"],
            description:
                "Solving the 'Commingled Route Paradox.' We re-architected a legacy Java Swing logistics system into a modern web platform. By moving from flat lists to Nested Logic Visualization, we reduced cognitive load for dispatchers handling thousands of orders.",
            metrics: "Reduced Dispatch Error Rate. 40% Faster Onboarding.",
            imageColor: "bg-blue-100", // Placeholder for image
            layout: "left",
            slug: "/work/operational-intelligence"
        },
    ];

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
                        Shipped Logic.
                    </h1>
                    <p className="text-xl md:text-2xl text-authority-navy/80 font-light max-w-2xl mx-auto leading-relaxed">
                        Selected case studies in Agentic Design and System Architecture. <br className="hidden md:block" />
                        We don't just visualize; <span className="font-semibold text-authority-navy underline decoration-electric-cyan underline-offset-4">we execute.</span>
                    </p>
                </motion.div>
            </section>

            {/* 2. The Case Study Feed (Slate Gray Background) */}
            <section className="py-24 bg-slate-gray">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-24 lg:gap-32">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={study.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className={`flex flex-col ${study.layout === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
                                    } gap-12 lg:gap-20 items-center`}
                            >
                                {/* Image Side */}
                                <div className="w-full lg:w-3/5">
                                    <Link href={study.slug || "#"} className={`block aspect-[16/10] rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden relative group cursor-pointer border border-white/50 ${study.imageColor}`}>
                                        {/* Placeholder Visuals */}
                                        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <span className="bg-white/90 text-authority-navy px-6 py-2 rounded-full font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Project</span>
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center text-authority-navy/10 font-heading text-6xl font-black uppercase tracking-tighter select-none">
                                            {study.client.split(' ')[0]}
                                        </div>
                                    </Link>
                                </div>

                                {/* Content Side */}
                                <div className="w-full lg:w-2/5">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {study.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-electric-cyan/10 text-authority-navy text-xs font-semibold rounded-full uppercase tracking-wider">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-authority-navy mb-4">
                                        {study.title}
                                    </h2>
                                    <p className="text-lg text-authority-navy/70 leading-relaxed mb-6 font-light">
                                        {study.description}
                                    </p>
                                    {study.metrics && (
                                        <div className="mb-8 p-4 bg-white border border-slate-200 rounded-lg">
                                            <p className="text-authority-navy font-semibold text-sm">{study.metrics}</p>
                                        </div>
                                    )}

                                    <Link href={study.slug || "#"} className="group inline-flex items-center text-authority-navy font-bold text-lg">
                                        <span className="border-b-2 border-electric-cyan group-hover:border-authority-navy transition-colors duration-300 pb-0.5">View Case Study</span>
                                        <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CTA Section (Deep Navy Background) */}
            <section className="py-24 bg-authority-navy text-white text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Have a complex problem?</h2>
                    <p className="text-xl md:text-2xl text-white/70 mb-10 font-light">
                        We specialize in the projects other agencies turn down.
                    </p>
                    <Link
                        href="/start"
                        className="inline-block px-10 py-4 text-lg font-bold text-authority-navy bg-electric-cyan rounded-full shadow-lg shadow-electric-cyan/20 hover:shadow-electric-cyan/40 hover:-translate-y-1 transition-all duration-300"
                    >
                        Start Conversation
                    </Link>
                </div>
            </section>
        </main>
    );
}
