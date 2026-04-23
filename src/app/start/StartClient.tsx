"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Mail, MapPin, CheckCircle2, ArrowRight, CheckCircle } from "lucide-react";

export default function StartClient() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const myForm = e.currentTarget;
        const formData = new FormData(myForm);
        const data = new URLSearchParams();

        // 1. Manually add the form-name so Netlify knows which form this is
        data.append("form-name", "start-form");

        // 2. Append all other fields
        for (const pair of formData.entries()) {
            data.append(pair[0], pair[1] as string);
        }

        // 3. Post to the static HTML file we created
        fetch("/__forms.html", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: data.toString(),
        })
            .then(() => setIsSubmitted(true))
            .catch((error) => alert(error))
            .finally(() => setIsLoading(false));
    };

    return (
        <main className="min-h-screen bg-slate-gray selection:bg-electric-cyan selection:text-authority-navy font-sans">
            <Navbar />

            <div className="container mx-auto px-6 py-32 lg:py-48 min-h-screen flex items-center justify-center">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start w-full max-w-7xl">

                    {/* Left Column: Context */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:sticky lg:top-32"
                    >
                        {/* Availability Badge */}
                        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-8 border border-slate-100">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-bold uppercase tracking-wide text-authority-navy/70">
                                Accepting partners for Q1 2026
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold font-heading text-authority-navy mb-6 leading-tight">
                            Initiate Protocol.
                        </h1>
                        <p className="text-xl md:text-2xl text-authority-navy/80 font-light mb-12 leading-relaxed">
                            Ready to build with rigor? Tell us about the logic challenge you are facing.
                        </p>

                        <div className="space-y-8 border-t border-authority-navy/10 pt-8">
                            <div className="flex items-start gap-4">
                                <Mail className="w-6 h-6 text-authority-navy shrink-0 mt-1" />
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-wide text-authority-navy/60 mb-1">Prefer Email?</p>
                                    <a href="mailto:young@protoux.com" className="text-xl font-medium text-authority-navy hover:text-electric-cyan transition-colors">young@protoux.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-authority-navy shrink-0 mt-1" />
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-wide text-authority-navy/60 mb-1">HQ Location</p>
                                    <p className="text-xl font-medium text-authority-navy">Austin, TX</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <h3 className="text-lg font-bold font-heading text-authority-navy mb-4">What Happens Next</h3>
                            <ul className="space-y-3">
                                {["Review within 24 hours", "30-min Logic Discovery Call", "Proposal & Strategic Roadmap"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-authority-navy/80">
                                        <CheckCircle2 className="w-5 h-5 text-electric-cyan" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right Column: Intake Form Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-white"
                    >
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-24"
                            >
                                <div className="w-20 h-20 bg-electric-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-10 h-10 text-electric-cyan" />
                                </div>
                                <h3 className="text-3xl font-bold font-heading text-authority-navy mb-4">Protocol Initiated.</h3>
                                <p className="text-authority-navy/70 text-lg max-w-md mx-auto mb-8">
                                    Your brief has been secured. Our team will analyze your logic challenge and respond within 24 hours.
                                </p>
                                <button
                                    onClick={() => window.location.href = '/'}
                                    className="px-8 py-3 border-2 border-authority-navy text-authority-navy font-bold rounded-lg hover:bg-authority-navy hover:text-white transition-colors"
                                >
                                    Return to HQ
                                </button>
                            </motion.div>
                        ) : (
                            <form
                                data-netlify="true"
                                name="start-form"
                                method="POST"
                                className="space-y-8"
                                onSubmit={handleSubmit}
                            >
                                <input type="hidden" name="form-name" value="start-form" />
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-bold uppercase tracking-wide text-authority-navy/70">Name</label>
                                        <input required type="text" id="name" name="name" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan outline-none transition-all text-authority-navy placeholder:text-slate-400" placeholder="Jane Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-bold uppercase tracking-wide text-authority-navy/70">Work Email</label>
                                        <input required type="email" id="email" name="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan outline-none transition-all text-authority-navy placeholder:text-slate-400" placeholder="jane@company.com" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="org" className="text-sm font-bold uppercase tracking-wide text-authority-navy/70">Organization / URL</label>
                                    <input required type="text" id="org" name="org" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan outline-none transition-all text-authority-navy placeholder:text-slate-400" placeholder="Acme Corp / acme.com" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="model" className="text-sm font-bold uppercase tracking-wide text-authority-navy/70">Engagement Model</label>
                                    <div className="relative">
                                        <select id="model" name="model" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan outline-none transition-all text-authority-navy appearance-none cursor-pointer">
                                            <option value="" disabled selected>Select an option...</option>
                                            <option value="project">Project-Based Engagement</option>
                                            <option value="fractional">Fractional Design Partnership</option>
                                            <option value="other">Other / Custom</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-authority-navy/50">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="challenge" className="text-sm font-bold uppercase tracking-wide text-authority-navy/70">The Logic Challenge</label>
                                    <textarea required id="challenge" name="challenge" rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan outline-none transition-all text-authority-navy placeholder:text-slate-400 resize-none" placeholder="Describe the problem, constraints, or goals..."></textarea>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="timeline" className="text-sm font-bold uppercase tracking-wide text-authority-navy/70">Timeline</label>
                                    <input type="text" id="timeline" name="timeline" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan outline-none transition-all text-authority-navy placeholder:text-slate-400" placeholder="When do you need to ship?" />
                                </div>

                                <button type="submit" disabled={isLoading} className="w-full py-4 bg-electric-cyan text-authority-navy font-bold text-lg rounded-full shadow-lg shadow-electric-cyan/20 hover:shadow-electric-cyan/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed">
                                    {isLoading ? "Submitting..." : "Submit Brief"}
                                    {!isLoading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                                </button>
                            </form>
                        )}
                    </motion.div>

                </div>
            </div>
        </main>
    );
}
