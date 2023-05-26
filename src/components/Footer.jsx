import React from 'react'

let navLinks = {
  Products: [
    'Blast API',
    'Faucets',
    'Snapshots',
    'App Chains',
    'Validators',
    'Bridge Operators',
  ],
  'Bware Labs': ['About us', 'Team', 'Advisors', 'Careers', 'Community'],
  Resources: [
    'Blog',
    'Documentation',
    'Brand Assets',
    'Privacy Policy',
    'Terms',
  ],
  Contact: ['General', 'Sales', 'Marketing', 'Validators Team'],
}

let socialLinks = [
  {
    link: 'https://www.discord.com/',
    label: 'Twitter',
  },
  {
    link: 'https://www.telegram.com/',
    label: 'Telegram',
  },
  {
    link: 'https://www.docs.com/',
    label: 'Discord',
  },
  {
    link: 'https://www.twitter.com/',
    label: 'Medium',
  },
  {
    link: 'https://www.twitter.com/',
    label: 'LinkedIn',
  },
  {
    link: 'https://www.twitter.com/',
    label: 'Facebook',
  },
  {
    link: 'https://www.twitter.com/',
    label: 'GitHub',
  },
]

const FooterCard = ({label}) => {
  return (
    <div className="w-40 footerBox text-base h-24 rounded-xl p-3 flex cursor-pointer hover:text-[#fdb913] flex-col group items-center bg-[#313131]">
      <img src="/assets/icons/twitter.svg" className=" mb-1 " />
      {label}
    </div>
  )
}
const Footer = () => {
  return (
    <div className=" ">
      <div className="mx-auto max-w-[87rem] px-3  mt-20 py-8 ">
      <div className="flex gap-4 sm:gap-7  md:gap-10 flex-wrap justify-center">
        {socialLinks.map((e)=>{
          return  <FooterCard label={e.label}/>
        })}
      
      </div>

        <div className="h-[1px] w-full bg-white my-14 bg-opacity-40" />
        <div className="lg:gap-x-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6  gap-y-9">
          <div className="lg:col-span-2  sm:col-span-2 col-span-2 mr-10 hidden lg:flex flex-col items-start">
            <div className="w-[90%] mx-auto flex flex-col self-start">
              <img src="/assets/logo.svg" className="sm:w-64   h-auto" alt="" />

              <div className="text-[#dfe0df] ml-12 text-sm">
                © Bware Labs 2023
              </div>
            </div>
            <div className="my-10 w-[90%] font-normal leading-7 text-gray-300">
              <p className="text-[#a8a9a8] font-bold">
                Sign up for our newsletter
              </p>
              <div
                className={`bg-[#fff] rounded-lg w-full h-12 py-3 pr-1.5 pl-4 mt-2 flex justify-between items-center`}
              >
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="bg-transparent border-none outline-none w-[70%] text-black text-sm"
                />
                <button className="bg-[#313131] rounded-md text-white font-barlow font-medium text-sm py-2 px-3 cursor-pointer ">
                  -{'>'}
                </button>
              </div>
            </div>
          </div>
          {Object.keys(navLinks).map((e) => {
            return (
              <div
                className="space-y-2 text-white sm:mx-auto flex flex-col  lg:items-start items-center"
                data-aos="fade-right"
                data-aos-duration="2200"
              >
                <h1 className="text-base font-bold font-orbitron opacity-70">
                  {e}
                </h1>
                {navLinks[e].map((i) => {
                  return <h2 className="text-base font-pop opacity-60">{i}</h2>
                })}
              </div>
            )
          })}
        </div>
        <div className="mx-auto flex mt-20 lg:hidden flex-col items-center">
          <div className="justify-self-start  min-w-[300px] ">
            <img src="/assets/logo.svg" className="sm:w-64   h-auto" alt="" />

            <div className="text-[#dfe0df] ml-12 text-sm">
              © Bware Labs 2023
            </div>
          </div>
          <div className="my-5 max-w-xs font-normal leading-7 text-gray-300">
            <p className="text-[#a8a9a8] font-bold">
              Sign up for our newsletter
            </p>
            <div
              className={`bg-[#fff] rounded-lg w-full min-w-[300px] h-12 py-3 pr-1.5 pl-4 mt-2 flex justify-between items-center`}
            >
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-transparent border-none outline-none w-[70%] text-black text-sm"
              />
              <button className="bg-[#313131] rounded-md text-white font-barlow font-medium text-sm py-2 px-3 cursor-pointer ">
                -{'>'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
