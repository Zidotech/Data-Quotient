import React from "react";
import { end, image, webDevStack } from "../constants";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const DiscoveryWorkshop = () => {
  return (
    <section className="bg-Footer ">
      <div className=" section__bg ">
        {/* Black color overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        {/* Your content */}
        <div className="text-white sm:text-left text-center px-2 md:px-0 absolute section top-[60%] sm:top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
          <div className="flex justify-between sm:flex-row flex-col gap-y-6 sm:gap-y-0">
            <div className="sm:pt-[50px] sm:w-[47%] w-[100%] ">
              <h1 className="md:text-[60px] text-[30px] sm:leading-[74px]  font-bold">
                Discovery Workshop Services
              </h1>
              <div className="pt-[70px] sm:block hidden">
                <Button
                  text={"CONTACT US "}
                  styles={
                    " bg-Blue  rounded-[150px] font-semibold text-[12px] uppercase p-[20px] w-[150px] text-center text-white "
                  }
                />
              </div>
            </div>

            <div className="sm:block hidden">
              <img src={image.mouse2} alt="" />
            </div>

            <div className="sm:pt-[50px] sm:pl-[20px] sm:w-[48%] w-[100%] ">
              <p className="text-[20px] font-semibold leading-[35px]">
                End-to-end development services that will help you digitize your
                business and disrupt the market, no matter your business size.
              </p>
              <p className="pt-[24px] font-Lato leading-[26px] text-[16px]">
                350+ Python and JavaScript developers are ready to deliver
                top-quality applications and help you bring your next big idea
                to life.
              </p>

              <div className="sm:block hidden pt-[48px]">
                <div className="flex gap-3">
                  <img
                    src={image.webdevpic}
                    alt=""
                    className="rounded-full w-[53px]"
                  />
                  <div>
                    <p className="text-Blue">MAREK OLEJNICZAK</p>
                    <span>Director of Technology</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="sm:pt-[140px] pt-[50px] pb-[100px]">
          <div className="flex sm:flex-row flex-col gap-y-8 sm:gap-y-0">
            <div className="flex gap-3">
              <h2 className="md:text-[60px] sm:text-[45px] text-[25px] font-bold leading-[40px] sm:leading-[75px]">
                What are Discovery Workshop?
              </h2>
              <img
                src={image.webdevelopment}
                alt=""
                className="w-[100px] sm:hidden block"
              />
            </div>

            <div className="sm:w-[49%] w-[100%] flex flex-col justify-between items-end">
              <img
                src={image.webdevelopment}
                alt=""
                className="w-[133px] sm:block hidden"
              />
              <hr className="  border-black md:w-[95%] sm:w-[80%] w-[100%] " />
            </div>
          </div>

          <div className="flex justify-between gap-y-9 sm:gap-y-0 sm:flex-row flex-col sm:pt-[100px] pt-[30px]">
            <div className="md:w-[45%] w-[100%] md:pr-[100px] sm:pr-[20px]  ">
              <img src={image.endT} alt="" />
            </div>

            <div className="md:pr-[43px] sm:w-[60%] w-[100%]">
              <p className="text-[20px] leading-[35px] font-medium">
                Without a web app, your business is losing—both money and market
                share. A web application will give you and your customers a
                zero-install, centralized, safe, and scalable experience. Using
                cutting-edge technologies, you’ll get both reliability and
                better performance.
              </p>

              <div className="pt-[40px]">
                <p className="font-Lato text-[16px] font-bold leading-[25px] mb-5">
                  If you’re an established company, you can digitize your
                  processes and cut costs in the spirit of digital
                  transformation. If you’re a startup, you can build your dream
                  product and disrupt the market quickly yet sustainably. All
                  you need to run your business is within your grasp: custom web
                  applications, CMS (Content Management System), SEO-optimized
                  websites, and more.
                </p>
                <p className="text-[14px] font-Lato leading-[22px]">
                  We can help you find the right solutions for your individual
                  needs. Save time, streamline your business, reach a wider
                  audience, and enhance your brand experience with a tailor-made
                  web app!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* service we've provided */}

        <div className="sm:pt-[20px] pb-[100px]">
          <div className="flex sm:flex-row flex-col gap-y-8 sm:gap-y-0">
            <div className="flex gap-3">
              <h2 className="md:text-[60px] sm:text-[45px] text-[25px] font-bold leading-[40px] sm:leading-[75px]">
                When should you conduct discovery workshop?
              </h2>
              <img
                src={image.webdevelopment}
                alt=""
                className="w-[100px] sm:hidden block"
              />
            </div>

            <div className="sm:w-[49%] w-[100%] flex flex-col justify-between items-end">
              <img
                src={image.webdevelopment}
                alt=""
                className="w-[133px] sm:block hidden"
              />
              <hr className="  border-black md:w-[95%] sm:w-[80%] w-[100%] " />
            </div>
          </div>

          <div className="flex justify-between gap-y-9 sm:gap-y-0 sm:flex-row flex-col sm:pt-[100px] pt-[30px]">
            <div className="md:w-[45%] w-[100%] md:pr-[100px] sm:pr-[20px]  ">
              <img src={image.endT} alt="" />
            </div>

            <div className="md:pr-[43px] sm:w-[60%] w-[100%]">
              <p className="text-[20px] leading-[35px] font-medium">
                Without a web app, your business is losing—both money and market
                share. A web application will give you and your customers a
                zero-install, centralized, safe, and scalable experience. Using
                cutting-edge technologies, you’ll get both reliability and
                better performance.
              </p>

              <div className="pt-[40px]">
                <p className="font-Lato text-[16px] font-bold leading-[25px] mb-5">
                  If you’re an established company, you can digitize your
                  processes and cut costs in the spirit of digital
                  transformation. If you’re a startup, you can build your dream
                  product and disrupt the market quickly yet sustainably. All
                  you need to run your business is within your grasp: custom web
                  applications, CMS (Content Management System), SEO-optimized
                  websites, and more.
                </p>
                <p className="text-[14px] font-Lato leading-[22px]">
                  We can help you find the right solutions for your individual
                  needs. Save time, streamline your business, reach a wider
                  audience, and enhance your brand experience with a tailor-made
                  web app!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* when to end  */}

        <div className="pb-[100px]">
          <div className="flex">
            <div className="sm:w-[58%] w-[100%]">
              <h2 className="sm:text-[60px] text-[30px] font-bold sm:leading-[75px] leading-[40px]">
                Discovery Workshop services we’ve provided
              </h2>
              <p className="text-[20px] font-medium leading-[35px]">
                to our clients
              </p>
            </div>

            <div className="w-[40%] pl-[40px] sm:block hidden ">
              <img src={image.consultT} alt="" />
            </div>
          </div>

          <div className="sm:block hidden ">
            <ul className="flex flex-wrap">
              {end.map((card) => (
                <li key={card.id} className="p-[12px] w-[100%] sm:w-fit ">
                  <Link className=" hover:scale-105 hover:shadow-lg flex items-center justify-between px-4 border rounded-md border-Ash sm:w-[250px] w-[100%] h-[80px] bg-white ">
                    <div className="flex items-center">
                      <img src={card.icon} alt="" className="mr-3 w-[50px]" />
                      <p className="text-[14px] font-Lato leading-[21px] font-semibold">
                        {card.title}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:hidden block mt-5">
            <ul className="flex">
              <Marquee>
                {end.map((card) => (
                  <li key={card.id} className="mx-6">
                    <Link className="  flex items-center justify-between px-4 border rounded-md border-Ash w-[220px]  h-[80px] bg-white ">
                      <img src={card.icon} alt="" className="mr-3 w-[50px]" />
                      <p className="text-[14px] font-Lato leading-[21px] font-semibold">
                        {card.title}
                      </p>
                    </Link>
                  </li>
                ))}
              </Marquee>
            </ul>
          </div>
        </div>
        {/* service we provided end */}

        {/* tech stack */}
        <div className="pb-[80px]">
          <div className="flex justify-between items-end w-[100%] ">
            <h2 className="sm:text-[60px] text-[25px] sm:leading-[75px] leading-[25px] font-bold w-[85%] sm:w-[70%] ">
              Our Discovery Workshop tech stack
            </h2>

            <hr className="  border-black sm:w-[45%] w-[15%] " />
          </div>

          <div className="mt-[50px]">
            <ul className="flex flex-wrap justify-center items-center sm:justify-normal">
              {webDevStack.map((card) => (
                <li
                  key={card.id}
                  className="py-[15px] px-[10px] sm:w-[150px]  w-[100px]  "
                >
                  <div className="flex items-center justify-center flex-col">
                    <img src={card.icon} alt="" className=" w-[50px]" />
                    <p className="text-[14px] font-Lato capitalize font-semibold">
                      {card.title}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoveryWorkshop;
