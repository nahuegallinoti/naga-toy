import React from "react";
import Divider from "../Shared/Divider";

const LeftSection = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center text-center">
      <h1 className="text-2xl md:text-4xl font-bold w-52 md:w-80">
        Imagine . Create Re - Imagine
      </h1>
      <div className="w-52">
        <Divider
          width="w-full"
          height="h-1"
          colorFrom="from-slate-100"
          colorTo="to-slate-500"
        />
      </div>
      <h1 className="text-md md:text-lg w-3/5">
        Create Your Own Droyd Toy and Bring It to Life in our App!
      </h1>
      <button className="border p-2 rounded-md">Learn More</button>
    </div>
  );
};

export default LeftSection;