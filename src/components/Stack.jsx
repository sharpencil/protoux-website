import { NextJs, ReactIcon, TypeScript, TailwindCSS, ShadcnUI, Supabase, Vercel, Netlify } from './Icons'

export default function Stack() {
    const tools = [
        { name: "Next.js", icon: <NextJs /> },
        { name: "React", icon: <ReactIcon /> },
        { name: "TypeScript", icon: <TypeScript /> },
        { name: "Tailwind CSS", icon: <TailwindCSS /> },
        { name: "Shadcn/ui", icon: <ShadcnUI /> },
        { name: "Supabase", icon: <Supabase /> },
        { name: "Vercel", icon: <Vercel /> },
        { name: "Netlify", icon: <Netlify /> }
    ]

    return (
        <section className="section">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="heading-gradient">Design & Built with Modern Stacks</h2>
                    <p className="text-secondary max-w-2xl mx-auto">
                        We don't hand off static images. We hand off functional, type-safe components ready for production.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-12 md:gap-16">
                    {tools.map((tool, index) => (
                        <div key={index} className="flex flex-col items-center gap-3 p-6 rounded-xl hover:bg-white/5 transition-colors">
                            <div className="text-accent mb-2">
                                {tool.icon}
                            </div>
                            <span className="text-base">{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
