import React from "react";
import { image } from "../constants";

const Sourcing = () => {
  return (
    <section className="bg-white2 mt-5">
      <div>
        {/* top item */}
        <div className="flex justify-between">
          <div className="text-Dark2 lg:w-[60vw] w-[100%]  lg:pl-[43px] lg:pr-0 pl-[12px] pr-[12px]">
            <div className="lg:pt-[80px] pt-[20px] border-t-2 border-black">
              <h2 className="lg:text-[60px] text-[30px]  font-Montserrat font-bold lg:leading-[75px] leading-[40px]">
                Outsourcing is a big leap for your software projects
              </h2>
            </div>
            <div className="lg:w-[550px] pt-[38px] w-[100%]">
              <p className="text-[20px] font-medium font-Montserrat leading-[35.4px]">
                On your path to greater velocity and flexibility, we’ve got you
                covered every step of the way.
              </p>
            </div>
          </div>

          <div className="lg:block hidden w-[419.301px] h-[355.074px] ">
            <img src={image.django} alt="" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sourcing;
