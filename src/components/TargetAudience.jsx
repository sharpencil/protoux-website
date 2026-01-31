import React from 'react'
import { CheckCircle, AlertTriangle } from 'lucide-react'

export default function TargetAudience() {
    return (
        <section className="section bg-secondary">
            <div className="container">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="heading-gradient">Engagement Criteria</h2>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {/* Card 1: Compatible Environments */}
                        <div className="glass-card p-8">
                            <div className="flex items-center gap-3 mb-8">
                                <CheckCircle className="w-6 h-6" style={{ color: '#4d4dff' }} /> {/* Electric Cobalt */}
                                <h3 className="text-xl font-bold text-white font-mono">Compatible Environments</h3>
                            </div>
                            <ul className="space-y-6">
                                {[
                                    { title: "High-Complexity Domains", desc: "B2B, FinTech, Data Tools" },
                                    { title: "Engineering-Led Teams", desc: "Valuing logic over decoration" },
                                    { title: "Execution-Ready", desc: "Ready to build and ship, not just brainstorm" }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex flex-col">
                                        <span className="text-white font-bold text-lg mb-1">{item.title}</span>
                                        <span className="text-secondary">{item.desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Card 2: System Conflicts */}
                        <div className="glass-card p-8 bg-white/5 opacity-80">
                            <div className="flex items-center gap-3 mb-8">
                                <AlertTriangle className="w-6 h-6" style={{ color: '#ff4f00' }} /> {/* International Orange */}
                                <h3 className="text-xl font-bold text-white font-mono">System Conflicts</h3>
                            </div>
                            <ul className="space-y-6 opacity-60">
                                {[
                                    { title: "\"Vibe-Only\" Projects", desc: "Visuals without logic" },
                                    { title: "\"Happy Path\" Thinking", desc: "Ignoring edge cases" },
                                    { title: "\"Waterfall\" Process", desc: "Rigid, linear handoffs" }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex flex-col">
                                        <span className="text-white font-bold text-lg mb-1">{item.title}</span>
                                        <span className="text-secondary">{item.desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
