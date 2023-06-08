import React from 'react'

const AirdropSidebar = () => {
  return (
    <div className="w-[20vw]  fixed invisible md:visible top-[70px] right-0 bottom-0 left-[80vw] bg-black  h-full ">
        <div className="h-[calc(100vh-70px)] relative w-full  ">
          <div className="absolute inset-0 backdrop:blur-3xl">
            <button className="bg-blue-400  cursor-pointer hover:border-white transition-all border-[#017794] border-2 rounded-full py-2 px-3 text-white font-bold text-lg mt-10 ">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
  )
}

export default AirdropSidebar