import React from "react";
import {
  client,
  client1,
  client2,
  image,
  numbers,
  numbers2,
} from "../constants";

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

          {/*section of numbers */}
          <div className="flex justify-between mt-20 gap-5">
            <div className="flex gap-3  lg:justify-start lg:gap-[10px] sm:gap-10 px-[10px] sm:pl-[43px] w-[100vw] md:w-[642.857px] ">
              <ul className=" w-[50%]">
                {numbers.map((card) => (
                  <li
                    key={card.id}
                    className=" pb-[30px] md:pr-[30px]  w-[100%]  md:w-[300.926px] h-fit sm:h-[129.97px] "
                  >
                    <div className="pb-[20px] border-b-[2px] border-Dark5 w-[100%] md:w-[263px] ">
                      <p className=" font-bold text-[36px] leading-[54px]">
                        {card.title}{" "}
                      </p>
                      <span className="text-[16px] leading-[25px] ">
                        {card.span}{" "}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <ul className=" w-[50%]">
                {numbers2.map((card) => (
                  <li
                    key={card.id}
                    className="pb-[30px] md:pr-[30px]  w-[100%] md:w-[299.926px] h-fit sm:h-[125.97px]  "
                  >
                    <div className="pb-[20px] border-b-[2px] border-Dark5 w-[100%] md:w-[263px] ">
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

          {/* section of company featured */}
          <div className="md:-mt-[100px] mt-[10px]">
            <div className=" pt-[52px] pb-[40px] lg:px-[40px] px-[10px] rounded-lg w-[92vw] mx-auto flex flex-col items-center bg-white1">
              <div className="pb-[40px]">
                <h2 className=" font-bold text-[22px] leading-8 text-center">
                  Our clients were featured in
                </h2>
              </div>
              <div className=" flex flex-wrap justify-center  w-[100%]  ">
                <div className=" flex">
                  {client.map((card) => (
                    <div
                      key={card.id}
                      className=" lg:py-10 lg:px-5 px-4 py-4 block text-center   "
                    >
                      <img src={card.icon} alt="" className="w-[full]" />
                    </div>
                  ))}
                </div>
                <div className=" flex">
                  {client1.map((card) => (
                    <div
                      key={card.id}
                      className=" lg:py-10 lg:px-5 px-4 py-4 block text-center   "
                    >
                      <img src={card.icon} alt="" className="w-[full]" />
                    </div>
                  ))}
                </div>
                <div className=" flex">
                  {client2.map((card) => (
                    <div
                      key={card.id}
                      className=" lg:py-7 lg:px-5 px-4 py-4 block text-center   "
                    >
                      <img src={card.icon} alt="" className="w-[full]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
