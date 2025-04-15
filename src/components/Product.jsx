import React from "react";
import Button from "./Button";

function Product({val,mover,count}){
  return(
    <div className="w-full h-[22rem] py-20 text-white">
      <div onMouseEnter={()=>{mover(count)}} className="max-w-screen-xl mx-auto flex items-center justify-between ">
        <h1 className="text-6xl font-medium capitalize ">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-9">{val.description}</p>
          <div className="flex items-center gap-3 ">
          {val.live && <Button/>}
          {val.case && <Button title='Case Study'/>}</div>
          
          
        </div>
      </div>
    </div>
  )
}

export default Product;