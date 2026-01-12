"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Stars, Sparkles } from "@react-three/drei";
import Diamond from "./Diamond";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function DiamondField() {
    return (
        <Suspense fallback={null}>
            <Diamond position={[-4, 2, -5]} scale={2} />
            <Diamond position={[4, -2, -5]} scale={1.5} rotation={[0.5, 0, 0]} />
            <Diamond position={[0, -3, -8]} scale={3} rotation={[0, 0, 0.5]} />
        </Suspense>
    );
}

export default function Skills3DBackground() {
    return (
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#00f3ff" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#ff00ff" />
            <DiamondField />
            <Environment preset="city" />
        </Canvas>
    );
}
