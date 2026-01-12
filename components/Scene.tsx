"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF, Float, ContactShadows } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

/**
 * 3D Model component
 */
function Model() {
    const gltf = useGLTF("/base_basic_pbr.glb");
    return (
        <primitive
            object={gltf.scene}
            scale={2.0}
            position={[0, -2.2, 0]}
            rotation={[0, 0, 0]}
        />
    );
}

/**
 * Lights component - Dynamic lighting system
 */
function Lights() {
    const spotLightRef = useRef<THREE.SpotLight>(null);
    const pointLightRef = useRef<THREE.PointLight>(null);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        if (spotLightRef.current) {
            spotLightRef.current.intensity = 5 + Math.sin(t * 2) * 2;
        }
        if (pointLightRef.current) {
            pointLightRef.current.intensity = 2 + Math.cos(t * 1.5) * 1;
        }
    });

    return (
        <>
            <ambientLight intensity={0.5} />
            <spotLight
                ref={spotLightRef}
                position={[5, 10, 10]}
                angle={0.25}
                penumbra={1}
                intensity={5}
                color="#00f3ff"
            />
            <spotLight
                position={[-5, 5, -5]}
                angle={0.5}
                penumbra={1}
                intensity={8}
                color="#22c55e"
            />
            <pointLight
                ref={pointLightRef}
                position={[0, -5, 5]}
                intensity={2}
                color="#fcee0a"
            />
        </>
    );
}

/**
 * Scene component - Main 3D scene for the Hero section.
 * Users can click and drag to rotate the model.
 */
export default function Scene() {
    return (
        <div className="absolute inset-0 z-0 h-screen w-full cursor-grab active:cursor-grabbing" aria-hidden="true">
            <Canvas
                camera={{ position: [0, 0, 7.5], fov: 35 }}
                dpr={[1, 2]}
            >
                <fog attach="fog" args={['#050505', 5, 20]} />
                <Lights />

                <Suspense fallback={null}>
                    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
                        <Model />
                    </Float>
                    <Environment preset="city" />
                    <ContactShadows
                        position={[0, -3, 0]}
                        opacity={0.5}
                        scale={10}
                        blur={2.5}
                        far={4}
                    />
                </Suspense>

                {/* Interactive Controls - Freedom to move and rotate */}
                <OrbitControls
                    enableZoom={true}
                    enablePan={true}
                    enableDamping={true}
                    dampingFactor={0.05}
                    rotateSpeed={0.5}
                    panSpeed={0.5}
                    zoomSpeed={0.5}
                    minDistance={2}
                    maxDistance={20}
                />
            </Canvas>
        </div>
    );
}
