"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Terminal } from "lucide-react";
import { ReactNode } from "react";

// Type definitions
interface FlowNode {
    id: string;
    title: string;
    titleAr?: string;
    description: string;
    descriptionAr?: string;
    icon: ReactNode;
    color: "accent" | "accent-secondary";
}

const englishNodes: FlowNode[] = [
    {
        id: "IN_01",
        title: "Signal Trigger",
        description: "User Query / Webhook Event",
        icon: <Zap size={24} aria-hidden="true" />,
        color: "accent",
    },
];

const arabicNodes: FlowNode[] = [
    {
        id: "IN_01",
        titleAr: "إشارة_بدء",
        title: "Signal Trigger",
        descriptionAr: "تم الكشف عن حدث المستخدم. بدء التسلسل.",
        description: "User event detected. Starting sequence.",
        icon: <Zap size={18} aria-hidden="true" />,
        color: "accent",
    },
    {
        id: "CORE",
        titleAr: "المعالج_المركزي",
        title: "Core Processor",
        descriptionAr: "LLM ORCHESTRATOR",
        description: "LLM ORCHESTRATOR",
        icon: <Cpu size={24} aria-hidden="true" />,
        color: "accent",
    },
    {
        id: "OUT_01",
        titleAr: "تنفيذ_العملية",
        title: "Process Execution",
        descriptionAr: "تم نشر الحل. التحقق من النتائج.",
        description: "Solution deployed. Verifying results.",
        icon: <Terminal size={18} aria-hidden="true" />,
        color: "accent-secondary",
    },
];

/**
 * AiAgentFlow component - Visualizes the AI agent architecture
 * with both English and Arabic sections in a cyberpunk style.
 */
