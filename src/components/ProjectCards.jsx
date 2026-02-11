import React from "react";

const ProjectCards = ({ image, name }) => {
  return (
    <>
      <a
        href="#"
        className="relative shadow-2xl rounded-2xl w-full min-w-[340px] lg:min-w-xl h-64 lg:h-96 block overflow-hidden group"
      >
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 scale-110"
        />
        <span className="absolute top-4 right-4 bg-black text-white border-[1px] border-white uppercase leading-[1.4] font-heading px-5 py-1 rounded-full text-sm lg:text-lg">
          {name}
        </span>
      </a>
    </>
  );
};

export default ProjectCards;
