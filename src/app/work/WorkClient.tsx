"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function WorkClient() {
    const caseStudies = [
        {
            id: "smartstream",
            title: "Project Execution Engine.",
            client: "SmartStream",
            tags: ["AI-Driven Flow", "Continuous Flow", "Explainable AI"],
            description:
                "Translating the AI-Driven Continuous Flow Methodology (AI-CFM) into a high-performance Project Execution Engine. We replaced static backlog boards with a dynamic, real-time pulse timeline forecasting future operations.",
            metrics: "Zero-Friction Operations. Predictive Shift Modeling.",
            imageColor: "bg-gradient-to-br from-slate-900 to-authority-navy border-slate-800",
            layout: "left",
            slug: "/work/smartstream"
        },
        {
            id: "iodine",
            title: "Interact Mobile App.",
            client: "Iodine Software",
            tags: ["Mobile UX/UI", "Material Design", "Healthcare Informatics"],
            description:
                "Modernizing clinical documentation queries. We designed a touch-optimized mobile interface and push system for physicians, transforming clunky desktop EMR widgets into simple, two-minute response loops.",
            metrics: "Increased Response Rate. Under 2-Minute Actions.",
            imageColor: "bg-gradient-to-br from-[#112D4E] to-slate-950",
            layout: "right",
            slug: "/work/iodine-interact"
        },
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
        {
            id: "siemens",
            title: "Digital Facility Log.",
            client: "Siemens Building Tech",
            tags: ["Remote Diagnostics", "Social UI Style", "Touchscreen Design"],
            description:
                "Translating physical facility logbooks into a dynamic building operations portal. We designed a touch-first, iPad-proportioned collaboration hub featuring real-time activity streams, QR code asset lookups, and remote acoustic diagnostics.",
            metrics: "Remote Collaboration. Sound-Based Diagnostics.",
            imageColor: "bg-gradient-to-br from-[#003C43] to-slate-950",
            layout: "right",
            slug: "/work/siemens-dfl"
        },
        {
            id: "evergreen",
            title: "Student Information System.",
            client: "Evergreen Beauty College",
            tags: ["Clock-Hour Tracking", "Regulatory Compliance", "Role Impersonation"],
            description:
                "Modernizing educational administration for clock-hour institutions. We re-engineered the student account management workflow, enabling compliance tracking, predictive risk monitoring, and seamless role impersonation to streamline audits.",
            metrics: "Automated Financial Aid. Instant Clock-Hour Auditing.",
            imageColor: "bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900",
            layout: "left",
            slug: "/work/evergreen-sis"
        },
        {
            id: "siemens-config",
            title: "Configuration Workspace.",
            client: "Siemens Config Tool",
            tags: ["Bulk Configuration", "Standardized UI", "Wizard Workflow"],
            description:
                "Simplifying complex gateway commissioning. We re-designed the engineering configuration workspace, replacing technical JSON interfaces with guided setup wizards, persistent validation rules, and bulk deployment frameworks.",
            metrics: "Zero JSON Errors. 3x Faster Site Commissioning.",
            imageColor: "bg-gradient-to-br from-[#1F4E5B] to-slate-900",
            layout: "right",
            slug: "/work/siemens-config-tool"
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
                    <p className="text-xl md:text-2xl text-authority-navy/80 font-light max-w-2xl mx-auto leading-relaxed mb-6">
                        Selected case studies in Agentic Design and System Architecture. <br className="hidden md:block" />
                        We don't just visualize; <span className="font-semibold text-authority-navy underline decoration-electric-cyan underline-offset-4">we execute.</span>
                    </p>
                    <div className="max-w-xl mx-auto p-4 bg-slate-gray rounded-xl border border-slate-200 text-xs font-light text-authority-navy/80 leading-relaxed text-center">
                        <strong>Confidentiality Notice:</strong> All client deliverables listed below are subject to strict NDAs. Interactive widgets are sanitized, functional wireframe simulations. High-fidelity designs are available for review upon request.
                    </div>
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
                                         <div className={`absolute inset-0 flex items-center justify-center font-heading text-6xl font-black uppercase tracking-tighter select-none ${
                                             study.id === "smartstream" || study.id === "evergreen" || study.id === "siemens" || study.id === "siemens-config" || study.id === "iodine" ? "text-white/10" : "text-authority-navy/10"
                                         }`}>
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
