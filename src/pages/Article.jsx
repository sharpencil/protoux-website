import React, { useEffect, useState } from 'react'
import SEO from '../components/SEO'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react'
import { parseFrontmatter } from '../utils/markdown'

export default function Article() {
    const { slug } = useParams()
    const [article, setArticle] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadArticle = async () => {
            try {
                // Vite specific way to dynamic import
                // We have to iterate glob results to find the one matching slug
                const modules = import.meta.glob('../content/insights/*.md', { query: '?raw', import: 'default', eager: true })

                // Find path ending with slug.md
                const path = Object.keys(modules).find(p => p.endsWith(`/${slug}.md`))

                if (path) {
                    const rawContent = modules[path]
                    const { metadata, content } = parseFrontmatter(rawContent)
                    setArticle({ ...metadata, content })
                }
            } catch (err) {
                console.error("Failed to load article", err)
            } finally {
                setLoading(false)
            }
        }

        loadArticle()
    }, [slug])

    if (loading) return <div className="min-h-screen bg-primary pt-32 text-center text-secondary">Loading...</div>
    if (!article) return <div className="min-h-screen bg-primary pt-32 text-center text-white">Article not found</div>

    return (
        <article className="min-h-screen bg-primary pt-32 pb-24">
            <SEO
                title={`${article.title} | Proto UX Insights`}
                description={article.excerpt}
            />
            <div className="container max-w-3xl mx-auto px-6">

                {/* Back Link */}
                <Link to="/insights" className="btn btn-secondary text-sm inline-flex items-center gap-2 mb-12">
                    <ArrowLeft className="w-4 h-4" /> Back to Insights
                </Link>

                {/* Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-4 text-sm text-accent font-medium mb-4">
                        <span>{article.category}</span>
                        <span className="w-1 h-1 rounded-full bg-white/20"></span>
                        <div className="flex items-center gap-2 text-secondary">
                            <Clock className="w-4 h-4" />
                            {article.readingTime}
                        </div>
                        <span className="w-1 h-1 rounded-full bg-white/20"></span>
                        <div className="flex items-center gap-2 text-secondary">
                            <Calendar className="w-4 h-4" />
                            {article.date}
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        {article.title}
                    </h1>
                    <p className="text-xl text-secondary leading-relaxed border-l-2 border-accent pl-6">
                        {article.excerpt}
                    </p>
                </header>

                {/* Content */}
                <div className="prose prose-invert prose-lg max-w-none">
                    <ReactMarkdown
                        components={{
                            h2: ({ node, ...props }) => <h2 className="text-2xl font-bold text-white mt-12 mb-6" {...props} />,
                            h3: ({ node, ...props }) => <h3 className="text-xl font-bold text-white mt-8 mb-4" {...props} />,
                            p: ({ node, ...props }) => <p className="text-secondary leading-relaxed mb-6" {...props} />,
                            ul: ({ node, ...props }) => <ul className="space-y-3 mb-8 text-secondary" {...props} />,
                            li: ({ node, ...props }) => <li className="flex items-start gap-2" {...props}><span className="text-accent mt-1.5">•</span><span className="flex-1">{props.children}</span></li>,
                            ol: ({ node, ...props }) => <ol className="list-decimal pl-5 space-y-2 mb-8 text-secondary" {...props} />,
                            strong: ({ node, ...props }) => <strong className="font-bold text-white" {...props} />,
                        }}
                    >
                        {article.content}
                    </ReactMarkdown>
                </div>

                {/* Footer CTA */}
                <div className="mt-60 pt-10 border-t border-white/10">
                    <div className="bg-white/5 rounded-2xl p-8 md:p-10 text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">Start a conversation</h3>
                        <p className="text-secondary mb-8 max-w-lg mx-auto">
                            Dealing with complex challenges? We're happy to discuss your specific context.
                        </p>
                        <Link to="/start" className="btn btn-primary inline-flex items-center gap-2">
                            Get in touch <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    )
}
