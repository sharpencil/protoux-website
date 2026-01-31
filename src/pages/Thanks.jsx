import React from 'react'
import SEO from '../components/SEO'
import { Link } from 'react-router-dom'

export default function Thanks() {
    return (
        <section className="min-h-screen bg-primary pt-32 pb-24 flex items-center">
            <SEO
                title="Thanks | Proto UX"
                description="Thank you for contacting Proto UX. We will review your inquiry and follow up shortly."
            />
            <div className="container max-w-2xl mx-auto">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-center md:text-left">
                    <h1 className="heading-gradient mb-6">Thanks — We’ve Got It</h1>
                    <p className="text-xl text-white font-medium mb-8">
                        We’ve received your message and will review it shortly.
                    </p>

                    <div className="text-secondary space-y-4 mb-8 leading-relaxed">
                        <p>
                            Every inquiry is personally reviewed. If it looks like a strong fit, we’ll follow up within 1–2 business days to suggest next steps.
                        </p>
                        <p>
                            If not, we’ll still respond—either with guidance or a clear recommendation.
                        </p>
                    </div>

                    <div className="mb-12">
                        <p className="text-white font-medium mb-4">What Happens Next:</p>
                        <ul className="space-y-2 text-secondary">
                            <li className="flex items-start gap-3">
                                <span className="text-accent">•</span>
                                <span>We review your context and goals</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent">•</span>
                                <span>We assess fit and complexity</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent">•</span>
                                <span>If aligned, we’ll propose a short introductory conversation</span>
                            </li>
                        </ul>
                        <p className="text-sm text-secondary mt-6 pl-4 italic">No preparation required on your end.</p>
                    </div>

                    <div className="border-t border-white/10 pt-8">
                        <p className="text-white font-medium mb-4">In the meantime, you may want to:</p>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                            <Link to="/capabilities" className="text-accent hover:text-white transition-colors">Review our Capabilities</Link>
                            <Link to="/work" className="text-accent hover:text-white transition-colors">Explore Case Studies</Link>
                            <Link to="/pricing" className="text-accent hover:text-white transition-colors">Learn about Pricing & Engagement Models</Link>
                        </div>
                    </div>

                    <p className="text-secondary mt-32 text-center pt-8 border-t border-white/10 border-dashed">
                        We appreciate the opportunity to learn about your product.
                    </p>
                </div>
            </div>
        </section>
    )
}
