import React from "react";

let navLinks = {
  "My Account": ["Author Profile", "Create Item", "Collection", "Edit Profile"],
  Resources: ["Help Center", "Partner", "Community", "Activity"],
  Company: ["About", "Career", "Ranking", "Contact Us"],
};

let socialLinks = [
  {
    link: "https://www.discord.com/",
    label: "discord",
  },
  {
    link: "https://www.telegram.com/",
    label: "telegram",
  },
  {
    link: "https://www.docs.com/",
    label: "docs",
  },
  {
    link: "https://www.twitter.com/",
    label: "twitter",
  },
];
const Footer = () => {
  return (
    <div className=" ">

    <div className="mx-auto max-w-7xl px-3  mt-20 py-8 " >
      <div className="lg:gap-x-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7  gap-y-9">
        <div className="lg:col-span-4 md:col-span-3 sm:col-span-2 col-span-1 mr-10">
          <img src="/assets/logo.svg" className="" alt="" />
          <div className="my-10 max-w-xs font-normal leading-7 text-gray-300" >
            Our community is building a comprehsnive decentralized betting
            platform for the future of finance. join us!
          </div>
          <div className="flex items-center space-x-3" >
            {socialLinks.map((e) => (
              <div className="h-4 w-4  cursor-pointer text-white hover:text-[#e250e5]">
                <img
                  src={`/assets/icons/${e.label}.svg`}
                  className="h-5 w-auto" alt=""
                />
              </div>
            ))}
          </div>
        </div>
        {Object.keys(navLinks).map((e) => {
          return (
            <div className="space-y-4 text-white sm:mx-auto hidden sm:flex flex-col" data-aos="fade-right" data-aos-duration="2200">
              <h1 className="text-lg font-medium mb-8 font-orbitron">{e}</h1>
              {navLinks[e].map((i) => {
                return (
                  <h2 className="text-sm font-light font-pop opacity-60">
                    {i}
                  </h2>
                );
              })}
            </div>
          );
        })}
      </div>
 
    </div>
    </div>
  );
};

export default Footer;