import React from 'react'
import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Truck, Package, MapPin, ChevronRight, Check, AlertCircle } from 'lucide-react'

export default function TForceLogisticsPage() {

    return (
        <article className="min-h-screen bg-primary pt-32 pb-24">
            <SEO
                title="Operational Intelligence | Proto UX"
                description="How we re-architected a legacy logistics system to support complex decision-making and reduce cognitive load."
            />
            <div className="container max-w-5xl mx-auto px-6">

                {/* Back Link */}
                <Link to="/work" className="btn btn-secondary text-sm inline-flex items-center gap-2 mb-12">
                    <ArrowLeft className="w-4 h-4" /> Work
                </Link>

                {/* Header */}
                <header className="mb-16 max-w-3xl">
                    <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-6">
                        Logistics / Operational Intelligence
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Operational Intelligence: From Data Entry to Decision Support
                    </h1>
                    <p className="text-xl text-secondary leading-relaxed border-l-2 border-accent pl-6">
                        How we re-architected a legacy logistics system to support complex decision-making and reduce cognitive load.
                    </p>
                </header>



                {/* Content Grid */}
                <div className="max-w-3xl mx-auto">
                    {/* Problem Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">The Problem (The Legacy Friction)</h2>
                        <p className="text-secondary leading-relaxed mb-8">
                            The legacy system was a "High-Density Utility" prioritizing raw data entry speed over human learnability. It required dispatchers to manually translate real-world logistics into rigid database rows.
                        </p>

                        <div className="flex flex-col gap-8">
                            <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3">Recall over Recognition</h3>
                                <p className="text-secondary leading-relaxed">
                                    The interface relied entirely on memorized shortcuts. With 25% of documentation dedicated to "F-Keys" (F2 to Submit, F5 to Rate), the system prioritized <strong className="text-white">active recall</strong> over visual recognition, creating a steep "memorization cliff" for new hires.
                                </p>
                            </div>

                            <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3">The "Logic Knot" of Routing</h3>
                                <p className="text-secondary leading-relaxed">
                                    The system treated routes as flat, linear arrays. To manage a commingled route, dispatchers had to manually shuffle stops using "Move Left" and "Move Right" buttons. This manual array manipulation was the root cause of sequencing errors.
                                </p>
                            </div>

                            <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3">Hidden Constraints</h3>
                                <p className="text-secondary leading-relaxed">
                                    Critical logic was hidden behind "mystery meat" navigation. Vital constraints like Hazmat requirements were indicated only by subtle <strong className="text-white">blue outlines</strong> on buttons, forcing users to constantly scan for "invisible" signals.
                                </p>
                            </div>
                        </div>
                    </section>
                    {/* Solution Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">The Solution (The Architect’s Fix)</h2>
                        <p className="text-secondary leading-relaxed mb-8">
                            We didn't just "skin" the legacy Java application; we re-architected the mental model of logistics dispatch.
                        </p>

                        <div className="flex flex-col gap-8">
                            <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3">Solving the Commingled Route Paradox</h3>
                                <p className="text-secondary leading-relaxed">
                                    The legacy system forced dispatchers to manage complex, multi-customer routes as flat, linear lists using manual "Move Left/Right" buttons. We introduced a <strong>Hierarchical Logic Visualization</strong>. The new UI groups orders visually by Route → Customer → Stop, allowing dispatchers to drag-and-drop complex itineraries. This offloaded the "mental mapping" from the human brain to the interface.
                                </p>
                            </div>

                            <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3">Reactive Logic vs. Static Input</h3>
                                <p className="text-secondary leading-relaxed">
                                    We moved from a "Recall-based" system (memorizing F-keys like F5 to rate) to a <strong>Reactive State Model</strong>. Pricing, route time estimation, and error validation now calculate instantly as data is entered. We replaced hidden constraints (subtle blue outlines) with <strong>Contextual Guards</strong>—high-visibility alerts that block invalid states before they are committed.
                                </p>
                            </div>

                            <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3">The "Glass Box" Transition</h3>
                                <p className="text-secondary leading-relaxed">
                                    We migrated the rigid "Single Screen Density" layout into a <strong>Progressive Disclosure</strong> workflow. Information is now contextual—users see "Hazmat Details" only when relevant, reducing visual noise by ~40% while maintaining high data density for power users.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Outcome Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">The Outcome (The Evidence)</h2>
                        <p className="text-secondary leading-relaxed mb-8">
                            The redesign transformed the Order Entry system from a passive database terminal into an active strategic tool.
                        </p>
                        <div className="flex flex-col gap-8">
                            <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3">Reduced Cognitive Load</h3>
                                <p className="text-secondary leading-relaxed">
                                    By visualizing the route hierarchy, we eliminated the mental math required to understand commingled routes, significantly reducing dispatch errors on multi-stop orders.
                                </p>
                            </div>

                            <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3">Accelerated Onboarding</h3>
                                <p className="text-secondary leading-relaxed">
                                    We shifted from "Memorization" (F-keys) to "Recognition" (UI Controls). New CSRs and dispatchers achieved proficiency in days rather than weeks, as the system now guides them through the "Happy Path."
                                </p>
                            </div>

                            <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3">Operational Velocity</h3>
                                <p className="text-secondary leading-relaxed">
                                    The shift to a web-based, reactive architecture allowed for real-time updates without page refreshes, increasing the orders-processed-per-hour metric for high-volume centers.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* CTA */}
                <div className="mt-24 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-12 text-center max-w-4xl mx-auto">
                    <h2 className="heading-gradient mb-6">Let’s Talk About Your Work</h2>
                    <p className="text-xl text-secondary max-w-2xl mx-auto mb-8">
                        If you’re facing similar challenges—or want to understand how this approach could apply to your product—we’re happy to talk.
                    </p>
                    <Link to="/start" className="btn btn-primary inline-flex items-center gap-2">
                        Start a conversation <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

            </div>
        </article>
    )
}


