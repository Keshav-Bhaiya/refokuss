import React from "react";

function Stripe({val}){
  return(
    <div className="h-15 w-[16.66%]  px-4 py-3 border-t-[1.5px] border-r-[1.5px] border-b-[1.5px] border-zinc-600 flex justify-between items-center text-white ">
      <img className="bg-zinc-200  pl-1 mr-[6px] " src={val.url} alt="" />
      <span className="font-semibold">{val.number}</span>
    </div>
  )
}
export default Stripe;