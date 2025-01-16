import React from "react";
import Navbar from "../Navbar";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-between h-screen snap-center">
      {/* <Navbar /> */}
      <div className="h-screen flex justify-center md:gap-5 md:w-screen md:items-center md:opacity-85">
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
};

export default Home;
