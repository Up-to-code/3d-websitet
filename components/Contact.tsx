"use client";

import { motion } from "framer-motion";
import { Github, MessageCircle, Sparkles, CheckCircle, Mail, Phone, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

// Animated typing text component
function TypewriterText({ texts, className }: { texts: string[]; className?: string }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[currentIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentText.length) {
                    setDisplayText(currentText.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentIndex, texts]);

    return (
        <span className={className}>
            {displayText}
            <span className="animate-pulse text-[var(--accent)]">|</span>
        </span>
    );
}

// Strength indicators
const strengthItems = [
    { icon: <Sparkles size={16} />, text: "حلول مخصصة", delay: 0.1 },
    { icon: <CheckCircle size={16} />, text: "تسليم سريع", delay: 0.2 },
    { icon: <Mail size={16} />, text: "تواصل مستمر", delay: 0.3 },
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-24 px-6 md:px-20 max-w-7xl mx-auto"
            aria-labelledby="contact-heading"
        >
            <div className="max-w-4xl mx-auto bg-black border border-slate-700 p-8 md:p-12 relative overflow-hidden rounded-none shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                {/* Circuit Background Pattern Overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" aria-hidden="true" />

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[var(--accent)]" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[var(--accent-secondary)]" aria-hidden="true" />

                <div className="relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center justify-center gap-2 mb-4 text-[var(--accent)] font-mono text-xs tracking-widest" role="status">
                            <span className="animate-pulse" aria-hidden="true">●</span> الإرسال_مفتوح
                        </div>

                        <h2
                            id="contact-heading"
                            className="text-3xl md:text-5xl font-black mb-6 text-white uppercase leading-tight tracking-tighter"
                        >
                            لنعمل <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)]">معاً</span>
                        </h2>

                        {/* Animated Typewriter Text */}
                        <div className="text-slate-400 text-lg font-mono mb-10 leading-relaxed min-h-[40px]">
                            <TypewriterText
                                texts={[
                                    "جاهز للتعاون في مشروعك القادم",
                                    "أرسل رسالتك الآن!",
                                    "لنبني شيئاً مذهلاً معاً.",
                                    "تواصل معي مباشرة"
                                ]}
                                className="text-white"
                            />
                        </div>

                        {/* Strength Indicators */}
                        <div className="flex flex-wrap justify-center gap-6 mb-12">
                            {strengthItems.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: item.delay, duration: 0.4 }}
                                    className="flex items-center gap-2 text-sm font-mono"
                                >
                                    <div className="p-2 bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)]">
                                        {item.icon}
                                    </div>
                                    <span className="text-slate-300">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Main CTA Buttons - GitHub and WhatsApp Only */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            {/* GitHub Button */}
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://github.com/Up-to-code"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-10 py-5 bg-[var(--accent)] text-black font-bold text-lg uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_30px_var(--accent)] hover:shadow-[0_0_50px_var(--accent)] rounded-none font-mono flex items-center justify-center gap-4 relative overflow-hidden group"
                            >
                                {/* Button Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" aria-hidden="true" />
                                <Github size={24} className="relative z-10" />
                                <span className="relative z-10">جيت_هب</span>
                                <ExternalLink size={16} className="relative z-10 opacity-50" />
                            </motion.a>

                            {/* WhatsApp Button */}
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://wa.me/201142102700"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-10 py-5 bg-[#25D366] text-white font-bold text-lg uppercase tracking-widest hover:bg-[#128C7E] transition-all shadow-[0_0_30px_#25D366] hover:shadow-[0_0_50px_#25D366] rounded-none font-mono flex items-center justify-center gap-4 relative overflow-hidden group"
                            >
                                {/* Button Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" aria-hidden="true" />
                                <MessageCircle size={24} className="relative z-10" />
                                <span className="relative z-10">واتساب</span>
                                <ExternalLink size={16} className="relative z-10 opacity-50" />
                            </motion.a>
                        </div>

                        {/* Optional: Email Link */}
                        <motion.a
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            href="mailto:contact@example.com"
                            className="inline-flex items-center gap-2 mt-8 text-slate-500 hover:text-[var(--accent)] transition-colors font-mono text-sm"
                        >
                            <Mail size={16} />
                            أو أرسل بريداً إلكترونياً
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
