import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../images/one.png";
import img2 from "../images/two.png";
import img3 from "../images/three.png";
import img4 from "../images/four.png";
import img5 from "../images/five.png";
import img6 from "../images/six.png";
import img7 from "../images/seven.png";
import img8 from "../images/eight.png";
import img9 from "../images/nine.png";
import img10 from "../images/ten.png";

const MarqueeSlider = () => {
  return (
    <div>
      <div className="text-center md:w-[80%] px-2 md:px-0 w-full   absolute top-[90%] md:top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Marquee direction="right" speed={40} delay={1} pauseOnHover={true}>
          <div className="image_wrapper">
            <img src={img1} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img2} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img3} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img4} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img5} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img6} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img7} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img8} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img9} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img10} alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeSlider;
