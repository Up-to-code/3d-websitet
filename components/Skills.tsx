"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import CircuitBackground from "./CircuitBackground";

// SSR-safe: Dynamically import 3D components
const Skills3DBackground = dynamic(() => import("./Skills3DBackground"), {
    ssr: false,
    loading: () => (
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900/50 to-black/50 animate-pulse" />
    ),
});

// Type definitions for better code quality
interface SkillGroup {
    category: string;
    items: string[];
}

const skills: SkillGroup[] = [
    {
        category: "عمليات_الواجهة_الأمامية",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand"],
    },
    {
        category: "نظم_الخلفية",
        items: ["Node.js", "Express", "Prisma", "PostgreSQL", "MongoDB", "Serverless"],
    },
    {
        category: "الجوال_والأدوات",
        items: ["React Native", "Expo", "Git", "Docker", "Vercel", "AWS"],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="py-24 px-6 md:px-20 max-w-7xl mx-auto relative overflow-hidden bg-black/20"
            aria-labelledby="skills-heading"
        >
            {/* Global Circuit Background */}
            <CircuitBackground />

            {/* 3D Background Elements - SSR-safe */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
                <Skills3DBackground />
            </div>

            <header className="relative z-10 mb-16 text-center border-b border-slate-800 pb-8">
                <h2
                    id="skills-heading"
                    className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight"
                >
                    مصفوفة_القدرات
                </h2>
                <div className="flex justify-center gap-4 text-xs font-mono text-[var(--accent)]" role="status">
                    <span>[ تحميل_الأصول ]</span>
                    <span>[ مزامنة_قواعد_البيانات ]</span>
                    <span className="animate-pulse" aria-live="polite">[ جاهز ]</span>
                </div>
            </header>

            <div className="relative z-10 grid md:grid-cols-3 gap-8" role="list">
                {skills.map((skillGroup, idx) => (
                    <motion.article
                        key={skillGroup.category}
                        role="listitem"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="bg-slate-900/80 border border-slate-700 p-8 relative group hover:border-[var(--accent)] transition-all duration-300 rounded-none"
                    >
                        {/* Header Tech Decor */}
                        <div className="absolute top-0 left-0 bg-[var(--accent)] text-black text-[10px] font-bold px-2 py-0.5" aria-hidden="true">
                            SYS_0{idx + 1}
                        </div>

                        <h3 className="text-xl font-bold mb-6 text-white border-b border-slate-700 pb-3 font-mono tracking-wider pt-4">
                            {skillGroup.category}
                        </h3>
                        <ul className="flex flex-wrap gap-3" aria-label={`${skillGroup.category} skills`}>
                            {skillGroup.items.map((item) => (
                                <li
                                    key={item}
                                    className="px-3 py-1 bg-black text-[var(--accent)] text-xs font-bold font-mono border border-[var(--accent)]/30 hover:bg-[var(--accent)] hover:text-black transition-colors cursor-crosshair"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>

                        {/* Corner Brackets */}
                        <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-slate-500 opacity-50" aria-hidden="true" />
                        <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-slate-500 opacity-50" aria-hidden="true" />
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
