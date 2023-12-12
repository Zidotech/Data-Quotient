import {
  DataBC,
  DataBC2,
  DataDC,
  DataMC,
  DataPC,
  DataWC,
  image,
  webDevStack,
} from "../constants";

const DataEngineering = () => {
  return (
    <section className="bg-Footer ">
      <div className=" section__bg ">
        {/* Black color overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        {/* Your content */}
        <div className="text-white sm:text-left text-center section px-2 md:px-0   absolute top-[60%]  sm:top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
          <div className="flex justify-between sm:flex-row flex-col gap-y-6 sm:gap-y-0">
            <div className="sm:pt-[50px] sm:w-[47%] w-[100%] flex items-center">
              <h1 className="md:text-[60px] text-[30px] sm:leading-[74px]  font-bold">
                Data Engineering Services
              </h1>
            </div>

            <div className="sm:block hidden">
              <img src={image.mouse2} alt="" />
            </div>

            <div className="sm:pt-[50px] sm:pl-[20px] sm:w-[48%] w-[100%] flex items-center">
              <p className="text-[20px] font-semibold leading-[35px]">
                Accelerate generation and adoption of actionable insights
                through mature data platforms leveraging our data engineering
                solutions and services.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="sm:pt-[140px] pt-[50px]">
          <div className="flex sm:flex-row flex-col gap-y-8 sm:gap-y-0">
            <div className="flex gap-3">
              <h2 className="md:text-[60px] sm:text-[45px] text-[25px] font-bold leading-[40px] sm:leading-[75px]">
                Why choose Data Engineering?
              </h2>
              <img
                src={image.dataengineering}
                alt=""
                className="w-[100px] sm:hidden block"
              />
            </div>

            <div className="sm:w-[49%] w-[100%] flex flex-col justify-between items-end">
              <img
                src={image.dataengineering}
                alt=""
                className="w-[120px] sm:block hidden mb-2"
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
                Most enterprises are struggling to deliver timely insights for a
                wide range of reasons, some of which include multiple data
                platforms, lack of data trust, limited knowledgeMenu 7 about the
                data, and inadequate compute resources. Data platforms form the
                foundation for delivering quality insights to the consumers.
              </p>

              <div className="pt-[40px]">
                <p className="font-Lato text-[16px] font-bold leading-[25px] mb-5">
                  Without robust data engineering services, insights generation
                  and last mile adoption of insights remain a pipe dream for
                  today’s business executives. Tredence’s data engineering
                  offerings include Advisory, Implementation and Operate
                  services with a focus on reducing cost of ownership, avoiding
                  technical debt, and improving longer term sustainability.
                </p>
                <p className="text-[14px] font-Lato leading-[22px]">
                  Tredence’s proprietary digital accelerators along with our
                  cloud data modernization & migration and data engineering
                  services are proven to reduce time to value significantly for
                  our clients in operationalizing modern data platforms on the
                  cloud. Our digital accelerators cover all aspects of data
                  operations, which include ingesting data from many data
                  sources, provisioning the data or insights, intelligent
                  catalog, data quality and trust, testing and deployment.
                  Accelerate your data efforts with our AL/ML based digital
                  accelerators and strategic partnerships to keep up with the
                  scale, speed and value that today’s business environment
                  demands.
                </p>

                <button className="bg-Blue py-3 px-8 uppercase text-white1 w-fit mt-3">
                  Make your data reliable now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* service we've provided */}
        <section className="pt-[50px]">
          <div className="flex justify-between items-center sm:flex-row flex-col-reverse ">
            <div className="sm:w-[50%] w-full sm:mt-0 mt-7">
              <h2 className=" text-[25px] sm:text-[30px] font-semibold leading">
                Big Data Storage
              </h2>
              <p className="text-[20px] font-normal leading-[25px] py-3">
                Store, manage, and retrieve massive amounts of data.
              </p>

              <span>
                Big Data is, by definition, massive. And storing and accessing
                this data efficiently is often a massive challenge for
                organizations.
              </span>
              <span>
                DQ. team has a deep understanding of all the various Big Data
                Storage challenges. We also have vast experience in helping
                businesses to optimize Big Data Storage technologies and
                processes to allow all types of data – big or otherwise – to be
                turned into valuable insights for accelerated and informed
                decision making
              </span>
            </div>

            <div className="sm:w-[45%] w-full">
              <img
                src={image.client}
                alt="client_Bg"
                className="w-full  rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="mt-[40px]">
            <div className=" sm:mt-0 my-7">
              <h2 className="text-[25px] sm:text-[30px] font-semibold">
                Data Pipeline
              </h2>
              <p className="text-[20px] font-medium leading-[25px]">
                Data Pipelines enable data to flow harmoniously
              </p>

              <p className="mt-2 font-normal sm:text-[22px] text-[18px]">
                Dufrain has a strong reputation as experts in building Data
                Pipelines. We can help you connect valuable data within your
                business from data source to data warehouse, data lake,
                analytics platform, or payment processing system.
              </p>
              <p className="mt-2 font-normal sm:text-[22px] text-[18px]">
                Building efficient and automated Data Pipelines is arguably the
                most critical aspect of successful data engineering. Your
                organisation can benefit from our wealth of experience in
                delivering intricate and cross-business Data Pipelines, Big Data
                Pipelines, data integrations, real time streaming, batch and
                event driven processing, and implementing scalable solutions.
              </p>
            </div>

            <div>
              <h3 className="text-center text-[25px] font-semibold">
                Data Pipelines bring key benefits
              </h3>

              <div className="w-full flex justify-around flex-wrap gap-y-5  mt-[30px]">
                {DataPC.map((card) => (
                  <div
                    key={card.id}
                    className="sm:w-[22%] w-[100%] sm:mr-5 bg-white1 p-5 rounded-lg border-t-2 border-Blue"
                  >
                    <div>
                      <img src={card.icon} alt="" />
                      <h4 className="pt-4 font-semibold text-[16px]">
                        {card.title}
                      </h4>
                    </div>

                    <p className="pt-4">{card.paragraph}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-[40px]">
            <div className=" sm:mt-0 my-7">
              <h2 className="text-[25px] sm:text-[30px] font-semibold ">
                Data Migration
              </h2>
              <p className="text-[20px] font-medium leading-[25px] ">
                Seamless Data Migration
              </p>

              <p className="mt-2 font-normal sm:text-[22px] text-[18px]">
                Your data drives your business. If you are planning to migrate
                data from one system or environment to another, including the
                cloud, you need a partner with the right level of expertise.
              </p>
              <p className="mt-2 font-normal sm:text-[22px] text-[18px]">
                With a deep understanding of data and the complexities
                associated with large scale projects, our Data Migration
                consultants deliver secure, cost-efficient and accurate
                solutions for clients across a range of industries.
              </p>
            </div>

            <div className="bg-white1 pt-5 pb-10">
              <h3 className="text-center text-[25px] font-semibold">
                Data Migration Framework
              </h3>

              <p className="text-center sm:text-[20px] text-[18px] font-normal sm:px-[50px]">
                We have successfully delivered hundreds of complex Data
                Migration projects. Our comprehensive process ensures the
                projects we undertake are on-time, within budget and quality
                controlled.
              </p>

              <div className="w-full flex flex-wrap justify-around gap-y-3 mt-[30px]">
                {DataMC.map((card) => (
                  <div
                    key={card.id}
                    className="sm:w-[20%] w-[45%] bg-white1  p-2 rounded-lg flex flex-col items-center justify-center"
                  >
                    <img src={card.icon} alt="" />
                    <h4 className="pt-4 sm:text-[18px] text-[16px] text-center text-Blue font-medium">
                      {card.title}
                    </h4>
                  </div>
                ))}
              </div>

              <div className=" text-black pt-5 pb-10 sm:px-10 px-4 mt-6">
                <div className="flex flex-col gap-y-2">
                  <ul className="list-[square] pl-5">
                    <li className="marker">
                      <h4>THE BENEFITS</h4>
                    </li>
                  </ul>
                  <h2 className="sm:text-2xl text-Blue">
                    Dufrain Data Migration Accelerator
                  </h2>
                  <p>
                    Many data migration projects over-run due to various
                    challenges such as data quality, coding of mapping, and
                    inconsistent transformations. To mitigate these issues, we
                    have developed the Dufrain Data Migration Accelerator
                    (DDMA).
                  </p>
                </div>

                <div className="w-full flex flex-wrap justify-around gap-y-5 mt-[30px]">
                  {DataDC.map((card) => (
                    <div
                      key={card.id}
                      className="sm:w-[30%] w-[100%]  px-2 rounded-lg flex gap-x-4"
                    >
                      <img src={card.icon} alt="" className="w-[170px] " />
                      <div>
                        <h4 className=" font-normal text-[18px] text-yellow-300">
                          {card.title}
                        </h4>
                        <p className="pt-1">{card.paragraph}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[40px]">
            <div className=" sm:mt-0 my-7">
              <h2 className="text-[25px] sm:text-[30px] font-semibold ">
                Data Warehousing
              </h2>
              <p className="text-[20px] font-medium leading-[25px] ">
                What is Data Warehousing?
              </p>

              <p className="mt-2 font-normal sm:text-[22px] text-[18px] ">
                Data warehouses combine data from different sources into one
                central and consistent data store to provide a “single version
                of the truth”. This aggregated data means organisations can run
                powerful data analytics and business intelligence to drive
                better-informed business decisions.
              </p>
              <p className="mt-2 font-normal sm:text-[22px] text-[18px] ">
                Our experienced team design and build Data Warehousing solutions
                that integrate, cleanse and present data for querying.
              </p>
              <p className="mt-2 font-normal sm:text-[22px] text-[18px] ">
                Dufrain’s Data Warehouse will enable your organisation to
                perform reliable analytics on large volumes of historical data.
                In addition, it can provide storage for petabytes of
                information.
              </p>
            </div>

            <div className="bg-Dark2 text-white1 pt-5 pb-10">
              <h3 className="text-center text-[25px] font-semibold text-Blue">
                Your business data is disparate
              </h3>

              <div className="w-full flex flex-wrap justify-around gap-y-3 mt-[30px] pb-10">
                {DataWC.map((card) => (
                  <div
                    key={card.id}
                    className="sm:w-[20%] w-[45%]  p-2 rounded-lg flex flex-col items-center justify-center "
                  >
                    <img src={card.icon} alt="" />
                    <h4 className="pt-4 font-normal text-[18px] text-center text-yellow-300">
                      {card.title}
                    </h4>
                  </div>
                ))}
              </div>

              <div className="sm:w-[85%] mx-auto w-full">
                <p className="text-center sm:text-[20px] text-[18px] font-normal sm:px-[50px]">
                  Each area of your organisation is unique and different
                  departments interact in different ways. This creates
                  inconsistencies and data complexity, making it difficult to
                  see the big picture across the whole business.
                </p>
                <p className="text-center sm:text-[20px] text-[18px] font-normal sm:px-[50px] mt-2">
                  Our Data Warehousing combines data from all departments into
                  one consistent system. We can help you to run advanced data
                  analytics and business intelligence across your entire
                  organisation.
                </p>
              </div>
            </div>

            <div className="bg-Dark2 text-white1 pt-5 pb-10  px-4 ">
              <div className="flex flex-col gap-y-2">
                <ul className="list-[square] pl-5">
                  <li className="marker">
                    <h4>THE BENEFITS</h4>
                  </li>
                </ul>
                <h2 className="sm:text-2xl text-Blue">
                  Process and key business benefits
                </h2>
              </div>

              <div className="w-full flex justify-around sm:flex-row flex-col gap-y-5 pt-10">
                <div className="sm:w-[40%] flex flex-col gap-y-5 ">
                  {DataBC.map((card) => (
                    <div
                      key={card.id}
                      className=" w-[100%]  rounded-lg flex gap-x-4"
                    >
                      <img src={card.icon} alt="" className="w-[170px] " />
                      <div>
                        <h4 className=" font-normal text-[18px] text-yellow-300 ">
                          {card.title}
                        </h4>
                        <p className="pt-1">{card.paragraph}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <div className="w-[30%] h-[250px] border">
                  <img src={image.DW} alt="" className="w-full h-full" />
                </div> */}
                <div className="sm:w-[40%] flex flex-col gap-y-5">
                  {DataBC2.map((card) => (
                    <div
                      key={card.id}
                      className=" w-[100%]  rounded-lg flex gap-x-4"
                    >
                      <img src={card.icon} alt="" className="w-[170px] " />
                      <div>
                        <h4 className=" font-normal text-[18px] text-yellow-300 ">
                          {card.title}
                        </h4>
                        <p className="pt-1">{card.paragraph}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* service we provided end */}

        {/* tech stack */}
        <div className="py-[50px]">
          <div className="text-center sm:w-[70%] mx-auto">
            <h3 className="sm:text-[43px] text-[25px] ">
              Our Tech Stack For Data Engineering
            </h3>
            <p>
              We leverage our skills to utilize cutting-edge data engineering
              tools and technologies to provide high-quality data engineering
              services.
            </p>
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
      </section>
    </section>
  );
};

export default DataEngineering;
