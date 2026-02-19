"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, TrendingUp } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center bg-white overflow-hidden pt-20"> {/* pt-20 to offset fixed navbar */}
            {/* Background Grid Pattern - Very light, clean blueprint grid */}
            <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#001F3F_1px,transparent_1px),linear-gradient(to_bottom,#001F3F_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Side: Copy */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-white z-10"
                >
                    <div className="inline-block text-sm font-mono font-bold text-electric-cyan mb-6 tracking-widest uppercase">
                        EST. 2016 | AUSTIN, TX
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-authority-navy leading-[1.1] mb-6">
                        Evidence-based product design.{" "}
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-authority-navy to-electric-cyan">
                            Engineered for production.
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-authority-navy/80 mb-8 max-w-lg font-light leading-relaxed">
                        We reduce risk, validate decisions, and design scalable Agentic Systems. Adapting continuously as technology evolves.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/capabilities"
                            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-authority-navy bg-white border-2 border-authority-navy rounded-full hover:bg-authority-navy hover:text-white transition-all duration-300"
                        >
                            Explore Capabilities
                        </Link>
                        <Link
                            href="/start"
                            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-authority-navy bg-electric-cyan rounded-full shadow-lg shadow-electric-cyan/25 hover:shadow-electric-cyan/50 hover:-translate-y-1 transition-all duration-300"
                        >
                            Start Conversation
                        </Link>
                    </div>
                </motion.div>

                {/* Right Side: Glass Stack Visual */}
                <div className="relative h-[500px] w-full flex items-center justify-center perspective-1000">
                    <div className="absolute inset-0 bg-gradient-radial from-slate-gray/50 to-transparent blur-3xl opacity-50 scale-75" />

                    <motion.div
                        initial={{ opacity: 0, y: 50, rotateX: 20, rotateY: -20 }}
                        animate={{ opacity: 1, y: 0, rotateX: 10, rotateY: -10 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                        className="relative w-80 h-80 md:w-96 md:h-96 transform-style-3d group cursor-pointer"
                    >
                        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-electric-cyan/20 border border-white/50 backdrop-blur-sm z-10">
                            <Image
                                src="/images/hero-abstract.png"
                                alt="Abstract Logic Architecture"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-electric-cyan/10 to-transparent mix-blend-overlay" />
                        </div>

                        {/* Floating Card 1: Logic Status (Top Right) */}
                        <motion.div
                            initial={{ opacity: 0, x: 20, y: -20 }}
                            animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
                            transition={{
                                opacity: { duration: 0.8, delay: 0.5 },
                                x: { duration: 0.8, delay: 0.5 },
                                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                            }}
                            className="absolute -top-12 -right-8 md:-right-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-white z-20 flex items-center gap-3"
                        >
                            <div className="bg-electric-cyan/10 p-2 rounded-full">
                                <ShieldCheck className="w-5 h-5 text-electric-cyan" />
                            </div>
                            <div>
                                <div className="text-[10px] font-bold uppercase tracking-wider text-authority-navy/40">Status</div>
                                <div className="text-sm font-bold text-authority-navy">Logic Validated</div>
                            </div>
                        </motion.div>

                        {/* Floating Card 2: Velocity Metric (Bottom Left) */}
                        <motion.div
                            initial={{ opacity: 0, x: -20, y: 20 }}
                            animate={{ opacity: 1, x: 0, y: [0, -12, 0] }}
                            transition={{
                                opacity: { duration: 0.8, delay: 0.7 },
                                x: { duration: 0.8, delay: 0.7 },
                                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }
                            }}
                            className="absolute -bottom-12 -left-8 md:-left-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-white z-20 flex items-center gap-3"
                        >
                            <div className="bg-electric-cyan/10 p-2 rounded-full">
                                <TrendingUp className="w-5 h-5 text-electric-cyan" />
                            </div>
                            <div>
                                <div className="text-[10px] font-bold uppercase tracking-wider text-authority-navy/40">Velocity</div>
                                <div className="text-sm font-bold text-authority-navy">+40% Efficiency</div>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
