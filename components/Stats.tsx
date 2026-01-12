"use client";

import { motion } from "framer-motion";
import { Activity, Code, Coffee, Database, Cpu, Wifi, LucideIcon } from "lucide-react";
import { useEffect, useState, ReactNode } from "react";

// Type definitions
interface Stat {
    label: string;
    value: string;
    icon: ReactNode;
    detail: string;
}

const stats: Stat[] = [
    {
        label: "سنوات الخبرة",
        value: "3+",
        icon: <Activity className="text-[var(--accent)]" aria-hidden="true" />,
        detail: "LEVEL 03"
    },
    {
        label: "مشاريع مكتملة",
        value: "24",
        icon: <Database className="text-[var(--accent-secondary)]" aria-hidden="true" />,
        detail: "DEPLOYED"
    },
    {
        label: "عملاء راضون",
        value: "15+",
        icon: <Coffee className="text-[var(--accent)]" aria-hidden="true" />,
        detail: "TRUSTED"
    },
    {
        label: "ساعات برمجة",
        value: "5k+",
        icon: <Code className="text-[var(--accent)]" aria-hidden="true" />,
        detail: "RUNTIME"
    },
];

export default function Stats() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <section className="py-12 px-6 md:px-20 max-w-7xl mx-auto relative z-10" aria-busy="true">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[...Array(4)].map((_, idx) => (
                        <div key={idx} className="glass-panel p-6 h-40 animate-pulse bg-slate-800/50" />
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section
            className="py-12 px-6 md:px-20 max-w-7xl mx-auto relative z-10"
            aria-labelledby="stats-heading"
        >
            <h2 id="stats-heading" className="sr-only">إحصائيات النظام</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6" role="list">
                {stats.map((stat, idx) => (
                    <motion.article
                        key={stat.detail}
                        role="listitem"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="glass-panel p-6 flex flex-col items-center justify-center text-center relative group hover:border-[var(--accent)] transition-colors rounded-none"
                    >
                        {/* Decorative HUD Corners */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-[var(--accent)] transition-colors" aria-hidden="true" />
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-[var(--accent)] transition-colors" aria-hidden="true" />
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-[var(--accent)] transition-colors" aria-hidden="true" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-[var(--accent)] transition-colors" aria-hidden="true" />

                        <div className="mb-3 p-3 bg-slate-900/50 rounded-none border border-slate-700 group-hover:border-[var(--accent)] group-hover:shadow-[0_0_15px_var(--accent)] transition-all">
                            {stat.icon}
                        </div>

                        <div className="text-3xl md:text-4xl font-bold text-white mb-1 font-mono tracking-tighter text-glow">
                            {stat.value}
                        </div>

                        <div className="text-sm font-bold text-[var(--accent)] uppercase tracking-widest mb-1">
                            {stat.detail}
                        </div>

                        <div className="text-xs text-slate-400 font-medium">
                            {stat.label}
                        </div>
                    </motion.article>
                ))}
            </div>

            {/* System Status Bar */}
            <motion.footer
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex items-center justify-between text-[10px] uppercase tracking-widest text-slate-500 font-mono border-t border-slate-800 pt-4"
                role="status"
                aria-live="polite"
            >
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-none animate-pulse" aria-hidden="true" />
                    System Online
                </div>
                <div className="flex gap-4">
                    <span className="flex items-center gap-1"><Cpu size={12} aria-hidden="true" /> CPU: 12%</span>
                    <span className="flex items-center gap-1"><Wifi size={12} aria-hidden="true" /> NET: SECURE</span>
                </div>
            </motion.footer>
        </section>
    );
}
