import React from 'react'
import { X } from 'lucide-react'

export default function ProblemStatement() {
    return (
        <section className="section bg-secondary">
            <div className="container">
                <div className="max-w-5xl mx-auto">
                    <h2 className="heading-gradient text-center mb-4">
                        AI Has Accelerated Execution.
                        It Hasn’t Replaced Judgment.
                    </h2>

                    <p className="text-xl text-center text-secondary mb-16">
                        AI has transformed how quickly teams can design and build. But speed alone doesn’t prevent:
                    </p>

                    <div className="grid grid-cols-2 gap-6 mb-12 w-full mx-auto">
                        {[
                            "Unclear problem definitions",
                            "Conflicting stakeholder priorities",
                            "Hidden complexity in workflows and systems",
                            "Costly rework after engineering begins"
                        ].map((item, index) => (
                            <div key={index} className="glass-card flex items-start gap-4 p-8">
                                <div className="p-2 bg-white/5 rounded-lg shrink-0" style={{ color: '#ec4899' }}>
                                    <X className="w-6 h-6" />
                                </div>
                                <span className="font-bold text-white text-lg leading-tight mt-1">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12 mb-8">
                        <p className="text-lg text-secondary max-w-3xl mx-auto">
                            After ten years of real product work, one thing is consistent. Clarity early is the strongest predictor of success. Proto UX exists to create that clarity.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}