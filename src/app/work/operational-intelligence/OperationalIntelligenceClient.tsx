"use client";

import Navbar from "@/components/Navbar";
import NDABanner from "@/components/NDABanner";
import { motion, AnimatePresence } from "framer-motion";
import { 
    ArrowLeft, 
    ArrowRight, 
    CheckCircle2, 
    Search, 
    MapPin, 
    Sliders, 
    RefreshCw, 
    AlertTriangle, 
    Check, 
    Share2, 
    ExternalLink, 
    Lock, 
    Settings, 
    Layers, 
    UserCheck, 
    FileText 
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Definitions for the DECS order simulator
interface OrderItem {
    id: string;
    client: string;
    routeType: "Commingled" | "Single-Route" | "Routed-EDI";
    address: string;
    addressValid: "valid" | "invalid" | "pending";
    packages: number;
    reference: string;
    status: "Active" | "SharePoint Pending" | "Completed" | "Corrected";
    rate: string;
}

export default function CaseStudyOperationalIntelligence() {
    // State for the DECS Workspace Simulator
    const [orders, setOrders] = useState<OrderItem[]>([
        { id: "TF-89021", client: "Macy's Logistics", routeType: "Commingled", address: "550 Seventh Ave, New York, NY", addressValid: "valid", packages: 42, reference: "REF-MACY-901", status: "Active", rate: "$420.00" },
        { id: "TF-89022", client: "Sephora USA", routeType: "Commingled", address: "525 W 34th St, New York, NY 100", addressValid: "invalid", packages: 15, reference: "REF-SEPH-412", status: "Active", rate: "$185.00" },
        { id: "TF-89023", client: "Amazon Depot Hub", routeType: "Routed-EDI", address: "1400 Broadway, New York, NY", addressValid: "valid", packages: 104, reference: "REF-AMZN-204", status: "SharePoint Pending", rate: "$1,120.00" },
        { id: "TF-89024", client: "Sephora East", routeType: "Commingled", address: "112 W 34th St, New York, NY", addressValid: "valid", packages: 8, reference: "REF-SEPH-413", status: "Active", rate: "$95.00" },
    ]);

    const [activeTab, setActiveTab] = useState<string>("all-orders");
    const [selectedOrderId, setSelectedOrderId] = useState<string | null>("TF-89022");
    
    // Column Customizer (Progressive Disclosure)
    const [visibleColumns, setVisibleColumns] = useState({
        routeType: true,
        address: true,
        packages: true,
        rate: true,
        status: true,
    });
    const [showColumnConfig, setShowColumnConfig] = useState(false);

    // Sync References & Packages Fields Demo state
    const [packagesCount, setPackagesCount] = useState<number>(15);
    const [refCode, setRefCode] = useState<string>("REF-SEPH-412");
    const [isSynced, setIsSynced] = useState<boolean>(true);

    // SharePoint external workflow simulator state
    const [spWorkflowStep, setSpWorkflowStep] = useState<"idle" | "review" | "updating" | "synced">("idle");

    // Address verification simulation
    const [addressInputValue, setAddressInputValue] = useState("525 W 34th St, New York, NY 100");
    const [validationStatus, setValidationStatus] = useState<"invalid" | "valid" | "validating">("invalid");

    const toggleColumn = (col: keyof typeof visibleColumns) => {
        setVisibleColumns(prev => ({ ...prev, [col]: !prev[col] }));
    };

    const handleAddressChange = (val: string) => {
        setAddressInputValue(val);
        setValidationStatus("validating");
        
        setTimeout(() => {
            if (val.toLowerCase().includes("10001") || val.toLowerCase().includes("ave") || val.length > 32) {
                setValidationStatus("valid");
                setOrders(prev => prev.map(o => o.id === "TF-89022" ? { ...o, address: val, addressValid: "valid" } : o));
            } else {
                setValidationStatus("invalid");
                setOrders(prev => prev.map(o => o.id === "TF-89022" ? { ...o, address: val, addressValid: "invalid" } : o));
            }
        }, 1000);
    };

    const handleSyncChange = (type: "packages" | "ref", value: string | number) => {
        if (type === "packages") {
            const num = Number(value);
            setPackagesCount(num);
            if (isSynced) {
                setOrders(prev => prev.map(o => o.id === "TF-89022" ? { ...o, packages: num } : o));
            }
        } else {
            const str = String(value);
            setRefCode(str);
            if (isSynced) {
                setOrders(prev => prev.map(o => o.id === "TF-89022" ? { ...o, reference: str } : o));
            }
        }
    };

    const handleSharePointApprove = () => {
        setSpWorkflowStep("review");
    };

    const commitSharePointSync = () => {
        setSpWorkflowStep("updating");
        setTimeout(() => {
            setOrders(prev => prev.map(o => o.id === "TF-89023" ? { ...o, status: "Corrected", rate: "$1,350.00" } : o));
            setSpWorkflowStep("synced");
        }, 1500);
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
                            <span className="text-electric-cyan uppercase tracking-widest font-bold font-sans">Enterprise Modernization</span>
                            <span className="text-authority-navy/30">•</span>
                            <span className="text-authority-navy/60">TForce Logistics (DECS)</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-authority-navy mb-8 leading-tight tracking-tight max-w-4xl">
                            Core Order Lifecycle Engine: Modernizing Logistics Operations
                        </h1>

                        <p className="text-xl md:text-2xl text-authority-navy/80 font-light leading-relaxed mb-12 border-l-4 border-electric-cyan pl-6 max-w-3xl">
                            How we re-architected the legacy desktop Dispatch & Execution Control System (DECS) into a fast, web-based workspace focused on high-value Order Review.
                        </p>
                        <NDABanner theme="light" className="mb-12" />
                    </motion.div>

                    {/* Project Specs Summary */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
                        <div className="p-6 bg-slate-gray border border-slate-100 rounded-2xl">
                            <div className="text-[10px] font-semibold text-authority-navy/50 uppercase tracking-widest mb-1.5">Product Scope</div>
                            <div className="text-base font-bold text-authority-navy">Cornerstone order workspace of the TForce operations.</div>
                        </div>
                        <div className="p-6 bg-slate-gray border border-slate-100 rounded-2xl">
                            <div className="text-[10px] font-semibold text-authority-navy/50 uppercase tracking-widest mb-1.5">Key Challenge</div>
                            <div className="text-base font-bold text-authority-navy">Visualizing commingled stops & synchronizing packages.</div>
                        </div>
                        <div className="p-6 bg-slate-gray border border-slate-100 rounded-2xl">
                            <div className="text-[10px] font-semibold text-authority-navy/50 uppercase tracking-widest mb-1.5">Integrations</div>
                            <div className="text-base font-bold text-authority-navy">Melissa Data, Google APIs, and SharePoint updates.</div>
                        </div>
                        <div className="p-6 bg-slate-gray border border-slate-100 rounded-2xl">
                            <div className="text-[10px] font-semibold text-authority-navy/50 uppercase tracking-widest mb-1.5">UX Framework</div>
                            <div className="text-base font-bold text-authority-navy">Progressive Disclosure with Xcelerator workflows.</div>
                        </div>
                    </div>

                    {/* Section 1: The Vision & Challenge */}
                    <section className="prose prose-lg max-w-none text-authority-navy/80 font-light leading-relaxed mb-24">
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mb-6">The Legacy System & Product Vision</h2>
                        <p>
                            Within TForce Logistics, the Order Entry workspace is a key component of the <strong>DECS (Dispatch & Execution Control System)</strong> suite. However, the system's true operation goes far beyond simple data entry. The critical business value lies in <strong>Order Review</strong>—validating intake parameters, managing complex rates/payments, and coordinating cross-customer routes. 
                        </p>
                        <p>
                            The legacy software was an outdated terminal client that felt like a "black box" to new hires. The product vision demanded a modernized, web-based platform that was highly intuitive, faster to operate, and simple for new CSRs (Customer Service Representatives) to learn, while retaining the complex configuration power needed by seasoned Field Admins.
                        </p>
                        
                        <h3 className="text-2xl font-bold text-authority-navy mt-10 mb-4 font-heading">Multiple Channels & Workflows</h3>
                        <p>
                            Logistics orders stream in from several external channels, including driver logs, customer portals, and bulk EDI templates. Because this data frequently contains transcription discrepancies, an external correction workflow is managed in SharePoint. 
                        </p>
                        <p>
                            Historically, when a Branch Manager submitted a correction in SharePoint, Field Admins had to manually compare, verify, approve, and rewrite the updates back into the core database. This dual-system tax created severe latency and billing delays.
                        </p>
                    </section>

                    {/* Section 2: Pain Points Matrix */}
                    <section className="mb-24">
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mb-8">Addressing Operational Pain Points</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 border border-rose-100 bg-rose-50/20 rounded-2xl">
                                <h3 className="text-lg font-bold text-rose-950 mb-4 flex items-center gap-2 font-heading">
                                    <AlertTriangle className="w-5 h-5 text-rose-600" /> System Bottlenecks (Legacy UI)
                                </h3>
                                <ul className="space-y-4 text-sm font-light text-rose-900/80 list-disc pl-5">
                                    <li><strong>The Commingled Route Blindspot:</strong> Multi-customer routed stops were mashed into flat tables, making it impossible to identify delivery groupings.</li>
                                    <li><strong>Broken Stop Panels:</strong> The primary interface for stop sequence editing was static and lacked real-time state changes.</li>
                                    <li><strong>Desynchronized Package Details:</strong> Reference numbers and package detail fields did not synchronize automatically, resulting in invoicing errors.</li>
                                    <li><strong>Address Verification Void:</strong> Delivery orders were saved with incorrect postal formats because there was no visual feedback for invalid addresses.</li>
                                    <li><strong>Sluggish Response & Stale Data:</strong> Manual refreshing was required constantly, and server synchronization lag disrupted dispatch workflows.</li>
                                </ul>
                            </div>

                            <div className="p-8 border border-emerald-100 bg-emerald-50/20 rounded-2xl">
                                <h3 className="text-lg font-bold text-emerald-950 mb-4 flex items-center gap-2 font-heading">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Redesigned UX Architecture
                                </h3>
                                <ul className="space-y-4 text-sm font-light text-emerald-900/80 list-disc pl-5">
                                    <li><strong>Hierarchical Route Visualization:</strong> Grouping routed stops visually by Customer → Stop itinerary.</li>
                                    <li><strong>Integrated Melissa Data & Google APIs:</strong> Dynamic address verification with high-visibility warnings for bad postal records.</li>
                                    <li><strong>Synchronized Fields System:</strong> Automated cascading updates between references, packages, and invoicing modules.</li>
                                    <li><strong>Multi-Tab Results & Popouts:</strong> Mimicking power features from Xcelerator (multiple search tabs and popout order panels in the browser).</li>
                                    <li><strong>Progressive Disclosure:</strong> Hiding unused columns and administrative overhead for standard CSRs to reduce screen clutter.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Interactive DECS Sandbox */}
                    <section className="mb-28 p-8 md:p-12 bg-slate-gray border border-slate-200 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-3 bg-electric-cyan/20 border-b border-l border-electric-cyan/30 text-authority-navy font-mono text-xs font-bold rounded-bl-xl uppercase tracking-wider">
                            Interactive UX Lab
                        </div>
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mb-4">The DECS Workspace Sandbox</h2>
                        <p className="text-lg text-authority-navy/70 font-light mb-8 max-w-3xl">
                            We engineered a highly responsive browser layout taking cues from Xcelerator and VSCode. Switch search tabs, customize columns, validate addresses, and review SharePoint approvals in real-time.
                        </p>

                        {/* Browser Sandbox UI Container */}
                        <div className="bg-slate-900 rounded-2xl border border-slate-800 text-white overflow-hidden shadow-xl">
                            
                            {/* Browser Top Tabs Bar */}
                            <div className="bg-slate-950 px-4 pt-3 pb-0 border-b border-slate-800 flex items-center justify-between">
                                <div className="flex gap-1.5 overflow-x-auto">
                                    <button 
                                        onClick={() => setActiveTab("all-orders")}
                                        className={`px-4 py-2 text-xs font-mono rounded-t-lg transition-all flex items-center gap-1.5 ${
                                            activeTab === "all-orders" ? "bg-slate-900 text-white border-t border-x border-slate-800" : "text-white/40 hover:text-white/80"
                                        }`}
                                    >
                                        <Search className="w-3.5 h-3.5" /> All Orders Feed
                                    </button>
                                    <button 
                                        onClick={() => setActiveTab("order-review")}
                                        className={`px-4 py-2 text-xs font-mono rounded-t-lg transition-all flex items-center gap-1.5 ${
                                            activeTab === "order-review" ? "bg-slate-900 text-white border-t border-x border-slate-800" : "text-white/40 hover:text-white/80"
                                        }`}
                                    >
                                        <FileText className="w-3.5 h-3.5 text-electric-cyan" /> Order TF-89022
                                    </button>
                                    <button 
                                        onClick={() => setActiveTab("sp-sync")}
                                        className={`px-4 py-2 text-xs font-mono rounded-t-lg transition-all flex items-center gap-1.5 ${
                                            activeTab === "sp-sync" ? "bg-slate-900 text-white border-t border-x border-slate-800" : "text-white/40 hover:text-white/80"
                                        }`}
                                    >
                                        <Share2 className="w-3.5 h-3.5 text-amber-400" /> SharePoint Sync (1)
                                    </button>
                                </div>
                                <div className="flex items-center gap-3 pb-2 text-[10px] text-white/40 font-mono">
                                    <span>DECS Workspace v2.4</span>
                                </div>
                            </div>

                            {/* Main Workspace Frame */}
                            <div className="p-6 min-h-[380px] bg-slate-900">
                                <AnimatePresence mode="wait">
                                    
                                    {/* TAB 1: ALL ORDERS FEED */}
                                    {activeTab === "all-orders" && (
                                        <motion.div
                                            key="all-orders-tab"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            {/* Toolbar Controls */}
                                            <div className="flex justify-between items-center mb-6">
                                                <div className="text-sm font-bold text-white/90">Intake Review Hub</div>
                                                <div className="relative">
                                                    <button 
                                                        onClick={() => setShowColumnConfig(!showColumnConfig)}
                                                        className="px-3.5 py-1.5 bg-slate-850 hover:bg-slate-800 text-xs font-mono text-electric-cyan rounded-lg border border-slate-800 flex items-center gap-1.5"
                                                    >
                                                        <Sliders className="w-3.5 h-3.5" /> Customize Columns
                                                    </button>
                                                    {showColumnConfig && (
                                                        <div className="absolute right-0 mt-2 bg-slate-950 border border-slate-800 rounded-xl p-4 shadow-xl z-20 w-48 text-left">
                                                            <div className="text-[10px] font-mono text-white/40 uppercase mb-2">Display Columns</div>
                                                            <div className="space-y-2">
                                                                {Object.keys(visibleColumns).map((key) => (
                                                                    <label key={key} className="flex items-center gap-2 text-xs text-white/85 cursor-pointer">
                                                                        <input 
                                                                            type="checkbox" 
                                                                            checked={visibleColumns[key as keyof typeof visibleColumns]}
                                                                            onChange={() => toggleColumn(key as keyof typeof visibleColumns)}
                                                                            className="accent-electric-cyan"
                                                                        />
                                                                        <span className="capitalize">{key.replace("Type", " Type")}</span>
                                                                    </label>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Orders Table Grid */}
                                            <div className="overflow-x-auto border border-slate-800 rounded-xl">
                                                <table className="w-full text-left font-mono text-xs">
                                                    <thead className="bg-slate-950/70 border-b border-slate-800 text-white/50 uppercase tracking-wider text-[10px]">
                                                        <tr>
                                                            <th className="p-3">Order ID</th>
                                                            <th className="p-3">Client</th>
                                                            {visibleColumns.routeType && <th className="p-3">Route Type</th>}
                                                            {visibleColumns.address && <th className="p-3">Destination Address</th>}
                                                            {visibleColumns.packages && <th className="p-3">Packages</th>}
                                                            {visibleColumns.rate && <th className="p-3 text-right">Rates/Pay</th>}
                                                            {visibleColumns.status && <th className="p-3 text-center">Status</th>}
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-slate-800/40">
                                                        {orders.map((o) => (
                                                            <tr 
                                                                key={o.id} 
                                                                onClick={() => {
                                                                    setSelectedOrderId(o.id);
                                                                    if (o.id === "TF-89022") setActiveTab("order-review");
                                                                    if (o.id === "TF-89023") setActiveTab("sp-sync");
                                                                }}
                                                                className={`hover:bg-slate-800/30 cursor-pointer transition-colors ${
                                                                    selectedOrderId === o.id ? "bg-slate-800/40" : ""
                                                                }`}
                                                            >
                                                                <td className="p-3 font-bold text-white">{o.id}</td>
                                                                <td className="p-3 text-white/80">{o.client}</td>
                                                                {visibleColumns.routeType && (
                                                                    <td className="p-3">
                                                                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                                                            o.routeType === "Commingled" ? "bg-electric-cyan/10 text-electric-cyan" : "bg-white/5 text-white/60"
                                                                        }`}>
                                                                            {o.routeType}
                                                                        </span>
                                                                    </td>
                                                                )}
                                                                {visibleColumns.address && (
                                                                    <td className="p-3 text-white/60 max-w-[200px] truncate flex items-center gap-1.5">
                                                                        {o.addressValid === "invalid" && <AlertTriangle className="w-3.5 h-3.5 text-rose-500 shrink-0" />}
                                                                        <span className={o.addressValid === "invalid" ? "text-rose-400" : ""}>{o.address}</span>
                                                                    </td>
                                                                )}
                                                                {visibleColumns.packages && <td className="p-3 text-white/80">{o.packages} units</td>}
                                                                {visibleColumns.rate && <td className="p-3 text-right text-emerald-400">{o.rate}</td>}
                                                                {visibleColumns.status && (
                                                                    <td className="p-3 text-center">
                                                                        <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${
                                                                            o.status === "Active" ? "bg-sky-400/10 text-sky-400" : 
                                                                            o.status === "SharePoint Pending" ? "bg-amber-400/10 text-amber-400" : 
                                                                            o.status === "Corrected" ? "bg-emerald-400/10 text-emerald-400" : "bg-white/5 text-white/50"
                                                                        }`}>
                                                                            {o.status}
                                                                        </span>
                                                                    </td>
                                                                )}
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="mt-4 text-[10px] text-white/30 text-right">
                                                *Click on row to drill down or switch tabs above. Highlighted items indicate warnings or sync corrections.
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* TAB 2: ORDER DETAILED WORKSPACE (TF-89022) */}
                                    {activeTab === "order-review" && (
                                        <motion.div
                                            key="order-review-tab"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left"
                                        >
                                            {/* Stop panel & Sync Details */}
                                            <div className="p-5 bg-slate-950 rounded-xl border border-slate-800">
                                                <div className="flex justify-between items-center mb-4">
                                                    <h4 className="text-xs uppercase font-mono text-electric-cyan font-bold tracking-wider">
                                                        Stop Panel & Sync Config
                                                    </h4>
                                                    <label className="flex items-center gap-1.5 text-[10px] text-white/50 cursor-pointer">
                                                        <input 
                                                            type="checkbox" 
                                                            checked={isSynced}
                                                            onChange={(e) => {
                                                                setIsSynced(e.target.checked);
                                                                if (e.target.checked) {
                                                                    setOrders(prev => prev.map(o => o.id === "TF-89022" ? { ...o, packages: packagesCount, reference: refCode } : o));
                                                                }
                                                            }}
                                                            className="accent-electric-cyan"
                                                        />
                                                        <span>Sync Package / Ref fields</span>
                                                    </label>
                                                </div>

                                                <div className="space-y-4 text-xs">
                                                    <div>
                                                        <label className="block text-white/40 mb-1">Package Count</label>
                                                        <input 
                                                            type="number"
                                                            value={packagesCount}
                                                            onChange={(e) => handleSyncChange("packages", e.target.value)}
                                                            className="w-full bg-slate-900 border border-slate-850 rounded p-2 text-white font-mono"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label className="block text-white/40 mb-1">Reference Code</label>
                                                        <input 
                                                            type="text"
                                                            value={refCode}
                                                            onChange={(e) => handleSyncChange("ref", e.target.value)}
                                                            className="w-full bg-slate-900 border border-slate-850 rounded p-2 text-white font-mono"
                                                        />
                                                    </div>

                                                    <div className="p-3 bg-white/5 rounded border border-white/5 text-[10px] leading-relaxed text-white/60 font-mono">
                                                        {isSynced ? (
                                                            <div className="text-emerald-400 flex items-center gap-1">
                                                                <Check className="w-3.5 h-3.5" /> Fields synchronized. Updates automatically write to the core database billing row.
                                                            </div>
                                                        ) : (
                                                            <div className="text-amber-400 flex items-center gap-1">
                                                                <AlertTriangle className="w-3.5 h-3.5" /> Synced fields disabled. Risk of invoicing mismatch increases.
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Melissa Data Address Verification */}
                                            <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 flex flex-col justify-between">
                                                <div>
                                                    <div className="flex justify-between items-center mb-4">
                                                        <h4 className="text-xs uppercase font-mono text-rose-400 font-bold tracking-wider">
                                                            Melissa Data & Google API Validation
                                                        </h4>
                                                        <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase ${
                                                            validationStatus === "valid" ? "bg-emerald-500/20 text-emerald-400" :
                                                            validationStatus === "invalid" ? "bg-rose-500/20 text-rose-400" : "bg-white/10 text-white/50"
                                                        }`}>
                                                            {validationStatus}
                                                        </span>
                                                    </div>

                                                    <div className="space-y-4 text-xs">
                                                        <div>
                                                            <label className="block text-white/40 mb-1">Destination Address Input</label>
                                                            <input 
                                                                type="text"
                                                                value={addressInputValue}
                                                                onChange={(e) => handleAddressChange(e.target.value)}
                                                                className="w-full bg-slate-900 border border-slate-850 rounded p-2 text-white font-mono"
                                                            />
                                                        </div>

                                                        {validationStatus === "invalid" && (
                                                            <div className="p-3 bg-rose-950/20 border border-rose-500/30 text-rose-300 text-[10px] rounded-lg">
                                                                <strong>Melissa Validation Warning:</strong> Missing Suite/Building threshold code. Address could not be routed automatically. <em>Try appending "Suite 4B New York, NY 10001" to resolve.</em>
                                                            </div>
                                                        )}

                                                        {validationStatus === "valid" && (
                                                            <div className="p-3 bg-emerald-950/20 border border-emerald-500/30 text-emerald-300 text-[10px] rounded-lg">
                                                                <strong>Melissa Verification Clear:</strong> Address standardized and geocoded via Google API. Safe for automated dispatcher routing.
                                                            </div>
                                                        )}

                                                        {validationStatus === "validating" && (
                                                            <div className="text-white/40 font-mono text-[10px] animate-pulse">
                                                                Verifying geocodes across DECS server database...
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                <button 
                                                    onClick={() => handleAddressChange("525 W 34th St, Suite 4B, New York, NY 10001")}
                                                    className="w-full py-2 bg-slate-900 hover:bg-slate-850 text-xs font-mono font-bold text-white border border-slate-800 rounded-lg text-center mt-4 transition-colors"
                                                >
                                                    Auto-Fill Corrected Address
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* TAB 3: SHAREPOINT WORKFLOW SYNC */}
                                    {activeTab === "sp-sync" && (
                                        <motion.div
                                            key="sp-sync-tab"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="max-w-2xl mx-auto"
                                        >
                                            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-left">
                                                <div className="flex items-center justify-between mb-4 border-b border-slate-850 pb-3">
                                                    <div>
                                                        <h4 className="text-xs font-mono font-bold text-amber-400 uppercase">
                                                            Pending SharePoint Modification Ticket
                                                        </h4>
                                                        <span className="text-[10px] text-white/40">Request #SP-209-TForce</span>
                                                    </div>
                                                    <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 rounded text-[9px] font-mono font-bold uppercase">
                                                        Awaiting Admin Action
                                                    </span>
                                                </div>

                                                <div className="grid grid-cols-2 gap-4 text-xs font-mono text-white/70 mb-6">
                                                    <div className="p-3 bg-slate-900 rounded border border-slate-850">
                                                        <div className="text-[9px] text-white/40 uppercase mb-1">Legacy Database State</div>
                                                        <div>Order: <strong>TF-89023</strong></div>
                                                        <div>Rate: <span className="text-rose-400">$1,120.00</span></div>
                                                        <div>Status: Scheduled</div>
                                                    </div>

                                                    <div className="p-3 bg-amber-950/20 rounded border border-amber-500/20 text-amber-200">
                                                        <div className="text-[9px] text-amber-400/60 uppercase mb-1">SharePoint Request (Branch Manager)</div>
                                                        <div>Mod: <strong>Fuel Surcharge Adjust</strong></div>
                                                        <div>Target Rate: <span className="text-emerald-400">$1,350.00</span></div>
                                                        <div>Status: Modified in SP</div>
                                                    </div>
                                                </div>

                                                <div className="p-4 bg-white/5 rounded-lg border border-white/5 text-[10px] leading-relaxed text-white/60 mb-6 font-mono">
                                                    <strong>Approval Protocol:</strong> Field Admins serve as final authority gatekeepers. Approving updates writes directly to DECS server, updates order audit files, and closes the SharePoint ticket.
                                                </div>

                                                {spWorkflowStep === "idle" && (
                                                    <button 
                                                        onClick={handleSharePointApprove}
                                                        className="w-full py-3 bg-electric-cyan hover:bg-cyan-500 text-slate-950 font-bold rounded-lg text-xs font-mono transition-transform hover:scale-[1.01] flex items-center justify-center gap-1.5"
                                                    >
                                                        Review SharePoint Request
                                                    </button>
                                                )}

                                                {spWorkflowStep === "review" && (
                                                    <div className="flex gap-3">
                                                        <button 
                                                            onClick={commitSharePointSync}
                                                            className="flex-1 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg text-xs font-mono flex items-center justify-center gap-1.5"
                                                        >
                                                            <Check className="w-4 h-4" /> Sync changes to DECS
                                                        </button>
                                                        <button 
                                                            onClick={() => setSpWorkflowStep("idle")}
                                                            className="px-4 py-3 bg-slate-905 hover:bg-slate-800 text-white text-xs font-mono rounded-lg border border-slate-800"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                )}

                                                {spWorkflowStep === "updating" && (
                                                    <div className="text-center py-2 text-xs font-mono text-white/50 animate-pulse flex items-center justify-center gap-2">
                                                        <RefreshCw className="w-4 h-4 animate-spin text-electric-cyan" /> Accessing database core. Adjusting rates and clearing SharePoint ID...
                                                    </div>
                                                )}

                                                {spWorkflowStep === "synced" && (
                                                    <div className="p-3 bg-emerald-950/20 border border-emerald-500/30 text-emerald-300 rounded-lg text-xs font-mono text-center flex items-center justify-center gap-1.5">
                                                        <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Database synchronization successful! Ticket finalized.
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}

                                </AnimatePresence>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Users and Workflows Details */}
                    <section className="mb-24">
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mb-8">User Groups & Dynamic Workflows</h2>
                        <p className="text-lg text-authority-navy/70 font-light mb-8 max-w-3xl">
                            Designing an enterprise logistics dashboard requires coordinating permission clusters. The DECS engine separates capabilities to balance throughput and security.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 bg-slate-gray border border-slate-200 rounded-2xl flex flex-col justify-between">
                                <div>
                                    <div className="w-10 h-10 bg-electric-cyan/15 rounded-lg flex items-center justify-center text-authority-navy mb-4">
                                        <Lock className="w-5 h-5 text-electric-cyan" />
                                    </div>
                                    <h3 className="text-lg font-bold font-heading text-authority-navy mb-2">Field Admins</h3>
                                    <p className="text-xs font-light text-authority-navy/70 leading-relaxed mb-4">
                                        Super-users responsible for overall configuration setup, managing billing rates/payments, and training team members. They approve SharePoint correction tickets.
                                    </p>
                                </div>
                                <div className="text-[10px] font-mono text-electric-cyan font-bold uppercase tracking-wider">Full Write & Config access</div>
                            </div>

                            <div className="p-6 bg-slate-gray border border-slate-200 rounded-2xl flex flex-col justify-between">
                                <div>
                                    <div className="w-10 h-10 bg-electric-cyan/15 rounded-lg flex items-center justify-center text-authority-navy mb-4">
                                        <UserCheck className="w-5 h-5 text-electric-cyan" />
                                    </div>
                                    <h3 className="text-lg font-bold font-heading text-authority-navy mb-2">CSR Supervisors</h3>
                                    <p className="text-xs font-light text-authority-navy/70 leading-relaxed mb-4">
                                        Order entry and modifications specialists who manage the daily lifecycle of order issues. They have full write access to the order state except for rates and payments.
                                    </p>
                                </div>
                                <div className="text-[10px] font-mono text-electric-cyan font-bold uppercase tracking-wider">Write access / Rate lock</div>
                            </div>

                            <div className="p-6 bg-slate-gray border border-slate-200 rounded-2xl flex flex-col justify-between">
                                <div>
                                    <div className="w-10 h-10 bg-electric-cyan/15 rounded-lg flex items-center justify-center text-authority-navy mb-4">
                                        <FileText className="w-5 h-5 text-electric-cyan" />
                                    </div>
                                    <h3 className="text-lg font-bold font-heading text-authority-navy mb-2">CSRs & Offshore CSRs</h3>
                                    <p className="text-xs font-light text-authority-navy/70 leading-relaxed mb-4">
                                        Standard Customer Service Representatives handle high-speed order intake and correction routing, while offshore users have view-only access for shipping trace tracking.
                                    </p>
                                </div>
                                <div className="text-[10px] font-mono text-electric-cyan font-bold uppercase tracking-wider">Read/Write & View-Only Roles</div>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Constraints & Development Strategy */}
                    <section className="prose prose-lg max-w-none text-authority-navy/80 font-light leading-relaxed mb-24">
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mb-6">Technical Constraints & Focus</h2>
                        <p>
                            Enterprise redesigns often run into the **"Feature Creep"** trap. TForce had a small internal development team, meaning their bandwidth to support custom interface requirements was limited. Integration with the legacy DECS server was complex, and inputs from different operational divisions had the potential to derail progress.
                        </p>
                        
                        <blockquote className="border-l-4 border-electric-cyan pl-6 italic text-authority-navy/70 my-8">
                            "The design logic focused on securing the basics first: stable address checks, consistent search grids, and bulletproof field synchronization. Advanced features—such as geographic map visualizers and Oracle/Dynamics CRM integrations—were isolated to Post-MVP phases."
                        </blockquote>

                        <h3 className="text-2xl font-bold text-authority-navy mt-10 mb-4 font-heading">The Core Branding & Control Center</h3>
                        <p>
                            To maintain branding harmony, the new web interfaces were styled to blend into TForce's **Core Control Center** theme. The UI adopts the progressive disclosure patterns found in software like **VSCode** and **Xcelerator** (hiding unused billing rows, collapsible side panels, and customizable columns).
                        </p>
                    </section>

                    {/* Outcome section */}
                    <section className="mb-24">
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mb-8">Measurable Outcomes</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex gap-4 items-start">
                                <div className="mt-1 bg-electric-cyan/15 p-2 rounded-full text-electric-cyan shrink-0">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold font-heading text-authority-navy mb-2">Reduced Task Completion Times</h4>
                                    <p className="text-sm font-light text-authority-navy/75 leading-relaxed">
                                        By integrating Melissa Data validation directly in the entry field and synchronizing package quantities, users resolved order entries without jumping across multiple window applications.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="mt-1 bg-electric-cyan/15 p-2 rounded-full text-electric-cyan shrink-0">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold font-heading text-authority-navy mb-2">Invoicing Accuracy</h4>
                                    <p className="text-sm font-light text-authority-navy/75 leading-relaxed">
                                        Field sync between packaging and client reference columns eliminated invoice mismatches, preventing billing errors and client disputes.
                                    </p>
                                </div>
                            </div>
                        </div>
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
                            <h3 className="font-bold text-2xl font-heading text-authority-navy mb-4">Let’s Talk About Your Enterprise Workspace</h3>
                            <p className="text-authority-navy/70 mb-8 max-w-2xl mx-auto">
                                If you are looking to translate complex workflows, legacy databases, or enterprise systems into fast, intuitive web workspaces, let's talk.
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
