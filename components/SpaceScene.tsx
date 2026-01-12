"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function StarField() {
    const ref = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Sparkles count={50} scale={10} size={2} speed={0.4} opacity={0.5} noise={0.2} color="#00f3ff" />
            <Sparkles count={50} scale={15} size={3} speed={0.3} opacity={0.2} noise={0.1} color="#ff00ff" />
        </group>
    );
}

export default function SpaceScene() {
    return (
        <Canvas camera={{ position: [0, 0, 1] }}>
            <StarField />
        </Canvas>
    );
}
