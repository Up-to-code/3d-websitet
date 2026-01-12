"use client";

import dynamic from "next/dynamic";

// SSR-safe: Dynamically import 3D scene
const SpaceScene = dynamic(() => import("./SpaceScene"), {
    ssr: false,
    loading: () => (
        <div className="fixed inset-0 z-[-1] bg-black" aria-hidden="true" />
    ),
});

export default function SpaceBackground() {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-black" aria-hidden="true">
            <SpaceScene />
        </div>
    );
}
