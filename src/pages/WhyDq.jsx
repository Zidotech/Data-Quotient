import React from "react";
import MarqueeSlider from "../components/MarqueeSlider";
import { end_faqs, expert_faqs, image, training_faqs } from "../constants";
import ExpertFaq from "../components/ExpertFaq";

const WhyDq = () => {
  return (
    <section className="bg-Footer pb-[50px]">
      <div className=" section__bg ">
        {/* Black color overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        {/* Your content */}
        <div className="text-white text-center md:w-[90%] px-2 md:px-0 w-full  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="md:text-[60px] text-[25px] md:leading-[96px] leading-[40px] font-bold">
            Why Choose Data Quotient (DQ)
          </h1>
          <p className="mt-4 text-[18px]  font-Lato leading-8 md:w-[70%] w-[100%] mx-auto ">
            At Data Quotient, we understand that selecting the right partner for
            your technology, data, and development needs is a critical decision.
            With a plethora of options available, it's essential to know why DQ
            should be your top choice.
          </p>
        </div>

        <MarqueeSlider />
      </div>

      <div className="section">
        {/*Expert Consulting*/}
        <div>
          <div className="flex justify-between items-end w-[100%] pt-10 ">
            <div>
              <h2 className="lg:text-[40px] text-[25px] lg:leading-[30px] leading-[25px] font-bold  pb-3 ">
                Expert Consulting
              </h2>
              <span className="text-[20px] italic">
                Unlocking Potential Through Expertise
              </span>
            </div>

            <hr className="  border-black sm:w-[55%] w-[65%] " />
          </div>

          {/* expert consulting faq */}
          <div className=" flex flex-col justify-between md:flex-row mt-5 pt-5 w-full">
            {/* left item */}
            <div className=" lg:w-[414.286px] w-[100%] lg:mx-0 mx-auto">
              <img
                src={image.kitchen}
                alt=""
                className="lg:w-[471px] w-[100%] z-50"
              />
              <div className="bg-black text-white p-[20px]  lg:pt-[30px] lg:pr-[20px] lg:pb-[52px] lg:pl-[92px] ">
                <div>
                  <p className="font-Lato text-[16px] leading-6 mt-5">
                    DQ stands as a beacon of expertise, offering tailored
                    solutions to your complex challenges. Our seasoned subject
                    matter experts specialize in:
                  </p>
                </div>
              </div>
            </div>

            {/* right item */}
            <div className="flex h-fit flex-wrap py-3 md:pt-0 gap-5 md:w-[60%] w-[95%]">
              {expert_faqs.map((question) => {
                return <ExpertFaq key={question.id} {...question} />;
              })}
            </div>
          </div>
        </div>

        {/*   End-to-End Development*/}
        <div>
          <div className="flex justify-between items-end w-[100%] md:pt-20 pt-14 ">
            <div>
              <h2 className="lg:text-[40px] text-[25px] lg:leading-[30px] leading-[25px] font-bold  pb-3 ">
                End-to-End Development
              </h2>
              <span className="text-[20px] italic">
                From Concept to Reality, We Deliver
              </span>
            </div>

            <hr className="  border-black sm:w-[55%] w-[65%] " />
          </div>

          {/* End-to-End Development faq */}
          <div className=" flex flex-col-reverse justify-between md:flex-row mt-5 pt-5 w-full">
            {/* left item */}
            <div className="flex h-fit flex-wrap py-3 md:pt-0 gap-5 md:w-[60%] w-[95%]">
              {end_faqs.map((question) => {
                return <ExpertFaq key={question.id} {...question} />;
              })}
            </div>
            {/* right item */}

            <div className=" lg:w-[414.286px] w-[100%] lg:mx-0 mx-auto">
              <img
                src={image.kitchen}
                alt=""
                className="lg:w-[471px] w-[100%] z-50"
              />
              <div className="bg-black text-white p-[20px]  lg:pt-[30px] lg:pr-[20px] lg:pb-[52px] lg:pl-[92px] ">
                <div>
                  <p className="font-Lato text-[16px] leading-6 mt-5">
                    DQ offers comprehensive end-to-end development services,
                    utilizing a diverse skill set that covers:
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*   Training*/}
        <div>
          <div className="flex justify-between items-end w-[100%] md:pt-20 pt-14 ">
            <div>
              <h2 className="lg:text-[40px] text-[25px] lg:leading-[30px] leading-[25px] font-bold  pb-3 ">
                Training
              </h2>
              <span className="text-[20px] italic">
                Empowering Your Team for Success
              </span>
            </div>

            <hr className="  border-black sm:w-[55%] w-[65%] " />
          </div>

          {/* expert consulting faq */}
          <div className=" flex flex-col justify-between md:flex-row mt-5 pt-5 w-full">
            {/* left item */}
            <div className=" lg:w-[414.286px] w-[100%] lg:mx-0 mx-auto">
              <img
                src={image.kitchen}
                alt=""
                className="lg:w-[471px] w-[100%] z-50"
              />
              <div className="bg-black text-white p-[20px]  lg:pt-[30px] lg:pr-[20px] lg:pb-[52px] lg:pl-[92px] ">
                <div>
                  <p className="font-Lato text-[16px] leading-6 mt-5">
                    DQ not only delivers solutions but also empowers your team
                    through:
                  </p>
                </div>
              </div>
            </div>

            {/* right item */}
            <div className="flex h-fit flex-wrap py-3 md:pt-0 gap-5 md:w-[60%] w-[95%]">
              {training_faqs.map((question) => {
                return <ExpertFaq key={question.id} {...question} />;
              })}
            </div>
          </div>
        </div>

        <div className=" pt-[50px]">
          <div className="flex justify-between items-end w-[100%]  ">
            <div>
              <h2 className="lg:text-[40px] text-[25px] lg:leading-[30px] leading-[25px] font-bold  pb-3 ">
                Why DQ Stands Out
              </h2>
              <span className="text-[18px] italic md:block hidden">
                Discover the Data Quotient advantage and embark on a journey of
                technological excellence and growth.
              </span>
            </div>

            <hr className="  border-black sm:w-[55%] w-[65%] " />
          </div>
          {/* top item */}

          <div className="flex justify-between items-center pt-5 flex-col sm:flex-row">
            <div className="  sm:w-[48%] w-[100%] ">
              <img
                src={image.join}
                alt=""
                className="w-[100%] sm:h-[372px] object-cover"
              />
            </div>

            <div className=" sm:mt-0 mt-9   sm:w-[50%] w-[100%]  pb-[30px]">
              <div className="pt-5 ">
                <ul className="">
                  <li className="text-[20px] font-semibold mb-3">
                    Proven Track Record:{" "}
                    <span className="text-[18px] font-normal">
                      Our successful projects and satisfied clients speak
                      volumes about our competence.
                    </span>
                  </li>
                  <li className="text-[20px] font-semibold mb-3">
                    Client-Centric Approach:{" "}
                    <span className="text-[18px] font-normal">
                      We prioritize your unique needs, ensuring solutions that
                      align with your goals.
                    </span>
                  </li>
                  <li className="text-[20px] font-semibold mb-3">
                    Innovation and Adaptability:{" "}
                    <span className="text-[18px] font-normal">
                      We stay at the forefront of technological advancements to
                      keep your business ahead of the curve.
                    </span>
                  </li>
                  <li className="text-[20px] font-semibold mb-3">
                    Reliability:{" "}
                    <span className="text-[18px] font-normal">
                      Count on us for consistent, high-quality results,
                      delivered on time and within budget.
                    </span>
                  </li>
                  <li className="text-[20px] font-semibold mb-3">
                    Dedicated Support:{" "}
                    <span className="text-[18px] font-normal">
                      Our team is committed to providing ongoing support and
                      assistance, ensuring your long-term success.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDq;
