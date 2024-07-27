import Link from "next/link";
import React from "react";
const Navbar = () => {
  return (
    <nav className="flex flex-row justify-center lg:justify-between items-center px-10 py-4 bg-transparent backdrop-blur-md  text-gray-200 w-full h-[65px] z-50 top-0 fixed ">
      <div className="text-2xl font-bold hidden lg:flex playwrite-dk-loopet">
        <Link href={"#home"}>SAVORY</Link>
      </div>
      <div className="flex flex-row gap-5 items-center justify-center">
        <Link href={"#home"}>Home</Link>
        <Link href={"#about"}>About</Link>
        <Link href={"#menu"}>Menu</Link>
        <Link href={"#contact"}>Contact</Link>
      </div>
      <div>
        <Link
          href="#contact"
          className="btn btn-glass hover:btn-primary hidden lg:flex"
        >
          Book Now!
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
