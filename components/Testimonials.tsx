"use client";

import { motion } from "framer-motion";
import { Quote, Star, Building2, TrendingUp, Users } from "lucide-react";

// Testimonials data
const testimonials = [
    {
        name: "محمد الشريف",
        role: "مؤسس شركة ناشئة",
        company: "TechStart",
        content: "أحمد فهم احتياجات عملي بشكل مذهل. لم يكن مجرد مبرمج، بل شريك استراتيجي ساعدني في تحويل فكرتي إلى منتج ناجح.",
        rating: 5,
        metric: "+200% نمو المبيعات"
    },
    {
        name: "سارة أحمد",
        role: "مديرة تسويق",
        company: "E-Commerce Pro",
        content: "خبرته في إدارة الأعمال جعلته يفهم أهدافنا التجارية. النظام الذي بناه زاد من كفاءتنا بشكل كبير.",
        rating: 5,
        metric: "50% توفير في الوقت"
    },
    {
        name: "خالد العمري",
        role: "الرئيس التنفيذي",
        company: "Digital Solutions",
        content: "مزيج نادر من الفهم التقني والتجاري. يترجم متطلبات العمل إلى حلول تقنية بسلاسة.",
        rating: 5,
        metric: "3x نمو قاعدة العملاء"
    },
];

// Business advantages
const advantages = [
    { icon: <Building2 size={20} />, text: "فهم عميق لمتطلبات الأعمال" },
    { icon: <TrendingUp size={20} />, text: "التركيز على ROI والنتائج" },
    { icon: <Users size={20} />, text: "تواصل فعال مع أصحاب المصلحة" },
];

export default function Testimonials() {
    return (
        <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto relative" aria-labelledby="testimonials-heading">
            {/* Background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            {/* Header */}
            <motion.header
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-mono tracking-widest">
                    <Quote size={16} />
                    آراء_العملاء
                </div>
                <h2 id="testimonials-heading" className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                    ماذا يقول <span className="text-[var(--accent)]">العملاء</span>
                </h2>
                <p className="text-slate-400 font-mono text-sm max-w-2xl mx-auto">
                    نتائج حقيقية من شراكات ناجحة
                </p>
            </motion.header>

            {/* Business Advantage Banner */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[var(--accent)]/10 via-[var(--accent)]/5 to-transparent border border-[var(--accent)]/30 p-6 mb-12"
            >
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-right">
                        <h3 className="text-lg font-bold text-white mb-1">خريج إدارة أعمال + مطور برمجيات</h3>
                        <p className="text-sm text-slate-400 font-mono">أفهم لغة الأعمال والتقنية معاً</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {advantages.map((adv, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] bg-black/50 px-3 py-2 border border-slate-800">
                                {adv.icon}
                                <span>{adv.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, idx) => (
                    <motion.article
                        key={testimonial.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-slate-900/50 border border-slate-800 p-6 relative group hover:border-[var(--accent)] transition-all"
                    >
                        {/* Corner Accent */}
                        <div className="absolute top-0 right-0 w-2 h-2 bg-[var(--accent)]" aria-hidden="true" />

                        {/* Stars */}
                        <div className="flex gap-1 mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} size={14} className="fill-[var(--accent)] text-[var(--accent)]" />
                            ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-slate-300 text-sm leading-relaxed mb-6 font-mono">
                            "{testimonial.content}"
                        </blockquote>

                        {/* Metric */}
                        <div className="bg-[var(--accent)]/10 border border-[var(--accent)]/30 px-3 py-2 inline-block mb-4">
                            <span className="text-[var(--accent)] text-xs font-bold font-mono">{testimonial.metric}</span>
                        </div>

                        {/* Author */}
                        <footer className="border-t border-slate-800 pt-4">
                            <div className="font-bold text-white text-sm">{testimonial.name}</div>
                            <div className="text-xs text-slate-500 font-mono">
                                {testimonial.role} • {testimonial.company}
                            </div>
                        </footer>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
