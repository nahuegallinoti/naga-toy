import React from "react";
import Divider from "../Shared/Divider";

const data = [
  "Pepito",
  "Octupits",
];

const LeftSection = ({ handleMouseEnter }: any) => {
  return (
    <div className="flex w-1/3 h-fit m-auto justify-center ">
      <ul>
        {data.map((item, index) => (
          <li
            key={index}
            className="my-10 hover:cursor-pointer hover:scale-110 duration-500"
            onMouseEnter={() => handleMouseEnter(item)}
          >
            <h1
              data-text={item}
              className="text-lg sm:text-xl md:text-3xl font-extrabold filling-text uppercase text-transparent"
            >
              {item}
            </h1>
            <div className="flex justify-start py-1 w-1/3">
              <Divider
                width="w-56"
                height="h-1"
                colorFrom="from-purple-800"
                colorTo="to-pink-200"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSection;
