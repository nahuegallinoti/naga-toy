"use client";

import React, { useState } from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import ModelVisualizer from "../Shared/ModelVisualizer";
import FBXTest from "../Shared/3DModels/FBXTest";

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
              color="#ff6347" // Color personalizado
              colorMapPath="/tex/Skin_04_basecolor.jpg" // Nueva textura de color
              normalMapPath="/tex/Skin_04_basecolor.jpg" // Nueva textura normal
              roughnessMapPath="/tex/r1.jpg" // Nueva textura de rugosidad
              metalness={0.8} // Metalness personalizado
              roughness={0.5} // Roughness personalizado
              autoRotateSpeed={3} // Velocidad de rotación más rápida
              sparklesEnabled={false} // Desactivar los destellos
              environmentPreset="sunset" // Cambiar el entorno a "sunset"
            />}

          {hero === "Octupits" && <FBXTest
            fbxName="Pepito.fbx"
            color="#ff6347" // Color personalizado
            colorMapPath="/tex/t2.jpg" // Nueva textura de color
            normalMapPath="/tex/t2.jpg" // Nueva textura normal
            roughnessMapPath="/tex/t1.jpg" // Nueva textura de rugosidad
            metalness={0.8} // Metalness personalizado
            roughness={0.5} // Roughness personalizado
            autoRotateSpeed={3} // Velocidad de rotación más rápida
            sparklesEnabled={false} // Desactivar los destellos
            environmentPreset="forest" // Cambiar el entorno a "sunset"
          />}
        </ModelVisualizer>
      </div>

      <RightSection hero={hero} rotate={rotate} onRotateToggle={toggleRotation} />
    </div>
  );
};

export default Heros;
