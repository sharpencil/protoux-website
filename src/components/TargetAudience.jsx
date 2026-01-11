import React from 'react'
import { Briefcase, Boxes, ShieldCheck, Search } from 'lucide-react'

export default function TargetAudience() {
    return (
        <section className="section bg-secondary">
            <div className="container">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="heading-gradient mb-4">Who We’re a Good Fit For</h2>
                        <p className="text-xl text-secondary">
                            Proto UX works best with teams that:
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-16">
                        {[
                            {
                                icon: <Briefcase className="w-6 h-6" />,
                                text: "Build B2B or enterprise software"
                            },
                            {
                                icon: <Boxes className="w-6 h-6" />,
                                text: "Deal with complex workflows or systems"
                            },
                            {
                                icon: <ShieldCheck className="w-6 h-6" />,
                                text: "Need confidence before committing engineering resources"
                            },
                            {
                                icon: <Search className="w-6 h-6" />,
                                text: "Value clarity, rigor, and long-term thinking"
                            }
                        ].map((item, index) => (
                            <div key={index} className="glass-card flex items-start gap-4 p-8">
                                <div className="p-2 bg-white/5 rounded-lg shrink-0 text-accent">
                                    {React.cloneElement(item.icon, { size: 24, className: undefined })}
                                </div>
                                <span className="text-lg font-bold text-white mt-1">{item.text}</span>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-lg text-secondary">
                            If you’re looking for quick visuals or AI-generated screens alone, we may not be the right fit—and that’s intentional.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
