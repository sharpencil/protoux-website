"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ArticleAiUx() {
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
                            <span className="text-electric-cyan uppercase tracking-widest font-bold font-sans">Perspective</span>
                            <span>•</span>
                            <span>4 min read</span>
                            <span>•</span>
                            <span>2026-01-24</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-authority-navy mb-8 leading-tight tracking-tight">
                            What AI Is Good at in UX—and What It Isn’t
                        </h1>

                        <p className="text-xl md:text-2xl text-authority-navy/80 font-light leading-relaxed mb-12 border-l-4 border-electric-cyan pl-6">
                            A clear-eyed look at where AI actually helps. We embrace an AI-native workflow, but draw a sharp red line between Execution (The Machine) and Strategy (The Human).
                        </p>
                    </motion.div>

                    {/* Content Body */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="prose prose-lg prose-slate max-w-none text-authority-navy/80 font-light leading-relaxed"
                    >
                        <p>In 2026, the question is no longer "Do you use AI?" The question is "Who is driving?"</p>

                        <p>
                            There is a misconception in the market that AI tools like Midjourney, Lovable, or Galileo are "Designers." They are not. They are high-speed manufacturing plants. If you feed them bad blueprints, they will manufacture garbage at record speeds.
                        </p>

                        <p>
                            At Proto UX, we embrace an AI-native workflow, but we draw a sharp red line between Execution (The Machine) and Strategy (The Human).
                        </p>

                        <p className="font-medium text-authority-navy">Here is the honest breakdown of where AI creates leverage, and where it hits a hard wall.</p>

                        <hr className="border-authority-navy/10 my-12" />

                        <h2 className="text-3xl font-bold font-heading text-authority-navy mt-16 mb-6">What AI is Incredible At (Velocity & Syntax)</h2>
                        <p>We use AI aggressively in these three areas to save our clients time and money:</p>

                        <h3 className="text-2xl font-bold text-authority-navy mt-8 mb-4">1. The "Boilerplate" Lift</h3>
                        <p>
                            Building a login screen, a settings panel, or a standard data table is no longer a design challenge. It is a commodity.
                        </p>
                        <ul className="list-none pl-0 space-y-4 my-8">
                            <li className="flex items-start gap-3">
                                <span className="text-electric-cyan mt-1.5 inline-block w-2 h-2 rounded-full bg-electric-cyan"></span>
                                <span><strong>The AI Role:</strong> We use tools to instantly generate the "Standard UI" code and layout.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-electric-cyan mt-1.5 inline-block w-2 h-2 rounded-full bg-electric-cyan"></span>
                                <span><strong>The Benefit:</strong> We don't bill you 40 hours for drawing standard inputs. We spend that budget on the 10% of the product that is unique to your business.</span>
                            </li>
                        </ul>

                        <h3 className="text-2xl font-bold text-authority-navy mt-8 mb-4">2. Pattern Synthesis (Research)</h3>
                        <p>
                            When we conduct 20 hours of stakeholder interviews, the sheer volume of data is overwhelming.
                        </p>
                        <ul className="list-none pl-0 space-y-4 my-8">
                            <li className="flex items-start gap-3">
                                <span className="text-electric-cyan mt-1.5 inline-block w-2 h-2 rounded-full bg-electric-cyan"></span>
                                <span><strong>The AI Role:</strong> AI excels at pattern recognition. We feed it transcripts and ask it to find "The top 3 friction points mentioned by the Sales team vs. the Engineering team."</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-electric-cyan mt-1.5 inline-block w-2 h-2 rounded-full bg-electric-cyan"></span>
                                <span><strong>The Benefit:</strong> It turns raw noise into structured data instantly, allowing us to move to diagnosis faster.</span>
                            </li>
                        </ul>

                        <h3 className="text-2xl font-bold text-authority-navy mt-8 mb-4">3. Translation (Design to Code)</h3>
                        <p>
                            This is the superpower. AI bridges the gap between Figma variables and React props.
                        </p>
                        <ul className="list-none pl-0 space-y-4 my-8">
                            <li className="flex items-start gap-3">
                                <span className="text-electric-cyan mt-1.5 inline-block w-2 h-2 rounded-full bg-electric-cyan"></span>
                                <span><strong>The AI Role:</strong> Writing the mundane CSS, ensuring accessibility tags are present, and refactoring components to match the design system.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-electric-cyan mt-1.5 inline-block w-2 h-2 rounded-full bg-electric-cyan"></span>
                                <span><strong>The Benefit:</strong> We ship "Dev-Ready" code, not just static pictures.</span>
                            </li>
                        </ul>

                        <hr className="border-authority-navy/10 my-12" />

                        <h2 className="text-3xl font-bold font-heading text-authority-navy mt-16 mb-6">What AI is Terrible At (Context & Intent)</h2>
                        <p>
                            This is why you pay for a Logic Architect. AI models are Probabilistic Engines—they guess the next likely pixel based on the average of the internet. They do not understand truth.
                        </p>

                        <h3 className="text-2xl font-bold text-authority-navy mt-8 mb-4">1. "The Why" (Intent)</h3>
                        <p>
                            AI can design a beautiful dashboard. It cannot tell you if a dashboard is the right solution for the user's problem.
                        </p>
                        <ul className="list-none pl-0 space-y-4 my-8">
                            <li className="flex items-start gap-3">
                                <span className="text-electric-cyan mt-1.5 inline-block w-2 h-2 rounded-full bg-electric-cyan"></span>
                                <span><strong>The Human Factor:</strong> Maybe the user doesn't need a dashboard. Maybe they need a morning email summary. AI will never suggest that because you asked for a dashboard. We define the solution; AI only executes the request.</span>
                            </li>
                        </ul>

                        <h3 className="text-2xl font-bold text-authority-navy mt-8 mb-4">2. Organizational Physics</h3>
                        <p>
                            AI designs in a vacuum. It assumes infinite budget, perfect data, and modern tech stacks.
                        </p>
                        <ul className="list-none pl-0 space-y-4 my-8">
                            <li className="flex items-start gap-3">
                                <span className="text-electric-cyan mt-1.5 inline-block w-2 h-2 rounded-full bg-electric-cyan"></span>
                                <span><strong>The Human Factor:</strong> Your business has legacy code, specific compliance needs (HIPAA/SOC2), and a unique brand voice. We filter the AI's output through the reality of your constraints.</span>
                            </li>
                        </ul>

                        <h3 className="text-2xl font-bold text-authority-navy mt-8 mb-4">3. Novel Logic</h3>
                        <p>
                            AI is a remixer. It can only produce variations of things that already exist.
                        </p>
                        <ul className="list-none pl-0 space-y-4 my-8">
                            <li className="flex items-start gap-3">
                                <span className="text-electric-cyan mt-1.5 inline-block w-2 h-2 rounded-full bg-electric-cyan"></span>
                                <span><strong>The Human Factor:</strong> If your product requires a novel interaction model—something that hasn't been done a thousand times on Dribbble—AI will hallucinate broken logic. Complex state management and edge-case error handling require a human architect to map the decision tree.</span>
                            </li>
                        </ul>

                        <hr className="border-authority-navy/10 my-12" />

                        <h2 className="text-3xl font-bold font-heading text-authority-navy mt-16 mb-6">The Verdict: The Pilot and The Plane</h2>
                        <p>
                            We view AI as the ultimate Force Multiplier.
                        </p>
                        <p>
                            It allows us to be 10x faster at production. It allows us to be 10x cheaper on the "boring stuff."
                        </p>
                        <p>
                            But it makes the Human Factors Ph.D. more valuable, not less. Because when you can build anything in seconds, the cost of building the wrong thing goes up exponentially.
                        </p>
                        <p className="font-bold text-xl text-authority-navy mt-8">
                            We use AI to run the engine. We use Human Intelligence to steer the ship.
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
