import React, { useState } from "react";
import { Drink } from "@/Data/Menu";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const DrinkList = () => {
  const [index, setIndex] = useState(0);
  const [full, setFull] = useState(10);
  const LastPages = Drink.length;
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
      <div className="flex flex-row gap-5 items-center justify-center relative">
        <div className="lg:hidden flex z-10 absolute left-3 top-[23rem]">
          {index <= 0 ? (
            <IoIosArrowBack
              size={32}
              onClick={handlePrev}
              className="btn btn-circle btn-ghost btn-sm btn-disabled btn-primary"
            />
          ) : (
            <IoIosArrowBack
              size={32}
              onClick={handlePrev}
              className="btn btn-circle btn-ghost btn-sm"
            />
          )}
        </div>
        <div className="grid lg:grid-cols-5 grid-cols-2 gap-5 px-5">
          {Drink.slice(index, full).map((item: any) => {
            const rupiah = new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(item.price);
            return (
              <div
                className="bg-secondary flex flex-col gap-4 px-5 py-3 shadow-xl rounded-xl"
                key={item.id}
              >
                <figure className="flex items-center justify-center w-full">
                  <img
                    src={item.image}
                    alt=""
                    className="w-[200px] h-[150px] lg:w-[250px] lg:h-[200px] rounded-md"
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
        <div className="lg:hidden flex z-10 absolute right-3 top-[23rem]">
          {full >= LastPages ? (
            <IoIosArrowForward
              size={32}
              onClick={handlePrev}
              className="btn btn-circle btn-ghost btn-sm btn-disabled"
            />
          ) : (
            <IoIosArrowForward
              size={32}
              onClick={handleNext}
              className="hover:cursor-pointer"
            />
          )}
        </div>
      </div>
      <div className="hidden lg:flex flex-row gap-5 items-center justify-center">
        {index <= 0 ? (
          <IoIosArrowBack
            size={32}
            onClick={handlePrev}
            className="btn btn-circle btn-ghost btn-sm btn-disabled"
          />
        ) : (
          <IoIosArrowBack
            size={32}
            onClick={handlePrev}
            className="btn btn-circle btn-ghost btn-sm"
          />
        )}
        <p>
          {index + 1} ... {full}
        </p>
        {full >= LastPages ? (
          <IoIosArrowForward
            size={32}
            onClick={handlePrev}
            className="btn btn-circle btn-ghost btn-sm btn-disabled"
          />
        ) : (
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

export default DrinkList;
