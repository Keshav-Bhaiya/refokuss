import React from "react";
import { motion } from "framer-motion";

function Marque({ imagesurls, direction }) {
  return (
    <div className="flex gap-x-6 md:gap-x-10 w-full overflow-hidden">
      {[0, 1].map((repeat) => (
        <motion.div
          key={repeat}
          initial={{ x: direction === "left" ? "0" : "-100%" }}
          animate={{ x: direction === "left" ? "-100%" : "0" }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="flex flex-shrink-0 gap-6 md:gap-10 py-4 md:py-8"
        >
          {imagesurls.map((url, index) => (
            <img
              key={index}
              src={url}
              className="bg-white px-2 md:px-3 rounded-md ml-1 md:ml-2 py-1 w-20 h-8 md:w-32 md:h-12 object-contain"
              alt="brand"
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
}

export default Marque;