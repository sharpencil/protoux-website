"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ArticleWireframes() {
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
                            <span className="text-electric-cyan uppercase tracking-widest font-bold font-sans">Methodology</span>
                            <span>•</span>
                            <span>5 min read</span>
                            <span>•</span>
                            <span>2026-01-09</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-authority-navy mb-8 leading-tight tracking-tight">
                            When Wireframes Are Still the Right Tool (and When They Aren’t)
                        </h1>

                        <p className="text-xl md:text-2xl text-authority-navy/80 font-light leading-relaxed mb-12 border-l-4 border-electric-cyan pl-6">
                            A pragmatic take on Axure, Figma, and code-first prototyping. The gray box is dead, but Logic Modeling is more critical than ever.
                        </p>
                    </motion.div>

                    {/* Content Body */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="prose prose-lg prose-slate max-w-none text-authority-navy/80 font-light leading-relaxed"
                    >
                        <p>A pragmatic take on Axure, Figma, and code-first prototyping.</p>

                        <p>
                            In the design industry, the "Death of the Wireframe" has been predicted every year since 2015. First, Sketch and Figma made high-fidelity design so fast that gray boxes felt obsolete. Now, AI tools like Lovable and V0 allow us to generate working code faster than we can draw rectangles.
                        </p>

                        <p>
                            If we can skip straight to the final product, why do we still talk about wireframes?
                        </p>

                        <p>
                            As a UX Designer with a background in Human Factors, I argue that the artifact (the gray box) is dead, but the activity (Logic Modeling) is more critical than ever. The danger lies in confusing Visual Fidelity with Logical Fidelity.
                        </p>

                        <p className="font-medium text-authority-navy">Here is the 2026 rubric for choosing the right tool for the risk profile of your product.</p>

                        <hr className="border-authority-navy/10 my-12" />


                        <h2 className="text-3xl font-bold font-heading text-authority-navy mt-16 mb-6">The Trap of "Fidelity Theater"</h2>
                        <p>
                            The most dangerous deliverable in modern product design is the "Clickable Figma Prototype."
                        </p>
                        <p>
                            It looks like a finished app. It has beautiful shadows, perfect typography, and smooth transitions. But functionally, it is a slide deck. It has no brain. It cannot remember that you checked a box on Screen 1 when you arrive at Screen 3.
                        </p>
                        <p>
                            This is Fidelity Theater. It gives stakeholders a false sense of confidence that the product "works," when in reality, the complex edge cases and error states have been glossed over by a happy path.
                        </p>
                        <p>
                            This is where the choice of tool becomes a business decision, not a creative one.
                        </p>

                        <h3 className="text-2xl font-bold text-authority-navy mt-8 mb-4">1. When to Use Axure (The "Logic Simulator")</h3>
                        <p>
                            We still deploy Axure RP (or advanced logic tools) when the primary risk is Complexity, not desirability.
                        </p>
                        <p>
                            If we are building a complex FinTech underwriting workflow, a logistics dispatch system, or a medical dashboard, the difficulty isn't "Does the button look good?" The difficulty is: "If the user selects 'International Shipping' but the weight is over 50kg, what happens to the Tax ID field?"
                        </p>
                        <p>Use deep wireframing when:</p>
                        <ul className="list-none pl-0 space-y-4 my-8">
                            <li className="flex items-start gap-3">
                                <span className="text-electric-cyan mt-1.5 inline-block w-2 h-2 rounded-full bg-electric-cyan"></span>
                                <span><strong>Data Dependencies exist:</strong> The state of Screen C depends on inputs from Screen A.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-electric-cyan mt-1.5 inline-block w-2 h-2 rounded-full bg-electric-cyan"></span>
                                <span><strong>Mathematical Logic is required:</strong> The interface needs to calculate totals, filter dynamic lists, or handle conditional variables.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-electric-cyan mt-1.5 inline-block w-2 h-2 rounded-full bg-electric-cyan"></span>
                                <span><strong>The Cost of Error is High:</strong> If the logic fails, the business loses money or users face safety risks.</span>
                            </li>
                        </ul>
                        <p>
                            In these cases, a "gray box" prototype that actually functions (uses variables and logic) is infinitely more valuable than a beautiful Figma prototype that is effectively a movie prop.
                        </p>


                        <h3 className="text-2xl font-bold text-authority-navy mt-8 mb-4">2. When to Use Code-First (The "Velocity" Build)</h3>
                        <p>
                            For 80% of modern SaaS products, traditional wireframing is a waste of budget.
                        </p>
                        <p>
                            If we are building a standard CRUD application (Create, Read, Update, Delete)—like a settings page, a user profile, or a standard dashboard—the patterns are solved problems. We don't need to reinvent the wheel in gray boxes.
                        </p>
                        <p>Skip wireframes and go straight to Code (Next.js/AI) when:</p>
                        <ul className="list-none pl-0 space-y-4 my-8">
                            <li className="flex items-start gap-3">
                                <span className="text-electric-cyan mt-1.5 inline-block w-2 h-2 rounded-full bg-electric-cyan"></span>
                                <span><strong>You have a Design System:</strong> If we have a tokens.json file and a component library, "designing" in code is faster than drawing in Figma.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-electric-cyan mt-1.5 inline-block w-2 h-2 rounded-full bg-electric-cyan"></span>
                                <span><strong>The patterns are standard:</strong> Users know how a login flow works. Don't overthink it.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-electric-cyan mt-1.5 inline-block w-2 h-2 rounded-full bg-electric-cyan"></span>
                                <span><strong>The goal is "Vibe" Validation:</strong> If you need to test how the product feels (animation, latency, responsiveness), you can only do that in the browser.</span>
                            </li>
                        </ul>
                        <p>
                            In this mode, we use AI Agents to scaffold the UI instantly. We treat the code as the sketchpad.
                        </p>


                        <h3 className="text-2xl font-bold text-authority-navy mt-8 mb-4">3. When to Use Figma (The "Visual Architect")</h3>
                        <p>
                            Figma remains the source of truth for Visual Semantics and Stakeholder Alignment, but not for logic.
                        </p>
                        <p>We use Figma to define the System:</p>
                        <ul className="list-none pl-0 space-y-4 my-8">
                            <li className="flex items-start gap-3">
                                <span className="text-electric-cyan mt-1.5 inline-block w-2 h-2 rounded-full bg-electric-cyan"></span>
                                <span>The Token Schema (Colors, Spacing, Typography).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-electric-cyan mt-1.5 inline-block w-2 h-2 rounded-full bg-electric-cyan"></span>
                                <span>The Component Architecture (Variants, Props).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-electric-cyan mt-1.5 inline-block w-2 h-2 rounded-full bg-electric-cyan"></span>
                                <span>The High-Fidelity "North Star" vision.</span>
                            </li>
                        </ul>
                        <p>
                            But we strictly avoid using Figma to validate complex workflows. It creates "Spaghetti Prototypes"—thousands of blue noodles connecting screens—that are impossible to maintain and impossible for developers to decipher.
                        </p>

                        <hr className="border-authority-navy/10 my-12" />

                        <h2 className="text-3xl font-bold font-heading text-authority-navy mt-16 mb-6">The Verdict: Match the Tool to the Risk</h2>
                        <p>
                            At Proto UX, we don't dogmatically stick to one tool. We diagnose the project risks during the Cognitive Audit phase and select the protocol.
                        </p>
                        <ul className="list-none pl-0 space-y-4 my-8">
                            <li className="flex items-start gap-3">
                                <span className="text-electric-cyan mt-1.5 inline-block w-2 h-2 rounded-full bg-electric-cyan"></span>
                                <span><strong>Is it a Logic Problem?</strong> We use Logic Maps and Axure. We architect the decision tree before we paint it.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-electric-cyan mt-1.5 inline-block w-2 h-2 rounded-full bg-electric-cyan"></span>
                                <span><strong>Is it a Speed Problem?</strong> We use Lovable and Next.js. We build the V1 to get real data fast.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-electric-cyan mt-1.5 inline-block w-2 h-2 rounded-full bg-electric-cyan"></span>
                                <span><strong>Is it a System Problem?</strong> We use Figma and JSON Tokens. We build the governance structure.</span>
                            </li>
                        </ul>
                        <p>
                            The goal isn't to produce a wireframe. The goal is to produce Certainty. Sometimes certainty looks like a gray box with variables; sometimes it looks like a deployed React app.
                        </p>
                        <p className="font-bold text-xl text-authority-navy mt-8">
                            The best designers know the difference.
                        </p>

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
