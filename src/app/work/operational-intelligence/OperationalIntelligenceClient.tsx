"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function CaseStudyOperationalIntelligence() {
    return (
        <main className="min-h-screen bg-white selection:bg-electric-cyan selection:text-authority-navy font-sans">
            <Navbar />

            <article className="pt-32 pb-24 lg:pt-48">
                <div className="container mx-auto px-6 max-w-4xl">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link href="/work" className="inline-flex items-center text-sm font-bold text-authority-navy/60 hover:text-electric-cyan transition-colors mb-8">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Work
                        </Link>

                        <div className="flex items-center gap-4 mb-6 text-sm font-mono text-authority-navy/60">
                            <span className="text-electric-cyan uppercase tracking-widest font-bold font-sans">Logistics</span>
                            <span>•</span>
                            <span>Operational Intelligence</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-authority-navy mb-8 leading-tight tracking-tight">
                            Operational Intelligence: From Data Entry to Decision Support
                        </h1>

                        <p className="text-xl md:text-2xl text-authority-navy/80 font-light leading-relaxed mb-12 border-l-4 border-electric-cyan pl-6">
                            How we re-architected a legacy logistics system to support complex decision-making and reduce cognitive load.
                        </p>
                    </motion.div>

                    {/* Content Body */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="prose prose-lg prose-slate max-w-none text-authority-navy/80 font-light leading-relaxed"
                    >
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mt-16 mb-6">The Problem (The Legacy Friction)</h2>
                        <p>
                            The legacy system was a "High-Density Utility" prioritizing raw data entry speed over human learnability. It required dispatchers to manually translate real-world logistics into rigid database rows.
                        </p>

                        <h3 className="text-2xl font-bold text-authority-navy mt-8 mb-4">Recall over Recognition</h3>
                        <p>
                            The interface relied entirely on memorized shortcuts. With 25% of documentation dedicated to "F-Keys" (F2 to Submit, F5 to Rate), the system prioritized active recall over visual recognition, creating a steep "memorization cliff" for new hires.
                        </p>

                        <h3 className="text-2xl font-bold text-authority-navy mt-8 mb-4">The "Logic Knot" of Routing</h3>
                        <p>
                            The system treated routes as flat, linear arrays. To manage a commingled route, dispatchers had to manually shuffle stops using "Move Left" and "Move Right" buttons. This manual array manipulation was the root cause of sequencing errors.
                        </p>

                        <h3 className="text-2xl font-bold text-authority-navy mt-8 mb-4">Hidden Constraints</h3>
                        <p>
                            Critical logic was hidden behind "mystery meat" navigation. Vital constraints like Hazmat requirements were indicated only by subtle blue outlines on buttons, forcing users to constantly scan for "invisible" signals.
                        </p>

                        <hr className="border-authority-navy/10 my-12" />

                        <h2 className="text-3xl font-bold font-heading text-authority-navy mt-16 mb-6">The Solution (The Architect’s Fix)</h2>
                        <p>
                            We didn't just "skin" the legacy Java application; we re-architected the mental model of logistics dispatch.
                        </p>

                        <h3 className="text-2xl font-bold text-authority-navy mt-8 mb-4">Solving the Commingled Route Paradox</h3>
                        <p>
                            The legacy system forced dispatchers to manage complex, multi-customer routes as flat, linear lists using manual "Move Left/Right" buttons. We introduced a Hierarchical Logic Visualization. The new UI groups orders visually by Route → Customer → Stop, allowing dispatchers to drag-and-drop complex itineraries. This offloaded the "mental mapping" from the human brain to the interface.
                        </p>

                        <h3 className="text-2xl font-bold text-authority-navy mt-8 mb-4">Reactive Logic vs. Static Input</h3>
                        <p>
                            We moved from a "Recall-based" system (memorizing F-keys like F5 to rate) to a Reactive State Model. Pricing, route time estimation, and error validation now calculate instantly as data is entered. We replaced hidden constraints (subtle blue outlines) with Contextual Guards—high-visibility alerts that block invalid states before they are committed.
                        </p>

                        <h3 className="text-2xl font-bold text-authority-navy mt-8 mb-4">The "Glass Box" Transition</h3>
                        <p>
                            We migrated the rigid "Single Screen Density" layout into a Progressive Disclosure workflow. Information is now contextual—users see "Hazmat Details" only when relevant, reducing visual noise by ~40% while maintaining high data density for power users.
                        </p>

                        <hr className="border-authority-navy/10 my-12" />

                        <h2 className="text-3xl font-bold font-heading text-authority-navy mt-16 mb-6">The Outcome (The Evidence)</h2>
                        <p>
                            The redesign transformed the Order Entry system from a passive database terminal into an active strategic tool.
                        </p>

                        <ul className="space-y-6 my-8">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 bg-electric-cyan/10 p-2 rounded-full">
                                    <CheckCircle2 className="w-5 h-5 text-electric-cyan" />
                                </div>
                                <div>
                                    <strong className="text-authority-navy block text-lg mb-1">Reduced Cognitive Load</strong>
                                    <span>By visualizing the route hierarchy, we eliminated the mental math required to understand commingled routes, significantly reducing dispatch errors on multi-stop orders.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 bg-electric-cyan/10 p-2 rounded-full">
                                    <CheckCircle2 className="w-5 h-5 text-electric-cyan" />
                                </div>
                                <div>
                                    <strong className="text-authority-navy block text-lg mb-1">Accelerated Onboarding</strong>
                                    <span>We shifted from "Memorization" (F-keys) to "Recognition" (UI Controls). New CSRs and dispatchers achieved proficiency in days rather than weeks, as the system now guides them through the "Happy Path."</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 bg-electric-cyan/10 p-2 rounded-full">
                                    <CheckCircle2 className="w-5 h-5 text-electric-cyan" />
                                </div>
                                <div>
                                    <strong className="text-authority-navy block text-lg mb-1">Operational Velocity</strong>
                                    <span>The shift to a web-based, reactive architecture allowed for real-time updates without page refreshes, increasing the orders-processed-per-hour metric for high-volume centers.</span>
                                </div>
                            </li>
                        </ul>

                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-20 pt-12 border-t border-authority-navy/10"
                    >
                        <div className="bg-slate-gray p-10 rounded-2xl w-full text-center">
                            <h3 className="font-bold text-2xl font-heading text-authority-navy mb-4">Let’s Talk About Your Work</h3>
                            <p className="text-authority-navy/70 mb-8 max-w-2xl mx-auto">
                                If you’re facing similar challenges—or want to understand how this approach could apply to your product—we’re happy to talk.
                            </p>
                            <Link
                                href="/start"
                                className="inline-flex items-center px-8 py-3.5 text-base font-bold text-authority-navy bg-electric-cyan rounded-full shadow-lg shadow-electric-cyan/20 hover:shadow-electric-cyan/40 hover:-translate-y-1 transition-all duration-300"
                            >
                                Start Conversation <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>

                        </div>
                    </motion.div>

                </div>
            </article>

        </main>
    );
}
