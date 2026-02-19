"use client";

import { motion } from "framer-motion";
import { BrainCircuit, GitBranch, Terminal, Layers } from "lucide-react";

const solutions = [
    {
        title: "Intent over Interface",
        description: "We design the Lifecycle of Intent. The interface is secondary to the logic.",
        icon: BrainCircuit
    },
    {
        title: "Logic over Layout",
        description: "We don't just arrange pixels; we engineer State Machines.",
        icon: GitBranch
    },
    {
        title: "Validation over Vibes",
        description: "Code-First Validation. Testing physics in the browser, not the slide deck.",
        icon: Terminal
    },
    {
        title: "Production over Prototype",
        description: "No handoffs. We deliver Agentic Systems (tokens.json) and Production Code.",
        icon: Layers
    }
];

export default function SolutionSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-authority-navy mb-4">
                            The Proto UX Operating System.
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {solutions.map((items, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group flex items-center p-6 md:p-8 rounded-2xl border border-slate-100 hover:border-electric-cyan/30 hover:bg-slate-gray/30 transition-all duration-300"
                            >
                                <div className="p-4 bg-slate-100 rounded-xl mr-6 md:mr-8 group-hover:bg-electric-cyan/10 transition-colors">
                                    <items.icon className="w-8 h-8 text-authority-navy group-hover:text-electric-cyan transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-authority-navy mb-1">{items.title}</h3>
                                    <p className="text-authority-navy/70 font-light text-lg">{items.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
