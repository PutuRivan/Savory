import React, { useState } from "react";
import { Drink } from "@/Data/Menu";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const DrinkList = () => {
  const [index, setIndex] = useState(0);
  const [full, setFull] = useState(8);
  const LastPages = Drink.length;
  const handlePrev = () => {
    setIndex((prev) => prev - 8);
    setFull((prev) => prev - 8);
  };

  const handleNext = () => {
    setIndex((prev) => prev + 8);
    setFull((prev) => prev + 8);
  };
  return (
    <div>
      <div className="flex flex-row items-center">
        <div className="grid grid-cols-2  px-5 py-4 gap-5">
          {Drink.slice(index, full).map((item) => (
            <div
              className="w-auto lg:w-[500px] h-auto bg-gray-700 rounded-lg flex flex-col lg:flex-row "
              key={item.id}
            >
              <figure className="flex lg:justify-start justify-center items-center rounded-l-lg  px-1">
                <img
                  src={item.image}
                  alt="image"
                  className="w-[75px] h-[75px]"
                />
              </figure>
              <div className="flex flex-col justify-center">
                <p className="text-center lg:text-start">{item.name}</p>
                <p className="text-center lg:text-start">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-5 items-center justify-center">
        {index <= 0 ? null : <IoIosArrowBack size={32} onClick={handlePrev} />}

        {full >= LastPages ? null : (
          <IoIosArrowForward size={32} onClick={handleNext} />
        )}
      </div>
    </div>
  );
};

export default DrinkList;
