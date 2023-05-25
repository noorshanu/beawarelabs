import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-12 min-h-[85vh]">
      <h1 className="sm:text-6xl text-5xl md:text-8xl font-orbitron font-semibold text-center text-white">
        Empowering
      </h1>
      <h1 className="sm:text-4xl mt-3 text-3xl md:text-6xl font-orbitron font-semibold text-center text-white">
        <span className="text-[#fdb913]"> Web3 </span> Development
      </h1>

      <p className="mt-12 text-white text-lg max-w-2xl text-center">
        Bware Labs aims to tackle Web3 challenges and boost global adoption by
        offering the industry's highest-performance and most reliable
        infrastructure services and development tools.
      </p>
      <div className="flex mt-12 w-full justify-center"></div>
    </div>
  );
};

export default Hero;
