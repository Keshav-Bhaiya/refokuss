import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";

function Button({title="Get Started"}){
  return(
    <div className="min-w-38 h-7 px-4  bg-zinc-100 rounded-full text-black flex items-center justify-between ">
      <span className="text-sm font-medium">{title}</span>
      <BsArrowReturnRight/>
    </div>
  )
}

export default Button;