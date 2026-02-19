"use client";

const stack = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn/ui",
    "Supabase",
    "Vercel"
];

export default function TechStack() {
    return (
        <section className="py-20 bg-white border-t border-slate-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-lg font-semibold text-authority-navy mb-8 font-heading">Designed & Built with Modern Stacks.</h2>

                <div className="flex flex-wrap justify-center gap-4">
                    {stack.map((item, index) => (
                        <div key={index} className="px-6 py-2 bg-slate-gray rounded-full text-authority-navy font-mono text-sm border border-slate-200 shadow-sm">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
