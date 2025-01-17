import React from "react";
import SectionContainer from "../../Shared/Sections/ContainerSection";
import CanvasSection from "../../Shared/Sections/CanvasSection";
import RightSectionText from "../../Shared/Sections/RightSection";
import InteractiveObject from "../../Shared/InteractiveObject";

const SphereGeometry = () => {

  return (
    <>
      <InteractiveObject
        geometryType="sphere" // Tipo de geometría
        size={[0.3, 32, 32]} // Tamaño
        text="✨ Wow!" // Texto
        backgroundColor="#880e4f" // Color de fondo
        textColor="#00e676" // Color del texto
        sparkles={false} // Brillo y efectos especiales
        position={[-1, 1, 1]}  // Posición inicial
      />

      <InteractiveObject
        geometryType="sphere"
        size={[0.3, 32, 32]}
        text="🌟 Amazing!"
        backgroundColor="#00796b"
        textColor="#ffeb3b"
        sparkles={false}
        position={[1, -1, -1]}
      />

      <InteractiveObject
        geometryType="sphere"
        size={[0.3, 32, 32]}
        text="🌟 Amazing!"
        backgroundColor="#ffb900"
        textColor="#ffffff"
        sparkles={true}
        position={[-1, -1, -1]}
      />

      
    <InteractiveObject
        geometryType="sphere"
        size={[0.3, 32, 32]}
        text="🌟 Amazing!"
        backgroundColor="#519aba"
        textColor="#ffeb3b"
        sparkles={true}
        position={[1, 1, 1]}
      />
    </>);
};

const Sphere = () => {
  return (
      <SectionContainer
          Left={() => <CanvasSection model={SphereGeometry} />}
          Right={() => (
              <RightSectionText
                  title="The Perfect Shape"
                  subtitle="Dive into the world of spheres!"
              />
          )}
      />
  );
};

export default Sphere;