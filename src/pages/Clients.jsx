import React from "react";
import { image, numbers, numbers2 } from "../constants";

const Clients = () => {
  return (
    <section className="mt-5 ">
      <div>
        <div className="flex flex-col">
          <div className=" mt-10">
            <img
              src={image.client}
              alt="client_Bg"
              className="w-[85vw] mx-auto rounded-lg"
            />
          </div>

          <div className="flex mt-20 gap-5">
            <div className="flex gap-3 sm:gap-10 pl-[9px] sm:pl-[43px] w-[100vw] md:w-[642.857px] ">
              <ul>
                {numbers.map((card) => (
                  <li
                    key={card.id}
                    className=" pb-[30px]  max-w-[200px]  sm:w-[299.926px] h-fit sm:h-[129.97px] "
                  >
                    <div className="pb-[20px] border-b-[1px] border-Dark5">
                      <p className=" font-bold text-[36px] leading-[54px]">
                        {card.title}{" "}
                      </p>
                      <span className="text-[16px] leading-[25px]">
                        {card.span}{" "}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <ul>
                {numbers2.map((card) => (
                  <li
                    key={card.id}
                    className="pb-[30px]  max-w-[200px] sm:w-[299.926px] h-[129.97px]  "
                  >
                    <div className="pb-[20px] border-b-[1px] border-Dark5">
                      <p className=" font-bold text-[36px] leading-[54px]">
                        {card.title}{" "}
                      </p>
                      <span className="text-[16px] leading-[25px]">
                        {card.span}{" "}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:block hidden w-[592.872px] h-[491.577px] ">
              <img src={image.client2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
