import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para, hover = "false" }) {
  return (
    <motion.div
      whileHover={{ backgroundColor: hover === "true" && "#7443ff", padding: "0.2px" }}
      className={`bg-zinc-600 py-4 rounded-xl ${width} min-h-[40vh] md:min-h-[55vh] flex flex-col justify-between transition-all duration-300`}
    >
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <h3 className="text-white p-2 text-base md:text-lg">one heading</h3>
          <IoIosArrowRoundForward className="text-xl md:text-2xl" />
        </div>
        <h1 className="text-white p-2 text-2xl md:text-3xl font-medium mt-3 md:mt-5">whatever heading.</h1>
      </div>
      <div className="down w-full">
        {start === true && (
          <>
            <h1 className="text-3xl md:text-7xl font-semibold text-white tracking-tight leading-none p-2">
              start a project
            </h1>
            <button className="rounded-full ml-1 py-2 px-4 mt-4 border border-zinc-50 text-white text-sm md:text-base">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-white text-sm md:text-base font-medium mt-3 p-2">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        )}
      </div>
    </motion.div>
  );
}
export default Card;