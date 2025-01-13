import React from "react";
import Cube from "./Cube/Cube";
import Cone from "./Cone/Cone";
import Sphere from "./Sphere/Sphere";

const RightSection = ({ geometricShape }: any) => {
  return (
    <div className="flex flex-col justify-center w-2/3 items-center h-full m-auto mr-5">
      {geometricShape === "Cone" && <Cone />}
      {geometricShape === "Cube" && <Cube />}
      {geometricShape === "Sphere" && <Sphere />}
    </div>
  );
};

export default RightSection;