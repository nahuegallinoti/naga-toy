import React from "react";

interface RightSectionProps {
  hero: string;
  onRotateToggle: () => void; // Recibe la función para alternar la rotación
  rotate: boolean; // Recibe el estado de rotación
}

const RightSection: React.FC<RightSectionProps> = ({ hero, onRotateToggle, rotate }) => {
  const descriptions: Record<string, string> = {
    // Unidesa: "A fearless adventurer driven by a thirst for discovery. Always leading the charge, Pepito tackles every challenge with unwavering determination and a contagious smile.",
    // Aristocrat: "An ingenious inventor who thrives on innovation. With a knack for solving complex problems, Gear transforms ideas into reality, shaping a future full of possibilities.",
    // Gear: "A mechanical marvel designed for deep-sea exploration. The Submarine braves the ocean's depths with precision and resilience, uncovering secrets hidden beneath the waves.",
    // Pepito: "A mechanical marvel designed for deep-sea exploration. The Submarine braves the ocean's depths with precision and resilience, uncovering secrets hidden beneath the waves.",
    // Submarine: "A mechanical marvel designed for deep-sea exploration. The Submarine braves the ocean's depths with precision and resilience, uncovering secrets hidden beneath the waves.",
  };

  return (
    <div className="flex flex-col w-1/3 h-fit m-auto justify-center pr-10">
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