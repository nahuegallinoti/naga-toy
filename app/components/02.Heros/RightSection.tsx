"use client";

import React, { useState } from "react";

interface RightSectionProps {
  hero: string;
  onRotateToggle: () => void; // Recibe la función para alternar la rotación
  rotate: boolean; // Recibe el estado de rotación
}

const RightSection: React.FC<RightSectionProps> = ({ hero, onRotateToggle, rotate }) => {
  const descriptions: Record<string, string> = {
    Pepito: "A fearless adventurer with a passion for uncovering the unknown. Always at the frontlines, Pepito faces every challenge head-on with a smile.",
    Octupits: "A creature from the depths of the ocean, Octupits commands the seas. With its many limbs, it navigates both the ocean and the mysteries of the world effortlessly.",
  };

  return (
    <div className="flex flex-col w-2/3 h-fit m-auto justify-center">
      <h1 className="text-center text-2xl">{hero}</h1>
      <p className="text-md my-3">{descriptions[hero]}</p>
      <button
        className="text-xl my-5 border border-white p-2 rounded-2xl"
        onClick={onRotateToggle} // Llama a la función para cambiar el estado
      >
        {rotate ? "Stop" : "Rotate"}

      </button>
    </div>
  );
};

export default RightSection;
