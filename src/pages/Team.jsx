import React from "react";
import MarqueeSlider from "../components/MarqueeSlider";
import { image, valuesCard } from "../constants";

const Team = () => {
  return (
    <section className="bg-Footer pb-[50px]">
      <div className=" section__bg ">
        {/* Black color overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        {/* Your content */}
        <div className="text-white text-center md:w-[90%] px-2 md:px-0 w-full  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="md:text-[80px] text-[50px] leading-[96px] font-bold">
            Team
          </h1>
          <p className="mt-4 text-[18px]  font-Lato leading-8 md:w-[70%] w-[100%] mx-auto ">
            We’re a family of professionals building the future with the power
            of Python, one project at a time. Learn about our people, what
            drives us, and who you’ll be working with as a client or co-worker.
          </p>
        </div>

        <MarqueeSlider />
      </div>

      <div className="section">
        <div className="sm:pt-[50px] pt-[40px] pb-[50px]">
          <div className="flex justify-between items-center flex-col sm:flex-row md:px-0 px-3">
            <div className="sm:w-[45%] w-[100%]">
              <img src={image.kitchen2} alt="" />
            </div>

            <div className="sm:w-[50%] w-[100%] pt-[40px]">
              <strong className="text-[16px] font-Lato leading-6 text-Dark4">
                Are you looking for developers to join your in-house team? Or
                maybe you need to add specific skills to your roster? Whether
                it’s extra manpower or top-notch specialists, you’re in good
                hands with STX Next. We’ll augment your team with the exact
                people you require in less than 14 days. That commitment is a
                point of pride for our company.
              </strong>

              <p className="text-[16px] font-Lato leading-[26px] md:mt-[40px] mt-[20px]">
                Our people will complement your staff, help you overcome any
                potential skill gaps, and increase your speed of delivery. The
                control over the project remains on your end and you keep all
                the strategic competencies completely in-house, distributing the
                work among all team members—both in-house and outsourced. Adding
                the missing skill sets to your existing internal team will allow
                you to build the most effective team faster, scale up or down at
                will, and deliver your project on time and within budget.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-end w-[100%] ">
            <h2 className="lg:text-[60px] text-[25px] lg:leading-[75px] leading-[20px] font-bold w-[65%] sm:w-[50%] ">
              Values
            </h2>

            <hr className="  border-black sm:w-[55%] w-[85%] " />
          </div>
          <div className=" flex flex-col md:flex-row mt-5 ">
            {/* left item */}
            <div className=" lg:w-[414.286px] w-[100%] lg:mx-0 mx-auto">
              <img
                src={image.kitchen}
                alt=""
                className="lg:w-[471px] w-[100%] z-50"
              />
              <div className="bg-black text-white p-[20px]  lg:pt-[50px] lg:pr-[55px] lg:pb-[52px] lg:pl-[92px] lg:h-[430px]">
                <div>
                  <h2 className=" font-Montserrat font-bold lg:text-[36px] text-[23px] leading-[35px] lg:leading-[54px]">
                    Transparency
                  </h2>
                  <p className="font-Lato text-[16px] leading-6 mt-5">
                    Trust is built upon openness and fairness. For our team
                    members, this means a clear salary formula and codified
                    development paths. For our clients, it means maintaining
                    full transparency by sharing detailed monthly time reports.
                  </p>
                </div>
              </div>
            </div>

            {/* right item */}
            <div className="w-[100%] lg:w-[70%] flex flex-wrap gap-y-2 lg:gap-y-0  lg:pl-[33px] ">
              {valuesCard.map((card) => (
                <div
                  className="lg:w-[376px] w-[100%]  lg:pt-[15px] pt-[10px] lg:px-[30px] flex gap-y-4 flex-col items-center text-center lg:h-[350px] "
                  key={card.id}
                >
                  <div>
                    <img src={card.icon} alt="" />
                  </div>
                  <div>
                    <h2 className="text-[16px] font-bold leading-6">
                      {card.title}
                    </h2>
                  </div>
                  <div>
                    <p className="text-[16px] leading-[25px] text-Ash font-Lato">
                      {card.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="section">
          {/* our team */}
          <div className="mt-[40px] pt-[20px] md:pt-[40px]">
            <div className="flex justify-between items-end w-[100%] ">
              <h2 className="lg:text-[60px] text-Dark2 text-[25px] lg:leading-[55px] leading-[20px] font-bold w-[65%] sm:w-[50%] ">
                Our Team
              </h2>

              <hr className="  border-black sm:w-[80%] w-[85%] " />
            </div>

            <div className="flex md:flex-row gap-y-2 md:gap-y-0 justify-between flex-col md:pt-[60px] pt-[20px]">
              <div className="w-[99%] md:w-[55%]">
                <p className="text-[20px] font-medium leading-[35px]">
                  The success of our clients and co-workers depends on smooth
                  processes and informed decision making. We have a roster of
                  seasoned leaders applying the best management and
                  communication practices on the market to our work.
                </p>
              </div>
              <div className="w-[99%] md:w-[45%]">
                <p className="text-[20px] font-Lato font-bold leading-[31px]]">
                  Their combined experience across the entire spectrum of
                  delivering successful software projects and assembling
                  high-performing teams has helped us become Europe’s largest
                  Python software house.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
