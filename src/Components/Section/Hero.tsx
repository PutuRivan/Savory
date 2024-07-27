"use client";

import React from "react";

const Hero = () => {
  return (
    <section id="home" className="w-full h-screen">
      <div
        className={`bg-Hero-Pattern bg-cover bg-center bg-no-repeat h-screen w-full`}
      >
        <div className="w-full h-full flex flex-col justify-center items-center ">
          <div className="lg:text-5xl text-3xl font-bold text-gray-200 flex flex-col gap-4">
            <div className="flex flex-col justify-center items-center">
              <h1 className="playwrite-dk-loopet">SAVOR THE MOMENT</h1>
              <h1 className="playwrite-dk-loopet">SAVOR THE FLAVOR</h1>
            </div>
            <div className="w-full flex items-center justify-center">
              <button
                className="btn btn-primary playwrite-dk-loopet"
                onClick={() =>document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                BOOK NOW!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
