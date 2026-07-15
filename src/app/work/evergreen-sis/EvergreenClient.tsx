"use client";

import Navbar from "@/components/Navbar";
import NDABanner from "@/components/NDABanner";
import { motion, AnimatePresence } from "framer-motion";
import { 
    ArrowLeft, 
    ArrowRight, 
    CheckCircle2, 
    User, 
    Clock, 
    FileText, 
    TrendingUp, 
    Users, 
    Sliders, 
    AlertTriangle, 
    Check, 
    RefreshCw, 
    ShieldAlert, 
    Eye, 
    Search, 
    Activity, 
    Calendar 
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Types for SIS Simulator
interface StudentRecord {
    name: string;
    campus: string;
    hoursLogged: number;
    hoursTotal: number;
    attendanceRate: number;
    atRisk: boolean;
    balance: number;
    faStatus: "Awarded" | "Pending Verification" | "Action Required";
    interventionLogged: boolean;
}

export default function EvergreenClient() {
    // Interactive Student Data State
    const [students, setStudents] = useState<StudentRecord[]>([
        { name: "Jessica Miller", campus: "Bellingham", hoursLogged: 620, hoursTotal: 1600, attendanceRate: 76.5, atRisk: true, balance: 1200, faStatus: "Action Required", interventionLogged: false },
        { name: "Amber Davis", campus: "Everett", hoursLogged: 1540, hoursTotal: 1600, attendanceRate: 94.2, atRisk: false, balance: 0, faStatus: "Awarded", interventionLogged: false },
        { name: "Taylor Swift", campus: "Everett", hoursLogged: 890, hoursTotal: 1600, attendanceRate: 88.0, atRisk: false, balance: 450, faStatus: "Awarded", interventionLogged: false },
        { name: "Selena Gomez", campus: "Bellingham", hoursLogged: 1105, hoursTotal: 1600, attendanceRate: 79.1, atRisk: true, balance: 2100, faStatus: "Pending Verification", interventionLogged: false },
        { name: "Jessica Chen", campus: "Everett", hoursLogged: 420, hoursTotal: 1600, attendanceRate: 98.5, atRisk: false, balance: 0, faStatus: "Awarded", interventionLogged: false },
    ]);

    // Active persona selections
    const [selectedPersona, setSelectedPersona] = useState<"kara" | "sarah" | "theresa" | "lauren">("kara");
    
    // Interactive states
    // Kara - Impersonation
    const [impersonatingUser, setImpersonatingUser] = useState<string>("None");
    
    // Sarah - Student Lookup Search
    const [studentSearch, setStudentSearch] = useState("");
    const [selectedStudentName, setSelectedStudentName] = useState("Jessica Miller");
    const [uploadSlipStatus, setUploadSlipStatus] = useState<"idle" | "uploading" | "done">("idle");
    const [slipsCount, setSlipsCount] = useState(3);
    
    // Theresa - Finance migration validation
    const [migrationCheckStatus, setMigrationCheckStatus] = useState<"idle" | "testing" | "success">("idle");
    const [migrationProgress, setMigrationProgress] = useState(0);

    // Lauren - Faculty schedule re-adjustment
    const [instructorShiftMsg, setInstructorShiftMsg] = useState("Shift student schedule adjustments to update faculty workloads.");
    const [facultyAssignments, setFacultyAssignments] = useState({
        "Cosmetology Lab A": "Mr. Adams",
        "Esthetics Theory": "Ms. Jenkins",
        "Nail Technology Clinic": "Mrs. Clark"
    });

    const triggerIntervention = (studentName: string) => {
        setStudents(prev => prev.map(s => s.name === studentName ? { ...s, interventionLogged: true, atRisk: false } : s));
    };

    const handleImpersonation = (user: string) => {
        setImpersonatingUser(user);
    };

    const runMigrationAudit = () => {
        setMigrationCheckStatus("testing");
        setMigrationProgress(0);
        const interval = setInterval(() => {
            setMigrationProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setMigrationCheckStatus("success");
                    return 100;
                }
                return prev + 20;
            });
        }, 300);
    };

    const handleFacultyReassignment = (course: string, instructor: string) => {
        setFacultyAssignments(prev => ({ ...prev, [course]: instructor }));
        setInstructorShiftMsg(`Faculty assigned: ${instructor} successfully re-allocated to ${course} course stream.`);
    };

    // Filter students for Sarah's search
    const filteredStudents = students.filter(s => 
        s.name.toLowerCase().includes(studentSearch.toLowerCase())
    );

    const activeStudentDetails = students.find(s => s.name === selectedStudentName) || students[0];

    const handleUploadSlip = () => {
        setUploadSlipStatus("uploading");
        setTimeout(() => {
            setUploadSlipStatus("done");
            setSlipsCount(prev => prev + 1);
            setStudents(prev => prev.map(s => s.name === selectedStudentName ? { ...s, hoursLogged: Math.min(s.hoursLogged + 8, s.hoursTotal) } : s));
            setTimeout(() => setUploadSlipStatus("idle"), 1500);
        }, 1200);
    };

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
                            <span className="text-electric-cyan uppercase tracking-widest font-bold font-sans">Student Information Systems</span>
                            <span className="text-authority-navy/30">•</span>
                            <span className="text-authority-navy/60">Evergreen Beauty College</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-authority-navy mb-8 leading-tight tracking-tight max-w-4xl">
                            Re-engineering educational compliance and financial aid packaging
                        </h1>

                        <p className="text-xl md:text-2xl text-authority-navy/80 font-light leading-relaxed mb-12 border-l-4 border-electric-cyan pl-6 max-w-3xl">
                            How we designed a clock-hour Student Information System (SIS) that empowers compliance officers, account managers, and executives to navigate federal regulations with care.
                        </p>
                        <NDABanner theme="light" className="mb-12" />
                    </motion.div>

                    {/* Metrics Block */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                        <div className="p-8 bg-slate-gray border border-slate-100 rounded-2xl">
                            <div className="text-xs font-semibold text-authority-navy/50 uppercase tracking-widest mb-2">The System Model</div>
                            <div className="text-lg font-bold text-authority-navy leading-snug">Clock-Hour based student tracking (not standard credits).</div>
                        </div>
                        <div className="p-8 bg-slate-gray border border-slate-100 rounded-2xl">
                            <div className="text-xs font-semibold text-authority-navy/50 uppercase tracking-widest mb-2">Federal Compliance</div>
                            <div className="text-lg font-bold text-authority-navy leading-snug">Continuous audit preparation and state regulation alignments.</div>
                        </div>
                        <div className="p-8 bg-slate-gray border border-slate-100 rounded-2xl">
                            <div className="text-xs font-semibold text-authority-navy/50 uppercase tracking-widest mb-2">Core UX Objective</div>
                            <div className="text-lg font-bold text-authority-navy leading-snug">Role impersonation and early-warning warning risk indices.</div>
                        </div>
                    </div>

                    {/* Section 1: Background & The Compliance Dilemma */}
                    <section className="prose prose-lg max-w-none text-authority-navy/80 font-light leading-relaxed mb-24">
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mb-6 font-heading">The Clock-Hour Compliance Challenge</h2>
                        <p>
                            Vocational beauty colleges operate under a unique regulatory framework. Unlike traditional universities that measure academic progress in credits, institutions like **Evergreen Beauty College** track progress in **clock hours**—every physical minute a student spends in the classroom or clinic counts toward federal funding and licensing.
                        </p>
                        <p>
                            This requirement means that student records must be kept in perfect alignment with state clock-hour mandates. Financial aid disbursement (Title IV), billing balances, and graduation audits depend on accurate clock-hour ledgers. 
                        </p>
                        <p>
                            During collaborative workspace mappings, the Proto UX team identified the need to re-architect EBC's Student Information System (SIS) to center directly around four primary administrative user profiles. By modeling the system around these stakeholders, we translated regulatory compliance into proactive student care.
                        </p>
                    </section>

                    {/* Section 2: User Profiles Switcher & Matrix */}
                    <section className="mb-24">
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mb-8">The Four Key User Profiles</h2>
                        <p className="text-lg text-authority-navy/70 font-light mb-8 max-w-3xl">
                            Select a profile card below to review their background, key responsibilities, and technical requirements.
                        </p>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                            {[
                                { id: "kara", label: "Kara", role: "Compliance Director" },
                                { id: "sarah", label: "Sarah", role: "Accounts Lead" },
                                { id: "theresa", label: "Theresa", role: "VP of Finance" },
                                { id: "lauren", label: "Lauren", role: "VP of Operations" }
                            ].map((prof) => (
                                <button
                                    key={prof.id}
                                    onClick={() => setSelectedPersona(prof.id as any)}
                                    className={`p-5 rounded-xl border text-left transition-all ${
                                        selectedPersona === prof.id
                                            ? "border-emerald-500 bg-emerald-50/20 text-authority-navy font-bold shadow-md"
                                            : "border-slate-200 bg-white text-authority-navy/55 hover:bg-slate-50"
                                    }`}
                                >
                                    <div className="font-heading text-lg">{prof.label}</div>
                                    <div className="text-[10px] uppercase font-mono tracking-wider opacity-80 mt-1">{prof.role}</div>
                                </button>
                            ))}
                        </div>

                        {/* Profile Details Card */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedPersona}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.3 }}
                                className="bg-slate-gray p-8 rounded-3xl border border-slate-200 grid grid-cols-1 lg:grid-cols-3 gap-8"
                            >
                                {selectedPersona === "kara" && (
                                    <>
                                        <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-slate-300/40 pb-6 lg:pb-0 lg:pr-6">
                                            <div className="text-sm font-mono text-emerald-600 font-bold mb-2">PERSONA BIOGRAPHY</div>
                                            <h3 className="text-2xl font-bold font-heading text-authority-navy mb-1">Kara, 42</h3>
                                            <p className="text-xs text-authority-navy/60 font-light mb-4">Bellingham, WA • Compliance & Financial Aid Director</p>
                                            <blockquote className="text-sm italic text-authority-navy/70 border-l-2 border-emerald-500 pl-4 mb-6 leading-relaxed">
                                                "I want to transform compliance into care by navigating the intricacies of financial aid to foster student success."
                                            </blockquote>
                                            <div className="text-xs font-mono text-authority-navy/60 space-y-1.5">
                                                <div><strong>Setup:</strong> Laptop with Dual Monitors</div>
                                                <div><strong>Experience:</strong> 15 years educational admin</div>
                                                <div><strong>Software:</strong> MS Office, financial portals</div>
                                            </div>
                                        </div>
                                        <div className="lg:col-span-2 space-y-6">
                                            <div>
                                                <h4 className="font-bold text-sm text-authority-navy uppercase tracking-wider mb-2">Key Responsibilities</h4>
                                                <ul className="text-xs text-authority-navy/80 font-light space-y-2 list-disc pl-5">
                                                    <li>Oversee student clock-hour compliance records across all campuses.</li>
                                                    <li>Generate and review weekly reports to identify at-risk students.</li>
                                                    <li>Manage document repositories for state clock-hour audits.</li>
                                                    <li>Supervise Bellingham and Everett student accounts specialists.</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm text-authority-navy uppercase tracking-wider mb-2">UX Alignment (How to Delight)</h4>
                                                <ul className="text-xs text-authority-navy/80 font-light space-y-2 list-disc pl-5">
                                                    <li><strong>Role Impersonation:</strong> Ability to act on behalf of specialists to troubleshoot ledgers.</li>
                                                    <li><strong>Real-time warnings:</strong> Automated flagging of Title IV funding delays.</li>
                                                    <li><strong>Early Warnings:</strong> Risk metrics indicating attendance slips.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {selectedPersona === "sarah" && (
                                    <>
                                        <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-slate-300/40 pb-6 lg:pb-0 lg:pr-6">
                                            <div className="text-sm font-mono text-emerald-600 font-bold mb-2">PERSONA BIOGRAPHY</div>
                                            <h3 className="text-2xl font-bold font-heading text-authority-navy mb-1">Sarah, 31</h3>
                                            <p className="text-xs text-authority-navy/60 font-light mb-4">Everett, WA • Student Accounts Specialist Lead</p>
                                            <blockquote className="text-sm italic text-authority-navy/70 border-l-2 border-emerald-500 pl-4 mb-6 leading-relaxed">
                                                "I want to navigate the details of financial aid with integrity to ensure seamless services at our campus."
                                            </blockquote>
                                            <div className="text-xs font-mono text-authority-navy/60 space-y-1.5">
                                                <div><strong>Setup:</strong> Windows Workstation, Adobe Foxit</div>
                                                <div><strong>Experience:</strong> 10 years record-keeping</div>
                                                <div><strong>Campus Focus:</strong> Everett Campus Students</div>
                                            </div>
                                        </div>
                                        <div className="lg:col-span-2 space-y-6">
                                            <div>
                                                <h4 className="font-bold text-sm text-authority-navy uppercase tracking-wider mb-2">Key Responsibilities</h4>
                                                <ul className="text-xs text-authority-navy/80 font-light space-y-2 list-disc pl-5">
                                                    <li>Post payments and update ledger sheets for Everett students.</li>
                                                    <li>Ingest and convert clock-hour slips into the digital system database.</li>
                                                    <li>Provide transcripts and tax documents directly to alumni.</li>
                                                    <li>Conduct face-to-face student ledger review sessions.</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm text-authority-navy uppercase tracking-wider mb-2">UX Alignment (How to Delight)</h4>
                                                <ul className="text-xs text-authority-navy/80 font-light space-y-2 list-disc pl-5">
                                                    <li><strong>High-Speed Lookup:</strong> Quick search input to pull records in front of a student.</li>
                                                    <li><strong>Fewer Clicks:</strong> Shortcuts to post payments, import data logs, and verify package codes.</li>
                                                    <li><strong>Proactive Warnings:</strong> Direct warnings when attendance drops or balances mismatch.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {selectedPersona === "theresa" && (
                                    <>
                                        <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-slate-300/40 pb-6 lg:pb-0 lg:pr-6">
                                            <div className="text-sm font-mono text-emerald-600 font-bold mb-2">PERSONA BIOGRAPHY</div>
                                            <h3 className="text-2xl font-bold font-heading text-authority-navy mb-1">Theresa, 45</h3>
                                            <p className="text-xs text-authority-navy/60 font-light mb-4">Seattle, WA • VP of Finance</p>
                                            <blockquote className="text-sm italic text-authority-navy/70 border-l-2 border-emerald-500 pl-4 mb-6 leading-relaxed">
                                                "I want to ensure fiscal integrity and institutional stability through data-driven financial stewardship."
                                            </blockquote>
                                            <div className="text-xs font-mono text-authority-navy/60 space-y-1.5">
                                                <div><strong>Setup:</strong> Laptop with Dual Monitors</div>
                                                <div><strong>Experience:</strong> 20+ years finance management</div>
                                                <div><strong>Software:</strong> Quickbooks, institutional banking</div>
                                            </div>
                                        </div>
                                        <div className="lg:col-span-2 space-y-6">
                                            <div>
                                                <h4 className="font-bold text-sm text-authority-navy uppercase tracking-wider mb-2">Key Responsibilities</h4>
                                                <ul className="text-xs text-authority-navy/80 font-light space-y-2 list-disc pl-5">
                                                    <li>Establish budget structures and allocate resources across EBC programs.</li>
                                                    <li>Ensure compliance with legal and post-secondary educational laws.</li>
                                                    <li>Manage institutional risk, and audit student balance ledgers.</li>
                                                    <li>Oversee the database migration from legacy SIS systems to the new platform.</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm text-authority-navy uppercase tracking-wider mb-2">UX Alignment (How to Delight)</h4>
                                                <ul className="text-xs text-authority-navy/80 font-light space-y-2 list-disc pl-5">
                                                    <li><strong>Reconciliation Dashboard:</strong> Direct visual tracking of banks, disbursements, and ledgers.</li>
                                                    <li><strong>Migration Checkers:</strong> Tooling to run database imports and audit matching records instantly.</li>
                                                    <li><strong>Budget Threshold Alerts:</strong> Proactive highlights for credit adjustments.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {selectedPersona === "lauren" && (
                                    <>
                                        <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-slate-300/40 pb-6 lg:pb-0 lg:pr-6">
                                            <div className="text-sm font-mono text-emerald-600 font-bold mb-2">PERSONA BIOGRAPHY</div>
                                            <h3 className="text-2xl font-bold font-heading text-authority-navy mb-1">Lauren, 40</h3>
                                            <p className="text-xs text-authority-navy/60 font-light mb-4">Mount Vernon, WA • VP of Operations</p>
                                            <blockquote className="text-sm italic text-authority-navy/70 border-l-2 border-emerald-500 pl-4 mb-6 leading-relaxed">
                                                "I want to shape the future of beauty education with data-driven operational insights and schedules."
                                            </blockquote>
                                            <div className="text-xs font-mono text-authority-navy/60 space-y-1.5">
                                                <div><strong>Setup:</strong> Laptop, Android phone</div>
                                                <div><strong>Experience:</strong> Cosmo instructor to college VP</div>
                                                <div><strong>Software:</strong> Salon managers, EBC databases</div>
                                            </div>
                                        </div>
                                        <div className="lg:col-span-2 space-y-6">
                                            <div>
                                                <h4 className="font-bold text-sm text-authority-navy uppercase tracking-wider mb-2">Key Responsibilities</h4>
                                                <ul className="text-xs text-authority-navy/80 font-light space-y-2 list-disc pl-5">
                                                    <li>Maintain academic standards and student retention goals cross-campuses.</li>
                                                    <li>Investigate root causes of academic struggles based on lab progress.</li>
                                                    <li>Adjust faculty schedule assignments when student timetables fluctuate.</li>
                                                    <li>Coordinate report generation for academic compliance.</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm text-authority-navy uppercase tracking-wider mb-2">UX Alignment (How to Delight)</h4>
                                                <ul className="text-xs text-authority-navy/80 font-light space-y-2 list-disc pl-5">
                                                    <li><strong>Academic Risk Scores:</strong> Visual indicators aggregating clock-hour averages and grades.</li>
                                                    <li><strong>Dynamic Rescheduling Widgets:</strong> Drag-and-drop faculty assignment controls to balance workloads.</li>
                                                    <li><strong>Visualization tools:</strong> Interactive charts detailing program efficiency metrics.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </section>

                    {/* Section 3: Interactive SIS Workspace Sandbox */}
                    <section className="mb-28 p-8 md:p-12 bg-slate-gray border border-slate-200 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-3 bg-electric-cyan/20 border-b border-l border-electric-cyan/30 text-authority-navy font-mono text-xs font-bold rounded-bl-xl uppercase tracking-wider">
                            Interactive UX Lab
                        </div>
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mb-4">SIS Workspace Playroom</h2>
                        <p className="text-lg text-authority-navy/70 font-light mb-8 max-w-3xl">
                            Simulate the workspace solutions designed for Evergreen Beauty College. Select a persona tab inside the panel to run their primary features.
                        </p>

                        {/* SIS Simulated Frame */}
                        <div className="bg-slate-900 border border-slate-800 rounded-2xl text-white shadow-xl overflow-hidden">
                            
                            {/* Simulator Navigation */}
                            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 bg-rose-500 rounded-full" />
                                    <div className="w-3 h-3 bg-amber-500 rounded-full" />
                                    <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                                </div>
                                <div className="flex bg-slate-900 rounded-lg p-0.5 border border-slate-800 text-[10px] font-mono">
                                    {["kara", "sarah", "theresa", "lauren"].map((p) => (
                                        <button
                                            key={p}
                                            onClick={() => {
                                                setSelectedPersona(p as any);
                                                setImpersonatingUser("None");
                                            }}
                                            className={`px-3 py-1.5 rounded-md uppercase font-bold transition-all ${
                                                selectedPersona === p ? "bg-emerald-600 text-white" : "text-white/50 hover:text-white"
                                            }`}
                                        >
                                            {p} View
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Impersonation Banner for Kara */}
                            {impersonatingUser !== "None" && (
                                <div className="bg-rose-900/90 text-white px-6 py-2.5 text-xs font-mono font-bold flex justify-between items-center border-b border-rose-950 animate-pulse">
                                    <div className="flex items-center gap-1.5">
                                        <ShieldAlert className="w-4 h-4 text-white" />
                                        <span>ADMINISTRATOR PORTAL IMPERSONATION ACTIVE: Acting on behalf of {impersonatingUser}</span>
                                    </div>
                                    <button 
                                        onClick={() => setImpersonatingUser("None")}
                                        className="px-2 py-0.5 bg-white/20 hover:bg-white/35 rounded text-[10px]"
                                    >
                                        Exit Impersonation
                                    </button>
                                </div>
                            )}

                            {/* Main Content Workspace inside simulator */}
                            <div className="p-6 min-h-[360px] bg-slate-900">
                                <AnimatePresence mode="wait">

                                    {/* KARA INTERACTION: COMPLIANCE WARNINGS & IMPERSONATE */}
                                    {(selectedPersona === "kara" && impersonatingUser === "None") && (
                                        <motion.div
                                            key="kara-view"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="space-y-6 text-left"
                                        >
                                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                                <div>
                                                    <h3 className="text-sm font-bold text-white/90">Compliance & Title IV Audit Workspace</h3>
                                                    <p className="text-[10px] text-white/40 font-mono mt-0.5">Early-Warning Flags & Attendance Interventions</p>
                                                </div>
                                                
                                                {/* Impersonate control */}
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[10px] font-mono text-white/40 uppercase">Impersonate:</span>
                                                    <select 
                                                        value={impersonatingUser}
                                                        onChange={(e) => handleImpersonation(e.target.value)}
                                                        className="bg-slate-950 border border-slate-800 text-xs text-emerald-400 font-mono rounded p-1.5 focus:outline-none"
                                                    >
                                                        <option value="None">-- Select Staff --</option>
                                                        <option value="Sarah (Everett Specialist)">Sarah (Everett Campus)</option>
                                                        <option value="James (Bellingham Specialist)">James (Bellingham Campus)</option>
                                                    </select>
                                                </div>
                                            </div>

                                            {/* At-Risk attendance lists */}
                                            <div className="border border-slate-800 rounded-xl overflow-hidden font-mono text-xs">
                                                <div className="bg-slate-950 px-3 py-2 text-[10px] text-white/40 uppercase border-b border-slate-800">
                                                    Compliance Alert Queue (Attendance limit &lt; 80%)
                                                </div>
                                                <div className="divide-y divide-slate-800">
                                                    {students.filter(s => s.atRisk).map((s) => (
                                                        <div key={s.name} className="p-3 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                                                            <div>
                                                                <div className="font-bold text-white flex items-center gap-1.5">
                                                                    <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                                                                    {s.name}
                                                                </div>
                                                                <div className="text-[10px] text-white/50">Campus: {s.campus} | Att Rate: <span className="text-rose-400 font-bold">{s.attendanceRate}%</span></div>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                {s.interventionLogged ? (
                                                                    <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                                                                        <Check className="w-3.5 h-3.5" /> Intervention Documented
                                                                    </span>
                                                                ) : (
                                                                    <button 
                                                                        onClick={() => triggerIntervention(s.name)}
                                                                        className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-[10px] font-bold"
                                                                    >
                                                                        Log Intervention
                                                                    </button>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* SARAH INTERACTION (OR IM PERSONATING SARAH): HIGH SPEED lookup & slip upload */}
                                    {(selectedPersona === "sarah" || impersonatingUser.includes("Sarah")) && (
                                        <motion.div
                                            key="sarah-view"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left"
                                        >
                                            {/* Column 1: Student Lookup */}
                                            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                                                <div className="text-[10px] font-mono text-white/40 uppercase mb-3 flex items-center gap-1.5">
                                                    <Search className="w-3.5 h-3.5" /> Counter Student Lookup
                                                </div>
                                                <input 
                                                    type="text"
                                                    value={studentSearch}
                                                    onChange={(e) => setStudentSearch(e.target.value)}
                                                    placeholder="Type student name..."
                                                    className="w-full bg-slate-900 border border-slate-800 rounded p-2 text-xs font-mono text-white mb-4 placeholder-white/30"
                                                />
                                                <div className="space-y-1.5 max-h-[160px] overflow-y-auto pr-1">
                                                    {filteredStudents.map((s) => (
                                                        <div 
                                                            key={s.name}
                                                            onClick={() => setSelectedStudentName(s.name)}
                                                            className={`p-2 rounded text-xs font-mono cursor-pointer transition-all ${
                                                                selectedStudentName === s.name ? "bg-emerald-600 text-white" : "hover:bg-white/5 text-white/70"
                                                            }`}
                                                        >
                                                            {s.name}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Column 2 & 3: Selected Student Details & Slips */}
                                            <div className="lg:col-span-2 p-5 bg-slate-950 rounded-xl border border-slate-800 flex flex-col justify-between">
                                                <div>
                                                    <div className="flex justify-between items-start border-b border-slate-800 pb-3 mb-4">
                                                        <div>
                                                            <h4 className="text-base font-bold text-white font-heading">{activeStudentDetails.name}</h4>
                                                            <span className="text-[10px] text-white/40 font-mono">Everett Campus Ledger</span>
                                                        </div>
                                                        <span className={`px-2 py-0.5 rounded text-[8px] font-mono font-bold uppercase ${
                                                            activeStudentDetails.atRisk ? "bg-rose-500/20 text-rose-400" : "bg-emerald-500/20 text-emerald-400"
                                                        }`}>
                                                            {activeStudentDetails.atRisk ? "Alert Warning" : "Clear Compliance"}
                                                        </span>
                                                    </div>

                                                    <div className="grid grid-cols-2 gap-4 text-xs font-mono mb-4">
                                                        <div className="bg-slate-900 p-2.5 rounded border border-slate-850">
                                                            <div className="text-[9px] text-white/40 uppercase mb-1">Clock Hours</div>
                                                            <div><strong>{activeStudentDetails.hoursLogged}</strong> / {activeStudentDetails.hoursTotal} hrs</div>
                                                            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden mt-1.5">
                                                                <div 
                                                                    className="bg-emerald-400 h-full" 
                                                                    style={{ width: `${(activeStudentDetails.hoursLogged / activeStudentDetails.hoursTotal) * 100}%` }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="bg-slate-900 p-2.5 rounded border border-slate-850">
                                                            <div className="text-[9px] text-white/40 uppercase mb-1">Account Balance</div>
                                                            <div className={activeStudentDetails.balance > 0 ? "text-rose-400" : "text-white"}>
                                                                ${activeStudentDetails.balance}.00
                                                            </div>
                                                            <div className="text-[9px] text-white/40 mt-1.5 uppercase">FA status: {activeStudentDetails.faStatus}</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Upload clock-hour slip trigger */}
                                                <div className="flex gap-2">
                                                    <button 
                                                        onClick={handleUploadSlip}
                                                        disabled={uploadSlipStatus === "uploading"}
                                                        className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded text-xs font-mono flex items-center justify-center gap-1.5 transition-colors"
                                                    >
                                                        {uploadSlipStatus === "uploading" ? (
                                                            <>
                                                                <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Ingesting Slip...
                                                            </>
                                                        ) : uploadSlipStatus === "done" ? (
                                                            <>
                                                                <Check className="w-3.5 h-3.5" /> Logged! (+8h)
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Clock className="w-3.5 h-3.5" /> Ingest 8h Attendance Slip
                                                            </>
                                                        )}
                                                    </button>
                                                    <div className="px-3 bg-slate-900 rounded border border-slate-800 text-[10px] text-white/40 font-mono flex flex-col justify-center">
                                                        <span>Daily Slips</span>
                                                        <span className="text-white font-bold">{slipsCount} processed</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* THERESA INTERACTION: FINANCIAL MIGRATION & RECONCILIATION */}
                                    {selectedPersona === "theresa" && (
                                        <motion.div
                                            key="theresa-view"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left"
                                        >
                                            <div className="lg:col-span-2 space-y-4">
                                                <h3 className="text-sm font-bold text-white/90 font-heading">VP Finance Control Panel</h3>
                                                <p className="text-[10px] text-white/40 font-mono">Real-time banking status & migration validation</p>
                                                
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs">
                                                        <div className="text-[9px] text-white/40 uppercase mb-1">Direct Bank Sync</div>
                                                        <div className="text-emerald-400 font-bold flex items-center gap-1">
                                                            <CheckCircle2 className="w-3.5 h-3.5" /> Citibank API Active
                                                        </div>
                                                        <div className="text-[9px] text-white/40 mt-1.5 uppercase">Reconciled: 4m ago</div>
                                                    </div>

                                                    <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs">
                                                        <div className="text-[9px] text-white/40 uppercase mb-1">Title IV disbursements</div>
                                                        <div className="text-white font-bold">$124,800.00</div>
                                                        <div className="text-[9px] text-white/40 mt-1.5 uppercase">Awarded clock cohorts: 4</div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Legacy SIS Migration tool */}
                                            <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 flex flex-col justify-between">
                                                <div>
                                                    <div className="text-xs font-mono font-bold text-emerald-400 uppercase mb-3 flex items-center gap-1.5">
                                                        <RefreshCw className="w-3.5 h-3.5" /> Legacy Data Sync Checker
                                                    </div>
                                                    <p className="text-[10px] text-white/50 font-light leading-relaxed mb-4">
                                                        Verify that the financial aid ledger records match before final migration deployment.
                                                    </p>
                                                </div>

                                                <div>
                                                    {migrationCheckStatus === "testing" && (
                                                        <div className="space-y-2 mb-4 font-mono text-[9px]">
                                                            <div className="flex justify-between">
                                                                <span>Testing 250 record imports...</span>
                                                                <span>{migrationProgress}%</span>
                                                            </div>
                                                            <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                                                                <div className="bg-emerald-500 h-full transition-all" style={{ width: `${migrationProgress}%` }} />
                                                            </div>
                                                        </div>
                                                    )}

                                                    {migrationCheckStatus === "success" && (
                                                        <div className="p-2.5 bg-emerald-950/20 border border-emerald-500/30 text-emerald-300 text-[10px] rounded-lg mb-4 font-mono">
                                                            <strong>Audit Result:</strong> 100% database verification complete. 0 balance mismatch errors detected.
                                                        </div>
                                                    )}

                                                    <button 
                                                        onClick={runMigrationAudit}
                                                        className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono font-bold rounded-lg transition-transform hover:scale-[1.02]"
                                                    >
                                                        {migrationCheckStatus === "testing" ? "Re-testing Database..." : "Verify Legacy Database Sync"}
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* LAUREN INTERACTION: RISK METRICS & FACULTY SCHEDULE RESHIFT */}
                                    {selectedPersona === "lauren" && (
                                        <motion.div
                                            key="lauren-view"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left"
                                        >
                                            {/* Columns 1 & 2: Risk Scoring Panel */}
                                            <div className="lg:col-span-2 space-y-4 font-mono text-xs">
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <h3 className="text-sm font-bold text-white/90 font-heading">Operations Cohort Risk Scores</h3>
                                                        <p className="text-[10px] text-white/40 mt-0.5">Aggregated attendance & lab progression indices</p>
                                                    </div>
                                                </div>

                                                <div className="space-y-3 bg-slate-950 p-4 border border-slate-800 rounded-xl">
                                                    {students.slice(0, 3).map((s) => {
                                                        const riskScore = Math.round((100 - s.attendanceRate) * 3);
                                                        return (
                                                            <div key={s.name} className="flex justify-between items-center gap-4 border-b border-slate-900 pb-2.5 last:border-0 last:pb-0">
                                                                <div>
                                                                    <div className="font-bold text-white">{s.name}</div>
                                                                    <div className="text-[9px] text-white/40">Attendance: {s.attendanceRate}%</div>
                                                                </div>
                                                                <div className="flex items-center gap-3">
                                                                    <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${
                                                                        riskScore > 50 ? "bg-rose-500/20 text-rose-400" : "bg-emerald-500/20 text-emerald-400"
                                                                    }`}>
                                                                        Risk Score: {riskScore}/100
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>

                                            {/* Column 3: Faculty Schedule Shift */}
                                            <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 flex flex-col justify-between">
                                                <div>
                                                    <div className="text-xs font-mono font-bold text-emerald-400 uppercase mb-3 flex items-center gap-1.5">
                                                        <Calendar className="w-3.5 h-3.5" /> Faculty Rescheduling Control
                                                    </div>
                                                    <p className="text-[10px] text-white/50 leading-relaxed mb-4">
                                                        Re-assign instructors instantly when student schedules change to prevent class size imbalances.
                                                    </p>

                                                    <div className="space-y-3 text-[11px] font-mono mb-4 bg-slate-900 p-2.5 rounded border border-slate-850">
                                                        <div className="flex justify-between">
                                                            <span className="text-white/40">Cosmetology Lab:</span>
                                                            <span className="text-white font-bold">{facultyAssignments["Cosmetology Lab A"]}</span>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <span className="text-white/40">Esthetics Theory:</span>
                                                            <span className="text-white font-bold">{facultyAssignments["Esthetics Theory"]}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="block text-[9px] font-mono text-white/40 uppercase">Reassign Cosmo Lab Instructor:</label>
                                                    <div className="flex gap-2">
                                                        <button 
                                                            onClick={() => handleFacultyReassignment("Cosmetology Lab A", "Mr. Adams")}
                                                            className="flex-1 py-1.5 bg-slate-900 border border-slate-800 text-[9px] font-bold text-white rounded hover:bg-slate-850"
                                                        >
                                                            Mr. Adams
                                                        </button>
                                                        <button 
                                                            onClick={() => handleFacultyReassignment("Cosmetology Lab A", "Ms. Jenkins")}
                                                            className="flex-1 py-1.5 bg-slate-900 border border-slate-800 text-[9px] font-bold text-white rounded hover:bg-slate-850"
                                                        >
                                                            Ms. Jenkins
                                                        </button>
                                                    </div>
                                                    <div className="text-[9px] text-white/40 font-mono mt-3 leading-relaxed">
                                                        {instructorShiftMsg}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                </AnimatePresence>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Narrative Value Proposition */}
                    <section className="prose prose-lg max-w-none text-authority-navy/80 font-light leading-relaxed mb-24">
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mb-6">Product Value Proposition: Compliance as Care</h2>
                        <p>
                            Within student administration, the Student Information System is not just a secondary ledger; it is the cornerstone of the entire operation. Our design approach was rooted in high-fidelity workflows that optimize the complex roles of Evergreen's executive officers and accounts team.
                        </p>
                        <p>
                            By integrating financial aid database triggers, automating the conversion of clock-hour slips, and building compliance alert structures directly into the system architecture, EBC reduced operational lag. The ability to impersonate specialists means compliance directors can debug student issues instantly, while academic operations teams can dynamically shift schedules to prevent student dropouts.
                        </p>

                        <h3 className="text-2xl font-bold text-authority-navy mt-10 mb-4 font-heading">Project Roadmap & Technical Next Steps</h3>
                        <p>
                            Establishing the core features—the automated slip ingestion, compliance flags, role permissions, and database sync validation—formed the MVP boundary. Technical next steps include completing integrations with admissions CRMs, geocoding maps for student locations, and configuring live links to QuickBooks.
                        </p>
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
                            <h3 className="font-bold text-2xl font-heading text-authority-navy mb-4">Let’s Talk About Your Operational Workflows</h3>
                            <p className="text-authority-navy/70 mb-8 max-w-2xl mx-auto">
                                If you are looking to design complex database portals, compliance tracking systems, or specialized enterprise workspaces, let's talk.
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
