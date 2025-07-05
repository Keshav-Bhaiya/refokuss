import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products(){
  var products = [
    {title:"arqitel",description:"Arqu Executive and its products are available to customers and customers of the organization responsible for the product it was nice and efficient in work",live:true,case:true},
    {title:"TTR",description:"TTR Executive and its products are available to customers and customers of the organization responsible for the product it was nice and efficient in work",live:true,case:false},
    {title:"YIR 2022",description:"YIR Executive and its products are available to customers and customers of the organization responsible for the product it was nice and efficient in work",live:true,case:true},
    {title:"Yahoo!",description:"Yahoo Executive and its products are available to customers and customers of the organization responsible for the product it was nice and efficient in work",live:true,case:false},
  ];

  const [pos,setPos] = useState(0);
  
  const mover = (val)=>{
    setPos(val*22);
  }

  return(
    <div className="mt-10 md:p-0 p-3  md:mt-20 relative">
      {products.map((val,index)=> <Product key={index} count={index} val={val} mover={mover}/>)}
      
      {/* Video window - responsive for all screen sizes */}
      <div className="w-full pointer-events-none absolute top-0 h-full">
        <motion.div 
          initial={{y:pos}}
          animate={{y:pos+`rem`}}
          transition={{ease:[0.76,0,0.24,1],duration:0.6}}
          className="window absolute 
                     right-4 top-16 w-48 h-32
                     sm:right-6 sm:top-20 sm:w-56 sm:h-36
                     md:right-8 md:top-24 md:w-64 md:h-40
                     lg:left-[27%] lg:right-auto lg:top-0 lg:w-[31rem] lg:h-[22rem]
                     bg-white overflow-hidden rounded-lg lg:rounded-none">
          
          {/* Video 1 - Arqitel */}
          <motion.div 
            animate={{y:-pos+`rem`}} 
            transition={{ease:[0.76,0,0.24,1],duration:0.5}} 
            className="w-full h-32 sm:h-36 md:h-40 lg:h-[22rem] bg-sky-100">
            <video className="w-full h-full object-cover" autoPlay muted loop playsInline src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/arqitel-169.webm"></video>
          </motion.div>
          
          {/* Video 2 - TTR */}
          <motion.div 
            animate={{y:-pos+`rem`}} 
            transition={{ease:[0.76,0,0.24,1],duration:0.5}} 
            className="w-full h-32 sm:h-36 md:h-40 lg:h-[22rem] bg-sky-300">
            <video className="w-full h-full object-cover" autoPlay muted loop playsInline src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/ttr-169.webm"></video>
          </motion.div>
          
          {/* Video 3 - YIR 2022 */}
          <motion.div 
            animate={{y:-pos+`rem`}} 
            transition={{ease:[0.76,0,0.24,1],duration:0.5}} 
            className="w-full h-32 sm:h-36 md:h-40 lg:h-[22rem] bg-sky-400">
            <video className="w-full h-full object-cover" autoPlay muted loop playsInline src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/yir2022-169.webm"></video>
          </motion.div>
          
          {/* Video 4 - Yahoo */}
          <motion.div 
            animate={{y:-pos+`rem`}} 
            transition={{ease:[0.76,0,0.24,1],duration:0.5}} 
            className="w-full h-32 sm:h-36 md:h-40 lg:h-[22rem] bg-sky-500">
            <video className="w-full h-full object-cover" autoPlay muted loop playsInline src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/yahoo-169.webm"></video>
          </motion.div>
          
        </motion.div>
      </div>
    </div>
  )
}

export default Products;