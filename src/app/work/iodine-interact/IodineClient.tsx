"use client";

import Navbar from "@/components/Navbar";
import NDABanner from "@/components/NDABanner";
import { motion, AnimatePresence } from "framer-motion";
import { 
    ArrowLeft, 
    ArrowRight, 
    CheckCircle2, 
    Smartphone, 
    Lock, 
    Eye, 
    Check, 
    Activity, 
    ListTodo, 
    Users, 
    Clock, 
    Bell, 
    RefreshCw, 
    TrendingUp, 
    ChevronRight, 
    FileText, 
    Calendar 
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Types for Simulator
interface ClinicalQuery {
    id: string;
    patientName: string;
    condition: string;
    urgency: "High" | "Medium" | "Low";
    specialistText: string;
    snippets: string[];
    options: string[];
}

export default function IodineClient() {
    // Simulator active states
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeSection, setActiveSection] = useState<"inbox" | "settings">("inbox");
    const [selectedQueryId, setSelectedQueryId] = useState<string | null>(null);
    const [responseRate, setResponseRate] = useState(88); // in percentage
    const [notificationBatch, setNotificationBatch] = useState<"daily" | "realtime">("daily");

    // Clinical queries list - Material Design style
    const [queries, setQueries] = useState<ClinicalQuery[]>([
        {
            id: "q-1",
            patientName: "Jessica Miller",
            condition: "Sepsis Validation",
            urgency: "High",
            specialistText: "Based on the elevated WBC count and temperature readings, please clarify if the clinical markers support a secondary diagnosis of Sepsis.",
            snippets: [
                "WBC Count: 14.5k (Elevated)",
                "Temperature: 101.8°F (Fever)",
                "Heart Rate: 112 bpm (Tachycardia)",
                "Clinical Notes: 'Patient presenting with signs of localized infection and systemic inflammatory markers...'"
            ],
            options: ["Yes, secondary Sepsis", "No, localized infection only", "Other / Consult needed"]
        },
        {
            id: "q-2",
            patientName: "David Miller",
            condition: "Acute Kidney Injury",
            urgency: "Medium",
            specialistText: "Please clarify if the sudden creatinine spike from 0.8 to 1.9 mg/dL within 24 hours matches clinical definitions of AKI.",
            snippets: [
                "Creatinine: 1.9 mg/dL (Spike from 0.8 baseline)",
                "Urine Output: < 0.5 mL/kg/h for 8 hours",
                "Clinical Notes: 'Prerenal azotemia secondary to severe dehydration...'"
            ],
            options: ["Yes, Stage 2 AKI", "No, transient prerenal state", "Needs Nephrology consult"]
        },
        {
            id: "q-3",
            patientName: "Amber Davis",
            condition: "Malnutrition Query",
            urgency: "Low",
            specialistText: "We noted a body mass index (BMI) of 17.2 and severe muscle wasting in charts. Please specify if mild or moderate protein-calorie malnutrition is diagnosed.",
            snippets: [
                "BMI: 17.2 (Underweight)",
                "Weight Loss: 8% body mass over 3 months",
                "Clinical Notes: 'Chronic dietary intake deficit. Temporal muscle wasting observed...'"
            ],
            options: ["Moderate Malnutrition", "Mild Malnutrition", "No malnutrition diagnosed"]
        }
    ]);

    // Phase schedule timeline Proto UX
    const phases = [
        { title: "Phase 1: UX Prep & UI", dur: "2 Weeks", desc: "Stakeholder interviews (3-5), physician discoveries, HIPAA mobile guidelines, user profile mapping." },
        { title: "Phase 2: Sprint 0 Onboarding", dur: "2 Weeks", desc: "Infrastructure setup, test-driven development (TDD) pipelines, and low-fidelity interactive wireframes." },
        { title: "Phase 3: Agile Delivery", dur: "10 Weeks", desc: "Backend storage coding, Material-based Vuetify frontend, weekly physician feedback logs, and sprint deployments (Sprints 1-5)." }
    ];

    // Personas slides
    const [activePersona, setActivePersona] = useState<"brent" | "sarah">("brent");

    const handleSelectQuery = (id: string) => {
        setSelectedQueryId(id);
    };

    const handleAnswerQuery = (id: string) => {
        // Remove from list and update metrics
        setQueries(prev => prev.filter(q => q.id !== id));
        setSelectedQueryId(null);
        setResponseRate(prev => Math.min(prev + 4, 100));
    };

    const activeQueryObj = queries.find(q => q.id === selectedQueryId);

    return (
        <main className="min-h-screen bg-white selection:bg-electric-cyan selection:text-authority-navy font-sans">
            <Navbar />

            <article className="pt-32 pb-24 lg:pt-48">
                <div className="container mx-auto px-6 max-w-5xl">

                    {/* Header */}
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
                            <span className="text-electric-cyan uppercase tracking-widest font-bold font-sans">Mobile Health Tech</span>
                            <span className="text-authority-navy/30">•</span>
                            <span className="text-authority-navy/60">Iodine Software (Interact)</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-authority-navy mb-8 leading-tight tracking-tight max-w-4xl">
                            Iodine Interact: 2-Minute Mobile Query Resolution Loops
                        </h1>

                        <p className="text-xl md:text-2xl text-authority-navy/80 font-light leading-relaxed mb-12 border-l-4 border-electric-cyan pl-6 max-w-3xl">
                            How we re-engineered clunky, desktop-locked EMR widgets into an intuitive Material-designed mobile satellite app that maximizes clinician query response rates.
                        </p>
                        <NDABanner theme="light" className="mb-12" />
                    </motion.div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
                        <div className="p-6 bg-slate-gray border border-slate-100 rounded-2xl">
                            <div className="text-[10px] font-semibold text-authority-navy/50 uppercase tracking-widest mb-1.5">Project Goal</div>
                            <div className="text-base font-bold text-authority-navy">Untether physicians from desktop EMR workstations.</div>
                        </div>
                        <div className="p-6 bg-slate-gray border border-slate-100 rounded-2xl">
                            <div className="text-[10px] font-semibold text-authority-navy/50 uppercase tracking-widest mb-1.5">Agile Lifecycle</div>
                            <div className="text-base font-bold text-authority-navy">14-week iterative schedule with weekly end-user tests.</div>
                        </div>
                        <div className="p-6 bg-slate-gray border border-slate-100 rounded-2xl">
                            <div className="text-[10px] font-semibold text-authority-navy/50 uppercase tracking-widest mb-1.5">UX Innovation</div>
                            <div className="text-base font-bold text-authority-navy">Embedded EMR note snippets for 1-touch answers.</div>
                        </div>
                        <div className="p-6 bg-slate-gray border border-slate-100 rounded-2xl">
                            <div className="text-[10px] font-semibold text-authority-navy/50 uppercase tracking-widest mb-1.5">Branding UI</div>
                            <div className="text-base font-bold text-authority-navy">Material Design with Vuetify.js frameworks.</div>
                        </div>
                    </div>

                    {/* Section 1: Project Background & Phasing */}
                    <section className="prose prose-lg max-w-none text-authority-navy/80 font-light leading-relaxed mb-24">
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mb-6">Physician-Facing Mobile satellite systems</h2>
                        <p>
                            Iodine Software provides sophisticated NLP and AI/ML tooling to help Clinical Documentation Improvement (CDI) specialists ensure electronic medical records (EMR) are accurate. A core component of this workflow is requesting clarification from physicians. 
                        </p>
                        <p>
                            Previously, physicians could only respond to these queries using desktop EMR widgets (Epic/Cerner Compasses) at their workstations. Because hospitalists and private clinicians are constantly on the move, queries remained pending for days, impacting reimbursement rates.
                        </p>
                        <p>
                            Under Proto UX’s phased approach, we re-architected this process into the **Iodine Interact Mobile App**. Rather than rushing a product out, we designed the mobile workflow over a 14-week cycle, iteratively validating requirements with practicing physicians.
                        </p>

                        <h3 className="text-2xl font-bold text-authority-navy mt-10 mb-4 font-heading">Proto UX Iterative Phasing Model</h3>
                        <div className="space-y-4 not-prose">
                            {phases.map((ph, idx) => (
                                <div key={idx} className="p-5 bg-slate-gray border border-slate-200 rounded-xl flex justify-between items-start gap-4 text-xs font-mono">
                                    <div className="shrink-0 bg-slate-900 text-white font-bold px-3 py-1.5 rounded uppercase tracking-wider text-[9px]">
                                        {ph.dur}
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-bold text-sm text-authority-navy font-heading mb-1">{ph.title}</div>
                                        <div className="text-slate-600 font-sans font-light leading-relaxed">{ph.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 2: Interactive Mobile Simulator */}
                    <section className="mb-28 p-6 md:p-10 bg-slate-gray border border-slate-200 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-3 bg-electric-cyan/20 border-b border-l border-electric-cyan/30 text-authority-navy font-mono text-xs font-bold rounded-bl-xl uppercase tracking-wider">
                            Interactive UX Lab
                        </div>
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mb-4">Iodine Interact Mobile Simulator</h2>
                        <p className="text-lg text-authority-navy/70 font-light mb-8 max-w-3xl">
                            Physicians wanted a simple, 2-minute loop to answer queries. Test the mobile simulator below: log in via Hospital SSO, inspect embedded EMR snippets, and respond with a single tap.
                        </p>

                        {/* iPhone Mockup wrapper */}
                        <div className="max-w-sm mx-auto bg-slate-950 border-[10px] border-slate-900 rounded-[42px] shadow-2xl overflow-hidden aspect-[9/18.5] flex flex-col justify-between text-white relative">
                            
                            {/* iPhone Camera Notch */}
                            <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
                                <div className="bg-slate-900 w-32 h-4 rounded-b-xl" />
                            </div>

                            {/* Main simulator screens */}
                            <div className="flex-1 bg-slate-900 p-4 pt-8 overflow-y-auto flex flex-col justify-between text-left">
                                <AnimatePresence mode="wait">

                                    {/* STATE 1: HOSPITAL SSO LOGIN */}
                                    {!isLoggedIn && (
                                        <motion.div
                                            key="login-screen"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="my-auto text-center space-y-6 px-4"
                                        >
                                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto border border-white/20">
                                                <Smartphone className="w-8 h-8 text-electric-cyan" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold font-heading text-white">Iodine Interact</h3>
                                                <p className="text-[10px] text-white/50 font-mono mt-1">Medical Provider Portal Login</p>
                                            </div>
                                            <div className="space-y-3 font-mono text-[10px]">
                                                <button 
                                                    onClick={() => setIsLoggedIn(true)}
                                                    className="w-full py-3 bg-white text-slate-950 font-bold rounded-xl transition-all hover:bg-slate-200"
                                                >
                                                    Login via Hospital SSO
                                                </button>
                                                <button 
                                                    onClick={() => setIsLoggedIn(true)}
                                                    className="w-full py-3 bg-white/5 border border-white/15 text-white font-bold rounded-xl transition-all hover:bg-white/10"
                                                >
                                                    Authenticate Face ID
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* STATE 2: INBOX FEED (LOGGED IN) */}
                                    {(isLoggedIn && !selectedQueryId && activeSection === "inbox") && (
                                        <motion.div
                                            key="inbox-screen"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="space-y-4 flex flex-col justify-between h-full"
                                        >
                                            <div className="space-y-4">
                                                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                                    <div>
                                                        <h3 className="text-xs font-bold uppercase tracking-wider text-white">Interact Inbox</h3>
                                                        <span className="text-[9px] text-white/40 font-mono">Cerner EMR Server Connected</span>
                                                    </div>
                                                    <span className="bg-white/10 border border-white/10 px-2 py-0.5 rounded-full text-[9px] text-electric-cyan font-bold font-mono">
                                                        {queries.length} Pending
                                                    </span>
                                                </div>

                                                {/* Bonus Tracker (Sarah's motivation factor) */}
                                                <div className="p-3 bg-white/5 border border-white/5 rounded-xl font-mono text-[9px] space-y-1.5 text-white/70">
                                                    <div className="flex justify-between text-white/40">
                                                        <span>Monthly Query Response Rate</span>
                                                        <span>{responseRate}%</span>
                                                    </div>
                                                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                                                        <div 
                                                            className="bg-emerald-400 h-full transition-all duration-500" 
                                                            style={{ width: `${responseRate}%` }}
                                                        />
                                                    </div>
                                                    <div className="flex justify-between items-center pt-1">
                                                        <span>Billing Bonus Threshold: 90%</span>
                                                        <span className={responseRate >= 90 ? "text-emerald-400 font-bold" : "text-amber-400"}>
                                                            {responseRate >= 90 ? "★ Bonus Eligible" : "Awaiting Actions"}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Queries items */}
                                                <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                                                    {queries.length === 0 ? (
                                                        <div className="p-4 text-center text-white/40 text-[10px] font-mono border border-dashed border-white/10 rounded-xl">
                                                            All CDI queries completed! Re-sync EMR to fetch new files.
                                                        </div>
                                                    ) : (
                                                        queries.map((q) => (
                                                            <div 
                                                                key={q.id}
                                                                onClick={() => handleSelectQuery(q.id)}
                                                                className="p-3 bg-white/5 border border-white/5 rounded-xl text-[10px] text-left font-mono cursor-pointer hover:bg-white/10 transition-colors flex justify-between items-center"
                                                            >
                                                                <div>
                                                                    <div className="font-bold text-white flex items-center gap-1">
                                                                        <div className={`w-1.5 h-1.5 rounded-full ${
                                                                            q.urgency === "High" ? "bg-rose-500" :
                                                                            q.urgency === "Medium" ? "bg-amber-400" : "bg-sky-400"
                                                                        }`} />
                                                                        {q.patientName}
                                                                    </div>
                                                                    <div className="text-[9px] text-white/40 mt-0.5">Condition: {q.condition}</div>
                                                                </div>
                                                                <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                                                            </div>
                                                        ))
                                                    )}
                                                </div>
                                            </div>

                                            {/* Bottom Nav Bar */}
                                            <div className="border-t border-white/5 pt-3 flex justify-around text-[9px] font-mono text-white/40">
                                                <button onClick={() => setActiveSection("inbox")} className="text-electric-cyan font-bold">Inbox</button>
                                                <button onClick={() => setActiveSection("settings")} className="hover:text-white">Batch Settings</button>
                                                <button onClick={() => setIsLoggedIn(false)} className="hover:text-white">SSO Log out</button>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* STATE 3: QUERY DETAILS & EMR EMBEDDED SNIPPETS */}
                                    {(isLoggedIn && selectedQueryId && activeQueryObj) && (
                                        <motion.div
                                            key="details-screen"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="space-y-4 text-left font-mono text-[9px] flex flex-col justify-between h-full"
                                        >
                                            <div className="space-y-3">
                                                <button 
                                                    onClick={() => setSelectedQueryId(null)}
                                                    className="text-white/50 hover:text-white flex items-center gap-1 font-bold mb-2 text-[8px] uppercase tracking-wider"
                                                >
                                                    ← Back to Inbox
                                                </button>

                                                <div className="border-b border-white/10 pb-2">
                                                    <div className="text-xs font-bold text-white">{activeQueryObj.patientName}</div>
                                                    <div className="text-[8px] text-white/40">Diagnosis: {activeQueryObj.condition}</div>
                                                </div>

                                                {/* EMR Embedded Snippets - Key Takeaway delight factor */}
                                                <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl space-y-1.5">
                                                    <div className="text-[8px] text-electric-cyan uppercase font-bold tracking-wider">Embedded EMR Snippets</div>
                                                    <div className="space-y-1 text-white/70 leading-relaxed text-[8px]">
                                                        {activeQueryObj.snippets.map((sn, idx) => (
                                                            <div key={idx} className="flex items-start gap-1">
                                                                <span className="text-electric-cyan">•</span>
                                                                <span>{sn}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="p-3 bg-slate-950 rounded-xl border border-white/5 text-white/80 leading-relaxed">
                                                    <strong>CDI Clarification Query:</strong> {activeQueryObj.specialistText}
                                                </div>
                                            </div>

                                            {/* Response buttons checklist */}
                                            <div className="space-y-2 mt-4">
                                                <div className="text-[8px] text-white/40 uppercase tracking-wider mb-1">Select Response:</div>
                                                {activeQueryObj.options.map((opt) => (
                                                    <button 
                                                        key={opt}
                                                        onClick={() => handleAnswerQuery(activeQueryObj.id)}
                                                        className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-center shadow-md transition-colors"
                                                    >
                                                        {opt}
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* STATE 4: NOTIFICATION SETTINGS (BRENT BATCH vs REALTIME) */}
                                    {(isLoggedIn && activeSection === "settings") && (
                                        <motion.div
                                            key="settings-screen"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="space-y-6 flex flex-col justify-between h-full"
                                        >
                                            <div className="space-y-4">
                                                <div className="border-b border-white/10 pb-2 text-left">
                                                    <h3 className="text-xs font-bold uppercase tracking-wider text-white">Batch Config</h3>
                                                    <span className="text-[9px] text-white/40 font-mono">Notification Delivery Preferences</span>
                                                </div>

                                                <div className="space-y-4 text-left font-mono text-[10px]">
                                                    <label className="block font-bold text-white/80">Notification Mode</label>
                                                    <div className="space-y-2.5">
                                                        <label className="flex items-start gap-3 p-3 bg-white/5 border border-white/5 rounded-xl cursor-pointer">
                                                            <input 
                                                                type="radio" 
                                                                name="batch" 
                                                                checked={notificationBatch === "daily"}
                                                                onChange={() => setNotificationBatch("daily")}
                                                                className="accent-electric-cyan mt-1"
                                                            />
                                                            <div>
                                                                <span className="font-bold text-white">Batched Daily Push</span>
                                                                <p className="text-[8px] text-white/40 mt-1 leading-relaxed">
                                                                    Consolidates all active CDI query alerts into a single push notification at 2:00 PM. Preferred to prevent physician interruption.
                                                                </p>
                                                            </div>
                                                        </label>

                                                        <label className="flex items-start gap-3 p-3 bg-white/5 border border-white/5 rounded-xl cursor-pointer">
                                                            <input 
                                                                type="radio" 
                                                                name="batch" 
                                                                checked={notificationBatch === "realtime"}
                                                                onChange={() => setNotificationBatch("realtime")}
                                                                className="accent-electric-cyan mt-1"
                                                            />
                                                            <div>
                                                                <span className="font-bold text-white">Real-Time Alerts</span>
                                                                <p className="text-[8px] text-white/40 mt-1 leading-relaxed">
                                                                    Sends instant mobile push alerts as soon as CDI specialists request clarification. Suitable for active shifts.
                                                                </p>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Bottom Nav Bar */}
                                            <div className="border-t border-white/5 pt-3 flex justify-around text-[9px] font-mono text-white/40">
                                                <button onClick={() => setActiveSection("inbox")} className="hover:text-white">Inbox</button>
                                                <button onClick={() => setActiveSection("settings")} className="text-electric-cyan font-bold">Batch Settings</button>
                                                <button onClick={() => setIsLoggedIn(false)} className="hover:text-white">SSO Log out</button>
                                            </div>
                                        </motion.div>
                                    )}

                                </AnimatePresence>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: User Profiles */}
                    <section className="mb-24">
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mb-8 font-heading">The Target User Profiles</h2>
                        <p className="text-lg text-authority-navy/70 font-light mb-8 max-w-3xl">
                            We mapped physician needs based on user discoverings, settling on two primary customer segments.
                        </p>

                        {/* Profile slide toggles */}
                        <div className="flex border-b border-slate-200 mb-8 font-heading font-bold text-lg">
                            <button 
                                onClick={() => setActivePersona("brent")}
                                className={`pb-4 px-6 border-b-2 transition-all ${
                                    activePersona === "brent" ? "border-electric-cyan text-authority-navy" : "border-transparent text-authority-navy/40 hover:text-authority-navy/80"
                                }`}
                            >
                                Brent (Hospitalist)
                            </button>
                            <button 
                                onClick={() => setActivePersona("sarah")}
                                className={`pb-4 px-6 border-b-2 transition-all ${
                                    activePersona === "sarah" ? "border-transparent text-authority-navy/40 hover:text-authority-navy/80 border-b-2 border-transparent" : ""
                                }`}
                                style={{
                                    borderBottomColor: activePersona === "sarah" ? "#00E5FF" : "transparent",
                                    color: activePersona === "sarah" ? "#001F3F" : "rgba(0,31,63,0.4)"
                                }}
                            >
                                Sarah (Private Clinician)
                            </button>
                        </div>

                        {/* Slide content rendering */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activePersona}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.3 }}
                                className="bg-slate-gray p-8 rounded-3xl border border-slate-200 grid grid-cols-1 lg:grid-cols-3 gap-8 text-left"
                            >
                                {activePersona === "brent" && (
                                    <>
                                        <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-slate-300/40 pb-6 lg:pb-0 lg:pr-6">
                                            <div className="text-sm font-mono text-emerald-600 font-bold mb-2">PRIMARY USER PROFILE</div>
                                            <h3 className="text-2xl font-bold font-heading text-authority-navy mb-1">Brent, 31</h3>
                                            <p className="text-xs text-authority-navy/60 font-light mb-4">Austin, TX • Internal Medicine Hospitalist</p>
                                            <blockquote className="text-sm italic text-authority-navy/70 border-l-2 border-emerald-500 pl-4 mb-6 leading-relaxed">
                                                "I'm comfortable using my phone for work. I already use messaging, database lookup, and EMR apps provided by the hospital."
                                            </blockquote>
                                            <div className="text-xs font-mono text-authority-navy/60 space-y-1.5">
                                                <div><strong>Setup:</strong> iPad Pro, iPhone X, work laptop</div>
                                                <div><strong>Tech Comfort:</strong> High ( Netflix, Reddit, Snapchat)</div>
                                            </div>
                                        </div>
                                        <div className="lg:col-span-2 space-y-6 text-xs text-authority-navy/80 font-light">
                                            <div>
                                                <h4 className="font-bold text-sm text-authority-navy uppercase tracking-wider mb-2">Behaviors & Motivations</h4>
                                                <p className="leading-relaxed">
                                                    Brent is swipe-badge authenticated on work desktops. Documenting charts and writing notes consumes most of his day. Because seconds add up when switching EMR tabs, he values system velocity.
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm text-authority-navy uppercase tracking-wider mb-2">Needs & Goals</h4>
                                                <p className="leading-relaxed">
                                                    Needs to resolve queries within 24 hours without administrative drag. Prefers a single batched notification per day rather than constant, real-time alerts.
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm text-authority-navy uppercase tracking-wider mb-2">Delight Parameters</h4>
                                                <p className="leading-relaxed">
                                                    Biometric Face ID authentication, fast response time, and ensuring he doesn't receive queries regarding previous doctor handoffs for the patient.
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {activePersona === "sarah" && (
                                    <>
                                        <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-slate-300/40 pb-6 lg:pb-0 lg:pr-6">
                                            <div className="text-sm font-mono text-emerald-600 font-bold mb-2">PRIMARY USER PROFILE</div>
                                            <h3 className="text-2xl font-bold font-heading text-authority-navy mb-1">Sarah, 49</h3>
                                            <p className="text-xs text-authority-navy/60 font-light mb-4">Dallas, TX • Family Physician (Private Clinic)</p>
                                            <blockquote className="text-sm italic text-authority-navy/70 border-l-2 border-emerald-500 pl-4 mb-6 leading-relaxed">
                                                "I don't want to open my computer during off-weeks. However, I want to resolve queries quickly to protect my billing bonuses."
                                            </blockquote>
                                            <div className="text-xs font-mono text-authority-navy/60 space-y-1.5">
                                                <div><strong>Setup:</strong> Surface laptop, Samsung Galaxy</div>
                                                <div><strong>Tech Comfort:</strong> Average (Medscape mobile daily)</div>
                                            </div>
                                        </div>
                                        <div className="lg:col-span-2 space-y-6 text-xs text-authority-navy/80 font-light">
                                            <div>
                                                <h4 className="font-bold text-sm text-authority-navy uppercase tracking-wider mb-2">Behaviors & Motivations</h4>
                                                <p className="leading-relaxed">
                                                    Sarah has no trouble responding to queries on a computer during her work week. However, during her off-weeks (7 days on / 7 days off), she is highly resistant to booting up her work laptop.
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm text-authority-navy uppercase tracking-wider mb-2">Needs & Goals</h4>
                                                <p className="leading-relaxed">
                                                    Wants to resolve queries without launching Epic or Cerner EMR. Seeks a simple way to respond from notifications without managing or editing resolved queries on her phone.
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm text-authority-navy uppercase tracking-wider mb-2">Delight Parameters</h4>
                                                <p className="leading-relaxed">
                                                    Well-constructed queries containing embedded snippets so she doesn't have to look up the EMR patient file, permitting one-touch button selections.
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </section>

                    {/* Section 4: Design Takeaways */}
                    <section className="prose prose-lg max-w-none text-authority-navy/80 font-light leading-relaxed mb-24">
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mb-6">Key Design Takeaways</h2>
                        <p>
                            Through physician and stakeholder discoveries, we isolated several key design axioms that guided the Iodine Interact Mobile architecture:
                        </p>
                        <ul>
                            <li><strong>The Chart Lookup Paradox:</strong> Physicians resist answering queries on mobile if they have to navigate EMR charts. By pulling and embedding geocoded **EMR clinical snippets** directly within the query body, 90% of queries can be answered with a simple single touch.</li>
                            <li><strong>Batched Notification Flow:</strong> Rather than buzzes for every query, the system batches alerts once a day (in the afternoon before patient rounds), respecting doctor focus.</li>
                            <li><strong>Off-Week Engagement:</strong> Securing the hospitalist's off-week meant making query resolution as frictionless as replying to a text message, directly linking performance to billing bonus allocations.</li>
                        </ul>
                    </section>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-20 pt-12 border-t border-authority-navy/10"
                    >
                        <div className="bg-slate-gray p-10 rounded-2xl w-full text-center">
                            <h3 className="font-bold text-2xl font-heading text-authority-navy mb-4">Let’s Talk About Your Mobile System</h3>
                            <p className="text-authority-navy/70 mb-8 max-w-2xl mx-auto">
                                If you are looking to design complex medical interfaces, touch-optimized mobile satellite apps, or data-driven clinical workspaces, let's talk.
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
