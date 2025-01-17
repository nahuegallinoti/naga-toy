import React from "react";
import SectionContainer from "../../Shared/Sections/ContainerSection";
import CanvasSection from "../../Shared/Sections/CanvasSection";
import RightSectionText from "../../Shared/Sections/RightSection";
import InteractiveObject from "../../Shared/InteractiveObject";

const CubeGeometry = () => {
  return (
    <InteractiveObject
      geometryType="box"
      size={[0.5, 0.5, 0.5]}
      text="©©©©©©©©©©©©©"
      backgroundColor="#1a237e"
      textColor="#ffffff"
    />
  );
};

const Cube = () => {
  return (
      <SectionContainer
          Left={() => <CanvasSection model={CubeGeometry} />}
          Right={() => (
              <RightSectionText
                  title="Thinking Inside the Box"
                  subtitle="Explore the structure of cubes!"
              />
          )}
      />
  );
};

export default Cube;
