import React from "react";

const Link = ({ path, label }) => {
  return (
    <a
      href={path}
      className="relative group text-inherit font-medium hover:text-[#F9BF29] duration-300"
    >
      {label}
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#F9BF29] transition-all group-hover:w-full duration-300"></span>
    </a>
  );
};

export default Link;
