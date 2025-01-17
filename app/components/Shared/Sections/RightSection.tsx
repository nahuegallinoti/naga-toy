import React from "react";
import Divider from "../UI/Divider";

const RightSectionText = ({ title, subtitle }: { title: string, subtitle: string }) => {
  return (
    <div className="flex flex-col justify-center w-2/5 text-center">
      <h1 className="text-lg font-bold md:text-3xl md:w-2/3 text-left">
        {title}
      </h1>
      <Divider
        width="w-56"
        height="h-1"
        colorFrom="from-slate-100"
        colorTo="to-slate-500"
      />
      <div className="flex flex-col my-5 w-fit md:w-3/5">
        <h1 className="text-md font-bold my-2 border border-opacity-50 border-violet-800 rounded-sm p-1">
          {subtitle}
        </h1>
        <h1 className="tracking-widest text-sm mt-1">
          We are a group of people who are passionate about toys and technology.
        </h1>
      </div>
    </div>
  );
};

export default RightSectionText;
