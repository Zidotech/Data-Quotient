import React from "react";
import { image } from "../constants";
import Button from "../components/Button";

const HandsOnTraining = () => {
  return (
    <section className="bg-Footer ">
      <div className=" section__bg ">
        {/* Black color overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        {/* Your content */}
        <div className="text-white sm:text-left  px-2 md:px-0 absolute section top-[35%] sm:top-[58%] sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2  ">
          <div className="flex justify-between sm:flex-row flex-col gap-y-6 sm:gap-y-0">
            <div className="sm:pt-[50px] sm:w-[47%] w-[100%] ">
              <h1 className="md:text-[40px] sm:text-left text-center text-[25px] sm:leading-[74px]  font-bold">
                Hands-on Training in Tech: Empowering Skill Development
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
              <p className="text-[17px] font-semibold leading-[35px]">
                Hands-on training in a tech company is a catalyst for innovation
                and growth. It equips employees with the practical expertise
                required to excel in the ever-evolving tech landscape.
              </p>
              <p className="pt-[24px] text-[17px] font-semibold leading-[35px] sm:block hidden  ">
                Effective corporate training programs are customized to address
                the unique challenges and objectives of an organization.
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
        <div className="sm:pt-[140px] pt-[50px] sm:pb-[80px] pb-[50px]">
          <div className="flex sm:flex-row flex-col gap-y-8 sm:gap-y-0">
            <div className="flex gap-3">
              <h2 className="md:text-[50px] sm:text-[45px] text-[25px] font-bold leading-[40px] sm:leading-[75px]">
                Understanding Hands-on Training
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
                In the fast-paced world of technology, staying current with the
                latest tools, frameworks, and methodologies is critical.
                Hands-on training in a tech company is an immersive learning
                approach that empowers employees to gain practical experience
                and mastery in various aspects of technology. It's not just
                about theory; it's about rolling up your sleeves and diving into
                the digital world.
              </p>

              <div className="pt-[40px]">
                <p className="font-Lato text-[18px]  leading-[25px] mb-5">
                  Effective corporate training programs are customized to
                  address the unique challenges and objectives of an
                  organization. This customization ensures that training aligns
                  with the company's culture, industry, and strategic goals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* benefits of coaching */}
        <div className="sm:pb-[100px] pb-[50px]">
          <div className="flex">
            <div className="sm:w-[58%] w-[100%]">
              <h2 className="sm:text-[45px] text-[30px] font-bold sm:leading-[55px] leading-[40px]">
                Advantages of Hands-on Learning
              </h2>
              <p className="text-[20px] font-medium leading-[35px]">
                Hands-on training offers unique benefits in the tech industry:
              </p>

              <div className="pt-5 ">
                <ul className="">
                  <li className="text-[20px] font-semibold mb-3">
                    Rapid Skill Acquisition:{" "}
                    <span className="text-[18px] font-normal">
                      Employees can quickly grasp new technologies and adapt to
                      changing trends.
                    </span>
                  </li>
                  <li className="text-[20px] font-semibold mb-3">
                    Skill Mastery:{" "}
                    <span className="text-[18px] font-normal">
                      Hands-on activities allow learners to develop and master
                      skills in a real-world context.
                    </span>
                  </li>
                  <li className="text-[20px] font-semibold mb-3">
                    Problem-Solving:{" "}
                    <span className="text-[18px] font-normal">
                      Hands-on experience enhances problem-solving abilities, a
                      must in tech.
                    </span>
                  </li>
                  <li className="text-[20px] font-semibold">
                    Team Collaboration:{" "}
                    <span className="text-[18px] font-normal">
                      Group projects and hands-on activities foster
                      collaboration and idea-sharing.
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
              <h2 className="sm:text-[50px] text-[30px] font-bold sm:leading-[65px] leading-[40px]">
                Practical Scenarios for Hands-on Training in Tech
              </h2>
              <p className="text-[20px] font-medium leading-[35px]">
                Hands-on training is highly applicable in tech settings:
              </p>

              <div className="pt-5 ">
                <ul className="">
                  <li className="text-[20px] font-semibold mb-3">
                    Coding Bootcamps:{" "}
                    <span className="text-[18px] font-normal">
                      Intensive coding bootcamps immerse participants in
                      programming languages and development environments.
                    </span>
                  </li>
                  <li className="text-[20px] font-semibold mb-3">
                    Cybersecurity Drills:{" "}
                    <span className="text-[18px] font-normal">
                      Simulated cyberattacks and defense exercises enhance
                      cybersecurity skills.
                    </span>
                  </li>
                  <li className="text-[20px] font-semibold mb-3">
                    Software Testing Labs:{" "}
                    <span className="text-[18px] font-normal">
                      Quality assurance professionals use hands-on labs to test
                      software for bugs and issues.
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
            <h2 className="sm:text-[30px] text-[30px] font-bold sm:leading-[45px] leading-[40px]">
              Hands-on Training Methodology for Tech Companies
            </h2>
            <p className="text-[20px] font-medium leading-[35px] mt-2">
              Implementing effective hands-on training in tech typically
              involves these steps:
            </p>

            <div className="pt-5 pl-5">
              <ul className="list-disc">
                <li className="text-[20px] font-semibold marker  mb-3 pl-2">
                  Structured Curriculum:{" "}
                  <span className="text-[18px] font-normal">
                    Develop a well-structured curriculum that covers specific
                    tech skills and knowledge areas.
                  </span>
                </li>
                <li className="text-[20px] font-semibold marker  mb-3 pl-2">
                  Hands-on Labs:{" "}
                  <span className="text-[18px] font-normal">
                    Create labs or projects that allow employees to apply what
                    they learn in a controlled environment.
                  </span>
                </li>
                <li className="text-[20px] font-semibold marker  mb-3 pl-2">
                  Expert Instructors:{" "}
                  <span className="text-[18px] font-normal">
                    Ensure experienced instructors are available to guide and
                    mentor participants.
                  </span>
                </li>
                <li className="text-[20px] font-semibold marker  mb-3 pl-2">
                  Problem-Solving:{" "}
                  <span className="text-[18px] font-normal">
                    Encourage participants to tackle real-world tech challenges
                    during training.
                  </span>
                </li>
                <li className="text-[20px] font-semibold marker  mb-3 pl-2">
                  Feedback Loop:{" "}
                  <span className="text-[18px] font-normal">
                    Provide timely feedback to help individuals improve their
                    skills.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="sm:block hidden">
            <img src={image.mouse2} alt="" />
          </div>

          {/* when to choose mentoring */}
          <div className="sm:w-[45%] w-[100%] ">
            <h2 className="sm:text-[30px] text-[30px] font-bold sm:leading-[45px] leading-[40px]">
              Steps to Design Effective Hands-on Tech Training Sessions
            </h2>

            <div className="pt-5 pl-5">
              <ul className="list-disc">
                <li className="text-[20px] font-semibold marker  mb-3 pl-2">
                  Identify Tech Skills:{" "}
                  <span className="text-[18px] font-normal">
                    Determine the specific tech skills or competencies your
                    employees need.
                  </span>
                </li>
                <li className="text-[20px] font-semibold marker  mb-3 pl-2">
                  Hands-on Projects:{" "}
                  <span className="text-[18px] font-normal">
                    Design projects or exercises that align with tech goals.
                  </span>
                </li>
                <li className="text-[20px] font-semibold marker  mb-3 pl-2">
                  Access to Resources:{" "}
                  <span className="text-[18px] font-normal">
                    Ensure participants have access to software, hardware, or
                    cloud platforms necessary for training.
                  </span>
                </li>
                <li className="text-[20px] font-semibold marker  mb-3 pl-2">
                  Expert Facilitation:{" "}
                  <span className="text-[18px] font-normal">
                    Have tech experts or trainers facilitate sessions, offering
                    guidance and support.
                  </span>
                </li>
                <li className="text-[20px] font-semibold marker  mb-3 pl-2">
                  Progress Tracking:{" "}
                  <span className="text-[18px] font-normal">
                    Implement mechanisms to track participant progress and skill
                    acquisition.
                  </span>
                </li>
                <li className="text-[20px] font-semibold marker  mb-3 pl-2">
                  Feedback Mechanism:{" "}
                  <span className="text-[18px] font-normal">
                    Gather feedback from participants and instructors for
                    continuous improvement.
                  </span>
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
            <h2 className="sm:text-[40px] text-[30px] font-bold sm:leading-[45px] leading-[40px]">
              Incorporating Hands-on Training in Tech Fields
            </h2>
            <p className="text-[20px] font-medium leading-[35px]">
              Hands-on training is versatile in tech, applicable to roles such
              as:
            </p>

            <div className="pt-5 ">
              <ul className="">
                <li className="text-[20px] font-semibold mb-3">
                  Software Development:{" "}
                  <span className="text-[18px] font-normal">
                    Enhancing coding skills and exploring new programming
                    languages.
                  </span>
                </li>
                <li className="text-[20px] font-semibold mb-3">
                  Data Science:{" "}
                  <span className="text-[18px] font-normal">
                    Mastering data analysis tools and machine learning
                    frameworks.
                  </span>
                </li>
                <li className="text-[20px] font-semibold mb-3">
                  DevOps:{" "}
                  <span className="text-[18px] font-normal">
                    Streamlining software deployment and infrastructure
                    management.
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

export default HandsOnTraining;
