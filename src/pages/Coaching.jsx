import React from "react";
import { image } from "../constants";
import Button from "../components/Button";

const Coaching = () => {
  return (
    <section className="bg-Footer ">
      <div className=" section__bg ">
        {/* Black color overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        {/* Your content */}
        <div className="text-white sm:text-left  px-2 md:px-0 absolute section top-[35%] sm:top-[58%] sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2  ">
          <div className="flex justify-between sm:flex-row flex-col gap-y-6 sm:gap-y-0">
            <div className="sm:pt-[50px] sm:w-[47%] w-[100%] ">
              <h1 className="sm:text-left text-center md:text-[40px] text-[25px] sm:leading-[74px]  font-bold">
                Coaching vs. Mentoring: Nurturing Tech Talent
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

            <div className="sm:pt-[50px] sm:pl-[20px] pl-[10px] sm:w-[48%] w-[100%] ">
              <p className="text-[20px] font-semibold leading-[35px] sm:block hidden">
                Coaching is typically short-term and result-oriented, addressing
                immediate challenges and skill gaps.
              </p>
              <p className="pt-[24px] text-[20px] font-semibold leading-[35px] sm:block hidden ">
                Mentoring relationships evolve organically and cover a wide
                range of personal and professional development areas.
              </p>

              <p className="text-[20px] leading-[35px] font-medium sm:hidden block">
                Coaching and mentoring are indispensable tools in nurturing tech
                talent and fostering innovation. Choose the approach that aligns
                best with your tech career goals and aspirations.
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
        <div className="sm:pt-[140px] pt-[50px] sm:pb-[100px] pb-[50px]">
          <div className="flex sm:flex-row flex-col gap-y-8 sm:gap-y-0">
            <div className="flex gap-3">
              <h2 className="md:text-[60px] sm:text-[45px] text-[25px] font-bold leading-[40px] sm:leading-[75px]">
                Introduction to Coaching and Mentoring
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
                Coaching and mentoring are indispensable tools in nurturing tech
                talent and fostering innovation. Choose the approach that aligns
                best with your tech career goals and aspirations.
              </p>

              <div className="pt-[40px]">
                <p className="font-Lato text-[18px]  leading-[25px] mb-5">
                  Coaching focuses on targeted skill enhancement and performance
                  improvement. It involves a structured relationship between a
                  professional coach and a coachee. The coach provides feedback,
                  sets specific goals, and supports the coachee in achieving
                  them.
                </p>
                <p className="text-[18px] font-Lato leading-[22px]">
                  Mentoring, on the other hand, is a more holistic and long-term
                  approach. It involves an experienced individual, the mentor,
                  sharing their insights, knowledge, and life experiences with a
                  less experienced individual, the mentee.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* benefits of coaching */}
        <div className="sm:pb-[100px] pb-[50px]">
          <div className="flex">
            <div className="sm:w-[58%] w-[100%]">
              <h2 className="sm:text-[60px] text-[30px] font-bold sm:leading-[75px] leading-[40px]">
                Benefits of Coaching
              </h2>
              <p className="text-[20px] font-medium leading-[35px]">
                to our clients
              </p>

              <div className="pt-5 ">
                <ul className="">
                  <li className="text-[20px] font-semibold mb-3">
                    Skill Advancement:{" "}
                    <span className="text-[18px] font-normal">
                      Coaching focuses on honing specific skills necessary for
                      immediate goals or challenges.
                    </span>
                  </li>
                  <li className="text-[20px] font-semibold mb-3">
                    Performance Improvement:{" "}
                    <span className="text-[18px] font-normal">
                      Coaches provide actionable feedback and strategies to
                      enhance performance.
                    </span>
                  </li>
                  <li className="text-[20px] font-semibold mb-3">
                    Short-Term Objectives:{" "}
                    <span className="text-[18px] font-normal">
                      Coaching is well-suited for achieving short-term,
                      measurable goals.
                    </span>
                  </li>
                  <li className="text-[20px] font-semibold">
                    Goal Alignment:{" "}
                    <span className="text-[18px] font-normal">
                      Coaches help individuals align their actions with their
                      objectives.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-[40%] pl-[40px] sm:block hidden ">
              <img src={image.consultT} alt="" />
            </div>
          </div>
        </div>

        {/* benefits of mentoring */}
        <div className="pb-[50px]">
          <div className="flex">
            <div className="w-[40%] pr-[40px] sm:block hidden ">
              <img src={image.endT} alt="" />
            </div>
            <div className="sm:w-[58%] w-[100%]">
              <h2 className="sm:text-[60px] text-[30px] font-bold sm:leading-[75px] leading-[40px]">
                Benefits of Mentoring
              </h2>
              <p className="text-[20px] font-medium leading-[35px]">
                to our clients
              </p>

              <div className="pt-5 ">
                <ul className="">
                  <li className="text-[20px] font-semibold mb-3">
                    Holistic Growth:{" "}
                    <span className="text-[18px] font-normal">
                      Mentoring nurtures personal and professional growth by
                      sharing broader life experiences.
                    </span>
                  </li>
                  <li className="text-[20px] font-semibold mb-3">
                    Long-Term Development:{" "}
                    <span className="text-[18px] font-normal">
                      Mentoring relationships offer ongoing support and
                      guidance.
                    </span>
                  </li>
                  <li className="text-[20px] font-semibold mb-3">
                    Career Insight:{" "}
                    <span className="text-[18px] font-normal">
                      Mentors provide valuable insights into navigating careers
                      and industries.
                    </span>
                  </li>
                  <li className="text-[20px] font-semibold">
                    Confidence Boost:{" "}
                    <span className="text-[18px] font-normal">
                      Mentoring builds self-confidence and expands perspectives.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* when to choose */}
      <div className=" bg-black py-5 text-white mb-5">
        <div className="section flex justify-between sm:flex-row flex-col sm:gap-y-0 gap-y-4">
          <div className="sm:w-[45%] w-[100%] ">
            <h2 className="sm:text-[40px] text-[30px] font-bold sm:leading-[45px] leading-[40px]">
              When to Choose Coaching
            </h2>
            <p className="text-[20px] font-medium leading-[35px]">
              Choose coaching when you:
            </p>

            <div className="pt-5 pl-5">
              <ul className="list-disc">
                <li className="text-[20px] marker font-semibold mb-3 pl-2">
                  Need immediate skill improvement or problem-solving.
                </li>
                <li className="text-[20px] marker font-semibold mb-3 pl-2">
                  Seek focused guidance for specific challenges or tasks.
                </li>
                <li className="text-[20px] marker font-semibold mb-3 pl-2">
                  Prefer a structured, goal-driven approach.
                </li>
                <li className="text-[20px] marker font-semibold pl-2">
                  Are looking to address short-term goals and tasks.
                </li>
              </ul>
            </div>
          </div>

          <div className="sm:block hidden">
            <img src={image.mouse2} alt="" />
          </div>

          {/* when to choose mentoring */}
          <div className="sm:w-[45%] w-[100%] ">
            <h2 className="sm:text-[40px] text-[30px] font-bold sm:leading-[45px] leading-[40px]">
              When to Choose Mentoring
            </h2>
            <p className="text-[20px] font-medium leading-[35px]">
              Choose mentoring when you:
            </p>

            <div className="pt-5 pl-5">
              <ul className="list-disc">
                <li className="text-[20px] marker font-semibold mb-3 pl-2">
                  Seek overall personal and professional development.
                </li>
                <li className="text-[20px] marker font-semibold mb-3 pl-2">
                  Desire guidance from someone with extensive experience.
                </li>
                <li className="text-[20px] marker font-semibold mb-3 pl-2">
                  Want to gain insights into long-term career planning.
                </li>
                <li className="text-[20px] marker font-semibold pl-2">
                  Value a relationship that evolves over time.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* How to Get Started with Coaching/Mentoring */}
      <div className="py-[50px] section">
        <div className="flex">
          <div className="sm:w-[58%] w-[100%]">
            <h2 className="sm:text-[50px] text-[30px] font-bold sm:leading-[65px] leading-[40px]">
              How to Get Started with Coaching/Mentoring
            </h2>

            <div className="pt-5 ">
              <ul className="">
                <li className="text-[20px] font-semibold mb-3">
                  Identify Your Goals:{" "}
                  <span className="text-[18px] font-normal">
                    Determine whether the focus is on skill improvement
                    (coaching) or holistic growth (mentoring).
                  </span>
                </li>
                <li className="text-[20px] font-semibold mb-3">
                  Select the Right Coach/Mentor:{" "}
                  <span className="text-[18px] font-normal">
                    Choose a coach or mentor with expertise aligned with tech
                    objectives.
                  </span>
                </li>
                <li className="text-[20px] font-semibold mb-3">
                  Active Participation:{" "}
                  <span className="text-[18px] font-normal">
                    Actively engage in the coaching or mentoring relationship,
                    implementing feedback and learning.
                  </span>
                </li>
                <li className="text-[20px] font-semibold mb-3">
                  Initiate the Relationship:{" "}
                  <span className="text-[18px] font-normal">
                    each out to the coach or mentor to discuss your objectives
                    and expectations.
                  </span>
                </li>
                <li className="text-[20px] font-semibold mb-3">
                  Set Expectations:{" "}
                  <span className="text-[18px] font-normal">
                    Establish clear goals, timelines, and communication methods
                    with your coach or mentor.
                  </span>
                </li>
                <li className="text-[20px] font-semibold">
                  Stay Committed:{" "}
                  <span className="text-[18px] font-normal">
                    Actively participate, implement feedback, and remain open to
                    learning.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-[40%] pl-[40px] sm:block hidden ">
            <img src={image.consultT} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coaching;
