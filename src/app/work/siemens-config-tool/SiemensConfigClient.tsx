"use client";

import Navbar from "@/components/Navbar";
import NDABanner from "@/components/NDABanner";
import { motion, AnimatePresence } from "framer-motion";
import { 
    ArrowLeft, 
    ArrowRight, 
    CheckCircle2, 
    Sliders, 
    Layers, 
    Lock, 
    Check, 
    X, 
    AlertTriangle, 
    Play, 
    Users, 
    Activity, 
    Cpu, 
    RefreshCw, 
    Settings, 
    FileText, 
    ArrowRightLeft 
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Types for Config Simulator
interface ConfigSite {
    id: string;
    name: string;
    template: string;
    status: "Configured" | "Unconfigured" | "Pending Push";
    tempSetPoint: number;
    lockedBy: string | null;
}

export default function SiemensConfigClient() {
    // Simulator states
    const [activeTab, setActiveTab] = useState<"dashboard" | "wizard" | "bulk-update">("dashboard");
    
    // Config sites state
    const [sites, setSites] = useState<ConfigSite[]>([
        { id: "site-1", name: "Seattle Tech Hub", template: "Office HVAC Standard", status: "Configured", tempSetPoint: 72, lockedBy: null },
        { id: "site-2", name: "Denver Operations Center", template: "None", status: "Unconfigured", tempSetPoint: 70, lockedBy: null },
        { id: "site-3", name: "Boston Lab Annex", template: "None", status: "Unconfigured", tempSetPoint: 68, lockedBy: null },
        { id: "site-4", name: "Dallas Storage Facility", template: "Warehouse High-Flow", status: "Configured", tempSetPoint: 76, lockedBy: "Marcus Vance" },
    ]);

    // Wizard Flow States (Step 1 to 3)
    const [wizardStep, setWizardStep] = useState<1 | 2 | 3>(1);
    const [wizardTemplate, setWizardTemplate] = useState("Office HVAC Standard");
    const [wizardMinTemp, setWizardMinTemp] = useState<number>(64);
    const [wizardMaxTemp, setWizardMaxTemp] = useState<number>(82);
    const [validationWarning, setValidationWarning] = useState<string | null>(null);
    const [pushProgress, setPushProgress] = useState<"idle" | "pushing" | "success">("idle");

    // Bulk update states
    const [selectedSiteIds, setSelectedSiteIds] = useState<string[]>([]);
    const [bulkTempOffset, setBulkTempOffset] = useState<number>(73);
    const [bulkResultMsg, setBulkResultMsg] = useState<string | null>(null);

    const handleSelectSite = (id: string) => {
        const site = sites.find(s => s.id === id);
        if (site?.lockedBy) return; // Prevent selection if locked
        
        setSelectedSiteIds(prev => 
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const handleBulkApply = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedSiteIds.length === 0) return;

        // Apply temperature settings to selected sites
        setSites(prev => prev.map(s => 
            selectedSiteIds.includes(s.id) 
                ? { ...s, tempSetPoint: bulkTempOffset, status: "Pending Push" } 
                : s
        ));

        setBulkResultMsg(`Successfully updated set points to ${bulkTempOffset}°F for ${selectedSiteIds.length} sites. Push changes to complete.`);
        setSelectedSiteIds([]);
    };

    const handleWizardNext = () => {
        if (wizardStep === 1) {
            setWizardStep(2);
        } else if (wizardStep === 2) {
            // Run validation
            if (wizardMinTemp < 65) {
                setValidationWarning("Warning: Temperature set point (64°F) violates ASHRAE efficiency limits. Recommended minimum is 65°F.");
            } else {
                setValidationWarning(null);
                setWizardStep(3);
            }
        }
    };

    const handleWizardAutoCorrect = () => {
        setWizardMinTemp(65);
        setValidationWarning(null);
        setWizardStep(3);
    };

    const handleWizardPush = () => {
        setPushProgress("pushing");
        setTimeout(() => {
            setPushProgress("success");
            setSites(prev => prev.map(s => 
                s.id === "site-2" 
                    ? { ...s, template: wizardTemplate, status: "Configured", tempSetPoint: wizardMinTemp } 
                    : s
            ));
        }, 1500);
    };

    const resetWizard = () => {
        setWizardStep(1);
        setWizardTemplate("Office HVAC Standard");
        setWizardMinTemp(64);
        setWizardMaxTemp(82);
        setValidationWarning(null);
        setPushProgress("idle");
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
                            <span className="text-electric-cyan uppercase tracking-widest font-bold font-sans">Enterprise Platform</span>
                            <span className="text-authority-navy/30">•</span>
                            <span className="text-authority-navy/60">Siemens Building Technologies</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-authority-navy mb-8 leading-tight tracking-tight max-w-4xl">
                            Configuration Workspace: Streamlining Gateway Commissioning
                        </h1>

                        <p className="text-xl md:text-2xl text-authority-navy/80 font-light leading-relaxed mb-12 border-l-4 border-electric-cyan pl-6 max-w-3xl">
                            How we transformed a complex JSON-heavy gateway configuration tool into a standardized, keyboard-friendly workspace with guided commissioning wizards and bulk modifications.
                        </p>
                        <NDABanner theme="light" className="mb-12" />
                    </motion.div>

                    {/* Specs Summary */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
                        <div className="p-6 bg-slate-gray border border-slate-100 rounded-2xl">
                            <div className="text-[10px] font-semibold text-authority-navy/50 uppercase tracking-widest mb-1.5">Product Scope</div>
                            <div className="text-base font-bold text-authority-navy">Gateway Commissioning Workspace.</div>
                        </div>
                        <div className="p-6 bg-slate-gray border border-slate-100 rounded-2xl">
                            <div className="text-[10px] font-semibold text-authority-navy/50 uppercase tracking-widest mb-1.5">Primary Goal</div>
                            <div className="text-base font-bold text-authority-navy">Eliminate human configuration error.</div>
                        </div>
                        <div className="p-6 bg-slate-gray border border-slate-100 rounded-2xl">
                            <div className="text-[10px] font-semibold text-authority-navy/50 uppercase tracking-widest mb-1.5">UX Alignment</div>
                            <div className="text-base font-bold text-authority-navy">Light-themed, keyboard friendly flow.</div>
                        </div>
                        <div className="p-6 bg-slate-gray border border-slate-100 rounded-2xl">
                            <div className="text-[10px] font-semibold text-authority-navy/50 uppercase tracking-widest mb-1.5">Key Metric</div>
                            <div className="text-base font-bold text-authority-navy">Zero Fleeting Popups. Robust Validation.</div>
                        </div>
                    </div>

                    {/* Section 1: Findings - The Gateway Commissioning Process */}
                    <section className="prose prose-lg max-w-none text-authority-navy/80 font-light leading-relaxed mb-24">
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mb-6">Simplifying Building Gateway Configurations</h2>
                        <p>
                            Gateway configuration is a highly technical task within Siemens Building Technologies. In the **TOC (Technical Operational Center)**, analysts must register building controllers, configure temp thresholds, establish schedules, and push these records to hardware gateways. 
                        </p>
                        <p>
                            The legacy config software was a complex, form-heavy interface. It functioned like a raw JSON code editor. Because it lacked error validation checks, analysts frequently committed typographical errors that crashed field devices. 
                        </p>
                        <p>
                            Furthermore, there was no **bulk editing** capability—adjusting a customer's global temperature limits meant opening and manually rewriting hundreds of individual sites one by one. The workflow was slow, error-prone, and required extensive employee training.
                        </p>
                    </section>

                    {/* Section 2: Pain Points Matrix */}
                    <section className="mb-24">
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mb-8 font-heading">Re-designing the Config Workflow</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 border border-rose-100 bg-rose-50/20 rounded-2xl text-left">
                                <h3 className="text-lg font-bold text-rose-950 mb-4 flex items-center gap-2 font-heading">
                                    <AlertTriangle className="w-5 h-5 text-rose-600" /> Legacy Config Friction
                                </h3>
                                <ul className="space-y-4 text-xs font-light text-rose-900/80 list-disc pl-5">
                                    <li><strong>Raw JSON Interface:</strong> Gateway configurations felt like writing raw parameters with zero contextual help.</li>
                                    <li><strong>Fleeting Error Messaging:</strong> System errors popped up in flash banners and vanished before users could read or triage them.</li>
                                    <li><strong>Inconsistent Navigation & Popups:</strong> Navigating sites was confusing, with countless modal dialogs blocking keyboard flows.</li>
                                    <li><strong>Zero Bulk Modification:</strong> Global customer properties had to be adjusted site by site, introducing manual error.</li>
                                    <li><strong>Simultaneous Write Collisions:</strong> No mechanism to prevent two analysts from editing and pushing to the same controller concurrently.</li>
                                </ul>
                            </div>

                            <div className="p-8 border border-emerald-100 bg-emerald-50/20 rounded-2xl text-left">
                                <h3 className="text-lg font-bold text-emerald-950 mb-4 flex items-center gap-2 font-heading">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Standardized Configuration UX
                                </h3>
                                <ul className="space-y-4 text-xs font-light text-emerald-900/80 list-disc pl-5">
                                    <li><strong>Guided Setup Wizards:</strong> Wizard components with progress bars that steer analysts step-by-step through template loads.</li>
                                    <li><strong>Persistent Validation Checks:</strong> Continuous validation feedback on set points and scheduling properties before gateway pushes.</li>
                                    <li><strong>Keyboard-First Navigation:</strong> Standardized form focus utilizing Tab controls and shortcut key bounds with minimal popups.</li>
                                    <li><strong>Bulk Modification Control:</strong> Multi-select site grids permitting simultaneous offsets and bulk gateway updates.</li>
                                    <li><strong>Concurrent Edit Lockout:</strong> Real-time visual write blocks indicating when other TOC analysts are editing a site.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Interactive Config Workspace (Light Theme) */}
                    <section className="mb-28 p-8 md:p-12 bg-slate-gray border border-slate-200 rounded-3xl relative overflow-hidden text-authority-navy">
                        <div className="absolute top-0 right-0 p-3 bg-electric-cyan/20 border-b border-l border-electric-cyan/30 text-authority-navy font-mono text-xs font-bold rounded-bl-xl uppercase tracking-wider">
                            Interactive UX Lab
                        </div>
                        <h2 className="text-3xl font-bold font-heading mb-4">Standardized Config Workspace</h2>
                        <p className="text-lg text-authority-navy/70 font-light mb-8 max-w-3xl">
                            We standardized the UI to match Siemens' core Enterprise Portal templates using a professional light theme. Navigate the workspace tabs to test commissioning wizards and bulk modifications.
                        </p>

                        {/* Config Tool Frame (Light Theme style) */}
                        <div className="bg-white rounded-2xl border border-slate-300 shadow-xl overflow-hidden text-authority-navy text-left font-sans">
                            
                            {/* Workspace Top Menu */}
                            <div className="bg-slate-100 border-b border-slate-300 px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <Cpu className="w-5 h-5 text-slate-600" />
                                    <div>
                                        <div className="text-sm font-bold">Siemens Config Tool</div>
                                        <div className="text-[10px] text-slate-500 font-mono">TOC Provisioning Console • v4.2</div>
                                    </div>
                                </div>
                                
                                <div className="flex bg-white rounded-lg p-0.5 border border-slate-350 text-xs font-mono">
                                    <button 
                                        onClick={() => setActiveTab("dashboard")}
                                        className={`px-3 py-1.5 rounded-md transition-all ${
                                            activeTab === "dashboard" ? "bg-slate-200 text-slate-800 font-bold" : "text-slate-500 hover:text-slate-800"
                                        }`}
                                    >
                                        Site Dashboard
                                    </button>
                                    <button 
                                        onClick={() => setActiveTab("wizard")}
                                        className={`px-3 py-1.5 rounded-md transition-all ${
                                            activeTab === "wizard" ? "bg-slate-200 text-slate-800 font-bold" : "text-slate-500 hover:text-slate-800"
                                        }`}
                                    >
                                        Commissioning Wizard
                                    </button>
                                    <button 
                                        onClick={() => setActiveTab("bulk-update")}
                                        className={`px-3 py-1.5 rounded-md transition-all ${
                                            activeTab === "bulk-update" ? "bg-slate-200 text-slate-800 font-bold" : "text-slate-500 hover:text-slate-800"
                                        }`}
                                    >
                                        Bulk Updates
                                    </button>
                                </div>
                            </div>

                            {/* Main simulator screen content */}
                            <div className="p-6 min-h-[380px] bg-white">
                                <AnimatePresence mode="wait">
                                    
                                    {/* SIMULATOR TAB 1: SITE DASHBOARD & WRITE LOCKS */}
                                    {activeTab === "dashboard" && (
                                        <motion.div
                                            key="dashboard-tab"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="space-y-6"
                                        >
                                            <div className="flex justify-between items-center">
                                                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                                                    Active Commissioning Registry
                                                </h3>
                                                <span className="text-[10px] text-slate-500 font-mono">
                                                    Showing 4 Connected Building Gateways
                                                </span>
                                            </div>

                                            <div className="border border-slate-250 rounded-xl overflow-hidden text-xs">
                                                <table className="w-full text-left font-mono">
                                                    <thead className="bg-slate-50 border-b border-slate-250 text-slate-500 uppercase tracking-wider text-[10px]">
                                                        <tr>
                                                            <th className="p-3">Building Site</th>
                                                            <th className="p-3">Active Template</th>
                                                            <th className="p-3">Set Point</th>
                                                            <th className="p-3">Status</th>
                                                            <th className="p-3">Concurrent Lock</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-slate-200">
                                                        {sites.map((s) => (
                                                            <tr key={s.id} className="hover:bg-slate-50/50 transition-colors">
                                                                <td className="p-3 font-bold text-slate-800">{s.name}</td>
                                                                <td className="p-3 text-slate-600">{s.template}</td>
                                                                <td className="p-3 text-slate-800 font-bold">{s.tempSetPoint}°F</td>
                                                                <td className="p-3">
                                                                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                                                        s.status === "Configured" ? "bg-emerald-100 text-emerald-800" :
                                                                        s.status === "Pending Push" ? "bg-amber-100 text-amber-800" : "bg-slate-100 text-slate-600"
                                                                    }`}>
                                                                        {s.status}
                                                                    </span>
                                                                </td>
                                                                <td className="p-3">
                                                                    {s.lockedBy ? (
                                                                        <span className="text-rose-600 flex items-center gap-1 font-bold text-[10px]">
                                                                            <Lock className="w-3 h-3" /> Locked: {s.lockedBy}
                                                                        </span>
                                                                    ) : (
                                                                        <span className="text-slate-400 text-[10px]">Available</span>
                                                                    )}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-[10px] text-slate-500 leading-relaxed font-mono">
                                                <strong>TOC Operations Check:</strong> Lockouts prevent simultaneous edits. If another analyst is working on a site, the gateway lock automatically renders the configuration input read-only.
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* SIMULATOR TAB 2: STEP-BY-STEP SETUP WIZARD */}
                                    {activeTab === "wizard" && (
                                        <motion.div
                                            key="wizard-tab"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="space-y-6"
                                        >
                                            {/* Wizard Progress Bar */}
                                            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                                                <div className="flex items-center gap-4">
                                                    <span className="text-xs font-bold text-slate-800 font-mono">Commissioning Site: Denver Depot</span>
                                                    <div className="flex gap-1.5 font-mono text-[9px]">
                                                        {[1, 2, 3].map((step) => (
                                                            <span 
                                                                key={step} 
                                                                className={`px-2 py-0.5 rounded ${
                                                                    wizardStep === step 
                                                                        ? "bg-slate-800 text-white font-bold" 
                                                                        : wizardStep > step 
                                                                        ? "bg-emerald-100 text-emerald-800 font-bold" 
                                                                        : "bg-slate-200 text-slate-500"
                                                                }`}
                                                            >
                                                                Step {step}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <button onClick={resetWizard} className="text-[10px] font-mono text-slate-500 hover:text-slate-800 underline">
                                                    Reset Wizard
                                                </button>
                                            </div>

                                            {/* Step Pages */}
                                            <div className="min-h-[160px] text-slate-700 text-xs">
                                                {/* STEP 1: LOAD TEMPLATE */}
                                                {wizardStep === 1 && (
                                                    <div className="space-y-4">
                                                        <label className="block font-bold text-slate-800">Step 1: Choose Master Configuration Template</label>
                                                        <p className="text-slate-500 text-[11px] leading-relaxed">
                                                            Master templates standardize schedules, scaling indicators, and set point limits based on building class.
                                                        </p>
                                                        <select 
                                                            value={wizardTemplate}
                                                            onChange={(e) => setWizardTemplate(e.target.value)}
                                                            className="w-full max-w-md bg-white border border-slate-350 p-2 rounded text-slate-800 font-mono"
                                                        >
                                                            <option value="Office HVAC Standard">Office HVAC Standard Template</option>
                                                            <option value="Warehouse High-Flow">Warehouse High-Flow Template</option>
                                                            <option value="Industrial Lab Chillers">Industrial Lab Chillers Template</option>
                                                        </select>
                                                    </div>
                                                )}

                                                {/* STEP 2: EDIT PROPERTIES & LIVE VALIDATION */}
                                                {wizardStep === 2 && (
                                                    <div className="space-y-4">
                                                        <label className="block font-bold text-slate-800">Step 2: Modify Set Points & Scaling Factors</label>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <div>
                                                                <label className="block text-slate-500 mb-1">Min Air Temp Limit</label>
                                                                <input 
                                                                    type="number"
                                                                    value={wizardMinTemp}
                                                                    onChange={(e) => setWizardMinTemp(Number(e.target.value))}
                                                                    className="w-full bg-white border border-slate-350 rounded p-2 text-slate-800 font-mono"
                                                                />
                                                            </div>
                                                            <div>
                                                                <label className="block text-slate-500 mb-1">Max Air Temp Limit</label>
                                                                <input 
                                                                    type="number"
                                                                    value={wizardMaxTemp}
                                                                    onChange={(e) => setWizardMaxTemp(Number(e.target.value))}
                                                                    className="w-full bg-white border border-slate-350 rounded p-2 text-slate-800 font-mono"
                                                                />
                                                            </div>
                                                        </div>

                                                        {validationWarning && (
                                                            <div className="p-3.5 bg-rose-50 border border-rose-250 text-rose-950 rounded-xl flex items-start gap-2.5">
                                                                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                                                <div>
                                                                    <strong>Persistent Validation Alert:</strong> {validationWarning}
                                                                    <button 
                                                                        onClick={handleWizardAutoCorrect}
                                                                        className="block text-[10px] font-mono font-bold text-emerald-700 underline mt-1.5"
                                                                    >
                                                                        Auto-Correct value to 65°F (Efficiency Baseline)
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}

                                                {/* STEP 3: GATEWAY PUSH */}
                                                {wizardStep === 3 && (
                                                    <div className="space-y-4">
                                                        <label className="block font-bold text-slate-800">Step 3: Compile and Push to Gateway</label>
                                                        <p className="text-slate-500 text-[11px] leading-relaxed">
                                                            All values have passed labeling standard validations. Ready to push to Denver Depot controller gateway.
                                                        </p>
                                                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 font-mono text-[10px] text-slate-600 space-y-1">
                                                            <div>Site Target: <strong>Denver Operations Center</strong></div>
                                                            <div>Template Loaded: <strong>{wizardTemplate}</strong></div>
                                                            <div>Config Variables: <strong>Min {wizardMinTemp}°F / Max {wizardMaxTemp}°F</strong></div>
                                                            <div>Validation Check: <span className="text-emerald-600 font-bold">Passed</span></div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Wizard footer buttons */}
                                            <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                                                {wizardStep > 1 ? (
                                                    <button 
                                                        onClick={() => setWizardStep(prev => (prev - 1) as any)}
                                                        className="px-4 py-2 border border-slate-300 text-slate-700 text-xs font-mono font-bold rounded-lg hover:bg-slate-50"
                                                    >
                                                        Back
                                                    </button>
                                                ) : <div />}

                                                {wizardStep < 3 ? (
                                                    <button 
                                                        onClick={handleWizardNext}
                                                        className="px-4 py-2 bg-slate-800 hover:bg-slate-750 text-white text-xs font-mono font-bold rounded-lg"
                                                    >
                                                        Continue Step
                                                    </button>
                                                ) : (
                                                    <div>
                                                        {pushProgress === "idle" && (
                                                            <button 
                                                                onClick={handleWizardPush}
                                                                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono font-bold rounded-lg"
                                                            >
                                                                Push Configuration changes
                                                            </button>
                                                        )}
                                                        {pushProgress === "pushing" && (
                                                            <div className="text-xs font-mono text-slate-500 animate-pulse flex items-center gap-1.5">
                                                                <RefreshCw className="w-3.5 h-3.5 animate-spin text-emerald-600" /> Committing changes to controller...
                                                            </div>
                                                        )}
                                                        {pushProgress === "success" && (
                                                            <div className="p-2.5 bg-emerald-100 text-emerald-800 text-xs font-mono font-bold rounded-lg flex items-center gap-1.5">
                                                                <Check className="w-4 h-4 text-emerald-700" /> Gateway Synced! Denver Depot has been updated.
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* SIMULATOR TAB 3: BULK UPDATES */}
                                    {activeTab === "bulk-update" && (
                                        <motion.div
                                            key="bulk-update-tab"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left text-xs"
                                        >
                                            {/* Left Column: Choose Targets */}
                                            <div className="lg:col-span-2 space-y-4">
                                                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold">
                                                    Select Target Building Sites
                                                </div>
                                                
                                                <div className="space-y-2 max-h-[220px] overflow-y-auto border border-slate-200 rounded-xl p-3 bg-slate-50/50">
                                                    {sites.map((s) => (
                                                        <div 
                                                            key={s.id}
                                                            onClick={() => handleSelectSite(s.id)}
                                                            className={`p-2.5 rounded-lg border font-mono flex items-center justify-between cursor-pointer transition-colors ${
                                                                s.lockedBy 
                                                                    ? "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed opacity-60" 
                                                                    : selectedSiteIds.includes(s.id) 
                                                                    ? "bg-slate-800 text-white border-slate-900" 
                                                                    : "bg-white text-slate-700 border-slate-250 hover:bg-slate-50"
                                                            }`}
                                                        >
                                                            <div className="flex items-center gap-2">
                                                                <input 
                                                                    type="checkbox" 
                                                                    checked={selectedSiteIds.includes(s.id)}
                                                                    disabled={!!s.lockedBy}
                                                                    onChange={() => {}} // handled by div click
                                                                    className="accent-slate-800 pointer-events-none"
                                                                />
                                                                <strong>{s.name}</strong>
                                                            </div>
                                                            <div className="text-[10px] opacity-80">
                                                                {s.lockedBy ? `Locked by ${s.lockedBy}` : `Set point: ${s.tempSetPoint}°F`}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Right Column: Bulk Parameters form */}
                                            <form onSubmit={handleBulkApply} className="p-5 bg-slate-50 rounded-xl border border-slate-200 flex flex-col justify-between">
                                                <div className="space-y-4">
                                                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold">
                                                        Bulk Parameter Adjustment
                                                    </div>
                                                    
                                                    <div>
                                                        <label className="block text-slate-500 mb-1">Parameter</label>
                                                        <select className="w-full bg-white border border-slate-350 p-2 rounded text-slate-800 font-mono">
                                                            <option>Temp Set-Point Target</option>
                                                            <option disabled>Scheduler Calibrations (Post-MVP)</option>
                                                            <option disabled>Scaling Properties (Post-MVP)</option>
                                                        </select>
                                                    </div>

                                                    <div>
                                                        <label className="block text-slate-500 mb-1">Target Value</label>
                                                        <input 
                                                            type="number"
                                                            value={bulkTempOffset}
                                                            onChange={(e) => setBulkTempOffset(Number(e.target.value))}
                                                            className="w-full bg-white border border-slate-350 rounded p-2 text-slate-800 font-mono"
                                                        />
                                                    </div>

                                                    {bulkResultMsg && (
                                                        <div className="p-2.5 bg-emerald-50 border border-emerald-200 text-emerald-900 text-[10px] rounded font-mono leading-relaxed">
                                                            {bulkResultMsg}
                                                        </div>
                                                    )}
                                                </div>

                                                <button 
                                                    type="submit"
                                                    disabled={selectedSiteIds.length === 0}
                                                    className={`w-full py-2.5 font-mono text-xs font-bold rounded-lg transition-colors mt-6 ${
                                                        selectedSiteIds.length > 0 
                                                            ? "bg-slate-800 text-white hover:bg-slate-750" 
                                                            : "bg-slate-200 text-slate-400 cursor-not-allowed"
                                                    }`}
                                                >
                                                    Apply Bulk Values ({selectedSiteIds.length})
                                                </button>
                                            </form>
                                        </motion.div>
                                    )}

                                </AnimatePresence>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Users and Workflows */}
                    <section className="mb-24">
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mb-8 font-heading">Stakeholders & Lifecycle Workflows</h2>
                        <p className="text-lg text-authority-navy/70 font-light mb-8 max-w-3xl">
                            The Config Tool interfaces with three primary user brackets within the Technical Operational Center ecosystem.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 bg-slate-gray border border-slate-200 rounded-2xl flex flex-col justify-between">
                                <div>
                                    <div className="w-10 h-10 bg-electric-cyan/15 rounded-lg flex items-center justify-center text-authority-navy mb-4">
                                        <Users className="w-5 h-5 text-electric-cyan" />
                                    </div>
                                    <h3 className="text-lg font-bold font-heading text-authority-navy mb-2">TOC Operators</h3>
                                    <p className="text-xs font-light text-authority-navy/70 leading-relaxed mb-4">
                                        The primary daily users of the platform. They triage client support calls, load templates, run local modifications, and push changes to gatekeepers.
                                    </p>
                                </div>
                                <div className="text-[10px] font-mono text-electric-cyan font-bold uppercase tracking-wider">Primary Operations</div>
                            </div>

                            <div className="p-6 bg-slate-gray border border-slate-200 rounded-2xl flex flex-col justify-between">
                                <div>
                                    <div className="w-10 h-10 bg-electric-cyan/15 rounded-lg flex items-center justify-center text-authority-navy mb-4">
                                        <Settings className="w-5 h-5 text-electric-cyan" />
                                    </div>
                                    <h3 className="text-lg font-bold font-heading text-authority-navy mb-2">Engineering Support</h3>
                                    <p className="text-xs font-light text-authority-navy/70 leading-relaxed mb-4">
                                        The internal Tier 3 technical team. They define master templates, debug complex scaling properties, and handle core software gateway connections.
                                    </p>
                                </div>
                                <div className="text-[10px] font-mono text-electric-cyan font-bold uppercase tracking-wider">Tier 3 Expert Setup</div>
                            </div>

                            <div className="p-6 bg-slate-gray border border-slate-200 rounded-2xl flex flex-col justify-between">
                                <div>
                                    <div className="w-10 h-10 bg-electric-cyan/15 rounded-lg flex items-center justify-center text-authority-navy mb-4">
                                        <ArrowRightLeft className="w-5 h-5 text-electric-cyan" />
                                    </div>
                                    <h3 className="text-lg font-bold font-heading text-authority-navy mb-2">Client Service Managers</h3>
                                    <p className="text-xs font-light text-authority-navy/70 leading-relaxed mb-4">
                                        Weekly stakeholders managing local client agreements. They use the tool to make minor support configurations and review system anomalies.
                                    </p>
                                </div>
                                <div className="text-[10px] font-mono text-electric-cyan font-bold uppercase tracking-wider">Weekly Maintenance</div>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Standardizing the Brand Experience */}
                    <section className="prose prose-lg max-w-none text-authority-navy/80 font-light leading-relaxed mb-24">
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mb-6">Standardizing Building Automation</h2>
                        <p>
                            Because the Config Tool is an internal workspace used alongside the **Enterprise Portal** and **Operations Tool**, UI standardization was critical. We established consistent styles for input fields, dropdown triggers, and warnings matching the Siemens Core theme.
                        </p>
                        <p>
                            By integrating validation guards directly into the step-by-step wizard forms, we prevented out-of-spec configurations before they reached gateway transmitters. Transitioning obscure, disappearing banners into persistent warning boxes with auto-correction paths significantly cut down support calls and technician error rates.
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
                            <h3 className="font-bold text-2xl font-heading text-authority-navy mb-4">Let’s Talk About Your Configuration Platform</h3>
                            <p className="text-authority-navy/70 mb-8 max-w-2xl mx-auto">
                                If you are looking to design guided setup wizards, configuration workspaces, or bulk update frameworks for complex enterprise systems, let's talk.
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
