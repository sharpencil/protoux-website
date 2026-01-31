import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    Stethoscope,
    Workflow,
    LayoutTemplate,
    PlayCircle,
    Palette,
    Terminal,
    Compass,
    ShieldCheck,
    Zap,
    Cpu,
    Boxes,
    BrainCircuit
} from 'lucide-react'
import CodeTranslation from '../components/CodeTranslation';
import SEO from '../components/SEO'


const processSteps = [
    {
        icon: <Compass size={24} />,
        subtitle: "Step 1",
        label: "The Strategy",
        title: "Diagnose & Align",
        description: "Clarity precedes execution. We apply rigorous research to align user needs with business goals and organizational constraints. By mapping these realities early, we identify high-value leverage points and define exactly what is NOT worth building.",
        deliverables: ["Stakeholder Alignment", "Business Logic", "Risk Mapping"],
        color: "#FF4F00" // International Orange
    },
    {
        icon: <Workflow size={24} />,
        subtitle: "Step 2",
        label: "Intelligence Architecture",
        title: "Intent Orchestration",
        description: "In the AI era, the interface is secondary. We design the lifecycle of intent: deciding when the system should act, when it should ask, and how it fails gracefully. We turn probabilistic guessing into reliable behavior.",
        deliverables: ["Intent Modeling", "Context State", "Failure Protocols"],
        color: "#3B82F6" // Blue
    },
    {
        icon: <LayoutTemplate size={24} />,
        subtitle: "Step 3",
        label: "Interaction Protocols",
        title: "Structuring the Human-Machine Dialogue",
        description: "We iteratively design the system architecture against the logic model. We focus on adaptive workflows and error recovery protocols, ensuring the system can handle ambiguity and guide the user back to the 'Happy Path' without friction.",
        deliverables: ["Adaptive Flows", "State Diagrams", "Architecture Maps"],
        color: "#10B981" // Emerald
    },
    {
        icon: <PlayCircle size={24} />,
        subtitle: "Step 4",
        label: "Behavioral Simulation",
        title: "Testing the Blueprint",
        description: "We test the blueprint, not the paint. We build logic-backed prototypes to test critical flows against real human behavior, ensuring the product behaves correctly, not just ideally.",
        deliverables: ["Interactive Logic Prototypes", "Usability Stress Tests"],
        color: "#8B5CF6" // Violet
    },
    {
        icon: <ShieldCheck size={24} />,
        subtitle: "Step 5",
        label: "Code-Backed Governance",
        title: "Agentic System Governance",
        description: <>We don't just document the 'What' (Components). We engineer the 'Why' (Reasoning).
            We deliver Reasoning Infrastructure—AI-readable context files (SYSTEM.md) that enforce interaction principles, error handling, and behavioral patterns automatically. We turn your Design Guidelines into executable code constraints.</>,
        deliverables: ["Governance Protocol", "Component Library", "Context Files"],
        color: "#F43F5E", // Rose - sticking to a distinct color
        isTechnical: true
    },
    {
        icon: <Zap size={24} />,
        subtitle: "Step 6",
        label: "Zero-Latency Execution",
        title: "Visual Engineering",
        description: <>The era of the "handoff" is over. We utilize Visual Engineering to manipulate production code directly in the browser. By iterating on the live product using AI-native workflows, we ensure the physics, spacing, and logic feel native from Day 1.</>,
        deliverables: ["Production V1", "Bi-directional Sync", "Next.js MVP"],
        color: "#06B6D4", // Cyan
        isTechnical: true
    }
]

