"use client";

import React, { useState } from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const GeometricShapes = () => {
  const [geometricShape, setWork] = useState("Cone");
  const handleMouseEnter = (item: any) => {
    setWork(item);
  };

  return (
    <div className="flex h-full w-full snap-center justify-around">
      <LeftSection handleMouseEnter={handleMouseEnter} />
      <RightSection geometricShape={geometricShape} />
    </div>
  );
};

export default GeometricShapes;