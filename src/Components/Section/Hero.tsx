"use client";

import React from "react";

const Hero = () => {
  return (
    <section id="home" className="w-full h-screen">
      <div
        className={`bg-Hero-Pattern bg-cover bg-center bg-no-repeat h-screen w-full `}
      >
        <div className="w-full h-full flex justify-center items-center ">
          <div className="lg:text-5xl text-3xl font-bold text-gray-200 flex flex-col gap-4">
            <h1>SAVOR THE MOMENT</h1>
            <h1>SAVOR THE FLAVOR</h1>
            <div className="w-full flex items-center justify-center">
              <a href="#contact" className="btn btn-primary">
                BOOK NOW!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
