"use client";

import { useRef, ReactElement, ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Type definitions
interface GsapMagneticProps {
    children: ReactElement;
    /** Strength of the magnetic effect (0-1, default 0.35) */
    strength?: number;
}

/**
 * A wrapper component that adds a magnetic hover effect using GSAP.
 * The child element will follow the cursor with an elastic animation.
 */
export default function GsapMagnetic({
    children,
    strength = 0.35
}: GsapMagneticProps) {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!ref.current) return;

        const xTo = gsap.quickTo(ref.current, "x", {
            duration: 1,
            ease: "elastic.out(1, 0.3)"
        });
        const yTo = gsap.quickTo(ref.current, "y", {
            duration: 1,
            ease: "elastic.out(1, 0.3)"
        });

        const handleMouseMove = (e: MouseEvent) => {
            if (!ref.current) return;

            const { clientX, clientY } = e;
            const { width, height, left, top } = ref.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            xTo(x * strength);
            yTo(y * strength);
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        const element = ref.current;
        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            element.removeEventListener("mousemove", handleMouseMove);
            element.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, { dependencies: [strength] });

    return (
        <div ref={ref} className="inline-block">
            {children}
        </div>
    );
}
