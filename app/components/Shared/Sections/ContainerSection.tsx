import React from "react";

const SectionContainer = ({ Left, Right }: { Left: React.ComponentType, Right: React.ComponentType }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen snap-center">
      <div className="h-screen flex justify-center md:gap-5 md:w-screen md:items-center md:opacity-85">
        <Left />
        <Right />
      </div>
    </div>
  );
};

export default SectionContainer;
