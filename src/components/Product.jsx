import React from "react";
import Button from "./Button";

function Product({val,mover,count}){
  return(
    <div className="w-full h-[22rem] py-8 md:py-20 text-white px-4 md:px-0">
      <div 
        onMouseEnter={()=>{mover(count)}}
        className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-0">
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium capitalize leading-tight">
          {val.title}
        </h1>
        
        {/* Details section */}
        <div className="dets w-full lg:w-1/3">
          <p className="mb-6 md:mb-9 text-sm md:text-base leading-relaxed">
            {val.description}
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {val.live && <Button/>}
            {val.case && <Button title='Case Study'/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;