export default function Capabilities() {
    return (
        <section className="section bg-primary min-h-screen pt-24">
            <SEO
                title="Capabilities"
                description="We don't just deliver mockups. We deliver architectural logic and production-ready code. Moving from simulation to reality faster."
            />
            <div className="container">
                {/* Hero Section */}
                <section className="container relative mb-12">
                    {/* Background Circuit Decoration */}
                    <div className="absolute inset-0 pointer-events-none opacity-10" style={{ zIndex: 0 }}>
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="circuit-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                                    <path d="M 10 10 L 90 10 L 90 90 L 10 90 Z" fill="none" stroke="var(--border)" strokeWidth="0.5" />
                                    <circle cx="10" cy="10" r="1.5" fill="var(--accent)" opacity="0.5" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#circuit-grid)" />
                        </svg>
                    </div>

                    <div className="relative z-10 max-w-3xl">
                        <h1 className="heading-gradient mb-6">
                            Capabilities
                        </h1>
                        <p className="text-xl text-secondary leading-relaxed">
                            Evidence-based design, engineered for production. We bridge the gap between Human Factors science and AI-native development.
                        </p>
                    </div>
                </section>

                {/* The Philosophy */}
                <section className="container mb-16 relative">
                    <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">
                        Designing with <span className="text-[var(--brand-orange)]">Real Materials</span>
                    </h2>
                    <div className="p-8 md:p-12 rounded-2xl border border-[var(--border)] bg-[#0d1117] overflow-hidden relative">
                        {/* Code Editor Aesthetic */}
                        <div className="absolute top-0 left-0 right-0 h-8 bg-[#161b22] border-b border-[var(--border)] flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                        </div>
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <p className="text-secondary text-lg leading-relaxed font-mono">
                                    Static mockups are simulations. They hide complexity. At Proto UX, we believe in moving to the browser early. By designing in <span className="text-white">code</span>, we validate accessibility, data logic, and responsive physics instantly—solving engineering debt before it starts. We don't hand off fantasies; we hand off <span className="text-white">truth</span>.
                                </p>
                            </div>
                            <div className="w-full">
                                <CodeTranslation />
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Process Section - The Logic Engine */}
                <section className="container py-16 mb-16 relative">
                    <div className="timeline-container">
                        {/* Continuous Glowing Line */}
                        <div className="timeline-line" />

                        <div className="timeline-items">
                            {processSteps.map((step, index) => (
                                <TimelineItem key={index} step={step} index={index} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* The Agentic Stack - Formula Layout */}
                <section className="container mb-24 relative">
                    <h2 className="text-3xl font-bold mb-12 text-center">The Agentic Stack</h2>

                    {/* Formula Container */}
                    <div className="p-8 md:p-12 rounded-2xl border border-[var(--border)] bg-[#0d1117] relative overflow-hidden">
                        <div className="relative z-10 flex flex-row flex-wrap items-center justify-center gap-4">

                            {/* Card 1: The Brain */}
                            <div className="flex-1 min-w-[140px] text-center p-4 rounded-xl bg-[#161b22] border border-[var(--border)] shadow-lg">
                                <h3 className="text-lg font-bold text-white mb-2">The Brain</h3>
                                <p className="text-secondary text-xs font-mono">
                                    <span className="block text-[#FF4F00] mb-1">Human Factors</span>
                                    (Context & Safety)
                                </p>
                            </div>

                            {/* Symbol: + */}
                            <div className="text-2xl md:text-4xl font-bold font-mono" style={{ color: '#FF4F00' }}>+</div>

                            {/* Card 2: The System */}
                            <div className="flex-1 min-w-[140px] text-center p-4 rounded-xl bg-[#161b22] border border-[var(--border)] shadow-lg">
                                <h3 className="text-lg font-bold text-white mb-2">The System</h3>
                                <p className="text-secondary text-xs font-mono">
                                    <span className="block text-blue-500 mb-1">Next.js & Supabase</span>
                                    (Structure & Scale)
                                </p>
                            </div>

                            {/* Symbol: x */}
                            <div className="text-2xl md:text-4xl font-bold font-mono" style={{ color: '#FF4F00' }}>×</div>

                            {/* Card 3: The Accelerator */}
                            <div className="flex-1 min-w-[140px] text-center p-4 rounded-xl bg-[#161b22] border border-[var(--border)] shadow-lg">
                                <h3 className="text-lg font-bold text-white mb-2">The Accelerator</h3>
                                <p className="text-secondary text-xs font-mono">
                                    <span className="block text-emerald-500 mb-1">Agentic AI</span>
                                    (Velocity & Cost)
                                </p>
                            </div>

                            {/* Symbol: = */}
                            <div className="text-2xl md:text-4xl font-bold font-mono px-2" style={{ color: '#FF4F00' }}>=</div>

                            {/* Result */}
                            <div className="flex-1 min-w-[140px] text-center p-4">
                                <h3 className="text-xl md:text-2xl font-bold text-white whitespace-nowrap">Logic Architecture</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="container text-center pb-12 pt-24">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-4xl font-bold mb-8">Ready to build with rigor?</h2>
                        <Link to="/start" className="btn inline-flex items-center gap-2 text-lg px-8 py-4"
                            style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
                            Start a conversation
                        </Link>
                    </div>
                </section>
            </div>
        </section>
    )
}

function TimelineItem({ step, index }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    })

    // Fade in and slide up effect
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
    const y = useTransform(scrollYProgress, [0, 1], [50, 0])

    const isEven = index % 2 === 0
    // Step 1 (Index 0) should be Left (odd style), Step 2 Right (even style)
    const itemClass = isEven ? 'timeline-item odd' : 'timeline-item even'

    return (
        <motion.div
            ref={ref}
            style={{ opacity, y }}
            className={itemClass}
        >
            {/* Icon Wrapper */}
            <div className="timeline-icon-wrapper">
                <div
                    className="timeline-icon"
                    style={{
                        color: step.color,
                        boxShadow: `0 0 20px ${step.color}40`,
                        borderColor: `${step.color}40`
                    }}
                >
                    {step.icon}
                </div>
            </div>

            {/* Content */}
            <div
                className={`timeline-content ${step.isTechnical ? 'bg-[#0d1117] border-[var(--border)] border' : ''}`}
                style={step.isTechnical ? {
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                } : {}}
            >
                <div className="timeline-meta">
                    <span className="font-mono text-[var(--accent)] text-xs uppercase tracking-widest">{step.subtitle}</span>
                    <span className="font-mono text-[var(--brand-orange)] text-sm font-bold">{step.label}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <div className="text-secondary leading-relaxed mb-6">{step.description}</div>

                {/* Deliverables Tags */}
                <div className="timeline-tags">
                    {step.deliverables.map((item, i) => (
                        <span key={i} className="glass-tag text-xs font-mono text-[var(--text-secondary)]">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
