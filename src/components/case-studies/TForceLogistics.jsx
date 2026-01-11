import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function TForceLogistics() {
    return (
        <div className="glass-card p-0 overflow-hidden hover:border-white/20 transition-colors group">
            <div className="p-8 md:p-10 border-b border-white/10">
                {/* Header Section (Full Width) */}
                <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
                    <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider">
                        Logistics / Operational Intelligence
                    </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-2">TForce Logistics: Operational Intelligence</h3>
                <p className="text-xl text-secondary mb-12">Modernizing a high-stakes Order Management System to reduce cognitive load.</p>

                {/* Content Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Cell 1: The Challenge */}
                    <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                        <h4 className="flex items-center gap-2 text-white font-bold mb-4">
                            The Challenge ("High-Density Utility")
                        </h4>
                        <p className="text-white font-medium mb-2">"The Memorization Cliff"</p>
                        <p className="text-secondary text-sm leading-relaxed">
                            The existing Order Entry system was a classic "High-Density Utility" designed for expert users (dispatchers/CSRs) who prioritize speed of data entry over learnability. It relied heavily on memorized keyboard shortcuts and a non-linear "cockpit" interface. While efficient for tenured staff, the system imposes an extreme Cognitive Load on new users.
                        </p>
                    </div>

                    {/* Cell 2: Core Problem */}
                    <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                        <h4 className="flex items-center gap-2 text-white font-bold mb-4">
                            The Core Problem ("The Logic Knot")
                        </h4>
                        <p className="text-white font-medium mb-2">"The Commingled Route Paradox"</p>
                        <p className="text-secondary text-sm leading-relaxed">
                            Dispatchers were struggling to manage "Commingled Routes"—where a single truck carries orders for multiple customers. The legacy system flattened this hierarchy into linear lists, forcing users to keep complex mental maps in their heads. This led to high error rates and slow dispatch times.
                        </p>
                    </div>

                    {/* Cell 3: Cognitive Solution */}
                    <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                        <h4 className="flex items-center gap-2 text-white font-bold mb-4">
                            The Cognitive Solution ("The Architect's Fix")
                        </h4>
                        <p className="text-white font-medium mb-2">"Visualizing the Hierarchy"</p>
                        <p className="text-secondary text-sm leading-relaxed">
                            We didn't just skin the UI. We re-architected the data visualization. We transitioned from flat tables to a Nested Logic View, which visually organizes orders by Route, Customer, and Stop. This reduced the "Working Memory" load on dispatchers, allowing them to process commingled routes instantly.
                        </p>
                    </div>
                </div>

                <div className="mt-8 flex justify-end">
                    <Link to="/work/tforce-logistics" className="text-accent font-medium text-sm flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                        View case study <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
