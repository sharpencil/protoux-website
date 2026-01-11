import React, { useState } from 'react'
import SEO from '../components/SEO'
import { useNavigate } from 'react-router-dom'

export default function Start() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        role: '',
        situations: [],
        challenge: '',
        timeline: '',
        budget: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target
        setFormData(prev => {
            if (checked) {
                return { ...prev, situations: [...prev.situations, value] }
            } else {
                return { ...prev, situations: prev.situations.filter(item => item !== value) }
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const myForm = e.target;
        const formData = new FormData(myForm);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => navigate('/thanks'))
            .catch((error) => alert(error));
    }

    return (
        <section className="min-h-screen bg-primary pt-32 pb-24">
            <SEO
                title="Start a Conversation | Proto UX"
                description="Start a conversation with Proto UX. Tell us about your product challenge and see if we're a fit."
            />
            <div className="container max-w-2xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="heading-gradient mb-4">Start a Conversation</h1>
                    <p className="text-xl text-white font-medium mb-6">
                        Tell us a bit about your product and what you’re trying to solve.
                        We’ll review your message and follow up if it looks like a strong fit.
                    </p>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-secondary">
                        <p className="mb-2">
                            Proto UX works with teams facing complexity, uncertainty, or scale.
                            This short form helps us understand your context so we can have a more meaningful first conversation.
                        </p>
                        <p className="text-white font-medium">We personally review every inquiry.</p>
                    </div>
                </div>

                {/* Form */}
                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    onSubmit={handleSubmit}
                    className="space-y-8"
                >
                    <input type="hidden" name="form-name" value="contact" />

                    {/* Basic Info */}
                    <div className="space-y-6">
                        <div className="form-group">
                            <label htmlFor="name">Name <span className="text-red-400">*</span></label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Jane Smith"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="company">Company <span className="text-red-400">*</span></label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                placeholder="Acme, Inc."
                                required
                                value={formData.company}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Work Email <span className="text-red-400">*</span></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="jane@company.com"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <p className="input-hint">We’ll only use this to respond to your inquiry.</p>
                        </div>

                        <div className="form-group">
                            <label htmlFor="role">Your Role <span className="text-red-400">*</span></label>
                            <select
                                id="role"
                                name="role"
                                required
                                value={formData.role}
                                onChange={handleChange}
                            >
                                <option value="" disabled>Select an option...</option>
                                <option value="Founder / Executive">Founder / Executive</option>
                                <option value="Product Leader">Product Leader</option>
                                <option value="Design Leader">Design Leader</option>
                                <option value="Engineering Leader">Engineering Leader</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="h-px bg-white/10 my-8"></div>

                    {/* Situation */}
                    <div className="form-group">
                        <label>What best describes your situation?</label>
                        <div className="checkbox-group mt-3">
                            {[
                                "New product or platform",
                                "Redesign or modernization",
                                "Complex workflow or system",
                                "Design system work",
                                "Ongoing design partnership",
                                "Not sure yet"
                            ].map(option => (
                                <label key={option} className="checkbox-item">
                                    <input
                                        type="checkbox"
                                        value={option}
                                        checked={formData.situations.includes(option)}
                                        onChange={handleCheckboxChange}
                                    />
                                    <span>{option}</span>
                                </label>
                            ))}
                        </div>
                        <p className="input-hint">Select all that apply.</p>
                    </div>

                    {/* Core Question */}
                    <div className="form-group">
                        <label htmlFor="challenge">What’s the biggest challenge you’re facing right now? <span className="text-red-400">*</span></label>
                        <textarea
                            id="challenge"
                            name="challenge"
                            placeholder="For example: unclear product direction, complex workflows, alignment issues, validating a concept before engineering, scaling an existing system, etc."
                            required
                            value={formData.challenge}
                            onChange={handleChange}
                        ></textarea>
                        <p className="input-hint">A few sentences is perfect. No need to overthink it.</p>
                    </div>

                    {/* Timeline */}
                    <div className="form-group">
                        <label>Timeline (optional)</label>
                        <div className="radio-group mt-3">
                            {[
                                "Exploring / no fixed timeline",
                                "Next 1–3 months",
                                "3–6 months",
                                "Not sure yet"
                            ].map(option => (
                                <label key={option} className="radio-item">
                                    <input
                                        type="radio"
                                        name="timeline"
                                        value={option}
                                        checked={formData.timeline === option}
                                        onChange={handleChange}
                                    />
                                    <span>{option}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Budget */}
                    <div className="form-group">
                        <label htmlFor="budget">Expected investment range (optional)</label>
                        <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Select an option...</option>
                            <option value="Under $15k">Under $15k</option>
                            <option value="$15k–$40k">$15k–$40k</option>
                            <option value="$40k–$75k">$40k–$75k</option>
                            <option value="$75k+">$75k+</option>
                            <option value="Not sure yet">Not sure yet</option>
                        </select>
                        <p className="input-hint">This helps us recommend the right engagement model.</p>
                    </div>

                    {/* Submit */}
                    <div className="pt-8">
                        <button type="submit" className="btn btn-primary w-full md:w-auto text-lg px-8 py-3">
                            Start the conversation
                        </button>
                        <p className="input-hint mt-3 text-center md:text-left">We typically respond within 1–2 business days.</p>
                    </div>

                    {/* Footer Micro-Trust */}
                    <p className="text-secondary text-sm text-center pt-8 border-t border-white/10">
                        No spam. No sales scripts. Just a thoughtful response.
                    </p>

                </form>
            </div>
        </section>
    )
}
