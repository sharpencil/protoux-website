import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-primary pt-24 pb-12 border-t border-white/5">
            <div className="container px-4 mx-auto">

                {/* 
                   MAIN CONTENT SECTION
                   Changed mb-32 (128px) -> mb-20 (80px)
                   This creates a balanced gap before the divider line.
                */}
                <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-28">

                    {/* 1. Brand Section (Left) */}
                    <div className="flex flex-col gap-6 max-w-sm">
                        <Link to="/" className="flex items-center gap-3 group w-fit">

                            <span className="text-xl font-bold tracking-tight text-white">Proto UX</span>
                        </Link>
                        <p className="text-secondary text-base leading-relaxed">
                            Outcome-driven design for complex products.
                        </p>
                        <div className="flex flex-col gap-1 text-sm text-muted mt-2">
                            <span>Based in Austin, TX</span>
                            <span>Serving clients globally</span>
                        </div>
                    </div>

                    {/* 2. Navigation (Right) */}
                    {/* Added 'md:mt-auto' to force nav to align with bottom of Brand text if heights differ */}
                    <div className="flex flex-col gap-6 md:items-end md:text-right md:mt-auto">
                        <nav className="flex flex-wrap items-center md:justify-end gap-8">
                            <Link to="/" className="text-secondary hover:text-white transition-colors text-sm font-medium">
                                Home
                            </Link>
                            <Link to="/capabilities" className="text-secondary hover:text-white transition-colors text-sm font-medium">
                                Capabilities
                            </Link>
                            <Link to="/work" className="text-secondary hover:text-white transition-colors text-sm font-medium">
                                Work
                            </Link>
                            <Link to="/pricing" className="text-secondary hover:text-white transition-colors text-sm font-medium">
                                Pricing
                            </Link>
                            <Link to="/about" className="text-secondary hover:text-white transition-colors text-sm font-medium">
                                About
                            </Link>
                            <Link to="/insights" className="text-secondary hover:text-white transition-colors text-sm font-medium">
                                Insights
                            </Link>
                        </nav>
                    </div>

                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">

                        <p className="text-muted text-xs">
                            © {new Date().getFullYear()} Proto UX, LLC. All rights reserved. Est. 2016
                        </p>
                    </div>

                </div>

                {/* 
                   BOTTOM BAR 
                   Changed pt-16 (64px) -> pt-8 (32px)
                   This brings the copyright line closer to the divider for better grouping.
                */}


            </div>
        </footer >
    )
}