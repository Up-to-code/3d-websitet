"use client";

import { useRef } from "react";
import { useFrame, ThreeElements } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/**
 * Diamond component - A rotating cyber cube with wireframe exterior and glassy interior.
 * Used as decorative 3D elements in the Skills section background.
 */
export default function Diamond(props: ThreeElements['group']) {
    const ref = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (ref.current) {
            // Robotic, linear rotation
            ref.current.rotation.y += 0.02;
            ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <group ref={ref} {...props}>
                {/* Wireframe Cube */}
                <mesh>
                    <boxGeometry args={[1.5, 1.5, 1.5]} />
                    <meshBasicMaterial color="var(--accent)" wireframe />
                </mesh>

                {/* Inner Solid Core (Glassy) */}
                <mesh scale={[0.8, 0.8, 0.8]}>
                    <boxGeometry args={[1.5, 1.5, 1.5]} />
                    <meshPhysicalMaterial
                        color="var(--accent-secondary)"
                        roughness={0}
                        metalness={1}
                        transmission={0.5}
                        thickness={1}
                    />
                </mesh>
            </group>
        </Float>
    );
}
