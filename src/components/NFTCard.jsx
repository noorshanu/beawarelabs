import React from 'react'
import { VscVerifiedFilled } from 'react-icons/vsc'
import { BiRefresh } from 'react-icons/bi'
const NFTCard = () => {
  return (
    <div className="rounded-lg bg-[#0e1f2a]">
      <img
        src="https://i.seadn.io/gcs/files/0cc3bdd1c1755e4d462724e345a5026d.png?w=350&auto=format"
        className="w-full rounded-md"
      />
      <div className="p-2 space-y-1">
        <p className="text-[10px] text-white text-center flex justify-center items-center">
          reepz <VscVerifiedFilled />
        </p>
        <p className="text-lg font-bold text-white text-center flex justify-center items-center">
          <BiRefresh /> 184
        </p>
        <button className="rounded-full text-[0.8rem] font-bold text-white bg-[#0087ff] w-full flex justify-center items-center py-1.5">
          Enter Now
        </button>
        <p className="text-[11px] mt-1 font-extrabold text-gray-600 text-center ">
          JOIN <span className="font-bold text-white mx-0.5">1</span> METAWINNER
        </p>
      </div>
    </div>
  )
}

export default NFTCard
