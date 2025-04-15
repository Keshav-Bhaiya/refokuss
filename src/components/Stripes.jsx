import React from "react";
import Stripe from "./Stripe";

function Stripes(){
  var data=[
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88f5_660191f0bd52de169c0dbc94_Logo-black.svg",number:48},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8e7a169e0b41018de63_Intesneye-logo-black.svg",number:2},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67461a791f752d7eb2b20280_Keystone-black.svg",number:11},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88f5_660191f0bd52de169c0dbc94_Logo-black.svg",number:48},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8e7a169e0b41018de63_Intesneye-logo-black.svg",number:2},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67461a791f752d7eb2b20280_Keystone-black.svg",number:11},
  ]
  return(
    <div className="flex items-center mt-16">
      {data.map((elem,index)=>(
        <Stripe key={index} val={elem}/>
      ))}
    </div>
  )
}
export default Stripes;