export default function AiAgentFlow() {
    return (
        <section
            className="py-24 relative overflow-hidden bg-black"
            aria-labelledby="system-architecture-heading"
        >
            {/* Motherboard Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" aria-hidden="true">
                <svg width="100%" height="100%" role="img">
                    <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path d="M10 10 L90 10 M90 10 L90 90 M90 90 L10 90 M10 90 L10 10" stroke="var(--accent)" strokeWidth="0.5" fill="none" opacity="0.3" />
                        <circle cx="10" cy="10" r="1.5" fill="var(--accent)" />
                        <circle cx="90" cy="90" r="1.5" fill="var(--accent)" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#circuit)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">

                {/* Section Header - Cyber Style */}
                <motion.header
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex items-center justify-between mb-20 border-b border-slate-800 pb-4"
                >
                    <h2
                        id="system-architecture-heading"
                        className="text-3xl font-black text-white uppercase tracking-tighter flex items-center gap-4"
                    >
                        <Cpu className="text-[var(--accent)]" aria-hidden="true" />
                        System Architecture
                    </h2>
                    <div className="font-mono text-xs text-[var(--accent)] animate-pulse" role="status" aria-live="polite">
                        STATUS: ONLINE :: AGENT_SWARM_ACTIVE
                    </div>
                </motion.header>

                {/* THE CYBER HIVE - GRID LAYOUT */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-center">

                    {/* LEFT COLUMN: Input & Trigger */}
                    <div className="flex flex-col gap-8">
                        <motion.article
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className="bg-slate-900 border border-[var(--accent)] p-6 relative group rounded-none"
                        >
                            <div className="absolute top-0 right-0 px-2 py-0.5 bg-[var(--accent)] text-black text-[10px] font-bold" aria-hidden="true">IN_01</div>
                            <div className="flex items-center gap-4 mb-2 text-[var(--accent)]">
                                <Zap size={24} aria-hidden="true" />
                                <h3 className="font-bold text-lg">Signal Trigger</h3>
                            </div>
                            <p className="text-xs text-slate-400 font-mono">User Query / Webhook Event</p>

                            {/* Connector Line Right */}
                            <div className="absolute top-1/2 -right-8 w-8 h-[2px] bg-[var(--accent)] hidden md:block" aria-hidden="true" />
                        </motion.article>
                    </div>

                    {/* CENTER COLUMN: THE CORE (Orchestrator) */}
                    <div className="relative">
                        {/* Core Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--accent)]/10 blur-[100px] z-0" aria-hidden="true" />

                        <motion.article
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative z-10 bg-black border-2 border-[var(--accent)] p-8 text-center shadow-[0_0_50px_var(--accent)/20] rounded-none group hover:bg-slate-900/50 transition-colors"
                        >
                            {/* Corner Tech Decor */}
                            <div className="absolute -top-1 -left-1 w-3 h-3 bg-[var(--accent)]" aria-hidden="true" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--accent)]" aria-hidden="true" />
                            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[var(--accent)]" aria-hidden="true" />
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[var(--accent)]" aria-hidden="true" />

                            <div className="mb-4 inline-block p-4 rounded-none border border-[var(--accent)]/30 bg-[var(--accent)]/10">
                                <Cpu size={48} className="text-[var(--accent)] animate-pulse" aria-hidden="true" />
                            </div>

                            <h3 className="text-2xl font-black text-white mb-2 tracking-widest">CORE_CPU</h3>
                            <div className="text-[var(--accent)] font-mono text-sm mb-4">LLM ORCHESTRATOR</div>
                            <div className="text-[10px] text-slate-500 font-mono leading-relaxed border-t border-slate-800 pt-4">
                                Analyzing Context...<br />
                                Delegating Tasks...<br />
                                Optimizing Routes...
                            </div>
                        </motion.article>

                        {/* Animated Connector Lines to Satellites */}
                        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[50%] w-[150%] h-[150%] -z-10 pointer-events-none hidden md:block opacity-50" aria-hidden="true">
                            <path d="M50 50 L20 20" stroke="var(--accent-secondary)" strokeWidth="1" fill="none" />
                            <path d="M50 50 L80 20" stroke="var(--accent-secondary)" strokeWidth="1" fill="none" />
                            <path d="M50 50 L50 90" stroke="var(--accent-secondary)" strokeWidth="1" fill="none" />
                        </svg>
                    </div>
                </div>

                {/* ARABIC SECTION: هيكلية_النظام */}
                <div className="mt-16" dir="rtl">
                    <header className="flex items-center gap-2 mb-8 border-b border-[var(--accent)]/30 pb-2">
                        <Cpu className="text-[var(--accent)] animate-pulse" aria-hidden="true" />
                        <h2 className="text-xl md:text-2xl font-black text-white tracking-widest uppercase">
                            هيكلية_النظام
                        </h2>
                        <div className="mr-auto text-xs font-mono text-[var(--accent-secondary)]" role="status">
                            الحالة: متصل :: سرب_الوكلاء_نشط
                        </div>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
                        {/* Node 1: Input */}
                        <motion.article
                            role="listitem"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-5 bg-black border border-[var(--accent)] relative"
                        >
                            <div className="absolute top-0 left-0 w-3 h-3 bg-[var(--accent)]/50" aria-hidden="true" />
                            <h3 className="text-white font-bold font-mono mb-2 text-sm">إشارة_بدء</h3>
                            <p className="text-slate-500 text-[10px] font-mono mb-3">تم الكشف عن حدث المستخدم. بدء التسلسل.</p>

                            {/* Tech Decor */}
                            <div className="space-y-1 my-2" aria-hidden="true">
                                <div className="h-1 w-full bg-[var(--accent)]/10 rounded-full overflow-hidden">
                                    <div className="h-full w-2/3 bg-[var(--accent)]/40 animate-pulse" />
                                </div>
                                <div className="h-1 w-3/4 bg-[var(--accent)]/10 rounded-full overflow-hidden">
                                    <div className="h-full w-1/2 bg-[var(--accent)]/40 animate-pulse" style={{ animationDelay: '0.2s' }} />
                                </div>
                                <div className="flex justify-between text-[8px] font-mono text-[var(--accent)]/60 pt-1">
                                    <span>DATA_IN</span>
                                    <span>1024kb</span>
                                </div>
                            </div>

                            <div className="mt-3 text-[var(--accent)] text-[10px] tracking-widest">IN_01</div>
                        </motion.article>

                        {/* Node 2: Processing (Center) */}
                        <motion.article
                            role="listitem"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-5 bg-slate-900 border-2 border-[var(--accent)] relative shadow-[0_0_30px_var(--accent)/20]"
                        >
                            <div className="absolute inset-0 bg-[var(--accent)]/5 animate-pulse" aria-hidden="true" />

                            <h3 className="text-[var(--accent)] font-black text-sm font-mono mb-3 text-center relative z-10">المعالج_المركزي</h3>
                            <ul className="flex flex-col gap-1.5 text-center text-[9px] font-mono text-slate-300 relative z-10">
                                <li className="p-1.5 border border-slate-700 bg-black">وحدة_التخطيط</li>
                                <li className="p-1.5 border border-slate-700 bg-black">منسق_الذكاء</li>
                                <li className="p-1.5 border border-slate-700 bg-black">وحدة_البرمجة</li>
                            </ul>
                            <div className="mt-3 text-center text-white text-[10px] tracking-widest font-bold relative z-10">LLM ORCHESTRATOR</div>
                        </motion.article>

                        {/* Node 3: Output */}
                        <motion.article
                            role="listitem"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="p-5 bg-black border border-[var(--accent-secondary)] relative"
                        >
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-[var(--accent-secondary)]/50" aria-hidden="true" />
                            <h3 className="text-white font-bold font-mono mb-2 text-sm">تنفيذ_العملية</h3>
                            <p className="text-slate-500 text-[10px] font-mono mb-3">تم نشر الحل. التحقق من النتائج.</p>

                            {/* Tech Decor */}
                            <div className="grid grid-cols-2 gap-1 my-2" aria-hidden="true">
                                <div className="bg-[var(--accent-secondary)]/10 h-5 flex items-center justify-center border border-[var(--accent-secondary)]/30">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-secondary)] animate-ping" />
                                </div>
                                <div className="bg-[var(--accent-secondary)]/10 h-5 flex items-center justify-center border border-[var(--accent-secondary)]/30 text-[8px] text-[var(--accent-secondary)]">OK</div>
                            </div>

                            <div className="mt-3 text-[var(--accent-secondary)] text-[10px] tracking-widest">مخرجات_السجل</div>
                        </motion.article>
                    </div>
                </div>

                {/* BOTTOM: Output Terminal */}
                <motion.aside
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 bg-black border border-slate-700 p-4 font-mono text-xs relative max-w-2xl mx-auto rounded-none"
                    aria-label="Execution log output"
                >
                    <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-800 text-slate-500">
                        <Terminal size={14} aria-hidden="true" />
                        <span>EXEC_LOG_OUTPUT</span>
                    </div>
                    <div className="space-y-1 text-green-500" role="log">
                        <p> Initializing agents...</p>
                        <p> Core processing complete.</p>
                        <p> <span className="animate-pulse" aria-label="cursor">_</span></p>
                    </div>
                </motion.aside>
            </div>
        </section>
    );
}
