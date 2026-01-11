import React from 'react'
import SEO from '../components/SEO'
import { Check, X, ArrowRight } from 'lucide-react'

export default function Pricing() {
    return (
        <section className="section bg-primary min-h-screen pt-32 pb-24">
            <SEO
                title="Pricing | Proto UX"
                description="Flexible engagement models designed to match the stage, complexity, and risk profile of your product."
            />
            <div className="container">
                {/* Header */}
                <div className="max-w-3xl mb-12">
                    <h1 className="heading-gradient mb-6">Pricing & Engagement Models</h1>
                    <p className="text-xl text-secondary leading-relaxed">
                        We offer flexible engagement models designed to match the stage, complexity, and risk profile of your product. Pricing reflects scope, speed, and level of involvement—not just deliverables.
                    </p>
                </div>

                {/* Engagement Models */}
                <div className="grid grid-cols-2 gap-8 mb-24">
                    {/* Project-Based */}
                    <div className="glass-card p-8 md:p-10 flex flex-col h-full">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Project-Based Engagements</h2>
                            <p className="text-secondary mb-8">
                                <strong className="text-white">Best for:</strong> Defined initiatives, new product efforts, major redesigns, or validation-heavy phases.
                            </p>

                            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 opacity-80">How It Works</h3>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-3 text-secondary">
                                    <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />

                                    <span>Fixed scope and timeline</span>
                                </li>
                                <li className="flex items-start gap-3 text-secondary">
                                    <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />

                                    <span>Clear outcomes and deliverables</span>
                                </li>
                                <li className="flex items-start gap-3 text-secondary">
                                    <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />

                                    <span>One or more phases of the Proto UX process</span>
                                </li>
                                <li className="flex items-start gap-3 text-secondary">
                                    <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />

                                    <span>Ideal when goals and constraints are well understood</span>
                                </li>
                            </ul>

                            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 opacity-80">Typical Projects</h3>
                            <ul className="space-y-3 mb-8 text-secondary list-disc pl-5">
                                <li>Discovery & opportunity framing</li>
                                <li>Experience architecture and interaction design</li>
                                <li>Complex workflow prototyping and validation</li>
                                <li>Design system creation or modernization</li>
                            </ul>
                        </div>

                        <div className="mt-auto pt-6 border-t border-white/10">
                            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 opacity-80">Investment Range (Indicative)</h3>
                            <ul className="space-y-3">
                                <li className="flex justify-between items-center text-secondary border-b border-white/5 pb-2 last:border-0">
                                    <span>Discovery & Framing</span>
                                    <span className="text-white font-medium">$3k – $5k</span>
                                </li>
                                <li className="flex justify-between items-center text-secondary border-b border-white/5 pb-2 last:border-0">
                                    <span>Experience Architecture + Prototyping</span>
                                    <span className="text-white font-medium">$5k – $10k</span>
                                </li>
                                <li className="flex justify-between items-center text-secondary border-b border-white/5 pb-2 last:border-0">
                                    <span>Design Systems & UI Execution</span>
                                    <span className="text-white font-medium">$8k – $15k</span>
                                </li>
                                <li className="flex justify-between items-center text-secondary border-b border-white/5 pb-2 last:border-0">
                                    <span>End-to-End Engagements</span>
                                    <span className="text-white font-medium">$16k – $20k+</span>
                                </li>
                            </ul>
                            <p className="text-xs text-secondary mt-4">Final pricing is based on complexity, timeline, and stakeholder involvement.</p>
                        </div>
                    </div>

                    {/* Fractional Design Partnership */}
                    <div className="glass-card p-8 md:p-10 flex flex-col h-full relative overflow-hidden">

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Fractional Design Partnership</h2>
                            <p className="text-secondary mb-8">
                                <strong className="text-white">Best for:</strong> Teams that need ongoing senior design leadership without hiring full-time.
                            </p>

                            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 opacity-80">How It Works</h3>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-3 text-secondary">
                                    <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />

                                    <span>Monthly subscription model</span>
                                </li>
                                <li className="flex items-start gap-3 text-secondary">
                                    <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />

                                    <span>Predictable cost, flexible scope</span>
                                </li>
                                <li className="flex items-start gap-3 text-secondary">
                                    <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />

                                    <span>Acts as an extension of your internal team</span>
                                </li>
                                <li className="flex items-start gap-3 text-secondary">
                                    <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />

                                    <span>Supports evolving priorities and fast iteration</span>
                                </li>
                            </ul>

                            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 opacity-80">Typical Use Cases</h3>
                            <ul className="space-y-3 mb-8 text-secondary list-disc pl-5">
                                <li>Product strategy and UX leadership</li>
                                <li>Continuous discovery and validation</li>
                                <li>Design system evolution</li>
                                <li>Prototyping and design support across multiple initiatives</li>
                                <li>Design-to-engineering collaboration</li>
                            </ul>
                        </div>

                        <div className="mt-auto pt-6 border-t border-white/10">
                            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 opacity-80">Monthly Investment (Indicative)</h3>
                            <ul className="space-y-3">
                                <li className="flex justify-between items-center text-secondary border-b border-white/5 pb-2 last:border-0">
                                    <span>Light Partnership</span>
                                    <span className="text-white font-medium">$5k – $9k / mo</span>
                                </li>
                                <li className="flex justify-between items-center text-secondary border-b border-white/5 pb-2 last:border-0">
                                    <span>Core Partnership</span>
                                    <span className="text-white font-medium">$10k – $14k / mo</span>
                                </li>
                                <li className="flex justify-between items-center text-secondary border-b border-white/5 pb-2 last:border-0">
                                    <span>Embedded Partnership</span>
                                    <span className="text-white font-medium">$15k+ / mo</span>
                                </li>
                            </ul>
                            <p className="text-xs text-secondary mt-4">Minimum 3-month engagement recommended for meaningful impact.</p>
                        </div>
                    </div>
                </div>

                {/* Comparison Section */}
                <div className="mb-24">
                    <h2 className="text-2xl font-bold text-white text-center mb-12">Which Model Is Right for You?</h2>
                    <div className="max-w-4xl mx-auto border border-white/10 rounded-xl overflow-hidden">
                        <div className="grid grid-cols-2 gap-4 bg-white/5 p-4 border-b border-white/10 items-center">
                            <div className="font-bold text-white text-right">If you need…</div>
                            <div className="font-bold text-white text-left">Recommended Model</div>
                        </div>
                        <div className="divide-y divide-white/10 bg-white/[0.02]">
                            {[
                                { needs: "Clear deliverables and timeline", model: "Project-Based" },
                                { needs: "Ongoing design leadership", model: "Fractional" },
                                { needs: "Rapid iteration across initiatives", model: "Fractional" },
                                { needs: "Validation before a major build", model: "Project-Based" },
                                { needs: "Design systems over time", model: "Fractional" },
                            ].map((row, i) => (
                                <div key={i} className="grid grid-cols-2 gap-4 p-4 text-secondary hover:bg-white/5 transition-colors items-center">
                                    <div className="text-right">{row.needs}</div>
                                    <div className="font-medium text-white text-left">{row.model}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="text-center text-secondary mt-6">
                        Not sure? Many clients start with a project and transition into a fractional partnership.
                    </p>
                </div>

                {/* What's Included / What We Don't Do */}
                <div className="grid grid-cols-2 gap-6 mb-24 py-12">
                    <div className="glass-card p-8 h-full">
                        <h2 className="text-2xl font-bold text-white mb-6">What’s Included in Every Engagement</h2>
                        <ul className="space-y-4">
                            {[
                                "Senior-level, hands-on design leadership",
                                "AI-accelerated workflows without shortcuts",
                                "Clear communication and documentation",
                                "Tooling chosen based on the problem—not trends",
                                "Focus on reducing risk and increasing confidence"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-secondary">
                                    <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                                    <span className="text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="glass-card p-8 h-full">
                        <h2 className="text-2xl font-bold text-white mb-6">What We Don’t Do</h2>
                        <ul className="space-y-4">
                            {[
                                "Fixed-price “screen counts”",
                                "Unvalidated design deliverables",
                                "AI-generated work without human oversight",
                                "One-size-fits-all UX processes"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-secondary">
                                    <X className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#ec4899' }} />
                                    <span className="text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-12 text-center">
                    <h2 className="heading-gradient mb-6">Let’s Talk</h2>
                    <p className="text-xl text-secondary max-w-2xl mx-auto mb-8">
                        If you’re evaluating a project or considering a longer-term partnership, we’re happy to discuss scope, timing, and fit.
                    </p>
                    <a href="#contact" className="btn btn-primary inline-flex items-center gap-2">
                        Schedule a conversation <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    )
}
