"use client";

import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader, OrbitControls } from "@react-three/drei";

const CanvasSection = ({ model }: any) => {
  const [rotate, setRotate]: any = useState(true);

  return (
    <div className="flex flex-col gap-5 justify-center w-2/5 h-full">
      <Canvas
        camera={{ position: [5, 5, 5], fov: 25 }}
        onClick={() => setRotate(!rotate)}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls
            enableZoom={true}
            autoRotate={rotate}
            autoRotateSpeed={5}
          />
          <ambientLight intensity={1} />
          <directionalLight position={[1, 3, 5]} />
          {React.createElement(model)}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CanvasSection;