"use client";

import React, { useState } from "react";
import { CiForkAndKnife } from "react-icons/ci";
import { FaMartiniGlassEmpty } from "react-icons/fa6";
import FoodList from "../Menu/Food";
import DrinkList from "../Menu/Drink";
const Menu = () => {
  const [open, setOpen] = useState(true);

  const activeComponents = () => {
    setOpen(!open);
  };

  return (
    <section id="menu" className="w-full h-auto bg-gray-800 pt-32 pb-10">
      <div className="flex flex-col text-white gap-10">
        <div>
          <h1 className="text-5xl font-bold text-white text-center">
            Our&apos;s Menu
          </h1>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-center gap-5">
            <button
              onClick={activeComponents}
              className="p-5 bg-gray-600 rounded-t-xl flex flex-col items-center justify-center hover:bg-blue-500"
            >
              <CiForkAndKnife size={50} color="blue" />
              <h1 className="text-2xl font-bold">FOOD</h1>
            </button>
            <button
              onClick={activeComponents}
              className="p-5 bg-gray-600 rounded-t-xl flex flex-col items-center justify-center hover:bg-blue-500"
            >
              <FaMartiniGlassEmpty size={50} color="blue" />
              <h1 className="text-2xl font-bold">Drink</h1>
            </button>
          </div>
          <div className="flex  justify-center ">
            <div className="flex flex-col justify-center w-auto bg-gray-600 items-center rounded-xl px-3 py-3">
              {open ? <FoodList /> : <DrinkList />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
