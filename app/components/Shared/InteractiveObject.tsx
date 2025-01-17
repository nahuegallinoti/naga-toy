"use client";

import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera, RenderTexture, Text, Sparkles } from "@react-three/drei";
import { Mesh } from "three";

const InteractiveObject = ({
    geometryType,
    size,
    text,
    backgroundColor,
    textColor,
    sparkles,
    position = [0, 0, 0]
}: InteractiveObjectProps) => {
    const meshRef = useRef<Mesh>(null!);
    const textRef = useRef<Mesh>(null!);
    const [isDragging, setIsDragging]: any = useState(false);

    // Rotación continua
    useFrame(() => {
        if (!isDragging && meshRef.current) {
            meshRef.current.rotation.y += 0.01;
        }
    });

    // Cambiar cursor cuando pasa por encima
    const handlePointerOver = () => {
        document.body.style.cursor = "pointer";
    };

    const handlePointerOut = () => {
        document.body.style.cursor = "default";
    };

    return (
        <mesh
            ref={meshRef}
            castShadow
            receiveShadow
            position={position}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}>

            {geometryType === "box" && <boxGeometry args={size} />}
            {geometryType === "sphere" && <sphereGeometry args={size} />}
            {geometryType === "cone" && <coneGeometry args={size} />}

            <meshStandardMaterial>
                <RenderTexture attach="map">
                    <PerspectiveCamera makeDefault position={[3, 0, 13]} />
                    <color attach="background" args={[backgroundColor]} />
                    <Text fontSize={1.5} color={textColor} anchorX="center" anchorY="middle" ref={textRef}>
                        {text}
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>

            {/* Brillos opcionales */}
            {sparkles && <Sparkles size={100} scale={[2, 2, 2]} speed={0.2} count={1} color={'#dcbb6d'} />}
        </mesh>
    );
};

export default InteractiveObject;

/**
 * Props for the InteractiveObject component
 */
interface InteractiveObjectProps {
    /**
     * Type of geometry to be used (box, sphere, or cone)
     */
    geometryType: "box" | "sphere" | "cone";

    /**
     * Size of the geometry
     */
    size: any;

    /**
     * Text to be displayed on the object
     */
    text: string;

    /**
     * Background color of the object
     */
    backgroundColor: string;

    /**
     * Color of the text
     */
    textColor: string;

    /**
     * Optional: Whether to add sparkles effect
     */
    sparkles?: boolean;

    /**
     * Optional: Position of the object in the 3D space
     */
    position?: [number, number, number];
}