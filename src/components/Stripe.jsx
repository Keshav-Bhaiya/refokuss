import React from "react";

function Stripe({ val }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 h-16 px-2 sm:px-4 py-2 sm:py-3 border-t border-r border-b border-zinc-600 flex justify-between items-center text-white">
      <img className="bg-zinc-200 pl-1 mr-2 w-30 sm:w-42 h-auto object-contain" src={val.url} alt="" />
      <span className="font-semibold text-base sm:text-lg">{val.number}</span>
    </div>
  );
}
export default Stripe;