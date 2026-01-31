import React from 'react'
import { User, Layers, ShieldCheck, Target } from 'lucide-react'

export default function Differentiation() {
    const differentiators = [
        {
            icon: User,
            color: '#38bdf8', // Blue
            title: "Intent over Interface",
            description: "We design the Lifecycle of Intent. We define when the system should act, when it should ask, and how it recovers from error. The interface is secondary to the logic."
        },
        {
            icon: Layers,
            color: '#a855f7', // Purple
            title: "Logic over Layout",
            description: "We don't just arrange pixels; we engineer Data Schemas and State Machines. We ensure the product is mathematically sound before we make it beautiful."
        },
        {
            icon: ShieldCheck,
            color: '#f59e0b', // Amber
            title: "Validation over Vibes",
            description: "Static mockups are simulations. We practice Code-First Validation, spinning up functional prototypes to test the physics of the product in the browser, not in a slide deck."
        },
        {
            icon: Target,
            color: '#10b981', // Emerald
            title: "Production over Prototype",
            description: "The era of the \"Handoff\" is over. We deliver Agentic Systems (tokens.json) and Production Code (Next.js) that bridge the gap to engineering instantly."
        }
    ]

    return (
        <section className="section">
            <div className="container">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="heading-gradient">The Proto UX Operating System</h2>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {differentiators.map((item, index) => (
                            <div key={index} className="glass-card flex items-center gap-4 p-8">
                                <div className="p-2 bg-white/5 rounded-lg shrink-0" style={{ color: item.color }}>
                                    <item.icon size={24} />
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