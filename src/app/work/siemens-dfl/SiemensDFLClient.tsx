"use client";

import Navbar from "@/components/Navbar";
import NDABanner from "@/components/NDABanner";
import { motion, AnimatePresence } from "framer-motion";
import { 
    ArrowLeft, 
    ArrowRight, 
    CheckCircle2, 
    Volume2, 
    QrCode, 
    Pin, 
    Activity, 
    ListTodo, 
    FileText, 
    Bell, 
    Users, 
    Sliders, 
    Check, 
    Plus, 
    AlertTriangle, 
    LayoutGrid, 
    Paperclip, 
    Eye, 
    Settings 
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Types for DFL Simulator
interface LogPost {
    id: string;
    author: string;
    role: string;
    timestamp: string;
    content: string;
    priority: "High" | "Medium" | "Info";
    equipment: string;
    pinned: boolean;
    checklist?: { text: string; done: boolean }[];
}

export default function SiemensDFLClient() {
    // Simulator states
    const [activeSection, setActiveSection] = useState<"feed" | "qr-scanner" | "diagnostics" | "watchlist">("feed");
    
    // Logposts state - latest on top
    const [posts, setPosts] = useState<LogPost[]>([
        {
            id: "log-1",
            author: "Marcus Vance",
            role: "Siemens Technician",
            timestamp: "10m ago",
            content: "Completed monthly check on Chiller-02. Replaced compressor seal rings and topped off refrigerant level. Fluid pressure is stable, but noted minor vibration hum.",
            priority: "Medium",
            equipment: "Chiller-02",
            pinned: true,
            checklist: [
                { text: "Inspect compressor seal rings", done: true },
                { text: "Top off R-134a refrigerant", done: true },
                { text: "Verify fluid pressure coefficients", done: true }
            ]
        },
        {
            id: "log-2",
            author: "Dave K.",
            role: "Facility Manager (Client)",
            timestamp: "2h ago",
            content: "Cafeteria is running too hot (78°F). Checked air handler vents, but airflow seems restricted. Requesting a remote technician check on AHU-04 parameters.",
            priority: "High",
            equipment: "AHU-04",
            pinned: false
        },
        {
            id: "log-3",
            author: "Sarah Jenkins",
            role: "Energy Engineer",
            timestamp: "Yesterday",
            content: "Analyzing monthly energy consumption report. Sub-stations are matching efficiency baselines. No power spikes recorded during chiller startup.",
            priority: "Info",
            equipment: "Power Substation-01",
            pinned: false
        }
    ]);

    // Active Watchlist state
    const [watchlist, setWatchlist] = useState<string[]>(["Chiller-02", "AHU-04"]);
    
    // Add Post Form State
    const [newPostContent, setNewPostContent] = useState("");
    const [newPostPriority, setNewPostPriority] = useState<"High" | "Medium" | "Info">("Medium");
    const [newPostEquipment, setNewPostEquipment] = useState("Chiller-02");

    // QR scanner state
    const [scannedAsset, setScannedAsset] = useState<string | null>(null);
    const [isScanning, setIsScanning] = useState(false);

    // Audio Diagnostics state
    const [audioDiagnosticStatus, setAudioDiagnosticStatus] = useState<"idle" | "listening" | "analyzed">("idle");
    const [audioBands, setAudioBands] = useState<number[]>([10, 20, 15, 30, 40, 25, 10, 12, 18, 30]);

    const handlePublishPost = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newPostContent.trim()) return;

        const newLog: LogPost = {
            id: `log-${Date.now()}`,
            author: "Alex Rivera",
            role: "Remote Specialist (You)",
            timestamp: "Just now",
            content: newPostContent,
            priority: newPostPriority,
            equipment: newPostEquipment,
            pinned: false
        };

        setPosts(prev => [newLog, ...prev]);
        setNewPostContent("");
    };

    const togglePinPost = (id: string) => {
        setPosts(prev => prev.map(p => p.id === id ? { ...p, pinned: !p.pinned } : p));
    };

    const toggleWatch = (equipmentName: string) => {
        setWatchlist(prev => 
            prev.includes(equipmentName) 
                ? prev.filter(item => item !== equipmentName) 
                : [...prev, equipmentName]
        );
    };

    const handleQRScan = (asset: string) => {
        setIsScanning(true);
        setScannedAsset(null);
        setTimeout(() => {
            setIsScanning(false);
            setScannedAsset(asset);
        }, 1200);
    };

    const runAudioDiagnostics = () => {
        setAudioDiagnosticStatus("listening");
        // Animate audio waves
        const interval = setInterval(() => {
            setAudioBands(Array.from({ length: 10 }, () => Math.floor(Math.random() * 50) + 10));
        }, 150);

        setTimeout(() => {
            clearInterval(interval);
            setAudioDiagnosticStatus("analyzed");
            setAudioBands([12, 8, 14, 9, 85, 12, 10, 6, 8, 11]); // Spike at band index 4 (4.2kHz)
        }, 2200);
    };

    // Sort pinned posts to the top
    const sortedPosts = [...posts].sort((a, b) => {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        return 0;
    });

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
                            <span className="text-electric-cyan uppercase tracking-widest font-bold font-sans">Industrial IoT & CMMS</span>
                            <span className="text-authority-navy/30">•</span>
                            <span className="text-authority-navy/60">Siemens Building Technologies</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-authority-navy mb-8 leading-tight tracking-tight max-w-4xl">
                            Digital Facility Log: Socializing Industrial Maintenance
                        </h1>

                        <p className="text-xl md:text-2xl text-authority-navy/80 font-light leading-relaxed mb-12 border-l-4 border-electric-cyan pl-6 max-w-3xl">
                            How we translated physical logbooks and disjointed checklists into an iPad-first, social-media-style remote operations workspace for engineers.
                        </p>
                        <NDABanner theme="light" className="mb-12" />
                    </motion.div>

                    {/* Specs Summary Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
                        <div className="p-6 bg-slate-gray border border-slate-100 rounded-2xl">
                            <div className="text-[10px] font-semibold text-authority-navy/50 uppercase tracking-widest mb-1.5">Product Scope</div>
                            <div className="text-base font-bold text-authority-navy">Digital Maintenance log Replacing Notebooks.</div>
                        </div>
                        <div className="p-6 bg-slate-gray border border-slate-100 rounded-2xl">
                            <div className="text-[10px] font-semibold text-authority-navy/50 uppercase tracking-widest mb-1.5">UX Framework</div>
                            <div className="text-base font-bold text-authority-navy">Slack/Discord layout, touchscreen-focused.</div>
                        </div>
                        <div className="p-6 bg-slate-gray border border-slate-100 rounded-2xl">
                            <div className="text-[10px] font-semibold text-authority-navy/50 uppercase tracking-widest mb-1.5">Remote Diagnostics</div>
                            <div className="text-base font-bold text-authority-navy">QR scan lookup and sound-based wave diagnostics.</div>
                        </div>
                        <div className="p-6 bg-slate-gray border border-slate-100 rounded-2xl">
                            <div className="text-[10px] font-semibold text-authority-navy/50 uppercase tracking-widest mb-1.5">Platform Target</div>
                            <div className="text-base font-bold text-authority-navy">Smallest iPad (1080x810) Left-Nav only menu.</div>
                        </div>
                    </div>

                    {/* Section 1: Findings - Stakeholders & Users */}
                    <section className="prose prose-lg max-w-none text-authority-navy/80 font-light leading-relaxed mb-24">
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mb-6">The Operations Dilemma: Moving Beyond Notebooks</h2>
                        <p>
                            Industrial facility management historically relied on physical paper logbooks kept in machine rooms. When a technician completed maintenance on a chiller or pump, they noted details in a handwritten binder. 
                        </p>
                        <p>
                            Because these logs were offline, client service managers, facility directors, and remote energy engineers worked in the dark. Problems went un-correlated, recurrence patterns were invisible, and managers struggled to track technician handoffs.
                        </p>
                        <p>
                            The **Digital Facility Log (DFL)** re-engineers this logbook into a dynamic digital hub. Designed by Proto UX under Principal Young Ryu, Ph.D., the product vision translates manual logs into an active, social-media-styled collaboration feed. This workflow integrates remote service specialists and local building technicians, aligning priorities and status checks across Siemens Activity Central.
                        </p>
                    </section>

                    {/* Section 2: User Constraints & Design Choices */}
                    <section className="mb-24">
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mb-8">Tablet-First Design Considerations</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 bg-slate-gray border border-slate-200 rounded-2xl">
                                <h3 className="text-lg font-bold font-heading text-authority-navy mb-2">Screen Constraints</h3>
                                <p className="text-xs font-light text-authority-navy/70 leading-relaxed">
                                    The workspace is optimized for the smallest iPad resolution (**1080x810**). The layout uses a <strong>one-dimensional left-only navigation menu</strong> (no top navigation) to maximize content width on touch devices.
                                </p>
                            </div>
                            <div className="p-6 bg-slate-gray border border-slate-200 rounded-2xl">
                                <h3 className="text-lg font-bold font-heading text-authority-navy mb-2">Touchscreen Friendly</h3>
                                <p className="text-xs font-light text-authority-navy/70 leading-relaxed">
                                    Designed strictly for finger targets with no hover-state assumptions. Navigation uses simple tap triggers and visual pop-up lightboxes to inspect logs, keeping the page hierarchy to a single level depth.
                                </p>
                            </div>
                            <div className="p-6 bg-slate-gray border border-slate-200 rounded-2xl">
                                <h3 className="text-lg font-bold font-heading text-authority-navy mb-2">Social Feed Metaphor</h3>
                                <p className="text-xs font-light text-authority-navy/70 leading-relaxed">
                                    Adopts UI styles found in **Facebook, Discord, and Slack**. Rather than static databases, maintenance updates are posted as social logs (latest on top) with checklists, attachment hooks, and equipment tagging.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Interactive iPad Mockup Simulator */}
                    <section className="mb-28 p-6 md:p-10 bg-slate-gray border border-slate-200 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-3 bg-electric-cyan/20 border-b border-l border-electric-cyan/30 text-authority-navy font-mono text-xs font-bold rounded-bl-xl uppercase tracking-wider">
                            Interactive UX Lab
                        </div>
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mb-4">DFL iPad Mockup Simulator</h2>
                        <p className="text-lg text-authority-navy/70 font-light mb-8 max-w-3xl">
                            Experience the touch-first interface. Navigate logs, simulate a QR asset scan, and execute remote acoustic wave diagnostics in real-time.
                        </p>

                        {/* iPad Simulation Box (1080x810 proportion simulation, fit in max-w) */}
                        <div className="max-w-4xl mx-auto bg-slate-900 border-[12px] border-slate-950 rounded-[28px] shadow-2xl overflow-hidden aspect-[4/3] flex">
                            
                            {/* Left Navigation Only Menu */}
                            <div className="w-44 bg-slate-950 border-r border-slate-800 flex flex-col justify-between p-4">
                                <div className="space-y-6">
                                    {/* Logo */}
                                    <div className="font-heading text-xs font-bold text-white tracking-widest uppercase border-b border-slate-800 pb-3 flex items-center gap-1.5">
                                        <Activity className="w-4 h-4 text-electric-cyan" />
                                        <span>Siemens DFL</span>
                                    </div>

                                    {/* Menu items */}
                                    <div className="space-y-1 font-mono text-[10px] text-left">
                                        {[
                                            { id: "feed", label: "Activity Feed", icon: <FileText className="w-3.5 h-3.5" /> },
                                            { id: "qr-scanner", label: "QR Asset Scan", icon: <QrCode className="w-3.5 h-3.5" /> },
                                            { id: "diagnostics", label: "Acoustic Room", icon: <Volume2 className="w-3.5 h-3.5" /> },
                                            { id: "watchlist", label: "My Watchlist", icon: <Eye className="w-3.5 h-3.5" /> }
                                        ].map((item) => (
                                            <button
                                                key={item.id}
                                                onClick={() => setActiveSection(item.id as any)}
                                                className={`w-full px-3 py-2.5 rounded-lg flex items-center gap-2 font-bold transition-all ${
                                                    activeSection === item.id 
                                                        ? "bg-electric-cyan/15 text-electric-cyan border-l-2 border-electric-cyan" 
                                                        : "text-white/40 hover:text-white/80"
                                                }`}
                                            >
                                                {item.icon}
                                                <span>{item.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="text-[8px] font-mono text-white/20 uppercase tracking-widest text-left">Remote Link</div>
                                    <div className="flex items-center gap-1.5 text-[8px] font-mono text-emerald-400">
                                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                                        <span>Activity Central</span>
                                    </div>
                                </div>
                            </div>

                            {/* Main Display Body (iPad screen content) */}
                            <div className="flex-1 bg-slate-900 p-6 overflow-y-auto text-left relative">
                                <AnimatePresence mode="wait">
                                    
                                    {/* SECTION 1: ACTIVITY LOG FEED */}
                                    {activeSection === "feed" && (
                                        <motion.div
                                            key="feed-panel"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="space-y-6"
                                        >
                                            {/* Publish Post Editor Panel */}
                                            <form onSubmit={handlePublishPost} className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                                                <div className="text-[9px] font-mono text-white/40 uppercase mb-2">Publish Maintenance Log Entry</div>
                                                <div className="space-y-3">
                                                    <textarea 
                                                        value={newPostContent}
                                                        onChange={(e) => setNewPostContent(e.target.value)}
                                                        placeholder="Write log updates, checklists, or incident reports..."
                                                        className="w-full bg-slate-900 border border-slate-850 rounded p-2 text-xs font-mono text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-electric-cyan h-16 resize-none"
                                                    />
                                                    <div className="flex flex-wrap justify-between items-center gap-2">
                                                        <div className="flex gap-2 text-[9px] font-mono text-white/50">
                                                            <select 
                                                                value={newPostPriority}
                                                                onChange={(e) => setNewPostPriority(e.target.value as any)}
                                                                className="bg-slate-900 border border-slate-850 p-1 rounded text-white"
                                                            >
                                                                <option value="Info">Info</option>
                                                                <option value="Medium">Medium Priority</option>
                                                                <option value="High">High Priority</option>
                                                            </select>
                                                            <select 
                                                                value={newPostEquipment}
                                                                onChange={(e) => setNewPostEquipment(e.target.value)}
                                                                className="bg-slate-900 border border-slate-850 p-1 rounded text-white"
                                                            >
                                                                <option value="Chiller-02">Chiller-02</option>
                                                                <option value="AHU-04">AHU-04</option>
                                                                <option value="Power Substation-01">Power Sub-01</option>
                                                            </select>
                                                        </div>
                                                        <button 
                                                            type="submit"
                                                            className="px-4 py-1.5 bg-electric-cyan hover:bg-cyan-500 text-slate-950 font-bold font-mono text-[10px] rounded"
                                                        >
                                                            Publish Post
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>

                                            {/* Pinned / Latest Posts list */}
                                            <div className="space-y-4">
                                                {sortedPosts.map((post) => (
                                                    <div 
                                                        key={post.id} 
                                                        className={`p-4 rounded-xl border text-xs font-mono relative ${
                                                            post.pinned 
                                                                ? "bg-slate-950 border-electric-cyan/40" 
                                                                : "bg-slate-950/40 border-slate-850"
                                                        }`}
                                                    >
                                                        <div className="flex justify-between items-start mb-2">
                                                            <div>
                                                                <span className="font-bold text-white">{post.author}</span>
                                                                <span className="text-[9px] text-white/40 ml-2">({post.role}) • {post.timestamp}</span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${
                                                                    post.priority === "High" ? "bg-rose-500/20 text-rose-400" :
                                                                    post.priority === "Medium" ? "bg-amber-500/20 text-amber-400" : "bg-white/5 text-white/50"
                                                                }`}>
                                                                    {post.priority}
                                                                </span>
                                                                <button 
                                                                    onClick={() => togglePinPost(post.id)}
                                                                    className={`p-1 rounded hover:bg-white/5 ${post.pinned ? "text-electric-cyan" : "text-white/20"}`}
                                                                >
                                                                    <Pin className="w-3.5 h-3.5" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <p className="text-white/80 font-light leading-relaxed mb-3">{post.content}</p>
                                                        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-900 pt-2 text-[9px] text-white/40">
                                                            <span className="px-2 py-0.5 bg-slate-900 text-white border border-slate-800 rounded">
                                                                Hardware: {post.equipment}
                                                            </span>
                                                            {watchlist.includes(post.equipment) ? (
                                                                <span className="text-electric-cyan">★ Subscribed to Watchlist</span>
                                                            ) : (
                                                                <button onClick={() => toggleWatch(post.equipment)} className="hover:text-white">☆ Watch Equipment</button>
                                                            )}
                                                        </div>

                                                        {/* Checklist rendering */}
                                                        {post.checklist && (
                                                            <div className="mt-3 space-y-1.5 p-2 bg-white/5 rounded border border-white/5 text-[9px] text-white/60">
                                                                {post.checklist.map((item, idx) => (
                                                                    <div key={idx} className="flex items-center gap-1.5">
                                                                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                                                                        <span className="line-through">{item.text}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* SECTION 2: QR CODE SCAN SIMULATION */}
                                    {activeSection === "qr-scanner" && (
                                        <motion.div
                                            key="qr-panel"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="text-center py-6 space-y-6 max-w-md mx-auto"
                                        >
                                            <h3 className="text-sm font-bold text-white/90">QR Code Asset Scanner</h3>
                                            <p className="text-[10px] text-white/40 font-mono">Simulate a geocoded equipment tag scan to fetch historical binders.</p>
                                            
                                            <div className="flex justify-center gap-4">
                                                <button 
                                                    onClick={() => handleQRScan("Chiller-02")}
                                                    className="px-4 py-3 bg-slate-950 hover:bg-slate-850 border border-slate-800 rounded-xl font-mono text-xs flex flex-col items-center gap-2"
                                                >
                                                    <QrCode className="w-6 h-6 text-electric-cyan" />
                                                    <span>Scan Chiller-02</span>
                                                </button>
                                                <button 
                                                    onClick={() => handleQRScan("AHU-04")}
                                                    className="px-4 py-3 bg-slate-950 hover:bg-slate-850 border border-slate-800 rounded-xl font-mono text-xs flex flex-col items-center gap-2"
                                                >
                                                    <QrCode className="w-6 h-6 text-electric-cyan" />
                                                    <span>Scan AHU-04</span>
                                                </button>
                                            </div>

                                            {isScanning && (
                                                <div className="text-xs font-mono text-white/40 animate-pulse py-4">
                                                    Standard geocoding check in progress...
                                                </div>
                                            )}

                                            {scannedAsset && (
                                                <motion.div 
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    className="p-5 bg-slate-950 rounded-xl border border-slate-800 text-left font-mono text-xs space-y-4"
                                                >
                                                    <div className="flex justify-between items-center border-b border-slate-850 pb-2">
                                                        <div>
                                                            <div className="font-bold text-white">{scannedAsset}</div>
                                                            <div className="text-[9px] text-white/40">ID: BT-BTU-04021</div>
                                                        </div>
                                                        <button 
                                                            onClick={() => toggleWatch(scannedAsset)}
                                                            className={`px-2 py-0.5 rounded text-[8px] font-bold ${
                                                                watchlist.includes(scannedAsset) ? "bg-electric-cyan/20 text-electric-cyan" : "bg-white/5 text-white/50"
                                                            }`}
                                                        >
                                                            {watchlist.includes(scannedAsset) ? "Watching" : "+ Watch"}
                                                        </button>
                                                    </div>
                                                    
                                                    <div className="space-y-1.5 text-[10px] text-white/70">
                                                        <div><strong>Manufacturer:</strong> Siemens Building Technologies</div>
                                                        <div><strong>Location:</strong> Plant Basement Compressor Room B</div>
                                                        <div><strong>Last Serviced:</strong> Marcus Vance (10m ago)</div>
                                                        <div><strong>Status:</strong> Active (Vibration spike flagged)</div>
                                                    </div>

                                                    <div className="p-2.5 bg-white/5 border border-white/5 rounded text-[9px] text-white/50">
                                                        *QR identification standardized via Activities Portal geocodes. Historical maintenance logs loaded.
                                                    </div>
                                                </motion.div>
                                            )}
                                        </motion.div>
                                    )}

                                    {/* SECTION 3: REMOTE ACOUSTIC WAVE DIAGNOSTICS */}
                                    {activeSection === "diagnostics" && (
                                        <motion.div
                                            key="diag-panel"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="space-y-6"
                                        >
                                            <div>
                                                <h3 className="text-sm font-bold text-white/90">Acoustic Diagnostics Waveform</h3>
                                                <p className="text-[10px] text-white/40 font-mono mt-0.5">Remote machine room microphone analysis</p>
                                            </div>

                                            {/* Frequency Waves simulator */}
                                            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 flex flex-col items-center justify-center min-h-[140px]">
                                                <div className="flex gap-1.5 items-end justify-center h-20 w-64 mb-4">
                                                    {audioBands.map((band, idx) => (
                                                        <motion.div 
                                                            key={idx}
                                                            animate={{ height: `${band}%` }}
                                                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                                            className={`w-4 rounded-t ${idx === 4 && audioDiagnosticStatus === "analyzed" ? "bg-rose-500" : "bg-electric-cyan"}`}
                                                        />
                                                    ))}
                                                </div>
                                                <div className="text-[9px] font-mono text-white/40 flex justify-between w-64 uppercase">
                                                    <span>100Hz</span>
                                                    <span>2.4kHz</span>
                                                    <span>{audioDiagnosticStatus === "analyzed" ? "4.2kHz Spike!" : "4kHz"}</span>
                                                    <span>10kHz</span>
                                                </div>
                                            </div>

                                            <div className="flex gap-4 items-center">
                                                <button 
                                                    onClick={runAudioDiagnostics}
                                                    className="px-4 py-2.5 bg-electric-cyan hover:bg-cyan-500 text-slate-950 font-bold font-mono text-[10px] rounded transition-transform hover:scale-[1.02]"
                                                >
                                                    {audioDiagnosticStatus === "listening" ? "Listening..." : "Analyze Audio Stream"}
                                                </button>

                                                <div className="text-xs font-mono text-white/70 leading-relaxed text-left flex-1 min-h-[48px]">
                                                    {audioDiagnosticStatus === "idle" && "Trigger audio scan. The simulator listens to remote compressor hums to isolate harmonics."}
                                                    {audioDiagnosticStatus === "listening" && "Capturing remote microphone feeds. Standardizing frequency amplitudes..."}
                                                    {audioDiagnosticStatus === "analyzed" && (
                                                        <div className="text-rose-400">
                                                            <strong>Spike Checked at 4.2kHz (+12dB):</strong> Acoustic signature points to a minor bearing alignment anomaly on Chiller-02.
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* SECTION 4: MY WATCHLIST */}
                                    {activeSection === "watchlist" && (
                                        <motion.div
                                            key="watchlist-panel"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="space-y-4"
                                        >
                                            <div>
                                                <h3 className="text-sm font-bold text-white/90">My Watchlist Subscriptions</h3>
                                                <p className="text-[10px] text-white/40 font-mono mt-0.5">Track hardware logs automatically</p>
                                            </div>

                                            <div className="divide-y divide-slate-800/40 border border-slate-800 rounded-xl overflow-hidden font-mono text-xs text-left bg-slate-950">
                                                {watchlist.length === 0 ? (
                                                    <div className="p-4 text-white/40">No equipment added to your watchlist. Check feed logs or QR tags to subscribe.</div>
                                                ) : (
                                                    watchlist.map((asset) => (
                                                        <div key={asset} className="p-3.5 flex justify-between items-center">
                                                            <div>
                                                                <div className="font-bold text-white">{asset}</div>
                                                                <div className="text-[9px] text-white/40">Alarms: Active • Status: Online</div>
                                                            </div>
                                                            <button 
                                                                onClick={() => toggleWatch(asset)}
                                                                className="px-2.5 py-1 bg-slate-900 border border-slate-800 text-[10px] text-rose-400 rounded hover:bg-slate-850"
                                                            >
                                                                Unsubscribe
                                                            </button>
                                                        </div>
                                                    ))
                                                )}
                                            </div>
                                        </motion.div>
                                    )}

                                </AnimatePresence>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Document Repository & Solutions */}
                    <section className="prose prose-lg max-w-none text-authority-navy/80 font-light leading-relaxed mb-24">
                        <h2 className="text-3xl font-bold font-heading text-authority-navy mb-6">Structuring the DFL Solution</h2>
                        <p>
                            Transitioning static facility logs to a social activity log solved several key problems identified in Young Ryu’s user discovery process.
                        </p>
                        
                        <h3 className="text-2xl font-bold text-authority-navy mt-10 mb-4 font-heading">Remedy for Technician Rotations</h3>
                        <p>
                            Because technician rosters shift constantly across facilities, the DFL feed serves as a running chronological binder of the building's status. Any incoming engineer inspects the latest pins and checklists, getting up to speed without reading physical scrap notes or spreadsheets.
                        </p>

                        <h3 className="text-2xl font-bold text-authority-navy mt-10 mb-4 font-heading">Proactive Alarm & Priority Sync</h3>
                        <p>
                            To maintain backend cohesion, the priority attributes (High, Medium, Info) and state triggers synchronize automatically with **Siemens Activity Central**. Incidents from building automations write directly to the DFL feed, notifying facility directors before hot/cold complaints trigger.
                        </p>

                        <h3 className="text-2xl font-bold text-authority-navy mt-10 mb-4 font-heading">Remote Diagnostics Binders</h3>
                        <p>
                            A key finding in the user discoveries was the need to troubleshoot hardware remotely. By including support for geocoded QR scanner codes to inspect machine sheets, and implementing **acoustic waveforms analysis** (listening to equipment room hums to isolate minor bearing misalignments), we designed a workspace where engineers diagnose building issues safely from home.
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
                            <h3 className="font-bold text-2xl font-heading text-authority-navy mb-4">Let’s Talk About Your IoT Project</h3>
                            <p className="text-authority-navy/70 mb-8 max-w-2xl mx-auto">
                                If you are looking to design complex touchscreen interfaces, remote operations control modules, or collaborative IoT workspaces, let's talk.
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
