"use client";

import React, { useState } from "react";
import { AppetizersMenu, DessertMenu, MaincourseMenu } from "../Menu/Food";
import DrinkList from "../Menu/Drink";

const Menu = () => {
  const [open, setOpen] = useState("Appetizers");
  return (
    <section id="menu" className="w-full h-auto  pt-32 pb-10">
      <div className="flex flex-col text-white gap-5">
        <div>
          <h1 className="text-5xl font-bold text-white text-center">
            Our&apos;s Menu
          </h1>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-5 items-center justify-center">
            <button
              onClick={() => setOpen("Appetizers")}
              className={`text-xl ${
                open === "Appetizers" ? "text-gray-500 underline" : "text-white"
              } hover:text-gray-500 hover:font-bold  `}
            >
              <h1>Appitizer</h1>
            </button>
            <button
              onClick={() => setOpen("Main Course")}
              className={`text-xl ${
                open === "Main Course"
                  ? "text-gray-500 underline"
                  : "text-white"
              } hover:text-gray-500 hover:font-bold  `}
            >
              <h1>Main Course</h1>
            </button>
            <button
              onClick={() => setOpen("Dessert")}
              className={`text-xl ${
                open === "Dessert" ? "text-gray-500 underline" : "text-white"
              } hover:text-gray-500 hover:font-bold  `}
            >
              <h1>Dessert</h1>
            </button>
            <button
              onClick={() => setOpen("Drink")}
              className={`text-xl ${
                open === "Drink" ? "text-gray-500 underline" : "text-white"
              } hover:text-gray-500 hover:font-bold  `}
            >
              <h1>Drink</h1>
            </button>
          </div>
          <div className="w-full h-[700px] overflow-y-auto py-2">
            {open === "Appetizers" && <AppetizersMenu />}
            {open === "Main Course" && <MaincourseMenu />}
            {open === "Dessert" && <DessertMenu />}
            {open === "Drink" && <DrinkList />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
