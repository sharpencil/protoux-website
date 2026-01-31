import React from 'react'
import { Target, Puzzle, TriangleAlert, Database } from 'lucide-react'

export default function ProblemStatement() {
    return (
        <section className="section bg-secondary">
            <div className="container">
                <div className="max-w-5xl mx-auto">
                    <h2 className="heading-gradient text-center mb-4">
                        AI Scales Execution. It Does Not Scale Understanding.
                    </h2>

                    <p className="text-xl text-center text-secondary mb-16">
                        Generative AI allows teams to build faster than ever. But without a Logic Architect, it simply allows you to create Technical Debt at record speeds. We prevent the "Probabilistic Drift" that kills products.
                    </p>

                    <div className="grid grid-cols-2 gap-6 mb-12 w-full mx-auto">
                        {[
                            {
                                title: "Probabilistic Hallucination",
                                description: "AI guesses user intent based on averages. We use Human Factors rigor to map specific intent, ensuring the system acts predictably, not just plausibly.",
                                icon: Target,
                                color: '#38bdf8'
                            },
                            {
                                title: "Incoherent System Behavior",
                                description: "Without a Headless System (SYSTEM.md), AI hallucinates new patterns for every feature, leading to a fragmented, \"Frankenstein\" product experience.",
                                icon: Puzzle,
                                color: '#a855f7'
                            },
                            {
                                title: "The Happy Path Illusion",
                                description: "AI designs for the ideal scenario. It fails to architect the complex error states, recovery loops, and data dependencies that make up 90% of real software.",
                                icon: TriangleAlert,
                                color: '#f59e0b'
                            },
                            {
                                title: "Architecture-Blind Code",
                                description: "AI writes code that works now but breaks later. We architect the Data Schema and State Logic first, ensuring the foundation can handle the scale.",
                                icon: Database,
                                color: '#10b981'
                            }
                        ].map((item, index) => (
                            <div key={index} className="glass-card flex items-center gap-4 p-8">
                                <div className="p-2 bg-white/5 rounded-lg shrink-0" style={{ color: item.color }}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2 leading-tight">{item.title}</h3>
                                    <p className="text-secondary leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12 mb-8">
                        <p className="text-lg text-secondary max-w-3xl mx-auto">
                            AI provides the Engine. We provide the Steering. After a decade of product leadership, we know that Certainty—not just speed—is the ultimate competitive advantage. Proto UX exists to engineer that certainty.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}