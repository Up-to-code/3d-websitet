"use client";

import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, DollarSign, Target, ArrowUpRight, BarChart3, Zap, Award } from "lucide-react";
import { useRef, useState, useEffect } from "react";

// Animated counter component
function AnimatedCounter({ end, duration = 2, prefix = "", suffix = "" }: {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
}) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [isInView, end, duration]);

    return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

// MRR Chart bars
const mrrData = [
    { month: "يناير", value: 15, growth: "+12%" },
    { month: "فبراير", value: 25, growth: "+67%" },
    { month: "مارس", value: 40, growth: "+60%" },
    { month: "أبريل", value: 55, growth: "+38%" },
    { month: "مايو", value: 75, growth: "+36%" },
    { month: "يونيو", value: 100, growth: "+33%" },
];

// Growth metrics
const metrics = [
    {
        label: "نمو الإيرادات",
        value: 340,
        suffix: "%",
        icon: <TrendingUp size={24} />,
        color: "var(--accent)",
        description: "زيادة في الإيرادات الشهرية"
    },
    {
        label: "العملاء الجدد",
        value: 150,
        suffix: "+",
        icon: <Users size={24} />,
        color: "var(--accent-secondary)",
        description: "عميل جديد هذا الربع"
    },
    {
        label: "MRR",
        value: 50,
        prefix: "$",
        suffix: "K",
        icon: <DollarSign size={24} />,
        color: "#22c55e",
        description: "الإيرادات الشهرية المتكررة"
    },
    {
        label: "معدل التحويل",
        value: 12,
        suffix: "%",
        icon: <Target size={24} />,
        color: "#f59e0b",
        description: "من الزوار إلى العملاء"
    },
];

export default function GrowthSection() {
    return (
        <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto relative overflow-hidden" aria-labelledby="growth-heading">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            {/* Section Header */}
            <motion.header
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-mono tracking-widest">
                    <BarChart3 size={16} className="animate-pulse" />
                    تحليلات_النمو
                </div>
                <h2 id="growth-heading" className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                    سرّع <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)]">نمو أعمالك</span>
                </h2>
                <p className="text-slate-400 font-mono text-sm max-w-2xl mx-auto">
                    نتائج حقيقية من مشاريع سابقة. أرقام تتحدث عن نفسها.
                </p>
            </motion.header>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                {metrics.map((metric, idx) => (
                    <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-slate-900/50 border border-slate-800 p-6 relative group hover:border-[var(--accent)] transition-all"
                    >
                        {/* Corner Accent */}
                        <div
                            className="absolute top-0 right-0 w-2 h-2"
                            style={{ backgroundColor: metric.color }}
                            aria-hidden="true"
                        />

                        <div
                            className="w-12 h-12 flex items-center justify-center mb-4 border border-slate-700 group-hover:border-current transition-colors"
                            style={{ color: metric.color }}
                        >
                            {metric.icon}
                        </div>

                        <div className="text-3xl md:text-4xl font-black text-white mb-1 font-mono">
                            <AnimatedCounter
                                end={metric.value}
                                prefix={metric.prefix}
                                suffix={metric.suffix}
                            />
                        </div>

                        <div className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                            {metric.label}
                        </div>
                        <div className="text-xs text-slate-500 font-mono">
                            {metric.description}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* MRR Chart Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-black border border-slate-800 p-8 relative"
            >
                {/* Chart Header */}
                <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-[var(--accent)]/10 border border-[var(--accent)]/30">
                            <DollarSign className="text-[var(--accent)]" size={20} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white font-mono">MRR_GROWTH_CHART</h3>
                            <p className="text-xs text-slate-500">الإيرادات الشهرية المتكررة</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-green-500 text-sm font-mono">
                        <ArrowUpRight size={16} />
                        <span>+340% هذا العام</span>
                    </div>
                </div>

                {/* Chart */}
                <div className="flex items-end justify-between gap-4 h-48">
                    {mrrData.map((data, idx) => (
                        <motion.div
                            key={data.month}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${data.value}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8, ease: "easeOut" }}
                            className="flex-1 flex flex-col items-center gap-2"
                        >
                            <div className="text-xs text-green-500 font-mono font-bold">{data.growth}</div>
                            <div
                                className="w-full bg-gradient-to-t from-[var(--accent)]/50 to-[var(--accent)] relative group cursor-pointer hover:from-[var(--accent)] hover:to-[var(--accent-secondary)] transition-all"
                                style={{ height: "100%" }}
                            >
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-[var(--accent)] blur-md opacity-0 group-hover:opacity-30 transition-opacity" />
                                {/* Scanlines */}
                                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.3)_3px)]" aria-hidden="true" />
                            </div>
                            <div className="text-[10px] text-slate-500 font-mono">{data.month}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Chart Legend */}
                <div className="flex items-center justify-center gap-8 mt-8 pt-4 border-t border-slate-800">
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                        <div className="w-3 h-3 bg-[var(--accent)]" />
                        <span>الإيرادات الشهرية (K$)</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-green-500 font-mono">
                        <TrendingUp size={14} />
                        <span>معدل النمو</span>
                    </div>
                </div>
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-12"
            >
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900 border border-slate-700 text-slate-300 font-mono text-sm">
                    <Zap className="text-[var(--accent)]" size={18} />
                    <span>هل أنت جاهز لتحقيق نتائج مماثلة؟</span>
                    <Award className="text-[var(--accent-secondary)]" size={18} />
                </div>
            </motion.div>
        </section>
    );
}
