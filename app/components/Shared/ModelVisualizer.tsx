"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Loader from "./Loader";

interface ModelVisualizerProps {
  rotate: boolean;
  children: React.ReactNode;
}

const ModelVisualizer: React.FC<ModelVisualizerProps> = ({ rotate, children }) => {
  return (
    <div className="flex h-screen w-full items-center justify-center rounded-2xl">
      <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
        <Suspense fallback={<Loader />}>
          <OrbitControls enableZoom={true} autoRotate={rotate} />
          <Stage environment="city" intensity={1}>
            {children}
          </Stage>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelVisualizer;
