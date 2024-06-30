import { Food } from "@/Data/Menu";
import React from "react";
import { CiForkAndKnife } from "react-icons/ci";
import { FaMartiniGlassEmpty } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const Menu = () => {
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
            <div className="w-[200px] h-[100px] bg-gray-600 rounded-t-xl flex flex-col items-center justify-center hover:bg-blue-500">
              <CiForkAndKnife size={50} color="blue" />
              <h1 className="text-2xl font-bold">FOOD</h1>
            </div>
            <div className="w-[200px] h-[100px] bg-gray-600 rounded-t-xl flex flex-col items-center justify-center hover:bg-blue-500">
              <FaMartiniGlassEmpty size={50} color="blue" />
              <h1 className="text-2xl font-bold">Drink</h1>
            </div>
          </div>
          <div className="flex  justify-center ">
            <div className="flex flex-col justify-center w-auto bg-gray-600 items-center rounded-xl px-3 py-3">
              <div className="flex flex-row items-center">
                <div className="grid grid-rows-4 grid-flow-row lg:grid-flow-col px-5 py-4 gap-5">
                  {Food.map((item) => (
                    <div
                      className="w-[500px] h-[75px] bg-gray-700 rounded-lg flex flex-row"
                      key={item.id}
                    >
                      <figure className="flex items-center w-[80px] h-full bg-gray-700 rounded-l-lg  px-1">
                        <img
                          src={item.image}
                          alt="image"
                          className="w-auto h-auto"
                        />
                      </figure>
                      <div className="flex flex-col justify-center">
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-row gap-5 items-center">
                <div className="btn btn-circle btn-ghost">
                  <IoIosArrowBack size={32} />
                </div>
                <p className="text-xl">
                  1 <span className="text-blue-500">...</span> 3
                </p>
                <div className="btn btn-circle btn-ghost">
                  <IoIosArrowForward size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
