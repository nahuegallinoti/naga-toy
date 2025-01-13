import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex pt-5 justify-center">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-5 xl:gap-12 xl:text-xl">
          <Image
            src="/images/logo.png"
            height={90}
            width={90}
            alt="Logo"
            style={{ width: "auto", height: "auto" }}
          />
          <ul className="flex gap-5 cursor-pointer">
            <li>Home</li>
            <li>Geometry</li>
            <li>Heros</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
