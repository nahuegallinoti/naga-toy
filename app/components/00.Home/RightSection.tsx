"use client";

import React from "react";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const RightSection = () => {
  return (
    <div className="flex relative">
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Sphere args={[3, 500, 1000]} scale={2}>
          <MeshDistortMaterial
            color="orange"
            attach="material"
            distort={0.5}
            speed={10}
          />
        </Sphere>
      </Canvas>
      <Image
        src="/images/moon.png"
        width={1000}
        height={1000}
        alt="moon"
        className="flex w-52 h-52 md:w-screen md:h-screen opacity-40 md:opacity-100 object-contain absolute top-0 bottom-0 right-0 m-auto animate-fly"
      />
    </div>
  );
};

export default RightSection;
