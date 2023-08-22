import React from "react";
import { image } from "../constants";

const Why = () => {
  return (
    <section className="bg-black mt-5">
      <div className="section ">
        {/* top item */}
        <div className="flex justify-between items-center flex-col sm:flex-row">
          <div className="text-white lg:w-[60%] w-[100%]  lg:pl-[10px] lg:pr-0 pl-[12px] pr-[12px] ">
            <div className="lg:pt-[80px] pt-[20px] border-t-2 border-black">
              <h2 className="lg:text-[60px] text-[30px]  font-Montserrat font-bold lg:leading-[75px] leading-[40px]">
                Why Us?
              </h2>
            </div>
            <div className="lg:w-[550px] pt-[30px] w-[100%]">
              <p className="text-[20px] font-medium font-Montserrat leading-[35.4px]">
                We have a number of different teams within our company that
                specialize in different areas of technology and business so you
                can be rest assured of quality.
              </p>
              <p className="text-[20px] font-medium font-Montserrat leading-[35.4px] mt-[15px]">
                Your best people remain focused on your core business where
                their time is much better spent working on your product.
              </p>
            </div>
          </div>

          <div className="mt-[30px] sm:mt-0 w-[90%] lg:w-[419.301px] sm:h-[355.074px]  ">
            <img src={image.why} alt="" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
