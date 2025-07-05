import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";

function Button({ title = "Get Started", small }) {
  return (
    <div
      className={`${
        small
          ? "min-w-24 h-8 px-3 text-xs"
          : "min-w-38 h-7 px-4 text-sm"
      } bg-zinc-100 rounded-full text-black flex items-center justify-between`}
    >
      <span className="font-medium">{title}</span>
      <BsArrowReturnRight />
    </div>
  );
}

export default Button;