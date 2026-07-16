"use client";

import Navbar from "@/components/Navbar";
import NDABanner from "@/components/NDABanner";
import { motion, AnimatePresence } from "framer-motion";
import { 
    ArrowLeft, 
    ArrowRight, 
    CheckCircle2, 
    Check, 
    Activity, 
    Users, 
    Clock, 
    TrendingUp, 
    ChevronRight, 
    FileText, 
    Calendar,
    Search,
    Plus,
    Send,
    UserCheck,
    AlertTriangle,
    Eye,
    PlusCircle,
    Info
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Types for Outpatient Simulator
interface PatientVisit {
    id: string;
    name: string;
    age: number;
    gender: string;
    insurance: string;
    apptDate: string;
    dayOfWeek: "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
    baselineRaf: number;
    gapsCount: number;
    status: "Needs Review" | "In Progress" | "Completed";
    
    // Gaps details
    emrProblems: {
        id: string;
        name: string;
        snomed: string;
        status: "Not on Problem List" | "On Problem List" | "Added";
        rafValue: number;
    }[];
    
    hccDiagnoses: {
        id: string;
        name: string;
        icd10: string;
        status: "Uncaptured" | "Captured" | "Query Sent";
        rafValue: number;
    }[];
}

export default function OutpatientClient() {
    // Simulator states
    const [activeTab, setActiveTab] = useState<"dashboard" | "schedule" | "worklist" | "review">("dashboard");
    const [selectedPatientId, setSelectedPatientId] = useState<string>("pt-1");
    const [selectedDayFilter, setSelectedDayFilter] = useState<string>("All");
    const [searchTerm, setSearchTerm] = useState("");
    
    // Query Modal state
    const [isQueryModalOpen, setIsQueryModalOpen] = useState(false);
    const [activeHccId, setActiveHccId] = useState<string | null>(null);
    const [queryTemplate, setQueryTemplate] = useState("obesity-severity");
    const [queryText, setQueryText] = useState(
        "Based on clinical documentation of a BMI of 41.2 and notes describing physical limitations, please clarify if the diagnosis of Morbid Obesity should be added to the patient's records for this calendar year."
    );
    
    // Notes state
    const [reviewsChecked, setReviewsChecked] = useState({
        problemList: false,
        hcc: false
    });
    const [noteText, setNoteText] = useState("");
    const [noteCategory, setNoteCategory] = useState("Clinical Clarification");
    const [shareRecipient, setShareRecipient] = useState("Dr. Henderson");
    const [saveToast, setSaveToast] = useState<string | null>(null);

    // Initial Patient Visits state mapping the Pre-Visit, Problem List, HCC, RAF and Reviews description
    const [patients, setPatients] = useState<PatientVisit[]>([
        {
            id: "pt-1",
            name: "James Chen",
            age: 72,
            gender: "Male",
            insurance: "Medicare Advantage (MA)",
            apptDate: "Today, 10:00 AM",
            dayOfWeek: "Wed",
            baselineRaf: 0.85,
            gapsCount: 2,
            status: "Needs Review",
            emrProblems: [
                { id: "ep-1", name: "Chronic Kidney Disease, Stage 3", snomed: "CKD Stage 3 (SNOMED 236400007)", status: "Not on Problem List", rafValue: 0.22 },
                { id: "ep-2", name: "Essential Hypertension", snomed: "HTN (SNOMED 38341003)", status: "On Problem List", rafValue: 0.00 }
            ],
            hccDiagnoses: [
                { id: "hcc-1", name: "Morbid Obesity (BMI 41.2)", icd10: "Morbid Obesity (ICD-10 E66.01)", status: "Uncaptured", rafValue: 0.27 },
                { id: "hcc-2", name: "COPD with Acute Exacerbation", icd10: "COPD (ICD-10 J44.1)", status: "Uncaptured", rafValue: 0.38 }
            ]
        },
        {
            id: "pt-2",
            name: "Sarah Jenkins",
            age: 69,
            gender: "Female",
            insurance: "Medicare Advantage (MA)",
            apptDate: "Today, 1:15 PM",
            dayOfWeek: "Wed",
            baselineRaf: 0.72,
            gapsCount: 3,
            status: "In Progress",
            emrProblems: [
                { id: "ep-3", name: "Type II Diabetes Mellitus", snomed: "DM Type 2 (SNOMED 44054006)", status: "Not on Problem List", rafValue: 0.18 },
                { id: "ep-4", name: "Depressive Disorder", snomed: "Major Depressive (SNOMED 35489007)", status: "Not on Problem List", rafValue: 0.12 }
            ],
            hccDiagnoses: [
                { id: "hcc-3", name: "Rheumatoid Arthritis", icd10: "RA Chronic (ICD-10 M06.9)", status: "Uncaptured", rafValue: 0.42 },
                { id: "hcc-4", name: "Diabetes with Nephropathy", icd10: "DM w/ Renal Manifestation (ICD-10 E11.21)", status: "Uncaptured", rafValue: 0.31 }
            ]
        },
        {
            id: "pt-3",
            name: "Arthur Pendelton",
            age: 79,
            gender: "Male",
            insurance: "Medicare Advantage (MA)",
            apptDate: "Tomorrow, 9:00 AM",
            dayOfWeek: "Thu",
            baselineRaf: 1.10,
            gapsCount: 1,
            status: "Needs Review",
            emrProblems: [
                { id: "ep-5", name: "Atrial Fibrillation", snomed: "A-Fib (SNOMED 49436004)", status: "On Problem List", rafValue: 0.00 }
            ],
            hccDiagnoses: [
                { id: "hcc-5", name: "Congestive Heart Failure", icd10: "CHF Chronic (ICD-10 I50.9)", status: "Uncaptured", rafValue: 0.45 }
            ]
        },
        {
            id: "pt-4",
            name: "Maria Rodriguez",
            age: 65,
            gender: "Female",
            insurance: "Medicare Advantage (MA)",
            apptDate: "Tomorrow, 2:30 PM",
            dayOfWeek: "Thu",
            baselineRaf: 0.65,
            gapsCount: 4,
            status: "Completed",
            emrProblems: [
                { id: "ep-6", name: "Secondary Malignant Neoplasm", snomed: "Metastatic Brain Cancer (SNOMED 94225005)", status: "Added", rafValue: 0.62 }
            ],
            hccDiagnoses: [
                { id: "hcc-6", name: "Active Cancer (Breast)", icd10: "Breast Malignancy (ICD-10 C50.911)", status: "Captured", rafValue: 0.55 },
                { id: "hcc-7", name: "Severe Protein-Calorie Malnutrition", icd10: "Malnutrition (ICD-10 E43)", status: "Captured", rafValue: 0.48 }
            ]
        },
        {
            id: "pt-5",
            name: "Clara Oswald",
            age: 68,
            gender: "Female",
            insurance: "Medicare Advantage (MA)",
            apptDate: "Friday, 11:15 AM",
            dayOfWeek: "Fri",
            baselineRaf: 0.95,
            gapsCount: 2,
            status: "Needs Review",
            emrProblems: [
                { id: "ep-7", name: "Chronic Respiratory Failure", snomed: "Resp Failure (SNOMED 26230006)", status: "Not on Problem List", rafValue: 0.35 }
            ],
            hccDiagnoses: [
                { id: "hcc-8", name: "Oxygen Dependence", icd10: "Long-term O2 Use (ICD-10 Z99.81)", status: "Uncaptured", rafValue: 0.22 }
            ]
        }
    ]);

    // Handle problem list mapping
    const handleAddProblem = (patientId: string, problemId: string) => {
        setPatients(prev => prev.map(p => {
            if (p.id !== patientId) return p;
            const updatedEmr = p.emrProblems.map(ep => 
                ep.id === problemId ? { ...ep, status: "Added" as const } : ep
            );
            return { ...p, emrProblems: updatedEmr };
        }));
    };

    // Handle HCC Capture
    const handleCaptureHcc = (patientId: string, hccId: string) => {
        setPatients(prev => prev.map(p => {
            if (p.id !== patientId) return p;
            const updatedHcc = p.hccDiagnoses.map(h => 
                h.id === hccId ? { ...h, status: "Captured" as const } : h
            );
            return { ...p, hccDiagnoses: updatedHcc };
        }));
    };

    // Open query builder
    const openQueryBuilder = (hccId: string, diagnosisName: string) => {
        setActiveHccId(hccId);
        if (diagnosisName.toLowerCase().includes("obesity")) {
            setQueryTemplate("obesity-severity");
            setQueryText(`Based on clinical documentation of a BMI of 41.2 and notes describing physical limitations, please clarify if the diagnosis of Morbid Obesity should be added to the patient's records for this calendar year.`);
        } else if (diagnosisName.toLowerCase().includes("malnutrition")) {
            setQueryTemplate("malnutrition-severity");
            setQueryText(`The patient has a documented BMI of 17.2, coupled with physical notes indicating temporal muscle wasting and 8% weight loss. Please specify if mild, moderate, or severe protein-calorie malnutrition is diagnosed.`);
        } else {
            setQueryTemplate("generic-clarification");
            setQueryText(`We noted clinical markers supporting a diagnosis of ${diagnosisName} in the recent specialist reports. Please clarify if this condition remains active and should be formally added to the patient encounter list.`);
        }
        setIsQueryModalOpen(true);
    };

    // Send query
    const handleSendQuery = () => {
        if (!activeHccId) return;
        setPatients(prev => prev.map(p => {
            if (p.id !== selectedPatientId) return p;
            const updatedHcc = p.hccDiagnoses.map(h => 
                h.id === activeHccId ? { ...h, status: "Query Sent" as const } : h
            );
            return { ...p, hccDiagnoses: updatedHcc };
        }));
        setIsQueryModalOpen(false);
        setActiveHccId(null);
        
        setSaveToast("Clinical query successfully dispatched to EHR inbox.");
        setTimeout(() => setSaveToast(null), 3000);
    };

    // Save reviews and notes
    const handleSaveReview = (e: React.FormEvent) => {
        e.preventDefault();
        setPatients(prev => prev.map(p => {
            if (p.id !== selectedPatientId) return p;
            const allProblemsChecked = p.emrProblems.every(ep => ep.status === "On Problem List" || ep.status === "Added");
            const allHccsChecked = p.hccDiagnoses.every(h => h.status === "Captured" || h.status === "Query Sent");
            const finalStatus = (allProblemsChecked && allHccsChecked) ? ("Completed" as const) : ("In Progress" as const);
            return { ...p, status: finalStatus };
        }));

        setSaveToast(`Review saved. Diagnostic bundle link shared with ${shareRecipient}.`);
        setNoteText("");
        setTimeout(() => setSaveToast(null), 4000);
    };

    // Calculations based on active selected patient
    const selectedPatient = patients.find(p => p.id === selectedPatientId) || patients[0];
    
    // Calculate live RAF Score
    const calculateLiveRaf = (p: PatientVisit) => {
        let currentRaf = p.baselineRaf;
        p.emrProblems.forEach(ep => {
            if (ep.status === "Added") {
                currentRaf += ep.rafValue;
            }
        });
        p.hccDiagnoses.forEach(h => {
            if (h.status === "Captured") {
                currentRaf += h.rafValue;
            }
        });
        return parseFloat(currentRaf.toFixed(2));
    };

    const liveRaf = calculateLiveRaf(selectedPatient);
    const rafIncrease = parseFloat((liveRaf - selectedPatient.baselineRaf).toFixed(2));

    // KPI Aggregates
    const totalGaps = patients.reduce((sum, p) => sum + p.gapsCount, 0);
    const openQueriesCount = patients.reduce((sum, p) => sum + p.hccDiagnoses.filter(h => h.status === "Query Sent").length, 0);
    const completedReviewsCount = patients.filter(p => p.status === "Completed").length;

    // Filters for Worklist
    const filteredWorklist = patients.filter(p => {
        const matchesDay = selectedDayFilter === "All" || p.dayOfWeek === selectedDayFilter;
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              p.insurance.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesDay && matchesSearch;
    });

    const phases = [
        { title: "Phase 1: Discover & Audit", dur: "3 Weeks", desc: "Clinician schedule observations, workflow bottleneck tracing, and Medicare Advantage quality guideline analysis." },
        { title: "Phase 2: Logic Mapping & UI Design", dur: "4 Weeks", desc: "Translating 125,000+ SNOMED hierarchies into nested, filterable visual panels. Design system tokens for EMR integration." },
        { title: "Phase 3: Interactive Workspace Delivery", dur: "7 Weeks", desc: "Engineering the drag-and-drop encoder UI, real-time RAF calculator client-side loops, and clinician test integrations." }
    ];

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
                            <span className="text-electric-cyan uppercase tracking-widest font-bold font-sans">Ambulatory Revenue Optimization</span>
                            <span className="text-authority-navy/30">•</span>
                            <span className="text-authority-navy/60">ChartWise (Outpatient CDI)</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-authority-navy mb-8 leading-tight tracking-tight max-w-4xl">
                            ChartWise OutPatient: HCC Recapture & Real-Time RAF Scoring
                        </h1>

                        <p className="text-xl md:text-2xl text-authority-navy/80 font-light leading-relaxed mb-12 border-l-4 border-electric-cyan pl-6 max-w-3xl">
                            How we translated complex Medicare Advantage documentation rules and 125,000+ SNOMED code sets into a seamless, high-velocity pre-visit workflow for CDI specialists.
                        </p>
                        <NDABanner theme="light" className="mb-12" />
                    </motion.div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
                        <div className="p-6 bg-slate-gray border border-slate-100 rounded-2xl">
                            <div className="text-[10px] font-semibold text-authority-navy/50 uppercase tracking-widest mb-1.5">Project Goal</div>
                            <div className="text-base font-bold text-authority-navy font-heading">Capture chronic disease burden before visits.</div>
                        </div>
                        <div className="p-6 bg-slate-gray border border-slate-100 rounded-2xl">
                            <div className="text-[10px] font-semibold text-authority-navy/50 uppercase tracking-widest mb-1.5">Workflows Supported</div>
                            <div className="text-base font-bold text-authority-navy font-heading">Problem List and HCC capture.</div>
                        </div>
                        <div className="p-6 bg-slate-gray border border-slate-100 rounded-2xl">
                            <div className="text-[10px] font-semibold text-authority-navy/50 uppercase tracking-widest mb-1.5">Primary Metric</div>
                            <div className="text-base font-bold text-authority-navy font-heading">Risk Adjustment Factor (RAF) calculation.</div>
                        </div>
                        <div className="p-6 bg-slate-gray border border-slate-100 rounded-2xl">
                            <div className="text-[10px] font-semibold text-authority-navy/50 uppercase tracking-widest mb-1.5">UX Innovation</div>
                            <div className="text-base font-bold text-authority-navy font-heading">Integrated Schedule & real-time RAF math.</div>
                        </div>
                    </div>

                    {/* Section 1: Project Background & Context */}
                    <section className="prose prose-lg max-w-none text-authority-navy/80 font-light leading-relaxed mb-24">
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mb-6">Ambulatory EMR Gaps and the HCC Challenge</h2>
                        <p>
                            Outpatient CDI (Clinical Documentation Improvement) has shifted under Medicare Advantage contracts. Instead of traditional inpatient fee-for-service reviews, CDI specialists target Hierarchical Condition Categories (HCCs)—a methodology that assigns a patient expense factor called the Risk Adjustment Factor (RAF) score.
                        </p>
                        <p>
                            CMS requires providers to address chronic conditions in a face-to-face encounter every calendar year. If a patient has severe COPD or morbid obesity, but the doctor fails to document it on the active problem list during the calendar year, the diagnosis is considered uncaptured, placing quality measures and funding at risk.
                        </p>
                        <p>
                            With over 125,000 SNOMED codes available and high-pressure clinician schedules, ChartWise set out to build a workflow console that gathers scheduled outpatient visits and extracts EHR records up to five days in advance, allowing CDI specialists to perform comprehensive prospective audits.
                        </p>

                        <h3 className="text-2xl font-bold text-authority-navy mt-10 mb-4 font-heading">The Iterative Delivery Phasing Model</h3>
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

                    {/* Section 2: Interactive Desktop Console Workspace */}
                    <section className="mb-28 p-6 md:p-10 bg-slate-gray border border-slate-200 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-3 bg-electric-cyan/20 border-b border-l border-electric-cyan/30 text-authority-navy font-mono text-xs font-bold rounded-bl-xl uppercase tracking-wider">
                            Interactive UX Lab
                        </div>
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mb-4">ChartWise CDI Workspace Simulator</h2>
                        <p className="text-lg text-authority-navy/70 font-light mb-8 max-w-3xl">
                            Simulate the outpatient pre-visit planning dashboard. Filter the schedule, select a patient visit, review EMR problem list gaps, capture HCC diagnoses, and perform live RAF score calculations.
                        </p>

                        {/* Save Toast notification */}
                        <AnimatePresence>
                            {saveToast && (
                                <motion.div 
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="mb-6 p-4 bg-emerald-100 border border-emerald-300 rounded-xl text-emerald-800 text-xs font-semibold flex items-center gap-2"
                                >
                                    <Check className="w-4 h-4 shrink-0 text-emerald-600" />
                                    {saveToast}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Interactive Console UI */}
                        <div className="bg-slate-950 rounded-2xl shadow-2xl overflow-hidden border border-slate-800 flex flex-col text-slate-100 min-h-[600px] text-left">
                            
                            {/* Browser Header Bar */}
                            <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex justify-between items-center text-xs text-slate-400 font-mono">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1">
                                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                                    </div>
                                    <span className="ml-2 font-semibold text-slate-300">ChartWise outpatient-cdi-v1.4.2</span>
                                </div>
                                <div className="hidden md:flex bg-slate-950 px-6 py-1 rounded-md text-[10px] text-slate-500 font-mono">
                                    https://cdi.chartwise.hospital-intranet/workspace
                                </div>
                            </div>

                            {/* Main Layout Area */}
                            <div className="flex flex-col md:flex-row flex-1">
                                
                                {/* Side Navigation Bar */}
                                <div className="w-full md:w-56 bg-slate-950 border-b md:border-b-0 md:border-r border-slate-800 p-4 flex flex-col justify-between gap-6 shrink-0 text-xs font-mono">
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-2 pb-4 border-b border-slate-800/60">
                                            <div className="w-6 h-6 rounded bg-electric-cyan flex items-center justify-center text-authority-navy font-bold font-sans">W</div>
                                            <span className="font-bold text-white tracking-wider uppercase font-sans">ChartWise OP</span>
                                        </div>
                                        <div className="space-y-1">
                                            <button 
                                                onClick={() => setActiveTab("dashboard")} 
                                                className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-2 ${activeTab === "dashboard" ? "bg-white/10 text-white font-bold" : "text-slate-400 hover:bg-white/5"}`}
                                            >
                                                <TrendingUp className="w-3.5 h-3.5 text-electric-cyan" />
                                                Dashboard KPIs
                                            </button>
                                            <button 
                                                onClick={() => setActiveTab("schedule")} 
                                                className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-2 ${activeTab === "schedule" ? "bg-white/10 text-white font-bold" : "text-slate-400 hover:bg-white/5"}`}
                                            >
                                                <Calendar className="w-3.5 h-3.5 text-electric-cyan" />
                                                Pre-Visit Calendar
                                            </button>
                                            <button 
                                                onClick={() => setActiveTab("worklist")} 
                                                className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-2 ${activeTab === "worklist" ? "bg-white/10 text-white font-bold" : "text-slate-400 hover:bg-white/5"}`}
                                            >
                                                <FileText className="w-3.5 h-3.5 text-electric-cyan" />
                                                CDS Worklist
                                            </button>
                                            <button 
                                                onClick={() => setActiveTab("review")} 
                                                className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-2 ${activeTab === "review" ? "bg-white/10 text-white font-bold" : "text-slate-400 hover:bg-white/5"}`}
                                            >
                                                <Activity className="w-3.5 h-3.5 text-electric-cyan" />
                                                Visit Review Space
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800/40 text-[10px] text-slate-400 space-y-1 font-sans">
                                        <div className="font-bold text-slate-300">CDI Specialist:</div>
                                        <div>Jane Doe, CPC-A</div>
                                        <div className="text-electric-cyan font-mono text-[9px] mt-1 flex items-center gap-1">
                                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                            EHR Server Active
                                        </div>
                                    </div>
                                </div>

                                {/* Active Tab Body */}
                                <div className="flex-1 bg-slate-900 p-6 overflow-y-auto max-h-[600px] text-sm">
                                    <AnimatePresence mode="wait">

                                        {/* TAB 1: DASHBOARD */}
                                        {activeTab === "dashboard" && (
                                            <motion.div 
                                                key="dashboard-tab" 
                                                initial={{ opacity: 0 }} 
                                                animate={{ opacity: 1 }} 
                                                exit={{ opacity: 0 }} 
                                                className="space-y-6"
                                            >
                                                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                                                    <div>
                                                        <h3 className="text-base font-bold text-white font-heading">Program KPI Dashboard</h3>
                                                        <p className="text-xs text-slate-400">Ambulatory clinical documentation improvement metrics</p>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                                    <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl">
                                                        <div className="text-[10px] text-slate-500 uppercase tracking-widest font-mono mb-1">Average RAF Improvement</div>
                                                        <div className="text-2xl font-bold text-electric-cyan">+0.48 RAF</div>
                                                    </div>
                                                    <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl">
                                                        <div className="text-[10px] text-slate-500 uppercase tracking-widest font-mono mb-1">Problem List Gaps Found</div>
                                                        <div className="text-2xl font-bold text-white">{totalGaps} Cases</div>
                                                    </div>
                                                    <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl">
                                                        <div className="text-[10px] text-slate-500 uppercase tracking-widest font-mono mb-1">Active Physician Queries</div>
                                                        <div className="text-2xl font-bold text-amber-400">{openQueriesCount} Sent</div>
                                                    </div>
                                                    <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl">
                                                        <div className="text-[10px] text-slate-500 uppercase tracking-widest font-mono mb-1">Completed Reviews</div>
                                                        <div className="text-2xl font-bold text-emerald-400">{completedReviewsCount} / {patients.length}</div>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                                    
                                                    {/* Schedule chart mockup */}
                                                    <div className="lg:col-span-2 p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-4">
                                                        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">Work volume & schedule planning</h4>
                                                        <div className="space-y-3">
                                                            <div>
                                                                <div className="flex justify-between text-xs text-slate-400 mb-1 font-mono">
                                                                    <span>Mon - 8 Visits (6 Reviewed)</span>
                                                                    <span>75% Done</span>
                                                                </div>
                                                                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                                                                    <div className="bg-emerald-500 h-full" style={{ width: "75%" }} />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="flex justify-between text-xs text-slate-400 mb-1 font-mono">
                                                                    <span>Tue - 12 Visits (8 Reviewed)</span>
                                                                    <span>66% Done</span>
                                                                </div>
                                                                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                                                                    <div className="bg-emerald-500 h-full" style={{ width: "66%" }} />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="flex justify-between text-xs text-slate-400 mb-1 font-mono">
                                                                    <span>Wed (Today) - 14 Visits (9 Reviewed)</span>
                                                                    <span>64% Done</span>
                                                                </div>
                                                                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                                                                    <div className="bg-electric-cyan h-full" style={{ width: "64%" }} />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="flex justify-between text-xs text-slate-400 mb-1 font-mono">
                                                                    <span>Thu - 10 Visits (2 Reviewed)</span>
                                                                    <span>20% Done</span>
                                                                </div>
                                                                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                                                                    <div className="bg-slate-700 h-full" style={{ width: "20%" }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Open Queries panel */}
                                                    <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-4">
                                                        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">Active Queries</h4>
                                                        <div className="space-y-2.5 max-h-[140px] overflow-y-auto pr-1">
                                                            {patients.map(p => 
                                                                p.hccDiagnoses.filter(h => h.status === "Query Sent").map(h => (
                                                                    <div key={h.id} className="p-2.5 bg-slate-900 border border-slate-800/80 rounded-lg text-[10px] font-mono flex justify-between items-center">
                                                                        <div>
                                                                            <div className="text-white font-bold">{p.name}</div>
                                                                            <div className="text-slate-400 font-sans mt-0.5">{h.name}</div>
                                                                        </div>
                                                                        <span className="px-2 py-0.5 bg-amber-400/10 border border-amber-400/20 text-amber-400 rounded-full font-bold text-[8px] uppercase tracking-wider">Awaiting response</span>
                                                                    </div>
                                                                ))
                                                            )}
                                                            {openQueriesCount === 0 && (
                                                                <div className="p-4 text-center text-slate-600 text-xs border border-dashed border-slate-800 rounded-xl">
                                                                    No queries outstanding.
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-xs leading-relaxed text-slate-400 font-light flex items-start gap-3">
                                                    <Info className="w-4 h-4 text-electric-cyan shrink-0 mt-0.5" />
                                                    <div>
                                                        <strong>Methodology Note:</strong> This workspace acts as a sandbox representing the prospective HCC review pipeline. Click the tabs to explore how scheduled inpatient/outpatient EMR diagnostic queries flow into localized billing codes and generate risk metrics.
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* TAB 2: CALENDAR SCHEDULE */}
                                        {activeTab === "schedule" && (
                                            <motion.div 
                                                key="schedule-tab" 
                                                initial={{ opacity: 0 }} 
                                                animate={{ opacity: 1 }} 
                                                exit={{ opacity: 0 }} 
                                                className="space-y-6"
                                            >
                                                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                                                    <div>
                                                        <h3 className="text-base font-bold text-white font-heading">Pre-Visit Planning Schedule</h3>
                                                        <p className="text-xs text-slate-400">Weekly cohort scheduled visit planning workspace</p>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                                                    {(["Mon", "Tue", "Wed", "Thu", "Fri"] as const).map((day) => {
                                                        const count = patients.filter(p => p.dayOfWeek === day).length;
                                                        const completed = patients.filter(p => p.dayOfWeek === day && p.status === "Completed").length;
                                                        return (
                                                            <div 
                                                                key={day}
                                                                onClick={() => {
                                                                    setSelectedDayFilter(day);
                                                                    setActiveTab("worklist");
                                                                }}
                                                                className={`p-4 rounded-xl border transition-all text-center cursor-pointer ${
                                                                    day === "Wed" 
                                                                        ? "bg-slate-950 border-electric-cyan shadow-lg shadow-electric-cyan/5" 
                                                                        : "bg-slate-950 border-slate-800 hover:border-slate-700"
                                                                }`}
                                                            >
                                                                <div className="text-xs font-mono font-bold text-slate-400">{day}</div>
                                                                <div className="text-2xl font-bold font-heading text-white mt-2 mb-1">{count} {count === 1 ? "Visit" : "Visits"}</div>
                                                                <div className="text-[10px] font-mono text-slate-500">
                                                                    {completed} / {count} Reviewed
                                                                </div>
                                                                <button className="mt-3 w-full py-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded text-[9px] font-mono transition-colors">
                                                                    Select Cohort
                                                                </button>
                                                            </div>
                                                        );
                                                    })}
                                                </div>

                                                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl flex justify-between items-center gap-4">
                                                    <div className="text-xs text-slate-400">
                                                        Looking to check general statistics across all scheduled visits? Reset filters to show all patient logs.
                                                    </div>
                                                    <button 
                                                        onClick={() => {
                                                            setSelectedDayFilter("All");
                                                            setActiveTab("worklist");
                                                        }}
                                                        className="px-4 py-2 bg-electric-cyan hover:bg-electric-cyan/90 text-authority-navy font-bold rounded-lg text-xs transition-colors shrink-0"
                                                    >
                                                        Show All Cohorts
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* TAB 3: WORKLIST */}
                                        {activeTab === "worklist" && (
                                            <motion.div 
                                                key="worklist-tab" 
                                                initial={{ opacity: 0 }} 
                                                animate={{ opacity: 1 }} 
                                                exit={{ opacity: 0 }} 
                                                className="space-y-6"
                                            >
                                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 border-b border-slate-800 pb-3">
                                                    <div>
                                                        <h3 className="text-base font-bold text-white font-heading">CDS Patient Worklist</h3>
                                                        <p className="text-xs text-slate-400">Active records filtered by planning criteria</p>
                                                    </div>

                                                    <div className="flex gap-2">
                                                        <div className="relative">
                                                            <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-slate-500" />
                                                            <input 
                                                                type="text" 
                                                                placeholder="Search patients..."
                                                                value={searchTerm}
                                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                                className="pl-8 pr-3 py-1.5 w-48 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-electric-cyan font-mono"
                                                            />
                                                        </div>
                                                        <select
                                                            value={selectedDayFilter}
                                                            onChange={(e) => setSelectedDayFilter(e.target.value)}
                                                            className="px-2.5 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-electric-cyan font-mono"
                                                        >
                                                            <option value="All">All Days</option>
                                                            <option value="Mon">Monday</option>
                                                            <option value="Tue">Tuesday</option>
                                                            <option value="Wed">Wednesday</option>
                                                            <option value="Thu">Thursday</option>
                                                            <option value="Fri">Friday</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="overflow-x-auto">
                                                    <table className="w-full text-left border-collapse text-xs font-mono">
                                                        <thead>
                                                            <tr className="border-b border-slate-800 text-slate-400">
                                                                <th className="py-2.5 px-3">Patient</th>
                                                                <th className="py-2.5 px-3">Appointment</th>
                                                                <th className="py-2.5 px-3 text-center">EMR Gaps</th>
                                                                <th className="py-2.5 px-3 text-right">Base RAF</th>
                                                                <th className="py-2.5 px-3 text-right">Delta Cap</th>
                                                                <th className="py-2.5 px-3 text-center">Status</th>
                                                                <th className="py-2.5 px-3 text-right">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-slate-800/40">
                                                            {filteredWorklist.map(p => {
                                                                const patientLiveRaf = calculateLiveRaf(p);
                                                                const patientDelta = parseFloat((patientLiveRaf - p.baselineRaf).toFixed(2));
                                                                return (
                                                                    <tr key={p.id} className="hover:bg-white/5 transition-colors">
                                                                        <td className="py-3 px-3">
                                                                            <span className="font-bold text-white text-sm font-sans block">{p.name}</span>
                                                                            <span className="text-[10px] text-slate-400 font-mono">{p.age} y/o {p.gender}</span>
                                                                        </td>
                                                                        <td className="py-3 px-3 text-slate-300">{p.apptDate}</td>
                                                                        <td className="py-3 px-3 text-center text-amber-400 font-bold">{p.gapsCount} gaps</td>
                                                                        <td className="py-3 px-3 text-right text-slate-400">{p.baselineRaf.toFixed(2)}</td>
                                                                        <td className="py-3 px-3 text-right text-electric-cyan font-bold">
                                                                            {patientDelta > 0 ? `+${patientDelta.toFixed(2)}` : "--"}
                                                                        </td>
                                                                        <td className="py-3 px-3 text-center">
                                                                            <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                                                                                p.status === "Completed" ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400" :
                                                                                p.status === "In Progress" ? "bg-amber-500/10 border border-amber-500/20 text-amber-400" :
                                                                                "bg-rose-500/10 border border-rose-500/20 text-rose-400"
                                                                            }`}>
                                                                                {p.status}
                                                                            </span>
                                                                        </td>
                                                                        <td className="py-3 px-3 text-right">
                                                                            <button 
                                                                                onClick={() => {
                                                                                    setSelectedPatientId(p.id);
                                                                                    setActiveTab("review");
                                                                                }}
                                                                                className="px-3 py-1 bg-slate-900 border border-slate-800 hover:bg-electric-cyan hover:text-authority-navy hover:border-electric-cyan rounded transition-colors text-[10px] font-bold uppercase tracking-wider"
                                                                            >
                                                                                Review Case
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                );
                                                            })}
                                                            {filteredWorklist.length === 0 && (
                                                                <tr>
                                                                    <td colSpan={7} className="py-8 text-center text-slate-500 border border-dashed border-slate-800/80 rounded-xl">
                                                                        No scheduled patients matching criteria.
                                                                    </td>
                                                                </tr>
                                                            )}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* TAB 4: VISIT REVIEW SPACE */}
                                        {activeTab === "review" && (
                                            <motion.div 
                                                key="review-tab" 
                                                initial={{ opacity: 0 }} 
                                                animate={{ opacity: 1 }} 
                                                exit={{ opacity: 0 }} 
                                                className="space-y-6"
                                            >
                                                {/* Patient Workspace Header */}
                                                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 bg-slate-950 p-5 border border-slate-800 rounded-2xl">
                                                    <div>
                                                        <span className="text-[10px] font-mono font-bold text-electric-cyan uppercase tracking-wider">Active Patient Review</span>
                                                        <h3 className="text-xl font-bold font-sans text-white mt-1">{selectedPatient.name}</h3>
                                                        <div className="flex items-center gap-3 text-xs text-slate-400 font-mono mt-1">
                                                            <span>Age/Gen: {selectedPatient.age} / {selectedPatient.gender}</span>
                                                            <span>•</span>
                                                            <span>{selectedPatient.insurance}</span>
                                                            <span>•</span>
                                                            <span className="text-white">Appt: {selectedPatient.apptDate}</span>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Real-time RAF Score Calculations Widget */}
                                                    <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl flex items-center gap-4">
                                                        <div className="text-center font-mono">
                                                            <div className="text-[9px] text-slate-500 uppercase font-bold tracking-wider">Baseline RAF</div>
                                                            <div className="text-lg font-bold text-slate-400">{selectedPatient.baselineRaf.toFixed(2)}</div>
                                                        </div>
                                                        <div className="text-center text-electric-cyan font-bold text-xl font-mono">➔</div>
                                                        <div className="text-center font-mono">
                                                            <div className="text-[9px] text-electric-cyan uppercase font-bold tracking-wider">Live RAF Score</div>
                                                            <div className="text-xl font-bold text-white">{liveRaf.toFixed(2)}</div>
                                                        </div>
                                                        {rafIncrease > 0 && (
                                                            <div className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded font-mono text-xs font-bold shrink-0">
                                                                +{rafIncrease.toFixed(2)} delta
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                                                    {/* Problem List Review Panel */}
                                                    <div className="p-5 bg-slate-950 border border-slate-800 rounded-2xl space-y-4">
                                                        <div>
                                                            <h4 className="text-sm font-bold text-white font-heading flex items-center gap-2">
                                                                <CheckCircle2 className="w-4 h-4 text-electric-cyan" />
                                                                Problem List Gaps (SNOMED Codes)
                                                            </h4>
                                                            <p className="text-[11px] text-slate-400 font-light mt-0.5">
                                                                Review disease conditions documented in recent records that lack formal Problem List updates.
                                                            </p>
                                                        </div>

                                                        <div className="space-y-3 font-mono text-xs">
                                                            {selectedPatient.emrProblems.map(ep => (
                                                                <div key={ep.id} className="p-3 bg-slate-900 border border-slate-800 rounded-xl flex justify-between items-center gap-3">
                                                                    <div className="space-y-1">
                                                                        <div className="font-bold text-slate-200">{ep.name}</div>
                                                                        <div className="text-[10px] text-slate-500">{ep.snomed}</div>
                                                                    </div>
                                                                    
                                                                    {ep.status === "On Problem List" && (
                                                                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
                                                                            <Check className="w-3.5 h-3.5 text-slate-400" />
                                                                            Confirmed
                                                                        </span>
                                                                    )}
                                                                    {ep.status === "Added" && (
                                                                        <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                                                                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                                                                            Linked to EHR
                                                                        </span>
                                                                    )}
                                                                    {ep.status === "Not on Problem List" && (
                                                                        <button
                                                                            onClick={() => handleAddProblem(selectedPatient.id, ep.id)}
                                                                            className="px-2.5 py-1 bg-slate-800 hover:bg-electric-cyan hover:text-authority-navy border border-slate-700 hover:border-electric-cyan rounded text-[9px] font-bold uppercase tracking-wider transition-colors"
                                                                        >
                                                                            Add problem
                                                                        </button>
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* HCC Capture Review Panel */}
                                                    <div className="p-5 bg-slate-950 border border-slate-800 rounded-2xl space-y-4">
                                                        <div>
                                                            <h4 className="text-sm font-bold text-white font-heading flex items-center gap-2">
                                                                <Activity className="w-4 h-4 text-electric-cyan" />
                                                                HCC Recapture (Annual Audit)
                                                            </h4>
                                                            <p className="text-[11px] text-slate-400 font-light mt-0.5">
                                                                CMS requires chronic diagnoses to be documented in a face-to-face visit once each calendar year.
                                                            </p>
                                                        </div>

                                                        <div className="space-y-3 font-mono text-xs">
                                                            {selectedPatient.hccDiagnoses.map(hcc => (
                                                                <div key={hcc.id} className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-2.5">
                                                                    <div className="flex justify-between items-start gap-3">
                                                                        <div className="space-y-1">
                                                                            <div className="font-bold text-slate-200">{hcc.name}</div>
                                                                            <div className="text-[10px] text-slate-500">{hcc.icd10}</div>
                                                                        </div>
                                                                        <div className="text-right shrink-0">
                                                                            <span className="text-[10px] text-electric-cyan block font-bold">+{hcc.rafValue.toFixed(2)} RAF</span>
                                                                        </div>
                                                                    </div>

                                                                    <div className="flex gap-2 pt-1 border-t border-slate-800/40">
                                                                        {hcc.status === "Captured" ? (
                                                                            <div className="w-full text-center text-emerald-400 font-bold uppercase tracking-wider text-[9px] py-1 bg-emerald-500/10 border border-emerald-500/20 rounded">
                                                                                ✓ Diagnosis Recaptured
                                                                            </div>
                                                                        ) : hcc.status === "Query Sent" ? (
                                                                            <div className="w-full text-center text-amber-400 font-bold uppercase tracking-wider text-[9px] py-1 bg-amber-500/10 border border-amber-500/20 rounded">
                                                                                Query pending in EHR
                                                                            </div>
                                                                        ) : (
                                                                            <>
                                                                                <button
                                                                                    onClick={() => handleCaptureHcc(selectedPatient.id, hcc.id)}
                                                                                    className="flex-1 py-1.5 bg-slate-800 hover:bg-electric-cyan hover:text-authority-navy border border-slate-700 hover:border-electric-cyan rounded text-[9px] font-bold uppercase tracking-wider transition-all"
                                                                                >
                                                                                    Capture HCC
                                                                                </button>
                                                                                <button
                                                                                    onClick={() => openQueryBuilder(hcc.id, hcc.name)}
                                                                                    className="flex-1 py-1.5 bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:border-slate-700 rounded text-[9px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1 text-slate-300"
                                                                                >
                                                                                    <Send className="w-2.5 h-2.5" />
                                                                                    Query Builder
                                                                                </button>
                                                                            </>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Reviews, Notes, & Notification Section */}
                                                <div className="p-5 bg-slate-950 border border-slate-800 rounded-2xl">
                                                    <h4 className="text-sm font-bold text-white font-heading mb-4 flex items-center gap-2">
                                                        <FileText className="w-4 h-4 text-electric-cyan" />
                                                        CDS Notes & Verification
                                                    </h4>
                                                    
                                                    <form onSubmit={handleSaveReview} className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono">
                                                        
                                                        {/* Verification Checklist */}
                                                        <div className="space-y-3 p-3.5 bg-slate-900/60 border border-slate-800 rounded-xl">
                                                            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Review Status Indicators</div>
                                                            <div className="space-y-2">
                                                                <label className="flex items-center gap-2 text-slate-300 cursor-pointer select-none">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        checked={reviewsChecked.problemList} 
                                                                        onChange={(e) => setReviewsChecked(prev => ({ ...prev, problemList: e.target.checked }))}
                                                                        className="rounded border-slate-800 bg-slate-950 text-electric-cyan focus:ring-electric-cyan"
                                                                    />
                                                                    Problem List Reviewed
                                                                </label>
                                                                <label className="flex items-center gap-2 text-slate-300 cursor-pointer select-none">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        checked={reviewsChecked.hcc} 
                                                                        onChange={(e) => setReviewsChecked(prev => ({ ...prev, hcc: e.target.checked }))}
                                                                        className="rounded border-slate-800 bg-slate-950 text-electric-cyan focus:ring-electric-cyan"
                                                                    />
                                                                    HCC Diagnoses Reviewed
                                                                </label>
                                                            </div>
                                                        </div>

                                                        {/* Notes Space */}
                                                        <div className="space-y-3 md:col-span-2">
                                                            <div className="flex gap-4">
                                                                <div className="flex-1 space-y-1">
                                                                    <label className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Note Category</label>
                                                                    <select
                                                                        value={noteCategory}
                                                                        onChange={(e) => setNoteCategory(e.target.value)}
                                                                        className="w-full p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 focus:outline-none focus:border-electric-cyan text-[11px]"
                                                                    >
                                                                        <option value="Clinical Clarification">Clinical Clarification</option>
                                                                        <option value="Compliance Audit">Compliance Audit</option>
                                                                        <option value="Audit Risk Alert">Audit Risk Alert</option>
                                                                        <option value="General Case Notes">General Case Notes</option>
                                                                    </select>
                                                                </div>
                                                                <div className="flex-1 space-y-1">
                                                                    <label className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Share Link Via Email</label>
                                                                    <select
                                                                        value={shareRecipient}
                                                                        onChange={(e) => setShareRecipient(e.target.value)}
                                                                        className="w-full p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 focus:outline-none focus:border-electric-cyan text-[11px]"
                                                                    >
                                                                        <option value="Dr. Henderson">Dr. Henderson (Physician PCP)</option>
                                                                        <option value="Sarah Jenkins (Senior CDS)">Sarah Jenkins (Senior CDS)</option>
                                                                        <option value="Administrative Auditor">Administrative Auditor</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="space-y-1">
                                                                <label className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Patient Case Note</label>
                                                                <textarea 
                                                                    placeholder="Enter persistent note text here. Notes are stored at the patient level and shared across visits."
                                                                    value={noteText}
                                                                    onChange={(e) => setNoteText(e.target.value)}
                                                                    rows={2}
                                                                    className="w-full p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-electric-cyan placeholder-slate-600 text-xs"
                                                                />
                                                            </div>

                                                            <div className="text-right">
                                                                <button
                                                                    type="submit"
                                                                    className="px-6 py-2 bg-electric-cyan hover:bg-electric-cyan/95 text-authority-navy font-bold rounded-lg uppercase tracking-wider text-xs transition-colors"
                                                                >
                                                                    Save Reviews & Share Link
                                                                </button>
                                                            </div>
                                                        </div>

                                                    </form>
                                                </div>

                                            </motion.div>
                                        )}

                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Integrated Query Builder Modal */}
                    {isQueryModalOpen && (
                        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-slate-900 border border-slate-800 max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl text-left"
                            >
                                <div className="p-5 border-b border-slate-800 bg-slate-950 flex justify-between items-center">
                                    <div>
                                        <h3 className="text-sm font-bold text-white font-heading">Integrated Query Builder</h3>
                                        <p className="text-[10px] text-slate-400 font-mono">Create electronic physician query clarifications</p>
                                    </div>
                                    <button 
                                        onClick={() => setIsQueryModalOpen(false)}
                                        className="text-slate-500 hover:text-slate-300 text-xs font-mono"
                                    >
                                        [Close]
                                    </button>
                                </div>
                                <div className="p-5 space-y-4 font-mono text-xs text-slate-300">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Clarification Template</label>
                                        <div className="p-2 bg-slate-950 border border-slate-800 rounded text-electric-cyan font-bold">
                                            {queryTemplate === "obesity-severity" ? "Obesity Severity clarification" : 
                                             queryTemplate === "malnutrition-severity" ? "Malnutrition Severity Clarification" : "Generic Condition Clarification"}
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Clinical Query Text</label>
                                        <textarea
                                            value={queryText}
                                            onChange={(e) => setQueryText(e.target.value)}
                                            rows={5}
                                            className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-electric-cyan text-xs leading-relaxed"
                                        />
                                    </div>

                                    <div className="p-3 bg-slate-950 border border-slate-800/80 rounded-lg text-[10px] text-slate-400 font-sans leading-relaxed">
                                        <strong>Regulatory Compliance Check:</strong> This query structure adheres strictly to the ACDIS/AHIMA guidelines for non-leading provider clarification.
                                    </div>
                                </div>
                                <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-end gap-3 text-xs">
                                    <button 
                                        onClick={() => setIsQueryModalOpen(false)}
                                        className="px-4 py-2 text-slate-400 hover:text-white transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                        onClick={handleSendQuery}
                                        className="px-5 py-2 bg-electric-cyan hover:bg-electric-cyan/95 text-authority-navy font-bold rounded-lg flex items-center gap-1.5 transition-colors"
                                    >
                                        <Send className="w-3.5 h-3.5" />
                                        Send Query to EMR
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    )}

                    {/* Section 3: Design Process & Outcomes */}
                    <section className="prose prose-lg max-w-none text-authority-navy/80 font-light leading-relaxed mb-20">
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mb-6">Designing for High-Density Information Contexts</h2>
                        <p>
                            Outpatient documentation systems fail because they treat clinical review as a standard web form. A CDS (Clinical Documentation Specialist) handles hundreds of cases and must quickly cross-reference raw physician notes with structured ICD-10 diagnostic trees and SNOMED mapping logs.
                        </p>
                        <p>
                            We addressed this bottleneck using three core UX design principles:
                        </p>
                        <ul>
                            <li>
                                <strong>Visual Hierarchy of Risk:</strong> The schedule-centric workspace categorizes patient cohorts by risk potential, guiding specialists to review cases with high EMR gaps and maximum RAF adjustment opportunities.
                            </li>
                            <li>
                                <strong>Contextual Direct Action:</strong> Toggles allow mapping problem lists and capturing chronic conditions directly from the review page. Specialists do not have to leave the context of the patient chart to build queries.
                            </li>
                            <li>
                                <strong>Interactive Calculations feedback:</strong> As HCC markers are checked and SNOMED codes are validated, the patient's Risk Adjustment Factor score updates in real time, validating their work instantly.
                            </li>
                        </ul>

                        <h3 className="text-2xl font-bold text-authority-navy mt-10 mb-4 font-heading">Key Project Outcomes</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 not-prose mt-6">
                            <div className="p-5 bg-slate-gray border border-slate-200 rounded-2xl">
                                <div className="text-3xl font-bold font-heading text-authority-navy mb-2">34%</div>
                                <div className="text-xs text-slate-600 font-sans leading-relaxed">Increase in annual chronic diagnosis capture accuracy across patient populations.</div>
                            </div>
                            <div className="p-5 bg-slate-gray border border-slate-200 rounded-2xl">
                                <div className="text-3xl font-bold font-heading text-authority-navy mb-2">3.2 mins</div>
                                <div className="text-xs text-slate-600 font-sans leading-relaxed">Average review duration down from 7.5 minutes, resulting in a 55% speed improvement.</div>
                            </div>
                            <div className="p-5 bg-slate-gray border border-slate-200 rounded-2xl">
                                <div className="text-3xl font-bold font-heading text-authority-navy mb-2">Zero</div>
                                <div className="text-xs text-slate-600 font-sans leading-relaxed">Guideline infraction queries, securing compliant revenue streams under MA.</div>
                            </div>
                        </div>
                    </section>

                </div>
            </article>

            {/* CTA Section */}
            <section className="py-24 bg-authority-navy text-white text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Need to streamline clinical systems?</h2>
                    <p className="text-xl md:text-2xl text-white/70 mb-10 font-light">
                        We design digital protocols that optimize diagnostic documentation compliance and system ergonomics.
                    </p>
                    <Link
                        href="/start"
                        className="inline-block px-10 py-4 text-lg font-bold text-authority-navy bg-electric-cyan rounded-full shadow-lg shadow-electric-cyan/20 hover:shadow-electric-cyan/40 hover:-translate-y-1 transition-all duration-300"
                    >
                        Start Conversation
                    </Link>
                </div>
            </section>
        </main>
    );
}
