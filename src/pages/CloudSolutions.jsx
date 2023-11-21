import { CloudBC, CloudDC, CloudSC, image } from "../constants";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const CloudSolutions = () => {
  return (
    <section className="bg-Footer ">
      <div className=" section__bg ">
        {/* Black color overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        {/* Your content */}
        <div className="text-white sm:text-left text-center  px-2 md:px-0 absolute section top-[60%] sm:top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
          <div className="flex justify-between sm:flex-row flex-col gap-y-6 sm:gap-y-0">
            <div className="sm:pt-[50px] sm:w-[47%] w-[100%] ">
              <h1 className="md:text-[60px] text-[30px] sm:leading-[74px]  font-bold">
                Cloud Solutions Services
              </h1>
              <div className="pt-[70px] sm:block hidden">
                <Link>
                  <Button
                    text={"Scale your business with us! "}
                    styles={
                      "border-2 border-Blue  rounded-[150px] font-semibold text-[12px] uppercase p-[20px] w-max text-center text-white "
                    }
                  />
                </Link>
              </div>
            </div>

            <div className="sm:block hidden">
              <img src={image.mouse2} alt="" />
            </div>

            <div className="sm:pt-[50px] sm:pl-[20px] sm:w-[48%] w-[100%] ">
              <p className="text-[20px] font-semibold leading-[35px]">
                Created for the latest demanding workloads, Hypertec Cloud
                offers a mix of cloud instances, bare metal servers, block
                storage, object storage and multiple other cloud services to
                help you run your infrastructure more efficiently at a balanced
                price point.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        {/* service we've provide */}
        <div className="my-8 ">
          <div className="flex sm:flex-row flex-col gap-y-5 justify-around">
            <div className="sm:w-[40%] w-[100%]">
              <img src={image.cloud_bg} alt="" className="w-full rounded-lg" />
            </div>

            <div className="sm:w-[40%] w-[90%]">
              <h3 className="sm:text-[45px] text-[32px] sm:leading-[50px] leading-[40px]">
                Cloud Architecture Services We Provide
              </h3>
              <p className="mt-5">
                IT Outpost&apos;s expert team diagnoses, explores, designs and
                creates plans, provides cloud deployment and federation
                services. The architecture of cloud services fulfills the basic
                requirements of the business and builds them for the necessary
                solutions.
              </p>
            </div>
          </div>

          <div className="w-full flex justify-around flex-wrap gap-y-10 mt-[70px]">
            {CloudSC.map((card) => (
              <div
                key={card.id}
                className="sm:w-[22%] w-[100%] sm:mr-5 bg-white1 p-5 rounded-lg"
              >
                <div>
                  <img src={card.icon} alt="" />
                  <h4 className="pt-4 font-semibold text-xl">{card.title}</h4>
                </div>

                <p className="pt-4">{card.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
        {/* service we provide end */}

        {/* cloud design stage */}
        <div className="my-8 ">
          <div className="flex sm:flex-row flex-col gap-y-5 justify-around">
            <div className="sm:w-[40%] w-[90%]">
              <h3 className="sm:text-[45px] text-[32px] sm:leading-[50px] leading-[40px]">
                Our Cloud Architecture Design Stages
              </h3>
              <p className="mt-5">
                At IT Outposts, we offer full-cycle cloud computing architecture
                services tailored to your goals and needs. Based on workflows
                elaborated in the active field operation, we can put the best
                practices combined with our own expertise at the core of your
                projects.
              </p>
            </div>

            <div className="sm:w-[40%] w-[100%]">
              <img src={image.cloud_bg} alt="" className="w-full rounded-lg" />
            </div>
          </div>

          <div className="w-full flex justify-start flex-wrap gap-y-10 mt-[70px]">
            {CloudDC.map((card) => (
              <div
                key={card.id}
                className="sm:w-[22%] w-[100%] sm:mr-7 bg-Dark2 text-white1 p-5 rounded-lg"
              >
                <div>
                  <h4 className="pt-4 font-semibold text-xl">{card.title}</h4>
                </div>

                <p className="pt-4">{card.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
        {/* cloud design stage end */}

        {/* benefits of cloud service */}
        <div>
          <h3 className="sm:text-[45px] text-[25px] text-center">
            Benefits of Our Cloud Design Services
          </h3>
          <div className="my-8 flex justify-around flex-wrap gap-y-10">
            {CloudBC.map((card) => (
              <div
                key={card.id}
                className="sm:w-[40%] w-[100%] sm:mr-7 bg-Dark2 text-white1 p-8 rounded-lg"
              >
                <div>
                  <h4 className="pt-4 font-semibold text-xl">{card.title}</h4>
                </div>

                <p className="pt-4">{card.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
        {/* benefits of cloud service end */}
      </div>
    </section>
  );
};

export default CloudSolutions;
