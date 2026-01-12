"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Terminal } from "lucide-react";
import CircuitBackground from "./CircuitBackground";

// Type definitions
interface ProjectLink {
    demo: string;
    github: string;
}

interface Project {
    title: string;
    description: string;
    tech: string[];
    links: ProjectLink;
    status: string;
}

const projects: Project[] = [
    {
        title: "لوحة_تحكم_SAAS_V1",
        description: "منصة تحليلات فورية. تصور بيانات، تتبع مستخدمين، وتقارير مخصصة.",
        tech: ["NEXT.JS", "TS", "D3.JS", "SUPABASE"],
        links: { demo: "#", github: "#" },
        status: "مباشر"
    },
    {
        title: "نواة_المتجر_الإلكتروني",
        description: "قالب متجر Headless فائق السرعة. مدمج مع Stripe ونظام إدارة محتوى.",
        tech: ["REACT", "NODE", "STRIPE", "PRISMA"],
        links: { demo: "#", github: "#" },
        status: "تم_النشر"
    },
    {
        title: "تطبيق_إدارة_المهام",
        description: "إدارة مهام للفرق عن بعد. دعم العمل دون اتصال ومزامنة فورية.",
        tech: ["R_NATIVE", "FIREBASE", "REDUX"],
        links: { demo: "#", github: "#" },
        status: "بيتا"
    }
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="py-24 px-6 md:px-20 max-w-7xl mx-auto relative"
            aria-labelledby="projects-heading"
        >
            <div className="absolute inset-0 border-l border-slate-800/50 left-8 md:left-20 pointer-events-none" aria-hidden="true" />

            <header className="mb-16 relative">
                <div className="flex items-center gap-3 mb-2">
                    <Terminal size={20} className="text-[var(--accent)]" aria-hidden="true" />
                    <h2
                        id="projects-heading"
                        className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter"
                    >
                        سجل_المشاريع
                    </h2>
                </div>
                <div className="h-1 w-24 bg-[var(--accent)] mb-4" aria-hidden="true" />
                <p className="text-slate-500 font-mono text-sm max-w-2xl rtl">
                    <span aria-hidden="true">{`>`}</span> الوصول_للأرشيف... <br />
                    <span aria-hidden="true">{`>`}</span> عرض_الأعمال_المختارة
                </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
                {projects.map((project, idx) => (
                    <motion.article
                        key={project.title}
                        role="listitem"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="group relative bg-slate-900 border border-slate-700 hover:border-[var(--accent)] transition-all duration-300 rounded-none overflow-hidden"
                    >
                        {/* Status Label */}
                        <div className="absolute top-4 right-4 z-20">
                            <span className="px-2 py-1 bg-black border border-[var(--accent-secondary)] text-[var(--accent-secondary)] text-[10px] font-bold tracking-widest font-mono">
                                {project.status}
                            </span>
                        </div>

                        <div className="h-48 bg-black w-full relative overflow-hidden text-right p-4 border-b border-slate-800 group-hover:border-[var(--accent)] transition-colors">
                            {/* Scanline Effect */}
                            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#000_3px)] opacity-20 pointer-events-none" aria-hidden="true" />

                            <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity" aria-hidden="true">
                                <Terminal size={64} className="text-slate-600" />
                            </div>
                        </div>

                        <div className="p-6 relative">
                            <h3 className="text-lg font-bold mb-3 text-white group-hover:text-[var(--accent)] transition-colors font-mono tracking-tight">
                                {project.title}
                            </h3>
                            <p className="text-slate-400 mb-6 text-xs leading-relaxed font-mono">
                                {project.description}
                            </p>

                            <ul className="flex flex-wrap gap-2 mb-6" aria-label="Technologies used">
                                {project.tech.map((t) => (
                                    <li
                                        key={t}
                                        className="text-[10px] font-bold px-2 py-1 bg-slate-800 text-slate-300 border border-slate-700 group-hover:border-[var(--accent)]/50 transition-colors"
                                    >
                                        {t}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                                <a
                                    href={project.links.demo}
                                    className="flex items-center gap-2 text-xs font-bold text-white hover:text-[var(--accent)] transition-colors uppercase tracking-widest font-mono"
                                    aria-label={`Live preview of ${project.title}`}
                                >
                                    <ExternalLink size={14} aria-hidden="true" /> معاينة_حية
                                </a>
                                <a
                                    href={project.links.github}
                                    className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-[var(--accent-secondary)] transition-colors uppercase tracking-widest font-mono"
                                    aria-label={`Source code for ${project.title}`}
                                >
                                    <Github size={14} aria-hidden="true" /> الكود_المصدري
                                </a>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
