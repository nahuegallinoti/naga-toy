"use client";

import React, { useState, useMemo, lazy, Suspense } from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import ModelVisualizer from "../Shared/ModelVisualizer";

// Lazy loading of heavy components
const FBXTest = lazy(() => import("../Shared/3DModels/FBXTest"));
const GltfTest = lazy(() => import("../Shared/3DModels/GltfTest"));

const Heros: React.FC = () => {
  const [hero, setHero] = useState<string>("Unidesa");
  const [rotate, setRotate] = useState<boolean>(false);

  const [modelProps, setModelProps] = useState({
    metalness: 0.4,
    roughness: 0.2,
    color: "#da5583",
    sparklesEnabled: false
  });

  const { metalness, roughness, color, sparklesEnabled } = modelProps;

  const handleMouseEnter = (item: string) => {
    setHero(item);
  };

  const toggleRotation = () => {
    setRotate((prevState) => !prevState);
  };

  // Use memoization to avoid unnecessary recalculations
  const models: Record<string, React.ReactNode> = useMemo(() => ({
    Unidesa: (
      <Suspense fallback={<>Loading Model...</>}>
        <FBXTest
          fbxName="Machine.fbx"
          color={color}
          colorMapPath="/textures/M1.png"
          normalMapPath="/textures/Skin_04_normal.jpg"
          roughnessMapPath="/textures/t1.jpg"
          metalness={metalness}
          roughness={roughness}
          autoRotateSpeed={3}
          sparklesEnabled={sparklesEnabled}
          environmentPreset="sunset"
        />
      </Suspense>
    ),
    Aristocrat: (
      <Suspense fallback={<>Loading Model...</>}>
        <FBXTest
          fbxName="Machine2.fbx"
          color={color}
          colorMapPath="/textures/M2.png"
          normalMapPath="/textures/Skin_04_Normal.jpg"
          roughnessMapPath="/textures/Skin_04_Normal.jpg"
          metalness={metalness}
          roughness={roughness}
          autoRotateSpeed={3}
          sparklesEnabled={sparklesEnabled}
          environmentPreset="sunset"
        />
      </Suspense>
    ),
    Gear: (
      <Suspense fallback={<>Loading Model...</>}>
        <GltfTest
          gltfPath="/gltf/Gear2.gltf"
          color={color}
          colorMapPath="/gltf/textures/baseColor.jpg"
          normalMapPath="/textures/Skin_04_normal.jpg"
          roughnessMapPath="/gltf/textures/occlusionRoughnessMetallic.jpg"
          metalness={metalness}
          roughness={roughness}
          autoRotateSpeed={3}
          sparklesEnabled={sparklesEnabled}
          environmentPreset="sunset"
        />
      </Suspense>
    ),
    Pepito: (
      <Suspense fallback={<>Loading Model...</>}>
        <FBXTest
          fbxName="Pepito.fbx"
          color={color}
          colorMapPath="/textures/M2.png"
          normalMapPath="/textures/Skin_04_Normal.jpg"
          roughnessMapPath="/textures/Skin_04_Normal.jpg"
          metalness={metalness}
          roughness={roughness}
          autoRotateSpeed={3}
          sparklesEnabled={sparklesEnabled}
          environmentPreset="sunset"
        />
      </Suspense>
    ),
    Submarine: (
      <Suspense fallback={<>Loading Model...</>}>
        <FBXTest
          fbxName="Submarine.fbx"
          color={color}
          colorMapPath="/textures/M2.png"
          normalMapPath="/textures/Skin_04_Normal.jpg"
          roughnessMapPath="/textures/Skin_04_Normal.jpg"
          metalness={metalness}
          roughness={roughness}
          autoRotateSpeed={3}
          sparklesEnabled={sparklesEnabled}
          environmentPreset="sunset"
        />
      </Suspense>
    ),
  }), [color, metalness, roughness, sparklesEnabled]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>, prop: string) => {
    setModelProps((prevState) => ({
      ...prevState,
      [prop]: parseFloat(e.target.value),
    }));
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModelProps((prevState) => ({
      ...prevState,
      color: e.target.value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModelProps((prevState) => ({
      ...prevState,
      sparklesEnabled: e.target.checked,
    }));
  };

  return (
    <div className="flex h-full w-full snap-center justify-around relative">
      <LeftSection handleMouseEnter={handleMouseEnter} />

      <div
        className="absolute top-10 right-10 bg-opacity-50 p-4 rounded-lg"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          border: "1px solid violet",
        }}
      >
        <div>
          <label htmlFor="metalness" className="block text-sm font-medium text-white">
            Metalidad: {metalness.toFixed(2)}
          </label>
          <input
            id="metalness"
            type="range"
            min="0.1"
            max="1"
            step="0.1"
            value={metalness}
            onChange={(e) => handleSliderChange(e, "metalness")}
            className="w-full"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="roughness" className="block text-sm font-medium text-white">
            Rugosidad: {roughness.toFixed(2)}
          </label>
          <input
            id="roughness"
            type="range"
            min="0.1"
            max="1"
            step="0.1"
            value={roughness}
            onChange={(e) => handleSliderChange(e, "roughness")}
            className="w-full"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="colorPicker" className="block text-sm font-medium text-white">
            Color:
          </label>
          <input
            id="colorPicker"
            type="color"
            value={color}
            onChange={handleColorChange}
            className="w-full"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="sparkles" className="block text-sm font-medium text-white">
            Efecto de Destellos:
          </label>
          <input
            id="sparkles"
            type="checkbox"
            checked={sparklesEnabled}
            onChange={handleCheckboxChange}
            className="w-full"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center w-2/3 items-center h-full m-auto relative">
        <ModelVisualizer rotate={rotate}>
          {models[hero]}
        </ModelVisualizer>
      </div>

      <RightSection hero={hero} rotate={rotate} onRotateToggle={toggleRotation} />
    </div>
  );
};

export default React.memo(Heros);
