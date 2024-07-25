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
      <div className="grid lg:grid-cols-5 grid-cols-2 gap-5 px-5">
        {Drink.slice(index, full).map((item: any) => (
          <div
            className="bg-gray-800 flex flex-col gap-4 px-5 py-2 shadow-xl rounded-xl"
            key={item.id}
          >
            <figure className="flex items-center justify-center w-full">
              <img src={item.image} alt="" className="w-[250px] h-[200px]" />
            </figure>
            <div className="flex flex-col justify-center pb-5">
              <h1>{item.name}</h1>
              <p>Rp. {item.price}</p>
            </div>
          </div>
        ))}
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

export default DrinkList;
