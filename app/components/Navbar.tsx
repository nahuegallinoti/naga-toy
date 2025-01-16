import React from "react";
import Link from "next/link"; // Import Link from Next.js

const Navbar = () => {
  return (
    <div className="flex pt-5 justify-center">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-5 xl:gap-12 xl:text-xl">
          {/* Logo - Uncomment and replace with actual image if needed */}
          {/* <Image
            src="/images/logo.png"
            height={90}
            width={90}
            alt="Logo"
            style={{ width: "auto", height: "auto" }}
          /> */}

          {/* Navigation links */}
          <ul className="flex gap-5 cursor-pointer">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/heros">Geometry</Link>
            </li>
            <li>
              <Link href="/heros">Heros</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
