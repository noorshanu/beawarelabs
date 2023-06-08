import React from "react";

const Hero = () => {
  return (
    <div className=" relative hero-bg ">
      <img  src="/assets/header.svg" className="h-full w-auto absolute top-0 left-0 bottom-0 opacity-0 sm:opacity-50 md:opacity-70"/>
    <div className="flex flex-col font-medium text-sm text-white justify-center items-center px-5 py-12 min-h-[700px]">
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
      <p className="flex items-center mt-10 text-white font-bold text-lg">
        <img src="/assets/icons/infura.svg" className="h-8 w-auto"/> 
        <span className="text-[#fdb913] mx-2">$INFRA Token </span>
        launch on  30/05/2023, 10:00 UTC
      </p>
      <div className="flex mt-5 w-full justify-center space-x-6">

        <div className="flex flex-col font-medium text-sm text-white items-center justify-between">
          <div className="timeBox mb-2 p-3 w-14 h-14 rounded-lg border-[0.5px] flex justify-center items-center text-3xl text-[#fdb913] border-white">
            3
          </div>
          DAYS
        </div>
        <div className="flex flex-col font-medium text-sm text-white items-center justify-between">

          <div className="timeBox mb-2 p-3 w-14 h-14 rounded-lg border-[0.5px] flex justify-center items-center text-3xl text-[#fdb913] border-white">
            23
          </div>
          HOURS
        </div>
        <div className="flex flex-col font-medium text-sm text-white items-center justify-between">

          <div className="timeBox mb-2 p-3 w-14 h-14 rounded-lg border-[0.5px] flex justify-center items-center text-3xl text-[#fdb913] border-white">
            0
          </div>
          MINUTES
        </div>
        <div className="flex flex-col font-medium text-sm text-white items-center justify-between">

          <div className="timeBox mb-2 p-3 w-14 h-14 rounded-lg border-[0.5px] flex justify-center items-center text-3xl text-[#fdb913] border-white">
            1
          </div>
          SECONDS
        </div>
      </div>
      <div className="bg-[#fdb913] mt-5 w-60 text-black font-medium cursor-pointer py-1 text-center rounded-md">Learn more about INFRA Token</div>
      
    </div>
    <img  src="/assets/header.svg" className="h-full w-auto rotate-180  absolute top-0 right-0 bottom-0 opacity-0 sm:opacity-50 md:opacity-70"/>

    </div>

  );
};

export default Hero;
