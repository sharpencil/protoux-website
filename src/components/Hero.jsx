import { ArrowRight, Layout, Code, GitBranch, Layers, Cpu, Rocket, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import LivingGrid from './LivingGrid'

export default function Hero() {
    return (
        <section className="hero-section">
            {/* Living Grid Background */}
            <LivingGrid />

            <div className="container relative z-10">
                <div className="flex flex-col items-center text-center" style={{ maxWidth: '1000px', margin: '0 auto' }}>

                    <h1 className="heading-gradient animate-fade-in" style={{ marginBottom: '1.5rem', lineHeight: 1.1, fontSize: '54px' }}>
                        Designing Clear Decisions<br /> for Complex Products
                    </h1>

                    <p className="text-secondary text-xl animate-fade-in delay-200" style={{ marginBottom: '2.5rem', maxWidth: '600px' }}>
                        Since 2016, Proto UX has helped teams reduce risk, validate decisions, and design scalable systems—adapting continuously as technology and tools have evolved.
                    </p>

                    <div className="flex gap-4 flex-wrap justify-center animate-fade-in delay-300">
                        <Link to="/start" className="btn btn-primary">
                            Start a conversation
                        </Link>
                        <Link to="/services" className="btn btn-secondary">
                            Explore our services <ArrowRight size={16} style={{ marginLeft: 8 }} />
                        </Link>
                    </div>

                    <div style={{ marginTop: '6rem' }} className="animate-fade-in delay-500">
                        <h2 className="heading-gradient mb-4">Trusted by Product Teams in Austin and Beyond</h2>
                        <div className="flex gap-8 justify-center items-center flex-wrap grayscale" style={{ maxWidth: '100%', opacity: 0.5 }}>
                            {[
                                "APIConnect", "NRCCUA", "Siemens Building Technologies", "AIQUEOUS",
                                "ProjectManager", "CulturSys", "Calavista Software", "TForce Freight", "Evergreen Beauty College",
                                "WiFi Alliance", "Iodine Software", "WellSmith", "Infinite Giving",
                                "Dun & Bradstreet", "Encino Energy", "Living Security", "TriggerPoint Media"
                            ].map((name) => (
                                <div key={name} style={{ fontWeight: 600, fontSize: '1rem', whiteSpace: 'nowrap' }}>{name}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
