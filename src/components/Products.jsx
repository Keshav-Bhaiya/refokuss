import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products(){
  var products = [
    {title:"arqitel",description:"Arqu Executive and its products are available to customers and customers of the organization responsible  for the product it was nice and efficient in work",live:true,case:true},
    {title:"TTR",description:"TTR Executive and its products are available to customers and customers of the organization responsible  for the product it was nice and efficient in work",live:true,case:false},
    {title:"YIR 2022",description:"YIR Executive and its products are available to customers and customers of the organization responsible  for the product it was nice and efficient in work",live:true,case:true},
    {title:"Yahoo!",description:"Yahoo Executive and its products are available to customers and customers of the organization responsible  for the product it was nice and efficient in work",live:true,case:false},
  ];

  const [pos,setPos] = useState(0);
  const mover = (val)=>{
    setPos(val*22);
  }
 

  return(
    <div className="mt-20 relative">
      {products.map((val,index)=> <Product count={index} val={val} mover={mover}/>)}
      <div className="w-full pointer-events-none absolute top-0 h-full ">
        <motion.div initial={{y:pos}}
         animate={{y:pos+`rem`}}
         transition={{ease:[0.76,0,0.24,1],duration:0.6}}
         className="window absolute left-[27%] w-[31rem] h-[22rem] bg-white overflow-hidden">
        <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:0.5}} className=" w-full h-full bg-sky-100">
          <video className="w-full h-full object-cover" autoPlay muted  src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/arqitel-169.webm"></video>
        </motion.div>
        <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:0.5}} className=" w-full h-full bg-sky-300">
        <video className="w-full h-full object-cover" autoPlay muted  src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/ttr-169.webm"></video>
        </motion.div>
        <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:0.5}} className=" w-full h-full bg-sky-400">
        <video className="w-full h-full object-cover" autoPlay muted  src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/yir2022-169.webm"></video>
        </motion.div>
        <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:0.5}} className=" w-full h-full bg-sky-500">
        <video className="w-full h-full object-cover" autoPlay muted  src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/yahoo-169.webm"></video>
        </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Products;