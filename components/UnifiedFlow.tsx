"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, ReactNode } from "react";

// Type definitions
interface UnifiedFlowProps {
    children: ReactNode;
}

/**
 * A wrapper component that creates a central animated progress line
 * that fills as the user scrolls through the content.
 */
export default function UnifiedFlow({ children }: UnifiedFlowProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div ref={containerRef} className="relative w-full min-h-screen">
            {/* Central Circuit Line */}
            <div
                className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-slate-800/50 z-0"
                aria-hidden="true"
            >
                <motion.div
                    style={{ scaleY, transformOrigin: "top" }}
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[var(--accent)] via-[var(--accent-secondary)] to-[var(--accent-tertiary)] shadow-[0_0_15px_var(--accent)]"
                />
            </div>

            {children}
        </div>
    );
}
