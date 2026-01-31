import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Shield, Layers, Cpu, Layout, GitBranch } from 'lucide-react'
import TForceLogistics from '../components/case-studies/TForceLogistics'
import SEO from '../components/SEO'

export default function Work() {
    return (
        <section className="section bg-primary min-h-screen pt-24"> {/* Added padding-top to account for fixed header */}
            <SEO
                title="Shipped Logic"
                description="Case studies of evidence-based product design. See how we bridge the gap between Human Factors science and AI-native development."
            />
            {/* Top Gradient */}
            <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-[#1a1f2e] to-black pointer-events-none z-0" />

            <div className="container relative z-10">
                {/* Header */}
                <div className="max-w-3xl mb-24">
                    <h1 className="heading-gradient mb-6">Selected Work & Case Studies</h1>
                    <p className="text-xl text-secondary leading-relaxed mb-6">
                        Proto UX partners with teams building complex, high-stakes products.
                        The work below reflects how we help teams reduce risk, clarify decisions, and design systems that scale.
                    </p>
                    <p className="text-xl text-white font-medium">
                        Each engagement is different, but the goal is consistent: make the right decisions before they become expensive.
                    </p>
                </div>


                {/* Selected Case Studies */}
                <div className="mb-24">
                    <h2 className="text-2xl font-bold text-white mb-12 border-b border-white/10 pb-4">Selected Case Studies</h2>
                    <div className="grid gap-12">

                        {/* Case Study New: TForce Logistics */}
                        <TForceLogistics />



                    </div>
                </div>

                {/* Types of Work & Confidentiality */}
                <div className="grid md:grid-cols-2 gap-12 mb-24">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6">Types of Work We Do</h2>
                        <ul className="space-y-4">
                            {[
                                "Complex B2B and enterprise software",
                                "Workflow-heavy internal tools",
                                "Platforms involving automation or intelligent behavior",
                                "Products where validation is critical before scale",
                                "Design systems supporting long-term growth"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                    <span className="text-secondary text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-secondary mt-8 italic px-4 py-3 bg-white/5 rounded-lg border border-white/5 inline-block">
                            If your product lives in this space, the work here should feel familiar.
                        </p>
                    </div>

                    <div className="glass-card p-8">
                        <div className="flex items-center gap-3 mb-4 text-white">
                            <Shield className="w-6 h-6 text-accent" />
                            <h3 className="text-xl font-bold">A Note on Confidentiality</h3>
                        </div>
                        <p className="text-secondary leading-relaxed mb-4">
                            Much of our work happens inside organizations where discretion matters.
                        </p>
                        <p className="text-secondary leading-relaxed mb-4">
                            Some engagements are shared in detail. Others are summarized or discussed privately.
                        </p>
                        <p className="text-white font-medium">
                            If you don’t see something exactly like your product, that doesn’t mean we haven’t done it.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-12 text-center max-w-4xl mx-auto">
                    <h2 className="heading-gradient mb-6">Let’s Talk About Your Work</h2>
                    <p className="text-xl text-secondary max-w-2xl mx-auto mb-8">
                        If you’re facing similar challenges—or want to understand how this approach could apply to your product—we’re happy to talk.
                    </p>
                    <Link to="/start" className="btn btn-primary inline-flex items-center gap-2">
                        Start a conversation <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
