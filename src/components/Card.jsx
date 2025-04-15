import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
 
function Card({width,start,para,hover="false"}){
  
  return(
    <motion.div whileHover={{backgroundColor: hover === "true" && "#7443ff",padding:"0.2px"}} className={`bg-zinc-600 py-4 rounded-xl  ${width} min-h-[55vh] flex flex-col justify-between `}>
      <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h3 className="text-white p-2">one heading</h3>
        < IoIosArrowRoundForward/>
      </div>
     <h1 className="text-white p-2 text-3xl font-medium mt-5">whatever heading.</h1>
      </div>
      <div className="down w-full  ">
        {
          start === true && (
            <>
            <h1 className="text-7xl font-semibold text-white tracking tight leading-none p-2 ">start a project</h1>
            <button className="rounded-full py-2 px-4 mt-4 border-[1px] border-zinc-50 text-white">Contact Us</button>
            </>
          ) 
        }
        {
          para && (
            <p className="text-white text-sm font-medium mt-3 p-2">Lorem ipsum dolor sit amet consectetur.</p>
          )
        }
        
      </div>
    </motion.div>
  )
}
export default Card;