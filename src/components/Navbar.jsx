import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { image, links } from "../constants";
import { motion } from "framer-motion";
import Button from "./Button";

const containerVariants = {
  hidden: {
    x: -500,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="fixed w-full top-0 left-0 z-20 bg-white">
      <div className="border-2 border-red-600">
        <div className=" py-4 flex justify-between  mx-auto   items-center md:px-12  px-5">
          <div className="flex gap-x-5">
            <img
              src={image.logo}
              alt="logo-icon"
              className="sm:w-[160px] w-[200px] md:w-[285px] md:h-[70px] cursor-pointer"
            />

            <ul className="list-none sm:flex hidden justify-end items-center  ">
              {links.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`  cursor-pointer  ${
                    index === links.length - 1 ? "mr-0" : " mr-7"
                  }`}
                >
                  <a
                    href={`#${nav.url}`}
                    className=" text-black hover:text-Blue text-[17px] font-medium"
                  >
                    {nav.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:block hidden">
            <ul className=" list-none  flex ">
              <li className=" mr-7">
                <a
                  href=""
                  className="text-black hover:text-Blue text-[17px] font-medium"
                >
                  Careers
                </a>
              </li>
              <li className=" mr-7">
                <a
                  href=""
                  className="text-black hover:text-Blue text-[17px] font-medium"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-black hover:text-Blue text-[17px] font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex gap-[30px] items-center justify-center md:block hidden">
            <div>
              <AiOutlineSearch className="text-[30px]" />
            </div>
            <Button
              text={"Let's Talk"}
              styles={
                "  bg-Blue  rounded-[150px] text-[20px] uppercase py-[13px] px-[5px] w-[150px] text-center text-white"
              }
            />
          </div>

          <div className="sm:hidden flex  justify-end items-center">
            {toggle ? (
              <AiOutlineClose
                alt="menu-icon"
                className="w-[38px]  h-[38px] object-contain "
                onClick={() => setToggle(false)}
              />
            ) : (
              <HiMenuAlt3
                alt="menu-icon"
                className="w-[38px]  h-[38px] object-contain"
                onClick={() => setToggle((prev) => !prev)}
              />
            )}

            {toggle && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className={`${
                  toggle ? "block" : "hidden"
                } bg-white p-6 bg-DarkBlueMb z-50 absolute top-[70px] left-0 right-0  w-full `}
              >
                <ul className="list-none  flex justify-end items-start flex-1 flex-col ">
                  {links.map((nav, index) => (
                    <li
                      key={nav.id}
                      className={`font-poppins font-medium cursor-pointer text-[18px] w-full  ${
                        index === links.length - 1
                          ? "mb-0"
                          : "mb-4 border-b-2 border-Dark pb-4"
                      }`}
                    >
                      <a href={`#${nav.url}`} className="">
                        {nav.text}
                      </a>
                    </li>
                  ))}
                </ul>

                <Button
                  text={"Let's Talk"}
                  styles={
                    " bg-Blue mt-6 rounded-[150px] text-[20px] uppercase p-[18px] w-full text-center text-white"
                  }
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
