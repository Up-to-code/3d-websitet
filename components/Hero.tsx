"use client";

import { Github, MessageCircle, Briefcase, Code } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// SSR-safe: Dynamically import 3D scene
const Scene = dynamic(() => import("./Scene"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 border-2 border-[var(--accent)] border-t-transparent animate-spin" />
        </div>
    ),
});

export default function Hero() {
    return (
        <section
            className="relative min-h-screen w-full flex items-start pt-20 overflow-hidden"
            aria-labelledby="hero-heading"
            dir="ltr"
        >
            {/* Enhanced Background */}
            <div className="absolute inset-0 z-0" aria-hidden="true">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900/30 to-black" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f3ff05_1px,transparent_1px),linear-gradient(to_bottom,#00f3ff05_1px,transparent_1px)] bg-[size:60px_60px]" />
                {/* Glow Effects */}
                <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[var(--accent)]/5 blur-[150px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-[var(--accent-secondary)]/5 blur-[100px] rounded-full" />
            </div>

            {/* Top Status Bar */}
            <div className="absolute top-0 left-0 right-0 z-20 bg-black/50 backdrop-blur-sm border-b border-slate-800/50">
                <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <div className="flex items-center gap-4 font-mono text-xs">
                        <div className="flex items-center gap-2 text-[var(--accent)]">
                            <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" />
                            SYSTEM_ONLINE
                        </div>
                    </div>
                    <div className="flex items-center gap-6 font-mono text-xs text-slate-400">
                        <span><strong className="text-white">3+</strong> سنوات</span>
                        <span><strong className="text-white">24+</strong> مشروع</span>
                    </div>
                </div>
            </div>

            {/* 3D Model - LEFT Side, Absolute Position */}
            <div className="absolute top-0 left-0 bottom-0 w-1/2 z-0 hidden lg:block" aria-hidden="true">
                <Scene />
            </div>

            {/* Main Content - Right Side */}
            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen pointer-events-none">

                {/* Empty Left Space for Model */}
                <div className="hidden lg:block" />

                {/* Text Content - RIGHT Side, Vertically Centered */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, staggerChildren: 0.2 }}
                    className="text-right flex flex-col items-start justify-center pointer-events-auto"
                    dir="rtl"
                >
                    {/* Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex gap-2 justify-start mb-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-mono">
                            <Briefcase size={14} />
                            إدارة أعمال
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent-secondary)]/10 border border-[var(--accent-secondary)]/30 text-[var(--accent-secondary)] text-xs font-mono">
                            <Code size={14} />
                            Full-Stack
                        </div>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        id="hero-heading"
                        className="text-right text-5xl md:text-7xl font-black leading-tight tracking-tighter text-white mb-6"
                    >
                        أبني حلولاً
                        <span className="block text-[var(--accent)]">تُحقق نتائج</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-right text-lg text-slate-400 leading-relaxed border-r-4 border-[var(--accent)] pr-6 mb-8"
                    >
                        مطور Full-Stack وخريج إدارة أعمال. أجمع بين الفهم العميق للأعمال والقدرة التقنية لبناء منتجات تنمو معك.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex gap-4 justify-start mb-6"
                    >
                        <a href="https://github.com/Up-to-code" target="_blank" rel="noopener noreferrer"
                            className="px-8 py-4 bg-[var(--accent)] text-black font-bold hover:bg-white transition-colors inline-flex items-center gap-3">
                            <Github size={20} />
                            جيت_هب
                        </a>
                        <a href="https://wa.me/201142102700" target="_blank" rel="noopener noreferrer"
                            className="px-8 py-4 bg-[#25D366] text-white font-bold hover:brightness-110 transition-all inline-flex items-center gap-3">
                            <MessageCircle size={20} />
                            واتساب
                        </a>
                    </motion.div>

                    {/* Trust */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex gap-6 justify-start text-slate-500 text-sm font-mono"
                    >
                        <span>✓ تسليم سريع</span>
                        <span>✓ دعم مستمر</span>
                        <span>✓ نتائج مضمونة</span>
                    </motion.div>
                </motion.div>

                {/* Mobile 3D Model */}
                <div className="lg:hidden h-[400px] relative" aria-hidden="true">
                    <Scene />
                </div>
            </div>

            {/* Bottom Gradient - Smooth transition */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" aria-hidden="true" />
        </section>
    );
}
