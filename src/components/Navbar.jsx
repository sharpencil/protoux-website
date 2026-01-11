import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Work', href: '/work' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'About', href: '/about' },
        { name: 'Insights', href: '/insights' },
    ]

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            borderBottom: isScrolled ? '1px solid var(--border)' : 'none',
            backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(12px)' : 'transition: all 0.3s ease'
        }}>
            <div className="container" style={{ height: 'var(--header-height)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img src="/protoux-logo.png" alt="Proto UX" style={{ height: '18px', display: 'block' }} />
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 400, borderLeft: '1px solid var(--border)', paddingLeft: '0.75rem', marginTop: '0.1rem' }}>
                        Product Design for Clarity
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="nav-desktop flex items-center gap-8" style={{ display: 'none' }}>
                    {/* Mobile view override in CSS, doing inline for default desktop */}
                    <style>{`
             @media(min-width: 769px) {
               .nav-desktop { display: flex !important; }
               .mobile-toggle { display: none !important; }
             }
           `}</style>
                    {navLinks.map(link => (
                        <Link key={link.name} to={link.href} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }} className="hover:text-primary">
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/start" className="btn btn-outline-orange" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                        Start a conversation
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    style={{ color: 'white' }}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div style={{
                    position: 'fixed',
                    top: 'var(--header-height)',
                    left: 0,
                    right: 0,
                    backgroundColor: 'var(--bg-primary)',
                    borderBottom: '1px solid var(--border)',
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}>
                    {navLinks.map(link => (
                        <Link
                            key={link.name}
                            to={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{ fontSize: '1rem', padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/start" className="btn btn-outline-orange" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                        Start a conversation
                    </Link>
                </div>
            )}
        </nav>
    )
}
