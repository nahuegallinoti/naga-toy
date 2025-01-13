"use client";

import React, { useState } from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import ModelVisualizer from "../Shared/ModelVisualizer";
import FBXTest from "../Shared/3DModels/FBXTest";
import GltfTest from "../Shared/3DModels/GltfTest";

const Heros: React.FC = () => {
  const [hero, setHero] = useState<string>("Pepito");
  const [rotate, setRotate] = useState<boolean>(false);

  const handleMouseEnter = (item: string) => {
    setHero(item);
  };

  const toggleRotation = () => {
    setRotate((prevState) => !prevState); // Cambia el estado de rotación
  };

  return (
    <div className="flex h-full w-full snap-center justify-around">
      <LeftSection handleMouseEnter={handleMouseEnter} />

      <div className="flex flex-col justify-center w-2/3 items-center h-full m-auto">
        <ModelVisualizer rotate={rotate}>

        {hero === "Pepito" &&
            <FBXTest
              fbxName="Pepito.fbx"
              color="#1596cd" // Color personalizado
              colorMapPath="/textures/Skin_04_basecolor.jpg" // Nueva textura de color
              normalMapPath="/textures/Skin_04_basecolor.jpg" // Nueva textura normal
              roughnessMapPath="/textures/r1.jpg" // Nueva textura de rugosidad
              metalness={0.1} // Metalness personalizado
              roughness={0.2} // Roughness personalizado
              autoRotateSpeed={3} // Velocidad de rotación más rápida
              sparklesEnabled={false} // Desactivar los destellos
              environmentPreset="sunset" // Cambiar el entorno a "sunset"
            />}

        {hero === "Gear" &&
            <GltfTest
              gltfPath="/gltf/Gear2.gltf"
              color="#ff6347" // Color personalizado
              colorMapPath="/gltf/textures/baseColor.jpg" // Nueva textura de color
              normalMapPath="/textures/Skin_04_normal.jpg" // Nueva textura normal
              roughnessMapPath="/gltf/textures/occlusionRoughnessMetallic.jpg" // Nueva textura de rugosidad
              metalness={1} // Metalness personalizado
              roughness={0.5} // Roughness personalizado
              autoRotateSpeed={3} // Velocidad de rotación más rápida
              sparklesEnabled={false} // Desactivar los destellos
              environmentPreset="sunset" // Cambiar el entorno a "sunset"
            />}

        {hero === "Submarine" &&
            <FBXTest
              fbxName="Submarine.fbx"
              color="#ffd70a" // Color personalizado
              colorMapPath="/textures/Skin_04_basecolor.jpg" // Nueva textura de color
              normalMapPath="/textures/t1.jpg" // Nueva textura normal
              roughnessMapPath="/textures/t2.jpg" // Nueva textura de rugosidad
              metalness={0} // Metalness personalizado
              roughness={0} // Roughness personalizado
              autoRotateSpeed={3} // Velocidad de rotación más rápida
              sparklesEnabled={false} // Desactivar los destellos
              environmentPreset="sunset" // Cambiar el entorno a "sunset"
            />}

        </ModelVisualizer>
      </div>

      <RightSection hero={hero} rotate={rotate} onRotateToggle={toggleRotation} />
    </div>
  );
};

export default Heros;
