import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

function Work(){

  const [images,setImages] = useState([
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66604e0d857f7c9ad5783963_LayoutLand.webp",top:"42%",left:"50%",isActive:false},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66604dbc2f9f1e59735cd132_Webflow%20Blog-p-800.webp",top:"56%",left:"45%",isActive:false},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67ac9747e14642e8cf77f8a2_TTR-thumbnail_B-4_3.webp",top:"45%",left:"60%",isActive:false},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67ac977131a3e7e657eb8d96_LayoutLand-thumbnail_B-4_3.webp",top:"54%",left:"55%",isActive:false},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/667d02fb16c72fb2772b1470_0_2-p-500.webp",top:"60%",left:"50%",isActive:false},

  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change",(data)=>{
    
    function imagesShow(arr){
      setImages(prev =>(
        prev.map((item,index)=>(
          arr.indexOf(index) === -1?(
            {...item,isActive:false}
          )
          :{
            ...item,isActive:true
          }
        ))
      ))
    }

    switch(Math.floor(data*100)){
        case 0:
          imagesShow([]);
        break;
        case 1:
          imagesShow([0]);
        break;
        case 2:
          imagesShow([0,1]);
        break;
        case 3:
          imagesShow([0,1,2]);
        break;
        case 4:
          imagesShow([0,1,2,3]);
        break;
        case 5:
          imagesShow([0,1,2,3,4]);
        break;
    }
  })



  return(
    <div className="w-full mt-12  ">
      <div className="relative max-w-screen-xl mx-auto text-center ">
      <h1 className="text-[31vw] leading-none  font-medium select-none tracking-tight ">work</h1>
      <div className=" absolute top-0 w-full h-full ">
        {images.map((elem,index)=>
          (elem.isActive && ( 
          <img key={index}
           className="w-56 absolute rounded-lg -translate-x-[50%] -translate-y-[40%] " 
           src={elem.url} 
           style={{top:elem.top,left:elem.left}}
           alt="" />
            )
            ))}
      </div>
      </div>
      
    </div>
  )
}

export default Work;