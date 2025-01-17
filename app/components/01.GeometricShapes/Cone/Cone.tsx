import React from "react";
import InteractiveObject from "../../Shared/InteractiveObject";
import SectionContainer from "../../Shared/Sections/ContainerSection";
import CanvasSection from "../../Shared/Sections/CanvasSection";
import RightSectionText from "../../Shared/Sections/RightSection";

const ConeGeometry = () => {
    return (
        <InteractiveObject
            geometryType="cone"
            size={[0.4, 0.8, 5]}
            text=""
            backgroundColor="#924084"
            textColor="#ffffff"
        />
    );
};

const Cone = () => {
    return (
        <SectionContainer
            Left={() => <CanvasSection model={ConeGeometry} />}
            Right={() => (
                <RightSectionText
                    title="Pointing to New Heights"
                    subtitle="Discover the elegance of cones!"
                />
            )}
        />
    );
};

export default Cone;