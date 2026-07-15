"use client";

import { ShieldAlert, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

interface NDABannerProps {
    theme?: "light" | "dark";
    className?: string;
}

export default function NDABanner({ theme = "light", className = "" }: NDABannerProps) {
    const isDark = theme === "dark";

    return (
        <div className={`p-6 rounded-2xl border transition-all flex flex-col md:flex-row md:items-center gap-5 justify-between ${
            isDark 
                ? "bg-slate-900/90 border-slate-800 text-white shadow-xl shadow-slate-950/20" 
                : "bg-slate-gray border-slate-200 text-authority-navy shadow-sm"
        } ${className}`}>
            <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl shrink-0 ${
                    isDark ? "bg-white/5 border border-white/10 text-electric-cyan" : "bg-white border border-slate-200 text-electric-cyan shadow-sm"
                }`}>
                    <Lock className="w-5 h-5 animate-pulse" />
                </div>
                <div className="space-y-1">
                    <div className={`text-[10px] font-mono font-black uppercase tracking-widest ${
                        isDark ? "text-electric-cyan" : "text-authority-navy/60"
                    }`}>
                        NDA & Simulation Notice
                    </div>
                    <p className={`text-xs font-light leading-relaxed max-w-3xl ${
                        isDark ? "text-white/80" : "text-authority-navy/85"
                    }`}>
                        This project was executed under a strict Non-Disclosure Agreement (NDA). 
                        The interactive panels and dashboard mockups shown below represent sanitized, 
                        functional wireframes designed to simulate the core system logic and information architecture 
                        without disclosing proprietary client data. <strong>High-fidelity UI designs and case files are available upon request.</strong>
                    </p>
                </div>
            </div>

            <Link 
                href="/start" 
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all shrink-0 flex items-center justify-center gap-1.5 ${
                    isDark 
                        ? "bg-white hover:bg-slate-200 text-slate-950 shadow-md" 
                        : "bg-slate-900 hover:bg-slate-800 text-white shadow-sm"
                }`}
            >
                Request Hi-Fi Access <ArrowRight className="w-3.5 h-3.5" />
            </Link>
        </div>
    );
}
