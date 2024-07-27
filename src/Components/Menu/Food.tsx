import { Appetizers, Desserts, MainCourses } from "@/Data/Menu";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const AppetizersMenu = () => {
  const [index, setIndex] = useState(0);
  const [full, setFull] = useState(10);

  const LastPages = Appetizers.length;
  const handlePrev = () => {
    setIndex((prev) => prev - 10);
    setFull((prev) => prev - 10);
  };

  const handleNext = () => {
    setIndex((prev) => prev + 10);
    setFull((prev) => prev + 10);
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="grid lg:grid-cols-5 grid-cols-2 gap-5 px-5">
        {Appetizers.slice(index, full).map((item: any) => {
          const rupiah = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(item.price);
          return (
            <div
              className="bg-gray-800 flex flex-col gap-4 px-5 py-3 shadow-xl rounded-xl"
              key={item.id}
            >
              <figure className="flex items-center justify-center w-full">
                <img
                  src={item.image}
                  alt=""
                  className="w-[250px] h-[200px] rounded-md"
                />
              </figure>
              <div className="flex flex-col justify-center pb-5">
                <h1>{item.name}</h1>
                <p>{rupiah}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row gap-5 items-center justify-center">
        {index <= 0 ? null : (
          <IoIosArrowBack
            size={32}
            onClick={handlePrev}
            className="hover:cursor-pointer"
          />
        )}
        <p>
          {index + 1} ... {full}
        </p>
        {full >= LastPages ? null : (
          <IoIosArrowForward
            size={32}
            onClick={handleNext}
            className="hover:cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export const MaincourseMenu = () => {
  const [index, setIndex] = useState(0);
  const [full, setFull] = useState(10);

  const LastPages = MainCourses.length;
  const handlePrev = () => {
    setIndex((prev) => prev - 10);
    setFull((prev) => prev - 10);
  };

  const handleNext = () => {
    setIndex((prev) => prev + 10);
    setFull((prev) => prev + 10);
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="grid lg:grid-cols-5 grid-cols-2 gap-5 px-5">
        {MainCourses.slice(index, full).map((item: any) => {
          const rupiah = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(item.price);
          return (
            <div
              className="bg-gray-800 flex flex-col gap-4 px-5 py-3 shadow-xl rounded-xl"
              key={item.id}
            >
              <figure className="flex items-center justify-center w-full">
                <img
                  src={item.image}
                  alt=""
                  className="w-[250px] h-[200px] rounded-md"
                />
              </figure>
              <div className="flex flex-col justify-center pb-5">
                <h1>{item.name}</h1>
                <p>{rupiah}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row gap-5 items-center justify-center">
        {index <= 0 ? null : (
          <IoIosArrowBack
            size={32}
            onClick={handlePrev}
            className="hover:cursor-pointer"
          />
        )}
        <p>
          {index + 1} ... {full}
        </p>
        {full >= LastPages ? null : (
          <IoIosArrowForward
            size={32}
            onClick={handleNext}
            className="hover:cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export const DessertMenu = () => {
  const [index, setIndex] = useState(0);
  const [full, setFull] = useState(10);

  const LastPages = Desserts.length;
  const handlePrev = () => {
    setIndex((prev) => prev - 10);
    setFull((prev) => prev - 10);
  };

  const handleNext = () => {
    setIndex((prev) => prev + 10);
    setFull((prev) => prev + 10);
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="grid lg:grid-cols-5 grid-cols-2 gap-5 px-5">
        {Desserts.slice(index, full).map((item: any) => {
          const rupiah = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(item.price);
          return (
            <div
              className="bg-gray-800 flex flex-col gap-4 px-5 py-3 shadow-xl rounded-xl"
              key={item.id}
            >
              <figure className="flex items-center justify-center w-full">
                <img
                  src={item.image}
                  alt=""
                  className="w-[250px] h-[200px] rounded-md"
                />
              </figure>
              <div className="flex flex-col justify-center pb-5">
                <h1>{item.name}</h1>
                <p>{rupiah}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row gap-5 items-center justify-center">
        {index <= 0 ? null : (
          <IoIosArrowBack
            size={32}
            onClick={handlePrev}
            className="hover:cursor-pointer"
          />
        )}
        <p>
          {index + 1} ... {full}
        </p>
        {full >= LastPages ? null : (
          <IoIosArrowForward
            size={32}
            onClick={handleNext}
            className="hover:cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};
