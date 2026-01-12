"use client";

import { motion } from "framer-motion";
import { Zap, Clock, Smartphone, Globe, Activity } from "lucide-react";
import CircuitBackground from "./CircuitBackground";
import { ReactNode } from "react";

// Type definitions
interface ComparisonItem {
    label: string;
    myStack: number;
    others: number;
    icon: ReactNode;
    color: string;
}

const comparisons: ComparisonItem[] = [
    {
        label: "سرعة_الأداء",
        myStack: 98,
        others: 60,
        icon: <Zap size={18} aria-hidden="true" />,
        color: "var(--accent)",
    },
    {
        label: "التزامن_الفوري",
        myStack: 95,
        others: 40,
        icon: <Clock size={18} aria-hidden="true" />,
        color: "var(--accent-secondary)",
    },
    {
        label: "استجابة_الجوال",
        myStack: 92,
        others: 70,
        icon: <Smartphone size={18} aria-hidden="true" />,
        color: "var(--accent-tertiary)",
    },
    {
        label: "عامل_التوسع",
        myStack: 100,
        others: 55,
        icon: <Globe size={18} aria-hidden="true" />,
        color: "var(--accent)",
    },
];

export default function TechComparison() {
    return (
        <section
            className="py-20 relative overflow-hidden bg-black"
            aria-labelledby="tech-comparison-heading"
        >
            <CircuitBackground />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 border-b border-slate-800 pb-8"
                >
                    <div className="inline-flex items-center gap-2 mb-2 text-[var(--accent)]">
                        <Activity className="animate-pulse" size={20} aria-hidden="true" />
                        <span className="text-xs font-mono tracking-widest">تشخيص_النظام</span>
                    </div>
                    <h2
                        id="tech-comparison-heading"
                        className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter"
                    >
                        مؤشرات_الأداء
                    </h2>
                </motion.header>

                <div
                    className="grid gap-12 bg-slate-900/50 p-8 border border-slate-800 backdrop-blur-sm"
                    role="list"
                    aria-label="مقارنات الأداء"
                >
                    {comparisons.map((item, idx) => (
                        <article key={item.label} className="relative" role="listitem">
                            <header className="flex items-center gap-4 mb-4 text-white font-bold text-sm md:text-base font-mono tracking-wider">
                                <div className="p-2 bg-black border border-[var(--accent)] text-[var(--accent)] rounded-none">
                                    {item.icon}
                                </div>
                                <h3>{item.label}</h3>
                            </header>

                            {/* Comparison Bars */}
                            <div className="space-y-4">
                                {/* My Stack Bar */}
                                <div
                                    className="relative h-10 bg-black border border-slate-700 rounded-none overflow-hidden group"
                                    role="progressbar"
                                    aria-valuenow={item.myStack}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    aria-label={`التقنيات الحديثة: ${item.myStack}%`}
                                >
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${item.myStack}%` }}
                                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                                        className="absolute top-0 left-0 h-full bg-[var(--accent)]/20 border-r-2 border-[var(--accent)]"
                                        style={{ backgroundColor: `${item.color}33`, borderColor: item.color }}
                                    >
                                        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.5)_10px,rgba(0,0,0,0.5)_20px)] opacity-50" aria-hidden="true" />
                                    </motion.div>
                                    <div className="absolute inset-0 flex items-center justify-between px-4 z-10 font-mono text-xs">
                                        <span className="text-white font-bold">التقنيات_الحديثة</span>
                                        <span className="text-[var(--accent)] font-bold">{item.myStack}% كفاءة</span>
                                    </div>
                                </div>

                                {/* Others Bar */}
                                <div
                                    className="relative h-6 bg-slate-900 border border-slate-800 rounded-none overflow-hidden w-[85%] opacity-60"
                                    role="progressbar"
                                    aria-valuenow={item.others}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    aria-label={`الأنظمة التقليدية: ${item.others}%`}
                                >
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${item.others}%` }}
                                        transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                                        className="absolute top-0 left-0 h-full bg-slate-700"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-between px-4 z-10 font-mono text-[10px] text-slate-400">
                                        <span>الأنظمة_التقليدية</span>
                                        <span>{item.others}%</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
