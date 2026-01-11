import React from 'react'
import { User, Layers, ShieldCheck, Target } from 'lucide-react'

export default function Differentiation() {
    const differentiators = [
        {
            icon: <User size={24} className="text-accent" />,
            title: "Human Judgment First",
            description: "AI accelerates work, but decisions remain human-led."
        },
        {
            icon: <Layers size={24} className="text-accent" />,
            title: "Systems Over Screens",
            description: "We design behavior and structure, not just UI."
        },
        {
            icon: <ShieldCheck size={24} className="text-accent" />,
            title: "Evidence Before Commitment",
            description: "Decisions are validated before engineering begins."
        },
        {
            icon: <Target size={24} className="text-accent" />,
            title: "Accountability for Outcomes",
            description: "We help teams own decisions, not defer them to tools."
        }
    ]

    return (
        <section className="section">
            <div className="container">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="heading-gradient">What Makes Proto UX Different</h2>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {differentiators.map((item, index) => (
                            // CHANGE 1: Changed 'items-start' to 'items-center' to vertically center everything
                            <div key={index} className="glass-card flex items-center gap-4 p-8">

                                {/* CHANGE 2: Removed 'mt-1'. No manual adjustment needed for center alignment */}
                                <div className="p-2 bg-white/5 rounded-lg shrink-0">
                                    {item.icon}
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
                </div>
            </div>
        </section>
    )
}