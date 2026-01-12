import React from 'react'
import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'

export default function About() {
    return (
        <section className="min-h-screen bg-primary pt-32 pb-24">
            <SEO
                title="About | Proto UX"
                description="A Decade of Designing for Clarity. Proto UX helps teams design products that work in the real world."
            />
            <div className="container">
                {/* Header */}
                <div className="max-w-3xl mb-24">
                    <h1 className="heading-gradient mb-6">A Decade of Designing for Clarity</h1>
                    <p className="text-xl text-secondary leading-relaxed mb-6">
                        Proto UX was founded in 2016 to help teams design products that work in the real world—not just in theory.
                    </p>
                    <p className="text-xl text-secondary leading-relaxed mb-6">
                        Over the past decade, the tools have changed. AI now accelerates design and development. What hasn’t changed is the need for clear thinking, sound judgment, and accountability when products become complex.
                    </p>
                    <p className="text-xl text-white font-medium">
                        Proto UX exists to provide that clarity.
                    </p>
                </div>

                {/* Founder Section */}
                <div className="mb-24">
                    <div className="glass-card p-8 md:p-12">
                        <div className="grid md:grid-cols-3 gap-8 items-start">
                            {/* Avatar / Info */}
                            <div className="col-span-1">
                                <div className="w-32 h-32 rounded-full bg-white/10 mb-6 flex items-center justify-center border border-white/10 overflow-hidden text-3xl font-bold text-white">
                                    Founder & Principal
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-2">Young Ryu, Ph.D.</h2>

                            </div>

                            {/* Bio */}
                            <div className="md:col-span-2">
                                <p className="text-secondary leading-relaxed mb-6">
                                    Dr. Young Ryu founded Proto UX in 2016 after years of designing and researching complex digital systems. With a background in Human Factors Engineering, UX research and interaction design, Young brings a systems-level perspective to product challenges—bridging user needs, business goals, and technical constraints.
                                </p>
                                <p className="text-secondary leading-relaxed mb-4">
                                    Young has partnered with startups, scale-ups, and enterprise teams to:
                                </p>
                                <ul className="space-y-2 mb-6">
                                    {[
                                        "Frame ambiguous product problems",
                                        "Model complex workflows and interactions",
                                        "Validate high-risk assumptions before engineering investment",
                                        "Design scalable systems and design foundations"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div>
                                            <span className="text-secondary">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-secondary leading-relaxed">
                                    Known for a hands-on, detail-oriented approach, Young works directly with clients throughout each engagement—bringing clarity, rigor, and accountability to every stage of the process.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Philosophy Grid */}
                <div className="grid grid-cols-2 gap-8 mb-24">
                    {/* How We Work */}
                    <div className="glass-card p-8 md:p-10 h-full">
                        <h2 className="text-2xl font-bold text-blue-grey mb-6">How We Work</h2>
                        <p className="text-secondary mb-8 leading-relaxed">
                            We partner with teams building complex B2B and enterprise software—where mistakes are expensive and decisions matter. Our approach is human-led and AI-accelerated:
                        </p>
                        <ul className="space-y-4">
                            {[
                                "AI helps us move faster",
                                "People remain responsible for decisions",
                                "Evidence replaces opinion",
                                "Systems matter more than screens",
                                "This keeps teams aligned and confident before committing engineering effort."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                                    <span className="text-secondary">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* What We Focus On */}
                    <div className="glass-card p-8 md:p-10 h-full">
                        <h2 className="text-2xl font-bold text-blue-grey mb-6">What We Focus On</h2>
                        <p className="text-secondary mb-8 leading-relaxed">
                            Proto UX is not a volume design shop. We focus on work where:
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Complexity is high",
                                "Workflows are non-trivial",
                                "Automation or intelligent systems are involved",
                                "Decisions must be validated before scale"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                                    <span className="text-secondary">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-white font-medium border-t border-white/10 pt-6">
                            When clarity matters more than speed, we’re a strong fit.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-12 text-center max-w-4xl mx-auto">
                    <h2 className="heading-gradient mb-6">Let’s Talk</h2>
                    <p className="text-xl text-secondary max-w-2xl mx-auto mb-8">
                        If you’re navigating complexity, uncertainty, or scale, we’re happy to start a conversation.
                    </p>
                    <Link to="/start" className="btn btn-primary inline-flex items-center gap-2">
                        Start a conversation <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
