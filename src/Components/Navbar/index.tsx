import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <nav className="flex flex-row justify-center lg:justify-between items-center px-10 py-4 bg-gray-700 text-white z-50 top-0 fixed w-full h-[65px]">
      <div className="text-2xl font-bold hidden lg:flex">
        <Link href={"/"}>SAVORY</Link>
      </div>
      <div className="flex flex-row gap-5 items-center justify-center">
        <Link href={"/"}>Home</Link>
        <Link href={"#about"}>About</Link>
        <Link href={"#menu"}>Menu</Link>
        <Link href={"#contact"}>Contact</Link>
      </div>
      <div>
        <Link href="/" className="btn btn-primary hidden lg:flex">
          Book Now!
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
