import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
    Stethoscope,
    Workflow,
    LayoutTemplate,
    PlayCircle,
    Palette,
    Terminal,
    Compass
} from 'lucide-react'
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
        title: "Designing the 90% Below the Surface",
        description: "In the AI era, the interface is just the tip of the iceberg. We architect the invisible layer: the Context Awareness, Intent Recognition, and Data Schema that power the system. We define how the product thinks before we determine how it looks.",
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
        icon: <Palette size={24} />,
        subtitle: "Step 5",
        label: "Agentic Design Systems",
        title: "Polish Without Rework",
        description: "We engineer Agentic Design Systems. We generate a machine-readable 'Single Source of Truth' (tokens.json) that automates the connection between Figma and Code, eliminating design drift forever.",
        deliverables: ["W3C Design Tokens", "High-Fidelity UI", "Accessibility Audit"],
        color: "#F43F5E" // Rose
    },
    {
        icon: <Terminal size={24} />,
        subtitle: "Step 6",
        label: "Build Execution & Governance",
        title: "Ensuring Intent Survives",
        description: "Ensuring intent survives implementation. Whether we build the MVP (via Next.js/AI) or partner with your eng team, we validate the build against the logic to prevent 'product drift'.",
        deliverables: ["Production V1", "Dev-Ready Handoff", "QA Governance"],
        color: "#06B6D4" // Cyan
    }
]

export default function Services() {
    return (
        <section className="section bg-primary min-h-screen pt-24">
            <SEO
                title="Services"
                description="Logic Architecture, Agentive Design, and Human Factors Engineering services for enterprise product teams."
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
                            Outcome-Driven Design for Complex Products<br />
                        </h1>
                        <p className="text-xl text-secondary leading-relaxed">
                            A rigorous, evidence-based methodology designed to bridge the gap between Human Factors science and AI-native production. We reduce risk before we write code.
                        </p>
                    </div>
                </section>

                {/* The Process Section - The Logic Engine */}
                <section className="container mb-32 relative">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">The Logic Engine</h2>
                        <p className="text-blue-grey">Our proven methodology for complex systems</p>
                    </div>

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

                {/* Philosophy Section */}
                <section className="container mb-32">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[var(--border)] pt-12">
                        <div className="p-8 bg-secondary/30 rounded-lg border border-[var(--border)]">
                            <h3 className="text-lg font-bold text-white mb-2">Why this works</h3>
                            <p className="text-secondary">It treats Product Design as Engineering, not Art.</p>
                        </div>
                        <div className="p-8 bg-secondary/30 rounded-lg border border-[var(--border)]">
                            <h3 className="text-lg font-bold text-white mb-2">The Result</h3>
                            <p className="text-secondary">Less rework, faster shipping, and products that actually handle real-world complexity.</p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="container text-center pb-12 pt-24">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-4xl font-bold mb-8">Ready to build with rigor?</h2>
                        <a href="#contact" className="btn inline-flex items-center gap-2 text-lg px-8 py-4"
                            style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
                            Start a conversation
                        </a>
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
            <div className="timeline-content">
                <div className="timeline-meta">
                    <span className="font-mono text-[var(--accent)] text-xs uppercase tracking-widest">{step.subtitle}</span>
                    <span className="font-mono text-[var(--brand-orange)] text-sm font-bold">{step.label}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-secondary leading-relaxed mb-6">{step.description}</p>

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
