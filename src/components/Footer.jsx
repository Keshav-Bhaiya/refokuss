import React from "react";

function Footer() {
  return (
    <div className="w-full mt-10">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-10 md:gap-30 py-8 md:py-10 px-4">
        <div className="md:basis-1/2 flex flex-col items-start">
          <h1 className="text-white text-5xl sm:text-7xl md:text-[11rem] font-semibold leading-none tracking-tight mb-6 md:mb-0">
            refokus.
          </h1>
        </div>
        <div className="md:basis-1/2 flex flex-col md:flex-row gap-8 md:gap-4">
          <div className="md:basis-1/3">
            <h4 className="mb-6 md:mb-10 text-zinc-400 capitalize">socials</h4>
            {["instagram", "twitter (X?)", "LinkedIn"].map((item, index) => (
              <a key={index} className="block mt-3 text-zinc-600 capitalize">
                {item}
              </a>
            ))}
          </div>
          <div className="md:basis-1/3">
            <h4 className="mb-6 md:mb-10 text-zinc-400 capitalize">sitemap</h4>
            {["home", "work", "careers", "contact"].map((item, index) => (
              <a key={index} className="block mt-3 text-zinc-600 capitalize">
                {item}
              </a>
            ))}
          </div>
          <div className="text-white text-sm md:basis-1/2 flex flex-col items-end md:items-end  md:mt-0 w-full">
            <div className="flex flex-col w-full md:items-end">
              
              <p className="md:text-right mt-4">
                Refkous is a pioneering digital agency driven by design and empowered by technology
              </p>
              <img
                className="w-32 h-8 mt-6 md:w-45 md:h-8 md:mt-10 self-start md:self-end"
                src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;