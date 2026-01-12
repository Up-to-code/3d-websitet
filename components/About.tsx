"use client";

import { motion } from "framer-motion";
import CircuitBackground from "./CircuitBackground";
import { GraduationCap, Briefcase, Code, TrendingUp } from "lucide-react";

// Type definitions
interface PhilosophyItem {
    title: string;
    desc: string;
}

const philosophyItems: PhilosophyItem[] = [
    { title: "الأعمال_أولاً", desc: "أفهم احتياجاتك التجارية قبل كتابة أي كود." },
    { title: "النتائج_الملموسة", desc: "التركيز على ROI والعائد الاستثماري." },
    { title: "التطوير_المستمر", desc: "أطلق بسرعة. قِس النتائج. حسّن باستمرار." },
];

// Credentials
const credentials = [
    { icon: <GraduationCap size={18} />, text: "بكالوريوس إدارة أعمال" },
    { icon: <Code size={18} />, text: "مطور Full-Stack" },
    { icon: <TrendingUp size={18} />, text: "خبرة 3+ سنوات" },
];

export default function About() {
    return (
        <section
            id="about"
            className="py-24 px-6 md:px-20 max-w-7xl mx-auto relative overflow-hidden"
            aria-labelledby="about-heading"
        >
            {/* Global Circuit Background */}
            <CircuitBackground />

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <header className="flex items-center gap-2 mb-6 border-b border-[var(--accent)]/30 pb-2">
                        <div className="w-2 h-2 bg-[var(--accent)] animate-pulse" aria-hidden="true" />
                        <h2
                            id="about-heading"
                            className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase"
                        >
                            وحدة_الهوية
                        </h2>
                    </header>

                    {/* Credentials Banner */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        {credentials.map((cred, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-2 text-xs font-mono px-3 py-2 bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)]"
                            >
                                {cred.icon}
                                <span>{cred.text}</span>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-4 text-slate-400 text-lg leading-relaxed font-mono rtl">
                        <p>
                            <span aria-hidden="true">{`>`}</span> تهيئة_بيانات_السيرة... <br />
                            <span aria-hidden="true">{`>`}</span> الموضوع: مطور + رجل أعمال <br />
                            <span aria-hidden="true">{`>`}</span> الحالة: جاهز_للشراكة
                        </p>
                        <p className="border-r-2 border-[var(--accent-secondary)] pr-4">
                            <span className="text-white font-bold">خريج إدارة أعمال</span> ومطور <span className="text-white font-bold">Full-Stack</span>.
                            أجمع بين الفهم العميق لمتطلبات الأعمال والقدرة التقنية لتنفيذها. أترجم أهدافك التجارية إلى حلول برمجية تحقق نتائج ملموسة.
                        </p>
                        <p>
                            <span aria-hidden="true">{`>`}</span> الميزة التنافسية: أفهم لغة الأعمال والتقنية معاً.
                        </p>
                    </div>
                </motion.div>

                <motion.aside
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    aria-labelledby="philosophy-heading"
                >
                    <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-700 p-8 md:p-12 relative overflow-hidden rounded-none hover:border-[var(--accent)] transition-colors group">
                        {/* Cyber Corner Accents */}
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[var(--accent)]" aria-hidden="true" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[var(--accent)]" aria-hidden="true" />

                        {/* Business + Tech Badge */}
                        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[10px] font-mono text-[var(--accent)]">
                            <Briefcase size={12} />
                            BUSINESS + TECH
                        </div>

                        <h3
                            id="philosophy-heading"
                            className="text-xl font-bold mb-6 text-white relative z-10 flex items-center gap-3 font-mono mt-6"
                        >
                            <span className="text-[var(--accent)]" aria-hidden="true">{`>>`}</span> الفلسفة_الأساسية
                        </h3>
                        <ul className="space-y-6 relative z-10" role="list">
                            {philosophyItems.map((item, idx) => (
                                <li key={idx} className="flex gap-4 items-start group/item" role="listitem">
                                    <div
                                        className="w-2 h-2 mt-2.5 bg-[var(--accent-secondary)] flex-shrink-0 rounded-none group-hover/item:bg-[var(--accent)] transition-colors"
                                        aria-hidden="true"
                                    />
                                    <div>
                                        <h4 className="font-bold text-lg text-white mb-1 uppercase tracking-wider">{item.title}</h4>
                                        <p className="text-slate-500 text-sm font-mono">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.aside>
            </div>
        </section>
    );
}
