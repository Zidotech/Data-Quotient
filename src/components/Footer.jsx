import { Link } from "react-router-dom";
import { links, servicelinks, socials, training } from "../constants";

const Footer = () => {
  return (
    <footer className="-mt-3 bg-black pb-[35px]">
      <div className="section">
        <div className="flex md:flex-row justify-between flex-col ">
          <div className="md:w-[30%] w-[100%] pt-10  flex  flex-col gap-7  px-2 md:px-0">
            <div className="text-Ash">
              <h2 className="text-[25px]">Locations</h2>
              <p>6 Mojidi Street,</p>
              <p>Off Toyin Street,Ikeja,Lagos, Nigeria.</p>
              <p> Nigeria tel: +234 703 204 9855</p>
              <p> Mail: hello@dataquot.com</p>
            </div>

            <div className="">
              <ul className="flex  justify-between">
                {socials.map((social) => (
                  <li
                    key={social.id}
                    className="border-2 border-Ash hover:bg-Blue hover:text-white text-Blue text-[30px]  rounded-full p-2"
                  >
                    <Link to={social.url}>{social.icon}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* left item start */}
          <div className=" md:w-[69%] w-[100%] pt-10">
            <div className="md:border-l border-Ash flex justify-between md:flex-row flex-col md:pl-8 ">
              {/*start menu list */}
              <div className=" w-full md:w-[15%]">
                <h2 className="text-[20px] font-bold text-Ash">Menu</h2>
                <div className="flex flex-col mt-5">
                  <ul className="list-none  flex justify-end items-start flex-col ">
                    {links.map((nav) => (
                      <li
                        key={nav.id}
                        className={` text-[18px]  mb-2 font-Lato hover:text-Blue text-Ash `}
                      >
                        <Link to={nav.url}>{nav.text}</Link>
                      </li>
                    ))}
                  </ul>

                  <ul className="list-none  flex justify-end items-start  flex-col "></ul>
                </div>
              </div>
              {/* end menu list */}

              {/* service list */}
              <div className=" w-full md:w-auto md:mt-0 mt-5 flex flex-wrap gap-x-1">
                <div>
                  <h2 className="text-[20px] font-bold text-Ash">Services</h2>
                  <ul className="mt-5">
                    {servicelinks.map((link) => (
                      <li
                        key={link.id}
                        className={` text-[18px]  mb-2 font-Lato hover:text-Blue text-Ash `}
                      >
                        <Link to={link.url}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-2 sm:mt-0">
                  <h2 className="text-[20px] font-bold text-Ash">Training</h2>
                  <ul className="mt-5">
                    {training.map((link) => (
                      <li
                        key={link.id}
                        className={` text-[18px]  mb-2 font-Lato hover:text-Blue text-Ash `}
                      >
                        <Link to={link.url}>{link.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* end of service list */}
            </div>
          </div>
          {/* left item end */}
        </div>

        <div className="pt-10">
          <div className="border-t border-Ash pt-3">
            <p className="text-Ash">
              Copyright © 2023 DQ. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
