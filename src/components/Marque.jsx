import React from "react";
import { motion } from "framer-motion";



function Marque({imagesurls ,direction}){
  return(
    <div className="flex gap-x-10 w-full overflow-hidden">
      <motion.div initial={{x:direction === 'left' ? "0" :"-100%"}}
       animate={{x: direction === "left" ? "-100%" : "0"}}
        transition={{ease:"linear",duration:20,repeat:Infinity}}
         className="flex flex-shrink-0 gap-10 py-8 ">
        {imagesurls.map((url,index)=>(<img key={index} src={url} className="bg-white  px-3 rounded-md ml-2 py-1"/>))}
        </motion.div>   
        <motion.div initial={{x:direction === 'left' ? "0" :"-100%"}}
       animate={{x: direction === "left" ? "-100%" : "0"}}
        transition={{ease:"linear",duration:20,repeat:Infinity}}
         className="flex flex-shrink-0 gap-10 py-8 ">
        {imagesurls.map((url,index)=>(<img key={index} src={url} className="bg-white  px-3 rounded-md ml-2 py-1"/>))}
        </motion.div> 
        
           
    </div>
  )
}

export default Marque;