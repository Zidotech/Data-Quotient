import React from "react";
import Navbar from "./Navbar";
import Button from "./Button";

const Header = () => {
  return (
    <div className=" app__bg ">
      {/* Black color overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div>
        <Navbar />
      </div>

      {/* Your content */}
      <div className="text-white  absolute top-[60%] md:top-[60%] left-1/2 md:left-[35%] transform -translate-x-1/2 -translate-y-1/2 ">
        <div className=" px-3 flex flex-col gap-y-4 md:gap-y-6 justify-center md:items-start items-center  md:w-[654px]  ">
          <h1 className="text-[48px] font-bold text-white  leading-[57px]">
            Data quotient for business sense
          </h1>
          <p className="mt-4 text-[23px] ">
            We have a number of different teams within our company that
            specialise in different areas of technology and business so you can
            be rest assured of quality.
          </p>

          <Button
            text={"GET QUOTE"}
            styles={
              " bg-Blue w-[300px] mt-6 rounded-[150px] text-[20px] uppercase p-[18px]  text-center text-white"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
