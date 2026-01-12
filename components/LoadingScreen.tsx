"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 150);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <>
                    {/* Left Door */}
                    <motion.div
                        initial={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="fixed top-0 left-0 w-1/2 h-full z-[100] bg-black border-r border-[var(--accent)]/30"
                    >
                        {/* Cyberpunk Lines */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-1/4 right-0 w-full h-[1px] bg-gradient-to-l from-[var(--accent)]/50 to-transparent" />
                            <div className="absolute top-1/2 right-0 w-3/4 h-[1px] bg-gradient-to-l from-[var(--accent)]/30 to-transparent" />
                            <div className="absolute top-3/4 right-0 w-1/2 h-[1px] bg-gradient-to-l from-[var(--accent)]/20 to-transparent" />
                        </div>

                        {/* Corner Accent */}
                        <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[var(--accent)]" />
                    </motion.div>

                    {/* Right Door */}
                    <motion.div
                        initial={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="fixed top-0 right-0 w-1/2 h-full z-[100] bg-black border-l border-[var(--accent)]/30"
                    >
                        {/* Cyberpunk Lines */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-[var(--accent)]/50 to-transparent" />
                            <div className="absolute top-1/2 left-0 w-3/4 h-[1px] bg-gradient-to-r from-[var(--accent)]/30 to-transparent" />
                            <div className="absolute top-3/4 left-0 w-1/2 h-[1px] bg-gradient-to-r from-[var(--accent)]/20 to-transparent" />
                        </div>

                        {/* Corner Accent */}
                        <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[var(--accent)]" />
                    </motion.div>

                    {/* Center Content */}
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[101] flex flex-col items-center justify-center pointer-events-none"
                    >
                        {/* Glowing Logo/Text */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-center mb-8"
                        >
                            <h1 className="text-4xl md:text-6xl font-black text-[var(--accent)] mb-2 tracking-tighter" style={{ textShadow: '0 0 30px var(--accent)' }}>
                                أهلاً وسهلاً
                            </h1>
                            <p className="text-slate-400 font-mono text-sm tracking-widest">
                                SYSTEM_INITIALIZING
                            </p>
                        </motion.div>

                        {/* Progress Bar */}
                        <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: "200px" }}
                            transition={{ delay: 0.5 }}
                            className="relative"
                        >
                            <div className="w-[200px] h-1 bg-slate-800 border border-slate-700">
                                <motion.div
                                    className="h-full bg-[var(--accent)]"
                                    style={{ width: `${Math.min(100, progress)}%` }}
                                    transition={{ duration: 0.1 }}
                                />
                            </div>
                            <div className="flex justify-between mt-2 text-xs font-mono text-slate-500">
                                <span>تحميل</span>
                                <span>{Math.min(100, Math.round(progress))}%</span>
                            </div>
                        </motion.div>

                        {/* Loading Text */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-6 text-[var(--accent)] font-mono text-sm"
                        >
                            {">"} جاري فتح البوابة...
                        </motion.p>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
