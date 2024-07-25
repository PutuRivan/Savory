import Link from "next/link";
import React from "react";
import Information from "../Information";
const Navbar = () => {
  return (
    <div className="flex flex-col w-full h-full z-50 top-0 fixed gap-1">
      <nav className="flex flex-row justify-center lg:justify-between items-center px-10 py-4 bg-gray-800 text-gray-200  w-full h-[65px]">
        <div className="text-2xl font-bold hidden lg:flex playwrite-dk-loopet">
          <Link href={"/"}>SAVORY</Link>
        </div>
        <div className="flex flex-row gap-5 items-center justify-center">
          <Link href={"/"}>Home</Link>
          <Link href={"#about"}>About</Link>
          <Link href={"#menu"}>Menu</Link>
          <Link href={"#contact"}>Contact</Link>
        </div>
        <div>
          <Link href="#contact" className="btn btn-primary hidden lg:flex">
            Book Now!
          </Link>
        </div>
      </nav>
      <Information />
    </div>
  );
};

export default Navbar;
