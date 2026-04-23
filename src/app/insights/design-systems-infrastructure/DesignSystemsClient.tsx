"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ArticleDesignSystems() {
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
                        <Link href="/insights" className="inline-flex items-center text-sm font-bold text-authority-navy/60 hover:text-electric-cyan transition-colors mb-8">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
                        </Link>

                        <div className="flex items-center gap-4 mb-6 text-sm font-mono text-authority-navy/60">
                            <span className="text-electric-cyan uppercase tracking-widest font-bold font-sans">Systems</span>
                            <span>•</span>
                            <span>6 min read</span>
                            <span>•</span>
                            <span>2026-02-08</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-authority-navy mb-8 leading-tight tracking-tight">
                            Design Systems Aren’t UI Libraries—They’re Organizational Infrastructure.
                        </h1>

                        <p className="text-xl md:text-2xl text-authority-navy/80 font-light leading-relaxed mb-12 border-l-4 border-electric-cyan pl-6">
                            Why most systems turn into 'Digital Dust'. A true Design System is an Organizational Infrastructure, the API through which Design communicates intent to Engineering.
                        </p>
                    </motion.div>

                    {/* Content Body */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="prose prose-lg prose-slate max-w-none text-authority-navy/80 font-light leading-relaxed"
                    >
                        <p>Why most teams misunderstand their purpose.</p>

                        <p>
                            If you ask a designer what a Design System is, they will show you a Figma file full of perfectly organized buttons, inputs, and color ramps.
                        </p>

                        <p>
                            If you ask a developer what a Design System is, they will point to a messy folder of React components that sort of match the Figma file, but not quite.
                        </p>

                        <p className="font-medium text-authority-navy">This disconnect is why most Design Systems fail.</p>

                        <p>
                            At Proto UX, we believe that treating a Design System as a "UI Library" (a collection of assets) is a fundamental error. A true Design System is an Organizational Infrastructure. It is the API through which Design communicates intent to Engineering.
                        </p>

                        <p>
                            Here is why most systems turn into "Digital Dust," and how to build one that actually governs your product.
                        </p>

                        <hr className="border-authority-navy/10 my-12" />

                        <h2 className="text-3xl font-bold font-heading text-authority-navy mt-16 mb-6">The "Sticker Sheet" Fallacy</h2>
                        <p>The traditional approach to Design Systems is Artifact-Based.</p>

                        <ul className="list-none pl-0 space-y-4 my-8">
                            <li className="flex items-start gap-3">
                                <span className="text-electric-cyan mt-1.5 inline-block w-2 h-2 rounded-full bg-electric-cyan"></span>
                                <span>Designers build a "Sticker Sheet" in Figma.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-electric-cyan mt-1.5 inline-block w-2 h-2 rounded-full bg-electric-cyan"></span>
                                <span>Developers look at the sticker sheet and hard-code the CSS to match.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-electric-cyan mt-1.5 inline-block w-2 h-2 rounded-full bg-electric-cyan"></span>
                                <span>The moment the developer hits "Commit," the Figma file is obsolete.</span>
                            </li>
                        </ul>

                        <p>
                            This isn't a system; it's a reference manual. And like all manuals, nobody reads it after day one.
                        </p>

                        <p>
                            The result? <strong>Drift.</strong> The blue in the app is slightly different from the blue in Figma. The spacing is inconsistent. The "System" becomes a burden that requires constant manual maintenance to keep the two worlds aligned.
                        </p>

                        <h2 className="text-3xl font-bold font-heading text-authority-navy mt-16 mb-6">The Shift: Design as Data (The Headless Approach)</h2>
                        <p>We don't build sticker sheets. We build Headless Design Systems.</p>

                        <p>
                            In our architecture, the "System" doesn't live in Figma, and it doesn't live in React. It lives in a <strong>JSON Source of Truth</strong> (often called Design Tokens).
                        </p>

                        <ul className="list-none pl-0 space-y-4 my-8">
                            <li className="flex items-start gap-3">
                                <span className="text-electric-cyan mt-1.5 inline-block w-2 h-2 rounded-full bg-electric-cyan"></span>
                                <span>Designers manipulate the system visually.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-electric-cyan mt-1.5 inline-block w-2 h-2 rounded-full bg-electric-cyan"></span>
                                <span>Developers consume the system programmatically.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-electric-cyan mt-1.5 inline-block w-2 h-2 rounded-full bg-electric-cyan"></span>
                                <span>The JSON sits in the middle, acting as the governor.</span>
                            </li>
                        </ul>

                        <p>
                            When we define <code className="bg-slate-100 px-2 py-1 rounded text-sm font-mono text-electric-cyan-600">color-primary</code> in the JSON file, automation scripts push that update to Figma (updating the UI kit) AND to the Codebase (updating the CSS variables) simultaneously.
                        </p>

                        <p>
                            This transforms the Design System from a static artifact into <strong>Active Infrastructure</strong>. It is a pipeline, not a bucket of assets.
                        </p>

                        <h2 className="text-3xl font-bold font-heading text-authority-navy mt-16 mb-6">Why "Infrastructure" Matters for the Business</h2>
                        <p>
                            When you stop selling "Consistency" (which executives don't care about) and start selling "Infrastructure" (which they do), the value proposition changes:
                        </p>

                        <h3 className="text-2xl font-bold text-authority-navy mt-8 mb-4">1. Velocity (The "No-Translation" Workflow)</h3>
                        <p>
                            In an infrastructural system, developers stop guessing pixel values. They stop asking "Is this 16px or 20px?" They use the token <code className="bg-slate-100 px-2 py-1 rounded text-sm font-mono">spacing-md</code>, and the system handles the math. This removes the "Translation Tax" that slows down every sprint.
                        </p>

                        <h3 className="text-2xl font-bold text-authority-navy mt-8 mb-4">2. Governance (The Safety Net)</h3>
                        <p>A UI Library suggests rules. Infrastructure enforces them.</p>
                        <p>
                            By using TypeScript interfaces and linting rules derived from the design system, we can physically prevent a developer from pushing code that uses an off-brand color. The system acts as quality control.
                        </p>

                        <h3 className="text-2xl font-bold text-authority-navy mt-8 mb-4">3. Scalability (The Multi-Platform Reality)</h3>
                        <p>
                            If you launch a mobile app next year, a UI Library requires you to redraw everything. An Infrastructural System simply exports the same JSON tokens to Swift (iOS) and Kotlin (Android). You inherit the brand logic instantly.
                        </p>

                        <hr className="border-authority-navy/10 my-12" />

                        <h2 className="text-3xl font-bold font-heading text-authority-navy mt-16 mb-6">The Verdict: Stop Painting, Start Architecting</h2>
                        <p>
                            If your Design System requires a full-time designer to keep the Figma file updated, you haven't built a system; you've built a chore.
                        </p>

                        <p>
                            At Proto UX, we architect systems that manage themselves. We use Agentic Logic to ensure that the bridge between Design and Code isn't maintained by humans copying hex codes—the infrastructure itself maintains it.
                        </p>

                        <p className="font-bold text-xl text-authority-navy mt-8">Don't buy a sticker sheet. Buy an engine.</p>

                    </motion.div>

                    {/* Author Bio */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-20 pt-12 border-t border-authority-navy/10"
                    >
                        <div className="flex items-center justify-between flex-wrap gap-8">
                            <div>
                                <p className="text-sm font-medium uppercase tracking-widest text-authority-navy/40 mb-1">Written By</p>
                                <h3 className="text-sm font-heading text-authority-navy mb-1">Young Ryu, Ph.D.</h3>
                                <p className="text-authority-navy/60 font-light text-sm">Principal at Proto UX</p>
                            </div>

                            <div className="bg-slate-gray p-8 rounded-2xl max-w-md w-full">
                                <h4 className="font-bold text-lg text-authority-navy mb-2">Start a conversation</h4>
                                <p className="text-authority-navy/70 mb-6 text-sm">Dealing with complex challenges? We're happy to discuss your specific context.</p>
                                <Link href="/start" className="inline-flex items-center text-sm font-bold text-authority-navy hover:text-electric-cyan transition-colors">
                                    Get in touch <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </article>

        </main>
    );
}
