import React, { useEffect, useState } from 'react'
import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import { parseFrontmatter } from '../utils/markdown'

export default function Insights() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        // Vite glob import to get raw content
        const modules = import.meta.glob('../content/insights/*.md', { as: 'raw', eager: true })

        const loadedArticles = Object.entries(modules).map(([path, content]) => {
            const { metadata } = parseFrontmatter(content)
            // Extract slug from filename
            const slug = path.split('/').pop().replace('.md', '')
            return {
                slug,
                ...metadata
            }
        })

        // Sort by date desc (assuming ISO strings)
        loadedArticles.sort((a, b) => new Date(b.date) - new Date(a.date))
        setArticles(loadedArticles)
    }, [])

    return (
        <section className="min-h-screen bg-primary pt-32 pb-24 relative overflow-hidden">
            <SEO
                title="Insights | Proto UX"
                description="Perspectives on UX, AI, and Designing for Complexity. Challenges we see across B2B and enterprise products."
            />
            {/* Top Gradient */}
            <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-[#1a1f2e] to-black pointer-events-none z-0" />

            <div className="container relative z-10">
                {/* Header */}
                <div className="max-w-3xl mb-20">
                    <h1 className="heading-gradient mb-6">Perspectives on UX, AI, and Designing for Complexity</h1>
                    <p className="text-xl text-secondary leading-relaxed mb-8">
                        This is where we share how we think about product design in a world shaped by AI, increasing complexity, and accelerating expectations.
                        The articles here reflect real challenges we see across B2B and enterprise products—written for leaders who care about decision quality, not trends.
                    </p>

                    <div className="grid grid-cols-2 gap-8 text-sm text-secondary border-t border-white/10 pt-8" style={{ display: 'none' }}>
                        {/* Sections removed per user request */}
                    </div>
                </div>

                {/* Article List */}
                <div className="max-w-4xl mb-24">
                    <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Recent Insights</h2>
                    <div className="flex flex-col gap-16">
                        {articles.map((article) => (
                            <div key={article.slug} className="group">
                                <Link to={`/insights/${article.slug}`} className="block p-6 -mx-6 rounded-2xl hover:bg-white/5 transition-colors">
                                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                                            {article.title}
                                        </h3>
                                        <div className="flex items-center gap-4 text-sm text-muted shrink-0">
                                            <span>{article.category}</span>
                                            <span className="w-1 h-1 rounded-full bg-white/20"></span>
                                            <span>{article.readingTime}</span>
                                        </div>
                                    </div>
                                    <p className="text-lg text-secondary mb-4 max-w-2xl">
                                        {article.excerpt}
                                    </p>
                                    <div className="flex items-center gap-2 text-accent font-medium text-sm">
                                        Read Article <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* How This Relates removed per user request */}

                {/* CTA */}
                <div className="custom-gradient-bg border border-white/10 rounded-2xl p-10 text-center max-w-3xl mx-auto bg-gradient-to-br from-white/10 to-white/5">
                    <h2 className="text-2xl font-bold text-white mb-4">Want to Apply This Thinking to Your Product?</h2>
                    <p className="text-lg text-secondary mb-8">
                        If you’re dealing with similar challenges and want to discuss your product, we’re happy to talk.
                    </p>
                    <Link to="/start" className="btn btn-primary inline-flex items-center gap-2">
                        Start a conversation <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
