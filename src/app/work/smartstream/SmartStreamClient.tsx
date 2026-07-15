"use client";

import Navbar from "@/components/Navbar";
import NDABanner from "@/components/NDABanner";
import { motion, AnimatePresence } from "framer-motion";
import { 
    ArrowLeft, 
    ArrowRight, 
    CheckCircle2, 
    Bot, 
    Layers, 
    Activity, 
    Zap, 
    Users, 
    Cpu, 
    Database, 
    Play, 
    RefreshCw, 
    AlertTriangle, 
    Check, 
    Eye 
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Definitions for the Timeline visualizer
interface DropItem {
    id: string;
    name: string;
    duration: string; // e.g. "12h"
    status: "completed" | "in-progress" | "ghost" | "blocked";
    lane: "API" | "Frontend" | "Testing";
    shiftDays: number; // visual offset factor
}

export default function SmartStreamClient() {
    // Interactive Timeline Simulator State
    const [timelineDrops, setTimelineDrops] = useState<DropItem[]>([
        { id: "1", name: "Auth Architecture", duration: "12h", status: "completed", lane: "API", shiftDays: 0 },
        { id: "2", name: "Database Migrations", duration: "8h", status: "completed", lane: "API", shiftDays: 0 },
        { id: "3", name: "JWT Token Engine", duration: "16h", status: "blocked", lane: "API", shiftDays: 0 },
        { id: "4", name: "Client SDK Auth Integration", duration: "24h", status: "ghost", lane: "Frontend", shiftDays: 0 },
        { id: "5", name: "End-to-End User Flows", duration: "20h", status: "ghost", lane: "Testing", shiftDays: 0 },
    ]);

    const [selectedDropId, setSelectedDropId] = useState<string | null>("3");
    const [simulationMessage, setSimulationMessage] = useState<string>(
        "JWT Token Engine is currently BLOCKED. The AI Agent forecasts an downstream ripple affecting the Client SDK and E2E User Flows."
    );
    const [rippleOffset, setRippleOffset] = useState<number>(120); // in pixels for the ripple shift

    // Switch between personas
    const [activePersona, setActivePersona] = useState<"pilot" | "specialist" | "controller">("pilot");

    // Oracle Chat State for The Pilot View
    const [oracleQuery, setOracleQuery] = useState("");
    const [oracleAnswer, setOracleAnswer] = useState<string | null>(null);
    const [isOracleAnalyzing, setIsOracleAnalyzing] = useState(false);

    // Timeline control: Complete or Block
    const handleDropAction = (id: string, action: "complete" | "block" | "reset") => {
        setTimelineDrops(prev => prev.map(drop => {
            if (drop.id === id) {
                if (action === "complete") {
                    return { ...drop, status: "completed", shiftDays: 0 };
                } else if (action === "block") {
                    return { ...drop, status: "blocked" };
                } else {
                    return { ...drop, status: "ghost" };
                }
            }
            return drop;
        }));

        if (action === "complete" && id === "3") {
            setRippleOffset(0);
            setSimulationMessage(
                "JWT Token Engine resolved! The dependency ripple collapses. The 'Now Line' advances, and future Ghost Drops realign."
            );
        } else if (action === "block" && id === "3") {
            setRippleOffset(120);
            setSimulationMessage(
                "JWT Token Engine blocked. AI shifts Client SDK and Testing right by 18 hours. Rationale Note generated."
            );
        } else if (action === "reset") {
            setRippleOffset(60);
            setSimulationMessage(
                "Timeline reset to default forecast logic. AI is monitoring active drop velocity."
            );
        }
    };

    const handleOracleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!oracleQuery.trim()) return;

        setIsOracleAnalyzing(true);
        setOracleAnswer(null);

        setTimeout(() => {
            const queryLower = oracleQuery.toLowerCase();
            setIsOracleAnalyzing(false);
            if (queryLower.includes("developer") || queryLower.includes("person") || queryLower.includes("roster")) {
                setOracleAnswer("Oracle Analysis: Reassigning Dev B to API Stream covers the Node.js skill bottleneck. JWT Token Engine resolves 8h earlier; ripples left by 6h. Est. token cost adjustment: +1.2%.");
            } else if (queryLower.includes("delay") || queryLower.includes("block") || queryLower.includes("shift")) {
                setOracleAnswer("Oracle Analysis: A 2-day delay on the SDK will shift E2E testing past the Friday sprint threshold, pushing final release to Monday. Recommend spinning up automated QA container.");
            } else {
                setOracleAnswer("Oracle Analysis: Modeling scenario. Adding auxiliary developer shifts timeline left by 12 hours. Risk index drops by 14%. Infancy check complete.");
            }
        }, 1200);
    };

    return (
        <main className="min-h-screen bg-white selection:bg-electric-cyan selection:text-authority-navy font-sans">
            <Navbar />

            <article className="pt-32 pb-24 lg:pt-48">
                <div className="container mx-auto px-6 max-w-5xl">

                    {/* 1. Header & Vision */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <Link href="/work" className="inline-flex items-center text-sm font-bold text-authority-navy/60 hover:text-electric-cyan transition-colors mb-8">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Work
                        </Link>

                        <div className="flex items-center gap-4 mb-6 text-sm font-mono">
                            <span className="text-electric-cyan uppercase tracking-widest font-bold font-sans">AI & Project Systems</span>
                            <span className="text-authority-navy/30">•</span>
                            <span className="text-authority-navy/60">SmartStream Case Study</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-authority-navy mb-8 leading-tight tracking-tight max-w-4xl">
                            Translating AI-Driven Continuous Flow into a Project Execution Engine
                        </h1>

                        <p className="text-xl md:text-2xl text-authority-navy/80 font-light leading-relaxed mb-12 border-l-4 border-electric-cyan pl-6 max-w-3xl">
                            Moving beyond digital cabinets like Jira or Asana, we designed a zero-friction engine focused on velocity, predictive scheduling, and explainable AI adjustments.
                        </p>
                        <NDABanner theme="light" className="mb-12" />
                    </motion.div>

                    {/* 2. Project Metrics Summary */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                        <div className="p-8 bg-slate-gray border border-slate-100 rounded-2xl">
                            <div className="text-xs font-semibold text-authority-navy/50 uppercase tracking-widest mb-2">UX Objective</div>
                            <div className="text-lg font-bold text-authority-navy leading-snug">Zero administrative overhead with continuous velocity forecasting.</div>
                        </div>
                        <div className="p-8 bg-slate-gray border border-slate-100 rounded-2xl">
                            <div className="text-xs font-semibold text-authority-navy/50 uppercase tracking-widest mb-2">AI-CFM Methodology</div>
                            <div className="text-lg font-bold text-authority-navy leading-snug">48–72h automated predictive timeline shifting based on developer velocity.</div>
                        </div>
                        <div className="p-8 bg-slate-gray border border-slate-100 rounded-2xl">
                            <div className="text-xs font-semibold text-authority-navy/50 uppercase tracking-widest mb-2">The Interface Metaphor</div>
                            <div className="text-lg font-bold text-authority-navy leading-snug">Horizontal flow lanes replacing rigid boards with reactive feedback loops.</div>
                        </div>
                    </div>

                    {/* 3. Executive Summary */}
                    <section className="prose prose-lg max-w-none text-authority-navy/80 font-light leading-relaxed mb-24">
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mb-6">Executive Summary: The "Continuous Flow" Vision</h2>
                        <p>
                            Traditional project management systems act as static records—digital filing cabinets where developers manually move cards and update statuses. This manual administrative tax wastes hours and degrades data accuracy. 
                        </p>
                        <p>
                            <strong>SmartStream</strong> is designed to move beyond this static constraint. It operates as a <strong>Dynamic Engine</strong>, implementing our proprietary AI-Driven Continuous Flow Methodology (AI-CFM). The system automatically tracks active workloads, consumes technical documentation, models future resource pipelines, and handles scheduling math. Humans focus on creative output and engineering, while the AI manages operational coordination.
                        </p>
                    </section>

                    {/* 4. Core UI Metaphors (The Glossary) */}
                    <section className="mb-24">
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mb-8">Core UI Metaphors: Speaking the Same Language</h2>
                        <p className="text-lg text-authority-navy/70 font-light mb-8">
                            To bridge the gap between engineering workflow and user interface, we defined four visual metaphors that ground the SmartStream design system.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    icon: <Layers className="w-6 h-6 text-electric-cyan" />,
                                    term: "The Stream",
                                    ui: "The Blueprint",
                                    desc: "A vertical, hierarchical view of project requirements, architectural documentation, and functional specs that the AI parses to generate work."
                                },
                                {
                                    icon: <Zap className="w-6 h-6 text-electric-cyan" />,
                                    term: "The Drop",
                                    ui: "The Pixel",
                                    desc: "The atomic, irreducible unit of work. Every drop has clear boundaries, active dependencies, and is managed without administrative bloat."
                                },
                                {
                                    icon: <Activity className="w-6 h-6 text-electric-cyan" />,
                                    term: "The Flow",
                                    ui: "The Pulse",
                                    desc: "The horizontal, multi-lane timeline visualizing real-time team movement. Lanes slide dynamically rather than operating as rigid columns."
                                },
                                {
                                    icon: <Bot className="w-6 h-6 text-electric-cyan" />,
                                    term: "The Agent",
                                    ui: "The Partner",
                                    desc: "A persistent AI assistant that runs background schedules, calculates velocity anomalies, and supports predictive 'What-if' modeling."
                                }
                            ].map((metaphor, i) => (
                                <motion.div 
                                    key={i} 
                                    whileHover={{ y: -4 }}
                                    className="p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 transition-all flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="mb-6 bg-white/5 w-12 h-12 flex items-center justify-center rounded-xl border border-white/10">
                                            {metaphor.icon}
                                        </div>
                                        <h3 className="text-xl font-bold font-heading mb-1 text-white">{metaphor.term}</h3>
                                        <div className="text-xs uppercase font-mono text-electric-cyan tracking-widest mb-4 font-semibold">{metaphor.ui}</div>
                                        <p className="text-sm text-white/70 font-light leading-relaxed">{metaphor.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* 5. Interactive Innovation Lab */}
                    <section className="mb-28 p-8 md:p-12 bg-slate-gray border border-slate-200 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-3 bg-electric-cyan/20 border-b border-l border-electric-cyan/30 text-authority-navy font-mono text-xs font-bold rounded-bl-xl uppercase tracking-wider">
                            Interactive UX Lab
                        </div>
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mb-4">Innovation 1: The "Now Line" & The Dependency Ripple</h2>
                        <p className="text-lg text-authority-navy/70 font-light mb-8 max-w-3xl">
                            How do we represent project shifts visually? Rather than static card dragging, the timeline uses a vertical <strong>Now Line</strong>. Solid cards represent completed history, while semi-transparent <strong>Ghost Drops</strong> represent the AI's predictive path for the next 48–72 hours.
                        </p>

                        {/* Interactive Timeline Box */}
                        <div className="bg-white rounded-2xl p-6 border border-slate-300/60 shadow-lg mb-8">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-4 mb-6">
                                <div>
                                    <div className="text-sm font-semibold text-authority-navy uppercase tracking-wider">Pulse Flow Timeline</div>
                                    <div className="text-xs text-authority-navy/50 font-mono mt-0.5">Continuous Flow Mode • Real-Time Update</div>
                                </div>
                                <div className="flex gap-2">
                                    <button 
                                        onClick={() => handleDropAction("3", "complete")}
                                        className="flex items-center gap-1.5 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-xs font-bold shadow-md transition-colors"
                                    >
                                        <Check className="w-3.5 h-3.5" /> 1-Click Resolve Drop
                                    </button>
                                    <button 
                                        onClick={() => handleDropAction("3", "block")}
                                        className="flex items-center gap-1.5 px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-lg text-xs font-bold shadow-md transition-colors"
                                    >
                                        <AlertTriangle className="w-3.5 h-3.5" /> 1-Click Block Drop
                                    </button>
                                    <button 
                                        onClick={() => handleDropAction("3", "reset")}
                                        className="flex items-center gap-1 px-2.5 py-2 bg-slate-200 hover:bg-slate-300 text-authority-navy rounded-lg text-xs font-medium transition-colors"
                                        title="Reset simulation"
                                    >
                                        <RefreshCw className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>

                            {/* Timeline lanes */}
                            <div className="relative border-l-2 border-dashed border-electric-cyan py-6 pl-4 md:pl-8 space-y-6">
                                {/* Vertical NOW Line Indicator */}
                                <div className="absolute top-0 left-0 -translate-x-[50%] h-full flex flex-col items-center">
                                    <div className="px-2 py-0.5 bg-electric-cyan text-authority-navy font-mono text-[9px] font-bold uppercase rounded tracking-wider shadow">
                                        NOW
                                    </div>
                                </div>

                                {/* Lanes */}
                                {["API", "Frontend", "Testing"].map((laneName) => {
                                    const laneDrops = timelineDrops.filter(d => d.lane === laneName);
                                    return (
                                        <div key={laneName} className="flex flex-col md:flex-row md:items-center gap-3">
                                            <div className="w-20 shrink-0 font-mono text-xs font-bold text-authority-navy/60">{laneName}</div>
                                            <div className="flex flex-wrap md:flex-nowrap gap-4 items-center w-full">
                                                {laneDrops.map((drop) => {
                                                    // Determine styles based on state
                                                    const isCompleted = drop.status === "completed";
                                                    const isBlocked = drop.status === "blocked";
                                                    const isGhost = drop.status === "ghost";

                                                    // Calculate ripple offset translation
                                                    const applyRipple = isGhost && rippleOffset > 0;

                                                    return (
                                                        <motion.div
                                                            key={drop.id}
                                                            layoutId={`drop-${drop.id}`}
                                                            animate={{
                                                                x: applyRipple ? rippleOffset : 0,
                                                                opacity: isGhost ? (applyRipple ? 0.35 : 0.6) : 1
                                                            }}
                                                            transition={{ type: "spring", stiffness: 90, damping: 15 }}
                                                            onClick={() => setSelectedDropId(drop.id)}
                                                            className={`p-4 rounded-xl border text-left cursor-pointer transition-all w-full md:w-56 shrink-0 relative overflow-hidden select-none ${
                                                                selectedDropId === drop.id 
                                                                    ? "ring-2 ring-electric-cyan shadow-lg shadow-electric-cyan/15" 
                                                                    : "shadow-sm"
                                                            } ${
                                                                isCompleted 
                                                                    ? "bg-slate-900 text-white border-slate-950" 
                                                                    : isBlocked 
                                                                    ? "bg-rose-50 border-rose-200 text-rose-950"
                                                                    : "bg-cyan-50/40 border-dashed border-cyan-300 text-authority-navy"
                                                            }`}
                                                        >
                                                            {/* Drop visual states */}
                                                            <div className="flex justify-between items-start mb-2">
                                                                <span className="text-[10px] font-mono font-semibold opacity-60">
                                                                    Drop #{drop.id}
                                                                </span>
                                                                <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider bg-white/20">
                                                                    {drop.duration}
                                                                </span>
                                                            </div>
                                                            <div className="font-bold text-sm tracking-tight mb-2 truncate">
                                                                {drop.name}
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <div className={`w-2 h-2 rounded-full ${
                                                                    isCompleted 
                                                                        ? "bg-emerald-400" 
                                                                        : isBlocked 
                                                                        ? "bg-rose-500 animate-pulse" 
                                                                        : "bg-cyan-400 opacity-60"
                                                                }`} />
                                                                <span className="text-[10px] font-medium capitalize opacity-70">
                                                                    {drop.status}
                                                                </span>
                                                            </div>
                                                        </motion.div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Rationale / Feedback Log */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 p-5 bg-white border border-slate-300/50 rounded-2xl">
                                <div className="flex items-center gap-2 mb-3 text-xs font-mono font-bold text-authority-navy/60">
                                    <Bot className="w-4 h-4 text-electric-cyan" />
                                    <span>AI EXPLAINABLE SHIFT ENGINE</span>
                                </div>
                                <div className="text-sm font-light text-authority-navy/80 leading-relaxed min-h-[48px]">
                                    {simulationMessage}
                                </div>
                                {rippleOffset > 0 && (
                                    <div className="mt-4 p-3 bg-amber-50 border border-amber-200 text-amber-900 text-xs rounded-lg flex items-start gap-2.5">
                                        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                                        <div>
                                            <strong>Explainable AI Rationale:</strong> Shifted timeline based on Developer C’s historical Node.js velocity metrics showing a minor task overlap. Recommended shift +1.5 days.
                                        </div>
                                    </div>
                                )}
                            </div>
                            
                            <div className="p-5 bg-slate-900 text-white rounded-2xl flex flex-col justify-between">
                                <div>
                                    <h4 className="text-xs uppercase font-mono text-electric-cyan font-bold tracking-wider mb-2">Zero-Friction Principle</h4>
                                    <p className="text-xs text-white/70 font-light leading-relaxed">
                                        In Continuous Flow, updating task status is 1-click. A developer clicks "Resolve" or "Block," and the AI immediately calculates scheduling logic. No forms, no metadata logs, no ticket shifting.
                                    </p>
                                </div>
                                <div className="mt-4 text-[10px] text-white/40 font-mono">
                                    Active Simulation: Ripple Factor = {rippleOffset > 0 ? "True (+1.5d)" : "Collapsed (0d)"}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 6. Persona-Based Experiences */}
                    <section className="mb-24">
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mb-4">Innovation 2: Persona-Based Experiences</h2>
                        <p className="text-lg text-authority-navy/70 font-light mb-8 max-w-3xl">
                            Different stakeholders require completely different cognitive lenses. We designed three targeted layouts that dynamically re-configure the underlying project engine.
                        </p>

                        {/* Persona Tabs */}
                        <div className="flex border-b border-slate-200 mb-8 overflow-x-auto whitespace-nowrap">
                            {[
                                { id: "pilot", label: "The Pilot (Project Manager)", desc: "High-level strategy and 'What-if' modeling." },
                                { id: "specialist", label: "The Specialist (Developer)", desc: "Focus-oriented Deep Work view." },
                                { id: "controller", label: "The Controller (Org Owner)", desc: "SaaS health metrics & cloud costs." }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActivePersona(tab.id as any)}
                                    className={`py-4 px-6 font-heading font-bold text-lg border-b-2 transition-all relative outline-none ${
                                        activePersona === tab.id 
                                            ? "border-electric-cyan text-authority-navy" 
                                            : "border-transparent text-authority-navy/40 hover:text-authority-navy/80"
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content Display */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activePersona}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl"
                            >
                                {activePersona === "pilot" && (
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                        <div className="lg:col-span-2">
                                            <h3 className="text-2xl font-bold font-heading mb-4 text-electric-cyan">The Pilot View</h3>
                                            <p className="text-white/80 text-base font-light leading-relaxed mb-6">
                                                Designed for high-level monitoring, this view visualizes the entire multi-lane "Pulse Flow" and immediately alerts the PM to scheduling bottlenecks. The defining tool here is the <strong>"Oracle Sidebar"</strong>: a cognitive laboratory for "What-if" scenario planning.
                                            </p>
                                            
                                            {/* Flow wireframe simulation */}
                                            <div className="p-4 bg-slate-950/60 rounded-xl border border-white/5 space-y-3 font-mono text-[10px] text-white/50 mb-6">
                                                <div className="text-[9px] uppercase tracking-wider text-electric-cyan font-bold mb-2">Live Timeline View (Pilot)</div>
                                                <div className="flex gap-2 items-center">
                                                    <span className="w-10">Lane A:</span>
                                                    <span className="px-2 py-1 bg-white/10 rounded w-24 text-white">Security Specs</span>
                                                    <span className="px-2 py-1 bg-white/5 rounded w-32 border border-dashed border-white/10 text-white/30">API Deployment (Forecast)</span>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <span className="w-10">Lane B:</span>
                                                    <span className="px-2 py-1 bg-white/10 rounded w-16 text-white">Database init</span>
                                                    <span className="px-2 py-1 bg-rose-500/20 text-rose-300 rounded border border-rose-500/40 w-24">Token Block</span>
                                                    <span className="px-2 py-1 bg-white/5 rounded w-16 text-white/30">Review</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Oracle Sidebar mock */}
                                        <div className="p-6 bg-slate-950 rounded-2xl border border-white/10 flex flex-col justify-between">
                                            <div>
                                                <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold text-electric-cyan uppercase">
                                                    <Bot className="w-4 h-4" />
                                                    <span>The Oracle Sidebar</span>
                                                </div>
                                                <p className="text-xs text-white/60 font-light leading-relaxed mb-4">
                                                    Input hypothetical structural changes to preview timeline impacts before executing.
                                                </p>
                                                
                                                <form onSubmit={handleOracleSubmit} className="space-y-3">
                                                    <input 
                                                        type="text"
                                                        value={oracleQuery}
                                                        onChange={(e) => setOracleQuery(e.target.value)}
                                                        placeholder="e.g., Reassign Dev B to API stream"
                                                        className="w-full bg-slate-900 border border-white/10 rounded-lg p-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-electric-cyan"
                                                    />
                                                    <button 
                                                        type="submit"
                                                        className="w-full py-2 bg-electric-cyan text-authority-navy text-xs font-bold rounded-lg transition-transform hover:scale-[1.02]"
                                                    >
                                                        Run Scenario Model
                                                    </button>
                                                </form>

                                                {/* Simulated response */}
                                                <div className="mt-4">
                                                    {isOracleAnalyzing && (
                                                        <div className="text-xs text-white/40 font-mono animate-pulse flex items-center gap-1.5">
                                                            <RefreshCw className="w-3 h-3 animate-spin" /> Modeling downstream dependencies...
                                                        </div>
                                                    )}
                                                    {oracleAnswer && (
                                                        <motion.div 
                                                            initial={{ opacity: 0 }} 
                                                            animate={{ opacity: 1 }} 
                                                            className="text-xs bg-white/5 p-3 rounded-lg border border-white/10 text-white/80 font-mono"
                                                        >
                                                            {oracleAnswer}
                                                        </motion.div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="text-[10px] text-white/30 font-mono mt-4">
                                                Scenario Mode: Sandbox Active
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activePersona === "specialist" && (
                                    <div className="max-w-2xl mx-auto text-center">
                                        <h3 className="text-2xl font-bold font-heading mb-4 text-electric-cyan">The Specialist View</h3>
                                        <p className="text-white/80 text-base font-light leading-relaxed mb-8">
                                            For developers, administrative overload is toxic. The Specialist view cuts away all lists, sidebars, charts, and metrics. It provides a focused "Deep Work" hub containing only their active <strong>Drop</strong>, immediate dependencies, and a 1-click status reporting mechanism.
                                        </p>
                                        
                                        {/* Specialist card mockup */}
                                        <div className="p-8 bg-slate-950 border border-white/10 rounded-2xl text-left max-w-lg mx-auto">
                                            <div className="flex justify-between items-center mb-6">
                                                <div className="text-[10px] font-mono uppercase bg-white/5 px-2.5 py-1 rounded text-white/60">
                                                    Current Active Drop
                                                </div>
                                                <div className="text-xs text-electric-cyan font-mono font-bold">
                                                    Deep Work Mode
                                                </div>
                                            </div>
                                            
                                            <h4 className="text-xl font-bold font-heading mb-2 text-white">
                                                Implement Auth JWT Verification Route
                                            </h4>
                                            <p className="text-sm text-white/70 font-light mb-6">
                                                Setup route endpoints, encrypt JWT payloads, and establish header validation parameters.
                                            </p>

                                            <div className="p-4 bg-white/5 border border-white/5 rounded-xl mb-6">
                                                <div className="text-[10px] font-mono uppercase text-white/40 mb-1">
                                                    Downstream Blocked Dependency
                                                </div>
                                                <div className="text-xs font-semibold text-white/80 flex items-center gap-1.5">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                                    Client SDK Integration (Awaiting JWT endpoints)
                                                </div>
                                            </div>

                                            <div className="flex gap-3">
                                                <button className="flex-1 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5">
                                                    <Check className="w-4 h-4" /> 1-Click Resolve & Ship
                                                </button>
                                                <button className="flex-1 py-3 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5">
                                                    <AlertTriangle className="w-4 h-4" /> Flag Blocked
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activePersona === "controller" && (
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                        <div className="lg:col-span-2">
                                            <h3 className="text-2xl font-bold font-heading mb-4 text-electric-cyan">The Controller View</h3>
                                            <p className="text-white/80 text-base font-light leading-relaxed mb-6">
                                                Org Owners and operational executives care about system-wide metrics: infrastructure stability, project health at scale, and financial overhead (tokens and API costs). The Controller dashboard aggregates cloud indicators to monitor SaaS efficiency.
                                            </p>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="p-4 bg-slate-950 border border-white/5 rounded-xl text-left">
                                                    <div className="text-[10px] font-mono text-white/40 uppercase mb-1">Cumulative Cloud Cost</div>
                                                    <div className="text-2xl font-bold text-white font-heading">$148.24 <span className="text-xs font-mono font-light text-emerald-400">-4.2%</span></div>
                                                </div>
                                                <div className="p-4 bg-slate-950 border border-white/5 rounded-xl text-left">
                                                    <div className="text-[10px] font-mono text-white/40 uppercase mb-1">Total Token Usage</div>
                                                    <div className="text-2xl font-bold text-white font-heading">1.2M <span className="text-xs font-mono font-light text-white/40">/ 2.5M Limit</span></div>
                                                </div>
                                                <div className="p-4 bg-slate-950 border border-white/5 rounded-xl text-left">
                                                    <div className="text-[10px] font-mono text-white/40 uppercase mb-1">Active AI Streams</div>
                                                    <div className="text-2xl font-bold text-white font-heading">8 <span className="text-xs font-mono font-light text-electric-cyan">Engines</span></div>
                                                </div>
                                                <div className="p-4 bg-slate-950 border border-white/5 rounded-xl text-left">
                                                    <div className="text-[10px] font-mono text-white/40 uppercase mb-1">Engine Health Index</div>
                                                    <div className="text-2xl font-bold text-white font-heading">99.8% <span className="text-xs font-mono font-light text-emerald-400">Optimal</span></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-6 bg-slate-950 rounded-2xl border border-white/10 flex flex-col justify-between">
                                            <div>
                                                <div className="text-xs font-mono font-bold text-electric-cyan uppercase mb-4">
                                                    Token Spend Heatmap
                                                </div>
                                                
                                                {/* Mini graph widget */}
                                                <div className="space-y-3 font-mono text-[9px]">
                                                    <div className="flex justify-between items-center text-white/40">
                                                        <span>Project Alpha</span>
                                                        <span>422k tokens</span>
                                                    </div>
                                                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                                        <div className="bg-electric-cyan h-full w-[70%]" />
                                                    </div>
                                                    
                                                    <div className="flex justify-between items-center text-white/40">
                                                        <span>SmartStream</span>
                                                        <span>612k tokens</span>
                                                    </div>
                                                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                                        <div className="bg-electric-cyan h-full w-[85%]" />
                                                    </div>

                                                    <div className="flex justify-between items-center text-white/40">
                                                        <span>Legacy Ingestion</span>
                                                        <span>170k tokens</span>
                                                    </div>
                                                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                                        <div className="bg-white/30 h-full w-[25%]" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="text-[10px] text-white/30 font-mono mt-6">
                                                Infra billing auto-caps enabled
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </section>

                    {/* 7. Information Architecture */}
                    <section className="mb-24">
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mb-6">Information Architecture: The Four Pillars</h2>
                        <p className="text-lg text-authority-navy/70 font-light mb-8 max-w-3xl">
                            The MVP dashboard architecture is organized around four core structural spaces designed to isolate distinct cognitive workflows.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 bg-slate-gray border border-slate-200 rounded-2xl flex gap-6">
                                <div className="bg-white/80 p-3 rounded-xl border border-slate-300/40 w-12 h-12 flex items-center justify-center shrink-0 shadow-sm text-authority-navy">
                                    <Activity className="w-6 h-6 text-electric-cyan" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-heading text-authority-navy mb-2">PULSE (Home)</h3>
                                    <p className="text-sm font-light text-authority-navy/70 leading-relaxed">
                                        The live horizontal "Flow" timeline. It functions as the central operating room dashboard, rendering project schedules, team tasks, and predictive delays in real-time.
                                    </p>
                                </div>
                            </div>

                            <div className="p-8 bg-slate-gray border border-slate-200 rounded-2xl flex gap-6">
                                <div className="bg-white/80 p-3 rounded-xl border border-slate-300/40 w-12 h-12 flex items-center justify-center shrink-0 shadow-sm text-authority-navy">
                                    <Database className="w-6 h-6 text-electric-cyan" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-heading text-authority-navy mb-2">STREAMS (Library)</h3>
                                    <p className="text-sm font-light text-authority-navy/70 leading-relaxed">
                                        The ingestion and specs library. Users drop documents, PRDs, or system diagrams here. The "Project Oracle" parses this documentation to break it down into clean Streams and individual Drops.
                                    </p>
                                </div>
                            </div>

                            <div className="p-8 bg-slate-gray border border-slate-200 rounded-2xl flex gap-6">
                                <div className="bg-white/80 p-3 rounded-xl border border-slate-300/40 w-12 h-12 flex items-center justify-center shrink-0 shadow-sm text-authority-navy">
                                    <Users className="w-6 h-6 text-electric-cyan" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-heading text-authority-navy mb-2">ROSTER (People)</h3>
                                    <p className="text-sm font-light text-authority-navy/70 leading-relaxed">
                                        The resource optimization space. Tracks individual developer capabilities, historical velocities across node/react stacks, and generates intelligent pairing suggestions.
                                    </p>
                                </div>
                            </div>

                            <div className="p-8 bg-slate-gray border border-slate-200 rounded-2xl flex gap-6">
                                <div className="bg-white/80 p-3 rounded-xl border border-slate-300/40 w-12 h-12 flex items-center justify-center shrink-0 shadow-sm text-authority-navy">
                                    <Cpu className="w-6 h-6 text-electric-cyan" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-heading text-authority-navy mb-2">OPERATIONS (Admin)</h3>
                                    <p className="text-sm font-light text-authority-navy/70 leading-relaxed">
                                        The commercial health dashboard. Tracks SaaS billing units, API keys, token spend limits, and provides administration overrides for scalability.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr className="border-authority-navy/10 my-16" />

                    {/* 8. UX Insights Outcomes */}
                    <section className="prose prose-lg max-w-none text-authority-navy/80 font-light leading-relaxed mb-24">
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mb-6">The Outcome (Designing Harmony)</h2>
                        <p>
                            By aligning the user interface around physical metaphors—fluid streams and ripples—rather than static spreadsheets, we created a dashboard that developers and managers *enjoyed* leaving open on a second monitor. 
                        </p>
                        <p>
                            Removing the friction of "status reporting" meant database updates were instant. Having an explainable "Why" for schedule shifts meant team members never felt micromanaged by an algorithm. The result is a project management tool that acts not as a manager's surveillance camera, but as a team's co-pilot.
                        </p>
                    </section>

                    {/* CTA Footer Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-20 pt-12 border-t border-authority-navy/10"
                    >
                        <div className="bg-slate-gray p-10 rounded-2xl w-full text-center">
                            <h3 className="font-bold text-2xl font-heading text-authority-navy mb-4">Let’s Talk About Your Project</h3>
                            <p className="text-authority-navy/70 mb-8 max-w-2xl mx-auto">
                                If you are looking to translate complex logic, intelligence engines, or data orchestration systems into zero-friction user experiences, let's talk.
                            </p>
                            <Link
                                href="/start"
                                className="inline-flex items-center px-8 py-3.5 text-base font-bold text-authority-navy bg-electric-cyan rounded-full shadow-lg shadow-electric-cyan/20 hover:shadow-electric-cyan/40 hover:-translate-y-1 transition-all duration-300"
                            >
                                Start Conversation <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </article>
        </main>
    );
}
