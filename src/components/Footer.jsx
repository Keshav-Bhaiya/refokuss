import React from "react";

function Footer(){
  return(
    <div className="w-full mt-10">
      <div className="max-w-screen-xl mx-auto flex gap-30 py-10">
        <div className="basis-1/2">
        <h1 className="text-white text-[11rem] font-semibold leading-none tracking-tight">refokus.</h1>
        </div>
        <div className="basis-1/2 flex gap-4">
        <div className="basis-1/3">
          <h4 className="mb-10 text-zinc-400 capitalize">socials</h4>
          {["instagram","twitter (X?)","LinkedIn"].map((item,index)=> 
          <a key={index} className='block mt-3 text-zinc-600 capitalize'>{item}</a>)}
        </div>
        <div className="basis-1/3">
          <h4 className="mb-10 text-zinc-400 capitalize ">sitemap</h4>
          {["home","work","careers","contact"].map((item,index)=> 
          <a key={index} className='block mt-3 text-zinc-600 capitalize'>{item}</a>)}
        </div>
        <div className="text-white text-sm basis-1/2 flex flex-col items-end ">
          <p className="text-right">Refkous is a pioneering digital agency driven by design and empowered by technology</p>
          <img className="w-45 h-8 mt-10" src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" alt="" />
        </div>
        </div>

      </div>
    </div>
  )
}

export default Footer;