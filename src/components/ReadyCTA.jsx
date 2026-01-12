import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ReadyCTA() {
    return (
        <section className="section bg-secondary">
            <div className="container">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="heading-gradient mb-6">
                        Ready to Reduce Risk and <br />
                        Move Forward with Confidence?
                    </h2>

                    <p className="text-xl md:text-2xl text-secondary mb-16">
                        If you’re navigating complexity, uncertainty, or scale in 2026, let’s talk.
                    </p>

                    <Link to="/start" className="btn btn-primary text-lg px-8 py-4 inline-flex items-center gap-3">
                        Start a conversation <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    )
}
